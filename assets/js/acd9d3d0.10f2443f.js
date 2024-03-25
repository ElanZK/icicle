"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[993],{5680:(a,e,n)=>{n.d(e,{xA:()=>o,yg:()=>y});var t=n(6540);function s(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function m(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function i(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){s(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function r(a,e){if(null==a)return{};var n,t,s=function(a,e){if(null==a)return{};var n,t,s={},m=Object.keys(a);for(t=0;t<m.length;t++)n=m[t],e.indexOf(n)>=0||(s[n]=a[n]);return s}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(t=0;t<m.length;t++)n=m[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(s[n]=a[n])}return s}var l=t.createContext({}),p=function(a){var e=t.useContext(l),n=e;return a&&(n="function"==typeof a?a(e):i(i({},e),a)),n},o=function(a){var e=p(a.components);return t.createElement(l.Provider,{value:e},a.children)},c="mdxType",g={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},u=t.forwardRef((function(a,e){var n=a.components,s=a.mdxType,m=a.originalType,l=a.parentName,o=r(a,["components","mdxType","originalType","parentName"]),c=p(n),u=s,y=c["".concat(l,".").concat(u)]||c[u]||g[u]||m;return n?t.createElement(y,i(i({ref:e},o),{},{components:n})):t.createElement(y,i({ref:e},o))}));function y(a,e){var n=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var m=n.length,i=new Array(m);i[0]=u;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=a,r[c]="string"==typeof a?a:s,i[1]=r;for(var p=2;p<m;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5908:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>m,metadata:()=>r,toc:()=>p});var t=n(8168),s=(n(6540),n(5680));n(1873);const m={},i="MSM - Multi scalar multiplication",r={unversionedId:"icicle/primitives/msm",id:"icicle/primitives/msm",title:"MSM - Multi scalar multiplication",description:"MSM stands for Multi scalar multiplication, its defined as:",source:"@site/docs/icicle/primitives/msm.md",sourceDirName:"icicle/primitives",slug:"/icicle/primitives/msm",permalink:"/icicle/primitives/msm",editUrl:"https://github.com/ingonyama-zk/icicle/tree/main/docs/icicle/primitives/msm.md",tags:[],version:"current",lastUpdatedBy:"ImmanuelSegol",lastUpdatedAt:1711371257,formattedLastUpdatedAt:"3/25/2024",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"ICICLE Primitives",permalink:"/icicle/primitives/overview"},next:{title:"NTT - Number Theoretic Transform",permalink:"/icicle/primitives/ntt"}},l={},p=[{value:"Supported curves",id:"supported-curves",level:2},{value:"Supported Bindings",id:"supported-bindings",level:2},{value:"Supported algorithms",id:"supported-algorithms",level:2},{value:"Bucket accumulation",id:"bucket-accumulation",level:3},{value:"When should I use Bucket accumulation?",id:"when-should-i-use-bucket-accumulation",level:4},{value:"Large triangle accumulation",id:"large-triangle-accumulation",level:3},{value:"When should I use Large triangle accumulation?",id:"when-should-i-use-large-triangle-accumulation",level:4},{value:"MSM Modes",id:"msm-modes",level:2},{value:"Which mode should I use?",id:"which-mode-should-i-use",level:3}],o={toc:p},c="wrapper";function g(a){let{components:e,...n}=a;return(0,s.yg)(c,(0,t.A)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,s.yg)("h1",{id:"msm---multi-scalar-multiplication"},"MSM - Multi scalar multiplication"),(0,s.yg)("p",null,"MSM stands for Multi scalar multiplication, its defined as:"),(0,s.yg)("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.yg)("mi",null,"M"),(0,s.yg)("mi",null,"S"),(0,s.yg)("mi",null,"M"),(0,s.yg)("mo",{stretchy:"false"},"("),(0,s.yg)("mi",null,"a"),(0,s.yg)("mo",null,","),(0,s.yg)("mi",null,"G"),(0,s.yg)("mo",{stretchy:"false"},")"),(0,s.yg)("mo",null,"="),(0,s.yg)("munderover",null,(0,s.yg)("mo",{"data-mjx-texclass":"OP",movablelimits:"false"},"\u2211"),(0,s.yg)("mrow",{"data-mjx-texclass":"ORD"},(0,s.yg)("mi",null,"j"),(0,s.yg)("mo",null,"="),(0,s.yg)("mn",null,"0")),(0,s.yg)("mrow",{"data-mjx-texclass":"ORD"},(0,s.yg)("mi",null,"n"),(0,s.yg)("mo",null,"\u2212"),(0,s.yg)("mn",null,"1"))),(0,s.yg)("msub",null,(0,s.yg)("mi",null,"a"),(0,s.yg)("mi",null,"j")),(0,s.yg)("msub",null,(0,s.yg)("mi",null,"G"),(0,s.yg)("mi",null,"j"))),(0,s.yg)("p",null,"Where"),(0,s.yg)("p",null,(0,s.yg)("span",{parentName:"p",className:"math math-inline"},(0,s.yg)("span",{parentName:"span",className:"katex"},(0,s.yg)("span",{parentName:"span",className:"katex-mathml"},(0,s.yg)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.yg)("semantics",{parentName:"math"},(0,s.yg)("mrow",{parentName:"semantics"},(0,s.yg)("msub",{parentName:"mrow"},(0,s.yg)("mi",{parentName:"msub"},"G"),(0,s.yg)("mi",{parentName:"msub"},"j")),(0,s.yg)("mo",{parentName:"mrow"},"\u2208"),(0,s.yg)("mi",{parentName:"mrow"},"G")),(0,s.yg)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"G_j \\in G")))),(0,s.yg)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.yg)("span",{parentName:"span",className:"base"},(0,s.yg)("span",{parentName:"span",className:"strut",style:{height:"0.9694em",verticalAlign:"-0.2861em"}}),(0,s.yg)("span",{parentName:"span",className:"mord"},(0,s.yg)("span",{parentName:"span",className:"mord mathnormal"},"G"),(0,s.yg)("span",{parentName:"span",className:"msupsub"},(0,s.yg)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.yg)("span",{parentName:"span",className:"vlist-r"},(0,s.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,s.yg)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,s.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.yg)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.05724em"}},"j")))),(0,s.yg)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.yg)("span",{parentName:"span",className:"vlist-r"},(0,s.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.2861em"}},(0,s.yg)("span",{parentName:"span"})))))),(0,s.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.yg)("span",{parentName:"span",className:"mrel"},"\u2208"),(0,s.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.yg)("span",{parentName:"span",className:"base"},(0,s.yg)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.yg)("span",{parentName:"span",className:"mord mathnormal"},"G")))))," - points from an Elliptic Curve group."),(0,s.yg)("p",null,(0,s.yg)("span",{parentName:"p",className:"math math-inline"},(0,s.yg)("span",{parentName:"span",className:"katex"},(0,s.yg)("span",{parentName:"span",className:"katex-mathml"},(0,s.yg)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.yg)("semantics",{parentName:"math"},(0,s.yg)("mrow",{parentName:"semantics"},(0,s.yg)("msub",{parentName:"mrow"},(0,s.yg)("mi",{parentName:"msub"},"a"),(0,s.yg)("mn",{parentName:"msub"},"0")),(0,s.yg)("mo",{parentName:"mrow",separator:"true"},","),(0,s.yg)("mo",{parentName:"mrow"},"\u2026"),(0,s.yg)("mo",{parentName:"mrow",separator:"true"},","),(0,s.yg)("msub",{parentName:"mrow"},(0,s.yg)("mi",{parentName:"msub"},"a"),(0,s.yg)("mi",{parentName:"msub"},"n"))),(0,s.yg)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a_0, \\ldots, a_n")))),(0,s.yg)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.yg)("span",{parentName:"span",className:"base"},(0,s.yg)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,s.yg)("span",{parentName:"span",className:"mord"},(0,s.yg)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.yg)("span",{parentName:"span",className:"msupsub"},(0,s.yg)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.yg)("span",{parentName:"span",className:"vlist-r"},(0,s.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,s.yg)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,s.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.yg)("span",{parentName:"span",className:"mord mtight"},"0")))),(0,s.yg)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.yg)("span",{parentName:"span",className:"vlist-r"},(0,s.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.yg)("span",{parentName:"span"})))))),(0,s.yg)("span",{parentName:"span",className:"mpunct"},","),(0,s.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.yg)("span",{parentName:"span",className:"minner"},"\u2026"),(0,s.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.yg)("span",{parentName:"span",className:"mpunct"},","),(0,s.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.yg)("span",{parentName:"span",className:"mord"},(0,s.yg)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.yg)("span",{parentName:"span",className:"msupsub"},(0,s.yg)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.yg)("span",{parentName:"span",className:"vlist-r"},(0,s.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.1514em"}},(0,s.yg)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,s.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.yg)("span",{parentName:"span",className:"mord mathnormal mtight"},"n")))),(0,s.yg)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.yg)("span",{parentName:"span",className:"vlist-r"},(0,s.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.yg)("span",{parentName:"span"}))))))))))," - Scalars"),(0,s.yg)("p",null,(0,s.yg)("span",{parentName:"p",className:"math math-inline"},(0,s.yg)("span",{parentName:"span",className:"katex"},(0,s.yg)("span",{parentName:"span",className:"katex-mathml"},(0,s.yg)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.yg)("semantics",{parentName:"math"},(0,s.yg)("mrow",{parentName:"semantics"},(0,s.yg)("mi",{parentName:"mrow"},"M"),(0,s.yg)("mi",{parentName:"mrow"},"S"),(0,s.yg)("mi",{parentName:"mrow"},"M"),(0,s.yg)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.yg)("mi",{parentName:"mrow"},"a"),(0,s.yg)("mo",{parentName:"mrow",separator:"true"},","),(0,s.yg)("mi",{parentName:"mrow"},"G"),(0,s.yg)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.yg)("mo",{parentName:"mrow"},"\u2208"),(0,s.yg)("mi",{parentName:"mrow"},"G")),(0,s.yg)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"MSM(a, G) \\in G")))),(0,s.yg)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.yg)("span",{parentName:"span",className:"base"},(0,s.yg)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.yg)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"MSM"),(0,s.yg)("span",{parentName:"span",className:"mopen"},"("),(0,s.yg)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.yg)("span",{parentName:"span",className:"mpunct"},","),(0,s.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.yg)("span",{parentName:"span",className:"mord mathnormal"},"G"),(0,s.yg)("span",{parentName:"span",className:"mclose"},")"),(0,s.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.yg)("span",{parentName:"span",className:"mrel"},"\u2208"),(0,s.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.yg)("span",{parentName:"span",className:"base"},(0,s.yg)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.yg)("span",{parentName:"span",className:"mord mathnormal"},"G")))))," - a single EC (elliptic curve) point"),(0,s.yg)("p",null,"In words, MSM is the sum of scalar and EC point multiplications. We can see from this definition that the core operations occurring are Modular Multiplication and Elliptic curve point addition. Its obvious that multiplication can be computed in parallel and then the products summed, making MSM inherently parallelizable."),(0,s.yg)("p",null,"Accelerating MSM is crucial to a ZK protocol's performance due to the ",(0,s.yg)("a",{parentName:"p",href:"https://hackmd.io/@0xMonia/SkQ6-oRz3#Hardware-acceleration-in-action"},"large percent of run time")," they take when generating proofs."),(0,s.yg)("p",null,"You can learn more about how MSMs work from this ",(0,s.yg)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=Bl5mQA7UL2I"},"video")," and from our resource list on ",(0,s.yg)("a",{parentName:"p",href:"https://www.ingonyama.com/ingopedia/msm"},"Ingopedia"),"."),(0,s.yg)("h2",{id:"supported-curves"},"Supported curves"),(0,s.yg)("p",null,"MSM supports the following curves:"),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"bls12-377"),", ",(0,s.yg)("inlineCode",{parentName:"p"},"bls12-381"),", ",(0,s.yg)("inlineCode",{parentName:"p"},"bn254"),", ",(0,s.yg)("inlineCode",{parentName:"p"},"bw6-761"),", ",(0,s.yg)("inlineCode",{parentName:"p"},"grumpkin")),(0,s.yg)("h2",{id:"supported-bindings"},"Supported Bindings"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"/icicle/golang-bindings/msm"},"Golang")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"/icicle/rust-bindings/msm"},"Rust"))),(0,s.yg)("h2",{id:"supported-algorithms"},"Supported algorithms"),(0,s.yg)("p",null,"Our MSM implementation supports two algorithms ",(0,s.yg)("inlineCode",{parentName:"p"},"Bucket accumulation")," and ",(0,s.yg)("inlineCode",{parentName:"p"},"Large triangle accumulation"),"."),(0,s.yg)("h3",{id:"bucket-accumulation"},"Bucket accumulation"),(0,s.yg)("p",null,'The Bucket Accumulation algorithm is a method of dividing the overall MSM task into smaller, more manageable sub-tasks. It involves partitioning scalars and their corresponding points into different "buckets" based on the scalar values.'),(0,s.yg)("p",null,"Bucket Accumulation can be more parallel-friendly because it involves dividing the computation into smaller, independent tasks, distributing scalar-point pairs into buckets and summing points within each bucket. This division makes it well suited for parallel processing on GPUs."),(0,s.yg)("h4",{id:"when-should-i-use-bucket-accumulation"},"When should I use Bucket accumulation?"),(0,s.yg)("p",null,"In scenarios involving large MSM computations with many scalar-point pairs, the ability to parallelize operations makes Bucket Accumulation more efficient. The larger the MSM task, the more significant the potential gains from parallelization."),(0,s.yg)("h3",{id:"large-triangle-accumulation"},"Large triangle accumulation"),(0,s.yg)("p",null,"Large Triangle Accumulation is a method for optimizing MSM which focuses on reducing the number of point doublings in the computation. This algorithm is based on the observation that the number of point doublings can be minimized by structuring the computation in a specific manner."),(0,s.yg)("h4",{id:"when-should-i-use-large-triangle-accumulation"},"When should I use Large triangle accumulation?"),(0,s.yg)("p",null,"The Large Triangle Accumulation algorithm is more sequential in nature, as it builds upon each step sequentially (accumulating sums and then performing doubling). This structure can make it less suitable for parallelization but potentially more efficient for a ",(0,s.yg)("b",null,"large batch of smaller MSM computations"),"."),(0,s.yg)("h2",{id:"msm-modes"},"MSM Modes"),(0,s.yg)("p",null,"ICICLE MSM also supports two different modes ",(0,s.yg)("inlineCode",{parentName:"p"},"Batch MSM")," and ",(0,s.yg)("inlineCode",{parentName:"p"},"Single MSM")),(0,s.yg)("p",null,"Batch MSM allows you to run many MSMs with a single API call, Single MSM will launch a single MSM computation."),(0,s.yg)("h3",{id:"which-mode-should-i-use"},"Which mode should I use?"),(0,s.yg)("p",null,"This decision is highly dependent on your use case and design. However, if your design allows for it, using batch mode can significantly improve efficiency. Batch processing allows you to perform multiple MSMs leveraging the parallel processing capabilities of GPUs."),(0,s.yg)("p",null,"Single MSM mode should be used when batching isn't possible or when you have to run a single MSM."))}g.isMDXComponent=!0},1873:(a,e,n)=>{n(6540)}}]);