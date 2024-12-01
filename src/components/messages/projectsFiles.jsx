"use client";

const ProjectsFiles = ({ curFol, formData }) => {
  return (
    <div key="help" className="font-bold mb-2 text-sm md:text-sm lg:text-base">
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
    </div>
  );
};

export default ProjectsFiles;
