"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import pro1 from "../../public/mario.gif";
import downloadCV from "@/logic/downloadCv";
import Mario from "./messages/mario";
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

  const [formData, setFormData] = useState("");
  const [ins, setIns] = useState([<Mario key={Date.now()} router={router} />]);
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

  const submitCommand = (e) => {
    const command = e.target.value.trim();
    const uniqueKey = `${command}-${Date.now()}`;
    if (e.key === "Enter") {
      e.preventDefault();

      if (e.target.value === "--help" || e.target.value === "-h") {
        setIns((prevIns) => [
          ...prevIns,
          <HelpMessage curFol={curFol} formData={formData} key={uniqueKey} />,
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
            key={uniqueKey}
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
            <AboutMe formData={formData} key={uniqueKey} />,
          ]);
          setFormData("");
        } else {
          setIns((prevIns) => [
            ...prevIns,
            <ErrorMessage
              curFol={curFol}
              formData={formData}
              key={uniqueKey}
            />,
          ]);
          setFormData("");
        }
      } else if (e.target.value === "ls") {
        if (curFol == "") {
          setIns((prevIns) => [
            ...prevIns,
            <RootFiles formData={formData} key={uniqueKey} />,
          ]);
          setFormData("");
        } else if (curFol == "/projects") {
          setIns((prevIns) => [
            ...prevIns,
            <ProjectsFiles
              curFol={curFol}
              formData={formData}
              key={uniqueKey}
            />,
          ]);
          setFormData("");
        }
      } else if (e.target.value === "cat readme.md") {
        if (curFol == "") {
          setIns((prevIns) => [
            ...prevIns,
            <Readme curFol={curFol} formData={formData} key={uniqueKey} />,
          ]);
        } else {
          setIns((prevIns) => [
            ...prevIns,
            <ErrorMessage
              curFol={curFol}
              formData={formData}
              key={uniqueKey}
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
              key={uniqueKey}
            />,
          ]);
          setFormData("");
        } else {
          setIns((prevIns) => [
            ...prevIns,
            <ErrorMessage
              curFol={curFol}
              formData={formData}
              key={uniqueKey}
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
              key={uniqueKey}
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
              key={uniqueKey}
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
              key={uniqueKey}
            />,
          ]);
          setFormData("");
        } else {
          setIns((prevIns) => [
            ...prevIns,
            <ErrorMessage
              curFol={curFol}
              formData={formData}
              key={uniqueKey}
            />,
          ]);
          setFormData("");
        }
      } else if (e.target.value === "cat iot.txt") {
        if (curFol == "/projects") {
          setIns((prevIns) => [
            ...prevIns,
            <IotTxt curFol={curFol} formData={formData} key={uniqueKey} />,
          ]);
          setFormData("");
        } else {
          setIns((prevIns) => [
            ...prevIns,
            <ErrorMessage
              curFol={curFol}
              formData={formData}
              key={uniqueKey}
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
            key={uniqueKey}
          />,
        ]);
      } else if (e.target.value === "cat terminal.txt") {
        if (curFol == "/projects") {
          setIns((prevIns) => [
            ...prevIns,
            <TerminalTxt curFol={curFol} formData={formData} key={uniqueKey} />,
          ]);
          setFormData("");
        } else {
          setIns((prevIns) => [
            ...prevIns,
            <ErrorMessage
              curFol={curFol}
              formData={formData}
              key={uniqueKey}
            />,
          ]);
          setFormData("");
        }
      } else if (e.target.value === "wget cv") {
        setIns((prevIns) => [
          ...prevIns,
          <DownloadCv curFol={curFol} formData={formData} key={uniqueKey} />,
        ]);
        downloadCV();
        setFormData("");
      } else {
        setIns((prevIns) => [
          ...prevIns,
          <ErrorMessage curFol={curFol} formData={formData} key={uniqueKey} />,
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
