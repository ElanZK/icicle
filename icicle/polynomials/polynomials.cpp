#pragma once // TODO Yuval remove this

#include "polynomials.h"

namespace polynomials {

  template <typename C, typename D, typename I>
  Polynomial<C, D, I>::Polynomial()
  {
    // TODO Yuval: how to choose backend and context types
    m_context = std::make_unique<GPUPolynomialContext<C, D, I>>();
    m_backend = std::make_unique<GPUPolynomialBackend<C, D, I>>();
  }

  template <typename C, typename D, typename I>
  Polynomial<C, D, I> Polynomial<C, D, I>::from_coefficients(const C* coefficients, uint32_t nof_coefficients)
  {
    Polynomial P = {};
    P.m_context->init_from_coefficients(nof_coefficients, coefficients);
    return P;
  }

  template <typename C, typename D, typename I>
  Polynomial<C, D, I> Polynomial<C, D, I>::from_rou_evaluations(const I* evaluations, uint32_t nof_evaluations)
  {
    Polynomial P = {};
    P.m_backend->init_from_rou_evaluations(nof_evaluations, evaluations);
    return P;
  }

  template <typename C, typename D, typename I>
  Polynomial<C, D, I> Polynomial<C, D, I>::operator+(const Polynomial<C, D, I>& rhs) const
  {
    Polynomial<C, D, I> res = {};
    m_backend->add(*res.m_context.get(), *m_context.get(), *rhs.m_context);
    return res;
  }

  template <typename C, typename D, typename I>
  Polynomial<C, D, I> Polynomial<C, D, I>::operator-(const Polynomial<C, D, I>& rhs) const
  {
    Polynomial<C, D, I> res = {};
    m_backend->subtract(*res.m_context.get(), *m_context.get(), *rhs.m_context);
    return res;
  }

  template <typename C, typename D, typename I>
  std::pair<Polynomial<C, D, I>, Polynomial<C, D, I>> Polynomial<C, D, I>::divide(const Polynomial<C, D, I>& rhs) const
  {
    Polynomial<C, D, I> Q = {}, R = {};
    m_backend->divide(*Q.m_context.get(), *R.m_context.get(), *m_context.get(), *rhs.m_context.get());
    return std::make_pair(Q, R);
  }

  template <typename C, typename D, typename I>
  Polynomial<C, D, I>& Polynomial<C, D, I>::add_monomial_inplace(C monomial_coeff, uint32_t monomial) const
  {
    m_backend->add_monomial_in_place(*m_context.get(), monomial_coeff, monomial);
    return *this;
  }

  template <typename C, typename D, typename I>
  I Polynomial<C, D, I>::operator()(const D& x) const
  {
    return m_backend->evaluate(*m_context.get(), x);
  }

  template <typename C, typename D, typename I>
  int32_t Polynomial<C, D, I>::degree()
  {
    return m_backend->degree(*m_context.get());
  }

  template <typename C, typename D, typename I>
  C Polynomial<C, D, I>::get_coefficient(uint32_t idx) const
  {
    return m_backend->get_coefficient(*m_context.get(), idx);
  }

  template <typename C, typename D, typename I>
  uint32_t Polynomial<C, D, I>::get_coefficients(C* coeff) const
  {
    return m_backend->get_coefficients(*m_context.get(), coeff);
  }

} // namespace polynomials