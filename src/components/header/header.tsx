import Image from "next/image";

export default function Header() {
  return (
    <nav className="flex justify-between px-56 py-10 items-center">
      <Image
        src={"/images/icons/LOGO_COMPLETO.svg"}
        width={128}
        height={128}
        alt="LogoSpadoniProjetos"
      />
      <div className="flex">
        <ul className="flex items-center gap-5 font-dm-sans  ">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Sobre</li>
          <li className="cursor-pointer">Projetos</li>
          <li className="cursor-pointer">Serviços</li>
          <li className="cursor-pointer">Contato</li>
          <button
            class="inline-flex items-center justify-center
         px-4 py-2
         rounded-full
         font-dmsans font-semibold
         text-white
         bg-gradient-to-r from-orange-400 to-orange-500
         shadow-lg shadow-orange-500/40
         transition-all duration-300
         hover:scale-105 hover:shadow-orange-500/60 cursor-pointer"
          >
            Fale Conosco
          </button>
        </ul>
      </div>
    </nav>
  );
}
