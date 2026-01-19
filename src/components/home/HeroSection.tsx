import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Play } from 'lucide-react';
import heroImage from '@/assets/hero-college.jpg';

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 px-4 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full mb-6 animate-fade-up">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="text-sm font-medium">Admissions Open for 2081 B.S.</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up stagger-1">
            Shaping Futures,
            <br />
            <span className="text-secondary">Building Leaders</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl animate-fade-up stagger-2">
            Join Himalaya College, a premier institution in Eastern Nepal, where academic excellence 
            meets practical learning. Affiliated with Tribhuvan University since 1995.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up stagger-3">
            <Button variant="gold" size="xl" asChild>
              <Link to="/admissions">
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="/prospectus.pdf" download>
                <Download className="w-5 h-5" />
                Download Prospectus
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-primary-foreground/20 animate-fade-up stagger-4">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-secondary">29+</p>
              <p className="text-primary-foreground/80 text-sm mt-1">Years of Excellence</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-secondary">50+</p>
              <p className="text-primary-foreground/80 text-sm mt-1">Expert Faculty</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-secondary">5000+</p>
              <p className="text-primary-foreground/80 text-sm mt-1">Successful Alumni</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-secondary">95%</p>
              <p className="text-primary-foreground/80 text-sm mt-1">Placement Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-secondary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};
