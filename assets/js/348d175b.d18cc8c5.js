"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4219],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(r),f=o,d=s["".concat(l,".").concat(f)]||s[f]||m[f]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5195:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={title:"\u300a\u6e38\u620f\u5f15\u64ce\u67b6\u6784\u300b\u7b14\u8bb0-0-\u5e8f\u8a00",date:"2015-05-01T22:12:03.284Z",description:"Hello World"},i=void 0,c={unversionedId:"GameDev/game-engine-architecture-notes/intro",id:"GameDev/game-engine-architecture-notes/intro",title:"\u300a\u6e38\u620f\u5f15\u64ce\u67b6\u6784\u300b\u7b14\u8bb0-0-\u5e8f\u8a00",description:"Hello World",source:"@site/docs/GameDev/game-engine-architecture-notes/0-intro.md",sourceDirName:"GameDev/game-engine-architecture-notes",slug:"/GameDev/game-engine-architecture-notes/intro",permalink:"/docs/GameDev/game-engine-architecture-notes/intro",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"\u300a\u6e38\u620f\u5f15\u64ce\u67b6\u6784\u300b\u7b14\u8bb0-0-\u5e8f\u8a00",date:"2015-05-01T22:12:03.284Z",description:"Hello World"},sidebar:"tutorialSidebar",previous:{title:"Game Engine",permalink:"/docs/GameDev/game-engine-architecture-notes/"},next:{title:"\u300a\u6e38\u620f\u5f15\u64ce\u67b6\u6784\u300b\u7b14\u8bb0-1-\u6e32\u67d3\u6d41\u7a0b",permalink:"/docs/GameDev/game-engine-architecture-notes/rendering"}},l={},u=[{value:"\u8d77\u624b - \u6e32\u67d3",id:"\u8d77\u624b---\u6e32\u67d3",level:2}],p={toc:u},s="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u56e0\u8fd1\u671f\u9700\u6c42\u6240\u81f4\uff0c\u9700\u8981\u770b\u5927\u578b\u9879\u76ee\u7684\u6e90\u7801\uff0c\u4e14\u8981\u505a\u4e00\u4e9b\u4fee\u6539\u3002\u4f46\u770b\u6e90\u7801\u8fc7\u7a0b\u4e2d\u53d1\u73b0\uff0c\u6709\u4e9b\u6982\u5ff5\u4e0d\u662f\u6d4f\u89c8\u4e00\u904d\u6e90\u7801\u5c31\u80fd\u641e\u6e05\u695a\u7684\uff0c\u5c24\u5176\u65f6\u6e90\u7801\u4e2d\u51e0\u4e4e\u6ca1\u6709\u6ce8\u91ca\u3002\u5176\u4e2d\uff0c\u6709\u4e9b\u53ef\u80fd\u65f6\u5f15\u64ce\u884c\u4e1a\u7684\u5171\u8bc6\uff0c\u6709\u4e9b\u53ef\u80fd\u9700\u8981\u4ece\u6574\u4f53\u53bb\u7406\u89e3\u3002\u4e00\u4e2a\u5927\u578b\u9879\u76ee\u7684\u6267\u884c\u8fc7\u7a0b\u5206\u6790\uff0c\u4ec5\u9760\u5355\u6b65\u8c03\u8bd5\u5df2\u8fdc\u8fdc\u65e0\u6cd5\u5e94\u5bf9\u3002"),(0,o.kt)("p",null,"\u6240\u4ee5\uff0c\u4fbf\u6709\u4e86\u6574\u7406\u81ea\u5df1\u7684\u77e5\u8bc6\u4f53\u7cfb\u7684\u60f3\u6cd5\uff0c\u6070\u597d\u4e66\u67b6\u4e0a\u6709\u4e00\u672c\u300a\u6e38\u620f\u5f15\u64ce\u67b6\u6784\u300b\u7b2c2\u7248\uff08\u4e2d\u6587\uff09\uff0c\u4fbf\u4ee5\u6b64\u4e66\u63d0\u7eb2\u6308\u9886\uff0c\u4f5c\u4e3a\u5b66\u4e60\u4e4b\u4e3b\u7ebf\uff0c\u7531\u6b64\u5411\u5916\u53d1\u6563\u3002\u5f53\u7136\uff0c\u5b66\u4e60\u987a\u5e8f\u7531\u9700\u6c42\u800c\u5b9a\uff0c\u4e0d\u4f1a\u6309\u7167\u4e66\u7c4d\u987a\u5e8f\u8fdb\u884c\u3002"),(0,o.kt)("p",null,"\u5b66\u4e60\u8fc7\u7a0b\u4e2d\u7684\u603b\u7ed3\u4fbf\u5728\u6b64\u5904\u8bb0\u5f55\uff0c\u4e00\u662f\u65b9\u4fbf\u67e5\u9605\uff0c\u4e8c\u5219\u662f\u672c\u4e3a\u5b66\u4e60\u8fc7\u7a0b\uff0c\u758f\u6f0f\u548c\u9519\u8bef\u5728\u6240\u96be\u514d\uff0c\u4e8e\u6b64\u4e5f\u65b9\u4fbf\u4ea4\u6d41\u3002"),(0,o.kt)("h2",{id:"\u8d77\u624b---\u6e32\u67d3"},"\u8d77\u624b - \u6e32\u67d3"),(0,o.kt)("p",null,"\u867d\u8bf4\u662f\u6e38\u620f\u5f15\u64ce\u67b6\u6784\u5b66\u4e60\uff0c\u4f46\u76ee\u524d\u5b66\u4e60\u7684\u4e3b\u65b9\u5411\u8fd8\u662f\u6e32\u67d3\u6a21\u5757\u3002\u672c\u8eab\u5bf9\u6e32\u67d3\u4e5f\u7565\u6709\u4e9b\u7ecf\u9a8c\uff0c\u7ecf\u5178\u7684OpenGL\u548cDirect3D\u4e24\u4e2aAPI\u5747\u4ee5\u4ece\u5e95\u5c42\u5199\u8fc7Demo\uff0cUnity\u4e5f\u6709\u5b9e\u6218\u7ecf\u9a8c\uff0c\u56e0\u6b64\u6e32\u67d3\u90e8\u5206\u7684\u5b66\u4e60\u4e3b\u8981\u653e\u5728\u67b6\u6784\u8bbe\u8ba1\u65b9\u9762\u3002\u62d3\u5c55\u81ea\u5df1\u5bf9\u4e13\u4e1a\u6e32\u67d3\u7cfb\u7edf\u7684\u7406\u89e3\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5e8f\u8a00\u5df2\u6bd5\uff0c\u8be6\u60c5\u4e14\u542c\u4e0b\u56de\u5206\u89e3\u3002")))}m.isMDXComponent=!0}}]);