import React from "react";
import { Instagram } from "lucide-react";
import "@/app/page.css";

export default function Footer() {
  const TikTokIcon = ({ color = "#000000" }) => {
    return (
      <svg
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        width="10%"
        height="100%"
      >
        <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
      </svg>
    );
  };

  return (
    <footer className="bg-black text-white py-12 px-8 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-serif mb-4">17th Beauty</h3>
          <p className="text-gray-400">
            Votre destination beauté au cœur de Paris
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Horaires d&lsquo;ouverture</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Lundi: Fermé</li>
            <li>Mardi - Dimanche: 10h - 19h</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Téléphone</h4>
          <ul className="space-y-2 text-gray-400">
            <li>07 82 49 69 08</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Suivez-nous</h4>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/17th_beauty"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#7b6a58] transition"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.tiktok.com/@17th_beauty"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#7b6a58] transition"
            >
              <TikTokIcon color="#fff" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
