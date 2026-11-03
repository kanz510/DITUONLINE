import * as THREE from 'three';

/** Story-item visuals only. Keep their original positions, interaction ids and
 * visibility flags: the saved quest logic depends on those existing objects.
 */
const mat=(color:number,metalness=0.05,roughness=0.7) =>
  new THREE.MeshStandardMaterial({color,metalness,roughness});
const blue=mat(0x4673a4),linen=mat(0xdbe7ef),silver=mat(0x8d9da5,.7,.3);
const iron=mat(0x2f4050,.7,.43),red=mat(0xbb4b39,.35,.5),warning=mat(0xeab66e,.1,.6);
const yellow=mat(0xe8d27a,.05,.8),plastic=mat(0x3d9dbb,.05,.32),white=mat(0xf9fbf8,.08,.6);
function shape(g:THREE.Group,geo:THREE.BufferGeometry,m:THREE.Material,
  x:number,y:number,z:number,name:string){
  const o=new THREE.Mesh(geo,m);o.name=name;o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;g.add(o);return o;
}
function box(g:THREE.Group,x:number,y:number,z:number,w:number,h:number,d:number,m:THREE.Material,name:string){
  return shape(g,new THREE.BoxGeometry(w,h,d),m,x,y,z,name);
}
function cyl(g:THREE.Group,x:number,y:number,z:number,r:number,h:number,m:THREE.Material,name:string){
  return shape(g,new THREE.CylinderGeometry(r,r,h,12),m,x,y,z,name);
}
export function makeBlanketParcel():THREE.Group {
  const g=new THREE.Group();g.name='quest.bedding-package';
  const cloth=shape(g,new THREE.SphereGeometry(1,14,10),blue,0,0,0,'folded.blanket');
  cloth.scale.set(.33,.11,.28);
  const edge=box(g,0,.055,.275,.61,.036,.026,linen,'stitched.blanket.edge');
  edge.rotation.x=.08;
  const pillow=shape(g,new THREE.SphereGeometry(1,14,10),linen,.08,.17,-.03,'folded.pillow');
  pillow.scale.set(.23,.078,.18);
  for(const dx of [-.21,.21])
    box(g,dx,.106,0,.026,.012,.56,silver,'strap');
  return g;
}
export function makeDrillKit():THREE.Group {
  const g=new THREE.Group();g.name='quest.drill-bit-case';
  box(g,0,0,0,.38,.17,.28,iron,'hard.case');
  box(g,0,.10,0,.37,.045,.276,red,'lid');
  box(g,0,.133,.005,.30,.018,.18,silver,'lid.ridge');
  for(const dx of [-.15,.15])box(g,dx,.015,.146,.042,.052,.028,warning,'latch');
  for(let i=0;i<5;i++){
    const bit=cyl(g,-.105+i*.052,.12,-.028,.012,.12,silver,'drill.bit');
    bit.rotation.z=Math.PI/2;
  }
  box(g,0,-.055,.15,.12,.07,.06,iron,'carry.handle');
  return g;
}
export function makeSandals():THREE.Group {
  const g=new THREE.Group();g.name='quest.pair-of-sandals';
  for(const side of [-1,1]){
    const sole=shape(g,new THREE.SphereGeometry(1,14,10),yellow,side*.092,.04,side===1?.025:0,'rubber.sole');
    sole.scale.set(.072,.028,.157);
    sole.rotation.y=side*.12;
    const strap=shape(g,new THREE.TorusGeometry(.054,.018,6,18,Math.PI),yellow,
      side*.092,.08,-.017,'woven.strap');
    strap.rotation.x=Math.PI/2;
  }
  return g;
}
export function makeAsthmaInhaler():THREE.Group {
  const g=new THREE.Group();g.name='quest.asthma-inhaler';
  cyl(g,0,0,0,.065,.20,plastic,'inhaler.body');
  cyl(g,0,.12,0,.074,.055,white,'mouthpiece');
  cyl(g,0,.16,0,.05,.046,blue,'mouthpiece.cap');
  box(g,0,0,.066,.087,.075,.008,white,'medical.label');
  box(g,0,0,.071,.038,.04,.009,red,'medical.warning.mark');
  return g;
}
export function makeSecurityCameraHousing():THREE.Group {
  const g=new THREE.Group();g.name='security.camera-assembly';
  const bracket=cyl(g,0,.12,.12,.075,.30,iron,'camera.wall.bracket');
  bracket.rotation.z=Math.PI/2;
  box(g,0,0,0,.32,.19,.41,white,'camera.housing');
  box(g,0,.108,-.03,.36,.043,.49,iron,'camera.sunshield');
  cyl(g,0,-.006,.22,.074,.055,blue,'camera.lens').rotation.x=Math.PI/2;
  cyl(g,0,-.006,.252,.036,.014,iron,'camera.aperture').rotation.x=Math.PI/2;
  const led=shape(g,new THREE.SphereGeometry(.021,10,7),red,.11,-.05,.223,'camera.indicator');
  led.material=new THREE.MeshBasicMaterial({color:0xe2473c});
  return g;
}
