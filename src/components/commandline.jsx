"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import pro1 from "../../public/mario.gif";

const Commandline = () => {
  const router = useRouter();

  const contruction = [
    <div key="error" className="font-bold mb-2">
      <Image
        src={pro1}
        alt="Description of the image"
        className="w-full md:w-[50%] h-40 md:h-60 overflow-hidden object-cover object-bottom"
      />
      <p className="border border-dashed p-2 my-2 w-full md:w-[50%]">
        🚧 Whoa, you&apos;re early! 🚧 <br />
        + This site is still under construction. <br />
        + Grab a coffee and check back soon for the full experience! <br />+ In
        the meantime, feel free to explore what&apos;s already <br />
        /----------------- # -----------------/ <br />
        type <span className="underline">--help</span> for more info.{" "}
      </p>
    </div>,
  ];

  const [formData, setFormData] = useState("");
  const [ins, setIns] = useState([contruction]);
  const [weather, setWeather] = useState(null);

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
      <p className="text-green-400 font-bold text-sm md:text-sm lg:text-lg">
        rupam@terminal : ~${"  "} &nbsp;
        <span className="text-white font-normal text-sm md:text-sm lg:text-lg">
          {formData}
        </span>
      </p>
      <p className="text-orange-400">Available commands-</p>
      <div className="flex flex-wrap gap-x-6 gap-y-1">
        <p>./portfolio</p>
        <p>./contact</p>
        <p>./downloadcv</p>
        <p>ls</p>
        <p>clear</p>
        <p>cd projects</p>
        <p>./time</p>
        <p>./weather</p>
      </div>
    </div>,
  ];

  const error = [
    <div key="error" className="font-bold mb-2">
      <p className="text-green-400 font-bold text-sm md:text-sm lg:text-lg">
        rupam@terminal : ~${" "}
        <span className="text-white font-normal text-sm md:text-sm lg:text-lg">
          {formData}
        </span>
      </p>
      <p className="text-red-600">Error - `{formData}` command not found</p>
      <p>type --help for more info.</p>
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
      <p className="text-green-400 font-bold text-sm md:text-sm lg:text-lg">
        rupam@terminal : ~${" "}
        <span className="text-white font-normal text-sm md:text-sm lg:text-lg">
          {formData}
        </span>
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
        router.push("/#active");
      } else {
        setIns((prevIns) => [...prevIns, error]);
        setFormData("");
      }
      e.target.value = "";
    }
  };

  return (
    <>
      {ins}

      <div className="flex">
        <p className="text-green-400 font-bold text-sm md:text-sm lg:text-lg">
          rupam@terminal : ~$
        </p>
        <input
          type="text"
          autoFocus
          onChange={(e) => changeFormData(e)}
          onKeyDown={submitCommand}
          className="mx-2 bg-transparent text-sm md:text-sm lg:text-lg w-28 md:w-96 focus:outline-none"
        />
      </div>
    </>
  );
};

export default Commandline;
