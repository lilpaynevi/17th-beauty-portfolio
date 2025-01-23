import Navbar from "@/components/global/Navbar";
import React from "react";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import {  slides } from "@/lib/utils";
export default function Photos() {
  

  return (
    <div>
      <Navbar />
      <div className="max-h-screen">
      <ParallaxScroll images={slides} />;

      </div>
    </div>
  );
}
