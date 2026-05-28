import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '5515991958853'; // Número sem formatação
  const message = 'Olá! Gostaria de saber mais sobre o Maryas Espeto Bar.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-pulse"
      aria-label="Abrir WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
}
