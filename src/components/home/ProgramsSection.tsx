import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { SectionTitle } from '@/components/common/SectionTitle';
import { ArrowRight, Clock, GraduationCap, Briefcase } from 'lucide-react';

const programs = [
  {
    category: '+2 Level',
    programs: [
      {
        name: 'Science',
        duration: '2 Years',
        description: 'Physics, Chemistry, Biology/Mathematics - Gateway to engineering and medical fields.',
        careers: ['Engineering', 'Medicine', 'IT', 'Research'],
        color: 'from-blue-500 to-cyan-500',
      },
      {
        name: 'Management',
        duration: '2 Years',
        description: 'Business studies, accountancy, economics - Foundation for business careers.',
        careers: ['Business', 'Banking', 'CA', 'MBA'],
        color: 'from-amber-500 to-orange-500',
      },
      {
        name: 'Humanities',
        duration: '2 Years',
        description: 'Social sciences, languages, arts - Path to diverse career opportunities.',
        careers: ['Law', 'Journalism', 'Teaching', 'Civil Service'],
        color: 'from-emerald-500 to-teal-500',
      },
    ],
  },
  {
    category: 'Bachelor Level',
    programs: [
      {
        name: 'BBA',
        duration: '4 Years',
        description: 'Bachelor of Business Administration - Comprehensive business education.',
        careers: ['Management', 'Entrepreneurship', 'Marketing'],
        color: 'from-purple-500 to-pink-500',
      },
      {
        name: 'BBS',
        duration: '4 Years',
        description: 'Bachelor of Business Studies - Strong foundation in commerce.',
        careers: ['Accounting', 'Finance', 'Banking'],
        color: 'from-rose-500 to-red-500',
      },
      {
        name: 'BCA',
        duration: '4 Years',
        description: 'Bachelor of Computer Applications - IT and software development skills.',
        careers: ['Software Dev', 'IT Consultant', 'Data Analyst'],
        color: 'from-indigo-500 to-blue-500',
      },
    ],
  },
];

export const ProgramsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionTitle
          title="Academic Programs"
          subtitle="Choose from our wide range of accredited programs designed to launch your career"
        />

        {programs.map((section) => (
          <div key={section.category} className="mb-12 last:mb-0">
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
              <span className="w-10 h-1 bg-secondary rounded-full" />
              {section.category}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.programs.map((program) => (
                <div
                  key={program.name}
                  className="group bg-card rounded-2xl overflow-hidden card-shadow border border-border"
                >
                  {/* Gradient Header */}
                  <div className={`h-2 bg-gradient-to-r ${program.color}`} />
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="font-heading text-xl font-semibold text-foreground">
                        {program.name}
                      </h4>
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {program.duration}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {program.description}
                    </p>

                    <div className="mb-4">
                      <p className="text-xs font-medium text-muted-foreground mb-2 flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5" />
                        Career Paths:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {program.careers.map((career) => (
                          <span
                            key={career}
                            className="text-xs bg-muted px-2.5 py-1 rounded-full text-muted-foreground"
                          >
                            {career}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      to={`/programs#${program.name.toLowerCase()}`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary hover:text-secondary/80 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center mt-12">
          <Button variant="default" size="lg" asChild>
            <Link to="/programs">
              View All Programs
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
