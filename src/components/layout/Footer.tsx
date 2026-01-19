import { Link } from 'react-router-dom';
import { GraduationCap, MapPin, Phone, Mail, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Academic Programs', href: '/programs' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Facilities', href: '/facilities' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact Us', href: '/contact' },
];

const programs = [
  { name: '+2 Science', href: '/programs#science' },
  { name: '+2 Management', href: '/programs#management' },
  { name: '+2 Humanities', href: '/programs#humanities' },
  { name: 'BBA', href: '/programs#bba' },
  { name: 'BBS', href: '/programs#bbs' },
  { name: 'BCA', href: '/programs#bca' },
];

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* College Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold">Himalaya College</h3>
                <p className="text-sm text-primary-foreground/70">Excellence in Education</p>
              </div>
            </Link>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Shaping the future through quality education since 1995. Affiliated with Tribhuvan University, 
              we are committed to nurturing minds and building leaders.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-secondary">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-secondary">Our Programs</h4>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.name}>
                  <Link
                    to={program.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200"
                  >
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-secondary">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Biratnagar Metropolitan City,<br />
                  Morang, Nepal
                </span>
              </li>
              <li>
                <a
                  href="tel:+977-9812345678"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  <Phone className="w-5 h-5 text-secondary" />
                  +977-9812345678
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@himalayacollege.edu.np"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  <Mail className="w-5 h-5 text-secondary" />
                  info@himalayacollege.edu.np
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>© {new Date().getFullYear()} Himalaya College. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-secondary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
