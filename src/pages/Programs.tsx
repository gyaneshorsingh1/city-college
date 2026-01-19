import { Layout } from '@/components/layout/Layout';
import { SectionTitle } from '@/components/common/SectionTitle';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Clock, GraduationCap, Briefcase, CheckCircle, ArrowRight } from 'lucide-react';

const plusTwoPrograms = [
  {
    id: 'science',
    name: 'Science',
    duration: '2 Years',
    eligibility: 'SEE/SLC passed with minimum C grade in Science and Math',
    subjects: ['Physics', 'Chemistry', 'Biology/Mathematics', 'English', 'Nepali'],
    careers: ['Medicine', 'Engineering', 'IT', 'Research', 'Agriculture'],
    description: 'Our +2 Science program provides a strong foundation for students aspiring to pursue careers in engineering, medicine, IT, and scientific research.',
  },
  {
    id: 'management',
    name: 'Management',
    duration: '2 Years',
    eligibility: 'SEE/SLC passed with minimum D+ grade',
    subjects: ['Accountancy', 'Business Studies', 'Economics', 'English', 'Nepali'],
    careers: ['Business', 'Banking', 'Chartered Accountant', 'MBA', 'Finance'],
    description: 'The +2 Management program prepares students for careers in business, finance, and entrepreneurship with practical business knowledge.',
  },
  {
    id: 'humanities',
    name: 'Humanities',
    duration: '2 Years',
    eligibility: 'SEE/SLC passed with minimum D grade',
    subjects: ['Sociology', 'Political Science', 'Economics', 'English', 'Nepali'],
    careers: ['Law', 'Journalism', 'Teaching', 'Civil Service', 'Social Work'],
    description: 'Our Humanities program develops critical thinking and analytical skills for careers in law, journalism, and public service.',
  },
];

const bachelorPrograms = [
  {
    id: 'bba',
    name: 'Bachelor of Business Administration (BBA)',
    duration: '4 Years (8 Semesters)',
    eligibility: '+2 or equivalent with minimum 45% marks',
    subjects: ['Management', 'Marketing', 'Finance', 'Human Resources', 'Accounting'],
    careers: ['Manager', 'Entrepreneur', 'Marketing Executive', 'HR Professional'],
    description: 'BBA program focuses on developing managerial skills and business acumen for leadership roles in various industries.',
  },
  {
    id: 'bbs',
    name: 'Bachelor of Business Studies (BBS)',
    duration: '4 Years',
    eligibility: '+2 or equivalent in any stream',
    subjects: ['Accountancy', 'Economics', 'Business Law', 'Statistics', 'Marketing'],
    careers: ['Accountant', 'Financial Analyst', 'Banker', 'Tax Consultant'],
    description: 'BBS provides comprehensive knowledge in commerce and business for careers in accounting, banking, and finance.',
  },
  {
    id: 'bca',
    name: 'Bachelor of Computer Applications (BCA)',
    duration: '4 Years (8 Semesters)',
    eligibility: '+2 with Mathematics/Computer Science with minimum 45% marks',
    subjects: ['Programming', 'Database Management', 'Web Development', 'Networking', 'Software Engineering'],
    careers: ['Software Developer', 'Web Developer', 'System Analyst', 'IT Consultant'],
    description: 'BCA program equips students with programming and IT skills for the growing technology sector.',
  },
];

const Programs = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container-custom px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Academic Programs
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Choose from our range of +2 and Bachelor programs designed to launch your career
          </p>
        </div>
      </section>

      {/* +2 Programs */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="+2 Level Programs"
            subtitle="Higher Secondary Education (HSEB/NEB) programs for SEE graduates"
          />

          <div className="space-y-8">
            {plusTwoPrograms.map((program) => (
              <div
                key={program.id}
                id={program.id}
                className="bg-card rounded-2xl p-8 card-shadow border border-border scroll-mt-24"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                      +2 {program.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {program.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                          <GraduationCap className="w-5 h-5 text-secondary" />
                          Core Subjects
                        </h4>
                        <ul className="space-y-2">
                          {program.subjects.map((subject) => (
                            <li key={subject} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-secondary" />
                              {subject}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                          <Briefcase className="w-5 h-5 text-secondary" />
                          Career Paths
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {program.careers.map((career) => (
                            <span
                              key={career}
                              className="text-xs bg-secondary/10 text-secondary px-3 py-1 rounded-full"
                            >
                              {career}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted rounded-xl p-6">
                    <h4 className="font-medium text-foreground mb-4">Program Details</h4>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-secondary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Duration</p>
                          <p className="text-sm font-medium text-foreground">{program.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <GraduationCap className="w-5 h-5 text-secondary mt-0.5" />
                        <div>
                          <p className="text-xs text-muted-foreground">Eligibility</p>
                          <p className="text-sm font-medium text-foreground">{program.eligibility}</p>
                        </div>
                      </div>
                    </div>
                    <Button variant="gold" className="w-full mt-6" asChild>
                      <Link to="/admissions">
                        Apply Now
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bachelor Programs */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <SectionTitle
            title="Bachelor Level Programs"
            subtitle="Undergraduate programs affiliated with Tribhuvan University"
          />

          <div className="space-y-8">
            {bachelorPrograms.map((program) => (
              <div
                key={program.id}
                id={program.id}
                className="bg-card rounded-2xl p-8 card-shadow border border-border scroll-mt-24"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                      {program.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {program.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                          <GraduationCap className="w-5 h-5 text-secondary" />
                          Core Subjects
                        </h4>
                        <ul className="space-y-2">
                          {program.subjects.map((subject) => (
                            <li key={subject} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-secondary" />
                              {subject}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                          <Briefcase className="w-5 h-5 text-secondary" />
                          Career Paths
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {program.careers.map((career) => (
                            <span
                              key={career}
                              className="text-xs bg-secondary/10 text-secondary px-3 py-1 rounded-full"
                            >
                              {career}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted rounded-xl p-6">
                    <h4 className="font-medium text-foreground mb-4">Program Details</h4>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-secondary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Duration</p>
                          <p className="text-sm font-medium text-foreground">{program.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <GraduationCap className="w-5 h-5 text-secondary mt-0.5" />
                        <div>
                          <p className="text-xs text-muted-foreground">Eligibility</p>
                          <p className="text-sm font-medium text-foreground">{program.eligibility}</p>
                        </div>
                      </div>
                    </div>
                    <Button variant="gold" className="w-full mt-6" asChild>
                      <Link to="/admissions">
                        Apply Now
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;
