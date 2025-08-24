'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaCarouselType } from 'embla-carousel';
import Image from 'next/image';

const speakers = [
  {
    name: 'Mari Maria',
    title: 'CEO, Mari Maria Makeup®',
    bio: 'Uma das maiores influenciadoras de beleza e empreendedora, Mari Maria vai compartilhar suas estratégias de marketing para construir uma marca de cosméticos de sucesso global.',
    image: '/assets/mari.png',
    backgroundImage: '/assets/polar.png',
  },
  {
    name: 'Virginia Fonseca',
    title: 'Influenciadora e Fundadora da WePink',
    bio: 'Fenômeno das redes sociais e dos negócios, Virginia Fonseca abordará o poder do marketing de influência e como transformar seguidores em uma comunidade engajada e consumidora.',
    image: '/assets/virginia2.png',
    backgroundImage: '/assets/poros.png',
  },
];

const PrevButton = (props: { onClick: () => void; enabled: boolean }) => (
    <button className="embla__button embla__button--prev disabled:opacity-30" onClick={props.onClick} disabled={!props.enabled} aria-label="Slide anterior">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
    </button>
);
  
const NextButton = (props: { onClick: () => void; enabled: boolean }) => (
    <button className="embla__button embla__button--next disabled:opacity-30" onClick={props.onClick} disabled={!props.enabled} aria-label="Próximo slide">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
    </button>
);

export default function Speakers() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="speakers" className="w-full bg-brand-dark py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-brand-text mb-12">
          Nossas Palestrantes
        </h2>
        <div className="relative">
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
              {speakers.map((speaker, index) => (
                <div className="embla__slide flex-[0_0_20rem] min-w-0 pl-4" key={index}>
                  <div className="bg-brand-primary rounded-lg shadow-2xl p-6 h-full flex flex-col items-center relative overflow-hidden">

                    <Image
                      src={speaker.backgroundImage}
                      alt=""
                      fill
                      // MUDANÇA AQUI: Opacidade aumentada para 70%
                      className="object-cover opacity-70 z-0"
                    />

                    <div className="relative z-10 flex flex-col items-center h-full">
                      <div className="relative w-64 h-64 mb-4 rounded-full overflow-hidden border-4 border-white/50">
                        <Image
                          src={speaker.image}
                          alt={`Foto de ${speaker.name}`}
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-brand-accent text-center mt-2">{speaker.name}</h3>
                      <p className="text-sm font-light text-brand-text mb-3 text-center">{speaker.title}</p>
                      <p className="text-base text-gray-300 flex-grow text-center">{speaker.bio}</p>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 left-0"><PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} /></div>
          <div className="absolute top-1/2 -translate-y-1/2 right-0"><NextButton onClick={scrollNext} enabled={nextBtnEnabled} /></div>
        </div>
      </div>
    </section>
  );
}