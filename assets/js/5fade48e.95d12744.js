"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6343],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var a=n(6540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6357:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(8168),i=(n(6540),n(5680));n(1873);const r={},o="Icicle Programmer's Guide",s={unversionedId:"icicle/programmers_guide/general",id:"icicle/programmers_guide/general",title:"Icicle Programmer's Guide",description:"Compute APIs",source:"@site/docs/icicle/programmers_guide/general.md",sourceDirName:"icicle/programmers_guide",slug:"/icicle/programmers_guide/general",permalink:"/icicle/programmers_guide/general",editUrl:"https://github.com/ingonyama-zk/icicle/tree/main/docs/icicle/programmers_guide/general.md",tags:[],version:"current",lastUpdatedBy:"Otsar",lastUpdatedAt:1725378622,formattedLastUpdatedAt:"9/3/2024",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"Build ICICLE from source",permalink:"/icicle/build_from_source"},next:{title:"Icicle C++ Usage Guide",permalink:"/icicle/programmers_guide/cpp"}},c={},l=[{value:"Compute APIs",id:"compute-apis",level:2},{value:"Common Structure of Compute APIs",id:"common-structure-of-compute-apis",level:3},{value:"Example (C++)",id:"example-c",level:3},{value:"Config struct extension",id:"config-struct-extension",level:3},{value:"Device Abstraction",id:"device-abstraction",level:2},{value:"Device Management",id:"device-management",level:3},{value:"Streams",id:"streams",level:2},{value:"Memory Management",id:"memory-management",level:3},{value:"Data Transfer",id:"data-transfer",level:3},{value:"Synchronization",id:"synchronization",level:3},{value:"Additional Information",id:"additional-information",level:2}],p={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.yg)(d,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"icicle-programmers-guide"},"Icicle Programmer's Guide"),(0,i.yg)("h2",{id:"compute-apis"},"Compute APIs"),(0,i.yg)("p",null,"ICICLE offers a variety of compute APIs, including Number Theoretic Transforms (NTT), Multi Scalar Multiplication (MSM), vector operations, Elliptic Curve NTT (ECNTT), polynomials, and more. These APIs follow a consistent structure, making it straightforward to apply the same usage patterns across different operations."),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/icicle/primitives/overview"},"Check out all details about compute APIs here"),"."),(0,i.yg)("h3",{id:"common-structure-of-compute-apis"},"Common Structure of Compute APIs"),(0,i.yg)("p",null,"Each compute API in Icicle typically involves the following components:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Inputs and Outputs"),": The data to be processed and the resulting output are passed to the API functions. These can reside either on the host (CPU) or on a device (GPU).")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Parameters"),": Parameters such as the size of data to be processed are provided to control the computation.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Configuration Struct"),": A configuration struct is used to specify additional options for the computation. This struct has default values but can be customized as needed."))),(0,i.yg)("p",null,"The configuration struct allows users to modify settings such as:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Specifying whether inputs and outputs are on the host or device."),(0,i.yg)("li",{parentName:"ul"},"Adjusting the data layout for specific optimizations."),(0,i.yg)("li",{parentName:"ul"},"Passing custom options to the backend implementation through an extension mechanism, such as setting the number of CPU cores to use.")),(0,i.yg)("h3",{id:"example-c"},"Example (C++)"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},'#include "icicle/vec_ops.h"\n\n// Create config struct for vector add\nVecOpsConfig config = default_vec_ops_config();\n// optionally modify the config struct here\n\n// Call the API\neIcicleError err = vector_add(vec_a, vec_b, size, config, vec_res);\n')),(0,i.yg)("p",null,"Where ",(0,i.yg)("inlineCode",{parentName:"p"},"VecOpsConfig")," is defined in ",(0,i.yg)("inlineCode",{parentName:"p"},"icicle/vec_ops.h"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},"struct VecOpsConfig {\n    icicleStreamHandle stream; /**< Stream for asynchronous execution. */\n    bool is_a_on_device;       /**< True if `a` is on the device, false if it is not. Default value: false. */\n    bool is_b_on_device;       /**< True if `b` is on the device, false if it is not. Default value: false. OPTIONAL. */\n    bool is_result_on_device;  /**< If true, the output is preserved on the device, otherwise on the host. Default value: false. */\n    bool is_async;             /**< Whether to run the vector operations asynchronously. */\n    ConfigExtension* ext = nullptr; /**< Backend-specific extension. */\n};\n")),(0,i.yg)("p",null,"This pattern is consistent across most Icicle APIs, in C++/Rust/Go, providing flexibility while maintaining a familiar structure. For NTT, MSM, and other operations, include the corresponding header and call the template APIs."),(0,i.yg)("h3",{id:"config-struct-extension"},"Config struct extension"),(0,i.yg)("p",null,"In special cases, where an application wants to specify backend specific options, this is achieved with a config-extension struct.\nFor example the CPU backend has an option regarding how many threads to use for a vector addition looks as follows:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},'#include "icicle/vec_ops.h"\n\n// Create config struct for vector add\nVecOpsConfig config = default_vec_ops_config();\nConfigExtension ext;\nconfig.ext = &ext;\next.set("n_threads", 8); // tell the CPU backend to use 8 threads\n// Call the API\neIcicleError err = vector_add(vec_a, vec_b, size, config, vec_res);\n')),(0,i.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.yg)("div",{parentName:"div",className:"admonition-heading"},(0,i.yg)("h5",{parentName:"div"},(0,i.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,i.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.yg)("div",{parentName:"div",className:"admonition-content"},(0,i.yg)("p",{parentName:"div"},"This is not device-agnostic behavior, meaning such code is aware of the backend.\nHaving said that, it is not an error to pass options to a backend that is not aware of them."))),(0,i.yg)("h2",{id:"device-abstraction"},"Device Abstraction"),(0,i.yg)("p",null,"ICICLE provides a device abstraction layer that allows you to interact with different compute devices such as CPUs and GPUs seamlessly. The device abstraction ensures that your code can work across multiple hardware platforms without modification."),(0,i.yg)("h3",{id:"device-management"},"Device Management"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Loading Backends"),": Backends are loaded dynamically based on the environment configuration or a specified path."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Setting Active Device"),": The active device for a thread can be set, allowing for targeted computation on a specific device.")),(0,i.yg)("h2",{id:"streams"},"Streams"),(0,i.yg)("p",null,"Streams in ICICLE allow for asynchronous execution and memory operations, enabling parallelism and non-blocking execution. Streams are associated with specific devices, and you can create, destroy, and synchronize streams to manage your workflow."),(0,i.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.yg)("div",{parentName:"div",className:"admonition-heading"},(0,i.yg)("h5",{parentName:"div"},(0,i.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,i.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.yg)("div",{parentName:"div",className:"admonition-content"},(0,i.yg)("p",{parentName:"div"},"For compute APIs, streams go into the ",(0,i.yg)("inlineCode",{parentName:"p"},"config.stream")," field along with the ",(0,i.yg)("inlineCode",{parentName:"p"},"is_async=true")," config flag."))),(0,i.yg)("h3",{id:"memory-management"},"Memory Management"),(0,i.yg)("p",null,"Icicle provides functions for allocating, freeing, and managing memory across devices. Memory operations can be performed synchronously or asynchronously, depending on the use case."),(0,i.yg)("h3",{id:"data-transfer"},"Data Transfer"),(0,i.yg)("p",null,"Data transfer between the host and devices, or between different devices, is handled through a set of APIs that ensure efficient and error-checked operations. Asynchronous operations are supported to maximize performance."),(0,i.yg)("h3",{id:"synchronization"},"Synchronization"),(0,i.yg)("p",null,"Synchronization ensures that all previous operations on a stream or device are completed. This is crucial when coordinating between multiple operations that depend on one another."),(0,i.yg)("h2",{id:"additional-information"},"Additional Information"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Error Handling"),": Icicle uses a specific error enumeration (",(0,i.yg)("inlineCode",{parentName:"li"},"eIcicleError"),") to handle and return error states across its APIs."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Device Properties"),": You can query various properties of devices to tailor operations according to the hardware capabilities.")))}u.isMDXComponent=!0},1873:(e,t,n)=>{n(6540)}}]);