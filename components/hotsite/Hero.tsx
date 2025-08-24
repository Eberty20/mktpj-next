// components/hotsite/Hero.tsx

import Link from 'next/link';
import Image from 'next/image'; // Importar o componente Image

export default function Hero() {
  return (
    // LINHA AJUSTADA: min-h-screen para ocupar a tela inteira verticalmente
    <section className="w-full bg-brand-dark text-brand-text relative min-h-screen">
      
      {/* IMAGEM DE FUNDO */}
      <Image
        src="/assets/parque-da-juventude.jpg" 
        alt="Foto da ETEC Parque da Juventude, local do evento"
        fill 
        priority 
        // opacity-40 para escurecer a imagem e realçar o texto
        className="object-cover object-center opacity-40 z-0" 
      />

      {/* CONTEÚDO DO HERO (TEXTO E BOTÃO) */}
      {/* LINHA AJUSTADA: min-h-screen para garantir que o conteúdo se centre na tela inteira */}
      <div className="container mx-auto flex flex-col items-center justify-center min-h-screen px-4 text-center relative z-10">
        
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
            // LINHA AJUSTADA: Adicionadas classes border e border-white para o contorno
            className="inline-flex h-12 items-center justify-center rounded-md bg-brand-primary px-8 text-base font-bold text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent border border-white"
          >
            Garanta sua Vaga Agora!
          </Link>
        </div>
      </div>
    </section>
  );
}