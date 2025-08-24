// app/landing-page/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import RegistrationForm from '../../components/landing-page/RegistrationForm';

export const metadata = {
  title: 'Inscrição | Feira de Marketing ETEC 2025',
  description: 'Participe da maior feira de marketing de 2025 com Mari Maria e Virginia Fonseca.',
};

export default function LandingPage() {
  return (
    // MUDANÇA AQUI: Trocamos 'bg-etec-photo' pela nossa classe '.fundo-etec'
    <main className="relative min-h-screen fundo-etec bg-cover bg-center flex items-center justify-center p-4 md:p-8">
      <div className="absolute inset-0 bg-brand-dark opacity-60"></div>
      
      {/* MUDANÇA AQUI: Trocamos 'bg-spray-effect' pela nossa classe '.fundo-spray' */}
      <div className="absolute inset-0 fundo-spray bg-no-repeat bg-center opacity-10 z-0"></div>

      <div className="relative z-10 w-full max-w-5xl grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        
        <div className="text-white text-center md:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold uppercase tracking-wider text-brand-text">
            Participe da Maior Feira de Marketing de 2025
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Conecte-se com os maiores nomes do marketing e descubra as novas tendências.
          </p>
          
          <div className="mt-10 flex gap-10 justify-center md:justify-start items-center">
            <div className="text-center">
              <Image src="/assets/mari.png" alt="Mari Maria" width={140} height={140} className="rounded-full mx-auto border-2 border-brand-accent" />
              <h3 className="mt-4 text-xl font-bold">Mari Maria</h3>
            </div>
            <div className="text-center">
              <Image src="/assets/virginia2.png" alt="Virginia Fonseca" width={140} height={140} className="rounded-full mx-auto border-2 border-brand-accent" />
              <h3 className="mt-4 text-xl font-bold">Virginia</h3>
            </div>
          </div>

          <div className="mt-12 text-center md:text-left">
            <Link 
              href="/hotsite" 
              className="py-3 px-6 text-brand-text font-bold border-2 border-brand-accent rounded-lg hover:bg-brand-accent hover:text-white transition-all duration-300"
            >
              Ver Site Completo do Evento →
            </Link>
          </div>
        </div>
        
        <div className="w-full">
          <RegistrationForm />
        </div>

      </div>
    </main>
  );
}