"use client";
import Image from "next/image";
import pro1 from "../../../public/mario.gif";
import { useRouter } from "next/router";

const Mario = ({ router }) => {
  return (
    <div key="error" className="font-bold mb-2">
      <Image
        src={pro1}
        alt="Description of the image"
        className="w-full md:w-[50%] h-40 md:h-60 overflow-hidden object-cover object-bottom"
      />
      <p className="border border-dashed p-2 my-2 w-full md:w-[50%] text-sm md:text-sm lg:text-base">
        🚧 Whoa, you&apos;re early! 🚧 <br />
        + This site is still under construction. <br />
        + Grab a coffee and check back soon for the full experience! <br />+ In
        the meantime, feel free to explore what&apos;s already here.
        <br />
        ----------------------------------------------------
        <br />+ type <span className="underline">--help</span> for more info.{" "}
        <br />+ for portfolio click or type 👉./
        <span
          className="underline hover:text-green-400 cursor-pointer"
          onClick={() => router.push("/portfolio")}
        >
          portfolio
        </span>
        👈
      </p>
    </div>
  );
};

export default Mario;
