// app/page.tsx

import Navbar from '../components/Navbar';
import TurmaCarousel from '../components/home/TurmaCarousel';

export default function Home() {
  return (
    <>
      <Navbar />
      {/* MUDANÇA AQUI: Adicionamos pt-24 para empurrar o conteúdo para baixo */}
      <main className="flex flex-col items-center justify-center min-h-screen text-white p-4 text-center pt-24">
        
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-text">
            Página da Turma de Marketing
          </h1>
          <p className="mt-2 text-2xl md:text-3xl text-brand-accent">
            ETEC Parque da Juventude
          </p>
        </div>

        <TurmaCarousel />

      </main>
    </>
  );
}