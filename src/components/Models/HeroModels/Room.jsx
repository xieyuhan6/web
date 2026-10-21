import { useGLTF } from '@react-three/drei';
export function Room(props) {
 const { scene } = useGLTF('/models/optimized-room.glb');
 return <primitive object={scene} {...props} />;
}
