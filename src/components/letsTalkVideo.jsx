"use client";

import profile from "../../public/profile.jpg";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { useRouter } from "next/navigation";

const LetsTalkVideo = () => {
  const router = useRouter();
  return (
    <>
      <div className="w-full flex justify-center mt-20">
        <video
          muted
          controls
          loop
          className="w-[90%] md:w-[60%]  object-cover rounded-xl border border-bordercolor"
        >
          <source src="/HOLA!.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="w-full flex justify-center">
        <div className="h-[1px] my-20 w-[90%] bg-bordercolor"></div>
      </div>
      <div className="w-full flex justify-center mt-4 ">
        <div className="w-[90%] md:w-[50%]  rounded-xl object-cover border border-bordercolor bg-gradient-custom from-[#2c989c] to-[#6a8100] block  2xl:flex  justify-around py-6 md:py-20  px-10 lg:px-10 xl:px-10">
          <div className=" w-full 2xl:w-[300px] flex justify-center ">
            <Image
              src={profile}
              alt="Description of the image"
              className="w-[200px]   h-[200px] rounded-full object-cover object-top customshadow border-4 filter grayscale"
            />
          </div>
          <div className="mx-0 2xl:mx-10 my-10 flex flex-col justify-center w-full ">
            <p className="text-2xl lg:text-3xl font-bold">
              Lets make something awesome Together!!!
            </p>
            <div
              className="flex items-center my-2 outerdiv cursor-pointer"
              onClick={() => router.push("/contact")}
            >
              <p className="text-3xl lg:text-4xl font-bold text-yellow-300 underline">
                Lets Talk
              </p>{" "}
              <MoveRight size={40} className="mx-2 customdegree" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LetsTalkVideo;
