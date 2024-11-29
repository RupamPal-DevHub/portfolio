"use client";
import { useRouter } from "next/navigation";

const Navbar = ({ curPage }) => {
  const router = useRouter();
  return (
    <div className="bg-navbar w-full py-1 px-4 md:px-8 flex gap-3 md:gap-5 text-sm border-b border-bordercolor">
      <p
        className={`font-bold hover:underline cursor-pointer ${
          curPage == "home" ? "underline" : null
        }`}
        onClick={() => router.push("/portfolio")}
      >
        Home
      </p>
      <p
        className={`font-bold hover:underline cursor-pointer ${
          curPage == "about" ? "underline" : null
        }`}
        onClick={() => router.push("/about")}
      >
        AboutMe
      </p>
      <p
        className={`font-bold hover:underline cursor-pointer ${
          curPage == "projects" ? "underline" : null
        }`}
        onClick={() => router.push("/projects")}
      >
        Projects
      </p>
      <p
        className={`font-bold hover:underline cursor-pointer ${
          curPage == "contact" ? "underline" : null
        }`}
        onClick={() => router.push("/contact")}
      >
        ContactMe
      </p>
    </div>
  );
};

export default Navbar;
