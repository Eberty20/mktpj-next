'use client';

import { useState, FormEvent } from 'react';

export default function RegistrationForm() {
  // Estados para controlar o que o usuário digita e o estado de envio
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Função chamada quando o formulário é enviado
  const handleSubmit = (event: FormEvent) => {
    // 1. Previne o comportamento padrão do navegador (que é recarregar a página)
    event.preventDefault();

    // 2. Aqui é onde você enviaria os dados para um backend/API no futuro
    // Por enquanto, vamos apenas exibir os dados no console para provar que funcionou.
    console.log('Inscrição Recebida:', { name, email, phone });

    // 3. Atualiza o estado para mostrar a mensagem de sucesso
    setIsSubmitted(true);
  };

  // Se o formulário já foi enviado, mostre a mensagem de sucesso
  if (isSubmitted) {
    return (
      <div className="w-full max-w-lg bg-brand-dark p-8 rounded-xl shadow-2xl text-center animate-fade-in-up">
        <h2 className="text-3xl font-bold text-brand-accent mb-4">
          Inscrição Confirmada!
        </h2>
        <p className="text-lg text-brand-text">
          🎉 Obrigado, {name}! 🎉
        </p>
        <p className="mt-4 text-gray-300">
          Seu ingresso virtual e todas as informações serão enviados para o e-mail: <strong className="text-white">{email}</strong>.
        </p>
        <p className="mt-6 text-sm text-gray-400">
          Fique de olho na sua caixa de entrada (e na de spam)!
        </p>
      </div>
    );
  }

  // Se não, mostre o formulário
  return (
    <div className="w-full max-w-lg bg-brand-dark p-8 rounded-xl shadow-2xl">
      <h2 className="text-3xl font-bold text-center text-brand-text mb-2">
        Garanta sua Vaga
      </h2>
      <p className="text-center text-gray-300 mb-8">
        Vagas limitadas. Inscreva-se gratuitamente!
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-brand-text">Nome Completo</label>
          <div className="mt-1">
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Seu nome aqui"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-md bg-brand-primary border-transparent text-white focus:ring-2 focus:ring-brand-accent focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-brand-text">Melhor E-mail</label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-md bg-brand-primary border-transparent text-white focus:ring-2 focus:ring-brand-accent focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-brand-text">Celular (WhatsApp)</label>
          <div className="mt-1">
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="(11) 99999-9999"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 rounded-md bg-brand-primary border-transparent text-white focus:ring-2 focus:ring-brand-accent focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-bold text-white bg-brand-accent hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent transition-all duration-300"
          >
            Inscrever-se no Evento
          </button>
        </div>
      </form>
    </div>
  );
}