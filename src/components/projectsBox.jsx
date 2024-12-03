"use client";

import Topbar from "./topbar";
import Navbar from "./navbar";
import Opentowork from "./opentowork";
import Mainprojects from "./mainprojects";
import Shortabout from "./shortabout";
import LetsTalkVideo from "./letsTalkVideo";
import Footer from "./footer";

const Projectsbox = () => {
  return (
    <div className="relative flex justify-center items-center h-screen w-screen text-white">
      <div className="w-[95%] sm:w-[90%] h-[95%] sm:h-[90%] md:h-[90%] bg-black rounded-2xl bg-opacity-80 backdrop-blur-xl border border-bordercolor">
        <Topbar title={"Projects"} />
        <Navbar curPage={"projects"} />
        <div className="h-[90%] ">
          <div className="overflow-y-auto hide-scrollbar w-full h-[99%]">
            <div className="flex justify-center align-middle w-full">
              <div className="text-center font-bold text-xl md:text-4xl w-[90%] md:w-[70%] pt-20 md:pt-40 pb-4 ">
                <p className="text-3xl md:text-6xl py-4 ">
                  Here are some of my{" "}
                  <span className="bg-gradient-to-r from-gradstart to-gradend text-transparent bg-clip-text">
                    Projects‍‍‍
                  </span>
                  💻,
                </p>
                <p>
                  These projects serve as a testament to my diverse capabilities
                  and professional expertise.
                </p>
              </div>
            </div>

            <Opentowork />
            <Mainprojects />
            <Shortabout />
            <LetsTalkVideo />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projectsbox;
