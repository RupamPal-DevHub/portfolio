"use client";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import pro1 from "../../public/image.png";

const Mainprojects = () => {
  return (
    <>
      <div className="flex gap-4 flex-wrap w-full justify-center lg:px-10">
        <div className="w-[90%] lg:w-[700px] flex justify-center mt-4">
          <Image
            src={pro1}
            alt="Description of the image"
            className="w-[100%] h-[500px] rounded-xl object-cover customshadow border border-bordercolor "
          />
        </div>
        <div className="w-[90%] lg:w-[700px] flex justify-center mt-4">
          <Image
            src={pro1}
            alt="Description of the image"
            className="w-[100%] h-[500px] rounded-xl object-cover customshadow border border-bordercolor "
          />
        </div>
        <div className="w-[90%] lg:w-[700px] flex justify-center mt-4">
          <Image
            src={pro1}
            alt="Description of the image"
            className="w-[100%] h-[500px] rounded-xl object-cover customshadow border border-bordercolor "
          />
        </div>
        <div className="w-[90%] lg:w-[700px] flex justify-center mt-4">
          <Image
            src={pro1}
            alt="Description of the image"
            className="w-[100%] h-[500px] rounded-xl object-cover customshadow border border-bordercolor "
          />
        </div>
        <div className="w-[90%] lg:w-[700px] flex justify-center mt-4">
          <Image
            src={pro1}
            alt="Description of the image"
            className="w-[100%] h-[500px] rounded-xl object-cover customshadow border border-bordercolor "
          />
        </div>
        <div className="w-[90%] lg:w-[700px] flex justify-center mt-4">
          <Image
            src={pro1}
            alt="Description of the image"
            className="w-[100%] h-[500px] rounded-xl object-cover customshadow border border-bordercolor "
          />
        </div>
      </div>
    </>
  );
};

export default Mainprojects;
