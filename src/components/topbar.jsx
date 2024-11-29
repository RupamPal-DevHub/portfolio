"use client";

import { useState, useEffect } from "react";
import { X, Minus, PictureInPicture } from "lucide-react";

function updateTime() {
  const currentDate = new Date();
  const hours = currentDate.getHours().toString().padStart(2, "0");
  const minutes = currentDate.getMinutes().toString().padStart(2, "0");
  const seconds = currentDate.getSeconds().toString().padStart(2, "0");

  return `${hours} : ${minutes} : ${seconds}`;
}

const Topbar = ({ title }) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    setTime(updateTime());
    const interval = setInterval(() => {
      setTime(updateTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function closeTab() {
    if (window.close()) {
      console.log("Tab closed");
    } else {
      alert(
        "This tab cannot be closed programmatically. Please close it manually."
      );
    }
  }

  return (
    <div className="flex justify-between items-center py-2 px-4 bg-topblack rounded-t-2xl border-b border-bordercolor text-xs md:text-base">
      <div className="flex gap-1 md:gap-2 items-center">
        <div
          className="bg-red-600 rounded-full p-1 cursor-pointer"
          onClick={closeTab}
        >
          <X size={10} />
        </div>

        <div className="bg-yellow-500 rounded-full p-1">
          <PictureInPicture size={10} />
        </div>

        <div className="bg-green-600 rounded-full p-1">
          <Minus size={10} />
        </div>
      </div>

      <p className="font-bold">{title}</p>

      <p className="font-bold">{time}</p>
    </div>
  );
};

export default Topbar;
