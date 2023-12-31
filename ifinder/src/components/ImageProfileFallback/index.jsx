"use client";

import Image from "next/image";
import { defaultImage } from "@/assets/images";
import { useState } from "react";

export function ImageProfileFallback({ src, ...props }) {
  const [isError, setIsError] = useState(false);

  return (
    <Image
      src={isError ? defaultImage : src}
      onError={() => setIsError(true)}
      alt="Foto de perfil"
      {...props}
    />
  );
}
