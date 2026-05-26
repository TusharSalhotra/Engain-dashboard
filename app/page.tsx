import { createElement, type ComponentType } from 'react';
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

const sections: Array<{ key: string; component: ComponentType }> = [
  { key: 'hero', component: HeroSection },
  { key: 'companies', component: CompaniesMarquee },
  { key: 'booking', component: BookingSection },
  { key: 'growth-platform', component: GrowthPlatformSection },
  { key: 'how-it-works', component: HowItWorksSection },
  { key: 'results', component: ResultsSection },
  { key: 'business-models', component: BusinessModelsSection },
  { key: 'testimonials', component: TestimonialsSection },
  { key: 'features', component: FeaturesSection },
  { key: 'start-scaling', component: StartScalingSection },
  { key: 'footer', component: FooterSection },
];

export default function Home() {
  return (
    <main className="site-shell" id="top">
      {sections.map(({ key, component }) => createElement(component, { key }))}
    </main>
  );
}
