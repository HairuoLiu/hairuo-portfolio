import { Suspense, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CameraShelf from "./CameraShelf";
import DustParticles from "./DustParticles";
import * as THREE from "three";

interface Scene3DProps {
  onCameraClick: (cameraId: string) => void;
  loaded: boolean;
}

/** Fallback shown inside Canvas while assets load */
function SceneFallback(): JSX.Element | null {
  return null;
}

export default function Scene3D({ onCameraClick, loaded }: Scene3DProps): JSX.Element {
  const handleCreated = useCallback(
    (state: { gl: THREE.WebGLRenderer }) => {
      state.gl.toneMapping = THREE.ACESFilmicToneMapping;
      state.gl.toneMappingExposure = 1.0;
    },
    []
  );

  return (
    <div
      className="w-full h-screen"
      style={{ opacity: loaded ? 1 : 0, transition: "opacity 1s ease" }}
    >
      <Canvas
        camera={{ position: [0, 0.5, 9], fov: 40 }}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
        }}
        onCreated={handleCreated}
        style={{ background: "linear-gradient(180deg, #0d0d0d 0%, #0a0a0a 100%)" }}
      >
        {/* Fog for atmospheric depth */}
        <fog attach="fog" args={["#0a0a0a", 8, 28]} />

        {/* Ambient fill */}
        <ambientLight intensity={0.12} color="#c8c8d0" />

        {/* Warm key light from upper right */}
        <directionalLight
          position={[6, 8, 4]}
          intensity={0.9}
          color="#fff5e6"
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        {/* Cool fill light from left */}
        <directionalLight position={[-4, 5, -3]} intensity={0.25} color="#b0c4ff" />

        {/* Top spotlight on center */}
        <spotLight
          position={[0, 6, 2]}
          angle={0.6}
          penumbra={0.8}
          intensity={1.2}
          color="#fff5e6"
          castShadow
        />

        {/* Accent red rim light */}
        <pointLight position={[-6, 2, 4]} intensity={0.15} color="#e2231a" />
        <pointLight position={[6, 2, 4]} intensity={0.08} color="#e2231a" />

        <Suspense fallback={<SceneFallback />}>
          <CameraShelf onCameraClick={onCameraClick} />
          <DustParticles />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3.5}
          maxPolarAngle={Math.PI / 2.1}
          autoRotate
          autoRotateSpeed={0.25}
          maxAzimuthAngle={Math.PI / 5}
          minAzimuthAngle={-Math.PI / 5}
          target={[0, 0, 0]}
        />
      </Canvas>
    </div>
  );
}
