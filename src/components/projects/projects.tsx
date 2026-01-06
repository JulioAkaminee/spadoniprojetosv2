"use client"

import { motion, useInView } from "framer-motion";

import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    title: "SUNLIGHT",
    category: "Residencial",
    image: "/images/projetos/SUNLIGHT.svg",
  
  },
  {
    title: "VIEW RESIDENCE",
    category: "Comercial",
    image: "/images/projetos/VIEW RESIDENCE .svg",
   
  },
  {
    title: "MAISON'DOR",
    category: "Residencial",
    image: "/images/projetos/MAISON'DOR.svg",
   
  },
  
];
const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projetos"
      ref={ref}
      className="py-20 bg-zinc-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 font-medium text-sm tracking-wider uppercase font-dm-sans">
            Portfólio
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mt-3 mb-6 font-playfair">
            Projetos em <span className="text-orange-500 font-extrabold">destaque</span>
          </h2>

          <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-2xl shadow-lg group"
            >
              {/* Image */}
              <div className="aspect-[3/4]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 p-6">
                  <span className="text-orange-400 text-sm font-medium">
                    {project.category}
                  </span>
                  <h3 className="text-white text-xl font-semibold mt-1">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-sm mt-2">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Default Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity duration-500">
                <span className="text-orange-400 text-sm font-medium">
                  {project.category}
                </span>
                <h3 className="text-white text-xl font-semibold mt-1">
                  {project.title}
                </h3>
              </div>

              {/* Arrow */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#projetos"
            className=" hover:text-orange-500 font-medium  group botao-gradiente-laranja px-3 py-3"
          >
            Ver todos os projetos
            <ArrowUpRight className="w-4 h-4 transition-transform " />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
