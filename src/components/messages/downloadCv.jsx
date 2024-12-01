"use client";

const DownloadCv = ({ curFol, formData }) => {
  return (
    <div key="error" className="font-bold mb-2 text-sm md:text-sm lg:text-base">
      <p className="text-green-400">
        rupam@terminal :&nbsp;~{curFol}&nbsp;
        <span className="text-white">$</span> &nbsp;
        <span className="text-white font-normal">{formData}</span>
      </p>
      <p>downloading... Done✅</p>
    </div>
  );
};

export default DownloadCv;
