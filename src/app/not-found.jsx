"use client";
import Link from "next/link";
import notFoundLogo from "../../public/404.gif";

import Image from "next/image";

export default function Custom404() {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-white z-50 absolute">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-9xl">404</h1>
        <p className="font-bold">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="py-4 px-10 transition ease-in-out duration-200 delay-100 bg-blue-500 text-white rounded-full font-bold mt-6 hover:bg-blue-600"
        >
          Go Back to Terminal
        </Link>
        <Image
          src={notFoundLogo}
          alt="Description of the image"
          height={500}
          className=" object-fit   customshadow "
        />
      </div>
    </div>
  );
}
