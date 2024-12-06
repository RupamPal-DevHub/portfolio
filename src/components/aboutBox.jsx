"use client";

import Topbar from "./topbar";
import Navbar from "./navbar";
import Opentowork from "./opentowork";

import Mainabout from "./mainAbout";
import LetsTalkVideo from "./letsTalkVideo";
import Footer from "./footer";

const Aboutbox = () => {
  return (
    <div className="relative flex justify-center items-center h-screen w-screen text-white">
      <div className="w-[95%] sm:w-[90%] h-[95%] sm:h-[90%] md:h-[90%] bg-black rounded-2xl bg-opacity-80 backdrop-blur-xl border border-bordercolor">
        <Topbar title={"About"} />
        <Navbar curPage={"about"} />
        <div className="h-[90%] ">
          <div className="overflow-y-auto hide-scrollbar w-full h-[99%]">
            <div className="flex justify-center align-middle w-full">
              <div className="text-center font-bold text-xl md:text-4xl w-[90%] md:w-[70%] pt-20 md:pt-40 pb-4 ">
                <p className="text-3xl md:text-6xl py-4 ">
                  Let's begin by getting{" "}
                  <span className="bg-gradient-to-r from-gradstart to-gradend text-transparent bg-clip-text">
                    acquainted
                  </span>
                  🤝,
                </p>
                <p>
                  Let me introduce myself along with my workflows and the
                  technologies that breathe life into my projects.
                </p>
              </div>
            </div>

            <Opentowork />
            <Mainabout />
            <LetsTalkVideo />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutbox;
