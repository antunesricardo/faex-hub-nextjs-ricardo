import Cabecalho from "@/components/Header";
import Hero from "@/components/Hero";
import FuncionalidadesSecao from "@/components/Features";
import DepoimentosSecao from "@/components/Testimonials";
import ChamadaAcao from "@/components/CTA";
import Rodape from "@/components/Footer";

export default function PaginaInicial(): JSX.Element {
  return (
    <main>
      <Cabecalho />
      <Hero />
      <FuncionalidadesSecao />
      <DepoimentosSecao />
      <ChamadaAcao />
      <Rodape />
    </main>
  );
}
