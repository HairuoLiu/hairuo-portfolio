import { useRef, useState, useEffect, useCallback } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, RoundedBox } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import * as THREE from "three";
import gsap from "gsap";
import { Camera } from "../data/cameras";
import { brandColors } from "../data/photos";

interface CameraModelProps {
  camera: Camera;
  position: [number, number, number];
  onClick: () => void;
  index: number;
}

const AnimatedGroup = animated.group;

export default function CameraModel({
  camera,
  position,
  onClick,
  index,
}: CameraModelProps): JSX.Element {
  const groupRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const [texture, setTexture] = useState<THREE.Texture | null>(null);
  const [entryComplete, setEntryComplete] = useState(false);

  const brandColor = brandColors[camera.id] || "#e2231a";

  /** Load camera image texture */
  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(
      camera.coverImage,
      (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace;
        tex.minFilter = THREE.LinearFilter;
        tex.magFilter = THREE.LinearFilter;
        setTexture(tex);
      },
      undefined,
      () => {
        // Silently fail — gradient fallback will be used
      }
    );
    return () => {
      if (texture) texture.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [camera.coverImage]);

  /** GSAP entrance animation */
  useEffect(() => {
    if (!groupRef.current) return;
    const startPos = {
      x: position[0] + (index % 2 === 0 ? -8 : 8),
      y: position[1] + 6,
      z: position[2] - 8,
    };
    groupRef.current.position.set(startPos.x, startPos.y, startPos.z);
    groupRef.current.rotation.set(0, index % 2 === 0 ? -0.5 : 0.5, 0);

    const tl = gsap.timeline({
      delay: index * 0.1 + 0.3,
      onComplete: () => setEntryComplete(true),
    });

    tl.to(groupRef.current.position, {
      x: position[0],
      y: position[1],
      z: position[2],
      duration: 1.4,
      ease: "power3.out",
    }).to(
      groupRef.current.rotation,
      {
        y: 0,
        duration: 1.0,
        ease: "power2.out",
      },
      0
    );

    return () => {
      tl.kill();
    };
  }, [position, index]);

  /** Subtle idle floating after entry */
  useFrame((state) => {
    if (!groupRef.current || !entryComplete || hovered) return;
    const offset = Math.sin(state.clock.elapsedTime * 0.4 + index * 1.3) * 0.03;
    groupRef.current.position.y = position[1] + offset;
  });

  /** Hover spring animation */
  const { scale, hoverY, glowIntensity } = useSpring({
    scale: hovered ? 1.1 : 1.0,
    hoverY: hovered ? 0.2 : 0,
    glowIntensity: hovered ? 0.4 : 0,
    config: { mass: 1.5, tension: 200, friction: 26 },
  });

  /** Cursor style */
  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = "pointer";
    } else {
      document.body.style.cursor = "auto";
    }
    return () => {
      document.body.style.cursor = "auto";
    };
  }, [hovered]);

  const handlePointerOver = useCallback(() => setHovered(true), []);
  const handlePointerOut = useCallback(() => setHovered(false), []);

  /** Create gradient-like fallback material color */
  const fallbackColor = new THREE.Color(brandColor);

  return (
    <group ref={groupRef}>
      <AnimatedGroup
        ref={innerRef}
        scale={scale}
        position-y={hoverY}
      >
        {/* Card frame */}
        <RoundedBox
          args={[2.0, 1.35, 0.07]}
          radius={0.025}
          smoothness={4}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          onClick={onClick}
          castShadow
        >
          <meshStandardMaterial
            color="#151515"
            roughness={0.25}
            metalness={0.5}
          />
        </RoundedBox>

        {/* Camera image or gradient card */}
        <mesh
          position={[0, 0.06, 0.04]}
          onClick={onClick}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
        >
          <planeGeometry args={[1.8, 1.0]} />
          {texture ? (
            <meshStandardMaterial
              map={texture}
              roughness={0.4}
              metalness={0.05}
            />
          ) : (
            <meshStandardMaterial
              color={fallbackColor}
              roughness={0.5}
              metalness={0.1}
              emissive={fallbackColor}
              emissiveIntensity={0.08}
            />
          )}
        </mesh>

        {/* Brand dot — Leica red circle */}
        <mesh position={[0.78, 0.52, 0.041]}>
          <circleGeometry args={[0.045, 32]} />
          <meshBasicMaterial color={brandColor} />
        </mesh>

        {/* Hover glow plane */}
        <animated.mesh position={[0, 0.06, -0.05]}>
          <planeGeometry args={[2.3, 1.6]} />
          <animated.meshBasicMaterial
            color={brandColor}
            transparent
            opacity={glowIntensity}
            side={THREE.DoubleSide}
          />
        </animated.mesh>

        {/* Camera name */}
        <Text
          position={[0, -0.68, 0.04]}
          fontSize={0.1}
          color="#f0f0f0"
          anchorX="center"
          anchorY="middle"
          maxWidth={1.8}
          font="https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZ9hjQ.woff2"
        >
          {camera.name}
        </Text>

        {/* Info text on hover */}
        {hovered && (
          <group>
            <Text
              position={[0, -0.82, 0.04]}
              fontSize={0.065}
              color="#e2231a"
              anchorX="center"
              anchorY="middle"
              maxWidth={1.8}
              font="https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZ9hjQ.woff2"
            >
              {camera.type} · {camera.sensor}
            </Text>
            <Text
              position={[0, -0.94, 0.04]}
              fontSize={0.055}
              color="#888888"
              anchorX="center"
              anchorY="middle"
              maxWidth={1.8}
              font="https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZ9hjQ.woff2"
            >
              {camera.description}
            </Text>
          </group>
        )}
      </AnimatedGroup>
    </group>
  );
}
