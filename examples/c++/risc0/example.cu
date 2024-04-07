
#include <iostream>
#define CURVE_ID 1
#include "curves/curve_config.cuh"
#include "polynomials/polynomials.h"
#include "polynomials/polynomials_c_api.h"
#include "polynomials/cuda_backend/polynomial_cuda_backend.cuh"
#include "appUtils/ntt/ntt.cuh"
#include "appUtils/poseidon/poseidon.cu"
#include "appUtils/tree/merkle.cu"
using namespace curve_config;
using namespace polynomials;
using namespace poseidon;
using namespace merkle;

// define the polynomial type
typedef Polynomial<scalar_t> Polynomial_t;

// Merkle tree arity
#define A 2
#define T (A + 1)

// RISC-V register type
typedef int64_t rv_t;

// We use Finite Fields instead of RISC-V registers

void to_ff(rv_t* rv, scalar_t* s, size_t n) {
  for (int i = 0; i < n; ++i) {
    s[i] = scalar_t::from(rv[i]);
  }
}


void print_vector(scalar_t* v, size_t n) {
  for (int i = 0; i < n; ++i) {
    std::cout << i << ": " << v[i] << std::endl;
  }
}


void compute_value_constraint(
  scalar_t* data,
  scalar_t value,
  scalar_t* control,
  scalar_t* constraint, 
  size_t n
  ) 
{
  // data[?] - value returns 0 when the value loaded into the program matches the asserted input/output
  // control returns 0 when we aren't enforcing this rule.
  // The product of these two terms returns 0 at each row of the original trace.
  for (int i = 0; i < n; ++i) {
    constraint[i] = (data[i] - value) * control[i];
  }
  return;
}

