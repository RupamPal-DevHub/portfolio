"use client";
import { MoveRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import profile from "../../public/profile.jpg";
import Iconssec from "./Iconssec";

const Mainabout = () => {
  const router = useRouter();
  return (
    <>
      <div className="w-full flex justify-center mt-20  font-bold">
        <div className="w-[90%] md:w-[60%]  block 2xl:flex gap-10 justify-center py-6 md:py-10 md:px10 lg:px-20 xl:px-10 mb-16">
          <div>
            <p className="text-gray-600">
              Me <br />
              <br />
            </p>
            <div className="w-full 2xl:w-[300px] h-[400px] flex justify-center">
              <Image
                src={profile}
                alt="Description of the image"
                className="w-[300px] md:w-[300px] h-[400px] rounded-sm object-cover customshadow border-2"
              />
            </div>
          </div>

          <div className="my-16 2xl:my-0">
            <span className="text-gray-600">Description</span> <br />
            <br />
            I'm Rupam Pal, a 21-year-old software developer from Santragachi,
            Howrah, with a passion for building impactful digital solutions. I
            hold a BSc in IT with a specialization in Cyber Security from
            MAKAUT, where I developed a strong foundation in penetration
            testing, network testing, and software development. My technical
            expertise spans full-stack web development using the MERN stack,
            Next.js, and TypeScript. I have hands-on experience building robust
            authentication systems, creating dynamic UI designs with React and
            Tailwind CSS, and implementing responsive, user-friendly
            applications. Beyond coding, I enjoy exploring creative pursuits
            like cooking, listening to music, and designing innovative web
            applications. I'm always eager to learn and grow, continuously
            refining my skills to tackle new challenges. Whether it’s
            collaborating with teams or working independently, I aim to deliver
            high-quality, efficient solutions that leave a positive impact.{" "}
            <br />
            <br />
            <br />
            <div className="w-full flex justify-center">
              <div className="h-[1px] w-full bg-bordercolor"></div>
            </div>
            <br />
            <span className="text-gray-600">
              Skills <br />
              <br />
            </span>
            <Iconssec />
            <br />
            <br />
            <div className="w-full flex justify-center">
              <div className="h-[1px] w-full bg-bordercolor"></div>
            </div>
            <br />
            <span className="text-gray-600">Education</span> <br />
            <br />
            <div className="w-full bg-navbar rounded-lg flex justify-start items-center p-3 py-6">
              <div className="p-8 md:p-10">
                <div className="bg-blue-400 h-2 w-2 mx-2 rounded-full bluedot"></div>
              </div>
              <div className="w-full">
                <p className="text-lg md:text-xl mb-2">
                  Maulana Abul Kalam Azad University of Technology
                </p>
                <div className="flex justify-between my-2 w-full text-sm md:text-base">
                  <p>BSc IT Cyber Security</p>
                  <p>2021-2024</p>
                </div>
                <span
                  className="flex items-center outerdiv cursor-pointer font-bold underline"
                  onClick={() =>
                    router.push(
                      "https://www.shiksha.com/university/makaut-maulana-abul-kalam-azad-university-of-technology-kolkata-51181"
                    )
                  }
                >
                  Know more
                  <MoveRight size={20} className="mx-2 customdegree" />
                </span>
              </div>
            </div>
            <br />
            <br />
            <div className="w-full flex justify-center">
              <div className="h-[1px] w-full bg-bordercolor"></div>
            </div>
            <br />
            <br />
            <span className="text-gray-600">Experience</span> <br />
            <br />
            <div className="w-full bg-navbar rounded-lg flex justify-start items-center p-3 py-6">
              <div className="p-8 md:p-10">
                <div className="bg-blue-400 h-2 w-2 mx-2 rounded-full bluedot"></div>
              </div>
              <div className="w-full">
                <p className=" my-2 text-lg md:text-xl">North Star Metrics</p>
                <div className="flex justify-between my-2 text-sm md:text-base">
                  <p>Full Stack Developer Intern</p>
                  <p>2024-</p>
                </div>
                <span
                  className="flex items-center outerdiv cursor-pointer font-bold underline my-2"
                  onClick={() =>
                    router.push("https://www.linkedin.com/company/ntsmetrics/")
                  }
                >
                  Know more
                  <MoveRight size={20} className="mx-2 customdegree" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="h-[1px] my-20 w-[90%] bg-bordercolor"></div>
      </div>
    </>
  );
};

export default Mainabout;
