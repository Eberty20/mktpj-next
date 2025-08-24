
import Navbar from '../../components/Navbar';
import Hero from '../../components/hotsite/Hero';
import Speakers from '../../components/hotsite/Speakers';
import Location from '../../components/hotsite/Location';
import Schedule from '../../components/hotsite/Schedule';
import CTASection from '../../components/hotsite/CTASection'; // 1. Importe o novo componente
import Sponsors from '../../components/hotsite/Sponsors';

export const metadata = { /* ... */ };

export default function Hotsite() {
  return (
    <>
      <Navbar />
      {/* ADICIONADO PADDING NO TOPO PARA EMPURRAR O CONTEÚDO */}
      <main >
        <Hero />
        <Speakers />
        <Location />
        <Schedule />
        <CTASection /> {/* 2. Use o componente aqui */}
        <Sponsors />
      </main>
    </>
  );
}