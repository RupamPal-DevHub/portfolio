"use client";
import { useRouter } from "next/navigation";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import profile from "../../public/profile.jpg";

const Shortabout = () => {
  const router = useRouter();

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="h-[1px] my-20 w-[90%] bg-bordercolor"></div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[90%] md:w-[60%] rounded-xl object-cover border border-bordercolor bg-gradient-custom from-[#2c989c] to-[#6a8100] block 2xl:flex justify-center py-6 md:py-10 md:px10 lg:px-20 xl:px-10">
          <div className="w-full 2xl:w-[300px] h-[400px] flex justify-center">
            <Image
              src={profile}
              alt="Description of the image"
              className="w-[300px] md:w-[300px] h-[400px] rounded-xl object-cover customshadow border-4"
            />
          </div>
          <div className="h-max w-90% 2xl:w-[60%]">
            <p className="px-6 font-semibold pt-3">
              I&apos;m Rupam Pal, a 21-year-old software developer from
              Santragachi, Howrah, with a passion for building impactful digital
              solutions. I hold a BSc in IT with a specialization in Cyber
              Security from{" "}
              <span
                className="underline cursor-pointer"
                onClick={() =>
                  router.push(
                    "https://www.shiksha.com/university/makaut-maulana-abul-kalam-azad-university-of-technology-kolkata-51181"
                  )
                }
              >
                MAKAUT
              </span>
              , where I developed a strong foundation in penetration testing,
              network testing, and software development. My technical expertise
              spans full-stack web development using the MERN stack, Next.js,
              and TypeScript. I have hands-on experience building robust
              authentication systems, creating dynamic UI designs with React and
              Tailwind CSS, and implementing responsive, user-friendly
              applications. <br />
              Beyond coding, I enjoy exploring creative pursuits like cooking,
              listening to music, and designing innovative web applications.
              I&apos;m always eager to learn and grow, continuously refining my
              skills to tackle new challenges. Whether it’s collaborating with
              teams or working independently, I aim to deliver high-quality,
              efficient solutions that leave a positive impact.
              <span
                className="flex items-center outerdiv cursor-pointer font-bold text-lg underline"
                onClick={() => router.push("/about")}
              >
                Know more
                <MoveRight size={20} className="mx-2 customdegree" />
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shortabout;
