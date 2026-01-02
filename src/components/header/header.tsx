"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50
        flex items-center justify-between
        px-6 py-3 md:px-14 lg:px-56
        transition-all duration-300 ease-in-out
        ${scroll ? "bg-white text-black backdrop-blur-md shadow-lg" : "bg-transparent text-white"}
      `}
    >
      {/* Logo */}
      <Image
        src="/images/icons/LOGO_COMPLETO.svg"
        width={128}
        height={128}
        alt="Logo Spadoni Projetos"
        className="w-32"
        priority
      />

      {/* Botão menu mobile */}
      <button
        onClick={() => setMenuAberto(!menuAberto)}
        className={`md:hidden text-2xl cursor-pointer transition-colors duration-300 ${
          scroll ? "text-black" : "text-white"
        }`}
        aria-label="Abrir menu"
      >
        ☰
      </button>

      {/* Menu */}
      <ul
        className={`
          absolute left-0 top-full w-full
          flex flex-col items-center gap-6
          bg-white py-4 shadow-lg
          font-dmsans font-medium
          transition-all duration-300 ease-in-out
          md:static md:flex md:flex-row md:w-auto
          md:bg-transparent md:py-0 md:shadow-none
          ${menuAberto ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
          md:opacity-100 md:translate-y-0 md:pointer-events-auto
        `}
      >
        {["Home", "Sobre", "Projetos", "Serviços", "Contato"].map((item, index) => (
          <li
            key={index}
            className={`cursor-pointer transition-colors duration-300 ${
              scroll ? "md:text-black" : "md:text-white"
            }`}
          >
            {item}
          </li>
        ))}
        <li>
          <button
            className={`
              inline-flex min-w-max items-center justify-center
              px-6 py-3 rounded-full
              font-dmsans font-semibold
              text-white 
              bg-gradient-to-r from-orange-400 to-orange-500
              shadow-lg shadow-orange-500/40
              transition-all duration-300
              hover:scale-105 hover:shadow-orange-500/60
            `}
          >
            Fale Conosco
          </button>
        </li>
      </ul>
    </nav>
  );
}
