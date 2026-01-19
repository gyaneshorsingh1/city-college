import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { HighlightsSection } from '@/components/home/HighlightsSection';
import { AboutSection } from '@/components/home/AboutSection';
import { ProgramsSection } from '@/components/home/ProgramsSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { NoticesSection } from '@/components/home/NoticesSection';
import { CTASection } from '@/components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <HighlightsSection />
      <AboutSection />
      <ProgramsSection />
      <TestimonialsSection />
      <NoticesSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
