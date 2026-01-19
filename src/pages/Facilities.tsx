import { Layout } from '@/components/layout/Layout';
import { SectionTitle } from '@/components/common/SectionTitle';
import { BookOpen, Monitor, Microscope, Dumbbell, Home, Bus, Wifi, Coffee } from 'lucide-react';
import libraryImage from '@/assets/library.jpg';
import computerLabImage from '@/assets/computer-lab.jpg';
import scienceLabImage from '@/assets/science-lab.jpg';

const facilities = [
  {
    id: 'library',
    name: 'Library',
    icon: BookOpen,
    image: libraryImage,
    description: 'Our well-stocked library houses over 15,000 books, journals, and digital resources. It provides a quiet and conducive environment for study and research.',
    features: [
      'Over 15,000 books and journals',
      'Digital library access',
      'E-journals and online databases',
      'Quiet study areas',
      'Research section',
      'Newspaper and magazine section',
    ],
  },
  {
    id: 'computer-lab',
    name: 'Computer Laboratory',
    icon: Monitor,
    image: computerLabImage,
    description: 'State-of-the-art computer lab equipped with latest hardware and software for practical learning in IT and programming.',
    features: [
      '100+ modern computers',
      'High-speed internet',
      'Licensed software',
      'Programming environments',
      'Dedicated BCA lab',
      'Technical support staff',
    ],
  },
  {
    id: 'science-lab',
    name: 'Science Laboratory',
    icon: Microscope,
    image: scienceLabImage,
    description: 'Well-equipped physics, chemistry, and biology labs for hands-on experimentation and practical learning.',
    features: [
      'Physics Lab with modern equipment',
      'Chemistry Lab with safety measures',
      'Biology Lab with specimens',
      'Experienced lab technicians',
      'Regular practical sessions',
      'Research facilities',
    ],
  },
  {
    id: 'sports',
    name: 'Sports & Recreation',
    icon: Dumbbell,
    image: '/placeholder.svg',
    description: 'We believe in holistic development. Our sports facilities include playgrounds and indoor games for physical fitness.',
    features: [
      'Football ground',
      'Basketball court',
      'Volleyball court',
      'Table tennis',
      'Badminton court',
      'Annual sports meet',
    ],
  },
  {
    id: 'hostel',
    name: 'Hostel Facility',
    icon: Home,
    image: '/placeholder.svg',
    description: 'Safe and comfortable hostel accommodation for students from outside Biratnagar with all modern amenities.',
    features: [
      'Separate boys and girls hostel',
      '24/7 security',
      'Hygienic mess facility',
      'Study rooms',
      'Common room with TV',
      'Laundry service',
    ],
  },
  {
    id: 'transport',
    name: 'Transportation',
    icon: Bus,
    image: '/placeholder.svg',
    description: 'College buses operate on multiple routes across Biratnagar and surrounding areas for convenient commute.',
    features: [
      'Multiple bus routes',
      'Morning and evening service',
      'Safe and reliable',
      'GPS-tracked buses',
      'Affordable fees',
      'Door-to-door service',
    ],
  },
];

const additionalAmenities = [
  { icon: Wifi, name: 'Campus-wide Wi-Fi', description: 'Free high-speed internet access' },
  { icon: Coffee, name: 'Cafeteria', description: 'Hygienic food and beverages' },
  { icon: BookOpen, name: 'Reading Room', description: 'Dedicated quiet study space' },
  { icon: Monitor, name: 'Smart Classrooms', description: 'Multimedia-enabled teaching' },
];

const Facilities = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container-custom px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Our Facilities
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Modern infrastructure and world-class facilities for a complete learning experience
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-16">
            {facilities.map((facility, index) => (
              <div
                key={facility.id}
                id={facility.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="rounded-2xl w-full h-[350px] object-cover"
                  />
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                      <facility.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                      {facility.name}
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {facility.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {facility.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Amenities */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <SectionTitle
            title="Additional Amenities"
            subtitle="Everything you need for a complete campus experience"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalAmenities.map((amenity) => (
              <div key={amenity.name} className="bg-card rounded-2xl p-6 text-center card-shadow">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <amenity.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {amenity.name}
                </h3>
                <p className="text-sm text-muted-foreground">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Facilities;
