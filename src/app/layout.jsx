"use client";
import { useState, createContext } from "react";
import "./globals.css";
import BackgroundVideo from "@/components/backgroundVideo";
export const ThemeContext = createContext();

export default function RootLayout({ children }) {
  const [curTheme, setCurTheme] = useState("neonnights");
  function toggleTheme(e) {
    setCurTheme(e);
    console.log(e);
  }
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Terminal</title>
      </head>
      <body className="bg-black">
        <BackgroundVideo theme={curTheme} />
        <ThemeContext.Provider value={{ toggleTheme, curTheme }}>
          {children}
        </ThemeContext.Provider>
      </body>
    </html>
  );
}
