// components/hotsite/Hero.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-full bg-brand-dark text-brand-text relative min-h-screen">
      <Image
        src="/assets/fundobrilho.png" 
        alt="Fundo decorativo"
        fill 
        priority 
        className="object-cover object-center opacity-40 z-0" 
      />
      <div className="container mx-auto flex flex-col items-center justify-center min-h-screen px-4 text-center relative z-10 pt-20 pb-20">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
            Feira de Marketing
            <span className="block text-brand-accent">ETEC Parque da Juventude</span>
          </h1>
          
          {/* DATA ADICIONADA AQUI */}
          <p className="mt-6 text-xl md:text-2xl font-semibold tracking-wide text-brand-text">
            19 de Outubro
          </p>

          <p className="mx-auto mt-4 max-w-[700px] text-lg md:text-xl text-gray-300">
            O maior evento que conecta os gigantes do marketing digital com a próxima geração de talentos.
          </p>
        </div>
        <div className="mt-8 animate-fade-in-up [animation-delay:0.4s]">
          <Link
            href="/landing-page"
            className="inline-flex h-12 items-center justify-center rounded-md bg-brand-primary px-8 text-base font-bold text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent border border-white animate-pulse"
          >
            Garanta sua Vaga Agora!
          </Link>
        </div>
      </div>
      <a href="#speakers" aria-label="Rolar para a próxima seção" className="absolute bottom-24 md:bottom-10 left-1/2 -translate-x-1/2 z-10">
        <svg className="w-8 h-8 text-white scroll-indicator" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </a>
    </section>
  );
}