import HeroSection from '@/components/HeroSection';
import ContactSection from '@/components/ContactSection';
import WhatsAppButton from '@/components/WhatsAppButton';

/**
 * Landing Page - Maryas Espeto Bar
 * 
 * Design Philosophy: Rustic Warmth
 * - Warm color palette (marrom #3D2817, laranja #FF6B35)
 * - Elegant typography (Playfair Display for headings, Inter for body)
 * - Spacious layout with asymmetric design
 * - Authentic and welcoming atmosphere
 */
export default function Home() {
  const logoUrl = '/manus-storage/logomaryas_c4f9ae0d.jpg';
  const heroImageUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663663843456/dhZTTByFMYSzB5qwGwh86x/hero-espetos-Xyv4gVQMJviPvdr56Tm9d5.webp';

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <HeroSection 
        logoUrl={logoUrl}
        heroImageUrl={heroImageUrl}
      />

      {/* Contact & Location Section */}
      <ContactSection />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
}
