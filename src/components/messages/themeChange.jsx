"use client";

const ThemeChange = ({ curFol, formData, curTheme }) => {
  return (
    <div key="error" className="font-bold mb-2 text-sm md:text-sm lg:text-base">
      <p className="text-green-400">
        rupam@terminal :&nbsp;~{curFol}&nbsp;
        <span className="text-white">$</span> &nbsp;
        <span className="text-white font-normal">{formData}</span>
      </p>
      <p>{curTheme}</p>
      <p>Checkout themeguide.txt for more info!</p>
    </div>
  );
};

export default ThemeChange;
