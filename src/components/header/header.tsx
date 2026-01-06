"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    setMounted(true);

    const onScroll = () => setScroll(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!mounted) return null;

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={container}
      className={`
        fixed top-0 left-0 w-full z-50
        flex items-center justify-between 
        px-6 py-3 md:px-14 lg:px-56
        transition-all duration-300 ease-in-out
        ${
          scroll
            ? "bg-white text-black backdrop-blur-md shadow-lg"
            : "bg-transparent text-white"
        }
      `}
    >
      {/* Logo */}
      <motion.div variants={item}>
        <Image
          src={
            scroll
              ? "/images/icons/LOGO_COMPLETO.svg"
              : "/images/icons/LOGO_COMPLETO_BRANCA.svg"
          }
          width={128}
          height={128}
          alt="Logo Spadoni Projetos"
          className="w-32"
          priority
        />
      </motion.div>

      {/* Botão menu mobile */}
      <motion.button
        variants={item}
        onClick={() => setMenuAberto(!menuAberto)}
        className={`
          md:hidden text-2xl cursor-pointer transition-colors duration-300
          ${scroll || menuAberto ? "text-black" : "text-white"}
        `}
        aria-label="Abrir menu"
      >
        ☰
      </motion.button>

      {/* Menu */}
      <motion.ul
        variants={container}
        className={`
          absolute left-0 top-full w-full
          flex flex-col items-center gap-6
          bg-white py-4 shadow-lg
          font-dmsans font-medium
          transition-all duration-300 ease-in-out
          md:static md:flex md:flex-row md:w-auto 
          md:bg-transparent md:py-0 md:shadow-none
          ${
            menuAberto
              ? "opacity-100 translate-y-0 "
              : "opacity-0 -translate-y-4 pointer-events-none"
          }
          md:opacity-100 md:translate-y-0 md:pointer-events-auto
        `}
      >
        {["Home", "Sobre", "Projetos", "Serviços", "Contato"].map(
          (itemLabel, index) => (
            <motion.li
              key={index}
              variants={item}
              className="
                cursor-pointer
                transition-colors duration-300
                text-current
              "
            >
              {itemLabel}
            </motion.li>
          )
        )}
        <motion.li variants={item}>
          <button className="py-2 px-4 botao-gradiente-laranja">
            Fale Conosco
          </button>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
}
