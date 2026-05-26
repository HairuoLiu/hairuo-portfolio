import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Photo } from "../data/photos";
import { getProtectedImageProps } from "../utils/antiDownload";

interface PhotoCardProps {
  photo: Photo;
  onClick: () => void;
}

export default function PhotoCard({ photo, onClick }: PhotoCardProps): JSX.Element {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = useCallback(() => setLoaded(true), []);

  const imageProps = getProtectedImageProps(photo.thumbnail);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: loaded ? 1 : 0, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-lg cursor-pointer bg-dark-700"
      onClick={onClick}
    >
      {/* Aspect ratio container — random height for masonry effect */}
      <div
        style={{
          paddingBottom: `${280 + (parseInt(photo.id.slice(-2), 10) % 5) * 40}px`,
        }}
        className="relative"
      >
        {/* Protected image */}
        <div
          {...imageProps}
          onLoad={handleLoad as React.EventHandler<React.SyntheticEvent>}
          className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Transparent overlay for anti-download */}
        <div className="absolute inset-0 z-10" />

        {/* Hover overlay */}
        <div className="absolute inset-0 z-20 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end">
          <div className="w-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-sm font-medium text-white text-shadow-soft truncate">
              {photo.title}
            </p>
            <div className="flex items-center gap-2 mt-1">
              {photo.lens && (
                <span className="text-xs text-white/60">{photo.lens}</span>
              )}
              <span className="text-xs px-1.5 py-0.5 rounded bg-white/10 text-white/70">
                {photo.style === "bw" ? "黑白" : "彩色"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
