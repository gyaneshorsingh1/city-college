import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary via-primary to-[hsl(215,50%,20%)]">
      <div className="container-custom text-center">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
          Ready to Begin Your Journey?
        </h2>
        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
          Take the first step towards a bright future. Apply now for the upcoming academic session 
          and join thousands of successful alumni.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button variant="gold" size="xl" asChild>
            <Link to="/admissions">
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <Link to="/contact">
              Contact Us
            </Link>
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-primary-foreground/80">
          <a
            href="tel:+977-9812345678"
            className="flex items-center gap-2 hover:text-secondary transition-colors"
          >
            <Phone className="w-5 h-5" />
            +977-9812345678
          </a>
          <a
            href="mailto:info@himalayacollege.edu.np"
            className="flex items-center gap-2 hover:text-secondary transition-colors"
          >
            <Mail className="w-5 h-5" />
            info@himalayacollege.edu.np
          </a>
        </div>
      </div>
    </section>
  );
};
