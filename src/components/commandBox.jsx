"use client";

import { useState, useEffect } from "react";
import Commandline from "./commandline";
import Topbar from "./topbar";

function updateTime() {
  const currentDate = new Date();
  const hours = currentDate.getHours().toString().padStart(2, "0");
  const minutes = currentDate.getMinutes().toString().padStart(2, "0");
  const seconds = currentDate.getSeconds().toString().padStart(2, "0");

  const formattedTime = `${hours} : ${minutes} : ${seconds}`;
  return formattedTime;
}

const Commandbox = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(updateTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex justify-center items-center h-screen w-screen text-white">
      <div className="w-[95%] sm:w-[90%] h-[95%] sm:h-[90%] md:h-[90%] bg-black rounded-2xl bg-opacity-60 backdrop-blur-xl border border-bordercolor">
        <Topbar title={"Terminal"} />
        <div className="h-[95%] p-2 md:px-6 md:py-4">
          <Commandline />
        </div>
      </div>
    </div>
  );
};

export default Commandbox;
