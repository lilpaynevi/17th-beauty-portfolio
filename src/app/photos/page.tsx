import Navbar from "@/components/global/Navbar";
import React from "react";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { slides } from "@/lib/utils";
export default function Photos() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-h-screen h-screen">
        <ParallaxScroll images={slides} />
      </div>
    </div>
  );
}
