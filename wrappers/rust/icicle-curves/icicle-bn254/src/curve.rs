#[cfg(feature = "arkworks")]
use ark_bn254::{g1::Config as ArkG1Config, Fq, Fr};
use icicle_core::curve::{Affine, Curve, Projective};
use icicle_core::field::Field;
use icicle_core::traits::{FieldConfig, FieldImpl, GenerateRandom};
use icicle_core::{impl_curve, impl_field, impl_scalar_field};
use icicle_cuda_runtime::device_context::{get_default_device_context, DeviceContext};

pub(crate) const SCALAR_LIMBS: usize = 4;
pub(crate) const BASE_LIMBS: usize = 4;

impl_scalar_field!("bn254", SCALAR_LIMBS, ScalarField, ScalarCfg, Fr);
impl_field!(BASE_LIMBS, BaseField, BaseCfg, Fq);
impl_curve!("bn254", CurveCfg, ScalarField, BaseField);

#[cfg(test)]
mod tests {
    use super::{CurveCfg, BASE_LIMBS};
    use icicle_core::curve::Curve;
    use icicle_core::impl_curve_tests;
    use icicle_core::tests::*;
    use icicle_core::traits::FieldImpl;

    impl_curve_tests!(BASE_LIMBS, CurveCfg);
}
