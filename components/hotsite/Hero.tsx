// components/hotsite/Hero.tsx

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="w-full bg-brand-dark text-brand-text">
      <div className="container mx-auto flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Animação de entrada */}
        <div className="animate-fade-in-up">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
            Feira de Marketing
            <span className="block text-brand-accent">ETEC Parque da Juventude</span>
          </h1>
          <p className="mx-auto mt-6 max-w-[700px] text-lg md:text-xl text-gray-300">
            O maior evento que conecta os gigantes do marketing digital com a próxima geração de talentos.
          </p>
        </div>

        {/* Botão de Call to Action com animação e delay */}
        <div className="mt-8 animate-fade-in-up [animation-delay:0.4s]">
          <Link
            href="/landing-page"
            className="inline-flex h-12 items-center justify-center rounded-md bg-brand-primary px-8 text-base font-bold text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
          >
            Garanta sua Vaga Agora!
          </Link>
        </div>
      </div>
    </section>
  );
}