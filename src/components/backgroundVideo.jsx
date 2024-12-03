"use client";
import Image from "next/image";
import neonnights from "../../public/neonnights.gif";
import codeinpurple from "../../public/codeinpurple.gif";
import retailblues from "../../public/retailblues.gif";
import morningglow from "../../public/morningglow.gif";
import spookydusk from "../../public/spookydusk.gif";

export default function BackgroundVideo({ theme }) {
  function toggleBackground() {
    if (theme == "neonnights") {
      return neonnights;
    } else if (theme == "codeinpurple") {
      return codeinpurple;
    } else if (theme == "retailblues") {
      return retailblues;
    } else if (theme == "morningglow") {
      return morningglow;
    } else if (theme == "spookydusk") {
      return spookydusk;
    }
  }
  return (
    <div className="z-0">
      <Image
        src={toggleBackground()}
        unoptimized
        alt="Description of the image"
        className="w-full h-screen object-cover fixed z-0"
      />
    </div>
  );
}
