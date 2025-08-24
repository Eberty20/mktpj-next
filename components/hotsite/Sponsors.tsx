// components/hotsite/Sponsors.tsx

import Image from 'next/image';

const sponsors = [
  { name: 'WePink', logo: '/assets/wepink.svg' },
  { name: 'Mari Maria Makeup', logo: '/assets/makeup.svg' },
  { name: 'HEM', logo: '/assets/hem.svg' },
  { name: 'Globoplay', logo: '/assets/globoplay.svg' },
  { name: 'Mundo do Cabeleireiro', logo: '/assets/mundodocabeleireiro.svg' },
  { name: 'Sephora', logo: '/assets/sephora.svg' },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="w-full bg-brand-dark py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-brand-text mb-12">
          Patrocinadores Oficiais
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {sponsors.map((sponsor) => (
            <div key={sponsor.name} className="flex justify-center">
              {/* MUDANÇA AQUI: 
                As classes 'grayscale' e 'hover:grayscale-0' foram removidas.
                O hover:scale-110 foi mantido.
              */}
              <div className="relative h-16 w-32 transition-all duration-300 hover:scale-110">
                <Image
                  src={sponsor.logo}
                  alt={`Logo da ${sponsor.name}`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}