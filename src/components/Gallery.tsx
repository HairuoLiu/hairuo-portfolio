import { useState, useCallback } from "react";
import { Photo } from "../data/photos";
import PhotoCard from "./PhotoCard";
import Lightbox from "./Lightbox";

interface GalleryProps {
  photos: Photo[];
}

export default function Gallery({ photos }: GalleryProps): JSX.Element {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handlePhotoClick = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const handleCloseLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const handlePrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : photos.length - 1));
  }, [lightboxIndex, photos.length]);

  const handleNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev !== null && prev < photos.length - 1 ? prev + 1 : 0
    );
  }, [lightboxIndex, photos.length]);

  return (
    <>
      <div className="masonry-grid px-4 md:px-8 lg:px-16">
        {photos.map((photo, index) => (
          <div key={photo.id} className="masonry-item">
            <PhotoCard
              photo={photo}
              onClick={() => handlePhotoClick(index)}
            />
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          photos={photos}
          currentIndex={lightboxIndex}
          onClose={handleCloseLightbox}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </>
  );
}
