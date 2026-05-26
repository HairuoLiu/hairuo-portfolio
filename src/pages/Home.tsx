import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Scene3D from "../components/Scene3D";
import LoadingScreen from "../components/LoadingScreen";
import { initAntiDownload } from "../utils/antiDownload";

export default function Home(): JSX.Element {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);
  const [showLoading, setShowLoading] = useState(true);

  /** Initialize anti-download protection */
  useEffect(() => {
    initAntiDownload();
  }, []);

  /** Simulate loading / wait for scene to be ready */
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
      setLoaded(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleCameraClick = useCallback(
    (cameraId: string) => {
      setLoaded(false);
      setTimeout(() => {
        navigate(`/camera/${cameraId}`);
      }, 600);
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

      {/* 3D Scene */}
      <Scene3D onCameraClick={handleCameraClick} loaded={loaded} />

      {/* Bottom hint */}
      <div
        className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-2 pointer-events-none"
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 1s ease 1s" }}
      >
        <p className="text-xs text-white/30 tracking-widest uppercase">
          拖拽旋转 · 点击相机进入画廊
        </p>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-white/30" />
        </motion.div>
      </div>
    </motion.div>
  );
}
