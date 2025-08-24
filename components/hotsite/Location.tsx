// components/hotsite/Location.tsx

import Image from 'next/image'; 
import Link from 'next/link'; 

// Link do mapa (para o botão "Ver mapa ampliado")
// Este URL é apenas para abrir o mapa em uma nova aba
const MAPS_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.661470472307!2d-46.62651292467149!3d-23.508699978836074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5882587e8607%3A0xa4cbaa38551a68e4!2sEtec%20Parque%20da%20Juventude!5e0!3m2!1spt-BR!2sbr!4v1756002633346!5m2!1spt-BR!2sbr"; 

export default function Location() {
  return (
    <section id="location" className="w-full bg-brand-dark py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-brand-text mb-4">
          Onde o Futuro do Marketing Acontece
        </h2>
        <p className="text-lg text-gray-300 mb-10">
          Etec Parque da Juventude - Av. Cruzeiro do Sul, 2630 - Santana, São Paulo - SP
        </p>

        {/* CONTAINER FLEX: Mapa (2/3) e imagem (1/3) */}
        <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto items-center">
            
          {/* 1. MAPA E ENDEREÇO (2/3) */}
          <div className="w-full md:w-2/3 rounded-lg overflow-hidden shadow-2xl p-4 bg-white/5 backdrop-blur-sm">

            {/* Endereço visível acima do mapa */}
            <div className="text-left text-brand-text mb-3">
                <p className="text-lg font-semibold">Etec Parque da Juventude</p>
                <p className="text-sm font-light text-gray-300">Av. Cruzeiro do Sul, 2630 - Santana, São Paulo - SP</p>
                <Link href={MAPS_URL} target="_blank" className="text-sm text-brand-accent hover:underline mt-1 block">
                    Ver mapa ampliado
                </Link>
            </div>

            {/* Iframe do mapa (2:3 aspect ratio) */}
            <div className="relative w-full aspect-[3/2] rounded-lg overflow-hidden">
                <iframe
                    // AQUI ESTÁ A CORREÇÃO: O SRC fornecido pelo usuário para garantir o pino!
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
                src="/assets/etecpj.jpg" 
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