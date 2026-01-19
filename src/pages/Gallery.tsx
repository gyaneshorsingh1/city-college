import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { SectionTitle } from '@/components/common/SectionTitle';
import { X } from 'lucide-react';
import heroImage from '@/assets/hero-college.jpg';
import libraryImage from '@/assets/library.jpg';
import computerLabImage from '@/assets/computer-lab.jpg';
import scienceLabImage from '@/assets/science-lab.jpg';

const galleryImages = [
  { id: 1, src: heroImage, category: 'Campus', title: 'Main Campus Building' },
  { id: 2, src: libraryImage, category: 'Library', title: 'Central Library' },
  { id: 3, src: computerLabImage, category: 'Labs', title: 'Computer Laboratory' },
  { id: 4, src: scienceLabImage, category: 'Labs', title: 'Science Laboratory' },
  { id: 5, src: heroImage, category: 'Events', title: 'Annual Function' },
  { id: 6, src: libraryImage, category: 'Campus', title: 'Reading Hall' },
  { id: 7, src: computerLabImage, category: 'Labs', title: 'IT Training Session' },
  { id: 8, src: scienceLabImage, category: 'Events', title: 'Science Exhibition' },
];

const categories = ['All', 'Campus', 'Labs', 'Library', 'Events'];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container-custom px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Photo Gallery
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            A glimpse into campus life at Himalaya College
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative rounded-2xl overflow-hidden cursor-pointer card-shadow"
                onClick={() => setLightboxImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs text-secondary font-medium">{image.category}</span>
                  <h3 className="text-primary-foreground font-medium">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 bg-card rounded-full flex items-center justify-center hover:bg-muted transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-6 h-6 text-foreground" />
          </button>
          <img
            src={lightboxImage}
            alt="Gallery"
            className="max-w-full max-h-[85vh] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
