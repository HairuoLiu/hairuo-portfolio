import { useState, useMemo, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { cameras } from "../data/cameras";
import { photos, getLensesForCamera, getYearRangeForCamera } from "../data/photos";
import CameraInfo from "../components/CameraInfo";
import FilterBar, { FilterState } from "../components/FilterBar";
import Gallery from "../components/Gallery";
import { initAntiDownload } from "../utils/antiDownload";

export default function CameraDetail(): JSX.Element {
  const { cameraId } = useParams<{ cameraId: string }>();
  const navigate = useNavigate();

  const camera = useMemo(
    () => cameras.find((c) => c.id === cameraId),
    [cameraId]
  );

  const cameraPhotos = useMemo(
    () => photos.filter((p) => p.cameraId === cameraId),
    [cameraId]
  );

  const availableLenses = useMemo(
    () => getLensesForCamera(cameraId || ""),
    [cameraId]
  );

  const availableYears = useMemo(() => {
    const [minYear, maxYear] = getYearRangeForCamera(cameraId || "");
    const years: number[] = [];
    for (let y = minYear; y <= maxYear; y++) {
      years.push(y);
    }
    return years;
  }, [cameraId]);

  const [filters, setFilters] = useState<FilterState>({
    lens: "",
    style: "",
    year: "",
  });

  /** Reset filters when camera changes */
  useEffect(() => {
    setFilters({ lens: "", style: "", year: "" });
  }, [cameraId]);

  /** Initialize anti-download protection */
  useEffect(() => {
    initAntiDownload();
  }, []);

  /** Filter photos */
  const filteredPhotos = useMemo(() => {
    return cameraPhotos.filter((photo) => {
      if (filters.style && photo.style !== filters.style) return false;
      if (filters.lens && photo.lens !== filters.lens) return false;
      if (filters.year && !photo.date.startsWith(filters.year)) return false;
      return true;
    });
  }, [cameraPhotos, filters]);

  const handleFilterChange = useCallback((newFilters: FilterState) => {
    setFilters(newFilters);
  }, []);

  /** Camera not found */
  if (!camera) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex flex-col items-center justify-center gap-6"
      >
        <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center">
          <span className="text-primary text-2xl">!</span>
        </div>
        <h2 className="font-display text-2xl text-white">相机未找到</h2>
        <p className="text-white/40">该相机不在展架上</p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 rounded-lg bg-primary text-white hover:bg-primary/80 transition-colors"
        >
          返回首页
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-16"
    >
      {/* Camera Info Card */}
      <CameraInfo camera={camera} />

      {/* Divider */}
      <div className="mx-4 md:mx-8 lg:mx-16 border-t border-dark-500" />

      {/* Filter Bar */}
      <FilterBar
        filters={filters}
        onChange={handleFilterChange}
        availableLenses={availableLenses}
        availableYears={availableYears}
      />

      {/* Photo count */}
      <div className="px-4 md:px-8 lg:px-16 pb-4">
        <p className="text-sm text-white/30">
          {filteredPhotos.length === cameraPhotos.length
            ? `共 ${cameraPhotos.length} 张照片`
            : `筛选结果：${filteredPhotos.length} / ${cameraPhotos.length} 张`}
        </p>
      </div>

      {/* Gallery */}
      {filteredPhotos.length > 0 ? (
        <Gallery photos={filteredPhotos} />
      ) : (
        <div className="flex flex-col items-center justify-center py-20">
          <p className="text-white/30 text-lg mb-4">没有匹配的照片</p>
          <button
            onClick={() => setFilters({ lens: "", style: "", year: "" })}
            className="text-sm text-primary hover:text-primary/80 transition-colors"
          >
            清除筛选
          </button>
        </div>
      )}

      {/* Bottom spacer */}
      <div className="h-20" />
    </motion.div>
  );
}
