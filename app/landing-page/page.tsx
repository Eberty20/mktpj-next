// app/landing-page/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';
import RegistrationForm from '../../components/landing-page/RegistrationForm';

export const metadata: Metadata = {
  title: 'Inscrição | Feira de Marketing ETEC 2025',
  description: 'Participe da maior feira de marketing de 2025 com Mari Maria e Virginia Fonseca.',
};

export default function LandingPage() {
  return (
    // Container principal com a foto da ETEC de fundo
    <main className="relative min-h-screen bg-etec-photo bg-cover bg-center flex items-center justify-center p-4">
      {/* Overlay escuro para dar contraste e facilitar a leitura */}
      <div className="absolute inset-0 bg-brand-dark opacity-80"></div>
      
      {/* Container do conteúdo */}
      <div className="relative z-10 w-full max-w-5xl bg-brand-primary/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Coluna da Esquerda: Informações do Evento */}
          <div className="text-white text-center md:text-left">
            <h1 className="text-3xl lg:text-4xl font-bold uppercase tracking-wider">
              Participe da Maior Feira de Marketing de 2025
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Conecte-se com os maiores nomes do marketing e descubra as novas tendências.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-8 justify-center md:justify-start">
              <div className="text-center">
                <Image src="/assets/marimaria.png" alt="Mari Maria" width={120} height={120} className="rounded-full mx-auto border-4 border-brand-accent" />
                <h3 className="mt-4 text-xl font-bold">Mari Maria</h3>
                <p className="text-gray-300">Influencer e Empresária</p>
              </div>
              <div className="text-center">
                <Image src="/assets/virginia.png" alt="Virginia Fonseca" width={120} height={120} className="rounded-full mx-auto border-4 border-brand-accent" />
                <h3 className="mt-4 text-xl font-bold">Virginia</h3>
                <p className="text-gray-300">Influencer e Empresária</p>
              </div>
            </div>
          </div>
          
          {/* Coluna da Direita: Formulário de Inscrição */}
          <div>
            <RegistrationForm />
          </div>

        </div>
      </div>
    </main>
  );
}