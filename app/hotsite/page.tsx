
import Navbar from '../../components/Navbar';
import Hero from '../../components/hotsite/Hero';
import Speakers from '../../components/hotsite/Speakers';
import Location from '../../components/hotsite/Location';
import Schedule from '../../components/hotsite/Schedule';
import CTASection from '../../components/hotsite/CTASection'; 
import Sponsors from '../../components/hotsite/Sponsors';

export const metadata = { /* ... */ };

export default function Hotsite() {
  return (
    <>
      <Navbar />
      
      <main >
        <Hero />
        <Speakers />
        <Location />
        <Schedule />
        <CTASection /> 
        <Sponsors />
      </main>
    </>
  );
}
