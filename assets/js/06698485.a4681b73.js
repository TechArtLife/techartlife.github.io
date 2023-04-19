"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4630],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),m=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=m(e.components);return a.createElement(p.Provider,{value:n},e.children)},i="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},_=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),i=m(t),_=r,u=i["".concat(p,".").concat(_)]||i[_]||d[_]||o;return t?a.createElement(u,l(l({ref:n},s),{},{components:t})):a.createElement(u,l({ref:n},s))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=_;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c[i]="string"==typeof e?e:r,l[1]=c;for(var m=2;m<o;m++)l[m]=t[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}_.displayName="MDXCreateElement"},1858:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var a=t(7462),r=(t(7294),t(3905));const o={title:"5.\u81ea\u7531\u79fb\u52a8\u7684\u76f8\u673a",date:"2015-05-01T22:12:03.284Z",description:"\u3010\u56fe\u5f62\u5b66\u3011OpenGL-5-\u81ea\u7531\u79fb\u52a8\u7684\u76f8\u673a-FlyCamera"},l=void 0,c={unversionedId:"GameDev/Other/OpenGL/camera",id:"GameDev/Other/OpenGL/camera",title:"5.\u81ea\u7531\u79fb\u52a8\u7684\u76f8\u673a",description:"\u3010\u56fe\u5f62\u5b66\u3011OpenGL-5-\u81ea\u7531\u79fb\u52a8\u7684\u76f8\u673a-FlyCamera",source:"@site/docs/GameDev/Other/OpenGL/5-camera.md",sourceDirName:"GameDev/Other/OpenGL",slug:"/GameDev/Other/OpenGL/camera",permalink:"/docs/GameDev/Other/OpenGL/camera",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"5.\u81ea\u7531\u79fb\u52a8\u7684\u76f8\u673a",date:"2015-05-01T22:12:03.284Z",description:"\u3010\u56fe\u5f62\u5b66\u3011OpenGL-5-\u81ea\u7531\u79fb\u52a8\u7684\u76f8\u673a-FlyCamera"},sidebar:"tutorialSidebar",previous:{title:"4.\u7269\u4f53\u53d8\u6362",permalink:"/docs/GameDev/Other/OpenGL/transform"},next:{title:"Game Engine",permalink:"/docs/GameDev/Other/game-engine-architecture-notes/"}},p={},m=[{value:"0.\u7b80\u4ecb",id:"0\u7b80\u4ecb",level:2},{value:"1.\u521b\u5efaActor",id:"1\u521b\u5efaactor",level:2},{value:"1.1.\u521b\u5efaCube Actor",id:"11\u521b\u5efacube-actor",level:3},{value:"1.2.\u521b\u5efaCamera Actor",id:"12\u521b\u5efacamera-actor",level:3},{value:"2.Scene\u573a\u666f\u7ba1\u7406",id:"2scene\u573a\u666f\u7ba1\u7406",level:2},{value:"3.\u6e32\u67d3\u91cd\u6784",id:"3\u6e32\u67d3\u91cd\u6784",level:2},{value:"3.1.\u624b\u52a8\u63a7\u5236GPU\u8d44\u6e90load/unload",id:"31\u624b\u52a8\u63a7\u5236gpu\u8d44\u6e90loadunload",level:3},{value:"3.2.\u6e32\u67d3\u65b9\u6cd5",id:"32\u6e32\u67d3\u65b9\u6cd5",level:3},{value:"4.\u7ed3\u679c\u5c55\u793a",id:"4\u7ed3\u679c\u5c55\u793a",level:2},{value:"5.\u603b\u7ed3",id:"5\u603b\u7ed3",level:2}],s={toc:m},i="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(i,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"0\u7b80\u4ecb"},"0.\u7b80\u4ecb"),(0,r.kt)("p",null,"\u8ddd\u79bb\u4e0a\u6b21\u66f4\u65b0\u5df2\u7ecf\u4e24\u4e2a\u591a\u6708\u4e86\uff0c\u8fd9\u6bb5\u65f6\u95f4\u5bf9\u6574\u4e2a\u6846\u67b6\u505a\u4e86\u4e00\u4e9b\u8c03\u6574\u3002\u4e3b\u8981\u6709\u4e00\u4e0b\u51e0\u4e2a\u65b9\u9762\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"\u7edf\u4e00\u7684\u8d44\u6e90\u7ba1\u7406"),"\uff1a \u589e\u52a0\u4e86load\u548cunload\u63a5\u53e3\uff0c\u52a0\u8f7d\u56fe\u7247\u65f6\u81ea\u52a8\u521b\u5efaTexture\uff08\u4f46\u4e0d\u521b\u5efaGPU\u8d44\u6e90\uff09\uff0c\u4e0d\u518d\u4f7f\u7528\u52a0\u8f7d\u56fe\u7247\u548c\u624b\u52a8\u521b\u5efaTexture\u7684\u4e24\u6b65\u65b9\u5f0f\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"\u6e32\u67d3\u91cd\u6784"),"\uff1a \u5c06Mesh\u751f\u6210\u7684OpenGL VAO/VBO/EBO\u4fdd\u5b58\u5728Mesh\u7ec4\u4ef6\u4e2d\uff0c\u5c06Texture ID\u4f9d\u65e7\u4fdd\u5b58\u5728Texture\u7c7b\u4e2d\uff0c\u5728\u9700\u8981\u65f6\u624b\u52a8load/unload GPU\u8d44\u6e90\uff0c\u4e0d\u518d\u6bcf\u6b21Render\u91cd\u65b0\u751f\u6210\uff0c\u5927\u5e45\u63d0\u5347\u4e86\u6e32\u67d3\u901f\u5ea6\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"\u573a\u666f\u7ba1\u7406"),"\uff1a \u589e\u52a0Scene\u7c7b\uff0c\u7528\u6765\u7ba1\u7406\u573a\u666f\u4e2d\u7684Actor\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"\u76f8\u673a\u7ec4\u4ef6"),"\uff1a \u589e\u52a0\u76f8\u673a\u7ec4\u4ef6\u4ee5\u5b9e\u73b0\u573a\u666f\u4e2d\u7684\u4e3b\u76f8\u673aMainCamera\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"\u76f8\u673a\u7684Input\u7ec4\u4ef6"),"\uff1a \u6682\u65f6\u662f\u7ed9\u76f8\u673aActor\u4f7f\u7528\u7684\uff0c\u7528\u6765\u5904\u7406\u7528\u6237\u8f93\u5165\uff0c\u4ece\u800c\u63a7\u5236\u76f8\u673a\u79fb\u52a8\u3002"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"WASDQE\u63a7\u5236\u76f8\u673a\u5728\u573a\u666f\u4e2d\u79fb\u52a8"),(0,r.kt)("li",{parentName:"ul"},"\u6309\u4f4f\u53f3\u952e\u65cb\u8f6c\u76f8\u673a\u89c6\u89d2"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"\u4e00\u4e9b\u4e34\u65f6\u66f4\u6539"),"\uff1a \u5c1d\u8bd5\u4f7f\u7528\u56db\u5143\u6570\u5b9e\u73b0\u76f8\u673a\u7684\u65cb\u8f6c\u63a7\u5236\uff0c\u8fd8\u633a\u597d\u7528\u3002"))),(0,r.kt)("h2",{id:"1\u521b\u5efaactor"},"1.\u521b\u5efaActor"),(0,r.kt)("h3",{id:"11\u521b\u5efacube-actor"},"1.1.\u521b\u5efaCube Actor"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def create_cube(self, i, pos):\n    # 1.\u521b\u5efa\u6e32\u67d3Actor\n    new_actor = Actor()\n    new_actor.name = new_actor.name + str(i)\n\n    transform_comp = TransformComponent()\n    transform_comp.position = pos\n    transform_comp.angle = 20.0 * i\n    transform_comp.rotation_axis = glm.vec3(1.0, 0.3, 0.5)\n    transform_comp.update_matrix()\n    new_actor.add_component(transform_comp)\n\n    # 2.\u521b\u5efaMesh\u7ec4\u4ef6\n    mesh_comp = MeshComponent()\n    mesh_comp.use_default_cube()\n    new_actor.add_component(mesh_comp)\n\n    # 3.\u521b\u5efaMaterial\u7ec4\u4ef6\n    mat_comp = MaterialComponent()\n    shader_name = 'camera_shader'\n    mat_shader = self._asset_manager.get_shader(shader_name)\n    mat_comp.set_shader(mat_shader)\n    new_tex = self._asset_manager.get_texture('keqing')\n    mat_comp.bind_texture('icon_tex', new_tex)\n    new_actor.add_component(mat_comp)\n\n    self._scene.add_actor(new_actor)\n")),(0,r.kt)("h3",{id:"12\u521b\u5efacamera-actor"},"1.2.\u521b\u5efaCamera Actor"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# \u76f8\u673aActor\nself._cam_actor = Actor()\nself._cam_actor.name = 'MainCamera'\nself._cam_actor.set_visible(False)\n\n# \u76f8\u673a\u7684Transform\ntransform_comp = TransformComponent()\ntransform_comp.position = glm.vec3(0.0,  0.0,  10.0)\ntransform_comp.update_matrix()\nself._cam_actor.add_component(transform_comp)\n# \u76f8\u673a\u7ec4\u4ef6\ncamera_comp = CameraComponent()\ncamera_comp.set_screen_size(800, 600)\nself._cam_actor.add_component(camera_comp)\n# \u8f93\u5165\u7ec4\u4ef6\ninput_comp = CameraInputComponent()\nself._cam_actor.add_component(input_comp)\nself._scene.add_actor(self._cam_actor)\n\nself._scene.set_camera(self._cam_actor)\n")),(0,r.kt)("h2",{id:"2scene\u573a\u666f\u7ba1\u7406"},"2.Scene\u573a\u666f\u7ba1\u7406"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class Scene(object):\n    def __init__(self) -> None:\n        self._name = 'Default'\n        self._actors = []\n        self._main_camera = None\n        self._renderer = RenderSystem()\n\n    def set_name(self, name):\n        self._name = name\n\n    def add_actor(self, actor):\n        self._actors.append(actor)\n\n    def remove_actor(self, actor):\n        self._actors.remove(actor)\n\n    def set_camera(self, camera):\n        self._main_camera = camera\n        self._renderer.set_camera(camera)\n\n    def get_camera(self):\n        return self._main_camera\n\n    def load(self):\n        for actor in self._actors:\n            actor.init()\n            if actor.visible():\n                self._renderer.load_gpu_resources(self, actor)\n\n    def unload(self):\n        for actor in self._actors:\n            actor.shutdown()\n            if actor.visible():\n                self._renderer.unload_gpu_resources(self, actor)\n\n    def process_input(self, event):\n        for actor in self._actors:\n            actor.process_input(event)\n\n    def update(self, frame_time):\n        for actor in self._actors:\n            actor.update(frame_time)\n\n    def render(self):\n        for actor in self._actors:\n            if actor.visible():\n                self._renderer.render(self, actor)\n\n")),(0,r.kt)("h2",{id:"3\u6e32\u67d3\u91cd\u6784"},"3.\u6e32\u67d3\u91cd\u6784"),(0,r.kt)("h3",{id:"31\u624b\u52a8\u63a7\u5236gpu\u8d44\u6e90loadunload"},"3.1.\u624b\u52a8\u63a7\u5236GPU\u8d44\u6e90load/unload"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"class RenderSystem")," \u52a0\u8f7d\u4e0e\u5378\u8f7dGPU\u8d44\u6e90")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def load_gpu_resources(self, scene, actor: Actor):\n    if not actor.visible():\n        return\n\n    mesh_comp: MeshComponent = actor.get_component('MeshComponent')\n    mesh_comp.load_gpu_resource()\n\n    material: MaterialComponent = actor.get_component('MaterialComponent')\n    material.load_gpu_resources()\n\ndef unload_gpu_resources(self, scene, actor: Actor):\n    mesh_comp: MeshComponent = actor.get_component('MeshComponent')\n    mesh_comp.unload_gpu_resource()\n\n    material: MaterialComponent = actor.get_component('MaterialComponent')\n    material.unload_gpu_resources()\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"mesh_comp.load_gpu_resource()")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"material.load_gpu_resources()")," \u5c31\u662f\u4e0a\u6587\u63d0\u5230\u7684\u6e32\u67d3\u91cd\u6784\u90e8\u5206\u3002"),(0,r.kt)("h3",{id:"32\u6e32\u67d3\u65b9\u6cd5"},"3.2.\u6e32\u67d3\u65b9\u6cd5"),(0,r.kt)("p",null,"\u76ee\u524d\u6e32\u67d3\u529f\u80fd\u5728RenderSystem\u7c7b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"def render(self, scene, actor: Actor)")," \u65b9\u6cd5\u4e2d\u3002\u4f46\u662f\uff0c\u8fd9\u90e8\u5206\u5f88\u660e\u663e\u9700\u8981\u91cd\u6784\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"\uff08TODO +1\uff09")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def render(self, scene, actor: Actor):\n    GL.glEnable(GL.GL_DEPTH_TEST)\n\n    GL.glEnable(GL.GL_BLEND)\n    GL.glBlendFunc(GL.GL_SRC_ALPHA, GL.GL_ONE_MINUS_SRC_ALPHA)\n    # ......\n    GL.glBindVertexArray(vao)\n    GL.glUseProgram(mat_shader.get_program())\n    GL.glUniformMatrix4fv(location, 1, GL.GL_FALSE, glm.value_ptr(param_value))\n    # ......\n    GL.glActiveTexture(MeshRendererComponent.INDEX_TO_GL_TEXTURE_LOCATION[gl_texture_index])\n    GL.glBindTexture(GL.GL_TEXTURE_2D, mat_tex.get_texture_id())\n    # ......\n    GL.glDrawArrays(GL.GL_TRIANGLES, 0, vertex_num)\n    # ......\n    GL.glBindTexture(GL.GL_TEXTURE_2D, 0)\n    GL.glBindBuffer(GL.GL_ARRAY_BUFFER, 0)\n    GL.glBindVertexArray(0)\n    GL.glUseProgram(0)\n")),(0,r.kt)("h2",{id:"4\u7ed3\u679c\u5c55\u793a"},"4.\u7ed3\u679c\u5c55\u793a"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://techartlife.com/wp-content/uploads/2022/03/LearnOpenGL.5.%E7%9B%B8%E6%9C%BA%E8%87%AA%E7%94%B1%E7%A7%BB%E5%8A%A8.jpg"},(0,r.kt)("img",{parentName:"a",src:"https://techartlife.com/wp-content/uploads/2022/03/LearnOpenGL.5.%E7%9B%B8%E6%9C%BA%E8%87%AA%E7%94%B1%E7%A7%BB%E5%8A%A8.jpg",alt:null}))),(0,r.kt)("p",null,'[video width="1602" height="1262" mp4="https://techartlife.com/wp-content/uploads/2022/03/Indie-Game-Devlog-1-Meet-OpenGL.mp4"][/video]'),(0,r.kt)("h2",{id:"5\u603b\u7ed3"},"5.\u603b\u7ed3"),(0,r.kt)("p",null,"\u5230\u8fd9\u91cc\uff0c\u57fa\u672c\u5b8c\u6210\u4e86OpenGL\u7684\u57fa\u7840\u4f7f\u7528\uff0c\u63a5\u4e0b\u6765\u4f1a\u6709\u4e24\u4e2a\u65b9\u5411\u53ef\u4ee5\u9009\u62e9\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"OpenGL\u8fdb\u9636"),"\uff1a \u6df1\u5ea6\u6d4b\u8bd5\u3001\u6a21\u677f\u6d4b\u8bd5\u3001GPU\u5b9e\u4f8b\u5316\u7b49\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"\u771f\u6b63\u7684\u56fe\u5f62\u5b66\u5165\u95e8"),"\uff1a \u5149\u7167\u3001\u9634\u5f71\u3001PBR\u3001\u540e\u5904\u7406\u7b49\u3002"))),(0,r.kt)("p",null,"\u539f\u672c\uff0c\u4ee5\u4e0a\u8fd9\u4e24\u90e8\u5206\u90fd\u4f1a\u6309\u90e8\u5c31\u73ed\u8fdb\u884c\uff0c\u4f46\u662f\u6700\u8fd1\u8ba1\u5212\u88ab\u6253\u4e71\uff0c\u53c8\u521a\u597dOpenGL\u57fa\u7840\u7cfb\u5217\u7ed3\u675f\uff0c\u6240\u4ee5\u63a5\u4e0b\u6765\u53ef\u80fd\u4f1a\u5f88\u4e45\u4e4b\u540e\u624d\u4f1a\u7ee7\u7eed\u4e86\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"\u4f24\u5fc3\u4e00\u79d2\u949f:(")))}d.isMDXComponent=!0}}]);