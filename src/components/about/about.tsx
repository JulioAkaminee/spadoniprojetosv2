import { CheckCircle } from "lucide-react";

const features = [
  "Projetos em plataforma bidimensional (AutoCAD)",
  "Modelagem paramétrica BIM (Building Information Modeling)",
  "Equipe técnica qualificada",
  "Projetos compatibilizados e racionalizados",
];

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="text-[var(--bg-text)] font-medium font-dm-sans text-sm tracking-wider uppercase">
              Quem Somos
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mt-3 mb-6 font-playfair">
              Excelência em cada{" "}
              <span className="text-[var(--bg-text)]">projeto</span>
            </h2>

            <div className="w-20 h-1 bg-accent mb-8 rounded " />

            <p className="text-muted-foreground leading-relaxed mb-6 font-dm-sans">
              A Spadoni Projetos foi fundada pelo Eng° Marcos Vinicius e Arq°
              Flávia Leandro, reunindo anos de experiência desenvolvendo
              projetos de vedações, arquitetura, engenharia, kit hidráulico e
              contrapiso.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8 font-dm-sans">
              Desenvolvemos os projetos em plataforma bidimensional ou
              paramétrica BIM. Contamos com uma equipe técnica qualificada, em
              oferecer um projeto compatibilizado e racionalizado para o
              cliente, resultando em uma maior eficiência na obra.
            </p>

            <ul className="space-y-4 font-dm-sans">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual */}
          <div className="flex justify-center w-full lg:justify-end ">
            <div className="bg-[#181d25] rounded-2xl p-10 w-full  shadow-lg">
              <div className="space-y-8 ">
                <div>
                  <div className="text-5xl font-bold font-playfair text-[var(--bg-text)]  mb-2">
                    15+
                  </div>
                  <div className="text-primary-foreground/70 font-dm-sans text-white/60">
                    Anos de experiência no mercado
                  </div>
                </div>
                
                <hr className="text-white/60" />

                <div>
                  <div className="text-5xl font-bold font-playfair text-[var(--bg-text)]  mb-2">
                    500+
                  </div>
                  <div className="text-primary-foreground/70 text-white/60 font-dm-sans">
                    Projetos entregues com sucesso
                  </div>
                </div>

                <hr className="text-white/60" />

                <div>
                  <div className="text-5xl font-bold text-[var(--bg-text)]  mb-2 font-playfair ">
                    100%
                  </div>
                  <div className="text-primary-foreground/70 text-white/60 font-dm-sans">
                    Compromisso com qualidade
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
