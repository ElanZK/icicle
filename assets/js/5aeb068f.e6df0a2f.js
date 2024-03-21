"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[544],{5680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>d});var a=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},g=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,d=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return t?a.createElement(d,i(i({ref:n},g),{},{components:t})):a.createElement(d,i({ref:n},g))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4479:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=t(8168),r=(t(6540),t(5680));t(1873);const o={},i="MSM",l={unversionedId:"icicle/golang-bindings/msm",id:"icicle/golang-bindings/msm",title:"MSM",description:"Supported curves",source:"@site/docs/icicle/golang-bindings/msm.md",sourceDirName:"icicle/golang-bindings",slug:"/icicle/golang-bindings/msm",permalink:"/icicle/golang-bindings/msm",editUrl:"https://github.com/ingonyama-zk/icicle/tree/main/docs/icicle/golang-bindings/msm.md",tags:[],version:"current",lastUpdatedBy:"Otsar",lastUpdatedAt:1711004659,formattedLastUpdatedAt:"3/21/2024",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"Golang bindings",permalink:"/icicle/golang-bindings"},next:{title:"NTT",permalink:"/icicle/golang-bindings/ntt"}},s={},c=[{value:"Supported curves",id:"supported-curves",level:3},{value:"MSM Example",id:"msm-example",level:2},{value:"MSM Method",id:"msm-method",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Return Value",id:"return-value",level:3},{value:"MSMConfig",id:"msmconfig",level:2},{value:"Fields",id:"fields",level:3},{value:"Default Configuration",id:"default-configuration",level:3},{value:"How do I toggle between the supported algorithms?",id:"how-do-i-toggle-between-the-supported-algorithms",level:2},{value:"How do I toggle between MSM modes?",id:"how-do-i-toggle-between-msm-modes",level:2},{value:"Support for G2 group",id:"support-for-g2-group",level:2}],g={toc:c},u="wrapper";function p(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,a.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"msm"},"MSM"),(0,r.yg)("h3",{id:"supported-curves"},"Supported curves"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"bls12-377"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"bls12-381"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"bn254"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"bw6-761")),(0,r.yg)("h2",{id:"msm-example"},"MSM Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "github.com/ingonyama-zk/icicle/wrappers/golang/core"\n    cr "github.com/ingonyama-zk/icicle/wrappers/golang/cuda_runtime"\n)\n\nfunc Main() {\n    // Obtain the default MSM configuration.\n    cfg := GetDefaultMSMConfig()\n    \n    // Define the size of the problem, here 2^18.\n    size := 1 << 18\n\n    // Generate scalars and points for the MSM operation.\n    scalars := GenerateScalars(size)\n    points := GenerateAffinePoints(size)\n\n    // Create a CUDA stream for asynchronous operations.\n    stream, _ := cr.CreateStream()\n    var p Projective\n    \n    // Allocate memory on the device for the result of the MSM operation.\n    var out core.DeviceSlice\n    _, e := out.MallocAsync(p.Size(), p.Size(), stream)\n\n    if e != cr.CudaSuccess {\n        panic(e)\n    }\n    \n    // Set the CUDA stream in the MSM configuration.\n    cfg.Ctx.Stream = &stream\n    cfg.IsAsync = true\n    \n    // Perform the MSM operation.\n    e = Msm(scalars, points, &cfg, out)\n    \n    if e != cr.CudaSuccess {\n        panic(e)\n    }\n    \n    // Allocate host memory for the results and copy the results from the device.\n    outHost := make(core.HostSlice[Projective], 1)\n    cr.SynchronizeStream(&stream)\n    outHost.CopyFromDevice(&out)\n    \n    // Free the device memory allocated for the results.\n    out.Free()\n}\n')),(0,r.yg)("h2",{id:"msm-method"},"MSM Method"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},"func Msm(scalars core.HostOrDeviceSlice, points core.HostOrDeviceSlice, cfg *core.MSMConfig, results core.HostOrDeviceSlice) cr.CudaError\n")),(0,r.yg)("h3",{id:"parameters"},"Parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"scalars"),": A slice containing the scalars for multiplication. It can reside either in host memory or device memory."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"points"),": A slice containing the points to be multiplied with scalars. Like scalars, these can also be in host or device memory."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"cfg"),": A pointer to an ",(0,r.yg)("inlineCode",{parentName:"li"},"MSMConfig")," object, which contains various configuration options for the MSM operation."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"results"),": A slice where the results of the MSM operation will be stored. This slice can be in host or device memory.")),(0,r.yg)("h3",{id:"return-value"},"Return Value"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"CudaError"),": Returns a CUDA error code indicating the success or failure of the MSM operation.")),(0,r.yg)("h2",{id:"msmconfig"},"MSMConfig"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"MSMConfig")," structure holds configuration parameters for the MSM operation, allowing customization of its behavior to optimize performance based on the specifics of the operation or the underlying hardware."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},"type MSMConfig struct {\n    Ctx cr.DeviceContext\n    PrecomputeFactor int32\n    C int32\n    Bitsize int32\n    LargeBucketFactor int32\n    batchSize int32\n    areScalarsOnDevice bool\n    AreScalarsMontgomeryForm bool\n    arePointsOnDevice bool\n    ArePointsMontgomeryForm bool\n    areResultsOnDevice bool\n    IsBigTriangle bool\n    IsAsync bool\n}\n")),(0,r.yg)("h3",{id:"fields"},"Fields"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Ctx"),": Device context containing details like device id and stream."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"PrecomputeFactor"),": Controls the number of extra points to pre-compute."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"C"),': Window bitsize, a key parameter in the "bucket method" for MSM.'),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Bitsize"),": Number of bits of the largest scalar."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"LargeBucketFactor"),": Sensitivity to frequently occurring buckets."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"batchSize"),": Number of results to compute in one batch."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"areScalarsOnDevice"),": Indicates if scalars are located on the device."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"AreScalarsMontgomeryForm"),": True if scalars are in Montgomery form."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"arePointsOnDevice"),": Indicates if points are located on the device."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"ArePointsMontgomeryForm"),": True if point coordinates are in Montgomery form."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"areResultsOnDevice"),": Indicates if results are stored on the device."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"IsBigTriangle"),": If ",(0,r.yg)("inlineCode",{parentName:"li"},"true")," MSM will run in Large triangle accumulation if ",(0,r.yg)("inlineCode",{parentName:"li"},"false")," Bucket accumulation will be chosen. Default value: false."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"IsAsync"),": If true, runs MSM asynchronously.")),(0,r.yg)("h3",{id:"default-configuration"},"Default Configuration"),(0,r.yg)("p",null,"Use ",(0,r.yg)("inlineCode",{parentName:"p"},"GetDefaultMSMConfig")," to obtain a default configuration, which can then be customized as needed."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},"func GetDefaultMSMConfig() MSMConfig\n")),(0,r.yg)("h2",{id:"how-do-i-toggle-between-the-supported-algorithms"},"How do I toggle between the supported algorithms?"),(0,r.yg)("p",null,"When creating your MSM Config you may state which algorithm you wish to use. ",(0,r.yg)("inlineCode",{parentName:"p"},"cfg.Ctx.IsBigTriangle = true")," will activate Large triangle accumulation and ",(0,r.yg)("inlineCode",{parentName:"p"},"cfg.Ctx.IsBigTriangle = false")," will activate Bucket accumulation."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},"...\n\n// Obtain the default MSM configuration.\ncfg := GetDefaultMSMConfig()\n\ncfg.Ctx.IsBigTriangle = true\n\n...\n")),(0,r.yg)("h2",{id:"how-do-i-toggle-between-msm-modes"},"How do I toggle between MSM modes?"),(0,r.yg)("p",null,"Toggling between MSM modes occurs automatically based on the number of results you are expecting from the ",(0,r.yg)("inlineCode",{parentName:"p"},"MSM")," function."),(0,r.yg)("p",null,"The number of results is interpreted from the size of ",(0,r.yg)("inlineCode",{parentName:"p"},"var out core.DeviceSlice"),". Thus its important when allocating memory for ",(0,r.yg)("inlineCode",{parentName:"p"},"var out core.DeviceSlice")," to make sure that you are allocating ",(0,r.yg)("inlineCode",{parentName:"p"},"<number of results> X <size of a single point>"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},"... \n\nbatchSize := 3\nvar p G2Projective\nvar out core.DeviceSlice\nout.Malloc(batchSize*p.Size(), p.Size())\n\n...\n")),(0,r.yg)("h2",{id:"support-for-g2-group"},"Support for G2 group"),(0,r.yg)("p",null,"To activate G2 support first you must make sure you are building the static libraries with G2 feature enabled."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"./build.sh bls12_381 ON\n")),(0,r.yg)("p",null,"Now when importing ",(0,r.yg)("inlineCode",{parentName:"p"},"icicle"),", you should have access to G2 features."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/ingonyama-zk/icicle/wrappers/golang/core"\n)\n')),(0,r.yg)("p",null,"These features include ",(0,r.yg)("inlineCode",{parentName:"p"},"G2Projective")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"G2Affine")," points as well as a ",(0,r.yg)("inlineCode",{parentName:"p"},"G2Msm")," method."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},"...\n\ncfg := GetDefaultMSMConfig()\nsize := 1 << 12\nbatchSize := 3\ntotalSize := size * batchSize\nscalars := GenerateScalars(totalSize)\npoints := G2GenerateAffinePoints(totalSize)\n\nvar p G2Projective\nvar out core.DeviceSlice\nout.Malloc(batchSize*p.Size(), p.Size())\nG2Msm(scalars, points, &cfg, out)\n\n...\n")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"G2Msm")," works the same way as normal MSM, the difference is that it uses G2 Points."),(0,r.yg)("p",null,"Additionally when you are building your application make sure to use the g2 feature flag"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"go build -tags=g2\n")))}p.isMDXComponent=!0},1873:(e,n,t)=>{t(6540)}}]);