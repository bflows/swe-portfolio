"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

type ExperienceLogoProps = {
  src: StaticImageData;
  alt: string;
};

const FADE_MS = 300;

export default function ExperienceLogo({ src, alt }: ExperienceLogoProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [prevSrc, setPrevSrc] = useState(src);

  if (src !== prevSrc) {
    setPrevSrc(src);
    setIsLoaded(false);
    setShowSkeleton(true);
  }

  const handleImageRef = (node: HTMLImageElement | null) => {
    if (node?.complete && node.naturalWidth > 0) {
      queueMicrotask(() => {
        setIsLoaded(true);
        setShowSkeleton(false);
      });
    }
  };

  useEffect(() => {
    if (!isLoaded) return;

    const timeout = window.setTimeout(() => {
      setShowSkeleton(false);
    }, FADE_MS);

    return () => window.clearTimeout(timeout);
  }, [isLoaded]);

  const handleSkeletonTransitionEnd = (
    event: React.TransitionEvent<HTMLDivElement>
  ) => {
    if (event.propertyName === "opacity" && isLoaded) {
      setShowSkeleton(false);
    }
  };

  return (
    <div className="relative h-8 w-8 shrink-0">
      <Image
        ref={handleImageRef}
        src={src}
        alt={alt}
        width={32}
        height={32}
        className={`h-8 w-8 object-contain rounded-full transition-opacity duration-300 ease-out ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setIsLoaded(true)}
      />
      {showSkeleton && (
        <div
          aria-hidden
          className={`absolute inset-0 z-10 rounded-full bg-brand200/50 transition-opacity duration-300 ease-out ${
            isLoaded ? "opacity-0" : "animate-pulse opacity-100"
          }`}
          onTransitionEnd={handleSkeletonTransitionEnd}
        ></div>
      )}
    </div>
  );
}
