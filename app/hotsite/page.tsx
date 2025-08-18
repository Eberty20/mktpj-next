import Link from 'next/link';

export default function Hotsite() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center">
        Esta é a página do Hotsite!
      </h1>

      <p className="mt-4 text-lg text-gray-300 text-center">
        Aqui a campanha é temporária, para um lançamento ou evento.
      </p>

      <Link href="/"
        className="mt-8 bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 text-center">
          Voltar para a Home
      </Link>
    </div>
  );
}