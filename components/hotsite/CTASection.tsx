// components/hotsite/CTASection.tsx

import Link from 'next/link';

export default function CTASection() {
  return (
    <section id="cta" className="w-full bg-brand-primary py-20 px-4">
      <div className="container mx-auto text-center flex flex-col items-center animate-fade-in-up">
        
        <h2 className="text-3xl sm:text-5xl font-bold text-brand-text max-w-2xl">
          Pensado para quem sonha grande.
        </h2>
        
        <p className="mt-4 max-w-2xl text-lg text-gray-300">
          Esta feira é mais que um evento; é um palco montado no coração da ETEC Parque da Juventude, onde o marketing se revela como uma poderosa ferramenta de mudança. Conecte-se, aprenda e saia pronto para transformar o mercado.
        </p>

        {/* Botão idêntico ao do Hero */}
        <div className="mt-8">
          <Link
            href="/landing-page"
            // MUDANÇA AQUI: Adicionada a classe 'animate-pulse'
            className="inline-flex h-12 items-center justify-center rounded-md bg-brand-accent px-8 text-base font-bold text-white shadow-lg transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent border border-white animate-pulse"
          >
            Garanta sua Vaga Agora!
          </Link>
        </div>

      </div>
    </section>
  );
}