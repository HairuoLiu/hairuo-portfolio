import { useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Photo } from "../data/photos";
import { getProtectedImageProps } from "../utils/antiDownload";

interface LightboxProps {
  photos: Photo[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({
  photos,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps): JSX.Element {
  const photo = photos[currentIndex];

  /** Keyboard navigation */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          onPrev();
          break;
        case "ArrowRight":
          onNext();
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose]
  );

  const imageProps = getProtectedImageProps(photo.fullSize, "contain");

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
        onClick={handleBackdropClick}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Close lightbox"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Previous button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 md:left-8 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Previous photo"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Next button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 md:right-8 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Next photo"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {/* Photo display area */}
        <div className="relative w-full h-full flex items-center justify-center p-16 md:p-20">
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-5xl max-h-full w-full aspect-video"
          >
            {/* Protected full-size image */}
            <div
              {...imageProps}
              className="absolute inset-0 rounded-lg photo-protected"
            />
          </motion.div>
        </div>

        {/* EXIF Info Panel */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-16">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h3 className="font-display text-xl text-white mb-1">
                {photo.title}
              </h3>
              <p className="text-sm text-white/50">{photo.date}</p>
            </div>
            <div className="flex flex-wrap gap-3 text-xs text-white/60">
              {photo.lens && (
                <span className="px-2 py-1 rounded bg-white/10">
                  {photo.lens}
                </span>
              )}
              {photo.aperture && (
                <span className="px-2 py-1 rounded bg-white/10">
                  {photo.aperture}
                </span>
              )}
              {photo.shutter && (
                <span className="px-2 py-1 rounded bg-white/10">
                  {photo.shutter}
                </span>
              )}
              {photo.iso && (
                <span className="px-2 py-1 rounded bg-white/10">
                  ISO {photo.iso}
                </span>
              )}
              <span className="px-2 py-1 rounded bg-primary/30 text-primary">
                {photo.style === "bw" ? "黑白" : "彩色"}
              </span>
            </div>
          </div>

          {/* Photo counter */}
          <div className="max-w-5xl mx-auto mt-3 text-xs text-white/30">
            {currentIndex + 1} / {photos.length}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
