import About from "@/components/about/about";
import Contact from "@/components/contacts/contact";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import Projects from "@/components/projects/projects";
import Services from "@/components/services/services";
export default function Home() {
  return (
  <>
  <Header/>
  <Hero/>
  <About/>
  <Projects/>
  <Services/>
  <Contact/>
  <Footer/>
  </>
  );
}
