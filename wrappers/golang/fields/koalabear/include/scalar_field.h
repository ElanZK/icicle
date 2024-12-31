#include <stdbool.h>

#ifndef _KOALABEAR_FIELD_H
#define _KOALABEAR_FIELD_H

#ifdef __cplusplus
extern "C" {
#endif

typedef struct scalar_t scalar_t;
typedef struct VecOpsConfig VecOpsConfig;

void koalabear_generate_scalars(scalar_t* scalars, int size);
int koalabear_scalar_convert_montgomery(const scalar_t* d_in, size_t n, bool is_into, const VecOpsConfig* ctx, scalar_t* d_out);
void koalabear_add(const scalar_t* a, const scalar_t* b, scalar_t* result);
void koalabear_sub(const scalar_t* a, const scalar_t* b, scalar_t* result);
void koalabear_mul(const scalar_t* a, const scalar_t* b, scalar_t* result);
void koalabear_inv(const scalar_t* a, scalar_t* result);

#ifdef __cplusplus
}
#endif

#endif