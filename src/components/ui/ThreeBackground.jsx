import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

function AnimatedSphere({ color, size, position, distort, speed }) {
  const sphereRef = useRef();
  
  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.2;
      sphereRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Sphere ref={sphereRef} args={[size, 64, 64]} position={position}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={distort}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
}

export default function ThreeBackground() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full opacity-60">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#D414FF" />
        
        {/* Primary floating spheres based on image */}
        <AnimatedSphere color="#D414FF" size={0.6} position={[2, 1, -2]} distort={0.4} speed={1.5} />
        <AnimatedSphere color="#4A00E0" size={0.8} position={[-2, -1, -3]} distort={0.3} speed={1} />
        <AnimatedSphere color="#E14DFF" size={0.4} position={[1, -1.5, -1]} distort={0.5} speed={2} />
      </Canvas>
    </div>
  );
}
