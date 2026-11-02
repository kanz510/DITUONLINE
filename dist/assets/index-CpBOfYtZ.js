(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=1021,S=1022,C=1023,w=1024,T=1025,E=1026,D=1027,O=1028,k=1029,A=1030,j=1031,ee=1033,te=33776,M=33777,N=33778,P=33779,ne=35840,re=35841,ie=35842,ae=35843,oe=36196,se=37492,ce=37496,le=37808,ue=37809,de=37810,fe=37811,pe=37812,me=37813,he=37814,ge=37815,F=37816,_e=37817,ve=37818,ye=37819,I=37820,be=37821,L=36492,R=36494,xe=36495,Se=36283,Ce=36284,we=36285,Te=36286,Ee=2300,De=2301,Oe=2302,ke=2400,Ae=2401,je=2402,Me=3200,Ne=3201,Pe=`srgb`,Fe=`srgb-linear`,Ie=`linear`,Le=`srgb`,Re=7680,ze=35044,Be=2e3,Ve=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let e=n.indexOf(t);e!==-1&&n.splice(e,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let t=0,r=n.length;t<r;t++)n[t].call(this,e);e.target=null}}},z=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),He=Math.PI/180,Ue=180/Math.PI;function We(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(z[e&255]+z[e>>8&255]+z[e>>16&255]+z[e>>24&255]+`-`+z[t&255]+z[t>>8&255]+`-`+z[t>>16&15|64]+z[t>>24&255]+`-`+z[n&63|128]+z[n>>8&255]+`-`+z[n>>16&255]+z[n>>24&255]+z[r&255]+z[r>>8&255]+z[r>>16&255]+z[r>>24&255]).toLowerCase()}function Ge(e,t,n){return Math.max(t,Math.min(n,e))}function Ke(e,t){return(e%t+t)%t}function qe(e,t,n){return(1-n)*e+n*t}function Je(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function B(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var V=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ge(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},H=class e{constructor(t,n,r,i,a,o,s,c,l){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ye.makeScale(e,t)),this}rotate(e){return this.premultiply(Ye.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ye.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ye=new H;function Xe(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ze(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Qe(){let e=Ze(`canvas`);return e.style.display=`block`,e}var $e={};function et(e){e in $e||($e[e]=!0,console.warn(e))}function tt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}function nt(e){let t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function rt(e){let t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var U={enabled:!0,workingColorSpace:Fe,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=it(e.r),e.g=it(e.g),e.b=it(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=at(e.r),e.g=at(e.g),e.b=at(e.b))),e},fromWorkingColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ie:this.spaces[e].transfer},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}};function it(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function at(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var ot=[.64,.33,.3,.6,.15,.06],st=[.2126,.7152,.0722],ct=[.3127,.329],lt=new H().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ut=new H().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);U.define({[Fe]:{primaries:ot,whitePoint:ct,transfer:Ie,toXYZ:lt,fromXYZ:ut,luminanceCoefficients:st,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:ot,whitePoint:ct,transfer:Le,toXYZ:lt,fromXYZ:ut,luminanceCoefficients:st,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}});var dt,ft=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{dt===void 0&&(dt=Ze(`canvas`)),dt.width=e.width,dt.height=e.height;let n=dt.getContext(`2d`);e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=dt}return t.width>2048||t.height>2048?(console.warn(`THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons`,e),t.toDataURL(`image/jpeg`,.6)):t.toDataURL(`image/png`)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ze(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=it(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(it(t[e]/255)*255):t[e]=it(t[e]);return{data:t,width:e.width,height:e.height}}return console.warn(`THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},pt=0,mt=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pt++}),this.uuid=We(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(ht(r[t].image)):e.push(ht(r[t]))}else e=ht(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function ht(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?ft.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn(`THREE.Texture: Unable to serialize Texture.`),{})}var gt=0,_t=class r extends Ve{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=C,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gt++}),this.uuid=We(),this.name=``,this.source=new mt(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new V(0,0),this.repeat=new V(1,1),this.center=new V(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new H,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};_t.DEFAULT_IMAGE=null,_t.DEFAULT_MAPPING=300,_t.DEFAULT_ANISOTROPY=1;var vt=class e{constructor(t=0,n=0,r=0,i=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},yt=class extends Ve{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let i=new _t(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);i.flipY=!1,i.generateMipmaps=n.generateMipmaps,i.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let e=0;e<a;e++)this.textures[e]=i.clone(),this.textures[e].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++)this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new mt(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:`dispose`})}},bt=class extends yt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},xt=class extends _t{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},St=class extends _t{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ct=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(o===0)e[t+0]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u;else if(o===1)e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m;else{if(u!==m||s!==d||c!==f||l!==p){let e=1-o,t=s*d+c*f+l*p+u*m,n=t>=0?1:-1,r=1-t*t;if(r>2**-52){let i=Math.sqrt(r),a=Math.atan2(i,t*n);e=Math.sin(e*a)/i,o=Math.sin(o*a)/i}let i=o*n;if(s=s*e+d*i,c=c*e+f*i,l=l*e+p*i,u=u*e+m*i,e===1-o){let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:console.warn(`THREE.Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<2**-52?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,i=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=i,this;let s=1-o*o;if(s<=2**-52){let e=1-t;return this._w=e*a+t*this._w,this._x=e*n+t*this._x,this._y=e*r+t*this._y,this._z=e*i+t*this._z,this.normalize(),this}let c=Math.sqrt(s),l=Math.atan2(c,o),u=Math.sin((1-t)*l)/c,d=Math.sin(t*l)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=i*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class e{constructor(t=0,n=0,r=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wt.copy(this).projectOnVector(e),this.sub(wt)}reflect(e){return this.sub(wt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ge(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},wt=new W,Tt=new Ct,Et=class{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ot.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ot.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ot.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Ot):Ot.fromBufferAttribute(r,t),Ot.applyMatrix4(e.matrixWorld),this.expandByPoint(Ot);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),kt.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),kt.copy(e.boundingBox)),kt.applyMatrix4(e.matrixWorld),this.union(kt)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ot),Ot.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(It),Lt.subVectors(this.max,It),At.subVectors(e.a,It),jt.subVectors(e.b,It),Mt.subVectors(e.c,It),Nt.subVectors(jt,At),Pt.subVectors(Mt,jt),Ft.subVectors(At,Mt);let t=[0,-Nt.z,Nt.y,0,-Pt.z,Pt.y,0,-Ft.z,Ft.y,Nt.z,0,-Nt.x,Pt.z,0,-Pt.x,Ft.z,0,-Ft.x,-Nt.y,Nt.x,0,-Pt.y,Pt.x,0,-Ft.y,Ft.x,0];return!Bt(t,At,jt,Mt,Lt)||(t=[1,0,0,0,1,0,0,0,1],!Bt(t,At,jt,Mt,Lt))?!1:(Rt.crossVectors(Nt,Pt),t=[Rt.x,Rt.y,Rt.z],Bt(t,At,jt,Mt,Lt))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ot).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ot).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Dt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dt)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Dt=[new W,new W,new W,new W,new W,new W,new W,new W],Ot=new W,kt=new Et,At=new W,jt=new W,Mt=new W,Nt=new W,Pt=new W,Ft=new W,It=new W,Lt=new W,Rt=new W,zt=new W;function Bt(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){zt.fromArray(e,a);let o=i.x*Math.abs(zt.x)+i.y*Math.abs(zt.y)+i.z*Math.abs(zt.z),s=t.dot(zt),c=n.dot(zt),l=r.dot(zt);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Vt=new Et,Ht=new W,Ut=new W,Wt=class{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Vt.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ht.subVectors(e,this.center);let t=Ht.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Ht,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ut.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ht.copy(e.center).add(Ut)),this.expandByPoint(Ht.copy(e.center).sub(Ut))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Gt=new W,Kt=new W,qt=new W,Jt=new W,Yt=new W,Xt=new W,Zt=new W,Qt=class{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Gt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gt.copy(this.origin).addScaledVector(this.direction,t),Gt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Kt.copy(e).add(t).multiplyScalar(.5),qt.copy(t).sub(e).normalize(),Jt.copy(this.origin).sub(Kt);let i=e.distanceTo(t)*.5,a=-this.direction.dot(qt),o=Jt.dot(this.direction),s=-Jt.dot(qt),c=Jt.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Kt).addScaledVector(qt,d),f}intersectSphere(e,t){Gt.subVectors(e.center,this.origin);let n=Gt.dot(this.direction),r=Gt.dot(Gt)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Gt)!==null}intersectTriangle(e,t,n,r,i){Yt.subVectors(t,e),Xt.subVectors(n,e),Zt.crossVectors(Yt,Xt);let a=this.direction.dot(Zt),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Jt.subVectors(this.origin,e);let s=o*this.direction.dot(Xt.crossVectors(Jt,Xt));if(s<0)return null;let c=o*this.direction.dot(Yt.cross(Jt));if(c<0||s+c>a)return null;let l=-o*Jt.dot(Zt);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},$t=class e{constructor(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/en.setFromMatrixColumn(e,0).length(),i=1/en.setFromMatrixColumn(e,1).length(),a=1/en.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nn,e,rn)}lookAt(e,t,n){let r=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),an.crossVectors(n,sn),an.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),an.crossVectors(n,sn)),an.normalize(),on.crossVectors(sn,an),r[0]=an.x,r[4]=on.x,r[8]=sn.x,r[1]=an.y,r[5]=on.y,r[9]=sn.y,r[2]=an.z,r[6]=on.z,r[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],ee=r[14],te=r[3],M=r[7],N=r[11],P=r[15];return i[0]=a*x+o*T+s*k+c*te,i[4]=a*S+o*E+s*A+c*M,i[8]=a*C+o*D+s*j+c*N,i[12]=a*w+o*O+s*ee+c*P,i[1]=l*x+u*T+d*k+f*te,i[5]=l*S+u*E+d*A+f*M,i[9]=l*C+u*D+d*j+f*N,i[13]=l*w+u*O+d*ee+f*P,i[2]=p*x+m*T+h*k+g*te,i[6]=p*S+m*E+h*A+g*M,i[10]=p*C+m*D+h*j+g*N,i[14]=p*w+m*O+h*ee+g*P,i[3]=_*x+v*T+y*k+b*te,i[7]=_*S+v*E+y*A+b*M,i[11]=_*C+v*D+y*j+b*N,i[15]=_*w+v*O+y*ee+b*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15];return p*(+i*s*u-r*c*u-i*o*d+n*c*d+r*o*f-n*s*f)+m*(+t*s*f-t*c*d+i*a*d-r*a*f+r*c*l-i*s*l)+h*(+t*c*u-t*o*f-i*a*u+n*a*f+i*o*l-n*c*l)+g*(-r*o*l-t*s*u+t*o*d+r*a*u-n*a*d+n*s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=u*h*c-m*d*c+m*s*f-o*h*f-u*s*g+o*d*g,v=p*d*c-l*h*c-p*s*f+a*h*f+l*s*g-a*d*g,y=l*m*c-p*u*c+p*o*f-a*m*f-l*o*g+a*u*g,b=p*u*s-l*m*s-p*o*d+a*m*d+l*o*h-a*u*h,x=t*_+n*v+r*y+i*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=_*S,e[1]=(m*d*i-u*h*i-m*r*f+n*h*f+u*r*g-n*d*g)*S,e[2]=(o*h*i-m*s*i+m*r*c-n*h*c-o*r*g+n*s*g)*S,e[3]=(u*s*i-o*d*i-u*r*c+n*d*c+o*r*f-n*s*f)*S,e[4]=v*S,e[5]=(l*h*i-p*d*i+p*r*f-t*h*f-l*r*g+t*d*g)*S,e[6]=(p*s*i-a*h*i-p*r*c+t*h*c+a*r*g-t*s*g)*S,e[7]=(a*d*i-l*s*i+l*r*c-t*d*c-a*r*f+t*s*f)*S,e[8]=y*S,e[9]=(p*u*i-l*m*i-p*n*f+t*m*f+l*n*g-t*u*g)*S,e[10]=(a*m*i-p*o*i+p*n*c-t*m*c-a*n*g+t*o*g)*S,e[11]=(l*o*i-a*u*i-l*n*c+t*u*c+a*n*f-t*o*f)*S,e[12]=b*S,e[13]=(l*m*r-p*u*r+p*n*d-t*m*d-l*n*h+t*u*h)*S,e[14]=(p*o*r-a*m*r-p*n*s+t*m*s+a*n*h-t*o*h)*S,e[15]=(a*u*r-l*o*r+l*n*s-t*u*s-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,i=en.set(r[0],r[1],r[2]).length(),a=en.set(r[4],r[5],r[6]).length(),o=en.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],tn.copy(this);let s=1/i,c=1/a,l=1/o;return tn.elements[0]*=s,tn.elements[1]*=s,tn.elements[2]*=s,tn.elements[4]*=c,tn.elements[5]*=c,tn.elements[6]*=c,tn.elements[8]*=l,tn.elements[9]*=l,tn.elements[10]*=l,t.setFromRotationMatrix(tn),n.x=i,n.y=a,n.z=o,this}makePerspective(e,t,n,r,i,a,o=Be){let s=this.elements,c=2*i/(t-e),l=2*i/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),f,p;if(o===2e3)f=-(a+i)/(a-i),p=-2*a*i/(a-i);else if(o===2001)f=-a/(a-i),p=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return s[0]=c,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=l,s[9]=d,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=p,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Be){let s=this.elements,c=1/(t-e),l=1/(n-r),u=1/(a-i),d=(t+e)*c,f=(n+r)*l,p,m;if(o===2e3)p=(a+i)*u,m=-2*u;else if(o===2001)p=i*u,m=-1*u;else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-d,s[1]=0,s[5]=2*l,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=m,s[14]=-p,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},en=new W,tn=new $t,nn=new W(0,0,0),rn=new W(1,1,1),an=new W,on=new W,sn=new W,cn=new $t,ln=new Ct,un=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-Ge(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(Ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(Ge(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn(`THREE.Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return cn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ln.setFromEuler(this),this.setFromQuaternion(ln,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};un.DEFAULT_ORDER=`XYZ`;var dn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},fn=0,pn=new W,mn=new Ct,hn=new $t,gn=new W,_n=new W,vn=new W,yn=new Ct,bn=new W(1,0,0),xn=new W(0,1,0),Sn=new W(0,0,1),Cn={type:`added`},wn={type:`removed`},Tn={type:`childadded`,child:null},En={type:`childremoved`,child:null},Dn=class e extends Ve{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fn++}),this.uuid=We(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new W,n=new un,r=new Ct,i=new W(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new $t},normalMatrix:{value:new H}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mn.setFromAxisAngle(e,t),this.quaternion.multiply(mn),this}rotateOnWorldAxis(e,t){return mn.setFromAxisAngle(e,t),this.quaternion.premultiply(mn),this}rotateX(e){return this.rotateOnAxis(bn,e)}rotateY(e){return this.rotateOnAxis(xn,e)}rotateZ(e){return this.rotateOnAxis(Sn,e)}translateOnAxis(e,t){return pn.copy(e).applyQuaternion(this.quaternion),this.position.add(pn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bn,e)}translateY(e){return this.translateOnAxis(xn,e)}translateZ(e){return this.translateOnAxis(Sn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?gn.copy(e):gn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),_n.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(_n,gn,this.up):hn.lookAt(gn,_n,this.up),this.quaternion.setFromRotationMatrix(hn),r&&(hn.extractRotation(r.matrixWorld),mn.setFromRotationMatrix(hn),this.quaternion.premultiply(mn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(console.error(`THREE.Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cn),Tn.child=e,this.dispatchEvent(Tn),Tn.child=null):console.error(`THREE.Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wn),En.child=e,this.dispatchEvent(En),En.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cn),Tn.child=e,this.dispatchEvent(Tn),Tn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_n,e,vn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_n,yn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(e=>({boxInitialized:e.boxInitialized,boxMin:e.box.min.toArray(),boxMax:e.box.max.toArray(),sphereInitialized:e.sphereInitialized,sphereRadius:e.sphere.radius,sphereCenter:e.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};Dn.DEFAULT_UP=new W(0,1,0),Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var On=new W,kn=new W,An=new W,jn=new W,Mn=new W,Nn=new W,Pn=new W,Fn=new W,In=new W,Ln=new W,Rn=new vt,zn=new vt,Bn=new vt,Vn=class e{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),On.subVectors(e,t),r.cross(On);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){On.subVectors(r,t),kn.subVectors(n,t),An.subVectors(e,t);let a=On.dot(On),o=On.dot(kn),s=On.dot(An),c=kn.dot(kn),l=kn.dot(An),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,jn)!==null&&jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,jn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,jn.x),s.addScaledVector(a,jn.y),s.addScaledVector(o,jn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Rn.setScalar(0),zn.setScalar(0),Bn.setScalar(0),Rn.fromBufferAttribute(e,t),zn.fromBufferAttribute(e,n),Bn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Rn,i.x),a.addScaledVector(zn,i.y),a.addScaledVector(Bn,i.z),a}static isFrontFacing(e,t,n,r){return On.subVectors(n,t),kn.subVectors(e,t),On.cross(kn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),On.cross(kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Mn.subVectors(r,n),Nn.subVectors(i,n),Fn.subVectors(e,n);let s=Mn.dot(Fn),c=Nn.dot(Fn);if(s<=0&&c<=0)return t.copy(n);In.subVectors(e,r);let l=Mn.dot(In),u=Nn.dot(In);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Mn,a);Ln.subVectors(e,i);let f=Mn.dot(Ln),p=Nn.dot(Ln);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Nn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Pn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Pn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Mn,a).addScaledVector(Nn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Hn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Un={h:0,s:0,l:0},Wn={h:0,s:0,l:0};function Gn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var G=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,U.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=U.workingColorSpace){return this.r=e,this.g=t,this.b=n,U.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=U.workingColorSpace){if(e=Ke(e,1),t=Ge(t,0,1),n=Ge(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Gn(i,r,e+1/3),this.g=Gn(i,r,e),this.b=Gn(i,r,e-1/3)}return U.toWorkingColorSpace(this,r),this}setStyle(e,t=Pe){function n(t){t!==void 0&&parseFloat(t)<1&&console.warn(`THREE.Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn(`THREE.Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);console.warn(`THREE.Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pe){let n=Hn[e.toLowerCase()];return n===void 0?console.warn(`THREE.Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=it(e.r),this.g=it(e.g),this.b=it(e.b),this}copyLinearToSRGB(e){return this.r=at(e.r),this.g=at(e.g),this.b=at(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pe){return U.fromWorkingColorSpace(Kn.copy(this),e),Math.round(Ge(Kn.r*255,0,255))*65536+Math.round(Ge(Kn.g*255,0,255))*256+Math.round(Ge(Kn.b*255,0,255))}getHexString(e=Pe){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=U.workingColorSpace){U.fromWorkingColorSpace(Kn.copy(this),t);let n=Kn.r,r=Kn.g,i=Kn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=U.workingColorSpace){return U.fromWorkingColorSpace(Kn.copy(this),t),e.r=Kn.r,e.g=Kn.g,e.b=Kn.b,e}getStyle(e=Pe){U.fromWorkingColorSpace(Kn.copy(this),e);let t=Kn.r,n=Kn.g,r=Kn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Un),this.setHSL(Un.h+e,Un.s+t,Un.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Un),e.getHSL(Wn);let n=qe(Un.h,Wn.h,t),r=qe(Un.s,Wn.s,t),i=qe(Un.l,Wn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Kn=new G;G.NAMES=Hn;var qn=0,Jn=class extends Ve{static get type(){return`Material`}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qn++}),this.uuid=We(),this.name=``,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new G(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Re,this.stencilZFail=Re,this.stencilZPass=Re,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn(`Material: onBuild() has been removed.`)}},Yn=class extends Jn{static get type(){return`MeshBasicMaterial`}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new G(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Xn=new W,Zn=new V,Qn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=ze,this.updateRanges=[],this.gpuType=h,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zn.fromBufferAttribute(this,t),Zn.applyMatrix3(e),this.setXY(t,Zn.x,Zn.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.applyMatrix3(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.applyMatrix4(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.applyNormalMatrix(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.transformDirection(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Je(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=B(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Je(t,this.array)),t}setX(e,t){return this.normalized&&(t=B(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Je(t,this.array)),t}setY(e,t){return this.normalized&&(t=B(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Je(t,this.array)),t}setZ(e,t){return this.normalized&&(t=B(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Je(t,this.array)),t}setW(e,t){return this.normalized&&(t=B(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=B(t,this.array),n=B(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=B(t,this.array),n=B(n,this.array),r=B(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=B(t,this.array),n=B(n,this.array),r=B(r,this.array),i=B(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}},$n=class extends Qn{constructor(e,t,n){super(new Uint16Array(e),t,n)}},er=class extends Qn{constructor(e,t,n){super(new Uint32Array(e),t,n)}},tr=class extends Qn{constructor(e,t,n){super(new Float32Array(e),t,n)}},nr=0,rr=new $t,ir=new Dn,ar=new W,or=new Et,sr=new Et,cr=new W,lr=class e extends Ve{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nr++}),this.uuid=We(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Xe(e)?er:$n)(e,1):e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new H().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return rr.makeRotationFromQuaternion(e),this.applyMatrix4(rr),this}rotateX(e){return rr.makeRotationX(e),this.applyMatrix4(rr),this}rotateY(e){return rr.makeRotationY(e),this.applyMatrix4(rr),this}rotateZ(e){return rr.makeRotationZ(e),this.applyMatrix4(rr),this}translate(e,t,n){return rr.makeTranslation(e,t,n),this.applyMatrix4(rr),this}scale(e,t,n){return rr.makeScale(e,t,n),this.applyMatrix4(rr),this}lookAt(e){return ir.lookAt(e),ir.updateMatrix(),this.applyMatrix4(ir.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ar).negate(),this.translate(ar.x,ar.y,ar.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new tr(t,3))}else{for(let n=0,r=t.count;n<r;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn(`THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Et);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)console.error(`THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];or.setFromBufferAttribute(n),this.morphTargetsRelative?(cr.addVectors(this.boundingBox.min,or.min),this.boundingBox.expandByPoint(cr),cr.addVectors(this.boundingBox.max,or.max),this.boundingBox.expandByPoint(cr)):(this.boundingBox.expandByPoint(or.min),this.boundingBox.expandByPoint(or.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error(`THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)console.error(`THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new W,1/0);else if(e){let n=this.boundingSphere.center;if(or.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];sr.setFromBufferAttribute(n),this.morphTargetsRelative?(cr.addVectors(or.min,sr.min),or.expandByPoint(cr),cr.addVectors(or.max,sr.max),or.expandByPoint(cr)):(or.expandByPoint(sr.min),or.expandByPoint(sr.max))}or.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)cr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(cr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)cr.fromBufferAttribute(a,t),o&&(ar.fromBufferAttribute(e,t),cr.add(ar)),r=Math.max(r,n.distanceToSquared(cr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error(`THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new Qn(new Float32Array(4*n.count),4));let a=this.getAttribute(`tangent`),o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new W,s[e]=new W;let c=new W,l=new W,u=new W,d=new V,f=new V,p=new V,m=new W,h=new W;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new W,y=new W,b=new W,x=new W;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new Qn(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new W,i=new W,a=new W,o=new W,s=new W,c=new W,l=new W,u=new W;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)cr.fromBufferAttribute(e,t),cr.normalize(),e.setXYZ(t,cr.x,cr.y,cr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Qn(a,r,i)}if(this.index===null)return console.warn(`THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.6,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},ur=new $t,dr=new Qt,fr=new Wt,pr=new W,mr=new W,hr=new W,gr=new W,_r=new W,vr=new W,yr=new W,br=new W,K=class extends Dn{constructor(e=new lr,t=new Yn){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){vr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(_r.fromBufferAttribute(s,e),a?vr.addScaledVector(_r,r):vr.addScaledVector(_r.sub(t),r))}t.add(vr)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere),fr.applyMatrix4(i),dr.copy(e.ray).recast(e.near),fr.containsPoint(dr.origin)===!1&&(dr.intersectSphere(fr,pr)===null||dr.origin.distanceToSquared(pr)>(e.far-e.near)**2)||(ur.copy(i).invert(),dr.copy(e.ray).applyMatrix4(ur),(n.boundingBox===null||dr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,dr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Sr(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Sr(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Sr(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Sr(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function xr(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;br.copy(s),br.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(br);return l<n.near||l>n.far?null:{distance:l,point:br.clone(),object:e}}function Sr(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,mr),e.getVertexPosition(c,hr),e.getVertexPosition(l,gr);let u=xr(e,t,n,r,mr,hr,gr,yr);if(u){let e=new W;Vn.getBarycoord(yr,mr,hr,gr,e),i&&(u.uv=Vn.getInterpolatedAttribute(i,s,c,l,e,new V)),a&&(u.uv1=Vn.getInterpolatedAttribute(a,s,c,l,e,new V)),o&&(u.normal=Vn.getInterpolatedAttribute(o,s,c,l,e,new W),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new W,materialIndex:0};Vn.getNormal(mr,hr,gr,t.normal),u.face=t,u.barycoord=e}return u}var q=class e extends lr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new tr(c,3)),this.setAttribute(`normal`,new tr(l,3)),this.setAttribute(`uv`,new tr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new W;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Cr(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone():Array.isArray(i)?t[n][r]=i.slice():t[n][r]=i}}return t}function wr(e){let t={};for(let n=0;n<e.length;n++){let r=Cr(e[n]);for(let e in r)t[e]=r[e]}return t}function Tr(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Er(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:U.workingColorSpace}var Dr={clone:Cr,merge:wr},Or=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kr=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ar=class extends Jn{static get type(){return`ShaderMaterial`}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Or,this.fragmentShader=kr,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cr(e.uniforms),this.uniformsGroups=Tr(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},jr=class extends Dn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Be}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Mr=new W,Nr=new V,Pr=new V,Fr=class extends jr{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ue*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(He*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ue*2*Math.atan(Math.tan(He*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z),Mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z)}getViewSize(e,t){return this.getViewBounds(e,Nr,Pr),t.subVectors(Pr,Nr)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(He*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ir=-90,Lr=1,Rr=class extends Dn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Fr(Ir,Lr,e,t);r.layers=this.layers,this.add(r);let i=new Fr(Ir,Lr,e,t);i.layers=this.layers,this.add(i);let a=new Fr(Ir,Lr,e,t);a.layers=this.layers,this.add(a);let o=new Fr(Ir,Lr,e,t);o.layers=this.layers,this.add(o);let s=new Fr(Ir,Lr,e,t);s.layers=this.layers,this.add(s);let c=new Fr(Ir,Lr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,i),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,s),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},zr=class extends _t{constructor(e,t,n,r,i,a,o,s,c,l){e=e===void 0?[]:e,t=t===void 0?301:t,super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Br=class extends bt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new zr(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter===void 0?o:t.minFilter}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new q(5,5,5),i=new Ar({name:`CubemapFromEquirect`,uniforms:Cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new K(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new Rr(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},Vr=new W,Hr=new W,Ur=new H,Wr=class{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Vr.subVectors(n,t).cross(Hr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Vr),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ur.getNormalMatrix(e),r=this.coplanarPoint(Vr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Gr=new Wt,Kr=new W,qr=class{constructor(e=new Wr,t=new Wr,n=new Wr,r=new Wr,i=new Wr,a=new Wr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Be){let n=this.planes,r=e.elements,i=r[0],a=r[1],o=r[2],s=r[3],c=r[4],l=r[5],u=r[6],d=r[7],f=r[8],p=r[9],m=r[10],h=r[11],g=r[12],_=r[13],v=r[14],y=r[15];if(n[0].setComponents(s-i,d-c,h-f,y-g).normalize(),n[1].setComponents(s+i,d+c,h+f,y+g).normalize(),n[2].setComponents(s+a,d+l,h+p,y+_).normalize(),n[3].setComponents(s-a,d-l,h-p,y-_).normalize(),n[4].setComponents(s-o,d-u,h-m,y-v).normalize(),t===2e3)n[5].setComponents(s+o,d+u,h+m,y+v).normalize();else if(t===2001)n[5].setComponents(o,u,m,v).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gr)}intersectsSprite(e){return Gr.center.set(0,0,0),Gr.radius=.7071067811865476,Gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Kr.x=r.normal.x>0?e.max.x:e.min.x,Kr.y=r.normal.y>0?e.max.y:e.min.y,Kr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Jr(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Yr(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Xr=class e extends lr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new tr(p,3)),this.setAttribute(`normal`,new tr(m,3)),this.setAttribute(`uv`,new tr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},J={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Y={common:{diffuse:{value:new G(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new H}},envmap:{envMap:{value:null},envMapRotation:{value:new H},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new H}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new H}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new H},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new H},normalScale:{value:new V(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new H},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new H}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new H}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new H}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new G(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new G(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0},uvTransform:{value:new H}},sprite:{diffuse:{value:new G(16777215)},opacity:{value:1},center:{value:new V(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}}},Zr={basic:{uniforms:wr([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.fog]),vertexShader:J.meshbasic_vert,fragmentShader:J.meshbasic_frag},lambert:{uniforms:wr([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new G(0)}}]),vertexShader:J.meshlambert_vert,fragmentShader:J.meshlambert_frag},phong:{uniforms:wr([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new G(0)},specular:{value:new G(1118481)},shininess:{value:30}}]),vertexShader:J.meshphong_vert,fragmentShader:J.meshphong_frag},standard:{uniforms:wr([Y.common,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.roughnessmap,Y.metalnessmap,Y.fog,Y.lights,{emissive:{value:new G(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:J.meshphysical_vert,fragmentShader:J.meshphysical_frag},toon:{uniforms:wr([Y.common,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.gradientmap,Y.fog,Y.lights,{emissive:{value:new G(0)}}]),vertexShader:J.meshtoon_vert,fragmentShader:J.meshtoon_frag},matcap:{uniforms:wr([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,{matcap:{value:null}}]),vertexShader:J.meshmatcap_vert,fragmentShader:J.meshmatcap_frag},points:{uniforms:wr([Y.points,Y.fog]),vertexShader:J.points_vert,fragmentShader:J.points_frag},dashed:{uniforms:wr([Y.common,Y.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:J.linedashed_vert,fragmentShader:J.linedashed_frag},depth:{uniforms:wr([Y.common,Y.displacementmap]),vertexShader:J.depth_vert,fragmentShader:J.depth_frag},normal:{uniforms:wr([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,{opacity:{value:1}}]),vertexShader:J.meshnormal_vert,fragmentShader:J.meshnormal_frag},sprite:{uniforms:wr([Y.sprite,Y.fog]),vertexShader:J.sprite_vert,fragmentShader:J.sprite_frag},background:{uniforms:{uvTransform:{value:new H},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:J.background_vert,fragmentShader:J.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new H}},vertexShader:J.backgroundCube_vert,fragmentShader:J.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:J.cube_vert,fragmentShader:J.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:J.equirect_vert,fragmentShader:J.equirect_frag},distanceRGBA:{uniforms:wr([Y.common,Y.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:J.distanceRGBA_vert,fragmentShader:J.distanceRGBA_frag},shadow:{uniforms:wr([Y.lights,Y.fog,{color:{value:new G(0)},opacity:{value:1}}]),vertexShader:J.shadow_vert,fragmentShader:J.shadow_frag}};Zr.physical={uniforms:wr([Zr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new H},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new H},clearcoatNormalScale:{value:new V(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new H},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new H},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new H},sheen:{value:0},sheenColor:{value:new G(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new H},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new H},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new H},transmissionSamplerSize:{value:new V},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new H},attenuationDistance:{value:0},attenuationColor:{value:new G(0)},specularColor:{value:new G(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new H},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new H},anisotropyVector:{value:new V},anisotropyMap:{value:null},anisotropyMapTransform:{value:new H}}]),vertexShader:J.meshphysical_vert,fragmentShader:J.meshphysical_frag};var Qr={r:0,b:0,g:0},$r=new un,ei=new $t;function ti(e,t,n,r,i,a,o){let s=new G(0),c=a===!0?0:1,l,u,d=null,f=0,p=null;function m(e){let r=e.isScene===!0?e.background:null;return r&&r.isTexture&&(r=(e.backgroundBlurriness>0?n:t).get(r)),r}function h(t){let n=!1,i=m(t);i===null?_(s,c):i&&i.isColor&&(_(i,1),n=!0);let a=e.xr.getEnvironmentBlendMode();a===`additive`?r.buffers.color.setClear(0,0,0,1,o):a===`alpha-blend`&&r.buffers.color.setClear(0,0,0,0,o),(e.autoClear||n)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function g(t,n){let r=m(n);r&&(r.isCubeTexture||r.mapping===306)?(u===void 0&&(u=new K(new q(1,1,1),new Ar({name:`BackgroundCubeMaterial`,uniforms:Cr(Zr.backgroundCube.uniforms),vertexShader:Zr.backgroundCube.vertexShader,fragmentShader:Zr.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute(`normal`),u.geometry.deleteAttribute(`uv`),u.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),$r.copy(n.backgroundRotation),$r.x*=-1,$r.y*=-1,$r.z*=-1,r.isCubeTexture&&r.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),u.material.uniforms.envMap.value=r,u.material.uniforms.flipEnvMap.value=r.isCubeTexture&&r.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ei.makeRotationFromEuler($r)),u.material.toneMapped=U.getTransfer(r.colorSpace)!==Le,(d!==r||f!==r.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),u.layers.enableAll(),t.unshift(u,u.geometry,u.material,0,0,null)):r&&r.isTexture&&(l===void 0&&(l=new K(new Xr(2,2),new Ar({name:`BackgroundMaterial`,uniforms:Cr(Zr.background.uniforms),vertexShader:Zr.background.vertexShader,fragmentShader:Zr.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=r,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.toneMapped=U.getTransfer(r.colorSpace)!==Le,r.matrixAutoUpdate===!0&&r.updateMatrix(),l.material.uniforms.uvTransform.value.copy(r.matrix),(d!==r||f!==r.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null))}function _(t,n){t.getRGB(Qr,Er(e)),r.buffers.color.setClear(Qr.r,Qr.g,Qr.b,n,o)}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),c=t,_(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(e){c=e,_(s,c)},render:h,addToRenderList:g}}function ni(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n){let i=n.wireframe===!0,a=r[e.id];a===void 0&&(a={},r[e.id]=a);let o=a[t.id];o===void 0&&(o={},a[t.id]=o);let s=o[i];return s===void 0&&(s=f(c()),o[i]=s),s}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){w();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e.id]}function C(e){for(let t in r){let n=r[t];if(n[e.id]===void 0)continue;let i=n[e.id];for(let e in i)u(i[e].object),delete i[e];delete n[e.id]}}function w(){T(),o=!0,a!==i&&(a=i,l(a.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:w,resetDefaultState:T,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function ri(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}function c(e,i,a,s){if(a===0)return;let c=t.get(`WEBGL_multi_draw`);if(c===null)for(let t=0;t<e.length;t++)o(e[t],i[t],s[t]);else{c.multiDrawArraysInstancedWEBGL(r,e,0,i,0,s,0,a);let t=0;for(let e=0;e<a;e++)t+=i[e]*s[e];n.update(t,r,1)}}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=c}function ii(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(console.warn(`THREE.WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&t.has(`EXT_clip_control`),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=m>0,S=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:x,maxSamples:S}}function ai(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Wr,s=new H,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}function oi(e){let t=new WeakMap;function n(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function r(r){if(r&&r.isTexture){let a=r.mapping;if(a===303||a===304){if(t.has(r)){let e=t.get(r).texture;return n(e,r.mapping)}{let a=r.image;if(a&&a.height>0){let o=new Br(a.height);return o.fromEquirectangularTexture(e,r),t.set(r,o),r.addEventListener(`dispose`,i),n(o.texture,r.mapping)}return null}}}return r}function i(e){let n=e.target;n.removeEventListener(`dispose`,i);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function a(){t=new WeakMap}return{get:r,dispose:a}}var si=class extends jr{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ci=4,li=[.125,.215,.35,.446,.526,.582],ui=20,di=new si,fi=new G,pi=null,mi=0,hi=0,gi=!1,_i=(1+Math.sqrt(5))/2,vi=1/_i,yi=[new W(-_i,vi,0),new W(_i,vi,0),new W(-vi,0,_i),new W(vi,0,_i),new W(0,_i,-vi),new W(0,_i,vi),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],bi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){pi=this._renderer.getRenderTarget(),mi=this._renderer.getActiveCubeFace(),hi=this._renderer.getActiveMipmapLevel(),gi=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,n,r,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ei(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ti(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pi,mi,hi),this._renderer.xr.enabled=gi,e.scissorTest=!1,Ci(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pi=this._renderer.getRenderTarget(),mi=this._renderer.getActiveCubeFace(),hi=this._renderer.getActiveMipmapLevel(),gi=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:o,minFilter:o,generateMipmaps:!1,type:g,format:C,colorSpace:Fe,depthBuffer:!1},r=Si(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Si(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xi(r)),this._blurMaterial=wi(r,e,t)}return r}_compileMaterial(e){let t=new K(this._lodPlanes[0],e);this._renderer.compile(t,di)}_sceneToCubeUV(e,t,n,r){let i=new Fr(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],s=this._renderer,c=s.autoClear,l=s.toneMapping;s.getClearColor(fi),s.toneMapping=0,s.autoClear=!1;let u=new Yn({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1}),d=new K(new q,u),f=!1,p=e.background;p?p.isColor&&(u.color.copy(p),e.background=null,f=!0):(u.color.copy(fi),f=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(i.up.set(0,a[t],0),i.lookAt(o[t],0,0)):n===1?(i.up.set(0,0,a[t]),i.lookAt(0,o[t],0)):(i.up.set(0,a[t],0),i.lookAt(0,0,o[t]));let c=this._cubeSize;Ci(r,n*c,t>2?c:0,c,c),s.setRenderTarget(r),f&&s.render(d,i),s.render(e,i)}d.geometry.dispose(),d.material.dispose(),s.toneMapping=l,s.autoClear=c,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ei()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ti());let i=r?this._cubemapMaterial:this._equirectMaterial,a=new K(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Ci(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,di)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let t=1;t<r;t++){let n=Math.sqrt(this._sigmas[t]*this._sigmas[t]-this._sigmas[t-1]*this._sigmas[t-1]),i=yi[(r-t-1)%yi.length];this._blur(e,t-1,t,n,i)}t.autoClear=n}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&console.error(`blur direction must be either latitudinal or longitudinal!`);let l=new K(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):ui;m>ui&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ui}`);let h=[],g=0;for(let e=0;e<ui;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];Ci(t,3*v*(r>_-ci?r-_+ci:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,di)}};function xi(e){let t=[],n=[],r=[],i=e,a=e-ci+1+li.length;for(let o=0;o<a;o++){let a=2**i;n.push(a);let s=1/a;o>e-ci?s=li[o-e+ci-1]:o===0&&(s=0),r.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new lr;h.setAttribute(`position`,new Qn(f,3)),h.setAttribute(`uv`,new Qn(p,2)),h.setAttribute(`faceIndex`,new Qn(m,1)),t.push(h),i>ci&&i--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function Si(e,t,n){let r=new bt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Ci(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function wi(e,t,n){let r=new Float32Array(ui),i=new W(0,1,0);return new Ar({name:`SphericalGaussianBlur`,defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Di(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ti(){return new Ar({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Di(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ei(){return new Ar({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Di(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Di(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Oi(e){let t=new WeakMap,n=null;function r(r){if(r&&r.isTexture){let o=r.mapping,s=o===303||o===304,c=o===301||o===302;if(s||c){let o=t.get(r),l=o===void 0?0:o.texture.pmremVersion;if(r.isRenderTargetTexture&&r.pmremVersion!==l)return n===null&&(n=new bi(e)),o=s?n.fromEquirectangular(r,o):n.fromCubemap(r,o),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),o.texture;if(o!==void 0)return o.texture;{let l=r.image;return s&&l&&l.height>0||c&&l&&i(l)?(n===null&&(n=new bi(e)),o=s?n.fromEquirectangular(r):n.fromCubemap(r),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),r.addEventListener(`dispose`,a),o.texture):null}}}return r}function i(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function a(e){let n=e.target;n.removeEventListener(`dispose`,a);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:o}}function ki(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r;switch(n){case`WEBGL_depth_texture`:r=e.getExtension(`WEBGL_depth_texture`)||e.getExtension(`MOZ_WEBGL_depth_texture`)||e.getExtension(`WEBKIT_WEBGL_depth_texture`);break;case`EXT_texture_filter_anisotropic`:r=e.getExtension(`EXT_texture_filter_anisotropic`)||e.getExtension(`MOZ_EXT_texture_filter_anisotropic`)||e.getExtension(`WEBKIT_EXT_texture_filter_anisotropic`);break;case`WEBGL_compressed_texture_s3tc`:r=e.getExtension(`WEBGL_compressed_texture_s3tc`)||e.getExtension(`MOZ_WEBGL_compressed_texture_s3tc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_s3tc`);break;case`WEBGL_compressed_texture_pvrtc`:r=e.getExtension(`WEBGL_compressed_texture_pvrtc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_pvrtc`);break;default:r=e.getExtension(n)}return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&et(`THREE.WebGLRenderer: `+e+` extension not supported.`),t}}}function Ai(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);for(let e in s.morphAttributes){let n=s.morphAttributes[e];for(let e=0,r=n.length;e<r;e++)t.remove(n[e])}s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER);let i=n.morphAttributes;for(let n in i){let r=i[n];for(let n=0,i=r.length;n<i;n++)t.update(r[n],e.ARRAY_BUFFER)}}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else if(i!==void 0){let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}else return;let s=new(Xe(n)?er:$n)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function ji(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}function d(e,i,s,c){if(s===0)return;let u=t.get(`WEBGL_multi_draw`);if(u===null)for(let t=0;t<e.length;t++)l(e[t]/o,i[t],c[t]);else{u.multiDrawElementsInstancedWEBGL(r,i,0,a,e,0,c,0,s);let t=0;for(let e=0;e<s;e++)t+=i[e]*c[e];n.update(t,r,1)}}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Mi(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:console.error(`THREE.WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Ni(e,t,n){let r=new WeakMap,i=new vt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new xt(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new V(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Pi(e,t,n,r){let i=new WeakMap;function a(a){let o=r.render.frame,c=a.geometry,l=t.get(a,c);if(i.get(l)!==o&&(t.update(l),i.set(l,o)),a.isInstancedMesh&&(a.hasEventListener(`dispose`,s)===!1&&a.addEventListener(`dispose`,s),i.get(a)!==o&&(n.update(a.instanceMatrix,e.ARRAY_BUFFER),a.instanceColor!==null&&n.update(a.instanceColor,e.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let e=a.skeleton;i.get(e)!==o&&(e.update(),i.set(e,o))}return l}function o(){i=new WeakMap}function s(e){let t=e.target;t.removeEventListener(`dispose`,s),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:a,dispose:o}}var Fi=class extends _t{constructor(e,t,n,i,a,o,s,c,l,u=E){if(u!==1026&&u!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);n===void 0&&u===1026&&(n=m),n===void 0&&u===1027&&(n=y),super(null,i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s===void 0?r:s,this.minFilter=c===void 0?r:c,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ii=new _t,Li=new Fi(1,1),Ri=new xt,zi=new St,Bi=new zr,Vi=[],Hi=[],Ui=new Float32Array(16),Wi=new Float32Array(9),Gi=new Float32Array(4);function Ki(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Vi[i];if(a===void 0&&(a=new Float32Array(i),Vi[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function qi(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Ji(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Yi(e,t){let n=Hi[t];n===void 0&&(n=new Int32Array(t),Hi[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Xi(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Zi(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(qi(n,t))return;e.uniform2fv(this.addr,t),Ji(n,t)}}function Qi(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(qi(n,t))return;e.uniform3fv(this.addr,t),Ji(n,t)}}function $i(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(qi(n,t))return;e.uniform4fv(this.addr,t),Ji(n,t)}}function ea(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(qi(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ji(n,t)}else{if(qi(n,r))return;Gi.set(r),e.uniformMatrix2fv(this.addr,!1,Gi),Ji(n,r)}}function ta(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(qi(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ji(n,t)}else{if(qi(n,r))return;Wi.set(r),e.uniformMatrix3fv(this.addr,!1,Wi),Ji(n,r)}}function na(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(qi(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ji(n,t)}else{if(qi(n,r))return;Ui.set(r),e.uniformMatrix4fv(this.addr,!1,Ui),Ji(n,r)}}function ra(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function ia(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(qi(n,t))return;e.uniform2iv(this.addr,t),Ji(n,t)}}function aa(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(qi(n,t))return;e.uniform3iv(this.addr,t),Ji(n,t)}}function oa(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(qi(n,t))return;e.uniform4iv(this.addr,t),Ji(n,t)}}function sa(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function ca(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(qi(n,t))return;e.uniform2uiv(this.addr,t),Ji(n,t)}}function la(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(qi(n,t))return;e.uniform3uiv(this.addr,t),Ji(n,t)}}function ua(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(qi(n,t))return;e.uniform4uiv(this.addr,t),Ji(n,t)}}function da(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Li.compareFunction=515,a=Li):a=Ii,n.setTexture2D(t||a,i)}function fa(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||zi,i)}function pa(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Bi,i)}function ma(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Ri,i)}function ha(e){switch(e){case 5126:return Xi;case 35664:return Zi;case 35665:return Qi;case 35666:return $i;case 35674:return ea;case 35675:return ta;case 35676:return na;case 5124:case 35670:return ra;case 35667:case 35671:return ia;case 35668:case 35672:return aa;case 35669:case 35673:return oa;case 5125:return sa;case 36294:return ca;case 36295:return la;case 36296:return ua;case 35678:case 36198:case 36298:case 36306:case 35682:return da;case 35679:case 36299:case 36307:return fa;case 35680:case 36300:case 36308:case 36293:return pa;case 36289:case 36303:case 36311:case 36292:return ma}}function ga(e,t){e.uniform1fv(this.addr,t)}function _a(e,t){let n=Ki(t,this.size,2);e.uniform2fv(this.addr,n)}function va(e,t){let n=Ki(t,this.size,3);e.uniform3fv(this.addr,n)}function ya(e,t){let n=Ki(t,this.size,4);e.uniform4fv(this.addr,n)}function ba(e,t){let n=Ki(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function xa(e,t){let n=Ki(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Sa(e,t){let n=Ki(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Ca(e,t){e.uniform1iv(this.addr,t)}function wa(e,t){e.uniform2iv(this.addr,t)}function Ta(e,t){e.uniform3iv(this.addr,t)}function Ea(e,t){e.uniform4iv(this.addr,t)}function Da(e,t){e.uniform1uiv(this.addr,t)}function Oa(e,t){e.uniform2uiv(this.addr,t)}function ka(e,t){e.uniform3uiv(this.addr,t)}function Aa(e,t){e.uniform4uiv(this.addr,t)}function ja(e,t,n){let r=this.cache,i=t.length,a=Yi(n,i);qi(r,a)||(e.uniform1iv(this.addr,a),Ji(r,a));for(let e=0;e!==i;++e)n.setTexture2D(t[e]||Ii,a[e])}function Ma(e,t,n){let r=this.cache,i=t.length,a=Yi(n,i);qi(r,a)||(e.uniform1iv(this.addr,a),Ji(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||zi,a[e])}function Na(e,t,n){let r=this.cache,i=t.length,a=Yi(n,i);qi(r,a)||(e.uniform1iv(this.addr,a),Ji(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Bi,a[e])}function Pa(e,t,n){let r=this.cache,i=t.length,a=Yi(n,i);qi(r,a)||(e.uniform1iv(this.addr,a),Ji(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Ri,a[e])}function Fa(e){switch(e){case 5126:return ga;case 35664:return _a;case 35665:return va;case 35666:return ya;case 35674:return ba;case 35675:return xa;case 35676:return Sa;case 5124:case 35670:return Ca;case 35667:case 35671:return wa;case 35668:case 35672:return Ta;case 35669:case 35673:return Ea;case 5125:return Da;case 36294:return Oa;case 36295:return ka;case 36296:return Aa;case 35678:case 36198:case 36298:case 36306:case 35682:return ja;case 35679:case 36299:case 36307:return Ma;case 35680:case 36300:case 36308:case 36293:return Na;case 36289:case 36303:case 36311:case 36292:return Pa}}var Ia=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ha(t.type)}},La=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fa(t.type)}},Ra=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},za=/(\w+)(\])?(\[|\.)?/g;function Ba(e,t){e.seq.push(t),e.map[t.id]=t}function Va(e,t,n){let r=e.name,i=r.length;for(za.lastIndex=0;;){let a=za.exec(r),o=za.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Ba(n,l===void 0?new Ia(s,e,t):new La(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Ra(s),Ba(n,e)),n=e}}}var Ha=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Va(n,e.getUniformLocation(t,n.name),this)}}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Ua(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Wa=37297,Ga=0;function Ka(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var qa=new H;function Ja(e){U._getMatrix(qa,U.workingColorSpace,e);let t=`mat3( ${qa.elements.map(e=>e.toFixed(4))} )`;switch(U.getTransfer(e)){case Ie:return[t,`LinearTransferOETF`];case Le:return[t,`sRGBTransferOETF`];default:return console.warn(`THREE.WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Ya(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=e.getShaderInfoLog(t).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Ka(e.getShaderSource(t),r)}return i}function Xa(e,t){let n=Ja(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}function Za(e,t){let n;switch(t){case 1:n=`Linear`;break;case 2:n=`Reinhard`;break;case 3:n=`Cineon`;break;case 4:n=`ACESFilmic`;break;case 6:n=`AgX`;break;case 7:n=`Neutral`;break;case 5:n=`Custom`;break;default:console.warn(`THREE.WebGLProgram: Unsupported toneMapping:`,t),n=`Linear`}return`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Qa=new W;function $a(){return U.getLuminanceCoefficients(Qa),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Qa.x.toFixed(4)}, ${Qa.y.toFixed(4)}, ${Qa.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function eo(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(ro).join(`
`)}function to(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function no(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function ro(e){return e!==``}function io(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ao(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var oo=/^[ \t]*#include +<([\w\d./]+)>/gm;function so(e){return e.replace(oo,lo)}var co=new Map;function lo(e,t){let n=J[t];if(n===void 0){let e=co.get(t);if(e!==void 0)n=J[e],console.warn(`THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return so(n)}var uo=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fo(e){return e.replace(uo,po)}function po(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function mo(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}function ho(e){let t=`SHADOWMAP_TYPE_BASIC`;return e.shadowMapType===1?t=`SHADOWMAP_TYPE_PCF`:e.shadowMapType===2?t=`SHADOWMAP_TYPE_PCF_SOFT`:e.shadowMapType===3&&(t=`SHADOWMAP_TYPE_VSM`),t}function go(e){let t=`ENVMAP_TYPE_CUBE`;if(e.envMap)switch(e.envMapMode){case 301:case 302:t=`ENVMAP_TYPE_CUBE`;break;case 306:t=`ENVMAP_TYPE_CUBE_UV`}return t}function _o(e){let t=`ENVMAP_MODE_REFLECTION`;if(e.envMap)switch(e.envMapMode){case 302:t=`ENVMAP_MODE_REFRACTION`}return t}function vo(e){let t=`ENVMAP_BLENDING_NONE`;if(e.envMap)switch(e.combine){case 0:t=`ENVMAP_BLENDING_MULTIPLY`;break;case 1:t=`ENVMAP_BLENDING_MIX`;break;case 2:t=`ENVMAP_BLENDING_ADD`}return t}function yo(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function bo(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=ho(n),l=go(n),u=_o(n),d=vo(n),f=yo(n),p=eo(n),m=to(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(ro).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(ro).join(`
`),_.length>0&&(_+=`
`)):(g=[mo(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.reverseDepthBuffer?`#define USE_REVERSEDEPTHBUF`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(ro).join(`
`),_=[mo(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor||n.batchingColor?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.reverseDepthBuffer?`#define USE_REVERSEDEPTHBUF`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:J.tonemapping_pars_fragment,n.toneMapping===0?``:Za(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,J.colorspace_pars_fragment,Xa(`linearToOutputTexel`,n.outputColorSpace),$a(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(ro).join(`
`)),o=so(o),o=io(o,n),o=ao(o,n),s=so(s),s=io(s,n),s=ao(s,n),o=fo(o),s=fo(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Ua(i,i.VERTEX_SHADER,y),S=Ua(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h).trim(),r=i.getShaderInfoLog(x).trim(),a=i.getShaderInfoLog(S).trim(),o=!0,s=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(o=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Ya(i,x,`vertex`),r=Ya(i,S,`fragment`);console.error(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+n+`
`+e+`
`+r)}}else n===``?(r===``||a===``)&&(s=!1):console.warn(`THREE.WebGLProgram: Program Info Log:`,n);s&&(t.diagnostics={runnable:o,programLog:n,vertexShader:{log:r,prefix:g},fragmentShader:{log:a,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Ha(i,h),T=no(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Wa)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ga++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var xo=0,So=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Co(e),t.set(e,n)),n}},Co=class{constructor(e){this.id=xo++,this.code=e,this.usedTimes=0}};function wo(e,t,n,r,i,a,o){let s=new dn,c=new So,l=new Set,u=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,m={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distanceRGBA`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function h(e){return l.add(e),e===0?`uv`:`uv${e}`}function g(a,s,u,g,_){let v=g.fog,y=_.geometry,b=a.isMeshStandardMaterial?g.environment:null,x=(a.isMeshStandardMaterial?n:t).get(a.envMap||b),S=x&&x.mapping===306?x.image.height:null,C=m[a.type];a.precision!==null&&(p=i.getMaxPrecision(a.precision),p!==a.precision&&console.warn(`THREE.WebGLProgram.getParameters:`,a.precision,`not supported, using`,p,`instead.`));let w=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,T=w===void 0?0:w.length,E=0;y.morphAttributes.position!==void 0&&(E=1),y.morphAttributes.normal!==void 0&&(E=2),y.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Zr[C];D=e.vertexShader,O=e.fragmentShader}else D=a.vertexShader,O=a.fragmentShader,c.update(a),k=c.getVertexShaderID(a),A=c.getFragmentShaderID(a);let j=e.getRenderTarget(),ee=e.state.buffers.depth.getReversed(),te=_.isInstancedMesh===!0,M=_.isBatchedMesh===!0,N=!!a.map,P=!!a.matcap,ne=!!x,re=!!a.aoMap,ie=!!a.lightMap,ae=!!a.bumpMap,oe=!!a.normalMap,se=!!a.displacementMap,ce=!!a.emissiveMap,le=!!a.metalnessMap,ue=!!a.roughnessMap,de=a.anisotropy>0,fe=a.clearcoat>0,pe=a.dispersion>0,me=a.iridescence>0,he=a.sheen>0,ge=a.transmission>0,F=de&&!!a.anisotropyMap,_e=fe&&!!a.clearcoatMap,ve=fe&&!!a.clearcoatNormalMap,ye=fe&&!!a.clearcoatRoughnessMap,I=me&&!!a.iridescenceMap,be=me&&!!a.iridescenceThicknessMap,L=he&&!!a.sheenColorMap,R=he&&!!a.sheenRoughnessMap,xe=!!a.specularMap,Se=!!a.specularColorMap,Ce=!!a.specularIntensityMap,we=ge&&!!a.transmissionMap,Te=ge&&!!a.thicknessMap,Ee=!!a.gradientMap,De=!!a.alphaMap,Oe=a.alphaTest>0,ke=!!a.alphaHash,Ae=!!a.extensions,je=0;a.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(je=e.toneMapping);let Me={shaderID:C,shaderType:a.type,shaderName:a.name,vertexShader:D,fragmentShader:O,defines:a.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:a.isRawShaderMaterial===!0,glslVersion:a.glslVersion,precision:p,batching:M,batchingColor:M&&_._colorsTexture!==null,instancing:te,instancingColor:te&&_.instanceColor!==null,instancingMorph:te&&_.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Fe,alphaToCoverage:!!a.alphaToCoverage,map:N,matcap:P,envMap:ne,envMapMode:ne&&x.mapping,envMapCubeUVHeight:S,aoMap:re,lightMap:ie,bumpMap:ae,normalMap:oe,displacementMap:f&&se,emissiveMap:ce,normalMapObjectSpace:oe&&a.normalMapType===1,normalMapTangentSpace:oe&&a.normalMapType===0,metalnessMap:le,roughnessMap:ue,anisotropy:de,anisotropyMap:F,clearcoat:fe,clearcoatMap:_e,clearcoatNormalMap:ve,clearcoatRoughnessMap:ye,dispersion:pe,iridescence:me,iridescenceMap:I,iridescenceThicknessMap:be,sheen:he,sheenColorMap:L,sheenRoughnessMap:R,specularMap:xe,specularColorMap:Se,specularIntensityMap:Ce,transmission:ge,transmissionMap:we,thicknessMap:Te,gradientMap:Ee,opaque:a.transparent===!1&&a.blending===1&&a.alphaToCoverage===!1,alphaMap:De,alphaTest:Oe,alphaHash:ke,combine:a.combine,mapUv:N&&h(a.map.channel),aoMapUv:re&&h(a.aoMap.channel),lightMapUv:ie&&h(a.lightMap.channel),bumpMapUv:ae&&h(a.bumpMap.channel),normalMapUv:oe&&h(a.normalMap.channel),displacementMapUv:se&&h(a.displacementMap.channel),emissiveMapUv:ce&&h(a.emissiveMap.channel),metalnessMapUv:le&&h(a.metalnessMap.channel),roughnessMapUv:ue&&h(a.roughnessMap.channel),anisotropyMapUv:F&&h(a.anisotropyMap.channel),clearcoatMapUv:_e&&h(a.clearcoatMap.channel),clearcoatNormalMapUv:ve&&h(a.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&h(a.clearcoatRoughnessMap.channel),iridescenceMapUv:I&&h(a.iridescenceMap.channel),iridescenceThicknessMapUv:be&&h(a.iridescenceThicknessMap.channel),sheenColorMapUv:L&&h(a.sheenColorMap.channel),sheenRoughnessMapUv:R&&h(a.sheenRoughnessMap.channel),specularMapUv:xe&&h(a.specularMap.channel),specularColorMapUv:Se&&h(a.specularColorMap.channel),specularIntensityMapUv:Ce&&h(a.specularIntensityMap.channel),transmissionMapUv:we&&h(a.transmissionMap.channel),thicknessMapUv:Te&&h(a.thicknessMap.channel),alphaMapUv:De&&h(a.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(oe||de),vertexColors:a.vertexColors,vertexAlphas:a.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,pointsUvs:_.isPoints===!0&&!!y.attributes.uv&&(N||De),fog:!!v,useFog:a.fog===!0,fogExp2:!!v&&v.isFogExp2,flatShading:a.flatShading===!0,sizeAttenuation:a.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:ee,skinning:_.isSkinnedMesh===!0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numSpotLightMaps:s.spotLightMap.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numSpotLightShadowsWithMaps:s.numSpotLightShadowsWithMaps,numLightProbes:s.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:a.dithering,shadowMapEnabled:e.shadowMap.enabled&&u.length>0,shadowMapType:e.shadowMap.type,toneMapping:je,decodeVideoTexture:N&&a.map.isVideoTexture===!0&&U.getTransfer(a.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ce&&a.emissiveMap.isVideoTexture===!0&&U.getTransfer(a.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:a.premultipliedAlpha,doubleSided:a.side===2,flipSided:a.side===1,useDepthPacking:a.depthPacking>=0,depthPacking:a.depthPacking||0,index0AttributeName:a.index0AttributeName,extensionClipCullDistance:Ae&&a.extensions.clipCullDistance===!0&&r.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ae&&a.extensions.multiDraw===!0||M)&&r.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:r.has(`KHR_parallel_shader_compile`),customProgramCacheKey:a.customProgramCacheKey()};return Me.vertexUv1s=l.has(1),Me.vertexUv2s=l.has(2),Me.vertexUv3s=l.has(3),l.clear(),Me}function _(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(v(n,t),y(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function v(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function y(e,t){s.disableAll(),t.supportsVertexTextures&&s.enable(0),t.instancing&&s.enable(1),t.instancingColor&&s.enable(2),t.instancingMorph&&s.enable(3),t.matcap&&s.enable(4),t.envMap&&s.enable(5),t.normalMapObjectSpace&&s.enable(6),t.normalMapTangentSpace&&s.enable(7),t.clearcoat&&s.enable(8),t.iridescence&&s.enable(9),t.alphaTest&&s.enable(10),t.vertexColors&&s.enable(11),t.vertexAlphas&&s.enable(12),t.vertexUv1s&&s.enable(13),t.vertexUv2s&&s.enable(14),t.vertexUv3s&&s.enable(15),t.vertexTangents&&s.enable(16),t.anisotropy&&s.enable(17),t.alphaHash&&s.enable(18),t.batching&&s.enable(19),t.dispersion&&s.enable(20),t.batchingColor&&s.enable(21),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.reverseDepthBuffer&&s.enable(4),t.skinning&&s.enable(5),t.morphTargets&&s.enable(6),t.morphNormals&&s.enable(7),t.morphColors&&s.enable(8),t.premultipliedAlpha&&s.enable(9),t.shadowMapEnabled&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),t.decodeVideoTextureEmissive&&s.enable(20),t.alphaToCoverage&&s.enable(21),e.push(s.mask)}function b(e){let t=m[e.type],n;if(t){let e=Zr[t];n=Dr.clone(e.uniforms)}else n=e.uniforms;return n}function x(t,n){let r;for(let e=0,t=u.length;e<t;e++){let t=u[e];if(t.cacheKey===n){r=t,++r.usedTimes;break}}return r===void 0&&(r=new bo(e,n,t,a),u.push(r)),r}function S(e){if(--e.usedTimes===0){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),e.destroy()}}function C(e){c.remove(e)}function w(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:b,acquireProgram:x,releaseProgram:S,releaseShaderCache:C,programs:u,dispose:w}}function To(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Eo(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.z===t.z?e.id-t.id:e.z-t.z:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Do(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Oo(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(n,r,i,a,o,s){let c=e[t];return c===void 0?(c={id:n.id,object:n,geometry:r,material:i,groupOrder:a,renderOrder:n.renderOrder,z:o,group:s},e[t]=c):(c.id=n.id,c.object=n,c.geometry=r,c.material=i,c.groupOrder=a,c.renderOrder=n.renderOrder,c.z=o,c.group=s),t++,c}function s(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function c(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function l(e,t){n.length>1&&n.sort(e||Eo),r.length>1&&r.sort(t||Do),i.length>1&&i.sort(t||Do)}function u(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:s,unshift:c,finish:u,sort:l}}function ko(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Oo,e.set(t,[i])):n>=r.length?(i=new Oo,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Ao(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new W,color:new G};break;case`SpotLight`:n={position:new W,direction:new W,color:new G,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new W,color:new G,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new W,skyColor:new G,groundColor:new G};break;case`RectAreaLight`:n={color:new G,position:new W,halfWidth:new W,halfHeight:new W}}return e[t.id]=n,n}}}function jo(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Mo=0;function No(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Po(e){let t=new Ao,n=jo(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new W);let i=new W,a=new $t,o=new $t;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(No);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Y.LTC_FLOAT_1,r.rectAreaLTC2=Y.LTC_FLOAT_2):(r.rectAreaLTC1=Y.LTC_HALF_1,r.rectAreaLTC2=Y.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=Mo++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function Fo(e){let t=new Po(e),n=[],r=[];function i(e){l.camera=e,n.length=0,r.length=0}function a(e){n.push(e)}function o(e){r.push(e)}function s(){t.setup(n)}function c(e){t.setupView(n,e)}let l={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:s,setupLightsView:c,pushLight:a,pushShadow:o}}function Io(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Fo(e),t.set(n,[a])):r>=i.length?(a=new Fo(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Lo=class extends Jn{static get type(){return`MeshDepthMaterial`}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Me,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ro=class extends Jn{static get type(){return`MeshDistanceMaterial`}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},zo=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bo=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Vo(e,t,n){let i=new qr,a=new V,o=new V,s=new vt,c=new Lo({depthPacking:Ne}),l=new Ro,u={},d=n.maxTextureSize,f={0:1,1:0,2:2},p=new Ar({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new V},radius:{value:4}},vertexShader:zo,fragmentShader:Bo}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let h=new lr;h.setAttribute(`position`,new Qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new K(h,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let v=this.type;this.render=function(t,n,c){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||t.length===0)return;let l=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let m=v!==3&&this.type===3,h=v===3&&this.type!==3;for(let l=0,u=t.length;l<u;l++){let u=t[l],f=u.shadow;if(f===void 0){console.warn(`THREE.WebGLShadowMap:`,u,`has no shadow.`);continue}if(f.autoUpdate===!1&&f.needsUpdate===!1)continue;a.copy(f.mapSize);let g=f.getFrameExtents();if(a.multiply(g),o.copy(f.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(o.x=Math.floor(d/g.x),a.x=o.x*g.x,f.mapSize.x=o.x),a.y>d&&(o.y=Math.floor(d/g.y),a.y=o.y*g.y,f.mapSize.y=o.y)),f.map===null||m===!0||h===!0){let e=this.type===3?{}:{minFilter:r,magFilter:r};f.map!==null&&f.map.dispose(),f.map=new bt(a.x,a.y,e),f.map.texture.name=u.name+`.shadowMap`,f.camera.updateProjectionMatrix()}e.setRenderTarget(f.map),e.clear();let _=f.getViewportCount();for(let e=0;e<_;e++){let t=f.getViewport(e);s.set(o.x*t.x,o.y*t.y,o.x*t.z,o.y*t.w),p.viewport(s),f.updateMatrices(u,e),i=f.getFrustum(),x(n,c,f.camera,u,this.type)}f.isPointLightShadow!==!0&&this.type===3&&y(f,c),f.needsUpdate=!1}v=this.type,_.needsUpdate=!1,e.setRenderTarget(l,u,f)};function y(n,r){let i=t.update(g);p.defines.VSM_SAMPLES!==n.blurSamples&&(p.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new bt(a.x,a.y)),p.uniforms.shadow_pass.value=n.map.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,p,g,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value=n.mapSize,m.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,m,g,null)}function b(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?l:c,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0){let e=a.uuid,t=n.uuid,r=u[e];r===void 0&&(r={},u[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,S)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?f[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function x(n,r,a,o,s){if(n.visible===!1)return;if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||i.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),c=n.material;if(Array.isArray(c)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=b(n,d,o,s);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(c.visible){let t=b(n,c,o,s);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)x(c[e],r,a,o,s)}function S(e){e.target.removeEventListener(`dispose`,S);for(let t in u){let n=u[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}var Ho={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function Uo(e,t){function n(){let t=!1,n=new vt,r=null,i=new vt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let e=t.get(`EXT_clip_control`);r?e.clipControlEXT(e.LOWER_LEFT_EXT,e.ZERO_TO_ONE_EXT):e.clipControlEXT(e.LOWER_LEFT_EXT,e.NEGATIVE_ONE_TO_ONE_EXT);let n=o;o=null,this.setClear(n)}r=e},getReversed:function(){return r},setTest:function(t){t?ce(e.DEPTH_TEST):le(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Ho[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(r&&(t=1-t),e.clearDepth(t),o=t)},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?ce(e.STENCIL_TEST):le(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new G(0,0,0),w=0,T=!1,E=null,D=null,O=null,k=null,A=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ee=!1,te=0,M=e.getParameter(e.VERSION);M.indexOf(`WebGL`)===-1?M.indexOf(`OpenGL ES`)!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(M)[1]),ee=te>=2):(te=parseFloat(/^WebGL (\d)/.exec(M)[1]),ee=te>=1);let N=null,P={},ne=e.getParameter(e.SCISSOR_BOX),re=e.getParameter(e.VIEWPORT),ie=new vt().fromArray(ne),ae=new vt().fromArray(re);function oe(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let se={};se[e.TEXTURE_2D]=oe(e.TEXTURE_2D,e.TEXTURE_2D,1),se[e.TEXTURE_CUBE_MAP]=oe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[e.TEXTURE_2D_ARRAY]=oe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),se[e.TEXTURE_3D]=oe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ce(e.DEPTH_TEST),o.setFunc(3),F(!1),_e(1),ce(e.CULL_FACE),he(0);function ce(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function le(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ue(t,n){return d[t]!==n&&(e.bindFramebuffer(t,n),d[t]=n,t===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=n),!0)}function de(t,n){let r=p,i=!1;if(t){r=f.get(n),r===void 0&&(r=[],f.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function fe(t){return m!==t&&(e.useProgram(t),m=t,!0)}let pe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};pe[103]=e.MIN,pe[104]=e.MAX;let me={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function he(t,n,r,i,a,o,s,c,l,u){if(t===0)h===!0&&(le(e.BLEND),h=!1);else if(h===!1&&(ce(e.BLEND),h=!0),t!==5){if(t!==g||u!==T){if((_!==100||b!==100)&&(e.blendEquation(e.FUNC_ADD),_=100,b=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}v=null,y=null,x=null,S=null,C.set(0,0,0),w=0,g=t,T=u}}else a||=n,o||=r,s||=i,(n!==_||a!==b)&&(e.blendEquationSeparate(pe[n],pe[a]),_=n,b=a),(r!==v||i!==y||o!==x||s!==S)&&(e.blendFuncSeparate(me[r],me[i],me[o],me[s]),v=r,y=i,x=o,S=s),(c.equals(C)===!1||l!==w)&&(e.blendColor(c.r,c.g,c.b,l),C.copy(c),w=l),g=t,T=!1}function ge(t,n){t.side===2?le(e.CULL_FACE):ce(e.CULL_FACE);let r=t.side===1;n&&(r=!r),F(r),t.blending===1&&t.transparent===!1?he(0):he(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ye(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?ce(e.SAMPLE_ALPHA_TO_COVERAGE):le(e.SAMPLE_ALPHA_TO_COVERAGE)}function F(t){E!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),E=t)}function _e(t){t===0?le(e.CULL_FACE):(ce(e.CULL_FACE),t!==D&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),D=t}function ve(t){t!==O&&(ee&&e.lineWidth(t),O=t)}function ye(t,n,r){t?(ce(e.POLYGON_OFFSET_FILL),(k!==n||A!==r)&&(e.polygonOffset(n,r),k=n,A=r)):le(e.POLYGON_OFFSET_FILL)}function I(t){t?ce(e.SCISSOR_TEST):le(e.SCISSOR_TEST)}function be(t){t===void 0&&(t=e.TEXTURE0+j-1),N!==t&&(e.activeTexture(t),N=t)}function L(t,n,r){r===void 0&&(r=N===null?e.TEXTURE0+j-1:N);let i=P[r];i===void 0&&(i={type:void 0,texture:void 0},P[r]=i),(i.type!==t||i.texture!==n)&&(N!==r&&(e.activeTexture(r),N=r),e.bindTexture(t,n||se[t]),i.type=t,i.texture=n)}function R(){let t=P[N];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function xe(){try{e.compressedTexImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Se(){try{e.compressedTexImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ce(){try{e.texSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function we(){try{e.texSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Te(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ee(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function De(){try{e.texStorage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Oe(){try{e.texStorage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ke(){try{e.texImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ae(){try{e.texImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function je(t){ie.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ie.copy(t))}function Me(t){ae.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ae.copy(t))}function Ne(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Pe(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Fe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},N=null,P={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new G(0,0,0),w=0,T=!1,E=null,D=null,O=null,k=null,A=null,ie.set(0,0,e.canvas.width,e.canvas.height),ae.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:ce,disable:le,bindFramebuffer:ue,drawBuffers:de,useProgram:fe,setBlending:he,setMaterial:ge,setFlipSided:F,setCullFace:_e,setLineWidth:ve,setPolygonOffset:ye,setScissorTest:I,activeTexture:be,bindTexture:L,unbindTexture:R,compressedTexImage2D:xe,compressedTexImage3D:Se,texImage2D:ke,texImage3D:Ae,updateUBOMapping:Ne,uniformBlockBinding:Pe,texStorage2D:De,texStorage3D:Oe,texSubImage2D:Ce,texSubImage3D:we,compressedTexSubImage2D:Te,compressedTexSubImage3D:Ee,scissor:je,viewport:Me,reset:Fe}}function Wo(e,t,n,r){let i=Go(r);switch(n){case x:return e*t;case w:return e*t;case T:return e*t*2;case O:return e*t/i.components*i.byteLength;case k:return e*t/i.components*i.byteLength;case A:return e*t*2/i.components*i.byteLength;case j:return e*t*2/i.components*i.byteLength;case S:return e*t*3/i.components*i.byteLength;case C:return e*t*4/i.components*i.byteLength;case ee:return e*t*4/i.components*i.byteLength;case te:case M:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case N:case P:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case re:case ae:return Math.max(e,16)*Math.max(t,8)/4;case ne:case ie:return Math.max(e,8)*Math.max(t,8)/2;case oe:case se:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ce:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case le:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ue:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case de:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case fe:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case pe:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case me:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case he:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ge:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case F:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case _e:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case ve:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case ye:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case I:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case be:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case L:case R:case xe:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Se:case Ce:return Math.ceil(e/4)*Math.ceil(t/4)*8;case we:case Te:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Go(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${e}.`)}function Ko(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new V,y=new WeakMap,b,x=new WeakMap,S=!1;try{S=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function C(e,t){return S?new OffscreenCanvas(e,t):Ze(`canvas`)}function w(e,t,n){let r=1,i=De(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);b===void 0&&(b=C(n,a));let o=t?C(n,a):b;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),console.warn(`THREE.WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&console.warn(`THREE.WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function T(e){return e.generateMipmaps}function E(e){l.generateMipmap(e)}function O(e){return e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?l.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function k(e,t,n,r,i=!1){if(e!==null){if(l[e]!==void 0)return l[e];console.warn(`THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let a=t;if(t===l.RED&&(n===l.FLOAT&&(a=l.R32F),n===l.HALF_FLOAT&&(a=l.R16F),n===l.UNSIGNED_BYTE&&(a=l.R8)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(a=l.R8UI),n===l.UNSIGNED_SHORT&&(a=l.R16UI),n===l.UNSIGNED_INT&&(a=l.R32UI),n===l.BYTE&&(a=l.R8I),n===l.SHORT&&(a=l.R16I),n===l.INT&&(a=l.R32I)),t===l.RG&&(n===l.FLOAT&&(a=l.RG32F),n===l.HALF_FLOAT&&(a=l.RG16F),n===l.UNSIGNED_BYTE&&(a=l.RG8)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(a=l.RG8UI),n===l.UNSIGNED_SHORT&&(a=l.RG16UI),n===l.UNSIGNED_INT&&(a=l.RG32UI),n===l.BYTE&&(a=l.RG8I),n===l.SHORT&&(a=l.RG16I),n===l.INT&&(a=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(a=l.RGB8UI),n===l.UNSIGNED_SHORT&&(a=l.RGB16UI),n===l.UNSIGNED_INT&&(a=l.RGB32UI),n===l.BYTE&&(a=l.RGB8I),n===l.SHORT&&(a=l.RGB16I),n===l.INT&&(a=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(a=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(a=l.RGBA16UI),n===l.UNSIGNED_INT&&(a=l.RGBA32UI),n===l.BYTE&&(a=l.RGBA8I),n===l.SHORT&&(a=l.RGBA16I),n===l.INT&&(a=l.RGBA32I)),t===l.RGB&&n===l.UNSIGNED_INT_5_9_9_9_REV&&(a=l.RGB9_E5),t===l.RGBA){let e=i?Ie:U.getTransfer(r);n===l.FLOAT&&(a=l.RGBA32F),n===l.HALF_FLOAT&&(a=l.RGBA16F),n===l.UNSIGNED_BYTE&&(a=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT_4_4_4_4&&(a=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(a=l.RGB5_A1)}return(a===l.R16F||a===l.R32F||a===l.RG16F||a===l.RG32F||a===l.RGBA16F||a===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),a}function A(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,console.warn(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function j(e,t){return T(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function ee(e){let t=e.target;t.removeEventListener(`dispose`,ee),M(t),t.isVideoTexture&&y.delete(t)}function te(e){let t=e.target;t.removeEventListener(`dispose`,te),P(t)}function M(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=x.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&N(e),Object.keys(r).length===0&&x.delete(n)}f.remove(e)}function N(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=x.get(n);delete r[t.__cacheKey],h.memory.textures--}function P(e){let t=f.get(e);if(e.depthTexture&&(e.depthTexture.dispose(),f.remove(e.depthTexture)),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let n=e.textures;for(let e=0,t=n.length;e<t;e++){let t=f.get(n[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(n[e])}f.remove(e)}let ne=0;function re(){ne=0}function ie(){let e=ne;return e>=p.maxTextures&&console.warn(`THREE.WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+p.maxTextures),ne+=1,e}function ae(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function oe(e,t){let n=f.get(e);if(e.isVideoTexture&&Te(e),e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)console.warn(`THREE.WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)console.warn(`THREE.WebGLRenderer: Texture marked for update but image is incomplete`);else{he(n,e,t);return}}d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function se(e,t){let n=f.get(e);e.version>0&&n.__version!==e.version?he(n,e,t):d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t)}function ce(e,t){let n=f.get(e);e.version>0&&n.__version!==e.version?he(n,e,t):d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function le(e,t){let n=f.get(e);e.version>0&&n.__version!==e.version?ge(n,e,t):d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let ue={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},de={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},fe={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function pe(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&console.warn(`THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,ue[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,ue[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,ue[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,de[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,de[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,fe[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function me(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,ee));let r=t.source,i=x.get(r);i===void 0&&(i={},x.set(r,i));let a=ae(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&N(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function he(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=me(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){d.activeTexture(l.TEXTURE0+n);let e=U.getPrimaries(U.workingColorSpace),s=t.colorSpace===``?null:U.getPrimaries(t.colorSpace),c=t.colorSpace===``||e===s?l.NONE:l.BROWSER_DEFAULT_WEBGL;l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),l.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),l.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,c);let u=w(t.image,!1,p.maxTextureSize);u=Ee(t,u);let f=m.convert(t.format,t.colorSpace),h=m.convert(t.type),g=k(t.internalFormat,f,h,t.colorSpace,t.isVideoTexture);pe(r,t);let _,v=t.mipmaps,y=t.isVideoTexture!==!0,b=o.__version===void 0||i===!0,x=a.dataReady,S=j(t,u);if(t.isDepthTexture)g=A(t.format===D,t.type),b&&(y?d.texStorage2D(l.TEXTURE_2D,1,g,u.width,u.height):d.texImage2D(l.TEXTURE_2D,0,g,u.width,u.height,0,f,h,null));else if(t.isDataTexture){if(v.length>0){y&&b&&d.texStorage2D(l.TEXTURE_2D,S,g,v[0].width,v[0].height);for(let e=0,t=v.length;e<t;e++)_=v[e],y?x&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,_.width,_.height,f,h,_.data):d.texImage2D(l.TEXTURE_2D,e,g,_.width,_.height,0,f,h,_.data);t.generateMipmaps=!1}else y?(b&&d.texStorage2D(l.TEXTURE_2D,S,g,u.width,u.height),x&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,u.width,u.height,f,h,u.data)):d.texImage2D(l.TEXTURE_2D,0,g,u.width,u.height,0,f,h,u.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){y&&b&&d.texStorage3D(l.TEXTURE_2D_ARRAY,S,g,v[0].width,v[0].height,u.depth);for(let e=0,n=v.length;e<n;e++)if(_=v[e],t.format!==1023){if(f!==null){if(y){if(x){if(t.layerUpdates.size>0){let n=Wo(_.width,_.height,t.format,t.type);for(let r of t.layerUpdates){let t=_.data.subarray(r*n/_.data.BYTES_PER_ELEMENT,(r+1)*n/_.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,e,0,0,r,_.width,_.height,1,f,t)}t.clearLayerUpdates()}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,e,0,0,0,_.width,_.height,u.depth,f,_.data)}}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,e,g,_.width,_.height,u.depth,0,_.data,0,0)}else console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else y?x&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,e,0,0,0,_.width,_.height,u.depth,f,h,_.data):d.texImage3D(l.TEXTURE_2D_ARRAY,e,g,_.width,_.height,u.depth,0,f,h,_.data)}else{y&&b&&d.texStorage2D(l.TEXTURE_2D,S,g,v[0].width,v[0].height);for(let e=0,n=v.length;e<n;e++)_=v[e],t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,_.width,_.height,f,h,_.data):d.texImage2D(l.TEXTURE_2D,e,g,_.width,_.height,0,f,h,_.data):f===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,_.width,_.height,f,_.data):d.compressedTexImage2D(l.TEXTURE_2D,e,g,_.width,_.height,0,_.data)}}else if(t.isDataArrayTexture){if(y){if(b&&d.texStorage3D(l.TEXTURE_2D_ARRAY,S,g,u.width,u.height,u.depth),x){if(t.layerUpdates.size>0){let e=Wo(u.width,u.height,t.format,t.type);for(let n of t.layerUpdates){let t=u.data.subarray(n*e/u.data.BYTES_PER_ELEMENT,(n+1)*e/u.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,n,u.width,u.height,1,f,h,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,u.width,u.height,u.depth,f,h,u.data)}}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,g,u.width,u.height,u.depth,0,f,h,u.data)}else if(t.isData3DTexture)y?(b&&d.texStorage3D(l.TEXTURE_3D,S,g,u.width,u.height,u.depth),x&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,u.width,u.height,u.depth,f,h,u.data)):d.texImage3D(l.TEXTURE_3D,0,g,u.width,u.height,u.depth,0,f,h,u.data);else if(t.isFramebufferTexture){if(b){if(y)d.texStorage2D(l.TEXTURE_2D,S,g,u.width,u.height);else{let e=u.width,t=u.height;for(let n=0;n<S;n++)d.texImage2D(l.TEXTURE_2D,n,g,e,t,0,f,h,null),e>>=1,t>>=1}}}else if(v.length>0){if(y&&b){let e=De(v[0]);d.texStorage2D(l.TEXTURE_2D,S,g,e.width,e.height)}for(let e=0,t=v.length;e<t;e++)_=v[e],y?x&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f,h,_):d.texImage2D(l.TEXTURE_2D,e,g,f,h,_);t.generateMipmaps=!1}else if(y){if(b){let e=De(u);d.texStorage2D(l.TEXTURE_2D,S,g,e.width,e.height)}x&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,f,h,u)}else d.texImage2D(l.TEXTURE_2D,0,g,f,h,u);T(t)&&E(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function ge(e,t,n){if(t.image.length!==6)return;let r=me(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=U.getPrimaries(U.workingColorSpace),o=t.colorSpace===``?null:U.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),l.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),l.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=w(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=Ee(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=k(t.internalFormat,g,_,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=j(t,h);pe(l.TEXTURE_CUBE_MAP,t);let C;if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=De(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}T(t)&&E(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function F(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=k(n.internalFormat,o,s,n.colorSpace),u=f.get(t),p=f.get(n);if(p.__renderTarget=t,!u.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),we(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,p.__webglTexture,0,Ce(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,p.__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function _e(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=A(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,s=Ce(t);we(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,s,a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,s,a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=k(i.internalFormat,a,o,i.colorSpace),c=Ce(t);n&&we(t)===!1?l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,t.width,t.height):we(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,c,s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function ve(e,t){if(t&&t.isWebGLCubeRenderTarget)throw Error(`Depth Texture with cube render targets is not supported`);if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);let n=f.get(t.depthTexture);n.__renderTarget=t,n.__webglTexture&&t.depthTexture.image.width===t.width&&t.depthTexture.image.height===t.height||(t.depthTexture.image.width=t.width,t.depthTexture.image.height=t.height,t.depthTexture.needsUpdate=!0),oe(t.depthTexture,0);let r=n.__webglTexture,i=Ce(t);if(t.depthTexture.format===1026)we(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,l.DEPTH_ATTACHMENT,l.TEXTURE_2D,r,0,i):l.framebufferTexture2D(l.FRAMEBUFFER,l.DEPTH_ATTACHMENT,l.TEXTURE_2D,r,0);else if(t.depthTexture.format===1027)we(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,l.DEPTH_STENCIL_ATTACHMENT,l.TEXTURE_2D,r,0,i):l.framebufferTexture2D(l.FRAMEBUFFER,l.DEPTH_STENCIL_ATTACHMENT,l.TEXTURE_2D,r,0);else throw Error(`Unknown depthTexture format`)}function ye(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)throw Error(`target.depthTexture not supported in Cube render targets`);ve(t.__webglFramebuffer,e)}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),_e(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),_e(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}d.bindFramebuffer(l.FRAMEBUFFER,null)}function I(e,t,n){let r=f.get(e);t!==void 0&&F(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&ye(e)}function be(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,te);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&we(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=k(r.internalFormat,a,o,r.colorSpace,e.isXRRenderTarget===!0),c=Ce(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),_e(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),pe(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps&&t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)F(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else F(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);T(t)&&E(l.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r);d.bindTexture(l.TEXTURE_2D,a.__webglTexture),pe(l.TEXTURE_2D,r),F(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,l.TEXTURE_2D,0),T(r)&&E(l.TEXTURE_2D)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),pe(i,t),t.mipmaps&&t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)F(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else F(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);T(t)&&E(i),d.unbindTexture()}e.depthBuffer&&ye(e)}function L(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(T(r)){let t=O(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),E(t),d.unbindTexture()}}}let R=[],xe=[];function Se(e){if(e.samples>0){if(we(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(R.length=0,xe.length=0,R.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.resolveDepthBuffer===!1&&(R.push(a),xe.push(a),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,xe)),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,R))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.resolveDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function Ce(e){return Math.min(p.maxSamples,e.samples)}function we(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function Te(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Ee(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(U.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&console.warn(`THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):console.error(`THREE.WebGLTextures: Unsupported texture color space:`,n)),t}function De(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=ie,this.resetTextureUnits=re,this.setTexture2D=oe,this.setTexture2DArray=se,this.setTexture3D=ce,this.setTextureCube=le,this.rebindTextures=I,this.setupRenderTarget=be,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=F,this.useMultisampledRTT=we}function qo(e,t){function n(n,r=``){let i,a=U.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1024)return e.LUMINANCE;if(n===1025)return e.LUMINANCE_ALPHA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36492)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Jo=class extends Fr{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Yo=class extends Dn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Xo={type:`move`},Zo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Xo)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Yo;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Qo=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$o=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,es=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new _t,i=e.properties.get(r);i.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ar({vertexShader:Qo,fragmentShader:$o,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new K(new Xr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ts=class extends Ve{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=new es,_=t.getContextAttributes(),v=null,b=null,x=[],S=[],w=new V,T=null,O=new Fr;O.viewport=new vt;let k=new Fr;k.viewport=new vt;let A=[O,k],j=new Jo,ee=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=x[e];return t===void 0&&(t=new Zo,x[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=x[e];return t===void 0&&(t=new Zo,x[e]=t),t.getGripSpace()},this.getHand=function(e){let t=x[e];return t===void 0&&(t=new Zo,x[e]=t),t.getHandSpace()};function M(e){let t=S.indexOf(e.inputSource);if(t===-1)return;let n=x[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function N(){r.removeEventListener(`select`,M),r.removeEventListener(`selectstart`,M),r.removeEventListener(`selectend`,M),r.removeEventListener(`squeeze`,M),r.removeEventListener(`squeezestart`,M),r.removeEventListener(`squeezeend`,M),r.removeEventListener(`end`,N),r.removeEventListener(`inputsourceschange`,P);for(let e=0;e<x.length;e++){let t=S[e];t!==null&&(S[e]=null,x[e].disconnect(t))}ee=null,te=null,g.reset(),e.setRenderTarget(v),p=null,f=null,d=null,r=null,b=null,le.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,M),r.addEventListener(`selectstart`,M),r.addEventListener(`selectend`,M),r.addEventListener(`squeeze`,M),r.addEventListener(`squeezestart`,M),r.addEventListener(`squeezeend`,M),r.addEventListener(`end`,N),r.addEventListener(`inputsourceschange`,P),_.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(w),r.renderState.layers===void 0){let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new bt(p.framebufferWidth,p.framebufferHeight,{format:C,type:l,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?D:E,a=_.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new bt(f.textureWidth,f.textureHeight,{format:C,type:l,depthTexture:new Fi(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),le.setContext(r),le.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function P(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=S.indexOf(n);r>=0&&(S[r]=null,x[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=S.indexOf(n);if(r===-1){for(let e=0;e<x.length;e++)if(e>=S.length){S.push(n),r=e;break}else if(S[e]===null){S[e]=n,r=e;break}if(r===-1)break}let i=x[r];i&&i.connect(n)}}let ne=new W,re=new W;function ie(e,t,n){ne.setFromMatrixPosition(t.matrixWorld),re.setFromMatrixPosition(n.matrixWorld);let r=ne.distanceTo(re),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ae(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;g.texture!==null&&(g.depthNear>0&&(t=g.depthNear),g.depthFar>0&&(n=g.depthFar)),j.near=k.near=O.near=t,j.far=k.far=O.far=n,(ee!==j.near||te!==j.far)&&(r.updateRenderState({depthNear:j.near,depthFar:j.far}),ee=j.near,te=j.far),O.layers.mask=e.layers.mask|2,k.layers.mask=e.layers.mask|4,j.layers.mask=O.layers.mask|k.layers.mask;let i=e.parent,a=j.cameras;ae(j,i);for(let e=0;e<a.length;e++)ae(a[e],i);a.length===2?ie(j,O,k):j.projectionMatrix.copy(O.projectionMatrix),oe(e,j,i)};function oe(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Ue*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(j)};let se=null;function ce(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let n=!1;t.length!==j.cameras.length&&(j.cameras.length=0,n=!0);for(let r=0;r<t.length;r++){let i=t[r],a=null;if(p!==null)a=p.getViewport(i);else{let t=d.getViewSubImage(f,i);a=t.viewport,r===0&&(e.setRenderTargetTextures(b,t.colorTexture,f.ignoreDepthValues?void 0:t.depthStencilTexture),e.setRenderTarget(b))}let o=A[r];o===void 0&&(o=new Fr,o.layers.enable(r),o.viewport=new vt,A[r]=o),o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(i.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),r===0&&(j.matrix.copy(o.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),n===!0&&j.cameras.push(o)}let i=r.enabledFeatures;if(i&&i.includes(`depth-sensing`)){let n=d.getDepthInformation(t[0]);n&&n.isValid&&n.texture&&g.init(e,n,r.renderState)}}for(let e=0;e<x.length;e++){let t=S[e],n=x[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}se&&se(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let le=new Jr;le.setAnimationLoop(ce),this.setAnimationLoop=function(e){se=e},this.dispose=function(){}}},ns=new un,rs=new $t;function is(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Er(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isMeshBasicMaterial||t.isMeshLambertMaterial?a(e,t):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,ns.copy(o),ns.x*=-1,ns.y*=-1,ns.z*=-1,a.isCubeTexture&&a.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),e.envMapRotation.value.setFromMatrix4(rs.makeRotationFromEuler(ns)),e.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function as(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return console.error(`THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?console.warn(`THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.`):console.warn(`THREE.WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}var os=class{constructor(e={}){let{canvas:t=Qe(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);m=n.getContextAttributes().alpha}else m=a;let h=new Uint32Array(4),_=new Int32Array(4),v=null,y=null,b=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pe,this.toneMapping=0,this.toneMappingExposure=1;let S=this,C=!1,w=0,T=0,E=null,D=-1,O=null,k=new vt,A=new vt,j=null,ee=new G(0),te=0,M=t.width,N=t.height,P=1,ne=null,re=null,ie=new vt(0,0,M,N),ae=new vt(0,0,M,N),oe=!1,se=new qr,ce=!1,le=!1,ue=new $t,de=new $t,fe=new W,pe=new vt,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},he=!1;function ge(){return E===null?P:1}let F=n;function _e(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:f};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r170`),t.addEventListener(`webglcontextlost`,He,!1),t.addEventListener(`webglcontextrestored`,Ue,!1),t.addEventListener(`webglcontextcreationerror`,We,!1),F===null){let t=`webgl2`;if(F=_e(t,e),F===null)throw _e(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}}catch(e){throw console.error(`THREE.WebGLRenderer: `+e.message),e}let ve,ye,I,be,L,R,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Ie,Le,Re,ze,Be;function Ve(){ve=new ki(F),ve.init(),Re=new qo(F,ve),ye=new ii(F,ve,e,Re),I=new Uo(F,ve),ye.reverseDepthBuffer&&p&&I.buffers.depth.setReversed(!0),be=new Mi(F),L=new To,R=new Ko(F,ve,I,L,ye,Re,be),xe=new oi(S),Se=new Oi(S),Ce=new Yr(F),ze=new ni(F,Ce),we=new Ai(F,Ce,be,ze),Te=new Pi(F,we,Ce,be),Ne=new Ni(F,ye,R),Ae=new ai(L),Ee=new wo(S,xe,Se,ve,ye,ze,Ae),De=new is(S,L),Oe=new ko,ke=new Io(ve),Me=new ti(S,xe,Se,I,Te,m,s),je=new Vo(S,Te,ye),Be=new as(F,be,ye,I),Ie=new ri(F,ve,be),Le=new ji(F,ve,be),be.programs=Ee.programs,S.capabilities=ye,S.extensions=ve,S.properties=L,S.renderLists=Oe,S.shadowMap=je,S.state=I,S.info=be}Ve();let z=new ts(S,F);this.xr=z,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let e=ve.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=ve.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(e){e!==void 0&&(P=e,this.setSize(M,N,!1))},this.getSize=function(e){return e.set(M,N)},this.setSize=function(e,n,r=!0){z.isPresenting?console.warn(`THREE.WebGLRenderer: Can't change size while VR device is presenting.`):(M=e,N=n,t.width=Math.floor(e*P),t.height=Math.floor(n*P),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(M*P,N*P).floor()},this.setDrawingBufferSize=function(e,n,r){M=e,N=n,P=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.getCurrentViewport=function(e){return e.copy(k)},this.getViewport=function(e){return e.copy(ie)},this.setViewport=function(e,t,n,r){e.isVector4?ie.set(e.x,e.y,e.z,e.w):ie.set(e,t,n,r),I.viewport(k.copy(ie).multiplyScalar(P).round())},this.getScissor=function(e){return e.copy(ae)},this.setScissor=function(e,t,n,r){e.isVector4?ae.set(e.x,e.y,e.z,e.w):ae.set(e,t,n,r),I.scissor(A.copy(ae).multiplyScalar(P).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(e){I.setScissorTest(oe=e)},this.setOpaqueSort=function(e){ne=e},this.setTransparentSort=function(e){re=e},this.getClearColor=function(e){return e.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor.apply(Me,arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha.apply(Me,arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(E!==null){let t=E.texture.format;e=t===1033||t===1031||t===1029}if(e){let e=E.texture.type,t=e===1009||e===1014||e===1012||e===1020||e===1017||e===1018,n=Me.getClearColor(),r=Me.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(h[0]=i,h[1]=a,h[2]=o,h[3]=r,F.clearBufferuiv(F.COLOR,0,h)):(_[0]=i,_[1]=a,_[2]=o,_[3]=r,F.clearBufferiv(F.COLOR,0,_))}else r|=F.COLOR_BUFFER_BIT}t&&(r|=F.DEPTH_BUFFER_BIT),n&&(r|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener(`webglcontextlost`,He,!1),t.removeEventListener(`webglcontextrestored`,Ue,!1),t.removeEventListener(`webglcontextcreationerror`,We,!1),Oe.dispose(),ke.dispose(),L.dispose(),xe.dispose(),Se.dispose(),Te.dispose(),ze.dispose(),Be.dispose(),Ee.dispose(),z.dispose(),z.removeEventListener(`sessionstart`,H),z.removeEventListener(`sessionend`,Ye),Xe.stop()};function He(e){e.preventDefault(),console.log(`THREE.WebGLRenderer: Context Lost.`),C=!0}function Ue(){console.log(`THREE.WebGLRenderer: Context Restored.`),C=!1;let e=be.autoReset,t=je.enabled,n=je.autoUpdate,r=je.needsUpdate,i=je.type;Ve(),be.autoReset=e,je.enabled=t,je.autoUpdate=n,je.needsUpdate=r,je.type=i}function We(e){console.error(`THREE.WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Ge(e){let t=e.target;t.removeEventListener(`dispose`,Ge),Ke(t)}function Ke(e){qe(e),L.remove(e)}function qe(e){let t=L.get(e).programs;t!==void 0&&(t.forEach(function(e){Ee.releaseProgram(e)}),e.isShaderMaterial&&Ee.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=me);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=ut(e,t,n,r,i);I.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=we.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;ze.setup(i,r,s,n,c);let h,g=Ie;if(c!==null&&(h=Ce.get(c),g=Le,g.setIndex(h)),i.isMesh)r.wireframe===!0?(I.setLineWidth(r.wireframeLinewidth*ge()),g.setMode(F.LINES)):g.setMode(F.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),I.setLineWidth(e*ge()),i.isLineSegments?g.setMode(F.LINES):i.isLineLoop?g.setMode(F.LINE_LOOP):g.setMode(F.LINE_STRIP)}else i.isPoints?g.setMode(F.POINTS):i.isSprite&&g.setMode(F.TRIANGLES);if(i.isBatchedMesh){if(i._multiDrawInstances!==null)g.renderMultiDrawInstances(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount,i._multiDrawInstances);else if(ve.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ce.get(c).bytesPerElement:1,o=L.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(F,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Je(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,st(e,t,n),e.side=0,e.needsUpdate=!0,st(e,t,n),e.side=2):st(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),y=ke.get(n),y.init(t),x.push(y),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(y.pushLight(e),e.castShadow&&y.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(y.pushLight(e),e.castShadow&&y.pushShadow(e))}),y.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];Je(a,n,e),r.add(a)}else Je(t,n,e),r.add(t)}}),x.pop(),y=null,r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){L.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}ve.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let B=null;function V(e){B&&B(e)}function H(){Xe.stop()}function Ye(){Xe.start()}let Xe=new Jr;Xe.setAnimationLoop(V),typeof self<`u`&&Xe.setContext(self),this.setAnimationLoop=function(e){B=e,z.setAnimationLoop(e),e===null?Xe.stop():Xe.start()},z.addEventListener(`sessionstart`,H),z.addEventListener(`sessionend`,Ye),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){console.error(`THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(C===!0)return;if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(t),t=z.getCamera()),e.isScene===!0&&e.onBeforeRender(S,e,t,E),y=ke.get(e,x.length),y.init(t),x.push(y),de.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),se.setFromProjectionMatrix(de),le=this.localClippingEnabled,ce=Ae.init(this.clippingPlanes,le),v=Oe.get(e,b.length),v.init(),b.push(v),z.enabled===!0&&z.isPresenting===!0){let e=S.xr.getDepthSensingMesh();e!==null&&Ze(e,t,-1/0,S.sortObjects)}Ze(e,t,0,S.sortObjects),v.finish(),S.sortObjects===!0&&v.sort(ne,re),he=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,he&&Me.addToRenderList(v,e),this.info.render.frame++,ce===!0&&Ae.beginShadows();let n=y.state.shadowsArray;je.render(n,e,t),ce===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();let r=v.opaque,i=v.transmissive;if(y.setupLights(),t.isArrayCamera){let n=t.cameras;if(i.length>0)for(let t=0,a=n.length;t<a;t++){let a=n[t];it(r,i,e,a)}he&&Me.render(e);for(let t=0,r=n.length;t<r;t++){let r=n[t];$e(v,e,r,r.viewport)}}else i.length>0&&it(r,i,e,t),he&&Me.render(e),$e(v,e,t);E!==null&&(R.updateMultisampleRenderTarget(E),R.updateRenderTargetMipmap(E)),e.isScene===!0&&e.onAfterRender(S,e,t),ze.resetDefaultState(),D=-1,O=null,x.pop(),x.length>0?(y=x[x.length-1],ce===!0&&Ae.setGlobalState(S.clippingPlanes,y.state.camera)):y=null,b.pop(),v=b.length>0?b[b.length-1]:null};function Ze(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)y.pushLight(e),e.castShadow&&y.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||se.intersectsSprite(e)){r&&pe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(de);let t=Te.update(e),i=e.material;i.visible&&v.push(e,t,i,n,pe.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||se.intersectsObject(e))){let t=Te.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),pe.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),pe.copy(e.boundingSphere.center)),pe.applyMatrix4(e.matrixWorld).applyMatrix4(de)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&v.push(e,t,s,n,pe.z,o)}}else i.visible&&v.push(e,t,i,n,pe.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Ze(i[e],t,n,r)}function $e(e,t,n,r){let i=e.opaque,a=e.transmissive,o=e.transparent;y.setupLightsView(n),ce===!0&&Ae.setGlobalState(S.clippingPlanes,n),r&&I.viewport(k.copy(r)),i.length>0&&at(i,t,n),a.length>0&&at(a,t,n),o.length>0&&at(o,t,n),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function it(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[r.id]===void 0&&(y.state.transmissionRenderTarget[r.id]=new bt(1,1,{generateMipmaps:!0,type:ve.has(`EXT_color_buffer_half_float`)||ve.has(`EXT_color_buffer_float`)?g:l,minFilter:c,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:U.workingColorSpace}));let a=y.state.transmissionRenderTarget[r.id],o=r.viewport||k;a.setSize(o.z,o.w);let s=S.getRenderTarget();S.setRenderTarget(a),S.getClearColor(ee),te=S.getClearAlpha(),te<1&&S.setClearColor(16777215,.5),S.clear(),he&&Me.render(n);let u=S.toneMapping;S.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),y.setupLightsView(r),ce===!0&&Ae.setGlobalState(S.clippingPlanes,r),at(e,n,r),R.updateMultisampleRenderTarget(a),R.updateRenderTargetMipmap(a),ve.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let a=t[i],o=a.object,s=a.geometry,c=a.material,l=a.group;if(c.side===2&&o.layers.test(r.layers)){let t=c.side;c.side=1,c.needsUpdate=!0,ot(o,n,r,s,c,l),c.side=t,c.needsUpdate=!0,e=!0}}e===!0&&(R.updateMultisampleRenderTarget(a),R.updateRenderTargetMipmap(a))}S.setRenderTarget(s),S.setClearColor(ee,te),d!==void 0&&(r.viewport=d),S.toneMapping=u}function at(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],o=a.object,s=a.geometry,c=r===null?a.material:r,l=a.group;o.layers.test(n.layers)&&ot(o,t,n,s,c,l)}}function ot(e,t,n,r,i,a){e.onBeforeRender(S,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(S,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,S.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,S.renderBufferDirect(n,t,r,i,e,a),i.side=2):S.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(S,t,n,r,i,a)}function st(e,t,n){t.isScene!==!0&&(t=me);let r=L.get(e),i=y.state.lights,a=y.state.shadowsArray,o=i.state.version,s=Ee.getParameters(e,i.state,a,t,n),c=Ee.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial?t.environment:null,r.fog=t.fog,r.envMap=(e.isMeshStandardMaterial?Se:xe).get(e.envMap||r.environment),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Ge),l=new Map,r.programs=l);let u=l.get(c);if(u!==void 0){if(r.currentProgram===u&&r.lightsStateVersion===o)return lt(e,s),u}else s.uniforms=Ee.getUniforms(e),e.onBeforeCompile(s,S),u=Ee.acquireProgram(s,c),l.set(c,u),r.uniforms=s.uniforms;let d=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(d.clippingPlanes=Ae.uniform),lt(e,s),r.needsLights=ft(e),r.lightsStateVersion=o,r.needsLights&&(d.ambientLightColor.value=i.state.ambient,d.lightProbe.value=i.state.probe,d.directionalLights.value=i.state.directional,d.directionalLightShadows.value=i.state.directionalShadow,d.spotLights.value=i.state.spot,d.spotLightShadows.value=i.state.spotShadow,d.rectAreaLights.value=i.state.rectArea,d.ltc_1.value=i.state.rectAreaLTC1,d.ltc_2.value=i.state.rectAreaLTC2,d.pointLights.value=i.state.point,d.pointLightShadows.value=i.state.pointShadow,d.hemisphereLights.value=i.state.hemi,d.directionalShadowMap.value=i.state.directionalShadowMap,d.directionalShadowMatrix.value=i.state.directionalShadowMatrix,d.spotShadowMap.value=i.state.spotShadowMap,d.spotLightMatrix.value=i.state.spotLightMatrix,d.spotLightMap.value=i.state.spotLightMap,d.pointShadowMap.value=i.state.pointShadowMap,d.pointShadowMatrix.value=i.state.pointShadowMatrix),r.currentProgram=u,r.uniformsList=null,u}function ct(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Ha.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function lt(e,t){let n=L.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function ut(e,t,n,r,i){t.isScene!==!0&&(t=me),R.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial?t.environment:null,s=E===null?S.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Fe,c=(r.isMeshStandardMaterial?Se:xe).get(r.envMap||o),l=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,u=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),d=!!n.morphAttributes.position,f=!!n.morphAttributes.normal,p=!!n.morphAttributes.color,m=0;r.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(m=S.toneMapping);let h=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,g=h===void 0?0:h.length,_=L.get(r),v=y.state.lights;if(ce===!0&&(le===!0||e!==O)){let t=e===O&&r.id===D;Ae.setState(r,e,t)}let b=!1;r.version===_.__version?_.needsLights&&_.lightsStateVersion!==v.state.version?b=!0:_.outputColorSpace===s?i.isBatchedMesh&&_.batching===!1||!i.isBatchedMesh&&_.batching===!0||i.isBatchedMesh&&_.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&_.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&_.instancing===!1||!i.isInstancedMesh&&_.instancing===!0||i.isSkinnedMesh&&_.skinning===!1||!i.isSkinnedMesh&&_.skinning===!0||i.isInstancedMesh&&_.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&_.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&_.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&_.instancingMorph===!1&&i.morphTexture!==null?b=!0:_.envMap===c?r.fog===!0&&_.fog!==a||_.numClippingPlanes!==void 0&&(_.numClippingPlanes!==Ae.numPlanes||_.numIntersection!==Ae.numIntersection)?b=!0:_.vertexAlphas===l&&_.vertexTangents===u&&_.morphTargets===d&&_.morphNormals===f&&_.morphColors===p&&_.toneMapping===m?_.morphTargetsCount!==g&&(b=!0):b=!0:b=!0:b=!0:(b=!0,_.__version=r.version);let x=_.currentProgram;b===!0&&(x=st(r,t,i));let C=!1,w=!1,T=!1,k=x.getUniforms(),A=_.uniforms;if(I.useProgram(x.program)&&(C=!0,w=!0,T=!0),r.id!==D&&(D=r.id,w=!0),C||O!==e){I.buffers.depth.getReversed()?(ue.copy(e.projectionMatrix),nt(ue),rt(ue),k.setValue(F,`projectionMatrix`,ue)):k.setValue(F,`projectionMatrix`,e.projectionMatrix),k.setValue(F,`viewMatrix`,e.matrixWorldInverse);let t=k.map.cameraPosition;t!==void 0&&t.setValue(F,fe.setFromMatrixPosition(e.matrixWorld)),ye.logarithmicDepthBuffer&&k.setValue(F,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&k.setValue(F,`isOrthographic`,e.isOrthographicCamera===!0),O!==e&&(O=e,w=!0,T=!0)}if(i.isSkinnedMesh){k.setOptional(F,i,`bindMatrix`),k.setOptional(F,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),k.setValue(F,`boneTexture`,e.boneTexture,R))}i.isBatchedMesh&&(k.setOptional(F,i,`batchingTexture`),k.setValue(F,`batchingTexture`,i._matricesTexture,R),k.setOptional(F,i,`batchingIdTexture`),k.setValue(F,`batchingIdTexture`,i._indirectTexture,R),k.setOptional(F,i,`batchingColorTexture`),i._colorsTexture!==null&&k.setValue(F,`batchingColorTexture`,i._colorsTexture,R));let j=n.morphAttributes;if((j.position!==void 0||j.normal!==void 0||j.color!==void 0)&&Ne.update(i,n,x),(w||_.receiveShadow!==i.receiveShadow)&&(_.receiveShadow=i.receiveShadow,k.setValue(F,`receiveShadow`,i.receiveShadow)),r.isMeshGouraudMaterial&&r.envMap!==null&&(A.envMap.value=c,A.flipEnvMap.value=c.isCubeTexture&&c.isRenderTargetTexture===!1?-1:1),r.isMeshStandardMaterial&&r.envMap===null&&t.environment!==null&&(A.envMapIntensity.value=t.environmentIntensity),w&&(k.setValue(F,`toneMappingExposure`,S.toneMappingExposure),_.needsLights&&dt(A,T),a&&r.fog===!0&&De.refreshFogUniforms(A,a),De.refreshMaterialUniforms(A,r,P,N,y.state.transmissionRenderTarget[e.id]),Ha.upload(F,ct(_),A,R)),r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Ha.upload(F,ct(_),A,R),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&k.setValue(F,`center`,i.center),k.setValue(F,`modelViewMatrix`,i.modelViewMatrix),k.setValue(F,`normalMatrix`,i.normalMatrix),k.setValue(F,`modelMatrix`,i.matrixWorld),r.isShaderMaterial||r.isRawShaderMaterial){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Be.update(n,x),Be.bind(n,x)}}return x}function dt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function ft(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(e,t,n){L.get(e.texture).__webglTexture=t,L.get(e.depthTexture).__webglTexture=n;let r=L.get(e);r.__hasExternalTextures=!0,r.__autoAllocateDepthBuffer=n===void 0,r.__autoAllocateDepthBuffer||ve.has(`WEBGL_multisampled_render_to_texture`)===!0&&(console.warn(`THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided`),r.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(e,t){let n=L.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){E=e,w=t,T=n;let r=!0,i=null,a=!1,o=!1;if(e){let s=L.get(e);if(s.__useDefaultFramebuffer!==void 0)I.bindFramebuffer(F.FRAMEBUFFER,null),r=!1;else if(s.__webglFramebuffer===void 0)R.setupRenderTarget(e);else if(s.__hasExternalTextures)R.rebindTextures(e,L.get(e.texture).__webglTexture,L.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(s.__boundDepthTexture!==t){if(t!==null&&L.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.`);R.setupDepthRenderbuffer(e)}}let c=e.texture;(c.isData3DTexture||c.isDataArrayTexture||c.isCompressedArrayTexture)&&(o=!0);let l=L.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(i=Array.isArray(l[t])?l[t][n]:l[t],a=!0):i=e.samples>0&&R.useMultisampledRTT(e)===!1?L.get(e).__webglMultisampledFramebuffer:Array.isArray(l)?l[n]:l,k.copy(e.viewport),A.copy(e.scissor),j=e.scissorTest}else k.copy(ie).multiplyScalar(P).floor(),A.copy(ae).multiplyScalar(P).floor(),j=oe;if(I.bindFramebuffer(F.FRAMEBUFFER,i)&&r&&I.drawBuffers(e,i),I.viewport(k),I.scissor(A),I.setScissorTest(j),a){let r=L.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(o){let r=L.get(e.texture),i=t||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,r.__webglTexture,n||0,i)}D=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o){if(!(e&&e.isWebGLRenderTarget)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let s=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){I.bindFramebuffer(F.FRAMEBUFFER,s);try{let o=e.texture,s=o.format,c=o.type;if(!ye.textureFormatReadable(s)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!ye.textureTypeReadable(c)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&F.readPixels(t,n,r,i,Re.convert(s),Re.convert(c),a)}finally{let e=E===null?null:L.get(E).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let s=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){let o=e.texture,c=o.format,l=o.type;if(!ye.textureFormatReadable(c))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!ye.textureTypeReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){I.bindFramebuffer(F.FRAMEBUFFER,s);let e=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,e),F.bufferData(F.PIXEL_PACK_BUFFER,a.byteLength,F.STREAM_READ),F.readPixels(t,n,r,i,Re.convert(c),Re.convert(l),0);let o=E===null?null:L.get(E).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,o);let u=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await tt(F,u,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,e),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,a),F.deleteBuffer(e),F.deleteSync(u),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){e.isTexture!==!0&&(et(`WebGLRenderer: copyFramebufferToTexture function signature has changed.`),t=arguments[0]||null,e=arguments[1]);let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;R.setTexture2D(e,0),F.copyTexSubImage2D(F.TEXTURE_2D,n,0,0,o,s,i,a),I.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0){e.isTexture!==!0&&(et(`WebGLRenderer: copyTextureToTexture function signature has changed.`),r=arguments[0]||null,e=arguments[1],t=arguments[2],i=arguments[3]||0,n=null);let a,o,s,c,l,u,d,f,p,m=e.isCompressedTexture?e.mipmaps[i]:e.image;n===null?(a=m.width,o=m.height,s=m.depth||1,c=0,l=0,u=0):(a=n.max.x-n.min.x,o=n.max.y-n.min.y,s=n.isBox3?n.max.z-n.min.z:1,c=n.min.x,l=n.min.y,u=n.isBox3?n.min.z:0),r===null?(d=0,f=0,p=0):(d=r.x,f=r.y,p=r.z);let h=Re.convert(t.format),g=Re.convert(t.type),_;t.isData3DTexture?(R.setTexture3D(t,0),_=F.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(R.setTexture2DArray(t,0),_=F.TEXTURE_2D_ARRAY):(R.setTexture2D(t,0),_=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,t.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,t.unpackAlignment);let v=F.getParameter(F.UNPACK_ROW_LENGTH),y=F.getParameter(F.UNPACK_IMAGE_HEIGHT),b=F.getParameter(F.UNPACK_SKIP_PIXELS),x=F.getParameter(F.UNPACK_SKIP_ROWS),S=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,m.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,m.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,c),F.pixelStorei(F.UNPACK_SKIP_ROWS,l),F.pixelStorei(F.UNPACK_SKIP_IMAGES,u);let C=e.isDataArrayTexture||e.isData3DTexture,w=t.isDataArrayTexture||t.isData3DTexture;if(e.isRenderTargetTexture||e.isDepthTexture){let n=L.get(e),r=L.get(t),m=L.get(n.__renderTarget),h=L.get(r.__renderTarget);I.bindFramebuffer(F.READ_FRAMEBUFFER,m.__webglFramebuffer),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,h.__webglFramebuffer);for(let n=0;n<s;n++)C&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,L.get(e).__webglTexture,i,u+n),e.isDepthTexture?(w&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,L.get(t).__webglTexture,i,p+n),F.blitFramebuffer(c,l,a,o,d,f,a,o,F.DEPTH_BUFFER_BIT,F.NEAREST)):w?F.copyTexSubImage3D(_,i,d,f,p+n,c,l,a,o):F.copyTexSubImage2D(_,i,d,f,p+n,c,l,a,o);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else w?e.isDataTexture||e.isData3DTexture?F.texSubImage3D(_,i,d,f,p,a,o,s,h,g,m.data):t.isCompressedArrayTexture?F.compressedTexSubImage3D(_,i,d,f,p,a,o,s,h,m.data):F.texSubImage3D(_,i,d,f,p,a,o,s,h,g,m):e.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,i,d,f,a,o,h,g,m.data):e.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,i,d,f,m.width,m.height,h,m.data):F.texSubImage2D(F.TEXTURE_2D,i,d,f,a,o,h,g,m);F.pixelStorei(F.UNPACK_ROW_LENGTH,v),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,y),F.pixelStorei(F.UNPACK_SKIP_PIXELS,b),F.pixelStorei(F.UNPACK_SKIP_ROWS,x),F.pixelStorei(F.UNPACK_SKIP_IMAGES,S),i===0&&t.generateMipmaps&&F.generateMipmap(_),I.unbindTexture()},this.copyTextureToTexture3D=function(e,t,n=null,r=null,i=0){return e.isTexture!==!0&&(et(`WebGLRenderer: copyTextureToTexture3D function signature has changed.`),n=arguments[0]||null,r=arguments[1]||null,e=arguments[2],t=arguments[3],i=arguments[4]||0),et(`WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.`),this.copyTextureToTexture(e,t,n,r,i)},this.initRenderTarget=function(e){L.get(e).__webglFramebuffer===void 0&&R.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?R.setTextureCube(e,0):e.isData3DTexture?R.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?R.setTexture2DArray(e,0):R.setTexture2D(e,0),I.unbindTexture()},this.resetState=function(){w=0,T=0,E=null,I.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Be}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=U._getDrawingBufferColorSpace(e),t.unpackColorSpace=U._getUnpackColorSpace()}},ss=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new G(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},cs=class extends Dn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ls=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=ze,this.updateRanges=[],this.version=0,this.uuid=We()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=We()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=We()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},us=new W,ds=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)us.fromBufferAttribute(this,t),us.applyMatrix4(e),this.setXYZ(t,us.x,us.y,us.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)us.fromBufferAttribute(this,t),us.applyNormalMatrix(e),this.setXYZ(t,us.x,us.y,us.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)us.fromBufferAttribute(this,t),us.transformDirection(e),this.setXYZ(t,us.x,us.y,us.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Je(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=B(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=B(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=B(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=B(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=B(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Je(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Je(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Je(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Je(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=B(t,this.array),n=B(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=B(t,this.array),n=B(n,this.array),r=B(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=B(t,this.array),n=B(n,this.array),r=B(r,this.array),i=B(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){console.log(`THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new Qn(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log(`THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},fs=class extends Jn{static get type(){return`SpriteMaterial`}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new G(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ps,ms=new W,hs=new W,gs=new W,_s=new V,vs=new V,ys=new $t,bs=new W,xs=new W,Ss=new W,Cs=new V,ws=new V,Ts=new V,Es=class extends Dn{constructor(e=new fs){if(super(),this.isSprite=!0,this.type=`Sprite`,ps===void 0){ps=new lr;let e=new ls(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);ps.setIndex([0,1,2,0,2,3]),ps.setAttribute(`position`,new ds(e,3,0,!1)),ps.setAttribute(`uv`,new ds(e,2,3,!1))}this.geometry=ps,this.material=e,this.center=new V(.5,.5)}raycast(e,t){e.camera===null&&console.error(`THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),hs.setFromMatrixScale(this.matrixWorld),ys.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),gs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&hs.multiplyScalar(-gs.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;Ds(bs.set(-.5,-.5,0),gs,a,hs,r,i),Ds(xs.set(.5,-.5,0),gs,a,hs,r,i),Ds(Ss.set(.5,.5,0),gs,a,hs,r,i),Cs.set(0,0),ws.set(1,0),Ts.set(1,1);let o=e.ray.intersectTriangle(bs,xs,Ss,!1,ms);if(o===null&&(Ds(xs.set(-.5,.5,0),gs,a,hs,r,i),ws.set(0,1),o=e.ray.intersectTriangle(bs,Ss,xs,!1,ms),o===null))return;let s=e.ray.origin.distanceTo(ms);s<e.near||s>e.far||t.push({distance:s,point:ms.clone(),uv:Vn.getInterpolation(ms,bs,xs,Ss,Cs,ws,Ts,new V),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ds(e,t,n,r,i,a){_s.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?vs.copy(_s):(vs.x=a*_s.x-i*_s.y,vs.y=i*_s.x+a*_s.y),e.copy(t),e.x+=vs.x,e.y+=vs.y,e.applyMatrix4(ys)}var Os=class extends _t{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ks=class e extends lr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new W,l=new V;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new tr(a,3)),this.setAttribute(`normal`,new tr(o,3)),this.setAttribute(`uv`,new tr(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},As=class e extends lr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new tr(u,3)),this.setAttribute(`normal`,new tr(d,3)),this.setAttribute(`uv`,new tr(f,2));function _(){let a=new W,_=new W,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new V,m=new W,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},js=class e extends As{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ms=class e extends lr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new W,d=new W,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=0;f===0&&a===0?v=.5/t:f===n&&s===Math.PI&&(v=-.5/t);for(let n=0;n<=t;n++){let s=n/t;u.x=-e*Math.cos(r+s*i)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(r+s*i)*Math.sin(a+_*o),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(s+v,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new tr(p,3)),this.setAttribute(`normal`,new tr(m,3)),this.setAttribute(`uv`,new tr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},X=class extends Jn{static get type(){return`MeshStandardMaterial`}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:``},this.color=new G(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new G(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Ns(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Ps(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var Fs=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},Is=class extends Fs{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ke,endingEnd:ke}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ae:i=e,o=2*t-n;break;case je:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Ae:a=e,s=2*n-t;break;case je:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Ls=class extends Fs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Rs=class extends Fs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},zs=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Ns(t,this.TimeBufferType),this.values=Ns(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ns(e.times,Array),values:Ns(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Rs(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ls(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Is(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ee:t=this.InterpolantFactoryMethodDiscrete;break;case De:t=this.InterpolantFactoryMethodLinear;break;case Oe:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return console.warn(`THREE.KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ee;case this.InterpolantFactoryMethodLinear:return De;case this.InterpolantFactoryMethodSmooth:return Oe}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error(`THREE.KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(console.error(`THREE.KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){console.error(`THREE.KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){console.error(`THREE.KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ps(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){console.error(`THREE.KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Oe,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};zs.prototype.TimeBufferType=Float32Array,zs.prototype.ValueBufferType=Float32Array,zs.prototype.DefaultInterpolation=De;var Bs=class extends zs{constructor(e,t,n){super(e,t,n)}};Bs.prototype.ValueTypeName=`bool`,Bs.prototype.ValueBufferType=Array,Bs.prototype.DefaultInterpolation=Ee,Bs.prototype.InterpolantFactoryMethodLinear=void 0,Bs.prototype.InterpolantFactoryMethodSmooth=void 0;var Vs=class extends zs{};Vs.prototype.ValueTypeName=`color`;var Hs=class extends zs{};Hs.prototype.ValueTypeName=`number`;var Us=class extends Fs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Ct.slerpFlat(i,0,a,c-o,a,c,s);return i}},Ws=class extends zs{InterpolantFactoryMethodLinear(e){return new Us(this.times,this.values,this.getValueSize(),e)}};Ws.prototype.ValueTypeName=`quaternion`,Ws.prototype.InterpolantFactoryMethodSmooth=void 0;var Gs=class extends zs{constructor(e,t,n){super(e,t,n)}};Gs.prototype.ValueTypeName=`string`,Gs.prototype.ValueBufferType=Array,Gs.prototype.DefaultInterpolation=Ee,Gs.prototype.InterpolantFactoryMethodLinear=void 0,Gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ks=class extends zs{};Ks.prototype.ValueTypeName=`vector`;var qs=class extends Dn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new G(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Js=class extends qs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new G(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ys=new $t,Xs=new W,Zs=new W,Qs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new V(512,512),this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qr,this._frameExtents=new V(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Xs.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xs),Zs.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zs),t.updateMatrixWorld(),Ys.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ys),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ys)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},$s=class extends Qs{constructor(){super(new si(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ec=class extends qs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.shadow=new $s}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},tc=`\\[\\]\\.:\\/`,nc=RegExp(`[\\[\\]\\.:\\/]`,`g`),rc=`[^\\[\\]\\.:\\/]`,ic=`[^`+tc.replace(`\\.`,``)+`]`,ac=`((?:WC+[\\/:])*)`.replace(`WC`,rc),oc=`(WCOD+)?`.replace(`WCOD`,ic),sc=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,rc),cc=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,rc),lc=RegExp(`^`+ac+oc+sc+cc+`$`),uc=[`material`,`materials`,`bones`,`map`],dc=class{constructor(e,t,n){let r=n||fc.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},fc=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(nc,``)}static parseTrackName(e){let t=lc.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);uc.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn(`THREE.PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){console.error(`THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){console.error(`THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){console.error(`THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error(`THREE.PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){console.error(`THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;console.error(`THREE.PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.needsUpdate===void 0?t.matrixWorldNeedsUpdate!==void 0&&(s=this.Versioning.MatrixWorldNeedsUpdate):s=this.Versioning.NeedsUpdate;let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};fc.Composite=dc,fc.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},fc.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},fc.prototype.GetterByBindingType=[fc.prototype._getValue_direct,fc.prototype._getValue_array,fc.prototype._getValue_arrayElement,fc.prototype._getValue_toArray],fc.prototype.SetterByBindingTypeAndVersioning=[[fc.prototype._setValue_direct,fc.prototype._setValue_direct_setNeedsUpdate,fc.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[fc.prototype._setValue_array,fc.prototype._setValue_array_setNeedsUpdate,fc.prototype._setValue_array_setMatrixWorldNeedsUpdate],[fc.prototype._setValue_arrayElement,fc.prototype._setValue_arrayElement_setNeedsUpdate,fc.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[fc.prototype._setValue_fromArray,fc.prototype._setValue_fromArray_setNeedsUpdate,fc.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var pc=new $t,mc=class{constructor(e,t,n=0,r=1/0){this.ray=new Qt(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new dn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error(`THREE.Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return pc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(pc),this}intersectObject(e,t=!0,n=[]){return gc(e,this,n,t),n.sort(hc),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)gc(e[r],this,n,t);return n.sort(hc),n}};function hc(e,t){return e.distance-t.distance}function gc(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)gc(r[e],t,n,!0)}}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`170`}})),typeof window<`u`&&(window.__THREE__?console.warn(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`170`);var _c=1320,vc=960/720,yc=[{id:`wake`,start:360,end:390,label:`Thức dậy, vệ sinh cá nhân`,where:`Buồng giam`},{id:`rollcall`,start:390,end:420,label:`Điểm danh sáng`,where:`Sân (ô vàng)`,mandatory:!0},{id:`breakfast`,start:420,end:480,label:`Ăn sáng`,where:`Nhà ăn`},{id:`work`,start:480,end:690,label:`Lao động`,where:`Xưởng`,mandatory:!0},{id:`lunch`,start:690,end:750,label:`Ăn trưa`,where:`Nhà ăn`},{id:`rest`,start:750,end:810,label:`Nghỉ trưa`,where:`Buồng giam`},{id:`free1`,start:810,end:990,label:`Sinh hoạt tự do / ca chiều tự nguyện`,where:`Sân, Xưởng`},{id:`dinner`,start:990,end:1050,label:`Ăn tối`,where:`Nhà ăn`},{id:`free2`,start:1050,end:1260,label:`Tự do, căn tin mở`,where:`Sân, Nhà ăn`},{id:`curfew`,start:1260,end:1320,label:`Về buồng, chuẩn bị ngủ`,where:`Buồng giam`,mandatory:!0}];function bc(e){for(let t of yc)if(e>=t.start&&e<t.end)return t;return yc[yc.length-1]}function xc(e){for(let t of yc)if(t.start>e)return t;return null}function Sc(e){let t=Math.floor(e),n=Math.floor(t/60)%24,r=t%60;return`${String(n).padStart(2,`0`)}:${String(r).padStart(2,`0`)}`}function Cc(e){return`${(e*1e3).toLocaleString(`vi-VN`)}đ`}var wc={mess:{open:[[420,480],[690,750],[990,1260]],label:`Nhà ăn & căn tin`,reason:`Nhà ăn chỉ mở giờ ăn (07:00–08:00, 11:30–12:30, 16:30–17:30) và căn tin buổi tối đến 21:00.`},workshop:{open:[[480,690],[810,990]],label:`Xưởng lao động`,reason:`Xưởng mở ca sáng 08:00–11:30 (bắt buộc) và ca chiều tự nguyện 13:30–16:30.`},office:{open:[[420,1020]],label:`Phòng quản giáo`,reason:`Phòng quản giáo tiếp nhận phạm nhân 07:00–17:00 để báo cáo, khiếu nại, giải trình.`},storage:{open:[[480,690]],label:`Kho vật tư (khu cấm)`,reason:`Kho chỉ mở cửa trong ca sáng để tổ trưởng lấy vật tư; ngoài giờ cán bộ Tùng khoá và giữ chìa.`},cellblock:{open:[[0,1290]],label:`Khu buồng giam`,reason:`Sau 21:30 khu buồng giam khoá cửa ngoài.`},medical:{open:[[450,690],[810,1020]],label:`Phòng y tế`,reason:`Phòng y tế mở cửa tiếp nhận phạm nhân 07:30–11:30 và 13:30–17:00.`},classroom:{open:[[840,990],[1140,1260]],label:`Lớp học nghề & thư viện`,reason:`Lớp học mở ca chiều 14:00–16:30 và giờ đọc sách buổi tối 19:00–21:00.`},visitation:{open:[[480,660],[840,1020]],label:`Phòng thăm gặp`,reason:`Phòng thăm gặp tiếp đón người thân theo lịch hẹn (08:00–11:00 & 14:00–17:00).`},discipline:{open:[],label:`Khu kỷ luật`,reason:`Khu kỷ luật chỉ mở khi có quyết định kỷ luật cách ly của Ban giám thị.`}};function Tc(e,t){let n=wc[e];return!n||n.open.some(([e,n])=>t>=e&&t<n)}function Ec(e,t=0,n=100){return Math.max(t,Math.min(n,e))}function Dc(e,t){let n={};for(let e of Object.keys(t))n[e]=t[e].value;return{rollcall:`pending`,work:`pending`,workClockedIn:!1,workUnits:0,workQuality:0,workPaid:!1,extraShiftUnits:0,meals:{breakfast:!1,lunch:!1,dinner:!1},curfew:`pending`,reformGained:0,exercise:0,searchedToday:!1,startStats:{...e},startRelations:n,events:[]}}function Oc(){let e={health:90,stamina:85,hunger:35,stress:45,money:20,reform:40,suspicion:0},t={},n={bay:5,huy:0,lam:0,lan:0,tung:0,tu:0,son:0,khai:0,phuc:0,an:0,mai:20};for(let e of Object.keys(n))t[e]={value:n[e],met:!1,memories:[],lastTalkDay:0,lastGiftDay:0};return{version:1,createdAt:Date.now(),day:1,minute:360,chapter:1,stats:e,sentence:{total:30,remaining:30,served:0,lastServedDay:0,reviewsDone:[],reformAtLastReview:e.reform,additions:[],reductions:[]},daily:Dc(e,t),history:[],violations:[],quests:{},relations:t,inventory:{ao_tu:1,the_pham_nhan:1},clues:[],flags:{},skills:{workShifts:0,exerciseSessions:0,fitness:0,vocationalExam:0},player:{x:-14.25,z:-27.6,rot:0},ending:null,hearing:null,nextId:1,settings:{quality:`medium`,volume:.7,guide:!0,sensitivity:1}}}function kc(e){return e>0&&e%5==0}function Ac(e){let t=Math.ceil(e.day/5)*5;for(t===0&&(t=5);e.sentence.reviewsDone.includes(t);)t+=5;return t}function jc(e,t){let n=t-5+1,r=e.history.filter(e=>e.day>=n&&e.day<=t),i=e.day===t?+(e.daily.work===`ok`):0,a=e.day===t?+(e.daily.rollcall===`ok`||e.daily.rollcall===`excused`):0,o=r.filter(e=>e.work===`ok`).length+i,s=r.filter(e=>e.rollcall===`ok`||e.rollcall===`excused`).length+a,c=Math.min(5,t),l=e.stats.reform-e.sentence.reformAtLastReview,u=[],d=0;l>=20?d=1.5:l>=12?d=1:l>=6&&(d=.5),u.push({label:`Điểm cải tạo tăng ${l>=0?`+`:``}${l} trong kỳ`,value:d});let f=0;o>=c?f=1:o>=Math.ceil(c*.6)&&(f=.5),u.push({label:`Lao động đủ chỉ tiêu ${o}/${c} ngày`,value:f});let p=s>=c?.5:0;u.push({label:`Điểm danh đúng giờ ${s}/${c} ngày`,value:p});let m=e.stats.reform>=70?.5:e.stats.reform>=55?.25:0;u.push({label:`Mức cải tạo hiện tại ${e.stats.reform}/100`,value:m});let h=e.violations.filter(e=>e.day>=n&&e.day<=t&&e.status!==`overturned`),g=h.reduce((e,t)=>e+t.severity,0),_=h.some(e=>e.severity>=3);u.push({label:`Vi phạm trong kỳ: ${h.length} (mức nặng cộng dồn ${g})`,value:-g});let v=d+f+p+m-g;return _&&(u.push({label:`Có hành vi nghiêm trọng → không xét giảm kỳ này`,value:0}),v=Math.min(v,0)),{day:t,reduction:Math.max(0,Math.min(3,Math.floor(v+1e-6))),breakdown:u,score:v}}function Mc(e,t){return e.sentence.lastServedDay>=t?!1:(e.sentence.lastServedDay=t,e.sentence.remaining>0&&(--e.sentence.remaining,e.sentence.served+=1),!0)}function Nc(e,t){if(!kc(t)||e.sentence.reviewsDone.includes(t))return null;let n=jc(e,t),r=Math.min(n.reduction,e.sentence.remaining);return n.reduction=r,e.sentence.reviewsDone.push(t),e.sentence.reformAtLastReview=e.stats.reform,r>0&&(e.sentence.remaining-=r,e.sentence.reductions.push({day:t,amount:r,reason:`Kỳ xét giảm án ngày ${t}`})),n}function Pc(e,t,n,r){let i=e.sentence.additions.reduce((e,t)=>e+t.amount,0),a=Math.max(0,Math.min(t,8-i));return a>0&&(e.sentence.remaining+=a,e.sentence.total+=a,e.sentence.additions.push({day:r,amount:a,reason:n})),a}function Fc(e){let t=e.sentence.remaining,n=e.sentence.lastServedDay>=e.day,r=n?e.day+t:e.day+t-1,i=Ac(e),a=jc(e,i).reduction,o=t,s=n?e.day+1:e.day,c=new Set(e.sentence.reviewsDone),l=0;for(;o>0&&l++<500&&(--o,s%5==0&&!c.has(s)&&(o-=Math.min(a,Math.max(0,o))),!(o<=0));)s++;return{remaining:t,nextReview:i,releaseNoReduction:r,releaseEstimated:s,estimatedPerReview:a}}var Ic={late_rollcall:{type:`late_rollcall`,title:`Trễ điểm danh`,severity:1,reform:-3,stress:5,penalty:`Cảnh cáo, trừ 3 điểm cải tạo.`,risk:`Có mặt sau 06:45 bị ghi trễ điểm danh: cảnh cáo, −3 điểm cải tạo.`},missed_rollcall:{type:`missed_rollcall`,title:`Vắng mặt điểm danh`,severity:2,reform:-6,stress:8,penalty:`Cảnh cáo, trừ 6 điểm cải tạo.`,risk:`Không có mặt đến 07:00: vắng điểm danh, −6 điểm cải tạo.`},late_work:{type:`late_work`,title:`Trễ giờ lao động`,severity:1,reform:-2,penalty:`Nhắc nhở, trừ 2 điểm cải tạo.`,risk:`Chấm công sau 08:30: −2 điểm cải tạo.`},skip_work:{type:`skip_work`,title:`Bỏ lao động`,severity:2,reform:-6,stress:5,penalty:`Mất toàn bộ tiền công ca sáng, trừ 6 điểm cải tạo.`,risk:`Không làm sản phẩm nào trong ca sáng: mất tiền công, −6 điểm cải tạo.`},curfew:{type:`curfew`,title:`Không về buồng đúng giờ`,severity:1,reform:-4,penalty:`Cảnh cáo, trừ 4 điểm cải tạo.`,risk:`Ngoài khu buồng giam lúc 21:30: −4 điểm cải tạo.`},restricted:{type:`restricted`,title:`Tự ý vào khu cấm`,severity:2,reform:-5,suspicion:15,stress:8,penalty:`Bị đưa ra ngoài, trừ 5 điểm cải tạo, +15 nghi ngờ.`,risk:`Nếu camera hoặc cán bộ thấy: −5 điểm cải tạo, +15 nghi ngờ. Nếu không ai thấy: chỉ +5 nghi ngờ.`},theft:{type:`theft`,title:`Trộm cắp tài sản xưởng`,severity:2,reform:-10,suspicion:20,stress:12,penalty:`Tịch thu tang vật, trừ 10 điểm cải tạo, cấm mua căn tin 2 ngày.`,risk:`Bị bắt quả tang: −10 điểm cải tạo, cấm căn tin 2 ngày. Không bị phát hiện: nghi ngờ tăng, chỉ bị xử khi có bằng chứng.`},contraband:{type:`contraband`,title:`Tàng trữ hàng cấm`,severity:2,reform:-6,suspicion:10,stress:10,penalty:`Tịch thu, trừ 6 điểm cải tạo.`,risk:`Bị khám thấy hàng cấm: tịch thu, −6 điểm cải tạo.`},fight:{type:`fight`,title:`Gây thương tích cho người khác`,severity:3,reform:-12,stress:15,penalty:`Trừ 12 điểm cải tạo, đưa ra phiên xem xét — có thể cộng 1–3 ngày án.`,risk:`HÀNH VI NGHIÊM TRỌNG: −12 điểm cải tạo và mở phiên xem xét tăng án (1–3 ngày).`}},Lc={ao_tu:{id:`ao_tu`,name:`Bộ quần áo phạm nhân`,desc:`Áo sọc xanh trắng, số hiệu AP-0317.`,essential:!0},the_pham_nhan:{id:`the_pham_nhan`,name:`Thẻ phạm nhân`,desc:`Dùng để chấm công, mua căn tin. Không thể bỏ.`,essential:!0},chan_man:{id:`chan_man`,name:`Chăn màn, chiếu`,desc:`Đồ dùng cá nhân nhận khi nhập trại.`,essential:!0},mi_goi:{id:`mi_goi`,name:`Mì gói`,desc:`Giảm đói 25. Huy rất thích.`,price:8,use:{hunger:-25,stamina:5},giftable:!0},banh_mi:{id:`banh_mi`,name:`Bánh mì ngọt`,desc:`Giảm đói 15, hồi 10 thể lực.`,price:5,use:{hunger:-15,stamina:10},giftable:!0},tra_da:{id:`tra_da`,name:`Trà đá đóng chai`,desc:`Giảm căng thẳng 8.`,price:6,use:{stress:-8,stamina:5},giftable:!0},dau_gio:{id:`dau_gio`,name:`Dầu gió`,desc:`Hồi 10 sức khoẻ, giảm căng thẳng 4.`,price:10,use:{health:10,stress:-4},giftable:!0},hop_mui_khoan:{id:`hop_mui_khoan`,name:`Hộp mũi khoan (đồ kho)`,desc:`Tài sản của xưởng. Mang theo là bằng chứng trộm cắp.`,quest:!0,contraband:!0},giay_no:{id:`giay_no`,name:`Giấy ghi nợ của Huy`,desc:`Lâm ép Huy ký nợ 40.000đ kèm lãi. Có thể làm bằng chứng.`,quest:!0},loi_khai_bay:{id:`loi_khai_bay`,name:`Lời khai của Chú Bảy`,desc:`Chú Bảy thấy đàn em của Lâm lén vào buồng 3 lúc rạng sáng.`,quest:!0},dao_lam:{id:`dao_lam`,name:`Lưỡi dao lam`,desc:`Hàng cấm. Ai đó đã giấu vào chiếu của bạn.`,contraband:!0},dep_bay:{id:`dep_bay`,name:`Đôi dép tổ ong của Chú Bảy`,desc:`Đã mòn gót, có khắc chữ "B7".`,quest:!0},thu_chi_mai:{id:`thu_chi_mai`,name:`Bức thư của Chị Mai`,desc:`Thư tay chị Mai gửi vào trại động viên em trai cố gắng cải tạo.`,essential:!0,quest:!0},thuoc_cam:{id:`thuoc_cam`,name:`Vỉ thuốc cảm`,desc:`Thuốc hạ sốt do Y sĩ An cấp phát. Hồi 15 sức khoẻ, giảm 6 căng thẳng.`,price:12,use:{health:15,stress:-6},giftable:!0},chai_thuoc_hen:{id:`chai_thuoc_hen`,name:`Lọ thuốc hen suyễn`,desc:`Lọ thuốc đặc trị của Chú Bảy bị đánh rơi gần góc khuất sau xưởng. Vật chứng.`,quest:!0},chung_chi_nghe:{id:`chung_chi_nghe`,name:`Chứng chỉ sơ cấp nghề điện`,desc:`Thầy Phúc ký xác nhận Minh hoàn thành khóa học an toàn điện cơ bản.`,essential:!0,quest:!0},so_tay_dieu_tra:{id:`so_tay_dieu_tra`,name:`Sổ tay ghi chép`,desc:`Ghi lại các mâu thuẫn, lời khai nhân chứng và giờ giấc camera.`,essential:!0},sach_phap_luat:{id:`sach_phap_luat`,name:`Cẩm nang pháp luật & cải tạo`,desc:`Sách mượn từ thư viện. Đọc giúp giảm căng thẳng 10 và hiểu rõ quy tắc giảm án.`,use:{stress:-10}},qua_luu_niem:{id:`qua_luu_niem`,name:`Khung ảnh gỗ tự làm`,desc:`Gia công tỉ mỉ tại xưởng để gửi tặng Chị Mai trong phòng thăm gặp.`,quest:!0,giftable:!0}};function Rc(e){return Lc[e]?.name??e}var zc={nhap_trai:{id:`nhap_trai`,title:`Người mới`,type:`main`,chapter:1,giver:`Quản giáo Lan`,reason:`Phạm nhân mới phải nắm nội quy và nề nếp trong ngày đầu nhập trại.`,requirement:`Tự động nhận khi nhập trại.`,objectives:[{id:`chan_man`,text:`Nhận chăn màn ở giường của bạn (Buồng 3)`},{id:`noi_quy`,text:`Đọc Bảng nội quy ở hành lang khu buồng`},{id:`diem_danh`,text:`Có mặt điểm danh ở ô vàng ngoài sân (06:30–06:45)`},{id:`gap_bay`,text:`Làm quen Chú Bảy (bạn cùng buồng, thường ngồi ở nhà ăn giờ ăn)`}],reward:`+3 điểm cải tạo, Quản giáo Lan ghi nhận.`,failure:`Không thể thất bại. Nếu lỡ điểm danh ngày đầu, Quản giáo chỉ nhắc nhở; hãy điểm danh sáng hôm sau.`},ca_dau:{id:`ca_dau`,title:`Ca lao động đầu tiên`,type:`main`,chapter:1,giver:`Chú Bảy`,reason:`Lao động đủ chỉ tiêu là nền tảng của hồ sơ xét giảm án.`,requirement:`Hoàn thành "Người mới" hoặc nói chuyện với Chú Bảy.`,objectives:[{id:`cham_cong`,text:`Chấm công ở bảng cạnh cửa xưởng (08:00–08:30)`},{id:`lap_rap`,text:`Lắp ráp đủ 3 ổ cắm điện tại bàn làm việc`},{id:`bao_bay`,text:`Kể lại với Chú Bảy`}],reward:`+4 điểm cải tạo, tiền công ca, Chú Bảy tin tưởng hơn.`,failure:`Nếu bỏ lỡ ca sáng: bị ghi "Bỏ lao động", nhưng có thể làm lại vào ca sáng hôm sau.`},mon_no:{id:`mon_no`,title:`Món nợ của Huy`,type:`main`,chapter:1,giver:`Huy`,reason:`Huy nợ Lâm 40.000đ. Lâm dọa "xử" Huy nếu không trả trong tuần.`,requirement:`Sau khi hoàn thành "Ca lao động đầu tiên". Gặp Huy giờ tự do ngoài sân.`,objectives:[{id:`nghe_huy`,text:`Nghe Huy kể chuyện`},{id:`gap_lam`,text:`Gặp Lâm ở góc khuất sau xưởng (giờ tự do)`},{id:`quyet_dinh`,text:`Quyết định cách giải quyết`},{id:`lay_khoan`,text:`Lẻn vào kho xưởng lấy hộp mũi khoan (kho chỉ mở ca sáng; tránh camera và cán bộ Tùng)`,branch:`steal`},{id:`giao_lam`,text:`Giao hộp mũi khoan cho Lâm`,branch:`steal`},{id:`du_tien`,text:`Có đủ 40.000đ (tiền công, ca chiều tự nguyện)`,branch:`pay`},{id:`tra_lam`,text:`Trả nợ thay Huy cho Lâm`,branch:`pay`},{id:`lay_giay`,text:`(Không bắt buộc) Thuyết phục Huy đưa giấy ghi nợ làm bằng chứng`,branch:`report`,optional:!0},{id:`bao_lan`,text:`Báo cáo Quản giáo Lan tại phòng quản giáo (07:00–17:00)`,branch:`report`}],branches:{steal:`Nhận lời Lâm: trộm đồ trong kho`,pay:`Trả nợ thay Huy bằng tiền sạch`,report:`Báo cáo Quản giáo Lan`,fight:`Ra tay với Lâm`},reward:`Tuỳ lựa chọn: tiền, quan hệ, điểm cải tạo — mỗi lựa chọn có cái giá riêng.`,failure:`Bị bắt khi trộm: nhiệm vụ thất bại, Lâm phủi tay. Huy vẫn nợ nhưng sẽ tự trả dần; cốt truyện vẫn tiếp tục.`},dep_bay:{id:`dep_bay`,title:`Đôi dép của Chú Bảy`,type:`side`,chapter:1,giver:`Chú Bảy`,reason:`Chú Bảy đánh rơi đôi dép tổ ong mà con gái gửi vào — kỷ vật duy nhất.`,requirement:`Đã làm quen Chú Bảy.`,objectives:[{id:`tim_dep`,text:`Tìm đôi dép quanh khu tập thể dục ngoài sân`},{id:`tra_dep`,text:`Trả dép cho Chú Bảy`}],reward:`Chú Bảy +10 quan hệ, mở chuyện về gia đình chú.`,failure:`Không giới hạn thời gian.`},mi_cho_huy:{id:`mi_cho_huy`,title:`Gói mì cho Huy`,type:`side`,chapter:1,giver:`Huy`,reason:`Huy bị cấm căn tin, đói meo, nhờ bạn mua giúp một gói mì.`,requirement:`Đã gặp Huy.`,objectives:[{id:`mua`,text:`Mua mì gói ở căn tin (nhà ăn, tối 16:30–21:00)`},{id:`dua`,text:`Đưa mì cho Huy trước khi hết ngày mai`}],reward:`Huy +8, Huy nhớ bạn giữ lời.`,failure:`Quá hạn: Huy −8 và nhớ bạn thất hứa.`},lop_nghe_dau:{id:`lop_nghe_dau`,title:`Bài học nghề đầu tiên`,type:`main`,chapter:2,giver:`Thầy Phúc`,reason:`Thầy Phúc kiểm tra tính kỷ luật, kỹ năng quan sát và an toàn điện của Minh.`,requirement:`Đã sang Chương 2. Đến lớp học nghề trong ca chiều (14:00–16:30).`,objectives:[{id:`den_lop`,text:`Gặp Thầy Phúc tại Lớp học nghề (14:00–16:30)`},{id:`thao_tac`,text:`Hoàn thành bài tập quan sát & nối dây an toàn tại bàn thực hành`},{id:`nhan_xet`,text:`Nghe Thầy Phúc đánh giá và nhận chứng chỉ nghề`}],reward:`+4 điểm cải tạo, Chứng chỉ nghề, mở quyền mượn sách thư viện.`,failure:`Có thể làm lại bài kiểm tra vào ca chiều hôm sau.`},nghi_an_thuoc:{id:`nghi_an_thuoc`,title:`Nghi án thuốc trị hen`,type:`main`,chapter:2,giver:`Y sĩ An`,reason:`Chú Bảy tái phát hen suyễn nhưng thuốc trong tủ y tế bị thiếu hụt bí ẩn.`,requirement:`Gặp Y sĩ An tại Phòng y tế (07:30–11:30 hoặc 13:30–17:00).`,objectives:[{id:`hoi_an`,text:`Nghe Y sĩ An trình bày sự việc tại Phòng y tế`},{id:`hoi_bay`,text:`Hỏi Chú Bảy về thời điểm cơn hen xuất hiện`},{id:`nhat_thuoc`,text:`Tìm kiếm vật chứng tại góc tường sau xưởng`},{id:`tra_thuoc`,text:`Giao lại lọ thuốc cho Y sĩ An để cấp cứu Chú Bảy`}],reward:`+6 điểm cải tạo, Chú Bảy +15, Y sĩ An +12 quan hệ, ghi lại manh mối điều tra.`,failure:`Không giới hạn thời gian.`},phong_tham_gap:{id:`phong_tham_gap`,title:`Cuộc gặp sau vách kính`,type:`main`,chapter:2,giver:`Chị Mai`,reason:`Chị Mai bắt xe đò từ quê lên trại giam An Phú thăm Minh theo lịch hẹn.`,requirement:`Đến Phòng thăm gặp (08:00–11:00 hoặc 14:00–17:00).`,objectives:[{id:`gap_chi`,text:`Ngồi vào vách kính nói chuyện với Chị Mai`},{id:`thanh_that`,text:`Lựa chọn lời tâm sự chân thành làm chị yên tâm`},{id:`nhan_tien`,text:`Nhận 25.000đ tiền tiếp tế chị gửi vào sổ lưu ký`}],reward:`+25.000đ tiền căn tin, −20 căng thẳng, Chị Mai tin tưởng (+15 quan hệ).`,failure:`Có thể gặp chị vào ca thăm gặp tiếp theo.`},sach_thu_vien:{id:`sach_thu_vien`,title:`Độc giả chăm chỉ`,type:`side`,chapter:2,giver:`Thầy Phúc`,reason:`Đọc cẩm nang cải tạo tại thư viện trong giờ đọc sách buổi tối (19:00–21:00).`,requirement:`Đã hoàn thành bài học nghề đầu tiên.`,objectives:[{id:`muon_sach`,text:`Mượn cẩm nang pháp luật từ giá sách thư viện`},{id:`doc_xong`,text:`Đọc sách tại bàn thư viện`}],reward:`+2 điểm cải tạo, −10 căng thẳng, hiểu rõ quy tắc xét giảm án.`,failure:`Không giới hạn.`},phu_y_te:{id:`phu_y_te`,title:`Phụ việc y tế`,type:`side`,chapter:2,giver:`Y sĩ An`,reason:`Giúp Y sĩ An phân loại bông băng và vệ sinh dụng cụ tại tủ thuốc.`,requirement:`Đã làm quen Y sĩ An.`,objectives:[{id:`nhan_viec`,text:`Nhận việc tại tủ thuốc y tế`},{id:`hoan_thanh`,text:`Hoàn thành sắp xếp thuốc men`}],reward:`+3 điểm cải tạo, +1 vỉ thuốc cảm, Y sĩ An +8 quan hệ.`,failure:`Không giới hạn.`}},Bc=[`nhap_trai`,`ca_dau`,`mon_no`,`lop_nghe_dau`,`nghi_an_thuoc`,`phong_tham_gap`,`dep_bay`,`mi_cho_huy`,`sach_thu_vien`,`phu_y_te`],Vc={inCellblock:!0,inRollcall:!1,sprinting:!1,moving:!1,resting:!1},Hc={bay:`Chú Bảy`,huy:`Huy`,lam:`Lâm`,lan:`Quản giáo Lan`,tung:`Cán bộ Tùng`,tu:`Anh Tư`,son:`Sơn`,khai:`Khải`,minh:`Minh`,mai:`Chị Mai`,phuc:`Thầy Phúc`,an:`Y sĩ An`},Uc=class{constructor(e){this.listeners={},this.s=e??Oc()}on(e,t){(this.listeners[e]??=[]).push(t)}emit(e,...t){for(let n of this.listeners[e]??[])n(...t)}notify(e,t=`info`){this.emit(`notice`,e,t)}commit(){this.emit(`save`)}event(e){this.s.daily.events.push(`${Sc(this.s.minute)} ${e}`)}block(){return bc(this.s.minute)}has(e,t=1){return(this.s.inventory[e]??0)>=t}rel(e){return this.s.relations[e]?.value??0}flag(e){return this.s.flags[e]}setFlag(e,t){this.s.flags[e]=t}qStatus(e){return this.s.quests[e]?.status??`locked`}qObj(e,t){return!!this.s.flags[`${e}:${t}`]}qBranch(e){return this.s.flags[`${e}:branch`]||``}canteenBanned(){return(this.s.flags.canteenBanUntil??0)>=this.s.day}addClue(e,t){this.s.clues.includes(e)||(this.s.clues.push(e),this.notify(`Manh mối mới: ${t}`,`good`),this.event(`Thu thập manh mối: ${t}`),this.commit())}addStat(e,t){e===`money`?this.s.stats.money=Math.max(0,Math.round((this.s.stats.money+t)*10)/10):this.s.stats[e]=Ec(this.s.stats[e]+t)}addReform(e,t,n=!1){let r=e;if(n&&r>0&&(r=Math.max(0,Math.min(r,8-this.s.daily.reformGained)),this.s.daily.reformGained+=r,r===0))return this.notify(`Đã đạt trần điểm cải tạo từ hoạt động lặp lại hôm nay.`,`info`),0;let i=this.s.stats.reform;this.s.stats.reform=Ec(i+r);let a=this.s.stats.reform-i;return a!==0&&this.notify(`${a>0?`+`:``}${a} điểm cải tạo: ${t}`,a>0?`good`:`bad`),a}changeRel(e,t,n){let r=this.s.relations[e];r&&(r.value=Math.max(-100,Math.min(100,r.value+t)),r.met=!0,n&&r.memories.push({day:this.s.day,text:n}),t!==0&&this.notify(`${Hc[e]} ${t>0?`+`:``}${t} quan hệ`,t>0?`good`:`bad`))}meet(e){let t=this.s.relations[e];t&&!t.met&&(t.met=!0,this.commit())}dailyTalk(e){let t=this.s.relations[e];return!t||t.lastTalkDay===this.s.day?!1:(t.lastTalkDay=this.s.day,t.value>=-10&&(t.value=Math.min(100,t.value+1),this.addStat(`stress`,-3)),!0)}giveItem(e,t=1){this.s.inventory[e]=(this.s.inventory[e]??0)+t,this.notify(`Nhận: ${Rc(e)}${t>1?` ×`+t:``}`,`good`)}takeItem(e,t=1){return this.has(e,t)?(this.s.inventory[e]-=t,this.s.inventory[e]<=0&&delete this.s.inventory[e],!0):!1}canteenOpen(){return this.s.minute>=990&&this.s.minute<1260}buy(e){let t=Lc[e];return t?.price?this.canteenOpen()?this.canteenBanned()?`Bạn đang bị cấm mua căn tin đến hết ngày ${this.s.flags.canteenBanUntil}.`:this.s.stats.money<t.price?`Không đủ tiền (cần ${Cc(t.price)}).`:(this.addStat(`money`,-t.price),this.giveItem(e),e===`mi_goi`&&this.qStatus(`mi_cho_huy`)===`active`&&this.completeObjective(`mi_cho_huy`,`mua`),this.commit(),null):`Căn tin chỉ mở 16:30–21:00.`:`Mặt hàng không bán.`}useItem(e){let t=Lc[e];if(!t)return`Không rõ vật phẩm.`;if(t.essential||t.quest)return`Vật phẩm thiết yếu/nhiệm vụ — không thể dùng hay bỏ.`;if(!t.use)return`Không thể dùng vật phẩm này.`;if(!this.takeItem(e))return`Không có vật phẩm.`;let n=t.use;return n.hunger&&this.addStat(`hunger`,n.hunger),n.stress&&this.addStat(`stress`,n.stress),n.stamina&&this.addStat(`stamina`,n.stamina),n.health&&this.addStat(`health`,n.health),this.notify(`Đã dùng ${t.name}.`,`info`),this.commit(),null}gift(e,t){let n=Lc[t],r=this.s.relations[e];if(!n?.giftable||!r)return`Không thể tặng vật này.`;if(e===`lan`||e===`tung`)return`Cán bộ không nhận quà của phạm nhân.`;if(r.lastGiftDay===this.s.day)return`${Hc[e]} đã nhận quà hôm nay rồi.`;if(!this.takeItem(t))return`Không có vật phẩm.`;r.lastGiftDay=this.s.day;let i=e===`huy`&&t===`mi_goi`||e===`bay`&&t===`tra_da`||e===`lam`&&t===`dau_gio`;return this.changeRel(e,i?5:2),this.commit(),null}recordViolation(e,t,n,r={}){let i=`${e}:${t}`;if(this.s.violations.some(e=>e.key===i))return null;let a=Ic[e],o=!!r.grace,s={id:`V${this.s.nextId++}`,key:i,type:e,title:a.title+(o?` (nhắc nhở người mới)`:``),day:this.s.day,minute:Math.floor(this.s.minute),evidence:n,penalty:o?`Nhắc nhở, không trừ điểm (ngày đầu nhập trại).`:a.penalty+(r.extra?` `+r.extra:``),reformDelta:0,severity:o?0:a.severity,status:`active`,appealed:!1,appealTag:r.appealTag};if(!o){let e=this.s.stats.reform;this.s.stats.reform=Ec(e+a.reform),s.reformDelta=this.s.stats.reform-e,a.suspicion&&this.addStat(`suspicion`,a.suspicion),a.stress&&this.addStat(`stress`,a.stress),this.s.violations.filter(e=>e.status!==`overturned`&&e.severity>0&&e.day>this.s.day-5).length>=2&&(this.s.flags.canteenBanUntil=Math.max(this.s.flags.canteenBanUntil??0,this.s.day+1),s.penalty+=` Tái phạm lần 3 trong 5 ngày → kỷ luật: cấm căn tin đến hết ngày mai.`)}return this.s.violations.push(s),this.event(`Vi phạm: ${s.title}`),this.emit(`violation`,s),this.commit(),s}appealCheck(e){return e.appealTag===`planted`?this.has(`loi_khai_bay`)?{ok:!0,reason:`Lời khai của Chú Bảy xác nhận đàn em của Lâm lén vào buồng 3 lúc rạng sáng.`}:this.rel(`huy`)>=30?{ok:!0,reason:`Huy đứng ra làm chứng: lưỡi dao không phải của bạn.`}:{ok:!1,reason:`Chưa có nhân chứng hay vật chứng cho thấy bạn bị gài. Hãy hỏi những người ở cùng buồng.`}:e.appealTag===`newcomer`?{ok:!0,reason:`Ngày đầu nhập trại chưa được phổ biến đầy đủ.`}:{ok:!1,reason:`Hồ sơ có bằng chứng rõ ràng và bạn không đưa ra được căn cứ mới.`}}appeal(e){let t=this.s.violations.find(t=>t.id===e);if(!t)return{ok:!1,reason:`Không tìm thấy hồ sơ.`};if(t.appealed||t.status!==`active`)return{ok:!1,reason:`Hồ sơ này đã được giải trình.`};t.appealed=!0;let n=this.appealCheck(t);return n.ok?(t.status=`overturned`,this.s.stats.reform=Ec(this.s.stats.reform-t.reformDelta),this.addStat(`suspicion`,-15),this.addStat(`stress`,-10),this.notify(`Khiếu nại thành công: hủy vi phạm "${t.title}", hoàn ${-t.reformDelta} điểm.`,`good`),t.appealTag===`planted`&&(this.s.flags.lam_exposed=!0,this.changeRel(`lan`,8,`Minh chứng minh được mình bị gài hàng cấm`),this.changeRel(`lam`,-10,`Bị Minh vạch trò gài dao lam`))):(t.status=`upheld`,this.notify(`Khiếu nại không được chấp nhận — giữ nguyên quyết định.`,`warn`)),this.event(`Khiếu nại ${t.title}: ${n.ok?`thành công`:`giữ nguyên`}`),this.commit(),n}startHearing(e){this.s.flags[`hearing:${e.id}`]||(this.s.hearing=e,this.commit(),this.emit(`hearing`,e))}resolveHearing(e){let t=this.s.hearing;if(!t)return{days:0,text:``};let n=t.baseDays,r=``;e===`confess`?(n=Math.max(1,t.baseDays-1),r=`Bạn thành khẩn nhận lỗi. Hội đồng ghi nhận thái độ, giảm mức đề nghị.`,this.addReform(2,`Thành khẩn tại phiên xem xét`)):e===`explain`?this.s.flags.lam_threatened&&(this.rel(`huy`)>=20||this.rel(`bay`)>=20)?(n=0,r=`Nhân chứng xác nhận Lâm đe dọa và ra tay trước. Hội đồng không cộng án, nhưng vi phạm vẫn được ghi nhận.`,this.addReform(6,`Giải trình có nhân chứng`)):(n=t.baseDays,r=`Không có nhân chứng xác nhận lời giải trình. Giữ nguyên mức đề nghị.`):r=`Bạn im lặng. Hội đồng quyết định theo hồ sơ.`;let i=n>0?Pc(this.s,n,t.title,this.s.day):0;return n>0&&i<n&&(r+=` (Đã chạm trần cộng án — chỉ cộng ${i} ngày.)`),r+=i>0?` Kết quả: cộng ${i} ngày án.`:` Kết quả: không cộng án.`,this.s.flags[`hearing:${t.id}`]=!0,this.s.hearing=null,this.event(`Phiên xem xét: ${t.title} → +${i} ngày`),this.notify(r,i>0?`bad`:`good`),this.commit(),{days:i,text:r}}startQuest(e){let t=this.s.quests[e];return t&&t.status!==`locked`?!1:(this.s.quests[e]={status:`active`,step:0,rewarded:!1,startedDay:this.s.day,choices:[]},this.notify(`Nhiệm vụ mới: ${zc[e].title}`,`quest`),this.event(`Nhận nhiệm vụ "${zc[e].title}"`),e===`mi_cho_huy`&&(this.s.flags[`mi_cho_huy:deadline`]=this.s.day+1),this.commit(),!0)}completeObjective(e,t){if(this.qStatus(e)!==`active`)return;let n=`${e}:${t}`;if(this.s.flags[n])return;this.s.flags[n]=!0;let r=zc[e].objectives.find(e=>e.id===t);r&&this.notify(`✔ ${r.text}`,`quest`),this.checkQuest(e),this.commit()}chooseBranch(e,t){return!this.qBranch(e)&&(this.s.flags[`${e}:branch`]=t,this.s.quests[e]?.choices.push(zc[e].branches?.[t]??t),this.event(`Quyết định: ${zc[e].branches?.[t]??t}`),this.completeObjective(e,`quyet_dinh`),this.commit(),!0)}checkQuest(e){let t=zc[e],n=this.qBranch(e),r=t.objectives.filter(e=>!e.optional&&(!e.branch||e.branch===n));(!t.branches||n)&&r.every(t=>this.s.flags[`${e}:${t.id}`])&&this.finishQuest(e,`done`)}finishQuest(e,t,n){let r=this.s.quests[e];r&&r.status===`active`&&(r.status=t,r.outcome=n??r.outcome,r.rewarded||(r.rewarded=!0,this.grantQuestResult(e,t)),this.notify(`${t===`done`?`Hoàn thành`:`Thất bại`}: ${zc[e].title}${r.outcome?` — `+r.outcome:``}`,t===`done`?`quest`:`bad`),this.event(`${t===`done`?`Hoàn thành`:`Thất bại`} nhiệm vụ "${zc[e].title}"`),this.commit())}grantQuestResult(e,t){let n=this.s.quests[e];switch(e){case`nhap_trai`:this.addReform(3,`Hoàn thành nhập trại`),this.changeRel(`lan`,5),this.startQuest(`ca_dau`);break;case`ca_dau`:this.addReform(4,`Ca lao động đầu tiên`),this.changeRel(`bay`,8,`Minh làm tròn ca đầu tiên như chú dặn`);break;case`mon_no`:{let r=this.qBranch(e);if(t===`failed`)this.changeRel(`huy`,-5,`Minh bị bắt khi làm việc cho Lâm vì mình`),this.changeRel(`lam`,-10,`Minh làm hỏng việc, Lâm phủi tay`),this.s.flags.huy_debt_open=!0;else if(r===`steal`)n.outcome=`Đã trộm đồ cho Lâm`,this.addStat(`money`,30),this.addStat(`suspicion`,10),this.changeRel(`lam`,20,`Minh "làm được việc" cho Lâm`),this.changeRel(`huy`,10,`Minh liều mình xóa nợ cho Huy`),this.s.flags.stole_for_lam=!0,this.s.flags.workshop_audit_day=this.s.day+1;else if(r===`pay`)n.outcome=`Trả nợ thay Huy bằng tiền sạch`,this.changeRel(`huy`,25,`Minh bỏ tiền túi trả nợ cho Huy`),this.changeRel(`lam`,-5,`Minh từ chối làm việc cho Lâm nhưng trả đủ tiền`),this.addReform(2,`Giải quyết mâu thuẫn không vi phạm`),this.s.flags.huy_repay_day=this.s.day+2;else if(r===`report`){let e=!!this.s.flags.report_with_note;n.outcome=e?`Báo cáo có bằng chứng — Lâm bị xử lý`:`Báo cáo khi chưa có bằng chứng`,e?(this.addReform(6,`Tố giác hành vi ép nợ có bằng chứng`),this.changeRel(`lan`,15,`Minh báo cáo vụ ép nợ kèm bằng chứng`),this.changeRel(`lam`,-40,`Minh "chỉ điểm" mình với quản giáo`),this.s.flags.huy_gave_note?this.changeRel(`huy`,5,`Minh giúp Huy thoát nợ bằng cách đàng hoàng`):this.changeRel(`huy`,-15,`Minh lấy giấy nợ đi báo mà không hỏi`),this.s.flags.lam_sanctioned=!0,this.s.flags.huy_debt_cleared=!0):(this.addReform(2,`Báo cáo hành vi ép nợ`),this.changeRel(`lan`,5,`Minh báo cáo nhưng chưa có bằng chứng`),this.changeRel(`lam`,-25,`Bị quản giáo gọi lên hỏi vì Minh`),this.changeRel(`huy`,-8,`Minh làm lớn chuyện khi chưa hỏi ý`)),this.s.flags.lam_revenge_day=this.s.day+1}else r===`fight`&&(n.outcome=`Dùng bạo lực với Lâm`,this.changeRel(`huy`,5,`Minh ra tay vì mình — nhưng Huy sợ liên lụy`),this.changeRel(`lam`,-50,`Bị Minh đánh trước mặt cả sân`),this.s.flags.huy_debt_cleared=!0);this.s.chapter=Math.max(this.s.chapter,2),this.startQuest(`lop_nghe_dau`),this.startQuest(`nghi_an_thuoc`),this.startQuest(`phong_tham_gap`),this.notify(`Bắt đầu Chương 2 — Chọn cách sống! (Mở Lớp học nghề, Phòng y tế & Thăm gặp)`,`quest`);break}case`lop_nghe_dau`:this.addReform(4,`Bài học nghề đầu tiên`),this.giveItem(`chung_chi_nghe`),this.changeRel(`phuc`,10,`Minh hoàn thành bài học nghề an toàn`),this.s.skills.vocationalExam++,this.startQuest(`sach_thu_vien`);break;case`nghi_an_thuoc`:this.addReform(6,`Tìm lại thuốc hen cứu Chú Bảy`),this.changeRel(`bay`,15,`Minh tìm lại lọ thuốc hen cứu mạng chú`),this.changeRel(`an`,12,`Minh hỗ trợ tìm ra vật chứng y tế`),this.addClue(`thuoc_hen_sau_xuong`,`Lọ thuốc hen của Chú Bảy rơi gần góc sau xưởng nơi đàn em Lâm tụ tập.`);break;case`phong_tham_gap`:this.changeRel(`mai`,15,`Minh hứa với chị sẽ cải tạo tốt để về sớm`),this.addStat(`stress`,-20),this.addStat(`money`,25),this.addReform(3,`Được gia đình động viên cải tạo`);break;case`sach_thu_vien`:this.addReform(2,`Chăm chỉ đọc sách pháp luật`),this.addStat(`stress`,-10),this.changeRel(`phuc`,5,`Minh tự giác mượn sách cẩm nang`);break;case`phu_y_te`:this.addReform(3,`Hỗ trợ việc phòng y tế`),this.giveItem(`thuoc_cam`,1),this.changeRel(`an`,8,`Minh nhiệt tình giúp phân loại thuốc`);break;case`dep_bay`:this.changeRel(`bay`,10,`Minh tìm lại đôi dép con gái gửi cho chú`),this.addStat(`stress`,-5);break;case`mi_cho_huy`:t===`done`?this.changeRel(`huy`,8,`Minh giữ lời mua mì cho Huy`):this.changeRel(`huy`,-8,`Minh hứa mua mì rồi quên`)}}rollcallCheckIn(){let e=this.s.daily;return e.rollcall!==`pending`||this.s.minute<390||this.s.minute>=420?!1:(this.s.minute<=405?(e.rollcall=`ok`,this.notify(`Đã điểm danh đúng giờ.`,`good`),this.addReform(1,`Điểm danh đúng giờ`,!0)):(e.rollcall=`late`,this.recordViolation(`late_rollcall`,`d${this.s.day}`,`Quản giáo Lan ghi nhận có mặt lúc ${Sc(this.s.minute)} (hạn 06:45).`,{grace:this.s.day===1})),this.completeObjective(`nhap_trai`,`diem_danh`),this.event(`Điểm danh sáng`),this.commit(),!0)}clockIn(){let e=this.s.daily,t=this.s.minute,n=t>=480&&t<690;if(!n&&!(t>=810&&t<990))return`Ngoài giờ lao động. Ca sáng 08:00–11:30, ca chiều tự nguyện 13:30–16:30.`;if(n){if(e.workClockedIn)return`Bạn đã chấm công ca sáng.`;e.workClockedIn=!0,t>510?this.recordViolation(`late_work`,`d${this.s.day}`,`Bảng chấm công ghi ${Sc(t)} (hạn 08:30).`,{grace:this.s.day===1}):this.notify(`Đã chấm công ca sáng. Chỉ tiêu: 3 ổ cắm.`,`good`),this.completeObjective(`ca_dau`,`cham_cong`),this.event(`Chấm công ca sáng`)}else{if(this.s.flags[`extra:${this.s.day}`])return`Bạn đã đăng ký ca chiều.`;this.s.flags[`extra:${this.s.day}`]=!0,this.notify(`Đăng ký ca chiều tự nguyện: 4.000đ/sản phẩm, tối đa 4.`,`good`)}return this.commit(),null}workMode(){let e=this.s.minute;return e>=480&&e<690&&this.s.daily.workClockedIn?`morning`:e>=810&&e<990&&this.s.flags[`extra:${this.s.day}`]?`afternoon`:null}canWorkReason(){let e=this.workMode();return e?e===`morning`&&this.s.daily.workUnits>=3&&this.s.daily.work===`ok`?`Đã đủ chỉ tiêu ca sáng. Có thể nghỉ hoặc ra về.`:e===`afternoon`&&this.s.daily.extraShiftUnits>=4?`Đã làm tối đa ca chiều hôm nay.`:this.s.stats.stamina<8?`Bạn kiệt sức. Hãy nghỉ tay (ngồi ghế) hoặc ăn uống để hồi thể lực.`:null:`Cần chấm công ở bảng cạnh cửa xưởng trước (ca sáng 08:00–11:30, ca chiều 13:30–16:30).`}wage(e){return Math.round(10+e/100*6)}finishWorkUnit(e,t=!0){let n=this.s.daily,r=this.workMode();if(!r)return;let i=Math.max(0,Math.min(100,Math.round(e)));if(r===`morning`){if(n.workUnits>=3)return;n.workUnits++,n.workQuality+=i,this.event(`Lắp xong ổ cắm #${n.workUnits} (chất lượng ${i}%)`),n.workUnits>=3?this.completeMorningQuota(t):this.notify(`Sản phẩm ${n.workUnits}/3 — chất lượng ${i}%`,`info`)}else{if(n.extraShiftUnits>=4)return;n.extraShiftUnits++,this.addStat(`money`,4),this.notify(`Ca chiều: +${Cc(4)} (${n.extraShiftUnits}/4)`,`good`),n.extraShiftUnits%2==0&&this.addReform(1,`Lao động tự nguyện`,!0)}this.checkMoneyObjective(),this.commit()}completeMorningQuota(e,t=!1){let n=this.s.daily;n.work=`ok`;let r=n.workQuality/Math.max(1,n.workUnits),i=this.wage(r);t&&(i=Math.round(i*.7)),n.workPaid||(n.workPaid=!0,this.addStat(`money`,i),this.notify(`Đủ chỉ tiêu! Tiền công ${Cc(i)} (chất lượng TB ${Math.round(r)}%).`,`good`)),this.addReform(t?2:r>=85?4:3,t?`Lao động (tự động)`:`Lao động đủ chỉ tiêu`,!0),e&&!t&&this.s.skills.workShifts++,this.completeObjective(`ca_dau`,`lap_rap`),this.checkMoneyObjective()}canAutoWork(){return this.s.skills.workShifts<2?`Cần tự làm đủ 2 ca để thành thạo (hiện ${this.s.skills.workShifts}/2).`:this.workMode()===`morning`?this.s.daily.work===`ok`?`Đã đủ chỉ tiêu.`:null:`Chỉ tự động được ca sáng sau khi đã chấm công.`}autoWork(){if(this.canAutoWork())return!1;let e=this.s.daily;for(;e.workUnits<3;)e.workUnits++,e.workQuality+=60;return this.completeMorningQuota(!1,!0),this.event(`Tự động hoàn thành ca sáng`),this.advanceTo(690,{...Vc,inCellblock:!1}),this.addStat(`stamina`,-15),this.commit(),!0}checkMoneyObjective(){this.qStatus(`mon_no`)===`active`&&this.qBranch(`mon_no`)===`pay`&&this.s.stats.money>=40&&this.completeObjective(`mon_no`,`du_tien`)}mealBlock(){let e=this.block().id;return e===`breakfast`||e===`lunch`||e===`dinner`?e:null}eatMeal(){let e=this.mealBlock();return e?this.s.daily.meals[e]?`Bạn đã nhận suất ăn bữa này.`:(this.s.daily.meals[e]=!0,this.addStat(`hunger`,-45),this.addStat(`stamina`,20),this.addStat(`health`,3),this.notify(`Ăn xong suất cơm: −45 đói, +20 thể lực.`,`good`),this.event(`Ăn `+(e===`breakfast`?`sáng`:e===`lunch`?`trưa`:`tối`)),this.commit(),null):`Chưa đến giờ phát cơm (07:00, 11:30, 16:30).`}exerciseReason(){if(this.s.daily.exercise>=2)return`Hôm nay tập đủ rồi — tập thêm dễ chấn thương.`;if(this.s.stats.stamina<20)return`Cần ít nhất 20 thể lực để tập.`;let e=this.block().id;return e!==`free1`&&e!==`free2`&&e!==`rest`?`Chỉ tập trong giờ tự do/nghỉ trưa.`:null}exercise(e){if(this.exerciseReason())return;let t=Math.max(0,Math.min(1,e)),n=this.s.daily.exercise===0;this.s.daily.exercise++,this.s.skills.exerciseSessions++,this.addStat(`stamina`,-18);let r=Math.round((4+12*t)*(n?1:.5));this.addStat(`stress`,-r),this.s.skills.fitness=Math.min(20,this.s.skills.fitness+t*(n?1:.4)),this.notify(`Tập xong: −${r} căng thẳng, thể chất ${this.s.skills.fitness.toFixed(1)}/20.`,`good`),this.event(`Tập thể dục ngoài sân`),this.commit()}tick(e,t){if(this.s.ending||this.s.hearing)return;let n=this.s.minute,r=Math.min(_c,n+e*vc);this.s.minute=r,this.updateNeeds(e,(r-n)/60,t),t.inRollcall&&this.rollcallCheckIn(),this.checkWindows(n,r,t)}updateNeeds(e,t,n){let r=this.s.stats;this.addStat(`hunger`,5*t);let i=(r.hunger>=70?.5:1)*(1+this.s.skills.fitness/20);n.sprinting?this.addStat(`stamina`,-7*e):n.resting?this.addStat(`stamina`,6*e*i):n.moving?this.addStat(`stamina`,.6*e*i):this.addStat(`stamina`,1.5*e*i),n.resting&&this.addStat(`stress`,-1.5*t),r.hunger>=85?(this.addStat(`health`,-4*t),this.addStat(`stress`,3*t)):r.hunger<60&&this.addStat(`health`,1*t),r.stress>=85&&this.addStat(`health`,-1*t),r.health<=0&&this.faint()}faint(){this.s.stats.health=35,this.s.stats.stamina=40,this.notify(`Bạn ngất xỉu vì kiệt sức! Bạn cùng buồng dìu bạn về nghỉ. Không bị tính vi phạm, nhưng mất thời gian.`,`bad`),this.event(`Ngất xỉu`),this.emit(`faint`)}checkWindows(e,t,n){let r=this.s.daily;for(let n of yc)n.start>e&&n.start<=t&&this.emit(`block`,n);e<412&&t>=412&&this.morningSearch(),t>=420&&r.rollcall===`pending`&&(this.s.day===1?(r.rollcall=`excused`,this.recordViolation(`missed_rollcall`,`d${this.s.day}`,`Không có mặt ở ô điểm danh 06:30–07:00.`,{grace:!0}),this.completeObjective(`nhap_trai`,`diem_danh`)):(r.rollcall=`missed`,this.recordViolation(`missed_rollcall`,`d${this.s.day}`,`Quản giáo Lan điểm danh 06:30–07:00, không có mặt.`))),e<690&&t>=690&&this.resolveWork(),t>=1290&&r.curfew===`pending`&&(n.inCellblock?r.curfew=`ok`:(r.curfew=`missed`,this.recordViolation(`curfew`,`d${this.s.day}`,`Cán bộ Tùng kiểm tra buồng lúc 21:30, bạn đang ở ngoài khu buồng giam.`))),e<1320&&t>=1320&&this.emit(`forceSleep`)}resolveWork(){let e=this.s.daily;if(e.work===`pending`){if(!e.workClockedIn||e.workUnits===0)e.work=`missed`,this.recordViolation(`skip_work`,`d${this.s.day}`,e.workClockedIn?`Đã chấm công nhưng không hoàn thành sản phẩm nào.`:`Không chấm công ca sáng 08:00–11:30.`,{grace:this.s.day===1});else{e.work=`late`;let t=Math.round(this.wage(e.workQuality/e.workUnits)*e.workUnits/3);e.workPaid||(e.workPaid=!0,this.addStat(`money`,t)),this.notify(`Hết ca: chỉ làm ${e.workUnits}/3 sản phẩm, nhận ${Cc(t)}, không được cộng điểm.`,`warn`)}this.commit()}}morningSearch(){let e=this.s.daily;if(e.searchedToday)return;let t=this.s.flags.lam_tip_day===this.s.day;if(!t&&this.s.stats.suspicion<50)return;e.searchedToday=!0;let n=t?`theo một tin báo nặc danh`:`do mức nghi ngờ cao (${Math.round(this.s.stats.suspicion)})`,r=Object.keys(this.s.inventory).filter(e=>Lc[e]?.contraband);if(this.event(`Bị khám buồng ${n}`),r.length===0)this.notify(`Cán bộ Tùng khám buồng 3 ${n}: không phát hiện gì.`,`info`),this.addStat(`suspicion`,-10);else{for(let e of r){let t=e===`dao_lam`&&!!this.s.flags.planted_by_lam;this.s.inventory[e]=0,delete this.s.inventory[e],e===`hop_mui_khoan`?(this.recordViolation(`theft`,`search-d${this.s.day}`,`Khám buồng ${n}, tìm thấy hộp mũi khoan của kho xưởng trong đồ của bạn.`,{extra:``}),this.s.flags.canteenBanUntil=this.s.day+1,this.qStatus(`mon_no`)===`active`&&this.finishQuest(`mon_no`,`failed`,`Tang vật bị khám thấy`)):this.recordViolation(`contraband`,`search-d${this.s.day}-${e}`,`Khám buồng ${n}, tìm thấy ${Rc(e)} trong chiếu của bạn.`,{appealTag:t?`planted`:void 0})}this.emit(`searched`,r)}}advanceTo(e,t=Vc){let n=Math.min(_c,e),r=0;for(;this.s.minute<n-1e-6&&r++<2e3;){let e=Math.min(5,n-this.s.minute),r=this.s.minute;this.s.minute=r+e,this.updateNeeds(e/vc*.25,e/60,{...t,sprinting:!1,moving:!1}),this.checkWindows(r,this.s.minute,t)}}previewWait(){let e=xc(this.s.minute);if(!e)return null;let t=[],n=this.s.daily;n.rollcall===`pending`&&e.start>=420&&t.push(`Bỏ lỡ điểm danh sáng → vi phạm.`),n.work===`pending`&&e.start>=690&&(!n.workClockedIn||n.workUnits===0)&&t.push(`Bỏ lỡ ca lao động → vi phạm "Bỏ lao động".`);let r=this.mealBlock();return r&&!n.meals[r]&&t.push(`Bỏ bữa ăn hiện tại (đói sẽ tăng).`),{target:e.start,label:`${Sc(e.start)} — ${e.label}`,warnings:t}}canSleep(){let e=this.s.minute;return e>=1260?{ok:!0,reason:`Đến giờ ngủ.`}:e>=1050&&this.s.daily.work!==`pending`?{ok:!0,reason:`Đã xong nghĩa vụ, có thể nghỉ sớm.`}:this.s.daily.work===`pending`?{ok:!1,reason:`Chưa xong nghĩa vụ lao động hôm nay. Có thể ngủ sau ca lao động, từ 17:30.`}:{ok:!1,reason:`Chỉ được nghỉ sớm từ 17:30 khi đã xong nghĩa vụ (giờ ngủ chính 21:00).`}}endDay(e=!0){let t=this.s,n=t.history.find(e=>e.day===t.day);if(n)return n;t.minute<1320&&this.advanceTo(_c,{...Vc,inCellblock:e});let r=t.daily;r.curfew===`pending`&&(r.curfew=e?`ok`:`missed`),this.qStatus(`mi_cho_huy`)===`active`&&t.flags[`mi_cho_huy:deadline`]<=t.day&&this.finishQuest(`mi_cho_huy`,`failed`,`Quá hạn — thất hứa`);let i=t.violations.filter(e=>e.day===t.day&&e.status!==`overturned`&&e.severity>0);i.length===0&&this.addReform(1,`Một ngày không vi phạm`,!0);let a=Mc(t,t.day),o=Nc(t,t.day)??void 0;o&&this.event(`Kỳ xét giảm án: −${o.reduction} ngày`);let s=Object.keys(t.relations).map(e=>({npc:Hc[e],delta:t.relations[e].value-(r.startRelations[e]??0)})).filter(e=>e.delta!==0),c={day:t.day,rollcall:r.rollcall,work:r.work,workUnits:r.workUnits,meals:Number(r.meals.breakfast)+Number(r.meals.lunch)+Number(r.meals.dinner),reformDelta:t.stats.reform-r.startStats.reform,moneyDelta:Math.round((t.stats.money-r.startStats.money)*10)/10,violations:t.violations.filter(e=>e.day===t.day).map(e=>`${e.title}${e.status===`overturned`?` (đã hủy)`:``}`),relationChanges:s,served:a,review:o,remainingAfter:t.sentence.remaining,events:[...r.events]};return t.history.push(c),t.sentence.remaining<=0?(t.ending=this.computeEnding(),this.commit(),c):(this.addStat(`stamina`,100),this.addStat(`stress`,e?-15:-5),this.addStat(`hunger`,15),t.stats.hunger<70&&this.addStat(`health`,8),this.addStat(`suspicion`,i.length===0?-12:-5),t.day+=1,t.minute=360,t.daily=Dc(t.stats,t.relations),t.player={x:-14.25,z:-27.6,rot:0},this.morningStory(),this.commit(),c)}morningStory(){let e=this.s;e.flags.lam_revenge_day===e.day&&!e.flags.planted_by_lam&&(e.flags.planted_by_lam=!0,e.flags.lam_tip_day=e.day,e.inventory.dao_lam=(e.inventory.dao_lam??0)+1,e.flags.bay_saw_planting=!0,e.daily.events.push(`06:00 (Đêm qua có người lạ lảng vảng gần giường bạn.)`)),e.flags.workshop_audit_day===e.day&&(e.daily.events.push(`06:00 Xưởng kiểm kê phát hiện mất hộp mũi khoan — chưa xác định thủ phạm.`),e.stats.suspicion=Ec(e.stats.suspicion+10),e.flags.workshop_audit_done=!0),e.flags.huy_repay_day===e.day&&!e.flags.huy_repaid&&(e.flags.huy_repaid=!0,e.stats.money+=20,e.relations.huy.memories.push({day:e.day,text:`Huy trả lại Minh 20.000đ như đã hứa`}),e.relations.huy.value=Math.min(100,e.relations.huy.value+5),e.daily.events.push(`06:00 Huy dúi vào tay bạn 20.000đ: "Trả trước một nửa, em giữ lời."`))}computeEnding(){let e=this.s,t=e.violations.some(e=>e.severity>=3&&e.status!==`overturned`);return e.flags.stole_for_lam||this.rel(`lam`)>=35?`rang_buoc`:e.stats.reform>=70&&!t&&this.rel(`bay`)>=25?`tu_te`:`lang_le`}simulateGoodDay(){this.advanceTo(395,{...Vc,inCellblock:!1}),this.rollcallCheckIn(),this.advanceTo(425,{...Vc,inCellblock:!1}),this.eatMeal(),this.advanceTo(485,{...Vc,inCellblock:!1}),this.clockIn();for(let e=0;e<3;e++)this.finishWorkUnit(90);return this.advanceTo(695,{...Vc,inCellblock:!1}),this.eatMeal(),this.advanceTo(995,{...Vc,inCellblock:!1}),this.eatMeal(),this.advanceTo(1265,Vc),this.endDay(!0)}isOpen(e){return Tc(e,this.s.minute)}},Wc=`ditu-online.save`;function Gc(e){if(!e||typeof e!=`object`)return null;let t=Number(e.version??0),n=e.state??e;if(t===0&&(n={...Oc(),...n,version:1},t=1),t>1)return null;let r=Oc();return{...r,...n,stats:{...r.stats,...n.stats},sentence:{...r.sentence,...n.sentence},skills:{...r.skills,...n.skills},settings:{...r.settings,...n.settings},relations:{...r.relations,...n.relations},version:1}}function Kc(e){return JSON.stringify({version:1,savedAt:Date.now(),state:e})}function qc(e){try{return Gc(JSON.parse(e))}catch{return null}}var Jc=class{constructor(e,t=Wc){this.storage=e,this.key=t}save(e){if(!this.storage)return!1;try{return this.storage.setItem(this.key,Kc(e)),!0}catch{return!1}}load(){if(!this.storage)return null;let e=this.storage.getItem(this.key);return e?qc(e):null}exists(){return!!this.storage?.getItem(this.key)}clear(){this.storage?.removeItem(this.key)}savedAt(){let e=this.storage?.getItem(this.key);if(!e)return null;try{return JSON.parse(e).savedAt??null}catch{return null}}},Yc=.3;function Z(e,t,n,r,i,a,o=Yc){return{x1:Math.min(e,t),x2:Math.max(e,t),z1:n-o/2,z2:n+o/2,h:r,kind:i,building:a}}function Q(e,t,n,r,i,a,o=Yc){return{x1:n-o/2,x2:n+o/2,z1:Math.min(e,t),z2:Math.max(e,t),h:r,kind:i,building:a}}var $=3.6,Xc={cellblock:{x1:-28,z1:-32,x2:-6,z2:-18,name:`Khu buồng giam A`,floor:`tile`},mess:{x1:-2,z1:-32,x2:16,z2:-18,name:`Nhà ăn`,floor:`tile2`},workshop:{x1:12,z1:-12,x2:28,z2:8,name:`Xưởng lao động`,floor:`concrete`},office:{x1:-12,z1:10,x2:4,z2:20,name:`Phòng quản giáo`,floor:`wood`},medical:{x1:18,z1:-32,x2:28,z2:-18,name:`Phòng y tế`,floor:`tile`},classroom:{x1:-28,z1:10,x2:-15,z2:20,name:`Lớp học nghề & thư viện`,floor:`wood`},visitation:{x1:-28,z1:-15,x2:-20,z2:-4,name:`Phòng thăm gặp`,floor:`tile2`},discipline:{x1:6,z1:10,x2:14,z2:20,name:`Khu kỷ luật`,floor:`concrete`}},Zc=[-25.25,-19.75,-14.25,-8.75],Qc=[Z(-30,30,-34,6,`perimeter`,void 0,.6),Z(-30,30,22,6,`perimeter`,void 0,.6),Q(-34,22,-30,6,`perimeter`,void 0,.6),Q(-34,22,30,6,`perimeter`,void 0,.6),Z(-28,-6,-32,$,`outer`,`cellblock`),Q(-32,-18,-28,$,`outer`,`cellblock`),Q(-32,-18,-6,$,`outer`,`cellblock`),Z(-28,-18,-18,$,`outer`,`cellblock`),Z(-16,-6,-18,$,`outer`,`cellblock`),Z(-28,-26.05,-25,$,`bars`,`cellblock`,.12),Z(-24.45,-20.55,-25,$,`bars`,`cellblock`,.12),Z(-18.95,-15.05,-25,$,`bars`,`cellblock`,.12),Z(-13.45,-9.55,-25,$,`bars`,`cellblock`,.12),Z(-7.95,-6,-25,$,`bars`,`cellblock`,.12),Q(-32,-25,-22.5,$,`inner`,`cellblock`),Q(-32,-25,-17,$,`inner`,`cellblock`),Q(-32,-25,-11.5,$,`inner`,`cellblock`),Z(-2,16,-32,$,`outer`,`mess`),Q(-32,-18,-2,$,`outer`,`mess`),Q(-32,-18,16,$,`outer`,`mess`),Z(-2,5,-18,$,`outer`,`mess`),Z(7.5,16,-18,$,`outer`,`mess`),Z(12,28,-12,$,`outer`,`workshop`),Z(12,28,8,$,`outer`,`workshop`),Q(-12,8,28,$,`outer`,`workshop`),Q(-12,-4,12,$,`outer`,`workshop`),Q(-1.5,8,12,$,`outer`,`workshop`),Q(-12,-7.8,22,$,`inner`,`workshop`),Q(-6.2,-4,22,$,`inner`,`workshop`),Z(22,28,-4,$,`inner`,`workshop`),Z(-12,-5,10,$,`outer`,`office`),Z(-3,4,10,$,`outer`,`office`),Z(-12,4,20,$,`outer`,`office`),Q(10,20,-12,$,`outer`,`office`),Q(10,20,4,$,`outer`,`office`),Z(18,28,-32,$,`outer`,`medical`),Q(-32,-18,18,$,`outer`,`medical`),Q(-32,-18,28,$,`outer`,`medical`),Z(18,21,-18,$,`outer`,`medical`),Z(23.5,28,-18,$,`outer`,`medical`),Z(-28,-15,20,$,`outer`,`classroom`),Q(10,20,-28,$,`outer`,`classroom`),Q(10,20,-15,$,`outer`,`classroom`),Z(-28,-22,10,$,`outer`,`classroom`),Z(-19.5,-15,10,$,`outer`,`classroom`),Z(-28,-20,-15,$,`outer`,`visitation`),Z(-28,-20,-4,$,`outer`,`visitation`),Q(-15,-4,-28,$,`outer`,`visitation`),Q(-15,-11.5,-20,$,`outer`,`visitation`),Q(-9,-4,-20,$,`outer`,`visitation`),Z(6,14,20,$,`outer`,`discipline`),Q(10,20,6,$,`outer`,`discipline`),Q(10,20,14,$,`outer`,`discipline`),Z(6,8.5,10,$,`outer`,`discipline`),Z(11.5,14,10,$,`outer`,`discipline`)],$c=[{id:`door_cellblock`,area:`cellblock`,name:`Cửa khu buồng giam`,box:{x1:-18,z1:-18.2,x2:-16,z2:-17.8},zone:`cellblock`,ix:-17,iz:-16.6},{id:`door_mess`,area:`mess`,name:`Cửa nhà ăn`,box:{x1:5,z1:-18.2,x2:7.5,z2:-17.8},zone:`mess`,ix:6.25,iz:-16.6},{id:`door_workshop`,area:`workshop`,name:`Cửa xưởng`,box:{x1:11.8,z1:-4,x2:12.2,z2:-1.5},zone:`workshop`,ix:10.8,iz:-2.75},{id:`door_storage`,area:`storage`,name:`Cửa kho vật tư (khu cấm)`,box:{x1:21.8,z1:-7.8,x2:22.2,z2:-6.2},zone:`storage`,ix:21,iz:-7},{id:`door_office`,area:`office`,name:`Cửa phòng quản giáo`,box:{x1:-5,z1:9.8,x2:-3,z2:10.2},zone:`office`,ix:-4,iz:8.7},{id:`door_medical`,area:`medical`,name:`Cửa phòng y tế`,box:{x1:21,z1:-18.2,x2:23.5,z2:-17.8},zone:`medical`,ix:22.25,iz:-16.8},{id:`door_classroom`,area:`classroom`,name:`Cửa lớp học nghề & thư viện`,box:{x1:-22,z1:9.8,x2:-19.5,z2:10.2},zone:`classroom`,ix:-20.75,iz:8.8},{id:`door_visitation`,area:`visitation`,name:`Cửa phòng thăm gặp`,box:{x1:-20.2,z1:-11.5,x2:-19.8,z2:-9},zone:`visitation`,ix:-18.8,iz:-10.25},{id:`door_discipline`,area:`discipline`,name:`Cửa khu kỷ luật`,box:{x1:8.5,z1:9.8,x2:11.5,z2:10.2},zone:`discipline`,ix:10,iz:8.8}],el=[{id:`storage`,name:`Kho vật tư (KHU CẤM)`,x1:22,z1:-12,x2:28,z2:-4},{id:`cell3`,name:`Buồng 3 (buồng của bạn)`,x1:-17,z1:-32,x2:-11.5,z2:-25},{id:`cellblock`,name:`Khu buồng giam A`,x1:-28,z1:-32,x2:-6,z2:-18},{id:`mess`,name:`Nhà ăn`,x1:-2,z1:-32,x2:16,z2:-18},{id:`workshop`,name:`Xưởng lao động`,x1:12,z1:-12,x2:28,z2:8},{id:`office`,name:`Phòng quản giáo`,x1:-12,z1:10,x2:4,z2:20},{id:`medical`,name:`Phòng y tế`,x1:18,z1:-32,x2:28,z2:-18},{id:`classroom`,name:`Lớp học nghề & thư viện`,x1:-28,z1:10,x2:-15,z2:20},{id:`visitation`,name:`Phòng thăm gặp`,x1:-28,z1:-15,x2:-20,z2:-4},{id:`discipline`,name:`Khu kỷ luật`,x1:6,z1:10,x2:14,z2:20},{id:`rollcall`,name:`Ô điểm danh`,x1:-14,z1:-10.5,x2:-4,z2:-7.5},{id:`lamcorner`,name:`Góc khuất sau xưởng`,x1:15,z1:9,x2:27,z2:17}];function tl(e,t,n){return t>=e.x1&&t<=e.x2&&n>=e.z1&&n<=e.z2}function nl(e,t){return el.filter(n=>tl(n,e,t)).map(e=>e.id)}function rl(e,t){let n=el.find(n=>tl(n,e,t)&&n.id!==`rollcall`);return n?n.name:`Sân sinh hoạt`}var il=[];for(let e of Zc)il.push({kind:`bunk`,x:e-1.65,z:-29.6,w:.95,d:2,collide:!0}),il.push({kind:`bunk`,x:e+1.65,z:-29.6,w:.95,d:2,collide:!0});il.push({kind:`board`,x:-27.88,z:-21.5,w:1.4,d:.05,rot:Math.PI/2,label:`NỘI QUY`},{kind:`basin`,x:-6.5,z:-22.5,w:.6,d:3,collide:!0},{kind:`bench`,x:-21,z:-19.2,w:2.4,d:.5,collide:!0},{kind:`bench`,x:-24.5,z:-18.7,w:2.2,d:.5,collide:!0},{kind:`cabinet`,x:-13.5,z:-18.7,w:1.6,d:.55,collide:!0},{kind:`desk`,x:-8,z:-19.6,w:1.8,d:.8,collide:!0},{kind:`chair`,x:-8,z:-20.3,w:.5,d:.5},{kind:`counter`,x:5,z:-30,w:10,d:1,collide:!0},{kind:`canteen`,x:13.5,z:-31.2,w:3,d:.8,collide:!0},{kind:`table`,x:1.5,z:-26.2,w:3.2,d:2.2,collide:!0},{kind:`table`,x:10.5,z:-26.2,w:3.2,d:2.2,collide:!0},{kind:`table`,x:1.5,z:-22.2,w:3.2,d:2.2,collide:!0},{kind:`table`,x:10.5,z:-22.2,w:3.2,d:2.2,collide:!0},{kind:`workbench`,x:16,z:-1,w:2.4,d:1,collide:!0},{kind:`workbench`,x:20,z:-1,w:2.4,d:1,collide:!0},{kind:`workbench`,x:16,z:4,w:2.4,d:1,collide:!0},{kind:`workbench`,x:20,z:4,w:2.4,d:1,collide:!0},{kind:`board`,x:12.12,z:-6,w:1.3,d:.05,rot:Math.PI/2,label:`CHẤM CÔNG`},{kind:`bench`,x:14.2,z:7.2,w:2.4,d:.5,collide:!0},{kind:`crate`,x:13.5,z:6.5,w:1.2,d:1.2,collide:!0},{kind:`crate`,x:15,z:6.5,w:1,d:1,collide:!0},{kind:`press`,x:25.5,z:4.5,w:1.6,d:1.6,collide:!0},{kind:`crate`,x:25.8,z:0,w:1.2,d:1.2,collide:!0},{kind:`shelf`,x:27.3,z:-9,w:.8,d:4.5,collide:!0},{kind:`shelf`,x:27.3,z:-5.2,w:.8,d:1.6,collide:!0,label:`drill`},{kind:`crate`,x:23,z:-11.2,w:1.2,d:1.2,collide:!0},{kind:`desk`,x:-4,z:16,w:3,d:1,collide:!0},{kind:`cabinet`,x:-10.8,z:18.8,w:2,d:.7,collide:!0},{kind:`cabinet`,x:2.6,z:18.8,w:2,d:.7,collide:!0},{kind:`chair`,x:-4.6,z:14.5,w:.5,d:.5},{kind:`board`,x:-11.88,z:14,w:1.4,d:.05,rot:Math.PI/2,label:`KỶ LUẬT`},{kind:`pullup`,x:-22.5,z:5.2,w:2.2,d:.3,collide:!0},{kind:`stonetable`,x:-10,z:4.6,w:1.3,d:1.3,collide:!0},{kind:`tree`,x:-15,z:-8,w:.8,d:.8,collide:!0},{kind:`tree`,x:-14,z:5,w:.8,d:.8,collide:!0},{kind:`tree`,x:7,z:17,w:.8,d:.8,collide:!0},{kind:`tree`,x:26,z:18.5,w:.8,d:.8,collide:!0},{kind:`tree`,x:0,z:-13,w:.8,d:.8,collide:!0},{kind:`tank`,x:-27.3,z:-15.5,w:2,d:2,collide:!0},{kind:`tower`,x:-28.2,z:20.2,w:2.4,d:2.4,collide:!0},{kind:`tower`,x:28.2,z:-32.2,w:2.4,d:2.4,collide:!0},{kind:`bench`,x:-16,z:4.5,w:2.4,d:.5,collide:!0},{kind:`bench`,x:2,z:4.5,w:2.4,d:.5,collide:!0},{kind:`bunk`,x:25.5,z:-27.5,w:.95,d:2,collide:!0},{kind:`cabinet`,x:19.2,z:-28,w:1.8,d:.7,collide:!0},{kind:`desk`,x:23,z:-22,w:2.4,d:1,collide:!0},{kind:`chair`,x:23,z:-23.5,w:.5,d:.5},{kind:`desk`,x:-24,z:13,w:2.4,d:1,collide:!0},{kind:`desk`,x:-18,z:13,w:2.4,d:1,collide:!0},{kind:`desk`,x:-21.5,z:17.5,w:2.6,d:1,collide:!0},{kind:`shelf`,x:-26.8,z:16.5,w:.8,d:3.2,collide:!0},{kind:`board`,x:-27.75,z:12,w:.15,d:1.8,rot:Math.PI/2,label:`LỚP HỌC NGHỀ`},{kind:`counter`,x:-24,z:-9.5,w:6.8,d:.8,collide:!0},{kind:`chair`,x:-22.5,z:-8,w:.5,d:.5},{kind:`chair`,x:-25.5,z:-11,w:.5,d:.5},{kind:`bunk`,x:10,z:18,w:1.1,d:2,collide:!0});var al=il;function ol(e){return{x1:e.x-e.w/2,x2:e.x+e.w/2,z1:e.z-e.d/2,z2:e.z+e.d/2}}var sl=[{id:`bed`,x:-14.9,z:-28.6,r:1.3,label:`Giường của bạn`},{id:`rules`,x:-27,z:-21.5,r:1.6,label:`Bảng nội quy`},{id:`meal`,x:5,z:-28.7,r:1.5,label:`Quầy phát cơm`},{id:`canteen`,x:13.5,z:-30,r:1.4,label:`Căn tin`},{id:`clock`,x:13.1,z:-6,r:1.4,label:`Bảng chấm công`},{id:`workbench`,x:16,z:.15,r:1.2,label:`Bàn lắp ráp`},{id:`rest_ws`,x:14.2,z:6.5,r:1.3,label:`Ghế nghỉ`},{id:`drill`,x:26.2,z:-5.2,r:1.2,label:`Kệ vật tư`},{id:`exercise`,x:-21.5,z:4.2,r:1.5,label:`Xà đơn & tạ tay`},{id:`stonetable`,x:-10,z:3.5,r:1.5,label:`Bàn cờ đá`},{id:`bench_yard`,x:-16,z:3.8,r:1.3,label:`Ghế đá`},{id:`sandals`,x:-25.6,z:8.6,r:1.2,label:`Bụi cỏ`},{id:`lan_desk`,x:-4,z:14.4,r:1.4,label:`Bàn tiếp nhận`},{id:`discipline`,x:-11.2,z:14,r:1.4,label:`Cửa khu kỷ luật`},{id:`med_table`,x:23,z:-21,r:1.4,label:`Bàn Y sĩ An (Khám bệnh / nhận thuốc)`},{id:`med_cabinet`,x:19.5,z:-26.8,r:1.4,label:`Tủ thuốc y tế (Phụ việc phân loại)`},{id:`class_workbench`,x:-21.5,z:13,r:1.4,label:`Bàn thực hành nghề (Mini-game học nghề)`},{id:`library_shelf`,x:-25.5,z:16.5,r:1.4,label:`Giá sách thư viện (Mượn cẩm nang)`},{id:`visit_booth`,x:-22.5,z:-8.8,r:1.4,label:`Vách kính thăm gặp (Gặp Chị Mai)`},{id:`asthma_spot`,x:22.5,z:13,r:1.3,label:`Góc tường sau xưởng (Nhặt lọ thuốc hen suyễn)`}],cl={c1:[-25.25,-27.3],c2:[-19.75,-27.3],c3:[-14.25,-27.3],c4:[-8.75,-27.3],cor1:[-25.25,-21.6],cor2:[-19.75,-21.6],corC:[-17,-21.6],cor3:[-14.25,-21.6],cor4:[-8.75,-21.6],cbOut:[-17,-15.5],rc:[-9,-9],yC:[-4,-3],yW:[-18,-4],yEx:[-21,3.6],yBench:[-10,3.2],yBench2:[-16,3.6],yE:[8,-6],ySE:[8,10],yS:[-4,7.5],lamCorner:[20,12.5],messOut:[6.25,-15.5],messIn:[6.25,-20],messAisle:[6,-24.2],messCounter:[5,-28.6],messCanteen:[13.5,-29.2],medOut:[22.25,-15.5],medIn:[22.25,-20],medDesk:[23,-22],medBed:[25.5,-27],classOut:[-20.75,7.5],classIn:[-20.75,12],classDesk:[-21.5,13],classPhuc:[-21.5,16.5],classLib:[-25,16],visitOut:[-17.5,-10.25],visitIn:[-22.5,-10.25],visitMai:[-25.5,-10.25],discOut:[10,7.5],discIn:[10,14],wsOut:[9.5,-2.75],wsIn:[13.5,-2.75],wsBoard:[13.2,-6],wsHub:[18,-3],wsStoreOut:[20.8,-7],storeIn:[23.8,-7],wsRow:[18,2.3],wsGap:[18,4],wsRow2:[18,5.6],wsB1:[16,.15],wsB2:[20,.15],wsB3:[16,5.15],wsB4:[20,5.15],wsRest:[14.2,6.4],offOut:[-4,7.5],offIn:[-4,12.2],offDesk:[-4,13.8],offSide:[-1,13],offBack:[-1,17.4],offLan:[-4,17.3]},ll=[[`c1`,`cor1`],[`c2`,`cor2`],[`c3`,`cor3`],[`c4`,`cor4`],[`cor1`,`cor2`],[`cor2`,`corC`],[`corC`,`cor3`],[`cor3`,`cor4`],[`corC`,`cbOut`],[`cbOut`,`rc`],[`cbOut`,`yW`],[`cbOut`,`yC`],[`cbOut`,`messOut`],[`cbOut`,`visitOut`],[`rc`,`yC`],[`rc`,`yW`],[`rc`,`visitOut`],[`yC`,`yE`],[`yC`,`yBench`],[`yC`,`yS`],[`yW`,`yEx`],[`yW`,`yBench2`],[`yEx`,`yBench2`],[`yBench2`,`yBench`],[`yBench`,`yS`],[`yE`,`messOut`],[`yE`,`medOut`],[`yE`,`wsOut`],[`yE`,`ySE`],[`yS`,`ySE`],[`ySE`,`lamCorner`],[`ySE`,`wsOut`],[`messOut`,`messIn`],[`messIn`,`messAisle`],[`messAisle`,`messCounter`],[`messCounter`,`messCanteen`],[`messAisle`,`messCanteen`],[`messOut`,`medOut`],[`medOut`,`medIn`],[`medIn`,`medDesk`],[`medDesk`,`medBed`],[`yW`,`visitOut`],[`visitOut`,`visitIn`],[`visitIn`,`visitMai`],[`yEx`,`classOut`],[`classOut`,`classIn`],[`classIn`,`classDesk`],[`classDesk`,`classPhuc`],[`classIn`,`classLib`],[`classOut`,`offOut`],[`ySE`,`discOut`],[`offOut`,`discOut`],[`discOut`,`discIn`],[`wsOut`,`wsIn`],[`wsIn`,`wsBoard`],[`wsIn`,`wsHub`],[`wsBoard`,`wsHub`],[`wsHub`,`wsStoreOut`],[`wsStoreOut`,`storeIn`],[`wsHub`,`wsRow`],[`wsRow`,`wsB1`],[`wsRow`,`wsB2`],[`wsRow`,`wsGap`],[`wsGap`,`wsRow2`],[`wsRow2`,`wsB3`],[`wsRow2`,`wsB4`],[`wsRow2`,`wsRest`],[`yS`,`offOut`],[`offOut`,`offIn`],[`offIn`,`offDesk`],[`offIn`,`offSide`],[`offSide`,`offBack`],[`offBack`,`offLan`]];function ul(e){return[-12.5+e*1.4,-8.6]}var dl=[-9,-11.6],fl=[[.6,-24.7,Math.PI],[2.4,-24.7,Math.PI],[.6,-27.7,0],[2.4,-27.7,0],[9.6,-24.7,Math.PI],[11.4,-24.7,Math.PI],[9.6,-20.7,Math.PI],[.6,-20.7,Math.PI]];function pl(e,t,n,r,i,a,o,s,c,l,u,d,f,p){let[m,h,g]=fl[r];return[{from:360,to:390,node:e,pos:t,rot:0,pose:`stand`,activity:`Chuẩn bị buổi sáng`},{from:390,to:420,node:`rc`,pos:ul(n),rot:Math.PI,pose:`stand`,activity:`Đứng điểm danh`},{from:420,to:480,node:`messAisle`,pos:[m,h],rot:g,pose:`sit`,activity:`Ăn sáng`},{from:480,to:690,node:i,pos:a,rot:Math.PI,pose:`work`,activity:`Lắp ráp ở xưởng`},{from:690,to:750,node:`messAisle`,pos:[m,h],rot:g,pose:`sit`,activity:`Ăn trưa`},{from:750,to:810,node:e,pos:t,rot:0,pose:`sit`,activity:`Nghỉ trưa`},{from:810,to:990,node:o,pos:s,rot:0,pose:c,activity:l},{from:990,to:1050,node:`messAisle`,pos:[m,h],rot:g,pose:`sit`,activity:`Ăn tối`},{from:1050,to:1260,node:u,pos:d,rot:0,pose:f,activity:p},{from:1260,to:1320,node:e,pos:t,rot:0,pose:`sit`,activity:`Về buồng nghỉ`}]}var ml={bay:{id:`bay`,name:`Chú Bảy`,role:`Phạm nhân lâu năm · Buồng 3`,bio:`56 tuổi, từng làm thợ điện, ở trại đã hơn 3 năm. Ít nói nhưng để ý từng người mới.`,personality:`Điềm đạm, trọng chữ tín, ghét trò bắt nạt.`,goal:`Giữ hồ sơ sạch để về kịp đám cưới con gái và xin lỗi vợ con.`,story:!0,look:{uniform:`inmate`,skin:14198914,hair:12106946,hairStyle:`short`,accent:2845872,height:.96,build:1,glasses:!0},whereHint:`Buồng 3 (sáng sớm/trưa/tối), Nhà ăn (giờ ăn), Bàn lắp ráp #2 (ca sáng), Bàn cờ đá ngoài sân (giờ tự do).`,schedule:pl(`c3`,[-12.9,-28.8],0,0,`wsB2`,cl.wsB2,`yBench`,[-10,3.3],`sit`,`Ngồi bên bàn cờ đá`,`yBench`,[-10,3.3],`sit`,`Hóng mát ngoài sân`)},huy:{id:`huy`,name:`Huy`,role:`Bạn cùng buồng · Buồng 3`,bio:`22 tuổi, vào trại vì đánh nhau. Hay bốc đồng nhưng ai tốt với mình thì nhớ rất lâu.`,personality:`Nóng nảy, sĩ diện, trọng tình bạn.`,goal:`Thoát khỏi khoản nợ với Lâm mà không bị kéo sâu hơn.`,story:!0,look:{uniform:`inmate`,skin:14857357,hair:1973016,hairStyle:`buzz`,accent:14251782,height:1,build:.95},whereHint:`Buồng 3 (sáng sớm/trưa/tối), Nhà ăn (giờ ăn), Bàn lắp ráp #3 (ca sáng), Khu xà đơn hoặc căn tin (giờ tự do).`,schedule:pl(`c3`,[-15.2,-26.5],1,1,`wsB3`,cl.wsB3,`yEx`,[-20.6,3.8],`stand`,`Đứng gần khu xà đơn`,`messCanteen`,[12.5,-28.8],`stand`,`Đứng nhìn quầy căn tin`)},lam:{id:`lam`,name:`Lâm`,role:`Tổ trưởng tự phong · Buồng 4`,bio:`34 tuổi, khéo miệng trước mặt cán bộ, đứng sau các khoản vay mượn và hàng lậu nhỏ trong khu.`,personality:`Thực dụng, tính toán, không bao giờ tự làm việc bẩn tay.`,goal:`Giữ thế lực trong khu mà hồ sơ vẫn sạch.`,story:!0,look:{uniform:`inmate`,skin:13211250,hair:1381653,hairStyle:`bald`,accent:10033947,height:1.05,build:1.15},whereHint:`Buồng 4, Nhà ăn (giờ ăn), Bàn lắp ráp #4 (ca sáng), Góc khuất sau xưởng (13:30–16:30), Ghế đá sân (tối).`,schedule:pl(`c4`,[-8.75,-28.4],2,4,`wsB4`,cl.wsB4,`lamCorner`,[20,12.5],`stand`,`Đứng ở góc khuất sau xưởng`,`yBench2`,[-16,3.6],`sit`,`Ngồi ghế đá quan sát sân`)},lan:{id:`lan`,name:`Quản giáo Lan`,role:`Quản giáo phụ trách Khu A`,bio:`38 tuổi, làm việc nguyên tắc, chỉ tin vào hồ sơ, nhân chứng và bằng chứng cụ thể.`,personality:`Nghiêm khắc, công bằng, ghét bao biện nhưng luôn lắng nghe khi có căn cứ.`,goal:`Giữ trật tự Khu A và giúp người thực tâm cải tạo sớm trở về.`,story:!0,look:{uniform:`officer`,skin:15054996,hair:1841431,hairStyle:`bun`,accent:3104317,height:.98,build:.95,cap:!0},whereHint:`Ô điểm danh (06:30–07:00), Phòng quản giáo phía Nam sân (07:00–17:00), Tuần tra sân (buổi tối).`,schedule:[{from:360,to:390,node:`offLan`,pos:[-4,17.3],rot:Math.PI,pose:`stand`,activity:`Chuẩn bị sổ điểm danh`},{from:390,to:420,node:`rc`,pos:dl,rot:0,pose:`stand`,activity:`Điểm danh sáng`},{from:420,to:1020,node:`offLan`,pos:[-4,17.3],rot:Math.PI,pose:`sit`,activity:`Làm việc tại phòng quản giáo`},{from:1020,to:1260,node:`yC`,pose:`walk`,activity:`Tuần tra sân`,patrol:[`yC`,`yE`,`yS`,`yW`]},{from:1260,to:1320,node:`cbOut`,pos:[-17,-15.5],rot:Math.PI,pose:`stand`,activity:`Giám sát giờ về buồng`}]},tung:{id:`tung`,name:`Cán bộ Tùng`,role:`Cán bộ trật tự & xưởng`,bio:`30 tuổi, phụ trách trông coi xưởng lao động và kiểm tra buồng giam.`,personality:`Cẩn thận, đi tuần đúng tuyến.`,goal:`Không để thất thoát vật tư xưởng.`,story:!0,look:{uniform:`officer`,skin:14264706,hair:2039583,hairStyle:`short`,accent:3560212,height:1.03,build:1.08,cap:!0},whereHint:`Xưởng lao động (giờ làm việc), Tuần tra sân & hành lang (ngoài giờ).`,schedule:[{from:360,to:480,node:`cbOut`,pose:`walk`,activity:`Tuần tra buổi sáng`,patrol:[`cbOut`,`rc`,`messOut`,`yC`]},{from:480,to:690,node:`wsHub`,pose:`walk`,activity:`Giám sát xưởng`,patrol:[`wsBoard`,`wsHub`,`wsRow`,`wsRow2`,`wsHub`,`wsStoreOut`]},{from:690,to:810,node:`messOut`,pose:`walk`,activity:`Trực giờ trưa`,patrol:[`messOut`,`yE`,`yC`]},{from:810,to:990,node:`wsHub`,pose:`walk`,activity:`Trực ca chiều`,patrol:[`wsIn`,`wsHub`,`wsRow`,`wsRow2`]},{from:990,to:1260,node:`yE`,pose:`walk`,activity:`Tuần tra tối`,patrol:[`messOut`,`yE`,`yS`,`cbOut`]},{from:1260,to:1320,node:`corC`,pose:`walk`,activity:`Kiểm tra buồng giam`,patrol:[`cor1`,`cor2`,`cor3`,`cor4`]}]},tu:{id:`tu`,name:`Anh Tư`,role:`Phạm nhân · Buồng 1`,bio:`Phạm nhân phụ bếp và làm mộc.`,personality:`Hiền lành, ít chuyện.`,goal:`Chấp hành xong án.`,story:!1,look:{uniform:`inmate`,skin:14000764,hair:2829099,hairStyle:`short`,accent:1013358,height:1,build:1.05},whereHint:`Buồng 1, Nhà ăn, Xưởng.`,schedule:pl(`c1`,[-25.25,-27.8],3,2,`wsRest`,[24.2,4.5],`yBench2`,[-15,3.6],`stand`,`Đi dạo sân`,`yC`,[-3,-2],`stand`,`Hóng gió`)},son:{id:`son`,name:`Sơn`,role:`Phạm nhân · Buồng 2`,bio:`Phạm nhân trẻ, thích tập xà.`,personality:`Hoạt bát.`,goal:`Rèn sức khỏe.`,story:!1,look:{uniform:`inmate`,skin:14725772,hair:1841431,hairStyle:`buzz`,accent:8141549,height:1.02,build:1.02},whereHint:`Buồng 2, Nhà ăn, Xưởng, Khu xà đơn.`,schedule:pl(`c2`,[-19.75,-27.8],4,3,`wsRest`,[24.2,0],`yEx`,[-22.5,3.6],`stand`,`Tập thể dục`,`yW`,[-17,-4],`stand`,`Nói chuyện ngoài sân`)},khai:{id:`khai`,name:`Khải`,role:`Đàn em của Lâm · Buồng 4`,bio:`Hay đi theo Lâm.`,personality:`Hay dò xét.`,goal:`Theo đuôi Lâm.`,story:!1,look:{uniform:`inmate`,skin:13605748,hair:2565930,hairStyle:`buzz`,accent:6583435,height:.98,build:1},whereHint:`Buồng 4, Nhà ăn, Xưởng, Góc sau xưởng.`,schedule:pl(`c4`,[-7.9,-26.8],5,5,`wsRest`,[14.2,6.4],`lamCorner`,[18.5,13.2],`stand`,`Canh chừng cho Lâm`,`yE`,[8,-6],`stand`,`Đứng ở sân Đông`)},phuc:{id:`phuc`,name:`Thầy Phúc`,role:`Cán bộ giáo dục & dạy nghề`,bio:`45 tuổi, là giáo viên dạy nghề điện - cơ khí lâu năm trong trại. Coi trọng tính kỷ luật, trung thực và sự chăm chỉ.`,personality:`Tận tình, nghiêm khắc nhưng nhân hậu.`,goal:`Truyền nghề cho các phạm nhân để khi ra trại có công việc lương thiện.`,story:!0,look:{uniform:`officer`,skin:13935475,hair:3355443,hairStyle:`short`,accent:1920728,height:1.02,build:1,glasses:!0},whereHint:`Lớp học nghề & Thư viện (chiều 14:00–16:30 & tối 19:00–21:00), Nhà ăn (giờ ăn).`,schedule:[{from:360,to:480,node:`classLib`,pos:[-25,16],rot:0,pose:`work`,activity:`Chuẩn bị giáo án tại thư viện`},{from:480,to:690,node:`classPhuc`,pos:[-21.5,16.5],rot:Math.PI,pose:`stand`,activity:`Soạn giáo trình nghề`},{from:690,to:750,node:`messAisle`,pos:[11.4,-21.2],rot:Math.PI,pose:`sit`,activity:`Ăn trưa`},{from:750,to:840,node:`yBench`,pos:[-10,3.2],rot:0,pose:`sit`,activity:`Nghỉ trưa hóng mát`},{from:840,to:990,node:`classPhuc`,pos:[-21.5,16.5],rot:Math.PI,pose:`stand`,activity:`Giảng dạy lớp học nghề (14:00–16:30)`},{from:990,to:1050,node:`messAisle`,pos:[11.4,-21.2],rot:Math.PI,pose:`sit`,activity:`Ăn tối`},{from:1050,to:1260,node:`classLib`,pos:[-25,16],rot:0,pose:`sit`,activity:`Phụ trách giờ đọc sách thư viện`},{from:1260,to:1320,node:`offOut`,pos:[-4,7.5],rot:0,pose:`stand`,activity:`Giao ban cuối ngày`}]},an:{id:`an`,name:`Y sĩ An`,role:`Y sĩ phụ trách Phòng y tế`,bio:`32 tuổi, cẩn trọng, công tư phân minh. Ghét kẻ giả bệnh trốn việc nhưng luôn tận tụy với người ốm đau.`,personality:`Nhẹ nhàng, chu đáo, tinh ý.`,goal:`Đảm bảo sức khỏe cho toàn trại và ngăn chặn tình trạng tuồn thuốc lậu.`,story:!0,look:{uniform:`officer`,skin:16109749,hair:1579035,hairStyle:`bun`,accent:440020,height:.98,build:.95},whereHint:`Phòng y tế (07:30–11:30 & 13:30–17:00), Nhà ăn (giờ ăn).`,schedule:[{from:360,to:450,node:`medDesk`,pos:[23,-22],rot:Math.PI,pose:`stand`,activity:`Kiểm tra hồ sơ bệnh án`},{from:450,to:690,node:`medDesk`,pos:[23,-22],rot:Math.PI,pose:`sit`,activity:`Khám bệnh buổi sáng`},{from:690,to:750,node:`messAisle`,pos:[.6,-21.2],rot:Math.PI,pose:`sit`,activity:`Ăn trưa`},{from:750,to:810,node:`yC`,pos:[-4,-3],rot:0,pose:`stand`,activity:`Đi dạo sân giữa giờ`},{from:810,to:1020,node:`medDesk`,pos:[23,-22],rot:Math.PI,pose:`sit`,activity:`Trực y tế ca chiều`},{from:1020,to:1080,node:`messAisle`,pos:[.6,-21.2],rot:Math.PI,pose:`sit`,activity:`Ăn tối`},{from:1080,to:1260,node:`yBench`,pos:[-10,3.2],rot:0,pose:`sit`,activity:`Hóng gió buổi tối`},{from:1260,to:1320,node:`medIn`,pos:[22.25,-20],rot:0,pose:`stand`,activity:`Khóa cửa phòng y tế`}]},mai:{id:`mai`,name:`Chị Mai`,role:`Chị gái của Minh (28 tuổi)`,bio:`Lam lũ gánh vác gia đình, luôn mong em trai tu tâm dưỡng tính để sớm hoàn lương trở về.`,personality:`Chịu thương chịu khó, nghiêm khắc nhưng giàu tình thương.`,goal:`Động viên Minh cải tạo tốt và chuẩn bị cuộc sống ngoài trại.`,story:!0,look:{uniform:`inmate`,skin:14857357,hair:2039583,hairStyle:`bun`,accent:15485081,height:.97,build:.95},whereHint:`Phòng thăm gặp (giờ thăm gặp 08:00–11:00 & 14:00–17:00).`,schedule:[{from:360,to:480,node:`visitMai`,pos:[-25.5,-10.25],rot:0,pose:`sit`,activity:`Chờ đăng ký vào thăm`},{from:480,to:660,node:`visitMai`,pos:[-25.5,-10.25],rot:0,pose:`sit`,activity:`Ngồi đợi Minh bên vách kính`},{from:660,to:840,node:`visitMai`,pos:[-25.5,-10.25],rot:0,pose:`sit`,activity:`Nghỉ trưa tại khu chờ thăm nuôi`},{from:840,to:1020,node:`visitMai`,pos:[-25.5,-10.25],rot:0,pose:`sit`,activity:`Tiếp tục ca thăm gặp buổi chiều`},{from:1020,to:1320,node:`visitMai`,pos:[-25.5,-10.25],rot:0,pose:`sit`,activity:`Chuẩn bị bắt xe đò về quê`}]}};function hl(e,t){for(let n of e.schedule)if(t>=n.from&&t<n.to)return n;return e.schedule[e.schedule.length-1]}function gl(e,t,n,r){switch(t.meet(e),e){case`bay`:return yl(t);case`huy`:return bl(t);case`lam`:return xl(t);case`lan`:return Cl(t,n);case`tung`:return Dl(t);case`phuc`:return wl(t,r);case`an`:return Tl(t);case`mai`:return El(t);default:return Ol(e,t)}}function _l(e,t,n,r,i){return r.has(t)?{label:`Tặng ${n}`,run:()=>{let n=r.gift(e,t);return{speaker:r.s.relations[e]?vl(e):e,text:n??i,choices:[{label:`Đóng`,run:()=>null}]}}}:null}function vl(e){return{bay:`Chú Bảy`,huy:`Huy`,lam:`Lâm`,lan:`Quản giáo Lan`,tung:`Cán bộ Tùng`,phuc:`Thầy Phúc`,an:`Y sĩ An`,mai:`Chị Mai`}[e]??e}function yl(e){if(!e.qObj(`nhap_trai`,`gap_bay`)&&e.qStatus(`nhap_trai`)===`active`)return e.completeObjective(`nhap_trai`,`gap_bay`),{speaker:`Chú Bảy`,role:`Phạm nhân lâu năm · Buồng 3`,text:`Cậu là Minh mới vào sáng nay hả? Ngồi xuống thở cái đã. Ở đây mới vào ai cũng ngợp. Cứ nhớ ba chuyện: đúng giờ điểm danh 6 rưỡi ở ô vàng ngoài sân, 8 giờ vào xưởng nhớ bấm bảng chấm công trước khi ngồi vào bàn, và tối 9 rưỡi phải có mặt trong buồng. Giữ cái đầu lạnh thì đường về mới ngắn.`,choices:[{label:`Cảm ơn chú. Cháu muốn cải tạo tốt để về sớm với chị gái.`,run:()=>(e.changeRel(`bay`,4,`Minh nói thật chuyện muốn sớm về với chị gái`),e.startQuest(`ca_dau`),{speaker:`Chú Bảy`,text:`Có người chờ ở ngoài là cái phước lớn. Đừng để mấy đồng tiền lẻ hay lời rủ rê trong này làm mờ mắt. Sáng vào xưởng, làm đủ 3 ổ cắm điện cho chú xem. Xong việc qua kể chú nghe.`,choices:[{label:`Vâng, cháu nhớ rồi.`,run:()=>null}]})},{label:`Ở đây ai là người cần dè chừng hả chú?`,run:()=>(e.startQuest(`ca_dau`),{speaker:`Chú Bảy`,text:`Thằng Huy cùng buồng mình tính bốc đồng nhưng không xấu bụng. Còn thằng Lâm buồng 4 hay đứng sau xưởng giờ nghỉ — nó cho vay, nhờ vả ngọt lắm, nhưng dính vào là mắc nợ cả đời tù. Cứ làm tròn ca lao động của mình trước đã.`,choices:[{label:`Cháu hiểu rồi.`,run:()=>null}]})}]};let t=[];e.qStatus(`nghi_an_thuoc`)===`active`&&!e.qObj(`nghi_an_thuoc`,`hoi_bay`)&&t.push({label:`Chú Bảy, chú khó thở thế này từ khi nào? Thuốc của chú đâu rồi?`,important:!0,run:()=>(e.completeObjective(`nghi_an_thuoc`,`hoi_bay`),{speaker:`Chú Bảy`,text:`Khục khục… Hồi sáng chú mang lọ thuốc theo người… Lúc đi qua lối sau xưởng có đứa nào va mạnh vào chú rồi chạy mất. Chú tìm quanh bãi cỏ sau xưởng mà không thấy… Cháu ngó giùm chú với, chú thở không nổi nữa…`,choices:[{label:`Cháu ra góc tường sau xưởng tìm ngay cho chú!`,run:()=>null}]})}),e.qStatus(`ca_dau`)===`active`&&e.qObj(`ca_dau`,`lap_rap`)&&!e.qObj(`ca_dau`,`bao_bay`)&&t.push({label:`Chú Bảy, cháu đã làm xong chỉ tiêu ca đầu tiên rồi!`,run:()=>(e.completeObjective(`ca_dau`,`bao_bay`),{speaker:`Chú Bảy`,text:`Tốt lắm. Tay nghề chưa quen mà làm đủ chỉ tiêu là có cố gắng. Cứ giữ nhịp đó — mỗi 5 ngày trại xét hồ sơ một lần, làm đủ, không vi phạm là được giảm từ 1 đến 3 ngày án. À… hồi trưa thằng Huy tìm cháu ngoài sân đấy, mặt mũi xanh mét.`,choices:[{label:`Để cháu ra sân hỏi Huy xem sao.`,run:()=>null}]})}),e.qStatus(`dep_bay`)===`locked`&&t.push({label:`Chú tìm gì mà cứ nhìn quanh chân bàn thế?`,run:()=>(e.startQuest(`dep_bay`),{speaker:`Chú Bảy`,text:`Đôi dép tổ ong con gái chú gửi vào đợt thăm năm ngoái… Hồi chiều tập thể dục gần khu xà đơn chú để quên, quay lại thì chẳng thấy. Đôi dép rẻ tiền thôi nhưng có khắc chữ B7 ở gót. Cháu đi ngang bụi cỏ phía Tây sân ngó giùm chú với.`,choices:[{label:`Để cháu tìm giúp chú.`,run:()=>null}]})}),e.qStatus(`dep_bay`)===`active`&&e.has(`dep_bay`)&&t.push({label:`Đôi dép chữ B7 của chú đây, cháu tìm thấy ở bụi cỏ cạnh khu xà đơn.`,run:()=>(e.takeItem(`dep_bay`),e.completeObjective(`dep_bay`,`tra_dep`),{speaker:`Chú Bảy`,text:`Trời đất, đúng nó rồi! Cảm ơn cháu nhiều lắm Minh ơi. Con bé nhà chú tháng sau lấy chồng… chú chỉ mong giữ sạch hồ sơ để được xét giảm kịp ngày về đứng nhìn nó một cái.`,choices:[{label:`Chú cháu mình cùng cố gắng về sớm.`,run:()=>null}]})}),e.s.flags.bay_saw_planting&&!e.has(`loi_khai_bay`)&&t.push({label:`Chú Bảy, sáng nay có người gài lưỡi dao lam vào chiếu cháu!`,important:!0,run:()=>e.rel(`bay`)<10?{speaker:`Chú Bảy`,text:`Chuyện động chạm tới đám thằng Lâm không phải chuyện đùa… Chú còn ngày về với con gái. Cháu thông cảm, chú chưa dám chắc.`,choices:[{label:`Cháu hiểu…`,run:()=>null}]}:(e.giveItem(`loi_khai_bay`),e.changeRel(`bay`,5,`Chú Bảy đứng ra viết lời khai giúp Minh`),{speaker:`Chú Bảy`,text:`Chú biết. 5 giờ sáng chú dậy đi vệ sinh, thấy thằng Khải đàn em của Lâm lén thò tay qua song sắt chỗ giường cháu. Chú đã ghi lại giờ giấc vào tờ giấy này — cầm lên phòng quản giáo đưa cho cô Lan. Chú già rồi, không để tụi nó hại người ngay trước mắt được.`,choices:[{label:`Cháu mang ơn chú!`,run:()=>null}]})}),e.qStatus(`mon_no`)===`active`&&!e.qBranch(`mon_no`)&&t.push({label:`Huy đang nợ Lâm 40.000đ, Lâm đòi cháu lấy đồ trong kho xưởng…`,run:()=>({speaker:`Chú Bảy`,text:`Đừng dại! Trong kho có camera quét qua lại, lại thêm cán bộ Tùng đi tuần. Lấy đồ cho Lâm xong là nó nắm đằng chuôi, lần sau nó lại bắt cháu làm tiếp. Một là cháu chịu khó tăng ca trả nợ đàng hoàng, hai là lấy được tờ giấy nợ rồi báo cho Quản giáo Lan — cô ấy xử có lý có tình.`,choices:[{label:`Cảm ơn lời khuyên của chú.`,run:()=>null}]})}),t.push({label:`Trò chuyện hỏi thăm chú`,run:()=>({speaker:`Chú Bảy`,text:e.dailyTalk(`bay`)?`Hồi mới vào chú cũng mất ngủ suốt. Sau nghĩ lại: mỗi ngày mình làm trọn vẹn là cái án ngắn đi một ngày thật. Đói thì ăn đúng bữa, mệt quá thì ra ghế nghỉ một lát đừng cố sức.`:`Cứ thong thả làm việc đi cháu, tối về buồng chú cháu mình nói chuyện tiếp.`,choices:[{label:`Vâng ạ.`,run:()=>null}]})});let n=_l(`bay`,`tra_da`,`chai trà đá`,e,`Trời nắng có chai trà mát ruột quá. Cảm ơn cháu.`);n&&t.push(n),t.push({label:`Tạm biệt chú`,run:()=>null});let r=e.s.relations.bay.memories.slice(-1)[0]?.text;return{speaker:`Chú Bảy`,role:`Quan hệ: ${e.rel(`bay`)} · Buồng 3`,text:r?`"Nhớ chuyện ${r.toLowerCase()}." — Có việc gì cần hỏi chú không Minh?`:`Có chuyện gì thế Minh? Ở trong này có gì chưa rõ cứ hỏi chú.`,choices:t}}function bl(e){let t=[];e.qStatus(`ca_dau`)===`done`&&e.qStatus(`mon_no`)===`locked`&&t.push({label:`Nghe Chú Bảy nói cậu đang tìm tôi. Có chuyện gì thế?`,important:!0,run:()=>(e.startQuest(`mon_no`),e.completeObjective(`mon_no`,`nghe_huy`),{speaker:`Huy`,text:`Minh ơi… tuần trước tôi thua cược rồi mượn của lão Lâm 25 nghìn mua đồ ăn, giờ lão tính lãi thành 40.000đ, lại còn giữ tờ giấy nợ tôi lỡ ký. Lão bảo chiều nay ra góc khuất phía Nam xưởng nói chuyện, không thì lão cho người "dạy bảo". Cậu đi cùng tôi hoặc qua nói đỡ một tiếng được không?`,choices:[{label:`Bình tĩnh. Giờ tự do tôi qua góc sau xưởng gặp Lâm xem lão muốn gì.`,run:()=>(e.changeRel(`huy`,5,`Minh nhận lời đứng ra hỏi chuyện Lâm giúp Huy`),{speaker:`Huy`,text:`Cảm ơn cậu! Giờ tự do (13:30–16:30) lão Lâm hay đứng ở góc khuất phía Nam sau xưởng. Nhưng cẩn thận đấy, lão cáo già lắm.`,choices:[{label:`Được, cứ để tôi xem.`,run:()=>null}]})}]})}),e.qStatus(`mon_no`)!==`active`||!e.qObj(`mon_no`,`gap_lam`)||e.qBranch(`mon_no`)&&e.qBranch(`mon_no`)!==`report`||e.has(`giay_no`)||e.s.flags.report_with_note||t.push({label:`Huy này, cậu còn giữ bản nháp hay giấy ghi nợ nào của Lâm không? Đưa tôi mang báo quản giáo.`,important:!0,run:()=>({speaker:`Huy`,text:`Báo quản giáo á?! Lão Lâm biết thì tôi sống sao nổi… Nhưng tôi có giữ mảnh giấy lão ghi số tiền lãi cắt cổ nhét trong túi áo. Cậu chắc chắn cô Lan xử được không?`,choices:[{label:`Tin tôi. Có bằng chứng là cô Lan khóa tay Lâm lại ngay (cần quan hệ Huy ≥ 5).`,disabled:e.rel(`huy`)<5?`Quan hệ với Huy chưa đủ tin tưởng (cần ≥ 5 — hãy giúp hoặc trò chuyện với Huy).`:void 0,run:()=>(e.giveItem(`giay_no`),e.s.flags.huy_gave_note=!0,e.completeObjective(`mon_no`,`lay_giay`),e.qBranch(`mon_no`)||e.chooseBranch(`mon_no`,`report`),{speaker:`Huy`,text:`Đây… tôi đặt cược vào cậu đấy Minh. Đừng để tôi bị đòn oan.`,choices:[{label:`Tôi mang thẳng lên phòng quản giáo đây.`,run:()=>null}]})},{label:`Đưa đây cho tôi, không nói nhiều! (giật lấy mảnh giấy)`,important:!0,risk:`Huy sẽ giận (−15 quan hệ) vì bị ép buộc.`,run:()=>(e.giveItem(`giay_no`),e.s.flags.huy_gave_note=!1,e.changeRel(`huy`,-15,`Minh giật tờ giấy nợ không cần Huy đồng ý`),e.completeObjective(`mon_no`,`lay_giay`),e.qBranch(`mon_no`)||e.chooseBranch(`mon_no`,`report`),{speaker:`Huy`,text:`Này! Cậu làm cái gì đấy?! Nếu lão Lâm trả thù tôi thì cậu nhớ mặt đấy!`,choices:[{label:`Rồi cậu sẽ hiểu.`,run:()=>null}]})},{label:`Thôi để tôi tính cách khác.`,run:()=>null}]})}),e.qStatus(`mi_cho_huy`)===`locked`&&t.push({label:`Trông cậu đói thế? Không mua gì ở căn tin à?`,run:()=>({speaker:`Huy`,text:`Tôi bị cấm căn tin hết tuần vì cãi nhau hôm bữa, bụng sôi ùng ục từ chiều. Cậu có tiền qua quầy căn tin trong nhà ăn (mở 16:30–21:00) mua giúp tôi gói mì 8.000đ được không? Tôi hứa trả ơn!`,choices:[{label:`Được, tôi hứa mua cho cậu trước khi hết ngày mai.`,important:!0,risk:`Nếu nhận lời mà hết ngày mai chưa đưa mì, Huy sẽ nhớ bạn thất hứa (−8 quan hệ).`,run:()=>(e.startQuest(`mi_cho_huy`),{speaker:`Huy`,text:`Quá đỉnh! Nhớ nhé, tôi trông cậy vào cậu đấy.`,choices:[{label:`Ừ.`,run:()=>null}]})},{label:`Tôi chưa hứa trước được, khi nào dư tiền tôi mua.`,run:()=>null}]})}),e.qStatus(`mi_cho_huy`)===`active`&&e.has(`mi_goi`)&&t.push({label:`Gói mì cậu nhờ đây, ăn đi cho đỡ đói.`,run:()=>(e.takeItem(`mi_goi`),e.completeObjective(`mi_cho_huy`,`mua`),e.completeObjective(`mi_cho_huy`,`dua`),{speaker:`Huy`,text:`Trời ơi cứu mạng! Cậu nói một lời là giữ đúng một lời. Sau này trong buồng có chuyện gì tôi đứng về phía cậu.`,choices:[{label:`Anh em cùng buồng mà.`,run:()=>null}]})}),t.push({label:`Nói chuyện phiếm với Huy`,run:()=>(e.dailyTalk(`huy`),{speaker:`Huy`,text:`Ở đây buồn chân buồn tay thì chiều ra khu xà đơn phía Tây sân tập vài hiệp, vừa đỡ căng thẳng vừa khỏe người để làm xưởng đỡ mệt.`,choices:[{label:`Ừ, để tôi thử.`,run:()=>null}]})});let n=_l(`huy`,`banh_mi`,`bánh mì ngọt`,e,`Ngon! Cảm ơn ông bạn.`);n&&t.push(n),t.push({label:`Tạm biệt`,run:()=>null});let r=e.s.relations.huy.memories.slice(-1)[0]?.text;return{speaker:`Huy`,role:`Quan hệ: ${e.rel(`huy`)} · Buồng 3`,text:r?`(${r}) — Sao đấy Minh?`:`Sao đấy ông bạn cùng buồng?`,choices:t}}function xl(e){let t=[];return e.qStatus(`mon_no`)===`active`&&!e.qObj(`mon_no`,`gap_lam`)?t.push({label:`Tôi đến nói chuyện khoản nợ 40.000đ của Huy.`,important:!0,run:()=>(e.completeObjective(`mon_no`,`gap_lam`),e.s.flags.lam_threatened=!0,Sl(e))}):e.qStatus(`mon_no`)===`active`&&!e.qBranch(`mon_no`)&&t.push({label:`Về chuyện món nợ của Huy…`,important:!0,run:()=>Sl(e)}),e.qStatus(`mon_no`)===`active`&&e.qBranch(`mon_no`)===`steal`&&e.has(`hop_mui_khoan`)&&t.push({label:`Hộp mũi khoan ông cần đây. Xóa nợ cho Huy và đưa 30.000đ như đã hẹn.`,important:!0,run:()=>(e.takeItem(`hop_mui_khoan`),e.completeObjective(`mon_no`,`giao_lam`),{speaker:`Lâm`,text:`Haha, nhanh gọn đấy người mới. Tiền của cậu đây 30.000đ, nợ của thằng Huy coi như xóa. Nhưng nhớ nhé — từ giờ cậu với tôi cùng một thuyền rồi. Ngày mai xưởng kiểm kê, cứ im cái miệng là êm.`,choices:[{label:`Tôi biết rồi.`,run:()=>null}]})}),e.qStatus(`mon_no`)===`active`&&e.qBranch(`mon_no`)===`pay`&&t.push({label:`Đây là đủ ${Cc(40)} tiền sạch. Trả xong nợ cho Huy, từ nay đừng làm phiền cậu ấy.`,important:!0,disabled:e.s.stats.money<40?`Bạn mới có ${Cc(e.s.stats.money)} / 40.000đ.`:void 0,run:()=>(e.addStat(`money`,-40),e.completeObjective(`mon_no`,`du_tien`),e.completeObjective(`mon_no`,`tra_lam`),{speaker:`Lâm`,text:`Chà, chịu cày trả nợ thay bạn cơ đấy. Được, tiền trao cháo múc — đây, tờ giấy nợ tôi xé trước mặt cậu. Cậu không chịu làm cho tôi thì hơi tiếc, nhưng tôi tôn trọng người sòng phẳng.`,choices:[{label:`Xong chuyện.`,run:()=>null}]})}),t.push({label:`Hỏi dò tình hình trong khu`,run:()=>(e.dailyTalk(`lam`),{speaker:`Lâm`,text:e.s.flags.lam_sanctioned?`Nhờ "công" của mày mà tao bị cắt hết đặc quyền. Cứ đợi đấy.`:`Ở trại này biết điều thì ấm thân, thích làm anh hùng thì chỉ có thiệt.`,choices:[{label:`Rời đi`,run:()=>null}]})}),t.push({label:`Rời đi`,run:()=>null}),{speaker:`Lâm`,role:`Quan hệ: ${e.rel(`lam`)} · Buồng 4`,text:`Có việc gì mà tìm tới chỗ của anh thế, lính mới?`,choices:t}}function Sl(e){return{speaker:`Lâm`,text:`Thằng Huy nợ anh 40.000đ giấy trắng mực đen. Nhưng anh thấy chú mày sáng dạ, anh mở cho hai đường: Một là sáng mai vào xưởng, nhân lúc kho vật tư mở và thằng Tùng quay lưng + đèn camera xoay đi, lấy cho anh hộp mũi khoan — anh xóa nợ cho Huy, thưởng thêm chú 30.000đ. Hai là chồng đủ 40.000đ tiền mặt ra đây. Còn định đi mách lẻo quản giáo thì coi chừng cái chiếu nằm của chú đấy.`,choices:[{label:`[Lựa chọn 1] Nhận lời Lâm: lẻn vào kho lấy hộp mũi khoan (xoá nợ + 30.000đ)`,important:!0,risk:Ic.theft.risk+` Ngoài ra bạn sẽ bị ràng buộc với Lâm.`,run:()=>(e.chooseBranch(`mon_no`,`steal`),{speaker:`Lâm`,text:`Biết thời thế đấy. Nhớ kỹ: kho chỉ mở trong ca sáng (08:00–11:30). Đợi đèn camera quét sang hướng khác và cán bộ Tùng không nhìn về phía kho rồi hãy bước vào.`,choices:[{label:`Tôi nghe rõ rồi.`,run:()=>null}]})},{label:`[Lựa chọn 2] Từ chối làm bậy: "Tôi sẽ tự kiếm đủ 40.000đ trả thay Huy"`,important:!0,risk:`Mất 40.000đ tiền công vất vả kiếm được, nhưng giữ sạch hồ sơ và Huy mang ơn.`,run:()=>(e.chooseBranch(`mon_no`,`pay`),e.s.stats.money>=40&&e.completeObjective(`mon_no`,`du_tien`),{speaker:`Lâm`,text:`Ồ, thích đóng vai người tốt tự bỏ tiền túi? Cũng được thôi, miễn anh thu đủ 40.000đ. Kiếm đủ tiền thì mang qua đây.`,choices:[{label:`Đợi đấy.`,run:()=>null}]})},{label:`[Lựa chọn 3] Không thoả hiệp — tìm bằng chứng báo Quản giáo Lan`,important:!0,risk:`Lâm sẽ thù và tìm cách trả đũa. Nên lấy giấy nợ từ Huy trước khi báo để có bằng chứng.`,run:()=>(e.chooseBranch(`mon_no`,`report`),{speaker:`Lâm`,text:`Nhìn ánh mắt mày là biết định giở trò gì rồi. Cứ thử đi, xem không có bằng chứng thì quản giáo nghe ai.`,choices:[{label:`(Tìm Huy hỏi giấy nợ hoặc lên phòng quản giáo)`,run:()=>null}]})},{label:`[Lựa chọn 4] Lao vào đánh Lâm cảnh cáo ngay tại chỗ`,important:!0,risk:Ic.fight.risk,run:()=>(e.chooseBranch(`mon_no`,`fight`),e.recordViolation(`fight`,`lam-d${e.s.day}`,`Cán bộ Tùng và phạm nhân trong sân chứng kiến bạn lao vào đánh Lâm.`),e.finishQuest(`mon_no`,`done`,`Dùng bạo lực với Lâm`),e.startHearing({id:`fight_lam_d${e.s.day}`,title:`Gây thương tích trong sân trại`,charge:`Tấn công phạm nhân Lâm tại góc sân phía Nam.`,evidence:[`Biên bản của Cán bộ Tùng`,`Vết thương trên mặt Lâm`],baseDays:2,canExplain:!0,explainTag:`lam_threatened`}),null)}]}}function Cl(e,t){let n=[];e.qStatus(`mon_no`)===`active`&&(e.qBranch(`mon_no`)===`report`||e.has(`giay_no`))&&n.push({label:e.has(`giay_no`)?`Báo cáo việc Lâm cho vay nặng lãi & ép trộm đồ (nộp kèm giấy ghi nợ)`:`Báo cáo việc Lâm ép nợ Huy và dụ dỗ trộm kho (chưa có vật chứng)`,important:!0,risk:e.has(`giay_no`)?`Có vật chứng rõ ràng: Lâm bị xử lý kỷ luật, bạn +6 điểm cải tạo. Tuy nhiên Lâm có thể tìm cách trả đũa ngầm.`:`Chưa có vật chứng: Quản giáo chỉ ghi nhận nhắc nhở (+2 điểm cải tạo), Lâm vẫn biết bạn đi báo.`,run:()=>(e.qBranch(`mon_no`)||e.chooseBranch(`mon_no`,`report`),e.has(`giay_no`)&&(e.takeItem(`giay_no`),e.s.flags.report_with_note=!0,e.completeObjective(`mon_no`,`lay_giay`)),e.completeObjective(`mon_no`,`bao_lan`),{speaker:`Quản giáo Lan`,text:e.s.flags.report_with_note?`Tờ giấy nợ có chữ viết tay của Lâm đây rồi. Cậu làm rất đúng quy định khi không tự ý giải quyết bằng bạo lực hay nghe lời xúi giục. Tôi sẽ lập biên bản xử lý Lâm và hủy khoản nợ bất hợp pháp này. Nhưng mấy ngày tới hãy cẩn thận đồ đạc trong buồng, có bất thường thì báo ngay.`:`Tôi ghi nhận lời trình bày của cậu và sẽ gọi Lâm lên nhắc nhở. Tuy nhiên không có giấy tờ hay nhân chứng thì chưa thể kỷ luật ngay. Lần sau nếu có vật chứng hãy mang lên.`,choices:[{label:`Rõ, thưa cán bộ.`,run:()=>null}]})}),e.has(`hop_mui_khoan`)&&n.push({label:`Thưa cán bộ, tôi muốn tự giác giao nộp lại hộp mũi khoan của kho`,important:!0,run:()=>(e.takeItem(`hop_mui_khoan`),e.addStat(`suspicion`,-20),e.addReform(1,`Tự giác giao nộp vật tư`),e.qStatus(`mon_no`)===`active`&&e.qBranch(`mon_no`)===`steal`&&e.finishQuest(`mon_no`,`failed`,`Tự giác trả lại vật tư kho`),{speaker:`Quản giáo Lan`,text:`Biết dừng lại trước khi quá muộn là tốt. Tôi trả hộp mũi khoan về kho và không lập biên bản vi phạm.`,choices:[{label:`Cảm ơn cán bộ.`,run:()=>null}]})});let r=e.s.violations.filter(e=>e.status===`active`&&!e.appealed&&e.severity>0);return n.push({label:`Khiếu nại / giải trình hồ sơ vi phạm (${r.length} hồ sơ có thể giải trình)`,run:()=>(t(),null)}),n.push({label:`Hỏi về điều kiện xét giảm án`,run:()=>({speaker:`Quản giáo Lan`,text:`Cứ mỗi 5 ngày (ngày 5, 10, 15…) hội đồng xét hồ sơ một lần. Bốn yếu tố được cộng điểm: điểm cải tạo tăng trong kỳ, số ngày lao động đủ chỉ tiêu, điểm danh đúng giờ và mức cải tạo hiện tại. Mỗi vi phạm trong kỳ sẽ trừ trực tiếp vào điểm xét; có hành vi nghiêm trọng thì kỳ đó không được giảm. Xem chi tiết trong mục Hồ sơ (phím P).`,choices:[{label:`Tôi đã rõ.`,run:()=>null}]})}),n.push({label:`Chào cán bộ`,run:()=>null}),{speaker:`Quản giáo Lan`,role:`Quản giáo Khu A · Quan hệ: ${e.rel(`lan`)}`,text:`Phạm nhân Minh AP-0317. Có việc gì cần báo cáo hay giải trình thì trình bày ngắn gọn, rõ căn cứ.`,choices:n}}function wl(e,t){let n=[];return e.qStatus(`lop_nghe_dau`)===`active`&&(e.qObj(`lop_nghe_dau`,`den_lop`)?e.qObj(`lop_nghe_dau`,`thao_tac`)&&!e.qObj(`lop_nghe_dau`,`nhan_xet`)&&n.push({label:`Thưa Thầy Phúc, em đã hoàn thành xong bài nối mạch an toàn rồi ạ.`,important:!0,run:()=>(e.completeObjective(`lop_nghe_dau`,`nhan_xet`),{speaker:`Thầy Phúc`,text:`Khá lắm! Nối đúng trình tự, thao tác dứt khoát và cẩn thận. Đây là Chứng chỉ nghề cơ điện bậc sơ cấp của em. Giữ lấy nó làm nền tảng trong hồ sơ xét giảm án. Buổi tối em có thể qua giá sách thư viện mượn thêm sách pháp luật và kỹ thuật mà đọc.`,choices:[{label:`Em cảm ơn thầy nhiều lắm!`,run:()=>null}]})}):n.push({label:`Em chào Thầy Phúc. Em đến đăng ký học nghề ca chiều ạ.`,important:!0,run:()=>(e.completeObjective(`lop_nghe_dau`,`den_lop`),{speaker:`Thầy Phúc`,text:`Tốt lắm Minh. Vào đây thì ngoài việc chấp hành nội quy, học một cái nghề là tấm vé để sau này ra đời tự nuôi sống bản thân, không sa ngã nữa. Thầy có bài tập nối mạch điện an toàn tại bàn thực hành kia — qua đó kiểm tra khả năng quan sát và ghi nhớ màu dây cho thầy xem.`,choices:[{label:`Bắt đầu bài kiểm tra học nghề tại bàn thực hành`,run:()=>(t?.(),null)},{label:`Dạ, để em chuẩn bị một chút.`,run:()=>null}]})})),n.push({label:`Thực hành nối mạch điện (Mini-game học nghề)`,run:()=>(t?.(),null)}),n.push({label:`Hỏi thầy về các quy định giảm án cho người học nghề`,run:()=>({speaker:`Thầy Phúc`,text:`Mỗi kỳ xét 5 ngày, nếu em vừa hoàn thành định mức lao động, vừa có chứng chỉ học nghề và không vi phạm kỷ luật, hội đồng sẽ đánh giá em ở mức xuất sắc (+1.5 đến +3 ngày giảm). Nghề nghiệp là cái gốc của sự hướng thiện.`,choices:[{label:`Em đã hiểu.`,run:()=>null}]})}),n.push({label:`Trò chuyện hỏi thăm Thầy Phúc`,run:()=>(e.dailyTalk(`phuc`),{speaker:`Thầy Phúc`,text:`Thầy dạy ở trại giam này hơn 15 năm rồi. Người ra trại thành đạt quay lại cảm ơn thầy cũng có, người tái phạm quay lại cũng có. Tương lai ở trong tay các em cả đấy.`,choices:[{label:`Vâng ạ.`,run:()=>null}]})}),n.push({label:`Chào thầy em về`,run:()=>null}),{speaker:`Thầy Phúc`,role:`Cán bộ dạy nghề & Thư viện · Quan hệ: ${e.rel(`phuc`)}`,text:`Minh hả? Đang giờ lên lớp hoặc đọc sách, có việc gì cần thầy hướng dẫn không em?`,choices:n}}function Tl(e){let t=[];e.qStatus(`nghi_an_thuoc`)===`active`&&(e.qObj(`nghi_an_thuoc`,`hoi_an`)?e.has(`chai_thuoc_hen`)&&t.push({label:`Y sĩ An ơi! Em tìm thấy lọ thuốc hen của Chú Bảy bị vứt ở góc sau xưởng rồi!`,important:!0,run:()=>(e.takeItem(`chai_thuoc_hen`),e.completeObjective(`nghi_an_thuoc`,`tra_thuoc`),{speaker:`Y sĩ An`,text:`May quá! Đúng là lọ thuốc của chú Bảy rồi! Cảm ơn em rất nhiều Minh ơi, chị cho chú xịt thuốc ngay đây. Lọ thuốc bị vứt ở góc xưởng… chắc chắn có liên quan đến đám người hay lén lút ở đó. Chị sẽ ghi nhận việc làm tốt này của em vào sổ theo dõi y tế!`,choices:[{label:`Cứu được Chú Bảy là may rồi chị.`,run:()=>null}]})}):t.push({label:`Chào Y sĩ An, nghe nói phòng y tế đang có chuyện gấp?`,important:!0,run:()=>(e.completeObjective(`nghi_an_thuoc`,`hoi_an`),{speaker:`Y sĩ An`,text:`Minh đấy à? Chú Bảy ở buồng 3 đang lên cơn hen dữ dội, nhưng lọ thuốc hen xịt đặc trị cấp phát riêng cho chú trong tủ bỗng dưng biến mất sáng nay. Thuốc này có thành phần an thần nhẹ nên có đứa xấu trong trại lén tuồn ra ngoài hoặc cất giấu. Em cùng buồng chú Bảy, mau đi hỏi chú xem có nhớ ai va quẹt sáng nay không!`,choices:[{label:`Để em đi hỏi Chú Bảy ngay!`,run:()=>null}]})})),e.qStatus(`phu_y_te`)===`locked`&&t.push({label:`Chị có cần người phụ dọn dẹp tủ thuốc không ạ?`,run:()=>({speaker:`Y sĩ An`,text:`Được thế thì tốt quá. Chiều nay thuốc men chuyển về hơi lộn xộn. Em qua góc tủ thuốc y tế phân loại bông băng và cơ số thuốc cảm giúp chị nhé. Xong việc chị gửi em một vỉ thuốc cảm dự phòng.`,choices:[{label:`Nhận giúp Y sĩ An phân loại tủ thuốc`,run:()=>(e.startQuest(`phu_y_te`),{speaker:`Y sĩ An`,text:`Cảm ơn em! Tủ thuốc ở góc phòng bên kia kìa.`,choices:[{label:`Vâng ạ.`,run:()=>null}]})},{label:`Lát nữa em quay lại.`,run:()=>null}]})}),t.push({label:`Khám sức khỏe / Xin lời khuyên y tế`,run:()=>{let t=e.s.stats,n=`Sức khỏe em hiện khá ổn định. Cứ ăn uống đúng bữa và ngủ đủ giấc nhé.`;return t.health<50?n=`Sức khỏe em đang sút giảm nghiêm trọng! Đừng làm việc quá sức, hãy ăn đủ khẩu phần và dùng thuốc khi cần.`:t.stress>60&&(n=`Mức độ căng thẳng của em khá cao. Chiều nên ra sân tập xà hoặc tối qua thư viện đọc sách thư giãn.`),{speaker:`Y sĩ An`,text:n,choices:[{label:`Em cảm ơn y sĩ.`,run:()=>null}]}}}),t.push({label:`Nói chuyện hỏi thăm Y sĩ An`,run:()=>(e.dailyTalk(`an`),{speaker:`Y sĩ An`,text:`Làm y tế trong trại giam này nhiều lúc áp lực lắm, nhưng thấy các phạm nhân bình phục và biết quý trọng sức khỏe là chị thấy an lòng.`,choices:[{label:`Vâng chị.`,run:()=>null}]})});let n=_l(`an`,`tra_da`,`chai trà đá`,e,`Cảm ơn em nhé, trời nắng nực được ngụm trà mát thật.`);return n&&t.push(n),t.push({label:`Chào Y sĩ`,run:()=>null}),{speaker:`Y sĩ An`,role:`Y sĩ Trại giam An Phú · Quan hệ: ${e.rel(`an`)}`,text:`Minh đấy à? Trong người thấy thế nào, có chỗ nào không khỏe cần khám không?`,choices:t}}function El(e){let t=[];e.qStatus(`phong_tham_gap`)===`active`&&t.push({label:`Cầm ống nghe điện thoại nội bộ nói chuyện với Chị Mai`,important:!0,run:()=>(e.completeObjective(`phong_tham_gap`,`gap_chi`),{speaker:`Chị Mai`,role:`Phòng thăm gặp · Vách kính số 1`,text:`Minh… em gầy đi nhiều quá. Ở trong này cán bộ đối xử với em có tốt không? Cơm nước thế nào em? Chị ở ngoài quê một mình lo việc nhà… chỉ mong từng ngày em cải tạo ngoan để sớm về với chị.`,choices:[{label:`Chân thành: "Em vẫn khỏe chị à. Em đang học nghề với Thầy Phúc, chị ở ngoài ráng giữ gìn sức khỏe, em hứa sẽ về sớm."`,important:!0,run:()=>(e.completeObjective(`phong_tham_gap`,`thanh_that`),e.completeObjective(`phong_tham_gap`,`nhan_tien`),e.finishQuest(`phong_tham_gap`,`done`),{speaker:`Chị Mai`,text:`Nghe em nói thế chị mừng phát khóc… Chị có gửi 25.000đ vào sổ lưu ký căng tin cho em bồi dưỡng thêm. Ráng lên em nhé, cả nhà chỉ chờ ngày em trở về.`,choices:[{label:`Em cảm ơn chị… Em sẽ không làm chị thất vọng đâu.`,run:()=>null}]})},{label:`Kín tiếng: "Trong này phức tạp lắm chị, nhưng em tự xoay sở được, chị đừng lo."`,run:()=>(e.completeObjective(`phong_tham_gap`,`thanh_that`),e.completeObjective(`phong_tham_gap`,`nhan_tien`),e.finishQuest(`phong_tham_gap`,`done`),{speaker:`Chị Mai`,text:`Em đừng làm liều chuyện gì đấy nhé! Chị gửi chút tiền vào sổ lưu ký, nhớ mua đồ ăn tẩm bổ. Giữ mình nha em.`,choices:[{label:`Vâng chị.`,run:()=>null}]})}]})}),t.push({label:`Hỏi thăm tình hình gia đình ở quê`,run:()=>(e.dailyTalk(`mai`),{speaker:`Chị Mai`,text:`Ở quê mùa màng năm nay cũng đỡ hơn rồi. Hàng xóm láng giềng ai cũng hỏi thăm em. Nhớ đừng dính vào ba cái ẩu đả trong trại nghe em.`,choices:[{label:`Em nhớ rồi chị.`,run:()=>null}]})});let n=_l(`mai`,`qua_luu_niem`,`khung ảnh gỗ tự làm`,e,`Trời ơi, em tự làm ở xưởng khéo tay quá… Chị sẽ đem về để đầu giường đợi ngày em về.`);return n&&t.push(n),t.push({label:`Tạm biệt chị`,run:()=>null}),{speaker:`Chị Mai`,role:`Chị gái · Quan hệ: ${e.rel(`mai`)}`,text:`Minh ơi, thời gian thăm gặp có hạn thôi em, có chuyện gì cần dặn dò chị không?`,choices:t}}function Dl(e){return{speaker:`Cán bộ Tùng`,role:`Cán bộ trật tự & xưởng`,text:`Giờ lao động nhớ bấm bảng chấm công trước khi ngồi vào bàn. Tuyệt đối không tự ý bước qua vạch đỏ vào kho vật tư phía trong xưởng — camera và tôi đều giám sát.`,choices:[{label:`Rõ, thưa cán bộ.`,run:()=>null}]}}function Ol(e,t){let n={tu:{name:`Anh Tư (Buồng 1)`,line:`Làm ở xưởng đừng bấm vội. Canh đúng vạch xanh trên thanh căn lực thì sản phẩm đạt chất lượng cao, tiền công được tới 16.000đ.`},son:{name:`Sơn (Buồng 2)`,line:`Giờ tự do ra xà đơn tập một hiệp là người nhẹ hẳn, hôm sau làm xưởng đỡ tốn sức hơn.`},khai:{name:`Khải (Buồng 4)`,line:t.rel(`lam`)<0?`Anh Lâm đang để ý mày đấy, đi đứng cẩn thận.`:`Có chuyện gì muốn bàn thì tìm anh Lâm ở góc sau xưởng giờ nghỉ chiều.`}}[e]??{name:e,line:`...`};return{speaker:n.name,text:n.line,choices:[{label:`Đóng`,run:()=>null}]}}var kl={};for(let[e,t]of ll)(kl[e]??=[]).push(t),(kl[t]??=[]).push(e);function Al(e,t){let[n,r]=cl[e],[i,a]=cl[t];return Math.hypot(n-i,r-a)}function jl(e,t,n){let r=``,i=1/0;for(let a of Object.keys(cl)){if(n&&!n(a))continue;let[o,s]=cl[a],c=(o-e)**2+(s-t)**2;c<i&&(i=c,r=a)}return r}function Ml(e,t){if(e===t)return[t];let n=new Set([e]),r={},i={[e]:0},a={[e]:Al(e,t)};for(;n.size;){let e=``,o=1/0;for(let t of n)(a[t]??1/0)<o&&(o=a[t],e=t);if(e===t){let t=[e];for(;r[e];)e=r[e],t.unshift(e);return t}n.delete(e);for(let o of kl[e]??[]){let s=i[e]+Al(e,o);s<(i[o]??1/0)&&(r[o]=e,i[o]=s,a[o]=s+Al(o,t),n.add(o))}}return[t]}var Nl=class{constructor(){this.boxes=[],this.sightBlockers=[],this.dynamic=()=>[]}move(e,t,n,r,i){let a=e+n,o=t+r,s=this.boxes.concat(this.dynamic());for(let e=0;e<3;e++){let e=!1;for(let t of s){if(a<t.x1-i||a>t.x2+i||o<t.z1-i||o>t.z2+i)continue;let n=Math.max(t.x1,Math.min(a,t.x2)),r=Math.max(t.z1,Math.min(o,t.z2)),s=a-n,c=o-r,l=s*s+c*c;if(!(l>=i*i)){if(l<1e-8){let e=[a-t.x1,t.x2-a,o-t.z1,t.z2-o],n=Math.min(...e);n===e[0]?a=t.x1-i:n===e[1]?a=t.x2+i:o=n===e[2]?t.z1-i:t.z2+i}else{let e=Math.sqrt(l),t=i-e;s/=e,c/=e,a+=s*t,o+=c*t}e=!0}}if(!e)break}return[a,o]}blocked(e,t,n,r){for(let i of this.sightBlockers)if(Pl(e,t,n,r,i))return!0;return!1}};function Pl(e,t,n,r,i){let a=0,o=1,s=n-e,c=r-t,l=[-s,s,-c,c],u=[e-i.x1,i.x2-e,t-i.z1,i.z2-t];for(let e=0;e<4;e++)if(Math.abs(l[e])<1e-9){if(u[e]<0)return!1}else{let t=u[e]/l[e];if(l[e]<0){if(t>o)return!1;t>a&&(a=t)}else{if(t<a)return!1;t<o&&(o=t)}}return a<=o}function Fl(t,n,r=8){let i=document.createElement(`canvas`);i.width=128,i.height=128;let a=i.getContext(`2d`),o=128/r;for(let e=0;e<r;e++)for(let i=0;i<r;i++)a.fillStyle=(i+e)%2==0?t:n,a.fillRect(i*o,e*o,o,o);let s=new Os(i);return s.wrapS=s.wrapT=e,s.repeat.set(8,8),s}function Il(e,t=``,n=`#1e293b`,r=`#f8fafc`){let i=document.createElement(`canvas`);i.width=256,i.height=128;let a=i.getContext(`2d`);return a.fillStyle=n,a.fillRect(0,0,256,128),a.strokeStyle=`#f59e0b`,a.lineWidth=6,a.strokeRect(6,6,244,116),a.fillStyle=r,a.font=`bold 28px system-ui, sans-serif`,a.textAlign=`center`,a.fillText(e,128,t?54:72),t&&(a.font=`20px system-ui, sans-serif`,a.fillStyle=`#fde68a`,a.fillText(t,128,92)),new Os(i)}var Ll=class{constructor(){this.scene=new cs,this.collision=new Nl,this.cameraObstacles=[],this.sun=new ec(16774358,1.8),this.hemi=new Js(13358561,4674921,.85),this.doorMeshes={},this.camAngle=0,this.camSweep=0,this.scene.background=new G(10405374),this.scene.fog=new ss(10405374,.011),this.sun.position.set(-22,34,18),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(1024,1024);let e=this.sun.shadow.camera;e.left=-35,e.right=35,e.top=35,e.bottom=-35,e.near=5,e.far=90,this.scene.add(this.sun,this.hemi),this.buildGround(),this.buildWalls(),this.buildDoors(),this.buildProps(),this.buildSignsAndMarkers(),this.buildSecurityCam()}buildGround(){let e=new X({color:6583435,roughness:.95}),t=new K(new Xr(64,60),e);t.rotation.x=-Math.PI/2,t.position.set(0,-.02,-6),t.receiveShadow=!0,this.scene.add(t);let n=Fl(`#cbd5e1`,`#94a3b8`),r=Fl(`#e2e8f0`,`#cbd5e1`),i={tile:new X({map:n,roughness:.8}),tile2:new X({map:r,roughness:.75}),concrete:new X({color:4937059,roughness:.9}),wood:new X({color:9132587,roughness:.75})};for(let e of Object.keys(Xc)){let t=Xc[e],n=new K(new Xr(t.x2-t.x1,t.z2-t.z1),i[t.floor]);n.rotation.x=-Math.PI/2,n.position.set((t.x1+t.x2)/2,.005,(t.z1+t.z2)/2),n.receiveShadow=!0,this.scene.add(n)}let a=el.find(e=>e.id===`rollcall`),o=new K(new Xr(a.x2-a.x1,a.z2-a.z1),new Yn({color:16436245,transparent:!0,opacity:.35}));o.rotation.x=-Math.PI/2,o.position.set((a.x1+a.x2)/2,.015,(a.z1+a.z2)/2),this.scene.add(o);let s=new K(new Xr(.25,1.6),new Yn({color:15680580}));s.rotation.x=-Math.PI/2,s.position.set(21.75,.02,-7),this.scene.add(s)}buildWalls(){let e=new X({color:14078916,roughness:.88}),t=new X({color:4873550,roughness:.9}),n=new X({color:5395035,roughness:.95}),r=new X({color:3359061,metalness:.6,roughness:.4});for(let i of Qc){let a=i.x2-i.x1,o=i.z2-i.z1,s=(i.x1+i.x2)/2,c=(i.z1+i.z2)/2;if(this.collision.boxes.push({x1:i.x1,z1:i.z1,x2:i.x2,z2:i.z2}),i.kind===`bars`)this.buildBars(i,r);else if(this.collision.sightBlockers.push({x1:i.x1,z1:i.z1,x2:i.x2,z2:i.z2}),i.kind===`perimeter`){let e=new K(new q(a,i.h,o),n);e.position.set(s,i.h/2,c),e.castShadow=!0,e.receiveShadow=!0,this.scene.add(e),this.cameraObstacles.push(e)}else{let n=Math.min(1.2,i.h*.35),r=i.h-n,l=new K(new q(a,n,o),t);l.position.set(s,n/2,c);let u=new K(new q(a,r,o),e);u.position.set(s,n+r/2,c),l.castShadow=u.castShadow=!0,l.receiveShadow=u.receiveShadow=!0,this.scene.add(l,u),this.cameraObstacles.push(l,u)}}let i=1.1,a=3.05;for(let t of $c){let n=new K(new q(Math.max(t.box.x2-t.box.x1,.3),i,Math.max(t.box.z2-t.box.z1,.3)),e);n.position.set((t.box.x1+t.box.x2)/2,a,(t.box.z1+t.box.z2)/2),n.castShadow=n.receiveShadow=!0,this.scene.add(n),this.cameraObstacles.push(n)}for(let[t,n]of[[-26.05,-24.45],[-20.55,-18.95],[-15.05,-13.45],[-7.95,-6.35]]){let r=new K(new q(n-t,i,.2),e);r.position.set((t+n)/2,a,-25),r.castShadow=r.receiveShadow=!0,this.scene.add(r),this.cameraObstacles.push(r)}let o=new X({color:2042167,roughness:.95,side:2});for(let e of Object.values(Xc)){let t=new K(new Xr(e.x2-e.x1,e.z2-e.z1),o);t.rotation.x=Math.PI/2,t.position.set((e.x1+e.x2)/2,3.6,(e.z1+e.z2)/2),t.receiveShadow=!0,this.scene.add(t),this.cameraObstacles.push(t)}}buildBars(e,t){let n=new Yo,r=e.x2-e.x1,i=Math.max(2,Math.floor(r/.22));for(let a=0;a<=i;a++){let o=e.x1+r*a/i,s=new K(new As(.025,.025,e.h,6),t);s.position.set(o,e.h/2,(e.z1+e.z2)/2),n.add(s)}let a=new K(new q(r,.06,.08),t);a.position.set((e.x1+e.x2)/2,2.2,(e.z1+e.z2)/2),n.add(a),this.scene.add(n)}buildDoors(){for(let e of $c){let t=e.box.x2-e.box.x1,n=e.box.z2-e.box.z1,r=new X({color:e.area===`storage`?10033947:3883602,roughness:.6,metalness:.3}),i=new K(new q(t,2.5,n),r);i.position.set((e.box.x1+e.box.x2)/2,1.25,(e.box.z1+e.box.z2)/2),i.castShadow=!0,this.scene.add(i),this.doorMeshes[e.id]=i}}updateDoors(e){let t=[];for(let n of $c){let r=e(n.area),i=this.doorMeshes[n.id];i&&(i.visible=!r),r||t.push(n.box)}return t}buildProps(){for(let e of al){e.collide&&this.collision.boxes.push(ol(e));let t=this.makePropMesh(e);t.position.set(e.x,0,e.z),e.rot&&(t.rotation.y=e.rot),this.scene.add(t)}this.bedsheetMesh=new K(new q(.65,.14,.55),new X({color:3900150,roughness:.8})),this.bedsheetMesh.position.set(-15.9,.52,-29.2),this.scene.add(this.bedsheetMesh),this.drillMesh=new K(new q(.38,.22,.28),new X({color:15680580,roughness:.5})),this.drillMesh.position.set(27.1,1.05,-5.2),this.scene.add(this.drillMesh);let e=new Yo,t=new X({color:16707722,roughness:.8}),n=new K(new q(.14,.04,.28),t),r=new K(new q(.14,.04,.28),t);n.position.set(-.09,.03,0),r.position.set(.09,.03,.04),r.rotation.y=.25,e.add(n,r),e.position.set(-25.6,0,8.6),this.sandalsMesh=e,this.scene.add(e),this.asthmaBottleMesh=new K(new As(.06,.06,.22,8),new X({color:165063,roughness:.5})),this.asthmaBottleMesh.position.set(22.5,.11,13),this.asthmaBottleMesh.rotation.z=Math.PI/3,this.scene.add(this.asthmaBottleMesh)}makePropMesh(e){let t=new Yo,n=new X({color:8145438,roughness:.8}),r=new X({color:4674921,metalness:.5,roughness:.5}),i=new X({color:9741240,roughness:.9}),a=new X({color:3043136,roughness:.85});switch(e.kind){case`bunk`:{let i=new K(new q(e.w,.1,e.d),n);i.position.y=.42;let a=new K(new q(e.w,.1,e.d),n);a.position.y=1.35,t.add(i,a);for(let n of[-e.w/2+.05,e.w/2-.05])for(let i of[-e.d/2+.05,e.d/2-.05]){let e=new K(new As(.035,.035,1.75,6),r);e.position.set(n,.88,i),t.add(e)}break}case`table`:case`workbench`:case`desk`:{let i=e.kind===`workbench`?r:n,a=new K(new q(e.w,.1,e.d),i);a.position.y=.82,a.castShadow=!0,t.add(a);let o=new K(new q(e.w*.85,.78,e.d*.75),e.kind===`desk`?n:r);if(o.position.y=.39,t.add(o),e.kind===`workbench`){let e=new K(new q(.45,.22,.3),new X({color:14251782}));e.position.set(-.5,.96,0),t.add(e)}break}case`counter`:case`canteen`:{let n=new K(new q(e.w,1.05,e.d),new X({color:e.kind===`canteen`?9584654:6583435,roughness:.7}));n.position.y=.525,t.add(n);break}case`bench`:{let n=new K(new q(e.w,.1,e.d),i);n.position.y=.45,t.add(n);break}case`shelf`:case`cabinet`:{let n=new K(new q(e.w,1.9,e.d),r);n.position.y=.95,n.castShadow=!0,t.add(n);break}case`board`:{let n=Il(e.label??`THÔNG BÁO`,`Nhấn E để xem`),r=new Yo,i=new K(new q(e.w,1,.04),new X({color:7877903,roughness:.8}));i.position.y=1.6;let a=new K(new Xr(e.w-.06,.88),new Yn({map:n,side:0}));a.position.set(0,1.6,.025),r.add(i,a),t.add(r);break}case`pullup`:{let n=new K(new As(.05,.05,2.3,8),r),i=n.clone();n.position.set(-e.w/2+.1,1.15,0),i.position.set(e.w/2-.1,1.15,0);let a=new K(new As(.035,.035,e.w,8),r);a.rotation.z=Math.PI/2,a.position.y=2.25,t.add(n,i,a);break}case`stonetable`:{let e=new K(new As(.65,.65,.1,12),i);e.position.y=.72;let n=new K(new As(.22,.28,.7,10),i);n.position.y=.35,t.add(e,n);break}case`tree`:{let e=new K(new As(.22,.3,2.2,8),n);e.position.y=1.1;let r=new K(new Ms(1.45,10,8),a);r.position.y=2.9,r.castShadow=!0,t.add(e,r);break}case`tower`:{let n=new K(new q(e.w,6.5,e.d),i);n.position.y=3.25;let r=new K(new js(1.9,1.2,4),new X({color:8330525}));r.position.y=7.1,r.rotation.y=Math.PI/4,t.add(n,r);break}default:{let n=new K(new q(e.w,1,e.d),i);n.position.y=.5,t.add(n)}}return t}buildSignsAndMarkers(){let e=[{title:`KHU BUỒNG GIAM A`,sub:`Giờ về buồng: 21:00`,x:-17,y:3.05,z:-17.75,ry:0},{title:`NHÀ ĂN & CĂN TIN`,sub:`07:00 · 11:30 · 16:30`,x:6.25,y:3.05,z:-17.75,ry:0},{title:`XƯỞNG LAO ĐỘNG`,sub:`Ca sáng 08:00–11:30`,x:11.75,y:3.05,z:-2.75,ry:-Math.PI/2},{title:`KHO VẬT TƯ — CẤM VÀO`,sub:`Khu vực có camera`,x:21.75,y:3.05,z:-7,ry:-Math.PI/2},{title:`PHÒNG QUẢN GIÁO`,sub:`Tiếp nhận 07:00–17:00`,x:-4,y:3.05,z:9.75,ry:Math.PI},{title:`PHÒNG Y TẾ`,sub:`07:30–11:30 · 13:30–17:00`,x:22.25,y:3.05,z:-17.75,ry:0},{title:`LỚP HỌC NGHỀ & THƯ VIỆN`,sub:`14:00–16:30 · 19:00–21:00`,x:-20.75,y:3.05,z:9.75,ry:Math.PI},{title:`PHÒNG THĂM GẶP`,sub:`Tiếp đón người nhà`,x:-19.75,y:3.05,z:-10.25,ry:Math.PI/2},{title:`KHU KỶ LUẬT`,sub:`Khu biệt giam`,x:10,y:3.05,z:9.75,ry:Math.PI}];for(let t of e){let e=new K(new Xr(1.3,.42),new Yn({map:Il(t.title,t.sub),side:2}));e.position.set(t.x,t.y,t.z),t.ry&&(e.rotation.y=t.ry),this.scene.add(e)}for(let e=0;e<4;e++){let t=-25.25+e*5.5,n=new K(new Xr(.95,.38),new Yn({map:Il(`BUỒNG ${e+1}`,e===2?`Minh · Bảy · Huy`:``),side:2}));n.position.set(t,3.05,-24.88),this.scene.add(n)}}buildSecurityCam(){let e=new K(new q(.25,.18,.35),new X({color:1120295}));e.position.set(22.4,2.9,-4.3),this.scene.add(e);let t=new ks(5.5,24,-.42,.84);t.rotateX(-Math.PI/2);let n=new Yn({color:15680580,transparent:!0,opacity:.26,side:2});this.camCone=new K(t,n),this.camCone.position.set(22.4,.03,-4.3),this.scene.add(this.camCone)}update(e,t,n,r,i,a=!1){this.camSweep+=e*.85,this.camAngle=-1.1+Math.sin(this.camSweep)*.75,this.camCone.rotation.y=this.camAngle,this.bedsheetMesh.visible=!n,this.drillMesh.visible=!r,this.sandalsMesh.visible=!i,this.asthmaBottleMesh.visible=!a;let o=t/60,s=10405374,c=1.7;o<7?(s=16628340,c=1.1):o<16.5?(s=9684477,c=1.85):o<19?(s=16486972,c=1.15):(s=1976635,c=.35),this.scene.background.setHex(s),this.scene.fog.color.setHex(s),this.sun.intensity=c;let l=(o-6)/16*Math.PI;this.sun.position.set(-Math.cos(l)*28,Math.max(8,Math.sin(l)*34),16)}seenByStorageCam(e,t){if(e<21.7||e>28||t<-12||t>-4)return!1;let n=e-22.4,r=t- -4.3,i=Math.hypot(n,r);if(i>5.5)return!1;let a=Math.cos(this.camAngle),o=-Math.sin(this.camAngle);return(n*a+r*o)/Math.max(1e-5,i)>=Math.cos(.42)}setQuality(e,t){let n=window.devicePixelRatio||1;e===`low`?(t.setPixelRatio(1),t.shadowMap.enabled=!1):e===`medium`?(t.setPixelRatio(Math.min(n,1.5)),t.shadowMap.enabled=!0):(t.setPixelRatio(Math.min(n,2)),t.shadowMap.enabled=!0),this.sun.castShadow=e!==`low`}};function Rl(t,n){let r=document.createElement(`canvas`);r.width=64,r.height=64;let i=r.getContext(`2d`);for(let e=0;e<8;e++)i.fillStyle=e%2==0?t:n,i.fillRect(0,e*8,64,8);let a=new Os(r);return a.wrapS=a.wrapT=e,a}var zl=null,Bl=class{constructor(e,t){this.root=new Yo,this.body=new Yo,this.head=new Yo,this.armL=new Yo,this.armR=new Yo,this.legL=new Yo,this.legR=new Yo,this.pose=`stand`,this.phase=Math.random()*10,this.labelSprite=null,this.root.scale.set(e.build,e.height,e.build),this.root.add(this.body);let n=new X({color:e.skin,roughness:.75}),r=new X({color:1976635,roughness:.8}),i=new X({color:e.accent,roughness:.65}),a,o;e.uniform===`inmate`?(zl??=Rl(`#e2e8f0`,`#1e3a5f`),a=new X({map:zl,roughness:.8}),o=new X({color:1981023,roughness:.85})):(a=new X({color:3104317,roughness:.7}),o=new X({color:2047787,roughness:.8}));let s=new K(new As(.21,.19,.56,12),a);s.position.y=1.02,s.castShadow=!0,this.body.add(s);let c=new K(new q(.36,.08,.28),i);c.position.set(0,1.26,.02),this.body.add(c);let l=new K(new q(.11,.05,.02),i);l.position.set(.09,1.12,.2),this.body.add(l);let u=new K(new As(.19,.19,.16,10),o);u.position.y=.68,this.body.add(u),this.head.position.set(0,1.46,0),this.body.add(this.head);let d=new K(new Ms(.17,14,12),n);d.scale.set(.95,1.06,.98),d.castShadow=!0,this.head.add(d);let f=new Ms(.022,8,8),p=new K(f,r),m=new K(f,r);p.position.set(-.055,.02,.15),m.position.set(.055,.02,.15),this.head.add(p,m);let h=new X({color:e.hair,roughness:.85});if(e.hairStyle!==`bald`){let t=new K(new Ms(.178,12,10,0,Math.PI*2,0,Math.PI*.58),h);if(t.position.y=.02,t.rotation.x=-.15,this.head.add(t),e.hairStyle===`bun`){let e=new K(new Ms(.065,8,8),h);e.position.set(0,.03,-.17),this.head.add(e)}}if(e.cap){let e=new K(new As(.18,.18,.09,12),a);e.position.y=.13;let t=new K(new q(.24,.02,.14),r);t.position.set(0,.09,.15),this.head.add(e,t)}if(e.glasses){let e=new K(new q(.22,.045,.02),r);e.position.set(0,.02,.165),this.head.add(e)}let g=()=>{let e=new Yo,t=new K(new As(.06,.055,.28,8),a);t.position.y=-.14;let r=new K(new As(.05,.045,.24,8),n);r.position.y=-.38;let i=new K(new Ms(.05,8,8),n);return i.position.y=-.51,e.add(t,r,i),e};this.armL=g(),this.armR=g(),this.armL.position.set(-.26,1.24,0),this.armR.position.set(.26,1.24,0),this.body.add(this.armL,this.armR);let _=new X({color:e.uniform===`officer`?1120295:4674921,roughness:.85}),v=()=>{let e=new Yo,t=new K(new As(.075,.06,.56,8),o);t.position.y=-.28,t.castShadow=!0;let n=new K(new q(.11,.08,.22),_);return n.position.set(0,-.58,.04),e.add(t,n),e};this.legL=v(),this.legR=v(),this.legL.position.set(-.1,.62,0),this.legR.position.set(.1,.62,0),this.body.add(this.legL,this.legR),t&&(this.labelSprite=Vl(t,e.accent),this.labelSprite.position.set(0,1.92,0),this.root.add(this.labelSprite))}update(e,t=0){this.phase+=e*(this.pose===`walk`?Math.max(4,t*2.2):2.5);let n=this.phase;if(this.body.position.y=0,this.head.rotation.set(0,0,0),this.armL.rotation.set(0,0,.06),this.armR.rotation.set(0,0,-.06),this.legL.rotation.set(0,0,0),this.legR.rotation.set(0,0,0),this.pose===`walk`){let e=Math.sin(n)*.55;this.legL.rotation.x=e,this.legR.rotation.x=-e,this.armL.rotation.x=-e*.7,this.armR.rotation.x=e*.7,this.body.position.y=Math.abs(Math.cos(n))*.03}else this.pose===`sit`?(this.body.position.y=-.26,this.legL.rotation.x=-1.35,this.legR.rotation.x=-1.35,this.armL.rotation.x=-.4,this.armR.rotation.x=-.4,this.head.rotation.y=Math.sin(n*.5)*.1):this.pose===`work`?(this.armL.rotation.x=-.9+Math.sin(n*2.2)*.25,this.armR.rotation.x=-.9-Math.sin(n*2.2)*.25,this.head.rotation.x=.28):this.pose===`talk`?(this.armL.rotation.x=-.35+Math.sin(n*1.8)*.2,this.armR.rotation.x=-.25-Math.cos(n*1.5)*.18,this.head.rotation.y=Math.sin(n*1.1)*.12):(this.body.position.y=Math.sin(n)*.01,this.head.rotation.y=Math.sin(n*.4)*.08)}};function Vl(e,t){let n=document.createElement(`canvas`);n.width=256,n.height=64;let r=n.getContext(`2d`);r.fillStyle=`rgba(15, 23, 42, 0.82)`,r.beginPath(),r.roundRect(8,10,240,44,12),r.fill(),r.strokeStyle=`#`+t.toString(16).padStart(6,`0`),r.lineWidth=3,r.stroke(),r.fillStyle=`#f8fafc`,r.font=`bold 24px system-ui, sans-serif`,r.textAlign=`center`,r.textBaseline=`middle`,r.fillText(e,128,33);let i=new Es(new fs({map:new Os(n),depthTest:!1,transparent:!0}));return i.scale.set(1.15,.29,1),i}var Hl=class{constructor(e){this.x=0,this.z=0,this.rot=0,this.speed=3.2,this.state=`activity`,this.activity=``,this.path=[],this.slot=null,this.patrolIdx=0,this.patrolWait=0,this.def=ml[e],this.rig=new Bl(this.def.look,this.def.name)}snapToSchedule(e){let t=hl(this.def,e);this.slot=t;let n=t.pos??cl[t.node];this.x=n[0],this.z=n[1],this.rot=t.rot??0,this.path=[],this.activity=t.activity,this.state=t.patrol?`patrol`:`activity`,this.rig.pose=t.pose,this.syncMesh()}planTo(e,t){let n=Ml(jl(this.x,this.z),e);for(this.path=n.map(e=>[...cl[e]]),t&&this.path.push([t[0],t[1]]);this.path.length>1&&Math.hypot(this.path[0][0]-this.x,this.path[0][1]-this.z)<.6;)this.path.shift()}update(e,t){if(this.state===`talk`){this.rig.pose=`talk`,this.rig.update(e,0),this.syncMesh();return}let n=hl(this.def,t);if(n!==this.slot&&(this.slot=n,this.activity=n.activity,this.patrolIdx=0,this.planTo(n.node,n.pos),this.state=`walk`),this.path.length>0){let[t,n]=this.path[0],r=t-this.x,i=n-this.z,a=Math.hypot(r,i),o=this.speed*e;a<=Math.max(.12,o)?(this.x=t,this.z=n,this.path.shift()):(this.x+=r/a*o,this.z+=i/a*o,this.rot=Math.atan2(r,i)),this.rig.pose=`walk`,this.rig.update(e,this.speed)}else n.patrol&&n.patrol.length>0?(this.state=`patrol`,this.patrolWait-=e,this.patrolWait<=0?(this.patrolIdx=(this.patrolIdx+1)%n.patrol.length,this.planTo(n.patrol[this.patrolIdx]),this.patrolWait=3.5):(this.rig.pose=`stand`,this.rig.update(e,0))):(this.state=`activity`,n.rot!==void 0&&(this.rot=n.rot),this.rig.pose=n.pose,this.rig.update(e,0));this.syncMesh()}faceToward(e,t){this.rot=Math.atan2(e-this.x,t-this.z),this.syncMesh()}canSee(e,t,n,r=9.5,i=1.15){let a=e-this.x,o=t-this.z,s=Math.hypot(a,o);if(s>r)return!1;let c=Math.sin(this.rot),l=Math.cos(this.rot);return(a*c+o*l)/Math.max(1e-5,s)<Math.cos(i*.5)?!1:!n.blocked(this.x,this.z,e,t)}syncMesh(){this.rig.root.position.set(this.x,0,this.z),this.rig.root.rotation.y=this.rot}},Ul=class{constructor(){this.keys=new Set,this.joyX=0,this.joyY=0,this.sprintTouch=!1,this.yaw=0,this.pitch=.42,this.distance=5.4,this.sensitivity=1,this.dragging=!1,this.lastX=0,this.lastY=0,this.camTouchId=null,this.joyTouchId=null,this.joyCenter={x:0,y:0},this.joyKnobEl=null,this.onInteract=()=>{},this.onKeyCommand=()=>{}}reset(){this.keys.clear(),this.joyTouchId=null,this.camTouchId=null,this.joyX=0,this.joyY=0,this.dragging=!1,this.sprintTouch=!1,this.joyKnobEl&&(this.joyKnobEl.style.transform=`translate(0px, 0px)`)}bind(e,t,n){this.joyKnobEl=n,window.addEventListener(`keydown`,e=>{e.target?.tagName!==`INPUT`&&(this.keys.add(e.code),[`KeyE`,`KeyJ`,`KeyP`,`KeyR`,`KeyM`,`KeyB`,`Escape`].includes(e.code)&&this.onKeyCommand(e.code))}),window.addEventListener(`keyup`,e=>this.keys.delete(e.code)),window.addEventListener(`blur`,()=>this.reset()),window.addEventListener(`orientationchange`,()=>this.reset());let r=e=>e.preventDefault();window.addEventListener(`gesturestart`,r,{passive:!1}),window.addEventListener(`gesturechange`,r,{passive:!1}),window.addEventListener(`gestureend`,r,{passive:!1}),e.addEventListener(`mousedown`,e=>{e.button===0&&(this.dragging=!0,this.lastX=e.clientX,this.lastY=e.clientY)}),window.addEventListener(`mousemove`,e=>{if(!this.dragging)return;let t=e.clientX-this.lastX,n=e.clientY-this.lastY;this.lastX=e.clientX,this.lastY=e.clientY,this.rotate(-t*.0055,n*.0045)}),window.addEventListener(`mouseup`,()=>this.dragging=!1),e.addEventListener(`wheel`,e=>{this.distance=Math.max(2.6,Math.min(9,this.distance+e.deltaY*.003))},{passive:!0}),t.addEventListener(`touchstart`,e=>{e.preventDefault();let r=e.changedTouches[0];this.joyTouchId=r.identifier;let i=t.getBoundingClientRect();this.joyCenter={x:i.left+i.width/2,y:i.top+i.height/2},this.updateJoy(r.clientX,r.clientY,n)},{passive:!1}),t.addEventListener(`touchmove`,e=>{e.preventDefault();for(let t of Array.from(e.changedTouches))t.identifier===this.joyTouchId&&this.updateJoy(t.clientX,t.clientY,n)},{passive:!1});let i=e=>{for(let t of Array.from(e.changedTouches))t.identifier===this.joyTouchId&&(this.joyTouchId=null,this.joyX=0,this.joyY=0,n.style.transform=`translate(0px, 0px)`)};t.addEventListener(`touchend`,i),t.addEventListener(`touchcancel`,i),e.addEventListener(`touchstart`,e=>{if(e.preventDefault(),this.camTouchId===null){for(let t of Array.from(e.changedTouches))if(t.identifier!==this.joyTouchId){this.camTouchId=t.identifier,this.lastX=t.clientX,this.lastY=t.clientY;break}}},{passive:!1}),e.addEventListener(`touchmove`,e=>{e.preventDefault();for(let t of Array.from(e.changedTouches))if(t.identifier===this.camTouchId){let e=t.clientX-this.lastX,n=t.clientY-this.lastY;this.lastX=t.clientX,this.lastY=t.clientY,this.rotate(-e*.007,n*.0055)}},{passive:!1});let a=e=>{for(let t of Array.from(e.changedTouches))t.identifier===this.camTouchId&&(this.camTouchId=null)};e.addEventListener(`touchend`,a),e.addEventListener(`touchcancel`,a)}updateJoy(e,t,n){let r=e-this.joyCenter.x,i=t-this.joyCenter.y,a=Math.hypot(r,i);a>44&&(r=r/a*44,i=i/a*44),this.joyX=r/44,this.joyY=i/44,n.style.transform=`translate(${r.toFixed(1)}px, ${i.toFixed(1)}px)`}rotate(e,t){this.yaw+=e*this.sensitivity,this.pitch=Math.max(.12,Math.min(1.25,this.pitch+t*this.sensitivity))}moveVector(){let e=-this.joyY,t=this.joyX;(this.keys.has(`KeyW`)||this.keys.has(`ArrowUp`))&&(e+=1),(this.keys.has(`KeyS`)||this.keys.has(`ArrowDown`))&&--e,(this.keys.has(`KeyD`)||this.keys.has(`ArrowRight`))&&(t+=1),(this.keys.has(`KeyA`)||this.keys.has(`ArrowLeft`))&&--t;let n=Math.hypot(e,t);n>1&&(e/=n,t/=n);let r=this.sprintTouch||this.keys.has(`ShiftLeft`)||this.keys.has(`ShiftRight`)||n>.92;return{fwd:e,right:t,sprint:r}}},Wl=class{constructor(){this.cam=new Fr(58,16/9,.15,130),this.ray=new mc,this.smoothDist=5.4}update(e,t,n,r,i,a){let o=new W(e,1.4,t),s=new W(Math.sin(n)*Math.cos(r),Math.sin(r),Math.cos(n)*Math.cos(r)),c=i;this.ray.set(o,s),this.ray.far=i;let l=this.ray.intersectObjects(a,!1);l.length>0&&(c=Math.max(.65,l[0].distance-.28)),this.smoothDist+=(c-this.smoothDist)*(c<this.smoothDist?.45:.15),this.cam.position.copy(o).addScaledVector(s,this.smoothDist),this.cam.lookAt(e,1.32,t)}},Gl=class{constructor(){this.ctx=null,this.volume=.7,this.stepTimer=0}ensure(){if(this.volume<=0)return null;if(!this.ctx){let e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}return this.ctx&&this.ctx.state===`suspended`&&this.ctx.resume().catch(()=>{}),this.ctx}tone(e,t=.12,n=`sine`,r=.18){let i=this.ensure();if(!i)return;let a=i.createOscillator(),o=i.createGain();a.type=n,a.frequency.value=e,o.gain.setValueAtTime(r*this.volume,i.currentTime),o.gain.exponentialRampToValueAtTime(.001,i.currentTime+t),a.connect(o).connect(i.destination),a.start(),a.stop(i.currentTime+t)}bell(){this.tone(740,.35,`triangle`,.25),setTimeout(()=>this.tone(587,.45,`triangle`,.22),180)}click(){this.tone(520,.06,`sine`,.12)}good(){this.tone(523,.1,`triangle`,.16),setTimeout(()=>this.tone(659,.14,`triangle`,.16),90)}bad(){this.tone(220,.22,`sawtooth`,.18)}step(e,t){this.stepTimer-=e,this.stepTimer<=0&&(this.stepTimer=t?.28:.42,this.tone(110+Math.random()*25,.045,`triangle`,.07))}},Kl=`c7eefdebb86e`;function ql(){let e=typeof window<`u`?window.__APP_RELEASE__:null;return{name:`di-tu-online`,milestone:e?.milestone??2,version:e?.version??`0.2.0`,buildHash:e?.buildHash??Kl,files:e?.files}}async function Jl(){try{let e=await fetch(`./release.json?t=`+Date.now(),{cache:`no-store`});if(e.ok){let t=await e.json();if(t?.buildHash)return Kl=t.buildHash,typeof window<`u`&&(window.__APP_RELEASE__=t),t}}catch{}return ql()}var Yl=[{name:`1. Lắp vỏ nhựa cách điện`,zone:[.32,.68]},{name:`2. Đặt hai lá đồng tiếp điện`,zone:[.36,.64]},{name:`3. Siết ốc cố định`,zone:[.4,.6]}],Xl=class{constructor(e,t,n,r){this.g=t,this.sfx=n,this.hooks=r,this.releaseInfo=ql(),this.paused=!1,this.modalSeq=0,this.activeMinigameCancel=null,this.pausedByOrientation=!1,this.root=e,this.buildShell(),this.checkOrientation(),window.addEventListener(`resize`,()=>this.checkOrientation()),window.addEventListener(`orientationchange`,()=>this.checkOrientation())}isTouchDevice(){return`ontouchstart`in window||(navigator.maxTouchPoints??0)>0}hasOpenModal(){return this.modalHost.innerHTML.trim()!==``}checkOrientation(){let e=window.innerWidth<window.innerHeight,t=this.isTouchDevice();e&&t?(this.orientOverlay.style.display=`flex`,this.paused||=(this.pausedByOrientation=!0,!0)):(this.orientOverlay.style.display=`none`,this.pausedByOrientation&&=(this.hasOpenModal()||(this.paused=!1),!1))}buildShell(){let e=this.isTouchDevice();this.root.innerHTML=`
      <div class="hud-header">
        <div class="hud-left">
          <div class="hud-card" id="hud-clock"></div>
          <div class="hud-quest-bar interactive" id="hud-quest-bar" title="Nhấp để xem chi tiết mục tiêu"></div>
        </div>
        <div class="hud-right">
          <div class="hud-action-row interactive">
            <div class="sentence-tag" id="hud-sentence">Án: 30n</div>
            <div class="version-tag" id="hud-version" title="Phiên bản trò chơi">v${this.releaseInfo.version}-${this.releaseInfo.buildHash.slice(0,6)}</div>
            <button class="btn" id="btn-fullscreen" title="Toàn màn hình">⛶</button>
            <button class="btn" id="btn-bag">${e?`🎒 Túi`:`🎒 Túi (B)`}</button>
            <button class="btn btn-accent" id="btn-menu">${e?`☰ Menu`:`☰ Menu (Esc)`}</button>
          </div>
          <div class="hud-stats-mini interactive" id="hud-stats-mini" title="Nhấp để xem chi tiết các chỉ số"></div>
        </div>
      </div>
      <div class="toasts" id="hud-toasts"></div>
      <div class="prompt-box interactive" id="hud-prompt" style="display:none"></div>
      <div class="joy-zone interactive" id="joy-zone"><div class="joy-knob" id="joy-knob"></div></div>
      <div class="touch-right interactive">
        <button class="btn" id="btn-interact" disabled>${e?`Tương tác`:`Tương tác (E)`}</button>
        <button class="btn" id="btn-sprint">Chạy</button>
      </div>
      <div id="modal-host"></div>
      <div id="orientation-overlay" style="display:none">
        <svg class="rotate-phone-icon" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="4" y="2" width="16" height="20" rx="3" ry="3"></rect>
          <path d="M12 18h.01"></path>
          <path d="M19 12a7 7 0 0 0-7-7"></path>
          <polyline points="15 5 19 5 19 9"></polyline>
        </svg>
        <div class="rotate-title">Xoay ngang điện thoại để chơi</div>
        <div class="rotate-desc">ĐI TÙ ONLINE bắt buộc chơi ở màn hình ngang để đảm bảo góc nhìn 3D bao quát và điều khiển thuận tiện.</div>
      </div>
    `,this.clockEl=this.root.querySelector(`#hud-clock`),this.questBarEl=this.root.querySelector(`#hud-quest-bar`),this.sentenceEl=this.root.querySelector(`#hud-sentence`),this.statsMiniEl=this.root.querySelector(`#hud-stats-mini`),this.btnBag=this.root.querySelector(`#btn-bag`),this.btnMenu=this.root.querySelector(`#btn-menu`),this.promptEl=this.root.querySelector(`#hud-prompt`),this.toastsEl=this.root.querySelector(`#hud-toasts`),this.modalHost=this.root.querySelector(`#modal-host`),this.joyZone=this.root.querySelector(`#joy-zone`),this.joyKnob=this.root.querySelector(`#joy-knob`),this.btnInteract=this.root.querySelector(`#btn-interact`),this.btnSprint=this.root.querySelector(`#btn-sprint`),this.orientOverlay=this.root.querySelector(`#orientation-overlay`),this.btnMenu.addEventListener(`click`,()=>{this.sfx.click(),this.tryLockOrientation(),this.showMainMenu()}),this.btnBag.addEventListener(`click`,()=>{this.sfx.click(),this.tryLockOrientation(),this.openPanel(`bag`)}),this.questBarEl.addEventListener(`click`,()=>{this.sfx.click(),this.tryLockOrientation(),this.showQuestDetail()}),this.statsMiniEl.addEventListener(`click`,()=>{this.sfx.click(),this.tryLockOrientation(),this.showStatsDetail()}),this.root.querySelector(`#btn-fullscreen`)?.addEventListener(`click`,()=>{if(this.sfx.click(),!document.fullscreenElement&&!document.webkitFullscreenElement){let e=document.documentElement;e.requestFullscreen?e.requestFullscreen().catch(()=>{}):e.webkitRequestFullscreen&&e.webkitRequestFullscreen()}else{let e=document;e.exitFullscreen?e.exitFullscreen().catch(()=>{}):e.webkitExitFullscreen&&e.webkitExitFullscreen()}}),window.addEventListener(`pointerdown`,()=>this.tryLockOrientation(),{once:!0})}tryLockOrientation(){try{screen.orientation?.lock?.(`landscape`)?.catch?.(()=>{})}catch{}}toast(e,t=`info`){let n=document.createElement(`div`);for(n.className=`toast ${t}`,n.textContent=e,this.toastsEl.appendChild(n);this.toastsEl.children.length>2;)this.toastsEl.firstElementChild?.remove();setTimeout(()=>n.remove(),3200)}updateReleaseInfo(e){this.releaseInfo=e;let t=e.buildHash.slice(0,6),n=this.root.querySelector(`#hud-version`);n&&(n.textContent=`v${e.version}-${t}`);let r=this.root.querySelector(`#menu-build-tag`);r&&(r.textContent=`v${e.version} (${e.buildHash.slice(0,7)}) • M${e.milestone}`)}updateHUD(e,t){let n=this.g.s,r=bc(n.minute),i=xc(n.minute),a=this.hooks.playerPos(),o=rl(a.x,a.z),s=this.isTouchDevice();this.clockEl.innerHTML=`
      <div class="hud-clock">Ngày ${n.day} · ${Sc(n.minute)} — <span style="color:#93c5fd">${o}</span></div>
      <div>Hiện tại: <b style="color:#fde68a">${r.label}</b> (${r.where})</div>
      <div class="hud-sub">${i?`Tiếp: ${Sc(i.start)} ${i.label}`:`Cuối ngày — về buồng ngủ`}</div>
    `,this.sentenceEl.textContent=`Án: ${n.sentence.remaining}n`;let c=``;n.settings.guide&&t&&(c=`${[`↑`,`↗`,`→`,`↘`,`↓`,`↙`,`←`,`↖`][Math.round((t.angle%(Math.PI*2)+Math.PI*2)/(Math.PI/4))%8]} ${Math.round(t.dist)}m`);let l=``,u=`🎯 Mục tiêu`;if(t?.isDuty)u=`🔔 Nghĩa vụ`,l=t.label;else if(t)l=t.label;else{let e=Bc.filter(e=>this.g.qStatus(e)===`active`);if(e.length>0){let t=zc[e[0]],n=this.g.qBranch(e[0]),r=t.objectives.find(t=>(!t.branch||t.branch===n)&&!this.g.qObj(e[0],t.id));l=`${t.title}: ${r?r.text:`Hoàn tất`}`}else l=`Sinh hoạt tự do trong khuôn viên`}this.questBarEl.innerHTML=`
      <span class="quest-tag">${u}:</span>
      <span class="quest-text" title="${l}">${l}</span>
      ${c?`<span class="quest-arrow">${c}</span>`:``}
    `;let d=n.stats;if(d.health<30||d.stamina<15||d.hunger>75||d.stress>75||d.suspicion>70?this.statsMiniEl.classList.add(`stat-warning`):this.statsMiniEl.classList.remove(`stat-warning`),this.statsMiniEl.innerHTML=`
      <span class="stat-item ${d.health<30?`danger`:``}">❤️${Math.round(d.health)}</span>
      <span class="stat-item ${d.stamina<15?`danger`:``}">⚡${Math.round(d.stamina)}</span>
      <span class="stat-item ${d.hunger>70?`danger`:``}">🍚${Math.round(d.hunger)}</span>
      <span class="stat-item ${d.stress>70?`danger`:``}">🧠${Math.round(d.stress)}</span>
      <span class="stat-item">💰${Cc(d.money)}</span>
    `,e&&!this.paused){this.promptEl.style.display=`block`,this.promptEl.innerHTML=`
        <div>${s?``:`<b>[E]</b> `}<b>${e.label}</b></div>
        ${e.risk?`<div class="prompt-risk">⚠ Quy tắc & hậu quả: ${e.risk}</div>`:``}
      `,this.promptEl.onclick=()=>e.run(),this.btnInteract.disabled=!1,this.btnInteract.classList.add(`btn-accent`);let t=e.label;t.includes(`:`)&&(t=t.split(`:`)[1].trim()),t.length>16&&(t=t.slice(0,16)+`…`),this.btnInteract.textContent=t}else this.promptEl.style.display=`none`,this.btnInteract.disabled=!0,this.btnInteract.classList.remove(`btn-accent`),this.btnInteract.textContent=s?`Tương tác`:`Tương tác (E)`}closeModal(){this.activeMinigameCancel&&=(this.activeMinigameCancel(),null),this.modalHost.innerHTML=``,this.pausedByOrientation||(this.paused=!1)}showModal(e,t){this.modalSeq++,this.paused=!0,this.modalHost.innerHTML=`<div class="modal-backdrop"><div class="modal">${e}</div></div>`;let n=this.modalHost.querySelector(`.modal`);n.querySelectorAll(`[data-close]`).forEach(e=>e.addEventListener(`click`,()=>this.closeModal())),t&&t(n)}showMainMenu(){let e=this.isTouchDevice();this.showModal(`
      <h2>MENU TRÒ CHƠI</h2>
      <div class="hud-sub">Quản lý nhật ký, thông tin án, quan hệ và cài đặt trò chơi</div>
      <div class="menu-grid">
        <button class="menu-card-btn" data-menu="journal">
          <span class="icon">📜</span>
          <span>Nhật ký nhiệm vụ ${e?``:`(J)`}</span>
        </button>
        <button class="menu-card-btn" data-menu="record">
          <span class="icon">📋</span>
          <span>Hồ sơ & Giảm án ${e?``:`(P)`}</span>
        </button>
        <button class="menu-card-btn" data-menu="relations">
          <span class="icon">🤝</span>
          <span>Quan hệ bạn tù ${e?``:`(R)`}</span>
        </button>
        <button class="menu-card-btn" data-menu="bag">
          <span class="icon">🎒</span>
          <span>Túi đồ cá nhân ${e?``:`(B)`}</span>
        </button>
        <button class="menu-card-btn" data-menu="map">
          <span class="icon">🗺</span>
          <span>Bản đồ trại giam ${e?``:`(M)`}</span>
        </button>
        <button class="menu-card-btn" data-menu="wait">
          <span class="icon">⏳</span>
          <span>Chờ giờ / Nghỉ</span>
        </button>
        <button class="menu-card-btn" data-menu="pause">
          <span class="icon">⚙</span>
          <span>Cài đặt & Âm thanh</span>
        </button>
      </div>
      <div class="menu-footer-bar" style="display:flex;justify-content:space-between;align-items:center;margin-top:14px;padding-top:10px;border-top:1px solid rgba(255,255,255,0.08);font-size:11px;color:#94a3b8">
        <span id="menu-build-tag">v${this.releaseInfo.version} (${this.releaseInfo.buildHash.slice(0,7)}) • M${this.releaseInfo.milestone}</span>
        <button class="btn btn-accent" data-close>Đóng Menu</button>
      </div>
    `,e=>{e.querySelectorAll(`[data-menu]`).forEach(e=>{e.addEventListener(`click`,()=>{this.sfx.click();let t=e.dataset.menu;this.openPanel(t)})})})}showQuestDetail(){let e=this.g.s,t=Bc.filter(e=>this.g.qStatus(e)===`active`).map(e=>{let t=zc[e],n=this.g.qBranch(e),r=t.objectives.filter(e=>!e.branch||e.branch===n).map(t=>{let n=this.g.qObj(e,t.id);return`<div style="font-size:13px;margin:3px 0;color:${n?`#86efac`:`#cbd5e1`}">
            ${n?`✓`:`○`} ${t.text}
          </div>`}).join(``);return`
        <div class="card-row">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
            <b style="color:#fde68a;font-size:14px">${t.title}</b>
            <span class="tag good">Đang tiến hành</span>
          </div>
          <div style="color:var(--muted);font-size:12px;margin-bottom:6px">${t.reason}</div>
          <div style="padding-left:4px">${r}</div>
        </div>
      `}).join(``);this.showModal(`
      <h2>MỤC TIÊU & NHIỆM VỤ HIỆN TẠI</h2>
      <div class="hud-sub" style="margin-bottom:10px">Chương ${e.chapter} — Khám phá và đáp ứng quy chế trại giam</div>
      ${t||`<div style="color:var(--muted);padding:10px 0">Hiện không có nhiệm vụ nào cần làm. Hãy tham gia lao động, học nghề hoặc gặp gỡ NPC.</div>`}
      <div style="text-align:right;margin-top:12px">
        <button class="btn btn-accent" data-close>Đóng</button>
      </div>
    `)}showStatsDetail(){let e=this.g.s.stats,t=(e,t=`#22c55e`)=>`<span class="bar" style="width:100px;height:8px"><i style="width:${Math.round(e)}%;background:${t}"></i></span>`;this.showModal(`
      <h2>CHỈ SỐ SINH HOẠT & CẢI TẠO</h2>
      <div class="hud-sub" style="margin-bottom:10px">Cân bằng sức khỏe, nhu cầu cơ bản và hồ sơ kỷ luật</div>
      <div class="card-row">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
          <span>❤️ <b>Sức khỏe</b>: ${Math.round(e.health)}/100</span>
          ${t(e.health,e.health<35?`#ef4444`:`#22c55e`)}
        </div>
        <div class="hud-sub">Giảm khi bị thương tích, lao động quá sức hoặc đói kéo dài. Ngất xỉu khi về 0. Khám tại Phòng y tế để hồi phục.</div>
      </div>
      <div class="card-row">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
          <span>⚡ <b>Thể lực</b>: ${Math.round(e.stamina)}/100</span>
          ${t(e.stamina,`#38bdf8`)}
        </div>
        <div class="hud-sub">Tiêu hao khi chạy nhanh và thao tác xưởng. Tự hồi phục khi đi bộ hoặc nghỉ ngơi.</div>
      </div>
      <div class="card-row">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
          <span>🍚 <b>Mức đói</b>: ${Math.round(e.hunger)}/100</span>
          ${t(e.hunger,e.hunger>70?`#ef4444`:`#f59e0b`)}
        </div>
        <div class="hud-sub">Tăng dần theo giờ. Cần ăn cơm đúng giờ tại Nhà ăn hoặc mua đồ ăn nhẹ tại quầy căn tin.</div>
      </div>
      <div class="card-row">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
          <span>🧠 <b>Căng thẳng</b>: ${Math.round(e.stress)}/100</span>
          ${t(e.stress,e.stress>70?`#ef4444`:`#a855f7`)}
        </div>
        <div class="hud-sub">Tăng khi vi phạm hoặc chịu sức ép. Giảm bằng tập thể dục sân trại, đọc sách thư viện hoặc ngủ đủ giấc.</div>
      </div>
      <div class="card-row">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
          <span>🌟 <b>Điểm cải tạo</b>: ${Math.round(e.reform)}/100</span>
          ${t(e.reform,`#f59e0b`)}
        </div>
        <div class="hud-sub">Tiêu chí quan trọng nhất trong kỳ xét giảm án 5 ngày một lần. Tăng khi lao động đủ định mức, học nghề, giúp đỡ người khác.</div>
      </div>
      <div class="card-row">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
          <span>👀 <b>Mức nghi ngờ</b>: ${Math.round(e.suspicion)}/100</span>
          ${t(e.suspicion,e.suspicion>50?`#ef4444`:`#64748b`)}
        </div>
        <div class="hud-sub">Tăng khi lảng vảng gần khu cấm, kho vật tư. Khi quá cao sẽ bị quản giáo khám xét bất ngờ.</div>
      </div>
      <div class="card-row">
        <div>💰 <b>Tiền lưu ký / căn tin</b>: <span style="color:#fde68a;font-size:15px;font-weight:700">${Cc(e.money)}</span></div>
        <div class="hud-sub">Tiền thù lao lao động hoặc người nhà gửi vào. Dùng mua thuốc, đồ dùng căn tin.</div>
      </div>
      <div style="text-align:right;margin-top:12px">
        <button class="btn btn-accent" data-close>Đóng</button>
      </div>
    `)}openPanel(e){switch(e){case`journal`:return this.showJournal();case`record`:return this.showRecord();case`relations`:return this.showRelations();case`bag`:return this.showBag();case`map`:return this.showMap();case`wait`:return this.showWait();case`pause`:return this.showPause()}}showDialogue(e,t){let n=e.choices.map((e,t)=>`
        <button class="choice-btn ${e.important?`important`:``}" data-idx="${t}" ${e.disabled?`disabled`:``}>
          ${e.important?`<span class="tag bad">Quyết định quan trọng</span>`:``}${e.label}
          ${e.risk?`<span class="choice-risk">⚠ ${e.risk}</span>`:``}
          ${e.disabled?`<span class="choice-risk">🔒 ${e.disabled}</span>`:``}
        </button>`).join(``);this.showModal(`
      <h2>${e.speaker}</h2>
      ${e.role?`<div class="hud-sub" style="margin-bottom:8px">${e.role}</div>`:``}
      <div style="font-size:14.5px;line-height:1.55;white-space:pre-line">${e.text}</div>
      <div class="choice-list">${n}</div>
    `,n=>{n.querySelectorAll(`[data-idx]`).forEach(n=>{n.addEventListener(`click`,()=>{this.sfx.click();let r=Number(n.dataset.idx),i=this.modalSeq,a=e.choices[r].run();a?this.showDialogue(a,t):(t?.(),this.modalSeq===i&&this.closeModal())})})})}showViolationBanner(e){this.sfx.bad(),this.toast(`VI PHẠM: ${e.title} — ${e.penalty}`,`bad`)}showJournal(){let e=Bc.map(e=>{let t=zc[e],n=this.g.s.quests[e],r=n?.status??`locked`;if(r===`locked`)return`<div class="card-row"><span class="tag">${t.type===`main`?`Chính`:`Phụ`}</span><b>${t.title}</b> <span class="hud-sub">(Chưa mở — ${t.requirement})</span></div>`;let i=r===`done`?`<span class="tag good">Hoàn thành</span>`:r===`failed`?`<span class="tag bad">Thất bại</span>`:`<span class="tag">Đang làm</span>`,a=this.g.qBranch(e),o=t.objectives.filter(e=>!e.branch||e.branch===a).map(t=>`<div style="margin-left:8px">${this.g.qObj(e,t.id)?`✔`:`○`} ${t.text}</div>`).join(``),s=n.choices.length?`<div class="hud-sub" style="margin-top:4px">Lựa chọn đã thực hiện: <b>${n.choices.join(` → `)}</b>${n.outcome?` (${n.outcome})`:``}</div>`:``;return`
        <div class="card-row">
          <div>${i}<span class="tag">${t.type===`main`?`Chính`:`Phụ`}</span><b>${t.title}</b> — Người giao: ${t.giver}</div>
          <div class="hud-sub">${t.reason}</div>
          <div style="margin-top:4px">${o}</div>
          <div class="hud-sub" style="margin-top:4px">Thưởng: ${t.reward} · Nếu lỡ: ${t.failure}</div>
          ${s}
        </div>`}).join(``),t=this.g.s.clues.length?this.g.s.clues.map(e=>`<div class="card-row" style="border-color:#38bdf8">🔍 <b>Manh mối:</b> ${e}</div>`).join(``):`<div class="hud-sub">Chưa có manh mối nào trong sổ tay điều tra.</div>`;this.showModal(`
      <h2>Nhật ký nhiệm vụ & Sổ tay điều tra</h2>
      ${e}
      <h3>Sổ tay điều tra & Manh mối</h3>
      ${t}
      <button class="btn" data-close>Đóng</button>
    `)}showRecord(){let e=this.g.s,t=Fc(e),n=jc(e,t.nextReview),r=n.breakdown.map(e=>`<div>• ${e.label}: <b>${e.value>=0?`+`:``}${e.value}</b></div>`).join(``),i=e.violations.length?e.violations.slice().reverse().map(e=>`
          <div class="card-row">
            <div><span class="tag ${e.status===`overturned`?`good`:`bad`}">${e.status===`overturned`?`ĐÃ HỦY`:`Mức ${e.severity}`}</span><b>${e.title}</b> (Ngày ${e.day}, ${Sc(e.minute)})</div>
            <div class="hud-sub">Bằng chứng: ${e.evidence}</div>
            <div class="hud-sub">Xử lý: ${e.penalty} (${e.reformDelta} điểm cải tạo)</div>
          </div>`).join(``):`<div class="hud-sub">Chưa có hồ sơ vi phạm nào.</div>`;this.showModal(`
      <h2>Hồ sơ phạm nhân Minh · AP-0317</h2>
      <div class="card-row">
        <div>Án ban đầu: <b>${e.sentence.total} ngày</b> · Đã chấp hành: <b>${e.sentence.served} ngày</b> · Còn lại: <b style="color:#fde68a">${e.sentence.remaining} ngày</b></div>
        <div>Kỳ xét giảm án tiếp theo: <b>Ngày ${t.nextReview}</b> (mỗi 5 ngày xét 1 lần, giảm thêm 0–3 ngày)</div>
        <div>Dự kiến ngày ra tù: <b>Ngày ${t.releaseEstimated}</b> (nếu không giảm thêm: Ngày ${t.releaseNoReduction})</div>
        <div class="hud-sub" style="margin-top:4px">Ghi chú: Đây là hệ thống luật hư cấu phục vụ gameplay.</div>
      </div>
      <h3>Cách tính kỳ xét tiếp theo (ước tính hiện tại: −${n.reduction} ngày)</h3>
      <div class="card-row">${r}</div>
      <h3>Lịch sử vi phạm (${e.violations.length})</h3>
      ${i}
      <button class="btn" data-close>Đóng</button>
    `)}showAppealModal(){let e=this.g.s.violations.filter(e=>e.status===`active`&&!e.appealed&&e.severity>0),t=e.length?e.map(e=>{let t=this.g.appealCheck(e);return`
            <div class="card-row">
              <div><b>${e.title}</b> (Ngày ${e.day}) — ${e.penalty}</div>
              <div class="hud-sub">Bằng chứng trong hồ sơ: ${e.evidence}</div>
              <div class="hud-sub" style="color:#fde68a">Đánh giá căn cứ: ${t.reason}</div>
              <button class="btn btn-accent" style="margin-top:6px" data-appeal="${e.id}">Gửi giải trình hồ sơ này</button>
            </div>`}).join(``):`<div class="card-row">Hiện không có hồ sơ vi phạm nào cần giải trình.</div>`;this.showModal(`<h2>Giải trình / Khiếu nại với Quản giáo Lan</h2>${t}<button class="btn" data-close>Đóng</button>`,e=>{e.querySelectorAll(`[data-appeal]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.appeal,n=this.g.appeal(t);this.showModal(`<h2>Kết quả giải trình</h2><div class="card-row">${n.reason}</div><button class="btn" data-close>Đóng</button>`)})})})}showRelations(){let e=this.hooks.npcs(),t=this.hooks.playerPos(),n=Object.keys(ml).map(n=>{let r=ml[n],i=this.g.s.relations[n],a=e[n],o=Math.round(Math.hypot(a.x-t.x,a.z-t.z)),s=i.memories.length?i.memories.map(e=>`<div>• Ngày ${e.day}: ${e.text}</div>`).join(``):`<div class="hud-sub">Chưa có sự kiện đáng nhớ.</div>`;return`
        <div class="card-row">
          <div><b>${r.name}</b> — ${r.role} · Quan hệ: <b>${i.value}</b></div>
          <div class="hud-sub">Hiện tại: <b>${a.activity}</b> tại ${rl(a.x,a.z)} (cách ${o}m)</div>
          <div class="hud-sub">Lịch thường ngày: ${r.whereHint}</div>
          <div style="margin-top:4px">${s}</div>
        </div>`}).join(``);this.showModal(`<h2>Quan hệ & Vị trí nhân vật</h2>${n}<button class="btn" data-close>Đóng</button>`)}showBag(){let e=Object.entries(this.g.s.inventory).filter(([,e])=>e>0).map(([e,t])=>{let n=Lc[e];return`
        <div class="card-row">
          <div>${n?.essential?`<span class="tag">Thiết yếu</span>`:n?.quest?`<span class="tag">Nhiệm vụ</span>`:n?.contraband?`<span class="tag bad">Hàng cấm</span>`:``}<b>${n?.name??e}</b> ×${t}</div>
          <div class="hud-sub">${n?.desc??``}</div>
          ${n?.use?`<button class="btn" style="margin-top:5px" data-use="${e}">Sử dụng</button>`:``}
        </div>`}).join(``);this.showModal(`<h2>Túi đồ</h2>${e||`<div class="hud-sub">Trống.</div>`}<button class="btn" data-close>Đóng</button>`,e=>{e.querySelectorAll(`[data-use]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=this.g.useItem(e.dataset.use);t&&this.toast(t,`warn`),this.showBag()})})})}showCanteen(){let e=Object.keys(Lc).filter(e=>Lc[e].price).map(e=>{let t=Lc[e];return`
        <div class="card-row" style="display:flex;justify-content:space-between;align-items:center">
          <div><b>${t.name}</b> — ${Cc(t.price)}<div class="hud-sub">${t.desc}</div></div>
          <button class="btn btn-accent" data-buy="${e}">Mua</button>
        </div>`}).join(``);this.showModal(`<h2>Quầy căn tin (Tiền hiện có: ${Cc(this.g.s.stats.money)})</h2>
       <div class="hud-sub" style="margin-bottom:8px">Mở cửa 16:30–21:00. Vật phẩm thiết yếu và nhiệm vụ không thể bán hay vứt.</div>
       ${e}
       <button class="btn" data-close>Đóng</button>`,e=>{e.querySelectorAll(`[data-buy]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=this.g.buy(e.dataset.buy);t?this.toast(t,`bad`):this.sfx.good(),this.showCanteen()})})})}showMap(){let e=this.hooks.playerPos(),t=this.hooks.npcs(),n=Object.entries(wc).map(([e,t])=>{let n=this.g.isOpen(e);return`<div>• <b>${t.label}:</b> <span style="color:${n?`#4ade80`:`#f87171`}">${n?`Đang mở`:`Đang khóa`}</span> — ${t.reason}</div>`}).join(``);this.showModal(`<h2>Bản đồ Trại giam An Phú</h2>
       <canvas id="map-cv" width="540" height="440" style="width:100%;background:#1e293b;border-radius:8px"></canvas>
       <div style="margin:8px 0">
         <label><input type="checkbox" id="chk-guide" ${this.g.s.settings.guide?`checked`:``}/> Hiển thị mũi tên chỉ đường mục tiêu trên HUD</label>
       </div>
       <h3>Giờ mở cửa & quy tắc tiếp cận</h3>
       <div class="card-row">${n}</div>
       <button class="btn" data-close>Đóng</button>`,n=>{let r=n.querySelector(`#map-cv`),i=r.getContext(`2d`),a=e=>(e+31)/62*r.width,o=e=>(e+35)/58*r.height;i.fillStyle=`#334155`,i.fillRect(0,0,r.width,r.height);for(let e of Object.keys(Xc)){let t=Xc[e];i.fillStyle=`#475569`,i.strokeStyle=`#94a3b8`,i.fillRect(a(t.x1),o(t.z1),a(t.x2)-a(t.x1),o(t.z2)-o(t.z1)),i.strokeRect(a(t.x1),o(t.z1),a(t.x2)-a(t.x1),o(t.z2)-o(t.z1)),i.fillStyle=`#f8fafc`,i.font=`bold 12px sans-serif`,i.fillText(t.name,a(t.x1)+6,o(t.z1)+16)}let s=el.find(e=>e.id===`rollcall`);i.strokeStyle=`#facc15`,i.strokeRect(a(s.x1),o(s.z1),a(s.x2)-a(s.x1),o(s.z2)-o(s.z1)),i.fillStyle=`#fde68a`,i.fillText(`Ô điểm danh`,a(s.x1)+4,o(s.z1)+14);for(let e of Object.keys(t)){let n=t[e];i.fillStyle=`#38bdf8`,i.beginPath(),i.arc(a(n.x),o(n.z),5,0,Math.PI*2),i.fill(),i.fillStyle=`#e2e8f0`,i.font=`11px sans-serif`,i.fillText(Hc[e],a(n.x)+7,o(n.z)+4)}i.fillStyle=`#f59e0b`,i.beginPath(),i.arc(a(e.x),o(e.z),7,0,Math.PI*2),i.fill(),i.fillText(`BẠN`,a(e.x)+9,o(e.z)+4),n.querySelector(`#chk-guide`)?.addEventListener(`change`,e=>{this.g.s.settings.guide=e.target.checked,this.g.commit()})})}showWait(){let e=this.g.previewWait(),t=this.g.canSleep(),n=yc.map(e=>`<div style="${this.g.s.minute>=e.start&&this.g.s.minute<e.end?`color:#fde68a;font-weight:700`:``}">${Sc(e.start)}–${Sc(e.end)}: ${e.label} (${e.where})</div>`).join(``);this.showModal(`<h2>Lịch sinh hoạt & Chờ giờ</h2>
       <div class="card-row">${n}</div>
       ${e?`<div class="card-row">
                <div>Chuyển tới mốc tiếp theo: <b>${e.label}</b></div>
                ${e.warnings.map(e=>`<div class="choice-risk">⚠ ${e}</div>`).join(``)}
                <button class="btn btn-accent" style="margin-top:6px" id="btn-do-wait">Chờ đến ${Sc(e.target)}</button>
              </div>`:``}
       <div class="card-row">
         <div>Ngủ qua đêm: ${t.reason}</div>
         <button class="btn btn-accent" style="margin-top:6px" id="btn-do-sleep" ${t.ok?``:`disabled`}>Đi ngủ kết thúc ngày</button>
       </div>
       <button class="btn" data-close>Đóng</button>`,t=>{t.querySelector(`#btn-do-wait`)?.addEventListener(`click`,()=>{this.closeModal(),e&&this.hooks.onWait(e.target)}),t.querySelector(`#btn-do-sleep`)?.addEventListener(`click`,()=>{this.closeModal(),this.hooks.onSleep()})})}showWorkbenchMinigame(){let e=this.g.canWorkReason(),t=this.g.canAutoWork();if(e){this.showModal(`
        <h2>Bàn lắp ráp ổ cắm điện</h2>
        <div class="card-row">${e}</div>
        ${t?`<div class="hud-sub">${t}</div>`:`<button class="btn btn-accent" id="btn-auto-work">Tự hoàn thành ca sáng (70% tiền công)</button>`}
        <button class="btn" style="margin-top:8px" data-close>Đóng</button>
      `,e=>{e.querySelector(`#btn-auto-work`)?.addEventListener(`click`,()=>{this.g.autoWork(),this.closeModal()})});return}let n=0,r=0,i=1,a=[],o=0,s=performance.now(),c=this.g.workMode()===`morning`?`Sản phẩm ca sáng: ${this.g.s.daily.workUnits}/3`:`Sản phẩm ca chiều: ${this.g.s.daily.extraShiftUnits}/4`;this.showModal(`<h2>Lắp ráp ổ cắm điện (${c})</h2>
       <div class="hud-sub">Mỗi bước tốn 3 thể lực (hiện còn <b id="wg-stam">${Math.round(this.g.s.stats.stamina)}</b>). Canh vạch trắng vào vùng xanh rồi bấm <b>Thực hiện bước</b>.</div>
       <div class="card-row" style="margin-top:8px">
         <div id="wg-step" style="font-weight:700;margin-bottom:6px">${Yl[0].name}</div>
         <div style="position:relative;height:26px;background:#1e293b;border-radius:6px;overflow:hidden">
           <div id="wg-zone" style="position:absolute;top:0;bottom:0;background:#15803d"></div>
           <div id="wg-cur" style="position:absolute;top:0;bottom:0;width:5px;background:#fde68a"></div>
         </div>
         <div style="margin-top:10px;display:flex;gap:8px;flex-wrap:wrap">
           <button class="btn btn-accent" id="wg-hit">Thực hiện bước (Space)</button>
           ${t?``:`<button class="btn" id="wg-auto">Tự hoàn thành ca (70% công)</button>`}
           <button class="btn" data-close>Nghỉ tay</button>
         </div>
       </div>`,e=>{let t=e.querySelector(`#wg-step`),c=e.querySelector(`#wg-zone`),l=e.querySelector(`#wg-cur`),u=e.querySelector(`#wg-stam`),d=()=>{let[e,r]=Yl[n].zone;c.style.left=`${e*100}%`,c.style.width=`${(r-e)*100}%`,t.textContent=Yl[n].name,u.textContent=String(Math.round(this.g.s.stats.stamina))};d();let f=e=>{let t=Math.min(.05,(e-s)/1e3);s=e,r+=i*t*1.15,r>=1&&(r=1,i=-1),r<=0&&(r=0,i=1),l.style.left=`${r*98}%`,o=requestAnimationFrame(f)};o=requestAnimationFrame(f),this.activeMinigameCancel=()=>cancelAnimationFrame(o),e.querySelector(`#wg-hit`)?.addEventListener(`click`,()=>{this.g.addStat(`stamina`,-3);let[e,t]=Yl[n].zone,i=(e+t)/2,s=r>=e&&r<=t?95-Math.abs(r-i)*60:Math.max(35,75-Math.abs(r-i)*110);if(a.push(s),this.sfx.click(),n++,n>=Yl.length){cancelAnimationFrame(o),this.activeMinigameCancel=null;let e=a.reduce((e,t)=>e+t,0)/a.length;this.g.finishWorkUnit(e,!0),this.sfx.good(),this.closeModal()}else d()}),e.querySelector(`#wg-auto`)?.addEventListener(`click`,()=>{cancelAnimationFrame(o),this.activeMinigameCancel=null,this.g.autoWork(),this.closeModal()})})}showExerciseMinigame(){let e=this.g.exerciseReason();if(e){this.toast(e,`warn`);return}let t=0,n=.5,r=1,i=0,a=0,o=performance.now();this.showModal(`<h2>Tập xà đơn (Hiệp ${this.g.s.daily.exercise+1}/2 hôm nay)</h2>
       <div class="hud-sub">Canh nhịp thở trong vùng xanh cho 3 lần kéo xà để giảm căng thẳng và tăng thể chất.</div>
       <div class="card-row" style="margin-top:8px">
         <div id="ex-lbl" style="font-weight:700;margin-bottom:6px">Nhịp 1 / 3</div>
         <div style="position:relative;height:24px;background:#1e293b;border-radius:6px;overflow:hidden">
           <div style="position:absolute;left:35%;width:30%;top:0;bottom:0;background:#0284c7"></div>
           <div id="ex-cur" style="position:absolute;top:0;bottom:0;width:5px;background:#fde68a"></div>
         </div>
         <button class="btn btn-accent" style="margin-top:10px" id="ex-pull">Kéo xà!</button>
         <button class="btn" style="margin-top:10px" data-close>Dừng</button>
       </div>`,e=>{let s=e.querySelector(`#ex-cur`),c=e.querySelector(`#ex-lbl`),l=e=>{let t=Math.min(.05,(e-o)/1e3);o=e,n+=r*t*1.25,n>=1&&(n=1,r=-1),n<=0&&(n=0,r=1),s.style.left=`${n*98}%`,a=requestAnimationFrame(l)};a=requestAnimationFrame(l),this.activeMinigameCancel=()=>cancelAnimationFrame(a),e.querySelector(`#ex-pull`)?.addEventListener(`click`,()=>{i+=n>=.35&&n<=.65?1:.45,t++,this.sfx.click(),t>=3?(cancelAnimationFrame(a),this.activeMinigameCancel=null,this.g.exercise(i/3),this.sfx.good(),this.closeModal()):c.textContent=`Nhịp ${t+1} / 3`})})}showVocationalMinigame(e){let t=[{id:1,name:`Dây Đỏ (Pha L1)`,color:`#ef4444`},{id:2,name:`Dây Vàng (Pha L2)`,color:`#facc15`},{id:3,name:`Dây Xanh lam (Trung tính)`,color:`#38bdf8`},{id:4,name:`Dây Xanh lá (Tiếp địa PE)`,color:`#22c55e`}],n=[1,3,2,4],r=[];this.showModal(`<h2>Lớp học nghề — Bài kiểm tra an toàn điện</h2>
       <div class="hud-sub">Quy tắc an toàn của Thầy Phúc: Nối đúng thứ tự theo sơ đồ chuẩn: <b>1. Dây Đỏ → 2. Dây Xanh lam → 3. Dây Vàng → 4. Dây Xanh lá (Tiếp địa)</b>.</div>
       <div class="card-row" style="margin-top:10px;text-align:center">
         <div id="voc-display" style="font-weight:700;font-size:16px;color:#fde68a;min-height:30px;margin-bottom:10px">
           Tiến độ nối: 0 / 4 dây
         </div>
         <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;max-width:400px;margin:0 auto">
           ${t.map(e=>`
             <button class="btn" style="background:${e.color};color:#0f172a;font-weight:700;padding:12px;font-size:14px" data-voc-btn="${e.id}">
               ${e.name}
             </button>
           `).join(``)}
         </div>
         <div style="margin-top:14px">
           <button class="btn" id="voc-reset">Nối lại từ đầu</button>
           <button class="btn" data-close>Thoát</button>
         </div>
       </div>`,i=>{let a=i.querySelector(`#voc-display`);i.querySelectorAll(`[data-voc-btn]`).forEach(i=>{i.addEventListener(`click`,()=>{let o=Number(i.dataset.vocBtn);r.push(o),this.sfx.click();let s=r.length;a.textContent=`Đã nối ${s}/4: ${r.map(e=>t.find(t=>t.id===e)?.name).join(` → `)}`,s===n.length&&(r.every((e,t)=>e===n[t])?(this.sfx.good(),this.g.completeObjective(`lop_nghe_dau`,`thao_tac`),this.g.addReform(3,`Thực hành nối mạch điện an toàn`),this.g.s.skills.vocationalExam++,this.showModal(`
                  <h2>Hoàn thành bài tập học nghề!</h2>
                  <div class="card-row" style="color:#4ade80">
                    ✔ Chính xác tuyệt đối! Trình tự đóng cắt và tiếp địa chuẩn quy chuẩn an toàn điện. Thầy Phúc đã ghi nhận bài thực hành của bạn.
                  </div>
                  <button class="btn btn-accent" data-close>Gặp Thầy Phúc nhận xét</button>
                `,()=>e?.())):(this.sfx.bad(),a.textContent=`❌ Sai trình tự an toàn! Hãy bấm "Nối lại từ đầu" để làm lại.`,r.length=0))})}),i.querySelector(`#voc-reset`)?.addEventListener(`click`,()=>{r.length=0,a.textContent=`Tiến độ nối: 0 / 4 dây`})})}showMedicineSortingMinigame(){this.showModal(`
      <h2>Tủ thuốc y tế — Phân loại thuốc men</h2>
      <div class="card-row">
        Bạn dành 30 phút cùng Y sĩ An lau dọn tủ kính, phân loại các vỉ thuốc hạ sốt, kháng sinh và đóng gói băng gạc sạch sẽ.
      </div>
      <div class="card-row" style="color:#4ade80">
        ✔ Hoàn thành tốt việc được giao. Y sĩ An rất hài lòng.
      </div>
      <button class="btn btn-accent" id="med-done-btn">Nhận thưởng & Đóng</button>
    `,e=>{e.querySelector(`#med-done-btn`)?.addEventListener(`click`,()=>{this.g.completeObjective(`phu_y_te`,`nhan_viec`),this.g.completeObjective(`phu_y_te`,`hoan_thanh`),this.closeModal()})})}showLibraryReader(){this.showModal(`
      <h2>Thư viện trại giam An Phú</h2>
      <div class="card-row">
        Giá sách gồm nhiều đầu sách cẩm nang phổ biến giáo dục pháp luật, sổ tay nghề cơ điện và tác phẩm văn học phục vụ cải tạo.
      </div>
      <div class="choice-list">
        <button class="choice-btn" id="lib-read-law">Đọc Cẩm nang pháp luật & quyền giảm án (−10 căng thẳng, +1 điểm cải tạo)</button>
        <button class="choice-btn" id="lib-read-tech">Đọc Sách hướng dẫn kỹ thuật điện dân dụng (−5 căng thẳng)</button>
        <button class="choice-btn" data-close>Rời giá sách</button>
      </div>
    `,e=>{e.querySelector(`#lib-read-law`)?.addEventListener(`click`,()=>{this.g.addStat(`stress`,-10),this.g.addReform(1,`Đọc sách pháp luật`),this.g.completeObjective(`sach_thu_vien`,`muon_sach`),this.g.completeObjective(`sach_thu_vien`,`doc_xong`),this.sfx.good(),this.showModal(`
          <h2>Đã đọc xong Cẩm nang pháp luật</h2>
          <div class="card-row">
            Bạn nắm rõ hơn các tiêu chí đánh giá giảm án: hồ sơ kỷ luật sạch, tích cực học nghề, chấp hành thời gian biểu nghiêm túc và có thái độ hòa nhã với mọi người.
          </div>
          <button class="btn" data-close>Đóng</button>
        `)}),e.querySelector(`#lib-read-tech`)?.addEventListener(`click`,()=>{this.g.addStat(`stress`,-5),this.sfx.good(),this.showModal(`
          <h2>Sách kỹ thuật điện dân dụng</h2>
          <div class="card-row">
            Ghi nhớ các nguyên lý đấu dây cơ bản: dây nóng (pha) đi qua công tắc, dây tiếp địa bảo vệ chống rò rỉ điện giật.
          </div>
          <button class="btn" data-close>Đóng</button>
        `)})})}showHearing(e){this.showModal(`<h2>Phiên xem xét kỷ luật: ${e.title}</h2>
       <div class="card-row">
         <div><b>Hành vi:</b> ${e.charge}</div>
         <div><b>Bằng chứng:</b> ${e.evidence.join(`; `)}</div>
         <div><b>Mức đề nghị:</b> Cộng ${e.baseDays} ngày án.</div>
       </div>
       <div class="choice-list">
         <button class="choice-btn important" data-h="confess">Thành khẩn nhận lỗi (giảm 1 ngày so với mức đề nghị, +2 điểm cải tạo)</button>
         <button class="choice-btn important" data-h="explain">Giải trình: Lâm đe dọa và gây sự trước (cần nhân chứng Huy hoặc Chú Bảy tin tưởng ≥ 20)</button>
         <button class="choice-btn" data-h="silent">Im lặng chấp nhận quyết định</button>
       </div>`,e=>{e.querySelectorAll(`[data-h]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.h,n=this.g.resolveHearing(t);this.showModal(`<h2>Quyết định của Hội đồng</h2><div class="card-row">${n.text}</div><button class="btn" data-close>Đóng</button>`)})})})}showDaySummary(e){let t=e.review?`<div class="card-row" style="border-color:#22c55e">
           <b>KỲ XÉT GIẢM ÁN NGÀY ${e.review.day}:</b> Giảm thêm <b>${e.review.reduction} ngày án</b>!
           ${e.review.breakdown.map(e=>`<div class="hud-sub">• ${e.label}: ${e.value}</div>`).join(``)}
         </div>`:``;this.showModal(`<h2>Tổng kết Ngày ${e.day}</h2>
       <div class="card-row">
         <div>Điểm danh: <b>${e.rollcall}</b> · Lao động: <b>${e.work}</b> (${e.workUnits}/3 sản phẩm) · Bữa ăn: ${e.meals}/3</div>
         <div>Thay đổi điểm cải tạo: <b>${e.reformDelta>=0?`+`:``}${e.reformDelta}</b> · Tiền: <b>${e.moneyDelta>=0?`+`:``}${Cc(e.moneyDelta)}</b></div>
         <div>Vi phạm trong ngày: ${e.violations.length?e.violations.join(`, `):`Không có`}</div>
         <div>Quan hệ thay đổi: ${e.relationChanges.length?e.relationChanges.map(e=>`${e.npc} (${e.delta>0?`+`:``}${e.delta})`).join(`, `):`Không`}</div>
         <div style="margin-top:6px;color:#fde68a">Án còn lại sau ngày ${e.day}: <b>${e.remainingAfter} ngày</b></div>
       </div>
       ${t}
       <button class="btn btn-accent" id="btn-next-day">${this.g.s.ending?`Xem kết thúc ra tù`:`Bắt đầu Ngày ${this.g.s.day}`}</button>`,e=>{e.querySelector(`#btn-next-day`)?.addEventListener(`click`,()=>{this.closeModal(),this.g.s.ending&&this.showEnding(this.g.s.ending)})})}showEnding(e){let t={tu_te:{title:`KẾT THÚC 1 — NGÀY TRỞ VỀ TỬ TẾ`,body:`Cánh cổng sắt Trại giam An Phú mở ra vào buổi sáng nắng nhẹ. Chị Mai đứng đợi sẵn bên hàng phượng. Nhờ giữ mình không khuất phục trước cám dỗ, chăm chỉ lao động và sống có tình nghĩa với Chú Bảy, Huy, bạn được giảm án sớm và bước ra với cái đầu ngẩng cao.`},lang_le:{title:`KẾT THÚC 2 — BƯỚC QUA CÁNH CỔNG`,body:`Bạn hoàn thành bản án và bước ra khỏi cổng trại An Phú. Những va vấp trong trại khiến ngày về dài hơn dự tính, nhưng phía trước vẫn là cuộc đời tự do để làm lại từ đầu.`},rang_buoc:{title:`KẾT THÚC 3 — CÁI GIÁ CỦA ĐƯỜNG TẮT`,body:`Bạn ra khỏi cổng trại với vài đồng tiền kiếm nhanh trong túi, nhưng ở góc đường đã có người của Lâm đứng đợi nhắc về "chuyện hộp mũi khoan hôm trước". Tự do đã đến, nhưng cái bóng của lựa chọn dễ dãi vẫn đi theo.`}},n=t[e]??t.lang_le;this.showModal(`<h2>${n.title}</h2>
       <div class="card-row" style="font-size:14.5px;line-height:1.6">${n.body}</div>
       <div class="card-row">
         <div>Tổng số ngày trong trại: <b>${this.g.s.sentence.served} ngày</b> · Điểm cải tạo cuối: <b>${Math.round(this.g.s.stats.reform)}</b></div>
       </div>
       <button class="btn btn-accent" id="btn-replay">Chơi lại từ đầu</button>`,e=>{e.querySelector(`#btn-replay`)?.addEventListener(`click`,()=>{this.closeModal(),this.hooks.onReset()})})}showPause(){let e=this.g.s.settings;this.showModal(`<h2>Menu tạm dừng — ĐI TÙ ONLINE (Mốc 1)</h2>
       <div class="card-row">
         <label>Chất lượng đồ họa:
           <select id="sel-q">
             <option value="low" ${e.quality===`low`?`selected`:``}>Thấp (điện thoại yếu)</option>
             <option value="medium" ${e.quality===`medium`?`selected`:``}>Vừa</option>
             <option value="high" ${e.quality===`high`?`selected`:``}>Cao</option>
           </select>
         </label>
       </div>
       <div class="card-row">
         <label>Âm lượng: <input type="range" id="rng-vol" min="0" max="1" step="0.05" value="${e.volume}"/></label>
       </div>
       <div class="card-row">
         <div class="hud-sub">Điều khiển: WASD di chuyển, kéo chuột/vuốt xoay camera, Shift chạy, E tương tác, J/P/R/B/M mở bảng. Tiến trình tự động lưu vào trình duyệt.</div>
       </div>
       <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px">
         <button class="btn btn-accent" data-close>Tiếp tục chơi</button>
         <button class="btn btn-danger" id="btn-reset">Bắt đầu lại từ đầu</button>
       </div>`,e=>{e.querySelector(`#sel-q`)?.addEventListener(`change`,e=>{this.g.s.settings.quality=e.target.value,this.hooks.onSettingChange(),this.g.commit()}),e.querySelector(`#rng-vol`)?.addEventListener(`input`,e=>{this.g.s.settings.volume=Number(e.target.value),this.hooks.onSettingChange(),this.g.commit()}),e.querySelector(`#btn-reset`)?.addEventListener(`click`,()=>{this.showModal(`<h2>Xác nhận bắt đầu lại?</h2>
             <div class="card-row">Toàn bộ tiến trình hiện tại sẽ bị xóa và bắt đầu lại từ Ngày 1.</div>
             <button class="btn btn-danger" id="btn-confirm-reset">Xác nhận xóa & chơi mới</button>
             <button class="btn" data-close>Hủy</button>`,e=>{e.querySelector(`#btn-confirm-reset`)?.addEventListener(`click`,()=>{this.closeModal(),this.hooks.onReset()})})})})}};new class{constructor(){this.tpCam=new Wl,this.input=new Ul,this.sfx=new Gl,this.saves=new Jc(typeof localStorage<`u`?localStorage:null),this.npcs={},this.resting=!1,this.restrictedEpisode=0,this.wasInStorage=!1,this.currentPrompt=null}init(){let e=document.getElementById(`game-canvas`),t=document.getElementById(`ui`),n=this.saves.load();this.g=new Uc(n??Oc()),this.g.qStatus(`nhap_trai`)===`locked`&&this.g.startQuest(`nhap_trai`),this.renderer=new os({canvas:e,antialias:!0,powerPreference:`high-performance`}),this.renderer.setSize(window.innerWidth,window.innerHeight,!0),e.style.width=`100vw`,e.style.height=`100vh`,e.style.width=`100dvw`,e.style.height=`100dvh`,this.renderer.shadowMap.type=2,this.world=new Ll,this.world.setQuality(this.g.s.settings.quality,this.renderer),this.sfx.volume=this.g.s.settings.volume,this.playerRig=new Bl({uniform:`inmate`,skin:14857357,hair:1579035,hairStyle:`short`,accent:2278750,height:1,build:1}),this.world.scene.add(this.playerRig.root);for(let e of Object.keys(ml)){let t=new Hl(e);t.snapToSchedule(this.g.s.minute),this.npcs[e]=t,this.world.scene.add(t.rig.root)}this.world.collision.dynamic=()=>this.world.updateDoors(e=>this.g.isOpen(e)),this.ui=new Xl(t,this.g,this.sfx,{npcs:()=>this.npcs,playerPos:()=>this.g.s.player,onWait:e=>{this.g.advanceTo(e,this.tickCtx(!1,!1));for(let e of Object.keys(this.npcs))this.npcs[e].snapToSchedule(this.g.s.minute);this.saves.save(this.g.s)},onSleep:()=>this.sleepAndEndDay(!0),onReset:()=>{this.saves.clear(),this.g=new Uc(Oc()),this.g.startQuest(`nhap_trai`),window.location.reload()},onSettingChange:()=>{this.world.setQuality(this.g.s.settings.quality,this.renderer),this.sfx.volume=this.g.s.settings.volume}}),Jl().then(e=>this.ui.updateReleaseInfo(e)),this.bindEvents(),this.input.bind(e,this.ui.joyZone,this.ui.joyKnob),this.input.onInteract=()=>{this.ui.paused||this.currentPrompt?.run()},this.input.onKeyCommand=e=>this.handleKey(e),this.ui.btnInteract.addEventListener(`click`,()=>{this.ui.paused||this.currentPrompt?.run()});let r=this.ui.btnSprint,i=e=>{e?.preventDefault(),this.input.sprintTouch=!0},a=()=>{this.input.sprintTouch=!1};r.addEventListener(`touchstart`,i,{passive:!1}),r.addEventListener(`touchend`,a),r.addEventListener(`touchcancel`,a),r.addEventListener(`mousedown`,i),r.addEventListener(`mouseup`,a),r.addEventListener(`mouseleave`,a);let o=()=>{let t=window.innerWidth,n=window.innerHeight;this.renderer.setSize(t,n,!0),e.style.width=`100vw`,e.style.height=`100vh`,e.style.width=`100dvw`,e.style.height=`100dvh`,this.tpCam.cam.aspect=t/n,this.tpCam.cam.updateProjectionMatrix(),this.input.reset()};window.addEventListener(`resize`,o),window.addEventListener(`orientationchange`,o),window.visualViewport?.addEventListener(`resize`,o),o(),window.addEventListener(`beforeunload`,()=>this.saves.save(this.g.s)),this.saves.save(this.g.s),window.__DITU__={app:this,logic:this.g,saves:this.saves,teleport:(e,t)=>{this.g.s.player.x=e,this.g.s.player.z=t;for(let e of Object.keys(this.npcs))this.npcs[e].snapToSchedule(this.g.s.minute);this.currentPrompt=this.findPrompt(),this.ui.updateHUD(this.currentPrompt,this.computeGuide())}};let s=performance.now(),c=e=>{let t=Math.min(.05,(e-s)/1e3);s=e,this.step(t),requestAnimationFrame(c)};requestAnimationFrame(c)}bindEvents(){this.g.on(`notice`,(e,t)=>this.ui.toast(e,t)),this.g.on(`save`,()=>this.saves.save(this.g.s)),this.g.on(`violation`,e=>this.ui.showViolationBanner(e)),this.g.on(`block`,e=>{this.sfx.bell(),this.ui.toast(`🔔 ${Sc(e.start)} — ${e.label} (${e.where})`,`info`)}),this.g.on(`hearing`,e=>this.ui.showHearing(e)),this.g.on(`faint`,()=>{this.g.s.player.x=-14.25,this.g.s.player.z=-27.6,this.g.advanceTo(Math.min(1260,this.g.s.minute+60),this.tickCtx(!1,!1))}),this.g.on(`forceSleep`,()=>{let e=nl(this.g.s.player.x,this.g.s.player.z).includes(`cellblock`);this.sleepAndEndDay(e)})}sleepAndEndDay(e){let t=this.g.endDay(e);for(let e of Object.keys(this.npcs))this.npcs[e].snapToSchedule(this.g.s.minute);this.saves.save(this.g.s),this.ui.showDaySummary(t)}handleKey(e){e===`KeyE`?this.ui.paused||this.currentPrompt?.run():this.ui.paused?e===`Escape`&&this.ui.closeModal():e===`KeyJ`?this.ui.openPanel(`journal`):e===`KeyP`?this.ui.openPanel(`record`):e===`KeyR`?this.ui.openPanel(`relations`):e===`KeyB`?this.ui.openPanel(`bag`):e===`KeyM`?this.ui.openPanel(`map`):e===`Escape`&&this.ui.openPanel(`pause`)}tickCtx(e,t){let n=nl(this.g.s.player.x,this.g.s.player.z);return{inCellblock:n.includes(`cellblock`),inRollcall:n.includes(`rollcall`),sprinting:t,moving:e,resting:this.resting}}step(e){let t=this.g.s.player;if(this.ui.paused)this.input.reset(),this.playerRig.pose=`stand`,this.playerRig.update(e,0);else{let n=this.input.moveVector(),r=Math.hypot(n.fwd,n.right)>.05;r&&(this.resting=!1);let i=n.sprint&&this.g.s.stats.stamina>5,a=r?i?5.8:3.7:0;if(r){let r=Math.sin(this.input.yaw),o=Math.cos(this.input.yaw),s=-r*n.fwd+o*n.right,c=-o*n.fwd-r*n.right,[l,u]=this.world.collision.move(t.x,t.z,s*a*e,c*a*e,.36);t.x=l,t.z=u,t.rot=Math.atan2(s,c),this.sfx.step(e,i)}this.playerRig.pose=this.resting?`sit`:r?`walk`:`stand`,this.playerRig.update(e,a),this.playerRig.root.position.set(t.x,0,t.z),this.playerRig.root.rotation.y=t.rot;for(let n of Object.keys(this.npcs)){let r=this.npcs[n];if(r.update(e,this.g.s.minute),r.rig.labelSprite){let e=Math.hypot(r.x-t.x,r.z-t.z);r.rig.labelSprite.visible=e<8}}this.g.tick(e,this.tickCtx(r,r&&i)),this.checkRestrictedZone()}this.world.update(e,this.g.s.minute,this.g.has(`chan_man`),this.g.has(`hop_mui_khoan`)||!!this.g.s.flags.stole_for_lam,this.g.has(`dep_bay`)||this.g.qStatus(`dep_bay`)===`done`,this.g.has(`chai_thuoc_hen`)||this.g.qStatus(`nghi_an_thuoc`)===`done`),this.tpCam.update(t.x,t.z,this.input.yaw,this.input.pitch,this.input.distance,this.world.cameraObstacles),this.currentPrompt=this.findPrompt(),this.ui.updateHUD(this.currentPrompt,this.computeGuide()),this.renderer.render(this.world.scene,this.tpCam.cam)}checkRestrictedZone(){let e=this.g.s.player,t=tl(el.find(e=>e.id===`storage`),e.x,e.z);if(t&&!this.wasInStorage&&(this.restrictedEpisode++,this.g.addStat(`suspicion`,5)),this.wasInStorage=t,!t)return;let n=this.world.seenByStorageCam(e.x,e.z),r=this.npcs.tung.canSee(e.x,e.z,this.world.collision),i=this.npcs.lan.canSee(e.x,e.z,this.world.collision);if(n||r||i){let t=n?`Camera góc kho ghi hình`:r?`Cán bộ Tùng bắt gặp trực tiếp`:`Quản giáo Lan bắt gặp`;this.g.recordViolation(`restricted`,`ep${this.restrictedEpisode}-d${this.g.s.day}`,`${t} bạn ở trong kho vật tư lúc ${Sc(this.g.s.minute)}.`),e.x=20.6,e.z=-7,this.wasInStorage=!1}}findPrompt(){let e=this.g.s.player,t=null,n=(e,n,r)=>{e<=n&&(!t||e<t.d)&&(t={d:e,target:r})};for(let t of Object.keys(this.npcs)){let r=this.npcs[t];n(Math.hypot(r.x-e.x,r.z-e.z),2.2,{id:`npc_${t}`,label:`Nói chuyện với ${r.def.name} (${r.activity})`,run:()=>{r.state=`talk`,r.faceToward(e.x,e.z);let n=gl(t,this.g,()=>this.ui.showAppealModal(),()=>this.ui.showVocationalMinigame());this.ui.showDialogue(n,()=>r.state=`activity`)}})}for(let t of $c)this.g.isOpen(t.area)||n(Math.hypot(t.ix-e.x,t.iz-e.z),2.1,{id:t.id,label:`${t.name} (Đang khóa — nhấn E xem lý do)`,run:()=>{let e=wc[t.area];this.ui.toast(`🔒 ${e.label}: ${e.reason}`,`warn`)}});for(let t of sl){let r=Math.hypot(t.x-e.x,t.z-e.z);if(r>t.r)continue;let i=this.spotTarget(t.id,t.label);i&&n(r,t.r,i)}return t?t.target:null}spotTarget(e,t){let n=this.g;switch(e){case`bed`:{if(!n.has(`chan_man`))return{id:e,label:`${t}: Nhận chăn màn & đồ cá nhân`,run:()=>{n.giveItem(`chan_man`),n.completeObjective(`nhap_trai`,`chan_man`)}};let r=n.canSleep();return{id:e,label:r.ok?`${t}: Đi ngủ kết thúc Ngày ${n.s.day}`:`${t}: Nghỉ lưng / Chờ giờ (${r.reason})`,run:()=>r.ok?this.sleepAndEndDay(!0):this.ui.showWait()}}case`rules`:return{id:e,label:`${t}: Đọc nội quy Trại giam An Phú`,run:()=>{n.completeObjective(`nhap_trai`,`noi_quy`),this.ui.showDialogue({speaker:`BẢNG NỘI QUY KHU GIAM A`,text:`1. Điểm danh sáng 06:30–06:45 tại ô sơn vàng ngoài sân. Đến sau 06:45 tính trễ (−3 điểm), sau 07:00 tính vắng (−6 điểm).
2. Lao động ca sáng 08:00–11:30 tại xưởng: bấm bảng chấm công trước 08:30 và hoàn thành đủ 3 sản phẩm.
3. Tuyệt đối không tự ý vào Kho vật tư hoặc tàng trữ hàng cấm.
4. Đúng 21:00 về khu buồng giam; 21:30 kiểm tra buồng.
5. Mọi khiếu nại có bằng chứng được tiếp nhận tại Phòng quản giáo (07:00–17:00).`,choices:[{label:`Đã đọc và ghi nhớ`,run:()=>null}]})}};case`meal`:return{id:e,label:`${t}: Nhận suất cơm trại`,run:()=>{let e=n.eatMeal();e?this.ui.toast(e,`warn`):this.sfx.good()}};case`canteen`:return{id:e,label:`${t}: Mua đồ ăn & nhu yếu phẩm`,run:()=>this.ui.showCanteen()};case`clock`:return{id:e,label:`${t}: Chấm công lao động`,run:()=>{let e=n.clockIn();e?this.ui.toast(e,`warn`):this.sfx.good()}};case`workbench`:return{id:e,label:`${t}: Lắp ráp ổ cắm điện (${n.s.daily.workUnits}/3)`,run:()=>this.ui.showWorkbenchMinigame()};case`rest_ws`:case`bench_yard`:case`stonetable`:return{id:e,label:`${t}: Ngồi nghỉ hồi thể lực & giảm căng thẳng`,run:()=>{this.resting=!this.resting,this.ui.toast(this.resting?`Đang ngồi nghỉ — thể lực hồi nhanh hơn.`:`Đã đứng dậy.`,`info`)}};case`drill`:return n.has(`hop_mui_khoan`)||n.s.flags.stole_for_lam?null:{id:e,label:`${t}: Lấy hộp mũi khoan`,risk:Ic.theft.risk,run:()=>{let e=n.s.player;this.world.seenByStorageCam(e.x,e.z)||this.npcs.tung.canSee(e.x,e.z,this.world.collision)?(n.recordViolation(`theft`,`caught-d${n.s.day}`,`Camera kho / Cán bộ Tùng bắt quả tang bạn lấy hộp mũi khoan trên kệ.`),n.s.flags.canteenBanUntil=n.s.day+2,n.qStatus(`mon_no`)===`active`&&n.qBranch(`mon_no`)===`steal`&&n.finishQuest(`mon_no`,`failed`,`Bị bắt quả tang khi lấy hộp mũi khoan`),e.x=20.6,e.z=-7):(n.giveItem(`hop_mui_khoan`),n.addStat(`suspicion`,18),n.completeObjective(`mon_no`,`lay_khoan`))}};case`exercise`:return{id:e,label:`${t}: Tập thể lực & giảm căng thẳng`,run:()=>this.ui.showExerciseMinigame()};case`sandals`:return n.qStatus(`dep_bay`)!==`active`||n.has(`dep_bay`)?null:{id:e,label:`${t}: Nhặt đôi dép tổ ong chữ B7 của Chú Bảy`,run:()=>{n.giveItem(`dep_bay`),n.completeObjective(`dep_bay`,`tim_dep`)}};case`lan_desk`:return{id:e,label:`${t}: Xem hồ sơ / Giải trình vi phạm`,run:()=>this.ui.showAppealModal()};case`discipline`:return{id:e,label:`${t} (Đang khóa)`,run:()=>this.ui.toast(`🔒 ${wc.discipline.reason}`,`info`)};case`med_table`:return{id:e,label:`${t}: Nói chuyện với Y sĩ An`,run:()=>{let e=this.npcs.an;e.state=`talk`,e.faceToward(this.g.s.player.x,this.g.s.player.z);let t=gl(`an`,this.g,()=>this.ui.showAppealModal());this.ui.showDialogue(t,()=>e.state=`activity`)}};case`med_cabinet`:return{id:e,label:`${t}: Phụ việc sắp xếp thuốc men`,run:()=>this.ui.showMedicineSortingMinigame()};case`class_workbench`:return{id:e,label:`${t}: Thực hành nối mạch an toàn`,run:()=>this.ui.showVocationalMinigame()};case`library_shelf`:return{id:e,label:`${t}: Mượn & đọc cẩm nang cải tạo`,run:()=>this.ui.showLibraryReader()};case`visit_booth`:return{id:e,label:`${t}: Nhấc ống nghe nói chuyện với Chị Mai`,run:()=>{let e=this.npcs.mai;e.state=`talk`,e.faceToward(this.g.s.player.x,this.g.s.player.z);let t=gl(`mai`,this.g,()=>this.ui.showAppealModal());this.ui.showDialogue(t,()=>e.state=`activity`)}};case`asthma_spot`:return this.g.has(`chai_thuoc_hen`)||this.g.qStatus(`nghi_an_thuoc`)===`done`?null:{id:e,label:`${t}: Nhặt lọ thuốc hen suyễn`,run:()=>{this.g.giveItem(`chai_thuoc_hen`),this.g.completeObjective(`nghi_an_thuoc`,`nhat_thuoc`),this.ui.toast(`Đã nhặt lọ thuốc hen của Chú Bảy! Hãy mang về phòng y tế đưa cho Y sĩ An.`,`good`)}}}return null}guideTo(e,t,n,r){let i=this.g.s.player,a=Math.hypot(t-i.x,n-i.z),o=nl(i.x,i.z),s=nl(t,n),c=o.length>0&&s.length>0&&o.some(e=>s.includes(e));if(a<2||a<3.8&&c){let o=t-i.x,s=n-i.z;return{label:e,dist:a,angle:Math.atan2(o,-s)-this.input.yaw,isDuty:r}}let l=Ml(jl(i.x,i.z),jl(t,n)),u=l[0],[d,f]=cl[u];Math.hypot(d-i.x,f-i.z)<1.3&&l.length>1&&(u=l[1]);let[p,m]=cl[u],h=p-i.x,g=m-i.z,_=Math.hypot(h,g),v=Math.max(0,l.indexOf(u));for(let e=v;e<l.length-1;e++){let[t,n]=cl[l[e]],[r,i]=cl[l[e+1]];_+=Math.hypot(t-r,n-i)}let[y,b]=cl[l[l.length-1]];return _+=Math.hypot(t-y,n-b),{label:e,dist:_,angle:Math.atan2(h,-g)-this.input.yaw,isDuty:r}}computeGuide(){let e=this.g,t=e.s.player,n=bc(e.s.minute);if(n.id===`rollcall`&&e.s.daily.rollcall===`pending`)return this.guideTo(`Ô điểm danh sáng sân trại`,-9,-9,!0);if(n.id===`work`){if(!e.s.daily.workClockedIn)return this.guideTo(`Bảng chấm công xưởng (trước 08:30)`,13.1,-6,!0);if(e.s.daily.workUnits===0)return this.guideTo(`Bàn xưởng: hoàn thành ca lao động sáng`,16,.15,!0)}if(n.id===`curfew`&&!nl(t.x,t.z).includes(`cellblock`))return this.guideTo(`Về buồng giam 3 điểm danh tối & ngủ`,-14.9,-28.6,!0);let r=0,i=0,a=``,o=()=>n.id===`work`?`Chú Bảy (Bàn xưởng #2)`:n.id===`breakfast`||n.id===`lunch`||n.id===`dinner`?`Chú Bảy (Nhà ăn)`:n.id===`wake`||n.id===`rest`||n.id===`curfew`?`Chú Bảy (Buồng 3)`:`Chú Bảy (Bàn cờ đá sân trại)`;if(e.qStatus(`nhap_trai`)===`active`)e.qObj(`nhap_trai`,`chan_man`)?e.qObj(`nhap_trai`,`noi_quy`)?e.qObj(`nhap_trai`,`diem_danh`)?e.qObj(`nhap_trai`,`gap_bay`)||(r=this.npcs.bay.x,i=this.npcs.bay.z,a=o()):(r=-9,i=-9,a=`Ô điểm danh sáng sân trại`):(r=-27,i=-21.5,a=`Bảng nội quy buồng giam`):(r=-14.9,i=-28.6,a=`Giường của bạn (Nhận chăn màn)`);else if(e.qStatus(`ca_dau`)===`active`)e.qObj(`ca_dau`,`cham_cong`)?e.qObj(`ca_dau`,`lap_rap`)?(r=this.npcs.bay.x,i=this.npcs.bay.z,a=o()):(r=16,i=.15,a=`Bàn lắp ráp linh kiện`):(r=13.1,i=-6,a=`Bảng chấm công xưởng`);else if(e.qStatus(`mon_no`)===`active`){let t=e.qBranch(`mon_no`);e.qObj(`mon_no`,`nghe_huy`)?!e.qObj(`mon_no`,`gap_lam`)||!t?(r=this.npcs.lam.x,i=this.npcs.lam.z,a=`Lâm (Khu thể thao sân)`):t===`steal`&&!e.qObj(`mon_no`,`lay_khoan`)?(r=26.2,i=-5.2,a=`Kệ kho xưởng (Lẻn lấy hộp khoan)`):t===`steal`?(r=this.npcs.lam.x,i=this.npcs.lam.z,a=`Lâm (Giao đồ)`):t===`pay`?(r=this.npcs.lam.x,i=this.npcs.lam.z,a=`Lâm (Trả 40.000đ)`):t===`report`&&(r=this.npcs.lan.x,i=this.npcs.lan.z,a=`Quản giáo Lan (Báo cáo kèm vật chứng)`):(r=this.npcs.huy.x,i=this.npcs.huy.z,a=`Huy (Buồng 3 / Sân)`)}else if(e.qStatus(`lop_nghe_dau`)===`active`){let t=e.isOpen(`classroom`);e.qObj(`lop_nghe_dau`,`den_lop`)?e.qObj(`lop_nghe_dau`,`thao_tac`)?(r=this.npcs.phuc.x,i=this.npcs.phuc.z,a=`Thầy Phúc (Nhận chứng chỉ)`):(r=-21.5,i=13,a=t?`Bàn thực hành nối mạch`:`Bàn thực hành (Mở 14:00–16:30)`):(r=this.npcs.phuc.x,i=this.npcs.phuc.z,a=t?`Thầy Phúc (Lớp học nghề)`:`Thầy Phúc (Lớp mở 14:00–16:30)`)}else if(e.qStatus(`nghi_an_thuoc`)===`active`){let t=e.isOpen(`medical`);e.qObj(`nghi_an_thuoc`,`hoi_an`)?e.qObj(`nghi_an_thuoc`,`hoi_bay`)?e.qObj(`nghi_an_thuoc`,`nhat_thuoc`)?(r=this.npcs.an.x,i=this.npcs.an.z,a=t?`Y sĩ An (Giao thuốc cứu chú Bảy)`:`Y sĩ An (Phòng y tế)`):(r=22.5,i=13,a=`Lọ thuốc rơi góc sau xưởng`):(r=this.npcs.bay.x,i=this.npcs.bay.z,a=o()):(r=this.npcs.an.x,i=this.npcs.an.z,a=t?`Y sĩ An (Phòng y tế)`:`Y sĩ An (Mở 07:30–11:30 & 13:30–17:00)`)}else if(e.qStatus(`phong_tham_gap`)===`active`){let t=e.isOpen(`visitation`);r=-22.5,i=-8.8,a=t?`Vách kính thăm gặp (Chị Mai)`:`Phòng thăm gặp (Mở 08:30–11:00 & 14:00–16:30)`}return a?this.guideTo(a,r,i,!1):null}}().init(),`serviceWorker`in navigator&&(window.location.protocol===`https:`||window.location.hostname===`localhost`||window.location.hostname===`127.0.0.1`)&&window.addEventListener(`load`,()=>{navigator.serviceWorker.register(`./sw.js`).then(e=>{e.addEventListener(`updatefound`,()=>{let t=e.installing;t&&t.addEventListener(`statechange`,()=>{t.state===`installed`&&navigator.serviceWorker.controller&&console.log(`[SW] Bản cập nhật mới đã sẵn sàng.`)})})}).catch(e=>{console.warn(`[SW] Không thể đăng ký Service Worker:`,e)})});