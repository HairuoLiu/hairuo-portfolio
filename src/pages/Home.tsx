import { useState, useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LoadingScreen from "../components/LoadingScreen";
import { cameras } from "../data/cameras";
import { cameraIcons } from "../data/cameraIcons";
import { initAntiDownload } from "../utils/antiDownload";
import "../styles/home.css";

/** Register GSAP ScrollTrigger plugin */
gsap.registerPlugin(ScrollTrigger);

/** Camera card component for the collection grid/carousel */
function CameraCard({
  camera,
  index,
  onClick,
}: {
  camera: (typeof cameras)[0];
  index: number;
  onClick: () => void;
}): JSX.Element {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    gsap.fromTo(
      card,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: index * 0.08,
        ease: "power3.out",
      }
    );
  }, [index]);

  return (
    <motion.div
      ref={cardRef}
      whileHover={{ scale: 1.03, y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={onClick}
      className="camera-card group cursor-pointer"
    >
      {/* Red accent top border */}
      <div className="camera-card-accent" />

      {/* SVG Icon */}
      <div
        className="camera-card-icon"
        dangerouslySetInnerHTML={{
          __html: cameraIcons[camera.id] || cameraIcons["leica-m9"],
        }}
      />

      {/* Camera info */}
      <div className="camera-card-info">
        <h3 className="font-display text-lg md:text-xl text-white/90 group-hover:text-white transition-colors">
          {camera.name}
        </h3>
        <p className="text-xs md:text-sm text-white/40 mt-1">{camera.sensor}</p>
      </div>

      {/* Photo count badge */}
      <div className="camera-card-badge">
        <span className="text-xs font-body font-medium text-white/70">
          {camera.photoCount}
        </span>
        <svg
          className="w-3 h-3 text-white/40"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
    </motion.div>
  );
}

/** Floating particle component */
function FloatingParticles(): JSX.Element {
  const particles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    delay: Math.random() * 10,
    duration: Math.random() * 15 + 20,
  }));

  return (
    <div className="floating-particles" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={
            {
              "--particle-size": `${p.size}px`,
              "--particle-x": `${p.x}%`,
              "--particle-delay": `${p.delay}s`,
              "--particle-duration": `${p.duration}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

/** Main homepage component — mobile-first film photography portfolio */
export default function Home(): JSX.Element {
  const navigate = useNavigate();
  const [showLoading, setShowLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const accentLineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const mouseGlowRef = useRef<HTMLDivElement>(null);

  /** Initialize anti-download protection */
  useEffect(() => {
    initAntiDownload();
  }, []);

  /** Loading screen timer */
  useEffect(() => {
    const timer = setTimeout(() => setShowLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  /** GSAP: animate red accent line on hero */
  useEffect(() => {
    if (showLoading) return;
    const line = accentLineRef.current;
    if (!line) return;

    gsap.fromTo(
      line,
      { scaleX: 0 },
      { scaleX: 1, duration: 1.2, ease: "power4.inOut", delay: 0.3 }
    );
  }, [showLoading]);

  /** GSAP: scroll-triggered section entrance */
  useEffect(() => {
    if (showLoading) return;
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [showLoading]);

  /** Parallax scroll tracking */
  useEffect(() => {
    const handleScroll = (): void => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /** Mouse-follow light effect (desktop only) */
  useEffect(() => {
    const glow = mouseGlowRef.current;
    if (!glow) return;

    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent): void => {
      const x = e.clientX;
      const y = e.clientY;
      glow.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(226, 35, 26, 0.06), transparent 40%)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleCameraClick = useCallback(
    (cameraId: string) => {
      navigate(`/camera/${cameraId}`);
    },
    [navigate]
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <LoadingScreen visible={showLoading} />

      {/* Mouse-follow glow effect */}
      <div ref={mouseGlowRef} className="mouse-glow" />

      {/* Film grain overlay */}
      <div className="film-grain-overlay" aria-hidden="true" />

      {/* ========== HERO SECTION ========== */}
      <section
        ref={heroRef}
        className="hero-section relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Scanline overlay */}
        <div className="scanlines" aria-hidden="true" />

        {/* Parallax background element */}
        <div
          className="hero-bg-element"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />

        {/* Floating particles */}
        <FloatingParticles />

        {/* Hero content */}
        <div className="relative z-10 text-center px-6">
          {/* Red dot */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
            className="mx-auto mb-6 md:mb-8 w-3 h-3 rounded-full bg-primary"
          />

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight"
          >
            Hence
            <span className="text-primary mx-3 md:mx-4">·</span>
            <span className="text-white/70">Film Photography</span>
          </motion.h1>

          {/* Red accent line */}
          <div
            ref={accentLineRef}
            className="accent-line mx-auto mt-6 md:mt-8"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="mt-6 md:mt-8 text-sm md:text-base text-white/30 tracking-[0.3em] uppercase font-body"
          >
            以相机为线索 · 探索影像世界
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-12 md:mt-16"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="scroll-indicator"
            >
              <div className="scroll-indicator-dot" />
            </motion.div>
            <p className="text-[10px] md:text-xs text-white/20 tracking-[0.2em] uppercase mt-3">
              向下滚动
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========== CAMERA COLLECTION SECTION ========== */}
      <section ref={sectionRef} className="relative py-16 md:py-24 px-4 md:px-8">
        {/* Section header */}
        <div className="max-w-7xl mx-auto mb-10 md:mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[1px] bg-primary" />
            <span className="text-xs text-primary/80 tracking-[0.3em] uppercase font-body">
              Collection
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white/90">
            相机收藏
          </h2>
          <p className="mt-3 text-sm md:text-base text-white/30 max-w-lg">
            每一台相机，都记录着一段独特的光影旅程。点击探索它们眼中的世界。
          </p>
        </div>

        {/* Mobile: horizontal scroll carousel */}
        <div className="camera-carousel md:hidden">
          <div className="camera-carousel-track">
            {cameras.map((camera, i) => (
              <div key={camera.id} className="camera-carousel-item">
                <CameraCard
                  camera={camera}
                  index={i}
                  onClick={() => handleCameraClick(camera.id)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: grid layout */}
        <div className="hidden md:grid max-w-7xl mx-auto grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
          {cameras.map((camera, i) => (
            <CameraCard
              key={camera.id}
              camera={camera}
              index={i}
              onClick={() => handleCameraClick(camera.id)}
            />
          ))}
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="relative py-12 md:py-16 text-center border-t border-white/5">
        <p className="text-xs text-white/20 tracking-widest uppercase font-body">
          © {new Date().getFullYear()} Hence · Film Photography
        </p>
        <div className="mt-3 flex items-center justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary/40" />
          <p className="text-[10px] text-white/15 tracking-wider">
            Crafted with light and shadow
          </p>
        </div>
      </footer>
    </motion.div>
  );
}
