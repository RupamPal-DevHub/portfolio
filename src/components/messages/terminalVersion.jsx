"use client";

const TerminalVersion = ({ curFol, formData }) => {
  return (
    <div key="error" className="mb-2 font-bold text-sm md:text-sm lg:text-base">
      <p className="text-green-400">
        rupam@terminal :&nbsp;~{curFol}&nbsp;
        <span className="text-white">$</span> &nbsp;
        <span className="text-white font-normal">{formData}</span>
      </p>
      <p>1.4.5</p>
      <p>last updated on - 04/11/24</p>
    </div>
  );
};

export default TerminalVersion;
