'use client';

import { useState, FormEvent } from 'react';

export default function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log('Inscrição Recebida:', { name, email, phone });
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div 
        className="w-full max-w-lg p-8 rounded-xl shadow-2xl text-center animate-fade-in-up" 
        style={{ backgroundColor: 'var(--brand-dark)' }}
      >
        <h2 className="text-3xl font-bold text-brand-accent mb-4">Inscrição Confirmada!</h2>
        <p className="text-lg text-brand-text">🎉 Obrigado, {name}! 🎉</p>
        <p className="mt-4 text-gray-300">Seu ingresso virtual será enviado para: <strong className="text-white">{email}</strong>.</p>
      </div>
    );
  }

  return (
    <div 
      className="w-full max-w-lg p-8 rounded-xl shadow-2xl" 
      style={{ backgroundColor: 'var(--brand-dark)' }}
    >
      <h2 className="text-3xl font-bold text-center text-brand-text mb-2">
        Garanta sua Vaga
      </h2>
      <p className="text-center text-gray-300 mb-8">
        Vagas limitadas. Inscreva-se gratuitamente!
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-brand-text">Nome Completo</label>
          <div className="mt-1"><input id="name" name="name" type="text" required placeholder="Seu nome aqui" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-3 rounded-md bg-brand-primary border-transparent text-white focus:ring-2 focus:ring-brand-accent focus:border-transparent"/></div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-brand-text">Melhor E-mail</label>
          <div className="mt-1"><input id="email" name="email" type="email" required placeholder="seu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 rounded-md bg-brand-primary border-transparent text-white focus:ring-2 focus:ring-brand-accent focus:border-transparent"/></div>
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-brand-text">Celular (WhatsApp)</label>
          <div className="mt-1"><input id="phone" name="phone" type="tel" required placeholder="(11) 99999-9999" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-4 py-3 rounded-md bg-brand-primary border-transparent text-white focus:ring-2 focus:ring-brand-accent focus:border-transparent"/></div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 rounded-md shadow-sm text-lg font-bold text-white bg-brand-accent hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent transition-all duration-300 border border-white"
          >
            Quero meu Ingresso!
          </button>
        </div>
      </form>
    </div>
  );
}