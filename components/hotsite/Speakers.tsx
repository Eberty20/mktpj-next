'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaCarouselType } from 'embla-carousel'; // Importação corrigida
import Image from 'next/image';

const speakers = [
  {
    name: 'Mari Maria',
    title: 'CEO, Mari Maria Makeup®',
    bio: 'Uma das maiores influenciadoras de beleza e empreendedora, Mari Maria vai compartilhar suas estratégias de marketing para construir uma marca de cosméticos de sucesso global.',
    image: '/assets/marisobre.png',
  },
  {
    name: 'Virginia Fonseca',
    title: 'Influenciadora e Fundadora da WePink',
    bio: 'Fenômeno das redes sociais e dos negócios, Virginia Fonseca abordará o poder do marketing de influência e como transformar seguidores em uma comunidade engajada e consumidora.',
    image: '/assets/virginiasobre.png',
  },
];

const PrevButton = (props: { onClick: () => void; enabled: boolean }) => (
    <button
      className="embla__button embla__button--prev disabled:opacity-30"
      onClick={props.onClick}
      disabled={!props.enabled}
      aria-label="Slide anterior"
    >
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
    </button>
  );
  
  const NextButton = (props: { onClick: () => void; enabled: boolean }) => (
    <button
      className="embla__button embla__button--next disabled:opacity-30"
      onClick={props.onClick}
      disabled={!props.enabled}
      aria-label="Próximo slide"
    >
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
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
        <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-text">
              Nossas Palestrantes
            </h2>
            <div className="flex items-center space-x-4">
              <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
              <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
            </div>
        </div>

        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {speakers.map((speaker, index) => (
              <div className="embla__slide flex-[0_0_90%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_33%] min-w-0 pl-4" key={index}>
                <div className="bg-brand-primary rounded-lg shadow-2xl p-6 h-full flex flex-col">
                  <div className="relative w-full h-64 mb-4">
                    <Image
                      src={speaker.image}
                      alt={`Foto de ${speaker.name}`}
                      fill
                      className="rounded-md object-cover object-top"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-accent">{speaker.name}</h3>
                  <p className="text-sm font-light text-brand-text mb-3">{speaker.title}</p>
                  <p className="text-base text-gray-300 flex-grow">{speaker.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}