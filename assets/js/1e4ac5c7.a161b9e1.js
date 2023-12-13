"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5959],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=u(t),f=i,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||l;return t?r.createElement(m,o(o({ref:n},s),{},{components:t})):r.createElement(m,o({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=f;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[d]="string"==typeof e?e:i,o[1]=a;for(var u=2;u<l;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4603:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var r=t(7462),i=(t(7294),t(3905));const l={title:"\u3010\u7b97\u6cd5\u3011\u5feb\u901f\u6392\u5e8f",date:"2021-05-01T22:12:03.284Z",description:"\u3010\u7b97\u6cd5\u3011\u5feb\u901f\u6392\u5e8f"},o="\u5feb\u901f\u6392\u5e8fC++\u5b9e\u73b0",a={unversionedId:"tech/algorithm/quick-sort/index",id:"tech/algorithm/quick-sort/index",title:"\u3010\u7b97\u6cd5\u3011\u5feb\u901f\u6392\u5e8f",description:"\u3010\u7b97\u6cd5\u3011\u5feb\u901f\u6392\u5e8f",source:"@site/docs/tech/algorithm/quick-sort/index.md",sourceDirName:"tech/algorithm/quick-sort",slug:"/tech/algorithm/quick-sort/",permalink:"/docs/tech/algorithm/quick-sort/",draft:!1,tags:[],version:"current",frontMatter:{title:"\u3010\u7b97\u6cd5\u3011\u5feb\u901f\u6392\u5e8f",date:"2021-05-01T22:12:03.284Z",description:"\u3010\u7b97\u6cd5\u3011\u5feb\u901f\u6392\u5e8f"}},c={},u=[{value:"\u4e00\u3001\u539f\u7406",id:"\u4e00\u539f\u7406",level:2},{value:"\u4e8c\u3001\u5b9e\u73b0",id:"\u4e8c\u5b9e\u73b0",level:2}],s={toc:u},d="wrapper";function p(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u5feb\u901f\u6392\u5e8fc\u5b9e\u73b0"},"\u5feb\u901f\u6392\u5e8fC++\u5b9e\u73b0"),(0,i.kt)("h2",{id:"\u4e00\u539f\u7406"},"\u4e00\u3001\u539f\u7406"),(0,i.kt)("p",null,"\u5feb\u901f\u6392\u5e8f\u4f7f\u7528\u5206\u6cbb\u6cd5\uff08Divide and conquer\uff09\u7b56\u7565\u6765\u628a\u4e00\u4e2a\u5e8f\u5217\uff08list\uff09\u5206\u4e3a\u8f83\u5c0f\u548c\u8f83\u5927\u76842\u4e2a\u5b50\u5e8f\u5217\uff0c\u7136\u540e\u9012\u5f52\u5730\u6392\u5e8f\u4e24\u4e2a\u5b50\u5e8f\u5217\u3002"),(0,i.kt)("p",null,"\u6b65\u9aa4\u4e3a\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"\u6311\u9009\u57fa\u51c6\u503c"),"\uff1a\u4ece\u6570\u5217\u4e2d\u6311\u51fa\u4e00\u4e2a\u5143\u7d20\uff0c\u79f0\u4e3a\u201c\u57fa\u51c6\u201d\uff08pivot\uff09"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"\u5206\u5272"),"\uff1a\u91cd\u65b0\u6392\u5e8f\u6570\u5217\uff0c\u6240\u6709\u6bd4\u57fa\u51c6\u503c\u5c0f\u7684\u5143\u7d20\u6446\u653e\u5728\u57fa\u51c6\u524d\u9762\uff0c\u6240\u6709\u6bd4\u57fa\u51c6\u503c\u5927\u7684\u5143\u7d20\u6446\u5728\u57fa\u51c6\u540e\u9762\uff08\u4e0e\u57fa\u51c6\u503c\u76f8\u7b49\u7684\u6570\u53ef\u4ee5\u5230\u4efb\u4f55\u4e00\u8fb9\uff09\u3002\u5728\u8fd9\u4e2a\u5206\u5272\u7ed3\u675f\u4e4b\u540e\uff0c\u5bf9\u57fa\u51c6\u503c\u7684\u6392\u5e8f\u5c31\u5df2\u7ecf\u5b8c\u6210\uff0c"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"\u9012\u5f52\u6392\u5e8f\u5b50\u5e8f\u5217"),"\uff1a\u9012\u5f52\u5730\u5c06\u5c0f\u4e8e\u57fa\u51c6\u503c\u5143\u7d20\u7684\u5b50\u5e8f\u5217\u548c\u5927\u4e8e\u57fa\u51c6\u503c\u5143\u7d20\u7684\u5b50\u5e8f\u5217\u6392\u5e8f\u3002")),(0,i.kt)("p",null,"\u9012\u5f52\u5230\u6700\u5e95\u90e8\u7684\u5224\u65ad\u6761\u4ef6\u662f\u6570\u5217\u7684\u5927\u5c0f\u662f\u96f6\u6216\u4e00\uff0c\u6b64\u65f6\u8be5\u6570\u5217\u663e\u7136\u5df2\u7ecf\u6709\u5e8f\u3002"),(0,i.kt)("h2",{id:"\u4e8c\u5b9e\u73b0"},"\u4e8c\u3001\u5b9e\u73b0"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <iostream>\n#include <vector>\n#include <cassert>\nusing namespace std;\n\nvoid quickSort(vector<int> &nums, int left, int right)\n{\n    if (left >= right)\n        return;\n\n    int leftIndex = left;\n    int rightIndex = right;\n    int curValue = nums[left];\n    // \u627e\u5230curValue\u7684\u5728\u6570\u7ec4\u4e2d\u7684\u6700\u7ec8\u4f4d\u7f6e\n    while (leftIndex < rightIndex)\n    {\n        // \u4ece\u53f3\u5411\u5de6\u627e\u5230\u7b2c\u4e00\u4e2a\u5c0f\u4e8ecurValue\u7684\n        while (leftIndex < rightIndex && nums[rightIndex] >= curValue)\n        {\n            rightIndex--;\n        }\n        if (leftIndex < rightIndex)\n            nums[leftIndex++] = nums[rightIndex];\n        // \u4ece\u5de6\u5411\u53f3\u627e\u5230\u7b2c\u4e00\u4e2a\u5927\u4e8e\u7b49\u4e8ecurValue\u7684\n        while (leftIndex < rightIndex && nums[leftIndex] < curValue)\n        {\n            leftIndex++;\n        }\n        if (leftIndex < rightIndex)\n            nums[rightIndex--] = nums[leftIndex];\n    }\n\n    // assert(leftIndex == rightIndex);\n    // \u6b64\u65f6 leftIndex == rightIndex\uff0c\u4e5f\u5c31\u662fcurValue\u7684\u6700\u7ec8\u4f4d\u7f6e\n    nums[leftIndex] = curValue;\n\n    quickSort(nums, left, leftIndex - 1);\n    quickSort(nums, leftIndex + 1, right);\n}\n\nint main()\n{\n    vector<int> nums = {1, 3, 10, 4, 8, 6, 3, 9, 2, 5, 7};\n    quickSort(nums, 0, nums.size() - 1);\n    for (int i = 0; i < nums.size(); ++i)\n        cout << nums[i] << " ";\n    return 0;\n}\n\n')))}p.isMDXComponent=!0}}]);