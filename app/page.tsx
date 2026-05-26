import { createElement, type ComponentType } from 'react';
import BusinessModelsSection from './_components/BusinessModelsSection';
import BookingSection from './_components/BookingSection';
import CompaniesMarquee from './_components/CompaniesMarquee';
import FeaturesSection from './_components/FeaturesSection';
import FooterSection from './_components/FooterSection';
import GrowthPlatformSection from './_components/GrowthPlatformSection';
import HeroSection from './_components/HeroSection';
import HowItWorksSection from './_components/HowItWorksSection';
import ResultsSection from './_components/ResultsSection';
import StartScalingSection from './_components/StartScalingSection';
import TestimonialsSection from './_components/TestimonialsSection';

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