void compute_fib_constraint(
  scalar_t *d1, 
  scalar_t *d2,
  scalar_t *d3,
  scalar_t *c1,
  scalar_t *c2,
  scalar_t *c3,
  scalar_t *constraint,
  int n
  ) 
{
  // d3 - d2 - d1 returns 0 when the fibonacci addition relation holds.
  // c1 + c2 + c3 returns 0 when we aren't enforcing this rule.
  // The product of these two terms returns 0 at each row of the original trace.
  for (int i = 0; i < n; ++i) {
    constraint[i] = (d3[i] - d2[i] - d1[i]) * (c1[i] + c2[i] + c3[i]);
  }
  return;
}

        
int main(int argc, char** argv)
{

  std::cout << "This is a ICICLE C++ implementation of the STARK by Hand Explainer." << std::endl;
  std::cout << "https://dev.risczero.com/proof-system/stark-by-hand" << std::endl;

  const int logn=3;
  const int n = 1 << logn;

  std::cout << std::endl << "1. Initialize ICICLE" << std::endl;
  std::cout << "NTT" << std::endl;
  static const int MAX_NTT_LOG_SIZE = 24;
  auto ntt_config = ntt::DefaultNTTConfig<scalar_t>();
  const scalar_t basic_root = scalar_t::omega(MAX_NTT_LOG_SIZE);
  ntt::InitDomain(basic_root, ntt_config.ctx);
  std::cout << "Polynomials" << std::endl;
  // Virtual factory design pattern: initializing polynomimals factory for CUDA backend
  Polynomial_t::initialize(std::make_unique<CUDAPolynomialFactory<>>());
  // Initialize Poseidon
  std::cout << "Poseidon" << std::endl;
  device_context::DeviceContext ctx = device_context::get_default_device_context();
  PoseidonConstants<scalar_t> constants;
  init_optimized_poseidon_constants<scalar_t>(A, ctx, &constants);


  std::cout << std::endl << "2. Generate execution trace data" << std::endl; 
  // Trace: Data Columns
  rv_t rv_d1_trace[] = {24, 30, 54,  84, 78, 15, 29, 50};
  rv_t rv_d2_trace[] = {30, 54, 84,  138, 2, 77, 21, 36};
  rv_t rv_d3_trace[] = {54, 84, 138, 222, 71, 17, 92, 33};

  scalar_t d1_trace[n], d2_trace[n], d3_trace[n];

  to_ff(rv_d1_trace, d1_trace, n);
  to_ff(rv_d2_trace, d2_trace, n);
  to_ff(rv_d3_trace, d3_trace, n);

  std::cout << "d1 trace" << std::endl;
  for (int i = 0; i < n; ++i) {
    std::cout << i << ": " << d1_trace[i] << std::endl;
  }



  // Trace: Control Columns
  // Init steps are flagged in c1_trace
  // Computation steps are flagged in c2_trace
  // Termination step is flagged in c3_trace
  // 0s at the end of each control column correspond to the padding of the trace

  rv_t rv_c1_trace[] = {1, 0, 0, 0, 0, 0, 0, 0};
  rv_t rv_c2_trace[] = {0, 1, 1, 1, 0, 0, 0, 0};
  rv_t rv_c3_trace[] = {0, 0, 0, 1, 0, 0, 0, 0};

  scalar_t c1_trace[n], c2_trace[n], c3_trace[n];
  to_ff(rv_c1_trace, c1_trace, n);
  to_ff(rv_c2_trace, c2_trace, n);
  to_ff(rv_c3_trace, c3_trace, n);

  std::cout << "c1 trace" << std::endl;
  for (int i = 0; i < n; ++i) {
    std::cout << i << ": " << c1_trace[i] << std::endl;
  } 

  // We will construct a zero-knowledge proof that:
  // this trace represents a program that satisfies these 6 rules:
  //  1) Fibonacci words here
  //  2) d1_trace[0] == 24  (init 1 constraint)
  //  3) d2_trace[0] == 30  (init 2 constraint)
  //  4) d3_trace[3] == 28  (termination constraint)
  //  5) if c2_trace[i] == 1, then d2_trace[i] == d1_trace[i+1]
  //  6) if c2_trace[i] == 1, then d3_trace[i] == d2_trace[i+1}

  std::cout << "Lesson 4: Constructing Trace Polynomials" << std::endl;
  std::cout << std::endl << "3. Reconstruct polynomial from trace data" << std::endl;
  // d1_coeffs = np.array(intt(d1_trace, prime=_field_size))
  // d2_coeffs = np.array(intt(d2_trace, prime=_field_size))
  // d3_coeffs = np.array(intt(d3_trace, prime=_field_size))
  // c1_coeffs = np.array(intt(c1_trace, prime=_field_size))
  // c2_coeffs = np.array(intt(c2_trace, prime=_field_size))
  // c3_coeffs = np.array(intt(c3_trace, prime=_field_size))

  auto f = Polynomial_t::from_rou_evaluations(d1_trace, n);
  auto d = f.degree();

  auto d1_poly = Polynomial_t::from_rou_evaluations(d1_trace, n);
  auto d2_poly = Polynomial_t::from_rou_evaluations(d2_trace, n);
  auto d3_poly = Polynomial_t::from_rou_evaluations(d3_trace, n);
  auto c1_poly = Polynomial_t::from_rou_evaluations(c1_trace, n);
  auto c2_poly = Polynomial_t::from_rou_evaluations(c2_trace, n);
  auto c3_poly = Polynomial_t::from_rou_evaluations(c3_trace, n);

  // Evaluating Trace Polynomials over the powers of 5^12 would return the original trace data
  

  auto d1_degree = d1_poly.degree();
  std::cout << "Degree: " << d1_degree << std::endl;
  auto x = scalar_t::one();
  auto omega = scalar_t::omega(logn);
  for (int i = 0; i < n; ++i) {
    std::cout << "i: " << d1_poly(x) << " trace: " << d1_trace[i] << std::endl;
    x = x * omega;
  }

  std::cout << std::endl << "4. Generate Reed-Solomon traces" << std::endl;
  // Evaluating Trace Polynomials over the "expanded domain" gives a "trace block."

  scalar_t* codeword = new scalar_t[2*n];
  auto x2 = scalar_t::one();
  auto omega2 = scalar_t::omega(1+logn);

  scalar_t d1_trace_rs[4*n], d2_trace_rs[4*n], d3_trace_rs[4*n];
  scalar_t c1_trace_rs[4*n], c2_trace_rs[4*n], c3_trace_rs[4*n];

  auto omega_rs = scalar_t::omega(2+logn);
  auto x_rs = scalar_t::one();

  for (int i = 0; i < 4*n; ++i) {
    // codeword[i] = f(x2);
    // std::cout << i << " : " << codeword[i] << std::endl;
    // x2 = x2 * omega2;
    d1_trace_rs[i] = d1_poly(x_rs);
    d2_trace_rs[i] = d2_poly(x_rs);
    d3_trace_rs[i] = d3_poly(x_rs);
    c1_trace_rs[i] = c1_poly(x_rs);
    c2_trace_rs[i] = c2_poly(x_rs);
    c3_trace_rs[i] = c3_poly(x_rs);
    x_rs = x_rs * omega_rs;
  }

  for(int i = 0; i < 4*n; ++i) {
    std::cout << i << ": " << d1_trace_rs[i] << std::endl;
  }
  std::cout << "Note that every 4th entry matches the original trace data." << std::endl;
  std::cout << "This is a degree 4 Reed Solomon expansion of the original trace." << std::endl;

  std::cout << "Lesson 5: ZK Commitments of the Trace Data" << std::endl;
  std::cout << 'To maintain a zero-knowledge protocol, the trace polynomials are evaluated over a "zk commitment domain", {5^1, 5^4, ..., 5^94}.' << std::endl;
  std::cout << std::endl << "5. Reconstruct polynomial for the codeword" << std::endl;

  scalar_t d1_zkcommitment[4*n], d2_zkcommitment[4*n], d3_zkcommitment[4*n];
  scalar_t c1_zkcommitment[4*n], c2_zkcommitment[4*n], c3_zkcommitment[4*n];

  
  std::cout << std::endl << "6. Commit to the codeword polynomial" << std::endl;
  // scalar_t* commitment = new scalar_t[2*n];
  std::cout << "Evaluate with a shift " << std::endl;
  scalar_t xzk = basic_root;
  
  for (int i = 0; i < 4*n; ++i) {
    d1_zkcommitment[i] = d1_poly(xzk);
    d2_zkcommitment[i] = d2_poly(xzk);
    d3_zkcommitment[i] = d3_poly(xzk);
    c1_zkcommitment[i] = c1_poly(xzk);
    c2_zkcommitment[i] = c2_poly(xzk);
    c3_zkcommitment[i] = c3_poly(xzk);
    // std::cout << i << " : " << commitment[i] << std::endl;
    xzk = xzk * omega_rs;
  }

  std::cout << "These zk-commitment blocks do not share any evaluation points with the original trace data." << std::endl;
  for (int i = 0; i < 4*n; ++i) {
    std::cout << i << ": " << d1_zkcommitment[i] << std::endl;
  }
    
  std::cout << "Build Merkle Tree (TBD)" << std::endl;
  std::cout << "Lesson 6: Constraint Polynomials" << std::endl;
  std::cout << "The constraints are used to check the correctness of the trace. In this example, we check 6 rules to establish the validity of the trace." << std::endl;
  // Applying rule checks to trace blocks makes constraint blocks.
  // A constraint block has 0s in every 4th row -- these 0s indicate the passing of the various rulechecks.

  // Applying rule checks to zk-commitment trace blocks makes zk-commitment constraint blocks.
  // Similarly, applying rule checks to trace polynomials makes constraint polynomials.
  // In code, this happens in terms of trace blocks.


  scalar_t fib_constraint[n];
  compute_fib_constraint(d1_trace, d2_trace, d3_trace, c1_trace, c2_trace, c3_trace, fib_constraint, n);
  std::cout <<  "Applied to the original trace data, the constraint yields all 0s: " << std::endl;
  print_vector(fib_constraint,n);
  scalar_t fib_constraint_rs[4*n];
  compute_fib_constraint(d1_trace_rs, d2_trace_rs, d3_trace_rs, c1_trace_rs, c2_trace_rs, c3_trace_rs, fib_constraint_rs, 4*n);
  std::cout <<  "Applied to the Reed-Solomon expanded trace blocks, the constraint yields 0s in every 4th row: " << std::endl;
  print_vector(fib_constraint_rs,4*n);
  scalar_t fib_constraint_zkcommitment[4*n];
  compute_fib_constraint(d1_zkcommitment, d2_zkcommitment, d3_zkcommitment, c1_zkcommitment, c2_zkcommitment, c3_zkcommitment, fib_constraint_zkcommitment, 4*n);
  std::cout <<  "Applied to zk-commitment domain, no 0s" << std::endl;
  print_vector(fib_constraint_zkcommitment,4*n);
    
  // init1_constraint_columns = init1_constraint(trace_data)
  // init1_constraint_reedsolomonexpansion = init1_constraint(trace_reedsolomonexpansion)
  // init1_constraint_zkcommitment = init1_constraint(trace_zkcommitment)

  scalar_t init1_constraint[n];
  compute_value_constraint(d1_trace, scalar_t::from(24), c1_trace, init1_constraint, n);
  std::cout << "Original Init 1 constraint gives 0s" << std::endl;
  print_vector(init1_constraint, n);

  scalar_t init1_constraint_rs[4*n];
  compute_value_constraint(d1_trace_rs, scalar_t::from(24), c1_trace_rs, init1_constraint_rs, 4*n);
  std::cout << "Reed-Solomon expansion Init 1 constraint gives 0s in every 4th row" << std::endl;
  print_vector(init1_constraint_rs, 4*n);

  scalar_t init1_constraint_zkcommitment[4*n];
  compute_value_constraint(d1_zkcommitment, scalar_t::from(24), c1_zkcommitment, init1_constraint_zkcommitment, 4*n);
  std::cout << "ZK Commitment Init 1 constraint gives no 0s" << std::endl;
  print_vector(init1_constraint_zkcommitment, 4*n);

  scalar_t init2_constraint[n];
  compute_value_constraint(d2_trace, scalar_t::from(30), c1_trace, init2_constraint, n);
  std::cout << "Original Init 2 constraint gives 0s" << std::endl;
  print_vector(init2_constraint, n);

  scalar_t init2_constraint_rs[4*n];
  compute_value_constraint(d2_trace_rs, scalar_t::from(30), c1_trace_rs, init2_constraint_rs, 4*n);
  std::cout << "Reed-Solomon expansion Init 2 constraint gives 0s in every 4th row" << std::endl;
  print_vector(init2_constraint_rs, 4*n);

  scalar_t init2_constraint_zkcommitment[4*n];
  compute_value_constraint(d2_zkcommitment, scalar_t::from(30), c1_zkcommitment, init2_constraint_zkcommitment, 4*n);
  std::cout << "ZK Commitment Init 2 constraint gives no 0s" << std::endl;
  print_vector(init2_constraint_zkcommitment, 4*n);

  scalar_t termination_constraint[n];
  compute_value_constraint(d3_trace, scalar_t::from(222), c3_trace, termination_constraint, n);
  std::cout << "Original Termination constraint gives 0s" << std::endl;
  print_vector(termination_constraint, n);

  scalar_t termination_constraint_rs[4*n];
  compute_value_constraint(d3_trace_rs, scalar_t::from(222), c3_trace_rs, termination_constraint_rs, 4*n);
  std::cout << "Reed-Solomon expansion Termination constraint gives 0s in every 4th row" << std::endl;
  print_vector(termination_constraint_rs, 4*n);

  scalar_t termination_constraint_zkcommitment[4*n];
  compute_value_constraint(d3_zkcommitment, scalar_t::from(222), c3_zkcommitment, termination_constraint_zkcommitment, 4*n);
  std::cout << "ZK Commitment Termination constraint gives no 0s" << std::endl;
  print_vector(termination_constraint_zkcommitment, 4*n);

  // termination_constraint_columns = termination_constraint(trace_data)
  // termination_constraint_reedsolomonexpansion = termination_constraint(
  //     trace_reedsolomonexpansion
  // )
  // termination_constraint_zkcommitment = termination_constraint(trace_zkcommitment)

  // uint32_t tree_height = (logn + 1) + 1; // extra +1 for larger domain
  // size_t digests_len = get_digests_len<scalar_t>(tree_height, A);
  // // std::cout << "Digests length: " << digests_len << std::endl;
  // scalar_t* digests = new scalar_t[digests_len];
  // TreeBuilderConfig config = default_merkle_config<scalar_t>();
  // build_merkle_tree<scalar_t, T>(commitment, digests, tree_height, constants, config);
  // std::cout << "Root: " << digests[0] << std::endl;

  // std::cout << std::endl << "7. FRI Protocol (Commit Phase)" << std::endl;
  // const int m = 2*n;
  // std::cout << "Split" << std::endl;
  // scalar_t f0_coeffs[m] = {0};
  // scalar_t f0even_coeffs[m/2] = {0};
  // scalar_t f0odd_coeffs[m/2] = {0};
  // auto f0 = f2.clone();

  // auto cc = f0.copy_coefficients_to_host(f0_coeffs, 0, -1);
  // std::cout << "Coefficients: " << cc << std::endl;
  // for (int i = 0; i < m; ++i) {
  //   std::cout << i << ": " << f0_coeffs[i] << std::endl;
  // }
  // std::cout << "Merge" << std::endl;
  // for (int i = 0; i < m/2; ++i) {
  //   f0even_coeffs[i] = f0_coeffs[2*i];
  //   f0odd_coeffs[i] = f0_coeffs[2*i+1];
  //   // std::cout << i << ": even: " << f0even_coeffs[i] << std::endl;
  //   // std::cout << i << ": odd:  " << f0odd_coeffs[i] << std::endl;
  // }
  // auto f0even = Polynomial_t::from_coefficients(f0even_coeffs, m/2);
  // auto f0odd = Polynomial_t::from_coefficients(f0odd_coeffs, m/2);
  // verifier-provided randomness 
  // auto r1 = scalar_t::rand_host();
  // Round 1 polynomial
  // auto f1 = f0even + r1 * f0odd;
  // std::cout << std::endl << "8. FRI Protocol (Query Phase)" << std::endl;
  // std::cout << "Check for consistency" << std::endl;
  // scalar_t xp = scalar_t::rand_host();
  // scalar_t xm = scalar_t::zero() - xp;
  // auto rhs = (r1+xp)*f0(xp)*scalar_t::inverse(scalar_t::from(2)*xp) + (r1+xm)*f0(xm)*scalar_t::inverse(scalar_t::from(2)*xm);
  // auto lhs = f1(xp*xp);
  // std::cout << "rhs: " << rhs << std::endl << "lhs: " << lhs << std::endl;
  // if (lhs != rhs) {
  //   std::cout << "Error: Evaluations are not consistent" << std::endl;
  // } else {
  //   std::cout << "Evaluations are consistent" << std::endl;
  // }
  // auto d1 = f1.degree();
  // auto d0 = f0.degree();
  // std::cout << "Degree: " << d1 << ", degree before: " << d0 << std::endl;
  return 0;
}