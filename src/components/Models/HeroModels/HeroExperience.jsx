import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Room } from './Room';
export default function HeroExperience() {
 return <Canvas frameloop="demand" dpr={[1,1.5]} camera={{position:[0,0,15],fov:45}} fallback={<p className="scene-fallback">Your browser does not support the 3D scene.</p>}>
 <ambientLight intensity={1.5}/><directionalLight position={[5,8,5]} intensity={3}/><pointLight position={[-3,3,2]} intensity={15} color="#9d8eff"/>
 <Suspense fallback={null}><group scale={0.85} position={[0,-3.5,0]} rotation={[0,-Math.PI/4,0]}><Room/></group></Suspense>
 <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI/5} maxPolarAngle={Math.PI/2}/>
 </Canvas>;
}
