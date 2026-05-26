export interface Camera {
  id: string;
  name: string;
  fullName: string;
  type: string;
  sensor: string;
  year: number;
  description: string;
  tags: string[];
  photoCount: number;
  coverImage: string;
}

export const cameras: Camera[] = [
  {
    id: "leica-m9",
    name: "Leica M9",
    fullName: "Leica M9",
    type: "旁轴数码",
    sensor: "全画幅 CCD 18MP",
    year: 2009,
    description: "经典CCD色彩，数码旁轴的巅峰之作",
    tags: ["旁轴", "CCD", "徕卡经典", "街拍"],
    photoCount: 1427,
    coverImage: "https://picsum.photos/seed/camera-leica-m9/512/340"
  },
  {
    id: "leica-m8",
    name: "Leica M8",
    fullName: "Leica M8",
    type: "旁轴数码",
    sensor: "APS-H CCD 10MP",
    year: 2006,
    description: "徕卡首款数码旁轴，独特的APS-H画幅",
    tags: ["旁轴", "CCD", "复古数码"],
    photoCount: 1423,
    coverImage: "https://picsum.photos/seed/camera-leica-m8/512/340"
  },
  {
    id: "leica-m240",
    name: "Leica M240",
    fullName: "Leica M (Typ 240)",
    type: "旁轴数码",
    sensor: "全画幅 CMOS 24MP",
    year: 2012,
    description: "M系列首台CMOS传感器，兼顾视频功能",
    tags: ["旁轴", "CMOS", "全能"],
    photoCount: 694,
    coverImage: "https://picsum.photos/seed/camera-leica-m240/512/340"
  },
  {
    id: "leica-m262",
    name: "Leica M262",
    fullName: "Leica M (Typ 262)",
    type: "旁轴数码",
    sensor: "全画幅 CMOS 24MP",
    year: 2015,
    description: "M240的轻量版，去掉视频和底盖，纯粹摄影",
    tags: ["旁轴", "CMOS", "轻量", "纯粹"],
    photoCount: 679,
    coverImage: "https://picsum.photos/seed/camera-leica-m262/512/340"
  },
  {
    id: "leica-q2",
    name: "Leica Q2",
    fullName: "Leica Q2",
    type: "固定镜头",
    sensor: "全画幅 CMOS 47MP",
    year: 2019,
    description: "28mm f/1.7固定镜头，极致便携与画质",
    tags: ["固定镜头", "高像素", "街拍利器"],
    photoCount: 28,
    coverImage: "https://picsum.photos/seed/camera-leica-q2/512/340"
  },
  {
    id: "leica-cl",
    name: "Leica CL",
    fullName: "Leica CL",
    type: "无反APSC",
    sensor: "APS-C CMOS 24MP",
    year: 2017,
    description: "现代复古设计，TL卡口便携无反",
    tags: ["无反", "APSC", "便携", "复古"],
    photoCount: 57,
    coverImage: "https://picsum.photos/seed/camera-leica-cl/512/340"
  },
  {
    id: "leica-sl",
    name: "Leica SL",
    fullName: "Leica SL (Typ 601)",
    type: "全画幅无反",
    sensor: "全画幅 CMOS 24MP",
    year: 2015,
    description: "徕卡全画幅无反旗舰，4K视频，极致EVF",
    tags: ["无反", "全画幅", "旗舰", "4K"],
    photoCount: 513,
    coverImage: "https://picsum.photos/seed/camera-leica-sl/512/340"
  },
  {
    id: "leica-digilux3",
    name: "Leica DIGILUX 3",
    fullName: "Leica DIGILUX 3",
    type: "4/3系统",
    sensor: "4/3 CMOS 7.5MP",
    year: 2006,
    description: "徕卡与松下合作的4/3系统相机",
    tags: ["4/3", "复古", "早期数码"],
    photoCount: 180,
    coverImage: "https://picsum.photos/seed/camera-leica-digilux3/512/340"
  },
  {
    id: "sony-a7m3",
    name: "Sony A7M3",
    fullName: "Sony α7 III",
    type: "全画幅无反",
    sensor: "全画幅 CMOS 24MP",
    year: 2018,
    description: "索尼全画幅入门标杆，性价比之王",
    tags: ["无反", "全画幅", "性价比", "视频"],
    photoCount: 6,
    coverImage: "https://picsum.photos/seed/camera-sony-a7m3/512/340"
  },
  {
    id: "sony-a7m4",
    name: "Sony A7M4",
    fullName: "Sony α7 IV",
    type: "全画幅无反",
    sensor: "全画幅 CMOS 33MP",
    year: 2021,
    description: "索尼全画幅新标杆，3300万像素新基准",
    tags: ["无反", "全画幅", "高像素", "全能"],
    photoCount: 425,
    coverImage: "https://picsum.photos/seed/camera-sony-a7m4/512/340"
  },
  {
    id: "fujifilm-x100vi",
    name: "Fujifilm X100VI",
    fullName: "Fujifilm X100VI",
    type: "固定镜头",
    sensor: "APS-C X-Trans CMOS 5 HR 40MP",
    year: 2024,
    description: "富士最新固定镜头旗舰，胶片模拟传奇",
    tags: ["固定镜头", "胶片模拟", "APSC", "复古"],
    photoCount: 41,
    coverImage: "https://picsum.photos/seed/camera-fujifilm-x100vi/512/340"
  }
];
