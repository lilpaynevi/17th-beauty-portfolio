import Image from "next/image";
import { Clock, MapPin, Phone } from "lucide-react";
import React from "react";
import "@/app/page.css";

export default function Header() {
  return (
    <div>
      <header className="relative h-[680px]">
        <div className="absolute inset-0  ">
          <Image
            src="https://res.cloudinary.com/wavy/image/upload/f_auto,q_auto,w_1366/v1734700998/production/shop-website-renderer/430897/65cf8f2bfce28bd6055aec54/banner-5ac83f75-f464-4efe-a776-2aaa60cf2c2a.bannercpid.jpg"
            alt="17th Beauty"
            className="w-full h-[680px] object-cover"
            width={500}
            height={300}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="p-14 relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <div className="mt-12 p-12 text-white/90 text-xl mb-8 max-w-2xl mx-auto text-center bg-gradient-to-r from-black via-[#d5c381] to-black bg-clip-text text-transparent animate-textclip shadow-md text-2.5xl tracking-wide">
            <h2 className="text-5xl font-serif text-white mb-6">17th Beauty</h2>
            <p>
              {" "}
              Salon de coiffure et d &lsquo; onglerie à Paris <br /> 196
              Boulevard Malesherbes (75017)
            </p>
          </div>
          <a
            href="https://widget.treatwell.fr/salon/shay-beauty-2/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-or text-white px-8 py-3 rounded-full hover:bg-[#87613d] transition"
          >
            Réserver
          </a>
        </div>
      </header>
      {/* Info Bar */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 -mt-10 mx-auto max-w-6xl px-4 relative z-20">
        <div className="bg-white px-6  py-4 xl:py-0 rounded-lg shadow-sm flex items-center gap-4">
          <Clock className="w-6 h-6 text-[#7b6a58]" />
          <div>
            <p className="font-medium">Horaires</p>
            <p className="text-sm text-gray-900">10h - 19h</p>
          </div>
        </div>
        <div className="bg-white px-6 py-4 xl:py-0 rounded-lg shadow-sm flex items-center gap-4">
          <MapPin className="w-6 h-6 text-[#7b6a58]" />
          <div>
            {/* <p className="font-medium">Adresse</p> */}
            <p className="text-sm text-gray-900">
              196 Boulevard Malesherbes, 75017 Paris
            </p>
          </div>
        </div>
        <div className="bg-white px-6  py-4 xl:py-0 rounded-lg shadow-sm flex items-center gap-4">
          <Phone className="w-6 h-6 text-[#7b6a58]" />
          <div>
            <p className="text-sm text-gray-900">07 82 49 69 08</p>
          </div>
        </div>
        <a
          href="https://widget.treatwell.fr/salon/shay-beauty-2/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-or p-6 rounded-lg shadow-sm text-center text-white hover:bg-[#87613d] transition"
        >
          RÉSERVER
        </a>
      </div>
    </div>
  );
}
