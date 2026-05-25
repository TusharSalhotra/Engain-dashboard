import BusinessModelsSection from './components/BusinessModelsSection';
import BookingSection from './components/BookingSection';
import CompaniesMarquee from './components/CompaniesMarquee';
import FeaturesSection from './components/FeaturesSection';
import FooterSection from './components/FooterSection';
import GrowthPlatformSection from './components/GrowthPlatformSection';
import HeroSection from './components/HeroSection';
import HowItWorksSection from './components/HowItWorksSection';
import ResultsSection from './components/ResultsSection';
import StartScalingSection from './components/StartScalingSection';
import TestimonialsSection from './components/TestimonialsSection';

export default function Home() {
  return (
    <main className="site-shell" id="top">
      <HeroSection />
      <CompaniesMarquee />
      <BookingSection />
      <GrowthPlatformSection />
      <HowItWorksSection />
      <ResultsSection />
      <BusinessModelsSection />
      <TestimonialsSection />
      <FeaturesSection />
      <StartScalingSection />
      <FooterSection />
    </main>
  );
}
