"use client";

const downloadCV = () => {
  const link = document.createElement("a");
  link.href = "/CV_RupamPal.pdf";
  link.download = "RupamPal.pdf";
  link.click();
};
module.exports = downloadCV;
