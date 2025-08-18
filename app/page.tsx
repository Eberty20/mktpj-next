import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      
      <h1 className="text-4xl md:text-5xl font-bold text-center">
        Página da turma de Marketing da Etec Parque da Juventude
      </h1>
      
      <p className="mt-6 text-lg text-gray-300">
        Em Breve
      </p>

      <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        
        <Link href="/landing-page" legacyBehavior>
          <a className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 text-center">
            Ver Landing Page
          </a>
        </Link>

        <Link href="/hotsite" legacyBehavior>
          <a className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 text-center">
            Ver Hotsite
          </a>
        </Link>
        
      </div>
      
    </div>
  );
}