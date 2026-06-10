import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const RandomVerticalParticles = () => {
  const pointsRef = useRef<THREE.Points>(null);
  
  // Aumentamos o número de pontos para gerar densidade na nuvem caótica
  const particleCount = 15000;

  // 1. Geração das coordenadas iniciais com simulação de warm-up (aquecimento)
  const { positions, speeds } = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const speedArr = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const index = i * 3;

      // Dispersão aleatória inicial na largura (X), profundidade (Z) e altura (Y)
      let x = (Math.random() - 0.5) * 28;
      let y = (Math.random() - 0.5) * 55;
      let z = (Math.random() - 0.5) * 28;

      // Velocidades individuais e aleatórias de movimento para cada eixo
      const speedX = (Math.random() - 0.5) * 0.4;
      const speedY = (Math.random() * 0.3) + 0.1;
      const speedZ = (Math.random() - 0.5) * 0.4;

      speedArr[index] = speedX;
      speedArr[index + 1] = speedY;
      speedArr[index + 2] = speedZ;

      // --- SIMULAÇÃO DE WARM-UP ---
      // Simula que o código já rodou por 200 frames antes da página abrir.
      // Isso força as partículas a se espalharem instantaneamente antes do primeiro render.
      const simulatedFrames = 200;
      for (let j = 0; j < simulatedFrames; j++) {
        // Simulação aproximada do comportamento do useFrame
        x += Math.sin(j * 0.016 * speedX + i) * 0.015;
        y += speedY * 0.05;
        if (y > 27.5) y = -27.5;
        z += Math.cos(j * 0.016 * speedZ + i) * 0.015;
      }

      // Define a posição final pós-aquecimento
      pos[index] = x;
      pos[index + 1] = y;
      pos[index + 2] = z;
    }
    return { positions: pos, speeds: speedArr };
  }, [particleCount]);


  // 2. Animação com comportamento físico caótico e aleatório
  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();
    const posArray = pointsRef.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < particleCount; i++) {
      const index = i * 3;

      // Movimento caótico: fazemos os pontos oscilarem de forma totalmente
      // dessincronizada usando números primos e o tempo do relógio
      posArray[index] += Math.sin(time * speeds[index] + i) * 0.015;
      
      // Efeito de partículas subindo e resetando na vertical (comportamento de dados fluido)
      posArray[index + 1] += speeds[index + 1] * 0.05;
      if (posArray[index + 1] > 27.5) {
        posArray[index + 1] = -27.5; // Reseta no fundo ao passar do topo
      }

      posArray[index + 2] += Math.cos(time * speeds[index + 2] + i) * 0.015;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    // Rotação sutil da nuvem inteira baseada no mouse para manter a interatividade 3D
    pointsRef.current.rotation.y = time * 0.03 + state.mouse.x * 0.08;
    pointsRef.current.rotation.x = -state.mouse.y * 0.05 + 0.1;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      {/* Visual idêntico à caixa vermelha: micropontos brilhantes e sobrepostos */}
      <pointsMaterial
        size={0.15}
        color="#F0A028"
        transparent = {true}
        opacity={0.45}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export default RandomVerticalParticles;

