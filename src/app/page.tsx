import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Conceito from "@/components/Conceito";
import Espaco from "@/components/Espaco";
import Tratamentos from "@/components/Tratamentos";
import Diferenciais from "@/components/Diferenciais";
import Jornada from "@/components/Jornada";
import Sobre from "@/components/Sobre";
import Depoimentos from "@/components/Depoimentos";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main className="bg-ivory">
      <Header />
      <Hero />
      <Sobre />
      <Espaco />
      <Tratamentos />
      <Diferenciais />
      <Jornada />
      <Conceito />
      <Depoimentos />
      <CTAFinal />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
