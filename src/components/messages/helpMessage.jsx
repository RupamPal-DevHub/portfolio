"use client";

const HelpMessage = ({ curFol, formData }) => {
  return (
    <div key="help" className="font-bold mb-2 text-sm md:text-sm lg:text-base">
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
    </div>
  );
};

export default HelpMessage;
