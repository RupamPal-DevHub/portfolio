"use client";
import Image from "next/image";
import node from "../../public/skillIcons/nodejs.png";
import express from "../../public/skillIcons/express.png";
import mongodb from "../../public/skillIcons/mongodb.png";
import postgre from "../../public/skillIcons/postgre.png";
import javascript from "../../public/skillIcons/javascript.png";
import typescript from "../../public/skillIcons/typescript.png";
import python from "../../public/skillIcons/python.png";
import react from "../../public/skillIcons/react.png";
import tailwind from "../../public/skillIcons/tailwindcss.png";
import next from "../../public/skillIcons/nextjs.png";
import docker from "../../public/skillIcons/docker.png";
import git from "../../public/skillIcons/git.png";
import linux from "../../public/skillIcons/linux.png";
import figma from "../../public/skillIcons/figma.png";
import cybersecurity from "../../public/skillIcons/cybersecurity.png";
import bootstrap from "../../public/skillIcons/bootstrap.png";

const Iconssec = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center md:justify-normal">
      <div
        className="p-4 bg-navbar rounded-lg hover:outline hover:outline-2 hover:outline-gray-400"
        title="Node JS"
      >
        <Image
          src={node}
          alt="Description of the image"
          className="w-max rounded-sm object-cover "
        />
      </div>
      <div
        className="p-4 bg-navbar rounded-lg hover:outline hover:outline-2 hover:outline-gray-400"
        title="Express JS"
      >
        <Image
          src={express}
          alt="Description of the image"
          className="w-max rounded-sm object-cover "
        />
      </div>
      <div
        className="p-4 bg-navbar rounded-lg hover:outline hover:outline-2 hover:outline-gray-400"
        title="Mongo DB "
      >
        <Image
          src={mongodb}
          alt="Description of the image"
          className="w-max rounded-sm object-cover "
        />
      </div>
      <div
        className="p-4 bg-navbar rounded-lg hover:outline hover:outline-2 hover:outline-gray-400"
        title="Postgresh"
      >
        <Image
          src={postgre}
          alt="Description of the image"
          className="w-max rounded-sm object-cover "
        />
      </div>
      <div
        className="p-4 bg-navbar rounded-lg hover:outline hover:outline-2 hover:outline-gray-400"
        title="Docker"
      >
        <Image
          src={docker}
          alt="Description of the image"
          className="w-max rounded-sm object-cover "
        />
      </div>
      <div
        className="p-4 bg-navbar rounded-lg hover:outline hover:outline-2 hover:outline-gray-400"
        title="Git"
      >
        <Image
          src={git}
          alt="Description of the image"
          className="w-max rounded-sm object-cover "
        />
      </div>
      <div
        className="p-4 bg-navbar rounded-lg hover:outline hover:outline-2 hover:outline-gray-400"
        title="Next JS"
      >
        <Image
          src={next}
          alt="Description of the image"
          className="w-max rounded-sm object-cover "
        />
      </div>
      <div
        className="p-4 bg-navbar rounded-lg hover:outline hover:outline-2 hover:outline-gray-400"
        title="JavaScript"
      >
        <Image
          src={javascript}
          alt="Description of the image"
          className="w-max rounded-sm object-cover "
        />
      </div>
      <div
        className="p-4 bg-navbar rounded-lg hover:outline hover:outline-2 hover:outline-gray-400"
        title="TypeScript"
      >
        <Image
          src={typescript}
          alt="Description of the image"
          className="w-max rounded-sm object-cover "
        />
      </div>
      <div
        className="p-4 bg-navbar rounded-lg hover:outline hover:outline-2 hover:outline-gray-400"
        title="Python"
      >
        <Image
          src={python}
          alt="Description of the image"
          className="w-max rounded-sm object-cover "
        />
      </div>
      <div
        className="p-4 bg-navbar rounded-lg hover:outline hover:outline-2 hover:outline-gray-400"
        title="React JS"
      >
        <Image
          src={react}
          alt="Description of the image"
          className="w-max rounded-sm object-cover "
        />
      </div>
      <div
        className="p-4 bg-navbar rounded-lg hover:outline hover:outline-2 hover:outline-gray-400"
        title="Tailwind CSS"
      >
        <Image
          src={tailwind}
          alt="Description of the image"
          className="w-max rounded-sm object-cover "
        />
      </div>
      <div
        className="p-4 bg-navbar rounded-lg hover:outline hover:outline-2 hover:outline-gray-400"
        title="Bootstrap"
      >
        <Image
          src={bootstrap}
          alt="Description of the image"
          className="w-max rounded-sm object-cover "
        />
      </div>
      <div
        className="p-4 bg-navbar rounded-lg hover:outline hover:outline-2 hover:outline-gray-400"
        title="Figma"
      >
        <Image
          src={figma}
          alt="Description of the image"
          className="w-max rounded-sm object-cover "
        />
      </div>
      <div
        className="p-4 bg-navbar rounded-lg hover:outline hover:outline-2 hover:outline-gray-400"
        title="Linux"
      >
        <Image
          src={linux}
          alt="Description of the image"
          className="w-max rounded-sm object-cover "
        />
      </div>
      <div
        className="p-4 bg-navbar rounded-lg hover:outline hover:outline-2 hover:outline-gray-400"
        title="Cyber Security"
      >
        <Image
          src={cybersecurity}
          alt="Description of the image"
          className="w-max rounded-sm object-cover "
        />
      </div>
    </div>
  );
};

export default Iconssec;
