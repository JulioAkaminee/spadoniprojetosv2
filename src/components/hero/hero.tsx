"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/background/image-background.jpg"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
      </div>

      {/* Content */}
      <div className="relative flex flex-col justify-center items-center w-full z-10 container-custom section-padding pt-20">
        <div className="ml-20 mr-20 max-w-3xl  ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 text-[#f49d25] bg-[#f49d2533] backdrop-blur-sm border border-accent/30 rounded-full text-accent text-sm font-medium mb-6">
              Engenharia & Arquitetura
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-extrabold heading-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-6 font-playfair tracking-[-0.025em]"
          >
            Transformando <span className="text-[#F49E16]">ideias</span> em
            realidade
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed font-dm-sans"
          >
            Projetos precisos e eficientes em 2D e BIM. Descubra a excelência em
            projetos de vedações, arquitetura, kit hidráulico e contrapiso.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#contato" className="botao-gradiente-laranja pt-[20px] pb-[20px] pl-[20px] pr-[20px] ">
              Entre em Contato
              <ArrowRight size={20} />
            </a>
            <a href="#projetos" className="btn-outline-light font-dm-sans hover:bg-[#ffffff29] hover:scale-105">
              Ver Projetos
            </a>
          </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 md:mt-10 grid grid-cols-3 gap-8 max-w-xl text-white"
        >
          {[
            { value: "100+", label: "Projetos" },
            { value: "4+", label: "Anos" },
            { value: "15+", label: "Clientes" },
          ].map((stat, index) => (
            <div key={index} className="text-center font-playfair text-[#f49d25] md:text-left">
              <div className="text-3xl md:text-4xl  font-bold text-accent mb-1">
                {stat.value}
              </div>
              <div className="text-white/60 text-sm font-dm-sans">{stat.label}</div>
            </div>
          ))}
        </motion.div>
        </div>

        {/* Stats */}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="hidden md:block absolute bottom-4 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2 ">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-[#f49d25] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
