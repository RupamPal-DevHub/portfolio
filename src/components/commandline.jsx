"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Commandline = () => {
  const router = useRouter();

  const [formData, setFormData] = useState("");
  const [ins, setIns] = useState([]);
  const [weather, setWeather] = useState(null);

  // Fetch weather data
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
      <p>./portfolio</p>
      <p>./contact</p>
      <p>./downloadcv</p>
      <p>ls</p>
      <p>clear</p>
      <p>cd projects</p>
      <p>./time</p>
      <p>./weather</p>
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

      if (e.target.value === "--help") {
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
