import * as THREE from 'three';
import type { PropDef } from './layout';

/** High-detail stylized replacements for existing PROPS only.
 * Geometry stays within the registered footprint at ground level.
 * These visuals add no new colliders or NPC navigation blockers.
 */
const material = (color: number, metalness = 0.1, roughness = 0.7, emissive = 0) =>
  new THREE.MeshStandardMaterial({ color, metalness, roughness, emissive, emissiveIntensity: emissive ? 0.45 : 0 });
const steel = material(0x344657, .75, .37);
const darkSteel = material(0x182a34, .76, .41);
const brushed = material(0x82939d, .86, .3);
const dark = material(0x17252f, .15, .8);
const wood = material(0x885734, .05, .72);
const woodLight = material(0xb98954, .02, .7);
const warning = material(0xe4a142, .15, .45);
const glass = material(0x366b80, .28, .24);
const amberGlass = material(0xfad78d, .12, .36, 0xe5a951);
const concrete = material(0x71797e, .05, .85);
const red = material(0xc6533b, .2, .55);
const white = material(0xe2e8e2, .1, .7);
const blue = material(0x457eaa, .3, .55);

function box(g: THREE.Group, name: string, x: number, y: number, z: number,
  w: number, h: number, d: number, mat: THREE.Material): THREE.Mesh {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat);
  mesh.name=name;mesh.position.set(x,y,z);mesh.castShadow=true;mesh.receiveShadow=true;
  g.add(mesh);return mesh;
}
function cylinder(g: THREE.Group, name: string, x: number, y: number, z: number,
  radius: number, height: number, mat: THREE.Material, sides=12): THREE.Mesh {
  const mesh=new THREE.Mesh(new THREE.CylinderGeometry(radius,radius,height,sides),mat);
  mesh.name=name;mesh.position.set(x,y,z);mesh.castShadow=true;mesh.receiveShadow=true;g.add(mesh);return mesh;
}
function brace(g: THREE.Group, name: string, a: THREE.Vector3, b: THREE.Vector3,
  radius: number, mat: THREE.Material): void {
  const delta=b.clone().sub(a);
  const mesh=cylinder(g,name,...([0,0,0] as [number,number,number]),radius,delta.length(),mat,8);
  mesh.position.copy(a).add(b).multiplyScalar(.5);
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),delta.normalize());
}
const v=(x:number,y:number,z:number)=>new THREE.Vector3(x,y,z);

function guardTower(p: PropDef): THREE.Group {
  const g=new THREE.Group();g.name='watchtower.steel.cabin';
  // Ground footprint <= 2.4m; cabin overhang is at >4m, above gameplay.
  const x=p.w*.39,z=p.d*.39;
  box(g,'foundation',0,.17,0,p.w,.34,p.d,concrete);
  for (const sx of [-1,1]) for (const sz of [-1,1]) {
    const xx=sx*x,zz=sz*z;
    cylinder(g,'tower.pillar',xx,2.15,zz,.07,3.9,steel,10);
    brace(g,'tower.crossBrace',v(xx,.47,zz),v(-xx,2.9,zz),.035,brushed);
    brace(g,'tower.crossBrace',v(xx,2.3,zz),v(xx,3.8,-zz),.027,darkSteel);
  }
  for(const y of [1.12,2.45,3.82]) {
    box(g,'crossbeam.x',0,y,-z,p.w*.8,.09,.10,steel);
    box(g,'crossbeam.x',0,y,z,p.w*.8,.09,.10,steel);
    box(g,'crossbeam.z',-x,y,0,.10,.09,p.d*.8,steel);
    box(g,'crossbeam.z',x,y,0,.10,.09,p.d*.8,steel);
  }
  box(g,'upper.platform',0,4.08,0,p.w*1.03,.15,p.d*1.03,darkSteel);
  box(g,'cabin.base',0,4.52,0,p.w*.88,.78,p.d*.88,steel);
  for(const xx of [-.92,.92]) for(const zz of [-.92,.92])
    cylinder(g,'cabin.corner',xx,5.4,zz,.05,1.1,brushed,10);
  for(const xx of [-.93,.93]) for(const zz of [-.48,.48])
    box(g,'cabin.glass',xx,5.4,zz,.045,.76,.70,glass);
  for(const zz of [-.93,.93]) for(const xx of [-.48,.48])
    box(g,'cabin.glass',xx,5.4,zz,.70,.76,.045,glass);
  box(g,'cabin.roof',0,6.04,0,p.w,.22,p.d,darkSteel);
  box(g,'cabin.roof.amberEdge',0,5.91,-p.d*.5,p.w*.95,.055,.07,warning);
  for (let i=0;i<5;i++) {
    const y=.55+i*.62;
    box(g,'ladder.step',0,y,z+.16,.76,.045,.08,brushed);
  }
  for(const xx of [-.4,.4])
    cylinder(g,'ladder.rail',xx,2.04,z+.17,.033,3.85,brushed,8);
  cylinder(g,'roof.beacon',0,6.26,0,.09,.21,red,12);
  // Searchlight: light-colored visible lens; no expensive dynamic shadow.
  const lens=cylinder(g,'searchlight.lens',.86,6.04,-.86,.17,.07,amberGlass,18);
  lens.rotation.x=Math.PI/2.45;
  lens.rotation.z=.5;
  return g;
}

