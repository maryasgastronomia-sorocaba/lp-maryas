import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

export default function ContactSection() {
  const mapsLink = 'https://www.google.com/maps/dir//Maryas+Espeto+Gourmet+(Marias),+Av.+Pereira+da+Silva,+1623+-+Jardim+Santa+Ros%C3%A1lia,+Sorocaba+-+SP,+18095-340/@-23.4848256,-46.6419712,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94cf61493a12ec7d:0x323d58cc0a38908a!2m2!1d-47.4418081!2d-23.4849344?entry=ttu&g_ep=EgoyMDI2MDcxNC4wIKXMDSoASAFQAw%3D%3D';
  const mapImageUrl = 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663029034863/WXFjhInlUNRXeQvs.png';

  return (
    <section id="contact-section" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-amber-900 mb-3 lg:mb-4">
            Visite-nos
          </h2>
          <p className="text-base lg:text-lg text-amber-700 max-w-2xl mx-auto px-2">
            Estamos localizados em Sorocaba, com ambiente aconchegante e estacionamento disponível
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-4 lg:space-y-8">
            {/* Address */}
            <div className="flex gap-3 lg:gap-4 p-4 lg:p-6 bg-amber-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 lg:h-12 lg:w-12 rounded-lg bg-orange-600 text-white">
                  <MapPin size={20} className="lg:w-6 lg:h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-base lg:text-lg font-semibold text-amber-900 mb-1 lg:mb-2">Endereço</h3>
                <p className="text-sm lg:text-base text-amber-800">
                  Av. Pereira da Silva, 1623<br />
                  Jd. Santa Rosália<br />
                  Sorocaba, SP
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-3 lg:gap-4 p-4 lg:p-6 bg-amber-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 lg:h-12 lg:w-12 rounded-lg bg-orange-600 text-white">
                  <Phone size={20} className="lg:w-6 lg:h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-base lg:text-lg font-semibold text-amber-900 mb-1 lg:mb-2">Telefone</h3>
                <a 
                  href="tel:+5515991958853"
                  className="text-sm lg:text-base text-orange-600 hover:text-orange-700 font-medium transition-colors"
                >
                  +55 15 99195-8853
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-3 lg:gap-4 p-4 lg:p-6 bg-amber-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 lg:h-12 lg:w-12 rounded-lg bg-orange-600 text-white">
                  <Mail size={20} className="lg:w-6 lg:h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-base lg:text-lg font-semibold text-amber-900 mb-1 lg:mb-2">Email</h3>
                <a 
                  href="mailto:maryasgastronomia@gmail.com"
                  className="text-sm lg:text-base text-orange-600 hover:text-orange-700 font-medium transition-colors break-all"
                >
                  maryasgastronomia@gmail.com
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-3 lg:gap-4 p-4 lg:p-6 bg-amber-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 lg:h-12 lg:w-12 rounded-lg bg-orange-600 text-white">
                  <Clock size={20} className="lg:w-6 lg:h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-base lg:text-lg font-semibold text-amber-900 mb-1 lg:mb-2">Horário de Funcionamento</h3>
                <p className="text-sm lg:text-base text-amber-800">
                  Quarta a Domingo<br />
                  Almoço e Jantar<br />
                  Com Rodízio Completo
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 lg:pt-0">
              <h3 className="text-base lg:text-lg font-semibold text-amber-900 mb-3 lg:mb-4">Siga-nos nas Redes Sociais</h3>
              <div className="flex gap-3 lg:gap-4">
                <a 
                  href="https://www.facebook.com/maryasespetaria/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook size={18} className="lg:w-5 lg:h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/maryasespetobar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-pink-500 to-orange-400 text-white rounded-full hover:from-pink-600 hover:to-orange-500 transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram size={18} className="lg:w-5 lg:h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-lg h-80 lg:h-full min-h-96">
            <a 
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full hover:opacity-90 transition-opacity duration-300 cursor-pointer"
              title="Clique para abrir no Google Maps"
            >
              <img 
                src={mapImageUrl}
                alt="Localização do Marya's Espeto Bar no Google Maps"
                className="w-full h-full object-cover"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
