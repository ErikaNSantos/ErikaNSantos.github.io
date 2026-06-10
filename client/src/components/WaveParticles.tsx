import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const WaveParticles = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 100; // Number of particles along one axis
  const spacing = 1.5; // Spacing between particles

  // Create grid of particles
  const positions = useMemo(() => {
    const pos = new Float32Array(count * count * 3);
    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
        const x = (i - count / 2) * spacing;
        const z = (j - count / 2) * spacing;
        const index = (i * count + j) * 3;
        pos[index] = x;
        pos[index + 1] = 0;
        pos[index + 2] = z;
      }
    }
    return pos;
  }, [count, spacing]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();
    const posArray = pointsRef.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
        const index = (i * count + j) * 3;
        const x = posArray[index];
        const z = posArray[index + 2];
        
        // Mathematical surface function (sinusoidal waves)
        // y = sin(x/5 + time) * cos(z/5 + time) * amplitude
        const y = Math.sin(x / 8 + time) * Math.cos(z / 8 + time) * 12;
        posArray[index + 1] = y;
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    
    // Subtle rotation based on mouse
    pointsRef.current.rotation.y = state.mouse.x * 0.1;
    pointsRef.current.rotation.x = -state.mouse.y * 0.1 + 0.5; // Tilted for better perspective
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        color="#F0A028"
        transparent
        opacity={0.6}
        sizeAttenuation={true}
      />
    </points>
  );
};

export default WaveParticles;
