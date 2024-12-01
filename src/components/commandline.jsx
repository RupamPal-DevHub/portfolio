"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import pro1 from "../../public/mario.gif";
import AboutMe from "./messages/aboutMe";
import ClasscompassTxt from "./messages/classcompassTxt";
import DownloadCv from "./messages/downloadCv";
import FolderChange from "./messages/folderChange";
import HelpMessage from "./messages/helpMessage";
import IotTxt from "./messages/iotTxt";
import ProjectsFiles from "./messages/projectsFiles";
import Readme from "./messages/readme";
import RootFiles from "./messages/rootFiles";
import TerminalTxt from "./messages/terminalTxt";
import TerminalVersion from "./messages/terminalVersion";
import WeatherMessage from "./messages/weatherMessage";
import ErrorMessage from "./messages/errorMessage";

const Commandline = () => {
  const outputRef = useRef(null);
  const router = useRouter();

  const contruction = [
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
    </div>,
  ];

  const [formData, setFormData] = useState("");
  const [ins, setIns] = useState([contruction]);
  const [curFol, setCurFol] = useState("");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [ins]);

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await fetch("https://wttr.in/Kolkata?format=j1");
      const json = await data.json();
      setWeather(json);
    };

    fetchWeather();
  }, []);

  function changeFormData(e) {
    setFormData(e.target.value);
  }

  const downloadCV = () => {
    const link = document.createElement("a"); // Create a temporary <a> element
    link.href = "/CV_RupamPal.pdf"; // Path to your CV file
    link.download = "RupamPal.pdf"; // Suggested file name
    link.click(); // Programmatically trigger a click
  };

  const submitCommand = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      if (e.target.value === "--help" || e.target.value === "-h") {
        setIns((prevIns) => [
          ...prevIns,
          <HelpMessage curFol={curFol} formData={formData} key={HelpMessage} />,
        ]);
      } else if (e.target.value === "clear") {
        setIns([]);
      } else if (e.target.value === "./weather" && weather) {
        setIns((prevIns) => [
          ...prevIns,
          <WeatherMessage
            curFol={curFol}
            formData={formData}
            weather={weather}
            key={WeatherMessage}
          />,
        ]);
      } else if (e.target.value === "./portfolio") {
        router.push("/portfolio");
      } else if (e.target.value === "./contact") {
        router.push("/contact");
      } else if (e.target.value === "cat about.txt") {
        if (curFol == "") {
          setIns((prevIns) => [
            ...prevIns,
            <AboutMe formData={formData} key={AboutMe} />,
          ]);
          setFormData("");
        } else {
          setIns((prevIns) => [
            ...prevIns,
            <ErrorMessage
              curFol={curFol}
              formData={formData}
              key={ErrorMessage}
            />,
          ]);
          setFormData("");
        }
      } else if (e.target.value === "ls") {
        if (curFol == "") {
          setIns((prevIns) => [
            ...prevIns,
            <RootFiles formData={formData} key={RootFiles} />,
          ]);
          setFormData("");
        } else if (curFol == "/projects") {
          setIns((prevIns) => [
            ...prevIns,
            <ProjectsFiles
              curFol={curFol}
              formData={formData}
              key={ProjectsFiles}
            />,
          ]);
          setFormData("");
        }
      } else if (e.target.value === "cat readme.md") {
        if (curFol == "") {
          setIns((prevIns) => [
            ...prevIns,
            <Readme curFol={curFol} formData={formData} key={Readme} />,
          ]);
        } else {
          setIns((prevIns) => [
            ...prevIns,
            <ErrorMessage
              curFol={curFol}
              formData={formData}
              key={ErrorMessage}
            />,
          ]);
          setFormData("");
        }

        setFormData("");
      } else if (e.target.value === "cd projects") {
        if (curFol == "") {
          setCurFol("/projects");
          setIns((prevIns) => [
            ...prevIns,
            <FolderChange
              curFol={curFol}
              formData={formData}
              key={FolderChange}
            />,
          ]);
          setFormData("");
        } else {
          setIns((prevIns) => [
            ...prevIns,
            <ErrorMessage
              curFol={curFol}
              formData={formData}
              key={ErrorMessage}
            />,
          ]);
          setFormData("");
        }
      } else if (e.target.value === "cd ..") {
        if (curFol == "/projects") {
          setIns((prevIns) => [
            ...prevIns,
            <FolderChange
              curFol={curFol}
              formData={formData}
              key={FolderChange}
            />,
          ]);
          setCurFol("");
          setFormData("");
        } else {
          setIns((prevIns) => [
            ...prevIns,
            <ErrorMessage
              curFol={curFol}
              formData={formData}
              key={ErrorMessage}
            />,
          ]);
          setFormData("");
        }
      } else if (e.target.value === "cat classcompass.txt") {
        if (curFol == "/projects") {
          setIns((prevIns) => [
            ...prevIns,
            <ClasscompassTxt
              curFol={curFol}
              formData={formData}
              key={ClasscompassTxt}
            />,
          ]);
          setFormData("");
        } else {
          setIns((prevIns) => [
            ...prevIns,
            <ErrorMessage
              curFol={curFol}
              formData={formData}
              key={ErrorMessage}
            />,
          ]);
          setFormData("");
        }
      } else if (e.target.value === "cat iot.txt") {
        if (curFol == "/projects") {
          setIns((prevIns) => [
            ...prevIns,
            <IotTxt curFol={curFol} formData={formData} key={IotTxt} />,
          ]);
          setFormData("");
        } else {
          setIns((prevIns) => [
            ...prevIns,
            <ErrorMessage
              curFol={curFol}
              formData={formData}
              key={ErrorMessage}
            />,
          ]);
          setFormData("");
        }
      } else if (e.target.value === "terminal -v") {
        setIns((prevIns) => [
          ...prevIns,
          <TerminalVersion
            curFol={curFol}
            formData={formData}
            key={TerminalVersion}
          />,
        ]);
      } else if (e.target.value === "cat terminal.txt") {
        if (curFol == "/projects") {
          setIns((prevIns) => [
            ...prevIns,
            <TerminalTxt
              curFol={curFol}
              formData={formData}
              key={TerminalTxt}
            />,
          ]);
          setFormData("");
        } else {
          setIns((prevIns) => [
            ...prevIns,
            <ErrorMessage
              curFol={curFol}
              formData={formData}
              key={ErrorMessage}
            />,
          ]);
          setFormData("");
        }
      } else if (e.target.value === "wget cv") {
        setIns((prevIns) => [
          ...prevIns,
          <DownloadCv curFol={curFol} formData={formData} key={DownloadCv} />,
        ]);
        downloadCV();
        setFormData("");
      } else {
        setIns((prevIns) => [
          ...prevIns,
          <ErrorMessage
            curFol={curFol}
            formData={formData}
            key={ErrorMessage}
          />,
        ]);
        setFormData("");
      }
      e.target.value = "";
      window.scroll(0, document.body.scrollHeight);
    }
  };

  return (
    <div
      className="overflow-y-auto hide-scrollbar w-full h-full"
      ref={outputRef}
    >
      {ins}

      <div className="flex">
        <p className="text-green-400 font-bold text-sm md:text-sm lg:text-base">
          rupam@terminal : ~{curFol} <span className="text-white">$</span>
        </p>
        <input
          type="text"
          autoFocus
          onChange={(e) => changeFormData(e)}
          onKeyDown={submitCommand}
          className="mx-2 bg-transparent text-sm md:text-sm lg:text-base w-28 md:w-96 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default Commandline;
