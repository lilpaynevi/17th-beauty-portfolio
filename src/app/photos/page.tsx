import Navbar from "@/components/global/Navbar";
import React from "react";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { comments, slides } from "@/lib/utils";
export default function Photos() {
  const images = [];

  return (
    <div>
      <Navbar />
      <div className="max-h-screen">
      <ParallaxScroll images={slides} />;

      </div>
    </div>
  );
}
