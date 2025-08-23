// components/hotsite/Location.tsx

export default function Location() {
  return (
    <section id="location" className="w-full bg-brand-dark py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-brand-text mb-4">
          Onde o Futuro do Marketing Acontece
        </h2>
        <p className="text-lg text-gray-300 mb-10">
          Etec Parque da Juventude - Av. Cruzeiro do Sul, 2630 - Santana, São Paulo - SP
        </p>

        {/* MUDANÇA AQUI: Usando uma classe customizada para o container do mapa */}
        <div className="map-container max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.661470472307!2d-46.62651292467149!3d-23.508699978836074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5882587e8607%3A0xa4cbaa38551a68e4!2sEtec%20Parque%20da%20Juventude!5e0!3m2!1spt-BR!2sbr!4v1755969707794!5m2!1spt-BR!2sbr" // Use o seu SRC correto aqui
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}