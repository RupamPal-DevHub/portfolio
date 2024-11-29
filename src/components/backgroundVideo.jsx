"use client";
export default function BackgroundVideo() {
  return (
    <div className="z-0">
      <video
        autoPlay
        muted
        loop
        className="w-full h-screen object-cover fixed z-0"
      >
        <source src="/bgv.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
