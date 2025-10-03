import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import HowItWorksSection from '@/components/sections/how-it-works';
import GallerySection from '@/components/sections/gallery';
import TestimonialsSection from '@/components/sections/testimonials';
import AiRecommender from '@/components/sections/ai-recommender';
import PricingSection from '@/components/sections/pricing';
import GuaranteeSection from '@/components/sections/guarantee';
import ContactSection from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <GallerySection />
      <TestimonialsSection />
      <AiRecommender />
      <PricingSection />
      <GuaranteeSection />
      <ContactSection />
    </div>
  );
}
