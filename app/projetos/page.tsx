import Navbar from '../../components/Navbar';

export default function Projetos() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center text-center text-white p-4">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-brand-accent">
            Em Breve
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-300">
            Este espaço está reservado para a exibição dos incríveis projetos desenvolvidos pela nossa turma. Volte em breve para se surpreender!
          </p>
        </div>
      </main>
    </>
  );
}