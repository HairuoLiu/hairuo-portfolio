import { useMemo } from "react";
import CameraModel from "./CameraModel";
import { cameras, Camera } from "../data/cameras";

interface CameraShelfProps {
  onCameraClick: (cameraId: string) => void;
}

/** Single wooden shelf plank with brackets */
function ShelfPlank({ position }: { position: [number, number, number] }): JSX.Element {
  return (
    <group position={position}>
      {/* Main plank */}
      <mesh receiveShadow castShadow>
        <boxGeometry args={[13, 0.1, 1.8]} />
        <meshStandardMaterial
          color="#2a1f1a"
          roughness={0.75}
          metalness={0.05}
        />
      </mesh>
      {/* Front edge highlight */}
      <mesh position={[0, -0.02, 0.91]}>
        <boxGeometry args={[13, 0.06, 0.02]} />
        <meshStandardMaterial color="#3a2f2a" roughness={0.6} metalness={0.1} />
      </mesh>
      {/* Left bracket */}
      <mesh position={[-6.3, -0.8, 0]}>
        <boxGeometry args={[0.06, 1.6, 0.7]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.4} metalness={0.3} />
      </mesh>
      {/* Right bracket */}
      <mesh position={[6.3, -0.8, 0]}>
        <boxGeometry args={[0.06, 1.6, 0.7]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.4} metalness={0.3} />
      </mesh>
    </group>
  );
}

/** Back wall panel */
function BackWall(): JSX.Element {
  return (
    <mesh position={[0, 0.5, -1.0]} receiveShadow>
      <planeGeometry args={[16, 7]} />
      <meshStandardMaterial color="#0e0e0e" roughness={0.95} metalness={0} />
    </mesh>
  );
}

/** Reflective floor */
function Floor(): JSX.Element {
  return (
    <mesh
      position={[0, -3.0, 3]}
      rotation={[-Math.PI / 2, 0, 0]}
      receiveShadow
    >
      <planeGeometry args={[24, 12]} />
      <meshStandardMaterial
        color="#0c0c0c"
        roughness={0.6}
        metalness={0.15}
      />
    </mesh>
  );
}

/** Spotlight for each camera position */
function CameraSpotlight({
  position,
}: {
  position: [number, number, number];
}): JSX.Element {
  return (
    <spotLight
      position={[position[0], position[1] + 2.5, position[2] + 1.5]}
      angle={0.35}
      penumbra={0.7}
      intensity={0.6}
      color="#fff5e6"
      target-position={position}
      castShadow={false}
    />
  );
}

export default function CameraShelf({ onCameraClick }: CameraShelfProps): JSX.Element {
  /** Distribute cameras across 3 shelves */
  const shelfLayout = useMemo(() => {
    const shelves: { y: number; cameras: Camera[] }[] = [
      { y: -1.6, cameras: cameras.slice(0, 4) },
      { y: 0.0, cameras: cameras.slice(4, 8) },
      { y: 1.6, cameras: cameras.slice(8, 11) },
    ];
    return shelves;
  }, []);

  return (
    <group>
      {/* Back wall */}
      <BackWall />
      {/* Floor */}
      <Floor />

      {shelfLayout.map((shelf, shelfIndex) => (
        <group key={`shelf-${shelfIndex}`}>
          {/* Shelf plank */}
          <ShelfPlank position={[0, shelf.y, 0]} />

          {/* Cameras on this shelf */}
          {shelf.cameras.map((camera, camIndex) => {
            const totalCameras = shelf.cameras.length;
            const totalWidth = 11.0;
            const spacing = totalWidth / (totalCameras + 1);
            const x = -totalWidth / 2 + spacing * (camIndex + 1);
            const y = shelf.y + 0.7;
            const globalIndex = shelfIndex * 4 + camIndex;

            return (
              <group key={camera.id}>
                <CameraSpotlight position={[x, y, 0]} />
                <CameraModel
                  camera={camera}
                  position={[x, y, 0]}
                  onClick={() => onCameraClick(camera.id)}
                  index={globalIndex}
                />
              </group>
            );
          })}
        </group>
      ))}
    </group>
  );
}
