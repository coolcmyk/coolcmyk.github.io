(()=>{var e={};e.id=974,e.ids=[974],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1204:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});let i=(0,r(2907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/home/kyomoto/coolcmyk.github.io/src/app/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/kyomoto/coolcmyk.github.io/src/app/page.tsx","default")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},3762:(e,t,r)=>{Promise.resolve().then(r.bind(r,1204))},3873:e=>{"use strict";e.exports=require("path")},4325:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>v,pages:()=>c,routeModule:()=>d,tree:()=>s});var i=r(5239),o=r(8088),n=r(8170),a=r.n(n),l=r(893),u={};for(let e in l)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(u[e]=()=>l[e]);r.d(t,u);let s=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,1204)),"/home/kyomoto/coolcmyk.github.io/src/app/page.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,1137)),"/home/kyomoto/coolcmyk.github.io/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,7398,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9999,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,5284,23)),"next/dist/client/components/unauthorized-error"]}],c=["/home/kyomoto/coolcmyk.github.io/src/app/page.tsx"],v={require:r,loadChunk:()=>Promise.resolve()},d=new i.AppPageRouteModule({definition:{kind:o.RouteKind.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:s}})},4417:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>T});var i=r(687),o=r(3210);let n=()=>{let e,t,r,i,o;let n=document.getElementById("fluid");H();let a={SIM_RESOLUTION:128,DYE_RESOLUTION:1440,DENSITY_DISSIPATION:.5,VELOCITY_DISSIPATION:3,PRESSURE:.1,PRESSURE_ITERATIONS:20,CURL:3,SPLAT_RADIUS:.2,SPLAT_FORCE:6e3,SHADING:!0,COLOR_UPDATE_SPEED:10},l=[];l.push(new function(){this.id=-1,this.texcoordX=0,this.texcoordY=0,this.prevTexcoordX=0,this.prevTexcoordY=0,this.deltaX=0,this.deltaY=0,this.down=!1,this.moved=!1,this.color=[0,0,0]});let{gl:u,ext:s}=function(e){let t,r,i,o,n;let a={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1},l=e.getContext("webgl2",a),u=!!l;u||(l=e.getContext("webgl",a)||e.getContext("experimental-webgl",a)),u?(l.getExtension("EXT_color_buffer_float"),r=l.getExtension("OES_texture_float_linear")):(t=l.getExtension("OES_texture_half_float"),r=l.getExtension("OES_texture_half_float_linear")),l.clearColor(0,0,0,1);let s=u?l.HALF_FLOAT:t.HALF_FLOAT_OES;return u?(i=c(l,l.RGBA16F,l.RGBA,s),o=c(l,l.RG16F,l.RG,s),n=c(l,l.R16F,l.RED,s)):(i=c(l,l.RGBA,l.RGBA,s),o=c(l,l.RGBA,l.RGBA,s),n=c(l,l.RGBA,l.RGBA,s)),{gl:l,ext:{formatRGBA:i,formatRG:o,formatR:n,halfFloatTexType:s,supportLinearFiltering:r}}}(n);function c(e,t,r,i){if(!function(e,t,r,i){let o=e.createTexture();e.bindTexture(e.TEXTURE_2D,o),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,t,4,4,0,r,i,null);let n=e.createFramebuffer();return e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,o,0),e.checkFramebufferStatus(e.FRAMEBUFFER)==e.FRAMEBUFFER_COMPLETE}(e,t,r,i))switch(t){case e.R16F:return c(e,e.RG16F,e.RG,i);case e.RG16F:return c(e,e.RGBA16F,e.RGBA,i);default:return null}return{internalFormat:t,format:r}}s.supportLinearFiltering||(a.DYE_RESOLUTION=256,a.SHADING=!1);class v{constructor(e,t){this.vertexShader=e,this.fragmentShaderSource=t,this.programs=[],this.activeProgram=null,this.uniforms=[]}setKeywords(e){let t=0;for(let r=0;r<e.length;r++)t+=function(e){if(0==e.length)return 0;let t=0;for(let r=0;r<e.length;r++)t=(t<<5)-t+e.charCodeAt(r)|0;return t}(e[r]);let r=this.programs[t];if(null==r){let i=h(u.FRAGMENT_SHADER,this.fragmentShaderSource,e);r=f(this.vertexShader,i),this.programs[t]=r}r!=this.activeProgram&&(this.uniforms=m(r),this.activeProgram=r)}bind(){u.useProgram(this.activeProgram)}}class d{constructor(e,t){this.uniforms={},this.program=f(e,t),this.uniforms=m(this.program)}bind(){u.useProgram(this.program)}}function f(e,t){let r=u.createProgram();return u.attachShader(r,e),u.attachShader(r,t),u.linkProgram(r),u.getProgramParameter(r,u.LINK_STATUS)||console.trace(u.getProgramInfoLog(r)),r}function m(e){let t=[],r=u.getProgramParameter(e,u.ACTIVE_UNIFORMS);for(let i=0;i<r;i++){let r=u.getActiveUniform(e,i).name;t[r]=u.getUniformLocation(e,r)}return t}function h(e,t,r){t=function(e,t){if(null==t)return e;let r="";return t.forEach(e=>{r+="#define "+e+"\n"}),r+e}(t,r);let i=u.createShader(e);return u.shaderSource(i,t),u.compileShader(i),u.getShaderParameter(i,u.COMPILE_STATUS)||console.trace(u.getShaderInfoLog(i)),i}let x=h(u.VERTEX_SHADER,`
       precision highp float;
   
       attribute vec2 aPosition;
       varying vec2 vUv;
       varying vec2 vL;
       varying vec2 vR;
       varying vec2 vT;
       varying vec2 vB;
       uniform vec2 texelSize;
   
       void main () {
           vUv = aPosition * 0.5 + 0.5;
           vL = vUv - vec2(texelSize.x, 0.0);
           vR = vUv + vec2(texelSize.x, 0.0);
           vT = vUv + vec2(0.0, texelSize.y);
           vB = vUv - vec2(0.0, texelSize.y);
           gl_Position = vec4(aPosition, 0.0, 1.0);
       }
   `);h(u.VERTEX_SHADER,`
       precision highp float;
   
       attribute vec2 aPosition;
       varying vec2 vUv;
       varying vec2 vL;
       varying vec2 vR;
       uniform vec2 texelSize;
   
       void main () {
           vUv = aPosition * 0.5 + 0.5;
           float offset = 1.33333333;
           vL = vUv - texelSize * offset;
           vR = vUv + texelSize * offset;
           gl_Position = vec4(aPosition, 0.0, 1.0);
       }
   `),h(u.FRAGMENT_SHADER,`
       precision mediump float;
       precision mediump sampler2D;
   
       varying vec2 vUv;
       varying vec2 vL;
       varying vec2 vR;
       uniform sampler2D uTexture;
   
       void main () {
           vec4 sum = texture2D(uTexture, vUv) * 0.29411764;
           sum += texture2D(uTexture, vL) * 0.35294117;
           sum += texture2D(uTexture, vR) * 0.35294117;
           gl_FragColor = sum;
       }
   `);let g=h(u.FRAGMENT_SHADER,`
       precision mediump float;
       precision mediump sampler2D;
   
       varying highp vec2 vUv;
       uniform sampler2D uTexture;
   
       void main () {
           gl_FragColor = texture2D(uTexture, vUv);
       }
   `),p=h(u.FRAGMENT_SHADER,`
       precision mediump float;
       precision mediump sampler2D;
   
       varying highp vec2 vUv;
       uniform sampler2D uTexture;
       uniform float value;
   
       void main () {
           gl_FragColor = value * texture2D(uTexture, vUv);
       }
   `);h(u.FRAGMENT_SHADER,`
       precision mediump float;
   
       uniform vec4 color;
   
       void main () {
           gl_FragColor = color;
       }
   `);let E=`
       precision highp float;
       precision highp sampler2D;
   
       varying vec2 vUv;
       varying vec2 vL;
       varying vec2 vR;
       varying vec2 vT;
       varying vec2 vB;
       uniform sampler2D uTexture;
       uniform sampler2D uDithering;
       uniform vec2 ditherScale;
       uniform vec2 texelSize;
   
       vec3 linearToGamma (vec3 color) {
           color = max(color, vec3(0));
           return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
       }
   
       void main () {
           vec3 c = texture2D(uTexture, vUv).rgb;
   
       #ifdef SHADING
           vec3 lc = texture2D(uTexture, vL).rgb;
           vec3 rc = texture2D(uTexture, vR).rgb;
           vec3 tc = texture2D(uTexture, vT).rgb;
           vec3 bc = texture2D(uTexture, vB).rgb;
   
           float dx = length(rc) - length(lc);
           float dy = length(tc) - length(bc);
   
           vec3 n = normalize(vec3(dx, dy, length(texelSize)));
           vec3 l = vec3(0.0, 0.0, 1.0);
   
           float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
           c *= diffuse;
       #endif
   
           float a = max(c.r, max(c.g, c.b));
           gl_FragColor = vec4(c, a);
       }
   `,T=h(u.FRAGMENT_SHADER,`
       precision highp float;
       precision highp sampler2D;
   
       varying vec2 vUv;
       uniform sampler2D uTarget;
       uniform float aspectRatio;
       uniform vec3 color;
       uniform vec2 point;
       uniform float radius;
   
       void main () {
           vec2 p = vUv - point.xy;
           p.x *= aspectRatio;
           vec3 splat = exp(-dot(p, p) / radius) * color;
           vec3 base = texture2D(uTarget, vUv).xyz;
           gl_FragColor = vec4(base + splat, 1.0);
       }
   `),R=h(u.FRAGMENT_SHADER,`
       precision highp float;
       precision highp sampler2D;
   
       varying vec2 vUv;
       uniform sampler2D uVelocity;
       uniform sampler2D uSource;
       uniform vec2 texelSize;
       uniform vec2 dyeTexelSize;
       uniform float dt;
       uniform float dissipation;
   
       vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
           vec2 st = uv / tsize - 0.5;
   
           vec2 iuv = floor(st);
           vec2 fuv = fract(st);
   
           vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
           vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
           vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
           vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);
   
           return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
       }
   
       void main () {
       #ifdef MANUAL_FILTERING
           vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
           vec4 result = bilerp(uSource, coord, dyeTexelSize);
       #else
           vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
           vec4 result = texture2D(uSource, coord);
       #endif
           float decay = 1.0 + dissipation * dt;
           gl_FragColor = result / decay;
       }`,s.supportLinearFiltering?null:["MANUAL_FILTERING"]),y=h(u.FRAGMENT_SHADER,`
       precision mediump float;
       precision mediump sampler2D;
   
       varying highp vec2 vUv;
       varying highp vec2 vL;
       varying highp vec2 vR;
       varying highp vec2 vT;
       varying highp vec2 vB;
       uniform sampler2D uVelocity;
   
       void main () {
           float L = texture2D(uVelocity, vL).x;
           float R = texture2D(uVelocity, vR).x;
           float T = texture2D(uVelocity, vT).y;
           float B = texture2D(uVelocity, vB).y;
   
           vec2 C = texture2D(uVelocity, vUv).xy;
           if (vL.x < 0.0) { L = -C.x; }
           if (vR.x > 1.0) { R = -C.x; }
           if (vT.y > 1.0) { T = -C.y; }
           if (vB.y < 0.0) { B = -C.y; }
   
           float div = 0.5 * (R - L + T - B);
           gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
       }
   `),b=h(u.FRAGMENT_SHADER,`
       precision mediump float;
       precision mediump sampler2D;
   
       varying highp vec2 vUv;
       varying highp vec2 vL;
       varying highp vec2 vR;
       varying highp vec2 vT;
       varying highp vec2 vB;
       uniform sampler2D uVelocity;
   
       void main () {
           float L = texture2D(uVelocity, vL).y;
           float R = texture2D(uVelocity, vR).y;
           float T = texture2D(uVelocity, vT).x;
           float B = texture2D(uVelocity, vB).x;
           float vorticity = R - L - T + B;
           gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
       }
   `),S=h(u.FRAGMENT_SHADER,`
       precision highp float;
       precision highp sampler2D;
   
       varying vec2 vUv;
       varying vec2 vL;
       varying vec2 vR;
       varying vec2 vT;
       varying vec2 vB;
       uniform sampler2D uVelocity;
       uniform sampler2D uCurl;
       uniform float curl;
       uniform float dt;
   
       void main () {
           float L = texture2D(uCurl, vL).x;
           float R = texture2D(uCurl, vR).x;
           float T = texture2D(uCurl, vT).x;
           float B = texture2D(uCurl, vB).x;
           float C = texture2D(uCurl, vUv).x;
   
           vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
           force /= length(force) + 0.0001;
           force *= curl * C;
           force.y *= -1.0;
   
           vec2 velocity = texture2D(uVelocity, vUv).xy;
           velocity += force * dt;
           velocity = min(max(velocity, -1000.0), 1000.0);
           gl_FragColor = vec4(velocity, 0.0, 1.0);
       }
   `),D=h(u.FRAGMENT_SHADER,`
       precision mediump float;
       precision mediump sampler2D;
   
       varying highp vec2 vUv;
       varying highp vec2 vL;
       varying highp vec2 vR;
       varying highp vec2 vT;
       varying highp vec2 vB;
       uniform sampler2D uPressure;
       uniform sampler2D uDivergence;
   
       void main () {
           float L = texture2D(uPressure, vL).x;
           float R = texture2D(uPressure, vR).x;
           float T = texture2D(uPressure, vT).x;
           float B = texture2D(uPressure, vB).x;
           float C = texture2D(uPressure, vUv).x;
           float divergence = texture2D(uDivergence, vUv).x;
           float pressure = (L + R + B + T - divergence) * 0.25;
           gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
       }
   `),_=h(u.FRAGMENT_SHADER,`
       precision mediump float;
       precision mediump sampler2D;
   
       varying highp vec2 vUv;
       varying highp vec2 vL;
       varying highp vec2 vR;
       varying highp vec2 vT;
       varying highp vec2 vB;
       uniform sampler2D uPressure;
       uniform sampler2D uVelocity;
   
       void main () {
           float L = texture2D(uPressure, vL).x;
           float R = texture2D(uPressure, vR).x;
           float T = texture2D(uPressure, vT).x;
           float B = texture2D(uPressure, vB).x;
           vec2 velocity = texture2D(uVelocity, vUv).xy;
           velocity.xy -= vec2(R - L, T - B);
           gl_FragColor = vec4(velocity, 0.0, 1.0);
       }
   `),A=(u.bindBuffer(u.ARRAY_BUFFER,u.createBuffer()),u.bufferData(u.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),u.STATIC_DRAW),u.bindBuffer(u.ELEMENT_ARRAY_BUFFER,u.createBuffer()),u.bufferData(u.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),u.STATIC_DRAW),u.vertexAttribPointer(0,2,u.FLOAT,!1,0,0),u.enableVertexAttribArray(0),(e,t=!1)=>{null==e?(u.viewport(0,0,u.drawingBufferWidth,u.drawingBufferHeight),u.bindFramebuffer(u.FRAMEBUFFER,null)):(u.viewport(0,0,e.width,e.height),u.bindFramebuffer(u.FRAMEBUFFER,e.fbo)),t&&(u.clearColor(0,0,0,1),u.clear(u.COLOR_BUFFER_BIT)),u.drawElements(u.TRIANGLES,6,u.UNSIGNED_SHORT,0)}),w=new d(x,g),F=new d(x,p),U=new d(x,T),L=new d(x,R),P=new d(x,y),N=new d(x,b),B=new d(x,S),C=new d(x,D),z=new d(x,_),I=new v(x,E);function X(){let n=$(a.SIM_RESOLUTION),l=$(a.DYE_RESOLUTION),c=s.halfFloatTexType,v=s.formatRGBA,d=s.formatRG,f=s.formatR,m=s.supportLinearFiltering?u.LINEAR:u.NEAREST;u.disable(u.BLEND),e=null==e?M(l.width,l.height,v.internalFormat,v.format,c,m):G(e,l.width,l.height,v.internalFormat,v.format,c,m),t=null==t?M(n.width,n.height,d.internalFormat,d.format,c,m):G(t,n.width,n.height,d.internalFormat,d.format,c,m),r=k(n.width,n.height,f.internalFormat,f.format,c,u.NEAREST),i=k(n.width,n.height,f.internalFormat,f.format,c,u.NEAREST),o=M(n.width,n.height,f.internalFormat,f.format,c,u.NEAREST)}function k(e,t,r,i,o,n){u.activeTexture(u.TEXTURE0);let a=u.createTexture();u.bindTexture(u.TEXTURE_2D,a),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MIN_FILTER,n),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MAG_FILTER,n),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_S,u.CLAMP_TO_EDGE),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_T,u.CLAMP_TO_EDGE),u.texImage2D(u.TEXTURE_2D,0,r,e,t,0,i,o,null);let l=u.createFramebuffer();u.bindFramebuffer(u.FRAMEBUFFER,l),u.framebufferTexture2D(u.FRAMEBUFFER,u.COLOR_ATTACHMENT0,u.TEXTURE_2D,a,0),u.viewport(0,0,e,t),u.clear(u.COLOR_BUFFER_BIT);let s=1/e,c=1/t;return{texture:a,fbo:l,width:e,height:t,texelSizeX:s,texelSizeY:c,attach:e=>(u.activeTexture(u.TEXTURE0+e),u.bindTexture(u.TEXTURE_2D,a),e)}}function M(e,t,r,i,o,n){let a=k(e,t,r,i,o,n),l=k(e,t,r,i,o,n);return{width:e,height:t,texelSizeX:a.texelSizeX,texelSizeY:a.texelSizeY,get read(){return a},set read(value){a=value},get write(){return l},set write(value){l=value},swap(){let e=a;a=l,l=e}}}function G(e,t,r,i,o,n,a){var l;let s;return e.width==t&&e.height==r?e:(l=e.read,s=k(t,r,i,o,n,a),w.bind(),u.uniform1i(w.uniforms.uTexture,l.attach(0)),A(s),e.read=s,e.write=k(t,r,i,o,n,a),e.width=t,e.height=r,e.texelSizeX=1/t,e.texelSizeY=1/r,e)}(function(){let e=[];a.SHADING&&e.push("SHADING"),I.setKeywords(e)})(),X();let O=Date.now(),Y=0;function j(){var n,c;let v,d,f,m;let h=(d=Math.min(d=((v=Date.now())-O)/1e3,.016666),O=v,d);H()&&X(),(Y+=h*a.COLOR_UPDATE_SPEED)>=1&&(Y=function(e,t,r){let i=1;return 0==i?t:(e-t)%i+t}(Y,0,1),l.forEach(e=>{e.color=K()})),l.forEach(e=>{var t;let r,i;e.moved&&(e.moved=!1,r=(t=e).deltaX*a.SPLAT_FORCE,i=t.deltaY*a.SPLAT_FORCE,V(t.texcoordX,t.texcoordY,r,i,t.color))}),function(n){u.disable(u.BLEND),N.bind(),u.uniform2f(N.uniforms.texelSize,t.texelSizeX,t.texelSizeY),u.uniform1i(N.uniforms.uVelocity,t.read.attach(0)),A(i),B.bind(),u.uniform2f(B.uniforms.texelSize,t.texelSizeX,t.texelSizeY),u.uniform1i(B.uniforms.uVelocity,t.read.attach(0)),u.uniform1i(B.uniforms.uCurl,i.attach(1)),u.uniform1f(B.uniforms.curl,a.CURL),u.uniform1f(B.uniforms.dt,n),A(t.write),t.swap(),P.bind(),u.uniform2f(P.uniforms.texelSize,t.texelSizeX,t.texelSizeY),u.uniform1i(P.uniforms.uVelocity,t.read.attach(0)),A(r),F.bind(),u.uniform1i(F.uniforms.uTexture,o.read.attach(0)),u.uniform1f(F.uniforms.value,a.PRESSURE),A(o.write),o.swap(),C.bind(),u.uniform2f(C.uniforms.texelSize,t.texelSizeX,t.texelSizeY),u.uniform1i(C.uniforms.uDivergence,r.attach(0));for(let e=0;e<a.PRESSURE_ITERATIONS;e++)u.uniform1i(C.uniforms.uPressure,o.read.attach(1)),A(o.write),o.swap();z.bind(),u.uniform2f(z.uniforms.texelSize,t.texelSizeX,t.texelSizeY),u.uniform1i(z.uniforms.uPressure,o.read.attach(0)),u.uniform1i(z.uniforms.uVelocity,t.read.attach(1)),A(t.write),t.swap(),L.bind(),u.uniform2f(L.uniforms.texelSize,t.texelSizeX,t.texelSizeY),s.supportLinearFiltering||u.uniform2f(L.uniforms.dyeTexelSize,t.texelSizeX,t.texelSizeY);let l=t.read.attach(0);u.uniform1i(L.uniforms.uVelocity,l),u.uniform1i(L.uniforms.uSource,l),u.uniform1f(L.uniforms.dt,n),u.uniform1f(L.uniforms.dissipation,a.VELOCITY_DISSIPATION),A(t.write),t.swap(),s.supportLinearFiltering||u.uniform2f(L.uniforms.dyeTexelSize,e.texelSizeX,e.texelSizeY),u.uniform1i(L.uniforms.uVelocity,t.read.attach(0)),u.uniform1i(L.uniforms.uSource,e.read.attach(1)),u.uniform1f(L.uniforms.dissipation,a.DENSITY_DISSIPATION),A(e.write),e.swap()}(h),n=null,u.blendFunc(u.ONE,u.ONE_MINUS_SRC_ALPHA),u.enable(u.BLEND),f=(c=null,u.drawingBufferWidth),m=null==c?u.drawingBufferHeight:c.height,I.bind(),a.SHADING&&u.uniform2f(I.uniforms.texelSize,1/f,1/m),u.uniform1i(I.uniforms.uTexture,e.read.attach(0)),A(c),requestAnimationFrame(j)}function H(){let e=J(n.clientWidth),t=J(n.clientHeight);return(n.width!=e||n.height!=t)&&(n.width=e,n.height=t,!0)}function V(r,i,o,l,s){var c;let v;U.bind(),u.uniform1i(U.uniforms.uTarget,t.read.attach(0)),u.uniform1f(U.uniforms.aspectRatio,n.width/n.height),u.uniform2f(U.uniforms.point,r,i),u.uniform3f(U.uniforms.color,o,l,0),u.uniform1f(U.uniforms.radius,(c=a.SPLAT_RADIUS/100,(v=n.width/n.height)>1&&(c*=v),c)),A(t.write),t.swap(),u.uniform1i(U.uniforms.uTarget,e.read.attach(0)),u.uniform3f(U.uniforms.color,s.r,s.g,s.b),A(e.write),e.swap()}function W(e,t,r,i){e.id=t,e.down=!0,e.moved=!1,e.texcoordX=r/n.width,e.texcoordY=1-i/n.height,e.prevTexcoordX=e.texcoordX,e.prevTexcoordY=e.texcoordY,e.deltaX=0,e.deltaY=0,e.color=K()}function q(e,t,r,i){var o,a;let l,u;e.prevTexcoordX=e.texcoordX,e.prevTexcoordY=e.texcoordY,e.texcoordX=t/n.width,e.texcoordY=1-r/n.height,o=e.texcoordX-e.prevTexcoordX,(l=n.width/n.height)<1&&(o*=l),e.deltaX=o,a=e.texcoordY-e.prevTexcoordY,(u=n.width/n.height)>1&&(a/=u),e.deltaY=a,e.moved=Math.abs(e.deltaX)>0||Math.abs(e.deltaY)>0,e.color=i}function K(){let e=function(e,t,r){let i,o,n,a,l,u,s,c;switch(a=Math.floor(6*e),l=6*e-a,u=0,s=r*(1-l*t),c=r*(1-(1-l)*t),a%6){case 0:i=r,o=c,n=u;break;case 1:i=s,o=r,n=u;break;case 2:i=u,o=r,n=c;break;case 3:i=u,o=s,n=r;break;case 4:i=c,o=u,n=r;break;case 5:i=r,o=u,n=s}return{r:i,g:o,b:n}}(Math.random(),1,1);return e.r*=.15,e.g*=.15,e.b*=.15,e}function $(e){let t=u.drawingBufferWidth/u.drawingBufferHeight;t<1&&(t=1/t);let r=Math.round(e),i=Math.round(e*t);return u.drawingBufferWidth>u.drawingBufferHeight?{width:i,height:r}:{width:r,height:i}}function J(e){return Math.floor(e*(window.devicePixelRatio||1))}window.addEventListener("mousedown",e=>{let t=l[0];W(t,-1,J(e.clientX),J(e.clientY)),function(e){let t=K();t.r*=10,t.g*=10,t.b*=10;let r=10*(Math.random()-.5),i=30*(Math.random()-.5);V(e.texcoordX,e.texcoordY,r,i,t)}(t)}),document.body.addEventListener("mousemove",function e(t){let r=l[0],i=J(t.clientX),o=J(t.clientY),n=K();j(),q(r,i,o,n),document.body.removeEventListener("mousemove",e)}),window.addEventListener("mousemove",e=>{let t=l[0],r=J(e.clientX),i=J(e.clientY),o=t.color;q(t,r,i,o)}),document.body.addEventListener("touchstart",function e(t){let r=t.targetTouches,i=l[0];for(let e=0;e<r.length;e++){let t=J(r[e].clientX),o=J(r[e].clientY);j(),W(i,r[e].identifier,t,o)}document.body.removeEventListener("touchstart",e)}),window.addEventListener("touchstart",e=>{let t=e.targetTouches,r=l[0];for(let e=0;e<t.length;e++){let i=J(t[e].clientX),o=J(t[e].clientY);W(r,t[e].identifier,i,o)}}),window.addEventListener("touchmove",e=>{let t=e.targetTouches,r=l[0];for(let e=0;e<t.length;e++)q(r,J(t[e].clientX),J(t[e].clientY),r.color)},!1),window.addEventListener("touchend",e=>{let t=e.changedTouches,r=l[0];for(let e=0;e<t.length;e++)r.down=!1})},a=()=>((0,o.useEffect)(()=>{n()},[]),(0,i.jsx)("div",{className:"fixed top-0 left-0 z-0",children:(0,i.jsx)("canvas",{id:"fluid",className:"h-screen w-screen"})}));var l=r(9523),u=r(7686),s=r(7822),c=r(897),v=r(659),d=r(6919),f=r(1943),m=r(2133),h=r(334),x=r(6189),g=r(6060);let p={Me:"Who are you? I want to know more about you.",Projects:"What are your projects? What are you working on right now?",Skills:"What are your skills? Give me a list of your soft and hard skills.",Fun:"What’s the craziest thing you’ve ever done? What are your hobbies?",Contact:"How can I contact you?"},E=[{key:"Me",color:"#329696",icon:c.A},{key:"Projects",color:"#3E9858",icon:v.A},{key:"Skills",color:"#856ED9",icon:d.A},{key:"Fun",color:"#B95F9D",icon:f.A},{key:"Contact",color:"#C19433",icon:m.A}];function T(){let[e,t]=(0,o.useState)(""),r=(0,x.useRouter)(),n=(0,o.useRef)(null),c=e=>r.push(`/chat?query=${encodeURIComponent(e)}`);return(0,i.jsxs)("div",{className:"relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pb-10 md:pb-20",children:[(0,i.jsx)("div",{className:"pointer-events-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden",children:(0,i.jsx)("div",{className:"hidden bg-gradient-to-b from-neutral-500/10 to-neutral-500/0 bg-clip-text text-[10rem] leading-none font-black text-transparent select-none sm:block lg:text-[16rem]",style:{marginBottom:"-2.5rem"}})}),(0,i.jsx)("div",{className:"absolute top-6 right-8 z-20",children:(0,i.jsx)(g.A,{href:"https://github.com/toukoum/portfolio","data-color-scheme":"no-preference: light; light: light; dark: light_high_contrast;","data-size":"large","data-show-count":"true","aria-label":"Star toukoum/portfolio on GitHub",children:"Star"})}),(0,i.jsx)("div",{className:"absolute top-6 left-6 z-20",children:(0,i.jsxs)("button",{onClick:()=>c("Are you looking for an internship?"),className:"cursor-pointer relative flex items-center gap-2 rounded-full border bg-white/30 px-4 py-1.5 text-sm font-medium text-black shadow-md backdrop-blur-lg transition hover:bg-white/60 dark:border-white dark:text-white dark:hover:bg-neutral-800",children:[(0,i.jsxs)("span",{className:"relative flex h-2 w-2",children:[(0,i.jsx)("span",{className:"absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"}),(0,i.jsx)("span",{className:"relative inline-flex h-2 w-2 rounded-full bg-green-500"})]}),"need an intern for your company?"]})}),(0,i.jsxs)(s.P.div,{className:"z-1 mb-8 flex flex-col items-center text-center md:mb-12 mt-24 md:mt-4",variants:{hidden:{opacity:0,y:-60},visible:{opacity:1,y:0,transition:{type:"tween",duration:.8}}},initial:"hidden",animate:"visible",children:[(0,i.jsx)("div",{className:"z-100",children:(0,i.jsx)(u.A,{})}),(0,i.jsx)("h2",{className:"text-secondary-foreground mt-1 text-xl font-semibold md:text-2xl",children:"ky0's portfolio"}),(0,i.jsx)("h1",{className:"text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl"})]}),(0,i.jsxs)(s.P.div,{variants:{hidden:{opacity:0,y:80},visible:{opacity:1,y:0,transition:{type:"tween",duration:.8,delay:.2}}},initial:"hidden",animate:"visible",className:"z-10 mt-4 flex w-full flex-col items-center justify-center md:px-0",children:[(0,i.jsx)("form",{onSubmit:t=>{t.preventDefault(),e.trim()&&c(e.trim())},className:"relative w-full max-w-lg",children:(0,i.jsxs)("div",{className:"mx-auto flex items-center rounded-full border border-neutral-200 bg-white/30 py-2.5 pr-2 pl-6 backdrop-blur-lg transition-all hover:border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-neutral-600",children:[(0,i.jsx)("input",{ref:n,type:"text",value:e,onChange:e=>t(e.target.value),placeholder:"Ask me anything…",className:"w-full border-none bg-transparent text-base text-neutral-800 placeholder:text-neutral-500 focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-500"}),(0,i.jsx)("button",{type:"submit",disabled:!e.trim(),"aria-label":"Submit question",className:"flex items-center justify-center rounded-full bg-[#0171E3] p-2.5 text-white transition-colors hover:bg-blue-600 disabled:opacity-70 dark:bg-blue-600 dark:hover:bg-blue-700",children:(0,i.jsx)(h.A,{className:"h-5 w-5"})})]})}),(0,i.jsx)("div",{className:"mt-4 grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3 md:grid-cols-5",children:E.map(({key:e,color:t,icon:r})=>(0,i.jsx)(l.$,{onClick:()=>c(p[e]),variant:"outline",className:"shadow-none border-border hover:bg-border/30 aspect-square w-full cursor-pointer rounded-2xl border bg-white/30 py-8 backdrop-blur-lg active:scale-95 md:p-10",children:(0,i.jsxs)("div",{className:"flex h-full flex-col items-center justify-center gap-1 text-gray-700",children:[(0,i.jsx)(r,{size:22,strokeWidth:2,color:t}),(0,i.jsx)("span",{className:"text-xs font-medium sm:text-sm",children:e})]})},e))})]}),(0,i.jsx)(a,{})]})}},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},9498:(e,t,r)=>{Promise.resolve().then(r.bind(r,4417))}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[719,948,342,354],()=>r(4325));module.exports=i})();