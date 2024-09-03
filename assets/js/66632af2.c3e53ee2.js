"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5833],{5680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>s});var a=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),g=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=g(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=g(r),y=n,s=d["".concat(o,".").concat(y)]||d[y]||m[y]||i;return r?a.createElement(s,l(l({ref:t},c),{},{components:r})):a.createElement(s,l({ref:t},c))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=y;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[d]="string"==typeof e?e:n,l[1]=p;for(var g=2;g<i;g++)l[g]=r[g];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},1759:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>g});var a=r(8168),n=(r(6540),r(5680));r(1873);const i={},l="ICICLE libraries",p={unversionedId:"icicle/libraries",id:"icicle/libraries",title:"ICICLE libraries",description:"ICICLE is composed of two main logical parts:",source:"@site/docs/icicle/libraries.md",sourceDirName:"icicle",slug:"/icicle/libraries",permalink:"/icicle/libraries",editUrl:"https://github.com/ingonyama-zk/icicle/tree/main/docs/icicle/libraries.md",tags:[],version:"current",lastUpdatedBy:"Otsar",lastUpdatedAt:1725378622,formattedLastUpdatedAt:"9/3/2024",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"Build Your Own Backend",permalink:"/icicle/build_your_own_backend"},next:{title:"ICICLE Compute APIs",permalink:"/icicle/primitives/overview"}},o={},g=[{value:"ICICLE device",id:"icicle-device",level:2},{value:"ICICLE Core",id:"icicle-core",level:2},{value:"Rust",id:"rust",level:3},{value:"Supported curves, fields and operations",id:"supported-curves-fields-and-operations",level:3},{value:"Supported curves and operations",id:"supported-curves-and-operations",level:4},{value:"Supported fields and operations",id:"supported-fields-and-operations",level:4},{value:"Supported hashes",id:"supported-hashes",level:4},{value:"Backend",id:"backend",level:2}],c={toc:g},d="wrapper";function m(e){let{components:t,...r}=e;return(0,n.yg)(d,(0,a.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"icicle-libraries"},"ICICLE libraries"),(0,n.yg)("p",null,"ICICLE is composed of two main logical parts:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"#icicle-device"},(0,n.yg)("strong",{parentName:"a"},"ICICLE device library"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("a",{parentName:"li",href:"#icicle-core"},(0,n.yg)("strong",{parentName:"a"},"ICICLE template core library")))),(0,n.yg)("h2",{id:"icicle-device"},"ICICLE device"),(0,n.yg)("p",null,"The ICICLE device library serves as an abstraction layer for interacting with various hardware devices. It provides a comprehensive interface for tasks such as setting the active device, querying device-specific information like free and total memory, determining the number of available devices, and managing memory allocation. Additionally, it offers functionality for copying data to and from devices, managing task queues (streams) for efficient device utilization, and abstracting the complexities of device management away from the user. "),(0,n.yg)("p",null,"See programmers guide for more details. ",(0,n.yg)("a",{parentName:"p",href:"./programmers_guide/cpp#device-management"},"C++"),", ",(0,n.yg)("a",{parentName:"p",href:"./programmers_guide/rust#device-management"},"Rust"),", ",(0,n.yg)("a",{parentName:"p",href:"./programmers_guide/go"},"Go")),(0,n.yg)("h2",{id:"icicle-core"},"ICICLE Core"),(0,n.yg)("p",null,"ICICLE Core is a template library written in C++ that implements fundamental cryptographic operations, including field and curve arithmetic, as well as higher-level APIs such as MSM and NTT."),(0,n.yg)("p",null,"The Core can be ",(0,n.yg)("a",{parentName:"p",href:"./build_from_source"},"instantiated")," for different fields, curves, and other cryptographic components, allowing you to tailor it to your specific needs. You can link your application to one or more ICICLE libraries, depending on the requirements of your project. For example, you might only need the babybear library or a combination of babybear and a Merkle tree builder."),(0,n.yg)("h3",{id:"rust"},"Rust"),(0,n.yg)("p",null,"Each library has a corresponding crate. See ",(0,n.yg)("a",{parentName:"p",href:"/icicle/programmers_guide/general"},"programmers guide")," for more details."),(0,n.yg)("h3",{id:"supported-curves-fields-and-operations"},"Supported curves, fields and operations"),(0,n.yg)("h4",{id:"supported-curves-and-operations"},"Supported curves and operations"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Operation\\Curve"),(0,n.yg)("th",{parentName:"tr",align:"center"},(0,n.yg)("a",{parentName:"th",href:"https://neuromancer.sk/std/bn/bn254"},"bn254")),(0,n.yg)("th",{parentName:"tr",align:"center"},(0,n.yg)("a",{parentName:"th",href:"https://neuromancer.sk/std/bls/BLS12-377"},"bls12-377")),(0,n.yg)("th",{parentName:"tr",align:"center"},(0,n.yg)("a",{parentName:"th",href:"https://neuromancer.sk/std/bls/BLS12-381"},"bls12-381")),(0,n.yg)("th",{parentName:"tr",align:"center"},(0,n.yg)("a",{parentName:"th",href:"https://eprint.iacr.org/2020/351"},"bw6-761")),(0,n.yg)("th",{parentName:"tr",align:"center"},"grumpkin"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"./primitives/msm"},"MSM")),(0,n.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"G2 MSM"),(0,n.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:"center"},"\u274c")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"./primitives/ntt"},"NTT")),(0,n.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:"center"},"\u274c")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"ECNTT"),(0,n.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:"center"},"\u274c")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"./primitives/vec_ops"},"Vector operations")),(0,n.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"./polynomials/overview"},"Polynomials")),(0,n.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:"center"},"\u274c")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"primitives/poseidon"},"Poseidon")),(0,n.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"primitives/poseidon#the-tree-builder"},"Merkle Tree")),(0,n.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:"center"},"\u2705")))),(0,n.yg)("h4",{id:"supported-fields-and-operations"},"Supported fields and operations"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Operation\\Field"),(0,n.yg)("th",{parentName:"tr",align:"center"},(0,n.yg)("a",{parentName:"th",href:"https://eprint.iacr.org/2023/824.pdf"},"babybear")),(0,n.yg)("th",{parentName:"tr",align:"center"},(0,n.yg)("a",{parentName:"th",href:"https://docs.starknet.io/documentation/architecture_and_concepts/Cryptography/p-value/"},"Stark252")))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"./primitives/vec_ops"},"Vector operations")),(0,n.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"./polynomials/overview"},"Polynomials")),(0,n.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"primitives/ntt"},"NTT")),(0,n.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Extension Field"),(0,n.yg)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:"center"},"\u274c")))),(0,n.yg)("h4",{id:"supported-hashes"},"Supported hashes"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Hash"),(0,n.yg)("th",{parentName:"tr",align:"center"},"Sizes"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Keccak"),(0,n.yg)("td",{parentName:"tr",align:"center"},"256, 512")))),(0,n.yg)("h2",{id:"backend"},"Backend"),(0,n.yg)("p",null,"Each backend must implement the device API interface.\nEach backend may implement"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"One or more ICICLE library. For example implement only bn254 curve. "),(0,n.yg)("li",{parentName:"ul"},"One or more APIs in this library. For example MSM only.")),(0,n.yg)("p",null,"See ",(0,n.yg)("a",{parentName:"p",href:"/icicle/install_cuda_backend"},"CUDA backend")," and ",(0,n.yg)("a",{parentName:"p",href:"/icicle/build_your_own_backend"},"Build Your Own Backend")," for more info about implementing a backend."))}m.isMDXComponent=!0},1873:(e,t,r)=>{r(6540)}}]);