"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";
import { Overlay } from "./components/Overlay";
import { useStore, AreaName } from "./store/useStore";
// Adicionamos 'Text' na importação
import { Stars, Grid, Environment, Text } from "@react-three/drei";

// Dicionário para traduzir os nomes nas placas 3D
const labels: Record<AreaName, string> = {
  health: "SAÚDE",
  work: "TRABALHO",
  finance: "FINANÇAS",
  personal: "PESSOAL",
};

function LifeSphere({
  area,
  position,
}: {
  area: AreaName;
  position: [number, number, number];
}) {
  const meshRef = useRef<Mesh>(null);
  const data = useStore((state) => state[area]);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const rotationSpeed = (data.energy / 100) * 2;
    meshRef.current.rotation.y += delta * (0.2 + rotationSpeed);
    meshRef.current.rotation.x += delta * (0.1 + rotationSpeed * 0.5);
    const size = 0.5 + (data.time / 100) * 1.2;
    meshRef.current.scale.lerp({ x: size, y: size, z: size }, 0.1);
  });

  const getColor = () => {
    if (data.satisfaction < 40) return "#ff4444";
    if (data.satisfaction < 70) return "#ffcc00";
    return "#00cc88";
  };

  return (
    <group position={position}>
      {/* A Esfera */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color={getColor()}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* A Placa de Texto (Flutuando acima da esfera) */}
      <Text
        position={[0, 1.5, 0]}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
        renderOrder={1} // Prioridade na fila de desenho
        material-depthTest={false} // Mágica: "Não verifique se algo está na minha frente"
      >
        {labels[area]}
      </Text>
    </group>
  );
}

export default function Home() {
  return (
    <div className="h-screen w-full bg-slate-950 relative">
      <Overlay />
      <Canvas camera={{ position: [0, 2, 8], fov: 60 }} dpr={[1, 2]}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <Stars
          radius={100}
          depth={50}
          count={1000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        <Grid
          position={[0, -4, 0]}
          args={[10, 10]}
          cellColor="#ffffff"
          sectionColor="#4444ff"
          fadeDistance={10}
          fadeStrength={1}
        />
        <Environment preset="city" blur={0.5} />

        <LifeSphere area="health" position={[-2, 1, 0]} />
        <LifeSphere area="work" position={[2, 1, 0]} />
        <LifeSphere area="finance" position={[-2, -3, 0]} />
        <LifeSphere area="personal" position={[2, -3, 0]} />
      </Canvas>
    </div>
  );
}
