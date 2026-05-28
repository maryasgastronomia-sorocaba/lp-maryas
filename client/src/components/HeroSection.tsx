import { Button } from '@/components/ui/button';
import { Flame } from 'lucide-react';

interface HeroSectionProps {
  logoUrl: string;
  heroImageUrl: string;
}

export default function HeroSection({ logoUrl, heroImageUrl }: HeroSectionProps) {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 overflow-hidden">
      {/* Decorative flame pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-20 -mr-48 -mt-48"></div>
      
      <div className="container mx-auto px-4 py-12 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen lg:min-h-[calc(100vh-160px)]">
          {/* Left side - Text content */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Logo */}
            <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-4 border-orange-600 shadow-lg flex-shrink-0">
              <img 
                src={logoUrl} 
                alt="Maryas Espeto Bar Logo" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-amber-900 leading-tight">
                Rodízio de Espetos
                <span className="text-orange-600 flex items-center gap-2 mt-2">
                  <Flame className="w-8 h-8 lg:w-10 lg:h-10" />
                  Autêntico
                </span>
              </h1>
              <p className="text-base lg:text-lg text-amber-800 leading-relaxed max-w-lg">
                Mais de 30 opções de espetos grelhados na brasa, lanches deliciosos e bebidas refrescantes. 
                Ambiente aconchegante perfeito para reunir os amigos e a família.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">✓</div>
                <span className="text-amber-900 font-medium">Cardápio Vegetariano</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">✓</div>
                <span className="text-amber-900 font-medium">Rodízio Completo</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">✓</div>
                <span className="text-amber-900 font-medium">Ambiente Aconchegante</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">✓</div>
                <span className="text-amber-900 font-medium">Atendimento Premium</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="w-full lg:w-auto bg-orange-600 hover:bg-orange-700 text-white px-6 lg:px-8 py-4 lg:py-6 text-base lg:text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Conheça Nossa Localização
              </Button>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              {/* Decorative background circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl blur-2xl opacity-30"></div>
              
              {/* Image container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square">
                <img 
                  src={heroImageUrl} 
                  alt="Espetos grelhados na brasa" 
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-amber-700">
          <span className="text-sm font-medium">Saiba Mais</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
