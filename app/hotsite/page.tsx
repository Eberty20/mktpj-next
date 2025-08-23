import { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Hero from '../../components/hotsite/Hero';
import Speakers from '../../components/hotsite/Speakers';
import Location from '../../components/hotsite/Location';
import Schedule from '../../components/hotsite/Schedule';
import Sponsors from '../../components/hotsite/Sponsors'; // 1. Importe o novo componente

export const metadata = { /* ... */ };

export default function Hotsite() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Speakers />
        <Location />
        <Schedule />
        <Sponsors /> {/* 2. Use o componente aqui */}
      </main>
    </>
  );
}