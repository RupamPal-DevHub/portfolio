"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import pro1 from "../../public/mario.gif";

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
        <br />+ for portfolio click or type 👉 ./
        <span
          className="underline hover:text-green-400 cursor-pointer"
          onClick={() => router.push("/portfolio")}
        >
          portfolio
        </span>{" "}
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

  const helpmessage = [
    <div key="help" className="font-bold mb-2 text-sm md:text-sm lg:text-lg">
      <p className="text-green-400 font-bold">
        rupam@terminal : ~${"  "} &nbsp;{curFol}
        <span className="text-white font-normal">{formData}</span>
      </p>
      <p className="text-orange-400">Available commands-</p>
      <div className="flex flex-wrap gap-x-6 gap-y-1">
        <p>./portfolio</p>
        <p>./contact</p>
        <p>./about -gui</p>
        <p>wget cv</p>
        <p>ls</p>
        <p>cd</p>
        <p>clear</p>
        <p>./time</p>
        <p>./weather</p>
        <p>./feedback</p>
      </div>
      <p className="p-2 mt-2 border border-dashed">
        + Use 🐾 cat to read files! <br />+ For more commands and detailed info,
        check out 📘{" "}
        <span className="cursor-pointer underline hover:text-green-400">
          readme.md
        </span>
        !
      </p>
    </div>,
  ];

  const error = [
    <div key="error" className="font-bold mb-2 text-sm md:text-sm lg:text-lg">
      <p className="text-green-400">
        rupam@terminal :&nbsp;~{curFol}&nbsp;
        <span className="text-white">$</span> &nbsp;
        <span className="text-white font-normal">{formData}</span>
      </p>
      <p className="text-red-600">Error - `{formData}` command not found</p>
      <p>type --help for more info.</p>
    </div>,
  ];

  const terminalVersion = [
    <div key="error" className="mb-2 font-bold text-sm md:text-sm lg:text-lg">
      <p className="text-green-400">
        rupam@terminal :&nbsp;~{curFol}&nbsp;
        <span className="text-white">$</span> &nbsp;
        <span className="text-white font-normal">{formData}</span>
      </p>
      <p>1.02</p>
      <p>last updated on - 01/11/24</p>
    </div>,
  ];

  const readme = [
    <div key="help" className="font-bold mb-2 text-sm md:text-sm lg:text-lg">
      <p className="text-green-400 font-bold">
        rupam@terminal :&nbsp;~{curFol}&nbsp;
        <span className="text-white">$</span> &nbsp;
        <span className="text-white font-normal">{formData}</span>
      </p>
      +++++++++++++++++++++++++++++
      <p>+📘 Command Documentation 📘+</p>
      +++++++++++++++++++++++++++++
      <br />
      <p>1. cd</p>
      <p>Description: Changes the directory.</p>
      <p>Example Usage:</p>
      <p>cd projects</p>
      ----------------------------------------------------
      <p>2. cd ..</p>
      <p>Description: Goes one level up in the directory hierarchy.</p>
      <p>Example Usage:</p>
      <p>cd ..</p>
      ----------------------------------------------------
      <p>3. ls</p>
      <p>Description: Lists all files and folders in the current directory.</p>
      <p>Example Usage:</p>
      <p>ls</p>
      ----------------------------------------------------
      <p>4. cat</p>
      <p>Description: Displays the content of a file.</p>
      <p>Example Usage:</p>
      <p>cat readme.md</p>
      ----------------------------------------------------
      <p>5. clear</p>
      <p>Description: Clears the terminal output.</p>
      <p>Example Usage:</p>
      <p>clear</p>
      ----------------------------------------------------
      <p>6. ./weather</p>
      <p>Description: Displays the current weather in your region (Kolkata).</p>
      <p>Example Usage:</p>
      <p>./weather</p>
      ----------------------------------------------------
      <p>7. ./portfolio</p>
      <p>Description: Redirects to the portfolio page.</p>
      <p>Example Usage:</p>
      <p>./portfolio</p>
      ----------------------------------------------------
      <p>8. ./contact</p>
      <p>Description: Redirects to the contact page.</p>
      <p>Example Usage:</p>
      <p>./contact</p>
      ----------------------------------------------------
      <p>9. terminal -v</p>
      <p>Description: Displays the current version of the terminal.</p>
      <p>Example Usage:</p>
      <p>terminal -v</p>
    </div>,
  ];

  const about = [
    <div key="error" className="font-bold mb-2 text-sm md:text-sm lg:text-lg">
      <p className="text-green-400">
        rupam@terminal : ~&nbsp;<span className="text-white">$</span> &nbsp;
        <span className="text-white font-normal ">{formData}</span>
      </p>
      <p>
        I'm Rupam Pal, a 21-year-old software developer from Santragachi,
        Howrah, with a passion for building impactful digital solutions. I hold
        a BSc in IT with a specialization in Cyber Security from MAKAUT, where I
        developed a strong foundation in penetration testing, network testing,
        and software development. My technical expertise spans full-stack web
        development using the MERN stack, Next.js, and TypeScript. I have
        hands-on experience building robust authentication systems, creating
        dynamic UI designs with React and Tailwind CSS, and implementing
        responsive, user-friendly applications. Beyond coding, I enjoy exploring
        creative pursuits like cooking, listening to music, and designing
        innovative web applications. I'm always eager to learn and grow,
        continuously refining my skills to tackle new challenges. Whether it’s
        collaborating with teams or working independently, I aim to deliver
        high-quality, efficient solutions that leave a positive impact.
      </p>
    </div>,
  ];

  const files = [
    <div key="help" className="font-bold mb-2 text-sm md:text-sm lg:text-lg">
      <p className="text-green-400">
        rupam@terminal : ~${"  "} &nbsp;
        <span className="text-white font-normal ">{formData}</span>
      </p>
      <p className="text-orange-400">Available Files and Folders-</p>
      <div className="flex flex-wrap gap-x-6 gap-y-1">
        <p>about.txt</p>
        <p>readme.md</p>
        <p className="text-blue-500">projects</p>
      </div>
    </div>,
  ];
  const folderchange = [
    <div key="help" className="font-bold text-sm md:text-sm lg:text-lg">
      <p className="text-green-400">
        rupam@terminal : ~{curFol}&nbsp;
        <span className="text-white">$</span>
        {"  "} &nbsp;
        <span className="text-white font-normal ">{formData}</span>
      </p>
    </div>,
  ];
  const projectsfiles = [
    <div key="help" className="font-bold mb-2 text-sm md:text-sm lg:text-lg">
      <p className="text-green-400">
        rupam@terminal :&nbsp;~{curFol}&nbsp;
        <span className="text-white">$</span> &nbsp;
        <span className="text-white font-normal ">{formData}</span>
      </p>
      <p className="text-orange-400">Available Files and Folders-</p>
      <div className="flex flex-wrap gap-x-6 gap-y-1">
        <p>classcompass.txt</p>
        <p>iot.txt</p>
        <p>terminal.txt</p>
      </div>
    </div>,
  ];

  function changeFormData(e) {
    setFormData(e.target.value);
  }

  const weatherMessage = weather ? (
    <div
      key={weather.current_condition[0].temp_C}
      className="font-bold mb-2 text-sm md:text-sm lg:text-lg"
    >
      <p className="text-green-400">
        rupam@terminal :&nbsp;~{curFol}&nbsp;
        <span className="text-white">$</span> &nbsp;
        <span className="text-white font-normal ">{formData}</span>
      </p>
      <p>
        Weather in Kolkata: {weather.current_condition[0].weatherDesc[0].value}
        <br />
        Temperature: {weather.current_condition[0].temp_C}°C
        <br />
        Wind Speed: {weather.current_condition[0].windspeedKmph} km/h
        <br />
        Humidity: {weather.current_condition[0].humidity}%
      </p>
    </div>
  ) : null;

  const submitCommand = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      if (e.target.value === "--help" || e.target.value === "-h") {
        setIns((prevIns) => [...prevIns, helpmessage]);
      } else if (e.target.value === "clear") {
        setIns([]);
      } else if (e.target.value === "./weather" && weather) {
        setIns((prevIns) => [...prevIns, weatherMessage]);
      } else if (e.target.value === "./portfolio") {
        router.push("/portfolio");
      } else if (e.target.value === "./contact") {
        router.push("/contact");
      } else if (e.target.value === "cat about.txt") {
        if (curFol == "") {
          setIns((prevIns) => [...prevIns, about]);
          setFormData("");
        } else {
          setIns((prevIns) => [...prevIns, error]);
          setFormData("");
        }
      } else if (e.target.value === "ls") {
        if (curFol == "") {
          setIns((prevIns) => [...prevIns, files]);
          setFormData("");
        } else if (curFol == "/projects") {
          setIns((prevIns) => [...prevIns, projectsfiles]);
          setFormData("");
        }
      } else if (e.target.value === "cat readme.md") {
        setIns((prevIns) => [...prevIns, readme]);
        setFormData("");
      } else if (e.target.value === "cd projects") {
        if (curFol == "") {
          setCurFol("/projects");
          setIns((prevIns) => [...prevIns, folderchange]);
          setFormData("");
        } else {
          setIns((prevIns) => [...prevIns, error]);
          setFormData("");
        }
      } else if (e.target.value === "cd ..") {
        if (curFol == "/projects") {
          setIns((prevIns) => [...prevIns, folderchange]);
          setCurFol("");
          setFormData("");
        } else {
          setIns((prevIns) => [...prevIns, error]);
          setFormData("");
        }
      } else if (e.target.value === "terminal -v") {
        setIns((prevIns) => [...prevIns, terminalVersion]);
      } else {
        setIns((prevIns) => [...prevIns, error]);
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
        <p className="text-green-400 font-bold text-sm md:text-sm lg:text-lg">
          rupam@terminal : ~{curFol} <span className="text-white">$</span>
        </p>
        <input
          type="text"
          autoFocus
          onChange={(e) => changeFormData(e)}
          onKeyDown={submitCommand}
          className="mx-2 bg-transparent text-sm md:text-sm lg:text-lg w-28 md:w-96 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default Commandline;
