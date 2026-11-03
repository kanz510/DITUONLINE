(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`attached`,t=1e3,n=1001,r=1002,i=1003,a=1004,o=1005,s=1006,c=1007,l=1008,u=1009,d=1010,f=1011,p=1012,m=1013,h=1014,g=1015,_=1016,v=1017,y=1018,b=1020,x=35902,S=1021,C=1022,w=1023,T=1024,E=1025,D=1026,ee=1027,O=1028,te=1029,k=1030,ne=1031,re=1033,A=33776,j=33777,ie=33778,ae=33779,oe=35840,se=35841,ce=35842,le=35843,ue=36196,de=37492,fe=37496,pe=37808,me=37809,he=37810,ge=37811,_e=37812,ve=37813,ye=37814,M=37815,be=37816,xe=37817,Se=37818,N=37819,Ce=37820,P=37821,F=36492,we=36494,Te=36495,Ee=36283,De=36284,Oe=36285,ke=36286,Ae=2300,je=2301,Me=2302,Ne=2400,Pe=2401,Fe=2402,Ie=2500,Le=3200,Re=3201,ze=`srgb`,Be=`srgb-linear`,Ve=`linear`,He=`srgb`,Ue=7680,We=35044,Ge=2e3,Ke=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let e=n.indexOf(t);e!==-1&&n.splice(e,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let t=0,r=n.length;t<r;t++)n[t].call(this,e);e.target=null}}},qe=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Je=1234567,Ye=Math.PI/180,Xe=180/Math.PI;function Ze(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(qe[e&255]+qe[e>>8&255]+qe[e>>16&255]+qe[e>>24&255]+`-`+qe[t&255]+qe[t>>8&255]+`-`+qe[t>>16&15|64]+qe[t>>24&255]+`-`+qe[n&63|128]+qe[n>>8&255]+`-`+qe[n>>16&255]+qe[n>>24&255]+qe[r&255]+qe[r>>8&255]+qe[r>>16&255]+qe[r>>24&255]).toLowerCase()}function Qe(e,t,n){return Math.max(t,Math.min(n,e))}function $e(e,t){return(e%t+t)%t}function et(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function tt(e,t,n){return e===t?0:(n-e)/(t-e)}function nt(e,t,n){return(1-n)*e+n*t}function rt(e,t,n,r){return nt(e,t,1-Math.exp(-n*r))}function it(e,t=1){return t-Math.abs($e(e,t*2)-t)}function at(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function ot(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function st(e,t){return e+Math.floor(Math.random()*(t-e+1))}function ct(e,t){return e+Math.random()*(t-e)}function lt(e){return e*(.5-Math.random())}function ut(e){e!==void 0&&(Je=e);let t=Je+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function dt(e){return e*Ye}function ft(e){return e*Xe}function pt(e){return!(e&e-1)&&e!==0}function mt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function ht(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function gt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:console.warn(`THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function _t(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function I(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var vt={DEG2RAD:Ye,RAD2DEG:Xe,generateUUID:Ze,clamp:Qe,euclideanModulo:$e,mapLinear:et,inverseLerp:tt,lerp:nt,damp:rt,pingpong:it,smoothstep:at,smootherstep:ot,randInt:st,randFloat:ct,randFloatSpread:lt,seededRandom:ut,degToRad:dt,radToDeg:ft,isPowerOfTwo:pt,ceilPowerOfTwo:mt,floorPowerOfTwo:ht,setQuaternionFromProperEuler:gt,normalize:I,denormalize:_t},L=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},R=class e{constructor(t,n,r,i,a,o,s,c,l){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(yt.makeScale(e,t)),this}rotate(e){return this.premultiply(yt.makeRotation(-e)),this}translate(e,t){return this.premultiply(yt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},yt=new R;function bt(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function xt(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function St(){let e=xt(`canvas`);return e.style.display=`block`,e}var Ct={};function wt(e){e in Ct||(Ct[e]=!0,console.warn(e))}function Tt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}function Et(e){let t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Dt(e){let t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var z={enabled:!0,workingColorSpace:Be,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Ot(e.r),e.g=Ot(e.g),e.b=Ot(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=kt(e.r),e.g=kt(e.g),e.b=kt(e.b))),e},fromWorkingColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ve:this.spaces[e].transfer},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}};function Ot(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function kt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var At=[.64,.33,.3,.6,.15,.06],jt=[.2126,.7152,.0722],Mt=[.3127,.329],Nt=new R().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pt=new R().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);z.define({[Be]:{primaries:At,whitePoint:Mt,transfer:Ve,toXYZ:Nt,fromXYZ:Pt,luminanceCoefficients:jt,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:At,whitePoint:Mt,transfer:He,toXYZ:Nt,fromXYZ:Pt,luminanceCoefficients:jt,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}});var Ft,It=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ft===void 0&&(Ft=xt(`canvas`)),Ft.width=e.width,Ft.height=e.height;let n=Ft.getContext(`2d`);e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ft}return t.width>2048||t.height>2048?(console.warn(`THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons`,e),t.toDataURL(`image/jpeg`,.6)):t.toDataURL(`image/png`)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=xt(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Ot(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Ot(t[e]/255)*255):t[e]=Ot(t[e]);return{data:t,width:e.width,height:e.height}}return console.warn(`THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Lt=0,Rt=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lt++}),this.uuid=Ze(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(zt(r[t].image)):e.push(zt(r[t]))}else e=zt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function zt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?It.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn(`THREE.Texture: Unable to serialize Texture.`),{})}var Bt=0,Vt=class e extends Ke{constructor(t=e.DEFAULT_IMAGE,r=e.DEFAULT_MAPPING,i=n,a=n,o=s,c=l,d=w,f=u,p=e.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bt++}),this.uuid=Ze(),this.name=``,this.source=new Rt(t),this.mipmaps=[],this.mapping=r,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=c,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new L(0,0),this.repeat=new L(1,1),this.center=new L(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new R,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case t:e.x-=Math.floor(e.x);break;case n:e.x=e.x<0?0:1;break;case r:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case t:e.y-=Math.floor(e.y);break;case n:e.y=e.y<0?0:1;break;case r:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Vt.DEFAULT_IMAGE=null,Vt.DEFAULT_MAPPING=300,Vt.DEFAULT_ANISOTROPY=1;var B=class e{constructor(t=0,n=0,r=0,i=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ht=class extends Ke{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new B(0,0,e,t),this.scissorTest=!1,this.viewport=new B(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:s,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let i=new Vt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);i.flipY=!1,i.generateMipmaps=n.generateMipmaps,i.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let e=0;e<a;e++)this.textures[e]=i.clone(),this.textures[e].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++)this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Rt(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:`dispose`})}},Ut=class extends Ht{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Wt=class extends Vt{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=i,this.minFilter=i,this.wrapR=n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Gt=class extends Vt{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=i,this.minFilter=i,this.wrapR=n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Kt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(o===0)e[t+0]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u;else if(o===1)e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m;else{if(u!==m||s!==d||c!==f||l!==p){let e=1-o,t=s*d+c*f+l*p+u*m,n=t>=0?1:-1,r=1-t*t;if(r>2**-52){let i=Math.sqrt(r),a=Math.atan2(i,t*n);e=Math.sin(e*a)/i,o=Math.sin(o*a)/i}let i=o*n;if(s=s*e+d*i,c=c*e+f*i,l=l*e+p*i,u=u*e+m*i,e===1-o){let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:console.warn(`THREE.Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<2**-52?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,i=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=i,this;let s=1-o*o;if(s<=2**-52){let e=1-t;return this._w=e*a+t*this._w,this._x=e*n+t*this._x,this._y=e*r+t*this._y,this._z=e*i+t*this._z,this.normalize(),this}let c=Math.sqrt(s),l=Math.atan2(c,o),u=Math.sin((1-t)*l)/c,d=Math.sin(t*l)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=i*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class e{constructor(t=0,n=0,r=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qt.copy(this).projectOnVector(e),this.sub(qt)}reflect(e){return this.sub(qt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},qt=new V,Jt=new Kt,Yt=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Zt):Zt.fromBufferAttribute(r,t),Zt.applyMatrix4(e.matrixWorld),this.expandByPoint(Zt);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Qt.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Qt.copy(e.boundingBox)),Qt.applyMatrix4(e.matrixWorld),this.union(Qt)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(on),sn.subVectors(this.max,on),$t.subVectors(e.a,on),en.subVectors(e.b,on),tn.subVectors(e.c,on),nn.subVectors(en,$t),rn.subVectors(tn,en),an.subVectors($t,tn);let t=[0,-nn.z,nn.y,0,-rn.z,rn.y,0,-an.z,an.y,nn.z,0,-nn.x,rn.z,0,-rn.x,an.z,0,-an.x,-nn.y,nn.x,0,-rn.y,rn.x,0,-an.y,an.x,0];return!un(t,$t,en,tn,sn)||(t=[1,0,0,0,1,0,0,0,1],!un(t,$t,en,tn,sn))?!1:(cn.crossVectors(nn,rn),t=[cn.x,cn.y,cn.z],un(t,$t,en,tn,sn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Xt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xt)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Xt=[new V,new V,new V,new V,new V,new V,new V,new V],Zt=new V,Qt=new Yt,$t=new V,en=new V,tn=new V,nn=new V,rn=new V,an=new V,on=new V,sn=new V,cn=new V,ln=new V;function un(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){ln.fromArray(e,a);let o=i.x*Math.abs(ln.x)+i.y*Math.abs(ln.y)+i.z*Math.abs(ln.z),s=t.dot(ln),c=n.dot(ln),l=r.dot(ln);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var dn=new Yt,fn=new V,pn=new V,mn=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?dn.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fn.subVectors(e,this.center);let t=fn.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(fn,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pn.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fn.copy(e.center).add(pn)),this.expandByPoint(fn.copy(e.center).sub(pn))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},hn=new V,gn=new V,_n=new V,vn=new V,yn=new V,bn=new V,xn=new V,Sn=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hn.copy(this.origin).addScaledVector(this.direction,t),hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){gn.copy(e).add(t).multiplyScalar(.5),_n.copy(t).sub(e).normalize(),vn.copy(this.origin).sub(gn);let i=e.distanceTo(t)*.5,a=-this.direction.dot(_n),o=vn.dot(this.direction),s=-vn.dot(_n),c=vn.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(gn).addScaledVector(_n,d),f}intersectSphere(e,t){hn.subVectors(e.center,this.origin);let n=hn.dot(this.direction),r=hn.dot(hn)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,hn)!==null}intersectTriangle(e,t,n,r,i){yn.subVectors(t,e),bn.subVectors(n,e),xn.crossVectors(yn,bn);let a=this.direction.dot(xn),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;vn.subVectors(this.origin,e);let s=o*this.direction.dot(bn.crossVectors(vn,bn));if(s<0)return null;let c=o*this.direction.dot(yn.cross(vn));if(c<0||s+c>a)return null;let l=-o*vn.dot(xn);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},H=class e{constructor(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Cn.setFromMatrixColumn(e,0).length(),i=1/Cn.setFromMatrixColumn(e,1).length(),a=1/Cn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tn,e,En)}lookAt(e,t,n){let r=this.elements;return kn.subVectors(e,t),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),Dn.crossVectors(n,kn),Dn.lengthSq()===0&&(Math.abs(n.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),Dn.crossVectors(n,kn)),Dn.normalize(),On.crossVectors(kn,Dn),r[0]=Dn.x,r[4]=On.x,r[8]=kn.x,r[1]=Dn.y,r[5]=On.y,r[9]=kn.y,r[2]=Dn.z,r[6]=On.z,r[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],ee=r[13],O=r[2],te=r[6],k=r[10],ne=r[14],re=r[3],A=r[7],j=r[11],ie=r[15];return i[0]=a*x+o*T+s*O+c*re,i[4]=a*S+o*E+s*te+c*A,i[8]=a*C+o*D+s*k+c*j,i[12]=a*w+o*ee+s*ne+c*ie,i[1]=l*x+u*T+d*O+f*re,i[5]=l*S+u*E+d*te+f*A,i[9]=l*C+u*D+d*k+f*j,i[13]=l*w+u*ee+d*ne+f*ie,i[2]=p*x+m*T+h*O+g*re,i[6]=p*S+m*E+h*te+g*A,i[10]=p*C+m*D+h*k+g*j,i[14]=p*w+m*ee+h*ne+g*ie,i[3]=_*x+v*T+y*O+b*re,i[7]=_*S+v*E+y*te+b*A,i[11]=_*C+v*D+y*k+b*j,i[15]=_*w+v*ee+y*ne+b*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15];return p*(+i*s*u-r*c*u-i*o*d+n*c*d+r*o*f-n*s*f)+m*(+t*s*f-t*c*d+i*a*d-r*a*f+r*c*l-i*s*l)+h*(+t*c*u-t*o*f-i*a*u+n*a*f+i*o*l-n*c*l)+g*(-r*o*l-t*s*u+t*o*d+r*a*u-n*a*d+n*s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=u*h*c-m*d*c+m*s*f-o*h*f-u*s*g+o*d*g,v=p*d*c-l*h*c-p*s*f+a*h*f+l*s*g-a*d*g,y=l*m*c-p*u*c+p*o*f-a*m*f-l*o*g+a*u*g,b=p*u*s-l*m*s-p*o*d+a*m*d+l*o*h-a*u*h,x=t*_+n*v+r*y+i*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=_*S,e[1]=(m*d*i-u*h*i-m*r*f+n*h*f+u*r*g-n*d*g)*S,e[2]=(o*h*i-m*s*i+m*r*c-n*h*c-o*r*g+n*s*g)*S,e[3]=(u*s*i-o*d*i-u*r*c+n*d*c+o*r*f-n*s*f)*S,e[4]=v*S,e[5]=(l*h*i-p*d*i+p*r*f-t*h*f-l*r*g+t*d*g)*S,e[6]=(p*s*i-a*h*i-p*r*c+t*h*c+a*r*g-t*s*g)*S,e[7]=(a*d*i-l*s*i+l*r*c-t*d*c-a*r*f+t*s*f)*S,e[8]=y*S,e[9]=(p*u*i-l*m*i-p*n*f+t*m*f+l*n*g-t*u*g)*S,e[10]=(a*m*i-p*o*i+p*n*c-t*m*c-a*n*g+t*o*g)*S,e[11]=(l*o*i-a*u*i-l*n*c+t*u*c+a*n*f-t*o*f)*S,e[12]=b*S,e[13]=(l*m*r-p*u*r+p*n*d-t*m*d-l*n*h+t*u*h)*S,e[14]=(p*o*r-a*m*r-p*n*s+t*m*s+a*n*h-t*o*h)*S,e[15]=(a*u*r-l*o*r+l*n*s-t*u*s-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,i=Cn.set(r[0],r[1],r[2]).length(),a=Cn.set(r[4],r[5],r[6]).length(),o=Cn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],wn.copy(this);let s=1/i,c=1/a,l=1/o;return wn.elements[0]*=s,wn.elements[1]*=s,wn.elements[2]*=s,wn.elements[4]*=c,wn.elements[5]*=c,wn.elements[6]*=c,wn.elements[8]*=l,wn.elements[9]*=l,wn.elements[10]*=l,t.setFromRotationMatrix(wn),n.x=i,n.y=a,n.z=o,this}makePerspective(e,t,n,r,i,a,o=Ge){let s=this.elements,c=2*i/(t-e),l=2*i/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),f,p;if(o===2e3)f=-(a+i)/(a-i),p=-2*a*i/(a-i);else if(o===2001)f=-a/(a-i),p=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return s[0]=c,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=l,s[9]=d,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=p,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ge){let s=this.elements,c=1/(t-e),l=1/(n-r),u=1/(a-i),d=(t+e)*c,f=(n+r)*l,p,m;if(o===2e3)p=(a+i)*u,m=-2*u;else if(o===2001)p=i*u,m=-1*u;else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-d,s[1]=0,s[5]=2*l,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=m,s[14]=-p,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Cn=new V,wn=new H,Tn=new V(0,0,0),En=new V(1,1,1),Dn=new V,On=new V,kn=new V,An=new H,jn=new Kt,Mn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-Qe(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(Qe(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn(`THREE.Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return An.makeRotationFromQuaternion(e),this.setFromRotationMatrix(An,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jn.setFromEuler(this),this.setFromQuaternion(jn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Mn.DEFAULT_ORDER=`XYZ`;var Nn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Pn=0,Fn=new V,In=new Kt,Ln=new H,Rn=new V,zn=new V,Bn=new V,Vn=new Kt,Hn=new V(1,0,0),Un=new V(0,1,0),Wn=new V(0,0,1),Gn={type:`added`},Kn={type:`removed`},qn={type:`childadded`,child:null},Jn={type:`childremoved`,child:null},Yn=class e extends Ke{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pn++}),this.uuid=Ze(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new V,n=new Mn,r=new Kt,i=new V(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new H},normalMatrix:{value:new R}}),this.matrix=new H,this.matrixWorld=new H,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return In.setFromAxisAngle(e,t),this.quaternion.multiply(In),this}rotateOnWorldAxis(e,t){return In.setFromAxisAngle(e,t),this.quaternion.premultiply(In),this}rotateX(e){return this.rotateOnAxis(Hn,e)}rotateY(e){return this.rotateOnAxis(Un,e)}rotateZ(e){return this.rotateOnAxis(Wn,e)}translateOnAxis(e,t){return Fn.copy(e).applyQuaternion(this.quaternion),this.position.add(Fn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hn,e)}translateY(e){return this.translateOnAxis(Un,e)}translateZ(e){return this.translateOnAxis(Wn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Rn.copy(e):Rn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),zn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(zn,Rn,this.up):Ln.lookAt(Rn,zn,this.up),this.quaternion.setFromRotationMatrix(Ln),r&&(Ln.extractRotation(r.matrixWorld),In.setFromRotationMatrix(Ln),this.quaternion.premultiply(In.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(console.error(`THREE.Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gn),qn.child=e,this.dispatchEvent(qn),qn.child=null):console.error(`THREE.Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kn),Jn.child=e,this.dispatchEvent(Jn),Jn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gn),qn.child=e,this.dispatchEvent(qn),qn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zn,e,Bn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zn,Vn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(e=>({boxInitialized:e.boxInitialized,boxMin:e.box.min.toArray(),boxMax:e.box.max.toArray(),sphereInitialized:e.sphereInitialized,sphereRadius:e.sphere.radius,sphereCenter:e.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};Yn.DEFAULT_UP=new V(0,1,0),Yn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xn=new V,Zn=new V,Qn=new V,$n=new V,er=new V,tr=new V,nr=new V,rr=new V,ir=new V,ar=new V,or=new B,sr=new B,cr=new B,lr=class e{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Xn.subVectors(e,t),r.cross(Xn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Xn.subVectors(r,t),Zn.subVectors(n,t),Qn.subVectors(e,t);let a=Xn.dot(Xn),o=Xn.dot(Zn),s=Xn.dot(Qn),c=Zn.dot(Zn),l=Zn.dot(Qn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,$n)!==null&&$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,$n)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,$n.x),s.addScaledVector(a,$n.y),s.addScaledVector(o,$n.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return or.setScalar(0),sr.setScalar(0),cr.setScalar(0),or.fromBufferAttribute(e,t),sr.fromBufferAttribute(e,n),cr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(or,i.x),a.addScaledVector(sr,i.y),a.addScaledVector(cr,i.z),a}static isFrontFacing(e,t,n,r){return Xn.subVectors(n,t),Zn.subVectors(e,t),Xn.cross(Zn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),Xn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;er.subVectors(r,n),tr.subVectors(i,n),rr.subVectors(e,n);let s=er.dot(rr),c=tr.dot(rr);if(s<=0&&c<=0)return t.copy(n);ir.subVectors(e,r);let l=er.dot(ir),u=tr.dot(ir);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(er,a);ar.subVectors(e,i);let f=er.dot(ar),p=tr.dot(ar);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(tr,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return nr.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(nr,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(er,a).addScaledVector(tr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ur={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dr={h:0,s:0,l:0},fr={h:0,s:0,l:0};function pr(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var U=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ze){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,z.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=z.workingColorSpace){return this.r=e,this.g=t,this.b=n,z.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=z.workingColorSpace){if(e=$e(e,1),t=Qe(t,0,1),n=Qe(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=pr(i,r,e+1/3),this.g=pr(i,r,e),this.b=pr(i,r,e-1/3)}return z.toWorkingColorSpace(this,r),this}setStyle(e,t=ze){function n(t){t!==void 0&&parseFloat(t)<1&&console.warn(`THREE.Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn(`THREE.Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);console.warn(`THREE.Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ze){let n=ur[e.toLowerCase()];return n===void 0?console.warn(`THREE.Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ot(e.r),this.g=Ot(e.g),this.b=Ot(e.b),this}copyLinearToSRGB(e){return this.r=kt(e.r),this.g=kt(e.g),this.b=kt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ze){return z.fromWorkingColorSpace(mr.copy(this),e),Math.round(Qe(mr.r*255,0,255))*65536+Math.round(Qe(mr.g*255,0,255))*256+Math.round(Qe(mr.b*255,0,255))}getHexString(e=ze){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=z.workingColorSpace){z.fromWorkingColorSpace(mr.copy(this),t);let n=mr.r,r=mr.g,i=mr.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=z.workingColorSpace){return z.fromWorkingColorSpace(mr.copy(this),t),e.r=mr.r,e.g=mr.g,e.b=mr.b,e}getStyle(e=ze){z.fromWorkingColorSpace(mr.copy(this),e);let t=mr.r,n=mr.g,r=mr.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(dr),this.setHSL(dr.h+e,dr.s+t,dr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(dr),e.getHSL(fr);let n=nt(dr.h,fr.h,t),r=nt(dr.s,fr.s,t),i=nt(dr.l,fr.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mr=new U;U.NAMES=ur;var hr=0,gr=class extends Ke{static get type(){return`Material`}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hr++}),this.uuid=Ze(),this.name=``,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new U(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ue,this.stencilZFail=Ue,this.stencilZPass=Ue,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn(`Material: onBuild() has been removed.`)}},_r=class extends gr{static get type(){return`MeshBasicMaterial`}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new U(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},vr=new V,yr=new L,br=class{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=We,this.updateRanges=[],this.gpuType=g,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)yr.fromBufferAttribute(this,t),yr.applyMatrix3(e),this.setXY(t,yr.x,yr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vr.fromBufferAttribute(this,t),vr.applyMatrix3(e),this.setXYZ(t,vr.x,vr.y,vr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vr.fromBufferAttribute(this,t),vr.applyMatrix4(e),this.setXYZ(t,vr.x,vr.y,vr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vr.fromBufferAttribute(this,t),vr.applyNormalMatrix(e),this.setXYZ(t,vr.x,vr.y,vr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vr.fromBufferAttribute(this,t),vr.transformDirection(e),this.setXYZ(t,vr.x,vr.y,vr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=_t(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=I(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_t(t,this.array)),t}setX(e,t){return this.normalized&&(t=I(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_t(t,this.array)),t}setY(e,t){return this.normalized&&(t=I(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_t(t,this.array)),t}setZ(e,t){return this.normalized&&(t=I(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_t(t,this.array)),t}setW(e,t){return this.normalized&&(t=I(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=I(t,this.array),n=I(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=I(t,this.array),n=I(n,this.array),r=I(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=I(t,this.array),n=I(n,this.array),r=I(r,this.array),i=I(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}},xr=class extends br{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Sr=class extends br{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Cr=class extends br{constructor(e,t,n){super(new Float32Array(e),t,n)}},wr=0,Tr=new H,Er=new Yn,Dr=new V,Or=new Yt,kr=new Yt,Ar=new V,jr=class e extends Ke{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wr++}),this.uuid=Ze(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(bt(e)?Sr:xr)(e,1):e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new R().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tr.makeRotationFromQuaternion(e),this.applyMatrix4(Tr),this}rotateX(e){return Tr.makeRotationX(e),this.applyMatrix4(Tr),this}rotateY(e){return Tr.makeRotationY(e),this.applyMatrix4(Tr),this}rotateZ(e){return Tr.makeRotationZ(e),this.applyMatrix4(Tr),this}translate(e,t,n){return Tr.makeTranslation(e,t,n),this.applyMatrix4(Tr),this}scale(e,t,n){return Tr.makeScale(e,t,n),this.applyMatrix4(Tr),this}lookAt(e){return Er.lookAt(e),Er.updateMatrix(),this.applyMatrix4(Er.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Cr(t,3))}else{for(let n=0,r=t.count;n<r;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn(`THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)console.error(`THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Or.setFromBufferAttribute(n),this.morphTargetsRelative?(Ar.addVectors(this.boundingBox.min,Or.min),this.boundingBox.expandByPoint(Ar),Ar.addVectors(this.boundingBox.max,Or.max),this.boundingBox.expandByPoint(Ar)):(this.boundingBox.expandByPoint(Or.min),this.boundingBox.expandByPoint(Or.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error(`THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)console.error(`THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new V,1/0);else if(e){let n=this.boundingSphere.center;if(Or.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];kr.setFromBufferAttribute(n),this.morphTargetsRelative?(Ar.addVectors(Or.min,kr.min),Or.expandByPoint(Ar),Ar.addVectors(Or.max,kr.max),Or.expandByPoint(Ar)):(Or.expandByPoint(kr.min),Or.expandByPoint(kr.max))}Or.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Ar.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Ar));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Ar.fromBufferAttribute(a,t),o&&(Dr.fromBufferAttribute(e,t),Ar.add(Dr)),r=Math.max(r,n.distanceToSquared(Ar))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error(`THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new br(new Float32Array(4*n.count),4));let a=this.getAttribute(`tangent`),o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new V,s[e]=new V;let c=new V,l=new V,u=new V,d=new L,f=new L,p=new L,m=new V,h=new V;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new V,y=new V,b=new V,x=new V;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new br(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new V,i=new V,a=new V,o=new V,s=new V,c=new V,l=new V,u=new V;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ar.fromBufferAttribute(e,t),Ar.normalize(),e.setXYZ(t,Ar.x,Ar.y,Ar.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new br(a,r,i)}if(this.index===null)return console.warn(`THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.6,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},Mr=new H,Nr=new Sn,Pr=new mn,Fr=new V,Ir=new V,Lr=new V,Rr=new V,zr=new V,Br=new V,Vr=new V,Hr=new V,W=class extends Yn{constructor(e=new jr,t=new _r){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Br.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(zr.fromBufferAttribute(s,e),a?Br.addScaledVector(zr,r):Br.addScaledVector(zr.sub(t),r))}t.add(Br)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere),Pr.applyMatrix4(i),Nr.copy(e.ray).recast(e.near),Pr.containsPoint(Nr.origin)===!1&&(Nr.intersectSphere(Pr,Fr)===null||Nr.origin.distanceToSquared(Fr)>(e.far-e.near)**2)||(Mr.copy(i).invert(),Nr.copy(e.ray).applyMatrix4(Mr),(n.boundingBox===null||Nr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Nr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Wr(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Wr(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Wr(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Wr(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Ur(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Hr.copy(s),Hr.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Hr);return l<n.near||l>n.far?null:{distance:l,point:Hr.clone(),object:e}}function Wr(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Ir),e.getVertexPosition(c,Lr),e.getVertexPosition(l,Rr);let u=Ur(e,t,n,r,Ir,Lr,Rr,Vr);if(u){let e=new V;lr.getBarycoord(Vr,Ir,Lr,Rr,e),i&&(u.uv=lr.getInterpolatedAttribute(i,s,c,l,e,new L)),a&&(u.uv1=lr.getInterpolatedAttribute(a,s,c,l,e,new L)),o&&(u.normal=lr.getInterpolatedAttribute(o,s,c,l,e,new V),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new V,materialIndex:0};lr.getNormal(Ir,Lr,Rr,t.normal),u.face=t,u.barycoord=e}return u}var G=class e extends jr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Cr(c,3)),this.setAttribute(`normal`,new Cr(l,3)),this.setAttribute(`uv`,new Cr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new V;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Gr(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone():Array.isArray(i)?t[n][r]=i.slice():t[n][r]=i}}return t}function Kr(e){let t={};for(let n=0;n<e.length;n++){let r=Gr(e[n]);for(let e in r)t[e]=r[e]}return t}function qr(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Jr(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:z.workingColorSpace}var Yr={clone:Gr,merge:Kr},Xr=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zr=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qr=class extends gr{static get type(){return`ShaderMaterial`}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xr,this.fragmentShader=Zr,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gr(e.uniforms),this.uniformsGroups=qr(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},$r=class extends Yn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new H,this.projectionMatrix=new H,this.projectionMatrixInverse=new H,this.coordinateSystem=Ge}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ei=new V,ti=new L,ni=new L,ri=class extends $r{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Xe*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ye*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xe*2*Math.atan(Math.tan(Ye*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ei.x,ei.y).multiplyScalar(-e/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ei.x,ei.y).multiplyScalar(-e/ei.z)}getViewSize(e,t){return this.getViewBounds(e,ti,ni),t.subVectors(ni,ti)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ye*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ii=-90,ai=1,oi=class extends Yn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ri(ii,ai,e,t);r.layers=this.layers,this.add(r);let i=new ri(ii,ai,e,t);i.layers=this.layers,this.add(i);let a=new ri(ii,ai,e,t);a.layers=this.layers,this.add(a);let o=new ri(ii,ai,e,t);o.layers=this.layers,this.add(o);let s=new ri(ii,ai,e,t);s.layers=this.layers,this.add(s);let c=new ri(ii,ai,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,i),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,s),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},si=class extends Vt{constructor(e,t,n,r,i,a,o,s,c,l){e=e===void 0?[]:e,t=t===void 0?301:t,super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ci=class extends Ut{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new si(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter===void 0?s:t.minFilter}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new G(5,5,5),i=new Qr({name:`CubemapFromEquirect`,uniforms:Gr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new W(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=s),new oi(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},li=new V,ui=new V,di=new R,fi=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=li.subVectors(n,t).cross(ui.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(li),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||di.getNormalMatrix(e),r=this.coplanarPoint(li).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},pi=new mn,mi=new V,hi=class{constructor(e=new fi,t=new fi,n=new fi,r=new fi,i=new fi,a=new fi){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ge){let n=this.planes,r=e.elements,i=r[0],a=r[1],o=r[2],s=r[3],c=r[4],l=r[5],u=r[6],d=r[7],f=r[8],p=r[9],m=r[10],h=r[11],g=r[12],_=r[13],v=r[14],y=r[15];if(n[0].setComponents(s-i,d-c,h-f,y-g).normalize(),n[1].setComponents(s+i,d+c,h+f,y+g).normalize(),n[2].setComponents(s+a,d+l,h+p,y+_).normalize(),n[3].setComponents(s-a,d-l,h-p,y-_).normalize(),n[4].setComponents(s-o,d-u,h-m,y-v).normalize(),t===2e3)n[5].setComponents(s+o,d+u,h+m,y+v).normalize();else if(t===2001)n[5].setComponents(o,u,m,v).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(e){return pi.center.set(0,0,0),pi.radius=.7071067811865476,pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(mi.x=r.normal.x>0?e.max.x:e.min.x,mi.y=r.normal.y>0?e.max.y:e.min.y,mi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(mi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function gi(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function _i(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var vi=class e extends jr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Cr(p,3)),this.setAttribute(`normal`,new Cr(m,3)),this.setAttribute(`uv`,new Cr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},K={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},q={common:{diffuse:{value:new U(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new R},alphaMap:{value:null},alphaMapTransform:{value:new R},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new R}},envmap:{envMap:{value:null},envMapRotation:{value:new R},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new R}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new R}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new R},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new R},normalScale:{value:new L(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new R},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new R}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new R}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new R}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new U(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new U(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new R},alphaTest:{value:0},uvTransform:{value:new R}},sprite:{diffuse:{value:new U(16777215)},opacity:{value:1},center:{value:new L(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new R},alphaMap:{value:null},alphaMapTransform:{value:new R},alphaTest:{value:0}}},yi={basic:{uniforms:Kr([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.fog]),vertexShader:K.meshbasic_vert,fragmentShader:K.meshbasic_frag},lambert:{uniforms:Kr([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.fog,q.lights,{emissive:{value:new U(0)}}]),vertexShader:K.meshlambert_vert,fragmentShader:K.meshlambert_frag},phong:{uniforms:Kr([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.fog,q.lights,{emissive:{value:new U(0)},specular:{value:new U(1118481)},shininess:{value:30}}]),vertexShader:K.meshphong_vert,fragmentShader:K.meshphong_frag},standard:{uniforms:Kr([q.common,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.roughnessmap,q.metalnessmap,q.fog,q.lights,{emissive:{value:new U(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:K.meshphysical_vert,fragmentShader:K.meshphysical_frag},toon:{uniforms:Kr([q.common,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.gradientmap,q.fog,q.lights,{emissive:{value:new U(0)}}]),vertexShader:K.meshtoon_vert,fragmentShader:K.meshtoon_frag},matcap:{uniforms:Kr([q.common,q.bumpmap,q.normalmap,q.displacementmap,q.fog,{matcap:{value:null}}]),vertexShader:K.meshmatcap_vert,fragmentShader:K.meshmatcap_frag},points:{uniforms:Kr([q.points,q.fog]),vertexShader:K.points_vert,fragmentShader:K.points_frag},dashed:{uniforms:Kr([q.common,q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:K.linedashed_vert,fragmentShader:K.linedashed_frag},depth:{uniforms:Kr([q.common,q.displacementmap]),vertexShader:K.depth_vert,fragmentShader:K.depth_frag},normal:{uniforms:Kr([q.common,q.bumpmap,q.normalmap,q.displacementmap,{opacity:{value:1}}]),vertexShader:K.meshnormal_vert,fragmentShader:K.meshnormal_frag},sprite:{uniforms:Kr([q.sprite,q.fog]),vertexShader:K.sprite_vert,fragmentShader:K.sprite_frag},background:{uniforms:{uvTransform:{value:new R},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:K.background_vert,fragmentShader:K.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new R}},vertexShader:K.backgroundCube_vert,fragmentShader:K.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:K.cube_vert,fragmentShader:K.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:K.equirect_vert,fragmentShader:K.equirect_frag},distanceRGBA:{uniforms:Kr([q.common,q.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:K.distanceRGBA_vert,fragmentShader:K.distanceRGBA_frag},shadow:{uniforms:Kr([q.lights,q.fog,{color:{value:new U(0)},opacity:{value:1}}]),vertexShader:K.shadow_vert,fragmentShader:K.shadow_frag}};yi.physical={uniforms:Kr([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new R},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new R},clearcoatNormalScale:{value:new L(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new R},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new R},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new R},sheen:{value:0},sheenColor:{value:new U(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new R},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new R},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new R},transmissionSamplerSize:{value:new L},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new R},attenuationDistance:{value:0},attenuationColor:{value:new U(0)},specularColor:{value:new U(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new R},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new R},anisotropyVector:{value:new L},anisotropyMap:{value:null},anisotropyMapTransform:{value:new R}}]),vertexShader:K.meshphysical_vert,fragmentShader:K.meshphysical_frag};var bi={r:0,b:0,g:0},xi=new Mn,Si=new H;function Ci(e,t,n,r,i,a,o){let s=new U(0),c=a===!0?0:1,l,u,d=null,f=0,p=null;function m(e){let r=e.isScene===!0?e.background:null;return r&&r.isTexture&&(r=(e.backgroundBlurriness>0?n:t).get(r)),r}function h(t){let n=!1,i=m(t);i===null?_(s,c):i&&i.isColor&&(_(i,1),n=!0);let a=e.xr.getEnvironmentBlendMode();a===`additive`?r.buffers.color.setClear(0,0,0,1,o):a===`alpha-blend`&&r.buffers.color.setClear(0,0,0,0,o),(e.autoClear||n)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function g(t,n){let r=m(n);r&&(r.isCubeTexture||r.mapping===306)?(u===void 0&&(u=new W(new G(1,1,1),new Qr({name:`BackgroundCubeMaterial`,uniforms:Gr(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute(`normal`),u.geometry.deleteAttribute(`uv`),u.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),xi.copy(n.backgroundRotation),xi.x*=-1,xi.y*=-1,xi.z*=-1,r.isCubeTexture&&r.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),u.material.uniforms.envMap.value=r,u.material.uniforms.flipEnvMap.value=r.isCubeTexture&&r.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Si.makeRotationFromEuler(xi)),u.material.toneMapped=z.getTransfer(r.colorSpace)!==He,(d!==r||f!==r.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),u.layers.enableAll(),t.unshift(u,u.geometry,u.material,0,0,null)):r&&r.isTexture&&(l===void 0&&(l=new W(new vi(2,2),new Qr({name:`BackgroundMaterial`,uniforms:Gr(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=r,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.toneMapped=z.getTransfer(r.colorSpace)!==He,r.matrixAutoUpdate===!0&&r.updateMatrix(),l.material.uniforms.uvTransform.value.copy(r.matrix),(d!==r||f!==r.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null))}function _(t,n){t.getRGB(bi,Jr(e)),r.buffers.color.setClear(bi.r,bi.g,bi.b,n,o)}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),c=t,_(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(e){c=e,_(s,c)},render:h,addToRenderList:g}}function wi(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n){let i=n.wireframe===!0,a=r[e.id];a===void 0&&(a={},r[e.id]=a);let o=a[t.id];o===void 0&&(o={},a[t.id]=o);let s=o[i];return s===void 0&&(s=f(c()),o[i]=s),s}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){w();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e.id]}function C(e){for(let t in r){let n=r[t];if(n[e.id]===void 0)continue;let i=n[e.id];for(let e in i)u(i[e].object),delete i[e];delete n[e.id]}}function w(){T(),o=!0,a!==i&&(a=i,l(a.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:w,resetDefaultState:T,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Ti(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}function c(e,i,a,s){if(a===0)return;let c=t.get(`WEBGL_multi_draw`);if(c===null)for(let t=0;t<e.length;t++)o(e[t],i[t],s[t]);else{c.multiDrawArraysInstancedWEBGL(r,e,0,i,0,s,0,a);let t=0;for(let e=0;e<a;e++)t+=i[e]*s[e];n.update(t,r,1)}}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=c}function Ei(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(console.warn(`THREE.WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&t.has(`EXT_clip_control`),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=m>0,S=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:x,maxSamples:S}}function Di(e){let t=this,n=null,r=0,i=!1,a=!1,o=new fi,s=new R,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}function Oi(e){let t=new WeakMap;function n(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function r(r){if(r&&r.isTexture){let a=r.mapping;if(a===303||a===304){if(t.has(r)){let e=t.get(r).texture;return n(e,r.mapping)}{let a=r.image;if(a&&a.height>0){let o=new ci(a.height);return o.fromEquirectangularTexture(e,r),t.set(r,o),r.addEventListener(`dispose`,i),n(o.texture,r.mapping)}return null}}}return r}function i(e){let n=e.target;n.removeEventListener(`dispose`,i);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function a(){t=new WeakMap}return{get:r,dispose:a}}var ki=class extends $r{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ai=4,ji=[.125,.215,.35,.446,.526,.582],Mi=20,Ni=new ki,Pi=new U,Fi=null,Ii=0,Li=0,Ri=!1,zi=(1+Math.sqrt(5))/2,Bi=1/zi,Vi=[new V(-zi,Bi,0),new V(zi,Bi,0),new V(-Bi,0,zi),new V(Bi,0,zi),new V(0,zi,-Bi),new V(0,zi,Bi),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],Hi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Fi=this._renderer.getRenderTarget(),Ii=this._renderer.getActiveCubeFace(),Li=this._renderer.getActiveMipmapLevel(),Ri=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,n,r,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ji(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qi(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fi,Ii,Li),this._renderer.xr.enabled=Ri,e.scissorTest=!1,Gi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fi=this._renderer.getRenderTarget(),Ii=this._renderer.getActiveCubeFace(),Li=this._renderer.getActiveMipmapLevel(),Ri=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:s,minFilter:s,generateMipmaps:!1,type:_,format:w,colorSpace:Be,depthBuffer:!1},r=Wi(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wi(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ui(r)),this._blurMaterial=Ki(r,e,t)}return r}_compileMaterial(e){let t=new W(this._lodPlanes[0],e);this._renderer.compile(t,Ni)}_sceneToCubeUV(e,t,n,r){let i=new ri(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],s=this._renderer,c=s.autoClear,l=s.toneMapping;s.getClearColor(Pi),s.toneMapping=0,s.autoClear=!1;let u=new _r({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1}),d=new W(new G,u),f=!1,p=e.background;p?p.isColor&&(u.color.copy(p),e.background=null,f=!0):(u.color.copy(Pi),f=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(i.up.set(0,a[t],0),i.lookAt(o[t],0,0)):n===1?(i.up.set(0,0,a[t]),i.lookAt(0,o[t],0)):(i.up.set(0,a[t],0),i.lookAt(0,0,o[t]));let c=this._cubeSize;Gi(r,n*c,t>2?c:0,c,c),s.setRenderTarget(r),f&&s.render(d,i),s.render(e,i)}d.geometry.dispose(),d.material.dispose(),s.toneMapping=l,s.autoClear=c,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ji()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qi());let i=r?this._cubemapMaterial:this._equirectMaterial,a=new W(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Gi(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Ni)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let t=1;t<r;t++){let n=Math.sqrt(this._sigmas[t]*this._sigmas[t]-this._sigmas[t-1]*this._sigmas[t-1]),i=Vi[(r-t-1)%Vi.length];this._blur(e,t-1,t,n,i)}t.autoClear=n}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&console.error(`blur direction must be either latitudinal or longitudinal!`);let l=new W(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):Mi;m>Mi&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mi}`);let h=[],g=0;for(let e=0;e<Mi;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];Gi(t,3*v*(r>_-Ai?r-_+Ai:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,Ni)}};function Ui(e){let t=[],n=[],r=[],i=e,a=e-Ai+1+ji.length;for(let o=0;o<a;o++){let a=2**i;n.push(a);let s=1/a;o>e-Ai?s=ji[o-e+Ai-1]:o===0&&(s=0),r.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new jr;h.setAttribute(`position`,new br(f,3)),h.setAttribute(`uv`,new br(p,2)),h.setAttribute(`faceIndex`,new br(m,1)),t.push(h),i>Ai&&i--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function Wi(e,t,n){let r=new Ut(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Gi(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Ki(e,t,n){let r=new Float32Array(Mi),i=new V(0,1,0);return new Qr({name:`SphericalGaussianBlur`,defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Yi(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function qi(){return new Qr({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Yi(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ji(){return new Qr({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Yi(){return`

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
	`}function Xi(e){let t=new WeakMap,n=null;function r(r){if(r&&r.isTexture){let o=r.mapping,s=o===303||o===304,c=o===301||o===302;if(s||c){let o=t.get(r),l=o===void 0?0:o.texture.pmremVersion;if(r.isRenderTargetTexture&&r.pmremVersion!==l)return n===null&&(n=new Hi(e)),o=s?n.fromEquirectangular(r,o):n.fromCubemap(r,o),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),o.texture;if(o!==void 0)return o.texture;{let l=r.image;return s&&l&&l.height>0||c&&l&&i(l)?(n===null&&(n=new Hi(e)),o=s?n.fromEquirectangular(r):n.fromCubemap(r),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),r.addEventListener(`dispose`,a),o.texture):null}}}return r}function i(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function a(e){let n=e.target;n.removeEventListener(`dispose`,a);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:o}}function Zi(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r;switch(n){case`WEBGL_depth_texture`:r=e.getExtension(`WEBGL_depth_texture`)||e.getExtension(`MOZ_WEBGL_depth_texture`)||e.getExtension(`WEBKIT_WEBGL_depth_texture`);break;case`EXT_texture_filter_anisotropic`:r=e.getExtension(`EXT_texture_filter_anisotropic`)||e.getExtension(`MOZ_EXT_texture_filter_anisotropic`)||e.getExtension(`WEBKIT_EXT_texture_filter_anisotropic`);break;case`WEBGL_compressed_texture_s3tc`:r=e.getExtension(`WEBGL_compressed_texture_s3tc`)||e.getExtension(`MOZ_WEBGL_compressed_texture_s3tc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_s3tc`);break;case`WEBGL_compressed_texture_pvrtc`:r=e.getExtension(`WEBGL_compressed_texture_pvrtc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_pvrtc`);break;default:r=e.getExtension(n)}return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&wt(`THREE.WebGLRenderer: `+e+` extension not supported.`),t}}}function Qi(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);for(let e in s.morphAttributes){let n=s.morphAttributes[e];for(let e=0,r=n.length;e<r;e++)t.remove(n[e])}s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER);let i=n.morphAttributes;for(let n in i){let r=i[n];for(let n=0,i=r.length;n<i;n++)t.update(r[n],e.ARRAY_BUFFER)}}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else if(i!==void 0){let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}else return;let s=new(bt(n)?Sr:xr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function $i(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}function d(e,i,s,c){if(s===0)return;let u=t.get(`WEBGL_multi_draw`);if(u===null)for(let t=0;t<e.length;t++)l(e[t]/o,i[t],c[t]);else{u.multiDrawElementsInstancedWEBGL(r,i,0,a,e,0,c,0,s);let t=0;for(let e=0;e<s;e++)t+=i[e]*c[e];n.update(t,r,1)}}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function ea(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:console.error(`THREE.WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function ta(e,t,n){let r=new WeakMap,i=new B;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),_=new Wt(h,p,m,u);_.type=g,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new L(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function na(e,t,n,r){let i=new WeakMap;function a(a){let o=r.render.frame,c=a.geometry,l=t.get(a,c);if(i.get(l)!==o&&(t.update(l),i.set(l,o)),a.isInstancedMesh&&(a.hasEventListener(`dispose`,s)===!1&&a.addEventListener(`dispose`,s),i.get(a)!==o&&(n.update(a.instanceMatrix,e.ARRAY_BUFFER),a.instanceColor!==null&&n.update(a.instanceColor,e.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let e=a.skeleton;i.get(e)!==o&&(e.update(),i.set(e,o))}return l}function o(){i=new WeakMap}function s(e){let t=e.target;t.removeEventListener(`dispose`,s),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:a,dispose:o}}var ra=class extends Vt{constructor(e,t,n,r,a,o,s,c,l,u=D){if(u!==1026&&u!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);n===void 0&&u===1026&&(n=h),n===void 0&&u===1027&&(n=b),super(null,r,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s===void 0?i:s,this.minFilter=c===void 0?i:c,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ia=new Vt,aa=new ra(1,1),oa=new Wt,sa=new Gt,ca=new si,la=[],ua=[],da=new Float32Array(16),fa=new Float32Array(9),pa=new Float32Array(4);function ma(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=la[i];if(a===void 0&&(a=new Float32Array(i),la[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function ha(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function ga(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function _a(e,t){let n=ua[t];n===void 0&&(n=new Int32Array(t),ua[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function va(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function ya(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ha(n,t))return;e.uniform2fv(this.addr,t),ga(n,t)}}function ba(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(ha(n,t))return;e.uniform3fv(this.addr,t),ga(n,t)}}function xa(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ha(n,t))return;e.uniform4fv(this.addr,t),ga(n,t)}}function Sa(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ha(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),ga(n,t)}else{if(ha(n,r))return;pa.set(r),e.uniformMatrix2fv(this.addr,!1,pa),ga(n,r)}}function Ca(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ha(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),ga(n,t)}else{if(ha(n,r))return;fa.set(r),e.uniformMatrix3fv(this.addr,!1,fa),ga(n,r)}}function wa(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ha(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),ga(n,t)}else{if(ha(n,r))return;da.set(r),e.uniformMatrix4fv(this.addr,!1,da),ga(n,r)}}function Ta(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Ea(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ha(n,t))return;e.uniform2iv(this.addr,t),ga(n,t)}}function Da(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ha(n,t))return;e.uniform3iv(this.addr,t),ga(n,t)}}function Oa(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ha(n,t))return;e.uniform4iv(this.addr,t),ga(n,t)}}function ka(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Aa(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ha(n,t))return;e.uniform2uiv(this.addr,t),ga(n,t)}}function ja(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ha(n,t))return;e.uniform3uiv(this.addr,t),ga(n,t)}}function Ma(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ha(n,t))return;e.uniform4uiv(this.addr,t),ga(n,t)}}function Na(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(aa.compareFunction=515,a=aa):a=ia,n.setTexture2D(t||a,i)}function Pa(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||sa,i)}function Fa(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||ca,i)}function Ia(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||oa,i)}function La(e){switch(e){case 5126:return va;case 35664:return ya;case 35665:return ba;case 35666:return xa;case 35674:return Sa;case 35675:return Ca;case 35676:return wa;case 5124:case 35670:return Ta;case 35667:case 35671:return Ea;case 35668:case 35672:return Da;case 35669:case 35673:return Oa;case 5125:return ka;case 36294:return Aa;case 36295:return ja;case 36296:return Ma;case 35678:case 36198:case 36298:case 36306:case 35682:return Na;case 35679:case 36299:case 36307:return Pa;case 35680:case 36300:case 36308:case 36293:return Fa;case 36289:case 36303:case 36311:case 36292:return Ia}}function Ra(e,t){e.uniform1fv(this.addr,t)}function za(e,t){let n=ma(t,this.size,2);e.uniform2fv(this.addr,n)}function Ba(e,t){let n=ma(t,this.size,3);e.uniform3fv(this.addr,n)}function Va(e,t){let n=ma(t,this.size,4);e.uniform4fv(this.addr,n)}function Ha(e,t){let n=ma(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Ua(e,t){let n=ma(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Wa(e,t){let n=ma(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Ga(e,t){e.uniform1iv(this.addr,t)}function Ka(e,t){e.uniform2iv(this.addr,t)}function qa(e,t){e.uniform3iv(this.addr,t)}function Ja(e,t){e.uniform4iv(this.addr,t)}function Ya(e,t){e.uniform1uiv(this.addr,t)}function Xa(e,t){e.uniform2uiv(this.addr,t)}function Za(e,t){e.uniform3uiv(this.addr,t)}function Qa(e,t){e.uniform4uiv(this.addr,t)}function $a(e,t,n){let r=this.cache,i=t.length,a=_a(n,i);ha(r,a)||(e.uniform1iv(this.addr,a),ga(r,a));for(let e=0;e!==i;++e)n.setTexture2D(t[e]||ia,a[e])}function eo(e,t,n){let r=this.cache,i=t.length,a=_a(n,i);ha(r,a)||(e.uniform1iv(this.addr,a),ga(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||sa,a[e])}function to(e,t,n){let r=this.cache,i=t.length,a=_a(n,i);ha(r,a)||(e.uniform1iv(this.addr,a),ga(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||ca,a[e])}function no(e,t,n){let r=this.cache,i=t.length,a=_a(n,i);ha(r,a)||(e.uniform1iv(this.addr,a),ga(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||oa,a[e])}function ro(e){switch(e){case 5126:return Ra;case 35664:return za;case 35665:return Ba;case 35666:return Va;case 35674:return Ha;case 35675:return Ua;case 35676:return Wa;case 5124:case 35670:return Ga;case 35667:case 35671:return Ka;case 35668:case 35672:return qa;case 35669:case 35673:return Ja;case 5125:return Ya;case 36294:return Xa;case 36295:return Za;case 36296:return Qa;case 35678:case 36198:case 36298:case 36306:case 35682:return $a;case 35679:case 36299:case 36307:return eo;case 35680:case 36300:case 36308:case 36293:return to;case 36289:case 36303:case 36311:case 36292:return no}}var io=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=La(t.type)}},ao=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ro(t.type)}},oo=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},so=/(\w+)(\])?(\[|\.)?/g;function co(e,t){e.seq.push(t),e.map[t.id]=t}function lo(e,t,n){let r=e.name,i=r.length;for(so.lastIndex=0;;){let a=so.exec(r),o=so.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){co(n,l===void 0?new io(s,e,t):new ao(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new oo(s),co(n,e)),n=e}}}var uo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);lo(n,e.getUniformLocation(t,n.name),this)}}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function fo(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var po=37297,mo=0;function ho(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var go=new R;function _o(e){z._getMatrix(go,z.workingColorSpace,e);let t=`mat3( ${go.elements.map(e=>e.toFixed(4))} )`;switch(z.getTransfer(e)){case Ve:return[t,`LinearTransferOETF`];case He:return[t,`sRGBTransferOETF`];default:return console.warn(`THREE.WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function vo(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=e.getShaderInfoLog(t).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+ho(e.getShaderSource(t),r)}return i}function yo(e,t){let n=_o(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}function bo(e,t){let n;switch(t){case 1:n=`Linear`;break;case 2:n=`Reinhard`;break;case 3:n=`Cineon`;break;case 4:n=`ACESFilmic`;break;case 6:n=`AgX`;break;case 7:n=`Neutral`;break;case 5:n=`Custom`;break;default:console.warn(`THREE.WebGLProgram: Unsupported toneMapping:`,t),n=`Linear`}return`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var xo=new V;function So(){return z.getLuminanceCoefficients(xo),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${xo.x.toFixed(4)}, ${xo.y.toFixed(4)}, ${xo.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Co(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Eo).join(`
`)}function wo(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function To(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Eo(e){return e!==``}function Do(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Oo(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ko=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ao(e){return e.replace(ko,Mo)}var jo=new Map;function Mo(e,t){let n=K[t];if(n===void 0){let e=jo.get(t);if(e!==void 0)n=K[e],console.warn(`THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return Ao(n)}var No=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Po(e){return e.replace(No,Fo)}function Fo(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Io(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}function Lo(e){let t=`SHADOWMAP_TYPE_BASIC`;return e.shadowMapType===1?t=`SHADOWMAP_TYPE_PCF`:e.shadowMapType===2?t=`SHADOWMAP_TYPE_PCF_SOFT`:e.shadowMapType===3&&(t=`SHADOWMAP_TYPE_VSM`),t}function Ro(e){let t=`ENVMAP_TYPE_CUBE`;if(e.envMap)switch(e.envMapMode){case 301:case 302:t=`ENVMAP_TYPE_CUBE`;break;case 306:t=`ENVMAP_TYPE_CUBE_UV`}return t}function zo(e){let t=`ENVMAP_MODE_REFLECTION`;if(e.envMap)switch(e.envMapMode){case 302:t=`ENVMAP_MODE_REFRACTION`}return t}function Bo(e){let t=`ENVMAP_BLENDING_NONE`;if(e.envMap)switch(e.combine){case 0:t=`ENVMAP_BLENDING_MULTIPLY`;break;case 1:t=`ENVMAP_BLENDING_MIX`;break;case 2:t=`ENVMAP_BLENDING_ADD`}return t}function Vo(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Ho(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Lo(n),l=Ro(n),u=zo(n),d=Bo(n),f=Vo(n),p=Co(n),m=wo(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Eo).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Eo).join(`
`),_.length>0&&(_+=`
`)):(g=[Io(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.reverseDepthBuffer?`#define USE_REVERSEDEPTHBUF`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Eo).join(`
`),_=[Io(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor||n.batchingColor?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.reverseDepthBuffer?`#define USE_REVERSEDEPTHBUF`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:K.tonemapping_pars_fragment,n.toneMapping===0?``:bo(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,K.colorspace_pars_fragment,yo(`linearToOutputTexel`,n.outputColorSpace),So(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Eo).join(`
`)),o=Ao(o),o=Do(o,n),o=Oo(o,n),s=Ao(s),s=Do(s,n),s=Oo(s,n),o=Po(o),s=Po(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=fo(i,i.VERTEX_SHADER,y),S=fo(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h).trim(),r=i.getShaderInfoLog(x).trim(),a=i.getShaderInfoLog(S).trim(),o=!0,s=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(o=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=vo(i,x,`vertex`),r=vo(i,S,`fragment`);console.error(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+n+`
`+e+`
`+r)}}else n===``?(r===``||a===``)&&(s=!1):console.warn(`THREE.WebGLProgram: Program Info Log:`,n);s&&(t.diagnostics={runnable:o,programLog:n,vertexShader:{log:r,prefix:g},fragmentShader:{log:a,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new uo(i,h),T=To(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,po)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=mo++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Uo=0,Wo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Go(e),t.set(e,n)),n}},Go=class{constructor(e){this.id=Uo++,this.code=e,this.usedTimes=0}};function Ko(e,t,n,r,i,a,o){let s=new Nn,c=new Wo,l=new Set,u=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,m={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distanceRGBA`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function h(e){return l.add(e),e===0?`uv`:`uv${e}`}function g(a,s,u,g,_){let v=g.fog,y=_.geometry,b=a.isMeshStandardMaterial?g.environment:null,x=(a.isMeshStandardMaterial?n:t).get(a.envMap||b),S=x&&x.mapping===306?x.image.height:null,C=m[a.type];a.precision!==null&&(p=i.getMaxPrecision(a.precision),p!==a.precision&&console.warn(`THREE.WebGLProgram.getParameters:`,a.precision,`not supported, using`,p,`instead.`));let w=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,T=w===void 0?0:w.length,E=0;y.morphAttributes.position!==void 0&&(E=1),y.morphAttributes.normal!==void 0&&(E=2),y.morphAttributes.color!==void 0&&(E=3);let D,ee,O,te;if(C){let e=yi[C];D=e.vertexShader,ee=e.fragmentShader}else D=a.vertexShader,ee=a.fragmentShader,c.update(a),O=c.getVertexShaderID(a),te=c.getFragmentShaderID(a);let k=e.getRenderTarget(),ne=e.state.buffers.depth.getReversed(),re=_.isInstancedMesh===!0,A=_.isBatchedMesh===!0,j=!!a.map,ie=!!a.matcap,ae=!!x,oe=!!a.aoMap,se=!!a.lightMap,ce=!!a.bumpMap,le=!!a.normalMap,ue=!!a.displacementMap,de=!!a.emissiveMap,fe=!!a.metalnessMap,pe=!!a.roughnessMap,me=a.anisotropy>0,he=a.clearcoat>0,ge=a.dispersion>0,_e=a.iridescence>0,ve=a.sheen>0,ye=a.transmission>0,M=me&&!!a.anisotropyMap,be=he&&!!a.clearcoatMap,xe=he&&!!a.clearcoatNormalMap,Se=he&&!!a.clearcoatRoughnessMap,N=_e&&!!a.iridescenceMap,Ce=_e&&!!a.iridescenceThicknessMap,P=ve&&!!a.sheenColorMap,F=ve&&!!a.sheenRoughnessMap,we=!!a.specularMap,Te=!!a.specularColorMap,Ee=!!a.specularIntensityMap,De=ye&&!!a.transmissionMap,Oe=ye&&!!a.thicknessMap,ke=!!a.gradientMap,Ae=!!a.alphaMap,je=a.alphaTest>0,Me=!!a.alphaHash,Ne=!!a.extensions,Pe=0;a.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Pe=e.toneMapping);let Fe={shaderID:C,shaderType:a.type,shaderName:a.name,vertexShader:D,fragmentShader:ee,defines:a.defines,customVertexShaderID:O,customFragmentShaderID:te,isRawShaderMaterial:a.isRawShaderMaterial===!0,glslVersion:a.glslVersion,precision:p,batching:A,batchingColor:A&&_._colorsTexture!==null,instancing:re,instancingColor:re&&_.instanceColor!==null,instancingMorph:re&&_.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:k===null?e.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Be,alphaToCoverage:!!a.alphaToCoverage,map:j,matcap:ie,envMap:ae,envMapMode:ae&&x.mapping,envMapCubeUVHeight:S,aoMap:oe,lightMap:se,bumpMap:ce,normalMap:le,displacementMap:f&&ue,emissiveMap:de,normalMapObjectSpace:le&&a.normalMapType===1,normalMapTangentSpace:le&&a.normalMapType===0,metalnessMap:fe,roughnessMap:pe,anisotropy:me,anisotropyMap:M,clearcoat:he,clearcoatMap:be,clearcoatNormalMap:xe,clearcoatRoughnessMap:Se,dispersion:ge,iridescence:_e,iridescenceMap:N,iridescenceThicknessMap:Ce,sheen:ve,sheenColorMap:P,sheenRoughnessMap:F,specularMap:we,specularColorMap:Te,specularIntensityMap:Ee,transmission:ye,transmissionMap:De,thicknessMap:Oe,gradientMap:ke,opaque:a.transparent===!1&&a.blending===1&&a.alphaToCoverage===!1,alphaMap:Ae,alphaTest:je,alphaHash:Me,combine:a.combine,mapUv:j&&h(a.map.channel),aoMapUv:oe&&h(a.aoMap.channel),lightMapUv:se&&h(a.lightMap.channel),bumpMapUv:ce&&h(a.bumpMap.channel),normalMapUv:le&&h(a.normalMap.channel),displacementMapUv:ue&&h(a.displacementMap.channel),emissiveMapUv:de&&h(a.emissiveMap.channel),metalnessMapUv:fe&&h(a.metalnessMap.channel),roughnessMapUv:pe&&h(a.roughnessMap.channel),anisotropyMapUv:M&&h(a.anisotropyMap.channel),clearcoatMapUv:be&&h(a.clearcoatMap.channel),clearcoatNormalMapUv:xe&&h(a.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&h(a.clearcoatRoughnessMap.channel),iridescenceMapUv:N&&h(a.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&h(a.iridescenceThicknessMap.channel),sheenColorMapUv:P&&h(a.sheenColorMap.channel),sheenRoughnessMapUv:F&&h(a.sheenRoughnessMap.channel),specularMapUv:we&&h(a.specularMap.channel),specularColorMapUv:Te&&h(a.specularColorMap.channel),specularIntensityMapUv:Ee&&h(a.specularIntensityMap.channel),transmissionMapUv:De&&h(a.transmissionMap.channel),thicknessMapUv:Oe&&h(a.thicknessMap.channel),alphaMapUv:Ae&&h(a.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(le||me),vertexColors:a.vertexColors,vertexAlphas:a.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,pointsUvs:_.isPoints===!0&&!!y.attributes.uv&&(j||Ae),fog:!!v,useFog:a.fog===!0,fogExp2:!!v&&v.isFogExp2,flatShading:a.flatShading===!0,sizeAttenuation:a.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:ne,skinning:_.isSkinnedMesh===!0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numSpotLightMaps:s.spotLightMap.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numSpotLightShadowsWithMaps:s.numSpotLightShadowsWithMaps,numLightProbes:s.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:a.dithering,shadowMapEnabled:e.shadowMap.enabled&&u.length>0,shadowMapType:e.shadowMap.type,toneMapping:Pe,decodeVideoTexture:j&&a.map.isVideoTexture===!0&&z.getTransfer(a.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:de&&a.emissiveMap.isVideoTexture===!0&&z.getTransfer(a.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:a.premultipliedAlpha,doubleSided:a.side===2,flipSided:a.side===1,useDepthPacking:a.depthPacking>=0,depthPacking:a.depthPacking||0,index0AttributeName:a.index0AttributeName,extensionClipCullDistance:Ne&&a.extensions.clipCullDistance===!0&&r.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ne&&a.extensions.multiDraw===!0||A)&&r.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:r.has(`KHR_parallel_shader_compile`),customProgramCacheKey:a.customProgramCacheKey()};return Fe.vertexUv1s=l.has(1),Fe.vertexUv2s=l.has(2),Fe.vertexUv3s=l.has(3),l.clear(),Fe}function _(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(v(n,t),y(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function v(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function y(e,t){s.disableAll(),t.supportsVertexTextures&&s.enable(0),t.instancing&&s.enable(1),t.instancingColor&&s.enable(2),t.instancingMorph&&s.enable(3),t.matcap&&s.enable(4),t.envMap&&s.enable(5),t.normalMapObjectSpace&&s.enable(6),t.normalMapTangentSpace&&s.enable(7),t.clearcoat&&s.enable(8),t.iridescence&&s.enable(9),t.alphaTest&&s.enable(10),t.vertexColors&&s.enable(11),t.vertexAlphas&&s.enable(12),t.vertexUv1s&&s.enable(13),t.vertexUv2s&&s.enable(14),t.vertexUv3s&&s.enable(15),t.vertexTangents&&s.enable(16),t.anisotropy&&s.enable(17),t.alphaHash&&s.enable(18),t.batching&&s.enable(19),t.dispersion&&s.enable(20),t.batchingColor&&s.enable(21),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.reverseDepthBuffer&&s.enable(4),t.skinning&&s.enable(5),t.morphTargets&&s.enable(6),t.morphNormals&&s.enable(7),t.morphColors&&s.enable(8),t.premultipliedAlpha&&s.enable(9),t.shadowMapEnabled&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),t.decodeVideoTextureEmissive&&s.enable(20),t.alphaToCoverage&&s.enable(21),e.push(s.mask)}function b(e){let t=m[e.type],n;if(t){let e=yi[t];n=Yr.clone(e.uniforms)}else n=e.uniforms;return n}function x(t,n){let r;for(let e=0,t=u.length;e<t;e++){let t=u[e];if(t.cacheKey===n){r=t,++r.usedTimes;break}}return r===void 0&&(r=new Ho(e,n,t,a),u.push(r)),r}function S(e){if(--e.usedTimes===0){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),e.destroy()}}function C(e){c.remove(e)}function w(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:b,acquireProgram:x,releaseProgram:S,releaseShaderCache:C,programs:u,dispose:w}}function qo(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Jo(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.z===t.z?e.id-t.id:e.z-t.z:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Yo(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Xo(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(n,r,i,a,o,s){let c=e[t];return c===void 0?(c={id:n.id,object:n,geometry:r,material:i,groupOrder:a,renderOrder:n.renderOrder,z:o,group:s},e[t]=c):(c.id=n.id,c.object=n,c.geometry=r,c.material=i,c.groupOrder=a,c.renderOrder=n.renderOrder,c.z=o,c.group=s),t++,c}function s(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function c(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function l(e,t){n.length>1&&n.sort(e||Jo),r.length>1&&r.sort(t||Yo),i.length>1&&i.sort(t||Yo)}function u(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:s,unshift:c,finish:u,sort:l}}function Zo(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Xo,e.set(t,[i])):n>=r.length?(i=new Xo,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Qo(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new V,color:new U};break;case`SpotLight`:n={position:new V,direction:new V,color:new U,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new V,color:new U,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new V,skyColor:new U,groundColor:new U};break;case`RectAreaLight`:n={color:new U,position:new V,halfWidth:new V,halfHeight:new V}}return e[t.id]=n,n}}}function $o(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new L};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new L};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new L,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var es=0;function ts(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function ns(e){let t=new Qo,n=$o(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new V);let i=new V,a=new H,o=new H;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(ts);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=q.LTC_FLOAT_1,r.rectAreaLTC2=q.LTC_FLOAT_2):(r.rectAreaLTC1=q.LTC_HALF_1,r.rectAreaLTC2=q.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=es++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function rs(e){let t=new ns(e),n=[],r=[];function i(e){l.camera=e,n.length=0,r.length=0}function a(e){n.push(e)}function o(e){r.push(e)}function s(){t.setup(n)}function c(e){t.setupView(n,e)}let l={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:s,setupLightsView:c,pushLight:a,pushShadow:o}}function is(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new rs(e),t.set(n,[a])):r>=i.length?(a=new rs(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var as=class extends gr{static get type(){return`MeshDepthMaterial`}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Le,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},os=class extends gr{static get type(){return`MeshDistanceMaterial`}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},ss=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cs=`uniform sampler2D shadow_pass;
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
}`;function ls(e,t,n){let r=new hi,a=new L,o=new L,s=new B,c=new as({depthPacking:Re}),l=new os,u={},d=n.maxTextureSize,f={0:1,1:0,2:2},p=new Qr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new L},radius:{value:4}},vertexShader:ss,fragmentShader:cs}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let h=new jr;h.setAttribute(`position`,new br(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new W(h,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let v=this.type;this.render=function(t,n,c){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||t.length===0)return;let l=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let m=v!==3&&this.type===3,h=v===3&&this.type!==3;for(let l=0,u=t.length;l<u;l++){let u=t[l],f=u.shadow;if(f===void 0){console.warn(`THREE.WebGLShadowMap:`,u,`has no shadow.`);continue}if(f.autoUpdate===!1&&f.needsUpdate===!1)continue;a.copy(f.mapSize);let g=f.getFrameExtents();if(a.multiply(g),o.copy(f.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(o.x=Math.floor(d/g.x),a.x=o.x*g.x,f.mapSize.x=o.x),a.y>d&&(o.y=Math.floor(d/g.y),a.y=o.y*g.y,f.mapSize.y=o.y)),f.map===null||m===!0||h===!0){let e=this.type===3?{}:{minFilter:i,magFilter:i};f.map!==null&&f.map.dispose(),f.map=new Ut(a.x,a.y,e),f.map.texture.name=u.name+`.shadowMap`,f.camera.updateProjectionMatrix()}e.setRenderTarget(f.map),e.clear();let _=f.getViewportCount();for(let e=0;e<_;e++){let t=f.getViewport(e);s.set(o.x*t.x,o.y*t.y,o.x*t.z,o.y*t.w),p.viewport(s),f.updateMatrices(u,e),r=f.getFrustum(),x(n,c,f.camera,u,this.type)}f.isPointLightShadow!==!0&&this.type===3&&y(f,c),f.needsUpdate=!1}v=this.type,_.needsUpdate=!1,e.setRenderTarget(l,u,f)};function y(n,r){let i=t.update(g);p.defines.VSM_SAMPLES!==n.blurSamples&&(p.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new Ut(a.x,a.y)),p.uniforms.shadow_pass.value=n.map.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,p,g,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value=n.mapSize,m.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,m,g,null)}function b(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?l:c,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0){let e=a.uuid,t=n.uuid,r=u[e];r===void 0&&(r={},u[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,S)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?f[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function x(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=b(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=b(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)x(c[e],i,a,o,s)}function S(e){e.target.removeEventListener(`dispose`,S);for(let t in u){let n=u[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}var us={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function ds(e,t){function n(){let t=!1,n=new B,r=null,i=new B(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let e=t.get(`EXT_clip_control`);r?e.clipControlEXT(e.LOWER_LEFT_EXT,e.ZERO_TO_ONE_EXT):e.clipControlEXT(e.LOWER_LEFT_EXT,e.NEGATIVE_ONE_TO_ONE_EXT);let n=o;o=null,this.setClear(n)}r=e},getReversed:function(){return r},setTest:function(t){t?de(e.DEPTH_TEST):fe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=us[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(r&&(t=1-t),e.clearDepth(t),o=t)},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?de(e.STENCIL_TEST):fe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new U(0,0,0),w=0,T=!1,E=null,D=null,ee=null,O=null,te=null,k=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ne=!1,re=0,A=e.getParameter(e.VERSION);A.indexOf(`WebGL`)===-1?A.indexOf(`OpenGL ES`)!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(A)[1]),ne=re>=2):(re=parseFloat(/^WebGL (\d)/.exec(A)[1]),ne=re>=1);let j=null,ie={},ae=e.getParameter(e.SCISSOR_BOX),oe=e.getParameter(e.VIEWPORT),se=new B().fromArray(ae),ce=new B().fromArray(oe);function le(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ue={};ue[e.TEXTURE_2D]=le(e.TEXTURE_2D,e.TEXTURE_2D,1),ue[e.TEXTURE_CUBE_MAP]=le(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[e.TEXTURE_2D_ARRAY]=le(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ue[e.TEXTURE_3D]=le(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),de(e.DEPTH_TEST),o.setFunc(3),M(!1),be(1),de(e.CULL_FACE),ve(0);function de(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function fe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function pe(t,n){return d[t]!==n&&(e.bindFramebuffer(t,n),d[t]=n,t===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=n),!0)}function me(t,n){let r=p,i=!1;if(t){r=f.get(n),r===void 0&&(r=[],f.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function he(t){return m!==t&&(e.useProgram(t),m=t,!0)}let ge={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ge[103]=e.MIN,ge[104]=e.MAX;let _e={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ve(t,n,r,i,a,o,s,c,l,u){if(t===0)h===!0&&(fe(e.BLEND),h=!1);else if(h===!1&&(de(e.BLEND),h=!0),t!==5){if(t!==g||u!==T){if((_!==100||b!==100)&&(e.blendEquation(e.FUNC_ADD),_=100,b=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}v=null,y=null,x=null,S=null,C.set(0,0,0),w=0,g=t,T=u}}else a||=n,o||=r,s||=i,(n!==_||a!==b)&&(e.blendEquationSeparate(ge[n],ge[a]),_=n,b=a),(r!==v||i!==y||o!==x||s!==S)&&(e.blendFuncSeparate(_e[r],_e[i],_e[o],_e[s]),v=r,y=i,x=o,S=s),(c.equals(C)===!1||l!==w)&&(e.blendColor(c.r,c.g,c.b,l),C.copy(c),w=l),g=t,T=!1}function ye(t,n){t.side===2?fe(e.CULL_FACE):de(e.CULL_FACE);let r=t.side===1;n&&(r=!r),M(r),t.blending===1&&t.transparent===!1?ve(0):ve(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Se(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?de(e.SAMPLE_ALPHA_TO_COVERAGE):fe(e.SAMPLE_ALPHA_TO_COVERAGE)}function M(t){E!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),E=t)}function be(t){t===0?fe(e.CULL_FACE):(de(e.CULL_FACE),t!==D&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),D=t}function xe(t){t!==ee&&(ne&&e.lineWidth(t),ee=t)}function Se(t,n,r){t?(de(e.POLYGON_OFFSET_FILL),(O!==n||te!==r)&&(e.polygonOffset(n,r),O=n,te=r)):fe(e.POLYGON_OFFSET_FILL)}function N(t){t?de(e.SCISSOR_TEST):fe(e.SCISSOR_TEST)}function Ce(t){t===void 0&&(t=e.TEXTURE0+k-1),j!==t&&(e.activeTexture(t),j=t)}function P(t,n,r){r===void 0&&(r=j===null?e.TEXTURE0+k-1:j);let i=ie[r];i===void 0&&(i={type:void 0,texture:void 0},ie[r]=i),(i.type!==t||i.texture!==n)&&(j!==r&&(e.activeTexture(r),j=r),e.bindTexture(t,n||ue[t]),i.type=t,i.texture=n)}function F(){let t=ie[j];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function we(){try{e.compressedTexImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Te(){try{e.compressedTexImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ee(){try{e.texSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function De(){try{e.texSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Oe(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ke(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ae(){try{e.texStorage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function je(){try{e.texStorage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Me(){try{e.texImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ne(){try{e.texImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Pe(t){se.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),se.copy(t))}function Fe(t){ce.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ce.copy(t))}function Ie(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Le(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Re(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},j=null,ie={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new U(0,0,0),w=0,T=!1,E=null,D=null,ee=null,O=null,te=null,se.set(0,0,e.canvas.width,e.canvas.height),ce.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:de,disable:fe,bindFramebuffer:pe,drawBuffers:me,useProgram:he,setBlending:ve,setMaterial:ye,setFlipSided:M,setCullFace:be,setLineWidth:xe,setPolygonOffset:Se,setScissorTest:N,activeTexture:Ce,bindTexture:P,unbindTexture:F,compressedTexImage2D:we,compressedTexImage3D:Te,texImage2D:Me,texImage3D:Ne,updateUBOMapping:Ie,uniformBlockBinding:Le,texStorage2D:Ae,texStorage3D:je,texSubImage2D:Ee,texSubImage3D:De,compressedTexSubImage2D:Oe,compressedTexSubImage3D:ke,scissor:Pe,viewport:Fe,reset:Re}}function fs(e,t,n,r){let i=ps(r);switch(n){case S:return e*t;case T:return e*t;case E:return e*t*2;case O:return e*t/i.components*i.byteLength;case te:return e*t/i.components*i.byteLength;case k:return e*t*2/i.components*i.byteLength;case ne:return e*t*2/i.components*i.byteLength;case C:return e*t*3/i.components*i.byteLength;case w:return e*t*4/i.components*i.byteLength;case re:return e*t*4/i.components*i.byteLength;case A:case j:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ie:case ae:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case se:case le:return Math.max(e,16)*Math.max(t,8)/4;case oe:case ce:return Math.max(e,8)*Math.max(t,8)/2;case ue:case de:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case fe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case pe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case me:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case he:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ge:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case _e:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ve:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ye:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case M:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case be:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case xe:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Se:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case N:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ce:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case P:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case F:case we:case Te:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ee:case De:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Oe:case ke:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function ps(e){switch(e){case u:case d:return{byteLength:1,components:1};case p:case f:case _:return{byteLength:2,components:1};case v:case y:return{byteLength:2,components:4};case h:case m:case g:return{byteLength:4,components:1};case x:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${e}.`)}function ms(e,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new L,y=new WeakMap,b,x=new WeakMap,S=!1;try{S=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function C(e,t){return S?new OffscreenCanvas(e,t):xt(`canvas`)}function w(e,t,n){let r=1,i=Ae(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);b===void 0&&(b=C(n,a));let o=t?C(n,a):b;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),console.warn(`THREE.WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&console.warn(`THREE.WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function T(e){return e.generateMipmaps}function E(t){e.generateMipmap(t)}function D(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function O(t,n,r,i,a=!1){if(t!==null){if(e[t]!==void 0)return e[t];console.warn(`THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '`+t+`'`)}let o=n;if(n===e.RED&&(r===e.FLOAT&&(o=e.R32F),r===e.HALF_FLOAT&&(o=e.R16F),r===e.UNSIGNED_BYTE&&(o=e.R8)),n===e.RED_INTEGER&&(r===e.UNSIGNED_BYTE&&(o=e.R8UI),r===e.UNSIGNED_SHORT&&(o=e.R16UI),r===e.UNSIGNED_INT&&(o=e.R32UI),r===e.BYTE&&(o=e.R8I),r===e.SHORT&&(o=e.R16I),r===e.INT&&(o=e.R32I)),n===e.RG&&(r===e.FLOAT&&(o=e.RG32F),r===e.HALF_FLOAT&&(o=e.RG16F),r===e.UNSIGNED_BYTE&&(o=e.RG8)),n===e.RG_INTEGER&&(r===e.UNSIGNED_BYTE&&(o=e.RG8UI),r===e.UNSIGNED_SHORT&&(o=e.RG16UI),r===e.UNSIGNED_INT&&(o=e.RG32UI),r===e.BYTE&&(o=e.RG8I),r===e.SHORT&&(o=e.RG16I),r===e.INT&&(o=e.RG32I)),n===e.RGB_INTEGER&&(r===e.UNSIGNED_BYTE&&(o=e.RGB8UI),r===e.UNSIGNED_SHORT&&(o=e.RGB16UI),r===e.UNSIGNED_INT&&(o=e.RGB32UI),r===e.BYTE&&(o=e.RGB8I),r===e.SHORT&&(o=e.RGB16I),r===e.INT&&(o=e.RGB32I)),n===e.RGBA_INTEGER&&(r===e.UNSIGNED_BYTE&&(o=e.RGBA8UI),r===e.UNSIGNED_SHORT&&(o=e.RGBA16UI),r===e.UNSIGNED_INT&&(o=e.RGBA32UI),r===e.BYTE&&(o=e.RGBA8I),r===e.SHORT&&(o=e.RGBA16I),r===e.INT&&(o=e.RGBA32I)),n===e.RGB&&r===e.UNSIGNED_INT_5_9_9_9_REV&&(o=e.RGB9_E5),n===e.RGBA){let t=a?Ve:z.getTransfer(i);r===e.FLOAT&&(o=e.RGBA32F),r===e.HALF_FLOAT&&(o=e.RGBA16F),r===e.UNSIGNED_BYTE&&(o=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),r===e.UNSIGNED_SHORT_4_4_4_4&&(o=e.RGBA4),r===e.UNSIGNED_SHORT_5_5_5_1&&(o=e.RGB5_A1)}return(o===e.R16F||o===e.R32F||o===e.RG16F||o===e.RG32F||o===e.RGBA16F||o===e.RGBA32F)&&u.get(`EXT_color_buffer_float`),o}function te(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,console.warn(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function k(e,t){return T(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function ne(e){let t=e.target;t.removeEventListener(`dispose`,ne),A(t),t.isVideoTexture&&y.delete(t)}function re(e){let t=e.target;t.removeEventListener(`dispose`,re),ie(t)}function A(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=x.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&j(e),Object.keys(r).length===0&&x.delete(n)}f.remove(e)}function j(t){let n=f.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,i=x.get(r);delete i[n.__cacheKey],h.memory.textures--}function ie(t){let n=f.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),f.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let r=t.textures;for(let t=0,n=r.length;t<n;t++){let n=f.get(r[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),f.remove(r[t])}f.remove(t)}let ae=0;function oe(){ae=0}function se(){let e=ae;return e>=p.maxTextures&&console.warn(`THREE.WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+p.maxTextures),ae+=1,e}function ce(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function le(t,n){let r=f.get(t);if(t.isVideoTexture&&Oe(t),t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version){let e=t.image;if(e===null)console.warn(`THREE.WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)console.warn(`THREE.WebGLRenderer: Texture marked for update but image is incomplete`);else{ve(r,t,n);return}}d.bindTexture(e.TEXTURE_2D,r.__webglTexture,e.TEXTURE0+n)}function ue(t,n){let r=f.get(t);t.version>0&&r.__version!==t.version?ve(r,t,n):d.bindTexture(e.TEXTURE_2D_ARRAY,r.__webglTexture,e.TEXTURE0+n)}function de(t,n){let r=f.get(t);t.version>0&&r.__version!==t.version?ve(r,t,n):d.bindTexture(e.TEXTURE_3D,r.__webglTexture,e.TEXTURE0+n)}function fe(t,n){let r=f.get(t);t.version>0&&r.__version!==t.version?ye(r,t,n):d.bindTexture(e.TEXTURE_CUBE_MAP,r.__webglTexture,e.TEXTURE0+n)}let pe={[t]:e.REPEAT,[n]:e.CLAMP_TO_EDGE,[r]:e.MIRRORED_REPEAT},me={[i]:e.NEAREST,[a]:e.NEAREST_MIPMAP_NEAREST,[o]:e.NEAREST_MIPMAP_LINEAR,[s]:e.LINEAR,[c]:e.LINEAR_MIPMAP_NEAREST,[l]:e.LINEAR_MIPMAP_LINEAR},he={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ge(t,n){if(n.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(n.magFilter===1006||n.magFilter===1007||n.magFilter===1005||n.magFilter===1008||n.minFilter===1006||n.minFilter===1007||n.minFilter===1005||n.minFilter===1008)&&console.warn(`THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(t,e.TEXTURE_WRAP_S,pe[n.wrapS]),e.texParameteri(t,e.TEXTURE_WRAP_T,pe[n.wrapT]),(t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY)&&e.texParameteri(t,e.TEXTURE_WRAP_R,pe[n.wrapR]),e.texParameteri(t,e.TEXTURE_MAG_FILTER,me[n.magFilter]),e.texParameteri(t,e.TEXTURE_MIN_FILTER,me[n.minFilter]),n.compareFunction&&(e.texParameteri(t,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(t,e.TEXTURE_COMPARE_FUNC,he[n.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(n.magFilter===1003||n.minFilter!==1005&&n.minFilter!==1008||n.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(n.anisotropy>1||f.get(n).__currentAnisotropy){let r=u.get(`EXT_texture_filter_anisotropic`);e.texParameterf(t,r.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(n.anisotropy,p.getMaxAnisotropy())),f.get(n).__currentAnisotropy=n.anisotropy}}}function _e(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,ne));let i=n.source,a=x.get(i);a===void 0&&(a={},x.set(i,a));let o=ce(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&j(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function ve(t,n,r){let i=e.TEXTURE_2D;(n.isDataArrayTexture||n.isCompressedArrayTexture)&&(i=e.TEXTURE_2D_ARRAY),n.isData3DTexture&&(i=e.TEXTURE_3D);let a=_e(t,n),o=n.source;d.bindTexture(i,t.__webglTexture,e.TEXTURE0+r);let s=f.get(o);if(o.version!==s.__version||a===!0){d.activeTexture(e.TEXTURE0+r);let t=z.getPrimaries(z.workingColorSpace),c=n.colorSpace===``?null:z.getPrimaries(n.colorSpace),l=n.colorSpace===``||t===c?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,l);let u=w(n.image,!1,p.maxTextureSize);u=ke(n,u);let f=m.convert(n.format,n.colorSpace),h=m.convert(n.type),g=O(n.internalFormat,f,h,n.colorSpace,n.isVideoTexture);ge(i,n);let _,v=n.mipmaps,y=n.isVideoTexture!==!0,b=s.__version===void 0||a===!0,x=o.dataReady,S=k(n,u);if(n.isDepthTexture)g=te(n.format===ee,n.type),b&&(y?d.texStorage2D(e.TEXTURE_2D,1,g,u.width,u.height):d.texImage2D(e.TEXTURE_2D,0,g,u.width,u.height,0,f,h,null));else if(n.isDataTexture){if(v.length>0){y&&b&&d.texStorage2D(e.TEXTURE_2D,S,g,v[0].width,v[0].height);for(let t=0,n=v.length;t<n;t++)_=v[t],y?x&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,_.width,_.height,f,h,_.data):d.texImage2D(e.TEXTURE_2D,t,g,_.width,_.height,0,f,h,_.data);n.generateMipmaps=!1}else y?(b&&d.texStorage2D(e.TEXTURE_2D,S,g,u.width,u.height),x&&d.texSubImage2D(e.TEXTURE_2D,0,0,0,u.width,u.height,f,h,u.data)):d.texImage2D(e.TEXTURE_2D,0,g,u.width,u.height,0,f,h,u.data)}else if(n.isCompressedTexture){if(n.isCompressedArrayTexture){y&&b&&d.texStorage3D(e.TEXTURE_2D_ARRAY,S,g,v[0].width,v[0].height,u.depth);for(let t=0,r=v.length;t<r;t++)if(_=v[t],n.format!==1023){if(f!==null){if(y){if(x){if(n.layerUpdates.size>0){let r=fs(_.width,_.height,n.format,n.type);for(let i of n.layerUpdates){let n=_.data.subarray(i*r/_.data.BYTES_PER_ELEMENT,(i+1)*r/_.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,i,_.width,_.height,1,f,n)}n.clearLayerUpdates()}else d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,_.width,_.height,u.depth,f,_.data)}}else d.compressedTexImage3D(e.TEXTURE_2D_ARRAY,t,g,_.width,_.height,u.depth,0,_.data,0,0)}else console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else y?x&&d.texSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,_.width,_.height,u.depth,f,h,_.data):d.texImage3D(e.TEXTURE_2D_ARRAY,t,g,_.width,_.height,u.depth,0,f,h,_.data)}else{y&&b&&d.texStorage2D(e.TEXTURE_2D,S,g,v[0].width,v[0].height);for(let t=0,r=v.length;t<r;t++)_=v[t],n.format===1023?y?x&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,_.width,_.height,f,h,_.data):d.texImage2D(e.TEXTURE_2D,t,g,_.width,_.height,0,f,h,_.data):f===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):y?x&&d.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,_.width,_.height,f,_.data):d.compressedTexImage2D(e.TEXTURE_2D,t,g,_.width,_.height,0,_.data)}}else if(n.isDataArrayTexture){if(y){if(b&&d.texStorage3D(e.TEXTURE_2D_ARRAY,S,g,u.width,u.height,u.depth),x){if(n.layerUpdates.size>0){let t=fs(u.width,u.height,n.format,n.type);for(let r of n.layerUpdates){let n=u.data.subarray(r*t/u.data.BYTES_PER_ELEMENT,(r+1)*t/u.data.BYTES_PER_ELEMENT);d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,r,u.width,u.height,1,f,h,n)}n.clearLayerUpdates()}else d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,u.width,u.height,u.depth,f,h,u.data)}}else d.texImage3D(e.TEXTURE_2D_ARRAY,0,g,u.width,u.height,u.depth,0,f,h,u.data)}else if(n.isData3DTexture)y?(b&&d.texStorage3D(e.TEXTURE_3D,S,g,u.width,u.height,u.depth),x&&d.texSubImage3D(e.TEXTURE_3D,0,0,0,0,u.width,u.height,u.depth,f,h,u.data)):d.texImage3D(e.TEXTURE_3D,0,g,u.width,u.height,u.depth,0,f,h,u.data);else if(n.isFramebufferTexture){if(b){if(y)d.texStorage2D(e.TEXTURE_2D,S,g,u.width,u.height);else{let t=u.width,n=u.height;for(let r=0;r<S;r++)d.texImage2D(e.TEXTURE_2D,r,g,t,n,0,f,h,null),t>>=1,n>>=1}}}else if(v.length>0){if(y&&b){let t=Ae(v[0]);d.texStorage2D(e.TEXTURE_2D,S,g,t.width,t.height)}for(let t=0,n=v.length;t<n;t++)_=v[t],y?x&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f,h,_):d.texImage2D(e.TEXTURE_2D,t,g,f,h,_);n.generateMipmaps=!1}else if(y){if(b){let t=Ae(u);d.texStorage2D(e.TEXTURE_2D,S,g,t.width,t.height)}x&&d.texSubImage2D(e.TEXTURE_2D,0,0,0,f,h,u)}else d.texImage2D(e.TEXTURE_2D,0,g,f,h,u);T(n)&&E(i),s.__version=o.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function ye(t,n,r){if(n.image.length!==6)return;let i=_e(t,n),a=n.source;d.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+r);let o=f.get(a);if(a.version!==o.__version||i===!0){d.activeTexture(e.TEXTURE0+r);let t=z.getPrimaries(z.workingColorSpace),s=n.colorSpace===``?null:z.getPrimaries(n.colorSpace),c=n.colorSpace===``||t===s?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,c);let l=n.isCompressedTexture||n.image[0].isCompressedTexture,u=n.image[0]&&n.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!l&&!u?f[e]=w(n.image[e],!0,p.maxCubemapSize):f[e]=u?n.image[e].image:n.image[e],f[e]=ke(n,f[e]);let h=f[0],g=m.convert(n.format,n.colorSpace),_=m.convert(n.type),v=O(n.internalFormat,g,_,n.colorSpace),y=n.isVideoTexture!==!0,b=o.__version===void 0||i===!0,x=a.dataReady,S=k(n,h);ge(e.TEXTURE_CUBE_MAP,n);let C;if(l){y&&b&&d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=f[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];n.format===1023?y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):d.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=n.mipmaps,y&&b){C.length>0&&S++;let t=Ae(f[0]);d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(u){y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,f[t].width,f[t].height,g,_,f[t].data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,f[t].width,f[t].height,0,g,_,f[t].data);for(let n=0;n<C.length;n++){let r=C[n].image[t].image;y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,r.width,r.height,g,_,r.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,r.width,r.height,0,g,_,r.data)}}else{y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,f[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,f[t]);for(let n=0;n<C.length;n++){let r=C[n];y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,g,_,r.image[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,g,_,r.image[t])}}}T(n)&&E(e.TEXTURE_CUBE_MAP),o.__version=a.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function M(t,n,r,i,a,o){let s=m.convert(r.format,r.colorSpace),c=m.convert(r.type),l=O(r.internalFormat,s,c,r.colorSpace),u=f.get(n),p=f.get(r);if(p.__renderTarget=n,!u.__hasExternalTextures){let t=Math.max(1,n.width>>o),r=Math.max(1,n.height>>o);a===e.TEXTURE_3D||a===e.TEXTURE_2D_ARRAY?d.texImage3D(a,o,l,t,r,n.depth,0,s,c,null):d.texImage2D(a,o,l,t,r,0,s,c,null)}d.bindFramebuffer(e.FRAMEBUFFER,t),De(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,i,a,p.__webglTexture,0,Ee(n)):(a===e.TEXTURE_2D||a>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&a<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,i,a,p.__webglTexture,o),d.bindFramebuffer(e.FRAMEBUFFER,null)}function be(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=te(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,c=Ee(n);De(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,c,o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,c,o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=m.convert(a.format,a.colorSpace),s=m.convert(a.type),c=O(a.internalFormat,o,s,a.colorSpace),l=Ee(n);r&&De(n)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,n.width,n.height):De(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,l,c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function xe(t,n){if(n&&n.isWebGLCubeRenderTarget)throw Error(`Depth Texture with cube render targets is not supported`);if(d.bindFramebuffer(e.FRAMEBUFFER,t),!(n.depthTexture&&n.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);let r=f.get(n.depthTexture);r.__renderTarget=n,r.__webglTexture&&n.depthTexture.image.width===n.width&&n.depthTexture.image.height===n.height||(n.depthTexture.image.width=n.width,n.depthTexture.image.height=n.height,n.depthTexture.needsUpdate=!0),le(n.depthTexture,0);let i=r.__webglTexture,a=Ee(n);if(n.depthTexture.format===1026)De(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,i,0,a):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,i,0);else if(n.depthTexture.format===1027)De(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,i,0,a):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,i,0);else throw Error(`Unknown depthTexture format`)}function Se(t){let n=f.get(t),r=t.isWebGLCubeRenderTarget===!0;if(n.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(n.__depthDisposeCallback&&n.__depthDisposeCallback(),e){let t=()=>{delete n.__boundDepthTexture,delete n.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),n.__depthDisposeCallback=t}n.__boundDepthTexture=e}if(t.depthTexture&&!n.__autoAllocateDepthBuffer){if(r)throw Error(`target.depthTexture not supported in Cube render targets`);xe(n.__webglFramebuffer,t)}else if(r){n.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[r]),n.__webglDepthbuffer[r]===void 0)n.__webglDepthbuffer[r]=e.createRenderbuffer(),be(n.__webglDepthbuffer[r],t,!1);else{let i=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=n.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,i,e.RENDERBUFFER,a)}}else if(d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer),n.__webglDepthbuffer===void 0)n.__webglDepthbuffer=e.createRenderbuffer(),be(n.__webglDepthbuffer,t,!1);else{let r=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,i=n.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,r,e.RENDERBUFFER,i)}d.bindFramebuffer(e.FRAMEBUFFER,null)}function N(t,n,r){let i=f.get(t);n!==void 0&&M(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&Se(t)}function Ce(t){let n=t.texture,r=f.get(t),i=f.get(n);t.addEventListener(`dispose`,re);let a=t.textures,o=t.isWebGLCubeRenderTarget===!0,s=a.length>1;if(s||(i.__webglTexture===void 0&&(i.__webglTexture=e.createTexture()),i.__version=n.version,h.memory.textures++),o){r.__webglFramebuffer=[];for(let t=0;t<6;t++)if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer[t]=[];for(let i=0;i<n.mipmaps.length;i++)r.__webglFramebuffer[t][i]=e.createFramebuffer()}else r.__webglFramebuffer[t]=e.createFramebuffer()}else{if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer=[];for(let t=0;t<n.mipmaps.length;t++)r.__webglFramebuffer[t]=e.createFramebuffer()}else r.__webglFramebuffer=e.createFramebuffer();if(s)for(let t=0,n=a.length;t<n;t++){let n=f.get(a[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&De(t)===!1){r.__webglMultisampledFramebuffer=e.createFramebuffer(),r.__webglColorRenderbuffer=[],d.bindFramebuffer(e.FRAMEBUFFER,r.__webglMultisampledFramebuffer);for(let n=0;n<a.length;n++){let i=a[n];r.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,r.__webglColorRenderbuffer[n]);let o=m.convert(i.format,i.colorSpace),s=m.convert(i.type),c=O(i.internalFormat,o,s,i.colorSpace,t.isXRRenderTarget===!0),l=Ee(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,r.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(r.__webglDepthRenderbuffer=e.createRenderbuffer(),be(r.__webglDepthRenderbuffer,t,!0)),d.bindFramebuffer(e.FRAMEBUFFER,null)}}if(o){d.bindTexture(e.TEXTURE_CUBE_MAP,i.__webglTexture),ge(e.TEXTURE_CUBE_MAP,n);for(let i=0;i<6;i++)if(n.mipmaps&&n.mipmaps.length>0)for(let a=0;a<n.mipmaps.length;a++)M(r.__webglFramebuffer[i][a],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,a);else M(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,0);T(n)&&E(e.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(s){for(let n=0,i=a.length;n<i;n++){let i=a[n],o=f.get(i);d.bindTexture(e.TEXTURE_2D,o.__webglTexture),ge(e.TEXTURE_2D,i),M(r.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0+n,e.TEXTURE_2D,0),T(i)&&E(e.TEXTURE_2D)}d.unbindTexture()}else{let a=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(a=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(a,i.__webglTexture),ge(a,n),n.mipmaps&&n.mipmaps.length>0)for(let i=0;i<n.mipmaps.length;i++)M(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,a,i);else M(r.__webglFramebuffer,t,n,e.COLOR_ATTACHMENT0,a,0);T(n)&&E(a),d.unbindTexture()}t.depthBuffer&&Se(t)}function P(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(T(r)){let t=D(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),E(t),d.unbindTexture()}}}let F=[],we=[];function Te(t){if(t.samples>0){if(De(t)===!1){let n=t.textures,r=t.width,i=t.height,a=e.COLOR_BUFFER_BIT,o=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,s=f.get(t),c=n.length>1;if(c)for(let t=0;t<n.length;t++)d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);d.bindFramebuffer(e.READ_FRAMEBUFFER,s.__webglMultisampledFramebuffer),d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer);for(let l=0;l<n.length;l++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(a|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(a|=e.STENCIL_BUFFER_BIT)),c){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,s.__webglColorRenderbuffer[l]);let t=f.get(n[l]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,r,i,0,0,r,i,a,e.NEAREST),_===!0&&(F.length=0,we.length=0,F.push(e.COLOR_ATTACHMENT0+l),t.depthBuffer&&t.resolveDepthBuffer===!1&&(F.push(o),we.push(o),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,we)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,F))}if(d.bindFramebuffer(e.READ_FRAMEBUFFER,null),d.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),c)for(let t=0;t<n.length;t++){d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,s.__webglColorRenderbuffer[t]);let r=f.get(n[t]).__webglTexture;d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,r,0)}d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Ee(e){return Math.min(p.maxSamples,e.samples)}function De(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function Oe(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function ke(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(z.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&console.warn(`THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):console.error(`THREE.WebGLTextures: Unsupported texture color space:`,n)),t}function Ae(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=se,this.resetTextureUnits=oe,this.setTexture2D=le,this.setTexture2DArray=ue,this.setTexture3D=de,this.setTextureCube=fe,this.rebindTextures=N,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=M,this.useMultisampledRTT=De}function hs(e,t){function n(n,r=``){let i,a=z.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1024)return e.LUMINANCE;if(n===1025)return e.LUMINANCE_ALPHA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36492)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var gs=class extends ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},J=class extends Yn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},_s={type:`move`},vs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new J,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new J,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new J,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_s)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new J;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ys=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bs=`
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

}`,xs=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new Vt,i=e.properties.get(r);i.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Qr({vertexShader:ys,fragmentShader:bs,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new W(new vi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ss=class extends Ke{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,d=null,f=null,p=null,m=null,g=new xs,_=t.getContextAttributes(),v=null,y=null,x=[],S=[],C=new L,T=null,E=new ri;E.viewport=new B;let O=new ri;O.viewport=new B;let te=[E,O],k=new gs,ne=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=x[e];return t===void 0&&(t=new vs,x[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=x[e];return t===void 0&&(t=new vs,x[e]=t),t.getGripSpace()},this.getHand=function(e){let t=x[e];return t===void 0&&(t=new vs,x[e]=t),t.getHandSpace()};function A(e){let t=S.indexOf(e.inputSource);if(t===-1)return;let n=x[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function j(){r.removeEventListener(`select`,A),r.removeEventListener(`selectstart`,A),r.removeEventListener(`selectend`,A),r.removeEventListener(`squeeze`,A),r.removeEventListener(`squeezestart`,A),r.removeEventListener(`squeezeend`,A),r.removeEventListener(`end`,j),r.removeEventListener(`inputsourceschange`,ie);for(let e=0;e<x.length;e++){let t=S[e];t!==null&&(S[e]=null,x[e].disconnect(t))}ne=null,re=null,g.reset(),e.setRenderTarget(v),p=null,f=null,d=null,r=null,y=null,fe.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,A),r.addEventListener(`selectstart`,A),r.addEventListener(`selectend`,A),r.addEventListener(`squeeze`,A),r.addEventListener(`squeezestart`,A),r.addEventListener(`squeezeend`,A),r.addEventListener(`end`,j),r.addEventListener(`inputsourceschange`,ie),_.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Ut(p.framebufferWidth,p.framebufferHeight,{format:w,type:u,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?ee:D,a=_.stencil?b:h);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Ut(f.textureWidth,f.textureHeight,{format:w,type:u,depthTexture:new ra(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),fe.setContext(r),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ie(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=S.indexOf(n);r>=0&&(S[r]=null,x[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=S.indexOf(n);if(r===-1){for(let e=0;e<x.length;e++)if(e>=S.length){S.push(n),r=e;break}else if(S[e]===null){S[e]=n,r=e;break}if(r===-1)break}let i=x[r];i&&i.connect(n)}}let ae=new V,oe=new V;function se(e,t,n){ae.setFromMatrixPosition(t.matrixWorld),oe.setFromMatrixPosition(n.matrixWorld);let r=ae.distanceTo(oe),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ce(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;g.texture!==null&&(g.depthNear>0&&(t=g.depthNear),g.depthFar>0&&(n=g.depthFar)),k.near=O.near=E.near=t,k.far=O.far=E.far=n,(ne!==k.near||re!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),ne=k.near,re=k.far),E.layers.mask=e.layers.mask|2,O.layers.mask=e.layers.mask|4,k.layers.mask=E.layers.mask|O.layers.mask;let i=e.parent,a=k.cameras;ce(k,i);for(let e=0;e<a.length;e++)ce(a[e],i);a.length===2?se(k,E,O):k.projectionMatrix.copy(E.projectionMatrix),le(e,k,i)};function le(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Xe*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)};let ue=null;function de(t,i){if(l=i.getViewerPose(c||a),m=i,l!==null){let t=l.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let n=!1;t.length!==k.cameras.length&&(k.cameras.length=0,n=!0);for(let r=0;r<t.length;r++){let i=t[r],a=null;if(p!==null)a=p.getViewport(i);else{let t=d.getViewSubImage(f,i);a=t.viewport,r===0&&(e.setRenderTargetTextures(y,t.colorTexture,f.ignoreDepthValues?void 0:t.depthStencilTexture),e.setRenderTarget(y))}let o=te[r];o===void 0&&(o=new ri,o.layers.enable(r),o.viewport=new B,te[r]=o),o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(i.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),r===0&&(k.matrix.copy(o.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),n===!0&&k.cameras.push(o)}let i=r.enabledFeatures;if(i&&i.includes(`depth-sensing`)){let n=d.getDepthInformation(t[0]);n&&n.isValid&&n.texture&&g.init(e,n,r.renderState)}}for(let e=0;e<x.length;e++){let t=S[e],n=x[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ue&&ue(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let fe=new gi;fe.setAnimationLoop(de),this.setAnimationLoop=function(e){ue=e},this.dispose=function(){}}},Cs=new Mn,ws=new H;function Ts(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Jr(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isMeshBasicMaterial||t.isMeshLambertMaterial?a(e,t):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,Cs.copy(o),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,a.isCubeTexture&&a.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),e.envMapRotation.value.setFromMatrix4(ws.makeRotationFromEuler(Cs)),e.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Es(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return console.error(`THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?console.warn(`THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.`):console.warn(`THREE.WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}var Ds=class{constructor(e={}){let{canvas:t=St(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);m=n.getContextAttributes().alpha}else m=a;let h=new Uint32Array(4),g=new Int32Array(4),v=null,y=null,b=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ze,this.toneMapping=0,this.toneMappingExposure=1;let S=this,C=!1,w=0,T=0,E=null,D=-1,ee=null,O=new B,te=new B,k=null,ne=new U(0),re=0,A=t.width,j=t.height,ie=1,ae=null,oe=null,se=new B(0,0,A,j),ce=new B(0,0,A,j),le=!1,ue=new hi,de=!1,fe=!1,pe=new H,me=new H,he=new V,ge=new B,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ve=!1;function ye(){return E===null?ie:1}let M=n;function be(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r170`),t.addEventListener(`webglcontextlost`,Ke,!1),t.addEventListener(`webglcontextrestored`,qe,!1),t.addEventListener(`webglcontextcreationerror`,Je,!1),M===null){let t=`webgl2`;if(M=be(t,e),M===null)throw be(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}}catch(e){throw console.error(`THREE.WebGLRenderer: `+e.message),e}let xe,Se,N,Ce,P,F,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,Ve,He,Ue;function We(){xe=new Zi(M),xe.init(),Ve=new hs(M,xe),Se=new Ei(M,xe,e,Ve),N=new ds(M,xe),Se.reverseDepthBuffer&&p&&N.buffers.depth.setReversed(!0),Ce=new ea(M),P=new qo,F=new ms(M,xe,N,P,Se,Ve,Ce),we=new Oi(S),Te=new Xi(S),Ee=new _i(M),He=new wi(M,Ee),De=new Qi(M,Ee,Ce,He),Oe=new na(M,De,Ee,Ce),Ie=new ta(M,Se,F),Ne=new Di(P),ke=new Ko(S,we,Te,xe,Se,He,Ne),Ae=new Ts(S,P),je=new Zo,Me=new is(xe),Fe=new Ci(S,we,Te,N,Oe,m,s),Pe=new ls(S,Oe,Se),Ue=new Es(M,Ce,Se,N),Le=new Ti(M,xe,Ce),Re=new $i(M,xe,Ce),Ce.programs=ke.programs,S.capabilities=Se,S.extensions=xe,S.properties=P,S.renderLists=je,S.shadowMap=Pe,S.state=N,S.info=Ce}We();let Ge=new Ss(S,M);this.xr=Ge,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){let e=xe.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=xe.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(e){e!==void 0&&(ie=e,this.setSize(A,j,!1))},this.getSize=function(e){return e.set(A,j)},this.setSize=function(e,n,r=!0){Ge.isPresenting?console.warn(`THREE.WebGLRenderer: Can't change size while VR device is presenting.`):(A=e,j=n,t.width=Math.floor(e*ie),t.height=Math.floor(n*ie),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(A*ie,j*ie).floor()},this.setDrawingBufferSize=function(e,n,r){A=e,j=n,ie=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.getCurrentViewport=function(e){return e.copy(O)},this.getViewport=function(e){return e.copy(se)},this.setViewport=function(e,t,n,r){e.isVector4?se.set(e.x,e.y,e.z,e.w):se.set(e,t,n,r),N.viewport(O.copy(se).multiplyScalar(ie).round())},this.getScissor=function(e){return e.copy(ce)},this.setScissor=function(e,t,n,r){e.isVector4?ce.set(e.x,e.y,e.z,e.w):ce.set(e,t,n,r),N.scissor(te.copy(ce).multiplyScalar(ie).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(e){N.setScissorTest(le=e)},this.setOpaqueSort=function(e){ae=e},this.setTransparentSort=function(e){oe=e},this.getClearColor=function(e){return e.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(E!==null){let t=E.texture.format;e=t===1033||t===1031||t===1029}if(e){let e=E.texture.type,t=e===1009||e===1014||e===1012||e===1020||e===1017||e===1018,n=Fe.getClearColor(),r=Fe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(h[0]=i,h[1]=a,h[2]=o,h[3]=r,M.clearBufferuiv(M.COLOR,0,h)):(g[0]=i,g[1]=a,g[2]=o,g[3]=r,M.clearBufferiv(M.COLOR,0,g))}else r|=M.COLOR_BUFFER_BIT}t&&(r|=M.DEPTH_BUFFER_BIT),n&&(r|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),M.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Ke,!1),t.removeEventListener(`webglcontextrestored`,qe,!1),t.removeEventListener(`webglcontextcreationerror`,Je,!1),je.dispose(),Me.dispose(),P.dispose(),we.dispose(),Te.dispose(),Oe.dispose(),He.dispose(),Ue.dispose(),ke.dispose(),Ge.dispose(),Ge.removeEventListener(`sessionstart`,tt),Ge.removeEventListener(`sessionend`,nt),rt.stop()};function Ke(e){e.preventDefault(),console.log(`THREE.WebGLRenderer: Context Lost.`),C=!0}function qe(){console.log(`THREE.WebGLRenderer: Context Restored.`),C=!1;let e=Ce.autoReset,t=Pe.enabled,n=Pe.autoUpdate,r=Pe.needsUpdate,i=Pe.type;We(),Ce.autoReset=e,Pe.enabled=t,Pe.autoUpdate=n,Pe.needsUpdate=r,Pe.type=i}function Je(e){console.error(`THREE.WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Ye(e){let t=e.target;t.removeEventListener(`dispose`,Ye),Xe(t)}function Xe(e){Ze(e),P.remove(e)}function Ze(e){let t=P.get(e).programs;t!==void 0&&(t.forEach(function(e){ke.releaseProgram(e)}),e.isShaderMaterial&&ke.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=_e);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=ft(e,t,n,r,i);N.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=De.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;He.setup(i,r,s,n,c);let h,g=Le;if(c!==null&&(h=Ee.get(c),g=Re,g.setIndex(h)),i.isMesh)r.wireframe===!0?(N.setLineWidth(r.wireframeLinewidth*ye()),g.setMode(M.LINES)):g.setMode(M.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),N.setLineWidth(e*ye()),i.isLineSegments?g.setMode(M.LINES):i.isLineLoop?g.setMode(M.LINE_LOOP):g.setMode(M.LINE_STRIP)}else i.isPoints?g.setMode(M.POINTS):i.isSprite&&g.setMode(M.TRIANGLES);if(i.isBatchedMesh){if(i._multiDrawInstances!==null)g.renderMultiDrawInstances(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount,i._multiDrawInstances);else if(xe.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ee.get(c).bytesPerElement:1,o=P.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(M,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Qe(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,lt(e,t,n),e.side=0,e.needsUpdate=!0,lt(e,t,n),e.side=2):lt(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),y=Me.get(n),y.init(t),x.push(y),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(y.pushLight(e),e.castShadow&&y.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(y.pushLight(e),e.castShadow&&y.pushShadow(e))}),y.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];Qe(a,n,e),r.add(a)}else Qe(t,n,e),r.add(t)}}),x.pop(),y=null,r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){P.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}xe.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let $e=null;function et(e){$e&&$e(e)}function tt(){rt.stop()}function nt(){rt.start()}let rt=new gi;rt.setAnimationLoop(et),typeof self<`u`&&rt.setContext(self),this.setAnimationLoop=function(e){$e=e,Ge.setAnimationLoop(e),e===null?rt.stop():rt.start()},Ge.addEventListener(`sessionstart`,tt),Ge.addEventListener(`sessionend`,nt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){console.error(`THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(C===!0)return;if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(t),t=Ge.getCamera()),e.isScene===!0&&e.onBeforeRender(S,e,t,E),y=Me.get(e,x.length),y.init(t),x.push(y),me.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),ue.setFromProjectionMatrix(me),fe=this.localClippingEnabled,de=Ne.init(this.clippingPlanes,fe),v=je.get(e,b.length),v.init(),b.push(v),Ge.enabled===!0&&Ge.isPresenting===!0){let e=S.xr.getDepthSensingMesh();e!==null&&it(e,t,-1/0,S.sortObjects)}it(e,t,0,S.sortObjects),v.finish(),S.sortObjects===!0&&v.sort(ae,oe),ve=Ge.enabled===!1||Ge.isPresenting===!1||Ge.hasDepthSensing()===!1,ve&&Fe.addToRenderList(v,e),this.info.render.frame++,de===!0&&Ne.beginShadows();let n=y.state.shadowsArray;Pe.render(n,e,t),de===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset();let r=v.opaque,i=v.transmissive;if(y.setupLights(),t.isArrayCamera){let n=t.cameras;if(i.length>0)for(let t=0,a=n.length;t<a;t++){let a=n[t];ot(r,i,e,a)}ve&&Fe.render(e);for(let t=0,r=n.length;t<r;t++){let r=n[t];at(v,e,r,r.viewport)}}else i.length>0&&ot(r,i,e,t),ve&&Fe.render(e),at(v,e,t);E!==null&&(F.updateMultisampleRenderTarget(E),F.updateRenderTargetMipmap(E)),e.isScene===!0&&e.onAfterRender(S,e,t),He.resetDefaultState(),D=-1,ee=null,x.pop(),x.length>0?(y=x[x.length-1],de===!0&&Ne.setGlobalState(S.clippingPlanes,y.state.camera)):y=null,b.pop(),v=b.length>0?b[b.length-1]:null};function it(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)y.pushLight(e),e.castShadow&&y.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||ue.intersectsSprite(e)){r&&ge.setFromMatrixPosition(e.matrixWorld).applyMatrix4(me);let t=Oe.update(e),i=e.material;i.visible&&v.push(e,t,i,n,ge.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||ue.intersectsObject(e))){let t=Oe.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),ge.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),ge.copy(e.boundingSphere.center)),ge.applyMatrix4(e.matrixWorld).applyMatrix4(me)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&v.push(e,t,s,n,ge.z,o)}}else i.visible&&v.push(e,t,i,n,ge.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)it(i[e],t,n,r)}function at(e,t,n,r){let i=e.opaque,a=e.transmissive,o=e.transparent;y.setupLightsView(n),de===!0&&Ne.setGlobalState(S.clippingPlanes,n),r&&N.viewport(O.copy(r)),i.length>0&&st(i,t,n),a.length>0&&st(a,t,n),o.length>0&&st(o,t,n),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function ot(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[r.id]===void 0&&(y.state.transmissionRenderTarget[r.id]=new Ut(1,1,{generateMipmaps:!0,type:xe.has(`EXT_color_buffer_half_float`)||xe.has(`EXT_color_buffer_float`)?_:u,minFilter:l,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:z.workingColorSpace}));let a=y.state.transmissionRenderTarget[r.id],o=r.viewport||O;a.setSize(o.z,o.w);let s=S.getRenderTarget();S.setRenderTarget(a),S.getClearColor(ne),re=S.getClearAlpha(),re<1&&S.setClearColor(16777215,.5),S.clear(),ve&&Fe.render(n);let c=S.toneMapping;S.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),y.setupLightsView(r),de===!0&&Ne.setGlobalState(S.clippingPlanes,r),st(e,n,r),F.updateMultisampleRenderTarget(a),F.updateRenderTargetMipmap(a),xe.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let a=t[i],o=a.object,s=a.geometry,c=a.material,l=a.group;if(c.side===2&&o.layers.test(r.layers)){let t=c.side;c.side=1,c.needsUpdate=!0,ct(o,n,r,s,c,l),c.side=t,c.needsUpdate=!0,e=!0}}e===!0&&(F.updateMultisampleRenderTarget(a),F.updateRenderTargetMipmap(a))}S.setRenderTarget(s),S.setClearColor(ne,re),d!==void 0&&(r.viewport=d),S.toneMapping=c}function st(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],o=a.object,s=a.geometry,c=r===null?a.material:r,l=a.group;o.layers.test(n.layers)&&ct(o,t,n,s,c,l)}}function ct(e,t,n,r,i,a){e.onBeforeRender(S,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(S,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,S.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,S.renderBufferDirect(n,t,r,i,e,a),i.side=2):S.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(S,t,n,r,i,a)}function lt(e,t,n){t.isScene!==!0&&(t=_e);let r=P.get(e),i=y.state.lights,a=y.state.shadowsArray,o=i.state.version,s=ke.getParameters(e,i.state,a,t,n),c=ke.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial?t.environment:null,r.fog=t.fog,r.envMap=(e.isMeshStandardMaterial?Te:we).get(e.envMap||r.environment),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Ye),l=new Map,r.programs=l);let u=l.get(c);if(u!==void 0){if(r.currentProgram===u&&r.lightsStateVersion===o)return dt(e,s),u}else s.uniforms=ke.getUniforms(e),e.onBeforeCompile(s,S),u=ke.acquireProgram(s,c),l.set(c,u),r.uniforms=s.uniforms;let d=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(d.clippingPlanes=Ne.uniform),dt(e,s),r.needsLights=mt(e),r.lightsStateVersion=o,r.needsLights&&(d.ambientLightColor.value=i.state.ambient,d.lightProbe.value=i.state.probe,d.directionalLights.value=i.state.directional,d.directionalLightShadows.value=i.state.directionalShadow,d.spotLights.value=i.state.spot,d.spotLightShadows.value=i.state.spotShadow,d.rectAreaLights.value=i.state.rectArea,d.ltc_1.value=i.state.rectAreaLTC1,d.ltc_2.value=i.state.rectAreaLTC2,d.pointLights.value=i.state.point,d.pointLightShadows.value=i.state.pointShadow,d.hemisphereLights.value=i.state.hemi,d.directionalShadowMap.value=i.state.directionalShadowMap,d.directionalShadowMatrix.value=i.state.directionalShadowMatrix,d.spotShadowMap.value=i.state.spotShadowMap,d.spotLightMatrix.value=i.state.spotLightMatrix,d.spotLightMap.value=i.state.spotLightMap,d.pointShadowMap.value=i.state.pointShadowMap,d.pointShadowMatrix.value=i.state.pointShadowMatrix),r.currentProgram=u,r.uniformsList=null,u}function ut(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=uo.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function dt(e,t){let n=P.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function ft(e,t,n,r,i){t.isScene!==!0&&(t=_e),F.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial?t.environment:null,s=E===null?S.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Be,c=(r.isMeshStandardMaterial?Te:we).get(r.envMap||o),l=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,u=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),d=!!n.morphAttributes.position,f=!!n.morphAttributes.normal,p=!!n.morphAttributes.color,m=0;r.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(m=S.toneMapping);let h=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,g=h===void 0?0:h.length,_=P.get(r),v=y.state.lights;if(de===!0&&(fe===!0||e!==ee)){let t=e===ee&&r.id===D;Ne.setState(r,e,t)}let b=!1;r.version===_.__version?_.needsLights&&_.lightsStateVersion!==v.state.version?b=!0:_.outputColorSpace===s?i.isBatchedMesh&&_.batching===!1||!i.isBatchedMesh&&_.batching===!0||i.isBatchedMesh&&_.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&_.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&_.instancing===!1||!i.isInstancedMesh&&_.instancing===!0||i.isSkinnedMesh&&_.skinning===!1||!i.isSkinnedMesh&&_.skinning===!0||i.isInstancedMesh&&_.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&_.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&_.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&_.instancingMorph===!1&&i.morphTexture!==null?b=!0:_.envMap===c?r.fog===!0&&_.fog!==a||_.numClippingPlanes!==void 0&&(_.numClippingPlanes!==Ne.numPlanes||_.numIntersection!==Ne.numIntersection)?b=!0:_.vertexAlphas===l&&_.vertexTangents===u&&_.morphTargets===d&&_.morphNormals===f&&_.morphColors===p&&_.toneMapping===m?_.morphTargetsCount!==g&&(b=!0):b=!0:b=!0:b=!0:(b=!0,_.__version=r.version);let x=_.currentProgram;b===!0&&(x=lt(r,t,i));let C=!1,w=!1,T=!1,O=x.getUniforms(),te=_.uniforms;if(N.useProgram(x.program)&&(C=!0,w=!0,T=!0),r.id!==D&&(D=r.id,w=!0),C||ee!==e){N.buffers.depth.getReversed()?(pe.copy(e.projectionMatrix),Et(pe),Dt(pe),O.setValue(M,`projectionMatrix`,pe)):O.setValue(M,`projectionMatrix`,e.projectionMatrix),O.setValue(M,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(M,he.setFromMatrixPosition(e.matrixWorld)),Se.logarithmicDepthBuffer&&O.setValue(M,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(M,`isOrthographic`,e.isOrthographicCamera===!0),ee!==e&&(ee=e,w=!0,T=!0)}if(i.isSkinnedMesh){O.setOptional(M,i,`bindMatrix`),O.setOptional(M,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(M,`boneTexture`,e.boneTexture,F))}i.isBatchedMesh&&(O.setOptional(M,i,`batchingTexture`),O.setValue(M,`batchingTexture`,i._matricesTexture,F),O.setOptional(M,i,`batchingIdTexture`),O.setValue(M,`batchingIdTexture`,i._indirectTexture,F),O.setOptional(M,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(M,`batchingColorTexture`,i._colorsTexture,F));let k=n.morphAttributes;if((k.position!==void 0||k.normal!==void 0||k.color!==void 0)&&Ie.update(i,n,x),(w||_.receiveShadow!==i.receiveShadow)&&(_.receiveShadow=i.receiveShadow,O.setValue(M,`receiveShadow`,i.receiveShadow)),r.isMeshGouraudMaterial&&r.envMap!==null&&(te.envMap.value=c,te.flipEnvMap.value=c.isCubeTexture&&c.isRenderTargetTexture===!1?-1:1),r.isMeshStandardMaterial&&r.envMap===null&&t.environment!==null&&(te.envMapIntensity.value=t.environmentIntensity),w&&(O.setValue(M,`toneMappingExposure`,S.toneMappingExposure),_.needsLights&&pt(te,T),a&&r.fog===!0&&Ae.refreshFogUniforms(te,a),Ae.refreshMaterialUniforms(te,r,ie,j,y.state.transmissionRenderTarget[e.id]),uo.upload(M,ut(_),te,F)),r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(uo.upload(M,ut(_),te,F),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(M,`center`,i.center),O.setValue(M,`modelViewMatrix`,i.modelViewMatrix),O.setValue(M,`normalMatrix`,i.normalMatrix),O.setValue(M,`modelMatrix`,i.matrixWorld),r.isShaderMaterial||r.isRawShaderMaterial){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Ue.update(n,x),Ue.bind(n,x)}}return x}function pt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function mt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(e,t,n){P.get(e.texture).__webglTexture=t,P.get(e.depthTexture).__webglTexture=n;let r=P.get(e);r.__hasExternalTextures=!0,r.__autoAllocateDepthBuffer=n===void 0,r.__autoAllocateDepthBuffer||xe.has(`WEBGL_multisampled_render_to_texture`)===!0&&(console.warn(`THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided`),r.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(e,t){let n=P.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){E=e,w=t,T=n;let r=!0,i=null,a=!1,o=!1;if(e){let s=P.get(e);if(s.__useDefaultFramebuffer!==void 0)N.bindFramebuffer(M.FRAMEBUFFER,null),r=!1;else if(s.__webglFramebuffer===void 0)F.setupRenderTarget(e);else if(s.__hasExternalTextures)F.rebindTextures(e,P.get(e.texture).__webglTexture,P.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(s.__boundDepthTexture!==t){if(t!==null&&P.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.`);F.setupDepthRenderbuffer(e)}}let c=e.texture;(c.isData3DTexture||c.isDataArrayTexture||c.isCompressedArrayTexture)&&(o=!0);let l=P.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(i=Array.isArray(l[t])?l[t][n]:l[t],a=!0):i=e.samples>0&&F.useMultisampledRTT(e)===!1?P.get(e).__webglMultisampledFramebuffer:Array.isArray(l)?l[n]:l,O.copy(e.viewport),te.copy(e.scissor),k=e.scissorTest}else O.copy(se).multiplyScalar(ie).floor(),te.copy(ce).multiplyScalar(ie).floor(),k=le;if(N.bindFramebuffer(M.FRAMEBUFFER,i)&&r&&N.drawBuffers(e,i),N.viewport(O),N.scissor(te),N.setScissorTest(k),a){let r=P.get(e.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(o){let r=P.get(e.texture),i=t||0;M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,r.__webglTexture,n||0,i)}D=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o){if(!(e&&e.isWebGLRenderTarget)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let s=P.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){N.bindFramebuffer(M.FRAMEBUFFER,s);try{let o=e.texture,s=o.format,c=o.type;if(!Se.textureFormatReadable(s)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!Se.textureTypeReadable(c)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&M.readPixels(t,n,r,i,Ve.convert(s),Ve.convert(c),a)}finally{let e=E===null?null:P.get(E).__webglFramebuffer;N.bindFramebuffer(M.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let s=P.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){let o=e.texture,c=o.format,l=o.type;if(!Se.textureFormatReadable(c))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!Se.textureTypeReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){N.bindFramebuffer(M.FRAMEBUFFER,s);let e=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,e),M.bufferData(M.PIXEL_PACK_BUFFER,a.byteLength,M.STREAM_READ),M.readPixels(t,n,r,i,Ve.convert(c),Ve.convert(l),0);let o=E===null?null:P.get(E).__webglFramebuffer;N.bindFramebuffer(M.FRAMEBUFFER,o);let u=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await Tt(M,u,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,e),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,a),M.deleteBuffer(e),M.deleteSync(u),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){e.isTexture!==!0&&(wt(`WebGLRenderer: copyFramebufferToTexture function signature has changed.`),t=arguments[0]||null,e=arguments[1]);let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;F.setTexture2D(e,0),M.copyTexSubImage2D(M.TEXTURE_2D,n,0,0,o,s,i,a),N.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0){e.isTexture!==!0&&(wt(`WebGLRenderer: copyTextureToTexture function signature has changed.`),r=arguments[0]||null,e=arguments[1],t=arguments[2],i=arguments[3]||0,n=null);let a,o,s,c,l,u,d,f,p,m=e.isCompressedTexture?e.mipmaps[i]:e.image;n===null?(a=m.width,o=m.height,s=m.depth||1,c=0,l=0,u=0):(a=n.max.x-n.min.x,o=n.max.y-n.min.y,s=n.isBox3?n.max.z-n.min.z:1,c=n.min.x,l=n.min.y,u=n.isBox3?n.min.z:0),r===null?(d=0,f=0,p=0):(d=r.x,f=r.y,p=r.z);let h=Ve.convert(t.format),g=Ve.convert(t.type),_;t.isData3DTexture?(F.setTexture3D(t,0),_=M.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(F.setTexture2DArray(t,0),_=M.TEXTURE_2D_ARRAY):(F.setTexture2D(t,0),_=M.TEXTURE_2D),M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,t.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,t.unpackAlignment);let v=M.getParameter(M.UNPACK_ROW_LENGTH),y=M.getParameter(M.UNPACK_IMAGE_HEIGHT),b=M.getParameter(M.UNPACK_SKIP_PIXELS),x=M.getParameter(M.UNPACK_SKIP_ROWS),S=M.getParameter(M.UNPACK_SKIP_IMAGES);M.pixelStorei(M.UNPACK_ROW_LENGTH,m.width),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,m.height),M.pixelStorei(M.UNPACK_SKIP_PIXELS,c),M.pixelStorei(M.UNPACK_SKIP_ROWS,l),M.pixelStorei(M.UNPACK_SKIP_IMAGES,u);let C=e.isDataArrayTexture||e.isData3DTexture,w=t.isDataArrayTexture||t.isData3DTexture;if(e.isRenderTargetTexture||e.isDepthTexture){let n=P.get(e),r=P.get(t),m=P.get(n.__renderTarget),h=P.get(r.__renderTarget);N.bindFramebuffer(M.READ_FRAMEBUFFER,m.__webglFramebuffer),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,h.__webglFramebuffer);for(let n=0;n<s;n++)C&&M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,P.get(e).__webglTexture,i,u+n),e.isDepthTexture?(w&&M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,P.get(t).__webglTexture,i,p+n),M.blitFramebuffer(c,l,a,o,d,f,a,o,M.DEPTH_BUFFER_BIT,M.NEAREST)):w?M.copyTexSubImage3D(_,i,d,f,p+n,c,l,a,o):M.copyTexSubImage2D(_,i,d,f,p+n,c,l,a,o);N.bindFramebuffer(M.READ_FRAMEBUFFER,null),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else w?e.isDataTexture||e.isData3DTexture?M.texSubImage3D(_,i,d,f,p,a,o,s,h,g,m.data):t.isCompressedArrayTexture?M.compressedTexSubImage3D(_,i,d,f,p,a,o,s,h,m.data):M.texSubImage3D(_,i,d,f,p,a,o,s,h,g,m):e.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,i,d,f,a,o,h,g,m.data):e.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,i,d,f,m.width,m.height,h,m.data):M.texSubImage2D(M.TEXTURE_2D,i,d,f,a,o,h,g,m);M.pixelStorei(M.UNPACK_ROW_LENGTH,v),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,y),M.pixelStorei(M.UNPACK_SKIP_PIXELS,b),M.pixelStorei(M.UNPACK_SKIP_ROWS,x),M.pixelStorei(M.UNPACK_SKIP_IMAGES,S),i===0&&t.generateMipmaps&&M.generateMipmap(_),N.unbindTexture()},this.copyTextureToTexture3D=function(e,t,n=null,r=null,i=0){return e.isTexture!==!0&&(wt(`WebGLRenderer: copyTextureToTexture3D function signature has changed.`),n=arguments[0]||null,r=arguments[1]||null,e=arguments[2],t=arguments[3],i=arguments[4]||0),wt(`WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.`),this.copyTextureToTexture(e,t,n,r,i)},this.initRenderTarget=function(e){P.get(e).__webglFramebuffer===void 0&&F.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?F.setTextureCube(e,0):e.isData3DTexture?F.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?F.setTexture2DArray(e,0):F.setTexture2D(e,0),N.unbindTexture()},this.resetState=function(){w=0,T=0,E=null,N.reset(),He.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ge}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=z._getDrawingBufferColorSpace(e),t.unpackColorSpace=z._getUnpackColorSpace()}},Os=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new U(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},ks=class extends Yn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},As=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=We,this.updateRanges=[],this.version=0,this.uuid=Ze()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ze()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ze()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},js=new V,Ms=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)js.fromBufferAttribute(this,t),js.applyMatrix4(e),this.setXYZ(t,js.x,js.y,js.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)js.fromBufferAttribute(this,t),js.applyNormalMatrix(e),this.setXYZ(t,js.x,js.y,js.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)js.fromBufferAttribute(this,t),js.transformDirection(e),this.setXYZ(t,js.x,js.y,js.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=_t(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=I(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=I(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=I(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=I(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=I(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=_t(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=_t(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=_t(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=_t(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=I(t,this.array),n=I(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=I(t,this.array),n=I(n,this.array),r=I(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=I(t,this.array),n=I(n,this.array),r=I(r,this.array),i=I(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){console.log(`THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new br(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log(`THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ns=class extends gr{static get type(){return`SpriteMaterial`}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new U(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ps,Fs=new V,Is=new V,Ls=new V,Rs=new L,zs=new L,Bs=new H,Vs=new V,Hs=new V,Us=new V,Ws=new L,Gs=new L,Ks=new L,qs=class extends Yn{constructor(e=new Ns){if(super(),this.isSprite=!0,this.type=`Sprite`,Ps===void 0){Ps=new jr;let e=new As(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Ps.setIndex([0,1,2,0,2,3]),Ps.setAttribute(`position`,new Ms(e,3,0,!1)),Ps.setAttribute(`uv`,new Ms(e,2,3,!1))}this.geometry=Ps,this.material=e,this.center=new L(.5,.5)}raycast(e,t){e.camera===null&&console.error(`THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Is.setFromMatrixScale(this.matrixWorld),Bs.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ls.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Is.multiplyScalar(-Ls.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;Js(Vs.set(-.5,-.5,0),Ls,a,Is,r,i),Js(Hs.set(.5,-.5,0),Ls,a,Is,r,i),Js(Us.set(.5,.5,0),Ls,a,Is,r,i),Ws.set(0,0),Gs.set(1,0),Ks.set(1,1);let o=e.ray.intersectTriangle(Vs,Hs,Us,!1,Fs);if(o===null&&(Js(Hs.set(-.5,.5,0),Ls,a,Is,r,i),Gs.set(0,1),o=e.ray.intersectTriangle(Vs,Us,Hs,!1,Fs),o===null))return;let s=e.ray.origin.distanceTo(Fs);s<e.near||s>e.far||t.push({distance:s,point:Fs.clone(),uv:lr.getInterpolation(Fs,Vs,Hs,Us,Ws,Gs,Ks,new L),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Js(e,t,n,r,i,a){Rs.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?zs.copy(Rs):(zs.x=a*Rs.x-i*Rs.y,zs.y=i*Rs.x+a*Rs.y),e.copy(t),e.x+=zs.x,e.y+=zs.y,e.applyMatrix4(Bs)}var Ys=new V,Xs=new B,Zs=new B,Qs=new V,$s=new H,ec=new V,tc=new mn,nc=new H,rc=new Sn,ic=class extends W{constructor(t,n){super(t,n),this.isSkinnedMesh=!0,this.type=`SkinnedMesh`,this.bindMode=e,this.bindMatrix=new H,this.bindMatrixInverse=new H,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Yt),this.boundingBox.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,ec),this.boundingBox.expandByPoint(ec)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new mn),this.boundingSphere.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,ec),this.boundingSphere.expandByPoint(ec)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tc.copy(this.boundingSphere),tc.applyMatrix4(r),e.ray.intersectsSphere(tc)!==!1&&(nc.copy(r).invert(),rc.copy(e.ray).applyMatrix4(nc),(this.boundingBox===null||rc.intersectsBox(this.boundingBox)!==!1)&&this._computeIntersections(e,t,rc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new B,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r===1/0?e.set(1,0,0,0):e.multiplyScalar(r),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===`attached`?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===`detached`?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn(`THREE.SkinnedMesh: Unrecognized bindMode: `+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;Xs.fromBufferAttribute(r.attributes.skinIndex,e),Zs.fromBufferAttribute(r.attributes.skinWeight,e),Ys.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let e=0;e<4;e++){let r=Zs.getComponent(e);if(r!==0){let i=Xs.getComponent(e);$s.multiplyMatrices(n.bones[i].matrixWorld,n.boneInverses[i]),t.addScaledVector(Qs.copy(Ys).applyMatrix4($s),r)}}return t.applyMatrix4(this.bindMatrixInverse)}},ac=class extends Yn{constructor(){super(),this.isBone=!0,this.type=`Bone`}},oc=class extends Vt{constructor(e=null,t=1,n=1,r,a,o,s,c,l=i,u=i,d,f){super(null,o,s,c,l,u,r,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},sc=new H,cc=new H,lc=class e{constructor(e=[],t=[]){this.uuid=Ze(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn(`THREE.Skeleton: Number of inverse bone matrices does not match amount of bones.`),this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++)this.boneInverses.push(new H)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let t=new H;this.bones[e]&&t.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&t.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&(t.parent&&t.parent.isBone?(t.matrix.copy(t.parent.matrixWorld).invert(),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let r=0,i=e.length;r<i;r++){let i=e[r]?e[r].matrixWorld:cc;sc.multiplyMatrices(i,t[r]),sc.toArray(n,r*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new e(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new oc(t,e,e,w,g);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let r=e.bones[n],i=t[r];i===void 0&&(console.warn(`THREE.Skeleton: No bone found with UUID:`,r),i=new ac),this.bones.push(i),this.boneInverses.push(new H().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:`Skeleton`,generator:`Skeleton.toJSON`},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,i=t.length;r<i;r++){let i=t[r];e.bones.push(i.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},uc=class extends br{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},dc=new H,fc=new H,pc=[],mc=new Yt,hc=new H,gc=new W,_c=new mn,vc=class extends W{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new uc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,hc)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,dc),mc.copy(e.boundingBox).applyMatrix4(dc),this.boundingBox.union(mc)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new mn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,dc),_c.copy(e.boundingSphere).applyMatrix4(dc),this.boundingSphere.union(_c)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(gc.geometry=this.geometry,gc.material=this.material,gc.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_c.copy(this.boundingSphere),_c.applyMatrix4(n),e.ray.intersectsSphere(_c)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,dc),fc.multiplyMatrices(n,dc),gc.matrixWorld=fc,gc.raycast(e,pc);for(let e=0,n=pc.length;e<n;e++){let n=pc[e];n.instanceId=i,n.object=this,t.push(n)}pc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new uc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new oc(new Float32Array(r*this.count),r,this.count,O,g));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;i[s]=o,i.set(n,s+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:`dispose`}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},yc=class extends gr{static get type(){return`LineBasicMaterial`}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new U(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},bc=new V,xc=new V,Sc=new H,Cc=new Sn,wc=new mn,Tc=new V,Ec=new V,Dc=class extends Yn{constructor(e=new jr,t=new yc){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)bc.fromBufferAttribute(t,e-1),xc.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=bc.distanceTo(xc);e.setAttribute(`lineDistance`,new Cr(n,1))}else console.warn(`THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wc.copy(n.boundingSphere),wc.applyMatrix4(r),wc.radius+=i,e.ray.intersectsSphere(wc)===!1)return;Sc.copy(r).invert(),Cc.copy(e.ray).applyMatrix4(Sc);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Oc(this,e,Cc,s,n,r);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Oc(this,e,Cc,s,i,a);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Oc(this,e,Cc,s,i,i+1);n&&t.push(n)}if(this.isLineLoop){let i=Oc(this,e,Cc,s,r-1,n);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Oc(e,t,n,r,i,a){let o=e.geometry.attributes.position;if(bc.fromBufferAttribute(o,i),xc.fromBufferAttribute(o,a),n.distanceSqToSegment(bc,xc,Tc,Ec)>r)return;Tc.applyMatrix4(e.matrixWorld);let s=t.ray.origin.distanceTo(Tc);if(!(s<t.near||s>t.far))return{distance:s,point:Ec.clone().applyMatrix4(e.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:e}}var kc=new V,Ac=new V,jc=class extends Dc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)kc.fromBufferAttribute(t,e),Ac.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+kc.distanceTo(Ac);e.setAttribute(`lineDistance`,new Cr(n,1))}else console.warn(`THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Mc=class extends Dc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type=`LineLoop`}},Nc=class extends gr{static get type(){return`PointsMaterial`}constructor(e){super(),this.isPointsMaterial=!0,this.color=new U(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Pc=new H,Fc=new Sn,Ic=new mn,Lc=new V,Rc=class extends Yn{constructor(e=new jr,t=new Nc){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ic.copy(n.boundingSphere),Ic.applyMatrix4(r),Ic.radius+=i,e.ray.intersectsSphere(Ic)===!1)return;Pc.copy(r).invert(),Fc.copy(e.ray).applyMatrix4(Pc);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Lc.fromBufferAttribute(l,n),zc(Lc,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Lc.fromBufferAttribute(l,a),zc(Lc,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function zc(e,t,n,r,i,a,o){let s=Fc.distanceSqToPoint(e);if(s<n){let n=new V;Fc.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Bc=class extends Vt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Vc=class e extends jr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new V,l=new L;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new Cr(a,3)),this.setAttribute(`normal`,new Cr(o,3)),this.setAttribute(`uv`,new Cr(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Hc=class e extends jr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Cr(u,3)),this.setAttribute(`normal`,new Cr(d,3)),this.setAttribute(`uv`,new Cr(f,2));function _(){let a=new V,_=new V,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new L,m=new V,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Uc=class e extends Hc{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Wc=class e extends jr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new V,d=new V,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=0;f===0&&a===0?v=.5/t:f===n&&s===Math.PI&&(v=-.5/t);for(let n=0;n<=t;n++){let s=n/t;u.x=-e*Math.cos(r+s*i)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(r+s*i)*Math.sin(a+_*o),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(s+v,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Cr(p,3)),this.setAttribute(`normal`,new Cr(m,3)),this.setAttribute(`uv`,new Cr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Gc=class e extends jr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i},n=Math.floor(n),r=Math.floor(r);let a=[],o=[],s=[],c=[],l=new V,u=new V,d=new V;for(let a=0;a<=n;a++)for(let f=0;f<=r;f++){let p=f/r*i,m=a/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(p),u.y=(e+t*Math.cos(m))*Math.sin(p),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),l.x=e*Math.cos(p),l.y=e*Math.sin(p),d.subVectors(u,l).normalize(),s.push(d.x,d.y,d.z),c.push(f/r),c.push(a/n)}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,o=(r+1)*(e-1)+t,s=(r+1)*e+t;a.push(n,i,s),a.push(i,o,s)}this.setIndex(a),this.setAttribute(`position`,new Cr(o,3)),this.setAttribute(`normal`,new Cr(s,3)),this.setAttribute(`uv`,new Cr(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},Y=class extends gr{static get type(){return`MeshStandardMaterial`}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:``},this.color=new U(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new U(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new L(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Kc=class extends Y{static get type(){return`MeshPhysicalMaterial`}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new L(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new U(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new U(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new U(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function qc(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Jc(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Yc(e){function t(t,n){return e[t]-e[n]}let n=e.length,r=Array(n);for(let e=0;e!==n;++e)r[e]=e;return r.sort(t),r}function Xc(e,t,n){let r=e.length,i=new e.constructor(r);for(let a=0,o=0;o!==r;++a){let r=n[a]*t;for(let n=0;n!==t;++n)i[o++]=e[r+n]}return i}function Zc(e,t,n,r){let i=1,a=e[0];for(;a!==void 0&&a[r]===void 0;)a=e[i++];if(a===void 0)return;let o=a[r];if(o!==void 0){if(Array.isArray(o))do o=a[r],o!==void 0&&(t.push(a.time),n.push.apply(n,o)),a=e[i++];while(a!==void 0);else if(o.toArray!==void 0)do o=a[r],o!==void 0&&(t.push(a.time),o.toArray(n,n.length)),a=e[i++];while(a!==void 0);else do o=a[r],o!==void 0&&(t.push(a.time),n.push(o)),a=e[i++];while(a!==void 0)}}var Qc=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},$c=class extends Qc{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ne,endingEnd:Ne}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Pe:i=e,o=2*t-n;break;case Fe:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Pe:a=e,s=2*n-t;break;case Fe:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},el=class extends Qc{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},tl=class extends Qc{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},nl=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=qc(t,this.TimeBufferType),this.values=qc(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:qc(e.times,Array),values:qc(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new tl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new el(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new $c(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ae:t=this.InterpolantFactoryMethodDiscrete;break;case je:t=this.InterpolantFactoryMethodLinear;break;case Me:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return console.warn(`THREE.KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ae;case this.InterpolantFactoryMethodLinear:return je;case this.InterpolantFactoryMethodSmooth:return Me}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error(`THREE.KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(console.error(`THREE.KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){console.error(`THREE.KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){console.error(`THREE.KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Jc(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){console.error(`THREE.KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Me,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};nl.prototype.TimeBufferType=Float32Array,nl.prototype.ValueBufferType=Float32Array,nl.prototype.DefaultInterpolation=je;var rl=class extends nl{constructor(e,t,n){super(e,t,n)}};rl.prototype.ValueTypeName=`bool`,rl.prototype.ValueBufferType=Array,rl.prototype.DefaultInterpolation=Ae,rl.prototype.InterpolantFactoryMethodLinear=void 0,rl.prototype.InterpolantFactoryMethodSmooth=void 0;var il=class extends nl{};il.prototype.ValueTypeName=`color`;var al=class extends nl{};al.prototype.ValueTypeName=`number`;var ol=class extends Qc{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Kt.slerpFlat(i,0,a,c-o,a,c,s);return i}},sl=class extends nl{InterpolantFactoryMethodLinear(e){return new ol(this.times,this.values,this.getValueSize(),e)}};sl.prototype.ValueTypeName=`quaternion`,sl.prototype.InterpolantFactoryMethodSmooth=void 0;var cl=class extends nl{constructor(e,t,n){super(e,t,n)}};cl.prototype.ValueTypeName=`string`,cl.prototype.ValueBufferType=Array,cl.prototype.DefaultInterpolation=Ae,cl.prototype.InterpolantFactoryMethodLinear=void 0,cl.prototype.InterpolantFactoryMethodSmooth=void 0;var ll=class extends nl{};ll.prototype.ValueTypeName=`vector`;var ul=class{constructor(e=``,t=-1,n=[],r=Ie){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Ze(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let e=0,i=n.length;e!==i;++e)t.push(fl(n[e]).scale(r));let i=new this(e.name,e.duration,t,e.blendMode);return i.uuid=e.uuid,i}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let e=0,r=n.length;e!==r;++e)t.push(nl.toJSON(n[e]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let i=t.length,a=[];for(let e=0;e<i;e++){let o=[],s=[];o.push((e+i-1)%i,e,(e+1)%i),s.push(0,1,0);let c=Yc(o);o=Xc(o,1,c),s=Xc(s,1,c),!r&&o[0]===0&&(o.push(i),s.push(s[0])),a.push(new al(`.morphTargetInfluences[`+t[e].name+`]`,o,s).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let t=e;n=t.geometry&&t.geometry.animations||t.animations}for(let e=0;e<n.length;e++)if(n[e].name===t)return n[e];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},i=/^([\w-]*?)([\d]+)$/;for(let t=0,n=e.length;t<n;t++){let n=e[t],a=n.name.match(i);if(a&&a.length>1){let e=a[1],t=r[e];t||(r[e]=t=[]),t.push(n)}}let a=[];for(let e in r)a.push(this.CreateFromMorphTargetSequence(e,r[e],t,n));return a}static parseAnimation(e,t){if(!e)return console.error(`THREE.AnimationClip: No animation in JSONLoader data.`),null;let n=function(e,t,n,r,i){if(n.length!==0){let a=[],o=[];Zc(n,a,o,r),a.length!==0&&i.push(new e(t,a,o))}},r=[],i=e.name||`default`,a=e.fps||30,o=e.blendMode,s=e.length||-1,c=e.hierarchy||[];for(let e=0;e<c.length;e++){let i=c[e].keys;if(i&&i.length!==0){if(i[0].morphTargets){let e={},t=0;for(;t<i.length;t++)if(i[t].morphTargets)for(let n=0;n<i[t].morphTargets.length;n++)e[i[t].morphTargets[n]]=-1;for(let n in e){let e=[],a=[];for(let r=0;r!==i[t].morphTargets.length;++r){let r=i[t];e.push(r.time),a.push(+(r.morphTarget===n))}r.push(new al(`.morphTargetInfluence[`+n+`]`,e,a))}s=e.length*a}else{let a=`.bones[`+t[e].name+`]`;n(ll,a+`.position`,i,`pos`,r),n(sl,a+`.quaternion`,i,`rot`,r),n(ll,a+`.scale`,i,`scl`,r)}}}return r.length===0?null:new this(i,s,r,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let e=this.tracks[n];t=Math.max(t,e.times[e.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e&&=this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function dl(e){switch(e.toLowerCase()){case`scalar`:case`double`:case`float`:case`number`:case`integer`:return al;case`vector`:case`vector2`:case`vector3`:case`vector4`:return ll;case`color`:return il;case`quaternion`:return sl;case`bool`:case`boolean`:return rl;case`string`:return cl}throw Error(`THREE.KeyframeTrack: Unsupported typeName: `+e)}function fl(e){if(e.type===void 0)throw Error(`THREE.KeyframeTrack: track type undefined, can not parse`);let t=dl(e.type);if(e.times===void 0){let t=[],n=[];Zc(e.keys,t,n,`value`),e.times=t,e.values=n}return t.parse===void 0?new t(e.name,e.times,e.values,e.interpolation):t.parse(e)}var pl={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}},ml=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null}}},hl=class{constructor(e){this.manager=e===void 0?ml:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};hl.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var gl={},_l=class extends Error{constructor(e,t){super(e),this.response=t}},vl=class extends hl{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=pl.get(e);if(i!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0),i;if(gl[e]!==void 0){gl[e].push({onLoad:t,onProgress:n,onError:r});return}gl[e]=[],gl[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?`include`:`same-origin`}),o=this.mimeType,s=this.responseType;fetch(a).then(t=>{if(t.status===200||t.status===0){if(t.status===0&&console.warn(`THREE.FileLoader: HTTP Status 0 received.`),typeof ReadableStream>`u`||t.body===void 0||t.body.getReader===void 0)return t;let n=gl[e],r=t.body.getReader(),i=t.headers.get(`X-File-Size`)||t.headers.get(`Content-Length`),a=i?parseInt(i):0,o=a!==0,s=0,c=new ReadableStream({start(e){t();function t(){r.read().then(({done:r,value:i})=>{if(r)e.close();else{s+=i.byteLength;let r=new ProgressEvent(`progress`,{lengthComputable:o,loaded:s,total:a});for(let e=0,t=n.length;e<t;e++){let t=n[e];t.onProgress&&t.onProgress(r)}e.enqueue(i),t()}},t=>{e.error(t)})}}});return new Response(c)}throw new _l(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,t)}).then(e=>{switch(s){case`arraybuffer`:return e.arrayBuffer();case`blob`:return e.blob();case`document`:return e.text().then(e=>new DOMParser().parseFromString(e,o));case`json`:return e.json();default:if(o===void 0)return e.text();{let t=/charset="?([^;"\s]*)"?/i.exec(o),n=t&&t[1]?t[1].toLowerCase():void 0,r=new TextDecoder(n);return e.arrayBuffer().then(e=>r.decode(e))}}}).then(t=>{pl.add(e,t);let n=gl[e];delete gl[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onLoad&&r.onLoad(t)}}).catch(t=>{let n=gl[e];if(n===void 0)throw this.manager.itemError(e),t;delete gl[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onError&&r.onError(t)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},yl=class extends hl{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=pl.get(e);if(a!==void 0)return i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0),a;let o=xt(`img`);function s(){l(),pl.add(e,this),t&&t(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),i.manager.itemStart(e),o.src=e,o}},bl=class extends hl{constructor(e){super(e)}load(e,t,n,r){let i=new Vt,a=new yl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},xl=class extends Yn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new U(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Sl=class extends xl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Yn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new U(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Cl=new H,wl=new V,Tl=new V,El=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new L(512,512),this.map=null,this.mapPass=null,this.matrix=new H,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hi,this._frameExtents=new L(1,1),this._viewportCount=1,this._viewports=[new B(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;wl.setFromMatrixPosition(e.matrixWorld),t.position.copy(wl),Tl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Tl),t.updateMatrixWorld(),Cl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Cl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Dl=class extends El{constructor(){super(new ri(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Xe*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ol=class extends xl{constructor(e,t,n=0,r=Math.PI/3,i=0,a=2){super(e,t),this.isSpotLight=!0,this.type=`SpotLight`,this.position.copy(Yn.DEFAULT_UP),this.updateMatrix(),this.target=new Yn,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new Dl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},kl=new H,Al=new V,jl=new V,Ml=class extends El{constructor(){super(new ri(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new L(4,2),this._viewportCount=6,this._viewports=[new B(2,1,1,1),new B(0,1,1,1),new B(3,1,1,1),new B(1,1,1,1),new B(3,0,1,1),new B(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,i=e.distance||n.far;i!==n.far&&(n.far=i,n.updateProjectionMatrix()),Al.setFromMatrixPosition(e.matrixWorld),n.position.copy(Al),jl.copy(n.position),jl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(jl),n.updateMatrixWorld(),r.makeTranslation(-Al.x,-Al.y,-Al.z),kl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kl)}},Nl=class extends xl{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Ml}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Pl=class extends El{constructor(){super(new ki(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Fl=class extends xl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Yn.DEFAULT_UP),this.updateMatrix(),this.target=new Yn,this.shadow=new Pl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Il=class{static decodeText(e){if(console.warn(`THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead.`),typeof TextDecoder<`u`)return new TextDecoder().decode(e);let t=``;for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf(`/`);return t===-1?`./`:e.slice(0,t+1)}static resolveURL(e,t){return typeof e!=`string`||e===``?``:(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,`$1`)),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Ll=class extends hl{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>`u`&&console.warn(`THREE.ImageBitmapLoader: createImageBitmap() not supported.`),typeof fetch>`u`&&console.warn(`THREE.ImageBitmapLoader: fetch() not supported.`),this.options={premultiplyAlpha:`none`}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=pl.get(e);if(a!==void 0){if(i.manager.itemStart(e),a.then){a.then(n=>{t&&t(n),i.manager.itemEnd(e)}).catch(e=>{r&&r(e)});return}return setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin===`anonymous`?`same-origin`:`include`,o.headers=this.requestHeader;let s=fetch(e,o).then(function(e){return e.blob()}).then(function(e){return createImageBitmap(e,Object.assign(i.options,{colorSpaceConversion:`none`}))}).then(function(n){return pl.add(e,n),t&&t(n),i.manager.itemEnd(e),n}).catch(function(t){r&&r(t),pl.remove(e),i.manager.itemError(e),i.manager.itemEnd(e)});pl.add(e,s),i.manager.itemStart(e)}},Rl=`\\[\\]\\.:\\/`,zl=RegExp(`[\\[\\]\\.:\\/]`,`g`),Bl=`[^\\[\\]\\.:\\/]`,Vl=`[^`+Rl.replace(`\\.`,``)+`]`,Hl=`((?:WC+[\\/:])*)`.replace(`WC`,Bl),Ul=`(WCOD+)?`.replace(`WCOD`,Vl),Wl=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Bl),Gl=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Bl),Kl=RegExp(`^`+Hl+Ul+Wl+Gl+`$`),ql=[`material`,`materials`,`bones`,`map`],Jl=class{constructor(e,t,n){let r=n||Yl.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Yl=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(zl,``)}static parseTrackName(e){let t=Kl.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);ql.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn(`THREE.PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){console.error(`THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){console.error(`THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){console.error(`THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error(`THREE.PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){console.error(`THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;console.error(`THREE.PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.needsUpdate===void 0?t.matrixWorldNeedsUpdate!==void 0&&(s=this.Versioning.MatrixWorldNeedsUpdate):s=this.Versioning.NeedsUpdate;let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Yl.Composite=Jl,Yl.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Yl.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Yl.prototype.GetterByBindingType=[Yl.prototype._getValue_direct,Yl.prototype._getValue_array,Yl.prototype._getValue_arrayElement,Yl.prototype._getValue_toArray],Yl.prototype.SetterByBindingTypeAndVersioning=[[Yl.prototype._setValue_direct,Yl.prototype._setValue_direct_setNeedsUpdate,Yl.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Yl.prototype._setValue_array,Yl.prototype._setValue_array_setNeedsUpdate,Yl.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Yl.prototype._setValue_arrayElement,Yl.prototype._setValue_arrayElement_setNeedsUpdate,Yl.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Yl.prototype._setValue_fromArray,Yl.prototype._setValue_fromArray_setNeedsUpdate,Yl.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Xl=new H,Zl=class{constructor(e,t,n=0,r=1/0){this.ray=new Sn(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Nn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error(`THREE.Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Xl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xl),this}intersectObject(e,t=!0,n=[]){return $l(e,this,n,t),n.sort(Ql),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)$l(e[r],this,n,t);return n.sort(Ql),n}};function Ql(e,t){return e.distance-t.distance}function $l(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)$l(r[e],t,n,!0)}}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`170`}})),typeof window<`u`&&(window.__THREE__?console.warn(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`170`);function eu(e){return e.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]??e)}function tu(e){document.getElementById(`game-landing`)?.remove();let t=document.createElement(`main`);t.id=`game-landing`,t.className=`landing-screen`,t.setAttribute(`aria-label`,`Màn hình bắt đầu ĐI TÙ ONLINE`),t.innerHTML=`
    <div class="landing-atmosphere" aria-hidden="true">
      <picture class="landing-backdrop">
        <source srcset="./assets/landing-bg.webp" type="image/webp">
        <img src="./assets/landing-bg.jpg" alt="" class="landing-bg-img" fetchpriority="high" decoding="async">
      </picture>
    </div>
    <header class="landing-header">
      <span class="landing-agency"><b class="landing-stamp">AP</b> TRẠI GIAM AN PHÚ <i>/</i> HỒ SƠ NHẬP TRẠI</span>
      <span class="landing-version">WEB 3D • CHƠI TRÊN ĐIỆN THOẠI</span>
    </header>
    <section class="landing-copy">
      <p class="landing-eyebrow">MÔ PHỎNG CUỘC SỐNG & CẢI TẠO</p>
      <h1 class="landing-wordmark">ĐI TÙ <strong>ONLINE<span>.</span></strong></h1>
      <p class="landing-quote">Mỗi ngày là một lựa chọn.<br><b>Mỗi lựa chọn quyết định ngày trở về.</b></p>
      <div class="landing-save">
        <div class="landing-save-icon">⌁</div>
        <div><b>%SAVE_HEADING%</b><small>%SAVE_DETAIL%</small></div>
      </div>
      <div class="landing-actions">
        <button id="landing-primary" class="landing-cta" type="button"><span>➜</span> %PRIMARY% <b>›</b></button>
        %NEW_GAME_BUTTON%
        <button id="landing-rules" class="landing-guide" type="button">HƯỚNG DẪN CHƠI ↗</button>
      </div>
      <div class="landing-rules-panel" id="landing-rules-panel" hidden>
        <button id="landing-close-rules" class="landing-panel-close" type="button" aria-label="Đóng hướng dẫn">×</button>
        <b>QUY TẮC SINH TỒN</b>
        <p>Điểm danh đúng giờ, hoàn thành công việc theo thứ tự và giữ quan hệ với bạn tù. Vi phạm có thể tăng án, cải tạo tốt có cơ hội về sớm.</p>
        <p>Điện thoại: joystick trái, tương tác phải. Máy tính: WASD và E.</p>
      </div>
      <div class="landing-confirm" id="landing-confirm" hidden role="dialog" aria-label="Xác nhận tạo hồ sơ mới">
        <b>XÓA TIẾN TRÌNH CŨ?</b>
        <p>Hồ sơ hiện tại sẽ mất. Không thể hoàn tác.</p>
        <button id="landing-confirm-reset" class="landing-danger" type="button">XÁC NHẬN CHƠI MỚI</button>
        <button id="landing-cancel-reset" class="landing-guide" type="button">GIỮ HỒ SƠ</button>
      </div>
    </section>
    <footer class="landing-bottom"><span>● HỆ THỐNG SẴN SÀNG</span><span>SỐNG TỐT • CẢI TẠO • TRỞ VỀ</span></footer>
  `.replace(`%SAVE_HEADING%`,e.canContinue?`HỒ SƠ ĐANG THỤ ÁN`:`PHẠM NHÂN MỚI`).replace(`%SAVE_DETAIL%`,e.canContinue?eu(e.name)+` • Ngày `+e.day+` • Còn `+e.remainingDays+` ngày`:`Chờ tiếp nhận • Tạo nhân vật để bắt đầu`).replace(`%PRIMARY%`,e.canContinue?`TIẾP TỤC HỒ SƠ`:`BẮT ĐẦU NHẬP TRẠI`).replace(`%NEW_GAME_BUTTON%`,e.canContinue?`<button id="landing-newgame" class="landing-secondary" type="button">BẮT ĐẦU HỒ SƠ MỚI</button>`:``),document.body.appendChild(t);let n=!1,r=e=>{n||(n=!0,t.remove(),e())};t.querySelector(`#landing-primary`)?.addEventListener(`click`,()=>r(e.canContinue?e.onContinue:e.onStart)),t.querySelector(`#landing-newgame`)?.addEventListener(`click`,()=>{let e=t.querySelector(`#landing-confirm`);e&&(e.hidden=!1)}),t.querySelector(`#landing-cancel-reset`)?.addEventListener(`click`,()=>{let e=t.querySelector(`#landing-confirm`);e&&(e.hidden=!0)}),t.querySelector(`#landing-confirm-reset`)?.addEventListener(`click`,()=>r(e.onReset)),t.querySelector(`#landing-rules`)?.addEventListener(`click`,()=>{let e=t.querySelector(`#landing-rules-panel`);e&&(e.hidden=!e.hidden)}),t.querySelector(`#landing-close-rules`)?.addEventListener(`click`,()=>{let e=t.querySelector(`#landing-rules-panel`);e&&(e.hidden=!0)}),t.querySelector(`#landing-primary`)?.focus({preventScroll:!0})}var nu=1320,ru=960/420,iu={mechanic:{id:`mechanic`,name:`Thợ sửa xe`,tagline:`Giỏi thao tác máy móc, quen áp lực công xưởng`,desc:`Từng là thợ máy lành nghề ở ngoại ô, Minh nhận sửa gấp chiếc xe tải lạ vào ban đêm và che giấu linh kiện khả nghi vì cần tiền chữa bệnh cho em gái.`,casePerspective:`Nhận việc sửa chiếc xe liên quan đến một vụ trộm hàng; khi phát hiện dấu hiệu bất thường đã lựa chọn che giấu vì cần tiền.`,pros:`+1 Bền bỉ, +1 Khéo léo; mở cách sửa máy xưởng, tăng vùng chính xác mini-game.`,cons:`Ít kinh nghiệm sổ sách, cần sự hỗ trợ khi giải mã chứng từ phức tạp.`,bonusAttrs:{endurance:1,agility:1}},courier:{id:`courier`,name:`Nhân viên giao hàng`,tagline:`Nhanh nhẹn, thông thạo đường sá và nhạy bén thời gian`,desc:`Làm nghề giao hàng nhiều năm, quen từng ngõ ngách. Vì áp lực tiền trả góp, Minh nhận chở một kiện hàng không hóa đơn đến Kho số 7.`,casePerspective:`Nhận một chuyến hàng ngoài sổ sách; vì áp lực tài chính đã bỏ qua dấu hiệu đáng ngờ lúc bốc dỡ.`,pros:`+1 Bền bỉ, +1 Quan sát; mở hướng tìm đường tắt, đối chiếu chính xác dòng thời gian sự kiện.`,cons:`Không có nghiệp vụ máy móc phức tạp, đàm phán cần thêm chứng cứ rõ ràng.`,bonusAttrs:{endurance:1,perception:1}},clerk:{id:`clerk`,name:`Nhân viên sổ sách`,tagline:`Cẩn thận, nhạy bén với số liệu và chứng từ pháp lý`,desc:`Từng làm kế toán kho vận, Minh bị người quen thuyết phục ký xác nhận khống một phiếu xuất kho sai lệch, sau đó hỏa hoạn xảy ra thiêu rụi chứng cứ gốc.`,casePerspective:`Ký xác nhận một chứng từ sai sau khi bị người quen thuyết phục và hứa hẹn bù đắp.`,pros:`+1 Quan sát, +1 Giao tiếp; phát hiện sai sót chứng từ, đàm phán và thuyết phục Quản giáo.`,cons:`Thể lực ban đầu trung bình, cần thời gian làm quen với lao động chân tay nặng.`,bonusAttrs:{perception:1,charisma:1}}},au={easy:{id:`easy`,name:`Dễ (Trải nghiệm)`,desc:`Gợi ý rõ ràng, vùng thao tác mini-game rộng (+25%), cảnh báo trước giờ điểm danh/lao động sớm 30 phút.`,hitZoneMultiplier:1.25,canteenPriceMultiplier:.85,warningNoticeMinutes:30},normal:{id:`normal`,name:`Thường (Cân bằng)`,desc:`Trải nghiệm chuẩn mực, yêu cầu quản lý thời gian và đưa ra quyết định hợp lý.`,hitZoneMultiplier:1,canteenPriceMultiplier:1,warningNoticeMinutes:15},hard:{id:`hard`,name:`Khó (Thử thách)`,desc:`Thao tác đòi hỏi độ chính xác cao, giá đồ căn tin cao hơn, nguồn lực eo hẹp hơn.`,hitZoneMultiplier:.85,canteenPriceMultiplier:1.15,warningNoticeMinutes:5}},ou=[{id:`wake`,start:360,end:390,label:`Thức dậy, vệ sinh cá nhân`,where:`Buồng giam`},{id:`rollcall`,start:390,end:420,label:`Điểm danh sáng`,where:`Sân (ô vàng)`,mandatory:!0},{id:`breakfast`,start:420,end:480,label:`Ăn sáng`,where:`Nhà ăn`},{id:`work`,start:480,end:690,label:`Lao động`,where:`Xưởng`,mandatory:!0},{id:`lunch`,start:690,end:750,label:`Ăn trưa`,where:`Nhà ăn`},{id:`rest`,start:750,end:810,label:`Nghỉ trưa`,where:`Buồng giam`},{id:`free1`,start:810,end:990,label:`Sinh hoạt tự do / ca chiều tự nguyện`,where:`Sân, Xưởng`},{id:`dinner`,start:990,end:1050,label:`Ăn tối`,where:`Nhà ăn`},{id:`free2`,start:1050,end:1260,label:`Tự do, căn tin mở`,where:`Sân, Nhà ăn`},{id:`curfew`,start:1260,end:1320,label:`Về buồng, chuẩn bị ngủ`,where:`Buồng giam`,mandatory:!0}];function su(e){for(let t of ou)if(e>=t.start&&e<t.end)return t;return ou[ou.length-1]}function cu(e){for(let t of ou)if(t.start>e)return t;return null}function lu(e){let t=Math.floor(e),n=Math.floor(t/60)%24,r=t%60;return`${String(n).padStart(2,`0`)}:${String(r).padStart(2,`0`)}`}function uu(e){return`${(e*1e3).toLocaleString(`vi-VN`)}đ`}var du={mess:{open:[[420,480],[690,750],[990,1260]],label:`Nhà ăn & căn tin`,reason:`Nhà ăn chỉ mở giờ ăn (07:00–08:00, 11:30–12:30, 16:30–17:30) và căn tin buổi tối đến 21:00.`},workshop:{open:[[480,690],[810,990]],label:`Xưởng lao động`,reason:`Xưởng mở ca sáng 08:00–11:30 (bắt buộc) và ca chiều tự nguyện 13:30–16:30.`},office:{open:[[420,1020]],label:`Phòng quản giáo`,reason:`Phòng quản giáo tiếp nhận phạm nhân 07:00–17:00 để báo cáo, khiếu nại, giải trình.`},storage:{open:[[480,690]],label:`Kho vật tư (khu cấm)`,reason:`Kho chỉ mở cửa trong ca sáng để tổ trưởng lấy vật tư; ngoài giờ cán bộ Tùng khoá và giữ chìa.`},cellblock:{open:[[0,1290]],label:`Khu buồng giam`,reason:`Sau 21:30 khu buồng giam khoá cửa ngoài.`},medical:{open:[[450,690],[810,1020]],label:`Phòng y tế`,reason:`Phòng y tế mở cửa tiếp nhận phạm nhân 07:30–11:30 và 13:30–17:00.`},classroom:{open:[[840,990],[1140,1260]],label:`Lớp học nghề & thư viện`,reason:`Lớp học mở ca chiều 14:00–16:30 và giờ đọc sách buổi tối 19:00–21:00.`},visitation:{open:[[480,660],[840,1020]],label:`Phòng thăm gặp`,reason:`Phòng thăm gặp tiếp đón người thân theo lịch hẹn (08:00–11:00 & 14:00–17:00).`},discipline:{open:[],label:`Khu kỷ luật`,reason:`Khu kỷ luật chỉ mở khi có quyết định kỷ luật cách ly của Ban giám thị.`}};function fu(e,t){let n=du[e];return!n||n.open.some(([e,n])=>t>=e&&t<n)}function pu(e){return e>=10?1/0:80+30*(e-1)}function mu(e,t=0,n=100){return Math.max(t,Math.min(n,e))}function hu(e,t){let n={};for(let e of Object.keys(t))n[e]=t[e].value;return{rollcall:`pending`,work:`pending`,workClockedIn:!1,workUnits:0,workQuality:0,workPaid:!1,extraShiftUnits:0,meals:{breakfast:!1,lunch:!1,dinner:!1},curfew:`pending`,reformGained:0,exercise:0,searchedToday:!1,tasks:[],allTasksBonusAwarded:!1,morningPopupShown:!1,startStats:{...e},startRelations:n,events:[]}}function gu(e={}){let t={health:e.health??90,stamina:e.stamina??85,satiety:e.satiety??(e.hunger===void 0?65:mu(100-e.hunger)),morale:e.morale??(e.stress===void 0?55:mu(100-e.stress)),money:e.money??20,reform:e.reform??40,suspicion:e.suspicion??0};return Object.defineProperty(t,"hunger",{get(){return 100-this.satiety},set(e){this.satiety=mu(100-e)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"stress",{get(){return 100-this.morale},set(e){this.morale=mu(100-e)},enumerable:!0,configurable:!0}),t}function _u(e){let t={name:`Minh`,preset:0,skin:14857357,hair:1579035,hairStyle:`short`,background:`mechanic`,difficulty:`normal`,introSeen:!1,...e},n=iu[t.background]||iu.mechanic,r={level:1,xp:0,skillPoints:0,attrs:{endurance:1+(n.bonusAttrs.endurance||0),agility:1+(n.bonusAttrs.agility||0),perception:1+(n.bonusAttrs.perception||0),charisma:1+(n.bonusAttrs.charisma||0)}},i=gu(),a={},o={bay:5,huy:0,lam:0,lan:0,tung:0,tu:0,son:0,khai:0,phuc:0,an:0,mai:20};for(let e of Object.keys(o))a[e]={value:o[e],met:!1,memories:[],lastTalkDay:0,lastGiftDay:0};return{version:3,createdAt:Date.now(),profile:t,progression:r,day:1,minute:360,chapter:1,stats:i,sentence:{total:30,remaining:30,served:0,lastServedDay:0,reviewsDone:[],reformAtLastReview:i.reform,additions:[],reductions:[]},daily:hu(i,a),history:[],violations:[],quests:{},relations:a,inventory:{ao_tu:1,the_pham_nhan:1},clues:[],flags:{},skills:{workShifts:0,exerciseSessions:0,fitness:0,vocationalExam:0},player:{x:-14.25,z:-27.6,rot:0},ending:null,hearing:null,nextId:1,settings:{quality:`medium`,volume:.7,guide:!0,sensitivity:1,cameraMode:`third`}}}var vu=.3;function X(e,t,n,r,i,a,o=vu){return{x1:Math.min(e,t),x2:Math.max(e,t),z1:n-o/2,z2:n+o/2,h:r,kind:i,building:a}}function yu(e,t,n,r,i,a,o=vu){return{x1:n-o/2,x2:n+o/2,z1:Math.min(e,t),z2:Math.max(e,t),h:r,kind:i,building:a}}var Z=3.6,bu={cellblock:{x1:-28,z1:-32,x2:-6,z2:-18,name:`Khu buồng giam A`,floor:`tile`},mess:{x1:-2,z1:-32,x2:16,z2:-18,name:`Nhà ăn`,floor:`tile2`},workshop:{x1:12,z1:-12,x2:28,z2:8,name:`Xưởng lao động`,floor:`concrete`},office:{x1:-12,z1:10,x2:4,z2:20,name:`Phòng quản giáo`,floor:`wood`},medical:{x1:18,z1:-32,x2:28,z2:-18,name:`Phòng y tế`,floor:`tile`},classroom:{x1:-28,z1:10,x2:-15,z2:20,name:`Lớp học nghề & thư viện`,floor:`wood`},visitation:{x1:-28,z1:-15,x2:-20,z2:-4,name:`Phòng thăm gặp`,floor:`tile2`},discipline:{x1:6,z1:10,x2:14,z2:20,name:`Khu kỷ luật`,floor:`concrete`}},xu=[-25.25,-19.75,-14.25,-8.75],Su=[X(-30,30,-34,6,`perimeter`,void 0,.6),X(-30,30,22,6,`perimeter`,void 0,.6),yu(-34,22,-30,6,`perimeter`,void 0,.6),yu(-34,22,30,6,`perimeter`,void 0,.6),X(-28,-6,-32,Z,`outer`,`cellblock`),yu(-32,-18,-28,Z,`outer`,`cellblock`),yu(-32,-18,-6,Z,`outer`,`cellblock`),X(-28,-18,-18,Z,`outer`,`cellblock`),X(-16,-6,-18,Z,`outer`,`cellblock`),X(-28,-26.05,-25,Z,`bars`,`cellblock`,.12),X(-24.45,-20.55,-25,Z,`bars`,`cellblock`,.12),X(-18.95,-15.05,-25,Z,`bars`,`cellblock`,.12),X(-13.45,-9.55,-25,Z,`bars`,`cellblock`,.12),X(-7.95,-6,-25,Z,`bars`,`cellblock`,.12),yu(-32,-25,-22.5,Z,`inner`,`cellblock`),yu(-32,-25,-17,Z,`inner`,`cellblock`),yu(-32,-25,-11.5,Z,`inner`,`cellblock`),X(-2,16,-32,Z,`outer`,`mess`),yu(-32,-18,-2,Z,`outer`,`mess`),yu(-32,-18,16,Z,`outer`,`mess`),X(-2,5,-18,Z,`outer`,`mess`),X(7.5,16,-18,Z,`outer`,`mess`),X(12,28,-12,Z,`outer`,`workshop`),X(12,28,8,Z,`outer`,`workshop`),yu(-12,8,28,Z,`outer`,`workshop`),yu(-12,-4,12,Z,`outer`,`workshop`),yu(-1.5,8,12,Z,`outer`,`workshop`),yu(-12,-7.8,22,Z,`inner`,`workshop`),yu(-6.2,-4,22,Z,`inner`,`workshop`),X(22,28,-4,Z,`inner`,`workshop`),X(-12,-5,10,Z,`outer`,`office`),X(-3,4,10,Z,`outer`,`office`),X(-12,4,20,Z,`outer`,`office`),yu(10,20,-12,Z,`outer`,`office`),yu(10,20,4,Z,`outer`,`office`),X(18,28,-32,Z,`outer`,`medical`),yu(-32,-18,18,Z,`outer`,`medical`),yu(-32,-18,28,Z,`outer`,`medical`),X(18,21,-18,Z,`outer`,`medical`),X(23.5,28,-18,Z,`outer`,`medical`),X(-28,-15,20,Z,`outer`,`classroom`),yu(10,20,-28,Z,`outer`,`classroom`),yu(10,20,-15,Z,`outer`,`classroom`),X(-28,-22,10,Z,`outer`,`classroom`),X(-19.5,-15,10,Z,`outer`,`classroom`),X(-28,-20,-15,Z,`outer`,`visitation`),X(-28,-20,-4,Z,`outer`,`visitation`),yu(-15,-4,-28,Z,`outer`,`visitation`),yu(-15,-11.5,-20,Z,`outer`,`visitation`),yu(-9,-4,-20,Z,`outer`,`visitation`),X(6,14,20,Z,`outer`,`discipline`),yu(10,20,6,Z,`outer`,`discipline`),yu(10,20,14,Z,`outer`,`discipline`),X(6,8.5,10,Z,`outer`,`discipline`),X(11.5,14,10,Z,`outer`,`discipline`)],Cu=[{id:`door_cellblock`,area:`cellblock`,name:`Cửa khu buồng giam`,box:{x1:-18,z1:-18.2,x2:-16,z2:-17.8},zone:`cellblock`,ix:-17,iz:-16.6},{id:`door_mess`,area:`mess`,name:`Cửa nhà ăn`,box:{x1:5,z1:-18.2,x2:7.5,z2:-17.8},zone:`mess`,ix:6.25,iz:-16.6},{id:`door_workshop`,area:`workshop`,name:`Cửa xưởng`,box:{x1:11.8,z1:-4,x2:12.2,z2:-1.5},zone:`workshop`,ix:10.8,iz:-2.75},{id:`door_storage`,area:`storage`,name:`Cửa kho vật tư (khu cấm)`,box:{x1:21.8,z1:-7.8,x2:22.2,z2:-6.2},zone:`storage`,ix:21,iz:-7},{id:`door_office`,area:`office`,name:`Cửa phòng quản giáo`,box:{x1:-5,z1:9.8,x2:-3,z2:10.2},zone:`office`,ix:-4,iz:8.7},{id:`door_medical`,area:`medical`,name:`Cửa phòng y tế`,box:{x1:21,z1:-18.2,x2:23.5,z2:-17.8},zone:`medical`,ix:22.25,iz:-16.8},{id:`door_classroom`,area:`classroom`,name:`Cửa lớp học nghề & thư viện`,box:{x1:-22,z1:9.8,x2:-19.5,z2:10.2},zone:`classroom`,ix:-20.75,iz:8.8},{id:`door_visitation`,area:`visitation`,name:`Cửa phòng thăm gặp`,box:{x1:-20.2,z1:-11.5,x2:-19.8,z2:-9},zone:`visitation`,ix:-18.8,iz:-10.25},{id:`door_discipline`,area:`discipline`,name:`Cửa khu kỷ luật`,box:{x1:8.5,z1:9.8,x2:11.5,z2:10.2},zone:`discipline`,ix:10,iz:8.8}],wu=[{id:`storage`,name:`Kho vật tư (KHU CẤM)`,x1:22,z1:-12,x2:28,z2:-4},{id:`cell3`,name:`Buồng 3 (buồng của bạn)`,x1:-17,z1:-32,x2:-11.5,z2:-25},{id:`cellblock`,name:`Khu buồng giam A`,x1:-28,z1:-32,x2:-6,z2:-18},{id:`mess`,name:`Nhà ăn`,x1:-2,z1:-32,x2:16,z2:-18},{id:`workshop`,name:`Xưởng lao động`,x1:12,z1:-12,x2:28,z2:8},{id:`office`,name:`Phòng quản giáo`,x1:-12,z1:10,x2:4,z2:20},{id:`medical`,name:`Phòng y tế`,x1:18,z1:-32,x2:28,z2:-18},{id:`classroom`,name:`Lớp học nghề & thư viện`,x1:-28,z1:10,x2:-15,z2:20},{id:`visitation`,name:`Phòng thăm gặp`,x1:-28,z1:-15,x2:-20,z2:-4},{id:`discipline`,name:`Khu kỷ luật`,x1:6,z1:10,x2:14,z2:20},{id:`rollcall`,name:`Ô điểm danh`,x1:-14,z1:-10.5,x2:-4,z2:-7.5},{id:`lamcorner`,name:`Góc khuất sau xưởng`,x1:15,z1:9,x2:27,z2:17}];function Tu(e,t,n){return t>=e.x1&&t<=e.x2&&n>=e.z1&&n<=e.z2}function Eu(e,t){return wu.filter(n=>Tu(n,e,t)).map(e=>e.id)}function Du(e,t){let n=wu.find(n=>Tu(n,e,t)&&n.id!==`rollcall`);return n?n.name:`Sân sinh hoạt`}var Ou=[];for(let e of xu)Ou.push({kind:`bunk`,x:e-1.65,z:-29.6,w:.95,d:2,collide:!0}),Ou.push({kind:`bunk`,x:e+1.65,z:-29.6,w:.95,d:2,collide:!0}),Ou.push({kind:`cell-toilet`,x:e-.75,z:-31.45,w:.65,d:.75,collide:!0,label:`Toilet buồng giam`}),Ou.push({kind:`cell-locker`,x:e+.75,z:-31.5,w:.6,d:.65,rot:Math.PI,collide:!0,label:`Tủ sắt cá nhân`});Ou.push({kind:`board`,x:-27.81,z:-21.5,w:1.4,d:.05,rot:Math.PI/2,label:`NỘI QUY`},{kind:`basin`,x:-6.5,z:-22.5,w:.6,d:3,collide:!0},{kind:`bench`,x:-21,z:-19.2,w:2.4,d:.5,collide:!0},{kind:`bench`,x:-24.5,z:-18.7,w:2.2,d:.5,collide:!0},{kind:`cabinet`,x:-13.5,z:-18.7,w:1.6,d:.55,collide:!0},{kind:`desk`,x:-8,z:-19.6,w:1.8,d:.8,collide:!0},{kind:`chair`,x:-8,z:-20.3,w:.5,d:.5},{kind:`table`,x:1.5,z:-26.2,w:2.6,d:.9,collide:!0,label:`Bàn ăn nhà ăn`},{kind:`table`,x:10.5,z:-26.2,w:2.6,d:.9,collide:!0,label:`Bàn ăn nhà ăn`},{kind:`table`,x:1.5,z:-22.2,w:2.6,d:.9,collide:!0,label:`Bàn ăn nhà ăn`},{kind:`table`,x:10.5,z:-22.2,w:2.6,d:.9,collide:!0,label:`Bàn ăn nhà ăn`},{kind:`workbench`,x:16,z:-1,w:1.85,d:.8,rot:Math.PI,collide:!0},{kind:`workbench`,x:20,z:-1,w:1.85,d:.8,rot:Math.PI,collide:!0},{kind:`workbench`,x:16,z:4,w:1.85,d:.8,rot:Math.PI,collide:!0},{kind:`workbench`,x:20,z:4,w:1.85,d:.8,rot:Math.PI,collide:!0},{kind:`board`,x:12.19,z:-6,w:1.3,d:.05,rot:Math.PI/2,label:`CHẤM CÔNG`},{kind:`bench`,x:14.2,z:7.2,w:2.4,d:.5,collide:!0},{kind:`crate`,x:13.5,z:6.5,w:1.2,d:1.2,collide:!0},{kind:`crate`,x:15,z:6.5,w:1,d:1,collide:!0},{kind:`press`,x:25.5,z:4.5,w:1.6,d:1.6,collide:!0},{kind:`crate`,x:25.8,z:0,w:1.2,d:1.2,collide:!0},{kind:`shelf`,x:27.3,z:-9,w:.8,d:4.5,collide:!0},{kind:`shelf`,x:27.3,z:-5.2,w:.8,d:1.6,collide:!0,label:`drill`},{kind:`crate`,x:23,z:-11.2,w:1.2,d:1.2,collide:!0},{kind:`desk`,x:-4,z:16,w:1.65,d:.8,rot:Math.PI,collide:!0,label:`Bàn làm việc cán bộ`},{kind:`cabinet`,x:-10.8,z:18.8,w:2,d:.7,collide:!0},{kind:`cabinet`,x:2.6,z:18.8,w:2,d:.7,collide:!0},{kind:`chair`,x:-4,z:17.2,w:.65,d:.65,rot:0,label:`Ghế xoay quản giáo`},{kind:`chair`,x:-4.6,z:14.8,w:.65,d:.65,rot:Math.PI,label:`Ghế tiếp dân`},{kind:`board`,x:-11.81,z:14,w:1.4,d:.05,rot:Math.PI/2,label:`KỶ LUẬT`},{kind:`pullup`,x:-22.5,z:5.2,w:2.2,d:.3,collide:!0},{kind:`stonetable`,x:-10,z:4.6,w:1.32,d:1.32,collide:!0,label:`Bàn cờ đá`},{kind:`yard-concrete-stool`,x:-10,z:3.5,w:.48,d:.48,collide:!0,label:`Đôn bê tông sân trại`},{kind:`yard-concrete-stool`,x:-10,z:5.7,w:.48,d:.48,collide:!0,label:`Đôn bê tông sân trại`},{kind:`yard-concrete-stool`,x:-8.9,z:4.6,w:.48,d:.48,collide:!0,label:`Đôn bê tông sân trại`},{kind:`yard-concrete-stool`,x:-11.1,z:4.6,w:.48,d:.48,collide:!0,label:`Đôn bê tông sân trại`},{kind:`tree`,x:-15,z:-8,w:.8,d:.8,collide:!0},{kind:`tree`,x:-14,z:5,w:.8,d:.8,collide:!0},{kind:`tree`,x:7,z:17,w:.8,d:.8,collide:!0},{kind:`tree`,x:26,z:18.5,w:.8,d:.8,collide:!0},{kind:`tree`,x:0,z:-13,w:.8,d:.8,collide:!0},{kind:`lamp`,x:-26.6,z:-3,w:.55,d:.55,collide:!0,label:`Đèn sân phía Tây`},{kind:`plant`,x:-16.4,z:18.45,w:.6,d:.6,collide:!0,label:`Chậu cây lớp học nghề`},{kind:`tank`,x:-27.3,z:-15.5,w:2,d:2,collide:!0},{kind:`tower`,x:-28.2,z:20.2,w:2.4,d:2.4,collide:!0},{kind:`tower`,x:28.2,z:-32.2,w:2.4,d:2.4,collide:!0},{kind:`bench`,x:-16,z:3.6,w:2.4,d:.5,collide:!0},{kind:`bench`,x:2,z:4.5,w:2.4,d:.5,collide:!0},{kind:`bunk`,x:25.5,z:-27.5,w:.95,d:2,collide:!0},{kind:`cabinet`,x:19.2,z:-28,w:1.8,d:.7,collide:!0},{kind:`desk`,x:23,z:-22,w:2.4,d:1,collide:!0},{kind:`chair`,x:23,z:-23.1,w:.5,d:.5,rot:0,label:`Ghế y sĩ`},{kind:`medical-trolley`,x:26.85,z:-27.5,w:.62,d:.52,collide:!0,label:`Xe đẩy thuốc y tế`},{kind:`desk`,x:-24,z:13,w:.85,d:.6,rot:Math.PI,collide:!0},{kind:`chair`,x:-24,z:13.85,w:.48,d:.48,rot:0,label:`Ghế học nghề`},{kind:`desk`,x:-18,z:13,w:.85,d:.6,rot:Math.PI,collide:!0},{kind:`chair`,x:-18,z:13.85,w:.48,d:.48,rot:0,label:`Ghế học nghề`},{kind:`desk`,x:-21.5,z:17.5,w:1.65,d:.8,rot:Math.PI,collide:!0,label:`Bàn giáo viên`},{kind:`chair`,x:-21.5,z:18.5,w:.48,d:.48,rot:0,label:`Ghế giáo viên`},{kind:`shelf`,x:-26.8,z:16.5,w:.8,d:3.2,collide:!0},{kind:`chair`,x:-25.5,z:16,w:.48,d:.48,rot:Math.PI/2,label:`Ghế đọc sách thư viện`},{kind:`board`,x:-27.81,z:12,w:1.4,d:.05,rot:Math.PI/2,label:`LỚP HỌC NGHỀ`},{kind:`counter`,x:-24,z:-9.5,w:6.8,d:.8,collide:!0},{kind:`chair`,x:-22.5,z:-8.5,w:.5,d:.5,rot:0,label:`Ghế người nhà`},{kind:`chair`,x:-25.5,z:-10.5,w:.5,d:.5,rot:Math.PI,label:`Ghế phạm nhân thăm`},{kind:`table`,x:-23.5,z:-6,w:1.56,d:.69,collide:!0,label:`Bàn thăm gặp`},{kind:`chair`,x:-23.5,z:-5.25,w:.5,d:.5,rot:Math.PI,label:`Ghế bàn thăm gặp khách`},{kind:`chair`,x:-23.5,z:-6.75,w:.5,d:.5,rot:0,label:`Ghế bàn thăm gặp cán bộ`},{kind:`bunk`,x:10,z:18,w:1.1,d:2,collide:!0},{kind:`kitchen-fridge`,x:-.95,z:-30.9,w:.85,d:.75,collide:!0,label:`Tủ lạnh nhà bếp`},{kind:`kitchen-sink`,x:-.95,z:-28.9,w:.9,d:.65,collide:!0,label:`Chậu rửa bếp`},{kind:`kitchen-stove`,x:11,z:-31.25,w:.85,d:.75,collide:!0,label:`Bếp nấu ăn`},{kind:`visit-sofa`,x:-25.6,z:-6.3,w:1.55,d:.7,collide:!0,label:`Ghế phòng thăm gặp`},{kind:`visit-side-table`,x:-26.25,z:-4.9,w:.45,d:.45,collide:!0,label:`Bàn phụ phòng thăm gặp`},{kind:`garden-pot`,x:-27.1,z:-6.2,w:.5,d:.5,collide:!0,label:`Chậu cây trang trí`},{kind:`yard-bush`,x:-27.3,z:4.5,w:.8,d:.7,collide:!0},{kind:`yard-bush`,x:26,z:15.5,w:.8,d:.7,collide:!0},{kind:`yard-flower`,x:-26.4,z:6.5,w:.48,d:.45,collide:!0},{kind:`yard-flower`,x:24.9,z:16.5,w:.48,d:.45,collide:!0},{kind:`yard-rock`,x:27.3,z:10.5,w:.75,d:.7,collide:!0},{kind:`park-ambulance`,x:26.8,z:-15,w:3.4,d:1.55,collide:!0,label:`Xe cứu thương`},{kind:`park-police`,x:-23.1,z:-16.5,w:3.4,d:1.7,collide:!0,label:`Xe tuần tra cán bộ`},{kind:`park-van`,x:20,z:18.75,w:3.6,d:1.85,collide:!0,label:`Xe chở phạm nhân`},{kind:`park-delivery`,x:-27.05,z:2,w:3.4,d:1.65,collide:!0,label:`Xe tiếp tế`});var ku=Ou;function Au(e){return{x1:e.x-e.w/2,x2:e.x+e.w/2,z1:e.z-e.d/2,z2:e.z+e.d/2}}var ju=[{id:`bed`,x:-14.9,z:-28.6,r:1.3,label:`Giường của bạn`},{id:`rules`,x:-27,z:-21.5,r:1.6,label:`Bảng nội quy`},{id:`meal`,x:5,z:-28.7,r:1.5,label:`Quầy phát cơm`},{id:`canteen`,x:13.5,z:-30,r:1.4,label:`Căn tin`},{id:`clock`,x:13.1,z:-6,r:1.4,label:`Bảng chấm công`},{id:`workbench`,x:16,z:.15,r:1.2,label:`Bàn lắp ráp`},{id:`rest_ws`,x:14.2,z:6.5,r:1.3,label:`Ghế nghỉ`},{id:`drill`,x:26.2,z:-5.2,r:1.2,label:`Kệ vật tư`},{id:`clue_crate`,x:20.8,z:-7,r:1.2,label:`Kiện hàng niêm phong KHO-07`},{id:`class_fan`,x:-18,z:15.5,r:1.3,label:`Quạt lớp học bị hỏng`},{id:`exercise`,x:-21.5,z:4.2,r:1.5,label:`Xà đơn & tạ tay`},{id:`stonetable`,x:-10,z:3.5,r:1.5,label:`Bàn cờ đá`},{id:`bench_yard`,x:-16,z:3.8,r:1.3,label:`Ghế đá`},{id:`sandals`,x:-25.6,z:8.6,r:1.2,label:`Bụi cỏ`},{id:`lan_desk`,x:-4,z:14.4,r:1.4,label:`Bàn tiếp nhận`},{id:`discipline`,x:-11.2,z:14,r:1.4,label:`Cửa khu kỷ luật`},{id:`med_table`,x:23,z:-21,r:1.4,label:`Bàn Y sĩ An (Khám bệnh / nhận thuốc)`},{id:`med_cabinet`,x:19.5,z:-26.8,r:1.4,label:`Tủ thuốc y tế (Phụ việc phân loại)`},{id:`class_workbench`,x:-21.5,z:13,r:1.4,label:`Bàn thực hành nghề (Mini-game học nghề)`},{id:`library_shelf`,x:-25.5,z:16.5,r:1.4,label:`Giá sách thư viện (Mượn cẩm nang)`},{id:`visit_booth`,x:-22.5,z:-8.8,r:1.4,label:`Vách kính thăm gặp (Gặp Chị Mai)`},{id:`asthma_spot`,x:22.5,z:13,r:1.3,label:`Góc tường sau xưởng (Nhặt lọ thuốc hen suyễn)`}],Mu={c1:[-25.25,-27.3],c2:[-19.75,-27.3],c3:[-14.25,-27.3],c4:[-8.75,-27.3],cor1:[-25.25,-21.6],cor2:[-19.75,-21.6],corC:[-17,-21.6],cor3:[-14.25,-21.6],cor4:[-8.75,-21.6],cbOut:[-17,-15.5],rc:[-9,-9],yC:[-4,-3],yW:[-18,-4],yEx:[-21,3.6],yWestBypass:[-23.9,.3],yBench:[-10,3.2],yBench2:[-16,3.6],yE:[8,-6],ySE:[8,10],yS:[-4,7.5],lamCorner:[20,12.5],messOut:[6.25,-15.5],messIn:[6.25,-20],messAisle:[6,-24.2],messCounter:[5,-28.6],messCanteen:[13.5,-29.2],medOut:[22.25,-15.5],medIn:[22.25,-20],medDesk:[23,-23.1],medBed:[25.5,-27],classOut:[-20.75,7.5],classIn:[-20.75,12],classDesk:[-21.5,13],classPhuc:[-21.5,16.5],classLib:[-25,16],visitOut:[-17.5,-10.25],visitIn:[-22.5,-10.25],visitMai:[-25.5,-10.25],discOut:[10,7.5],discIn:[10,14],wsOut:[9.5,-2.75],wsIn:[13.5,-2.75],wsBoard:[13.2,-6],wsHub:[18,-3],wsStoreOut:[20.8,-7],storeIn:[23.8,-7],wsRow:[18,2.3],wsGap:[18,4],wsRow2:[18,5.6],wsB1:[16,.15],wsB2:[20,.15],wsB3:[16,5.15],wsB4:[20,5.15],wsRest:[14.2,6.4],offOut:[-4,7.5],offIn:[-4,12.2],offDesk:[-4,13.8],offSide:[-1,13],offBack:[-1,17.4],offLan:[-4,17.3]},Nu=[[`c1`,`cor1`],[`c2`,`cor2`],[`c3`,`cor3`],[`c4`,`cor4`],[`cor1`,`cor2`],[`cor2`,`corC`],[`corC`,`cor3`],[`cor3`,`cor4`],[`corC`,`cbOut`],[`cbOut`,`rc`],[`cbOut`,`yW`],[`cbOut`,`yC`],[`cbOut`,`messOut`],[`cbOut`,`visitOut`],[`rc`,`yC`],[`rc`,`yW`],[`rc`,`visitOut`],[`yW`,`yWestBypass`],[`yWestBypass`,`yEx`],[`yC`,`yE`],[`yC`,`yBench`],[`yC`,`yS`],[`yW`,`yEx`],[`yW`,`yBench2`],[`yEx`,`yBench2`],[`yBench2`,`yBench`],[`yBench`,`yS`],[`yE`,`messOut`],[`yE`,`medOut`],[`yE`,`wsOut`],[`yE`,`ySE`],[`yS`,`ySE`],[`ySE`,`lamCorner`],[`ySE`,`wsOut`],[`messOut`,`messIn`],[`messIn`,`messAisle`],[`messAisle`,`messCounter`],[`messCounter`,`messCanteen`],[`messAisle`,`messCanteen`],[`messOut`,`medOut`],[`medOut`,`medIn`],[`medIn`,`medDesk`],[`medDesk`,`medBed`],[`yW`,`visitOut`],[`visitOut`,`visitIn`],[`visitIn`,`visitMai`],[`yEx`,`classOut`],[`classOut`,`classIn`],[`classIn`,`classDesk`],[`classDesk`,`classPhuc`],[`classIn`,`classLib`],[`classOut`,`offOut`],[`ySE`,`discOut`],[`offOut`,`discOut`],[`discOut`,`discIn`],[`wsOut`,`wsIn`],[`wsIn`,`wsBoard`],[`wsIn`,`wsHub`],[`wsBoard`,`wsHub`],[`wsHub`,`wsStoreOut`],[`wsStoreOut`,`storeIn`],[`wsHub`,`wsRow`],[`wsRow`,`wsB1`],[`wsRow`,`wsB2`],[`wsRow`,`wsGap`],[`wsGap`,`wsRow2`],[`wsRow2`,`wsB3`],[`wsRow2`,`wsB4`],[`wsRow2`,`wsRest`],[`yS`,`offOut`],[`offOut`,`offIn`],[`offIn`,`offDesk`],[`offIn`,`offSide`],[`offSide`,`offBack`],[`offBack`,`offLan`]];function Pu(e){return[-12.5+e*1.4,-8.6]}var Fu=[-9,-11.6],Iu=[[.6,-25.45,Math.PI],[2.4,-25.45,Math.PI],[.6,-26.95,0],[2.4,-26.95,0],[9.6,-25.45,Math.PI],[11.4,-25.45,Math.PI],[9.6,-21.45,Math.PI],[.6,-21.45,Math.PI]];function Lu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){let[m,h,g]=Iu[r];return[{from:360,to:390,node:e,pos:t,rot:0,pose:`stand`,activity:`Chuẩn bị buổi sáng`},{from:390,to:420,node:`rc`,pos:Pu(n),rot:Math.PI,pose:`stand`,activity:`Đứng điểm danh`},{from:420,to:480,node:`messAisle`,pos:[m,h],rot:g,pose:`sit`,activity:`Ăn sáng`},{from:480,to:690,node:i,pos:a,rot:Math.PI,pose:`work`,activity:`Lắp ráp ở xưởng`},{from:690,to:750,node:`messAisle`,pos:[m,h],rot:g,pose:`sit`,activity:`Ăn trưa`},{from:750,to:810,node:e,pos:t,rot:0,pose:`sit`,activity:`Nghỉ trưa`},{from:810,to:990,node:o,pos:s,rot:0,pose:c,activity:l},{from:990,to:1050,node:`messAisle`,pos:[m,h],rot:g,pose:`sit`,activity:`Ăn tối`},{from:1050,to:1260,node:u,pos:d,rot:0,pose:f,activity:p},{from:1260,to:1320,node:e,pos:t,rot:0,pose:`sit`,activity:`Về buồng nghỉ`}]}var Ru={bay:{id:`bay`,name:`Chú Bảy`,role:`Phạm nhân lâu năm · Buồng 3`,bio:`56 tuổi, từng làm thợ điện, ở trại đã hơn 3 năm. Ít nói nhưng để ý từng người mới.`,personality:`Điềm đạm, trọng chữ tín, ghét trò bắt nạt.`,goal:`Giữ hồ sơ sạch để về kịp đám cưới con gái và xin lỗi vợ con.`,story:!0,look:{uniform:`inmate`,skin:14198914,hair:12041929,hairStyle:`short`,accent:2845872,height:.98,build:1.06,glasses:!0},whereHint:`Buồng 3 (sáng sớm/trưa/tối), Nhà ăn (giờ ăn), Bàn lắp ráp #2 (ca sáng), Bàn cờ đá ngoài sân (giờ tự do).`,schedule:Lu(`c3`,[-12.9,-28.8],0,0,`wsB2`,Mu.wsB2,`yBench`,[-10,3.3],`sit`,`Ngồi bên bàn cờ đá`,`yBench`,[-10,3.3],`sit`,`Hóng mát ngoài sân`)},huy:{id:`huy`,name:`Huy`,role:`Bạn cùng buồng · Buồng 3`,bio:`22 tuổi, vào trại vì đánh nhau. Hay bốc đồng nhưng ai tốt với mình thì nhớ rất lâu.`,personality:`Nóng nảy, sĩ diện, trọng tình bạn.`,goal:`Thoát khỏi khoản nợ với Lâm mà không bị kéo sâu hơn.`,story:!0,look:{uniform:`inmate-orange`,skin:15317391,hair:8139816,hairStyle:`buzz`,accent:16760179,height:1,build:.96},whereHint:`Buồng 3 (sáng sớm/trưa/tối), Nhà ăn (giờ ăn), Bàn lắp ráp #3 (ca sáng), Khu xà đơn hoặc căn tin (giờ tự do).`,schedule:Lu(`c3`,[-15.2,-26.5],1,1,`wsB3`,Mu.wsB3,`yEx`,[-20.6,3.8],`stand`,`Đứng gần khu xà đơn`,`messCanteen`,[12.5,-28.8],`stand`,`Đứng nhìn quầy căn tin`)},lam:{id:`lam`,name:`Lâm`,role:`Tổ trưởng tự phong · Buồng 4`,bio:`34 tuổi, khéo miệng trước mặt cán bộ, đứng sau các khoản vay mượn và hàng lậu nhỏ trong khu.`,personality:`Thực dụng, tính toán, không bao giờ tự làm việc bẩn tay.`,goal:`Giữ thế lực trong khu mà hồ sơ vẫn sạch.`,story:!0,look:{uniform:`inmate`,skin:13211250,hair:1644052,hairStyle:`bald`,accent:10033947,height:1.04,build:1.18},whereHint:`Buồng 4, Nhà ăn (giờ ăn), Bàn lắp ráp #4 (ca sáng), Góc khuất sau xưởng (13:30–16:30), Ghế đá sân (tối).`,schedule:Lu(`c4`,[-8.75,-28.4],2,4,`wsB4`,Mu.wsB4,`lamCorner`,[20,12.5],`stand`,`Đứng ở góc khuất sau xưởng`,`yBench2`,[-16,3.6],`sit`,`Ngồi ghế đá quan sát sân`)},lan:{id:`lan`,name:`Quản giáo Lan`,role:`Quản giáo phụ trách Khu A`,bio:`38 tuổi, làm việc nguyên tắc, chỉ tin vào hồ sơ, nhân chứng và bằng chứng cụ thể.`,personality:`Nghiêm khắc, công bằng, ghét bao biện nhưng luôn lắng nghe khi có căn cứ.`,goal:`Giữ trật tự Khu A và giúp người thực tâm cải tạo sớm trở về.`,story:!0,look:{uniform:`officer`,skin:15054996,hair:2629928,hairStyle:`bun`,accent:9684477,height:.99,build:.94,cap:!0},whereHint:`Ô điểm danh (06:30–07:00), Phòng quản giáo phía Nam sân (07:00–17:00), Tuần tra sân (buổi tối).`,schedule:[{from:360,to:390,node:`offLan`,pos:[-4,17.3],rot:Math.PI,pose:`stand`,activity:`Chuẩn bị sổ điểm danh`},{from:390,to:420,node:`rc`,pos:Fu,rot:0,pose:`stand`,activity:`Điểm danh sáng`},{from:420,to:1020,node:`offLan`,pos:[-4,17.3],rot:Math.PI,pose:`sit`,activity:`Làm việc tại phòng quản giáo`},{from:1020,to:1260,node:`yC`,pose:`walk`,activity:`Tuần tra sân`,patrol:[`yC`,`yE`,`yS`,`yW`]},{from:1260,to:1320,node:`cbOut`,pos:[-17,-15.5],rot:Math.PI,pose:`stand`,activity:`Giám sát giờ về buồng`}]},tung:{id:`tung`,name:`Cán bộ Tùng`,role:`Cán bộ trật tự & xưởng`,bio:`30 tuổi, phụ trách trông coi xưởng lao động và kiểm tra buồng giam.`,personality:`Cẩn thận, đi tuần đúng tuyến.`,goal:`Không để thất thoát vật tư xưởng.`,story:!0,look:{uniform:`officer`,skin:14264706,hair:1514022,hairStyle:`short`,accent:12573694,height:1.03,build:1.09,cap:!0},whereHint:`Xưởng lao động (giờ làm việc), Tuần tra sân & hành lang (ngoài giờ).`,schedule:[{from:360,to:480,node:`cbOut`,pose:`walk`,activity:`Tuần tra buổi sáng`,patrol:[`cbOut`,`rc`,`messOut`,`yC`]},{from:480,to:690,node:`wsHub`,pose:`walk`,activity:`Giám sát xưởng`,patrol:[`wsBoard`,`wsHub`,`wsRow`,`wsRow2`,`wsHub`,`wsStoreOut`]},{from:690,to:810,node:`messOut`,pose:`walk`,activity:`Trực giờ trưa`,patrol:[`messOut`,`yE`,`yC`]},{from:810,to:990,node:`wsHub`,pose:`walk`,activity:`Trực ca chiều`,patrol:[`wsIn`,`wsHub`,`wsRow`,`wsRow2`]},{from:990,to:1260,node:`yE`,pose:`walk`,activity:`Tuần tra tối`,patrol:[`messOut`,`yE`,`yS`,`cbOut`]},{from:1260,to:1320,node:`corC`,pose:`walk`,activity:`Kiểm tra buồng giam`,patrol:[`cor1`,`cor2`,`cor3`,`cor4`]}]},tu:{id:`tu`,name:`Anh Tư`,role:`Phạm nhân · Buồng 1`,bio:`Phạm nhân phụ bếp và làm mộc.`,personality:`Hiền lành, ít chuyện.`,goal:`Chấp hành xong án.`,story:!1,look:{uniform:`inmate-orange`,skin:14000764,hair:5519911,hairStyle:`short`,accent:16765578,height:.99,build:1.08},whereHint:`Buồng 1, Nhà ăn, Xưởng.`,schedule:Lu(`c1`,[-25.25,-27.8],3,2,`wsRest`,[24.2,4.5],`yBench2`,[-15,3.6],`stand`,`Đi dạo sân`,`yC`,[-3.8,-5.2],`stand`,`Hóng gió`)},son:{id:`son`,name:`Sơn`,role:`Phạm nhân · Buồng 2`,bio:`Phạm nhân trẻ, thích tập xà.`,personality:`Hoạt bát.`,goal:`Rèn sức khỏe.`,story:!1,look:{uniform:`inmate`,skin:14725772,hair:10374960,hairStyle:`buzz`,accent:8141549,height:1.01,build:1},whereHint:`Buồng 2, Nhà ăn, Xưởng, Khu xà đơn.`,schedule:Lu(`c2`,[-19.75,-27.8],4,3,`wsRest`,[24.2,0],`yEx`,[-22.5,3.6],`stand`,`Tập thể dục`,`yW`,[-17,-4],`stand`,`Nói chuyện ngoài sân`)},khai:{id:`khai`,name:`Khải`,role:`Đàn em của Lâm · Buồng 4`,bio:`Hay đi theo Lâm.`,personality:`Hay dò xét.`,goal:`Theo đuôi Lâm.`,story:!1,look:{uniform:`inmate-orange`,skin:13605748,hair:2235936,hairStyle:`buzz`,accent:16762766,height:.98,build:1.03},whereHint:`Buồng 4, Nhà ăn, Xưởng, Góc sau xưởng.`,schedule:Lu(`c4`,[-7.9,-26.8],5,5,`wsRest`,[14.2,6.4],`lamCorner`,[18.5,13.2],`stand`,`Canh chừng cho Lâm`,`yE`,[8,-6],`stand`,`Đứng ở sân Đông`)},phuc:{id:`phuc`,name:`Thầy Phúc`,role:`Cán bộ giáo dục & dạy nghề`,bio:`45 tuổi, là giáo viên dạy nghề điện - cơ khí lâu năm trong trại. Coi trọng tính kỷ luật, trung thực và sự chăm chỉ.`,personality:`Tận tình, nghiêm khắc nhưng nhân hậu.`,goal:`Truyền nghề cho các phạm nhân để khi ra trại có công việc lương thiện.`,story:!0,look:{uniform:`officer`,skin:13935475,hair:5853771,hairStyle:`short`,accent:6333946,height:1.02,build:1,cap:!0,glasses:!0},whereHint:`Lớp học nghề & Thư viện (chiều 14:00–16:30 & tối 19:00–21:00), Nhà ăn (giờ ăn).`,schedule:[{from:360,to:480,node:`classLib`,pos:[-25,16],rot:0,pose:`work`,activity:`Chuẩn bị giáo án tại thư viện`},{from:480,to:690,node:`classPhuc`,pos:[-21.5,16.5],rot:Math.PI,pose:`stand`,activity:`Soạn giáo trình nghề`},{from:690,to:750,node:`messAisle`,pos:[11.4,-21.45],rot:Math.PI,pose:`sit`,activity:`Ăn trưa`},{from:750,to:840,node:`yBench`,pos:[-10,3.2],rot:0,pose:`sit`,activity:`Nghỉ trưa hóng mát`},{from:840,to:990,node:`classPhuc`,pos:[-21.5,16.5],rot:Math.PI,pose:`stand`,activity:`Giảng dạy lớp học nghề (14:00–16:30)`},{from:990,to:1050,node:`messAisle`,pos:[11.4,-21.45],rot:Math.PI,pose:`sit`,activity:`Ăn tối`},{from:1050,to:1260,node:`classLib`,pos:[-25,16],rot:0,pose:`sit`,activity:`Phụ trách giờ đọc sách thư viện`},{from:1260,to:1320,node:`offOut`,pos:[-4,7.5],rot:0,pose:`stand`,activity:`Giao ban cuối ngày`}]},an:{id:`an`,name:`Y sĩ An`,role:`Y sĩ phụ trách Phòng y tế`,bio:`32 tuổi, cẩn trọng, công tư phân minh. Ghét kẻ giả bệnh trốn việc nhưng luôn tận tụy với người ốm đau.`,personality:`Nhẹ nhàng, chu đáo, tinh ý.`,goal:`Đảm bảo sức khỏe cho toàn trại và ngăn chặn tình trạng tuồn thuốc lậu.`,story:!0,look:{uniform:`medic`,skin:16109749,hair:4796718,hairStyle:`bun`,accent:2282478,height:.98,build:.94},whereHint:`Phòng y tế (07:30–11:30 & 13:30–17:00), Nhà ăn (giờ ăn).`,schedule:[{from:360,to:450,node:`medDesk`,pos:[23,-23.1],rot:0,pose:`stand`,activity:`Kiểm tra hồ sơ bệnh án`},{from:450,to:690,node:`medDesk`,pos:[23,-23.1],rot:0,pose:`sit`,activity:`Khám bệnh buổi sáng`},{from:690,to:750,node:`messAisle`,pos:[.6,-21.45],rot:Math.PI,pose:`sit`,activity:`Ăn trưa`},{from:750,to:810,node:`yC`,pos:[-4,-3],rot:0,pose:`stand`,activity:`Đi dạo sân giữa giờ`},{from:810,to:1020,node:`medDesk`,pos:[23,-23.1],rot:0,pose:`sit`,activity:`Trực y tế ca chiều`},{from:1020,to:1080,node:`messAisle`,pos:[.6,-21.45],rot:Math.PI,pose:`sit`,activity:`Ăn tối`},{from:1080,to:1260,node:`yBench`,pos:[-12.5,3.3],rot:0,pose:`sit`,activity:`Hóng gió buổi tối`},{from:1260,to:1320,node:`medIn`,pos:[22.25,-20],rot:0,pose:`stand`,activity:`Khóa cửa phòng y tế`}]},mai:{id:`mai`,name:`Chị Mai`,role:`Chị gái của Minh (28 tuổi)`,bio:`Lam lũ gánh vác gia đình, luôn mong em trai tu tâm dưỡng tính để sớm hoàn lương trở về.`,personality:`Chịu thương chịu khó, nghiêm khắc nhưng giàu tình thương.`,goal:`Động viên Minh cải tạo tốt và chuẩn bị cuộc sống ngoài trại.`,story:!0,look:{uniform:`visitor`,skin:14857357,hair:6635567,hairStyle:`bun`,accent:15485081,height:.97,build:.94},whereHint:`Phòng thăm gặp (giờ thăm gặp 08:00–11:00 & 14:00–17:00).`,schedule:[{from:360,to:480,node:`visitMai`,pos:[-25.5,-10.25],rot:0,pose:`sit`,activity:`Chờ đăng ký vào thăm`},{from:480,to:660,node:`visitMai`,pos:[-25.5,-10.25],rot:0,pose:`sit`,activity:`Ngồi đợi Minh bên vách kính`},{from:660,to:840,node:`visitMai`,pos:[-25.5,-10.25],rot:0,pose:`sit`,activity:`Nghỉ trưa tại khu chờ thăm nuôi`},{from:840,to:1020,node:`visitMai`,pos:[-25.5,-10.25],rot:0,pose:`sit`,activity:`Tiếp tục ca thăm gặp buổi chiều`},{from:1020,to:1320,node:`visitMai`,pos:[-25.5,-10.25],rot:0,pose:`sit`,activity:`Chuẩn bị bắt xe đò về quê`}]}};function zu(e,t){for(let n of e.schedule)if(t>=n.from&&t<n.to)return n;return e.schedule[e.schedule.length-1]}var Bu={nhap_trai:{id:`nhap_trai`,title:`Người mới`,type:`main`,chapter:1,giver:`Quản giáo Lan`,reason:`Phạm nhân mới phải làm quen buồng giam, nắm nội quy và nề nếp sinh hoạt trong ngày đầu nhập trại An Phú.`,requirement:`Bắt đầu trò chơi sau phần mở đầu.`,recommendedLevel:1,objectives:[{id:`chan_man`,text:`Nhận chăn màn tại giường của bạn (Buồng số 3)`},{id:`noi_quy`,text:`Đọc kỹ Bảng nội quy trại tại hành lang khu buồng giam`},{id:`diem_danh`,text:`Có mặt điểm danh ở ô vàng ngoài sân (06:30–06:45)`},{id:`gap_bay`,text:`Làm quen Chú Bảy (bạn cùng buồng, thường ngồi ở nhà ăn)`}],reward:`+3 điểm cải tạo, 50 XP, Quản giáo Lan ghi nhận hồ sơ.`,xp:50,failure:`Không thể thất bại. Nếu lỡ điểm danh ngày đầu, Quản giáo chỉ nhắc nhở; hãy điểm danh vào sáng hôm sau.`},ca_dau:{id:`ca_dau`,title:`Ca lao động đầu tiên`,type:`main`,chapter:1,giver:`Chú Bảy`,reason:`Lao động đủ chỉ tiêu là cơ sở cốt lõi để tích lũy điểm và được xét giảm án.`,requirement:`Hoàn thành nhiệm vụ "Người mới".`,recommendedLevel:1,objectives:[{id:`cham_cong`,text:`Chấm công tại bảng xưởng lao động (08:00–08:30)`},{id:`lap_rap`,text:`Lắp ráp đủ 3 ổ cắm điện tại bàn làm việc xưởng`},{id:`bao_bay`,text:`Báo cáo lại với Chú Bảy sau giờ lao động`}],reward:`+4 điểm cải tạo, 60 XP, 15.000đ tiền công ca, Chú Bảy tin tưởng.`,xp:60,failure:`Nếu bỏ lỡ ca sáng: bị ghi nhận "Bỏ lao động", có thể bù lại vào ca sáng ngày hôm sau.`},mon_no:{id:`mon_no`,title:`Món nợ của Huy`,type:`main`,chapter:1,giver:`Huy`,reason:`Huy bị Lâm ép trả món nợ 40.000đ với lãi cắt cổ, dọa sẽ "xử" nếu không trả trước cuối tuần.`,requirement:`Sau khi hoàn thành "Ca lao động đầu tiên". Gặp Huy ngoài sân giờ tự do.`,recommendedLevel:2,objectives:[{id:`nghe_huy`,text:`Lắng nghe Huy tâm sự về nguồn cơn món nợ`},{id:`gap_lam`,text:`Gặp Lâm ở góc khuất sau xưởng (giờ tự do)`},{id:`quyet_dinh`,text:`Lựa chọn phương án giải quyết dứt điểm món nợ`},{id:`lay_khoan`,text:`Lẻn vào kho xưởng lấy hộp mũi khoan đưa cho Lâm (Tránh camera và Cán bộ Tùng)`,branch:`steal`},{id:`giao_lam`,text:`Giao hộp mũi khoan cho Lâm`,branch:`steal`},{id:`du_tien`,text:`Tích lũy đủ 40.000đ tiền sạch từ tiền công lao động`,branch:`pay`},{id:`tra_lam`,text:`Trả nợ thay Huy cho Lâm sòng phẳng`,branch:`pay`},{id:`lay_giay`,text:`(Tùy chọn) Thuyết phục Huy giao giấy ghi nợ khống làm bằng chứng`,branch:`report`,optional:!0},{id:`bao_lan`,text:`Báo cáo Quản giáo Lan xử lý hành vi cho vay nặng lãi`,branch:`report`},{id:`dam_phan`,text:`Dùng kỹ năng Giao tiếp thương lượng xóa nợ và phân tích rủi ro cho Lâm`,branch:`negotiate`}],branches:{steal:`Thỏa hiệp: trộm đồ trong kho giao cho Lâm`,pay:`Trả nợ thay bằng tiền công sạch`,report:`Báo cáo Quản giáo Lan xử lý theo luật`,negotiate:`Dùng kỹ năng đàm phán thuyết phục Lâm dừng ép nợ`},reward:`70 XP, mở Chương 2. Điểm cải tạo và quan hệ thay đổi sâu sắc theo lựa chọn.`,xp:70,failure:`Nếu bị bắt khi trộm đồ trong kho: bị kỷ luật, nhiệm vụ chuyển sang giải quyết bằng báo cáo hoặc tự trả nợ.`},dep_bay:{id:`dep_bay`,title:`Đôi dép của Chú Bảy`,type:`side`,chapter:1,giver:`Chú Bảy`,reason:`Chú Bảy đánh rơi đôi dép tổ ong màu xanh — kỷ vật duy nhất do con gái gửi vào trước khi chú chuyển trại.`,requirement:`Đã làm quen Chú Bảy tại buồng hoặc nhà ăn.`,recommendedLevel:1,objectives:[{id:`tim_dep`,text:`Tìm kiếm đôi dép tổ ong quanh bãi tập thể dục ngoài sân`},{id:`tra_dep`,text:`Mang dép trả lại cho Chú Bảy`}],reward:`+10 quan hệ Chú Bảy, 25 XP, mở lòng chia sẻ về hoàn cảnh gia đình.`,xp:25,failure:`Không giới hạn thời gian.`},mi_cho_huy:{id:`mi_cho_huy`,title:`Gói mì cho Huy`,type:`side`,chapter:1,giver:`Huy`,reason:`Huy bị phạt hạn chế mua đồ căn tin 1 ngày, đói lả sau ca làm việc, nhờ Minh mua giúp gói mì.`,requirement:`Đã gặp Huy ở buồng giam.`,recommendedLevel:1,objectives:[{id:`mua`,text:`Mua 1 gói mì tại căn tin nhà ăn (mở 16:30–21:00)`},{id:`dua`,text:`Đưa mì gói cho Huy trước khi hết ngày hôm sau`}],reward:`+8 quan hệ Huy, 20 XP, Huy ghi nhớ Minh là người giữ chữ tín.`,xp:20,failure:`Quá hạn không đưa: Huy −8 quan hệ và mất dần lòng tin.`},lao_dong_phu:{id:`lao_dong_phu`,title:`Ca phụ tự nguyện`,type:`side`,chapter:1,giver:`Chú Bảy`,reason:`Xưởng cần bổ sung sản phẩm lắp ráp cho đơn hàng bàn ghế trại. Tự nguyện tham gia ca chiều.`,requirement:`Sau khi hoàn thành chỉ tiêu ca sáng.`,recommendedLevel:1,objectives:[{id:`dang_ky`,text:`Đến xưởng trong ca chiều tự do (13:30–16:30)`},{id:`lap_phu`,text:`Lắp ráp thêm 2 cụm chi tiết máy`}],reward:`+2 điểm cải tạo, 10.000đ tiền công, 30 XP.`,xp:30,failure:`Có thể làm vào bất kỳ buổi chiều nào.`},lop_nghe_dau:{id:`lop_nghe_dau`,title:`Bài học nghề đầu tiên`,type:`main`,chapter:2,giver:`Thầy Phúc`,reason:`Thầy Phúc kiểm tra tính kỷ luật, kỹ năng an toàn điện và tư duy kỹ thuật của học viên mới.`,requirement:`Chương 2 mở ra. Đến Lớp học nghề ca chiều (14:00–16:30).`,recommendedLevel:3,objectives:[{id:`den_lop`,text:`Gặp Thầy Phúc tại Lớp học nghề (14:00–16:30)`},{id:`thao_tac`,text:`Hoàn thành bài tập nối mạch an toàn tại bàn thực hành`},{id:`nhan_xet`,text:`Nghe Thầy Phúc đánh giá và nhận Chứng chỉ nghề điện căn bản`}],reward:`+4 điểm cải tạo, 50 XP, Chứng chỉ nghề, mở quyền mượn sách thư viện.`,xp:50,failure:`Nếu làm sai mạch điện: Thầy Phúc hướng dẫn lại, có thể thực hành lại vào ca chiều hôm sau.`},nghi_an_thuoc:{id:`nghi_an_thuoc`,title:`Nghi án thuốc trị hen`,type:`main`,chapter:2,giver:`Y sĩ An`,reason:`Chú Bảy tái phát hen suyễn ban đêm nhưng cơ số thuốc xịt đặc trị trong tủ y tế bị thiếu hụt bí ẩn.`,requirement:`Gặp Y sĩ An tại Phòng y tế (07:30–11:30 hoặc 13:30–17:00).`,recommendedLevel:3,objectives:[{id:`hoi_an`,text:`Nghe Y sĩ An trình bày sự việc tại Phòng y tế`},{id:`hoi_bay`,text:`Hỏi Chú Bảy về thời điểm cơn hen xuất hiện`},{id:`nhat_thuoc`,text:`Tìm kiếm vật chứng tại góc tường sau xưởng`},{id:`tra_thuoc`,text:`Giao lại lọ thuốc cho Y sĩ An cấp cứu Chú Bảy`}],reward:`+6 điểm cải tạo, 60 XP, Chú Bảy +15, Y sĩ An +12 quan hệ, manh mối điều tra.`,xp:60,failure:`Không giới hạn thời gian; hoàn thành để đảm bảo sức khỏe Chú Bảy.`},manh_moi_kho_7:{id:`manh_moi_kho_7`,title:`Dấu vết kho số 7`,type:`main`,chapter:2,giver:`Chú Bảy`,reason:`Chú Bảy vô tình nhìn thấy một kiện hàng cũ chuyển từ kho vật tư có tem niêm phong mang mã hiệu "KHO-07-AP".`,requirement:`Sau khi hoàn thành "Nghi án thuốc trị hen".`,recommendedLevel:4,objectives:[{id:`nghe_bay_ke`,text:`Hỏi Chú Bảy về kiện hàng có tem niêm phong KHO-07`},{id:`kiem_tra_tem`,text:`Quan sát kiện gỗ ở hành lang kho xưởng để đối chiếu mã số`},{id:`lay_manh_giay`,text:`Thu thập mảnh vận đơn dán trên kiện hàng làm chứng cứ`}],reward:`+4 điểm cải tạo, 65 XP, Manh mối hồ sơ kho số 7, mở Chương 3.`,xp:65,failure:`Không thể thất bại.`},phong_tham_gap:{id:`phong_tham_gap`,title:`Vách kính thăm gặp`,type:`side`,chapter:2,giver:`Chị Mai`,reason:`Chị Mai bắt xe đò từ quê lên thăm Minh theo lịch thăm gặp định kỳ của trại.`,requirement:`Đến Phòng thăm gặp (08:30–11:00 hoặc 14:00–16:30).`,recommendedLevel:2,objectives:[{id:`gap_chi`,text:`Ngồi vào vách kính nói chuyện với Chị Mai`},{id:`thanh_that`,text:`Lựa chọn lời tâm sự chân thành làm gia đình an lòng`},{id:`nhan_tien`,text:`Nhận 25.000đ tiền tiếp tế chị gửi vào sổ lưu ký`}],reward:`+25.000đ căn tin, −20 căng thẳng, Chị Mai +15 quan hệ, 30 XP.`,xp:30,failure:`Có thể gặp chị vào ca thăm gặp tiếp theo nếu lỡ giờ.`},sach_thu_vien:{id:`sach_thu_vien`,title:`Độc giả chăm chỉ`,type:`side`,chapter:2,giver:`Thầy Phúc`,reason:`Thầy Phúc khuyên nên đọc sách hướng nghiệp và cẩm nang pháp luật vào giờ sinh hoạt thư viện.`,requirement:`Đã hoàn thành bài học nghề đầu tiên.`,recommendedLevel:2,objectives:[{id:`muon_sach`,text:`Mượn cẩm nang pháp luật từ giá sách thư viện`},{id:`doc_xong`,text:`Đọc hết chương quy định giảm án tại bàn đọc sách`}],reward:`+2 điểm cải tạo, −10 căng thẳng, 25 XP, hiểu sâu quy chế giảm án.`,xp:25,failure:`Không giới hạn.`},phu_y_te:{id:`phu_y_te`,title:`Phụ việc y tế`,type:`side`,chapter:2,giver:`Y sĩ An`,reason:`Y tá trưởng nghỉ phép, trạm y tế cần người hỗ trợ phân loại bông băng và lau rửa tủ thuốc.`,requirement:`Đã làm quen Y sĩ An.`,recommendedLevel:3,objectives:[{id:`nhan_viec`,text:`Đến phòng y tế nhận hướng dẫn phân loại thuốc`},{id:`hoan_thanh`,text:`Hoàn thành sắp xếp thuốc men theo đúng chủng loại`}],reward:`+3 điểm cải tạo, 30 XP, +1 vỉ thuốc cảm dự phòng, Y sĩ An +8 quan hệ.`,xp:30,failure:`Không giới hạn.`},doi_chieu_chung_tu:{id:`doi_chieu_chung_tu`,title:`Đối chiếu chứng từ`,type:`main`,chapter:3,giver:`Thầy Phúc`,reason:`Thầy Phúc giúp Minh đối chiếu mảnh vận đơn kho số 7 với sổ giao nhận thiết bị cũ của trại giam.`,requirement:`Chương 3 mở ra. Gặp Thầy Phúc tại phòng học nghề.`,recommendedLevel:5,objectives:[{id:`dua_chung_tu`,text:`Đưa mảnh vận đơn kho số 7 cho Thầy Phúc xem`},{id:`doi_chieu`,text:`So sánh chữ ký người nhận kiện hàng với sổ sách lưu trữ`},{id:`phat_hien`,text:`Phát hiện chữ ký thuộc về một đầu mối bên ngoài có liên hệ với Lâm`}],reward:`+5 điểm cải tạo, 70 XP, Manh mối người cầm đầu vụ án.`,xp:70,failure:`Không giới hạn.`},cam_do_im_lang:{id:`cam_do_im_lang`,title:`Lời đề nghị im lặng`,type:`main`,chapter:3,giver:`Lâm`,reason:`Lâm biết Minh đang tìm hiểu chuyện kho số 7 và tìm cách chặn lại bằng lời đề nghị tiền mặt hoặc đe dọa.`,requirement:`Sau khi hoàn thành "Đối chiếu chứng từ". Gặp Lâm giờ tự do.`,recommendedLevel:5,objectives:[{id:`gap_lam_ch3`,text:`Nghe lời đề nghị của Lâm tại góc sân`},{id:`quyet_dinh_im_lang`,text:`Lựa chọn: Nhận tiền im lặng hay kiên quyết từ chối để bảo vệ sự thật`}],branches:{accept:`Thỏa hiệp nhận 50.000đ và dừng đào sâu sự thật`,refuse:`Kiên quyết từ chối, quyết tâm tìm lại sự trong sạch`},reward:`70 XP. Nếu từ chối: +6 cải tạo, Quản giáo đánh giá cao. Nếu nhận: +50.000đ nhưng bị ràng buộc.`,xp:70,failure:`Không thể thất bại.`},bay_vat_cam:{id:`bay_vat_cam`,title:`Cái bẫy vật cấm`,type:`main`,chapter:3,giver:`Cán bộ Tùng`,reason:`Ai đó đã lén nhét một gói thuốc lá lậu và dao cạo dưới gầm giường buồng 3 để gài bẫy Minh.`,requirement:`Sau khi xử lý lời đề nghị của Lâm.`,recommendedLevel:6,objectives:[{id:`phat_hien_bay`,text:`Cán bộ Tùng kiểm tra đột xuất và tìm thấy vật cấm dưới giường`},{id:`trinh_bay`,text:`Đến phòng quản giáo giải trình với Quản giáo Lan`},{id:`cung_cap_bang_chung`,text:`Dùng lời khai Chú Bảy / manh mối camera chứng minh Minh bị gài bẫy`}],reward:`+8 điểm cải tạo, 75 XP, Xóa sạch nghi ngờ, Cán bộ Tùng tôn trọng sự thật, mở Chương 4.`,xp:75,failure:`Nếu thiếu bằng chứng: bị cảnh cáo nhắc nhở, nhưng Chú Bảy sẽ đứng ra làm chứng cứu Minh vào ngày hôm sau.`},la_thu_que_nha:{id:`la_thu_que_nha`,title:`Lá thư từ quê nhà`,type:`side`,chapter:3,giver:`Chị Mai`,reason:`Cán bộ quản giáo chuyển cho Minh lá thư từ gia đình, kể về tình hình sức khỏe mẹ ở quê.`,requirement:`Sau buổi thăm gặp của Chị Mai.`,recommendedLevel:4,objectives:[{id:`nhan_thu`,text:`Nhận thư tại bàn trực cán bộ hành lang buồng giam`},{id:`hoi_am`,text:`Viết thư hồi âm trấn an mẹ và gửi vào hòm thư trại`}],reward:`−20 căng thẳng, +15 quan hệ Chị Mai, 35 XP.`,xp:35,failure:`Không giới hạn.`},ren_luyen_the_chat:{id:`ren_luyen_the_chat`,title:`Rèn luyện thể chất`,type:`side`,chapter:3,giver:`Chú Bảy`,reason:`Chú Bảy khuyên rèn luyện sức khỏe ở xà đơn ngoài sân để tăng cường sức chịu đựng và giảm căng thẳng.`,requirement:`Giờ sinh hoạt tự do ngoài sân.`,recommendedLevel:4,objectives:[{id:`tap_the_duc`,text:`Hoàn thành 3 hiệp hít xà đơn tại bãi tập thể dục ngoài sân`}],reward:`+10 thể lực tối đa, −15 căng thẳng, 30 XP, Chú Bảy khen ngợi.`,xp:30,failure:`Có thể tập lại mỗi ngày (tối đa 1 lần/ngày).`},sua_quat_phong_hoc:{id:`sua_quat_phong_hoc`,title:`Sửa quạt phòng học`,type:`side`,chapter:3,giver:`Thầy Phúc`,reason:`Chiếc quạt trần trong lớp học nghề bị kẹt bạc đạn giữa trưa nóng bức, Thầy Phúc cần thợ hỗ trợ.`,requirement:`Đã có Chứng chỉ nghề hoặc xuất thân Thợ sửa xe.`,recommendedLevel:5,objectives:[{id:`kiem_tra_quat`,text:`Kiểm tra hộp số và dây nối quạt trong lớp học`},{id:`thay_vong_bi`,text:`Dùng dầu bôi trơn và siết lại ốc cố định`}],reward:`+4 điểm cải tạo, 15.000đ tiền thưởng công ích, Thầy Phúc +15 quan hệ, 40 XP.`,xp:40,failure:`Không giới hạn.`},ho_so_giai_trinh:{id:`ho_so_giai_trinh`,title:`Hồ sơ giải trình kho số 7`,type:`main`,chapter:4,giver:`Quản giáo Lan`,reason:`Tập hợp tất cả chứng từ, lời khai và chứng cứ để Quản giáo Lan gửi văn bản kiến nghị xem xét vai trò trong vụ án.`,requirement:`Chương 4 mở ra. Đã có đủ manh mối từ Chương 2 & 3.`,recommendedLevel:7,objectives:[{id:`tong_hop_chung_cu`,text:`Tổng hợp mảnh vận đơn và bản đối chiếu chữ ký`},{id:`nop_ho_so`,text:`Nộp hồ sơ giải trình tại Phòng quản giáo`},{id:`ket_luan_lan`,text:`Nghe Quản giáo Lan thông báo quyết định tiếp nhận xem xét tình tiết giảm nhẹ`}],reward:`+10 điểm cải tạo, 80 XP, Xóa án tích chủ mưu, mở đường cho kết thúc Tự do vững vàng.`,xp:80,failure:`Không thể thất bại.`},loi_hua_chu_bay:{id:`loi_hua_chu_bay`,title:`Lời hứa Chú Bảy`,type:`main`,chapter:4,giver:`Chú Bảy`,reason:`Chú Bảy sắp mãn hạn, muốn gửi một hộp gỗ chạm khắc tay về cho cháu gái nhưng tay bị run khớp.`,requirement:`Chú Bảy tin tưởng (quan hệ >= 30).`,recommendedLevel:7,objectives:[{id:`nghe_loi_hua`,text:`Nghe Chú Bảy gửi gắm tâm nguyện tại xưởng`},{id:`danh_bong_hop`,text:`Giúp chú đánh bóng và tra khóa chiếc hộp gỗ`},{id:`hua_gui_ve`,text:`Hứa sẽ tận tay gửi hộp quà về địa chỉ con gái chú khi ra trại`}],reward:`+8 điểm cải tạo, Chú Bảy +30 quan hệ, 75 XP, Chú Bảy tặng lại cuốn cẩm nang cuộc sống.`,xp:75,failure:`Không thể thất bại.`},ky_xet_cuoi_cung:{id:`ky_xet_cuoi_cung`,title:`Kỳ xét đặc xá & Ngày tự do`,type:`main`,chapter:4,giver:`Quản giáo Lan`,reason:`Hội đồng trại họp phiên cuối cùng để đánh giá toàn diện quá trình cải tạo và quyết định ngày trả tự do.`,requirement:`Sau khi hoàn thành hồ sơ giải trình và lời hứa Chú Bảy.`,recommendedLevel:8,objectives:[{id:`den_hoi_truong`,text:`Có mặt tại phòng quản giáo để nghe công bố kết quả xét giảm án`},{id:`nhan_quyet_dinh`,text:`Nhận quyết định chấp hành xong án phạt và giấy chứng nhận học nghề`}],reward:`Hoàn thành cốt truyện, mở màn kết thúc phân nhánh theo quá trình chơi.`,xp:100,failure:`Không thể thất bại.`},truyen_nghe_cho_huy:{id:`truyen_nghe_cho_huy`,title:`Truyền nghề cho Huy`,type:`side`,chapter:4,giver:`Huy`,reason:`Huy muốn học nghề nối dây điện từ Minh để sau này ra trại kiếm việc lương thiện, không đi theo phe xấu nữa.`,requirement:`Minh đã có Chứng chỉ nghề và quan hệ với Huy >= 15.`,recommendedLevel:6,objectives:[{id:`huong_dan_huy`,text:`Hướng dẫn Huy các nguyên tắc an toàn tại bàn thực hành`},{id:`huy_thuc_hanh`,text:`Kiểm tra mạch điện do Huy tự tay nối`}],reward:`+5 điểm cải tạo, Huy +25 quan hệ, 40 XP, Huy quyết tâm làm lại cuộc đời.`,xp:40,failure:`Không giới hạn.`},chia_tay_thay_phuc:{id:`chia_tay_thay_phuc`,title:`Lời dặn ngày về`,type:`side`,chapter:4,giver:`Thầy Phúc`,reason:`Thầy Phúc muốn gặp Minh trước kỳ xét cuối để viết thư giới thiệu vào xưởng cơ điện của bạn thầy ở ngoài đời.`,requirement:`Đã hoàn thành "Bài học nghề đầu tiên" và "Sửa quạt phòng học".`,recommendedLevel:7,objectives:[{id:`tam_su_thay`,text:`Gặp Thầy Phúc tại lớp học nghề nghe lời dặn dò`},{id:`nhan_thu_gt`,text:`Nhận Thư giới thiệu việc làm sau khi ra trại`}],reward:`+1 Thư giới thiệu việc làm, Thầy Phúc +20 quan hệ, 40 XP.`,xp:40,failure:`Không giới hạn.`},kiem_tra_suc_khoe:{id:`kiem_tra_suc_khoe`,title:`Khám sức khỏe xuất trại`,type:`side`,chapter:4,giver:`Y sĩ An`,reason:`Kiểm tra tổng quát sức khỏe, cấp phát vitamin và chứng nhận thể lực trước khi làm thủ tục ra trại.`,requirement:`Chương 4 mở ra. Đến phòng y tế.`,recommendedLevel:6,objectives:[{id:`kham_tong_quat`,text:`Đến phòng y tế đo huyết áp và kiểm tra thể lực`}],reward:`+15 sức khỏe tối đa, +10 thể lực, Y sĩ An +10 quan hệ, 35 XP.`,xp:35,failure:`Không giới hạn.`}},Vu=[`nhap_trai`,`ca_dau`,`mon_no`,`dep_bay`,`mi_cho_huy`,`lao_dong_phu`,`lop_nghe_dau`,`nghi_an_thuoc`,`manh_moi_kho_7`,`phong_tham_gap`,`sach_thu_vien`,`phu_y_te`,`doi_chieu_chung_tu`,`cam_do_im_lang`,`bay_vat_cam`,`la_thu_que_nha`,`ren_luyen_the_chat`,`sua_quat_phong_hoc`,`ho_so_giai_trinh`,`loi_hua_chu_bay`,`ky_xet_cuoi_cung`,`truyen_nghe_cho_huy`,`chia_tay_thay_phuc`,`kiem_tra_suc_khoe`],Hu={bay:`Chú Bảy`,huy:`Huy (Bạn buồng)`,lam:`Lâm "Đầu bò"`,lan:`Quản giáo Lan`,tung:`Cán bộ Tùng`,tu:`Tú "Sẹo"`,son:`Sơn "Chuột"`,khai:`Khải "Già"`,phuc:`Thầy Phúc`,an:`Y sĩ An`,mai:`Chị Mai`};function Uu(e,t,n){return e===`mai`?n?n.quests.phong_tham_gap?.status===`active`||!!n.flags?.mai_visit:!1:!n?.flags?.[`absent_${e}`]}function Wu(e){if(e.quests.lop_nghe_dau?.status===`active`&&(e.minute<840||e.minute>990))return{waiting:!0,timeRange:`14:00–16:30`,hint:`Chờ mở cửa: 14:00–16:30 (Trong lúc chờ: Làm việc ngày / rèn luyện thể lực)`};if(e.quests.phong_tham_gap?.status===`active`){let t=e.minute>=510&&e.minute<=660,n=e.minute>=840&&e.minute<=990;if(!t&&!n)return{waiting:!0,timeRange:`08:30–11:00 & 14:00–16:30`,hint:`Chờ mở cửa: 08:30–11:00 & 14:00–16:30 (Trong lúc chờ: Làm việc ngày / rèn luyện thể lực)`}}if(e.quests.nghi_an_thuoc?.status===`active`){let t=e.minute>=450&&e.minute<=690,n=e.minute>=810&&e.minute<=1020;if(!t&&!n)return{waiting:!0,timeRange:`07:30–11:30 & 13:30–17:00`,hint:`Chờ mở cửa: 07:30–11:30 & 13:30–17:00 (Trong lúc chờ: Làm việc ngày / rèn luyện thể lực)`}}return{waiting:!1}}var Gu={dep_bay:{milestone:`Hoàn thành nhiệm vụ chính "Nhập trại & ổn định chỗ ở" (Chương 1)`,condition:`Đã làm quen Chú Bảy tại buồng giam số 3 hoặc nhà ăn`,isUnlocked:e=>!!(e.flags[`nhap_trai:gap_bay`]||e.quests.nhap_trai?.status===`done`)},mi_cho_huy:{milestone:`Hoàn thành nhiệm vụ chính "Nhập trại & ổn định chỗ ở" (Chương 1)`,condition:`Gặp bạn cùng buồng Huy sau khi ổn định chỗ ở`,isUnlocked:e=>e.quests.nhap_trai?.status===`done`},lao_dong_phu:{milestone:`Hoàn thành nhiệm vụ chính "Nhập trại & ổn định chỗ ở" (Chương 1)`,condition:`Sau ca lao động sáng tại xưởng`,isUnlocked:e=>e.quests.nhap_trai?.status===`done`},phong_tham_gap:{milestone:`Hoàn thành nhiệm vụ chính "Món nợ đầu tiên" (Bắt đầu Chương 2)`,condition:`Đến phòng thăm gặp trong khung giờ tiếp đón (08:30–11:00 & 14:00–16:30)`,isUnlocked:e=>e.quests.mon_no?.status===`done`||e.quests.mon_no?.status===`failed`||e.chapter>=2},sach_thu_vien:{milestone:`Hoàn thành nhiệm vụ chính "Bài học nghề đầu tiên" (Chương 2)`,condition:`Đạt chứng chỉ nghề và đến Thư viện lớp học nghề`,isUnlocked:e=>!!(e.quests.lop_nghe_dau?.status===`done`||e.inventory.chung_chi_nghe)},phu_y_te:{milestone:`Hoàn thành nhiệm vụ chính "Nghi án giấu thuốc" (Chương 2)`,condition:`Đến phòng y tế trong khung giờ làm việc (07:30–11:30 & 13:30–17:00)`,isUnlocked:e=>e.quests.nghi_an_thuoc?.status===`done`},sua_quat_phong_hoc:{milestone:`Hoàn thành nhiệm vụ chính "Đối chiếu sổ sách & chứng từ" (Chương 3)`,condition:`Có chứng chỉ nghề hoặc xuất thân Thợ xe, đến Lớp học nghề`,isUnlocked:e=>e.quests.doi_chieu_chung_tu?.status===`done`},truyen_nghe_cho_huy:{milestone:`Hoàn thành nhiệm vụ chính "Bẫy vật cấm buồng giam" (Bắt đầu Chương 4)`,condition:`Có chứng chỉ nghề và quan hệ với Huy ≥ 15`,isUnlocked:e=>e.quests.bay_vat_cam?.status===`done`||e.chapter>=4},chia_tay_thay_phuc:{milestone:`Hoàn thành nhiệm vụ chính "Bẫy vật cấm buồng giam" (Bắt đầu Chương 4)`,condition:`Hoàn thành "Bài học nghề đầu tiên" và "Sửa quạt phòng học"`,isUnlocked:e=>e.quests.bay_vat_cam?.status===`done`||e.chapter>=4},kiem_tra_suc_khoe:{milestone:`Hoàn thành nhiệm vụ chính "Bẫy vật cấm buồng giam" (Bắt đầu Chương 4)`,condition:`Đến phòng y tế làm thủ tục kiểm tra sức khỏe xuất trại`,isUnlocked:e=>e.quests.bay_vat_cam?.status===`done`||e.chapter>=4}};function Ku(e){return e.flags?.quest_waiting_for_time?!0:Wu(e).waiting}function qu(e){let t=[],n=e.minute;e.daily.rollcall===`pending`&&n<420?t.push({id:`duty_rollcall`,category:`duty`,title:`Điểm danh buổi sáng`,desc:`Có mặt ở ô vàng ngoài sân trước 06:45 để điểm danh đầu ngày.`,timeHint:`06:30–06:45`,startMinute:390,endMinute:420,done:!1}):!e.daily.workClockedIn&&n<690?t.push({id:`duty_clockin`,category:`duty`,title:`Chấm công ca sáng`,desc:`Đến xưởng lao động bấm bảng chấm công trước 08:30.`,timeHint:`08:00–11:30`,startMinute:480,endMinute:690,done:e.daily.workClockedIn}):n<990?t.push({id:`duty_work_units`,category:`duty`,title:`Hoàn thành sản phẩm xưởng`,desc:`Lắp ráp ổ cắm điện tại bàn xưởng để tích lũy sản phẩm.`,timeHint:`Trước 16:30`,startMinute:480,endMinute:990,done:e.daily.workUnits>=3}):t.push({id:`duty_curfew`,category:`duty`,title:`Điểm danh buồng giam tối`,desc:`Có mặt tại buồng giam số 3 trước 21:30 để điểm danh & tắt đèn.`,timeHint:`21:00–21:30`,startMinute:1260,endMinute:1320,done:e.daily.curfew===`ok`});let r=Object.keys(e.relations).filter(t=>e.relations[t]?.met&&Uu(t,e.day,e));if(r.length>0){r.sort((t,n)=>(e.relations[t]?.value??0)-(e.relations[n]?.value??0));let n=r[0],i=Ru[n],a=Hu[n]??n,o=i?.whereHint??`khuôn viên trại`;t.push({id:`rel_${n}`,category:`relation`,title:`Gặp gỡ ${a}`,desc:`Trò chuyện với ${a} (${o}) để tìm hiểu và cải thiện quan hệ.`,targetNpc:n,targetWhere:o,done:!1})}else t.push({id:`rel_bay`,category:`relation`,title:`Làm quen Chú Bảy`,desc:`Trò chuyện với Chú Bảy (buồng 3 / nhà ăn giờ ăn) để tìm hiểu nội quy trại.`,targetNpc:`bay`,targetWhere:Ru.bay?.whereHint??`buồng 3 / nhà ăn`,done:!1});let i=Ku(e),a=``,o=``;for(let[t,n]of Object.entries(e.quests))if(n.status===`active`){let e=Bu[t];a=e?.title??t;let r=n.step??0;o=e?.objectives?.[r]?.text??`Tiếp tục mục tiêu của nhiệm vụ.`;break}return!i&&a?t.push({id:`personal_quest`,category:`personal`,title:a,desc:o,done:!1}):n<840?t.push({id:`personal_exercise`,category:`personal`,title:`Rèn luyện thể lực`,desc:`Tập thể dục tại sân sinh hoạt để nâng cao thể chất và tinh thần.`,done:e.daily.exercise>0}):t.push({id:`personal_reading`,category:`personal`,title:`Đọc sách trau dồi`,desc:`Đọc sách hoặc cẩm nang pháp luật tại thư viện lớp học nghề.`,done:!!e.flags?.read_book_today}),t}function Ju(e,t){let n=[{id:`rollcall`,label:`Điểm danh`,timeRange:`06:30–06:45`,start:390,end:405,where:`Sân trại`},{id:`breakfast`,label:`Ăn sáng`,timeRange:`07:00–08:00`,start:420,end:480,where:`Nhà ăn`},{id:`work_morning`,label:`Ca sáng`,timeRange:`08:00–11:30`,start:480,end:690,where:`Xưởng`},{id:`lunch`,label:`Ăn trưa`,timeRange:`11:30–12:30`,start:690,end:750,where:`Nhà ăn`},{id:`work_afternoon`,label:`Ca chiều tự nguyện`,timeRange:`13:30–16:30`,start:810,end:990,where:`Xưởng`},{id:`dinner`,label:`Ăn chiều`,timeRange:`16:30–17:30`,start:990,end:1050,where:`Nhà ăn`},{id:`canteen_night`,label:`Căn tin tối`,timeRange:`đến 21:00`,start:1050,end:1260,where:`Căn tin`},{id:`curfew`,label:`Tắt đèn`,timeRange:`22:00`,start:1320,end:1440,where:`Buồng giam`}];if(t){let e=e=>`${Math.floor(e/60).toString().padStart(2,`0`)}:${(e%60).toString().padStart(2,`0`)}`;n.push({id:`quest_block`,label:t.label,timeRange:`${e(t.start)}–${e(t.end)}`,start:t.start,end:t.end,where:t.where}),n.sort((e,t)=>e.start-t.start)}return n.map(t=>{let n;return n=e>=t.end?`past`:e>=t.start&&e<t.end?`active`:`upcoming`,{...t,status:n}})}function Yu(e){return e>0&&e%4==0}function Xu(e){return e.quests?.ho_so_giai_trinh?.status===`done`||e.quests?.ky_xet_cuoi_cung?.status===`done`}function Zu(e){let t=Math.ceil(e.day/4)*4;for(t===0&&(t=4);e.sentence.reviewsDone.includes(t);)t+=4;return t}function Qu(e,t){let n=t-4+1,r=e.history.filter(e=>e.day>=n&&e.day<=t),i=e.day===t?+(e.daily.work===`ok`):0,a=e.day===t?+(e.daily.rollcall===`ok`||e.daily.rollcall===`excused`):0,o=r.filter(e=>e.work===`ok`).length+i,s=r.filter(e=>e.rollcall===`ok`||e.rollcall===`excused`).length+a,c=Math.min(4,t),l=[],u=e.stats.reform-e.sentence.reformAtLastReview,d=0;e.stats.reform>=90?(d=.8,l.push({label:`Duy trì điểm cải tạo xuất sắc (${e.stats.reform}/100)`,value:.8})):e.stats.reform>=75||u>=12?(d=.6,l.push({label:`Điểm cải tạo tốt (${e.stats.reform}/100, tăng +${Math.max(0,u)})`,value:.6})):u>=6||e.stats.reform>=55?(d=.4,l.push({label:`Cải tạo mức khá (${e.stats.reform}/100)`,value:.4})):(l.push({label:`Mức cải tạo còn thấp (${e.stats.reform}/100)`,value:.2}),d=.2);let f=0;o>=c?f=.5:o>=Math.ceil(c*.75)&&(f=.25),l.push({label:`Lao động chấp hành ${o}/${c} ngày`,value:f});let p=s>=c?.3:s>=Math.ceil(c*.75)?.15:0;l.push({label:`Điểm danh đúng giờ ${s}/${c} ngày`,value:p});let m=0,h=Object.keys(e.quests??{}).filter(t=>e.quests[t].status===`done`),g=!!(e.inventory&&e.inventory.chung_chi_nghe||(e.skills?.vocationalExam??0)>0),_=e.quests?.bay_vat_cam?.status===`done`;e.quests?.ho_so_giai_trinh?.status===`done`||_&&h.length>=6?(m=.6,l.push({label:`Hoàn tất giải trình vụ án & thành tích lớn (${h.length} mục)`,value:.6})):g||h.length>=3?(m=.4,l.push({label:`Chứng chỉ nghề & hoàn thành nhiệm vụ giúp đỡ (${h.length} mục)`,value:.4})):h.length>=1?(m=.2,l.push({label:`Có tiến triển nhiệm vụ cải tạo (${h.length} mục)`,value:.2})):l.push({label:`Chưa có thành tích nhiệm vụ trong kỳ`,value:0});let v=e.violations.filter(e=>e.day>=n&&e.day<=t&&e.status!==`overturned`),y=v.reduce((e,t)=>e+t.severity,0),b=v.some(e=>e.severity>=3);y>0?l.push({label:`Vi phạm trong kỳ: ${v.length} (trừ điểm nặng ${y})`,value:-y}):l.push({label:`Không có vi phạm trong kỳ (+0.2)`,value:.2});let x=d+f+p+m+(y>0?-y:.2);b&&(l.push({label:`Có hành vi nghiêm trọng → không xét giảm kỳ này`,value:0}),x=0);let S=0;return x>=2&&m>=.4?S=2:x>=1.3&&(S=1),S=Math.max(0,Math.min(2,S)),{day:t,reduction:S,breakdown:l,score:Number(x.toFixed(2))}}function $u(e,t){if(e.sentence.lastServedDay>=t)return!1;if(e.sentence.lastServedDay=t,e.sentence.remaining>0){if(e.sentence.remaining===1&&!Xu(e))return e.flags.release_pending_chapter4=!0,!0;--e.sentence.remaining,e.sentence.served+=1}return!0}function ed(e,t){if(!Yu(t)||e.sentence.reviewsDone.includes(t))return null;let n=Qu(e,t),r=Math.min(n.reduction,e.sentence.remaining);return!Xu(e)&&e.sentence.remaining-r<1&&(r=Math.max(0,e.sentence.remaining-1)),n.reduction=r,e.sentence.reviewsDone.push(t),e.sentence.reformAtLastReview=e.stats.reform,r>0&&(e.sentence.remaining-=r,e.sentence.reductions.push({day:t,amount:r,reason:`Kỳ xét giảm án ngày ${t}`})),n}function td(e,t,n,r){let i=e.sentence.additions.reduce((e,t)=>e+t.amount,0),a=Math.max(0,Math.min(t,8-i));return a>0&&(e.sentence.remaining+=a,e.sentence.total+=a,e.sentence.additions.push({day:r,amount:a,reason:n})),a}function nd(e){let t=e.sentence.remaining,n=e.sentence.lastServedDay>=e.day,r=n?e.day+t:e.day+t-1,i=Zu(e),a=Qu(e,i).reduction,o=t,s=n?e.day+1:e.day,c=new Set(e.sentence.reviewsDone),l=0;for(;o>0&&l++<500&&(--o,s%4==0&&!c.has(s)&&(o-=Math.min(a,Math.max(0,o))),!(o<=0));)s++;return{remaining:t,nextReview:i,releaseNoReduction:r,releaseEstimated:s,estimatedPerReview:a}}var rd=`ditu-online.save`,id=`ditu-online.save.backup-v1`;function ad(e,t){if(!e||typeof e!=`object`)return null;let n=Number(e.version??0),r=e.state??e;if(n===0&&(r={..._u(),...r,version:1},n=1),n>3)return null;if(n===1&&t)try{t.setItem(id,JSON.stringify(e))}catch{}let i=_u(),a={name:r.profile?.name||`Minh`,preset:r.profile?.preset??0,skin:r.profile?.skin??14857357,hair:r.profile?.hair??1579035,hairStyle:r.profile?.hairStyle??`short`,background:r.profile?.background??`mechanic`,difficulty:r.profile?.difficulty??`normal`,flashbackChoice:r.profile?.flashbackChoice??`keep_doc`,introSeen:r.profile?.introSeen??!0},o={level:r.progression?.level??1,xp:r.progression?.xp??0,skillPoints:r.progression?.skillPoints??0,attrs:{endurance:r.progression?.attrs?.endurance??2,agility:r.progression?.attrs?.agility??2,perception:r.progression?.attrs?.perception??1,charisma:r.progression?.attrs?.charisma??1}},s=r.sentence?.total??30,c=r.sentence?.remaining??30,l=Math.max(30,s),u=0,d=r.quests?.ho_so_giai_trinh?.status===`done`||r.quests?.ky_xet_cuoi_cung?.status===`done`;s===24?(u=6,c=Math.min(l,c+6)):!d&&(r.day??1)>=10&&c<=8&&(u=Math.max(6,12-c),c+=u,l=Math.max(l,(r.sentence?.served??0)+c));let f={...i.sentence,...r.sentence,total:l,remaining:c},p={...i.stats,...r.stats};if(n<3){let e=r.stats||{},t=typeof e.hunger==`number`?e.hunger:35,n=typeof e.stress==`number`?e.stress:45,a=typeof e.satiety==`number`?e.satiety:Math.max(0,Math.min(100,100-t)),o=typeof e.morale==`number`?e.morale:Math.max(0,Math.min(100,100-n));p={...p,health:e.health??i.stats.health,stamina:e.stamina??i.stats.stamina,satiety:a,morale:o,money:e.money??i.stats.money,reform:e.reform??i.stats.reform,suspicion:e.suspicion??i.stats.suspicion}}let m={...i,...r,profile:a,progression:o,sentence:f,stats:gu(p),skills:{...i.skills,...r.skills},settings:{...i.settings,...r.settings},relations:{...i.relations,...r.relations},flags:{...i.flags,...r.flags},version:3};return u>0&&(m.flags.sentence_extended_for_reform=u,m.sentence.additions.push({day:m.day,amount:u,reason:`Gia hạn thời hạn để hoàn tất chương trình cải tạo và giải trình vụ án`})),od(m),m}function od(e){if(!e||!e.quests)return!1;let t=!1,n=e.quests.cam_do_im_lang;if(n&&n.status===`active`){let r=e.flags||={},i=!!r[`cam_do_im_lang:gap_lam_ch3`],a=!!r[`cam_do_im_lang:quyet_dinh_im_lang`]||!!r[`cam_do_im_lang:quyet_dinh`];if(i&&a){let i=r.accepted_lam_bribe?`accept`:r[`cam_do_im_lang:branch`]||`refuse`;r[`cam_do_im_lang:branch`]=i,r[`cam_do_im_lang:gap_lam_ch3`]=!0,r[`cam_do_im_lang:quyet_dinh_im_lang`]=!0,n.status=`done`,n.outcome=i===`accept`?`Nhận tiền im lặng`:`Từ chối mua chuộc`;let a=i===`accept`?`Thỏa hiệp nhận 50.000đ và dừng đào sâu sự thật`:`Kiên quyết từ chối, quyết tâm tìm lại sự trong sạch`;if(n.choices=n.choices||[],n.choices.includes(a)||n.choices.push(a),!n.rewarded)for(n.rewarded=!0,e.progression||={level:1,xp:0,skillPoints:0,attrs:{endurance:2,agility:2,perception:1,charisma:1}},e.progression.xp=(e.progression.xp||0)+70;e.progression.level<10;){let t=pu(e.progression.level);if(e.progression.xp>=t)e.progression.xp-=t,e.progression.level+=1,e.progression.skillPoints=(e.progression.skillPoints||0)+1;else break}if(e.quests.bay_vat_cam&&e.quests.bay_vat_cam.status!==`locked`||(e.quests.bay_vat_cam={status:`active`,step:0,choices:[],rewarded:!1,startedDay:e.day||1}),e.daily?.tasks)for(let t of e.daily.tasks)t.id===`personal_quest`&&(t.title.includes(`im lặng`)||t.title.includes(`Lời đề nghị`))&&(t.done=!0);t=!0}}return e.quests.cam_do_im_lang?.status===`done`&&(e.quests.bay_vat_cam&&e.quests.bay_vat_cam.status!==`locked`||(e.quests.bay_vat_cam={status:`active`,step:0,choices:[],rewarded:!1,startedDay:e.day||1},t=!0)),t}function sd(e){return JSON.stringify({version:3,savedAt:Date.now(),state:e})}function cd(e,t){try{return ad(JSON.parse(e),t)}catch{return null}}var ld=class{constructor(e,t=rd){this.storage=e,this.key=t}save(e){if(!this.storage)return!1;try{return this.storage.setItem(this.key,sd(e)),!0}catch{return!1}}load(){if(!this.storage)return null;let e=this.storage.getItem(this.key);return e?cd(e,this.storage):null}exists(){return!!this.storage?.getItem(this.key)}hasBackup(){return!!this.storage?.getItem(id)}loadBackup(){return this.restoreBackup()}restoreBackup(){if(!this.storage)return null;let e=this.storage.getItem(id);if(!e)return null;let t=cd(e,this.storage);return t?(this.save(t),t):null}clear(){this.storage?.removeItem(this.key)}savedAt(){let e=this.storage?.getItem(this.key);if(!e)return null;try{return JSON.parse(e).savedAt??null}catch{return null}}},ud={disobedience:{type:`disobedience`,title:`Không rời khu vực sau giờ đóng cửa`,severity:1,reform:-2,penalty:`Được áp giải ra ngoài, cảnh cáo và trừ 2 điểm cải tạo.`,risk:`Ở lại khu vực đã đóng cửa: được đưa ra ngoài an toàn, −2 điểm cải tạo.`},late_rollcall:{type:`late_rollcall`,title:`Trễ điểm danh`,severity:1,reform:-3,morale:-5,penalty:`Cảnh cáo, trừ 3 điểm cải tạo.`,risk:`Có mặt sau 06:45 bị ghi trễ điểm danh: cảnh cáo, −3 điểm cải tạo.`},missed_rollcall:{type:`missed_rollcall`,title:`Vắng mặt điểm danh`,severity:2,reform:-6,morale:-8,penalty:`Cảnh cáo, trừ 6 điểm cải tạo.`,risk:`Không có mặt đến 07:00: vắng điểm danh, −6 điểm cải tạo.`},late_work:{type:`late_work`,title:`Trễ giờ lao động`,severity:1,reform:-2,penalty:`Nhắc nhở, trừ 2 điểm cải tạo.`,risk:`Chấm công sau 08:30: −2 điểm cải tạo.`},skip_work:{type:`skip_work`,title:`Bỏ lao động`,severity:2,reform:-6,morale:-5,penalty:`Mất toàn bộ tiền công ca sáng, trừ 6 điểm cải tạo.`,risk:`Không làm sản phẩm nào trong ca sáng: mất tiền công, −6 điểm cải tạo.`},curfew:{type:`curfew`,title:`Không về buồng đúng giờ`,severity:1,reform:-4,penalty:`Cảnh cáo, trừ 4 điểm cải tạo.`,risk:`Ngoài khu buồng giam lúc 21:30: −4 điểm cải tạo.`},restricted:{type:`restricted`,title:`Tự ý vào khu cấm`,severity:2,reform:-5,suspicion:15,morale:-8,penalty:`Bị đưa ra ngoài, trừ 5 điểm cải tạo, +15 nghi ngờ.`,risk:`Nếu camera hoặc cán bộ thấy: −5 điểm cải tạo, +15 nghi ngờ. Nếu không ai thấy: chỉ +5 nghi ngờ.`},theft:{type:`theft`,title:`Trộm cắp tài sản xưởng`,severity:2,reform:-10,suspicion:20,morale:-12,penalty:`Tịch thu tang vật, trừ 10 điểm cải tạo, cấm mua căn tin 2 ngày.`,risk:`Bị bắt quả tang: −10 điểm cải tạo, cấm căn tin 2 ngày. Không bị phát hiện: nghi ngờ tăng, chỉ bị xử khi có bằng chứng.`},contraband:{type:`contraband`,title:`Tàng trữ hàng cấm`,severity:2,reform:-6,suspicion:10,morale:-10,penalty:`Tịch thu, trừ 6 điểm cải tạo.`,risk:`Bị khám thấy hàng cấm: tịch thu, −6 điểm cải tạo.`},fight:{type:`fight`,title:`Gây thương tích cho người khác`,severity:3,reform:-12,morale:-15,penalty:`Trừ 12 điểm cải tạo, đưa ra phiên xem xét — có thể cộng 1–3 ngày án.`,risk:`HÀNH VI NGHIÊM TRỌNG: −12 điểm cải tạo và mở phiên xem xét tăng án (1–3 ngày).`}},dd={ao_tu:{id:`ao_tu`,name:`Bộ quần áo phạm nhân`,desc:`Áo sọc xanh trắng, số hiệu AP-0317.`,essential:!0},the_pham_nhan:{id:`the_pham_nhan`,name:`Thẻ phạm nhân`,desc:`Dùng để chấm công, mua căn tin. Không thể bỏ.`,essential:!0},chan_man:{id:`chan_man`,name:`Chăn màn, chiếu`,desc:`Đồ dùng cá nhân nhận khi nhập trại.`,essential:!0},mi_goi:{id:`mi_goi`,name:`Mì gói`,desc:`Tăng 25 độ no. Huy rất thích.`,price:8,use:{satiety:25,stamina:5},giftable:!0},banh_mi:{id:`banh_mi`,name:`Bánh mì ngọt`,desc:`Tăng 15 độ no, hồi 10 thể lực.`,price:5,use:{satiety:15,stamina:10},giftable:!0},tra_da:{id:`tra_da`,name:`Trà đá đóng chai`,desc:`Hồi 8 tinh thần, giải khát.`,price:6,use:{morale:8,stamina:5},giftable:!0},dau_gio:{id:`dau_gio`,name:`Dầu gió`,desc:`Hồi 10 sức khoẻ, hồi 4 tinh thần.`,price:10,use:{health:10,morale:4},giftable:!0},hop_mui_khoan:{id:`hop_mui_khoan`,name:`Hộp mũi khoan (đồ kho)`,desc:`Tài sản của xưởng. Mang theo là bằng chứng trộm cắp.`,quest:!0,contraband:!0},giay_no:{id:`giay_no`,name:`Giấy ghi nợ của Huy`,desc:`Lâm ép Huy ký nợ 40.000đ kèm lãi. Có thể làm bằng chứng.`,quest:!0},loi_khai_bay:{id:`loi_khai_bay`,name:`Lời khai của Chú Bảy`,desc:`Chú Bảy thấy đàn em của Lâm lén vào buồng 3 lúc rạng sáng.`,quest:!0},dao_lam:{id:`dao_lam`,name:`Lưỡi dao lam`,desc:`Hàng cấm. Ai đó đã giấu vào chiếu của bạn.`,contraband:!0},dep_bay:{id:`dep_bay`,name:`Đôi dép tổ ong của Chú Bảy`,desc:`Đã mòn gót, có khắc chữ "B7".`,quest:!0},thu_chi_mai:{id:`thu_chi_mai`,name:`Bức thư của Chị Mai`,desc:`Thư tay chị Mai gửi vào trại động viên em trai cố gắng cải tạo.`,essential:!0,quest:!0},thuoc_cam:{id:`thuoc_cam`,name:`Vỉ thuốc cảm`,desc:`Thuốc hạ sốt do Y sĩ An cấp phát. Hồi 15 sức khoẻ, hồi 6 tinh thần.`,price:12,use:{health:15,morale:6},giftable:!0},chai_thuoc_hen:{id:`chai_thuoc_hen`,name:`Lọ thuốc hen suyễn`,desc:`Lọ thuốc đặc trị của Chú Bảy bị đánh rơi gần góc khuất sau xưởng. Vật chứng.`,quest:!0},chung_chi_nghe:{id:`chung_chi_nghe`,name:`Chứng chỉ sơ cấp nghề điện`,desc:`Thầy Phúc ký xác nhận Minh hoàn thành khóa học an toàn điện cơ bản.`,essential:!0,quest:!0},so_tay_dieu_tra:{id:`so_tay_dieu_tra`,name:`Sổ tay ghi chép`,desc:`Ghi lại các mâu thuẫn, lời khai nhân chứng và giờ giấc camera.`,essential:!0},sach_phap_luat:{id:`sach_phap_luat`,name:`Cẩm nang pháp luật & cải tạo`,desc:`Sách mượn từ thư viện. Đọc giúp hồi 10 tinh thần và hiểu rõ quy tắc giảm án.`,use:{morale:10}},qua_luu_niem:{id:`qua_luu_niem`,name:`Khung ảnh gỗ tự làm`,desc:`Gia công tỉ mỉ tại xưởng để gửi tặng Chị Mai trong phòng thăm gặp.`,quest:!0,giftable:!0},thu_gioi_thieu_viec_lam:{id:`thu_gioi_thieu_viec_lam`,name:`Thư giới thiệu việc làm`,desc:`Thầy Phúc giới thiệu bạn tới xưởng cơ điện sau khi ra trại.`,essential:!0,quest:!0},manh_chung_tu_kho_7:{id:`manh_chung_tu_kho_7`,name:`Mảnh chứng từ kho 7`,desc:`Mảnh tài liệu kế toán bị cháy xém ghi nhận lệnh xuất hàng bất thường đêm xảy ra vụ án Kho số 7.`,essential:!0,quest:!0},manh_van_don_kho_7:{id:`manh_van_don_kho_7`,name:`Mảnh vận đơn kho 7`,desc:`Tem vận đơn thu thập từ kiện hàng niêm phong, chứng minh nguồn gốc lô hàng cấm tại xưởng.`,essential:!0,quest:!0}};function fd(e){return dd[e]?.name??e}var pd={inCellblock:!0,inRollcall:!1,sprinting:!1,moving:!1,resting:!1},md={bay:`Chú Bảy`,huy:`Huy`,lam:`Lâm`,lan:`Quản giáo Lan`,tung:`Cán bộ Tùng`,tu:`Anh Tư`,son:`Sơn`,khai:`Khải`,minh:`Minh`,mai:`Chị Mai`,phuc:`Thầy Phúc`,an:`Y sĩ An`},hd=class{constructor(e){this.listeners={},this.staminaWarned=!1,this.s=e??_u(),od(this.s),this.s.daily.tasks&&this.s.daily.tasks.length!==0||(this.s.daily.tasks=qu(this.s))}checkDailyTasks(e){if(!this.s.daily.tasks||this.s.daily.tasks.length===0)return;let t=!1;for(let n of this.s.daily.tasks){if(n.done)continue;let r=!1;e.taskId&&n.id===e.taskId?r=!0:e.category===`duty`&&n.category===`duty`?(n.id===`duty_rollcall`&&(this.s.daily.rollcall===`ok`||this.s.daily.rollcall===`late`)&&(r=!0),n.id===`duty_clockin`&&this.s.daily.workClockedIn&&(r=!0),n.id===`duty_work_units`&&this.s.daily.workUnits>=3&&(r=!0),n.id===`duty_curfew`&&this.s.daily.curfew===`ok`&&(r=!0)):e.category===`relation`&&n.category===`relation`?e.npcId&&n.targetNpc===e.npcId&&(r=!0):e.category===`personal`&&n.category===`personal`&&(n.id===`personal_exercise`&&this.s.daily.exercise>0&&(r=!0),n.id===`personal_reading`&&this.s.flags?.read_book_today&&(r=!0),n.id===`personal_quest`&&(r=!0)),r&&(n.done=!0,t=!0,this.gainXp(10,`Hoàn thành việc ngày: ${n.title}`),this.notify(`✔ Hoàn thành việc ngày: ${n.title} (+10 XP)`,`good`))}t&&(this.s.daily.tasks.every(e=>e.done)&&!this.s.daily.allTasksBonusAwarded&&(this.s.daily.allTasksBonusAwarded=!0,this.addReform(1,`Hoàn thành tất cả 3 việc hôm nay`),this.notify(`🎉 Xuất sắc! Hoàn thành cả 3 việc hôm nay (+1 điểm cải tạo)`,`good`)),this.commit())}on(e,t){(this.listeners[e]??=[]).push(t)}emit(e,...t){for(let n of this.listeners[e]??[])n(...t)}notify(e,t=`info`){this.emit(`notice`,e,t)}commit(){this.emit(`save`)}event(e){this.s.daily.events.push(`${lu(this.s.minute)} ${e}`)}block(){return su(this.s.minute)}has(e,t=1){return(this.s.inventory[e]??0)>=t}rel(e){return this.s.relations[e]?.value??0}flag(e){return this.s.flags[e]}setFlag(e,t){this.s.flags[e]=t}qStatus(e){return this.s.quests[e]?.status??`locked`}qObj(e,t){return!!this.s.flags[`${e}:${t}`]}qBranch(e){return this.s.flags[`${e}:branch`]||``}canteenBanned(){return(this.s.flags.canteenBanUntil??0)>=this.s.day}addClue(e,t){this.s.clues.includes(e)||(this.s.clues.push(e),this.notify(`Manh mối mới: ${t}`,`good`),this.event(`Thu thập manh mối: ${t}`),this.commit())}getReviewPeriod(e=this.s.day){return Math.floor((e-1)/4)}hasPerk(e){switch(e){case`library_borrow`:return this.qStatus(`lop_nghe_dau`)===`done`;case`bay_excuse`:return this.rel(`bay`)>=20;case`huy_work`:return this.rel(`huy`)>=20;case`an_heal`:return this.rel(`an`)>=15;case`canteen_discount`:return this.s.stats.reform>=30}}canBayExcuse(){return this.hasPerk(`bay_excuse`)?this.s.flags.bay_excused_period!==this.getReviewPeriod():!1}useBayExcuse(e){if(!this.canBayExcuse())return!1;if(this.s.flags.bay_excused_period=this.getReviewPeriod(),this.s.flags.bay_excused_day=this.s.day,e===`rollcall`){this.s.daily.rollcall=`excused`;let e=this.s.violations.find(e=>e.day===this.s.day&&e.id===`missed_rollcall`&&e.status!==`overturned`);e&&(e.status=`overturned`),this.notify(`Chú Bảy đã đứng ra xin phép điểm danh giúp bạn (đặc quyền quan hệ, 1 lần/kỳ xét).`,`good`)}else{this.s.daily.work=`excused`;let e=this.s.violations.find(e=>e.day===this.s.day&&e.id===`skip_work`&&e.status!==`overturned`);e&&(e.status=`overturned`),this.notify(`Chú Bảy đã bảo lãnh xin phép nghỉ ca lao động giúp bạn (đặc quyền quan hệ, 1 lần/kỳ xét).`,`good`)}return this.commit(),!0}canAnHeal(){return this.hasPerk(`an_heal`)?this.s.flags.an_healed_day!==this.s.day:!1}useAnHeal(){return this.hasPerk(`an_heal`)?this.canAnHeal()?(this.s.flags.an_healed_day=this.s.day,this.addStat(`health`,25),this.addStat(`stamina`,35),this.addStat(`morale`,10),this.notify(`Y sĩ An khám và cấp thuốc bồi dưỡng: +25 Máu, +35 Thể lực, +10 Tinh thần.`,`good`),this.commit(),{ok:!0}):{ok:!1,reason:`Hôm nay Y sĩ An đã phát thuốc bồi dưỡng cho bạn rồi (1 lần/ngày).`}:{ok:!1,reason:`Cần đạt quan hệ Y sĩ An ≥ 15 để được khám và cấp thuốc miễn phí.`}}getPerks(){let e=this.getReviewPeriod(),t=this.s.flags.bay_excused_period===e,n=this.s.flags.an_healed_day===this.s.day;return[{id:`library_borrow`,name:`Mượn sách thư viện`,source:`Nhiệm vụ "Bài học nghề đầu tiên"`,unlocked:this.hasPerk(`library_borrow`),desc:`Mượn cẩm nang pháp luật & tài liệu kỹ thuật tại giá sách thư viện.`,detail:`Được phép mượn và đọc sách thư viện để giảm căng thẳng và tăng điểm cải tạo.`,usageStatus:this.hasPerk(`library_borrow`)?`Đã kích hoạt`:`Cần hoàn thành "Bài học nghề đầu tiên"`},{id:`bay_excuse`,name:`Bảo lãnh xin phép — Chú Bảy`,source:`Quan hệ Chú Bảy (${this.rel(`bay`)}/20)`,unlocked:this.hasPerk(`bay_excuse`),desc:`Xin phép vắng mặt khi lỡ điểm danh hoặc ca làm (1 lần/kỳ xét 4 ngày).`,detail:`Chuyển trạng thái nghĩa vụ lỡ thành "excused" hợp lệ, không bị tính vi phạm.`,usageStatus:this.hasPerk(`bay_excuse`)?t?`Đã dùng trong kỳ xét ${e+1}`:`Khả dụng trong kỳ này`:`Cần quan hệ Chú Bảy ≥ 20`},{id:`huy_work`,name:`Phụ việc ca xưởng — Huy`,source:`Quan hệ Huy (${this.rel(`huy`)}/20)`,unlocked:this.hasPerk(`huy_work`),desc:`Làm chung ca xưởng, Huy phụ lắp thêm 1 sản phẩm vào chỉ tiêu.`,detail:`Khi hoàn thành sản phẩm trong ca sáng, Huy hỗ trợ thêm +1 sản phẩm chỉ tiêu.`,usageStatus:this.hasPerk(`huy_work`)?`Đang kích hoạt mỗi ca sáng`:`Cần quan hệ Huy ≥ 20`},{id:`an_heal`,name:`Khám chữa miễn phí — Y sĩ An`,source:`Quan hệ Y sĩ An (${this.rel(`an`)}/15)`,unlocked:this.hasPerk(`an_heal`),desc:`Khám bệnh và nhận thuốc bồi dưỡng thể lực miễn phí (1 lần/ngày).`,detail:`Hồi phục +25 Máu, +35 Thể lực và +10 Tinh thần tại Phòng y tế.`,usageStatus:this.hasPerk(`an_heal`)?n?`Đã dùng hôm nay`:`Khả dụng hôm nay`:`Cần quan hệ Y sĩ An ≥ 15`},{id:`canteen_discount`,name:`Trợ giá Căn tin 10%`,source:`Điểm cải tạo (${this.s.stats.reform}/30)`,unlocked:this.hasPerk(`canteen_discount`),desc:`Giảm 10% giá tất cả hàng hóa tại Căn tin nhờ chấp hành cải tạo tốt.`,detail:`Áp dụng tự động cho mọi món đồ khi mua tại quầy căn tin.`,usageStatus:this.hasPerk(`canteen_discount`)?`Đang giảm giá 10%`:`Cần điểm cải tạo ≥ 30`}]}gainXp(e,t){if(e<=0)return{leveledUp:!1,newLevel:this.s.progression.level};this.s.progression.xp+=e;let n=!1;for(;this.s.progression.level<10;){let e=pu(this.s.progression.level);if(this.s.progression.xp>=e)this.s.progression.xp-=e,this.s.progression.level+=1,this.s.progression.skillPoints+=1,n=!0,this.notify(`Chúc mừng! Bạn đã đạt Cấp ${this.s.progression.level}! (+1 điểm kỹ năng)`,`good`),this.emit(`levelUp`,this.s.progression.level);else break}return t&&this.notify(`+${e} XP (${t})`,`info`),this.commit(),{leveledUp:n,newLevel:this.s.progression.level}}spendSkillPoint(e){return this.s.progression.skillPoints<=0?(this.notify(`Không đủ điểm kỹ năng để nâng cấp.`,`warn`),!1):this.s.progression.attrs[e]>=5?(this.notify(`Thuộc tính này đã đạt cấp tối đa (5/5).`,`warn`),!1):(--this.s.progression.skillPoints,this.s.progression.attrs[e]+=1,this.notify(`Đã tăng ${{endurance:`Bền bỉ`,agility:`Khéo léo`,perception:`Quan sát`,charisma:`Giao tiếp`}[e]} lên ${this.s.progression.attrs[e]}/5!`,`good`),this.commit(),!0)}applyFlashbackChoice(e){this.s.profile.flashbackChoice=e,e===`keep_doc`?(this.addClue(`chung_tu_goc_kho_7`,`Mảnh chứng từ gốc nhặt được trước khi Kho số 7 bốc cháy, có chữ ký người gửi.`),this.giveItem(`manh_chung_tu_kho_7`,1),this.notify(`Đã cất giữ Mảnh chứng từ xuất kho số 7.`,`quest`)):e===`help_victim`?(this.changeRel(`bay`,10,`Chú Bảy biết chuyện Minh từng cứu người trong đám cháy kho`),this.addStat(`morale`,15),this.notify(`Hành động cứu người trong đám cháy giúp bạn giữ được lương tri và củng cố tinh thần.`,`good`)):e===`chase_contact`&&(this.addClue(`nhan_dang_ke_cam_dau`,`Nhìn rõ bóng kẻ thuê chở hàng có vết sẹo ở cổ và đi chiếc xe tải màu xanh rêu.`),this.notify(`Đã ghi nhớ nhân dạng kẻ cầm đầu vụ việc.`,`quest`)),this.commit()}applyProfile(e){this.s.profile={...e};let t=iu[e.background]||iu.mechanic;this.s.progression.attrs={endurance:1+(t.bonusAttrs.endurance||0),agility:1+(t.bonusAttrs.agility||0),perception:1+(t.bonusAttrs.perception||0),charisma:1+(t.bonusAttrs.charisma||0)},this.commit()}addStat(e,t){e===`money`?(this.s.stats.money=Math.max(0,Math.round((this.s.stats.money+t)*10)/10),this.checkMoneyObjective()):e===`hunger`?this.s.stats.satiety=mu(this.s.stats.satiety-t):e===`stress`?this.s.stats.morale=mu(this.s.stats.morale-t):this.s.stats[e]=mu((this.s.stats[e]??0)+t),this.s.stats.hunger=100-this.s.stats.satiety,this.s.stats.stress=100-this.s.stats.morale}addReform(e,t,n=!1){let r=e;if(n&&r>0&&(r=Math.max(0,Math.min(r,8-this.s.daily.reformGained)),this.s.daily.reformGained+=r,r===0))return this.notify(`Đã đạt trần điểm cải tạo từ hoạt động lặp lại hôm nay.`,`info`),0;let i=this.s.stats.reform;this.s.stats.reform=mu(i+r);let a=this.s.stats.reform-i;return a!==0&&this.notify(`${a>0?`+`:``}${a} điểm cải tạo: ${t}`,a>0?`good`:`bad`),i<30&&this.s.stats.reform>=30&&this.notify(`⭐ ĐẶC QUYỀN MỚI: Điểm cải tạo đạt 30 — Giảm giá 10% toàn bộ mặt hàng Căn tin!`,`good`),a}changeRel(e,t,n){let r=this.s.relations[e];if(!r)return;let i=r.value;r.value=Math.max(-100,Math.min(100,r.value+t)),r.met=!0,n&&r.memories.push({day:this.s.day,text:n}),t!==0&&this.notify(`${md[e]} ${t>0?`+`:``}${t} quan hệ`,t>0?`good`:`bad`),this.checkPerkUnlocked(e,i,r.value),this.checkDailyTasks({category:`relation`,npcId:e})}checkPerkUnlocked(e,t,n){e===`bay`&&t<20&&n>=20?this.notify(`⭐ ĐẶC QUYỀN MỚI: Chú Bảy nhận bảo lãnh xin phép vắng mặt (1 lần/kỳ xét)!`,`good`):e===`huy`&&t<20&&n>=20?this.notify(`⭐ ĐẶC QUYỀN MỚI: Huy hỗ trợ phụ việc làm ca xưởng (+1 sản phẩm/ca)!`,`good`):e===`an`&&t<15&&n>=15&&this.notify(`⭐ ĐẶC QUYỀN MỚI: Y sĩ An nhận khám và cấp thuốc miễn phí (1 lần/ngày)!`,`good`)}meet(e){let t=this.s.relations[e];t&&!t.met&&(t.met=!0,this.commit()),this.checkDailyTasks({category:`relation`,npcId:e})}dailyTalk(e){let t=this.s.relations[e];if(!t||t.lastTalkDay===this.s.day)return!1;if(t.lastTalkDay=this.s.day,t.value>=-10){let n=t.value;t.value=Math.min(100,t.value+1),this.checkPerkUnlocked(e,n,t.value),this.addStat(`morale`,3)}return this.checkDailyTasks({category:`relation`,npcId:e}),!0}giveItem(e,t=1){this.s.inventory[e]=(this.s.inventory[e]??0)+t,this.notify(`Nhận: ${fd(e)}${t>1?` ×`+t:``}`,`good`)}takeItem(e,t=1){return this.has(e,t)?(this.s.inventory[e]-=t,this.s.inventory[e]<=0&&delete this.s.inventory[e],!0):!1}canteenOpen(){return this.s.minute>=990&&this.s.minute<1260}itemPrice(e){let t=dd[e];if(!t?.price)return 0;let n=au[this.s.profile.difficulty]?.canteenPriceMultiplier??1,r=this.hasPerk(`canteen_discount`)?.9:1;return Math.max(1,Math.round(t.price*n*r))}purchaseError(e){if(!dd[e]?.price)return`Mặt hàng không bán.`;if(!this.canteenOpen())return`Căn tin chỉ mở 16:30–21:00.`;if(this.canteenBanned())return`Bạn đang bị cấm mua căn tin đến hết ngày ${this.s.flags.canteenBanUntil}.`;let t=this.itemPrice(e);return this.s.stats.money<t?`Không đủ tiền (cần ${uu(t)}).`:null}buy(e){let t=this.purchaseError(e);if(t)return t;let n=this.itemPrice(e);return this.addStat(`money`,-n),this.giveItem(e),e===`mi_goi`&&this.qStatus(`mi_cho_huy`)===`active`&&this.completeObjective(`mi_cho_huy`,`mua`),this.commit(),null}useItem(e){let t=dd[e];if(!t)return`Không rõ vật phẩm.`;if(t.essential||t.quest)return`Vật phẩm thiết yếu/nhiệm vụ — không thể dùng hay bỏ.`;if(!t.use)return`Không thể dùng vật phẩm này.`;if(!this.takeItem(e))return`Không có vật phẩm.`;let n=t.use;return n.satiety?this.addStat(`satiety`,n.satiety):n.hunger&&this.addStat(`satiety`,-n.hunger),n.morale?this.addStat(`morale`,n.morale):n.stress&&this.addStat(`morale`,-n.stress),n.stamina&&this.addStat(`stamina`,n.stamina),n.health&&this.addStat(`health`,n.health),this.notify(`Đã dùng ${t.name}.`,`info`),this.commit(),null}gift(e,t){let n=dd[t],r=this.s.relations[e];if(!n?.giftable||!r)return`Không thể tặng vật này.`;if(e===`lan`||e===`tung`)return`Cán bộ không nhận quà của phạm nhân.`;if(r.lastGiftDay===this.s.day)return`${md[e]} đã nhận quà hôm nay rồi.`;if(!this.takeItem(t))return`Không có vật phẩm.`;r.lastGiftDay=this.s.day;let i=e===`huy`&&t===`mi_goi`||e===`bay`&&t===`tra_da`||e===`lam`&&t===`dau_gio`;return this.changeRel(e,i?5:2),this.commit(),null}recordViolation(e,t,n,r={}){let i=`${e}:${t}`;if(this.s.violations.some(e=>e.key===i))return null;let a=ud[e];if(!a)return null;let o=!!r.grace,s={id:`V${this.s.nextId++}`,key:i,type:e,title:a.title+(o?` (nhắc nhở người mới)`:``),day:this.s.day,minute:Math.floor(this.s.minute),evidence:n,penalty:o?`Nhắc nhở, không trừ điểm (ngày đầu nhập trại).`:a.penalty+(r.extra?` `+r.extra:``),reformDelta:0,severity:o?0:a.severity,status:`active`,appealed:!1,appealTag:r.appealTag};if(!o){let e=this.s.stats.reform;this.s.stats.reform=mu(e+a.reform),s.reformDelta=this.s.stats.reform-e,a.suspicion&&this.addStat(`suspicion`,a.suspicion),a.morale?this.addStat(`morale`,a.morale):a.stress&&this.addStat(`morale`,-a.stress),this.s.violations.filter(e=>e.status!==`overturned`&&e.severity>0&&e.day>this.s.day-5).length>=2&&(this.s.flags.canteenBanUntil=Math.max(this.s.flags.canteenBanUntil??0,this.s.day+1),s.penalty+=` Tái phạm lần 3 trong 5 ngày → kỷ luật: cấm căn tin đến hết ngày mai.`)}return this.s.violations.push(s),this.event(`Vi phạm: ${s.title}`),this.emit(`violation`,s),this.commit(),s}appealCheck(e){return e.appealTag===`planted`?this.has(`loi_khai_bay`)?{ok:!0,reason:`Lời khai của Chú Bảy xác nhận đàn em của Lâm lén vào buồng 3 lúc rạng sáng.`}:this.rel(`huy`)>=30?{ok:!0,reason:`Huy đứng ra làm chứng: lưỡi dao không phải của bạn.`}:{ok:!1,reason:`Chưa có nhân chứng hay vật chứng cho thấy bạn bị gài. Hãy hỏi những người ở cùng buồng.`}:e.appealTag===`newcomer`?{ok:!0,reason:`Ngày đầu nhập trại chưa được phổ biến đầy đủ.`}:{ok:!1,reason:`Hồ sơ có bằng chứng rõ ràng và bạn không đưa ra được căn cứ mới.`}}appeal(e){let t=this.s.violations.find(t=>t.id===e);if(!t)return{ok:!1,reason:`Không tìm thấy hồ sơ.`};if(t.appealed||t.status!==`active`)return{ok:!1,reason:`Hồ sơ này đã được giải trình.`};t.appealed=!0;let n=this.appealCheck(t);return n.ok?(t.status=`overturned`,this.s.stats.reform=mu(this.s.stats.reform-t.reformDelta),this.addStat(`suspicion`,-15),this.addStat(`morale`,10),this.notify(`Khiếu nại thành công: hủy vi phạm "${t.title}", hoàn ${-t.reformDelta} điểm.`,`good`),t.appealTag===`planted`&&(this.s.flags.lam_exposed=!0,this.changeRel(`lan`,8,`Minh chứng minh được mình bị gài hàng cấm`),this.changeRel(`lam`,-10,`Bị Minh vạch trò gài dao lam`))):(t.status=`upheld`,this.notify(`Khiếu nại không được chấp nhận — giữ nguyên quyết định.`,`warn`)),this.event(`Khiếu nại ${t.title}: ${n.ok?`thành công`:`giữ nguyên`}`),this.commit(),n}startHearing(e){this.s.flags[`hearing:${e.id}`]||(this.s.hearing=e,this.commit(),this.emit(`hearing`,e))}resolveHearing(e){let t=this.s.hearing;if(!t)return{days:0,text:``};let n=t.baseDays,r=``;e===`confess`?(n=Math.max(1,t.baseDays-1),r=`Bạn thành khẩn nhận lỗi. Hội đồng ghi nhận thái độ, giảm mức đề nghị.`,this.addReform(2,`Thành khẩn tại phiên xem xét`)):e===`explain`?this.s.flags.lam_threatened&&(this.rel(`huy`)>=20||this.rel(`bay`)>=20)?(n=0,r=`Nhân chứng xác nhận Lâm đe dọa và ra tay trước. Hội đồng không cộng án, nhưng vi phạm vẫn được ghi nhận.`,this.addReform(6,`Giải trình có nhân chứng`)):(n=t.baseDays,r=`Không có nhân chứng xác nhận lời giải trình. Giữ nguyên mức đề nghị.`):r=`Bạn im lặng. Hội đồng quyết định theo hồ sơ.`;let i=n>0?td(this.s,n,t.title,this.s.day):0;return n>0&&i<n&&(r+=` (Đã chạm trần cộng án — chỉ cộng ${i} ngày.)`),r+=i>0?` Kết quả: cộng ${i} ngày án.`:` Kết quả: không cộng án.`,this.s.flags[`hearing:${t.id}`]=!0,this.s.hearing=null,this.event(`Phiên xem xét: ${t.title} → +${i} ngày`),this.notify(r,i>0?`bad`:`good`),this.commit(),{days:i,text:r}}startQuest(e){let t=this.s.quests[e];if(t&&t.status!==`locked`)return!1;this.s.quests[e]={status:`active`,step:0,rewarded:!1,startedDay:this.s.day,choices:[]};let n=Bu[e];return n?.type===`side`?(this.notify(`🌟 NHIỆM VỤ PHỤ MỚI: ${n.title}! Xem trong Nhật ký hoặc bấm vào Thanh nhiệm vụ.`,`good`),this.emit(`sideQuestUnlocked`,e)):this.notify(`Nhiệm vụ mới: ${n?.title??e}`,`quest`),this.event(`Nhận nhiệm vụ "${n?.title??e}"`),e===`mi_cho_huy`&&(this.s.flags[`mi_cho_huy:deadline`]=this.s.day+1),this.commit(),!0}objectiveBlockReason(e,t){let n=Bu[e];if(!n)return`Mục tiêu không tồn tại.`;if(this.qStatus(e)!==`active`)return this.qStatus(e)===`done`?`Nhiệm vụ "${n.title}" đã hoàn thành.`:`Chưa mở nhiệm vụ "${n.title}". ${n.requirement}`;if(e===`sach_thu_vien`&&t===`muon_sach`&&!this.hasPerk(`library_borrow`))return`Chưa thể mượn sách: Cần hoàn thành "Bài học nghề đầu tiên" để nhận chứng chỉ nghề.`;let r=n.objectives.findIndex(e=>e.id===t);if(r<0)return`Bước nhiệm vụ không tồn tại.`;let i=n.objectives[r],a=this.qBranch(e);if(i.branch&&i.branch!==a)return a?`Bước này không thuộc phương án bạn đã chọn.`:`Hãy gặp người giao nhiệm vụ để lựa chọn phương án trước.`;for(let t=0;t<r;t++){let r=n.objectives[t];if(!(r.optional||r.branch&&r.branch!==a)&&!this.s.flags[`${e}:${r.id}`])return`Cần hoàn thành bước trước: ${r.text}`}return null}completeObjective(e,t){let n=`${e}:${t}`;if(this.s.flags[n]||this.qStatus(e)===`done`)return!1;let r=this.objectiveBlockReason(e,t);if(r)return this.notify(r,`warn`),!1;this.s.flags[n]=!0;let i=Bu[e].objectives.find(e=>e.id===t);return i&&this.notify(`✔ ${i.text}`,`quest`),this.checkDailyTasks({category:`personal`}),this.checkQuest(e),this.commit(),!0}chooseBranch(e,t,n){if(this.qStatus(e)!==`active`||this.qBranch(e)||!Bu[e]?.branches?.[t])return!1;let r=Bu[e].objectives.find(e=>e.id===`quyet_dinh`||e.id===`quyet_dinh_im_lang`||e.id.startsWith(`quyet_dinh`)),i=r?r.id:`quyet_dinh`,a=this.objectiveBlockReason(e,i);if(a)return this.notify(a,`warn`),!1;this.s.flags[`${e}:branch`]=t;let o=Bu[e].branches?.[t]??t;return this.s.quests[e]?.choices.push(o),this.event(`Quyết định: ${o}`),n&&this.s.quests[e]&&(this.s.quests[e].outcome=n),this.completeObjective(e,i),e===`mon_no`&&t===`pay`&&this.checkMoneyObjective(),this.commit(),!0}checkQuest(e){let t=Bu[e],n=this.qBranch(e),r=t.objectives.filter(e=>!e.optional&&(!e.branch||e.branch===n));(!t.branches||n)&&r.every(t=>this.s.flags[`${e}:${t.id}`])&&this.finishQuest(e,`done`)}finishQuest(e,t,n){let r=this.s.quests[e];if(!r)return;if(r.status===t){n&&(!r.outcome||r.outcome===Bu[e]?.branches?.[this.qBranch(e)])&&(r.outcome=n,this.commit());return}if(r.status!==`active`)return;let i=Bu[e],a=this.qBranch(e);if(t===`done`){i?.branches&&!a&&e===`cam_do_im_lang`&&(a=this.s.flags.accepted_lam_bribe?`accept`:`refuse`,this.s.flags[`${e}:branch`]=a);let t=i.objectives.find(t=>!t.optional&&(!t.branch||t.branch===a)&&!this.s.flags[`${e}:${t.id}`]);if(t||i.branches&&!a){this.notify(t?`Chưa thể hoàn thành "${i.title}". Cần làm trước: ${t.text}`:`Cần lựa chọn phương án giải quyết nhiệm vụ trước.`,`warn`);return}}if(r.status=t,r.outcome=n??r.outcome??(i?.branches&&a?i.branches[a]:void 0),r.rewarded||(r.rewarded=!0,this.grantQuestResult(e,t)),this.notify(`${t===`done`?`Hoàn thành`:`Thất bại`}: ${Bu[e].title}${r.outcome?` — `+r.outcome:``}`,t===`done`?`quest`:`bad`),this.event(`${t===`done`?`Hoàn thành`:`Thất bại`} nhiệm vụ "${Bu[e].title}"`),t===`done`)this.checkDailyTasks({category:`personal`,taskId:`personal_quest`});else if(t===`failed`){let t=Vu.filter(t=>t!==e&&Bu[t].type===`main`&&this.qStatus(t)===`active`).map(e=>`"${Bu[e].title}"`);if(t.length>0)this.notify(`👉 Làm tiếp: ${t.join(`, `)}`,`info`);else{let e=Vu.filter(e=>Bu[e].type===`side`&&this.qStatus(e)===`active`).map(e=>`"${Bu[e].title}"`);e.length>0?this.notify(`👉 Làm tiếp nhiệm vụ phụ: ${e.join(`, `)} hoặc hoàn thành Việc hôm nay.`,`info`):this.notify(`👉 Làm tiếp: Mở "Việc hôm nay" để hoàn thành 3 việc trong ngày và duy trì cải tạo tốt.`,`info`)}}this.commit()}grantQuestResult(e,t){let n=this.s.quests[e],r=Bu[e];switch(r?.xp&&t===`done`&&this.gainXp(r.xp,r.title),e){case`nhap_trai`:this.addReform(3,`Hoàn thành nhập trại`),this.changeRel(`lan`,5),this.startQuest(`ca_dau`),this.startQuest(`dep_bay`),this.startQuest(`mi_cho_huy`),this.startQuest(`lao_dong_phu`);break;case`ca_dau`:this.addReform(4,`Ca lao động đầu tiên`),this.changeRel(`bay`,8,`Minh làm tròn ca đầu tiên như chú dặn`),this.startQuest(`mon_no`);break;case`mon_no`:{let r=this.qBranch(e);if(t===`failed`)this.changeRel(`huy`,-5,`Minh bị bắt khi làm việc cho Lâm vì mình`),this.changeRel(`lam`,-10,`Minh làm hỏng việc, Lâm phủi tay`),this.s.flags.huy_debt_open=!0;else if(r===`steal`)n.outcome=`Đã trộm đồ cho Lâm`,this.addStat(`money`,30),this.addStat(`suspicion`,10),this.changeRel(`lam`,20,`Minh "làm được việc" cho Lâm`),this.changeRel(`huy`,10,`Minh liều mình xóa nợ cho Huy`),this.s.flags.stole_for_lam=!0,this.s.flags.workshop_audit_day=this.s.day+1;else if(r===`pay`)n.outcome=`Trả nợ thay Huy bằng tiền sạch`,this.changeRel(`huy`,25,`Minh bỏ tiền túi trả nợ cho Huy`),this.changeRel(`lam`,-5,`Minh từ chối làm việc cho Lâm nhưng trả đủ tiền`),this.addReform(2,`Giải quyết mâu thuẫn không vi phạm`),this.s.flags.huy_repay_day=this.s.day+2;else if(r===`report`){let e=!!this.s.flags.report_with_note;n.outcome=e?`Báo cáo có bằng chứng — Lâm bị xử lý`:`Báo cáo khi chưa có bằng chứng`,e?(this.addReform(6,`Tố giác hành vi ép nợ có bằng chứng`),this.changeRel(`lan`,15,`Minh báo cáo vụ ép nợ kèm bằng chứng`),this.changeRel(`lam`,-40,`Minh "chỉ điểm" mình với quản giáo`),this.s.flags.huy_gave_note?this.changeRel(`huy`,5,`Minh giúp Huy thoát nợ bằng cách đàng hoàng`):this.changeRel(`huy`,-15,`Minh lấy giấy nợ đi báo mà không hỏi`),this.s.flags.lam_sanctioned=!0,this.s.flags.huy_debt_cleared=!0):(this.addReform(2,`Báo cáo hành vi ép nợ`),this.changeRel(`lan`,5,`Minh báo cáo nhưng chưa có bằng chứng`),this.changeRel(`lam`,-25,`Bị quản giáo gọi lên hỏi vì Minh`),this.changeRel(`huy`,-8,`Minh làm lớn chuyện khi chưa hỏi ý`)),this.s.flags.lam_revenge_day=this.s.day+1}else r===`negotiate`?(n.outcome=`Thương lượng thành công với Lâm`,this.addReform(4,`Dùng kỹ năng đàm phán giải quyết tranh chấp`),this.changeRel(`huy`,20,`Minh giải quyết êm đẹp món nợ cho mình`),this.changeRel(`lam`,10,`Nể phục bản lĩnh đàm phán của Minh`)):r===`fight`&&(n.outcome=`Dùng bạo lực với Lâm`,this.changeRel(`huy`,5,`Minh ra tay vì mình — nhưng Huy sợ liên lụy`),this.changeRel(`lam`,-50,`Bị Minh đánh trước mặt cả sân`),this.s.flags.huy_debt_cleared=!0);this.s.chapter=Math.max(this.s.chapter,2),this.startQuest(`lop_nghe_dau`),this.startQuest(`nghi_an_thuoc`),this.startQuest(`phong_tham_gap`),this.notify(`Bắt đầu Chương 2 — Chọn chỗ đứng! (Mở Lớp học nghề, Phòng y tế & Thăm gặp)`,`quest`);break}case`lop_nghe_dau`:this.addReform(4,`Bài học nghề đầu tiên`),this.giveItem(`chung_chi_nghe`),this.changeRel(`phuc`,10,`Minh hoàn thành bài học nghề an toàn`),this.s.skills.vocationalExam++,this.startQuest(`sach_thu_vien`),this.notify(`⭐ ĐẶC QUYỀN MỚI: Đã nhận chứng chỉ nghề — Mở quyền mượn sách thư viện!`,`good`);break;case`nghi_an_thuoc`:this.addReform(6,`Tìm lại thuốc hen cứu Chú Bảy`),this.changeRel(`bay`,15,`Minh tìm lại lọ thuốc hen cứu mạng chú`),this.changeRel(`an`,12,`Minh hỗ trợ tìm ra vật chứng y tế`),this.addClue(`thuoc_hen_sau_xuong`,`Lọ thuốc hen của Chú Bảy rơi gần góc sau xưởng nơi đàn em Lâm tụ tập.`),this.startQuest(`manh_moi_kho_7`),this.startQuest(`phu_y_te`);break;case`manh_moi_kho_7`:this.addReform(4,`Tìm ra manh mối kho số 7`),this.addClue(`van_don_kho_7`,`Mảnh vận đơn dán trên kiện hàng cũ ở kho xưởng mang mã KHO-07-AP.`),this.giveItem(`manh_van_don_kho_7`,1),this.s.chapter=Math.max(this.s.chapter,3),this.startQuest(`doi_chieu_chung_tu`),this.startQuest(`la_thu_que_nha`),this.startQuest(`ren_luyen_the_chat`),this.notify(`Bắt đầu Chương 3 — Giá của sự thật! (Mở điều tra sổ sách & thử thách)`,`quest`);break;case`phong_tham_gap`:this.changeRel(`mai`,15,`Minh hứa với chị sẽ cải tạo tốt để về sớm`),this.addStat(`stress`,-20),this.addStat(`money`,25),this.addReform(3,`Được gia đình động viên cải tạo`);break;case`sach_thu_vien`:this.addReform(2,`Chăm chỉ đọc sách pháp luật`),this.addStat(`stress`,-10),this.changeRel(`phuc`,5,`Minh tự giác mượn sách cẩm nang`);break;case`phu_y_te`:this.addReform(3,`Hỗ trợ việc phòng y tế`),this.giveItem(`thuoc_cam`,1),this.changeRel(`an`,8,`Minh nhiệt tình giúp phân loại thuốc`);break;case`dep_bay`:this.changeRel(`bay`,10,`Minh tìm lại đôi dép con gái gửi cho chú`),this.addStat(`stress`,-5);break;case`mi_cho_huy`:t===`done`?this.changeRel(`huy`,8,`Minh giữ lời mua mì cho Huy`):this.changeRel(`huy`,-8,`Minh hứa mua mì rồi quên`);break;case`lao_dong_phu`:this.addReform(2,`Tăng cường lao động ca chiều`),this.addStat(`money`,10);break;case`doi_chieu_chung_tu`:this.addReform(5,`Đối chiếu làm rõ chữ ký chứng từ`),this.changeRel(`phuc`,10,`Thầy Phúc khen Minh tinh mắt và cẩn trọng`),this.addClue(`chu_ky_nguoi_nhan`,`Chữ ký trên vận đơn kho 7 trùng khớp chữ ký người liên hệ với Lâm.`),this.startQuest(`cam_do_im_lang`),this.startQuest(`sua_quat_phong_hoc`);break;case`cam_do_im_lang`:this.startQuest(`bay_vat_cam`);break;case`bay_vat_cam`:this.addReform(8,`Minh oan bẫy vật cấm buồng giam`),this.changeRel(`lan`,10,`Quản giáo Lan ghi nhận Minh bình tĩnh giải trình hợp lệ`),this.changeRel(`tung`,15,`Cán bộ Tùng đánh giá cao sự trung thực`),this.s.chapter=Math.max(this.s.chapter,4),this.startQuest(`ho_so_giai_trinh`),this.startQuest(`loi_hua_chu_bay`),this.startQuest(`truyen_nghe_cho_huy`),this.startQuest(`chia_tay_thay_phuc`),this.startQuest(`kiem_tra_suc_khoe`),this.notify(`Bắt đầu Chương 4 — Ngày trở về! (Chuẩn bị hồ sơ đặc xá & hoàn tất lời hứa)`,`quest`);break;case`la_thu_que_nha`:this.changeRel(`mai`,15,`Minh gửi thư hồi âm ấm áp cho mẹ và chị`),this.addStat(`stress`,-20);break;case`ren_luyen_the_chat`:this.changeRel(`bay`,5,`Chú Bảy khen Minh chịu khó rèn luyện`),this.addStat(`stress`,-15),this.addStat(`health`,5),this.addStat(`stamina`,10);break;case`sua_quat_phong_hoc`:this.addReform(4,`Sửa chữa quạt phòng học công ích`),this.addStat(`money`,15),this.changeRel(`phuc`,15,`Thầy Phúc cảm kích tay nghề sửa máy của Minh`);break;case`ho_so_giai_trinh`:this.addReform(10,`Hoàn thành hồ sơ giải trình minh oan kho số 7`),this.changeRel(`lan`,20,`Quản giáo Lan chính thức tiếp nhận kiến nghị`),this.s.flags.ho_so_kho_7_cleared=!0;break;case`loi_hua_chu_bay`:this.addReform(8,`Giúp Chú Bảy hoàn thành kỷ vật gửi về quê`),this.changeRel(`bay`,30,`Chú Bảy xúc động trước lòng tốt của Minh`),this.s.flags.loi_hua_chu_bay_done=!0,this.startQuest(`ky_xet_cuoi_cung`);break;case`ky_xet_cuoi_cung`:this.addReform(10,`Hội đồng trại quyết định đặc xá`),this.s.ending=this.computeEnding(),this.notify(`Bạn đã hoàn thành quá trình cải tạo và bước tới ngưỡng cửa tự do!`,`good`),this.emit(`ending`,this.s.ending);break;case`truyen_nghe_cho_huy`:this.addReform(5,`Giúp đỡ bạn cùng phòng học nghề`),this.changeRel(`huy`,25,`Huy biết ơn Minh chỉ dạy nghề`);break;case`chia_tay_thay_phuc`:this.changeRel(`phuc`,20,`Thầy Phúc gửi gắm niềm tin vào Minh`);break;case`kiem_tra_suc_khoe`:this.addStat(`health`,15),this.addStat(`stamina`,10),this.changeRel(`an`,10,`Y sĩ An xác nhận thể lực hoàn hảo`)}}rollcallCheckIn(){let e=this.s.daily;return e.rollcall!==`pending`||this.s.minute<390||this.s.minute>=420?!1:(this.s.minute<=405?(e.rollcall=`ok`,this.notify(`Đã điểm danh đúng giờ.`,`good`),this.addReform(1,`Điểm danh đúng giờ`,!0)):(e.rollcall=`late`,this.recordViolation(`late_rollcall`,`d${this.s.day}`,`Quản giáo Lan ghi nhận có mặt lúc ${lu(this.s.minute)} (hạn 06:45).`,{grace:this.s.day===1})),this.completeObjective(`nhap_trai`,`diem_danh`),this.checkDailyTasks({category:`duty`,taskId:`duty_rollcall`}),this.event(`Điểm danh sáng`),this.commit(),!0)}clockIn(){let e=this.s.daily,t=this.s.minute,n=t>=480&&t<690;if(!n&&!(t>=810&&t<990))return`Ngoài giờ lao động. Ca sáng 08:00–11:30, ca chiều tự nguyện 13:30–16:30.`;if(n){if(e.workClockedIn)return`Bạn đã chấm công ca sáng.`;e.workClockedIn=!0,t>510?this.recordViolation(`late_work`,`d${this.s.day}`,`Bảng chấm công ghi ${lu(t)} (hạn 08:30).`,{grace:this.s.day===1}):this.notify(`Đã chấm công ca sáng. Chỉ tiêu: 3 ổ cắm.`,`good`),this.completeObjective(`ca_dau`,`cham_cong`),this.checkDailyTasks({category:`duty`,taskId:`duty_clockin`}),this.event(`Chấm công ca sáng`)}else{if(this.qStatus(`ca_dau`)===`active`)return`Cần hoàn thành ca đầu tiên theo thứ tự: chấm công sáng → lắp đủ 3 ổ cắm → báo Chú Bảy, rồi mới đăng ký ca chiều.`;if(this.s.flags[`extra:${this.s.day}`])return`Bạn đã đăng ký ca chiều.`;this.s.flags[`extra:${this.s.day}`]=!0,this.completeObjective(`lao_dong_phu`,`dang_ky`),this.notify(`Đăng ký ca chiều tự nguyện: 4.000đ/sản phẩm, tối đa 4.`,`good`)}return this.commit(),null}workMode(){let e=this.s.minute;return e>=480&&e<690&&this.s.daily.workClockedIn?`morning`:e>=810&&e<990&&this.s.flags[`extra:${this.s.day}`]?`afternoon`:null}canWorkReason(){let e=this.workMode();if(this.qStatus(`ca_dau`)===`active`){if(!this.qObj(`ca_dau`,`cham_cong`)||!this.s.daily.workClockedIn)return`Chưa thể lắp ráp: hãy chấm công tại bảng cạnh cửa xưởng trước (ca sáng 08:00–11:30).`;if(e!==`morning`)return`Ca đầu tiên phải hoàn thành trong ca sáng. Hãy trở lại xưởng vào 08:00–11:30.`}return e?e===`morning`&&this.s.daily.workUnits>=3&&this.s.daily.work===`ok`?`Đã đủ chỉ tiêu ca sáng. Có thể nghỉ hoặc ra về.`:e===`afternoon`&&this.s.daily.extraShiftUnits>=4?`Đã làm tối đa ca chiều hôm nay.`:this.s.stats.stamina<8?`Bạn kiệt sức. Hãy nghỉ tay (ngồi ghế) hoặc ăn uống để hồi thể lực.`:null:`Cần chấm công ở bảng cạnh cửa xưởng trước (ca sáng 08:00–11:30, ca chiều 13:30–16:30).`}wage(e){return Math.round(12+e/100*6)}finishWorkUnit(e,t=!0){let n=this.s.daily,r=this.workMode();if(!r||this.canWorkReason())return;let i=Math.max(0,Math.min(100,Math.round(e)));if(r===`morning`){if(n.workUnits>=3)return;n.workUnits++,n.workQuality+=i,this.event(`Lắp xong ổ cắm #${n.workUnits} (chất lượng ${i}%)`),this.hasPerk(`huy_work`)&&this.s.flags.huy_assisted_day!==this.s.day&&n.workUnits<3&&(this.s.flags.huy_assisted_day=this.s.day,n.workUnits++,n.workQuality+=80,this.notify(`Huy phụ bạn lắp thêm 1 sản phẩm (đặc quyền Huy ≥ 20).`,`good`),this.event(`Huy phụ lắp xong ổ cắm #${n.workUnits}`)),n.workUnits>=3?this.completeMorningQuota(t):this.notify(`Sản phẩm ${n.workUnits}/3 — chất lượng ${i}%`,`info`)}else{if(n.extraShiftUnits>=4)return;n.extraShiftUnits++,this.addStat(`money`,4),this.notify(`Ca chiều: +${uu(4)} (${n.extraShiftUnits}/4)`,`good`),n.extraShiftUnits%2==0&&this.addReform(1,`Lao động tự nguyện`,!0),n.extraShiftUnits>=2&&this.completeObjective(`lao_dong_phu`,`lap_phu`)}this.checkMoneyObjective(),this.commit()}completeMorningQuota(e,t=!1){let n=this.s.daily;n.work=`ok`;let r=n.workQuality/Math.max(1,n.workUnits),i=this.wage(r);t&&(i=Math.round(i*.7)),n.workPaid||(n.workPaid=!0,this.addStat(`money`,i),this.notify(`Đủ chỉ tiêu! Tiền công ${uu(i)} (chất lượng TB ${Math.round(r)}%).`,`good`)),this.gainXp(20,`Lao động đủ chỉ tiêu`),this.addReform(t?2:3,t?`Lao động (tự động)`:`Lao động đủ chỉ tiêu`,!0),e&&!t&&this.s.skills.workShifts++,this.completeObjective(`ca_dau`,`lap_rap`),this.checkDailyTasks({category:`duty`,taskId:`duty_work_units`}),this.checkMoneyObjective()}canAutoWork(){return this.s.skills.workShifts<2?`Cần tự làm đủ 2 ca để thành thạo (hiện ${this.s.skills.workShifts}/2).`:this.workMode()===`morning`?this.s.daily.work===`ok`?`Đã đủ chỉ tiêu.`:null:`Chỉ tự động được ca sáng sau khi đã chấm công.`}autoWork(){if(this.canAutoWork())return!1;let e=this.s.daily;for(;e.workUnits<3;)e.workUnits++,e.workQuality+=60;return this.completeMorningQuota(!1,!0),this.event(`Tự động hoàn thành ca sáng`),this.advanceTo(690,{...pd,inCellblock:!1}),this.addStat(`stamina`,-15),this.commit(),!0}checkMoneyObjective(){this.qStatus(`mon_no`)===`active`&&this.qBranch(`mon_no`)===`pay`&&this.s.stats.money>=40&&this.completeObjective(`mon_no`,`du_tien`)}mealBlock(){let e=this.block().id;return e===`breakfast`||e===`lunch`||e===`dinner`?e:null}eatMeal(){let e=this.mealBlock();return e?this.s.daily.meals[e]?`Bạn đã nhận suất ăn bữa này.`:(this.s.daily.meals[e]=!0,this.addStat(`satiety`,45),this.addStat(`stamina`,20),this.addStat(`health`,3),this.notify(`Ăn xong suất cơm: +45 độ no, +20 thể lực.`,`good`),this.event(`Ăn `+(e===`breakfast`?`sáng`:e===`lunch`?`trưa`:`tối`)),this.commit(),null):`Chưa đến giờ phát cơm (07:00, 11:30, 16:30).`}exerciseReason(){if(this.s.daily.exercise>=2)return`Hôm nay tập đủ rồi — tập thêm dễ chấn thương.`;if(this.s.stats.stamina<20)return`Cần ít nhất 20 thể lực để tập.`;let e=this.block().id;return e!==`free1`&&e!==`free2`&&e!==`rest`?`Chỉ tập trong giờ tự do/nghỉ trưa.`:null}exercise(e){if(this.exerciseReason())return;let t=Math.max(0,Math.min(1,e)),n=this.s.daily.exercise===0;this.s.daily.exercise++,this.s.skills.exerciseSessions++,this.addStat(`stamina`,-18);let r=Math.round((4+12*t)*(n?1:.5));this.addStat(`morale`,r),this.s.skills.fitness=Math.min(20,this.s.skills.fitness+t*(n?1:.4)),this.notify(`Tập xong: +${r} tinh thần, thể chất ${this.s.skills.fitness.toFixed(1)}/20.`,`good`),this.checkDailyTasks({category:`personal`,taskId:`personal_exercise`}),this.event(`Tập thể dục ngoài sân`),this.commit()}tick(e,t){if(this.s.ending||this.s.hearing)return;let n=this.s.minute,r=Math.min(nu,n+e*ru);this.s.minute=r,this.updateNeeds(e,(r-n)/60,t),t.inRollcall&&this.rollcallCheckIn(),this.checkWindows(n,r,t)}updateNeeds(e,t,n){let r=this.s.stats,i=1+(this.s.progression?.attrs?.endurance??1)*.12;this.addStat(`satiety`,-5*t);let a=(r.satiety<25?.5:1)*(1+this.s.skills.fitness/20)*i;n.sprinting?this.addStat(`stamina`,-2.5*e/i):n.resting?this.addStat(`stamina`,6*e*a):n.moving?this.addStat(`stamina`,.6*e*a):this.addStat(`stamina`,1.5*e*a),r.stamina<=30?this.staminaWarned||=(this.notify(`Thể lực xuống thấp (⚡ ${Math.round(r.stamina)}). Hãy ngồi ghế nghỉ ngơi hoặc ăn uống để hồi sức.`,`warn`),!0):r.stamina>=45&&(this.staminaWarned=!1),n.resting&&r.satiety>=25&&this.addStat(`morale`,1.5*t),r.satiety<=15?(this.addStat(`health`,-4*t),this.addStat(`morale`,-3*t)):r.satiety>=40&&r.health<100&&this.addStat(`health`,1*t),r.morale<=15&&this.addStat(`health`,-1*t),r.health<=0&&this.faint()}faint(){this.s.stats.health=35,this.s.stats.stamina=Math.max(this.s.stats.stamina,40),this.s.stats.satiety=Math.max(this.s.stats.satiety,35),this.s.stats.morale=Math.max(this.s.stats.morale,30),this.notify(`Bạn ngất xỉu vì kiệt sức! Bạn cùng buồng dìu bạn vào Phòng y tế nghỉ ngơi.`,`bad`),this.event(`Ngất xỉu`),this.emit(`faint`)}checkWindows(e,t,n){let r=this.s.daily;for(let n of ou)n.start>e&&n.start<=t&&this.emit(`block`,n);e<412&&t>=412&&this.morningSearch(),t>=420&&r.rollcall===`pending`&&(this.s.day===1?(r.rollcall=`excused`,this.recordViolation(`missed_rollcall`,`d${this.s.day}`,`Không có mặt ở ô điểm danh 06:30–07:00.`,{grace:!0}),this.qStatus(`nhap_trai`)===`active`&&!this.qObj(`nhap_trai`,`diem_danh`)&&this.notify(`Bạn bỏ lỡ điểm danh. Hãy có mặt ở ô vàng vào 06:30–07:00 ngày mai để hoàn thành bước này.`,`warn`)):this.canBayExcuse()?this.useBayExcuse(`rollcall`):(r.rollcall=`missed`,this.recordViolation(`missed_rollcall`,`d${this.s.day}`,`Quản giáo Lan điểm danh 06:30–07:00, không có mặt.`))),e<690&&t>=690&&this.resolveWork(),t>=1290&&r.curfew===`pending`&&(n.inCellblock?(r.curfew=`ok`,this.checkDailyTasks({category:`duty`,taskId:`duty_curfew`})):(r.curfew=`missed`,this.recordViolation(`curfew`,`d${this.s.day}`,`Cán bộ Tùng kiểm tra buồng lúc 21:30, bạn đang ở ngoài khu buồng giam.`))),e<1320&&t>=1320&&this.emit(`forceSleep`)}resolveWork(){let e=this.s.daily;if(e.work===`pending`){if(!e.workClockedIn||e.workUnits===0)this.canBayExcuse()?this.useBayExcuse(`work`):(e.work=`missed`,this.recordViolation(`skip_work`,`d${this.s.day}`,e.workClockedIn?`Đã chấm công nhưng không hoàn thành sản phẩm nào.`:`Không chấm công ca sáng 08:00–11:30.`,{grace:this.s.day===1}));else{e.work=`late`;let t=Math.round(this.wage(e.workQuality/e.workUnits)*e.workUnits/3);e.workPaid||(e.workPaid=!0,this.addStat(`money`,t)),this.notify(`Hết ca: chỉ làm ${e.workUnits}/3 sản phẩm, nhận ${uu(t)}, không được cộng điểm.`,`warn`)}this.commit()}}morningSearch(){let e=this.s.daily;if(e.searchedToday)return;let t=this.s.flags.lam_tip_day===this.s.day;if(!t&&this.s.stats.suspicion<50)return;e.searchedToday=!0;let n=t?`theo một tin báo nặc danh`:`do mức nghi ngờ cao (${Math.round(this.s.stats.suspicion)})`,r=Object.keys(this.s.inventory).filter(e=>dd[e]?.contraband);if(this.event(`Bị khám buồng ${n}`),r.length===0)this.notify(`Cán bộ Tùng khám buồng 3 ${n}: không phát hiện gì.`,`info`),this.addStat(`suspicion`,-10);else{for(let e of r){let t=e===`dao_lam`&&!!this.s.flags.planted_by_lam;this.s.inventory[e]=0,delete this.s.inventory[e],e===`hop_mui_khoan`?(this.recordViolation(`theft`,`search-d${this.s.day}`,`Khám buồng ${n}, tìm thấy hộp mũi khoan của kho xưởng trong đồ của bạn.`,{extra:``}),this.s.flags.canteenBanUntil=this.s.day+1,this.qStatus(`mon_no`)===`active`&&this.finishQuest(`mon_no`,`failed`,`Tang vật bị khám thấy`)):this.recordViolation(`contraband`,`search-d${this.s.day}-${e}`,`Khám buồng ${n}, tìm thấy ${fd(e)} trong chiếu của bạn.`,{appealTag:t?`planted`:void 0})}this.emit(`searched`,r)}}advanceTo(e,t=pd){let n=Math.min(nu,e),r=0;for(;this.s.minute<n-1e-6&&r++<2e3;){let e=Math.min(5,n-this.s.minute),r=this.s.minute;this.s.minute=r+e,this.updateNeeds(e/ru*.25,e/60,{...t,sprinting:!1,moving:!1}),this.checkWindows(r,this.s.minute,t)}}previewWait(){let e=cu(this.s.minute);if(!e)return null;let t=[],n=this.s.daily;n.rollcall===`pending`&&e.start>=420&&t.push(`Bỏ lỡ điểm danh sáng → vi phạm.`),n.work===`pending`&&e.start>=690&&(!n.workClockedIn||n.workUnits===0)&&t.push(`Bỏ lỡ ca lao động → vi phạm "Bỏ lao động".`);let r=this.mealBlock();return r&&!n.meals[r]&&t.push(`Bỏ bữa ăn hiện tại (đói sẽ tăng).`),{target:e.start,label:`${lu(e.start)} — ${e.label}`,warnings:t}}canSleep(){let e=this.s.minute;return e>=1260?{ok:!0,reason:`Đến giờ ngủ.`}:e>=1050&&this.s.daily.work!==`pending`?{ok:!0,reason:`Đã xong nghĩa vụ, có thể nghỉ sớm.`}:this.s.daily.work===`pending`?{ok:!1,reason:`Chưa xong nghĩa vụ lao động hôm nay. Có thể ngủ sau ca lao động, từ 17:30.`}:{ok:!1,reason:`Chỉ được nghỉ sớm từ 17:30 khi đã xong nghĩa vụ (giờ ngủ chính 21:00).`}}endDay(e=!0){let t=this.s,n=t.history.find(e=>e.day===t.day);if(n)return n;t.minute<1320&&this.advanceTo(nu,{...pd,inCellblock:e});let r=t.daily;r.curfew===`pending`&&(r.curfew=e?`ok`:`missed`),r.curfew===`ok`&&this.checkDailyTasks({category:`duty`,taskId:`duty_curfew`}),this.qStatus(`mi_cho_huy`)===`active`&&t.flags[`mi_cho_huy:deadline`]<=t.day&&this.finishQuest(`mi_cho_huy`,`failed`,`Quá hạn — thất hứa`);let i=t.violations.filter(e=>e.day===t.day&&e.status!==`overturned`&&e.severity>0);i.length===0&&this.addReform(1,`Một ngày không vi phạm`,!0);let a=$u(t,t.day),o=ed(t,t.day)??void 0;o&&this.event(`Kỳ xét giảm án: −${o.reduction} ngày`);let s=Object.keys(t.relations).map(e=>({npc:md[e],delta:t.relations[e].value-(r.startRelations[e]??0)})).filter(e=>e.delta!==0),c={day:t.day,rollcall:r.rollcall,work:r.work,workUnits:r.workUnits,meals:Number(r.meals.breakfast)+Number(r.meals.lunch)+Number(r.meals.dinner),reformDelta:t.stats.reform-r.startStats.reform,moneyDelta:Math.round((t.stats.money-r.startStats.money)*10)/10,violations:t.violations.filter(e=>e.day===t.day).map(e=>`${e.title}${e.status===`overturned`?` (đã hủy)`:``}`),relationChanges:s,served:a,review:o,remainingAfter:t.sentence.remaining,events:[...r.events]};return t.history.push(c),t.sentence.remaining<=0?(t.ending=this.computeEnding(),this.commit(),c):(this.addStat(`stamina`,100),this.addStat(`morale`,e?15:5),this.addStat(`satiety`,-15),t.stats.satiety>=30&&this.addStat(`health`,8),this.addStat(`suspicion`,i.length===0?-12:-5),t.day+=1,t.minute=360,t.daily=hu(t.stats,t.relations),t.daily.tasks=qu(t),t.player={x:-14.25,z:-27.6,rot:0},this.morningStory(),this.commit(),c)}morningStory(){let e=this.s;e.flags.lam_revenge_day===e.day&&!e.flags.planted_by_lam&&(e.flags.planted_by_lam=!0,e.flags.lam_tip_day=e.day,e.inventory.dao_lam=(e.inventory.dao_lam??0)+1,e.flags.bay_saw_planting=!0,e.daily.events.push(`06:00 (Đêm qua có người lạ lảng vảng gần giường bạn.)`)),e.flags.workshop_audit_day===e.day&&(e.daily.events.push(`06:00 Xưởng kiểm kê phát hiện mất hộp mũi khoan — chưa xác định thủ phạm.`),e.stats.suspicion=mu(e.stats.suspicion+10),e.flags.workshop_audit_done=!0),e.flags.huy_repay_day===e.day&&!e.flags.huy_repaid&&(e.flags.huy_repaid=!0,e.stats.money+=20,e.relations.huy.memories.push({day:e.day,text:`Huy trả lại Minh 20.000đ như đã hứa`}),e.relations.huy.value=Math.min(100,e.relations.huy.value+5),e.daily.events.push(`06:00 Huy dúi vào tay bạn 20.000đ: "Trả trước một nửa, em giữ lời."`))}computeEnding(){let e=this.s,t=e.violations.some(e=>e.severity>=3&&e.status!==`overturned`);return e.flags.stole_for_lam||this.rel(`lam`)>=35?`rang_buoc`:e.stats.reform>=70&&!t&&this.rel(`bay`)>=25?`tu_te`:`lang_le`}simulateGoodDay(){this.advanceTo(395,{...pd,inCellblock:!1}),this.rollcallCheckIn(),this.advanceTo(425,{...pd,inCellblock:!1}),this.eatMeal(),this.advanceTo(485,{...pd,inCellblock:!1}),this.clockIn();for(let e=0;e<3;e++)this.finishWorkUnit(90);return this.advanceTo(695,{...pd,inCellblock:!1}),this.eatMeal(),this.advanceTo(995,{...pd,inCellblock:!1}),this.eatMeal(),this.advanceTo(1265,pd),this.endDay(!0)}isOpen(e){return fu(e,this.s.minute)}isOpenAt(e,t){return fu(e,t)}};function gd(e,t,n,r){switch(t.meet(e),e){case`bay`:return yd(t);case`huy`:return bd(t);case`lam`:return xd(t);case`lan`:return Sd(t,n);case`tung`:return Ed(t);case`phuc`:return Cd(t,r);case`an`:return wd(t);case`mai`:return Td(t);default:return Dd(e,t)}}function _d(e,t,n,r,i){return r.has(t)?{label:`Tặng ${n}`,run:()=>{let n=r.gift(e,t);return{speaker:r.s.relations[e]?vd(e):e,text:n??i,choices:[{label:`Đóng`,run:()=>null}]}}}:null}function vd(e){return{bay:`Chú Bảy`,huy:`Huy`,lam:`Lâm`,lan:`Quản giáo Lan`,tung:`Cán bộ Tùng`,phuc:`Thầy Phúc`,an:`Y sĩ An`,mai:`Chị Mai`}[e]??e}function yd(e){let t=e.s.profile.name||`Minh`;if(!e.qObj(`nhap_trai`,`gap_bay`)&&e.qStatus(`nhap_trai`)===`active`){let n=e.objectiveBlockReason(`nhap_trai`,`gap_bay`);return n?{speaker:`Chú Bảy`,role:`Phạm nhân lâu năm · Buồng 3`,text:`Cháu cứ hoàn thành các thủ tục nhập trại trước đã. ${n}`,choices:[{label:`Dạ, cháu sẽ làm theo thứ tự.`,run:()=>null}]}:(e.completeObjective(`nhap_trai`,`gap_bay`),{speaker:`Chú Bảy`,role:`Phạm nhân lâu năm · Buồng 3`,text:`Cậu là ${t} mới vào sáng nay hả? Ngồi xuống thở cái đã. Ở đây mới vào ai cũng ngợp. Cứ nhớ ba chuyện: đúng giờ điểm danh 6 rưỡi ở ô vàng ngoài sân, 8 giờ vào xưởng nhớ bấm bảng chấm công trước khi ngồi vào bàn, và tối 9 rưỡi phải có mặt trong buồng. Giữ cái đầu lạnh thì đường về mới ngắn.`,choices:[{label:`Cháu cảm ơn chú. Cháu sẽ chú ý.`,run:()=>(e.changeRel(`bay`,5,`Lần đầu gặp gỡ lịch thiệp`),{speaker:`Chú Bảy`,text:`Sáng 8 giờ vào xưởng làm đủ 3 ổ cắm điện cho chú xem. Xong việc qua kể chú nghe.`,choices:[{label:`Vâng, cháu nhớ rồi.`,run:()=>null}]})},{label:`Ở đây có ai cần phải né tránh không chú?`,run:()=>({speaker:`Chú Bảy`,text:`Có Lâm ở buồng 2. Hắn hay gom nợ của mấy đứa mới, dụ dỗ làm chuyện mờ ám trong xưởng rồi ăn chia. Thấy hắn thì cứ dạ vâng rồi lùi ra, đừng dính dáng.`,choices:[{label:`Cháu hiểu rồi.`,run:()=>null}]})}]})}let n=[];e.qStatus(`ca_dau`)===`active`&&e.qObj(`ca_dau`,`lap_rap`)&&!e.qObj(`ca_dau`,`bao_bay`)&&n.push({label:`Chú Bảy, cháu đã làm xong chỉ tiêu ca đầu tiên rồi!`,important:!0,run:()=>(e.completeObjective(`ca_dau`,`bao_bay`),{speaker:`Chú Bảy`,text:`Tốt lắm. Tay nghề chưa quen mà làm đủ chỉ tiêu là có cố gắng. Cứ giữ nhịp đó. À… hồi trưa thằng Huy tìm cháu ngoài sân đấy, mặt mũi xanh mét.`,choices:[{label:`Để cháu ra sân hỏi Huy xem sao.`,run:()=>null}]})}),e.qStatus(`dep_bay`)===`active`&&!e.has(`dep_bay`)&&!e.qObj(`dep_bay`,`nhat_dep`)?n.push({label:`Chú tìm gì dưới gầm ghế vậy?`,run:()=>({speaker:`Chú Bảy`,text:`Đôi dép tổ ong màu xanh của chú... sáng ra sân tập thể dục để quên ở đâu mất rồi. Nó nằm quanh mấy cây xà đơn ngoài sân ấy, cháu thấy thì nhặt giùm chú.`,choices:[{label:`Cháu sẽ để ý tìm giúp chú.`,run:()=>null}]})}):e.qStatus(`dep_bay`)===`locked`&&e.qStatus(`nhap_trai`)===`done`?n.push({label:`Chú tìm gì dưới gầm ghế vậy?`,run:()=>({speaker:`Chú Bảy`,text:`Đôi dép tổ ong màu xanh của chú... sáng ra sân tập thể dục để quên ở đâu mất rồi. Đó là kỷ vật con gái chú gửi vào trước đợt chuyển trại, mất chú xót lắm.`,choices:[{label:`Để cháu ra sân tìm giúp chú.`,run:()=>(e.startQuest(`dep_bay`),{speaker:`Chú Bảy`,text:`Cảm ơn cậu, nó nằm quanh mấy cây xà đơn ngoài sân ấy.`,choices:[{label:`Đóng`,run:()=>null}]})},{label:`Để khi khác cháu tìm.`,run:()=>null}]})}):e.qStatus(`dep_bay`)===`active`&&e.has(`dep_bay`)&&n.push({label:`Cháu tìm thấy đôi dép của chú rồi này!`,important:!0,run:()=>e.objectiveBlockReason(`dep_bay`,`tra_dep`)?{speaker:`Chú Bảy`,text:e.objectiveBlockReason(`dep_bay`,`tra_dep`),choices:[{label:`Cháu sẽ làm đúng bước.`,run:()=>null}]}:(e.completeObjective(`dep_bay`,`tra_dep`),e.takeItem(`dep_bay`),{speaker:`Chú Bảy`,text:`Đúng nó rồi! Đôi dép con gái chú gửi... Đa tạ cậu. Người biết quý đồ của người khác như cậu, trong này hiếm lắm.`,choices:[{label:`Dạ, có gì đâu chú.`,run:()=>null}]})}),e.qStatus(`nghi_an_thuoc`)===`active`&&e.qObj(`nghi_an_thuoc`,`hoi_an`)&&!e.qObj(`nghi_an_thuoc`,`hoi_bay`)&&n.push({label:`Chú Bảy, chú nhớ đã dùng lọ thuốc hen lần cuối ở đâu không?`,important:!0,run:()=>(e.completeObjective(`nghi_an_thuoc`,`hoi_bay`),{speaker:`Chú Bảy`,text:`Chú có mang lọ thuốc ra sân phía sau xưởng, khi đi về không thấy nữa. Cậu xem ở góc tường xem sao.`,choices:[{label:`Cháu sẽ đi tìm.`,run:()=>null}]})}),e.qStatus(`manh_moi_kho_7`)===`active`&&!e.qObj(`manh_moi_kho_7`,`nghe_bay_ke`)&&n.push({label:`Chú ơi, chú có từng nghe nói về kiện hàng chuyển từ Kho số 7 không?`,important:!0,run:()=>(e.completeObjective(`manh_moi_kho_7`,`nghe_bay_ke`),{speaker:`Chú Bảy`,text:`Kho số 7 ngoại ô hả? Hồi tháng trước xưởng có nhận một lô phụ tùng cơ điện cũ, chú thấy dán tem niêm phong KHO-07-AP. Kiện gỗ đó hiện vẫn xếp ở góc hành lang kho xưởng ấy, ${t} cẩn thận quan sát xem.`,choices:[{label:`Cháu sẽ ra xưởng kiểm tra ngay.`,run:()=>null}]})}),e.qStatus(`bay_vat_cam`)===`active`&&e.qObj(`bay_vat_cam`,`trinh_bay`)&&!e.qObj(`bay_vat_cam`,`cung_cap_bang_chung`)&&n.push({label:`Chú Bảy! Có người gài đồ cấm dưới chiếu buồng 3 của cháu!`,important:!0,run:()=>e.rel(`bay`)>=20?(e.completeObjective(`bay_vat_cam`,`cung_cap_bang_chung`),{speaker:`Chú Bảy`,text:`Đêm qua chú thức giấc đi vệ sinh, thấy thằng đàn em của Lâm lén lút thò tay vào gầm phản của ${t}. Đi! Chú cùng cậu lên phòng Quản giáo Lan nói cho ra lẽ!`,choices:[{label:`Cháu biết ơn chú lắm!`,run:()=>null}]}):{speaker:`Chú Bảy`,text:`Chú có thấy bóng người lảng vảng, nhưng chú chưa dám chắc là ai. Cậu lên phòng Quản giáo trình bày thành thật xem camera hành lang xem.`,choices:[{label:`Dạ cháu hiểu.`,run:()=>null}]}}),e.qStatus(`loi_hua_chu_bay`)===`active`&&e.qObj(`loi_hua_chu_bay`,`danh_bong_hop`)&&!e.qObj(`loi_hua_chu_bay`,`hua_gui_ve`)&&n.push({label:`Cháu đã đánh bóng và lắp khóa hộp gỗ. Cháu hứa sẽ mang về cho con gái chú.`,important:!0,run:()=>(e.completeObjective(`loi_hua_chu_bay`,`hua_gui_ve`),{speaker:`Chú Bảy`,text:`Chú cảm ơn cậu. Chú gửi cậu cuốn cẩm nang làm hành trang ngày ra trại.`,choices:[{label:`Cháu sẽ giữ lời.`,run:()=>null}]})}),e.qStatus(`loi_hua_chu_bay`)===`active`&&!e.qObj(`loi_hua_chu_bay`,`nghe_loi_hua`)&&n.push({label:`Chú Bảy, cháu nghe nói chú có chuyện muốn nhờ cháu?`,important:!0,run:()=>(e.completeObjective(`loi_hua_chu_bay`,`nghe_loi_hua`),{speaker:`Chú Bảy`,text:`Chú dành dụm tiền công làm được chiếc hộp gỗ khảm trai cho con gái. Chú già rồi, tay run không đánh bóng nổi. Cậu khéo tay giúp chú hoàn thiện, rồi khi nào cậu ra trại trước, chuyển giúp chú về quê được không?`,choices:[{label:`Cháu hứa chắc chắn sẽ giúp chú!`,run:()=>({speaker:`Chú Bảy`,text:`Vậy hãy giúp chú đánh bóng chiếc hộp tại bàn xưởng trước nhé. Làm xong rồi quay lại hứa với chú.`,choices:[{label:`Dạ, cháu sẽ ra bàn xưởng.`,run:()=>null}]})}]})});let r=_d(`bay`,`thuoc_cam`,`vỉ thuốc cảm`,e,`Cảm ơn cậu, chú đang đau họng quá. Người tốt như cậu ở đâu cũng sống được.`);return r&&n.push(r),n.push({label:`Cháu chào chú.`,run:()=>null}),{speaker:`Chú Bảy`,role:`Bạn cùng buồng · Quan hệ: ${e.rel(`bay`)}`,text:`Có chuyện gì cần hỏi chú không ${t}? Cứ bình tĩnh mà cải tạo, ngày về không xa đâu.`,choices:n}}function bd(e){let t=e.s.profile.name||`Minh`,n=[];return e.qStatus(`ca_dau`)===`done`&&(e.qStatus(`mon_no`)===`locked`||e.qStatus(`mon_no`)===`active`&&!e.qObj(`mon_no`,`nghe_huy`))&&n.push({label:`Nghe Chú Bảy nói cậu đang tìm tôi. Có chuyện gì thế?`,important:!0,run:()=>(e.startQuest(`mon_no`),e.completeObjective(`mon_no`,`nghe_huy`),{speaker:`Huy`,role:`Bạn cùng buồng · 21 tuổi`,text:`Tôi dính bẫy nợ của anh Lâm rồi ${t} ơi... Tháng trước đánh cờ thua có 20 ngàn, hắn bắt ký giấy nợ tính lãi lên 40 ngàn. Hắn bảo trong tuần này không có tiền thì hắn bắt tôi lấy trộm hộp mũi khoan xưởng đưa cho hắn, không thì hắn cho người quậy nát buồng!`,choices:[{label:`Bình tĩnh. Giờ tự do tôi qua góc sau xưởng gặp Lâm xem lão muốn gì.`,run:()=>({speaker:`Huy`,text:`Anh ấy hay đứng ở góc sau xưởng giờ tự do chiều. Cẩn thận nghe ông, Lâm dữ dằn lắm.`,choices:[{label:`Được, cứ để tôi xem.`,run:()=>null}]})}]})}),e.qStatus(`mon_no`)===`active`&&e.qBranch(`mon_no`)===`report`&&!e.s.flags.huy_gave_note&&n.push({label:`Huy, đưa tôi tờ giấy nợ anh Lâm bắt ký để làm bằng chứng báo Quản giáo.`,important:!0,run:()=>(e.s.flags.report_with_note=!0,e.s.flags.huy_gave_note=!0,e.completeObjective(`mon_no`,`lay_giay`),{speaker:`Huy`,text:`Đây... giấy nợ đây. Minh cẩn thận nghe, tôi sợ bị trả thù lắm.`,choices:[{label:`Yên tâm, có quản giáo can thiệp Lâm không dám làm bậy đâu.`,run:()=>({speaker:`Huy`,text:`Cảm ơn Minh nhiều. Tôi trông cậy cả vào ông.`,choices:[{label:`Để tôi đi gặp Quản giáo Lan ngay.`,run:()=>null}]})}]})}),e.qStatus(`mi_cho_huy`)===`active`&&e.has(`mi_goi`)&&n.push({label:`Tôi mua mì gói căn tin cho cậu này.`,important:!0,run:()=>e.objectiveBlockReason(`mi_cho_huy`,`dua`)?{speaker:`Huy`,text:e.objectiveBlockReason(`mi_cho_huy`,`dua`),choices:[{label:`Để tôi chuẩn bị.`,run:()=>null}]}:(e.completeObjective(`mi_cho_huy`,`dua`),e.takeItem(`mi_goi`),{speaker:`Huy`,text:`Cảm ơn ông nhiều lắm! Cả ngày hôm nay đói cồn cào ruột gan. Ông đúng là người bạn tốt.`,choices:[{label:`Không có gì đâu.`,run:()=>null}]})}),e.qStatus(`truyen_nghe_cho_huy`)===`active`&&!e.qObj(`truyen_nghe_cho_huy`,`huong_dan_huy`)?n.push({label:`Huy, tôi hướng dẫn cậu các nguyên tắc an toàn khi nối mạch điện nhé.`,important:!0,run:()=>(e.completeObjective(`truyen_nghe_cho_huy`,`huong_dan_huy`),{speaker:`Huy`,text:`Cảm ơn ông. Để tôi luyện tập trình tự nối dây. Lát nữa ông kiểm tra bài cho tôi nhé.`,choices:[{label:`Nhớ ôn kỹ, tôi sẽ kiểm tra lại.`,run:()=>null}]})}):e.qStatus(`truyen_nghe_cho_huy`)===`active`&&!e.qObj(`truyen_nghe_cho_huy`,`huy_thuc_hanh`)&&n.push({label:`Huy, để tôi kiểm tra bài nối mạch cậu đã tập.`,important:!0,run:()=>(e.completeObjective(`truyen_nghe_cho_huy`,`huy_thuc_hanh`),{speaker:`Huy`,text:`Tôi nhớ rồi ${t} ạ. Ra trại tôi sẽ học nghề và làm ăn chân chính!`,choices:[{label:`Tốt lắm!`,run:()=>null}]})}),n.push({label:`Hẹn gặp lại sau.`,run:()=>null}),{speaker:`Huy`,role:`Bạn cùng buồng · Quan hệ: ${e.rel(`huy`)}`,text:`Chào ${t}. Có chuyện gì thế ông bạn?`,choices:n}}function xd(e){let t=e.s.profile.name||`Minh`,n=[];return e.qStatus(`mon_no`)===`active`&&!e.qObj(`mon_no`,`gap_lam`)&&n.push({label:`Tôi đến nói chuyện về món nợ của Huy.`,important:!0,run:()=>(e.completeObjective(`mon_no`,`gap_lam`),{speaker:`Lâm`,role:`Phạm nhân có "tiếng nói" · Buồng 2`,text:`À, thằng ${t} mới vào đúng không? Huy nó nợ tao 40.000đ trắng phớ giấy mực. Một là mày trả thay nó 40 ngàn tiền sạch. Hai là sáng mai lẻn vào kho xưởng lấy cho tao hộp mũi khoan hợp kim. Ba là cứ để yên cho tao xử nó. Mày chọn đi.`,choices:[{label:`Tôi sẽ gom đủ 40.000đ trả thay Huy.`,run:()=>(e.chooseBranch(`mon_no`,`pay`),{speaker:`Lâm`,text:`Được, có tiền sạch mang lại đây tao xé giấy nợ.`,choices:[{label:`Được.`,run:()=>null}]})},{label:`Tôi sẽ lấy hộp mũi khoan đưa anh.`,risk:`Nguy hiểm: Nếu bị Cán bộ Tùng bắt sẽ bị kỷ luật nặng!`,run:()=>(e.chooseBranch(`mon_no`,`steal`),{speaker:`Lâm`,text:`Khôn ngoan đấy em trai. Kho chỉ mở ca sáng, nhớ né camera và cán bộ Tùng ra.`,choices:[{label:`Rõ.`,run:()=>null}]})},{label:`Tôi sẽ báo Quản giáo Lan về việc anh ép nợ trái luật trong trại.`,run:()=>(e.chooseBranch(`mon_no`,`report`),{speaker:`Lâm`,text:`Mày dám dọa tao? Mày thích thì cứ đi báo, xem cán bộ tin mày hay tin tao. Nhưng liệu hồn giữ thân!`,choices:[{label:`Để rồi xem.`,run:()=>null}]})},...e.s.progression.attrs.charisma>=2?[{label:`[Giao tiếp] Phân tích: Ép nợ rùm beng Quản giáo Lan sẽ sờ gáy buồng 2, anh mất nhiều hơn được.`,run:()=>(e.chooseBranch(`mon_no`,`negotiate`),e.completeObjective(`mon_no`,`dam_phan`),e.changeRel(`lam`,10,`Nể phục tài đàm phán của Minh`),e.s.flags.huy_debt_cleared=!0,{speaker:`Lâm`,text:`Mày nói có lý đấy. Thằng nhóc này ăn nói khéo. Thôi được, tao tha cho thằng Huy gốc nợ, nhưng bảo nó cút khỏi mắt tao.`,choices:[{label:`Cảm ơn anh Lâm.`,run:()=>null}]})}]:[]]})}),e.qStatus(`mon_no`)===`active`&&e.qBranch(`mon_no`)===`pay`&&e.s.stats.money>=40&&n.push({label:`Đây là 40.000đ trả dứt nợ cho Huy. Đưa giấy nợ đây.`,important:!0,run:()=>(e.qObj(`mon_no`,`du_tien`)||e.completeObjective(`mon_no`,`du_tien`),e.completeObjective(`mon_no`,`tra_lam`)?(e.addStat(`money`,-40),e.s.flags.huy_debt_cleared=!0,{speaker:`Lâm`,text:`Tiền tươi thóc thật. Giấy nợ đây, xé trước mặt mày luôn. Thằng Huy có thằng bạn hào phóng đấy.`,choices:[{label:`Từ nay đừng quậy bạn tôi nữa.`,run:()=>null}]}):{speaker:`Lâm`,text:`Chưa hoàn thành các bước giải quyết nợ. Hãy làm theo mục tiêu đang hiển thị.`,choices:[{label:`Tôi sẽ quay lại.`,run:()=>null}]})}),e.qStatus(`mon_no`)===`active`&&e.qBranch(`mon_no`)===`steal`&&e.has(`hop_mui_khoan`)&&n.push({label:`Hộp mũi khoan lấy trong kho đây.`,important:!0,risk:`Rủi ro: Tang vật trộm cắp`,run:()=>e.completeObjective(`mon_no`,`giao_lam`)?(e.takeItem(`hop_mui_khoan`),e.s.flags.stole_for_lam=!0,e.s.flags.huy_debt_cleared=!0,{speaker:`Lâm`,text:`Khá lắm em trai! Chữ tín đấy. Từ nay ở xưởng có việc gì tao chống lưng cho mày.`,choices:[{label:`Nhớ xóa nợ cho Huy là được.`,run:()=>null}]}):{speaker:`Lâm`,text:`Cần hoàn thành các bước trước khi giao hàng.`,choices:[{label:`Được.`,run:()=>null}]}}),e.qStatus(`cam_do_im_lang`)===`active`&&!e.qObj(`cam_do_im_lang`,`quyet_dinh_im_lang`)&&n.push({label:`Anh tìm tôi có việc gì?`,important:!0,run:()=>({speaker:`Lâm`,text:`Mày đang đào bới chuyện Kho số 7 đúng không ${t}? Khuyên mày chân thành: chuyện ngoài xã hội để ngoài xã hội. Đây là 50.000đ tiền mặt, cầm lấy mà ăn tiêu trong trại, ngậm miệng lại thì hai bên cùng vui. Mày từ chối thì đừng trách tao không báo trước.`,choices:[{label:`Tôi từ chối. Sự thật phải được làm rõ.`,run:()=>(e.qObj(`cam_do_im_lang`,`gap_lam_ch3`)||e.completeObjective(`cam_do_im_lang`,`gap_lam_ch3`),e.chooseBranch(`cam_do_im_lang`,`refuse`,`Từ chối mua chuộc`),e.qStatus(`cam_do_im_lang`)===`active`&&e.finishQuest(`cam_do_im_lang`,`done`,`Từ chối mua chuộc`),e.changeRel(`lam`,-30,`Minh từ chối lời đề nghị im lặng`),e.addReform(6,`Kiên quyết giữ vững sự thật`),e.startQuest(`bay_vat_cam`),{speaker:`Lâm`,text:`Rượu mời không uống muốn uống rượu phạt. Để rồi xem mày trụ được bao lâu!`,choices:[{label:`Để rồi xem.`,run:()=>null}]})},{label:`Được rồi, tôi cầm tiền và không nhắc tới nữa.`,run:()=>(e.qObj(`cam_do_im_lang`,`gap_lam_ch3`)||e.completeObjective(`cam_do_im_lang`,`gap_lam_ch3`),e.s.flags.accepted_lam_bribe=!0,e.chooseBranch(`cam_do_im_lang`,`accept`,`Nhận tiền im lặng`),e.qStatus(`cam_do_im_lang`)===`active`&&e.finishQuest(`cam_do_im_lang`,`done`,`Nhận tiền im lặng`),e.addStat(`money`,50),e.changeRel(`lam`,25,`Minh đồng ý nhận tiền im lặng`),e.startQuest(`bay_vat_cam`),{speaker:`Lâm`,text:`Biết điều đấy. Cứ yên phận cải tạo thì tao không để mày thiệt đâu.`,choices:[{label:`Đóng`,run:()=>null}]})}]})}),n.push({label:`Tôi đi đây.`,run:()=>null}),{speaker:`Lâm`,role:`Phạm nhân buồng 2 · Quan hệ: ${e.rel(`lam`)}`,text:`Gì đấy ${t}? Biết điều thì sống êm, đừng để tao ngứa mắt.`,choices:n}}function Sd(e,t){let n=e.s.profile.name||`Minh`,r=[];return e.qStatus(`mon_no`)===`active`&&e.qBranch(`mon_no`)===`report`&&r.push({label:`Báo cáo Quản giáo về tình trạng cho vay nặng lãi và đe dọa trong trại.`,important:!0,run:()=>e.completeObjective(`mon_no`,`bao_lan`)?(e.addReform(6,`Tố giác vi phạm nội quy`),e.changeRel(`lan`,15,`Minh tố giác vi phạm dũng cảm`),e.s.flags.huy_debt_cleared=!0,{speaker:`Quản giáo Lan`,text:`Tôi ghi nhận thông tin và bằng chứng này của phạm nhân. Trại giam An Phú kiên quyết xử lý nghiêm các hành vi cưỡng đoạt, ép nợ. Cậu làm rất đúng.`,choices:[{label:`Cảm ơn cán bộ.`,run:()=>null}]}):{speaker:`Quản giáo Lan`,text:`Bạn cần hoàn thành các bước giải quyết món nợ theo thứ tự trước.`,choices:[{label:`Rõ, thưa cán bộ.`,run:()=>null}]}}),e.qStatus(`bay_vat_cam`)===`active`&&e.qObj(`bay_vat_cam`,`phat_hien_bay`)&&!e.qObj(`bay_vat_cam`,`trinh_bay`)&&r.push({label:`Thưa quản giáo, cháu xin giải trình về vật cấm bị gài dưới giường.`,important:!0,run:()=>(e.completeObjective(`bay_vat_cam`,`trinh_bay`),{speaker:`Quản giáo Lan`,text:`Đã tiếp nhận giải trình. Giờ cậu hãy tìm lời chứng Chú Bảy hoặc xin trích xuất camera hành lang để minh oan.`,choices:[{label:`Cháu sẽ thu thập chứng cứ.`,run:()=>null}]})}),e.qStatus(`bay_vat_cam`)===`active`&&e.qObj(`bay_vat_cam`,`trinh_bay`)&&!e.qObj(`bay_vat_cam`,`cung_cap_bang_chung`)&&r.push({label:`Xin kiểm tra camera hành lang để xác minh người gài vật cấm.`,important:!0,run:()=>(e.completeObjective(`bay_vat_cam`,`cung_cap_bang_chung`),{speaker:`Quản giáo Lan`,text:`Camera xác nhận có người khác lén vào buồng. Tôi sẽ xóa oan cho cậu và tiến hành điều tra.`,choices:[{label:`Cảm ơn quản giáo.`,run:()=>null}]})}),e.qStatus(`ho_so_giai_trinh`)===`active`&&!e.qObj(`ho_so_giai_trinh`,`nop_ho_so`)&&r.push({label:`Nộp Hồ sơ giải trình vụ án Kho số 7 và các chứng cứ mới thu thập được.`,important:!0,run:()=>{let t=e.objectiveBlockReason(`ho_so_giai_trinh`,`nop_ho_so`);return t?{speaker:`Quản giáo Lan`,text:t,choices:[{label:`Cháu sẽ làm đúng bước.`,run:()=>null}]}:(e.completeObjective(`ho_so_giai_trinh`,`nop_ho_so`),e.completeObjective(`ho_so_giai_trinh`,`ket_luan_lan`),e.s.flags.ho_so_kho_7_cleared=!0,e.finishQuest(`ho_so_giai_trinh`,`done`),{speaker:`Quản giáo Lan`,text:`Tôi đã xem xét kỹ vận đơn và bản đối chiếu chữ ký mà cậu và Thầy Phúc gửi lên. Chứng cứ này chứng minh ${n} chỉ là người bị lừa gạt, không phải kẻ chủ mưu vụ cháy kho số 7. Tôi sẽ chuyển văn bản chính thức đến Hội đồng xét giảm án!`,choices:[{label:`Cháu biết ơn Quản giáo rất nhiều!`,run:()=>null}]})}}),e.qStatus(`ky_xet_cuoi_cung`)===`active`&&r.push({label:`Nghe kết luận của Hội đồng xét giảm án đặc xá.`,important:!0,run:()=>{e.completeObjective(`ky_xet_cuoi_cung`,`den_hoi_truong`),e.completeObjective(`ky_xet_cuoi_cung`,`nhan_quyet_dinh`),e.finishQuest(`ky_xet_cuoi_cung`,`done`);let t=e.computeEnding();return e.s.ending=t,{speaker:`Quản giáo Lan`,text:`Hội đồng Trại giam An Phú đã họp và quyết định: Phạm nhân ${n} đã hoàn thành tốt quá trình cải tạo, được giảm hết thời hạn chấp hành án còn lại. Ngày mai cậu chính thức được tự do!`,choices:[{label:`Bước ra cổng trại và đón nhận tương lai`,run:()=>null}]}}}),e.s.violations.filter(e=>!e.appealed&&e.severity>0).length>0&&r.push({label:`Gửi đơn khiếu nại / giải trình về biên bản vi phạm kỷ luật`,run:()=>(t(),null)}),r.push({label:`Xin phép cán bộ.`,run:()=>null}),{speaker:`Quản giáo Lan`,role:`Cán bộ quản giáo phụ trách phân trại`,text:`Phạm nhân ${n}, có vấn đề gì về hồ sơ cải tạo hay đời sống cần trao đổi?`,choices:r}}function Cd(e,t){let n=e.s.profile.name||`Minh`,r=[];return e.qStatus(`lop_nghe_dau`)===`active`&&(e.qObj(`lop_nghe_dau`,`den_lop`)?e.qObj(`lop_nghe_dau`,`thao_tac`)&&!e.qObj(`lop_nghe_dau`,`nhan_xet`)&&r.push({label:`Thưa Thầy Phúc, em đã hoàn thành xong bài nối mạch an toàn rồi ạ.`,important:!0,run:()=>(e.completeObjective(`lop_nghe_dau`,`nhan_xet`),e.finishQuest(`lop_nghe_dau`,`done`,`Hoàn thành bài học nghề`),{speaker:`Thầy Phúc`,text:`Khá lắm! Nối đúng trình tự, thao tác dứt khoát và cẩn thận. Đây là Chứng chỉ nghề cơ điện bậc sơ cấp của em. Giữ lấy nó làm nền tảng trong hồ sơ xét giảm án.`,choices:[{label:`Em cảm ơn thầy nhiều lắm!`,run:()=>null}]})}):r.push({label:`Em chào Thầy Phúc. Em đến đăng ký học nghề ca chiều ạ.`,important:!0,run:()=>(e.completeObjective(`lop_nghe_dau`,`den_lop`),{speaker:`Thầy Phúc`,text:`Tốt lắm ${n}. Vào đây thì ngoài việc chấp hành nội quy, học một cái nghề là tấm vé để sau này ra đời tự nuôi sống bản thân. Thầy có bài tập nối mạch điện an toàn tại bàn thực hành kia — qua đó kiểm tra khả năng quan sát và ghi nhớ màu dây cho thầy xem.`,choices:[{label:`Bắt đầu bài kiểm tra học nghề tại bàn thực hành`,run:()=>(t?.(),null)},{label:`Dạ, để em chuẩn bị một chút.`,run:()=>null}]})})),e.qStatus(`doi_chieu_chung_tu`)===`active`&&!e.qObj(`doi_chieu_chung_tu`,`phat_hien`)&&r.push({label:`Thầy Phúc ơi, nhờ thầy xem giúp cháu mảnh vận đơn Kho số 7 này với ạ.`,important:!0,run:()=>(e.completeObjective(`doi_chieu_chung_tu`,`dua_chung_tu`),e.completeObjective(`doi_chieu_chung_tu`,`doi_chieu`),e.completeObjective(`doi_chieu_chung_tu`,`phat_hien`),e.finishQuest(`doi_chieu_chung_tu`,`done`),{speaker:`Thầy Phúc`,text:`Để thầy xem... Mảnh giấy này có dấu mộc và chữ ký người nhận là "Trần Văn Định". Đây chính là đầu mối từng giao dịch thiết bị với bên Lâm trước khi xảy ra hỏa hoạn. Chứng cứ này rất có giá trị đấy ${n}!`,choices:[{label:`Cháu cảm ơn thầy nhiều!`,run:()=>null}]})}),e.qStatus(`sua_quat_phong_hoc`)===`active`&&!e.qObj(`sua_quat_phong_hoc`,`thay_vong_bi`)&&r.push({label:`Thưa thầy, chiếc quạt hỏng phải xử lý thế nào ạ?`,run:()=>({speaker:`Thầy Phúc`,text:`Cháu hãy tới chiếc quạt trong lớp, kiểm tra hộp số trước rồi mới thay vòng bi và siết ốc nhé.`,choices:[{label:`Dạ, cháu sẽ kiểm tra đúng thứ tự.`,run:()=>null}]})}),e.qStatus(`chia_tay_thay_phuc`)===`active`&&!e.qObj(`chia_tay_thay_phuc`,`tam_su_thay`)?r.push({label:`Thưa thầy, cháu sắp mãn hạn, xin phép đến chào thầy.`,important:!0,run:()=>(e.completeObjective(`chia_tay_thay_phuc`,`tam_su_thay`),{speaker:`Thầy Phúc`,text:`Thầy mừng vì cháu đã học hành chăm chỉ. Thầy sẽ chuẩn bị lá thư giới thiệu việc làm, gặp lại thầy để nhận nhé.`,choices:[{label:`Cháu cảm ơn thầy!`,run:()=>null}]})}):e.qStatus(`chia_tay_thay_phuc`)===`active`&&!e.qObj(`chia_tay_thay_phuc`,`nhan_thu_gt`)&&r.push({label:`Thưa thầy, cháu đến nhận thư giới thiệu việc làm.`,important:!0,run:()=>(e.completeObjective(`chia_tay_thay_phuc`,`nhan_thu_gt`),e.giveItem(`thu_gioi_thieu_viec_lam`,1),{speaker:`Thầy Phúc`,text:`Thầy đã viết xong thư gửi bạn thầy làm xưởng cơ điện tại Bình Dương cho ${n}. Ra trại cháu cầm theo và làm việc thật tốt nhé.`,choices:[{label:`Cháu sẽ không phụ lòng thầy!`,run:()=>null}]})}),r.push({label:`Chào thầy.`,run:()=>null}),{speaker:`Thầy Phúc`,role:`Giáo viên dạy nghề điện trại giam`,text:`Chào ${n}. Nghề nghiệp là cái phao cứu sinh lớn nhất khi bước chân ra xã hội. Có chí học thì tương lai sẽ sáng.`,choices:r}}function wd(e){let t=e.s.profile.name||`Minh`,n=[];return e.qStatus(`nghi_an_thuoc`)===`active`&&!e.qObj(`nghi_an_thuoc`,`hoi_an`)&&n.push({label:`Y sĩ An, cháu muốn hỏi về lọ thuốc hen bị mất của Chú Bảy.`,important:!0,run:()=>(e.completeObjective(`nghi_an_thuoc`,`hoi_an`),{speaker:`Y sĩ An`,text:`Chúng tôi đang tìm lọ thuốc hen đặc trị của Chú Bảy. Cháu hãy hỏi chú xem chú dùng thuốc lần cuối ở đâu.`,choices:[{label:`Cháu sẽ đi hỏi chú Bảy trước.`,run:()=>null}]})}),e.qStatus(`nghi_an_thuoc`)===`active`&&e.has(`chai_thuoc_hen`)&&e.qObj(`nghi_an_thuoc`,`nhat_thuoc`)&&n.push({label:`Cháu tìm thấy lọ thuốc hen suyễn ở sau xưởng rồi!`,important:!0,run:()=>e.completeObjective(`nghi_an_thuoc`,`tra_thuoc`)?(e.takeItem(`chai_thuoc_hen`),{speaker:`Y sĩ An`,text:`May quá! Đúng là thuốc đặc trị của Chú Bảy rồi. Tôi sẽ cho chú thở khí dung ngay. Cảm ơn cậu đã cứu mạng một con người.`,choices:[{label:`Cháu mừng vì chú Bảy qua khỏi.`,run:()=>null}]}):{speaker:`Y sĩ An`,text:`Hãy tìm hiểu nguồn gốc lọ thuốc trước khi bàn giao.`,choices:[{label:`Dạ.`,run:()=>null}]}}),e.qStatus(`phu_y_te`)===`active`&&!e.qObj(`phu_y_te`,`nhan_viec`)&&n.push({label:`Cháu xin nhận hướng dẫn để phụ phân loại tủ thuốc.`,important:!0,run:()=>(e.completeObjective(`phu_y_te`,`nhan_viec`),{speaker:`Y sĩ An`,text:`Qua tủ thuốc bên cạnh và phân loại từng nhóm thuốc theo đúng nhãn rồi báo lại nhé.`,choices:[{label:`Dạ, cháu sẽ làm theo.`,run:()=>null}]})}),e.qStatus(`kiem_tra_suc_khoe`)===`active`&&!e.qObj(`kiem_tra_suc_khoe`,`kham_tong_quat`)&&n.push({label:`Thưa y sĩ, cháu đến khám sức khỏe định kỳ xuất trại.`,important:!0,run:()=>(e.completeObjective(`kiem_tra_suc_khoe`,`kham_tong_quat`),e.finishQuest(`kiem_tra_suc_khoe`,`done`),{speaker:`Y sĩ An`,text:`Huyết áp và tim mạch của ${t} rất tốt. Thể trạng hoàn toàn khỏe mạnh để sẵn sàng hòa nhập xã hội. Chúc cậu mọi điều bình an!`,choices:[{label:`Cháu cảm ơn y sĩ An.`,run:()=>null}]})}),n.push({label:`Cháu xin phép.`,run:()=>null}),{speaker:`Y sĩ An`,role:`Cán bộ trạm xá trại giam`,text:`Chào ${t}. Có chỗ nào không khỏe trong người cần phát thuốc không?`,choices:n}}function Td(e){let t=e.s.profile.name||`Minh`,n=[];return e.qStatus(`phong_tham_gap`)===`active`&&!e.qObj(`phong_tham_gap`,`nhan_tien`)&&n.push({label:`Chị Mai ơi, em muốn tâm sự với chị một chút.`,important:!0,run:()=>(e.qObj(`phong_tham_gap`,`gap_chi`)||e.completeObjective(`phong_tham_gap`,`gap_chi`),{speaker:`Chị Mai`,role:`Chị gái ruột`,text:`Chị mừng được thấy em, ${t}. Ở trong này em sống thế nào? Cứ nói thật cho chị yên tâm.`,choices:[{label:`Em vẫn khỏe, sẽ chấp hành tốt nội quy và học nghề để sớm về nhà.`,run:()=>(e.completeObjective(`phong_tham_gap`,`thanh_that`),{speaker:`Chị Mai`,text:`Chị tin em. Chị còn gửi 25.000đ tiếp tế cho em, nhớ nhận trong sổ lưu ký nhé.`,choices:[{label:`Nhận 25.000đ tiếp tế và cảm ơn chị.`,run:()=>(e.completeObjective(`phong_tham_gap`,`nhan_tien`),{speaker:`Chị Mai`,text:`Cố gắng cải tạo tốt nghe em. Mẹ ở nhà đang ngóng ngày em trở về.`,choices:[{label:`Em hứa sẽ về sớm!`,run:()=>null}]})}]})}]})}),e.qStatus(`la_thu_que_nha`)===`active`&&e.qObj(`la_thu_que_nha`,`nhan_thu`)&&!e.qObj(`la_thu_que_nha`,`hoi_am`)&&n.push({label:`Em đã nhận được thư mẹ gửi rồi chị à.`,important:!0,run:()=>(e.completeObjective(`la_thu_que_nha`,`hoi_am`),e.finishQuest(`la_thu_que_nha`,`done`),{speaker:`Chị Mai`,text:`Chị biết em nhớ nhà lắm. Chị đã bảo mẹ là em trong này ngoan, được thầy khen. Cố gắng lên em!`,choices:[{label:`Dạ chị!`,run:()=>null}]})}),n.push({label:`Hết giờ thăm gặp rồi, em chào chị.`,run:()=>null}),{speaker:`Chị Mai`,role:`Chị gái · Quan hệ: ${e.rel(`mai`)}`,text:`Minh ơi, thời gian thăm gặp có hạn thôi em, có chuyện gì cần dặn dò chị không?`,choices:n}}function Ed(e){let t=e.s.profile.name||`Minh`,n=[];return e.qStatus(`bay_vat_cam`)===`active`&&!e.qObj(`bay_vat_cam`,`phat_hien_bay`)&&n.push({label:`Cán bộ Tùng, chuyện kiểm tra đột xuất phòng cháu thế nào ạ?`,important:!0,run:()=>(e.completeObjective(`bay_vat_cam`,`phat_hien_bay`),{speaker:`Cán bộ Tùng`,text:`Tôi vừa phát hiện vật cấm dưới chiếu của ${t}. Cậu hãy đến Quản giáo Lan để giải trình chính thức rồi mới tìm nhân chứng hoặc camera chứng minh mình bị gài.`,choices:[{label:`Rõ, cháu sẽ gặp Quản giáo Lan.`,run:()=>null}]})}),n.push({label:`Rõ, thưa cán bộ.`,run:()=>null}),{speaker:`Cán bộ Tùng`,role:`Cán bộ trật tự & xưởng`,text:`Lao động trật tự, đi lại đúng giờ. Tuyệt đối không tự ý bước qua vạch đỏ vào kho xưởng hoặc đem vật cấm vào buồng giam.`,choices:n}}function Dd(e,t){let n={tu:{name:`Anh Tư (Buồng 1)`,line:`Làm ở xưởng đừng bấm vội. Canh đúng vạch xanh trên thanh căn lực thì sản phẩm đạt chất lượng cao, tiền công được tới 16.000đ.`},son:{name:`Sơn (Buồng 2)`,line:`Giờ tự do ra xà đơn tập một hiệp là người nhẹ hẳn, hôm sau làm xưởng đỡ tốn sức hơn.`},khai:{name:`Khải (Buồng 4)`,line:t.rel(`lam`)<0?`Anh Lâm đang để ý mày đấy, đi đứng cẩn thận.`:`Có chuyện gì muốn bàn thì tìm anh Lâm ở góc sau xưởng giờ nghỉ chiều.`}}[e]??{name:e,line:`...`};return{speaker:n.name,text:n.line,choices:[{label:`Đóng`,run:()=>null}]}}var Od={};for(let[e,t]of Nu)(Od[e]??=[]).push(t),(Od[t]??=[]).push(e);function kd(e,t){let[n,r]=Mu[e],[i,a]=Mu[t];return Math.hypot(n-i,r-a)}function Ad(e,t,n){let r=``,i=1/0;for(let a of Object.keys(Mu)){if(n&&!n(a))continue;let[o,s]=Mu[a],c=(o-e)**2+(s-t)**2;c<i&&(i=c,r=a)}return r}function jd(e,t){if(e===t)return[t];let n=new Set([e]),r={},i={[e]:0},a={[e]:kd(e,t)};for(;n.size;){let e=``,o=1/0;for(let t of n)(a[t]??1/0)<o&&(o=a[t],e=t);if(e===t){let t=[e];for(;r[e];)e=r[e],t.unshift(e);return t}n.delete(e);for(let o of Od[e]??[]){let s=i[e]+kd(e,o);s<(i[o]??1/0)&&(r[o]=e,i[o]=s,a[o]=s+kd(o,t),n.add(o))}}return[t]}function Md(e,t){if(t===0)return console.warn(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.`),e;if(t===2||t===1){let n=e.getIndex();if(n===null){let t=[],r=e.getAttribute(`position`);if(r!==void 0){for(let e=0;e<r.count;e++)t.push(e);e.setIndex(t),n=e.getIndex()}else return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.`),e}let r=n.count-2,i=[];if(t===2)for(let e=1;e<=r;e++)i.push(n.getX(0)),i.push(n.getX(e)),i.push(n.getX(e+1));else for(let e=0;e<r;e++)e%2==0?(i.push(n.getX(e)),i.push(n.getX(e+1)),i.push(n.getX(e+2))):(i.push(n.getX(e+2)),i.push(n.getX(e+1)),i.push(n.getX(e)));i.length/3!==r&&console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.`);let a=e.clone();return a.setIndex(i),a.clearGroups(),a}return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:`,t),e}var Nd=class extends hl{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Rd(e)}),this.register(function(e){return new zd(e)}),this.register(function(e){return new Jd(e)}),this.register(function(e){return new Yd(e)}),this.register(function(e){return new Xd(e)}),this.register(function(e){return new Vd(e)}),this.register(function(e){return new Hd(e)}),this.register(function(e){return new Ud(e)}),this.register(function(e){return new Wd(e)}),this.register(function(e){return new Ld(e)}),this.register(function(e){return new Gd(e)}),this.register(function(e){return new Bd(e)}),this.register(function(e){return new qd(e)}),this.register(function(e){return new Kd(e)}),this.register(function(e){return new Fd(e)}),this.register(function(e){return new Zd(e)}),this.register(function(e){return new Qd(e)})}load(e,t,n,r){let i=this,a;if(this.resourcePath!==``)a=this.resourcePath;else if(this.path!==``){let t=Il.extractUrlBase(e);a=Il.resolveURL(t,this.path)}else a=Il.extractUrlBase(e);this.manager.itemStart(e);let o=function(t){r?r(t):console.error(t),i.manager.itemError(e),i.manager.itemEnd(e)},s=new vl(this.manager);s.setPath(this.path),s.setResponseType(`arraybuffer`),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(n){try{i.parse(n,a,function(n){t(n),i.manager.itemEnd(e)},o)}catch(e){o(e)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let i,a={},o={},s=new TextDecoder;if(typeof e==`string`)i=JSON.parse(e);else if(e instanceof ArrayBuffer){if(s.decode(new Uint8Array(e,0,4))===$d){try{a[Q.KHR_BINARY_GLTF]=new nf(e)}catch(e){r&&r(e);return}i=JSON.parse(a[Q.KHR_BINARY_GLTF].content)}else i=JSON.parse(s.decode(e))}else i=e;if(i.asset===void 0||i.asset.version[0]<2){r&&r(Error(`THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.`));return}let c=new kf(i,{path:t||this.resourcePath||``,crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let e=0;e<this.pluginCallbacks.length;e++){let t=this.pluginCallbacks[e](c);t.name||console.error(`THREE.GLTFLoader: Invalid plugin found: missing name`),o[t.name]=t,a[t.name]=!0}if(i.extensionsUsed)for(let e=0;e<i.extensionsUsed.length;++e){let t=i.extensionsUsed[e],n=i.extensionsRequired||[];switch(t){case Q.KHR_MATERIALS_UNLIT:a[t]=new Id;break;case Q.KHR_DRACO_MESH_COMPRESSION:a[t]=new rf(i,this.dracoLoader);break;case Q.KHR_TEXTURE_TRANSFORM:a[t]=new af;break;case Q.KHR_MESH_QUANTIZATION:a[t]=new of;break;default:n.indexOf(t)>=0&&o[t]===void 0&&console.warn(`THREE.GLTFLoader: Unknown extension "`+t+`".`)}}c.setExtensions(a),c.setPlugins(o),c.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,i){n.parse(e,t,r,i)})}};function Pd(){let e={};return{get:function(t){return e[t]},add:function(t,n){e[t]=n},remove:function(t){delete e[t]},removeAll:function(){e={}}}}var Q={KHR_BINARY_GLTF:`KHR_binary_glTF`,KHR_DRACO_MESH_COMPRESSION:`KHR_draco_mesh_compression`,KHR_LIGHTS_PUNCTUAL:`KHR_lights_punctual`,KHR_MATERIALS_CLEARCOAT:`KHR_materials_clearcoat`,KHR_MATERIALS_DISPERSION:`KHR_materials_dispersion`,KHR_MATERIALS_IOR:`KHR_materials_ior`,KHR_MATERIALS_SHEEN:`KHR_materials_sheen`,KHR_MATERIALS_SPECULAR:`KHR_materials_specular`,KHR_MATERIALS_TRANSMISSION:`KHR_materials_transmission`,KHR_MATERIALS_IRIDESCENCE:`KHR_materials_iridescence`,KHR_MATERIALS_ANISOTROPY:`KHR_materials_anisotropy`,KHR_MATERIALS_UNLIT:`KHR_materials_unlit`,KHR_MATERIALS_VOLUME:`KHR_materials_volume`,KHR_TEXTURE_BASISU:`KHR_texture_basisu`,KHR_TEXTURE_TRANSFORM:`KHR_texture_transform`,KHR_MESH_QUANTIZATION:`KHR_mesh_quantization`,KHR_MATERIALS_EMISSIVE_STRENGTH:`KHR_materials_emissive_strength`,EXT_MATERIALS_BUMP:`EXT_materials_bump`,EXT_TEXTURE_WEBP:`EXT_texture_webp`,EXT_TEXTURE_AVIF:`EXT_texture_avif`,EXT_MESHOPT_COMPRESSION:`EXT_meshopt_compression`,EXT_MESH_GPU_INSTANCING:`EXT_mesh_gpu_instancing`},Fd=class{constructor(e){this.parser=e,this.name=Q.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n=`light:`+e,r=t.cache.get(n);if(r)return r;let i=t.json,a=((i.extensions&&i.extensions[this.name]||{}).lights||[])[e],o,s=new U(16777215);a.color!==void 0&&s.setRGB(a.color[0],a.color[1],a.color[2],Be);let c=a.range===void 0?0:a.range;switch(a.type){case`directional`:o=new Fl(s),o.target.position.set(0,0,-1),o.add(o.target);break;case`point`:o=new Nl(s),o.distance=c;break;case`spot`:o=new Ol(s),o.distance=c,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle===void 0?0:a.spot.innerConeAngle,a.spot.outerConeAngle=a.spot.outerConeAngle===void 0?Math.PI/4:a.spot.outerConeAngle,o.angle=a.spot.outerConeAngle,o.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw Error(`THREE.GLTFLoader: Unexpected light type: `+a.type)}return o.position.set(0,0,0),o.decay=2,xf(o,a),a.intensity!==void 0&&(o.intensity=a.intensity),o.name=t.createUniqueName(a.name||`light_`+e),r=Promise.resolve(o),t.cache.add(n,r),r}getDependency(e,t){if(e===`light`)return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],i=(r.extensions&&r.extensions[this.name]||{}).light;return i===void 0?null:this._loadLight(i).then(function(e){return n._getNodeRef(t.cache,i,e)})}},Id=class{constructor(){this.name=Q.KHR_MATERIALS_UNLIT}getMaterialType(){return _r}extendParams(e,t,n){let r=[];e.color=new U(1,1,1),e.opacity=1;let i=t.pbrMetallicRoughness;if(i){if(Array.isArray(i.baseColorFactor)){let t=i.baseColorFactor;e.color.setRGB(t[0],t[1],t[2],Be),e.opacity=t[3]}i.baseColorTexture!==void 0&&r.push(n.assignTexture(e,`map`,i.baseColorTexture,ze))}return Promise.all(r)}},Ld=class{constructor(e){this.parser=e,this.name=Q.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=n.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Rd=class{constructor(e){this.parser=e,this.name=Q.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Kc}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[],a=r.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&i.push(n.assignTexture(t,`clearcoatMap`,a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&i.push(n.assignTexture(t,`clearcoatRoughnessMap`,a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(i.push(n.assignTexture(t,`clearcoatNormalMap`,a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let e=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new L(e,e)}return Promise.all(i)}},zd=class{constructor(e){this.parser=e,this.name=Q.KHR_MATERIALS_DISPERSION}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Kc}extendMaterialParams(e,t){let n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=n.extensions[this.name];return t.dispersion=r.dispersion===void 0?0:r.dispersion,Promise.resolve()}},Bd=class{constructor(e){this.parser=e,this.name=Q.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Kc}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[],a=r.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&i.push(n.assignTexture(t,`iridescenceMap`,a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&i.push(n.assignTexture(t,`iridescenceThicknessMap`,a.iridescenceThicknessTexture)),Promise.all(i)}},Vd=class{constructor(e){this.parser=e,this.name=Q.KHR_MATERIALS_SHEEN}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Kc}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[];t.sheenColor=new U(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=r.extensions[this.name];if(a.sheenColorFactor!==void 0){let e=a.sheenColorFactor;t.sheenColor.setRGB(e[0],e[1],e[2],Be)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&i.push(n.assignTexture(t,`sheenColorMap`,a.sheenColorTexture,ze)),a.sheenRoughnessTexture!==void 0&&i.push(n.assignTexture(t,`sheenRoughnessMap`,a.sheenRoughnessTexture)),Promise.all(i)}},Hd=class{constructor(e){this.parser=e,this.name=Q.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Kc}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[],a=r.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&i.push(n.assignTexture(t,`transmissionMap`,a.transmissionTexture)),Promise.all(i)}},Ud=class{constructor(e){this.parser=e,this.name=Q.KHR_MATERIALS_VOLUME}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Kc}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[],a=r.extensions[this.name];t.thickness=a.thicknessFactor===void 0?0:a.thicknessFactor,a.thicknessTexture!==void 0&&i.push(n.assignTexture(t,`thicknessMap`,a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new U().setRGB(o[0],o[1],o[2],Be),Promise.all(i)}},Wd=class{constructor(e){this.parser=e,this.name=Q.KHR_MATERIALS_IOR}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Kc}extendMaterialParams(e,t){let n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=n.extensions[this.name];return t.ior=r.ior===void 0?1.5:r.ior,Promise.resolve()}},Gd=class{constructor(e){this.parser=e,this.name=Q.KHR_MATERIALS_SPECULAR}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Kc}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[],a=r.extensions[this.name];t.specularIntensity=a.specularFactor===void 0?1:a.specularFactor,a.specularTexture!==void 0&&i.push(n.assignTexture(t,`specularIntensityMap`,a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new U().setRGB(o[0],o[1],o[2],Be),a.specularColorTexture!==void 0&&i.push(n.assignTexture(t,`specularColorMap`,a.specularColorTexture,ze)),Promise.all(i)}},Kd=class{constructor(e){this.parser=e,this.name=Q.EXT_MATERIALS_BUMP}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Kc}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[],a=r.extensions[this.name];return t.bumpScale=a.bumpFactor===void 0?1:a.bumpFactor,a.bumpTexture!==void 0&&i.push(n.assignTexture(t,`bumpMap`,a.bumpTexture)),Promise.all(i)}},qd=class{constructor(e){this.parser=e,this.name=Q.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Kc}extendMaterialParams(e,t){let n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let i=[],a=r.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&i.push(n.assignTexture(t,`anisotropyMap`,a.anisotropyTexture)),Promise.all(i)}},Jd=class{constructor(e){this.parser=e,this.name=Q.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let i=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures`);return null}return t.loadTextureImage(e,i.source,a)}},Yd=class{constructor(e){this.parser=e,this.name=Q.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return this.detectSupport().then(function(i){if(i)return n.loadTextureImage(e,a.source,s);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw Error(`THREE.GLTFLoader: WebP required by asset but unsupported.`);return n.loadTexture(e)})}detectSupport(){return this.isSupported||=new Promise(function(e){let t=new Image;t.src=`data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA`,t.onload=t.onerror=function(){e(t.height===1)}}),this.isSupported}},Xd=class{constructor(e){this.parser=e,this.name=Q.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return this.detectSupport().then(function(i){if(i)return n.loadTextureImage(e,a.source,s);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw Error(`THREE.GLTFLoader: AVIF required by asset but unsupported.`);return n.loadTexture(e)})}detectSupport(){return this.isSupported||=new Promise(function(e){let t=new Image;t.src=`data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=`,t.onload=t.onerror=function(){e(t.height===1)}}),this.isSupported}},Zd=class{constructor(e){this.name=Q.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let e=n.extensions[this.name],r=this.parser.getDependency(`buffer`,e.buffer),i=this.parser.options.meshoptDecoder;if(!i||!i.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files`);return null}return r.then(function(t){let n=e.byteOffset||0,r=e.byteLength||0,a=e.count,o=e.byteStride,s=new Uint8Array(t,n,r);return i.decodeGltfBufferAsync?i.decodeGltfBufferAsync(a,o,s,e.mode,e.filter).then(function(e){return e.buffer}):i.ready.then(function(){let t=new ArrayBuffer(a*o);return i.decodeGltfBuffer(new Uint8Array(t),a,o,s,e.mode,e.filter),t})})}return null}},Qd=class{constructor(e){this.name=Q.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let e of r.primitives)if(e.mode!==uf.TRIANGLES&&e.mode!==uf.TRIANGLE_STRIP&&e.mode!==uf.TRIANGLE_FAN&&e.mode!==void 0)return null;let i=n.extensions[this.name].attributes,a=[],o={};for(let e in i)a.push(this.parser.getDependency(`accessor`,i[e]).then(t=>(o[e]=t,o[e])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(e=>{let t=e.pop(),n=t.isGroup?t.children:[t],r=e[0].count,i=[];for(let e of n){let t=new H,n=new V,a=new Kt,s=new V(1,1,1),c=new vc(e.geometry,e.material,r);for(let e=0;e<r;e++)o.TRANSLATION&&n.fromBufferAttribute(o.TRANSLATION,e),o.ROTATION&&a.fromBufferAttribute(o.ROTATION,e),o.SCALE&&s.fromBufferAttribute(o.SCALE,e),c.setMatrixAt(e,t.compose(n,a,s));for(let t in o)if(t===`_COLOR_0`){let e=o[t];c.instanceColor=new uc(e.array,e.itemSize,e.normalized)}else t!==`TRANSLATION`&&t!==`ROTATION`&&t!==`SCALE`&&e.geometry.setAttribute(t,o[t]);Yn.prototype.copy.call(c,e),this.parser.assignFinalMaterial(c),i.push(c)}return t.isGroup?(t.clear(),t.add(...i),t):i[0]}))}},$d=`glTF`,ef=12,tf={JSON:1313821514,BIN:5130562},nf=class{constructor(e){this.name=Q.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ef),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==$d)throw Error(`THREE.GLTFLoader: Unsupported glTF-Binary header.`);if(this.header.version<2)throw Error(`THREE.GLTFLoader: Legacy binary file detected.`);let r=this.header.length-ef,i=new DataView(e,ef),a=0;for(;a<r;){let t=i.getUint32(a,!0);a+=4;let r=i.getUint32(a,!0);if(a+=4,r===tf.JSON){let r=new Uint8Array(e,ef+a,t);this.content=n.decode(r)}else if(r===tf.BIN){let n=ef+a;this.body=e.slice(n,n+t)}a+=t}if(this.content===null)throw Error(`THREE.GLTFLoader: JSON content not found.`)}},rf=class{constructor(e,t){if(!t)throw Error(`THREE.GLTFLoader: No DRACOLoader instance provided.`);this.name=Q.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,i=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},s={},c={};for(let e in a){let t=hf[e]||e.toLowerCase();o[t]=a[e]}for(let t in e.attributes){let r=hf[t]||t.toLowerCase();if(a[t]!==void 0){let i=n.accessors[e.attributes[t]];c[r]=df[i.componentType].name,s[r]=i.normalized===!0}}return t.getDependency(`bufferView`,i).then(function(e){return new Promise(function(t,n){r.decodeDracoFile(e,function(e){for(let t in e.attributes){let n=e.attributes[t],r=s[t];r!==void 0&&(n.normalized=r)}t(e)},o,c,Be,n)})})}},af=class{constructor(){this.name=Q.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},of=class{constructor(){this.name=Q.KHR_MESH_QUANTIZATION}},sf=class extends Qc{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r*3+r;for(let e=0;e!==r;e++)t[e]=n[i+e];return t}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=o*2,c=o*3,l=r-t,u=(n-t)/l,d=u*u,f=d*u,p=e*c,m=p-c,h=-2*f+3*d,g=f-d,_=1-h,v=g-d+u;for(let e=0;e!==o;e++){let t=a[m+e+o],n=a[m+e+s]*l,r=a[p+e+o],c=a[p+e]*l;i[e]=_*t+v*n+h*r+g*c}return i}},cf=new Kt,lf=class extends sf{interpolate_(e,t,n,r){let i=super.interpolate_(e,t,n,r);return cf.fromArray(i).normalize().toArray(i),i}},uf={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},df={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ff={9728:i,9729:s,9984:a,9985:c,9986:o,9987:l},pf={33071:n,33648:r,10497:t},mf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},hf={POSITION:`position`,NORMAL:`normal`,TANGENT:`tangent`,TEXCOORD_0:`uv`,TEXCOORD_1:`uv1`,TEXCOORD_2:`uv2`,TEXCOORD_3:`uv3`,COLOR_0:`color`,WEIGHTS_0:`skinWeight`,JOINTS_0:`skinIndex`},gf={scale:`scale`,translation:`position`,rotation:`quaternion`,weights:`morphTargetInfluences`},_f={CUBICSPLINE:void 0,LINEAR:je,STEP:Ae},vf={OPAQUE:`OPAQUE`,MASK:`MASK`,BLEND:`BLEND`};function yf(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new Y({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),e.DefaultMaterial}function bf(e,t,n){for(let r in n.extensions)e[r]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[r]=n.extensions[r])}function xf(e,t){t.extras!==void 0&&(typeof t.extras==`object`?Object.assign(e.userData,t.extras):console.warn(`THREE.GLTFLoader: Ignoring primitive type .extras, `+t.extras))}function Sf(e,t,n){let r=!1,i=!1,a=!1;for(let e=0,n=t.length;e<n;e++){let n=t[e];if(n.POSITION!==void 0&&(r=!0),n.NORMAL!==void 0&&(i=!0),n.COLOR_0!==void 0&&(a=!0),r&&i&&a)break}if(!r&&!i&&!a)return Promise.resolve(e);let o=[],s=[],c=[];for(let l=0,u=t.length;l<u;l++){let u=t[l];if(r){let t=u.POSITION===void 0?e.attributes.position:n.getDependency(`accessor`,u.POSITION);o.push(t)}if(i){let t=u.NORMAL===void 0?e.attributes.normal:n.getDependency(`accessor`,u.NORMAL);s.push(t)}if(a){let t=u.COLOR_0===void 0?e.attributes.color:n.getDependency(`accessor`,u.COLOR_0);c.push(t)}}return Promise.all([Promise.all(o),Promise.all(s),Promise.all(c)]).then(function(t){let n=t[0],o=t[1],s=t[2];return r&&(e.morphAttributes.position=n),i&&(e.morphAttributes.normal=o),a&&(e.morphAttributes.color=s),e.morphTargetsRelative=!0,e})}function Cf(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let n=0,r=t.weights.length;n<r;n++)e.morphTargetInfluences[n]=t.weights[n];if(t.extras&&Array.isArray(t.extras.targetNames)){let n=t.extras.targetNames;if(e.morphTargetInfluences.length===n.length){e.morphTargetDictionary={};for(let t=0,r=n.length;t<r;t++)e.morphTargetDictionary[n[t]]=t}else console.warn(`THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.`)}}function wf(e){let t,n=e.extensions&&e.extensions[Q.KHR_DRACO_MESH_COMPRESSION];if(t=n?`draco:`+n.bufferView+`:`+n.indices+`:`+Tf(n.attributes):e.indices+`:`+Tf(e.attributes)+`:`+e.mode,e.targets!==void 0)for(let n=0,r=e.targets.length;n<r;n++)t+=`:`+Tf(e.targets[n]);return t}function Tf(e){let t=``,n=Object.keys(e).sort();for(let r=0,i=n.length;r<i;r++)t+=n[r]+`:`+e[n[r]]+`;`;return t}function Ef(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw Error(`THREE.GLTFLoader: Unsupported normalized accessor component type.`)}}function Df(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0?`image/jpeg`:e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0?`image/webp`:e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0?`image/ktx2`:`image/png`}var Of=new H,kf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Pd,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,i=!1,a=-1;if(typeof navigator<`u`){let e=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(e)===!0;let t=e.match(/Version\/(\d+)/);r=n&&t?parseInt(t[1],10):-1,i=e.indexOf(`Firefox`)>-1,a=i?e.match(/Firefox\/([0-9]+)\./)[1]:-1}this.textureLoader=typeof createImageBitmap>`u`||n&&r<17||i&&a<98?new bl(this.options.manager):new Ll(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new vl(this.options.manager),this.fileLoader.setResponseType(`arraybuffer`),this.options.crossOrigin===`use-credentials`&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,i=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(e){return e._markDefs&&e._markDefs()}),Promise.all(this._invokeAll(function(e){return e.beforeRoot&&e.beforeRoot()})).then(function(){return Promise.all([n.getDependencies(`scene`),n.getDependencies(`animation`),n.getDependencies(`camera`)])}).then(function(t){let a={scene:t[0][r.scene||0],scenes:t[0],animations:t[1],cameras:t[2],asset:r.asset,parser:n,userData:{}};return bf(i,a,r),xf(a,r),Promise.all(n._invokeAll(function(e){return e.afterRoot&&e.afterRoot(a)})).then(function(){for(let e of a.scenes)e.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n].joints;for(let t=0,n=r.length;t<n;t++)e[r[t]].isBone=!0}for(let t=0,r=e.length;t<r;t++){let r=e[t];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),i=(e,t)=>{let n=this.associations.get(e);n!=null&&this.associations.set(t,n);for(let[n,r]of e.children.entries())i(r,t.children[n])};return i(n,r),r.name+=`_instance_`+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let i=e(t[r]);i&&n.push(i)}return n}getDependency(e,t){let n=e+`:`+t,r=this.cache.get(n);if(!r){switch(e){case`scene`:r=this.loadScene(t);break;case`node`:r=this._invokeOne(function(e){return e.loadNode&&e.loadNode(t)});break;case`mesh`:r=this._invokeOne(function(e){return e.loadMesh&&e.loadMesh(t)});break;case`accessor`:r=this.loadAccessor(t);break;case`bufferView`:r=this._invokeOne(function(e){return e.loadBufferView&&e.loadBufferView(t)});break;case`buffer`:r=this.loadBuffer(t);break;case`material`:r=this._invokeOne(function(e){return e.loadMaterial&&e.loadMaterial(t)});break;case`texture`:r=this._invokeOne(function(e){return e.loadTexture&&e.loadTexture(t)});break;case`skin`:r=this.loadSkin(t);break;case`animation`:r=this._invokeOne(function(e){return e.loadAnimation&&e.loadAnimation(t)});break;case`camera`:r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(n){return n!=this&&n.getDependency&&n.getDependency(e,t)}),!r)throw Error(`Unknown type: `+e)}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e===`mesh`?`es`:`s`)]||[];t=Promise.all(r.map(function(t,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!==`arraybuffer`)throw Error(`THREE.GLTFLoader: `+t.type+` buffer type is not supported.`);if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Q.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(e,i){n.load(Il.resolveURL(t.uri,r.path),e,void 0,function(){i(Error(`THREE.GLTFLoader: Failed to load buffer "`+t.uri+`".`))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency(`buffer`,t.buffer).then(function(e){let n=t.byteLength||0,r=t.byteOffset||0;return e.slice(r,r+n)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let e=mf[r.type],t=df[r.componentType],n=r.normalized===!0,i=new t(r.count*e);return Promise.resolve(new br(i,e,n))}let i=[];return r.bufferView===void 0?i.push(null):i.push(this.getDependency(`bufferView`,r.bufferView)),r.sparse!==void 0&&(i.push(this.getDependency(`bufferView`,r.sparse.indices.bufferView)),i.push(this.getDependency(`bufferView`,r.sparse.values.bufferView))),Promise.all(i).then(function(e){let i=e[0],a=mf[r.type],o=df[r.componentType],s=o.BYTES_PER_ELEMENT,c=s*a,l=r.byteOffset||0,u=r.bufferView===void 0?void 0:n.bufferViews[r.bufferView].byteStride,d=r.normalized===!0,f,p;if(u&&u!==c){let e=Math.floor(l/u),n=`InterleavedBuffer:`+r.bufferView+`:`+r.componentType+`:`+e+`:`+r.count,c=t.cache.get(n);c||(f=new o(i,e*u,r.count*u/s),c=new As(f,u/s),t.cache.add(n,c)),p=new Ms(c,a,l%u/s,d)}else f=i===null?new o(r.count*a):new o(i,l,r.count*a),p=new br(f,a,d);if(r.sparse!==void 0){let t=mf.SCALAR,n=df[r.sparse.indices.componentType],s=r.sparse.indices.byteOffset||0,c=r.sparse.values.byteOffset||0,l=new n(e[1],s,r.sparse.count*t),u=new o(e[2],c,r.sparse.count*a);i!==null&&(p=new br(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let e=0,t=l.length;e<t;e++){let t=l[e];if(p.setX(t,u[e*a]),a>=2&&p.setY(t,u[e*a+1]),a>=3&&p.setZ(t,u[e*a+2]),a>=4&&p.setW(t,u[e*a+3]),a>=5)throw Error(`THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.`)}p.normalized=d}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,i=t.images[r],a=this.textureLoader;if(i.uri){let e=n.manager.getHandler(i.uri);e!==null&&(a=e)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let r=this,i=this.json,a=i.textures[e],o=i.images[t],s=(o.uri||o.bufferView)+`:`+a.sampler;if(this.textureCache[s])return this.textureCache[s];let c=this.loadImageSource(t,n).then(function(t){t.flipY=!1,t.name=a.name||o.name||``,t.name===``&&typeof o.uri==`string`&&o.uri.startsWith(`data:image/`)===!1&&(t.name=o.uri);let n=(i.samplers||{})[a.sampler]||{};return t.magFilter=ff[n.magFilter]||1006,t.minFilter=ff[n.minFilter]||1008,t.wrapS=pf[n.wrapS]||1e3,t.wrapT=pf[n.wrapT]||1e3,t.generateMipmaps=!t.isCompressedTexture&&t.minFilter!==1003&&t.minFilter!==1006,r.associations.set(t,{textures:e}),t}).catch(function(){return null});return this.textureCache[s]=c,c}loadImageSource(e,t){let n=this,r=this.json,i=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(e=>e.clone());let a=r.images[e],o=self.URL||self.webkitURL,s=a.uri||``,c=!1;if(a.bufferView!==void 0)s=n.getDependency(`bufferView`,a.bufferView).then(function(e){c=!0;let t=new Blob([e],{type:a.mimeType});return s=o.createObjectURL(t),s});else if(a.uri===void 0)throw Error(`THREE.GLTFLoader: Image `+e+` is missing URI and bufferView`);let l=Promise.resolve(s).then(function(e){return new Promise(function(n,r){let a=n;t.isImageBitmapLoader===!0&&(a=function(e){let t=new Vt(e);t.needsUpdate=!0,n(t)}),t.load(Il.resolveURL(e,i.path),a,void 0,r)})}).then(function(e){return c===!0&&o.revokeObjectURL(s),xf(e,a),e.userData.mimeType=a.mimeType||Df(a.uri),e}).catch(function(e){throw console.error(`THREE.GLTFLoader: Couldn't load texture`,s),e});return this.sourceCache[e]=l,l}assignTexture(e,t,n,r){let i=this;return this.getDependency(`texture`,n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),i.extensions[Q.KHR_TEXTURE_TRANSFORM]){let e=n.extensions===void 0?void 0:n.extensions[Q.KHR_TEXTURE_TRANSFORM];if(e){let t=i.associations.get(a);a=i.extensions[Q.KHR_TEXTURE_TRANSFORM].extendTexture(a,e),i.associations.set(a,t)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,i=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let e=`PointsMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new Nc,gr.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,t.sizeAttenuation=!1,this.cache.add(e,t)),n=t}else if(e.isLine){let e=`LineBasicMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new yc,gr.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,this.cache.add(e,t)),n=t}if(r||i||a){let e=`ClonedMaterial:`+n.uuid+`:`;r&&(e+=`derivative-tangents:`),i&&(e+=`vertex-colors:`),a&&(e+=`flat-shading:`);let t=this.cache.get(e);t||(t=n.clone(),i&&(t.vertexColors=!0),a&&(t.flatShading=!0),r&&(t.normalScale&&(t.normalScale.y*=-1),t.clearcoatNormalScale&&(t.clearcoatNormalScale.y*=-1)),this.cache.add(e,t),this.associations.set(t,this.associations.get(n))),n=t}e.material=n}getMaterialType(){return Y}loadMaterial(e){let t=this,n=this.json,r=this.extensions,i=n.materials[e],a,o={},s=i.extensions||{},c=[];if(s[Q.KHR_MATERIALS_UNLIT]){let e=r[Q.KHR_MATERIALS_UNLIT];a=e.getMaterialType(),c.push(e.extendParams(o,i,t))}else{let n=i.pbrMetallicRoughness||{};if(o.color=new U(1,1,1),o.opacity=1,Array.isArray(n.baseColorFactor)){let e=n.baseColorFactor;o.color.setRGB(e[0],e[1],e[2],Be),o.opacity=e[3]}n.baseColorTexture!==void 0&&c.push(t.assignTexture(o,`map`,n.baseColorTexture,ze)),o.metalness=n.metallicFactor===void 0?1:n.metallicFactor,o.roughness=n.roughnessFactor===void 0?1:n.roughnessFactor,n.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,`metalnessMap`,n.metallicRoughnessTexture)),c.push(t.assignTexture(o,`roughnessMap`,n.metallicRoughnessTexture))),a=this._invokeOne(function(t){return t.getMaterialType&&t.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(t){return t.extendMaterialParams&&t.extendMaterialParams(e,o)})))}i.doubleSided===!0&&(o.side=2);let l=i.alphaMode||vf.OPAQUE;if(l===vf.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,l===vf.MASK&&(o.alphaTest=i.alphaCutoff===void 0?.5:i.alphaCutoff)),i.normalTexture!==void 0&&a!==_r&&(c.push(t.assignTexture(o,`normalMap`,i.normalTexture)),o.normalScale=new L(1,1),i.normalTexture.scale!==void 0)){let e=i.normalTexture.scale;o.normalScale.set(e,e)}if(i.occlusionTexture!==void 0&&a!==_r&&(c.push(t.assignTexture(o,`aoMap`,i.occlusionTexture)),i.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=i.occlusionTexture.strength)),i.emissiveFactor!==void 0&&a!==_r){let e=i.emissiveFactor;o.emissive=new U().setRGB(e[0],e[1],e[2],Be)}return i.emissiveTexture!==void 0&&a!==_r&&c.push(t.assignTexture(o,`emissiveMap`,i.emissiveTexture,ze)),Promise.all(c).then(function(){let n=new a(o);return i.name&&(n.name=i.name),xf(n,i),t.associations.set(n,{materials:e}),i.extensions&&bf(r,n,i),n})}createUniqueName(e){let t=Yl.sanitizeNodeName(e||``);return t in this.nodeNamesUsed?t+`_`+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function i(e){return n[Q.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e,t).then(function(n){return jf(n,e,t)})}let a=[];for(let n=0,o=e.length;n<o;n++){let o=e[n],s=wf(o),c=r[s];if(c)a.push(c.promise);else{let e;e=o.extensions&&o.extensions[Q.KHR_DRACO_MESH_COMPRESSION]?i(o):jf(new jr,o,t),r[s]={primitive:o,promise:e},a.push(e)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,r=this.extensions,i=n.meshes[e],a=i.primitives,o=[];for(let e=0,t=a.length;e<t;e++){let t=a[e].material===void 0?yf(this.cache):this.getDependency(`material`,a[e].material);o.push(t)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(n){let o=n.slice(0,n.length-1),s=n[n.length-1],c=[];for(let n=0,l=s.length;n<l;n++){let l=s[n],u=a[n],d,f=o[n];if(u.mode===uf.TRIANGLES||u.mode===uf.TRIANGLE_STRIP||u.mode===uf.TRIANGLE_FAN||u.mode===void 0)d=i.isSkinnedMesh===!0?new ic(l,f):new W(l,f),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),u.mode===uf.TRIANGLE_STRIP?d.geometry=Md(d.geometry,1):u.mode===uf.TRIANGLE_FAN&&(d.geometry=Md(d.geometry,2));else if(u.mode===uf.LINES)d=new jc(l,f);else if(u.mode===uf.LINE_STRIP)d=new Dc(l,f);else if(u.mode===uf.LINE_LOOP)d=new Mc(l,f);else if(u.mode===uf.POINTS)d=new Rc(l,f);else throw Error(`THREE.GLTFLoader: Primitive mode unsupported: `+u.mode);Object.keys(d.geometry.morphAttributes).length>0&&Cf(d,i),d.name=t.createUniqueName(i.name||`mesh_`+e),xf(d,i),u.extensions&&bf(r,d,u),t.assignFinalMaterial(d),c.push(d)}for(let n=0,r=c.length;n<r;n++)t.associations.set(c[n],{meshes:e,primitives:n});if(c.length===1)return i.extensions&&bf(r,c[0],i),c[0];let l=new J;i.extensions&&bf(r,l,i),t.associations.set(l,{meshes:e});for(let e=0,t=c.length;e<t;e++)l.add(c[e]);return l})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r)console.warn(`THREE.GLTFLoader: Missing camera parameters.`);else return n.type===`perspective`?t=new ri(vt.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type===`orthographic`&&(t=new ki(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),xf(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let e=0,r=t.joints.length;e<r;e++)n.push(this._loadNodeShallow(t.joints[e]));return t.inverseBindMatrices===void 0?n.push(null):n.push(this.getDependency(`accessor`,t.inverseBindMatrices)),Promise.all(n).then(function(e){let n=e.pop(),r=e,i=[],a=[];for(let e=0,o=r.length;e<o;e++){let o=r[e];if(o){i.push(o);let t=new H;n!==null&&t.fromArray(n.array,e*16),a.push(t)}else console.warn(`THREE.GLTFLoader: Joint "%s" could not be found.`,t.joints[e])}return new lc(i,a)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],i=r.name?r.name:`animation_`+e,a=[],o=[],s=[],c=[],l=[];for(let e=0,t=r.channels.length;e<t;e++){let t=r.channels[e],n=r.samplers[t.sampler],i=t.target,u=i.node,d=r.parameters===void 0?n.input:r.parameters[n.input],f=r.parameters===void 0?n.output:r.parameters[n.output];i.node!==void 0&&(a.push(this.getDependency(`node`,u)),o.push(this.getDependency(`accessor`,d)),s.push(this.getDependency(`accessor`,f)),c.push(n),l.push(i))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(s),Promise.all(c),Promise.all(l)]).then(function(e){let t=e[0],r=e[1],a=e[2],o=e[3],s=e[4],c=[];for(let e=0,i=t.length;e<i;e++){let i=t[e],l=r[e],u=a[e],d=o[e],f=s[e];if(i===void 0)continue;i.updateMatrix&&i.updateMatrix();let p=n._createAnimationTracks(i,l,u,d,f);if(p)for(let e=0;e<p.length;e++)c.push(p[e])}return new ul(i,void 0,c)})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency(`mesh`,r.mesh).then(function(e){let t=n._getNodeRef(n.meshCache,r.mesh,e);return r.weights!==void 0&&t.traverse(function(e){if(e.isMesh)for(let t=0,n=r.weights.length;t<n;t++)e.morphTargetInfluences[t]=r.weights[t]}),t})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],i=n._loadNodeShallow(e),a=[],o=r.children||[];for(let e=0,t=o.length;e<t;e++)a.push(n.getDependency(`node`,o[e]));let s=r.skin===void 0?Promise.resolve(null):n.getDependency(`skin`,r.skin);return Promise.all([i,Promise.all(a),s]).then(function(e){let t=e[0],n=e[1],r=e[2];r!==null&&t.traverse(function(e){e.isSkinnedMesh&&e.bind(r,Of)});for(let e=0,r=n.length;e<r;e++)t.add(n[e]);return t})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let i=t.nodes[e],a=i.name?r.createUniqueName(i.name):``,o=[],s=r._invokeOne(function(t){return t.createNodeMesh&&t.createNodeMesh(e)});return s&&o.push(s),i.camera!==void 0&&o.push(r.getDependency(`camera`,i.camera).then(function(e){return r._getNodeRef(r.cameraCache,i.camera,e)})),r._invokeAll(function(t){return t.createNodeAttachment&&t.createNodeAttachment(e)}).forEach(function(e){o.push(e)}),this.nodeCache[e]=Promise.all(o).then(function(t){let o;if(o=i.isBone===!0?new ac:t.length>1?new J:t.length===1?t[0]:new Yn,o!==t[0])for(let e=0,n=t.length;e<n;e++)o.add(t[e]);if(i.name&&(o.userData.name=i.name,o.name=a),xf(o,i),i.extensions&&bf(n,o,i),i.matrix!==void 0){let e=new H;e.fromArray(i.matrix),o.applyMatrix4(e)}else i.translation!==void 0&&o.position.fromArray(i.translation),i.rotation!==void 0&&o.quaternion.fromArray(i.rotation),i.scale!==void 0&&o.scale.fromArray(i.scale);return r.associations.has(o)||r.associations.set(o,{}),r.associations.get(o).nodes=e,o}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,i=new J;n.name&&(i.name=r.createUniqueName(n.name)),xf(i,n),n.extensions&&bf(t,i,n);let a=n.nodes||[],o=[];for(let e=0,t=a.length;e<t;e++)o.push(r.getDependency(`node`,a[e]));return Promise.all(o).then(function(e){for(let t=0,n=e.length;t<n;t++)i.add(e[t]);return r.associations=(e=>{let t=new Map;for(let[e,n]of r.associations)(e instanceof gr||e instanceof Vt)&&t.set(e,n);return e.traverse(e=>{let n=r.associations.get(e);n!=null&&t.set(e,n)}),t})(i),i})}_createAnimationTracks(e,t,n,r,i){let a=[],o=e.name?e.name:e.uuid,s=[];gf[i.path]===gf.weights?e.traverse(function(e){e.morphTargetInfluences&&s.push(e.name?e.name:e.uuid)}):s.push(o);let c;switch(gf[i.path]){case gf.weights:c=al;break;case gf.rotation:c=sl;break;case gf.position:case gf.scale:c=ll;break;default:switch(n.itemSize){case 1:c=al;break;default:c=ll}}let l=r.interpolation===void 0?je:_f[r.interpolation],u=this._getArrayFromAccessor(n);for(let e=0,n=s.length;e<n;e++){let n=new c(s[e]+`.`+gf[i.path],t.array,u,l);r.interpolation===`CUBICSPLINE`&&this._createCubicSplineTrackInterpolant(n),a.push(n)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let e=Ef(t.constructor),n=new Float32Array(t.length);for(let r=0,i=t.length;r<i;r++)n[r]=t[r]*e;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(e){return new(this instanceof sl?lf:sf)(this.times,this.values,this.getValueSize()/3,e)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Af(e,t,n){let r=t.attributes,i=new Yt;if(r.POSITION!==void 0){let e=n.json.accessors[r.POSITION],t=e.min,a=e.max;if(t!==void 0&&a!==void 0){if(i.set(new V(t[0],t[1],t[2]),new V(a[0],a[1],a[2])),e.normalized){let t=Ef(df[e.componentType]);i.min.multiplyScalar(t),i.max.multiplyScalar(t)}}else{console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`);return}}else return;let a=t.targets;if(a!==void 0){let e=new V,t=new V;for(let r=0,i=a.length;r<i;r++){let i=a[r];if(i.POSITION!==void 0){let r=n.json.accessors[i.POSITION],a=r.min,o=r.max;if(a!==void 0&&o!==void 0){if(t.setX(Math.max(Math.abs(a[0]),Math.abs(o[0]))),t.setY(Math.max(Math.abs(a[1]),Math.abs(o[1]))),t.setZ(Math.max(Math.abs(a[2]),Math.abs(o[2]))),r.normalized){let e=Ef(df[r.componentType]);t.multiplyScalar(e)}e.max(t)}else console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`)}}i.expandByVector(e)}e.boundingBox=i;let o=new mn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,e.boundingSphere=o}function jf(e,t,n){let r=t.attributes,i=[];function a(t,r){return n.getDependency(`accessor`,t).then(function(t){e.setAttribute(r,t)})}for(let t in r){let n=hf[t]||t.toLowerCase();n in e.attributes||i.push(a(r[t],n))}if(t.indices!==void 0&&!e.index){let r=n.getDependency(`accessor`,t.indices).then(function(t){e.setIndex(t)});i.push(r)}return z.workingColorSpace!==`srgb-linear`&&`COLOR_0`in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${z.workingColorSpace}" not supported.`),xf(e,t),Af(e,t,n),Promise.all(i).then(function(){return t.targets===void 0?e:Sf(e,t.targets,n)})}var Mf=class{constructor(){this.boxes=[],this.sightBlockers=[],this.dynamic=()=>[]}move(e,t,n,r,i){let a=e+n,o=t+r,s=this.boxes.concat(this.dynamic());for(let e=0;e<3;e++){let e=!1;for(let t of s){if(a<t.x1-i||a>t.x2+i||o<t.z1-i||o>t.z2+i)continue;let n=Math.max(t.x1,Math.min(a,t.x2)),r=Math.max(t.z1,Math.min(o,t.z2)),s=a-n,c=o-r,l=s*s+c*c;if(!(l>=i*i)){if(l<1e-8){let e=[a-t.x1,t.x2-a,o-t.z1,t.z2-o],n=Math.min(...e);n===e[0]?a=t.x1-i:n===e[1]?a=t.x2+i:o=n===e[2]?t.z1-i:t.z2+i}else{let e=Math.sqrt(l),t=i-e;s/=e,c/=e,a+=s*t,o+=c*t}e=!0}}if(!e)break}return[a,o]}canPlace(e,t,n=.3){let r=this.boxes.concat(this.dynamic());for(let i of r)if(e>i.x1-n&&e<i.x2+n&&t>i.z1-n&&t<i.z2+n){let r=Math.max(i.x1,Math.min(e,i.x2)),a=Math.max(i.z1,Math.min(t,i.z2)),o=e-r,s=t-a;if(o*o+s*s<n*n)return!1}return!0}blocked(e,t,n,r){for(let i of this.sightBlockers)if(Nf(e,t,n,r,i))return!0;return!1}};function Nf(e,t,n,r,i){let a=0,o=1,s=n-e,c=r-t,l=[-s,s,-c,c],u=[e-i.x1,i.x2-e,t-i.z1,i.z2-t];for(let e=0;e<4;e++)if(Math.abs(l[e])<1e-9){if(u[e]<0)return!1}else{let t=u[e]/l[e];if(l[e]<0){if(t>o)return!1;t>a&&(a=t)}else{if(t<a)return!1;t<o&&(o=t)}}return a<=o}var Pf=new Map;function Ff(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}function If(e,n,r){let i=document.createElement(`canvas`);i.width=128,i.height=128;let a=i.getContext(`2d`);if(!a)throw Error(`Could not create microdetail texture`);let o=a.createImageData(128,128),s=Ff(e),c=()=>(s^=s<<13,s^=s>>>17,s^=s<<5,(s>>>0)/4294967296),l=/wood/i.test(e),u=/steel|metal|iron/i.test(e),d=/brick|plaster/i.test(e);for(let e=0;e<128;e++)for(let t=0;t<128;t++){let n=c()-.5,r=l?Math.sin((e+n*2)*.42)*11:u?Math.sin(t*.59)*5:d?Math.sin((t+e*.27)*.14)*8:Math.sin(t*.65+e*.27)*4,i=Math.round(Math.max(115,Math.min(252,205+n*55+r))),a=(e*128+t)*4;o.data[a]=o.data[a+1]=o.data[a+2]=i,o.data[a+3]=255}a.putImageData(o,0,0);let f=new Bc(i);return f.wrapS=f.wrapT=t,f.repeat.set(n,r),f.anisotropy=2,f.generateMipmaps=!0,f}function Lf(e,t,n,r){let i=[t,n,r].join(`:`),a=Pf.get(i);a||(a=If(t,n,r),Pf.set(i,a)),e.roughness=/metal|steel/i.test(t)?.7:.98,e.roughnessMap=a,e.bumpMap=a,e.bumpScale=/wood/i.test(t)?.016:/plaster/i.test(t)?.024:/concrete|brick|asphalt/i.test(t)?.028:.012,e.needsUpdate=!0}var Rf=e=>`./assets/${e.replace(/^\/+/,``)}`,zf=new Nd,Bf=new Map;function Vf(e){let t=Bf.get(e);return t||(t=new Promise((t,n)=>{zf.load(Rf(e),t,void 0,n)}).catch(t=>{throw Bf.delete(e),t}),Bf.set(e,t)),t}var Hf=new bl;function Uf(e,n=16777215,r=1,i=1){let a=new Y({color:n,roughness:.88});return Lf(a,e,r,i),Hf.load(Rf(`textures/${e}`),e=>{e.colorSpace=ze,e.wrapS=e.wrapT=t,e.repeat.set(r,i),e.anisotropy=2,a.map=e,a.needsUpdate=!0},void 0,t=>console.warn(`[PrisonWorld] Texture failed, keeping solid material:`,e,t)),a}async function Wf(e,t,n,r,i={}){try{let{scene:a}=await Vf(n),o=a.clone(!0);i.rotateY&&(o.rotation.y=i.rotateY),o.updateMatrixWorld(!0);let s=new Yt().setFromObject(o),c=s.getSize(new V);if(c.x<1e-5||c.y<1e-5||c.z<1e-5)throw Error(`Zero-size GLB model ${n}`);let l=i.height?i.height/c.y:Math.min(r.width/c.x,r.depth/c.z,2.75/c.y)*.94,u=s.getCenter(new V),d=new J;o.scale.setScalar(l),o.position.set(-u.x*l,-s.min.y*l,-u.z*l),o.traverse(e=>{e instanceof W&&(e.castShadow=!0,e.receiveShadow=!0)}),d.add(o),e.parent&&(e.remove(t),e.add(d))}catch(e){console.warn(`[PrisonWorld] GLB failed, keeping procedural fallback:`,n,e)}}var Gf=(e,t=.1,n=.7,r=0)=>new Y({color:e,metalness:t,roughness:n,emissive:r,emissiveIntensity:r?.45:0}),Kf=Gf(3425879,.75,.37),qf=Gf(1583668,.76,.41),Jf=Gf(8557469,.86,.3),Yf=Gf(1516847,.15,.8),Xf=Gf(8935220,.05,.72),Zf=Gf(12159316,.02,.7),Qf=Gf(14983490,.15,.45),$f=Gf(3566464,.28,.24),ep=Gf(16439181,.12,.36,15051089),tp=Gf(7436670,.05,.85),np=Gf(12997435,.2,.55),rp=Gf(14870754,.1,.7),ip=Gf(4554410,.3,.55);function $(e,t,n,r,i,a,o,s,c){let l=new W(new G(a,o,s),c);return l.name=t,l.position.set(n,r,i),l.castShadow=!0,l.receiveShadow=!0,e.add(l),l}function ap(e,t,n,r,i,a,o,s,c=12){let l=new W(new Hc(a,a,o,c),s);return l.name=t,l.position.set(n,r,i),l.castShadow=!0,l.receiveShadow=!0,e.add(l),l}function op(e,t,n,r,i,a){let o=r.clone().sub(n),s=ap(e,t,0,0,0,i,o.length(),a,8);s.position.copy(n).add(r).multiplyScalar(.5),s.quaternion.setFromUnitVectors(new V(0,1,0),o.normalize())}var sp=(e,t,n)=>new V(e,t,n);function cp(e){let t=new J;t.name=`watchtower.steel.cabin`;let n=e.w*.39,r=e.d*.39;$(t,`foundation`,0,.17,0,e.w,.34,e.d,tp);for(let e of[-1,1])for(let i of[-1,1]){let a=e*n,o=i*r;ap(t,`tower.pillar`,a,2.15,o,.07,3.9,Kf,10),op(t,`tower.crossBrace`,sp(a,.47,o),sp(-a,2.9,o),.035,Jf),op(t,`tower.crossBrace`,sp(a,2.3,o),sp(a,3.8,-o),.027,qf)}for(let i of[1.12,2.45,3.82])$(t,`crossbeam.x`,0,i,-r,e.w*.8,.09,.1,Kf),$(t,`crossbeam.x`,0,i,r,e.w*.8,.09,.1,Kf),$(t,`crossbeam.z`,-n,i,0,.1,.09,e.d*.8,Kf),$(t,`crossbeam.z`,n,i,0,.1,.09,e.d*.8,Kf);$(t,`upper.platform`,0,4.08,0,e.w*1.03,.15,e.d*1.03,qf),$(t,`cabin.base`,0,4.52,0,e.w*.88,.78,e.d*.88,Kf);for(let e of[-.92,.92])for(let n of[-.92,.92])ap(t,`cabin.corner`,e,5.4,n,.05,1.1,Jf,10);for(let e of[-.93,.93])for(let n of[-.48,.48])$(t,`cabin.glass`,e,5.4,n,.045,.76,.7,$f);for(let e of[-.93,.93])for(let n of[-.48,.48])$(t,`cabin.glass`,n,5.4,e,.7,.76,.045,$f);$(t,`cabin.roof`,0,6.04,0,e.w*1.14,.22,e.d*1.14,qf),$(t,`cabin.roof.amberEdge`,0,5.91,-e.d*.55,e.w*.95,.055,.07,Qf);for(let e=0;e<5;e++)$(t,`ladder.step`,0,.55+e*.62,r+.16,.76,.045,.08,Jf);for(let e of[-.4,.4])ap(t,`ladder.rail`,e,2.04,r+.17,.033,3.85,Jf,8);ap(t,`roof.beacon`,0,6.26,0,.09,.21,np,12);let i=ap(t,`searchlight.lens`,.86,6.04,-.86,.17,.07,ep,18);return i.rotation.x=Math.PI/2.45,i.rotation.z=.5,t}function lp(e){let t=new J;t.name=`workshop.assembly-bench`;let n=e.w,r=e.d;for(let e of[-n*.42,n*.42])for(let n of[-r*.37,r*.37])$(t,`bench.leg`,e,.44,n,.095,.88,.095,Kf);$(t,`bench.shelf`,0,.26,0,n*.83,.065,r*.78,qf),$(t,`bench.tabletop`,0,.92,0,n,.105,r,Zf),$(t,`bench.metalrim`,0,.98,-r*.49,n,.035,.035,Jf),$(t,`bench.backwall`,0,1.23,-r*.44,n*.94,.53,.055,qf);for(let e=0;e<9;e++){let i=-n*.41+e*n*.102;ap(t,`pegboard.hole`,i,1.31,-r*.398,.021,.015,Jf,8).rotation.x=Math.PI/2}let i=$(t,`bench.vise`,n*.2,1.07,0,.36,.17,.27,Kf);i.rotation.y=.08,$(t,`vise.jaw`,n*.11,1.2,0,.055,.12,.29,Jf),$(t,`electric.components.tray`,-n*.29,1.045,r*.18,.36,.11,.31,Qf);for(let e=0;e<4;e++)ap(t,`insulated.component`,-n*.29+e%2*.12,1.12,r*.12+Math.floor(e/2)*.12,.035,.065,e%2?np:ip,10);for(let e=0;e<3;e++){let i=ap(t,`repair.tool`,n*.05+e*.09,1.04,-r*.13,.018,.22,e===0?Jf:qf,8);i.rotation.z=Math.PI/2}return t}function up(e){let t=new J;t.name=`storage.rack`;let n=e.w,r=e.d,i=n*.4,a=r*.46;for(let e of[-i,i])for(let n of[-a,a])$(t,`rack.frame`,e,1.02,n,.065,2.04,.065,Kf);for(let e of[.23,.68,1.13,1.58,1.97])$(t,`rack.shelf`,0,e,0,n*.94,.052,r*.96,Jf);let o=Math.max(1,Math.floor(r/.62));for(let e=0;e<o;e++){let i=-r*.45+(e+.5)*r/o,a=e%3==0?Xf:e%3==1?Qf:Yf;$(t,`rack.supplies`,0,.84,i,n*.64,.26,Math.min(r/o*.72,.53),a),e%2==0&&$(t,`rack.toolcase`,0,1.34,i,n*.48,.18,Math.min(r/o*.6,.45),Kf)}return t}function dp(e){let t=new J;t.name=e.kind===`canteen`?`canteen.food-counter`:`service.counter`;let n=e.w,r=e.d;$(t,`counter.body`,0,.46,0,n*.985,.91,r*.94,e.kind===`canteen`?Xf:Kf),$(t,`counter.top`,0,.95,0,n,.1,r,Jf);for(let i=0;i<Math.max(2,Math.floor(n/1.15));i++){let a=Math.max(2,Math.floor(n/1.15));$(t,`counter.front.panel`,-n*.44+n*.88*i/Math.max(1,a-1),.43,r*.475,Math.min(.73,n/a*.85),.56,.018,e.kind===`canteen`?Zf:qf)}if(e.kind===`canteen`)for(let e=0;e<3;e++){let i=(e-1)*Math.min(.7,n*.2);ap(t,`canteen.bowl`,i,1.06,-r*.09,.17,.07,rp,18),ap(t,`canteen.steamer`,i,1.005,-r*.09,.18,.035,Kf,18)}if(e.kind===`counter`&&e.x<-20){t.name=`visitation.glass-booth`;let e=new Y({color:14412542,metalness:0,roughness:.1,transparent:!0,opacity:.25,depthWrite:!1,side:2}),i=new W(new vi(n*.93,1.36),e);i.name=`visitation.shatterproof-glass`,i.position.set(0,1.75,0),i.castShadow=!1,i.receiveShadow=!1,t.add(i);for(let e of[-n*.47,0,n*.47])$(t,`visitation.window.frame`,e,1.75,0,.055,1.5,.065,qf);$(t,`visitation.window.top`,0,2.5,0,n*.97,.07,.08,qf),$(t,`visitation.speaker.tray`,0,1.085,0,.55,.07,r*.76,Jf)}return t}function fp(e){let t=new J;t.name=`bench.slat-seat`;let n=e.w;for(let r of[-n*.41,n*.41])$(t,`bench.leg`,r,.24,0,.13,.47,.4,qf),$(t,`bench.back.post`,r,.66,-e.d*.43,.085,.68,.08,qf);for(let r=0;r<4;r++)$(t,`bench.seat.slat`,0,.48,-e.d*.35+r*e.d*.23,n,.055,e.d*.18,Zf);for(let r=0;r<3;r++)$(t,`bench.back.slat`,0,.68+r*.11,-e.d*.48,n,.075,.06,Xf);return t}function pp(e){let t=new J;t.name=`warehouse.crate`,$(t,`crate.body`,0,e.d*.28,0,e.w*.9,e.d*.56,e.d*.9,Xf);for(let n of[-e.w*.38,e.w*.38])$(t,`crate.strap`,n,e.d*.29,e.d*.455,.07,e.d*.5,.04,qf);for(let n of[-e.d*.38,e.d*.38])$(t,`crate.rail`,0,e.d*.565,n,e.w*.96,.065,.08,Zf);return $(t,`crate.label`,0,e.d*.28,e.d*.461,Math.min(.5,e.w*.7),.15,.02,Qf),t}function mp(e){let t=new J;t.name=`hydraulic.press`,$(t,`machine.base`,0,.29,0,e.w*.8,.56,e.d*.83,qf),$(t,`machine.bed`,0,.71,0,e.w*.68,.12,e.d*.63,Jf);for(let n of[-e.w*.34,e.w*.34])$(t,`press.post`,n,1.42,0,.11,1.33,.16,Kf);return $(t,`machine.crossbar`,0,2.09,0,e.w*.85,.23,e.d*.28,Kf),ap(t,`hydraulic.piston`,0,1.65,0,.11,.72,Jf,16),$(t,`press.head`,0,1.16,0,e.w*.46,.2,e.d*.35,Kf),$(t,`press.hazard`,0,1.9,e.d*.15,e.w*.5,.16,.025,Qf),t}function hp(e){let t=new J;t.name=`wash.trough`,$(t,`basin.pedestal`,0,.33,0,e.w*.83,.66,e.d*.91,tp),$(t,`basin.rim`,0,.75,0,e.w,.13,e.d,rp),$(t,`basin.water`,0,.81,0,e.w*.82,.03,e.d*.82,$f);for(let n=0;n<Math.max(2,Math.floor(e.d/.72));n++){let r=-e.d*.38+n*e.d*.76/Math.max(1,Math.floor(e.d/.72)-1);ap(t,`basin.faucet`,-e.w*.35,1.03,r,.035,.31,Jf,10)}return t}function gp(e){let t=new J;t.name=`yard.water-tank`;let n=Math.min(e.w,e.d)*.4;ap(t,`tank.concrete.pad`,0,.14,0,n*1.15,.28,tp,16),ap(t,`tank.steel.body`,0,1.25,0,n,2.1,Kf,20);for(let e of[.37,.72,1.23,1.75,2.13])ap(t,`tank.rib`,0,e,0,n*1.045,.065,Jf,20);ap(t,`tank.top`,0,2.34,0,n*1.05,.16,qf,20),ap(t,`tank.hatch`,0,2.46,0,n*.36,.12,Qf,12);for(let e=0;e<5;e++)$(t,`tank.ladder.rung`,0,.5+e*.38,-n-.1,.61,.042,.065,Jf);for(let e of[-.31,.31])$(t,`tank.ladder.rail`,e,1.17,-n-.11,.05,1.68,.065,Kf);return $(t,`tank.warning.plate`,0,1.16,-n-.03,n*.92,.28,.045,Qf),t}function _p(e){switch(e.kind){case`tower`:return cp(e);case`workbench`:return lp(e);case`shelf`:return up(e);case`counter`:case`canteen`:return dp(e);case`bench`:return fp(e);case`crate`:return pp(e);case`press`:return mp(e);case`basin`:return hp(e);case`tank`:return gp(e);default:return null}}var vp={roof:new Y({color:2701121,metalness:.34,roughness:.62}),trim:new Y({color:11581106,metalness:.19,roughness:.73}),steel:new Y({color:3493465,metalness:.73,roughness:.36}),concrete:new Y({color:7240055,metalness:.08,roughness:.88}),glass:new Y({color:3429737,metalness:.16,roughness:.25,emissive:596776,emissiveIntensity:.18}),sill:new Y({color:11770484,metalness:.11,roughness:.74}),copper:new Y({color:6521209,metalness:.57,roughness:.49})};function yp(){let e=new J;e.name=`phase3.architecture.render-only`;let t={roof:[],trim:[],steel:[],concrete:[],glass:[],sill:[],copper:[]},n=(e,n,r,i,a,o,s)=>t[e].push({x:n,y:r,z:i,w:a,h:o,d:s}),r=new Y({color:16308890,emissive:15907163,emissiveIntensity:.18,roughness:.44,metalness:.12}),i=[],a=new Hc(.23,.28,.1,12);for(let[t,o]of Object.entries(bu)){let s=(o.x1+o.x2)/2,c=(o.z1+o.z2)/2,l=o.x2-o.x1,u=o.z2-o.z1;n(`roof`,s,3.77,o.z1,l+.24,.2,.34),n(`roof`,s,3.77,o.z2,l+.24,.2,.34),n(`roof`,o.x1,3.77,c,.34,.2,u+.24),n(`roof`,o.x2,3.77,c,.34,.2,u+.24),n(`trim`,s,3.53,o.z1,l,.095,.13),n(`trim`,s,3.53,o.z2,l,.095,.13),n(`trim`,o.x1,3.53,c,.13,.095,u),n(`trim`,o.x2,3.53,c,.13,.095,u),n(`concrete`,s,.22,o.z1,l,.44,.19),n(`concrete`,s,.22,o.z2,l,.44,.19);let d=t===`office`||t===`classroom`||t===`discipline`||t===`visitation`?1:-1,f=d>0?o.z2+.163:o.z1-.163,p=Math.max(1,Math.floor((l-2.5)/2.7));for(let e=0;e<p;e++){let t=o.x1+(e+1)*l/(p+1);n(`steel`,t,2.43,f,1.12,.81,.073),n(`glass`,t,2.43,f+d*.045,.9,.6,.032),n(`steel`,t,2.43,f+d*.081,.055,.62,.042),n(`steel`,t,2.43,f+d*.082,.93,.048,.042),n(`sill`,t,1.99,f+d*.067,1.2,.09,.16),n(`sill`,t,2.89,f+d*.067,1.2,.08,.13)}for(let e of[-1,1]){let t=e<0?o.x1+.16:o.x2-.16;n(`copper`,t,1.71,f,.065,3.12,.07),n(`copper`,t,.14,f,.15,.13,.1)}n(`roof`,s+Math.min(l*.2,2),4.03,c,.65,.4,.56),n(`steel`,s+Math.min(l*.2,2),4.1,c+.3,.52,.17,.07);let m=new W(a,r);m.position.set(s,3.39,c),m.name=`phase3.ceiling-lamp.`+t,m.castShadow=!1,e.add(m),i.push({x:s,z:c})}let o=new G(1,1,1),s=new Yn,c=0,l=0;for(let n of Object.keys(t)){let r=t[n];if(!r.length)continue;let i=new vc(o,vp[n],r.length);i.name=`phase3.architecture.`+n,i.castShadow=n!==`glass`&&n!==`trim`,i.receiveShadow=!0;for(let e=0;e<r.length;e++){let t=r[e];s.position.set(t.x,t.y,t.z),s.rotation.set(0,0,0),s.scale.set(t.w,t.h,t.d),s.updateMatrix(),i.setMatrixAt(e,s.matrix)}i.instanceMatrix.needsUpdate=!0,i.computeBoundingSphere(),e.add(i),c+=r.length,l++}return{root:e,fixtureMaterial:r,fixtureAnchors:i,instancedBatches:l,instanceCount:c}}var bp=420,xp=78,Sp=26;function Cp(e){let t=e|0;return t^=t<<13,t^=t>>>17,t^=t<<5,(t>>>0)/4294967296}function wp(e,t){let n=t/60;return(e*37+11)%5<2&&n>=9&&n<19.5?`rain`:n>=5&&n<=7.2?`haze`:`clear`}var Tp=(e,t)=>!Object.values(bu).some(n=>e>n.x1&&e<n.x2&&t>n.z1&&t<n.z2),Ep=class{constructor(e){this.quality=`medium`,this.wetness=0,this.rainActive=!1,this.rainCount=0,this.dustCount=0,this.puddleMaterials=[],this.rainPositions=new Float32Array(bp*3),this.dustPositions=new Float32Array(234);for(let e=0;e<bp;e++)this.rainPositions[e*3]=(Cp(e*1459+9)-.5)*Sp,this.rainPositions[e*3+1]=Cp(e*1579+13)*8,this.rainPositions[e*3+2]=(Cp(e*1609+17)-.5)*Sp;for(let e=0;e<xp;e++)this.dustPositions[e*3]=(Cp(e*101+21)-.5)*12,this.dustPositions[e*3+1]=Cp(e*103+22)*2.8+.25,this.dustPositions[e*3+2]=(Cp(e*107+23)-.5)*14;this.rainGeometry=new jr,this.rainGeometry.setAttribute(`position`,new br(this.rainPositions,3)),this.dustGeometry=new jr,this.dustGeometry.setAttribute(`position`,new br(this.dustPositions,3)),this.rainMaterial=new Nc({color:12770545,size:.055,transparent:!0,opacity:.64,depthWrite:!1,sizeAttenuation:!0}),this.dustMaterial=new Nc({color:15059871,size:.085,transparent:!0,opacity:.28,depthWrite:!1,sizeAttenuation:!0}),this.rain=new Rc(this.rainGeometry,this.rainMaterial),this.rain.name=`phase3.weather.rain`,this.rain.frustumCulled=!1,this.dust=new Rc(this.dustGeometry,this.dustMaterial),this.dust.name=`phase3.weather.workshop-dust`,this.dust.position.set(20,0,-2),this.dust.frustumCulled=!1,this.puddles=new J,this.puddles.name=`phase3.weather.puddles`;for(let[e,t,n]of[[-8,6,1.1],[6,4,.85],[1,-14,.9],[20,12,.8],[3,19,1.2],[-19,2,.75]]){let r=new _r({color:9746378,transparent:!0,opacity:0,depthWrite:!1,side:2}),i=new W(new Vc(n,20),r);i.rotation.x=-Math.PI/2,i.position.set(e,.029,t),i.renderOrder=1,this.puddles.add(i),this.puddleMaterials.push(r)}this.wetMaterial=new Y({color:7440542,metalness:.2,roughness:.28,transparent:!0,opacity:0,depthWrite:!1}),e.add(this.rain,this.dust,this.puddles),this.setQuality(`medium`)}setQuality(e){this.quality=e,this.rainCount=e===`low`?0:e===`medium`?160:bp,this.dustCount=e===`low`?0:e===`medium`?24:xp,this.rainGeometry.setDrawRange(0,this.rainCount),this.dustGeometry.setDrawRange(0,this.dustCount),e===`low`?(this.rain.visible=!1,this.dust.visible=!1,this.puddles.visible=!1):this.puddles.visible=!0}update(e,t,n,r,i){let a=wp(t,n),o=Tp(r,i),s=+(a===`rain`);if(this.wetness+=(s-this.wetness)*Math.min(1,Math.max(0,e)*1.8),this.rainActive=this.rainCount>0&&s>0&&o,this.rain.visible=this.rainActive,this.rain.visible){this.rain.position.set(r,0,i);for(let t=0;t<this.rainCount;t++){let n=t*3+1;this.rainPositions[n]-=e*(8.8+Cp(t*7+48)*3.2),this.rainPositions[n]<.05&&(this.rainPositions[n]+=8)}this.rainGeometry.attributes.position.needsUpdate=!0,this.rainMaterial.opacity=.54+this.wetness*.18}let c=Math.abs(r-20)<14&&Math.abs(i+2)<15;if(this.dust.visible=this.dustCount>0&&c&&a!==`rain`,this.dust.visible){for(let t=0;t<this.dustCount;t++){let n=t*3+1;this.dustPositions[n]+=e*(.08+Cp(t*2+39)*.09),this.dustPositions[n]>3.18&&(this.dustPositions[n]=.24)}this.dustGeometry.attributes.position.needsUpdate=!0}let l=this.quality===`low`?0:this.wetness*.22;for(let e of this.puddleMaterials)e.opacity=l}snapshot(){return{quality:this.quality,rainParticles:this.rainCount,dustParticles:this.dustCount,rainVisible:this.rain.visible,dustVisible:this.dust.visible,wetness:this.wetness}}},Dp=[{h:0,sky:2440275,sun:12703988,sunI:.48,hemi:.58,night:1},{h:5,sky:3230302,sun:15251374,sunI:.44,hemi:.56,night:.95},{h:6.5,sky:15181183,sun:16765091,sunI:.85,hemi:.69,night:.45},{h:8,sky:9746899,sun:16773069,sunI:1.6,hemi:.84,night:0},{h:12,sky:8632805,sun:16775137,sunI:1.9,hemi:.92,night:0},{h:16,sky:10929628,sun:16771521,sunI:1.45,hemi:.82,night:0},{h:18,sky:13732723,sun:16757118,sunI:.74,hemi:.59,night:.5},{h:19.5,sky:3229790,sun:12441076,sunI:.46,hemi:.56,night:.96},{h:22,sky:2440275,sun:12703988,sunI:.48,hemi:.58,night:1},{h:24,sky:2440275,sun:12703988,sunI:.48,hemi:.58,night:1}],Op=Dp.map(e=>({sky:new U(e.sky),sun:new U(e.sun)}));function kp(e,t){let n=(e%1440+1440)%1440/60,r=0;for(;r<Dp.length-2&&n>Dp[r+1].h;)r++;let i=Dp[r],a=Dp[r+1],o=vt.clamp((n-i.h)/(a.h-i.h),0,1);return t.sky.copy(Op[r].sky).lerp(Op[r+1].sky,o),t.sunlight.copy(Op[r].sun).lerp(Op[r+1].sun,o),t.sunIntensity=vt.lerp(i.sunI,a.sunI,o),t.hemisphere=vt.lerp(i.hemi,a.hemi,o),t.nightFactor=vt.lerp(i.night,a.night,o),t}function Ap(){return{sky:new U(10405374),sunlight:new U(16774358),sunIntensity:1.7,hemisphere:.85,nightFactor:0}}var jp=(e,t=.05,n=.7)=>new Y({color:e,metalness:t,roughness:n}),Mp=jp(4617124),Np=jp(14411759),Pp=jp(9280933,.7,.3),Fp=jp(3096656,.7,.43),Ip=jp(12274489,.35,.5),Lp=jp(15382126,.1,.6),Rp=jp(15258234,.05,.8),zp=jp(4038075,.05,.32),Bp=jp(16382968,.08,.6);function Vp(e,t,n,r,i,a,o){let s=new W(t,n);return s.name=o,s.position.set(r,i,a),s.castShadow=!0,s.receiveShadow=!0,e.add(s),s}function Hp(e,t,n,r,i,a,o,s,c){return Vp(e,new G(i,a,o),s,t,n,r,c)}function Up(e,t,n,r,i,a,o,s){return Vp(e,new Hc(i,i,a,12),o,t,n,r,s)}function Wp(){let e=new J;e.name=`quest.bedding-package`,Vp(e,new Wc(1,14,10),Mp,0,0,0,`folded.blanket`).scale.set(.33,.11,.28);let t=Hp(e,0,.055,.275,.61,.036,.026,Np,`stitched.blanket.edge`);t.rotation.x=.08,Vp(e,new Wc(1,14,10),Np,.08,.17,-.03,`folded.pillow`).scale.set(.23,.078,.18);for(let t of[-.21,.21])Hp(e,t,.106,0,.026,.012,.56,Pp,`strap`);return e}function Gp(){let e=new J;e.name=`quest.drill-bit-case`,Hp(e,0,0,0,.38,.17,.28,Fp,`hard.case`),Hp(e,0,.1,0,.37,.045,.276,Ip,`lid`),Hp(e,0,.133,.005,.3,.018,.18,Pp,`lid.ridge`);for(let t of[-.15,.15])Hp(e,t,.015,.146,.042,.052,.028,Lp,`latch`);for(let t=0;t<5;t++){let n=Up(e,-.105+t*.052,.12,-.028,.012,.12,Pp,`drill.bit`);n.rotation.z=Math.PI/2}return Hp(e,0,-.055,.15,.12,.07,.06,Fp,`carry.handle`),e}function Kp(){let e=new J;e.name=`quest.pair-of-sandals`;for(let t of[-1,1]){let n=Vp(e,new Wc(1,14,10),Rp,t*.092,.04,t===1?.025:0,`rubber.sole`);n.scale.set(.072,.028,.157),n.rotation.y=t*.12;let r=Vp(e,new Gc(.054,.018,6,18,Math.PI),Rp,t*.092,.08,-.017,`woven.strap`);r.rotation.x=Math.PI/2}return e}function qp(){let e=new J;return e.name=`quest.asthma-inhaler`,Up(e,0,0,0,.065,.2,zp,`inhaler.body`),Up(e,0,.12,0,.074,.055,Bp,`mouthpiece`),Up(e,0,.16,0,.05,.046,Mp,`mouthpiece.cap`),Hp(e,0,0,.066,.087,.075,.008,Bp,`medical.label`),Hp(e,0,0,.071,.038,.04,.009,Ip,`medical.warning.mark`),e}function Jp(){let e=new J;e.name=`security.camera-assembly`;let t=Up(e,0,.12,.12,.075,.3,Fp,`camera.wall.bracket`);t.rotation.z=Math.PI/2,Hp(e,0,0,0,.32,.19,.41,Bp,`camera.housing`),Hp(e,0,.108,-.03,.36,.043,.49,Fp,`camera.sunshield`),Up(e,0,-.006,.22,.074,.055,Mp,`camera.lens`).rotation.x=Math.PI/2,Up(e,0,-.006,.252,.036,.014,Fp,`camera.aperture`).rotation.x=Math.PI/2;let n=Vp(e,new Wc(.021,10,7),Ip,.11,-.05,.223,`camera.indicator`);return n.material=new _r({color:14829372}),e}var Yp=new Nd,Xp={bunk:`furniture/bedBunk.glb`,desk:`furniture/desk.glb`,chair:`furniture/chair.glb`,table:`furniture/table.glb`,tree:`nature/tree_detailed.glb`,cabinet:`furniture/cabinetBed.glb`,"kitchen-fridge":`furniture/kitchenFridge.glb`,"kitchen-sink":`furniture/kitchenSink.glb`,"kitchen-stove":`furniture/kitchenStoveElectric.glb`,"visit-sofa":`furniture/loungeSofa.glb`,"visit-side-table":`furniture/sideTable.glb`,"garden-pot":`furniture/pottedPlant.glb`,"yard-bush":`nature/plant_bush.glb`,"yard-flower":`nature/flower_redA.glb`,"yard-rock":`nature/rock_largeA.glb`,"park-ambulance":`vehicles/ambulance.glb`,"park-police":`vehicles/police.glb`,"park-van":`special/prison-transfer-bus.glb`,press:`special/workshop-drill-press.glb`,"park-delivery":`vehicles/delivery.glb`,"cell-toilet":`original/cell_sanitation_unit_blendstra.glb`,"cell-locker":`original/single_prison_locker.glb`,"medical-trolley":`original/infirmary_medical_trolley.glb`,workbench:`original/workshop_bench.glb`,stonetable:`original/yard_concrete_table.glb`,"yard-concrete-stool":`original/yard_concrete_stool.glb`},Zp=new Map;function Qp(e){let t=Zp.get(e);return t||(t=Yp.loadAsync(`./models/${e}`).then(e=>e.scene),Zp.set(e,t)),t}function $p(e,t=``,n=`#1e293b`,r=`#f8fafc`){let i=document.createElement(`canvas`);i.width=512,i.height=256;let a=i.getContext(`2d`);a.fillStyle=n,a.fillRect(0,0,512,256),a.strokeStyle=`#f59e0b`,a.lineWidth=10,a.strokeRect(8,8,496,240),a.fillStyle=r,a.textAlign=`center`,a.textBaseline=`middle`;let o=t?42:54;for(a.font=`bold ${o}px system-ui, sans-serif`;o>18&&a.measureText(e).width>470;)o-=2,a.font=`bold ${o}px system-ui, sans-serif`;if(a.fillText(e,256,t?96:128),t){let e=26;for(a.font=`600 ${e}px system-ui, sans-serif`;e>15&&a.measureText(t).width>470;)e-=1.5,a.font=`600 ${e}px system-ui, sans-serif`;a.fillStyle=`#fde68a`,a.fillText(t,256,168)}return new Bc(i)}var em=class{constructor(){this.scene=new ks,this.collision=new Mf,this.cameraObstacles=[],this.sun=new Fl(16774358,1.8),this.hemi=new Sl(13358561,4674921,.85),this.doorMeshes={},this.camAngle=0,this.camSweep=0,this.gateLights=[],this.buildingLights=[],this.indoorLight=new Nl(16767137,0,12,2),this.lightingTarget=Ap(),this.yardDry=new U(13751771),this.yardWet=new U(6714752),this.overcastSky=new U(7047578),this.visualQuality=`medium`,this.scene.background=new U(10405374),this.scene.fog=new Os(10405374,.011),this.sun.position.set(-22,34,18),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(1024,1024);let e=this.sun.shadow.camera;e.left=-35,e.right=35,e.top=35,e.bottom=-35,e.near=5,e.far=90,this.scene.add(this.sun,this.hemi),this.buildGround(),this.buildWalls(),this.architecture=yp(),this.scene.add(this.architecture.root),this.indoorLight.castShadow=!1,this.scene.add(this.indoorLight);for(let[e,t,n]of[[-17,3.1,-21.6],[-17,3.1,-29],[6.5,3.1,-25],[22.5,3.1,-25],[-24,3.1,-9.5],[-21.5,3.1,15],[-1,3.1,15],[19.5,3.1,-2.5]]){let r=new Nl(16774107,.8,14,2);r.position.set(e,t,n),r.castShadow=!1,this.scene.add(r),this.buildingLights.push(r)}this.atmosphere=new Ep(this.scene),this.buildPerimeterDetails(),this.buildDoors(),this.buildProps(),this.buildSignsAndMarkers(),this.buildSecurityCam()}buildGround(){let e=Uf(`asphalt.jpg`,13751771,18,17);this.yardMaterial=e;let t=new W(new vi(64,60),e);t.rotation.x=-Math.PI/2,t.position.set(0,-.02,-6),t.receiveShadow=!0,this.scene.add(t);let n={tile:Uf(`floor_tiles.jpg`,16777215,6,7),tile2:Uf(`floor_tiles.jpg`,15857145,6,7),concrete:Uf(`concrete.jpg`,13948120,8,9),wood:Uf(`wood_planks.jpg`,15062453,6,7)};for(let e of Object.keys(bu)){let t=bu[e],r=new W(new vi(t.x2-t.x1,t.z2-t.z1),n[t.floor]);r.rotation.x=-Math.PI/2,r.position.set((t.x1+t.x2)/2,.005,(t.z1+t.z2)/2),r.receiveShadow=!0,this.scene.add(r)}let r=wu.find(e=>e.id===`rollcall`),i=new W(new vi(r.x2-r.x1,r.z2-r.z1),new _r({color:16436245,transparent:!0,opacity:.35}));i.rotation.x=-Math.PI/2,i.position.set((r.x1+r.x2)/2,.015,(r.z1+r.z2)/2),this.scene.add(i);let a=new W(new vi(.25,1.6),new _r({color:15680580}));a.rotation.x=-Math.PI/2,a.position.set(21.75,.02,-7),this.scene.add(a)}buildWalls(){let e=Uf(`plaster_beige.jpg`,16183521,2,1),t=Uf(`plaster_moss.jpg`,12241594,2,1),n=Uf(`brick.jpg`,11051678,4,3),r=new Y({color:3359061,metalness:.6,roughness:.4});for(let i of Su){let a=i.x2-i.x1,o=i.z2-i.z1,s=(i.x1+i.x2)/2,c=(i.z1+i.z2)/2;if(this.collision.boxes.push({x1:i.x1,z1:i.z1,x2:i.x2,z2:i.z2}),i.kind===`bars`)this.buildBars(i,r);else if(this.collision.sightBlockers.push({x1:i.x1,z1:i.z1,x2:i.x2,z2:i.z2}),i.kind===`perimeter`){let e=new W(new G(a,i.h,o),n);e.position.set(s,i.h/2,c),e.castShadow=!0,e.receiveShadow=!0,this.scene.add(e),this.cameraObstacles.push(e)}else{let n=Math.min(1.2,i.h*.35),r=i.h-n,l=new W(new G(a,n,o),t);l.position.set(s,n/2,c);let u=new W(new G(a,r,o),e);u.position.set(s,n+r/2,c),l.castShadow=u.castShadow=!0,l.receiveShadow=u.receiveShadow=!0,this.scene.add(l,u),this.cameraObstacles.push(l,u)}}let i=1.1,a=3.05;for(let t of Cu){let n=new W(new G(Math.max(t.box.x2-t.box.x1,.3),i,Math.max(t.box.z2-t.box.z1,.3)),e);n.position.set((t.box.x1+t.box.x2)/2,a,(t.box.z1+t.box.z2)/2),n.castShadow=n.receiveShadow=!0,this.scene.add(n),this.cameraObstacles.push(n)}for(let[t,n]of[[-26.05,-24.45],[-20.55,-18.95],[-15.05,-13.45],[-7.95,-6.35]]){let r=new W(new G(n-t,i,.2),e);r.position.set((t+n)/2,a,-25),r.castShadow=r.receiveShadow=!0,this.scene.add(r),this.cameraObstacles.push(r)}let o=new Y({color:2042167,roughness:.95,side:2});for(let e of Object.values(bu)){let t=new W(new vi(e.x2-e.x1,e.z2-e.z1),o);t.rotation.x=Math.PI/2,t.position.set((e.x1+e.x2)/2,3.6,(e.z1+e.z2)/2),t.receiveShadow=!0,this.scene.add(t),this.cameraObstacles.push(t)}}buildPerimeterDetails(){let e=Su.filter(e=>e.kind===`perimeter`),t=[];for(let n of e){let e=n.x2-n.x1,r=n.z2-n.z1,i=e>r,a=Math.max(1,Math.floor((i?e:r)/.67));for(let o=0;o<a;o++){let s=(o+.5)/a;t.push({x:i?n.x1+s*e:(n.x1+n.x2)/2,z:i?(n.z1+n.z2)/2:n.z1+s*r,y:n.h+.29,vertical:!i})}}let n=new vc(new Gc(.305,.018,4,10),new Y({color:8754074,metalness:.78,roughness:.38}),t.length);n.name=`perimeter.concertina-wire`;let r=new Yn;for(let e=0;e<t.length;e++){let i=t[e];r.position.set(i.x,i.y,i.z),r.rotation.set(0,i.vertical?Math.PI/2:0,0),r.updateMatrix(),n.setMatrixAt(e,r.matrix)}n.instanceMatrix.needsUpdate=!0,n.frustumCulled=!1,this.scene.add(n);let i=new J;i.name=`prison.main-gate.facade`,i.position.set(0,0,21.6);let a=new Y({color:1516848,metalness:.73,roughness:.44}),o=new Y({color:7504522,metalness:.7,roughness:.37}),s=new Y({color:14522436,metalness:.27,roughness:.47}),c=new W(new G(5.2,3.5,.12),a);c.name=`gate.locked.surface`,c.position.y=1.77,c.castShadow=!0,i.add(c);for(let e of[-2.53,0,2.53]){let t=new W(new G(.13,3.85,.21),o);t.position.set(e,1.92,-.12),i.add(t)}for(let e=-8;e<=8;e++){let t=new W(new Hc(.037,.037,3.15,7),o);t.position.set(e*.28,1.75,-.195),i.add(t)}for(let e of[.55,2.94]){let t=new W(new G(5.06,.11,.16),o);t.position.set(0,e,-.23),i.add(t)}let l=new W(new G(6,.21,.22),s);l.position.set(0,3.94,-.22),i.add(l);let u=new W(new vi(4.1,.58),new _r({map:$p(`TRẠI GIAM AN PHÚ`,`KỶ LUẬT · TRÁCH NHIỆM · TÁI HÒA NHẬP`),side:2}));u.name=`gate.official.sign`,u.position.set(0,4.48,-.28),u.rotation.y=Math.PI,i.add(u);for(let e of[-3.3,3.3]){let t=new W(new Hc(.17,.17,.16,14),new Y({color:15122553,emissive:12876580,emissiveIntensity:.75}));t.position.set(e,4.17,-.36),t.rotation.x=Math.PI/2,i.add(t);let n=new Nl(16759149,.25,7.5,2);n.position.set(e,4.05,-.75),i.add(n),this.gateLights.push(n)}this.scene.add(i)}buildBars(e,t){let n=new J,r=e.x2-e.x1,i=Math.max(2,Math.floor(r/.22));for(let a=0;a<=i;a++){let o=e.x1+r*a/i,s=new W(new Hc(.025,.025,e.h,6),t);s.position.set(o,e.h/2,(e.z1+e.z2)/2),n.add(s)}let a=new W(new G(r,.06,.08),t);a.position.set((e.x1+e.x2)/2,2.2,(e.z1+e.z2)/2),n.add(a),this.scene.add(n)}buildDoors(){for(let e of Cu){let t=e.box.x2-e.box.x1,n=e.box.z2-e.box.z1,r=new Y({color:e.area===`storage`?10033947:3883602,roughness:.6,metalness:.3}),i=new W(new G(t,2.5,n),r);i.position.set((e.box.x1+e.box.x2)/2,1.25,(e.box.z1+e.box.z2)/2),i.castShadow=!0;let a=new Y({color:9741240,metalness:.73,roughness:.34}),o=new Y({color:1976635,metalness:.75,roughness:.41}),s=new Y({color:15117652,roughness:.49}),c=t>=n,l=c?t:n,u=c?n:t;for(let e of[-l*.43,l*.43]){let t=new W(new G(c?.055:u+.07,2.4,c?u+.07:.055),a);t.position.set(c?e:0,0,c?0:e),i.add(t)}let d=u/2+.015;for(let e of[-.88,.79]){let t=new W(new G(c?l*.78:.033,.045,c?.033:l*.78),o);t.position.set(c?0:d,e,c?d:0),i.add(t)}let f=new W(new G(c?.45:.05,.34,c?.05:.45),o);f.position.set(c?0:d,.35,c?d:0),i.add(f);for(let e=-2;e<=2;e++){let t=new W(new G(c?.025:.05,.29,c?.05:.025),a);t.position.set(c?e*.068:d+.01,.35,c?d+.01:e*.068),i.add(t)}let p=new W(new G(c?.19:.032,.25,c?.032:.19),s);p.position.set(c?l*.33:d+.015,-.3,c?d+.015:l*.33),i.add(p),this.scene.add(i),this.doorMeshes[e.id]=i}}updateDoors(e){let t=[];for(let n of Cu){let r=e(n.area),i=this.doorMeshes[n.id];i&&(i.visible=!r),r||t.push(n.box)}return t}buildProps(){for(let e of ku){e.collide&&this.collision.boxes.push(Au(e));let t=this.makePropMesh(e),n=new J;n.name=`prop.`+e.kind,n.add(t);let r;r=e.kind===`bunk`&&e.x>20&&e.z<-20?`special/hospital-bed.glb`:e.kind===`bunk`&&(e.x>20||e.x>5&&e.z>10)?`furniture/bedSingle.glb`:e.kind===`tree`&&Math.floor(Math.abs(e.x*17+e.z*11))%2==0?`nature/tree_oak.glb`:e.kind===`yard-flower`&&e.x>0?`nature/flower_yellowA.glb`:e.kind===`table`&&e.x>-2&&e.x<16&&e.z<-18?`original/canteen_table_set_blendstra.glb`:e.kind===`desk`&&e.x<-15&&e.z>10?`original/classroom_desk.glb`:e.kind===`chair`&&e.x<-15&&e.z>10?`original/classroom_chair.glb`:e.kind===`desk`&&e.x>-12&&e.x<4&&e.z>10?`original/guard_office_desk.glb`:e.kind===`chair`&&e.x>-12&&e.x<4&&e.z>10?`original/guard_office_chair.glb`:(e.kind===`table`||e.kind===`visit-side-table`)&&e.x<-20&&e.z<0?`original/visitation_table.glb`:e.kind===`chair`&&e.x<-20&&e.z<0?`original/visitation_chair.glb`:e.kind===`yard-concrete-stool`||e.kind===`chair`&&Math.hypot(e.x- -10,e.z-4.6)<2?`original/yard_concrete_stool.glb`:Xp[e.kind],r?Qp(r).then(t=>{let i=t.clone(!0);i.name=`asset.`+r;let a=e.kind.startsWith(`park-`);a&&(i.rotation.y=Math.PI/2);let o=new Yt().setFromObject(i),s=o.max.x-o.min.x,c=o.max.z-o.min.z,l=o.max.y-o.min.y;if(!Number.isFinite(s*c*l)||Math.min(s,c,l)<=.001)return;let u=r.startsWith(`original/`),d=1;if(u)d=1;else{let t=e.kind===`tree`?4.5:e.kind===`bunk`?2:e.kind===`cell-locker`?1.65:e.kind===`cell-toilet`?1.4:e.kind===`medical-trolley`?1.1:e.kind===`kitchen-fridge`?2.25:a?2.4:e.kind===`press`?2.45:e.kind===`garden-pot`?1.3:e.kind.startsWith(`yard-`)?.85:1.9;d=e.kind===`tree`?4.5/l:Math.min(e.w/s,e.d/c,t/l)*.96}i.scale.setScalar(d),i.position.set(-(o.min.x+o.max.x)*.5*d,-o.min.y*d,-(o.min.z+o.max.z)*.5*d),i.traverse(e=>{e instanceof W&&(e.castShadow=!0,e.receiveShadow=!0)}),n.clear(),n.add(i),n.userData.assetLoaded=!0,n.userData.assetPath=r,e.kind===`cabinet`&&e.x>18&&e.z<-18&&Qp(`special/medical-first-aid-kit.glb`).then(e=>{let t=e.clone(!0);t.name=`phase2.medical-first-aid-kit`,t.position.set(0,1.52,0),t.traverse(e=>{e instanceof W&&(e.castShadow=!0)}),n.add(t),n.userData.phase2MedkitLoaded=!0}).catch(e=>console.warn(`[Phase 2] Medical kit fallback:`,e)),e.kind===`table`&&e.x>-2&&e.x<16&&e.z<-18&&Qp(`original/canteen_meal_tray.glb`).then(e=>{let t=new Yt().setFromObject(e),r=o.max.y*d;for(let i of[-.7,.7]){let a=e.clone(!0);a.name=`original.canteen_meal_tray`,a.position.set(i,r-t.min.y,0),a.traverse(e=>{e instanceof W&&(e.castShadow=!0,e.receiveShadow=!0)}),n.add(a)}n.userData.traysLoaded=!0}).catch(e=>console.warn(`[Canteen Tray] Fallback:`,e)),e.kind===`desk`&&e.x===-4&&e.z===16&&Qp(`original/guard_desk_radio.glb`).then(e=>{let t=e.clone(!0);t.name=`original.guard_desk_radio`;let r=new Yt().setFromObject(e);t.position.set(.65,.76-r.min.y,-.05),t.rotation.y=-Math.PI/6,t.traverse(e=>{e instanceof W&&(e.castShadow=!0,e.receiveShadow=!0)}),n.add(t),n.userData.radioLoaded=!0}).catch(e=>console.warn(`[Guard Desk Radio] Fallback:`,e))}).catch(e=>console.warn(`[Prop GLB] Procedural fallback:`,r,e)):e.kind===`counter`&&e.x<-20?Qp(`special/visitation-phone.glb`).then(e=>{for(let t of[-2.05,0,2.05]){let r=e.clone(!0);r.name=`phase2.visitation-phone`,r.position.set(t,1.1,-.11),r.traverse(e=>{e instanceof W&&(e.castShadow=!0)}),n.add(r)}n.userData.phase2PhonesLoaded=!0}).catch(e=>console.warn(`[Phase 2] Visitation phones fallback:`,e)):e.kind===`lamp`?Wf(n,t,`models/roads/light-square.glb`,{width:e.w,depth:e.d},{height:3.8}):e.kind===`plant`?Wf(n,t,`models/nature/plant_bushDetailed.glb`,{width:e.w,depth:e.d},{height:.75}):e.kind===`shelf`&&e.x<-20&&e.z>10&&(Wf(n,t,`models/furniture/bookcaseOpen.glb`,{width:e.w,depth:e.d},{rotateY:Math.PI/2}),Qp(`furniture/books.glb`).then(e=>{let t=new Yt().setFromObject(e),r=t.getSize(new V),i=t.getCenter(new V);if(!(Math.min(r.x,r.y,r.z)<=.001))for(let a=0;a<3;a++){let o=e.clone(!0),s=Math.min(.36/r.x,.33/r.y,.45/r.z);o.scale.setScalar(s),o.position.set(-i.x*s,.56+a*.48-t.min.y*s,-.75+a*.75-i.z*s),o.traverse(e=>{e instanceof W&&(e.castShadow=!0)}),n.add(o)}}).catch(e=>console.warn(`[Books GLB] Shelf remains usable:`,e))),new Set([`tree`,`lamp`,`shelf`,`tower`,`cell-locker`,`bench`,`table`,`desk`,`workbench`,`counter`,`canteen`,`stonetable`,`bunk`,`cabinet`,`press`,`tank`,`cell-toilet`,`medical-trolley`,`chair`,`yard-concrete-stool`]).has(e.kind)&&this.cameraObstacles.push(n),n.position.set(e.x,0,e.z),e.rot&&(n.rotation.y=e.rot),this.scene.add(n)}this.bedsheetMesh=Wp(),this.bedsheetMesh.position.set(-15.9,.52,-29.2),this.scene.add(this.bedsheetMesh),this.drillMesh=Gp(),this.drillMesh.position.set(27.1,1.05,-5.2),this.scene.add(this.drillMesh),this.sandalsMesh=Kp(),this.sandalsMesh.position.set(-25.6,0,8.6),this.scene.add(this.sandalsMesh),this.asthmaBottleMesh=qp(),this.asthmaBottleMesh.position.set(22.5,.11,13),this.asthmaBottleMesh.rotation.z=Math.PI/3,this.scene.add(this.asthmaBottleMesh)}makePropMesh(e){let t=_p(e);if(t)return t;let n=new J,r=new Y({color:8145438,roughness:.8}),i=new Y({color:4674921,metalness:.5,roughness:.5}),a=new Y({color:9741240,roughness:.9}),o=new Y({color:3043136,roughness:.85});switch(e.kind){case`chair`:{let t=.45,a=new W(new G(e.w||.45,.05,e.d||.45),r);a.position.y=t,n.add(a);let o=.02,s=new Hc(o,o,t,6);for(let r of[-(e.w||.45)/2+.04,(e.w||.45)/2-.04])for(let a of[-(e.d||.45)/2+.04,(e.d||.45)/2-.04]){let e=new W(s,i);e.position.set(r,t/2,a),n.add(e)}let c=new W(new G(e.w||.45,.38,.04),r);c.position.set(0,.64,-(e.d||.45)/2+.02),n.add(c);break}case`bunk`:{let t=new W(new G(e.w,.1,e.d),r);t.position.y=.42;let a=new W(new G(e.w,.1,e.d),r);a.position.y=1.35,n.add(t,a);for(let t of[-e.w/2+.05,e.w/2-.05])for(let r of[-e.d/2+.05,e.d/2-.05]){let e=new W(new Hc(.035,.035,1.75,6),i);e.position.set(t,.88,r),n.add(e)}break}case`table`:case`workbench`:case`desk`:{let t=e.kind===`workbench`?i:r,a=new W(new G(e.w,.1,e.d),t);a.position.y=.82,a.castShadow=!0,n.add(a);let o=new W(new G(e.w*.85,.78,e.d*.75),e.kind===`desk`?r:i);if(o.position.y=.39,n.add(o),e.kind===`workbench`){let e=new W(new G(.45,.22,.3),new Y({color:14251782}));e.position.set(-.5,.96,0),n.add(e)}break}case`counter`:case`canteen`:{let t=new W(new G(e.w,1.05,e.d),new Y({color:e.kind===`canteen`?9584654:6583435,roughness:.7}));t.position.y=.525,n.add(t);break}case`bench`:{let t=new W(new G(e.w,.1,e.d),a);t.position.y=.45,n.add(t);break}case`shelf`:case`cabinet`:{let t=new W(new G(e.w,1.9,e.d),i);t.position.y=.95,t.castShadow=!0,n.add(t);break}case`board`:{let t=$p(e.label??`THÔNG BÁO`,`Nhấn E để xem`),r=new J,i=new W(new G(e.w,1,.04),new Y({color:7877903,roughness:.8}));i.position.y=1.6;let a=new W(new vi(e.w-.06,.88),new _r({map:t,side:2}));a.position.set(0,1.6,.025),r.add(i,a),n.add(r);break}case`pullup`:{let t=new W(new Hc(.05,.05,2.3,8),i),r=t.clone();t.position.set(-e.w/2+.1,1.15,0),r.position.set(e.w/2-.1,1.15,0);let a=new W(new Hc(.035,.035,e.w,8),i);a.rotation.z=Math.PI/2,a.position.y=2.25,n.add(t,r,a);break}case`stonetable`:{let e=new W(new Hc(.65,.65,.1,12),a);e.position.y=.72;let t=new W(new Hc(.22,.28,.7,10),a);t.position.y=.35,n.add(e,t);break}case`yard-concrete-stool`:{let e=new W(new Hc(.24,.24,.47,16),a);e.position.y=.235,n.add(e);break}case`tree`:{let e=new W(new Hc(.22,.3,2.2,8),r);e.position.y=1.1;let t=new W(new Wc(1.45,10,8),o);t.position.y=2.9,t.castShadow=!0,n.add(e,t);break}case`tower`:{let t=new W(new G(e.w,6.5,e.d),a);t.position.y=3.25;let r=new W(new Uc(1.9,1.2,4),new Y({color:8330525}));r.position.y=7.1,r.rotation.y=Math.PI/4,n.add(t,r);break}case`cell-toilet`:{let t=new W(new G(e.w,1.05,e.d),i);t.position.y=.525,n.add(t);break}case`cell-locker`:{let t=new W(new G(e.w,1.6,e.d),i);t.position.y=.8,t.castShadow=!0,n.add(t);break}case`medical-trolley`:{let t=new W(new G(e.w,1,e.d),i);t.position.y=.5,n.add(t);break}default:{let t=new W(new G(e.w,1,e.d),a);t.position.y=.5,n.add(t)}}return n}buildSignsAndMarkers(){let e=[{title:`KHU BUỒNG GIAM A`,sub:`Giờ về buồng: 21:00`,x:-17,y:3.05,z:-17.78,ry:0},{title:`NHÀ ĂN & CĂN TIN`,sub:`07:00 · 11:30 · 16:30`,x:6.25,y:3.05,z:-17.78,ry:0},{title:`XƯỞNG LAO ĐỘNG`,sub:`Ca sáng 08:00–11:30`,x:11.78,y:3.05,z:-2.75,ry:-Math.PI/2},{title:`KHO VẬT TƯ — CẤM VÀO`,sub:`Khu vực có camera`,x:21.78,y:3.05,z:-7,ry:-Math.PI/2},{title:`PHÒNG QUẢN GIÁO`,sub:`Tiếp nhận 07:00–17:00`,x:-4,y:3.05,z:9.78,ry:Math.PI},{title:`PHÒNG Y TẾ`,sub:`07:30–11:30 · 13:30–17:00`,x:22.25,y:3.05,z:-17.78,ry:0},{title:`LỚP HỌC NGHỀ & THƯ VIỆN`,sub:`14:00–16:30 · 19:00–21:00`,x:-20.75,y:3.05,z:9.78,ry:Math.PI},{title:`PHÒNG THĂM GẶP`,sub:`Tiếp đón người nhà`,x:-19.78,y:3.05,z:-10.25,ry:Math.PI/2},{title:`KHU KỶ LUẬT`,sub:`Khu biệt giam`,x:10,y:3.05,z:9.78,ry:Math.PI}];for(let t of e){let e=new W(t.ry===-Math.PI/2||t.ry===Math.PI/2?new G(.04,.38,1.2):new G(1.2,.38,.04),new Y({color:2042167,roughness:.6}));e.position.set(t.x,t.y,t.z),this.scene.add(e);let n=new W(new vi(1.16,.34),new _r({map:$p(t.title,t.sub),side:2})),r=.022,i=t.x+(t.ry===-Math.PI/2?-.022:t.ry===Math.PI/2?r:0),a=t.z+(t.ry===0?r:t.ry===Math.PI?-.022:0);n.position.set(i,t.y,a),t.ry&&(n.rotation.y=t.ry),this.scene.add(n)}for(let e=0;e<4;e++){let t=-25.25+e*5.5,n=new W(new vi(.95,.38),new _r({map:$p(`BUỒNG ${e+1}`,e===2?`Minh · Bảy · Huy`:``),side:2}));n.position.set(t,3.05,-24.88),this.scene.add(n)}}buildSecurityCam(){let e=Jp();e.position.set(22.4,2.9,-4.3),this.scene.add(e);let t=new Vc(5.5,24,-.42,.84);t.rotateX(-Math.PI/2);let n=new _r({color:15680580,transparent:!0,opacity:.26,side:2});this.camCone=new W(t,n),this.camCone.position.set(22.4,.03,-4.3),this.scene.add(this.camCone)}update(e,t,n,r,i,a=!1,o=1,s=0,c=0){this.camSweep+=e*.85,this.camAngle=-1.1+Math.sin(this.camSweep)*.75,this.camCone.rotation.y=this.camAngle,this.bedsheetMesh.visible=!n,this.drillMesh.visible=!r,this.sandalsMesh.visible=!i,this.asthmaBottleMesh.visible=!a;let l=t/60,u=kp(t,this.lightingTarget),d=vt.clamp(e*2.4,0,1);this.scene.background.lerp(u.sky,d);let f=this.scene.fog;f.color.lerp(u.sky,d),this.sun.color.lerp(u.sunlight,d),this.sun.intensity=vt.lerp(this.sun.intensity,u.sunIntensity,d),this.hemi.intensity=vt.lerp(this.hemi.intensity,u.hemisphere,d);let p=(l-6)/16*Math.PI;this.sun.position.set(-Math.cos(p)*28,Math.max(7.5,Math.sin(p)*34),16);let m=u.nightFactor;this.architecture.fixtureMaterial.emissiveIntensity=this.visualQuality===`low`?.12:.2+m*(this.visualQuality===`high`?1.9:1.25);for(let e of this.gateLights)e.intensity=this.visualQuality===`low`?0:.09+m*(this.visualQuality===`high`?1.1:.64);let h=this.visualQuality===`low`?.35:.8;for(let e of this.buildingLights)e.intensity=h*(.85+m*.3);let g=Object.values(bu).some(e=>s>e.x1&&s<e.x2&&c>e.z1&&c<e.z2);this.indoorLight.position.set(s,3,c),this.indoorLight.intensity=this.visualQuality===`low`||!g?0:(this.visualQuality===`high`?1.65:.85)*(.42+m*.8),this.atmosphere.update(e,o,t,s,c);let _=wp(o,t);_===`rain`&&(this.scene.background.lerp(this.overcastSky,.46*this.atmosphere.wetness),f.color.lerp(this.overcastSky,.34*this.atmosphere.wetness));let v=_===`haze`?.006:0,y=_===`rain`?.0035:0,b=this.visualQuality===`low`?.008:.01+v+y;f.density=vt.lerp(f.density,b,d);let x=this.atmosphere.wetness;this.yardMaterial.roughness=.91-x*.52,this.yardMaterial.color.lerpColors(this.yardDry,this.yardWet,x*.48)}seenByStorageCam(e,t){if(e<21.7||e>28||t<-12||t>-4)return!1;let n=e-22.4,r=t- -4.3,i=Math.hypot(n,r);if(i>5.5)return!1;let a=Math.cos(this.camAngle),o=-Math.sin(this.camAngle);return(n*a+r*o)/Math.max(1e-5,i)>=Math.cos(.42)}setQuality(e,t){this.visualQuality=e,this.atmosphere.setQuality(e);let n=typeof window<`u`&&window.devicePixelRatio||1,r=e===`low`?1:e===`medium`?1.35:2;t.setPixelRatio(Math.min(n,r)),t.shadowMap.enabled=e!==`low`,this.sun.castShadow=e!==`low`;let i=e===`high`?1024:e===`medium`?768:512;this.sun.shadow.mapSize.x!==i&&(this.sun.shadow.mapSize.set(i,i),this.sun.shadow.dispose(),t.shadowMap.needsUpdate=!0)}};function tm(e,n,r=12){let i=document.createElement(`canvas`);i.width=128,i.height=256;let a=i.getContext(`2d`);for(let t=0;t<r;t++)a.fillStyle=t%2==0?e:n,a.fillRect(0,t*256/r,128,256/r+1);let o=new Bc(i);return o.colorSpace=ze,o.wrapS=o.wrapT=t,o}function nm(e){let t=document.createElement(`canvas`);t.width=128,t.height=64;let n=t.getContext(`2d`);n.fillStyle=`#f8fafc`,n.fillRect(0,0,128,64),n.fillStyle=`#111827`,n.textAlign=`center`,n.textBaseline=`middle`,n.font=`bold 39px system-ui, sans-serif`,n.fillText(String(e).padStart(2,`0`),64,34);let r=new Bc(t);return r.colorSpace=ze,r}var rm=null,im=class{constructor(e,t,n){this.root=new J,this.body=new J,this.head=new J,this.armL=new J,this.armR=new J,this.legL=new J,this.legR=new J,this.pose=`stand`,this.phase=Math.random()*10,this.labelSprite=null,this.root.scale.set(e.build,e.height,e.build),this.root.add(this.body);let r=e.uniform===`inmate`,i=e.uniform===`inmate-orange`,a=e.uniform===`officer`,o=e.uniform===`medic`,s=r||i,c=new Y({color:e.skin,roughness:.78}),l=new Y({color:988970,roughness:.82}),u=new Y({color:e.accent,roughness:.66}),d=new Y({color:15967913,roughness:.9}),f,p;r?(rm??=tm(`#f8fafc`,`#0f172a`,12),f=new Y({map:rm,roughness:.84}),p=new Y({map:rm,roughness:.86})):i?(f=new Y({color:16747546,roughness:.77}),p=new Y({color:16747546,roughness:.82})):o?(f=new Y({color:16317180,roughness:.84}),p=new Y({color:14870768,roughness:.86})):a?(f=new Y({color:1982639,roughness:.76}),p=new Y({color:1516884,roughness:.82})):(f=new Y({color:15312056,roughness:.82}),p=new Y({color:4674921,roughness:.88}));let m=new W(new Hc(.255,.27,.48,22,1),f);m.position.y=.975,m.castShadow=!0,this.body.add(m);let h=new W(new Wc(.255,20,12),f);h.scale.set(1.04,.75,.94),h.position.set(0,.96,.012),h.castShadow=!0,this.body.add(h);let g=new W(new Hc(.165,.18,.055,18),s&&t?l:u);if(g.position.y=1.22,this.body.add(g),i){let e=n??t??`07`,r=Array.from(e).reduce((e,t)=>e+t.charCodeAt(0),0)%90+10,i=new W(new vi(.145,.075),new Y({map:nm(r),roughness:.77,side:2}));i.position.set(.112,1.065,.27),this.body.add(i)}else{let e=new W(new G(.09,.035,.018),s?l:u);e.position.set(.13,1.07,.267),this.body.add(e)}let _=new W(new Wc(.247,18,12),p);_.scale.set(1,.48,.96),_.position.y=.715,this.body.add(_),this.head.position.set(0,1.425,0),this.body.add(this.head);let v=new W(new Wc(.275,24,18),c);v.castShadow=!0,this.head.add(v);let y=new Wc(.038,14,10),b=new Wc(.01,9,7),x=new _r({color:16777215});for(let e of[-1,1]){let t=new W(y,l);t.position.set(e*.095,.026,.257),this.head.add(t);let n=new W(b,x);n.position.set(e*.095-.009,.039,.291),this.head.add(n);let r=new W(new Wc(.054,12,8),d);r.scale.set(1,.55,.25),r.position.set(e*.165,-.083,.222),this.head.add(r)}let S=new W(new Gc(.037,.006,5,18,Math.PI),new Y({color:9719127,roughness:.9}));S.rotation.z=Math.PI,S.position.set(0,-.099,.265),this.head.add(S);let C=new Y({color:e.hair,roughness:.87});if(!a&&e.hairStyle!==`bald`){let t=new W(new Wc(.288,24,14,0,Math.PI*2,0,Math.PI*.48),C);if(t.position.y=.025,t.rotation.x=-.1,t.castShadow=!0,this.head.add(t),e.hairStyle===`bun`){let e=new W(new Wc(.09,14,10),C);e.position.set(0,.07,-.265),this.head.add(e)}}if(a||e.cap){let e=new Y({color:1920728,roughness:.76}),t=new W(new Hc(.248,.272,.125,24),e);t.position.y=.235,t.castShadow=!0;let n=new W(new Wc(.25,20,10),e);n.scale.set(1,.16,.58),n.position.set(0,.18,.153),this.head.add(t,n);let r=new W(new Wc(.028,10,8),new Y({color:16436245,metalness:.25,roughness:.5}));r.position.set(0,.27,.257),this.head.add(r)}if(e.glasses){for(let e of[-1,1]){let t=new W(new Gc(.068,.009,7,16),l);t.position.set(e*.095,.025,.276),this.head.add(t)}let e=new W(new G(.05,.012,.012),l);e.position.set(0,.025,.277),this.head.add(e)}let w=()=>{let e=new J,t=new W(new Hc(.08,.073,.265,12),f);t.position.y=-.13,t.castShadow=!0;let n=new W(new Hc(.072,.067,.22,12),c);n.position.y=-.35;let r=new W(new Wc(.071,12,10),c);return r.position.y=-.48,e.add(t,n,r),e};this.armL=w(),this.armR=w(),this.armL.position.set(-.31,1.17,0),this.armR.position.set(.31,1.17,0),this.body.add(this.armL,this.armR);let T=new Y({color:a?1120295:2700616,roughness:.85}),E=()=>{let e=new J,t=new W(new Hc(.105,.095,.48,14),p);t.position.y=-.265,t.castShadow=!0;let n=new W(new Wc(.12,14,10),T);return n.scale.set(1,.76,1.45),n.position.set(0,-.56,.05),n.castShadow=!0,e.add(t,n),e};this.legL=E(),this.legR=E(),this.legL.position.set(-.135,.65,0),this.legR.position.set(.135,.65,0),this.body.add(this.legL,this.legR),this.labelSprite=am(t??`BẠN`,e.accent,!t),this.labelSprite.position.set(0,2.05,0),this.root.add(this.labelSprite)}dispose(){let e=new Set,t=new Set;this.root.traverse(n=>{if(n instanceof W){e.add(n.geometry);let r=Array.isArray(n.material)?n.material:[n.material];for(let e of r)t.add(e)}});for(let t of e)t.dispose();for(let e of t)e instanceof Y&&e.map&&e.map!==rm&&e.map.dispose(),e.dispose();this.labelSprite?.material.map?.dispose(),this.labelSprite?.material.dispose()}update(e,t=0){this.phase+=e*(this.pose===`walk`?Math.max(4,t*2.2):2.5);let n=this.phase;if(this.body.position.y=0,this.head.rotation.set(0,0,0),this.armL.rotation.set(0,0,.06),this.armR.rotation.set(0,0,-.06),this.legL.rotation.set(0,0,0),this.legR.rotation.set(0,0,0),this.pose===`walk`){let e=Math.sin(n)*.55;this.legL.rotation.x=e,this.legR.rotation.x=-e,this.armL.rotation.x=-e*.7,this.armR.rotation.x=e*.7,this.body.position.y=Math.abs(Math.cos(n))*.03}else this.pose===`sit`?(this.body.position.y=-.26,this.legL.rotation.x=-1.35,this.legR.rotation.x=-1.35,this.armL.rotation.x=-.4,this.armR.rotation.x=-.4,this.head.rotation.y=Math.sin(n*.5)*.1):this.pose===`work`?(this.armL.rotation.x=-.9+Math.sin(n*2.2)*.25,this.armR.rotation.x=-.9-Math.sin(n*2.2)*.25,this.head.rotation.x=.28):this.pose===`talk`?(this.armL.rotation.x=-.35+Math.sin(n*1.8)*.2,this.armR.rotation.x=-.25-Math.cos(n*1.5)*.18,this.head.rotation.y=Math.sin(n*1.1)*.12):(this.body.position.y=Math.sin(n)*.01,this.head.rotation.y=Math.sin(n*.4)*.08)}setOpacity(e){let t=e<.99;this.root.traverse(n=>{if(n instanceof W&&n.material){if(Array.isArray(n.material))for(let r of n.material)r.transparent=t,r.opacity=e;else n.material.transparent=t,n.material.opacity=e}else n instanceof qs&&n.material&&(n.material.opacity=e)})}};function am(e,t,n){let r=document.createElement(`canvas`);r.width=256,r.height=64;let i=r.getContext(`2d`);i.fillStyle=`#090d16`,i.beginPath(),i.roundRect(5,12,246,40,20),i.fill(),n&&(i.strokeStyle=`#`+t.toString(16).padStart(6,`0`),i.lineWidth=3,i.stroke()),i.fillStyle=`#ffffff`,i.font=`bold 23px system-ui, sans-serif`,i.textAlign=`center`,i.textBaseline=`middle`,i.fillText(e,128,33,218);let a=new Bc(r);a.colorSpace=ze;let o=new qs(new Ns({map:a,depthTest:!1,transparent:!0}));return o.scale.set(1.14,.29,1),o}var om={bay:`g`,huy:`a`,lam:`c`,lan:`q`,tung:`q`,tu:`b`,son:`d`,khai:`e`,phuc:`q`,an:`i`,mai:`l`},sm=class{constructor(e){this.x=0,this.z=0,this.rot=0,this.speed=3.2,this.state=`activity`,this.activity=``,this.path=[],this.slot=null,this.patrolIdx=0,this.patrolWait=0,this.def=Ru[e],this.rig=new im(this.def.look,this.def.name,om[e])}snapToSchedule(e){let t=zu(this.def,e);this.slot=t;let n=t.pos??Mu[t.node];this.x=n[0],this.z=n[1],this.rot=t.rot??0,this.path=[],this.activity=t.activity,this.state=t.patrol?`patrol`:`activity`,this.rig.pose=t.pose,this.syncMesh()}planTo(e,t){let n=jd(Ad(this.x,this.z),e);for(this.path=n.map(e=>[...Mu[e]]),t&&this.path.push([t[0],t[1]]);this.path.length>1&&Math.hypot(this.path[0][0]-this.x,this.path[0][1]-this.z)<.6;)this.path.shift()}update(e,t){if(this.state===`talk`){this.rig.pose=`talk`,this.rig.update(e,0),this.syncMesh();return}let n=zu(this.def,t);if(n!==this.slot&&(this.slot=n,this.activity=n.activity,this.patrolIdx=0,this.planTo(n.node,n.pos),this.state=`walk`),this.path.length>0){let[t,n]=this.path[0],r=t-this.x,i=n-this.z,a=Math.hypot(r,i),o=this.speed*e;a<=Math.max(.12,o)?(this.x=t,this.z=n,this.path.shift()):(this.x+=r/a*o,this.z+=i/a*o,this.rot=Math.atan2(r,i)),this.rig.pose=`walk`,this.rig.update(e,this.speed)}else n.patrol&&n.patrol.length>0?(this.state=`patrol`,this.patrolWait-=e,this.patrolWait<=0?(this.patrolIdx=(this.patrolIdx+1)%n.patrol.length,this.planTo(n.patrol[this.patrolIdx]),this.patrolWait=3.5):(this.rig.pose=`stand`,this.rig.update(e,0))):(this.state=`activity`,n.rot!==void 0&&(this.rot=n.rot),this.rig.pose=n.pose,this.rig.update(e,0));this.syncMesh()}faceToward(e,t){this.rot=Math.atan2(e-this.x,t-this.z),this.syncMesh()}canSee(e,t,n,r=9.5,i=1.15){let a=e-this.x,o=t-this.z,s=Math.hypot(a,o);if(s>r)return!1;let c=Math.sin(this.rot),l=Math.cos(this.rot);return(a*c+o*l)/Math.max(1e-5,s)<Math.cos(i*.5)?!1:!n.blocked(this.x,this.z,e,t)}moveTo(e,t,n){this.x=e,this.z=t,this.rot=n,this.syncMesh()}syncMesh(){this.rig.root.position.set(this.x,0,this.z),this.rig.root.rotation.y=this.rot}},cm=class{constructor(){this.keys=new Set,this.joyX=0,this.joyY=0,this.sprintTouch=!1,this.yaw=0,this.pitch=.42,this.distance=5.4,this.sensitivity=1,this.cameraMode=`third`,this.dragging=!1,this.lastX=0,this.lastY=0,this.camTouchId=null,this.joyTouchId=null,this.joyCenter={x:0,y:0},this.joyKnobEl=null,this.onInteract=()=>{},this.onKeyCommand=()=>{}}reset(){this.keys.clear(),this.joyTouchId=null,this.camTouchId=null,this.joyX=0,this.joyY=0,this.dragging=!1,this.sprintTouch=!1,this.joyKnobEl&&(this.joyKnobEl.style.transform=`translate(0px, 0px)`)}bind(e,t,n){this.joyKnobEl=n,window.addEventListener(`keydown`,e=>{e.target?.tagName!==`INPUT`&&(this.keys.add(e.code),[`KeyE`,`KeyJ`,`KeyP`,`KeyR`,`KeyM`,`KeyB`,`Escape`].includes(e.code)&&this.onKeyCommand(e.code))}),window.addEventListener(`keyup`,e=>this.keys.delete(e.code)),window.addEventListener(`blur`,()=>this.reset()),window.addEventListener(`orientationchange`,()=>this.reset());let r=e=>e.preventDefault();window.addEventListener(`gesturestart`,r,{passive:!1}),window.addEventListener(`gesturechange`,r,{passive:!1}),window.addEventListener(`gestureend`,r,{passive:!1}),e.addEventListener(`mousedown`,e=>{e.button===0&&(this.dragging=!0,this.lastX=e.clientX,this.lastY=e.clientY)}),window.addEventListener(`mousemove`,e=>{if(!this.dragging)return;let t=e.clientX-this.lastX,n=e.clientY-this.lastY;this.lastX=e.clientX,this.lastY=e.clientY,this.rotate(-t*.0055,n*.0045)}),window.addEventListener(`mouseup`,()=>this.dragging=!1),e.addEventListener(`wheel`,e=>{this.cameraMode!==`first`&&(this.distance=Math.max(2.6,Math.min(9,this.distance+e.deltaY*.003)))},{passive:!0}),t.addEventListener(`touchstart`,e=>{e.preventDefault();let r=e.changedTouches[0];this.joyTouchId=r.identifier;let i=t.getBoundingClientRect();this.joyCenter={x:i.left+i.width/2,y:i.top+i.height/2},this.updateJoy(r.clientX,r.clientY,n)},{passive:!1}),t.addEventListener(`touchmove`,e=>{e.preventDefault();for(let t of Array.from(e.changedTouches))t.identifier===this.joyTouchId&&this.updateJoy(t.clientX,t.clientY,n)},{passive:!1});let i=e=>{for(let t of Array.from(e.changedTouches))t.identifier===this.joyTouchId&&(this.joyTouchId=null,this.joyX=0,this.joyY=0,n.style.transform=`translate(0px, 0px)`)};t.addEventListener(`touchend`,i),t.addEventListener(`touchcancel`,i),e.addEventListener(`touchstart`,e=>{if(e.preventDefault(),this.camTouchId===null){for(let t of Array.from(e.changedTouches))if(t.identifier!==this.joyTouchId){this.camTouchId=t.identifier,this.lastX=t.clientX,this.lastY=t.clientY;break}}},{passive:!1}),e.addEventListener(`touchmove`,e=>{e.preventDefault();for(let t of Array.from(e.changedTouches))if(t.identifier===this.camTouchId){let e=t.clientX-this.lastX,n=t.clientY-this.lastY;this.lastX=t.clientX,this.lastY=t.clientY,this.rotate(-e*.007,n*.0055)}},{passive:!1});let a=e=>{for(let t of Array.from(e.changedTouches))t.identifier===this.camTouchId&&(this.camTouchId=null)};e.addEventListener(`touchend`,a),e.addEventListener(`touchcancel`,a)}updateJoy(e,t,n){let r=e-this.joyCenter.x,i=t-this.joyCenter.y,a=Math.hypot(r,i);a>44&&(r=r/a*44,i=i/a*44),this.joyX=r/44,this.joyY=i/44,n.style.transform=`translate(${r.toFixed(1)}px, ${i.toFixed(1)}px)`}rotate(e,t){this.yaw+=e*this.sensitivity,this.pitch=Math.max(.12,Math.min(1.25,this.pitch+t*this.sensitivity))}moveVector(){let e=-this.joyY,t=this.joyX;(this.keys.has(`KeyW`)||this.keys.has(`ArrowUp`))&&(e+=1),(this.keys.has(`KeyS`)||this.keys.has(`ArrowDown`))&&--e,(this.keys.has(`KeyD`)||this.keys.has(`ArrowRight`))&&(t+=1),(this.keys.has(`KeyA`)||this.keys.has(`ArrowLeft`))&&--t;let n=Math.hypot(e,t);n>1&&(e/=n,t/=n);let r=this.keys.has(`KeyW`)||this.keys.has(`ArrowUp`)||this.keys.has(`KeyS`)||this.keys.has(`ArrowDown`)||this.keys.has(`KeyD`)||this.keys.has(`ArrowRight`)||this.keys.has(`KeyA`)||this.keys.has(`ArrowLeft`),i=this.keys.has(`ShiftLeft`)||this.keys.has(`ShiftRight`),a=Math.hypot(this.joyX,this.joyY),o=r?i:this.sprintTouch||i||a>.96;return{fwd:e,right:t,sprint:o}}},lm=class{constructor(){this.cam=new ri(58,16/9,.15,130),this.ray=new Zl,this.smoothDist=5.4}update(e,t,n,r,i,a,o=`third`){if(o===`first`){let i=1.5,a=-(r-.42),o=Math.cos(a),s=Math.sin(a),c=-Math.sin(n)*o,l=s,u=-Math.cos(n)*o;this.cam.position.set(e,i,t),this.cam.lookAt(e+c,i+l,t+u);return}let s=new V(e,1.4,t),c=new V(Math.sin(n)*Math.cos(r),Math.sin(r),Math.cos(n)*Math.cos(r)),l=i;this.ray.set(s,c),this.ray.far=i;let u=this.ray.intersectObjects(a,!0);u.length>0&&(l=Math.max(.65,u[0].distance-.28)),this.smoothDist+=(l-this.smoothDist)*(l<this.smoothDist?.45:.15),this.cam.position.copy(s).addScaledVector(c,this.smoothDist),this.cam.lookAt(e,1.32,t)}},um=class{constructor(){this.ctx=null,this.volume=.7,this.stepTimer=0}ensure(){if(this.volume<=0)return null;if(!this.ctx){let e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}return this.ctx&&this.ctx.state===`suspended`&&this.ctx.resume().catch(()=>{}),this.ctx}tone(e,t=.12,n=`sine`,r=.18){let i=this.ensure();if(!i)return;let a=i.createOscillator(),o=i.createGain();a.type=n,a.frequency.value=e,o.gain.setValueAtTime(r*this.volume,i.currentTime),o.gain.exponentialRampToValueAtTime(.001,i.currentTime+t),a.connect(o).connect(i.destination),a.start(),a.stop(i.currentTime+t)}bell(){this.tone(740,.35,`triangle`,.25),setTimeout(()=>this.tone(587,.45,`triangle`,.22),180)}click(){this.tone(520,.06,`sine`,.12)}good(){this.tone(523,.1,`triangle`,.16),setTimeout(()=>this.tone(659,.14,`triangle`,.16),90)}bad(){this.tone(220,.22,`sawtooth`,.18)}step(e,t){this.stepTimer-=e,this.stepTimer<=0&&(this.stepTimer=t?.28:.42,this.tone(110+Math.random()*25,.045,`triangle`,.07))}},dm=[{id:`keep_doc`,label:`Giữ lại mảnh chứng từ xuất kho`,desc:`Lén nhét một góc phiếu giao nhận có chữ ký người gửi vào túi trước khi lửa lan tới.`,gain:`Manh mối quan trọng về người tổ chức thực sự của vụ án kho số 7.`},{id:`help_victim`,label:`Cứu người bảo vệ bị kẹt trong đám cháy`,desc:`Bất chấp nguy hiểm kéo người phụ kho lớn tuổi ra khỏi vùng khói độc.`,gain:`Được người trong cuộc biết ơn sâu sắc, giảm căng thẳng ban đầu và tăng thiện cảm.`},{id:`chase_contact`,label:`Đuổi theo bóng người quen bỏ chạy`,desc:`Cố gắng nhìn rõ biển số xe và nhân dạng của kẻ đã thuê mình trước khi hắn tẩu thoát.`,gain:`Ghi nhớ nhân dạng kẻ cầm đầu, hỗ trợ đối chất trong quá trình điều tra sau này.`}],fm=class{constructor(e,t){this.camera=e,this.sfx=t,this.active=!1,this.currentBeat=0,this.selectedChoice=`keep_doc`,this.choiceMade=!1,this.onFinishCallback=null,this.timeoutId=null,this.createDom()}createDom(){this.overlayEl=document.createElement(`div`),this.overlayEl.id=`cutscene-overlay`,this.overlayEl.className=`cutscene-overlay`,this.overlayEl.style.display=`none`,this.overlayEl.innerHTML=`
      <div class="cutscene-header">
        <div class="cutscene-title">ĐÊM Ở KHO SỐ 7</div>
        <button class="btn btn-skip" id="btn-cutscene-skip">Bỏ qua mở đầu ⏭</button>
      </div>
      <div class="cutscene-subtitles" id="cutscene-sub"></div>
      <div class="cutscene-choice-host" id="cutscene-choice-host" style="display:none"></div>
    `,document.body.appendChild(this.overlayEl),this.subEl=this.overlayEl.querySelector(`#cutscene-sub`),this.choiceModalEl=this.overlayEl.querySelector(`#cutscene-choice-host`),this.overlayEl.querySelector(`#btn-cutscene-skip`)?.addEventListener(`click`,()=>{this.skip()})}play(e,t,n){this.active=!0,this.currentBeat=0,this.choiceMade=!1,this.onFinishCallback=n,this.overlayEl.style.display=`flex`,this.sfx.click();let r=[{id:0,title:`Căn phòng trọ ngoại ô`,duration:9,camPos:[-14,2.5,-24],camLook:[-14,1.2,-27],subtitle:`${e}, 24 tuổi. Áp lực tiền bạc đè nặng lên từng tháng trọ. Một lời đề nghị béo bở xuất hiện từ người quen...`},{id:1,title:`Lời đề nghị ban đêm`,duration:10,camPos:[13,2.2,-4],camLook:[16,1.2,0],subtitle:t===`mechanic`?`Họ nhờ sửa một chiếc xe tải khả nghi với thù lao gấp ba. Dù biết có điều bất thường, Minh vẫn nhận lời vì cần tiền...`:t===`courier`?`Họ thuê chở một kiện hàng ngoài sổ sách đến Kho số 7 lúc nửa đêm. Áp lực mưu sinh khiến Minh bỏ qua mọi cảnh báo...`:`Một chữ ký khống trên tờ phiếu xuất kho để hợp thức hóa hàng hóa. Họ hứa hẹn sẽ không ai phát hiện...`},{id:2,title:`Hỏa hoạn tại Kho số 7`,duration:16,camPos:[21,2.8,-3],camLook:[21.75,1,-7],subtitle:`Bất ngờ hỏa hoạn bùng lên! Còi báo động rú vang, khói đen bao trùm khắp nhà kho. Trong khoảnh khắc hỗn loạn, Minh phải quyết định:`,hasChoice:!0},{id:3,title:`Phiên tuyên án`,duration:9,camPos:[-22,2.2,-6],camLook:[-22.5,1.5,-8.8],subtitle:`Thủ phạm chính tẩu thoát. Tòa tuyên phạt 24 ngày cải tạo tại Trại giam An Phú. Con đường chuộc lại sai lầm bắt đầu từ đây.`},{id:4,title:`Cổng Trại giam An Phú`,duration:8,camPos:[0,2.5,20],camLook:[0,2,32],subtitle:`Cánh cổng sắt nặng nề khép lại sau lưng. Mục tiêu duy nhất: Cải tạo tốt để về sớm, và tìm ra sự thật về kẻ đã gài bẫy mình.`}];this.runBeats(r)}runBeats(e){if(!this.active)return;if(this.currentBeat>=e.length){this.finish();return}let t=e[this.currentBeat];this.subEl.textContent=t.subtitle,this.camera.position.set(...t.camPos),this.camera.lookAt(...t.camLook),t.hasChoice&&!this.choiceMade?this.showChoiceModal(()=>{this.choiceMade=!0,this.currentBeat++,this.runBeats(e)}):this.timeoutId=setTimeout(()=>{this.active&&(this.currentBeat++,this.runBeats(e))},t.duration*1e3)}showChoiceModal(e){this.choiceModalEl.style.display=`block`,this.choiceModalEl.innerHTML=`
      <div class="cutscene-choice-card">
        <h3>LỰA CHỌN TRONG KHOẢNH KHẮC NGUY CẤP</h3>
        <p>Lửa đang lan nhanh, bạn sẽ chọn hành động nào trước khi lao ra ngoài?</p>
        <div class="cutscene-choices-list">
          ${dm.map(e=>`
            <button class="choice-btn" data-choice="${e.id}">
              <div class="choice-title">👉 ${e.label}</div>
              <div class="choice-desc">${e.desc}</div>
              <div class="choice-gain"><b>Hậu quả:</b> ${e.gain}</div>
            </button>
          `).join(``)}
        </div>
      </div>
    `,this.choiceModalEl.querySelectorAll(`[data-choice]`).forEach(t=>{t.addEventListener(`click`,()=>{this.sfx.click();let n=t.dataset.choice;this.selectedChoice=n,this.choiceModalEl.style.display=`none`,e()})})}skip(){this.active&&(this.timeoutId&&clearTimeout(this.timeoutId),this.choiceModalEl.style.display=`none`,this.finish())}finish(){this.active=!1,this.overlayEl.style.display=`none`,this.onFinishCallback&&=(this.onFinishCallback(this.selectedChoice),null)}isPlaying(){return this.active}isActive(){return this.active}update(e){}},pm=`07979f2154ec`;function mm(){let e=typeof window<`u`?window.__APP_RELEASE__:null;return{name:`di-tu-online`,milestone:e?.milestone??3,version:e?.version??`0.4.14`,buildHash:e?.buildHash??pm,files:e?.files}}async function hm(){try{let e=await fetch(`./release.json?t=`+Date.now(),{cache:`no-store`});if(e.ok){let t=await e.json();if(t?.buildHash)return pm=t.buildHash,typeof window<`u`&&(window.__APP_RELEASE__=t),t}}catch{}return mm()}var gm=[{name:`1. Lắp vỏ nhựa cách điện`,zone:[.32,.68]},{name:`2. Đặt hai lá đồng tiếp điện`,zone:[.36,.64]},{name:`3. Siết ốc cố định`,zone:[.4,.6]}],_m={cellblock:`Giam`,mess:`Ăn`,workshop:`Xưởng`,office:`QL`,medical:`YT`,classroom:`Học`,visitation:`Thăm`,discipline:`KL`},vm=class{constructor(e,t,n,r){this.g=t,this.sfx=n,this.hooks=r,this.releaseInfo=mm(),this.questCollapsed=!1,this.lastMinimapDraw=0,this.lastClockHTML=``,this.lastQuestHTML=``,this.questBarHighlightTimeout=null,this.lastStatsHTML=``,this.paused=!1,this.modalSeq=0,this.activeMinigameCancel=null,this.pausedByOrientation=!1,this.root=e,this.buildShell(),this.checkOrientation();let i=()=>{this.checkOrientation(),setTimeout(()=>this.checkOrientation(),120),setTimeout(()=>this.checkOrientation(),280),setTimeout(()=>this.checkOrientation(),500)};window.addEventListener(`resize`,i),window.addEventListener(`orientationchange`,i),window.visualViewport?.addEventListener(`resize`,i)}isTouchDevice(){return`ontouchstart`in window||(navigator.maxTouchPoints??0)>0}hasOpenModal(){return this.modalHost.innerHTML.trim()!==``}checkOrientation(){let e=window.innerHeight>window.innerWidth||window.matchMedia?.(`(orientation: portrait)`)?.matches===!0,t=this.isTouchDevice()||`ontouchstart`in window||(navigator.maxTouchPoints??0)>0;e&&(t||window.innerWidth<650)?(this.orientOverlay.style.display=`flex`,this.paused||(this.paused=!0,this.pausedByOrientation=!0)):(this.orientOverlay.style.display=`none`,this.pausedByOrientation&&=(!this.hasOpenModal()&&!document.getElementById(`game-landing`)&&(this.paused=!1),!1))}buildShell(){let e=this.isTouchDevice();this.root.innerHTML=`
      <div class="hud-header">
        <div class="hud-left">
          <div class="hud-card" id="hud-clock"></div>
          <div class="hud-progression-row interactive" id="hud-prog-bar" title="Cấp độ & Kinh nghiệm">
            <span class="hud-level-badge" id="hud-level">Lv.1</span>
            <div class="hud-xp-bar"><div class="hud-xp-fill" id="hud-xp-fill" style="width:0%"></div></div>
          </div>
          <div class="hud-quest-bar interactive" id="hud-quest-bar" title="Nhấp để xem chi tiết / tự đi"></div>
          <div class="toasts" id="hud-toasts" aria-live="polite"></div>
        </div>
        <div class="hud-right">
          <div class="hud-action-row interactive">
            <div class="sentence-tag" id="hud-sentence">Án: 24n</div>
            <button class="btn icon-btn" id="btn-fullscreen" title="Toàn màn hình" aria-label="Toàn màn hình">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
              </svg>
            </button>
            <button class="btn icon-btn" id="btn-bag" title="${e?`Túi đồ`:`Túi đồ (B)`}" aria-label="Túi đồ">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
            </button>
            <button class="btn icon-btn btn-accent" id="btn-menu" title="${e?`Menu cài đặt`:`Menu (Esc)`}" aria-label="Menu trò chơi">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            </button>
          </div>
          <div class="hud-stats-mini interactive" id="hud-stats-mini" title="Nhấp để xem chi tiết các chỉ số"></div>
          <button type="button" class="minimap-box interactive" id="minimap-box"
            title="Xem các khu trong trại" aria-label="Mở bản đồ khu vực">
            <span class="minimap-compass" aria-hidden="true">▲ B</span>
            <canvas id="minimap-canvas" width="132" height="114" aria-hidden="true"></canvas>
            <span class="minimap-status" id="minimap-status" style="display:none"></span>
            <span class="minimap-area" id="minimap-area" aria-live="off">Sân sinh hoạt</span>
          </button>
        </div>
      </div>
      <div class="autowalk-banner" id="autowalk-banner" style="display:none">
        <span class="pulse-dot"></span>
        <span class="autowalk-text" id="autowalk-text">Đang tự đi...</span>
        <button class="btn btn-sm" id="btn-cancel-autowalk">Hủy [X]</button>
      </div>
      <div class="morning-plan-banner interactive" id="morning-plan-banner" style="display:none">
        <div class="morning-plan-content">
          <div class="morning-plan-title">📋 06:00 — Việc hôm nay & Lịch sinh hoạt</div>
          <div class="morning-plan-sub" id="morning-plan-sub">3 việc cần làm đã sẵn sàng</div>
        </div>
        <div style="display:flex;gap:6px;align-items:center;flex-shrink:0">
          <button class="btn btn-sm btn-accent" id="btn-morning-open" style="min-height:36px;min-width:68px">Xem [📋]</button>
          <button class="btn btn-sm" id="btn-morning-dismiss" aria-label="Đóng" style="min-height:36px;min-width:36px;padding:0 8px">✕</button>
        </div>
      </div>
      <div class="prompt-box interactive" id="hud-prompt" style="display:none"></div>
      <div class="joy-zone interactive" id="joy-zone"><div class="joy-knob" id="joy-knob"></div></div>
      <div class="touch-right interactive">
        <button class="btn interact-action" id="btn-interact" type="button" disabled aria-label="Tương tác" title="Tương tác">
          <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor"
               stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="8"></circle>
            <path d="M12 8v8M8 12h8"></path>
          </svg>
          <span class="interact-label" id="interact-label">Tương tác</span>
        </button>
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
    `,this.clockEl=this.root.querySelector(`#hud-clock`),this.questBarEl=this.root.querySelector(`#hud-quest-bar`),this.sentenceEl=this.root.querySelector(`#hud-sentence`),this.statsMiniEl=this.root.querySelector(`#hud-stats-mini`),this.btnBag=this.root.querySelector(`#btn-bag`),this.btnMenu=this.root.querySelector(`#btn-menu`),this.promptEl=this.root.querySelector(`#hud-prompt`),this.toastsEl=this.root.querySelector(`#hud-toasts`),this.modalHost=this.root.querySelector(`#modal-host`),this.joyZone=this.root.querySelector(`#joy-zone`),this.joyKnob=this.root.querySelector(`#joy-knob`),this.btnInteract=this.root.querySelector(`#btn-interact`),this.interactLabelEl=this.root.querySelector(`#interact-label`),this.orientOverlay=this.root.querySelector(`#orientation-overlay`),this.minimapCanvas=this.root.querySelector(`#minimap-canvas`),this.minimapCtx=this.minimapCanvas.getContext(`2d`),this.minimapStatusEl=this.root.querySelector(`#minimap-status`),this.minimapAreaEl=this.root.querySelector(`#minimap-area`),this.autowalkBannerEl=this.root.querySelector(`#autowalk-banner`),this.autowalkTextEl=this.root.querySelector(`#autowalk-text`),this.btnCancelAutoWalk=this.root.querySelector(`#btn-cancel-autowalk`),this.morningBannerEl=this.root.querySelector(`#morning-plan-banner`),this.morningPlanSubEl=this.root.querySelector(`#morning-plan-sub`),this.root.querySelector(`#btn-morning-open`)?.addEventListener(`click`,e=>{e.stopPropagation(),this.sfx.click(),this.morningBannerEl.style.display=`none`,this.showDailyPlanModal()}),this.root.querySelector(`#btn-morning-dismiss`)?.addEventListener(`click`,e=>{e.stopPropagation(),this.sfx.click(),this.morningBannerEl.style.display=`none`});let t=()=>{let e=this.toastsEl.getBoundingClientRect().top,t=this.joyZone.getBoundingClientRect().top;this.toastsEl.style.maxHeight=`${Math.max(0,Math.min(120,t-e-8))}px`},n=new ResizeObserver(t);n.observe(this.questBarEl),n.observe(this.joyZone),window.addEventListener(`resize`,t),window.visualViewport?.addEventListener(`resize`,t),t(),this.btnCancelAutoWalk.addEventListener(`click`,e=>{e.stopPropagation(),this.hooks.onCancelAutoWalk?.()}),this.clockEl.addEventListener(`click`,()=>{this.sfx.click(),this.showDailyPlanModal()}),this.clockEl.style.cursor=`pointer`,this.clockEl.title=`Nhấp để xem Việc hôm nay & Lịch sinh hoạt`,this.btnMenu.addEventListener(`click`,()=>{this.sfx.click(),this.tryLockOrientation(),this.showMainMenu()}),this.btnBag.addEventListener(`click`,()=>{this.sfx.click(),this.tryLockOrientation(),this.openPanel(`bag`)}),this.statsMiniEl.addEventListener(`click`,()=>{this.sfx.click(),this.tryLockOrientation(),this.showStatsDetail()}),this.root.querySelector(`#minimap-box`)?.addEventListener(`click`,()=>{this.sfx.click(),this.tryLockOrientation(),this.showMap()}),this.root.querySelector(`#hud-prog-bar`)?.addEventListener(`click`,()=>{this.sfx.click(),this.tryLockOrientation(),this.showProfileAndSkills()}),this.root.querySelector(`#btn-fullscreen`)?.addEventListener(`click`,()=>{if(this.sfx.click(),!document.fullscreenElement&&!document.webkitFullscreenElement){let e=document.documentElement;e.requestFullscreen?e.requestFullscreen().catch(()=>{}):e.webkitRequestFullscreen&&e.webkitRequestFullscreen()}else{let e=document;e.exitFullscreen?e.exitFullscreen().catch(()=>{}):e.webkitExitFullscreen&&e.webkitExitFullscreen()}}),window.addEventListener(`keydown`,e=>{e.key===`Escape`&&!this.hasOpenModal()&&this.showMainMenu()})}tryLockOrientation(){try{screen.orientation?.lock?.(`landscape`).catch(()=>{})}catch{}}setAutoWalkState(e,t){e?(this.autowalkBannerEl.style.display=`flex`,this.autowalkTextEl.textContent=`Đang tự đi tới: ${t||`Mục tiêu`}...`):this.autowalkBannerEl.style.display=`none`}highlightQuestBar(){this.questBarEl&&(this.questBarEl.classList.remove(`highlight`),this.questBarEl.offsetWidth,this.questBarEl.classList.add(`highlight`),this.questBarHighlightTimeout&&clearTimeout(this.questBarHighlightTimeout),this.questBarHighlightTimeout=window.setTimeout(()=>{this.questBarEl?.classList.remove(`highlight`)},6e3))}toast(e,t=`info`){let n=this.toastsEl.lastElementChild;if(n&&(n.dataset.rawText===e||n.textContent?.startsWith(e))){let r=parseInt(n.dataset.count||`1`,10)+1;n.dataset.count=String(r),n.textContent=`${e} (x${r})`,n.className=`toast ${t}`;return}let r=document.createElement(`div`);for(r.className=`toast ${t}`,r.dataset.rawText=e,r.dataset.count=`1`,r.textContent=e,this.toastsEl.appendChild(r);this.toastsEl.children.length>3;)this.toastsEl.firstElementChild?.remove();setTimeout(()=>{r.style.opacity=`0`,r.style.transform=`translateY(-4px)`,r.style.transition=`opacity 0.25s, transform 0.25s`,setTimeout(()=>r.remove(),260)},3500)}updateReleaseInfo(e){this.releaseInfo=e;let t=this.root.querySelector(`#menu-build-tag`);t&&(t.textContent=`v${e.version} (${e.buildHash.slice(0,7)}) • M${e.milestone}`)}updateHUD(e,t){let n=this.g.s,r=su(n.minute),i=cu(n.minute),a=this.hooks.playerPos(),o=Du(a.x,a.z),s=this.isTouchDevice(),c=`
      <div class="hud-clock">Ngày ${n.day} · ${lu(n.minute)} — <span style="color:#93c5fd">${o}</span></div>
      <div>Hiện tại: <b style="color:#fde68a">${r.label}</b> (${r.where})</div>
      <div class="hud-sub">${i?`Tiếp: ${lu(i.start)} ${i.label}`:`Cuối ngày — về buồng ngủ`}</div>
    `;c!==this.lastClockHTML&&(this.lastClockHTML=c,this.clockEl.innerHTML=c),this.sentenceEl.textContent=`Án: ${n.sentence.remaining}n`;let l=this.root.querySelector(`#hud-level`),u=this.root.querySelector(`#hud-xp-fill`);if(l&&(l.textContent=`Lv.${n.progression.level}`),u){let e=pu(n.progression.level),t=e===1/0?100:Math.min(100,Math.round(n.progression.xp/e*100));u.style.width=`${t}%`}let d=Wu(n),f=!t?.isDuty&&d.waiting,p=t?.questTitle||`Sinh hoạt trại giam`,m=t?.stepDesc||t?.label||`Tham gia các hoạt động theo lịch trình`,h=t?.progress?` <span style="color:#86efac;font-weight:700">(${t.progress})</span>`:``,g=t?.isDuty?`🔔 Nghĩa vụ`:f?`⏳ Chờ giờ`:`🎯 Mục tiêu`,_=t?.isDuty?`duty`:f?`waiting`:``,v=t?.targetName||t?.label||``,y=t?`${Math.round(t.dist)}m`:``,b=t?.openCondition?`<span class="quest-open-cond ${t.isLocked?`locked`:``}">⏰ ${t.openCondition}</span>`:``;if(f&&d.timeRange)m=`Chờ mở cửa: ${d.timeRange} · Gợi ý: Làm việc ngày / rèn luyện trong lúc chờ`,b=`<span class="quest-open-cond locked">⏰ Chờ mở cửa: ${d.timeRange}</span>`;else if(!t){let e=Vu.filter(e=>Bu[e].type===`side`&&this.g.qStatus(e)===`active`);if(e.length>0)p=`Nhiệm vụ tự chọn`,m=`Đang mở: ${e.map(e=>Bu[e].title).join(`, `)}. Mở Nhật ký để xem chi tiết.`,g=`⭐ Tự chọn`;else{let e=(n.daily.tasks||[]).filter(e=>!e.done);e.length>0?(p=`Việc hôm nay`,m=`Còn ${e.length} việc chưa hoàn thành. Bấm nút "📋 Lịch" để xem chi tiết.`,g=`📋 Việc ngày`):(p=`Sinh hoạt trại giam`,m=`Đã hoàn thành hết mục tiêu hôm nay. Rèn luyện thể lực hoặc về buồng nghỉ ngơi.`,g=`🌿 Tự do`)}}let x=f&&d.timeRange?`Chờ mở cửa: ${d.timeRange}`:v||p,S=this.questCollapsed?`
        <div class="quest-row-header">
          <span class="quest-tag ${_}">${g}</span>
          <span class="quest-title-text">${x}</span>
          <button type="button" class="btn-daily-plan" id="btn-open-daily-plan" title="Xem Việc hôm nay & Lịch sinh hoạt">📋 Lịch</button>
          ${y?`<span style="color:#38bdf8;font-weight:700">${y}</span>`:``}
          <span class="quest-toggle-icon" id="btn-quest-toggle" title="Mở rộng bảng nhiệm vụ">▸</span>
        </div>
      `:`
        <div class="quest-row-header">
          <div style="display:flex;align-items:center;gap:6px;overflow:hidden">
            <span class="quest-tag ${_}">${g}</span>
            <span class="quest-title-text">${p}</span>
          </div>
          <div style="display:flex;align-items:center;gap:4px">
            <button type="button" class="btn-daily-plan" id="btn-open-daily-plan" title="Xem Việc hôm nay & Lịch sinh hoạt">📋 Lịch</button>
            <span class="quest-toggle-icon" id="btn-quest-toggle" title="Thu gọn bảng nhiệm vụ">▾</span>
          </div>
        </div>
        <div class="quest-row-desc">${m}${h}</div>
        <div class="quest-row-footer">
          <div class="quest-dest-info" id="quest-dest-info">
            <span>📍 <b>${v}</b></span>
            ${y?`<span style="color:#38bdf8;font-weight:700">· ${y}</span>`:``}
            ${b?`· ${b}`:``}
          </div>
          ${t?.tx===void 0?``:`<button class="btn-auto-walk" id="btn-quest-autowalk">🚶 Tự đi</button>`}
        </div>
      `;if(S!==this.lastQuestHTML){this.lastQuestHTML=S;let e=this.questBarEl.classList.contains(`highlight`);this.questBarEl.className=this.questCollapsed?`hud-quest-bar collapsed interactive`:`hud-quest-bar interactive`,e&&this.questBarEl.classList.add(`highlight`),this.questBarEl.innerHTML=S,this.questBarEl.querySelector(`#btn-quest-toggle`)?.addEventListener(`click`,e=>{e.stopPropagation(),this.sfx.click(),this.questCollapsed=!this.questCollapsed,this.lastQuestHTML=``});let n=e=>{e.stopPropagation(),this.sfx.click(),t?.tx!==void 0&&t?.tz!==void 0&&this.hooks.onAutoWalk?.(t.tx,t.tz,t.isLocked,t.safeX,t.safeZ,v)};this.questBarEl.querySelector(`#btn-quest-autowalk`)?.addEventListener(`click`,n),this.questBarEl.querySelector(`#quest-dest-info`)?.addEventListener(`click`,n),this.questBarEl.querySelector(`#btn-open-daily-plan`)?.addEventListener(`click`,e=>{e.stopPropagation(),this.sfx.click(),this.showDailyPlanModal()}),this.questBarEl.onclick=e=>{this.questBarEl.classList.remove(`highlight`),e.target.closest(`#btn-quest-toggle`)||e.target.closest(`#btn-quest-autowalk`)||e.target.closest(`#quest-dest-info`)||e.target.closest(`#btn-open-daily-plan`)||(this.sfx.click(),this.showQuestDetail())}}n.minute===360&&!n.daily.morningPopupShown&&!document.getElementById(`game-landing`)&&(n.daily.morningPopupShown=!0,this.showMorningBanner());let C=n.stats;C.health<30||C.stamina<=30||C.satiety<25||C.morale<25||C.suspicion>70?this.statsMiniEl.classList.add(`stat-warning`):this.statsMiniEl.classList.remove(`stat-warning`);let w=`
      <span class="stat-item ${C.health<30?`danger`:``}">❤️${Math.round(C.health)}</span>
      <span class="stat-item ${C.stamina<=30?`danger`:``}">⚡${Math.round(C.stamina)}</span>
      <span class="stat-item ${C.satiety<25?`danger`:``}">🍚${Math.round(C.satiety)}</span>
      <span class="stat-item ${C.morale<25?`danger`:``}">🧠${Math.round(C.morale)}</span>
      <span class="stat-item">💰${uu(C.money)}</span>
    `;if(w!==this.lastStatsHTML&&(this.lastStatsHTML=w,this.statsMiniEl.innerHTML=w),this.minimapAreaEl.textContent=o,this.renderMinimap(a,t),e&&!this.paused){this.promptEl.style.display=`block`,this.promptEl.innerHTML=`
        <div>${s?``:`<b>[E]</b> `}<b>${e.label}</b></div>
        ${e.risk?`<div class="prompt-risk">⚠ Quy tắc & hậu quả: ${e.risk}</div>`:``}
      `,this.promptEl.onclick=()=>e.run(),this.btnInteract.disabled=!1,this.btnInteract.classList.add(`is-available`);let t=e.label;t.includes(`:`)&&(t=t.split(`:`).slice(1).join(`:`).trim()),t.length>14&&(t=t.slice(0,13).trimEnd()+`…`),this.interactLabelEl.textContent=s?t:`${t} (E)`,this.btnInteract.title=e.label,this.btnInteract.setAttribute(`aria-label`,e.label)}else this.promptEl.style.display=`none`,this.promptEl.onclick=null,this.btnInteract.disabled=!0,this.btnInteract.classList.remove(`is-available`),this.interactLabelEl.textContent=s?`Tương tác`:`Tương tác (E)`,this.btnInteract.title=`Tương tác`,this.btnInteract.setAttribute(`aria-label`,`Tương tác`)}renderMinimap(e,t){if(!this.minimapCanvas||!this.minimapCtx)return;let n=this.minimapCtx,r=this.minimapCanvas.width,i=this.minimapCanvas.height,a=performance.now();if(a-this.lastMinimapDraw<65)return;this.lastMinimapDraw=a;let o=e=>Math.round((e- -30)/60*r),s=e=>Math.round((e- -34)/56*i);n.fillStyle=`#0b1120`,n.fillRect(0,0,r,i),n.fillStyle=`#1e293b`,n.fillRect(o(-28),s(-32),o(28)-o(-28),s(20)-s(-32));for(let[t,r]of Object.entries(bu)){let i=o(r.x1),a=s(r.z1),c=o(r.x2)-i,l=s(r.z2)-a,u=e.x>=r.x1&&e.x<=r.x2&&e.z>=r.z1&&e.z<=r.z2;n.fillStyle=u?`#27566b`:`#334155`,n.fillRect(i,a,c,l),n.strokeStyle=u?`#67e8f9`:`#475569`,n.lineWidth=u?1.5:1,n.strokeRect(i,a,c,l);let d=_m[t];if(d){n.font=`bold 8px system-ui, sans-serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.lineJoin=`round`;let e=i+c/2,t=a+l/2;n.strokeStyle=`#0b1120`,n.lineWidth=2,n.strokeText(d,e,t,Math.max(12,c-2)),n.fillStyle=u?`#e0faff`:`#dbeafe`,n.fillText(d,e,t,Math.max(12,c-2))}}for(let e of Cu)n.strokeStyle=this.g.isOpen(e.area)?`#22c55e`:`#ef4444`,n.lineWidth=2.5,n.beginPath(),n.moveTo(o(e.box.x1),s(e.box.z1)),n.lineTo(o(e.box.x2),s(e.box.z2)),n.stroke();if(t?.route&&t.route.length>0){n.strokeStyle=`#f59e0b`,n.lineWidth=2,n.setLineDash([3,2]),n.beginPath(),n.moveTo(o(e.x),s(e.z));for(let e of t.route)n.lineTo(o(e[0]),s(e[1]));n.stroke(),n.setLineDash([])}if(t?.tx!==void 0&&t?.tz!==void 0){let e=o(t.tx),r=s(t.tz);n.fillStyle=t.isDuty?`#38bdf8`:`#f59e0b`,n.beginPath(),n.arc(e,r,3.5,0,Math.PI*2),n.fill(),n.strokeStyle=`#fff`,n.lineWidth=1,n.stroke()}let c=o(e.x),l=s(e.z);n.fillStyle=`#06b6d4`,n.beginPath(),n.arc(c,l,3.5,0,Math.PI*2),n.fill(),n.strokeStyle=`#fff`,n.lineWidth=1,n.stroke();let u=Math.sin(e.rot),d=Math.cos(e.rot);n.strokeStyle=`#38bdf8`,n.lineWidth=1.5,n.beginPath(),n.moveTo(c,l),n.lineTo(c+u*7,l+d*7),n.stroke(),t?.isLocked?(this.minimapStatusEl.style.display=`block`,this.minimapStatusEl.textContent=t.openCondition?`Khóa · ${t.openCondition}`:`Khu vực đang đóng`):this.minimapStatusEl.style.display=`none`}closeModal(){this.activeMinigameCancel&&=(this.activeMinigameCancel(),null),this.modalSeq++,this.modalHost.innerHTML=``,this.pausedByOrientation||(this.paused=!1)}showModal(e,t,n=``){this.modalSeq++,this.paused=!0;let r=n?`modal ${n}`:`modal`;this.modalHost.innerHTML=`<div class="modal-backdrop"><div class="modal-shell"><div class="${r}">${e}</div></div></div>`;let i=this.modalHost.querySelector(`.modal`),a=Array.from(i.querySelectorAll(`button[data-close]`));if(a.length){i.classList.add(`has-top-close`);let e=document.createElement(`button`);e.type=`button`,e.className=`modal-close-top`,e.setAttribute(`aria-label`,`Đóng bảng`),e.title=`Đóng bảng`,e.textContent=`×`,e.addEventListener(`click`,()=>this.closeModal()),i.parentElement.append(e);for(let e of a){let t=(e.textContent??``).replace(/\s+/g,` `).trim().toLocaleLowerCase(`vi`);if(t===`đóng`||t===`đóng menu`){let t=e.parentElement;e.remove(),t&&t!==i&&t.parentElement===i&&t.children.length===0&&!t.textContent?.trim()&&t.remove()}else e.addEventListener(`click`,()=>this.closeModal())}}t&&t(i)}showCharacterCreation(e){let t=(this.g.s.profile?.name||`Minh`).trim(),n=0,r=this.g.s.profile?.skin??14857357,i=1579035,a=this.g.s.profile?.hairStyle||`short`,o=this.g.s.profile?.background??`mechanic`,s=this.g.s.profile?.flashbackChoice??`keep_doc`,c=this.g.s.profile?.difficulty??`normal`,l=[{name:`Mẫu 1: Trẻ trung`,skin:16109744,hairStyle:`short`,desc:`Dáng nhanh nhẹn, mắt sáng, tóc ngắn gọn gàng.`},{name:`Mẫu 2: Rắn rỏi`,skin:14857357,hairStyle:`buzz`,desc:`Dáng đậm, tóc húi cua, da bánh mật khỏe khoắn.`},{name:`Mẫu 3: Trầm tĩnh`,skin:12225635,hairStyle:`bald`,desc:`Dáng cao gầy, đầu đinh, ánh mắt kiên định.`}],u=`
      <div class="cc-header">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <h2>TẠO NHÂN VẬT & KHỞI ĐẦU</h2>
          <span class="tag good">Mốc 3 · 24 ngày</span>
        </div>
        <div class="hud-sub">Thiết lập hồ sơ trước khi bước vào Trại giam An Phú</div>
      </div>

      <div class="cc-body" id="cc-scroll-body">
        <div class="card-row">
          <label style="font-weight:700;display:block;margin-bottom:6px">1. Tên nhân vật (2–20 ký tự):</label>
          <input type="text" id="cc-input-name" class="text-input" value="${t}" maxlength="20" placeholder="Nhập tên nhân vật..." autocomplete="off" autocapitalize="words" spellcheck="false"/>
        </div>

        <div class="card-row">
          <label style="font-weight:700;display:block;margin-bottom:6px">2. Mẫu ngoại hình cơ sở:</label>
          <div class="cc-grid" id="cc-presets-grid">
            ${l.map((e,t)=>`
              <div class="cc-card ${n===t?`selected`:``}" data-preset="${t}">
                <b>${e.name}</b>
                <div class="hud-sub" style="margin-top:4px">${e.desc}</div>
              </div>
            `).join(``)}
          </div>
          <div style="display:flex;gap:12px;margin-top:10px;flex-wrap:wrap">
            <div>
              <label style="font-size:12px;color:var(--muted);display:block;margin-bottom:4px">Kiểu tóc:</label>
              <div style="display:flex;gap:6px" id="cc-hair-btns">
                <button class="btn btn-sm ${a===`short`?`btn-accent`:``}" data-hair="short">Ngắn</button>
                <button class="btn btn-sm ${a===`buzz`?`btn-accent`:``}" data-hair="buzz">Húi cua</button>
                <button class="btn btn-sm ${a===`bald`?`btn-accent`:``}" data-hair="bald">Đầu trọc</button>
              </div>
            </div>
            <div>
              <label style="font-size:12px;color:var(--muted);display:block;margin-bottom:4px">Tông da:</label>
              <div style="display:flex;gap:6px" id="cc-skin-btns">
                <button class="btn btn-sm ${r===16109744?`btn-accent`:``}" data-skin="light">Sáng</button>
                <button class="btn btn-sm ${r===14857357?`btn-accent`:``}" data-skin="med">Bánh mật</button>
                <button class="btn btn-sm ${r===12225635?`btn-accent`:``}" data-skin="dark">Ngăm</button>
              </div>
            </div>
          </div>
        </div>

        <div class="card-row">
          <label style="font-weight:700;display:block;margin-bottom:6px">3. Chọn xuất thân (Quá khứ vụ án Kho số 7):</label>
          <div class="cc-grid" style="grid-template-columns:1fr" id="cc-bg-grid">
            ${Object.keys(iu).map(e=>{let t=iu[e];return`
                <div class="cc-card cc-bg-card ${o===e?`selected`:``}" data-bg="${e}">
                  <div style="display:flex;justify-content:space-between;align-items:center">
                    <b style="font-size:14px;color:#fde68a">${t.name}</b>
                    <span class="hud-sub">${t.tagline}</span>
                  </div>
                  <div style="font-size:12.5px;color:#cbd5e1;margin:5px 0">${t.desc}</div>
                  <div class="cc-attr-row">
                    <span class="cc-attr-tag">Ưu điểm: ${t.pros}</span>
                    <span class="cc-attr-tag" style="color:#f87171">Hạn chế: ${t.cons}</span>
                  </div>
                </div>
              `}).join(``)}
          </div>
        </div>

        <div class="card-row">
          <label style="font-weight:700;display:block;margin-bottom:6px">4. Quyết định trong biến cố Kho số 7:</label>
          <div class="hud-sub" style="margin-bottom:8px">Hành động của bạn trong đêm hỏa hoạn quyết định manh mối và lợi thế khởi đầu</div>
          <div class="cc-grid" style="grid-template-columns:1fr" id="cc-fb-grid">
            ${dm.map(e=>`
                <div class="cc-card cc-bg-card ${s===e.id?`selected`:``}" data-fb="${e.id}">
                  <div style="display:flex;justify-content:space-between;align-items:center">
                    <b style="font-size:13.5px;color:#93c5fd">${e.label}</b>
                  </div>
                  <div style="font-size:12px;color:#cbd5e1;margin:4px 0">${e.desc}</div>
                  <div class="cc-attr-row">
                    <span class="cc-attr-tag" style="color:#86efac">Khởi đầu: ${e.gain}</span>
                  </div>
                </div>
              `).join(``)}
          </div>
        </div>

        <div class="card-row">
          <label style="font-weight:700;display:block;margin-bottom:6px">5. Mức độ thử thách:</label>
          <div class="cc-grid" id="cc-diff-grid">
            ${Object.keys(au).map(e=>{let t=au[e];return`
                <div class="cc-card ${c===e?`selected`:``}" data-diff="${e}">
                  <b>${t.name}</b>
                  <div class="hud-sub" style="margin-top:4px">${t.desc}</div>
                </div>
              `}).join(``)}
          </div>
        </div>

        <div class="cc-bottom-spacer"></div>
      </div>

      <div class="cc-footer">
        <div class="cc-footer-info">
          <div>Bản án: <b>24 ngày</b></div>
          <div class="hud-sub" style="font-size:11px">Kỳ xét giảm: 4 ngày/lần (0–2 ngày)</div>
        </div>
        <button class="btn btn-accent btn-cc-submit" id="btn-cc-submit">
          BẮT ĐẦU HÀNH TRÌNH ⏭
        </button>
      </div>
    `;this.showModal(u,u=>{let d=u.querySelector(`#cc-input-name`);d?.addEventListener(`input`,e=>{t=e.target.value}),d?.addEventListener(`focus`,()=>{setTimeout(()=>{d.scrollIntoView({behavior:`smooth`,block:`nearest`})},120)}),u.querySelectorAll(`[data-preset]`).forEach(e=>{e.addEventListener(`click`,()=>{n=Number(e.dataset.preset),u.querySelectorAll(`[data-preset]`).forEach(e=>e.classList.remove(`selected`)),e.classList.add(`selected`);let t=l[n];r=t.skin,a=t.hairStyle,u.querySelectorAll(`[data-hair]`).forEach(e=>{e.classList.toggle(`btn-accent`,e.dataset.hair===a)}),u.querySelectorAll(`[data-skin]`).forEach(e=>{let t=e.dataset.skin===`light`?16109744:e.dataset.skin===`med`?14857357:12225635;e.classList.toggle(`btn-accent`,t===r)}),this.hooks.onUpdateAppearance?.({skin:r,hair:i,hairStyle:a,preset:n})})}),u.querySelectorAll(`[data-hair]`).forEach(e=>{e.addEventListener(`click`,()=>{a=e.dataset.hair,u.querySelectorAll(`[data-hair]`).forEach(e=>e.classList.remove(`btn-accent`)),e.classList.add(`btn-accent`),this.hooks.onUpdateAppearance?.({skin:r,hair:i,hairStyle:a,preset:n})})}),u.querySelectorAll(`[data-skin]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.skin;r=t===`light`?16109744:t===`med`?14857357:12225635,u.querySelectorAll(`[data-skin]`).forEach(e=>e.classList.remove(`btn-accent`)),e.classList.add(`btn-accent`),this.hooks.onUpdateAppearance?.({skin:r,hair:i,hairStyle:a,preset:n})})}),u.querySelectorAll(`[data-bg]`).forEach(e=>{e.addEventListener(`click`,()=>{o=e.dataset.bg,u.querySelectorAll(`[data-bg]`).forEach(e=>e.classList.remove(`selected`)),e.classList.add(`selected`)})}),u.querySelectorAll(`[data-fb]`).forEach(e=>{e.addEventListener(`click`,()=>{s=e.dataset.fb,u.querySelectorAll(`[data-fb]`).forEach(e=>e.classList.remove(`selected`)),e.classList.add(`selected`)})}),u.querySelectorAll(`[data-diff]`).forEach(e=>{e.addEventListener(`click`,()=>{c=e.dataset.diff,u.querySelectorAll(`[data-diff]`).forEach(e=>e.classList.remove(`selected`)),e.classList.add(`selected`)})});let f=!1,p=u.querySelector(`#btn-cc-submit`);p?.addEventListener(`click`,l=>{if(l.preventDefault(),f)return;let u=(d?d.value:t).replace(/[<>"'&]/g,``).trim();u.length<2||u.length>20?(this.toast(`Tên nhân vật phải từ 2 đến 20 ký tự (hỗ trợ tiếng Việt).`,`warn`),d?.focus()):(f=!0,p.disabled=!0,p.textContent=`ĐANG VÀO TRẠI...`,this.closeModal(),e({name:u,preset:n,skin:r,hair:i,hairStyle:a,background:o,difficulty:c,flashbackChoice:s,introSeen:!0}))})},`modal-cc`)}showMainMenu(){let e=this.isTouchDevice();this.showModal(`
      <h2>MENU TRÒ CHƠI</h2>
      <div class="hud-sub">Quản lý nhân vật, kỹ năng, hồ sơ án và nhiệm vụ</div>
      <div class="menu-grid">
        <button class="menu-card-btn" data-menu="profile">
          <span class="icon">👤</span>
          <span>Nhân vật & Kỹ năng</span>
        </button>
        <button class="menu-card-btn" data-menu="perks">
          <span class="icon">⭐</span>
          <span>Đặc quyền đã mở</span>
        </button>
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
    `,e=>{e.querySelectorAll(`[data-menu]`).forEach(e=>{e.addEventListener(`click`,()=>{this.sfx.click();let t=e.dataset.menu;this.openPanel(t)})})})}showPerks(){let e=this.g.getPerks().map(e=>`
      <div class="card-row" style="border-left: 3px solid ${e.unlocked?`#4ade80`:`#64748b`}; padding-left: 10px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
          <b style="font-size:14px;color:${e.unlocked?`#fde68a`:`#94a3b8`}">${e.name}</b>
          <span class="tag ${e.unlocked?`good`:`muted`}">${e.unlocked?`ĐÃ MỞ`:`CHƯA MỞ`}</span>
        </div>
        <div style="font-size:12.5px;color:#cbd5e1;margin-bottom:4px">${e.desc}</div>
        <div style="display:flex;justify-content:space-between;align-items:center;font-size:11.5px;color:#94a3b8">
          <span>Nguồn: <b>${e.source}</b></span>
          <span style="color:${e.unlocked?`#86efac`:`#f87171`}">${e.usageStatus??``}</span>
        </div>
      </div>
    `).join(``);this.showModal(`
      <h2>ĐẶC QUYỀN ĐÃ MỞ (PERKS)</h2>
      <div class="hud-sub" style="margin-bottom:12px">Quyền lợi và trợ giúp thực tế từ cải tạo và quan hệ trong trại giam</div>
      <div style="display:flex;flex-direction:column;gap:8px;max-height:60vh;overflow-y:auto;padding-right:4px">
        ${e}
      </div>
      <div style="margin-top:14px;display:flex;justify-content:flex-end">
        <button class="btn btn-accent" data-close>Đóng</button>
      </div>
    `)}showProfileAndSkills(){let e=this.g.s,t=e.progression,n=e.profile,r=iu[n.background]||iu.mechanic,i=pu(t.level),a=()=>{let e=`
        <h2>NHÂN VẬT & KỸ NĂNG</h2>
        <div class="hud-sub" style="margin-bottom:12px">Hồ sơ cá nhân và phát triển năng lực bản thân</div>

        <div class="card-row" style="display:flex;justify-content:space-between;align-items:center">
          <div>
            <div style="font-size:16px;font-weight:700;color:#fde68a">${n.name}</div>
            <div class="hud-sub">Xuất thân: <b>${r.name}</b> · Độ khó: <b>${n.difficulty}</b></div>
          </div>
          <div style="text-align:right">
            <span class="hud-level-badge">Cấp độ ${t.level}</span>
            <div class="hud-sub" style="margin-top:3px">XP: <b>${t.xp}</b> / ${i===1/0?`MAX`:i}</div>
          </div>
        </div>

        <div class="card-row">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
            <b style="color:#38bdf8">Điểm kỹ năng khả dụng: ${t.skillPoints}</b>
            <span class="hud-sub">Tối đa 5 điểm/thuộc tính</span>
          </div>

          <div class="skill-row">
            <div class="skill-info">
              <div class="skill-title">💪 Bền bỉ (Endurance)</div>
              <div class="skill-desc">Giảm ${(t.attrs.endurance-1)*8}% tiêu hao thể lực khi chạy và lao động.</div>
            </div>
            <div class="skill-val">${t.attrs.endurance}/5</div>
            ${t.skillPoints>0&&t.attrs.endurance<5?`<button class="btn btn-sm btn-accent" data-upgrade="endurance">+ Nâng</button>`:``}
          </div>

          <div class="skill-row">
            <div class="skill-info">
              <div class="skill-title">🖐 Khéo léo (Agility)</div>
              <div class="skill-desc">Mở rộng +${(t.attrs.agility-1)*12}% vùng chính xác trong mini-game xưởng & nối điện.</div>
            </div>
            <div class="skill-val">${t.attrs.agility}/5</div>
            ${t.skillPoints>0&&t.attrs.agility<5?`<button class="btn btn-sm btn-accent" data-upgrade="agility">+ Nâng</button>`:``}
          </div>

          <div class="skill-row">
            <div class="skill-info">
              <div class="skill-title">🔍 Quan sát (Perception)</div>
              <div class="skill-desc">Tăng khả năng phát hiện manh mối, giảm thời gian tìm kiếm vật phẩm.</div>
            </div>
            <div class="skill-val">${t.attrs.perception}/5</div>
            ${t.skillPoints>0&&t.attrs.perception<5?`<button class="btn btn-sm btn-accent" data-upgrade="perception">+ Nâng</button>`:``}
          </div>

          <div class="skill-row">
            <div class="skill-info">
              <div class="skill-title">🗣 Giao tiếp (Charisma)</div>
              <div class="skill-desc">Giảm ${(t.attrs.charisma-1)*5}% giá căn tin; tăng +${(t.attrs.charisma-1)*15}% thiện cảm khi trò chuyện.</div>
            </div>
            <div class="skill-val">${t.attrs.charisma}/5</div>
            ${t.skillPoints>0&&t.attrs.charisma<5?`<button class="btn btn-sm btn-accent" data-upgrade="charisma">+ Nâng</button>`:``}
          </div>
        </div>

        <div style="text-align:right;margin-top:12px">
          <button class="btn btn-accent" data-close>Đóng</button>
        </div>
      `;this.showModal(e,e=>{e.querySelectorAll(`[data-upgrade]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.upgrade;this.g.spendSkillPoint(t)&&a()})})})};a()}showQuestDetail(){let e=this.g.s,t=Vu.filter(e=>this.g.qStatus(e)===`active`).map(e=>{let t=Bu[e],n=this.g.qBranch(e),r=t.objectives.filter(e=>!e.branch||e.branch===n),i=r.find(t=>!t.optional&&!this.g.qObj(e,t.id)),a=r.map(t=>{let n=this.g.qObj(e,t.id),r=!n&&!!this.g.objectiveBlockReason(e,t.id);return`<div style="font-size:13px;margin:4px 0;line-height:1.45;color:${n?`#86efac`:!n&&t===i?`#fde68a`:`#cbd5e1`}">
            ${n?`✔`:r?`🔒`:`➜`} ${t.text}
          </div>`}).join(``),o=i?`<div style="margin:8px 0;padding:7px 9px;border-radius:8px;background:rgba(245,158,11,.11);border-left:3px solid #f59e0b;color:#fde68a;font-size:12px">
              Bước cần làm trước: ${i.text}
            </div>`:``;return`
          <div class="card-row">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
              <b>${t.title}</b>
              <span class="tag ${t.type===`main`?`good`:``}">${t.type===`main`?`Chính`:`Phụ`}</span>
            </div>
            <div class="hud-sub" style="margin-bottom:6px">Người giao: <b>${t.giver}</b> · ${t.reason}</div>
            ${o}
            <div style="margin-left:4px">${a}</div>
            <div class="hud-sub" style="margin-top:6px;color:#fde68a">Phần thưởng: ${t.reward}</div>
          </div>
        `}).join(``);this.showModal(`
      <h2>MỤC TIÊU & NHIỆM VỤ HIỆN TẠI</h2>
      <div class="hud-sub" style="margin-bottom:10px">Chương ${e.chapter} — Khám phá và đáp ứng quy chế trại giam</div>
      ${t||`<div style="color:var(--muted);padding:10px 0">Hiện không có nhiệm vụ nào cần làm. Hãy tham gia lao động, học nghề hoặc gặp gỡ NPC.</div>`}
      <div style="text-align:right;margin-top:12px">
        <button class="btn btn-accent" data-close>Đóng</button>
      </div>
    `)}showDailyPlanModal(){let e=this.g.s,t=e.daily.tasks||[],n=Ju(e.minute),r=t.map(e=>{let t=e.done,n=t?`<span class="daily-badge done">✔ Đã xong (+10 XP)</span>`:`<span class="daily-badge pending">⏳ Chưa xong</span>`,r=e.category===`duty`?`Nghĩa vụ`:e.category===`relation`?`Quan hệ`:`Cá nhân`;return`
          <div class="daily-task-card ${t?`done`:``}">
            <div class="daily-task-top">
              <span class="daily-cat ${e.category}">${r}</span>
              <b class="daily-task-title">${e.title}</b>
              ${n}
            </div>
            <div class="daily-task-desc">${e.desc}</div>
            ${e.timeHint?`<div class="daily-task-time">⏰ Khung giờ: <b>${e.timeHint}</b></div>`:``}
          </div>
        `}).join(``),i=n.map(e=>{let t=e.status===`active`?` <b style="color:#22c55e">(đang mở)</b>`:e.status===`past`?` <span style="opacity:0.55">(đã qua)</span>`:``;return`
          <div class="schedule-row ${e.status}">
            <span class="schedule-time">${e.timeRange}</span>
            <span class="schedule-label"><b>${e.label}</b>${e.where?` (${e.where})`:``}${t}</span>
          </div>
        `}).join(``),a=t.length>0&&t.every(e=>e.done)?`<div class="daily-bonus achieved">🎉 Đã hoàn thành 3/3 việc hôm nay! Nhận thưởng +1 điểm cải tạo.</div>`:`<div class="daily-bonus info">💡 Thưởng: +10 XP/việc · Hoàn thành cả 3 việc trong ngày: <b>+1 điểm cải tạo</b>.</div>`;this.showModal(`
      <h2>VIỆC HÔM NAY & LỊCH SINH HOẠT</h2>
      <div class="hud-sub" style="margin-bottom:8px">Ngày ${e.day} · Trại giam An Phú</div>
      ${a}
      <h3 style="margin-top:12px;margin-bottom:6px;font-size:13.5px">📋 3 Việc Hôm Nay</h3>
      <div class="daily-tasks-list">
        ${r||`<div class="hud-sub">Chưa có mục tiêu ngày.</div>`}
      </div>
      <h3 style="margin-top:14px;margin-bottom:6px;font-size:13.5px">⏰ Lịch Sinh Hoạt Cố Định</h3>
      <div class="daily-schedule-list">
        ${i}
      </div>
      <div style="margin-top:14px;display:flex;justify-content:flex-end">
        <button class="btn btn-accent" style="min-height:44px;min-width:120px" data-close>Đã hiểu</button>
      </div>
    `)}showMorningBanner(){if(!this.morningBannerEl)return;let e=this.g.s.daily.tasks||[];this.morningPlanSubEl&&(this.morningPlanSubEl.textContent=e.length>0?e.map(e=>e.title).join(` • `):`3 việc cần làm đã sẵn sàng`),this.morningBannerEl.style.display=`flex`}showStatsDetail(){let e=this.g.s.stats,t=(e,t=`#22c55e`)=>`<span class="bar" style="width:100px;height:8px"><i style="width:${Math.round(e)}%;background:${t}"></i></span>`;this.showModal(`
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
        <div class="hud-sub">Tiêu hao khi chạy nhanh và thao tác xưởng. Tự hồi phục khi đi bộ hoặc nghỉ ngơi. Thuộc tính Bền bỉ giúp giảm hao tổn.</div>
      </div>
      <div class="card-row">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
          <span>🍚 <b>Độ no</b>: ${Math.round(e.satiety)}/100</span>
          ${t(e.satiety,e.satiety<25?`#ef4444`:e.satiety<60?`#f59e0b`:`#22c55e`)}
        </div>
        <div class="hud-sub">0 là đói lả, 100 là no căng. Giảm dần theo giờ và khi lao động nặng. Cần ăn cơm đúng giờ tại Nhà ăn hoặc dùng thức ăn nhẹ mua tại quầy căn tin.</div>
      </div>
      <div class="card-row">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
          <span>🧠 <b>Tinh thần</b>: ${Math.round(e.morale)}/100</span>
          ${t(e.morale,e.morale<25?`#ef4444`:e.morale<60?`#f59e0b`:`#a855f7`)}
        </div>
        <div class="hud-sub">0 là suy sụp tinh thần, 100 là vững vàng lạc quan. Giảm khi vi phạm kỷ luật hoặc chịu sức ép. Phục hồi bằng tập thể dục sân trại, đọc sách thư viện, trò chuyện hoặc ngủ đủ giấc.</div>
      </div>
      <div class="card-row">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
          <span>🌟 <b>Điểm cải tạo</b>: ${Math.round(e.reform)}/100</span>
          ${t(e.reform,`#f59e0b`)}
        </div>
        <div class="hud-sub">Tiêu chí quan trọng nhất trong kỳ xét giảm án 4 ngày một lần. Tăng khi lao động đủ định mức, học nghề, giúp đỡ người khác.</div>
      </div>
      <div class="card-row">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
          <span>👀 <b>Mức nghi ngờ</b>: ${Math.round(e.suspicion)}/100</span>
          ${t(e.suspicion,e.suspicion>50?`#ef4444`:`#64748b`)}
        </div>
        <div class="hud-sub">Tăng khi lảng vảng gần khu cấm, kho vật tư. Khi quá cao sẽ bị quản giáo khám xét bất ngờ.</div>
      </div>
      <div class="card-row">
        <div>💰 <b>Tiền lưu ký / căn tin</b>: <span style="color:#fde68a;font-size:15px;font-weight:700">${uu(e.money)}</span></div>
        <div class="hud-sub">Tiền thù lao lao động hoặc người nhà gửi vào. Dùng mua thuốc, đồ dùng căn tin.</div>
      </div>
      <div style="text-align:right;margin-top:12px">
        <button class="btn btn-accent" data-close>Đóng</button>
      </div>
    `)}openPanel(e){switch(e){case`profile`:return this.showProfileAndSkills();case`perks`:return this.showPerks();case`journal`:return this.showJournal();case`record`:return this.showRecord();case`relations`:return this.showRelations();case`bag`:return this.showBag();case`map`:return this.showMap();case`wait`:return this.showWait();case`pause`:return this.showPause()}}showDialogue(e,t){if(e.speaker===`Y sĩ An`&&this.g.hasPerk(`an_heal`)&&!e.choices.some(e=>e.label.includes(`Y sĩ An khám`))){let t=!this.g.canAnHeal();e.choices.unshift({label:t?`Hôm nay Y sĩ An đã cấp thuốc bồi dưỡng rồi (đã dùng).`:`🩺 Nhờ Y sĩ An khám & cấp thuốc miễn phí (Đặc quyền An ≥ 15)`,disabled:t?`Đã dùng hôm nay`:void 0,run:()=>(t||this.g.useAnHeal(),null)})}if(e.speaker===`Chú Bảy`&&this.g.hasPerk(`bay_excuse`)&&!e.choices.some(e=>e.label.includes(`Chú Bảy bảo lãnh`))){let t=this.g.s.daily.rollcall===`missed`,n=this.g.s.daily.work===`missed`;this.g.canBayExcuse()&&(t||n)&&e.choices.unshift({label:`🤝 Nhờ Chú Bảy bảo lãnh xin phép vắng ${t?`điểm danh`:`ca làm`} (1 lần/kỳ xét)`,run:()=>(this.g.useBayExcuse(t?`rollcall`:`work`),null)})}let n=e.choices.map((e,t)=>`
        <button class="choice-btn ${e.important?`important`:``}" data-idx="${t}" ${e.disabled?`disabled`:``}>
          ${e.important?`<span class="tag bad">Quyết định quan trọng</span>`:``}${e.label}
          ${e.risk?`<div class="prompt-risk">⚠ ${e.risk}</div>`:``}
          ${e.disabled?`<div class="hud-sub" style="color:#f87171">${e.disabled}</div>`:``}
        </button>
      `).join(``);this.showModal(`
      <h2>${e.speaker}</h2>
      ${e.role?`<div class="hud-sub" style="margin-bottom:8px">${e.role}</div>`:``}
      <div class="dialogue-text">${e.text}</div>
      <div style="display:flex;flex-direction:column;gap:6px;margin-top:12px">${n}</div>
    `,n=>{n.querySelectorAll(`[data-idx]`).forEach(n=>{n.addEventListener(`click`,()=>{let r=Number(n.dataset.idx),i=e.choices[r];if(!i)return;this.sfx.click();let a=this.modalSeq,o=i.run();o?this.showDialogue(o,t):this.modalSeq===a&&(this.closeModal(),t&&t())})})})}showViolationBanner(e){this.sfx.bad(),this.toast(`VI PHẠM: ${e.title} — ${e.penalty}`,`bad`)}showJournal(){let e=this.g.s,t=e.daily,n=t.rollcall===`late`,r=t.rollcall===`ok`||n,i=[{title:`Điểm danh buổi sáng (06:30–06:45)`,status:t.rollcall===`ok`?`Đã hoàn thành đúng giờ`:n?`Trễ giờ`:t.rollcall===`missed`?`Bỏ điểm danh`:`Đang chờ (có mặt ở ô vàng ngoài sân)`,done:r,late:n},{title:`Lao động ca sáng (08:00–11:30)`,status:t.work===`ok`?`Đã hoàn thành ${t.workUnits}/3 ổ cắm`:t.workClockedIn?`Đã chấm công (làm ${t.workUnits}/3)`:`Chưa chấm công (xưởng lao động)`,done:t.work===`ok`,late:!1},{title:`Về buồng giam điểm danh tối (21:30)`,status:t.curfew===`ok`?`Đã có mặt trong buồng`:t.curfew===`missed`?`Vi phạm giới nghiêm`:`Có mặt tại buồng giam trước 21:30`,done:t.curfew===`ok`,late:!1}].map(e=>`
      <div class="card-row">
        <b>${e.done?`✔`:`○`} ${e.title}</b>
        <div class="hud-sub" style="color:${e.late?`#fde68a`:e.done?`#86efac`:`#cbd5e1`}">${e.status}</div>
      </div>
    `).join(``),a=Vu.filter(e=>Bu[e].type===`main`&&this.g.qStatus(e)===`active`),o=a.length?a.map(e=>this.renderQuestCard(e)).join(``):`
        <div class="card-row" style="border-left:3px solid #38bdf8">
          <b>Chưa có nhiệm vụ cốt truyện tiếp theo</b>
          <div class="hud-sub" style="margin-top:4px">
            👉 <b>Bước làm tiếp:</b> Mở <b>"Việc hôm nay"</b> để hoàn thành 3 việc trong ngày hoặc tham gia các <b>Nhiệm vụ tự chọn</b> đang mở để tích lũy điểm cải tạo & chuẩn bị cho bước ngoặt mới.
          </div>
        </div>
      `,s=Vu.filter(e=>Bu[e].type===`side`&&this.g.qStatus(e)===`active`),c=s.length?s.map(e=>this.renderQuestCard(e)).join(``):`<div class="hud-sub">Không có hoạt động tự chọn đang tiến hành.</div>`,l=Vu.filter(e=>this.g.qStatus(e)===`locked`),u=l.length?l.map(t=>{let n=Bu[t],r=Gu[t],i=n.type===`side`&&r&&r.isUnlocked(e),a=r?r.condition:n.requirement,o=r?.milestone?` · Mốc cốt truyện: ${r.milestone}`:``;return`
        <div class="card-row" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
          <div style="flex:1;min-width:200px">
            <span class="tag ${n.type===`main`?`good`:``}">${n.type===`main`?`Chính`:`Phụ`}</span>
            <b>${n.title}</b>
            <div class="hud-sub" style="margin-top:3px">
              <b>Sẽ tự mở khi:</b> ${a}${o}
            </div>
          </div>
          ${i?`<button class="btn btn-sm btn-accent btn-journal-accept" data-accept-quest="${t}">Nhận</button>`:``}
        </div>
      `}).join(``):`<div class="hud-sub">Đã mở toàn bộ nhiệm vụ.</div>`,d=this.g.s.clues.length?this.g.s.clues.map(e=>`<div class="card-row" style="border-color:#38bdf8">🔍 <b>Manh mối:</b> ${e}</div>`).join(``):`<div class="hud-sub">Chưa có manh mối nào trong sổ tay điều tra.</div>`;this.showModal(`
      <h2>NHẬT KÝ & TIẾN TRÌNH NHIỆM VỤ</h2>
      <div class="journal-section">
        <h3>📌 Việc bắt buộc hôm nay</h3>
        ${i}
      </div>
      <div class="journal-section">
        <h3>📖 Nhiệm vụ cốt truyện đang theo</h3>
        ${o}
      </div>
      <div class="journal-section">
        <h3>⭐ Hoạt động & Nhiệm vụ tự chọn</h3>
        ${c}
      </div>
      <div class="journal-section">
        <h3>🔒 Nhiệm vụ sắp tới (Chưa đến giờ hoặc cần điều kiện)</h3>
        ${u}
      </div>
      <div class="journal-section">
        <h3>🔍 Sổ tay điều tra & Manh mối Kho số 7</h3>
        ${d}
      </div>
      <div style="text-align:right;margin-top:14px">
        <button class="btn btn-accent" data-close>Đóng</button>
      </div>
    `,e=>{e.querySelectorAll(`.btn-journal-accept`).forEach(e=>{e.onclick=t=>{t.stopPropagation(),this.sfx.click();let n=e.dataset.acceptQuest;n&&(this.g.startQuest(n),this.showJournal())}})})}renderQuestCard(e){let t=Bu[e],n=this.g.qBranch(e),r=t.objectives.filter(e=>!e.branch||e.branch===n).map(t=>`<div style="margin-left:8px">${this.g.qObj(e,t.id)?`✔`:`○`} ${t.text}</div>`).join(``);return`
      <div class="card-row">
        <div><span class="tag ${t.type===`main`?`good`:``}">${t.type===`main`?`Chính`:`Phụ`}</span><b>${t.title}</b> — Người giao: ${t.giver}</div>
        <div class="hud-sub">${t.reason}</div>
        <div style="margin-top:4px">${r}</div>
        <div class="hud-sub" style="margin-top:4px">Phần thưởng: ${t.reward}</div>
      </div>
    `}showRecord(){let e=this.g.s,t=nd(e),n=Qu(e,t.nextReview),r=n.breakdown.map(e=>`
      <div style="display:flex;justify-content:space-between;padding:3px 0;font-size:12.5px">
        <span>${e.label}</span>
        <b style="color:${e.value>0?`#86efac`:e.value<0?`#f87171`:`#cbd5e1`}">${e.value>0?`+`:``}${e.value}</b>
      </div>
    `).join(``),i=e.violations.map(e=>`
      <div class="card-row" style="border-color:${e.severity>=3?`#ef4444`:`#64748b`}">
        <div style="display:flex;justify-content:space-between">
          <b>${e.title}</b>
          <span class="tag ${e.status===`overturned`?`good`:e.status===`upheld`?`bad`:``}">${e.status===`overturned`?`Đã hủy`:e.status===`upheld`?`Y án`:`Hiệu lực`}</span>
        </div>
        <div class="hud-sub">Ngày ${e.day} · Chứng cứ: ${e.evidence}</div>
        <div class="hud-sub" style="color:#f87171">Hình phạt: ${e.penalty} (${e.reformDelta} cải tạo)</div>
      </div>
    `).join(``)||`<div class="hud-sub">Không có tiền án hay vi phạm kỷ luật. Hồ sơ trong sạch!</div>`;this.showModal(`
      <h2>HỒ SƠ CHẤP HÀNH ÁN & GIẢM ÁN</h2>
      <div class="hud-sub" style="margin-bottom:12px">Quy chế xét giảm án 4 ngày một lần (Án ban đầu: 24 ngày)</div>

      <div class="card-row">
        <div style="display:flex;justify-content:space-between;margin-bottom:4px">
          <span>Thời hạn bản án: <b>24 ngày</b></span>
          <span>Đã chấp hành: <b>${e.sentence.served} ngày</b></span>
        </div>
        <div style="font-size:15px;margin:6px 0">Án còn lại: <b style="color:#fde68a;font-size:17px">${e.sentence.remaining} ngày</b></div>
        <div>Kỳ xét tiếp theo: <b>Ngày ${t.nextReview}</b> (Dự kiến xét giảm: <b style="color:#86efac">−${n.reduction} ngày</b>)</div>
        <div class="hud-sub">Dự kiến ngày ra tù: <b>Ngày ${t.releaseEstimated}</b> (Nếu không giảm thêm: Ngày ${t.releaseNoReduction})</div>
      </div>

      <h3>Phân tích kỳ xét giảm án (Ngày ${t.nextReview})</h3>
      <div class="card-row">
        ${r}
        <div style="border-top:1px solid rgba(255,255,255,0.1);padding-top:6px;margin-top:6px;display:flex;justify-content:space-between">
          <b>Tổng điểm tích lũy: ${n.score}</b>
          <b style="color:#fde68a">Mức giảm dự kiến: −${n.reduction} ngày</b>
        </div>
      </div>

      <h3>Hồ sơ vi phạm kỷ luật</h3>
      ${i}

      <div style="text-align:right;margin-top:14px">
        <button class="btn btn-accent" data-close>Đóng</button>
      </div>
    `)}showAppealModal(){let e=this.g.s,t=e.violations.filter(e=>!e.appealed&&e.severity>0);if(t.length===0){this.toast(`Không có biên bản vi phạm nào cần giải trình.`,`info`);return}let n=t.map(t=>{let n=!1,r=`Cần bằng chứng để giải trình.`;return t.appealTag===`planted`&&e.flags.bay_saw_planting?(n=!0,r=`Chú Bảy có thể làm chứng bạn bị gài bẫy.`):t.type===`late_rollcall`&&e.flags.an_excuse_slip&&(n=!0,r=`Có giấy xác nhận điều trị của Y sĩ An.`),`
        <div class="card-row">
          <b>${t.title} (Ngày ${t.day})</b>
          <div class="hud-sub">${t.evidence}</div>
          <div class="hud-sub" style="color:${n?`#86efac`:`#f87171`}">${r}</div>
          ${n?`<button class="btn btn-sm btn-accent" data-appeal="${t.id}" style="margin-top:6px">Trình bằng chứng khiếu nại</button>`:``}
        </div>
      `}).join(``);this.showModal(`
      <h2>KHIẾU NẠI & GIẢI TRÌNH VI PHẠM</h2>
      <div class="hud-sub" style="margin-bottom:10px">Nộp chứng cứ minh oan để Quản giáo hủy bỏ biên bản kỷ luật</div>
      ${n}
      <button class="btn" data-close style="margin-top:10px">Đóng</button>
    `,t=>{t.querySelectorAll(`[data-appeal]`).forEach(t=>{t.addEventListener(`click`,()=>{let n=t.dataset.appeal,r=e.violations.find(e=>e.id===n);r&&(r.appealed=!0,r.status=`overturned`,e.stats.reform=Math.min(100,e.stats.reform-r.reformDelta),this.toast(`Đã hủy biên bản: ${r.title}. Điểm cải tạo được phục hồi.`,`good`),this.closeModal())})})})}showRelations(){let e=this.g.s,t=Object.keys(e.relations).map(t=>{let n=e.relations[t],r=md[t]??t,i=n.value,a=i>20?`#86efac`:i<-10?`#f87171`:`#cbd5e1`,o=n.memories.slice(-2).map(e=>`<div class="hud-sub">• Ngày ${e.day}: ${e.text}</div>`).join(``);return`
        <div class="card-row">
          <div style="display:flex;justify-content:space-between;align-items:center">
            <b>${r}</b>
            <b style="color:${a}">${i>=0?`+`:``}${i}</b>
          </div>
          <div class="hud-sub">${i>30?`Tin tưởng, sẵn sàng giúp đỡ`:i>0?`Thân thiện`:i<-20?`Thù hằn, đề phòng`:`Bình thường`}</div>
          ${o}
        </div>
      `}).join(``);this.showModal(`
      <h2>QUAN HỆ BẠN TÙ & CÁN BỘ</h2>
      <div class="hud-sub" style="margin-bottom:10px">Lòng tin được xây dựng qua hành động, lời hứa và sự sẻ chia</div>
      ${t}
      <div style="text-align:right;margin-top:12px">
        <button class="btn btn-accent" data-close>Đóng</button>
      </div>
    `)}showBag(){let e=this.g.s.inventory,t=Object.keys(e).filter(t=>(e[t]??0)>0).map(t=>{let n=dd[t];return`
        <div class="card-row" style="display:flex;justify-content:space-between;align-items:center">
          <div>
            <b>${n?n.name:t}</b> <span class="tag">x${e[t]}</span>
            <div class="hud-sub">${n?n.desc:``}</div>
          </div>
          ${n&&n.use?`<button class="btn btn-sm btn-accent" data-use="${t}">Dùng</button>`:``}
        </div>
      `}).join(``);this.showModal(`
      <h2>TÚI ĐỒ CÁ NHÂN</h2>
      <div class="hud-sub" style="margin-bottom:10px">Đồ dùng tư trang và vật phẩm thu thập được</div>
      ${t||`<div class="hud-sub">Túi đồ trống.</div>`}
      <div style="text-align:right;margin-top:12px">
        <button class="btn btn-accent" data-close>Đóng</button>
      </div>
    `,e=>{e.querySelectorAll(`[data-use]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.use,n=this.g.useItem(t);n?this.toast(n,`warn`):(this.toast(`Đã sử dụng ${dd[t]?.name??t}.`,`good`),this.closeModal())})})})}showMap(){let e=this.hooks.playerPos(),t=Du(e.x,e.z),n=Object.keys(bu).map(e=>{let t=bu[e],n=this.g.isOpen(e);return`
        <div class="card-row">
          <div style="display:flex;justify-content:space-between">
            <b>${t.name}</b>
            <span class="tag ${n?`good`:`bad`}">${n?`Đang mở cửa`:`Đang khóa`}</span>
          </div>
          <div class="hud-sub">${du[e]?.reason??``}</div>
        </div>
      `}).join(``);this.showModal(`
      <h2>BẢN ĐỒ TRẠI GIAM AN PHÚ</h2>
      <div class="card-row" style="border-color:#38bdf8">Vị trí hiện tại của bạn: <b style="color:#fde68a">${t}</b></div>
      <h3>Quy tắc tiếp cận & Giờ mở cửa các khu vực</h3>
      ${n}
      <div style="text-align:right;margin-top:12px">
        <button class="btn btn-accent" data-close>Đóng</button>
      </div>
    `)}showWait(){let e=this.g.previewWait();if(!e){this.toast(`Đã là cuối ngày, hãy về buồng giam nghỉ ngơi.`,`info`);return}let t=e.warnings.map(e=>`<div style="color:#f87171">• ${e}</div>`).join(``);this.showModal(`
      <h2>CHỜ GIỜ / NGHỈ NGƠI</h2>
      <div class="card-row">
        <div>Mốc thời gian tiếp theo: <b>${e.label}</b></div>
        ${e.warnings.length?`<div style="margin-top:8px"><b>Cảnh báo hoạt động sẽ bỏ lỡ:</b>${t}</div>`:``}
      </div>
      <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:12px">
        <button class="btn btn-accent" id="btn-do-wait">Xác nhận chờ đến giờ</button>
        <button class="btn" data-close>Hủy</button>
      </div>
    `,t=>{t.querySelector(`#btn-do-wait`)?.addEventListener(`click`,()=>{this.closeModal(),this.hooks.onWait(e.target)})})}showPause(){let e=this.g.s.settings;this.showModal(`<h2>CÀI ĐẶT TRÒ CHƠI</h2>
       <div class="card-row">
         <label>Chất lượng đồ họa:
           <select id="sel-q">
             <option value="low" ${e.quality===`low`?`selected`:``}>Thấp (tiết kiệm pin)</option>
             <option value="medium" ${e.quality===`medium`?`selected`:``}>Vừa (cân bằng)</option>
             <option value="high" ${e.quality===`high`?`selected`:``}>Cao</option>
           </select>
         </label>
       </div>
       <div class="card-row">
         <label>Góc nhìn camera:
           <select id="sel-camera-mode">
             <option value="third" ${(e.cameraMode??`third`)===`third`?`selected`:``}>Góc nhìn thứ ba (Mặc định)</option>
             <option value="first" ${(e.cameraMode??`third`)===`first`?`selected`:``}>Góc nhìn thứ nhất (FPS)</option>
           </select>
         </label>
       </div>
       <div class="card-row">
         <label>Âm lượng: <input type="range" id="rng-vol" min="0" max="1" step="0.05" value="${e.volume}"/></label>
       </div>
       ${this.hooks.onRestoreBackup?`
       <div class="card-row">
         <div style="display:flex;justify-content:space-between;align-items:center">
           <span>Dữ liệu sao lưu phiên bản cũ (v1):</span>
           <button class="btn btn-sm" id="btn-restore-backup">Khôi phục bản lưu v1</button>
         </div>
       </div>`:``}
       <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:14px">
         <button class="btn btn-accent" data-close>Tiếp tục chơi</button>
         <button class="btn btn-danger" id="btn-reset">Bắt đầu lượt chơi mới</button>
       </div>`,e=>{e.querySelector(`#sel-q`)?.addEventListener(`change`,e=>{this.g.s.settings.quality=e.target.value,this.hooks.onSettingChange(),this.g.commit()}),e.querySelector(`#sel-camera-mode`)?.addEventListener(`change`,e=>{this.g.s.settings.cameraMode=e.target.value,this.hooks.onSettingChange(),this.g.commit()}),e.querySelector(`#rng-vol`)?.addEventListener(`input`,e=>{this.g.s.settings.volume=Number(e.target.value),this.hooks.onSettingChange(),this.g.commit()}),e.querySelector(`#btn-restore-backup`)?.addEventListener(`click`,()=>{this.closeModal(),this.hooks.onRestoreBackup?.()}),e.querySelector(`#btn-reset`)?.addEventListener(`click`,()=>{this.showModal(`<h2>Xác nhận bắt đầu lại?</h2>
             <div class="card-row">Toàn bộ tiến trình hiện tại sẽ bị xóa và bắt đầu lại từ Tạo nhân vật Ngày 1.</div>
             <button class="btn btn-danger" id="btn-confirm-reset">Xác nhận chơi mới</button>
             <button class="btn" data-close>Hủy</button>`,e=>{e.querySelector(`#btn-confirm-reset`)?.addEventListener(`click`,()=>{this.closeModal(),this.hooks.onReset()})})})})}showEnding(e){let t=this.g.s.profile.name||`Minh`,n={tro_ve_vung_vang:{title:`KẾT THÚC 1 — TỰ DO CÓ CHUẨN BỊ (VỮNG VÀNG)`,body:`Cánh cổng sắt Trại giam An Phú mở rộng đón ánh ban mai rực rỡ. Chị Mai và người thân đứng chờ sẵn bên hàng phượng râm mát. Nhờ kiên định giữ vững lương tri, học được nghề nghiệp từ Thầy Phúc, giữ trọn lời hứa với Chú Bảy và minh oan thành công vụ án Kho số 7, ${t} ngẩng cao đầu bước về phía tương lai tươi sáng với bản lĩnh vững vàng.`},tu_te:{title:`KẾT THÚC 1 — TỰ DO CÓ CHUẨN BỊ (VỮNG VÀNG)`,body:`Cánh cổng sắt Trại giam An Phú mở rộng đón ánh ban mai rực rỡ. Chị Mai và người thân đứng chờ sẵn bên hàng phượng râm mát. Nhờ kiên định giữ vững lương tri, học được nghề nghiệp từ Thầy Phúc, giữ trọn lời hứa với Chú Bảy và minh oan thành công vụ án Kho số 7, ${t} ngẩng cao đầu bước về phía tương lai tươi sáng với bản lĩnh vững vàng.`},tro_ve_con_no:{title:`KẾT THÚC 2 — CÁI GIÁ CỦA ĐƯỜNG TẮT (CÒN RÀNG BUỘC)`,body:`Bản án khép lại, ${t} bước ra khỏi cổng trại với vài đồng tiền kiếm nhanh trong túi, nhưng ở góc đường đã có người của Lâm đứng đợi để nhắc nhở về "món nợ ân tình hôm trước". Tự do trên danh nghĩa đã đến, nhưng cái bóng của những thỏa hiệp sai lầm vẫn còn đeo bám phía trước.`},rang_buoc:{title:`KẾT THÚC 2 — CÁI GIÁ CỦA ĐƯỜNG TẮT (CÒN RÀNG BUỘC)`,body:`Bản án khép lại, ${t} bước ra khỏi cổng trại với vài đồng tiền kiếm nhanh trong túi, nhưng ở góc đường đã có người của Lâm đứng đợi để nhắc nhở về "món nợ ân tình hôm trước". Tự do trên danh nghĩa đã đến, nhưng cái bóng của những thỏa hiệp sai lầm vẫn còn đeo bám phía trước.`},man_an_im_lang:{title:`KẾT THÚC 3 — MÃN HẠN TRONG LẶNG LẼ`,body:`${t} chấp hành đủ 24 ngày án phạt và bước ra khỏi cổng trại An Phú. Không dính vào rắc rối lớn, nhưng cũng bỏ lỡ cơ hội làm sáng tỏ vụ án Kho số 7 và chưa kịp tích lũy tay nghề vững vàng. Phía trước vẫn là cuộc đời tự do, đòi hỏi nhiều nỗ lực để làm lại từ đầu.`},lang_le:{title:`KẾT THÚC 3 — MÃN HẠN TRONG LẶNG LẼ`,body:`${t} chấp hành đủ 24 ngày án phạt và bước ra khỏi cổng trại An Phú. Không dính vào rắc rối lớn, nhưng cũng bỏ lỡ cơ hội làm sáng tỏ vụ án Kho số 7 và chưa kịp tích lũy tay nghề vững vàng. Phía trước vẫn là cuộc đời tự do, đòi hỏi nhiều nỗ lực để làm lại từ đầu.`}},r=n[e]??n.man_an_im_lang;this.showModal(`
      <h2>${r.title}</h2>
      <div class="card-row" style="font-size:14.5px;line-height:1.6">${r.body}</div>
      <div class="card-row">
        <div>Tổng số ngày chấp hành: <b>${this.g.s.sentence.served} ngày</b> · Điểm cải tạo cuối: <b>${Math.round(this.g.s.stats.reform)}</b></div>
        <div>Cấp độ đạt được: <b>Cấp ${this.g.s.progression.level}</b> · Xuất thân: <b>${iu[this.g.s.profile.background]?.name}</b></div>
      </div>
      <button class="btn btn-accent" id="btn-replay">Chơi lại từ đầu</button>
    `,e=>{e.querySelector(`#btn-replay`)?.addEventListener(`click`,()=>{this.closeModal(),this.hooks.onReset()})})}showNotice(e,t){this.showModal(`
      <h2>${e}</h2>
      <div class="card-row" style="white-space: pre-wrap; line-height: 1.6; margin: 12px 0;">
        ${t}
      </div>
      <button class="btn btn-accent" id="btn-notice-close" style="width:100%; margin-top:8px">Đã hiểu</button>
    `,e=>{e.querySelector(`#btn-notice-close`)?.addEventListener(`click`,()=>this.closeModal())})}showDaySummary(e){this.sfx.good();let t=e.relationChanges.map(e=>`
      <div>${e.npc}: <b style="color:${e.delta>0?`#86efac`:`#f87171`}">${e.delta>0?`+`:``}${e.delta}</b></div>
    `).join(``)||`<div class="hud-sub">Không có thay đổi lớn về quan hệ hôm nay.</div>`;this.showModal(`
      <h2>TỔNG KẾT NGÀY ${e.day}</h2>
      <div class="card-row">
        <div>Điểm danh: <b>${e.rollcall===`ok`?`Đúng giờ`:e.rollcall}</b></div>
        <div>Lao động: <b>${e.work===`ok`?`Đủ chỉ tiêu (${e.workUnits}/3)`:e.work}</b></div>
        <div>Điểm cải tạo thay đổi: <b style="color:${e.reformDelta>=0?`#86efac`:`#f87171`}">${e.reformDelta>=0?`+`:``}${e.reformDelta}</b></div>
        <div>Tiền công & biến động: <b style="color:#fde68a">${uu(e.moneyDelta)}</b></div>
      </div>
      ${e.review?`
        <div class="card-row" style="border-color:#f59e0b; background: rgba(245, 158, 11, 0.08); padding: 12px">
          <div style="font-weight:700; color:#fde68a; font-size:15px; margin-bottom:8px">
            📋 HỘI ĐỒNG XÉT DUYỆT GIẢM ÁN ĐỢT ${Math.ceil(e.day/4)} (NGÀY ${e.day})
          </div>
          <table style="width:100%; font-size:13px; border-collapse:collapse; margin-bottom:8px">
            <tbody>
              ${e.review.breakdown.map(e=>`
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.08)">
                  <td style="padding: 4px 0">${e.label}</td>
                  <td style="text-align:right; font-weight:700; color:${e.value>0?`#86efac`:e.value<0?`#f87171`:`#94a3b8`}">
                    ${e.value>0?`+`:``}${e.value}
                  </td>
                </tr>
              `).join(``)}
              <tr style="border-top: 1px solid rgba(245,158,11,0.4); font-weight:700">
                <td style="padding: 6px 0; color:#fde68a">Tổng điểm đánh giá</td>
                <td style="text-align:right; color:#fde68a; font-size:14px">${e.review.score.toFixed(1)} / 2.0</td>
              </tr>
            </tbody>
          </table>
          <div style="font-size:13px; text-align:center; padding: 6px; background: rgba(0,0,0,0.3); border-radius:6px; font-weight:700; color: ${e.review.reduction>0?`#86efac`:`#fca5a5`}">
            ${e.review.reduction>0?`⭐ KẾT QUẢ: ĐẠT TIÊU CHUẨN XÉT GIẢM −${e.review.reduction} NGÀY ÁN PHẠT!`:`⚠️ KẾT QUẢ: Chưa đủ điều kiện xét giảm kỳ này (cần cải tạo & nhiệm vụ tích cực hơn)`}
          </div>
        </div>
      `:``}
      <div class="card-row">
        <div>Án phạt còn lại: <b style="color:#fde68a;font-size:16px">${e.remainingAfter} ngày</b></div>
      </div>
      <h3>Quan hệ bạn tù</h3>
      <div class="card-row">${t}</div>
      <button class="btn btn-accent" id="btn-next-day" style="margin-top:10px">Bắt đầu ngày mới</button>
    `,e=>{e.querySelector(`#btn-next-day`)?.addEventListener(`click`,()=>{this.closeModal(),this.g.s.ending&&this.showEnding(this.g.s.ending)})})}showWorkbenchMinigame(){let e=this.g.canWorkReason();if(e){this.toast(e,`warn`);return}let t=(this.g.s.progression.attrs.agility-1)*.04,n=au[this.g.s.profile.difficulty]||au.normal,r=0,i=0,a=1,o=0,s=[],c=()=>cancelAnimationFrame(o);this.activeMinigameCancel=c,this.showModal(`
      <h2>BÀN LẮP RÁP Ổ CẮM XƯỞNG</h2>
      <div class="hud-sub">Nhấn [BẤM CHÍNH XÁC] khi con trỏ nằm trong vùng màu xanh</div>
      <div class="card-row" style="margin:12px 0">
        <div id="wg-step-name" style="font-weight:700;margin-bottom:8px">Bước 1</div>
        <div class="mg-track" style="position:relative;height:24px;background:#1e293b;border-radius:12px;overflow:hidden">
          <div id="wg-zone" style="position:absolute;top:0;bottom:0;background:rgba(34,197,94,0.4);border-left:2px solid #22c55e;border-right:2px solid #22c55e"></div>
          <div id="wg-cursor" style="position:absolute;top:0;bottom:0;width:4px;background:#fde68a"></div>
        </div>
      </div>
      <div style="display:flex;gap:8px;justify-content:center">
        <button class="btn btn-accent" id="wg-hit" style="padding:10px 24px;font-size:16px">BẤM CHÍNH XÁC</button>
      </div>
    `,e=>{let c=e.querySelector(`#wg-step-name`),l=e.querySelector(`#wg-zone`),u=e.querySelector(`#wg-cursor`),d=()=>{let e=gm[r];c.textContent=e.name;let i=Math.max(.1,e.zone[0]-t*n.hitZoneMultiplier),a=Math.min(.9,e.zone[1]+t*n.hitZoneMultiplier);l.style.left=`${i*100}%`,l.style.width=`${(a-i)*100}%`},f=()=>{i+=a*.02*(1/n.hitZoneMultiplier),i>=1&&(i=1,a=-1),i<=0&&(i=0,a=1),u.style.left=`${i*100}%`,o=requestAnimationFrame(f)};d(),o=requestAnimationFrame(f),e.querySelector(`#wg-hit`)?.addEventListener(`click`,()=>{let e=gm[r],a=Math.max(.1,e.zone[0]-t*n.hitZoneMultiplier),c=Math.min(.9,e.zone[1]+t*n.hitZoneMultiplier),l=(a+c)/2,u=Math.abs(i-l),f=(c-a)/2,p=Math.max(20,Math.round(100-u/f*60));if(s.push(p),r++,r>=gm.length){cancelAnimationFrame(o),this.activeMinigameCancel=null,this.closeModal();let e=Math.round(s.reduce((e,t)=>e+t,0)/s.length);this.g.finishWorkUnit(e,!0)}else d()})})}showExerciseMinigame(){let e=this.g.exerciseReason();if(e){this.toast(e,`warn`);return}let t=0;this.showModal(`
      <h2>Tập thể lực ngoài sân</h2>
      <div class="hud-sub">Thực hiện đủ 3 hiệp mới hoàn thành một buổi tập.</div>
      <div class="card-row" id="exercise-progress">Hiệp 0/3</div>
      <button class="btn btn-accent" id="exercise-rep">Thực hiện hiệp tiếp theo</button>
      <button class="btn" data-close>Thoát</button>
    `,e=>{e.querySelector(`#exercise-rep`)?.addEventListener(`click`,()=>{t++;let n=e.querySelector(`#exercise-progress`);n&&(n.textContent=`Hiệp ${t}/3`),t>=3&&(this.g.exercise(1),this.g.completeObjective(`ren_luyen_the_chat`,`tap_the_duc`),this.closeModal())})})}showVocationalMinigame(e){if(this.g.qObj(`lop_nghe_dau`,`thao_tac`)){this.toast(`Đã thực hành xong. Hãy gặp Thầy Phúc để nghe nhận xét.`,`info`);return}let t=this.g.objectiveBlockReason(`lop_nghe_dau`,`thao_tac`);if(t){this.toast(t,`warn`);return}let n=[{id:1,name:`Dây Đỏ (Pha L1)`,color:`#ef4444`},{id:2,name:`Dây Vàng (Pha L2)`,color:`#facc15`},{id:3,name:`Dây Xanh lam (Trung tính)`,color:`#38bdf8`},{id:4,name:`Dây Xanh lá (Tiếp địa PE)`,color:`#22c55e`}],r=[1,3,2,4],i=[];this.showModal(`<h2>Lớp học nghề — Bài kiểm tra an toàn điện</h2>
       <div class="hud-sub">Quy tắc an toàn của Thầy Phúc: Nối đúng thứ tự theo sơ đồ chuẩn: <b>1. Dây Đỏ → 2. Dây Xanh lam → 3. Dây Vàng → 4. Dây Xanh lá (Tiếp địa)</b>.</div>
       <div class="card-row" style="margin-top:10px;text-align:center">
         <div id="voc-display" style="font-weight:700;font-size:16px;color:#fde68a;min-height:30px;margin-bottom:10px">
           Tiến độ nối: 0 / 4 dây
         </div>
         <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;max-width:400px;margin:0 auto">
           ${n.map(e=>`
             <button class="btn" style="background:${e.color};color:#0f172a;font-weight:700;padding:12px;font-size:14px" data-voc-btn="${e.id}">
               ${e.name}
             </button>
           `).join(``)}
         </div>
         <div style="margin-top:14px">
           <button class="btn" id="voc-reset">Nối lại từ đầu</button>
           <button class="btn" data-close>Thoát</button>
         </div>
       </div>`,t=>{let a=t.querySelector(`#voc-display`);t.querySelectorAll(`[data-voc-btn]`).forEach(t=>{t.addEventListener(`click`,()=>{let o=Number(t.dataset.vocBtn);i.push(o),this.sfx.click();let s=i.length;a.textContent=`Đã nối ${s}/4: ${i.map(e=>n.find(t=>t.id===e)?.name).join(` → `)}`,s===r.length&&(i.every((e,t)=>e===r[t])?(this.sfx.good(),this.g.completeObjective(`lop_nghe_dau`,`thao_tac`)&&this.g.addReform(3,`Thực hành nối mạch điện an toàn`),this.showModal(`
                  <h2>Hoàn thành bài tập học nghề</h2>
                  <div class="card-row" style="color:#4ade80">
                    ✔ Chính xác tuyệt đối! Trình tự đóng cắt và tiếp địa chuẩn quy chuẩn an toàn điện. Thầy Phúc đã ghi nhận bài thực hành của bạn.
                  </div>
                  <button class="btn btn-accent" data-close>Gặp Thầy Phúc nhận xét</button>
                `,()=>e?.())):(this.sfx.bad(),a.textContent=`❌ Sai trình tự an toàn! Hãy bấm "Nối lại từ đầu" để làm lại.`,i.length=0))})}),t.querySelector(`#voc-reset`)?.addEventListener(`click`,()=>{i.length=0,a.textContent=`Tiến độ nối: 0 / 4 dây`})})}showCanteen(e){let t=this.g.hasPerk(`canteen_discount`),n=this.g.canteenOpen()?this.g.canteenBanned()?`Bạn đang bị cấm mua căn tin đến hết ngày ${this.g.s.flags.canteenBanUntil}.`:e??`Căn tin đang mở. Chọn món để mua, sau đó dùng trong Túi đồ.`:`Căn tin đang đóng cửa. Mở cửa 16:30–21:00.`,r=Object.keys(dd).filter(e=>dd[e].price).map(e=>{let n=dd[e],r=this.g.itemPrice(e),i=this.g.purchaseError(e),a=t?`<span class="tag good" style="font-size:10px;margin-left:4px">−10%</span>`:``;return`
        <div class="card-row" style="display:flex;justify-content:space-between;align-items:center">
          <div><b>${n.name}</b> — ${uu(r)}${a}<div class="hud-sub">${n.desc}</div></div>
          <div style="text-align:right">
            <button class="btn btn-accent" data-buy="${e}" ${i?`disabled`:``}>Mua</button>
            ${i?`<div class="hud-sub" style="max-width:150px">${i}</div>`:``}
          </div>
        </div>`}).join(``);this.showModal(`<h2>Quầy căn tin (Tiền hiện có: ${uu(this.g.s.stats.money)})</h2>
       <div class="hud-sub" style="margin-bottom:8px">Mở cửa 16:30–21:00. Nhu yếu phẩm & đồ ăn bổ sung thể lực.${t?` <b style="color:#4ade80">(Đang hưởng đặc quyền giảm giá 10%)</b>`:``}</div>
       <div class="card-row" id="canteen-status" role="status">${n}</div>
       ${r}
       <button class="btn" data-close>Đóng</button>`,e=>{e.querySelectorAll(`[data-buy]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.buy,n=this.g.buy(t);n||this.sfx.good(),this.showCanteen(n??`Đã mua ${dd[t].name}. Vật phẩm đã vào Túi đồ.`)})})})}showMedicineSortingMinigame(){let e=this.g.objectiveBlockReason(`phu_y_te`,`hoan_thanh`);e?this.toast(e,`warn`):this.showModal(`
      <h2>Tủ thuốc y tế — Phân loại thuốc men</h2>
      <div class="card-row">
        Bạn dành 30 phút cùng Y sĩ An lau dọn tủ kính, phân loại các vỉ thuốc hạ sốt, kháng sinh và đóng gói băng gạc sạch sẽ.
      </div>
      <div class="card-row" style="color:#4ade80">
        ✔ Hoàn thành tốt việc được giao. Y sĩ An rất hài lòng.
      </div>
      <button class="btn btn-accent" id="med-done-btn">Nhận thưởng & Đóng</button>
    `,e=>{e.querySelector(`#med-done-btn`)?.addEventListener(`click`,()=>{this.g.completeObjective(`phu_y_te`,`hoan_thanh`),this.closeModal()})})}showLibraryReader(){let e=this.g.hasPerk(`library_borrow`),t=this.g.qStatus(`sach_thu_vien`)===`active`&&!this.g.qObj(`sach_thu_vien`,`muon_sach`);this.showModal(`
      <h2>Thư viện trại giam An Phú</h2>
      <div class="card-row">
        Giá sách gồm nhiều đầu sách cẩm nang phổ biến giáo dục pháp luật, sổ tay nghề cơ điện và tác phẩm văn học phục vụ cải tạo.
        ${e?`<div class="tag good" style="margin-top:6px;display:inline-block">✔ Đã có chứng chỉ nghề — Quyền mượn sách khả dụng</div>`:`<div class="tag warn" style="margin-top:6px;display:inline-block">🔒 Chưa có quyền mượn sách (Cần chứng chỉ từ "Bài học nghề đầu tiên")</div>`}
      </div>
      <div class="choice-list">
        ${e?t?`<button class="choice-btn important" id="lib-borrow-law">Bước 1: Mượn cẩm nang pháp luật từ giá sách</button>`:`<button class="choice-btn" id="lib-borrow-extra">Mượn sách đọc thêm (−5 căng thẳng, +1 điểm cải tạo)</button>`:`<button class="choice-btn" id="lib-borrow-blocked"><span class="tag bad" style="margin-right:6px">Khóa</span> Mượn sách thư viện (Cần chứng chỉ nghề "Bài học nghề đầu tiên")</button>`}
        ${e?`<button class="choice-btn" id="lib-read-law">Đọc Cẩm nang pháp luật & quyền giảm án (−10 căng thẳng, +1 điểm cải tạo)</button>`:`<button class="choice-btn" id="lib-read-law-blocked" disabled><span class="tag bad" style="margin-right:6px">Khóa</span> Đọc cẩm nang tại chỗ (Cần chứng chỉ nghề)</button>`}
        <button class="choice-btn" id="lib-read-tech">Đọc Sách hướng dẫn kỹ thuật điện dân dụng (−5 căng thẳng)</button>
        <button class="choice-btn" data-close>Rời giá sách</button>
      </div>
    `,e=>{e.querySelector(`#lib-borrow-blocked`)?.addEventListener(`click`,()=>{this.toast(`Cần hoàn thành "Bài học nghề đầu tiên" để nhận chứng chỉ trước khi được mượn sách thư viện.`,`warn`)}),e.querySelector(`#lib-borrow-extra`)?.addEventListener(`click`,()=>{this.g.addStat(`stress`,-5),this.g.addReform(1,`Mượn sách thư viện`,!0),this.toast(`Đã mượn sách đọc thêm (−5 căng thẳng, +1 điểm cải tạo).`,`good`)}),e.querySelector(`#lib-borrow-law`)?.addEventListener(`click`,()=>{this.g.hasPerk(`library_borrow`)?(this.g.addStat(`stress`,-5),this.g.addReform(1,`Mượn sách thư viện`,!0),this.g.completeObjective(`sach_thu_vien`,`muon_sach`),this.toast(`Đã mượn sách (−5 căng thẳng, +1 điểm cải tạo). Bước tiếp theo: đọc cẩm nang pháp luật.`,`good`),this.showLibraryReader()):this.toast(`Cần hoàn thành "Bài học nghề đầu tiên" để nhận chứng chỉ nghề.`,`warn`)}),e.querySelector(`#lib-read-law`)?.addEventListener(`click`,()=>{this.g.s.flags.read_book_today=!0,this.g.addStat(`stress`,-10),this.g.addReform(1,`Đọc sách pháp luật`),this.g.completeObjective(`sach_thu_vien`,`doc_xong`),this.g.checkDailyTasks({category:`personal`,taskId:`personal_reading`}),this.sfx.good(),this.showModal(`
          <h2>Đã đọc xong Cẩm nang pháp luật</h2>
          <div class="card-row">
            Bạn nắm rõ các điều kiện được giảm án: không vi phạm kỷ luật, tích cực lao động và có điểm cải tạo đạt từ 85 trở lên.
          </div>
          <button class="btn btn-accent" data-close>Đã hiểu</button>
        `)}),e.querySelector(`#lib-read-tech`)?.addEventListener(`click`,()=>{this.g.s.flags.read_book_today=!0,this.g.addStat(`stress`,-5),this.g.checkDailyTasks({category:`personal`,taskId:`personal_reading`}),this.sfx.good(),this.showModal(`
          <h2>Đã đọc Sách kỹ thuật điện dân dụng</h2>
          <div class="card-row">Sách giúp bạn hiểu rõ nguyên lý mạch điện và thao tác an toàn trong xưởng.</div>
          <button class="btn btn-accent" data-close>Đóng</button>
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
       </div>`,e=>{e.querySelectorAll(`[data-h]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.h,n=this.g.resolveHearing(t);this.showModal(`<h2>Quyết định của Hội đồng</h2><div class="card-row">${n.text}</div><button class="btn" data-close>Đóng</button>`)})})})}};function ym(e){let t=[`g`,`f`,`d`,`e`];return t[Number.isFinite(e)?Math.abs(Math.trunc(e))%t.length:0]}var bm={workshop:{doorId:`door_workshop`,name:`Xưởng lao động`,safeNode:[10.5,-2.75],insideBox:{x1:12,z1:-12,x2:28,z2:8}},mess:{doorId:`door_mess`,name:`Nhà ăn`,safeNode:[6.25,-16.5],insideBox:{x1:-2,z1:-32,x2:16,z2:-18}},medical:{doorId:`door_medical`,name:`Phòng y tế`,safeNode:[22.25,-16.5],insideBox:{x1:18,z1:-32,x2:28,z2:-18}},classroom:{doorId:`door_classroom`,name:`Lớp học nghề`,safeNode:[-20.75,8.5],insideBox:{x1:-28,z1:10,x2:-15,z2:20}},visitation:{doorId:`door_visitation`,name:`Phòng thăm gặp`,safeNode:[-18.5,-10.25],insideBox:{x1:-28,z1:-15,x2:-20,z2:-4}},discipline:{doorId:`door_discipline`,name:`Khu kỷ luật`,safeNode:[10,8.5],insideBox:{x1:6,z1:10,x2:14,z2:20}}};new class{constructor(){this.tpCam=new lm,this.input=new cm,this.sfx=new um,this.saves=new ld(typeof localStorage<`u`?localStorage:null),this.npcs={},this.resting=!1,this.tempUnlockedDoors=new Set,this.isEscorting=!1,this.escortTimer=0,this.escortTargetArea=null,this.lastWarningMinute=-1,this.autoWalking=!1,this.autoWalkTargetName=``,this.autoWalkWaypoints=[],this.autoWalkIndex=0,this.autoWalkIsLocked=!1,this.restrictedEpisode=0,this.wasInStorage=!1,this.currentPrompt=null}init(){let e=document.getElementById(`game-canvas`),t=document.getElementById(`ui`),n=this.saves.load();this.g=new hd(n??_u()),this.g.qStatus(`nhap_trai`)===`locked`&&this.g.startQuest(`nhap_trai`),this.checkStartupLockout(),this.renderer=new Ds({canvas:e,antialias:!0,powerPreference:`high-performance`}),this.renderer.outputColorSpace=ze,this.renderer.toneMapping=4,this.renderer.toneMappingExposure=1.17,this.renderer.shadowMap.type=2,this.world=new em,this.world.setQuality(this.g.s.settings.quality,this.renderer),this.sfx.volume=this.g.s.settings.volume,this.cutscene=new fm(this.tpCam.cam,this.sfx);let r=this.g.s.profile;this.playerRig=new im({uniform:`inmate`,skin:r.skin??14857357,hair:r.hair??1579035,hairStyle:r.hairStyle??`short`,accent:2278750,height:1,build:1},void 0,ym(r.preset)),this.world.scene.add(this.playerRig.root),this.updateCameraMode();for(let e of Object.keys(Ru)){let t=new sm(e);t.snapToSchedule(this.g.s.minute),this.npcs[e]=t,this.world.scene.add(t.rig.root)}this.world.collision.dynamic=()=>this.world.updateDoors(e=>this.isDoorPassable(e)),this.ui=new vm(t,this.g,this.sfx,{npcs:()=>this.npcs,playerPos:()=>this.g.s.player,onWait:e=>{this.g.advanceTo(e,this.tickCtx(!1,!1));for(let e of Object.keys(this.npcs))this.npcs[e].snapToSchedule(this.g.s.minute);this.saves.save(this.g.s)},onSleep:()=>this.sleepAndEndDay(!0),onReset:()=>{this.saves.clear(),this.g=new hd(_u()),this.g.startQuest(`nhap_trai`),window.location.reload()},onSettingChange:()=>{this.world.setQuality(this.g.s.settings.quality,this.renderer),this.sfx.volume=this.g.s.settings.volume,this.updateCameraMode()},onUpdateAppearance:e=>{this.g.s.profile.skin=e.skin,this.g.s.profile.hair=e.hair,this.g.s.profile.hairStyle=e.hairStyle,this.g.s.profile.preset=e.preset,this.rebuildPlayerRig(e),this.saves.save(this.g.s)},onRestoreBackup:()=>{let e=this.saves.loadBackup();e?(this.g=new hd(e),this.rebuildPlayerRig(this.g.s.profile),this.saves.save(this.g.s),this.ui.toast(`Đã phục hồi bản sao lưu thành công.`,`good`),window.location.reload()):this.ui.toast(`Không tìm thấy bản sao lưu hợp lệ.`,`warn`)},onAutoWalk:(e,t,n,r,i,a)=>{this.startAutoWalk(e,t,n,r,i,a)},onCancelAutoWalk:()=>{this.cancelAutoWalk(!0)}}),hm().then(e=>this.ui.updateReleaseInfo(e)),this.bindEvents(),this.input.bind(e,this.ui.joyZone,this.ui.joyKnob),this.input.onInteract=()=>{!this.ui.paused&&!this.cutscene.isActive()&&this.currentPrompt?.run()},this.input.onKeyCommand=e=>this.handleKey(e),this.ui.btnInteract.addEventListener(`click`,()=>{!this.ui.paused&&!this.cutscene.isActive()&&this.currentPrompt?.run()});let i=()=>{let t=Math.max(window.innerWidth,window.visualViewport?.width||0,document.documentElement.clientWidth||0),n=Math.max(window.innerHeight,window.visualViewport?.height||0,document.documentElement.clientHeight||0);if((typeof window.orientation==`number`&&Math.abs(window.orientation)===90||window.matchMedia?.(`(orientation: landscape)`)?.matches||window.innerWidth>window.innerHeight)&&t<n){let e=t;t=n,n=e}this.world.setQuality(this.g.s.settings.quality,this.renderer),this.renderer.setSize(t,n,!1),e.style.removeProperty(`width`),e.style.removeProperty(`height`),this.tpCam.cam.aspect=t/n,this.tpCam.cam.updateProjectionMatrix(),this.input.reset(),this.ui.checkOrientation()};window.addEventListener(`resize`,i),window.addEventListener(`orientationchange`,()=>{i(),setTimeout(i,120),setTimeout(i,280),setTimeout(i,500)}),window.visualViewport?.addEventListener(`resize`,i),i(),this.ui.paused=!0,tu({canContinue:!!n?.profile?.introSeen,name:this.g.s.profile.name,day:this.g.s.day,remainingDays:this.g.s.sentence.remaining,onStart:()=>{this.ui.showCharacterCreation(e=>{this.g.applyProfile(e),this.rebuildPlayerRig(e);let t=e.flashbackChoice||`keep_doc`;this.g.applyFlashbackChoice(t),this.g.s.profile.introSeen=!0,this.g.qStatus(`nhap_trai`)===`locked`&&this.g.startQuest(`nhap_trai`),this.saves.save(this.g.s),this.ui.paused=!1,this.ui.checkOrientation()})},onContinue:()=>{if(this.ui.paused=!1,this.ui.checkOrientation(),this.g.s.flags?.sentence_extended_for_reform){let e=this.g.s.flags.sentence_extended_for_reform;delete this.g.s.flags.sentence_extended_for_reform,this.saves.save(this.g.s),this.ui.showNotice(`🏛️ THÔNG BÁO TỪ GIÁM THỊ TRẠI GIAM`,`Thời hạn chấp hành án của bạn được điều chỉnh gia hạn (+${e} ngày) nhằm đảm bảo bạn có đủ thời gian hoàn thành đầy đủ chương trình giáo dục cải tạo, học nghề và nộp hồ sơ giải trình minh oan vai trò trong vụ án Kho số 7 trước ngày tự do.`)}},onReset:()=>{this.saves.clear(),this.g=new hd(_u()),this.g.startQuest(`nhap_trai`),this.saves.save(this.g.s),window.location.reload()}}),window.addEventListener(`beforeunload`,()=>this.saves.save(this.g.s)),this.saves.save(this.g.s),window.__DITU__={app:this,logic:this.g,saves:this.saves,teleport:(e,t)=>{this.g.s.player.x=e,this.g.s.player.z=t;for(let e of Object.keys(this.npcs))this.npcs[e].snapToSchedule(this.g.s.minute);this.currentPrompt=this.findPrompt(),this.ui.updateHUD(this.currentPrompt,this.computeGuide())}};let a=performance.now(),o=window.innerWidth,s=window.innerHeight,c=e=>{let t=Math.min(.05,(e-a)/1e3);a=e,(Math.abs(window.innerWidth-o)>1||Math.abs(window.innerHeight-s)>1)&&(o=window.innerWidth,s=window.innerHeight,i()),this.step(t),requestAnimationFrame(c)};requestAnimationFrame(c)}bindEvents(){this.g.on(`notice`,(e,t)=>this.ui.toast(e,t)),this.g.on(`save`,()=>this.saves.save(this.g.s)),this.g.on(`violation`,e=>this.ui.showViolationBanner(e)),this.g.on(`sideQuestUnlocked`,()=>this.ui.highlightQuestBar()),this.g.on(`block`,e=>{this.sfx.bell(),this.ui.toast(`🔔 ${lu(e.start)} — ${e.label} (${e.where})`,`info`)}),this.g.on(`hearing`,e=>this.ui.showHearing(e)),this.g.on(`faint`,()=>{this.g.s.player.x=-14.25,this.g.s.player.z=-27.6,this.g.advanceTo(Math.min(1260,this.g.s.minute+60),this.tickCtx(!1,!1))}),this.g.on(`forceSleep`,()=>{let e=Eu(this.g.s.player.x,this.g.s.player.z).includes(`cellblock`);this.sleepAndEndDay(e)})}sleepAndEndDay(e){let t=this.g.endDay(e);for(let e of Object.keys(this.npcs))this.npcs[e].snapToSchedule(this.g.s.minute);this.saves.save(this.g.s),this.ui.showDaySummary(t)}handleKey(e){e===`KeyE`?this.ui.paused||this.currentPrompt?.run():this.ui.paused?e===`Escape`&&this.ui.closeModal():e===`KeyJ`?this.ui.openPanel(`journal`):e===`KeyP`?this.ui.openPanel(`record`):e===`KeyR`?this.ui.openPanel(`relations`):e===`KeyB`?this.ui.openPanel(`bag`):e===`KeyM`?this.ui.openPanel(`map`):e===`Escape`&&this.ui.openPanel(`pause`)}tickCtx(e,t){let n=Eu(this.g.s.player.x,this.g.s.player.z);return{inCellblock:n.includes(`cellblock`),inRollcall:n.includes(`rollcall`),sprinting:t,moving:e,resting:this.resting}}rebuildPlayerRig(e){this.playerRig&&(this.playerRig.dispose(),this.world.scene.remove(this.playerRig.root)),this.playerRig=new im({uniform:`inmate`,skin:e.skin??14857357,hair:e.hair??1579035,hairStyle:e.hairStyle??`short`,accent:2278750,height:1,build:1},void 0,ym(e.preset)),this.world.scene.add(this.playerRig.root);let t=this.g.s.player;this.playerRig.root.position.set(t.x,0,t.z),this.playerRig.root.rotation.y=t.rot,this.updateCameraMode()}updateCameraMode(){let e=(this.g.s.settings.cameraMode??`third`)===`first`;this.playerRig&&(this.playerRig.root.visible=!e,this.playerRig.labelSprite&&(this.playerRig.labelSprite.visible=!e)),this.input.cameraMode=e?`first`:`third`}isDoorPassable(e){return this.g.isOpen(e)||this.tempUnlockedDoors.has(e)}checkStartupLockout(){let e=this.g.s.player;for(let[t,n]of Object.entries(bm))if(!this.g.isOpen(t)&&Tu(n.insideBox,e.x,e.z)){e.x=n.safeNode[0],e.z=n.safeNode[1],this.ui.toast(`Đã đưa bạn ra ngoài sân trại do ${n.name} hiện đang đóng cửa theo lịch.`,`info`);break}}startAutoWalk(e,t,n,r,i,a){if(this.isEscorting)return;let o=n&&r!==void 0?r:e,s=n&&i!==void 0?i:t,c=this.g.s.player,l=jd(Ad(c.x,c.z),Ad(o,s));if(!l||l.length===0){this.ui.toast(`Không tìm được đường đi hợp lệ đến mục tiêu.`,`warn`);return}let u=[];for(let e of l)u.push(Mu[e]);u.push([o,s]),this.autoWalking=!0,this.autoWalkWaypoints=u,this.autoWalkIndex=0,this.autoWalkIsLocked=!!n,this.autoWalkTargetName=a||`Mục tiêu`,this.ui.setAutoWalkState(!0,this.autoWalkTargetName),this.resting=!1}cancelAutoWalk(e=!1){this.autoWalking&&(this.autoWalking=!1,this.autoWalkWaypoints=[],this.autoWalkIndex=0,this.ui.setAutoWalkState(!1),e&&this.ui.toast(`Đã dừng chế độ tự đi.`,`info`))}updateAutoWalk(e){if(!this.autoWalking)return;let t=this.g.s.player,n=this.autoWalkWaypoints[this.autoWalkIndex];if(!n){this.cancelAutoWalk(!1);return}let r=n[0]-t.x,i=n[1]-t.z,a=Math.hypot(r,i),o=this.autoWalkIndex>=this.autoWalkWaypoints.length-1;if(a<=(o?1.6:.8)){if(o){this.cancelAutoWalk(!1),this.sfx.good(),this.autoWalkIsLocked?this.ui.toast(`Đã đến điểm chờ an toàn ngoài cửa. Khu vực hiện đang đóng.`,`info`):this.ui.toast(`Đã đến gần ${this.autoWalkTargetName}.`,`good`);return}this.autoWalkIndex++;return}let s=3.7,c=r/a,l=i/a,[u,d]=this.world.collision.move(t.x,t.z,c*s*e,l*s*e,.36);t.x=u,t.z=d,t.rot=Math.atan2(c,l),this.sfx.step(e,!1),this.playerRig.pose=`walk`,this.playerRig.update(e,s),this.playerRig.root.position.set(t.x,0,t.z),this.playerRig.root.rotation.y=t.rot}checkAreaLockoutsAndWarnings(){if(this.isEscorting)return;let e=this.g.s.minute,t=this.g.s.player;if(e!==this.lastWarningMinute)for(let[n,r]of Object.entries(bm)){let i=this.g.isOpen(n),a=this.g.isOpenAt(n,e+15);if(i&&!a&&Tu(r.insideBox,t.x,t.z)){this.ui.toast(`⚠️ Chú ý: ${r.name} sẽ đóng cửa trong 15 phút nữa! Vui lòng hoàn thành công việc và rời khu vực.`,`warn`),this.lastWarningMinute=e;break}}for(let[e,n]of Object.entries(bm))if(!this.g.isOpen(e)&&Tu(n.insideBox,t.x,t.z)){this.startEscort(e,n);break}}startEscort(e,t){this.cancelAutoWalk(!1),this.isEscorting=!0,this.escortTimer=0,this.escortTargetArea=e,this.tempUnlockedDoors.add(e);let n=this.npcs.tung;n.moveTo(this.g.s.player.x+1.2,this.g.s.player.z,this.g.s.player.rot),n.state=`walk`,this.sfx.bell(),this.ui.toast(`👮 Cán bộ Tùng: Hết giờ quy định rồi, ${t.name} đang đóng cửa! Theo tôi ra sân trại ngay!`,`bad`)}updateEscort(e){if(!this.isEscorting||!this.escortTargetArea)return;this.escortTimer+=e;let t=bm[this.escortTargetArea];if(!t){this.tempUnlockedDoors.delete(this.escortTargetArea),this.isEscorting=!1,this.escortTargetArea=null,this.input.reset();return}let n=this.g.s.player,[r,i]=t.safeNode,a=r-n.x,o=i-n.z,s=Math.hypot(a,o);if(s<1||this.escortTimer>=5.2){n.x=r,n.z=i,this.tempUnlockedDoors.delete(this.escortTargetArea),this.isEscorting=!1,this.escortTargetArea=null,this.input.reset(),this.playerRig.root.position.set(n.x,0,n.z),this.npcs.tung.snapToSchedule(this.g.s.minute),this.g.recordViolation(`disobedience`,`escort-${this.g.s.day}-${this.g.s.minute}`,`Không chấp hành hiệu lệnh rời ${t.name} đúng giờ quy định.`),this.ui.toast(`Đã áp giải ra sân trại an toàn. Cửa ${t.name} đã được khóa lại.`,`info`);return}let c=3.6,l=a/s,u=o/s;n.x+=l*c*e,n.z+=u*c*e,n.rot=Math.atan2(l,u);let d=this.npcs.tung;d.moveTo(n.x+u*1,n.z-l*1,n.rot),d.rig.pose=`walk`,d.rig.update(e,c),this.playerRig.pose=`walk`,this.playerRig.update(e,c),this.playerRig.root.position.set(n.x,0,n.z),this.playerRig.root.rotation.y=n.rot}step(e){if(this.cutscene.isActive()){this.cutscene.update(e),this.renderer.render(this.world.scene,this.tpCam.cam);return}let t=this.g.s.player;if(this.ui.paused)this.input.reset(),this.playerRig.pose=`stand`,this.playerRig.update(e,0);else{let n=this.input.moveVector(),r=Math.hypot(n.fwd,n.right)>.05;if(r&&(this.resting=!1,this.autoWalking&&this.cancelAutoWalk(!1)),this.isEscorting)this.updateEscort(e);else if(this.autoWalking)this.updateAutoWalk(e);else{let i=n.sprint&&this.g.s.stats.stamina>5,a=r?i?5.8:3.7:0,o=(this.g.s.settings.cameraMode??`third`)===`first`;if(r){let r=Math.sin(this.input.yaw),s=Math.cos(this.input.yaw),c=-r*n.fwd+s*n.right,l=-s*n.fwd-r*n.right,[u,d]=this.world.collision.move(t.x,t.z,c*a*e,l*a*e,.36);t.x=u,t.z=d,t.rot=o?Math.atan2(-Math.sin(this.input.yaw),-Math.cos(this.input.yaw)):Math.atan2(c,l),this.sfx.step(e,i)}else o&&(t.rot=Math.atan2(-Math.sin(this.input.yaw),-Math.cos(this.input.yaw)));this.playerRig.pose=this.resting?`sit`:r?`walk`:`stand`,this.playerRig.update(e,a),this.playerRig.root.position.set(t.x,0,t.z),this.playerRig.root.rotation.y=t.rot}for(let n of Object.keys(this.npcs)){let r=this.npcs[n];if(n===`tung`&&this.isEscorting||r.update(e,this.g.s.minute),r.rig.labelSprite){let e=Math.hypot(r.x-t.x,r.z-t.z);r.rig.labelSprite.visible=e<8}}let i=Object.values(this.npcs),a=.52;for(let e=0;e<i.length;e++){let t=i[e];for(let n=e+1;n<i.length;n++){let e=i[n],r=t.x-e.x,o=t.z-e.z,s=Math.hypot(r,o);if(s<a){s<1e-4&&(r=.01,o=0,s=.01);let n=(a-s)*.5/s,i=t.x+r*n,c=t.z+o*n,l=e.x-r*n,u=e.z-o*n;this.world.collision.canPlace(i,c,.25)&&t.moveTo(i,c,t.rot),this.world.collision.canPlace(l,u,.25)&&e.moveTo(l,u,e.rot)}}}for(let e of i){let n=t.x-e.x,r=t.z-e.z,i=Math.hypot(n,r);if(i<a){i<1e-4&&(n=.01,r=0,i=.01);let o=(a-i)*.5/i,s=t.x+n*o,c=t.z+r*o,l=e.x-n*o,u=e.z-r*o;this.world.collision.canPlace(s,c,.32)&&(t.x=s,t.z=c,this.playerRig.root.position.set(t.x,0,t.z)),this.world.collision.canPlace(l,u,.25)&&e.moveTo(l,u,e.rot)}}this.g.tick(e,this.tickCtx(r||this.autoWalking,r&&n.sprint)),this.checkRestrictedZone(),this.checkAreaLockoutsAndWarnings()}this.world.update(e,this.g.s.minute,this.g.has(`chan_man`),this.g.has(`hop_mui_khoan`)||!!this.g.s.flags.stole_for_lam,this.g.has(`dep_bay`)||this.g.qStatus(`dep_bay`)===`done`,this.g.has(`chai_thuoc_hen`)||this.g.qStatus(`nghi_an_thuoc`)===`done`,this.g.s.day,t.x,t.z);let n=this.g.s.settings.cameraMode??`third`;if(this.updateCameraMode(),this.tpCam.update(t.x,t.z,this.input.yaw,this.input.pitch,this.input.distance,this.world.cameraObstacles,n),n===`third`){let e=this.tpCam.cam.position,n=new V(t.x,1.25,t.z).clone().sub(e),r=n.length(),i=n.clone().normalize();for(let t of Object.values(this.npcs)){let n=new V(t.x,1,t.z).clone().sub(e),a=n.dot(i);a>.4&&a<r-.35&&n.sub(i.clone().multiplyScalar(a)).length()<.65?t.rig.setOpacity(.25):t.rig.setOpacity(1)}}this.currentPrompt=this.findPrompt(),this.ui.updateHUD(this.currentPrompt,this.computeGuide()),this.renderer.render(this.world.scene,this.tpCam.cam)}checkRestrictedZone(){let e=this.g.s.player,t=Tu(wu.find(e=>e.id===`storage`),e.x,e.z);if(t&&!this.wasInStorage&&(this.restrictedEpisode++,this.g.addStat(`suspicion`,5)),this.wasInStorage=t,!t)return;let n=this.world.seenByStorageCam(e.x,e.z),r=this.npcs.tung.canSee(e.x,e.z,this.world.collision),i=this.npcs.lan.canSee(e.x,e.z,this.world.collision);if(n||r||i){let t=n?`Camera góc kho ghi hình`:r?`Cán bộ Tùng bắt gặp trực tiếp`:`Quản giáo Lan bắt gặp`;this.g.recordViolation(`restricted`,`ep${this.restrictedEpisode}-d${this.g.s.day}`,`${t} bạn ở trong kho vật tư lúc ${lu(this.g.s.minute)}.`),e.x=20.6,e.z=-7,this.wasInStorage=!1}}findPrompt(){let e=this.g.s.player,t=null,n=(e,n,r)=>{e<=n&&(!t||e<t.d)&&(t={d:e,target:r})};for(let t of Object.keys(this.npcs)){let r=this.npcs[t];n(Math.hypot(r.x-e.x,r.z-e.z),2.2,{id:`npc_${t}`,label:`Nói chuyện với ${r.def.name} (${r.activity})`,run:()=>{r.state=`talk`,r.faceToward(e.x,e.z);let n=gd(t,this.g,()=>this.ui.showAppealModal(),()=>this.ui.showVocationalMinigame());this.ui.showDialogue(n,()=>r.state=`activity`)}})}for(let t of Cu)this.g.isOpen(t.area)||n(Math.hypot(t.ix-e.x,t.iz-e.z),2.1,{id:t.id,label:`${t.name} (Đang khóa — nhấn E xem lý do)`,run:()=>{let e=du[t.area];this.ui.toast(`🔒 ${e.label}: ${e.reason}`,`warn`)}});for(let t of ju){let r=Math.hypot(t.x-e.x,t.z-e.z);if(r>t.r)continue;let i=this.spotTarget(t.id,t.label);i&&n(r,t.r,i)}return t?t.target:null}spotTarget(e,t){let n=this.g;switch(e){case`bed`:{if(!n.has(`chan_man`))return{id:e,label:`${t}: Nhận chăn màn & đồ cá nhân`,run:()=>{n.giveItem(`chan_man`),n.completeObjective(`nhap_trai`,`chan_man`)}};let r=n.canSleep();return{id:e,label:r.ok?`${t}: Đi ngủ kết thúc Ngày ${n.s.day}`:`${t}: Nghỉ lưng / Chờ giờ (${r.reason})`,run:()=>r.ok?this.sleepAndEndDay(!0):this.ui.showWait()}}case`rules`:return{id:e,label:`${t}: Đọc nội quy Trại giam An Phú`,run:()=>{n.completeObjective(`nhap_trai`,`noi_quy`),this.ui.showDialogue({speaker:`BẢNG NỘI QUY KHU GIAM A`,text:`1. Điểm danh sáng 06:30–06:45 tại ô sơn vàng ngoài sân. Đến sau 06:45 tính trễ (−3 điểm), sau 07:00 tính vắng (−6 điểm).
2. Lao động ca sáng 08:00–11:30 tại xưởng: bấm bảng chấm công trước 08:30 và hoàn thành đủ 3 sản phẩm.
3. Tuyệt đối không tự ý vào Kho vật tư hoặc tàng trữ hàng cấm.
4. Đúng 21:00 về khu buồng giam; 21:30 kiểm tra buồng.
5. Mọi khiếu nại có bằng chứng được tiếp nhận tại Phòng quản giáo (07:00–17:00).`,choices:[{label:`Đã đọc và ghi nhớ`,run:()=>null}]})}};case`meal`:return{id:e,label:`${t}: Nhận suất cơm trại`,run:()=>{let e=n.eatMeal();e?this.ui.toast(e,`warn`):this.sfx.good()}};case`canteen`:return{id:e,label:`${t}: Mua đồ ăn & nhu yếu phẩm`,run:()=>this.ui.showCanteen()};case`clock`:return{id:e,label:`${t}: Chấm công lao động`,run:()=>{let e=n.clockIn();e?this.ui.toast(e,`warn`):this.sfx.good()}};case`workbench`:return n.qStatus(`loi_hua_chu_bay`)===`active`&&n.qObj(`loi_hua_chu_bay`,`nghe_loi_hua`)&&!n.qObj(`loi_hua_chu_bay`,`danh_bong_hop`)?{id:e,label:`${t}: Đánh bóng hộp gỗ giúp Chú Bảy`,run:()=>{n.completeObjective(`loi_hua_chu_bay`,`danh_bong_hop`),this.ui.toast(`Đã hoàn thiện hộp gỗ. Hãy gặp Chú Bảy để hứa gửi quà cho con gái chú.`,`good`)}}:{id:e,label:`${t}: Lắp ráp ổ cắm điện (${n.s.daily.workUnits}/3)`,run:()=>this.ui.showWorkbenchMinigame()};case`rest_ws`:case`bench_yard`:case`stonetable`:return{id:e,label:`${t}: Ngồi nghỉ hồi thể lực & giảm căng thẳng`,run:()=>{this.resting=!this.resting,this.ui.toast(this.resting?`Đang ngồi nghỉ — thể lực hồi nhanh hơn.`:`Đã đứng dậy.`,`info`)}};case`drill`:return n.has(`hop_mui_khoan`)||n.s.flags.stole_for_lam?null:{id:e,label:`${t}: Lấy hộp mũi khoan`,risk:ud.theft.risk,run:()=>{let e=n.objectiveBlockReason(`mon_no`,`lay_khoan`);if(e){this.ui.toast(e,`warn`);return}let t=n.s.player;this.world.seenByStorageCam(t.x,t.z)||this.npcs.tung.canSee(t.x,t.z,this.world.collision)?(n.recordViolation(`theft`,`caught-d${n.s.day}`,`Camera kho / Cán bộ Tùng bắt quả tang bạn lấy hộp mũi khoan trên kệ.`),n.s.flags.canteenBanUntil=n.s.day+2,n.qStatus(`mon_no`)===`active`&&n.qBranch(`mon_no`)===`steal`&&n.finishQuest(`mon_no`,`failed`,`Bị bắt quả tang khi lấy hộp mũi khoan`),t.x=20.6,t.z=-7):(n.giveItem(`hop_mui_khoan`),n.addStat(`suspicion`,18),n.completeObjective(`mon_no`,`lay_khoan`))}};case`clue_crate`:return n.qStatus(`manh_moi_kho_7`)!==`active`||n.qObj(`manh_moi_kho_7`,`lay_manh_giay`)?null:{id:e,label:n.qObj(`manh_moi_kho_7`,`kiem_tra_tem`)?`Kiện KHO-07: Thu thập mảnh vận đơn`:`Kiện KHO-07: Kiểm tra tem niêm phong`,run:()=>{let e=n.qObj(`manh_moi_kho_7`,`kiem_tra_tem`)?`lay_manh_giay`:`kiem_tra_tem`,t=n.objectiveBlockReason(`manh_moi_kho_7`,e);t?this.ui.toast(t,`warn`):n.completeObjective(`manh_moi_kho_7`,e)}};case`class_fan`:return n.qStatus(`sua_quat_phong_hoc`)!==`active`||n.qObj(`sua_quat_phong_hoc`,`thay_vong_bi`)?null:{id:e,label:n.qObj(`sua_quat_phong_hoc`,`kiem_tra_quat`)?`Quạt lớp: Thay vòng bi và siết ốc`:`Quạt lớp: Kiểm tra nguyên nhân hỏng`,run:()=>{let e=n.qObj(`sua_quat_phong_hoc`,`kiem_tra_quat`)?`thay_vong_bi`:`kiem_tra_quat`;n.completeObjective(`sua_quat_phong_hoc`,e)}};case`exercise`:return{id:e,label:`${t}: Tập thể lực & giảm căng thẳng`,run:()=>this.ui.showExerciseMinigame()};case`sandals`:return n.qStatus(`dep_bay`)!==`active`||n.has(`dep_bay`)?null:{id:e,label:`${t}: Nhặt đôi dép tổ ong chữ B7 của Chú Bảy`,run:()=>{n.giveItem(`dep_bay`),n.completeObjective(`dep_bay`,`tim_dep`)}};case`lan_desk`:return n.qStatus(`la_thu_que_nha`)===`active`&&!n.qObj(`la_thu_que_nha`,`nhan_thu`)?{id:e,label:`Bàn cán bộ: Nhận thư từ gia đình`,run:()=>{n.completeObjective(`la_thu_que_nha`,`nhan_thu`),n.giveItem(`thu_chi_mai`),this.ui.toast(`Đã nhận thư. Hãy hồi âm cho gia đình khi gặp Chị Mai.`,`good`)}}:n.qStatus(`ho_so_giai_trinh`)===`active`&&!n.qObj(`ho_so_giai_trinh`,`tong_hop_chung_cu`)?{id:e,label:`Bàn hồ sơ: Tổng hợp chứng cứ Kho 7`,run:()=>{let e=n.objectiveBlockReason(`ho_so_giai_trinh`,`tong_hop_chung_cu`);e?this.ui.toast(e,`warn`):n.has(`manh_van_don_kho_7`)?(n.completeObjective(`ho_so_giai_trinh`,`tong_hop_chung_cu`),this.ui.toast(`Đã tổng hợp hồ sơ. Hãy gặp Quản giáo Lan nộp chứng cứ.`,`good`)):this.ui.toast(`Cần mảnh vận đơn Kho số 7 để tổng hợp chứng cứ trước.`,`warn`)}}:{id:e,label:`${t}: Xem hồ sơ / Giải trình vi phạm`,run:()=>this.ui.showAppealModal()};case`discipline`:return{id:e,label:`${t} (Đang khóa)`,run:()=>this.ui.toast(`🔒 ${du.discipline.reason}`,`info`)};case`med_table`:return{id:e,label:`${t}: Nói chuyện với Y sĩ An`,run:()=>{let e=this.npcs.an;e.state=`talk`,e.faceToward(this.g.s.player.x,this.g.s.player.z);let t=gd(`an`,this.g,()=>this.ui.showAppealModal());this.ui.showDialogue(t,()=>e.state=`activity`)}};case`med_cabinet`:return{id:e,label:`${t}: Phụ việc sắp xếp thuốc men`,run:()=>this.ui.showMedicineSortingMinigame()};case`class_workbench`:return{id:e,label:`${t}: Thực hành nối mạch an toàn`,run:()=>this.ui.showVocationalMinigame()};case`library_shelf`:return{id:e,label:`${t}: Mượn & đọc cẩm nang cải tạo`,run:()=>this.ui.showLibraryReader()};case`visit_booth`:return{id:e,label:`${t}: Nhấc ống nghe nói chuyện với Chị Mai`,run:()=>{let e=this.npcs.mai;e.state=`talk`,e.faceToward(this.g.s.player.x,this.g.s.player.z);let t=gd(`mai`,this.g,()=>this.ui.showAppealModal());this.ui.showDialogue(t,()=>e.state=`activity`)}};case`asthma_spot`:return this.g.has(`chai_thuoc_hen`)||this.g.qStatus(`nghi_an_thuoc`)===`done`?null:{id:e,label:`${t}: Nhặt lọ thuốc hen suyễn`,run:()=>{let e=this.g.objectiveBlockReason(`nghi_an_thuoc`,`nhat_thuoc`);e?this.ui.toast(e,`warn`):(this.g.completeObjective(`nghi_an_thuoc`,`nhat_thuoc`),this.g.giveItem(`chai_thuoc_hen`),this.ui.toast(`Đã nhặt lọ thuốc hen của Chú Bảy! Hãy mang về phòng y tế đưa cho Y sĩ An.`,`good`))}}}return null}guideTo(e,t,n,r,i){let a=this.g.s.player,o=Math.hypot(t-a.x,n-a.z),s=Eu(a.x,a.z),c=Eu(t,n),l=s.length>0&&c.length>0&&s.some(e=>c.includes(e)),u=[];if(o<2||o<3.8&&l){let s=t-a.x,c=n-a.z;return u.push([t,n]),{label:e,dist:o,angle:Math.atan2(s,-c)-this.input.yaw,isDuty:r,tx:t,tz:n,route:u,...i}}let d=jd(Ad(a.x,a.z),Ad(t,n)),f=d[0],[p,m]=Mu[f];Math.hypot(p-a.x,m-a.z)<1.3&&d.length>1&&(f=d[1]);let[h,g]=Mu[f],_=h-a.x,v=g-a.z,y=Math.hypot(_,v),b=Math.max(0,d.indexOf(f));for(let e=b;e<d.length;e++){let t=Mu[d[e]];if(u.push([t[0],t[1]]),e<d.length-1){let n=Mu[d[e+1]];y+=Math.hypot(t[0]-n[0],t[1]-n[1])}}u.push([t,n]);let[x,S]=Mu[d[d.length-1]];return y+=Math.hypot(t-x,n-S),{label:e,dist:y,angle:Math.atan2(_,-v)-this.input.yaw,isDuty:r,tx:t,tz:n,route:u,...i}}computeGuide(){let e=this.g,t=e.s.player,n=su(e.s.minute);if(n.id===`rollcall`&&e.s.daily.rollcall===`pending`)return this.guideTo(`Ô điểm danh sáng sân trại`,-9,-9,!0,{questTitle:`Điểm danh sáng`,stepDesc:`Có mặt tại ô vàng ngoài sân trại trước 06:45 để cán bộ Tùng điểm danh.`,progress:`Chờ điểm danh`,targetName:`Ô điểm danh`,safeX:-9,safeZ:-9});if(n.id===`work`){if(!e.s.daily.workClockedIn){let t=e.isOpen(`workshop`);return this.guideTo(`Bảng chấm công xưởng (trước 08:30)`,13.1,-6,!0,{questTitle:`Lao động ca sáng`,stepDesc:`Đến xưởng lao động bấm bảng chấm công trước 08:30.`,progress:`Chưa bấm thẻ`,targetName:`Bảng chấm công`,safeX:10.5,safeZ:-2.75,isLocked:!t,openCondition:`Mở cửa 08:00–11:30`})}if(e.s.daily.workUnits===0){let t=e.isOpen(`workshop`);return this.guideTo(`Bàn xưởng: hoàn thành ca lao động sáng`,16,.15,!0,{questTitle:`Lao động ca sáng`,stepDesc:`Lắp ráp đủ 3 ổ cắm điện tại bàn xưởng.`,progress:`${e.s.daily.workUnits}/3 ổ cắm`,targetName:`Bàn xưởng`,safeX:10.5,safeZ:-2.75,isLocked:!t,openCondition:`Mở cửa 08:00–11:30`})}}if(n.id===`curfew`&&!Eu(t.x,t.z).includes(`cellblock`))return this.guideTo(`Về buồng giam 3 điểm danh tối & ngủ`,-14.9,-28.6,!0,{questTitle:`Giới nghiêm buổi tối`,stepDesc:`Đúng 21:00 phải có mặt tại buồng giam số 3 để kiểm tra quân số và ngủ.`,progress:`Về buồng ngủ`,targetName:`Buồng giam số 3`,safeX:-17,safeZ:-17.75});let r=0,i=0,a=``,o={},s=()=>n.id===`work`?`Chú Bảy (Bàn xưởng #2)`:n.id===`breakfast`||n.id===`lunch`||n.id===`dinner`?`Chú Bảy (Nhà ăn)`:n.id===`wake`||n.id===`rest`||n.id===`curfew`?`Chú Bảy (Buồng 3)`:`Chú Bảy (Bàn cờ đá sân trại)`;if(e.qStatus(`nhap_trai`)===`active`)e.qObj(`nhap_trai`,`chan_man`)?e.qObj(`nhap_trai`,`noi_quy`)?e.qObj(`nhap_trai`,`diem_danh`)?e.qObj(`nhap_trai`,`gap_bay`)||(r=this.npcs.bay.x,i=this.npcs.bay.z,a=s(),o={questTitle:`Chương 1: Nhập trại`,stepDesc:`Gặp và làm quen Chú Bảy (bạn cùng buồng giam).`,progress:`3/4`,targetName:`Chú Bảy`}):(r=-9,i=-9,a=`Ô điểm danh sáng sân trại`,o={questTitle:`Chương 1: Nhập trại`,stepDesc:`Có mặt điểm danh tại ô vàng ngoài sân trại (06:30–06:45).`,progress:`2/4`,targetName:`Ô điểm danh`}):(r=-27,i=-21.5,a=`Bảng nội quy buồng giam`,o={questTitle:`Chương 1: Nhập trại`,stepDesc:`Đọc kỹ bảng nội quy trại giam trên tường buồng A.`,progress:`1/4`,targetName:`Bảng nội quy`}):(r=-14.9,i=-28.6,a=`Giường của bạn (Nhận chăn màn)`,o={questTitle:`Chương 1: Nhập trại`,stepDesc:`Đến giường của bạn (buồng số 3) nhận chăn màn & đồ cá nhân.`,progress:`0/4`,targetName:`Giường của bạn`});else if(e.qStatus(`ca_dau`)===`active`){let t=e.isOpen(`workshop`);e.qObj(`ca_dau`,`cham_cong`)?e.qObj(`ca_dau`,`lap_rap`)?(r=this.npcs.bay.x,i=this.npcs.bay.z,a=s(),o={questTitle:`Nhiệm vụ: Ca đầu tiên`,stepDesc:`Báo cáo hoàn thành ca làm với Chú Bảy.`,progress:`2/3`,targetName:`Chú Bảy`}):(r=16,i=.15,a=`Bàn lắp ráp linh kiện`,o={questTitle:`Nhiệm vụ: Ca đầu tiên`,stepDesc:`Hoàn thành lắp ráp linh kiện đạt định mức.`,progress:`${e.s.daily.workUnits}/3 ổ cắm`,targetName:`Bàn xưởng`,safeX:10.5,safeZ:-2.75,isLocked:!t,openCondition:`08:00–11:30`}):(r=13.1,i=-6,a=`Bảng chấm công xưởng`,o={questTitle:`Nhiệm vụ: Ca đầu tiên`,stepDesc:`Bấm thẻ chấm công tại xưởng bắt đầu ca làm.`,progress:`0/3`,targetName:`Bảng chấm công`,safeX:10.5,safeZ:-2.75,isLocked:!t,openCondition:`08:00–11:30`})}else if(e.qStatus(`mon_no`)===`active`){let t=e.qBranch(`mon_no`);e.qObj(`mon_no`,`nghe_huy`)?!e.qObj(`mon_no`,`gap_lam`)||!t?(r=this.npcs.lam.x,i=this.npcs.lam.z,a=`Lâm (Khu thể thao sân)`,o={questTitle:`Nhiệm vụ: Món nợ buồng 3`,stepDesc:`Gặp Lâm tìm cách giải quyết món nợ.`,progress:`1/3`,targetName:`Lâm`}):t===`steal`&&!e.qObj(`mon_no`,`lay_khoan`)?(r=26.2,i=-5.2,a=`Kệ kho xưởng (Lẻn lấy hộp khoan)`,o={questTitle:`Nhiệm vụ: Món nợ buồng 3`,stepDesc:`Tránh camera kho, lấy trộm hộp mũi khoan cho Lâm.`,progress:`2/3`,targetName:`Kệ kho xưởng`,safeX:20.6,safeZ:-7,isLocked:!0,openCondition:`Khu vực cấm camera`}):t===`steal`?(r=this.npcs.lam.x,i=this.npcs.lam.z,a=`Lâm (Giao đồ)`,o={questTitle:`Nhiệm vụ: Món nợ buồng 3`,stepDesc:`Giao hộp mũi khoan cho Lâm để xóa nợ cho Huy.`,progress:`2/3`,targetName:`Lâm`}):t===`pay`?(r=this.npcs.lam.x,i=this.npcs.lam.z,a=`Lâm (Trả 40.000đ)`,o={questTitle:`Nhiệm vụ: Món nợ buồng 3`,stepDesc:`Trả tiền chuộc nợ cho Huy.`,progress:`2/3`,targetName:`Lâm`}):t===`report`&&(r=this.npcs.lan.x,i=this.npcs.lan.z,a=`Quản giáo Lan (Báo cáo kèm vật chứng)`,o={questTitle:`Nhiệm vụ: Món nợ buồng 3`,stepDesc:`Báo cáo hành vi bảo kê, cờ bạc cho Quản giáo Lan.`,progress:`2/3`,targetName:`Quản giáo Lan`}):(r=this.npcs.huy.x,i=this.npcs.huy.z,a=`Huy (Buồng 3 / Sân)`,o={questTitle:`Nhiệm vụ: Món nợ buồng 3`,stepDesc:`Nghe Huy tâm sự về áp lực nợ nần với Lâm.`,progress:`0/3`,targetName:`Huy`})}else if(e.qStatus(`lop_nghe_dau`)===`active`){let t=e.isOpen(`classroom`);e.qObj(`lop_nghe_dau`,`den_lop`)?e.qObj(`lop_nghe_dau`,`thao_tac`)?(r=this.npcs.phuc.x,i=this.npcs.phuc.z,a=`Thầy Phúc (Nhận chứng chỉ)`,o={questTitle:`Nhiệm vụ: Nghề tương lai`,stepDesc:`Báo cáo bài tập với Thầy Phúc để nhận chứng nhận.`,progress:`2/3`,targetName:`Thầy Phúc`,safeX:-20.75,safeZ:8.5,isLocked:!t,openCondition:`Mở cửa 14:00–16:30`}):(r=-21.5,i=13,a=t?`Bàn thực hành nối mạch`:`Bàn thực hành (Mở 14:00–16:30)`,o={questTitle:`Nhiệm vụ: Nghề tương lai`,stepDesc:`Thực hành nối mạch an toàn tại bàn học.`,progress:`1/3`,targetName:`Bàn thực hành`,safeX:-20.75,safeZ:8.5,isLocked:!t,openCondition:`Mở cửa 14:00–16:30`}):(r=this.npcs.phuc.x,i=this.npcs.phuc.z,a=t?`Thầy Phúc (Lớp học nghề)`:`Thầy Phúc (Lớp mở 14:00–16:30)`,o={questTitle:`Nhiệm vụ: Nghề tương lai`,stepDesc:`Đến lớp học nghề gặp Thầy Phúc.`,progress:`0/3`,targetName:`Thầy Phúc`,safeX:-20.75,safeZ:8.5,isLocked:!t,openCondition:`Mở cửa 14:00–16:30`})}else if(e.qStatus(`nghi_an_thuoc`)===`active`){let t=e.isOpen(`medical`);e.qObj(`nghi_an_thuoc`,`hoi_an`)?e.qObj(`nghi_an_thuoc`,`hoi_bay`)?e.qObj(`nghi_an_thuoc`,`nhat_thuoc`)?(r=this.npcs.an.x,i=this.npcs.an.z,a=t?`Y sĩ An (Giao thuốc cứu chú Bảy)`:`Y sĩ An (Phòng y tế)`,o={questTitle:`Nhiệm vụ: Nghi án lọ thuốc`,stepDesc:`Đem lọ thuốc về phòng y tế giao cho Y sĩ An.`,progress:`3/4`,targetName:`Y sĩ An`,safeX:22.25,safeZ:-16.5,isLocked:!t,openCondition:`07:30–11:30 & 13:30–17:00`}):(r=22.5,i=13,a=`Lọ thuốc rơi góc sau xưởng`,o={questTitle:`Nhiệm vụ: Nghi án lọ thuốc`,stepDesc:`Tìm nhặt lọ thuốc hen suyễn bị rơi góc sau xưởng.`,progress:`2/4`,targetName:`Lọ thuốc hen`}):(r=this.npcs.bay.x,i=this.npcs.bay.z,a=s(),o={questTitle:`Nhiệm vụ: Nghi án lọ thuốc`,stepDesc:`Hỏi Chú Bảy về địa điểm làm rơi lọ thuốc.`,progress:`1/4`,targetName:`Chú Bảy`}):(r=this.npcs.an.x,i=this.npcs.an.z,a=t?`Y sĩ An (Phòng y tế)`:`Y sĩ An (Mở 07:30–11:30 & 13:30–17:00)`,o={questTitle:`Nhiệm vụ: Nghi án lọ thuốc`,stepDesc:`Đến phòng y tế hỏi Y sĩ An về thuốc của Chú Bảy.`,progress:`0/4`,targetName:`Y sĩ An`,safeX:22.25,safeZ:-16.5,isLocked:!t,openCondition:`07:30–11:30 & 13:30–17:00`})}else if(e.qStatus(`phong_tham_gap`)===`active`){let t=e.isOpen(`visitation`);r=-22.5,i=-8.8,a=t?`Vách kính thăm gặp (Chị Mai)`:`Phòng thăm gặp (Mở 08:30–11:00 & 14:00–16:30)`,o={questTitle:`Nhiệm vụ: Tiếng vọng gia đình`,stepDesc:`Vào phòng thăm gặp nhấc ống nghe trò chuyện với Chị Mai.`,progress:`Chờ gặp`,targetName:`Vách kính thăm gặp`,safeX:-18.5,safeZ:-10.25,isLocked:!t,openCondition:`08:30–11:00 & 14:00–16:30`}}return a?this.guideTo(a,r,i,!1,o):null}}().init(),`serviceWorker`in navigator&&(window.location.protocol===`https:`||window.location.hostname===`localhost`||window.location.hostname===`127.0.0.1`)&&window.addEventListener(`load`,()=>{navigator.serviceWorker.register(`./sw.js`).then(e=>{e.addEventListener(`updatefound`,()=>{let t=e.installing;t&&t.addEventListener(`statechange`,()=>{t.state===`installed`&&navigator.serviceWorker.controller&&console.log(`[SW] Bản cập nhật mới đã sẵn sàng.`)})})}).catch(e=>{console.warn(`[SW] Không thể đăng ký Service Worker:`,e)})});