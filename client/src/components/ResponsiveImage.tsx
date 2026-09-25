import type { ImgHTMLAttributes } from "react";

// Output of an `?rw=...&responsive` image import (vite-imagetools `as=picture`):
// AVIF and WebP srcsets at the requested widths, plus a fallback <img>.
export interface Picture {
  sources: Record<string, string>;
  img: { src: string; w: number; h: number };
}

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "srcSet" | "width" | "height"> & {
  picture: Picture;
  sizes: string;
};

const FORMAT_ORDER = ["avif", "webp"];

// <picture> uses `display: contents`, so the <img> sizes and positions exactly as a bare <img> would.
export default function ResponsiveImage({ picture, sizes, loading = "lazy", ...img }: Props) {
  const sources = Object.entries(picture.sources).sort(
    ([a], [b]) => FORMAT_ORDER.indexOf(a) - FORMAT_ORDER.indexOf(b),
  );
  return (
    <picture className="contents">
      {sources.map(([format, srcSet]) => (
        <source key={format} type={`image/${format}`} srcSet={srcSet} sizes={sizes} />
      ))}
      <img
        src={picture.img.src}
        width={picture.img.w}
        height={picture.img.h}
        loading={loading}
        decoding="async"
        {...img}
      />
    </picture>
  );
}
