import { Layout } from '@/components/layout/Layout';
import { SectionTitle } from '@/components/common/SectionTitle';
import { CheckCircle, Target, Eye, Heart, Award, Users, BookOpen } from 'lucide-react';
import libraryImage from '@/assets/library.jpg';

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for excellence in every aspect of education and student development.',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'We uphold the highest standards of honesty, ethics, and moral values.',
  },
  {
    icon: Users,
    title: 'Inclusivity',
    description: 'We embrace diversity and provide equal opportunities for all students.',
  },
  {
    icon: BookOpen,
    title: 'Innovation',
    description: 'We encourage creative thinking and adopt modern teaching methodologies.',
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container-custom px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            About Himalaya College
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            A legacy of academic excellence in Eastern Nepal since 1995
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-secondary font-medium text-sm uppercase tracking-wider mb-4 block">
                Our History
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Journey of Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Established in 1995 (2052 B.S.), Himalaya College began its journey with a vision to provide 
                quality education to the youth of Eastern Nepal. What started as a small institution has 
                now grown into one of the most prestigious colleges in the region.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Over the past 29 years, we have produced thousands of successful professionals who are 
                contributing to the nation and the world in various fields including medicine, engineering, 
                business, and public service.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our affiliation with Tribhuvan University ensures that our students receive nationally 
                recognized degrees while benefiting from our unique teaching methodology that emphasizes 
                practical learning and character development.
              </p>
            </div>
            <div className="relative">
              <img
                src={libraryImage}
                alt="College Library"
                className="rounded-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-card rounded-2xl p-8 card-shadow">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a leading institution of academic excellence that nurtures globally competitive 
                professionals with strong moral values, contributing to the socio-economic development 
                of Nepal and beyond.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-card rounded-2xl p-8 card-shadow">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">Our Mission</h3>
              <ul className="space-y-3">
                {[
                  'Provide quality education with modern teaching methods',
                  'Foster critical thinking and innovation',
                  'Develop responsible and ethical citizens',
                  'Maintain strong industry-academia collaboration',
                  'Support holistic student development',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Our Core Values"
            subtitle="The principles that guide everything we do"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="text-center p-6 rounded-2xl bg-muted hover:bg-card card-shadow transition-all">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-8">
              Message from the Principal
            </h2>
            <blockquote className="text-lg text-primary-foreground/90 leading-relaxed mb-8 italic">
              "At Himalaya College, we believe that education is not just about acquiring knowledge, 
              but about building character, developing skills, and preparing students to face the 
              challenges of the modern world. Our dedicated faculty and modern facilities create 
              an environment where students can truly excel and discover their potential."
            </blockquote>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                <span className="text-3xl font-bold text-secondary">RK</span>
              </div>
              <p className="font-heading font-semibold text-primary-foreground">
                Dr. Ram Kumar Sharma
              </p>
              <p className="text-sm text-primary-foreground/70">
                Principal, Himalaya College
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Affiliations & Accreditations"
            subtitle="Recognized by leading educational bodies"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Tribhuvan University',
                description: 'Nepal\'s oldest and largest university',
              },
              {
                name: 'HSEB/NEB',
                description: 'Higher Secondary Education Board',
              },
              {
                name: 'UGC Nepal',
                description: 'University Grants Commission',
              },
            ].map((affiliation) => (
              <div key={affiliation.name} className="text-center p-8 rounded-2xl border border-border hover:border-secondary/30 transition-colors">
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                  {affiliation.name}
                </h3>
                <p className="text-sm text-muted-foreground">{affiliation.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
