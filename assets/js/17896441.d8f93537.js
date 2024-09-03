"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8401],{5680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>g});var a=n(6540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=i(n),p=l,g=m["".concat(s,".").concat(p)]||m[p]||u[p]||o;return n?a.createElement(g,r(r({ref:t},d),{},{components:n})):a.createElement(g,r({ref:t},d))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:l,r[1]=c;for(var i=2;i<o;i++)r[i]=n[i];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7318:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ae});var a=n(6540),l=n(53),o=n(8168),r=n(1312),c=n(5489);function s(e){const{permalink:t,title:n,subLabel:l}=e;return a.createElement(c.A,{className:"pagination-nav__link",to:t},l&&a.createElement("div",{className:"pagination-nav__sublabel"},l),a.createElement("div",{className:"pagination-nav__label"},n))}function i(e){const{previous:t,next:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},a.createElement("div",{className:"pagination-nav__item"},t&&a.createElement(s,(0,o.A)({},t,{subLabel:a.createElement(r.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&a.createElement(s,(0,o.A)({},n,{subLabel:a.createElement(r.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))))}var d=n(4586),m=n(7712),u=n(7749);const p={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(r.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(r.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function g(e){const t=p[e.versionMetadata.banner];return a.createElement(t,e)}function h(e){let{versionLabel:t,to:n,onClick:l}=e;return a.createElement(r.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(c.A,{to:n,onClick:l},a.createElement(r.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function b(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:o}}=(0,d.A)(),{pluginId:r}=(0,m.vT)({failfast:!0}),{savePreferredVersionName:c}=(0,u.g1)(r),{latestDocSuggestion:s,latestVersionSuggestion:i}=(0,m.HW)(r),p=s??(b=i).docs.find((e=>e.id===b.mainDocId));var b;return a.createElement("div",{className:(0,l.A)(t,u.GN.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(g,{siteTitle:o,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(h,{versionLabel:i.label,to:p.path,onClick:()=>c(i.name)})))}function v(e){let{className:t}=e;const n=(0,u.rv)();return n.banner?a.createElement(b,{className:t,versionMetadata:n}):null}function y(e){let{className:t}=e;const n=(0,u.rv)();return n.badge?a.createElement("span",{className:(0,l.A)(t,u.GN.docs.docVersionBadge,"badge badge--secondary")},a.createElement(r.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function f(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(r.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function E(e){let{lastUpdatedBy:t}=e;return a.createElement(r.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function k(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:l}=e;return a.createElement("span",{className:u.GN.common.lastUpdated},a.createElement(r.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(f,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:l?a.createElement(E,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}const N={iconEdit:"iconEdit_dcUD"};function A(e){let{className:t,...n}=e;return a.createElement("svg",(0,o.A)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.A)(N.iconEdit,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function C(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.GN.common.editThisPage},a.createElement(A,null),a.createElement(r.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}const _={tag:"tag_hD8n",tagRegular:"tagRegular_D6E_",tagWithCount:"tagWithCount_i0QQ"};function T(e){const{permalink:t,name:n,count:o}=e;return a.createElement(c.A,{href:t,className:(0,l.A)(_.tag,o?_.tagWithCount:_.tagRegular)},n,o&&a.createElement("span",null,o))}const L={tags:"tags_XVD_",tag:"tag_JSN8"};function B(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(r.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,l.A)(L.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:L.tag},a.createElement(T,{name:t,permalink:n}))}))))}const O={lastUpdated:"lastUpdated_foO9"};function w(e){return a.createElement("div",{className:(0,l.A)(u.GN.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(B,e)))}function x(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:o,formattedLastUpdatedAt:r}=e;return a.createElement("div",{className:(0,l.A)(u.GN.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(C,{editUrl:t})),a.createElement("div",{className:(0,l.A)("col",O.lastUpdated)},(n||o)&&a.createElement(k,{lastUpdatedAt:n,formattedLastUpdatedAt:r,lastUpdatedBy:o})))}function S(e){const{content:t}=e,{metadata:n}=t,{editUrl:o,lastUpdatedAt:r,formattedLastUpdatedAt:c,lastUpdatedBy:s,tags:i}=n,d=i.length>0,m=!!(o||r||s);return d||m?a.createElement("footer",{className:(0,l.A)(u.GN.docs.docFooter,"docusaurus-mt-lg")},d&&a.createElement(w,{tags:i}),m&&a.createElement(x,{editUrl:o,lastUpdatedAt:r,lastUpdatedBy:s,formattedLastUpdatedAt:c})):null}function U(e){let{toc:t,className:n,linkClassName:l,isChild:o}=e;return t.length?a.createElement("ul",{className:o?void 0:n},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(U,{isChild:!0,toc:e.children,className:n,linkClassName:l}))))):null}function P(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:c,maxHeadingLevel:s,...i}=e;const d=(0,u.pN)(),m=c??d.tableOfContents.minHeadingLevel,p=s??d.tableOfContents.maxHeadingLevel,g=(0,u.h9)({toc:t,minHeadingLevel:m,maxHeadingLevel:p}),h=(0,a.useMemo)((()=>{if(l&&r)return{linkClassName:l,linkActiveClassName:r,minHeadingLevel:m,maxHeadingLevel:p}}),[l,r,m,p]);return(0,u.i3)(h),a.createElement(U,(0,o.A)({toc:g,className:n,linkClassName:l},i))}const I={tableOfContents:"tableOfContents_cNA8",docItemContainer:"docItemContainer_WX_Y"},j="table-of-contents__link toc-highlight",D="table-of-contents__link--active";function H(e){let{className:t,...n}=e;return a.createElement("div",{className:(0,l.A)(I.tableOfContents,"thin-scrollbar",t)},a.createElement(P,(0,o.A)({},n,{linkClassName:j,linkActiveClassName:D})))}const M={tocCollapsible:"tocCollapsible_jdIR",tocCollapsibleButton:"tocCollapsibleButton_Fzxq",tocCollapsibleContent:"tocCollapsibleContent_MpvI",tocCollapsibleExpanded:"tocCollapsibleExpanded_laf4"};function V(e){let{toc:t,className:n,minHeadingLevel:o,maxHeadingLevel:c}=e;const{collapsed:s,toggleCollapsed:i}=(0,u.uW)({initialState:!0});return a.createElement("div",{className:(0,l.A)(M.tocCollapsible,!s&&M.tocCollapsibleExpanded,n)},a.createElement("button",{type:"button",className:(0,l.A)("clean-btn",M.tocCollapsibleButton),onClick:i},a.createElement(r.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),a.createElement(u.Nt,{lazy:!0,className:M.tocCollapsibleContent,collapsed:s},a.createElement(P,{toc:t,minHeadingLevel:o,maxHeadingLevel:c})))}const R={anchorWithStickyNavbar:"anchorWithStickyNavbar_mojV",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_R0VQ"};function W(e){let{as:t,id:n,...c}=e;const{navbar:{hideOnScroll:s}}=(0,u.pN)();return n?a.createElement(t,(0,o.A)({},c,{className:(0,l.A)("anchor",s?R.anchorWithHideOnScrollNavbar:R.anchorWithStickyNavbar),id:n}),c.children,a.createElement("a",{className:"hash-link",href:`#${n}`,title:(0,r.T)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):a.createElement(t,c)}function F(e){let{as:t,...n}=e;return"h1"===t?a.createElement("h1",(0,o.A)({},n,{id:void 0}),n.children):a.createElement(W,(0,o.A)({as:t},n))}const G={docItemContainer:"docItemContainer_vinB",docItemCol:"docItemCol_DM6M",tocMobile:"tocMobile_TmEX"},z={breadcrumbsContainer:"breadcrumbsContainer_Xlws"};var X=n(6025);function $(e){let{children:t,href:n}=e;const l="breadcrumbs__link";return n?a.createElement(c.A,{className:l,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:l,itemProp:"item name"},t)}function Q(e){let{children:t,active:n,index:o}=e;return a.createElement("li",{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem",className:(0,l.A)("breadcrumbs__item",{"breadcrumbs__item--active":n})},t,a.createElement("meta",{itemProp:"position",content:String(o+1)}))}function q(){const e=(0,X.A)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(c.A,{className:(0,l.A)("breadcrumbs__link",z.breadcrumbsItemLink),href:e},"\ud83c\udfe0"))}function Z(){const e=(0,u.OF)(),t=(0,u.Dt)();return e?a.createElement("nav",{className:(0,l.A)(u.GN.docs.docBreadcrumbs,z.breadcrumbsContainer),"aria-label":"breadcrumbs"},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(q,null),e.map(((t,n)=>a.createElement(Q,{key:n,active:n===e.length-1,index:n},a.createElement($,{href:n<e.length-1?t.href:void 0},t.label)))))):null}var J=n(5680),Y=n(5260);const K={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var ee={Prism:n(1258).default,theme:K};function te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ne(){return ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},ne.apply(this,arguments)}var ae=/\r\n|\r|\n/,le=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},oe=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)};function re(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var ce=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),te(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?function(e,t){var n=e.plain,a=Object.create(null),l=e.styles.reduce((function(e,n){var a=n.languages,l=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=ne({},e[t],l);e[t]=n})),e}),a);return l.root=n,l.plain=ne({},n,{backgroundColor:null}),l}(e.theme,e.language):void 0;return t.themeDict=n})),te(this,"getLineProps",(function(e){var n=e.key,a=e.className,l=e.style,o=ne({},re(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),r=t.getThemeDict(t.props);return void 0!==r&&(o.style=r.plain),void 0!==l&&(o.style=void 0!==o.style?ne({},o.style,l):l),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),te(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,l=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===l&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===l&&!a)return o[n[0]];var r=a?{display:"inline-block"}:{},c=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[r].concat(c))}})),te(this,"getTokenProps",(function(e){var n=e.key,a=e.className,l=e.style,o=e.token,r=ne({},re(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==l&&(r.style=void 0!==r.style?ne({},r.style,l):l),void 0!==n&&(r.key=n),a&&(r.className+=" "+a),r})),te(this,"tokenize",(function(e,t,n,a){var l={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",l);var o=l.tokens=e.tokenize(l.code,l.grammar,l.language);return e.hooks.run("after-tokenize",l),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,l=e.children,o=this.getThemeDict(this.props),r=t.languages[n];return l({tokens:function(e){for(var t=[[]],n=[e],a=[0],l=[e.length],o=0,r=0,c=[],s=[c];r>-1;){for(;(o=a[r]++)<l[r];){var i=void 0,d=t[r],m=n[r][o];if("string"==typeof m?(d=r>0?d:["plain"],i=m):(d=oe(d,m.type),m.alias&&(d=oe(d,m.alias)),i=m.content),"string"==typeof i){var u=i.split(ae),p=u.length;c.push({types:d,content:u[0]});for(var g=1;g<p;g++)le(c),s.push(c=[]),c.push({types:d,content:u[g]})}else r++,t.push(d),n.push(i),a.push(0),l.push(i.length)}r--,t.pop(),n.pop(),a.pop(),l.pop()}return le(c),s}(void 0!==r?this.tokenize(t,a,r,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);const se=ce;const ie={copyButton:"copyButton_eDfN",copyButtonCopied:"copyButtonCopied_ljy5",copyButtonIcons:"copyButtonIcons_W9eQ",copyButtonIcon:"copyButtonIcon_XEyF",copyButtonSuccessIcon:"copyButtonSuccessIcon_i9w9"};function de(e){let{code:t}=e;const[n,o]=(0,a.useState)(!1),c=(0,a.useRef)(void 0),s=(0,a.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const a=document.createElement("textarea"),l=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const o=document.getSelection(),r=o.rangeCount>0&&o.getRangeAt(0);n.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}a.remove(),r&&(o.removeAllRanges(),o.addRange(r)),l&&l.focus()}(t),o(!0),c.current=window.setTimeout((()=>{o(!1)}),1e3)}),[t]);return(0,a.useEffect)((()=>()=>window.clearTimeout(c.current)),[]),a.createElement("button",{type:"button","aria-label":n?(0,r.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,r.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,r.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,l.A)(ie.copyButton,"clean-btn",n&&ie.copyButtonCopied),onClick:s},a.createElement("span",{className:ie.copyButtonIcons,"aria-hidden":"true"},a.createElement("svg",{className:ie.copyButtonIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),a.createElement("svg",{className:ie.copyButtonSuccessIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const me={codeBlockContainer:"codeBlockContainer_I0IT",codeBlockContent:"codeBlockContent_wNvx",codeBlockTitle:"codeBlockTitle_BvAR",codeBlock:"codeBlock_jd64",codeBlockStandalone:"codeBlockStandalone_csWH",codeBlockLines:"codeBlockLines_mRuA"};function ue(e){let{children:t,className:n="",metastring:r,title:c,language:s}=e;const{prism:i}=(0,u.pN)(),[d,m]=(0,a.useState)(!1);(0,a.useEffect)((()=>{m(!0)}),[]);const p=(0,u.wt)(r)||c,g=(0,u.Ai)();if(a.Children.toArray(t).some((e=>(0,a.isValidElement)(e))))return a.createElement(se,(0,o.A)({},ee,{key:String(d),theme:g,code:"",language:"text"}),(e=>{let{className:o,style:r}=e;return a.createElement("pre",{tabIndex:0,className:(0,l.A)(o,me.codeBlockStandalone,"thin-scrollbar",me.codeBlockContainer,n,u.GN.common.codeBlock),style:r},a.createElement("code",{className:me.codeBlockLines},t))}));const h=Array.isArray(t)?t.join(""):t,b=s??(0,u.Op)(n)??i.defaultLanguage,{highlightLines:v,code:y}=(0,u.Li)(h,r,b);return a.createElement(se,(0,o.A)({},ee,{key:String(d),theme:g,code:y,language:b??"text"}),(e=>{let{className:t,style:r,tokens:c,getLineProps:s,getTokenProps:i}=e;return a.createElement("div",{className:(0,l.A)(me.codeBlockContainer,n,{[`language-${b}`]:b&&!n.includes(`language-${b}`)},u.GN.common.codeBlock)},p&&a.createElement("div",{style:r,className:me.codeBlockTitle},p),a.createElement("div",{className:me.codeBlockContent,style:r},a.createElement("pre",{tabIndex:0,className:(0,l.A)(t,me.codeBlock,"thin-scrollbar")},a.createElement("code",{className:me.codeBlockLines},c.map(((e,t)=>{1===e.length&&"\n"===e[0].content&&(e[0].content="");const n=s({line:e,key:t});return v.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),a.createElement("span",(0,o.A)({key:t},n),e.map(((e,t)=>a.createElement("span",(0,o.A)({key:t},i({token:e,key:t}))))),a.createElement("br",null))})))),a.createElement(de,{code:y})))}))}const pe={details:"details_BAp3"},ge="alert alert--info";function he(e){let{...t}=e;return a.createElement(u.B_,(0,o.A)({},t,{className:(0,l.A)(ge,pe.details,t.className)}))}function be(e){return a.createElement(F,e)}const ve="contains-task-list_tsSF";const ye={img:"img_E7b_"};const fe={head:function(e){const t=a.Children.map(e.children,(e=>function(e){if(e?.props?.mdxType&&e?.props?.originalType){const{mdxType:t,originalType:n,...l}=e.props;return a.createElement(e.props.originalType,l)}return e}(e)));return a.createElement(Y.A,e,t)},code:function(e){const t=["a","b","big","i","span","em","strong","sup","sub","small"];return a.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(e.props.mdxType)))?a.createElement("code",e):a.createElement(ue,e)},a:function(e){return a.createElement(c.A,e)},pre:function(e){return a.createElement(ue,(0,a.isValidElement)(e.children)&&"code"===e.children.props.originalType?e.children?.props:{...e})},details:function(e){const t=a.Children.toArray(e.children),n=t.find((e=>"summary"===e?.props?.mdxType)),l=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return a.createElement(he,(0,o.A)({},e,{summary:n}),l)},ul:function(e){return a.createElement("ul",(0,o.A)({},e,{className:(t=e.className,(0,l.A)(t,t?.includes("contains-task-list")&&ve))}));var t},img:function(e){return a.createElement("img",(0,o.A)({loading:"lazy"},e,{className:(t=e.className,(0,l.A)(t,ye.img))}));var t},h1:e=>a.createElement(be,(0,o.A)({as:"h1"},e)),h2:e=>a.createElement(be,(0,o.A)({as:"h2"},e)),h3:e=>a.createElement(be,(0,o.A)({as:"h3"},e)),h4:e=>a.createElement(be,(0,o.A)({as:"h4"},e)),h5:e=>a.createElement(be,(0,o.A)({as:"h5"},e)),h6:e=>a.createElement(be,(0,o.A)({as:"h6"},e))};function Ee(e){let{children:t}=e;return a.createElement(J.xA,{components:fe},t)}function ke(e){const{content:t}=e,{metadata:n,frontMatter:l,assets:o}=t,{keywords:r}=l,{description:c,title:s}=n,i=o.image??l.image;return a.createElement(u.be,{title:s,description:c,keywords:r,image:i})}function Ne(e){const{content:t}=e,{metadata:n,frontMatter:o}=t,{hide_title:r,hide_table_of_contents:c,toc_min_heading_level:s,toc_max_heading_level:d}=o,{title:m}=n,p=!r&&void 0===t.contentTitle,g=(0,u.lW)(),h=!c&&t.toc&&t.toc.length>0,b=h&&("desktop"===g||"ssr"===g);return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,l.A)("col",!c&&G.docItemCol)},a.createElement(v,null),a.createElement("div",{className:G.docItemContainer},a.createElement("article",null,a.createElement(Z,null),a.createElement(y,null),h&&a.createElement(V,{toc:t.toc,minHeadingLevel:s,maxHeadingLevel:d,className:(0,l.A)(u.GN.docs.docTocMobile,G.tocMobile)}),a.createElement("div",{className:(0,l.A)(u.GN.docs.docMarkdown,"markdown")},p&&a.createElement("header",null,a.createElement(F,{as:"h1"},m)),a.createElement(Ee,null,a.createElement(t,null))),a.createElement(S,e)),a.createElement(i,{previous:n.previous,next:n.next}))),b&&a.createElement("div",{className:"col col--3"},a.createElement(H,{toc:t.toc,minHeadingLevel:s,maxHeadingLevel:d,className:u.GN.docs.docTocDesktop})))}function Ae(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`;return a.createElement(u.e3,{className:t},a.createElement(ke,e),a.createElement(Ne,e))}}}]);