import { Camera } from "../data/cameras";

interface CameraInfoProps {
  camera: Camera;
}

export default function CameraInfo({ camera }: CameraInfoProps): JSX.Element {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative accent line */}
      <div className="absolute top-0 left-0 w-1 h-full bg-primary" />

      <div className="px-4 md:px-8 lg:px-16 py-8 md:py-12 pl-8 md:pl-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          {/* Camera identity */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-xs font-medium uppercase tracking-widest text-primary">
                {camera.type}
              </span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-2">
              {camera.fullName}
            </h1>
            <p className="text-white/50 text-lg max-w-xl">
              {camera.description}
            </p>
          </div>

          {/* Specs */}
          <div className="flex flex-col gap-3 min-w-[200px]">
            <div className="flex justify-between items-center border-b border-dark-500 pb-2">
              <span className="text-sm text-white/40">传感器</span>
              <span className="text-sm text-white/80">{camera.sensor}</span>
            </div>
            <div className="flex justify-between items-center border-b border-dark-500 pb-2">
              <span className="text-sm text-white/40">发布年份</span>
              <span className="text-sm text-white/80">{camera.year}</span>
            </div>
            <div className="flex justify-between items-center border-b border-dark-500 pb-2">
              <span className="text-sm text-white/40">照片数量</span>
              <span className="text-sm text-white/80">
                {camera.photoCount.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-6">
          {camera.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs rounded-full border border-dark-400 text-white/50 hover:border-primary hover:text-primary transition-colors cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
