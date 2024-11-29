"use client";
import Image from "next/image";
import logo from "../../public/logo.jpeg";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  return (
    <div className="w-full flex justify-center mt-20 mb-5">
      <div className="w-[90%] bg-[#111111] flex flex-col items-center rounded-2xl py-10 lg:py-20 px-10 lg:px-40 border border-bordercolor">
        <div className="w-full flex flex-wrap justify-between">
          <div>
            <Image
              src={logo}
              alt="Description of the image"
              height={100}
              className=" object-fit   customshadow "
            />
          </div>
          <div className="flex flex-wrap gap-16 font-bold mt-20 sm:mt-0 ">
            <div>
              <p className="mb-6 text-lg">Navigation</p>
              <p
                className="mb-2 transition ease-in-out text-graytext  hover:text-white duration-300 cursor-pointer"
                onClick={() => router.push("/portfolio")}
              >
                Home
              </p>

              <p
                className="mb-2 transition ease-in-out text-graytext  hover:text-white duration-300 cursor-pointer"
                onClick={() => router.push("/about")}
              >
                About
              </p>
              <p
                className="mb-2 transition ease-in-out text-graytext  hover:text-white duration-300 cursor-pointer"
                onClick={() => router.push("/projects")}
              >
                Projects
              </p>
              <p
                className="mb-2 transition ease-in-out text-graytext  hover:text-white duration-300 cursor-pointer"
                onClick={() => router.push("/contact")}
              >
                Contact
              </p>
            </div>

            <div>
              <p className="mb-6 text-lg">Socials</p>
              <p className="mb-2 transition ease-in-out text-graytext  hover:text-white duration-300 cursor-pointer">
                Email
              </p>
              <p
                className="mb-2 transition ease-in-out text-graytext  hover:text-white duration-300 cursor-pointer"
                onClick={() =>
                  router.push("https://www.linkedin.com/in/rupam-pal-dev/")
                }
              >
                Linked In
              </p>
              <p
                className="mb-2 transition ease-in-out text-graytext  hover:text-white duration-300 cursor-pointer"
                onClick={() =>
                  router.push("https://github.com/RupamPal-DevHub")
                }
              >
                GitHub
              </p>
              <p
                className="mb-2 transition ease-in-out text-graytext  hover:text-white duration-300 cursor-pointer"
                onClick={() =>
                  router.push("https://www.instagram.com/rupam.pl/")
                }
              >
                Instagram
              </p>
            </div>
            <div>
              <p className="mb-6 text-lg">Extras</p>
              <p className="mb-2 transition ease-in-out text-graytext  hover:text-white duration-300 cursor-pointer">
                Musics
              </p>
              <p
                className="mb-2 transition ease-in-out text-graytext  hover:text-white duration-300 cursor-pointer"
                onClick={() => router.push("/")}
              >
                Terminal
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-between mt-20 font-bold">
          <p>last updated on 1 Jan 2025</p>
          <p>Made with ❤️ by Rupam Pal</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
