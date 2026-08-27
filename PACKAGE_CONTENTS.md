# Paseo de la Costa · 完整交付包

本项目压缩包包含可重新安装与构建的网站源码、Astro/Cloudflare 配置、最终构建输出、全部项目文档，以及用于该网站的图像文件。依赖目录 `node_modules/` 不包含在压缩包内；请在项目目录中运行 `pnpm install --frozen-lockfile` 以按锁文件恢复依赖。

## 项目图片映射

| 网站托管路径 | 压缩包内原始文件 | 用途 |
| --- | --- | --- |
| `/manus-storage/limay-path-sunset_aebb7ad5.jpg` | `assets/images/limay-path-sunset.jpg` | 河岸故事段落实景图 |
| `/manus-storage/limay-river-autumn_a52f30d2.jpg` | `assets/images/limay-river-autumn.jpg` | 首页河岸主视觉 |
| `/manus-storage/paseo-limay-amenities-map_900f3006.jpg` | `assets/images/paseo-limay-amenities-map.jpg` | 服务设施地图插图 |
| `/manus-storage/paseo-limay-hero-contours_39566ba8.jpg` | `assets/images/paseo-limay-hero-contours.jpg` | 首页地形图背景 |
| `/manus-storage/paseo-limay-route-ribbon_eafe1f9b.jpg` | `assets/images/paseo-limay-route-ribbon.jpg` | 行程规划图形 |
| `/manus-storage/paseo-limay-vertical_f64ac97c.jpg` | `assets/images/paseo-limay-vertical.jpg` | 次级实景纪录照片 |
| `public/favicon.svg` | `project/public/favicon.svg` | 两河汇流网站图标 |

## 额外图像文件

`assets/images/` 同时保留制作阶段的补充图形素材（汇流标记、河流扫描纹理和标志性照片）。`assets/source-reference-photos/` 收录项目调研阶段的原始候选参考照片；它们未被网页直接引用，但包含在交付包中以确保素材不遗漏。

## 在本地重新构建

```bash
pnpm install --frozen-lockfile
pnpm check
pnpm build
```

生产构建使用 `@astrojs/cloudflare` 输出 Cloudflare Worker 兼容产物。可在设置正式域名后配置 `PUBLIC_SITE`，以生成实际 canonical、Open Graph URL 与 sitemap。
