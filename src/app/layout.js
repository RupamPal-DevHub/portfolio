"use client";
import "./globals.css";
import BackgroundVideo from "@/components/backgroundVideo";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black">
        {" "}
        <BackgroundVideo />
        {children}{" "}
      </body>
    </html>
  );
}
