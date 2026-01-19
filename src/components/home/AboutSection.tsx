import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import libraryImage from '@/assets/library.jpg';

const features = [
  'Affiliated with Tribhuvan University',
  'Experienced & qualified faculty',
  'Modern infrastructure & facilities',
  'Focus on practical learning',
  'Strong placement support',
  'Holistic student development',
];

export const AboutSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={libraryImage}
                alt="Himalaya College Library"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-6 shadow-lg border border-border max-w-[200px]">
              <p className="text-4xl font-bold text-secondary mb-1">29+</p>
              <p className="text-sm text-muted-foreground">Years of Academic Excellence</p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="text-secondary font-medium text-sm uppercase tracking-wider mb-4 block">
              About Our Institution
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Nurturing Minds, Building Futures Since 1995
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Himalaya College stands as a beacon of quality education in Biratnagar, Eastern Nepal. 
              Since our establishment in 1995, we have been committed to providing world-class education 
              that combines academic rigor with practical skills development.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our mission is to empower students with knowledge, skills, and values that prepare them 
              for success in their chosen careers and as responsible citizens of society.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Button variant="default" size="lg" asChild>
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
