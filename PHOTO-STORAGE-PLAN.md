# Hairuo Photography - 照片存储结构方案

> 日期：2026-05-26
> GitHub 用户：HairuoLiu
> 私有仓库：`hairuo-photos`

---

## 一、核心设计原则

基于对专业摄影网站（Pixologie、PhotographyIcon 等）的研究，采用以下原则：

1. **相机为一级分类**：网站的核心叙事是"用不同相机讲述故事"，一级目录按相机名组织
2. **日期为二级分类**：保持时间线索，符合专业摄影归档惯例（`YYYY-MM-DD-描述`）
3. **三层深度上限**：避免过深嵌套导致导航困难
4. **Web 优化优先**：GitHub 仓库只存 Web 优化版本，RAW 原片保留在本地 Synology

---

## 二、相机分类（纳入范围）

| 相机 | 品牌/类型 | JPG 数量 | 品牌分组 |
|------|----------|---------|---------|
| LEICA M9 | 徕卡旁轴 | 1,427 | leica |
| LEICA M8 | 徕卡旁轴 | 1,423 | leica |
| LEICA M240 | 徕卡旁轴 | 694 | leica |
| LEICA M262 | 徕卡旁轴 | 679 | leica |
| LEICA Q2 | 徕卡固定镜头 | 28 | leica |
| LEICA CL | 徕卡APS-C | 57 | leica |
| LEICA SL | 徕卡全画幅无反 | 513 | leica |
| LEICA DIGILUX 3 | 徕卡4/3 | 180 | leica |
| A7M3 | 索尼全画幅 | 12 | sony |
| A7M4 | 索尼全画幅 | 416 | sony |
| FUJIFILM X100VI | 富士固定镜头 | 41 | fujifilm |
| PHASEONE P40+ | 中画幅 | 0 (仅RAW) | phaseone |

**排除**：IPhoneXsMax（手机）、Canon 9000F Mark II / EPSON V700（扫描仪）、Lunar

---

## 三、仓库目录结构

```
hairuo-photos/                          # 私有仓库
├── README.md                           # 仓库说明 + 使用指南
├── .gitattributes                      # Git LFS 追踪配置
├── metadata/                           # 📋 元数据（JSON 格式）
│   ├── cameras.json                    # 所有相机信息（型号、传感器、年代等）
│   ├── lenses.json                     # 镜头信息
│   └── collections.json                # 精选集/主题集合
│
├── thumbnails/                         # 🖼️ 缩略图（网站加载用）
│   ├── leica-m9/                       # 每个相机一个文件夹
│   │   ├── 2019-04-15-night/           # 日期-简述
│   │   │   ├── LHR00605-thumb.webp     # 400px 长边，WebP 格式
│   │   │   └── ...
│   │   └── ...
│   ├── leica-m8/
│   ├── leica-m240/
│   ├── leica-m262/
│   ├── leica-q2/
│   ├── leica-cl/
│   ├── leica-sl/
│   ├── leica-digilux3/
│   ├── sony-a7m3/
│   ├── sony-a7m4/
│   ├── fujifilm-x100vi/
│   └── phaseone-p40/
│
├── full/                               # 🖼️ 完整展示图（网站展示用）
│   ├── leica-m9/
│   │   ├── 2019-04-15-night/
│   │   │   ├── LHR00605.webp           # 2048px 长边，WebP 格式，~80% 质量
│   │   │   └── ...
│   │   └── ...
│   ├── leica-m8/
│   ├── ...（同 thumbnails 结构）
│   └── phaseone-p40/
│
└── scripts/                            # 🔧 工具脚本
    ├── scan-photos.py                  # 扫描本地照片目录，生成元数据
    ├── optimize.py                     # 批量压缩 + 转换为 WebP
    ├── generate-metadata.py            # 生成 cameras.json / lenses.json
    └── deploy.sh                       # 部署脚本
```

---

## 四、命名规范

### 4.1 相机文件夹命名

| 原始名 | 仓库名 | 说明 |
|--------|--------|------|
| LEICA M9 | leica-m9 | 小写 + 连字符 |
| LEICA M8 | leica-m8 | |
| LEICA M240 | leica-m240 | |
| LEICA M262 | leica-m262 | |
| LEICA Q2 | leica-q2 | |
| LEICA CL | leica-cl | |
| LEICA SL | leica-sl | |
| LEICA DIGILUX 3 | leica-digilux3 | |
| A7M3 | sony-a7m3 | 加品牌前缀避免歧义 |
| A7M4 | sony-a7m4 | |
| FUJIFILM X100VI | fujifilm-x100vi | |
| PHASEONE P40+ | phaseone-p40 | |

### 4.2 日期文件夹命名

格式：`YYYY-MM-DD-简短英文描述`

| 原始名 | 仓库名 |
|--------|--------|
| 2019-04-15 夜景 | 2019-04-15-night |
| 2019-04-18 帕拉奥通 | 2019-04-18-palautonga |
| 20250311 中国城附近小楼 | 2025-03-11-chinatown |
| 20250807 夜间 人像 闪光灯 | 2025-08-07-night-portrait-flash |

### 4.3 图片文件命名

