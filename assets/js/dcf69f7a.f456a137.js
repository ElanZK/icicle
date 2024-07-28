"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[453],{5680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>d});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(n),g=a,d=p["".concat(l,".").concat(g)]||p[g]||u[g]||i;return n?r.createElement(d,o(o({ref:t},m),{},{components:n})):r.createElement(d,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6715:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(8168),a=(n(6540),n(5680));n(1873);const i={},o="MSM",s={unversionedId:"icicle/rust-bindings/msm",id:"icicle/rust-bindings/msm",title:"MSM",description:"Example",source:"@site/docs/icicle/rust-bindings/msm.md",sourceDirName:"icicle/rust-bindings",slug:"/icicle/rust-bindings/msm",permalink:"/icicle/rust-bindings/msm",editUrl:"https://github.com/ingonyama-zk/icicle/tree/main/docs/icicle/rust-bindings/msm.md",tags:[],version:"current",lastUpdatedBy:"ChickenLover",lastUpdatedAt:1722155488,formattedLastUpdatedAt:"7/28/2024",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"Rust bindings",permalink:"/icicle/rust-bindings"},next:{title:"MSM Pre computation",permalink:"/icicle/rust-bindings/msm-pre-computation"}},l={},c=[{value:"Example",id:"example",level:2},{value:"MSM API Overview",id:"msm-api-overview",level:2},{value:"Parameters",id:"parameters",level:3},{value:"MSM Config",id:"msm-config",level:3},{value:"Usage",id:"usage",level:3},{value:"How do I toggle between the supported algorithms?",id:"how-do-i-toggle-between-the-supported-algorithms",level:2},{value:"How do I toggle between MSM modes?",id:"how-do-i-toggle-between-msm-modes",level:2},{value:"Parameters for optimal performance",id:"parameters-for-optimal-performance",level:2},{value:"Support for G2 group",id:"support-for-g2-group",level:2}],m={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"msm"},"MSM"),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},'use icicle_bn254::curve::{CurveCfg, G1Projective, ScalarCfg};\nuse icicle_core::{curve::Curve, msm, traits::GenerateRandom};\nuse icicle_cuda_runtime::{memory::HostOrDeviceSlice, stream::CudaStream};\n\nfn main() {\n    let size: usize = 1 << 10; // Define the number of points and scalars\n\n    // Generate random points and scalars\n    println!("Generating random G1 points and scalars for BN254...");\n    let points = CurveCfg::generate_random_affine_points(size);\n    let scalars = ScalarCfg::generate_random(size);\n\n    // Wrap points and scalars in HostOrDeviceSlice for MSM\n    let points_host = HostOrDeviceSlice::Host(points);\n    let scalars_host = HostOrDeviceSlice::Host(scalars);\n\n    // Allocate memory on the CUDA device for MSM results\n    let mut msm_results: HostOrDeviceSlice<\'_, G1Projective> = HostOrDeviceSlice::cuda_malloc(1).expect("Failed to allocate CUDA memory for MSM results");\n\n    // Create a CUDA stream for asynchronous execution\n    let stream = CudaStream::create().expect("Failed to create CUDA stream");\n    let mut cfg = msm::MSMConfig::default();\n    cfg.ctx.stream = &stream;\n    cfg.is_async = true; // Enable asynchronous execution\n\n    // Execute MSM on the device\n    println!("Executing MSM on device...");\n    msm::msm(&scalars_host, &points_host, &cfg, &mut msm_results).expect("Failed to execute MSM");\n\n    // Synchronize CUDA stream to ensure MSM execution is complete\n    stream.synchronize().expect("Failed to synchronize CUDA stream");\n\n    // Optionally, move results to host for further processing or printing\n    println!("MSM execution complete.");\n}\n')),(0,a.yg)("h2",{id:"msm-api-overview"},"MSM API Overview"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"pub fn msm<C: Curve>(\n    scalars: &HostOrDeviceSlice<C::ScalarField>,\n    points: &HostOrDeviceSlice<Affine<C>>,\n    cfg: &MSMConfig,\n    results: &mut HostOrDeviceSlice<Projective<C>>,\n) -> IcicleResult<()>\n")),(0,a.yg)("h3",{id:"parameters"},"Parameters"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"scalars")),": A buffer containing the scalar values to be multiplied with corresponding points."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"points")),": A buffer containing the points to be multiplied by the scalars."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"cfg")),": MSM configuration specifying additional parameters for the operation."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"results")),": A buffer where the results of the MSM operations will be stored.")),(0,a.yg)("h3",{id:"msm-config"},"MSM Config"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"pub struct MSMConfig<'a> {\n    pub ctx: DeviceContext<'a>,\n    points_size: i32,\n    pub precompute_factor: i32,\n    pub c: i32,\n    pub bitsize: i32,\n    pub large_bucket_factor: i32,\n    batch_size: i32,\n    are_scalars_on_device: bool,\n    pub are_scalars_montgomery_form: bool,\n    are_points_on_device: bool,\n    pub are_points_montgomery_form: bool,\n    are_results_on_device: bool,\n    pub is_big_triangle: bool,\n    pub is_async: bool,\n}\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"ctx: DeviceContext")),": Specifies the device context, device id and the CUDA stream for asynchronous execution."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"point_size: i32")),":"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"precompute_factor: i32")),": Determines the number of extra points to pre-compute for each point, affecting memory footprint and performance."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"c: i32")),': The "window bitsize," a parameter controlling the computational complexity and memory footprint of the MSM operation.'),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"bitsize: i32")),": The number of bits of the largest scalar, typically equal to the bit size of the scalar field."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"large_bucket_factor: i32")),": Adjusts the algorithm's sensitivity to frequently occurring buckets, useful for non-uniform scalar distributions."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"batch_size: i32")),": The number of MSMs to compute in a single batch, for leveraging parallelism."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"are_scalars_montgomery_form")),": Set to ",(0,a.yg)("inlineCode",{parentName:"li"},"true")," if scalars are in montgomery form."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"are_points_montgomery_form")),": Set to ",(0,a.yg)("inlineCode",{parentName:"li"},"true")," if points are in montgomery form."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"are_scalars_on_device: bool")),", ",(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"are_points_on_device: bool")),", ",(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"are_results_on_device: bool")),": Indicate whether the corresponding buffers are on the device memory."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"is_big_triangle")),": If ",(0,a.yg)("inlineCode",{parentName:"li"},"true")," MSM will run in Large triangle accumulation if ",(0,a.yg)("inlineCode",{parentName:"li"},"false")," Bucket accumulation will be chosen. Default value: false."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"is_async: bool")),": Whether to perform the MSM operation asynchronously.")),(0,a.yg)("h3",{id:"usage"},"Usage"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"msm")," function is designed to compute the sum of multiple scalar-point multiplications efficiently. It supports both single MSM operations and batched operations for increased performance. The configuration allows for detailed control over the execution environment and performance characteristics of the MSM operation."),(0,a.yg)("p",null,"When performing MSM operations, it's crucial to match the size of the ",(0,a.yg)("inlineCode",{parentName:"p"},"scalars")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"points")," arrays correctly and ensure that the ",(0,a.yg)("inlineCode",{parentName:"p"},"results")," buffer is appropriately sized to hold the output. The ",(0,a.yg)("inlineCode",{parentName:"p"},"MSMConfig")," should be set up to reflect the specifics of the operation, including whether the operation should be asynchronous and any device-specific settings."),(0,a.yg)("h2",{id:"how-do-i-toggle-between-the-supported-algorithms"},"How do I toggle between the supported algorithms?"),(0,a.yg)("p",null,"When creating your MSM Config you may state which algorithm you wish to use. ",(0,a.yg)("inlineCode",{parentName:"p"},"is_big_triangle=true")," will activate Large triangle reduction and ",(0,a.yg)("inlineCode",{parentName:"p"},"is_big_triangle=false")," will activate iterative reduction."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"...\n\nlet mut cfg_bls12377 = msm::get_default_msm_config::<BLS12377CurveCfg>();\n\n// is_big_triangle will determine which algorithm to use \ncfg_bls12377.is_big_triangle = true;\n\nmsm::msm(&scalars, &points, &cfg, &mut msm_results).unwrap();\n...\n")),(0,a.yg)("p",null,"You may reference the rust code ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/blob/77a7613aa21961030e4e12bf1c9a78a2dadb2518/wrappers/rust/icicle-core/src/msm/mod.rs#L54"},"here"),"."),(0,a.yg)("h2",{id:"how-do-i-toggle-between-msm-modes"},"How do I toggle between MSM modes?"),(0,a.yg)("p",null,"Toggling between MSM modes occurs automatically based on the number of results you are expecting from the ",(0,a.yg)("inlineCode",{parentName:"p"},"msm::msm")," function. If you are expecting an array of ",(0,a.yg)("inlineCode",{parentName:"p"},"msm_results"),", ICICLE will automatically split ",(0,a.yg)("inlineCode",{parentName:"p"},"scalars")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"points")," into equal parts and run them as multiple MSMs in parallel."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"...\n\nlet mut msm_result: HostOrDeviceSlice<'_, G1Projective> = HostOrDeviceSlice::cuda_malloc(1).unwrap();\nmsm::msm(&scalars, &points, &cfg, &mut msm_result).unwrap();\n\n...\n")),(0,a.yg)("p",null,"In the example above we allocate a single expected result which the MSM method will interpret as ",(0,a.yg)("inlineCode",{parentName:"p"},"batch_size=1")," and run a single MSM."),(0,a.yg)("p",null,"In the next example, we are expecting 10 results which sets ",(0,a.yg)("inlineCode",{parentName:"p"},"batch_size=10")," and runs 10 MSMs in batch mode."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"...\n\nlet mut msm_results: HostOrDeviceSlice<'_, G1Projective> = HostOrDeviceSlice::cuda_malloc(10).unwrap();\nmsm::msm(&scalars, &points, &cfg, &mut msm_results).unwrap();\n\n...\n")),(0,a.yg)("p",null,"Here is a ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/blob/77a7613aa21961030e4e12bf1c9a78a2dadb2518/wrappers/rust/icicle-core/src/msm/mod.rs#L108"},"reference")," to the code which automatically sets the batch size. For more MSM examples have a look ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/blob/77a7613aa21961030e4e12bf1c9a78a2dadb2518/examples/rust/msm/src/main.rs#L1"},"here"),"."),(0,a.yg)("h2",{id:"parameters-for-optimal-performance"},"Parameters for optimal performance"),(0,a.yg)("p",null,"Please refer to the ",(0,a.yg)("a",{parentName:"p",href:"../primitives/msm#choosing-optimal-parameters"},"primitive description")),(0,a.yg)("h2",{id:"support-for-g2-group"},"Support for G2 group"),(0,a.yg)("p",null,"MSM also supports G2 group."),(0,a.yg)("p",null,"Using MSM in G2 requires a G2 config, and of course your Points should also be G2 Points."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"... \n\nlet scalars = HostOrDeviceSlice::Host(upper_scalars[..size].to_vec());\nlet g2_points = HostOrDeviceSlice::Host(g2_upper_points[..size].to_vec());\nlet mut g2_msm_results: HostOrDeviceSlice<'_, G2Projective> = HostOrDeviceSlice::cuda_malloc(1).unwrap();\nlet mut g2_cfg = msm::get_default_msm_config::<G2CurveCfg>();\n\nmsm::msm(&scalars, &g2_points, &g2_cfg, &mut g2_msm_results).unwrap();\n\n...\n")),(0,a.yg)("p",null,"Here you can ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/ingonyama-zk/icicle/blob/5a96f9937d0a7176d88c766bd3ef2062b0c26c37/examples/rust/msm/src/main.rs#L114"},"find an example")," of MSM on G2 Points."))}u.isMDXComponent=!0},1873:(e,t,n)=>{n(6540)}}]);