"use client";

const ThemeGuideTxt = ({ curFol, formData }) => {
  return (
    <div key="error" className="font-bold mb-2 text-sm md:text-sm lg:text-base">
      <p className="text-green-400">
        rupam@terminal :&nbsp;~{curFol}&nbsp;
        <span className="text-white">$</span> &nbsp;
        <span className="text-white font-normal">{formData}</span>
      </p>
      <p>
        <br />
        +++++++++++++++++++++++++++++
        <br />
        ThemeGuide <br /> +++++++++++++++++++++++++++++ <br />
        <br />
        1. CodeInPurple <br /> + Description:{" "}
        <span className="font-normal">
          Immerse in a deep purple night city with a coder vibe.{" "}
        </span>
        <br /> + Set Theme: <span className="underline">run codeinpurple</span>
        <br />
        <br />
        2. RetailBlues <br /> + Description:{" "}
        <span className="font-normal">
          Experience a bluish serene city outside a retail shop.{" "}
        </span>
        <br /> + Set Theme: <span className="underline">run retailblues</span>
        <br />
        <br />
        3. MorningGlow <br /> + Description:{" "}
        <span className="font-normal">
          Wake up to a vibrant, lively morning cityscape.{" "}
        </span>
        <br /> + Set Theme: <span className="underline">run morningglow</span>
        <br />
        <br />
        4. SpookyDusk <br /> + Description:{" "}
        <span className="font-normal">
          Enter a brownish, eerie Halloween-inspired night.{" "}
        </span>
        <br /> + Set Theme: <span className="underline">run spookydusk</span>
        <br />
        <br />
        5. NeonNights <br /> + Description:{" "}
        <span className="font-normal">
          Dive into a futuristic city under glowing purple neon lights.{" "}
        </span>
        <br /> + Set Theme: <span className="underline">run neonnights</span>
        <br /> <br />
        You can easily switch themes by running the corresponding command in
        your portfolio's terminal!
      </p>
    </div>
  );
};

export default ThemeGuideTxt;
