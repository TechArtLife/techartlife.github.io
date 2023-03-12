"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[557],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(t),d=r,m=p["".concat(i,".").concat(d)]||p[d]||f[d]||l;return t?a.createElement(m,s(s({ref:n},u),{},{components:t})):a.createElement(m,s({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=d;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[p]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<l;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6436:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const l={title:"Lua\u8bed\u8a00\u5b9e\u73b0\u7c7b\u8bed\u6cd5 Class",date:"2015-05-01T22:12:03.284Z",description:"Ooooooop \u9762\u5411\u5bf9\u8c61"},s="Lua\u7684\u9762\u5411\u5bf9\u8c61",o={unversionedId:"\u7f16\u7a0b\u8bed\u8a00/lua/lua-class/index",id:"\u7f16\u7a0b\u8bed\u8a00/lua/lua-class/index",title:"Lua\u8bed\u8a00\u5b9e\u73b0\u7c7b\u8bed\u6cd5 Class",description:"Ooooooop \u9762\u5411\u5bf9\u8c61",source:"@site/docs/\u7f16\u7a0b\u8bed\u8a00/lua/lua-class/index.md",sourceDirName:"\u7f16\u7a0b\u8bed\u8a00/lua/lua-class",slug:"/\u7f16\u7a0b\u8bed\u8a00/lua/lua-class/",permalink:"/docs/\u7f16\u7a0b\u8bed\u8a00/lua/lua-class/",draft:!1,tags:[],version:"current",frontMatter:{title:"Lua\u8bed\u8a00\u5b9e\u73b0\u7c7b\u8bed\u6cd5 Class",date:"2015-05-01T22:12:03.284Z",description:"Ooooooop \u9762\u5411\u5bf9\u8c61"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528CMake\u5c06Lua\u5d4c\u5165\u5230\u5176\u4ed6\u5e94\u7528\u4e2d",permalink:"/docs/\u7f16\u7a0b\u8bed\u8a00/lua/cmake-lua-embeding/"},next:{title:"Python",permalink:"/docs/\u7f16\u7a0b\u8bed\u8a00/python/"}},i={},c=[],u={toc:c},p="wrapper";function f(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lua\u7684\u9762\u5411\u5bf9\u8c61"},"Lua\u7684\u9762\u5411\u5bf9\u8c61"),(0,r.kt)("p",null,"Lua\u4e0d\u76f4\u63a5\u652f\u6301\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\uff0c\u4f46\u662f\u53ef\u4ee5\u4f7f\u7528Lua\u4e2d\u7684\u8868\u5b9e\u73b0\u7c7b\u4f3c\u7684\u529f\u80fd\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"Vector = {\n    x = 1,\n    y = 2,\n    z = 3,\n}\n\nfunction Vector:length()\n    return math.sqrt((self.x * self.x) + (self.y * self.y) + (self.z * self.z));\nend\n\nprint(Vector:length())\n")),(0,r.kt)("p",null,"\u4f46\u662f\u8fd9\u4e0d\u662f\u6211\u4eec\u60f3\u8981\u7684\u5b9e\u73b0\uff0c\u6211\u4eec\u60f3\u8981\u7684\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"\u7c7b"),"\uff0c\u800c\u4e0d\u662f\u5bf9\u8c61\u3002"),(0,r.kt)("h1",{id:"\u7b80\u6d01\u7684class\u5b9e\u73b0"},"\u7b80\u6d01\u7684class\u5b9e\u73b0"),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528Lua\u4e2d\u7684\u5143\u8868\u6765\u5e2e\u6211\u4eec\u5b9e\u73b0\u5bf9\u8c61\u6a21\u677f\uff0c\u4e5f\u5c31\u662f\u7c7bclass\u6982\u5ff5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"function class(baseClass, body)\n    local ret = body or {}\n\n    if (baseClass ~= nil) then\n        setmetatable(ret, ret)\n        ret.__index = baseClass\n        ret.base = baseClass\n    end\n\n    -- \u4f7f\u7528__index\u5143\u65b9\u6cd5\u521b\u5efa\u5bf9\u8c61\n    ret.new = function (self, constructionData, originalSubClass)\n        local obj\n        if (self.__index ~= nil) then\n            if (originalSubClass ~= nil) then\n                obj = self.__index:new(constructionData, originalSubClass)\n            else\n                obj = self.__index:new(constructionData, self)\n            end\n        else\n            obj = constructionData or {}\n        end\n\n        setmetatable(obj, obj)\n\n        -- \u8bbe\u7f6e\u8bfb\u53d6\u5bf9\u8c61\u5c5e\u6027/\u65b9\u6cd5\u65f6\u7684\u67e5\u627e\u8868\uff0c\u4e5f\u5c31\u662f\u7c7b\n        obj.__index = self\n\n        -- \u590d\u5236\u64cd\u4f5c\u8fd0\u7b97\u7b26\n        if (self.__operators ~= nil) then\n            for key, value in pairs(self.__operators) do\n                obj[key] = value\n            end\n        end\n\n        return obj\n    end\n\n    ret.isInstance = function (self, otherClass)\n        local cls = self.__index\n        while cls do\n            if cls == otherClass then\n                return true\n            end\n            -- \u9012\u5f52\u67e5\u627e\n            cls = cls.base\n        end\n\n        return false\n    end\n\n    return ret\nend\n\n")),(0,r.kt)("h1",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'------------------------------------------\nrequire("LuaClass")\n\n------------------------------------------\n\nVec3 = class(nil, {\n    x = 0,\n    y = 0,\n    z = 0\n})\n\nfunction Vec3:length()\n    return math.sqrt((self.x * self.x) + (self.y * self.y) + (self.z * self.z))\nend\n\nvec3 = Vec3:new({x = 1, y = 2, z = 3})\nprint(vec3:length())\n\n------------------------------------------\nVec4 = class(Vec3, {\n    w = 4\n})\n\nfunction Vec4:length()\n    return math.sqrt((self.x * self.x) + (self.y * self.y) + (self.z * self.z) + (self.w * self.w))\nend\n\nvec4 = Vec4:new({x = 1, y = 2, z = 3, w = 4})\nprint(vec4:length())\n\n------------------------------------------\nprint(vec4:isInstance(Vec3))\n\n')),(0,r.kt)("h1",{id:"github"},"Github"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/TechArtLife/LuaClass"},"https://github.com/TechArtLife/LuaClass")),(0,r.kt)("h1",{id:"\u6ce8\u610f\u53ef\u80fd\u6709\u5751"},"\u6ce8\u610f\uff1a\u53ef\u80fd\u6709\u5751!!!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'require("LuaClass")\n------------------------------------------\nVec3 = class(nil, {\n\xa0 \xa0 data = {1, 2, 3, x = 0}\n})\n\nfunction Vec3:SetData(value)\n\xa0 \xa0 self.data.x = value;\nend\n\na = Vec3:new()\nb = Vec3:new()\n\na:SetData(66)\nb:SetData(100)\nprint("a.data.x is :" .. tostring(a.data.x));\nprint("b.data.x is :" .. tostring(b.data.x));\nprint("ClassBase.data.x is :" .. tostring(Vec3.data.x));\n')),(0,r.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"a.data.x is :100\nb.data.x is :100\nClassBase.data.x is :100\n")),(0,r.kt)("h1",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A simple Class implementation in Lua for Object-Oriented Programming\uff1a ",(0,r.kt)("a",{parentName:"li",href:"https://gist.github.com/paulmoore/1429475"},"https://gist.github.com/paulmoore/1429475")),(0,r.kt)("li",{parentName:"ol"},"Lua\u5b9e\u73b0Class\u9047\u5230\u7684\u4e00\u4e2a\u5751\uff1a ",(0,r.kt)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/95306318"},"https://zhuanlan.zhihu.com/p/95306318"))))}f.isMDXComponent=!0}}]);