import { useState } from 'react';
import { SectionTitle } from '@/components/common/SectionTitle';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Anita Sharma',
    role: 'BBA Graduate, 2023',
    content: 'Himalaya College provided me with not just academic knowledge but also practical skills that helped me secure a position at a leading bank. The faculty\'s guidance was invaluable.',
    rating: 5,
    image: '/placeholder.svg',
  },
  {
    name: 'Rajesh Thapa',
    role: '+2 Science, 2022',
    content: 'The science labs and dedicated teachers helped me score excellent marks in the board exams. I\'m now studying engineering at IOE thanks to the foundation I built here.',
    rating: 5,
    image: '/placeholder.svg',
  },
  {
    name: 'Sita Rai',
    role: 'BCA Student',
    content: 'The computer lab facilities are amazing! The practical exposure and industry-relevant curriculum have prepared me well for the IT industry.',
    rating: 5,
    image: '/placeholder.svg',
  },
  {
    name: 'Bikash Gurung',
    role: 'Parent',
    content: 'As a parent, I appreciate the discipline and care the college provides. My son has grown both academically and personally since joining Himalaya College.',
    rating: 5,
    image: '/placeholder.svg',
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-primary">
      <div className="container-custom">
        <SectionTitle
          title="What Our Students Say"
          subtitle="Hear from our students and parents about their experience at Himalaya College"
          light
        />

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative bg-primary-foreground/5 backdrop-blur-sm rounded-3xl p-8 md:p-12">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-secondary/30" />
            
            <div className="text-center pt-8">
              {/* Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Author */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-secondary">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <p className="font-heading font-semibold text-primary-foreground">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-sm text-primary-foreground/70">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-primary-foreground" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-primary-foreground" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-secondary w-8'
                      : 'bg-primary-foreground/30 hover:bg-primary-foreground/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