function workbench(p: PropDef): THREE.Group {
  const g=new THREE.Group();g.name='workshop.assembly-bench';
  const w=p.w,d=p.d;
  for(const x of [-w*.42,w*.42])for(const z of [-d*.37,d*.37])
    box(g,'bench.leg',x,.44,z,.095,.88,.095,steel);
  box(g,'bench.shelf',0,.26,0,w*.83,.065,d*.78,darkSteel);
  box(g,'bench.tabletop',0,.92,0,w,.105,d,woodLight);
  box(g,'bench.metalrim',0,.98,-d*.49,w,.035,.035,brushed);
  box(g,'bench.backwall',0,1.23,-d*.44,w*.94,.53,.055,darkSteel);
  for(let i=0;i<9;i++){
    const x=-w*.41+i*w*.102;
    cylinder(g,'pegboard.hole',x,1.31,-d*.398,.021,.015,brushed,8).rotation.x=Math.PI/2;
  }
  const vise=box(g,'bench.vise',w*.2,1.07,0,.36,.17,.27,steel);
  vise.rotation.y=.08;
  box(g,'vise.jaw',w*.11,1.2,0,.055,.12,.29,brushed);
  box(g,'electric.components.tray',-w*.29,1.045,d*.18,.36,.11,.31,warning);
  for(let i=0;i<4;i++) {
    const xx=-w*.29+(i%2)*.12,zz=d*.12+Math.floor(i/2)*.12;
    cylinder(g,'insulated.component',xx,1.12,zz,.035,.065,i%2?red:blue,10);
  }
  for(let i=0;i<3;i++){
    const tool=cylinder(g,'repair.tool',w*.05+i*.09,1.04,-d*.13,.018,.22,i===0?brushed:darkSteel,8);
    tool.rotation.z=Math.PI/2;
  }
  return g;
}
function storageRack(p:PropDef): THREE.Group {
  const g=new THREE.Group();g.name='storage.rack';
  const w=p.w,d=p.d;
  const x=w*.4,z=d*.46;
  for(const xx of [-x,x])for(const zz of [-z,z])
    box(g,'rack.frame',xx,1.02,zz,.065,2.04,.065,steel);
  for(const y of [.23,.68,1.13,1.58,1.97]) {
    box(g,'rack.shelf',0,y,0,w*.94,.052,d*.96,brushed);
  }
  const count=Math.max(1,Math.floor(d/.62));
  for(let i=0;i<count;i++){
    const zz=-d*.45+(i+.5)*d/count;
    const mat=i%3===0?wood:i%3===1?warning:dark;
    box(g,'rack.supplies',0,.84,zz,w*.64,.26,Math.min(d/count*.72,.53),mat);
    if(i%2===0)box(g,'rack.toolcase',0,1.34,zz,w*.48,.18,Math.min(d/count*.6,.45),steel);
  }
  return g;
}
function serveCounter(p:PropDef):THREE.Group {
  const g=new THREE.Group();g.name=p.kind==='canteen'?'canteen.food-counter':'service.counter';
  const w=p.w,d=p.d;
  box(g,'counter.body',0,.46,0,w*.985,.91,d*.94,p.kind==='canteen'?wood:steel);
  box(g,'counter.top',0,.95,0,w,.10,d,brushed);
  for(let i=0;i<Math.max(2,Math.floor(w/1.15));i++){
    const count=Math.max(2,Math.floor(w/1.15));
    const xx=-w*.44+i*(w*.88)/Math.max(1,count-1);
    box(g,'counter.front.panel',xx,.43,d*.475,Math.min(.73,w/count*.85),.56,.018,p.kind==='canteen'?woodLight:darkSteel);
  }
  if(p.kind==='canteen'){
    for(let i=0;i<3;i++){
      const x=(i-1)*Math.min(.7,w*.2);
      cylinder(g,'canteen.bowl',x,1.06,-d*.09,.17,.07,white,18);
      cylinder(g,'canteen.steamer',x,1.005,-d*.09,.18,.035,steel,18);
    }
  }
  if (p.kind === 'counter' && p.x < -20) {
    // Visiting booth: transparent glass and steel mullions sit directly ABOVE
    // the registered counter collision. No new collider / NPC path is needed.
    g.name = 'visitation.glass-booth';
    const glassMat = new THREE.MeshStandardMaterial({
      color: 0xdbeafe, metalness: 0.0, roughness: 0.1,
      transparent: true, opacity: 0.25, depthWrite: false, side: THREE.DoubleSide,
    });
    const pane = new THREE.Mesh(new THREE.PlaneGeometry(w * .93, 1.36), glassMat);
    pane.name = 'visitation.shatterproof-glass';
    pane.position.set(0, 1.75, 0);
    pane.castShadow = false;
    pane.receiveShadow = false;
    g.add(pane);
    for (const x of [-w * .47, 0, w * .47]) {
      box(g, 'visitation.window.frame', x, 1.75, 0, .055, 1.50, .065, darkSteel);
    }
    box(g, 'visitation.window.top', 0, 2.5, 0, w * .97, .07, .08, darkSteel);
    box(g, 'visitation.speaker.tray', 0, 1.085, 0, .55, .07, d * .76, brushed);
  }
  return g;
}
function parkBench(p:PropDef):THREE.Group {
  const g=new THREE.Group();g.name='bench.slat-seat';const w=p.w;
  for(const x of [-w*.41,w*.41]){
    box(g,'bench.leg',x,.24,0,.13,.47,.4,darkSteel);
    box(g,'bench.back.post',x,.66,-p.d*.43,.085,.68,.08,darkSteel);
  }
  for(let i=0;i<4;i++)
    box(g,'bench.seat.slat',0,.48,-p.d*.35+i*p.d*.23,w,.055,p.d*.18,woodLight);
  for(let i=0;i<3;i++)
    box(g,'bench.back.slat',0,.68+i*.11,-p.d*.48,w,.075,.06,wood);
  return g;
}
function woodenCrate(p:PropDef):THREE.Group {
  const g=new THREE.Group();g.name='warehouse.crate';
  box(g,'crate.body',0,p.d*.28,0,p.w*.9,p.d*.56,p.d*.9,wood);
  for(const xx of [-p.w*.38,p.w*.38])
    box(g,'crate.strap',xx,p.d*.29,p.d*.455,.07,p.d*.5,.04,darkSteel);
  for(const zz of [-p.d*.38,p.d*.38])
    box(g,'crate.rail',0,p.d*.565,zz,p.w*.96,.065,.08,woodLight);
  box(g,'crate.label',0,p.d*.28,p.d*.461,Math.min(.5,p.w*.7),.15,.02,warning);
  return g;
}
function workshopPress(p:PropDef):THREE.Group {
  const g=new THREE.Group();g.name='hydraulic.press';
  box(g,'machine.base',0,.29,0,p.w*.8,.56,p.d*.83,darkSteel);
  box(g,'machine.bed',0,.71,0,p.w*.68,.12,p.d*.63,brushed);
  for(const xx of [-p.w*.34,p.w*.34])
    box(g,'press.post',xx,1.42,0,.11,1.33,.16,steel);
  box(g,'machine.crossbar',0,2.09,0,p.w*.85,.23,p.d*.28,steel);
  cylinder(g,'hydraulic.piston',0,1.65,0,.11,.72,brushed,16);
  box(g,'press.head',0,1.16,0,p.w*.46,.2,p.d*.35,steel);
  box(g,'press.hazard',0,1.9,p.d*.15,p.w*.5,.16,.025,warning);
  return g;
}
function washingBasin(p:PropDef):THREE.Group {
  const g=new THREE.Group();g.name='wash.trough';
  box(g,'basin.pedestal',0,.33,0,p.w*.83,.66,p.d*.91,concrete);
  box(g,'basin.rim',0,.75,0,p.w,.13,p.d,white);
  box(g,'basin.water',0,.81,0,p.w*.82,.03,p.d*.82,glass);
  for(let i=0;i<Math.max(2,Math.floor(p.d/.72));i++){
    const zz=-p.d*.38+i*p.d*.76/Math.max(1,Math.floor(p.d/.72)-1);
    cylinder(g,'basin.faucet',-p.w*.35,1.03,zz,.035,.31,brushed,10);
  }
  return g;
}
function yardTank(p:PropDef):THREE.Group {
  const g=new THREE.Group();g.name='yard.water-tank';
  const radius=Math.min(p.w,p.d)*.40;
  cylinder(g,'tank.concrete.pad',0,.14,0,radius*1.15,.28,concrete,16);
  cylinder(g,'tank.steel.body',0,1.25,0,radius,2.1,steel,20);
  for(const y of [.37,.72,1.23,1.75,2.13])
    cylinder(g,'tank.rib',0,y,0,radius*1.045,.065,brushed,20);
  cylinder(g,'tank.top',0,2.34,0,radius*1.05,.16,darkSteel,20);
  cylinder(g,'tank.hatch',0,2.46,0,radius*.36,.12,warning,12);
  for(let i=0;i<5;i++) {
    const y=.50+i*.38;
    box(g,'tank.ladder.rung',0,y,-radius-.1,.61,.042,.065,brushed);
  }
  for(const x of [-.31,.31])
    box(g,'tank.ladder.rail',x,1.17,-radius-.11,.05,1.68,.065,steel);
  box(g,'tank.warning.plate',0,1.16,-radius-.03,radius*.92,.28,.045,warning);
  return g;
}

export function makeDetailedProp(p:PropDef): THREE.Group | null {
  switch(p.kind){
    case 'tower':return guardTower(p);
    case 'workbench':return workbench(p);
    case 'shelf':return storageRack(p);
    case 'counter':
    case 'canteen':return serveCounter(p);
    case 'bench':return parkBench(p);
    case 'crate':return woodenCrate(p);
    case 'press':return workshopPress(p);
    case 'basin':return washingBasin(p);
    case 'tank':return yardTank(p);
    default:return null;
  }
}
