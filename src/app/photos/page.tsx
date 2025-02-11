import Navbar from "@/components/global/Navbar";
import React from "react";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { slides } from "@/lib/utils";
import Footer from "@/components/global/Footer";
export default function Photos() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-h-screen h-screen">
        <ParallaxScroll images={slides} />
      </div>
      <Footer />
    </div>
  );
}
