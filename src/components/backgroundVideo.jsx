"use client";
import Image from "next/image";
import BGIF from "../../public/gif2.gif";
export default function BackgroundVideo() {
  return (
    <div className="z-0">
      <Image
        src={BGIF}
        unoptimized
        alt="Description of the image"
        className="w-full h-screen object-cover fixed z-0"
      />
    </div>
  );
}
