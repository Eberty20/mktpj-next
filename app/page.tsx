import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
        <div className="group">
          <img src="/assets/kotler.jpg" alt="Philip Kotler" className="mt-6 rounded-full w-96 h-96 object-cover shadow-2xl animate-fade-in-up transition-transform duration-500 ease-in-out group-hover:scale-x-[-1]" style={{ animationDelay: '0.4s' }} />
        </div>
        <p className="mt-8 text-lg text-center max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          &ldquo;A melhor propaganda é um bom trabalho bem feito.&rdquo;
          <br />
          - Philip Kotler
        </p>
        <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Link href="/landing-page"
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            Ver Landing Page
          </Link>
          <Link href="/hotsite"
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 text-center">
            Ver Hotsite
          </Link>
        </div>
      </div>
    </>
  );
}