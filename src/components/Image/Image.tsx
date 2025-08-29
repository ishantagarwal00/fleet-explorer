import { useRef, useState, useEffect } from "react";

const loadedUrls = new Set<string>();

type Props = {
  src: string;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
};

export function Image({ src, alt, className, loading = "lazy" }: Props) {
  const [isLoading, setIsLoading] = useState(() => !loadedUrls.has(src));
  const [currentSrc, setCurrentSrc] = useState(src);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (src !== currentSrc) {
      setCurrentSrc(src);
      setIsLoading(!loadedUrls.has(src));
    }
  }, [src, currentSrc]);

  return (
    <div className={`img-frame ${className ?? ""}`}>
      <div className={`img-skeleton ${isLoading ? "" : "hidden"}`} />
      <img
        ref={imgRef}
        src={currentSrc}
        alt={alt}
        loading={loading}
        onLoad={() => {
          loadedUrls.add(currentSrc);
          setIsLoading(false);
        }}
        onError={(e) => {
          setIsLoading(true);
          const t = e.currentTarget;
          t.style.opacity = "0";
          t.style.visibility = "hidden";
          t.removeAttribute("src");
        }}
        className={`img-el ${isLoading ? "" : "is-loaded"}`}
      />
    </div>
  );
}
