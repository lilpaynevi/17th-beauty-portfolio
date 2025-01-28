"use client";
import Link from "next/link";
import React, { useState } from "react";
import "@/app/page.css";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="bg-black fixed z-50 w-full border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            rel="noopener noreferrer"
            className="block text-[#7b6a58] py-2 px-3 hover:text-[#87613d] transition"
          >
            <Image
              alt="17th Beauty"
              src="https://res.cloudinary.com/wavy/image/upload/f_auto,q_auto,h_288/v1710508584/production/shop-website-renderer/430897/65cf8f2bfce28bd6055aec54/logocpid-1717f90a-ec0d-4fab-958b-5aef99f087af.jpg"
              decoding="async"
              width={140}
              height={140}
              data-nimg="fill"
            />
          </Link>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="/"
                  rel="noopener noreferrer"
                  className="block text-[#7b6a58] py-2 px-3 hover:text-[#87613d] transition"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  rel="noopener noreferrer"
                  className="block text-[#7b6a58] py-2 px-3 hover:text-[#87613d] transition"
                >
                  Carte des services
                </Link>
              </li>
              <li>
                <Link
                  href="/photos"
                  rel="noopener noreferrer"
                  className="block text-[#7b6a58] py-2 px-3 hover:text-[#87613d] transition"
                >
                  Photos
                </Link>
              </li>
              <li className="flex justify-center py-2">
                <a
                  href="https://www.instagram.com/17th_beauty"
                  className="text-[#7b6a58] hover:text-[#87613d] transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              </li>
              <li className="py-2">
                <a
                  href="https://www.google.com/search?sca_esv=3f65f6f3feeae64f&sca_upv=1&q=17th+beauty+paris"
                  rel="noopener noreferrer"
                  className="block bg-or p-2 px-3 rounded-lg shadow-sm text-center text-white hover:bg-[#87613d] transition"
                >
                  Avis
                </a>
              </li>
              <li className="py-2">
                <a
                  href="https://widget.treatwell.fr/salon/shay-beauty-2/?utm_source=partner&amp;amp;utm_medium=salon-site-embedded-book-now-widget"
                  rel="noopener noreferrer"
                  className="block bg-or p-2 px-3 rounded-lg shadow-sm text-center text-white hover:bg-[#87613d] transition"
                >
                  RÉSERVER
                </a>
              </li>
              <li className="py-2">
                <a
                  href="https://www.tiktok.com/@17th_beauty?_t=8kRvC4NmnE8&_r=1"
                  rel="noopener noreferrer"
                  className="block bg-or p-2 px-3 rounded-lg shadow-sm text-center text-white hover:bg-[#87613d] transition"
                >
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
