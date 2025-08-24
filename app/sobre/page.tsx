import Navbar from '../../components/Navbar';

export default function Sobre() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 text-white">
        <div className="container mx-auto px-4 py-12">
          
          <section id="sobre-a-turma" className="text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-accent">
              Sobre a Turma de Marketing 2024-2025
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
              Somos a vanguarda criativa do curso Técnico em Marketing da ETEC Parque da Juventude. Uma turma de mentes inquietas e apaixonadas, unidas pelo propósito de transformar ideias em resultados e desafios em oportunidades.
            </p>
          </section>

          <div className="my-12 border-t border-brand-primary/50"></div>

          <section id="nossa-jornada" className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-text mb-6">Nossa Jornada</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Nossa jornada começou em 2024, um ponto de encontro para talentos diversos com um objetivo em comum: dominar a arte e a ciência do marketing. Desde então, mergulhamos em estudos de caso, projetos práticos e debates intensos, explorando desde o branding e a criação de conteúdo até a análise de dados e as estratégias de performance.
              </p>
              <p>
                Este site é um reflexo do nosso aprendizado e da nossa evolução. É um portfólio vivo, um espaço para apresentar os projetos que nos orgulhamos e para compartilhar a visão que estamos construindo para o futuro do mercado.
              </p>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}