- 保留原始文件名前缀（如 `LHR00605`、`L1006938`）
- 后缀区分版本：
  - `LHR00605-thumb.webp` — 缩略图
  - `LHR00605.webp` — 完整展示图
- 去除中文编辑标记（如 `-编辑`、`-编辑0`），只保留最佳版本

---

## 五、图片优化策略（关键：解决 304 GB → < 2 GB）

### 5.1 双层图片体系

| 层级 | 用途 | 尺寸 | 格式 | 预估单张大小 | 预估总大小 |
|------|------|------|------|-------------|-----------|
| thumbnails | 列表/预览 | 400px 长边 | WebP ~60% | ~15 KB | ~80 MB |
| full | 大图展示 | 2048px 长边 | WebP ~80% | ~200 KB | ~1.1 GB |

### 5.2 筛选规则（减少上传数量）

- ❌ 排除 RAW 文件（.ARW, .DNG, .CR2 等）
- ❌ 排除编辑中间态（如 `-编辑0`、`-编辑1`、`-assets/` 子文件夹）
- ❌ 排除 XMP 侧边文件
- ✅ 仅保留最佳导出版（优先选带 `-编辑` 后缀的主版本，其次选原始 JPG）
- ✅ 去重：同一场景多张连拍只保留 1 张最佳

### 5.3 预估仓库大小

| 项目 | 数量 | 大小 |
|------|------|------|
| thumbnails (5,470 × 15KB) | 5,470 | ~80 MB |
| full (5,470 × 200KB) | 5,470 | ~1.1 GB |
| metadata + scripts | - | ~1 MB |
| **合计** | - | **~1.2 GB** |

> 在 GitHub 免费账户 1 GB LFS + 5 GB 仓库限制内，**推荐使用 Git LFS 管理 full/ 目录下的 WebP 文件**。

---

## 六、元数据结构

### cameras.json 示例

```json
{
  "cameras": [
    {
      "id": "leica-m9",
      "name": "LEICA M9",
      "brand": "Leica",
      "type": "rangefinder",
      "sensor": "CCD 18MP Full-Frame",
      "year": 2009,
      "description": "经典 CCD 传感器，色彩浓郁",
      "coverImage": "full/leica-m9/2019-04-15-night/LHR00605.webp",
      "thumbnailCount": 1427,
      "tags": ["黑白", "街拍", "经典"]
    },
    {
      "id": "leica-m8",
      "name": "LEICA M8",
      "brand": "Leica",
      "type": "rangefinder",
      "sensor": "CCD 10MP APS-H",
      "year": 2006,
      "description": "数码旁轴先驱，独特裁切感",
      "coverImage": "full/leica-m8/...",
      "thumbnailCount": 1423,
      "tags": ["黑白", "胶片感"]
    }
  ]
}
```

### collections.json 示例（跨相机精选集）

```json
{
  "collections": [
    {
      "id": "black-and-white",
      "name": "黑白世界",
      "description": "跨越不同相机的黑白摄影精选",
      "photos": [
        "full/leica-m9/2019-04-15-night/LHR00605.webp",
        "full/leica-m8/..."
      ]
    },
    {
      "id": "street-photography",
      "name": "街头纪实",
      "description": "城市中的瞬间",
      "photos": [...]
    }
  ]
}
```

---

## 七、与 github.io 网站仓库的关系

```
架构设计：

┌─────────────────────┐      ┌──────────────────────────┐
│  hairuo-photos       │      │  HairuoLiu.github.io      │
│  (Private Repo)      │      │  (Public Repo - 网站)      │
│                      │      │                            │
│  - full/*.webp       │ ───→ │  构建时复制 full/ 目录      │
│  - thumbnails/*.webp │ ───→ │  构建时复制 thumbnails/     │
│  - metadata/*.json   │ ───→ │  构建时读取元数据           │
│  - scripts/          │      │  - React 前端代码           │
│                      │      │  - Three.js 3D 场景        │
│  照片源站（私有）     │      │  - GitHub Pages 部署       │
└─────────────────────┘      └──────────────────────────┘

防下载策略：
1. 图片使用 CSS background-image 渲染（非 <img> 标签）
2. 禁用右键菜单（oncontextmenu）
3. 添加透明遮罩层覆盖图片
4. 使用 WebP 格式（部分浏览器不支持直接保存）
5. 图片最大 2048px（非原始分辨率）
6. 不暴露 EXIF 信息和原始文件名
```

---

## 八、待确认事项

1. **PHASEONE P40+**：该相机目前没有 JPG 导出，只有 RAW。是否需要后期导出 JPG 再上传？还是暂时跳过？
2. **编辑版选择**：同一照片有多个版本时（如 `-编辑`、`-编辑0`、`-编辑1`），是否一律选主编辑版？还是需要你手动精选？
3. **去重策略**：连拍/类似照片是保留全部还是每场景只留最佳 1 张？
4. **LFS 预算**：Git LFS 免费额度 1 GB，full/ 目录预估 ~1.1 GB。是否愿意升级到 GitHub Pro（2 GB LFS），或调整 full/ 图片质量以控制在 1 GB 内？
