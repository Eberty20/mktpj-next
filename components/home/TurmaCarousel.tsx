'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaCarouselType } from 'embla-carousel'; // 1. IMPORTAÇÃO CORRIGIDA
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

const images = [
  '/assets/turma1.jpg',
  '/assets/turma2.jpg',
  '/assets/turma3.jpg',
  '/assets/turma4.jpg',
  '/assets/turma5.jpg',
  '/assets/turma6.jpg',
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

export default function TurmaCarousel() {
  const autoplay = React.useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay.current]);
  
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  // 2. AJUSTE PARA RESETAR O AUTOPLAY
  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      autoplay.current.reset(); // Zera o contador
    }
  }, [emblaApi, autoplay]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      autoplay.current.reset(); // Zera o contador
    }
  }, [emblaApi, autoplay]);

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
    <div className="w-full max-w-3xl mx-auto mt-12 relative">
      <div className="embla overflow-hidden rounded-lg" ref={emblaRef}>
        <div className="embla__container flex">
          {images.map((src, index) => (
            <div className="embla__slide relative flex-[0_0_100%] aspect-video" key={index}>
              <Image src={src} alt={`Foto da turma de marketing ${index + 1}`} fill className="object-cover"/>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute top-1/2 -translate-y-1/2 left-4">
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-4">
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
    </div>
  );
}