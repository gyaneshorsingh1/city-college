import { Award, Users, Microscope, Building2, BookOpen, Trophy } from 'lucide-react';
import { SectionTitle } from '@/components/common/SectionTitle';

const highlights = [
  {
    icon: Award,
    title: '29 Years of Excellence',
    description: 'A legacy of academic brilliance since 1995, producing leaders across diverse fields.',
  },
  {
    icon: Users,
    title: 'Expert Faculty',
    description: 'Learn from 50+ highly qualified professors with decades of teaching experience.',
  },
  {
    icon: Microscope,
    title: 'Modern Laboratories',
    description: 'State-of-the-art science and computer labs equipped with latest technology.',
  },
  {
    icon: Building2,
    title: 'TU Affiliation',
    description: 'Proudly affiliated with Tribhuvan University, Nepal\'s premier university.',
  },
  {
    icon: BookOpen,
    title: 'Diverse Programs',
    description: 'Comprehensive +2 and Bachelor programs across Science, Management, and Humanities.',
  },
  {
    icon: Trophy,
    title: 'Outstanding Results',
    description: 'Consistently achieving top board results with 95% pass rate.',
  },
];

export const HighlightsSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <SectionTitle
          title="Why Choose Himalaya College?"
          subtitle="Discover what makes us the preferred choice for quality education in Eastern Nepal"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="group bg-card rounded-2xl p-8 card-shadow hover:bg-primary transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <item.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-foreground group-hover:text-primary-foreground transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-primary-foreground/80 transition-colors">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
