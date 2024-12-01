"use client";

const TerminalTxt = ({ curFol, formData }) => {
  return (
    <div key="error" className="font-bold mb-2 text-sm md:text-sm lg:text-base">
      <p className="text-green-400">
        rupam@terminal :&nbsp;~{curFol}&nbsp;
        <span className="text-white">$</span> &nbsp;
        <span className="text-white font-normal">{formData}</span>
      </p>
      <p>
        <br />
        +++++++++++++++++++++++++++++ <br />
        Terminal and Portfolio Project <br />
        +++++++++++++++++++++++++++++ <br />
        <span className="font-normal">This project isnt completed yet.</span>
      </p>
    </div>
  );
};

export default TerminalTxt;
