"use client";

import { Linkedin, Github, Instagram } from "lucide-react";
import { useRouter } from "next/navigation";

const Opentowork = () => {
  const router = useRouter();
  return (
    <>
      <div className="w-full flex justify-center mt-4 items-center mb-20 md:mb-28">
        <div className="bg-green-500 h-2 w-2 mx-2 rounded-full greendot"></div>
        <div className="font-bold">Open to Work</div>
        <div className="font-bold mx-6">|</div>
        <Linkedin
          size={20}
          className="mx-2 cursor-pointer transition ease-in-out hover:opacity-70 duration-300"
          onClick={() =>
            router.push("https://www.linkedin.com/in/rupam-pal-dev/")
          }
        />
        <Github
          size={20}
          className="mx-2 cursor-pointer transition ease-in-out hover:opacity-70 duration-300"
          onClick={() => router.push("https://github.com/RupamPal-DevHub")}
        />
        <Instagram
          size={20}
          className="mx-2 cursor-pointer transition ease-in-out hover:opacity-70 duration-300"
          onClick={() => router.push("https://www.instagram.com/rupam.pl/")}
        />
      </div>
    </>
  );
};

export default Opentowork;
