import type { Config } from 'tailwindcss'

const config: Config = {
  // A chave 'content' pode ser removida para simplificar na v4
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ATUALIZE ESTE BLOCO PARA USAR AS VARIÁVEIS CSS
        'brand-dark': 'var(--brand-dark)',
        'brand-primary': 'var(--brand-primary)',
        'brand-accent': 'var(--brand-accent)',
        'brand-text': 'var(--brand-text)',
        
      },
      backgroundImage: {
        'etec-photo': "url('/assets/parque-da-juventude.jpg')",
        'spray-effect': "url('/assets/spray-effect.svg')",
      }
    },
  },
  plugins: [],
}
export default config