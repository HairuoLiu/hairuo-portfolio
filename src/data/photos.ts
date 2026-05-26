export interface Photo {
  id: string;
  cameraId: string;
  title: string;
  date: string;
  lens?: string;
  aperture?: string;
  shutter?: string;
  iso?: number;
  style: "color" | "bw";
  thumbnail: string;
  fullSize: string;
}

/** Seeded pseudo-random number generator for consistent data */
function seededRandom(seed: number): number {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

const titlePool = [
  "晨光中的街道", "雨后的倒影", "老巷深处", "归途", "静物",
  "雨巷", "光阴", "残影", "浮世", "瞬间",
  "远方", "近处", "光影", "留白", "斑驳",
  "流转", "晨雾", "午后", "黄昏", "夜色",
  "微风", "深巷", "旧梦", "新雨", "故人",
  "窗前", "街角", "站台", "天台", "河畔",
  "旧书店", "咖啡馆", "渡口", "屋檐", "桥上",
  "秋叶", "冬雪", "春芽", "夏蝉", "山间",
  "海边", "城事", "途记", "微距", "剪影",
  "逆光", "侧颜", "背影", "对视", "偶遇",
  "长曝", "星轨", "月色", "云层", "雾中",
];

const leicaMLenses = [
  "Summilux-M 35mm f/1.4 ASPH",
  "Summicron-M 50mm f/2",
  "Noctilux-M 50mm f/0.95",
  "Summilux-M 50mm f/1.4 ASPH",
  "Elmarit-M 28mm f/2.8 ASPH",
  "Apo-Summicron-M 75mm f/2 ASPH",
  "Apo-Summicron-M 90mm f/2 ASPH",
  "Super-Elmar-M 21mm f/3.4 ASPH",
];

const leicaTLLenses = [
  "Summilux-TL 35mm f/1.4 ASPH",
  "Elmarit-TL 18mm f/2.8 ASPH",
  "Summicron-TL 23mm f/2 ASPH",
];

const leicaSLLenses = [
  "Vario-Elmarit-SL 24-90mm f/2.8-4 ASPH",
  "Summilux-SL 50mm f/1.4 ASPH",
  "Apo-Vario-Elmarit-SL 90-280mm f/2.8-4",
];

const sonyLenses = [
  "FE 24-70mm f/2.8 GM II",
  "FE 85mm f/1.4 GM",
  "FE 35mm f/1.4 ZA",
  "FE 50mm f/1.2 GM",
  "FE 24-105mm f/4 G",
  "FE 70-200mm f/2.8 GM II",
];

const fujiLenses = [
  "XF 23mm f/2 R WR",
  "XF 35mm f/2 R WR",
  "XF 56mm f/1.2 R",
  "XF 16mm f/1.4 R WR",
];

const digiluxLenses = [
  "Leica D Vario-Elmar 14-50mm f/2.8-3.5",
  "Leica D Summilux 25mm f/1.4",
];

const lensMap: Record<string, string[]> = {
  "leica-m9": leicaMLenses,
  "leica-m8": leicaMLenses,
  "leica-m240": leicaMLenses,
  "leica-m262": leicaMLenses,
  "leica-q2": ["Summilux 28mm f/1.7 ASPH"],
  "leica-cl": leicaTLLenses,
  "leica-sl": leicaSLLenses,
  "leica-digilux3": digiluxLenses,
  "sony-a7m3": sonyLenses,
  "sony-a7m4": sonyLenses,
  "fujifilm-x100vi": ["XF 23mm f/2 R WR (Integrated)"],
};

const apertures = ["f/1.4", "f/1.7", "f/2", "f/2.8", "f/4", "f/5.6", "f/8", "f/11"];
const shutterSpeeds = ["1/30", "1/60", "1/125", "1/250", "1/500", "1/1000", "1/2000", "1/4000"];
const isoValues = [100, 200, 400, 800, 1600, 3200, 6400];

/** Brand accent colors for 3D scene fallback */
export const brandColors: Record<string, string> = {
  "leica-m9": "#e2231a",
  "leica-m8": "#c41e16",
  "leica-m240": "#b31911",
  "leica-m262": "#d42018",
  "leica-q2": "#e2231a",
  "leica-cl": "#cc1f17",
  "leica-sl": "#a8160f",
  "leica-digilux3": "#d42018",
  "sony-a7m3": "#e8a838",
  "sony-a7m4": "#d4952e",
  "fujifilm-x100vi": "#00a651",
};

function generatePhotosForCamera(
  cameraId: string,
  count: number,
  startSeed: number
): Photo[] {
  const lenses = lensMap[cameraId] || ["Standard 50mm f/1.8"];

  return Array.from({ length: count }, (_, i) => {
    const seed = startSeed + i * 7;
    const r = (offset: number): number => seededRandom(seed + offset);

    const lens = lenses[Math.floor(r(0) * lenses.length)];
    const aperture = apertures[Math.floor(r(1) * apertures.length)];
    const shutter = shutterSpeeds[Math.floor(r(2) * shutterSpeeds.length)];
    const iso = isoValues[Math.floor(r(3) * isoValues.length)];
    const style: "color" | "bw" = r(4) > 0.65 ? "bw" : "color";
    const title = titlePool[Math.floor(r(5) * titlePool.length)];

    const year = 2018 + Math.floor(r(6) * 7);
    const month = 1 + Math.floor(r(7) * 12);
    const day = 1 + Math.floor(r(8) * 28);

    return {
      id: `${cameraId}-photo-${i + 1}`,
      cameraId,
      title: `${title}`,
      date: `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`,
      lens,
      aperture,
      shutter,
      iso,
      style,
      thumbnail: `https://picsum.photos/seed/${cameraId}-${i}/400/300`,
      fullSize: `https://picsum.photos/seed/${cameraId}-${i}/1200/900`,
    };
  });
}

export const photos: Photo[] = [
  ...generatePhotosForCamera("leica-m9", 15, 1000),
  ...generatePhotosForCamera("leica-m8", 14, 2000),
  ...generatePhotosForCamera("leica-m240", 12, 3000),
  ...generatePhotosForCamera("leica-m262", 12, 4000),
  ...generatePhotosForCamera("leica-q2", 10, 5000),
  ...generatePhotosForCamera("leica-cl", 10, 6000),
  ...generatePhotosForCamera("leica-sl", 12, 7000),
  ...generatePhotosForCamera("leica-digilux3", 11, 8000),
  ...generatePhotosForCamera("sony-a7m3", 10, 9000),
  ...generatePhotosForCamera("sony-a7m4", 13, 10000),
  ...generatePhotosForCamera("fujifilm-x100vi", 11, 11000),
];

/** Get all unique lenses used for a given camera */
export function getLensesForCamera(cameraId: string): string[] {
  const cameraPhotos = photos.filter((p) => p.cameraId === cameraId);
  const lensSet = new Set<string>();
  cameraPhotos.forEach((p) => {
    if (p.lens) lensSet.add(p.lens);
  });
  return Array.from(lensSet);
}

/** Get year range for a given camera's photos */
export function getYearRangeForCamera(cameraId: string): [number, number] {
  const cameraPhotos = photos.filter((p) => p.cameraId === cameraId);
  if (cameraPhotos.length === 0) return [2020, 2024];
  const years = cameraPhotos.map((p) => parseInt(p.date.slice(0, 4), 10));
  return [Math.min(...years), Math.max(...years)];
}
