// components/hotsite/Schedule.tsx

// Dividimos os dados em dois: Manhã e Tarde
const morningSchedule = [
  { time: '09:00', title: 'Abertura e Credenciamento', description: 'Café de boas-vindas e registro dos participantes.' },
  { time: '10:00', title: 'Palestra: Construindo um Império Digital', speaker: 'Mari Maria', description: 'Estratégias de marketing que a levaram ao topo.' },
  { time: '11:30', title: 'Workshop: Engajamento que Converte', speaker: 'Virginia Fonseca', description: 'Segredos para criar uma comunidade fiel e transformar likes em vendas.' },
];

const afternoonSchedule = [
  { time: '13:00', title: 'Almoço e Networking', description: 'Pausa para o almoço e oportunidade para conexões.' },
  { time: '14:30', title: 'Painel: O Futuro do Marketing de Influência', speaker: 'Mari Maria & Virginia Fonseca', description: 'Debate sobre tendências, desafios e o futuro do marketing.' },
  { time: '16:00', title: 'Encerramento', description: 'Considerações finais e agradecimentos.' },
];

// Um componente menor para evitar repetição de código
const TimelineItem = ({ time, title, speaker, description }: (typeof morningSchedule)[0]) => (
  <div className="relative pl-16 pb-8">
    {/* Círculo na linha do tempo */}
    <div className="absolute left-0 top-1 h-5 w-5 rounded-full bg-brand-dark border-4 border-brand-accent"></div>
    <p className="text-md font-bold text-brand-text">{time}</p>
    <h3 className="text-lg font-bold text-brand-accent mt-1">{title}</h3>
    {speaker && <p className="text-sm text-brand-text italic opacity-80">{speaker}</p>}
    <p className="mt-2 text-sm text-gray-300">{description}</p>
  </div>
);

export default function Schedule() {
  return (
    <section id="schedule" className="w-full bg-brand-primary py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-brand-text mb-16">
          Cronograma do Evento
        </h2>

        {/* Grid para as duas colunas. Em telas pequenas (mobile) será 1 coluna, 
            em telas médias (md) ou maiores, serão 2 colunas. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 max-w-4xl mx-auto">
          {/* Coluna da Manhã */}
          <div>
            <h3 className="text-2xl font-bold text-brand-accent mb-8 pl-16">Manhã</h3>
            <div className="relative">
              <div className="absolute left-2 top-0 h-full w-0.5 bg-brand-accent"></div>
              {morningSchedule.map((item, index) => <TimelineItem key={index} {...item} />)}
            </div>
          </div>

          {/* Coluna da Tarde */}
          <div>
            <h3 className="text-2xl font-bold text-brand-accent mb-8 pl-16">Tarde</h3>
            <div className="relative">
              <div className="absolute left-2 top-0 h-full w-0.5 bg-brand-accent"></div>
              {afternoonSchedule.map((item, index) => <TimelineItem key={index} {...item} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}