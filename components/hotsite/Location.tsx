// components/hotsite/Location.tsx

import Image from 'next/image'; 
import Link from 'next/link'; 

const MAPS_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.661470472307!2d-46.62651292467149!3d-23.508699978836074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5882587e8607%3A0xa4cbaa38551a68e4!2sEtec%20Parque%20da%20Juventude!5e0!3m2!1spt-BR!2sbr!4v1756002633346!5m2!1spt-BR!2sbr"; 

export default function Location() {
  return (
    // MUDANÇA 1: Adicionamos 'relative' para o posicionamento da imagem de fundo
    <section id="location" className="w-full py-20 px-4 relative">
        
        {/* IMAGEM DE FUNDO (nova) */}
        <Image
          src="/assets/parque-da-juventude.jpg" // A imagem que você quer de fundo
          alt="Foto da ETEC Parque da Juventude, local do evento"
          fill 
          priority 
          className="object-cover object-center opacity-20 z-0" // Opacidade para escurecer
        />

      {/* MUDANÇA 2: Adicionamos 'relative' e 'z-10' para o conteúdo ficar na frente */}
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-brand-text mb-4">
          Onde o Futuro do Marketing Acontece
        </h2>
        
        {/* Removido o parágrafo de endereço daqui pois já está no card do mapa */}

        <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto items-center mt-10">
            
          {/* 1. MAPA E ENDEREÇO (2/3) */}
          {/* Card com fundo semi-transparente para dar contraste com a imagem de fundo */}
          <div className="w-full md:w-2/3 rounded-lg overflow-hidden shadow-2xl p-4 bg-brand-dark/50 backdrop-blur-sm">

            <div className="text-left text-brand-text mb-3">
                <p className="text-lg font-semibold">Etec Parque da Juventude</p>
                <p className="text-sm font-light text-gray-300">Av. Cruzeiro do Sul, 2630 - Santana, São Paulo - SP</p>
                <Link href={MAPS_URL} target="_blank" className="text-sm text-brand-accent hover:underline mt-1 block">
                    Ver mapa ampliado
                </Link>
            </div>
            
            <div className="relative w-full aspect-[3/2] rounded-lg overflow-hidden">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.661470472307!2d-46.62651292467149!3d-23.508699978836074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5882587e8607%3A0xa4cbaa38551a68e4!2sEtec%20Parque%20da%20Juventude!5e0!3m2!1spt-BR!2sbr!4v1756002633346!5m2!1spt-BR!2sbr"
                    className="absolute top-0 left-0 w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
          </div>
            
          {/* 2. IMAGEM (1/3) */}
          <div className="hidden md:block w-full md:w-1/3 relative rounded-lg overflow-hidden shadow-2xl aspect-[3/2]">
            <Image
                src="/assets/parque-da-juventude.jpg" 
                alt="Foto da ETEC Parque da Juventude"
                fill
                className="object-cover object-center"
            />
          </div>

        </div>
      </div>
    </section>
  );
}