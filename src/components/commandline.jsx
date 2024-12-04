"use client";
import { useState, useEffect, useRef, useContext } from "react";
import { useRouter } from "next/navigation";
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
import ThemeFiles from "./messages/themeFiles";
import ThemeGuideTxt from "./messages/themeguideTxt";
import ThemeChange from "./messages/themeChange";
import { ThemeContext } from "@/app/layout";

const Commandline = () => {
  const outputRef = useRef(null);
  const router = useRouter();
  const { toggleTheme, curTheme } = useContext(ThemeContext);

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
        } else if (curFol == "/themes") {
          setIns((prevIns) => [
            ...prevIns,
            <ThemeFiles curFol={curFol} formData={formData} key={uniqueKey} />,
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
      } else if (e.target.value === "cd themes") {
        if (curFol == "") {
          setCurFol("/themes");
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
        if (curFol == "/projects" || curFol == "/themes") {
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
      } else if (e.target.value === "cat themeguide.txt") {
        if (curFol == "/themes") {
          setIns((prevIns) => [
            ...prevIns,
            <ThemeGuideTxt
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
      } else if (e.target.value === "run codeinpurple") {
        if (curFol == "/themes") {
          toggleTheme("codeinpurple");
          setIns((prevIns) => [
            ...prevIns,
            <ThemeChange
              curFol={curFol}
              formData={formData}
              curTheme={
                "You've unlocked CodeInPurple! Stylish, techy, and purple all the way. 💻💜"
              }
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
      } else if (e.target.value === "run retailblues") {
        if (curFol == "/themes") {
          toggleTheme("retailblues");
          setIns((prevIns) => [
            ...prevIns,
            <ThemeChange
              curFol={curFol}
              formData={formData}
              curTheme={
                "You've entered RetailBlues. Smooth, calming, and totally chic! 🛍️💙"
              }
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
      } else if (e.target.value === "run morningglow") {
        if (curFol == "/themes") {
          toggleTheme("morningglow");
          setIns((prevIns) => [
            ...prevIns,
            <ThemeChange
              curFol={curFol}
              formData={formData}
              curTheme={
                "Say hello to MorningGlow! Fresh, warm, and full of positive energy. 🌅🌞"
              }
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
      } else if (e.target.value === "run spookydusk") {
        if (curFol == "/themes") {
          toggleTheme("spookydusk");
          setIns((prevIns) => [
            ...prevIns,
            <ThemeChange
              curFol={curFol}
              formData={formData}
              curTheme={
                "Get ready for SpookyDusk! A little mystery, a little magic. 👻🌑"
              }
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
      } else if (e.target.value === "run neonnights") {
        if (curFol == "/themes") {
          toggleTheme("neonnights");
          setIns((prevIns) => [
            ...prevIns,
            <ThemeChange
              curFol={curFol}
              formData={formData}
              curTheme={
                "Welcome to NeonNights! It's all bright lights and cool vibes here. 🌙✨"
              }
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
