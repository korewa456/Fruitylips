import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {
  return (
    <div className="flex flex-col bg-black w-screen h-56 justify-evenly ">
      <div className="flex flex-row justify-evenly">
        <div className="flex flex-row">
          <div className="text-xl text-white m-3 cursor-pointer">About</div>
          <div className="text-xl text-white m-3 cursor-pointer">Home</div>
          <div className="text-xl text-white m-3 cursor-pointer">
            Contact Us
          </div>
        </div>
        <div className="flex text-xl text-white m-3 gap-3 cursor-pointer">
          <GoogleIcon />
          <InstagramIcon />
          <FacebookIcon />
          <TwitterIcon />
          <YouTubeIcon />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="text-white px-24">
          The statements contained in this website have not been evaluated by
          the Food and Drug Administration (FDA). No statements shall be
          construed as a claim or representation of a diagnosis, treatment,
          cure, or prevention of any disease. No product listed in this website
          is intended to diagnose, treat, cure, or prevent any disease. Products
          are not intended for those with a medical condition, pregnant or
          nursing.
        </div>
        <div className="text-white px-12">@ 2023 Fruitylips</div>
      </div>
    </div>
  );
}
