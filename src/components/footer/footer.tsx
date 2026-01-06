"use client"

import { ArrowUp } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-zinc-900 text-zinc-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
            
              <div>
               <Image
                           src={"/images/icons/LOGO_COMPLETO_BRANCA.svg"}
                             
                           
                           width={128}
                           height={128}
                           alt="Logo Spadoni Projetos"
                           className="w-32"
                           priority
                         />
              </div>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              Excelência em projetos de engenharia e arquitetura.
              Transformando ideias em realidade desde 2009.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              {["Home", "Sobre", "Projetos", "Serviços", "Contato"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-zinc-400 hover:text-orange-500 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>(11) 94422-0989</li>
              <li>(11) 3660-1080</li>
              <li>contato@spadoniprojetos.com.br</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Spadoni Projetos. Todos os direitos reservados.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
            className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center
                       hover:border-orange-500 hover:text-orange-500 transition-all duration-300"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
