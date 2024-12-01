"use client";

const FolderChange = ({ curFol, formData }) => {
  return (
    <div key="help" className="font-bold text-sm md:text-sm lg:text-base">
      <p className="text-green-400">
        rupam@terminal : ~{curFol}&nbsp;
        <span className="text-white">$</span>
        {"  "} &nbsp;
        <span className="text-white font-normal ">{formData}</span>
      </p>
    </div>
  );
};

export default FolderChange;
