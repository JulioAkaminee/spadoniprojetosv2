"use client"

import { ArrowRight, Building2, Droplets, Grid3X3, Layers } from "lucide-react";
import { motion, useInView } from "framer-motion";

import { useRef } from "react";

const services = [
  {
    icon: Building2,
    title: "Projeto de Vedações",
    description:
      "Elaboração das plantas de marcação, elevações em alvenaria/drywall com inserções das instalações e compatibilização entre as disciplinas.",
    features: [
      "Plantas de marcação de 1ª e 2ª fiada",
      "Elevações em alvenaria/drywall",
      "Quantitativo de blocos/drywall",
    ],
  },
  {
    icon: Grid3X3,
    title: "Projeto de Contrapiso",
    description:
      "Planta de identificação dos níveis, soleiras e degraus, planta de mapeamento e aproveitamento da manta acústica.",
    features: [
      "Identificação dos níveis",
      "Planta de cotas acabadas",
      "Planta de mapeamento",
    ],
  },
  {
    icon: Droplets,
    title: "Kit Hidráulico",
    description:
      "Elaboração do projeto racionalizado, marcação das passantes e furações, compatibilização com demais disciplinas.",
    features: [
      "Projeto racionalizado",
      "Marcação de passantes",
      "Quantitativo de peças utilizadas",
    ],
  },
  {
    icon: Layers,
    title: "Modelagem BIM",
    description:
      "Desenvolvimento de modelos paramétricos completos em BIM para maior precisão e eficiência no projeto e na obra.",
    features: [
      "Modelagem 3D completa",
      "Compatibilização multidisciplinar",
      "Documentação automatizada",
    ],
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="servicos"
      ref={ref}
      className="py-24 bg-white"
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
            Nossos Serviços
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6 font-playfair">
            Soluções completas em{" "}
            <span className="text-orange-500">engenharia</span>
          </h2>

          <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full" />

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-sm md:text-base font-dm-sans">
            Oferecemos uma gama completa de serviços de engenharia e arquitetura,
            sempre com foco na qualidade e eficiência.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 font-dm-sans">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center transition-colors group-hover:bg-orange-500">
                  <service.icon className="w-6 h-6 text-orange-500" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm text-gray-800"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 text-orange-500 font-medium text-sm hover:gap-3 transition-all"
                >
                  Saiba mais
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
