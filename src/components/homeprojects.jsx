"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import pro1 from "../../public/image.png";
import { useRouter } from "next/navigation";

const Homeprojects = () => {
  const router = useRouter();
  return (
    <>
      <div className="w-full justify-center mt-4  flex">
        <div className="w-[90%] md:w-[50%] h-[500px] rounded-xl customshadow border border-bordercolor relative inline-block overflow-hidden ">
          <Image
            src={pro1}
            alt="Description of the image"
            className="transition duration-300 ease-in-out w-full h-full object-cover hover:scale-105"
          />
        </div>
      </div>
      {/* <div className="w-full flex justify-center mt-4">
        <Image
          src={pro1}
          alt="Description of the image"
          className="w-[90%] md:w-[50%] h-[500px] rounded-xl object-cover customshadow border border-bordercolor "
        />
      </div> */}
      <div className="w-full justify-center mt-4  flex">
        <div className="w-[90%] md:w-[50%] h-[500px] rounded-xl customshadow border border-bordercolor relative inline-block overflow-hidden ">
          <Image
            src={pro1}
            alt="Description of the image"
            className="transition duration-300 ease-in-out w-full h-full object-cover hover:scale-105"
          />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[80%] md:w-[50%] flex justify-end  py-6">
          <div
            className="py-4 px-6 transition ease-in-out bg-white hover:opacity-80 duration-300  rounded-full text-black font-bold flex align-middle cursor-pointer "
            onClick={() => router.push("/projects")}
          >
            Show All
            <ExternalLink size={20} className="ml-2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homeprojects;
