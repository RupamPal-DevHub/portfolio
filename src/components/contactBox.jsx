"use client";
import { Linkedin, Github, Instagram, Mail } from "lucide-react";
import Topbar from "./topbar";
import Navbar from "./navbar";
import Footer from "./footer";
import { useRouter } from "next/navigation";

const Contactbox = () => {
  const router = useRouter();
  return (
    <div className="relative flex justify-center items-center h-screen w-screen text-white">
      <div className="w-[95%] sm:w-[90%] h-[95%] sm:h-[90%] md:h-[90%] bg-black rounded-2xl bg-opacity-10 backdrop-blur-xl border border-bordercolor">
        <Topbar title={"https://rupampal.com/contact"} />
        <Navbar curPage={"contact"} />

        <div className="h-[90%]">
          <div className="overflow-y-auto hide-scrollbar w-full h-[99%] pt-10">
            <div className="flex flex-wrap-reverse justify-center gap-20 w-full mt-10 ">
              <div className="w-[90%] lg:w-[90%] xl:w-[40%] 2xl:w-[30%] flex flex-col  items-center">
                <div className="w-full font-bold text-3xl mb-4">Let’s chat</div>
                <form action="" className="flex flex-col gap-2 w-full">
                  <input
                    type="text"
                    className="h-16 bg-[#2E2C2C] rounded-lg p-4 font-bold"
                    placeholder="Name"
                  />
                  <input
                    type="email"
                    className="h-16 bg-[#2E2C2C] rounded-lg p-4 font-bold"
                    placeholder="Email"
                  />
                  <input
                    type="Number"
                    className="h-16 bg-[#2E2C2C] rounded-lg p-4 font-bold"
                    placeholder="Phone Number (Optional)"
                  />
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    className=" bg-[#2E2C2C] rounded-lg p-4 font-bold"
                    placeholder="Message"
                  ></textarea>
                  <button
                    className="w-full bg-blue-500 py-6 rounded-lg font-bold text-lg"
                    type="submit"
                  >
                    Send
                  </button>
                </form>
              </div>
              <div className="w-96 px-4 md:px-0 xl:mt-12">
                <p className="font-bold text-3xl md:text-4xl">
                  Let’s make something{" "}
                  <span className="underline text-green-400">Awesome!</span>
                </p>
                <div className="mt-12 hidden xl:block">
                  <div className="flex items-center gap-4 ">
                    <Mail size={30} />{" "}
                    <p className="font-bold text-lg hover:underline hover:text-blue-500 transition ease-in-out duration-300 cursor-pointer">
                      rup4mp4l@gmail.com
                    </p>
                  </div>
                  <div className="flex items-center gap-4  mt-6">
                    <Linkedin size={30} />{" "}
                    <p
                      className="font-bold text-lg hover:underline hover:text-blue-500 transition ease-in-out duration-300 cursor-pointer"
                      onClick={() =>
                        router.push(
                          "https://www.linkedin.com/in/rupam-pal-dev/"
                        )
                      }
                    >
                      rupam-pal-dev
                    </p>
                  </div>
                  <div className="flex items-center gap-4  mt-6">
                    <Github size={30} />{" "}
                    <p
                      className="font-bold text-lg hover:underline hover:text-blue-500 transition ease-in-out duration-300 cursor-pointer"
                      onClick={() =>
                        router.push("https://github.com/RupamPal-DevHub")
                      }
                    >
                      RupamPal-DevHub
                    </p>
                  </div>
                  <div className="flex items-center gap-4  mt-6">
                    <Instagram size={30} />{" "}
                    <p
                      className="font-bold text-lg hover:underline hover:text-blue-500 transition ease-in-out duration-300 cursor-pointer"
                      onClick={() =>
                        router.push("https://www.instagram.com/rupam.pl/")
                      }
                    >
                      rupam-pl
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactbox;
