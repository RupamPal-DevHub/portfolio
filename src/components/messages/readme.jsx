"use client";

const Readme = ({ curFol, formData }) => {
  return (
    <div key="help" className="font-bold mb-2 text-sm md:text-sm lg:text-base">
      <p className="text-green-400 font-bold">
        rupam@terminal :&nbsp;~{curFol}&nbsp;
        <span className="text-white">$</span> &nbsp;
        <span className="text-white font-normal">{formData}</span>
      </p>
      +++++++++++++++++++++++++++++
      <p>+📘 Command Documentation 📘+</p>
      +++++++++++++++++++++++++++++
      <br />
      <p>1. cd</p>
      <p>Description: Changes the directory.</p>
      <p>Example Usage:</p>
      <p>cd projects</p>
      ----------------------------------------------------
      <p>2. cd ..</p>
      <p>Description: Goes one level up in the directory hierarchy.</p>
      <p>Example Usage:</p>
      <p>cd ..</p>
      ----------------------------------------------------
      <p>3. ls</p>
      <p>Description: Lists all files and folders in the current directory.</p>
      <p>Example Usage:</p>
      <p>ls</p>
      ----------------------------------------------------
      <p>4. cat</p>
      <p>Description: Displays the content of a file.</p>
      <p>Example Usage:</p>
      <p>cat readme.md</p>
      ----------------------------------------------------
      <p>5. clear</p>
      <p>Description: Clears the terminal output.</p>
      <p>Example Usage:</p>
      <p>clear</p>
      ----------------------------------------------------
      <p>6. ./weather</p>
      <p>Description: Displays the current weather in your region (Kolkata).</p>
      <p>Example Usage:</p>
      <p>./weather</p>
      ----------------------------------------------------
      <p>7. ./portfolio</p>
      <p>Description: Redirects to the portfolio page.</p>
      <p>Example Usage:</p>
      <p>./portfolio</p>
      ----------------------------------------------------
      <p>8. ./contact</p>
      <p>Description: Redirects to the contact page.</p>
      <p>Example Usage:</p>
      <p>./contact</p>
      ----------------------------------------------------
      <p>9. terminal -v</p>
      <p>Description: Displays the current version of the terminal.</p>
      <p>Example Usage:</p>
      <p>terminal -v</p>
    </div>
  );
};

export default Readme;
