import { Layout } from '@/components/layout/Layout';
import { SectionTitle } from '@/components/common/SectionTitle';
import { Bell, Calendar, Clock, ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const notices = [
  {
    id: 1,
    title: 'Admission Open for Academic Year 2081',
    date: '2024-03-15',
    category: 'Admission',
    content: 'Himalaya College announces the opening of admissions for all programs for the academic year 2081 B.S. Interested students can submit their applications online or visit the admission office.',
    isNew: true,
  },
  {
    id: 2,
    title: 'Annual Sports Meet 2081 - Registration Open',
    date: '2024-03-10',
    category: 'Events',
    content: 'Registration for Annual Sports Meet 2081 is now open. Students interested in participating can register at the Sports Department by Chaitra 15.',
    isNew: true,
  },
  {
    id: 3,
    title: 'Mid-Term Examination Schedule Released',
    date: '2024-03-05',
    category: 'Examination',
    content: 'The mid-term examination schedule for all programs has been released. Students are advised to check the notice board and prepare accordingly.',
    isNew: false,
  },
  {
    id: 4,
    title: 'Workshop on Career Counseling',
    date: '2024-03-01',
    category: 'Workshop',
    content: 'A career counseling workshop will be conducted on March 20 for all final year students. Experts from various industries will share insights about career opportunities.',
    isNew: false,
  },
  {
    id: 5,
    title: 'Library Timing Extended',
    date: '2024-02-25',
    category: 'General',
    content: 'Due to upcoming examinations, library timing has been extended from 6 AM to 9 PM. Students are encouraged to utilize this facility.',
    isNew: false,
  },
  {
    id: 6,
    title: 'Scholarship Applications Open',
    date: '2024-02-20',
    category: 'Scholarship',
    content: 'Merit-based and need-based scholarship applications for the new academic year are now being accepted. Apply before the deadline.',
    isNew: false,
  },
];

const events = [
  {
    id: 1,
    title: 'Annual Function 2081',
    date: '2024-04-15',
    time: '10:00 AM',
    location: 'Main Auditorium',
    description: 'Celebrate achievements and talents at our grand annual function.',
  },
  {
    id: 2,
    title: 'Science Exhibition',
    date: '2024-04-20',
    time: '9:00 AM',
    location: 'Science Block',
    description: 'Showcase of innovative science projects by our students.',
  },
  {
    id: 3,
    title: 'Parent-Teacher Meeting',
    date: '2024-04-25',
    time: '2:00 PM',
    location: 'Conference Hall',
    description: 'Discuss student progress with parents and guardians.',
  },
  {
    id: 4,
    title: 'Inter-College Quiz Competition',
    date: '2024-05-05',
    time: '11:00 AM',
    location: 'Auditorium',
    description: 'Test your knowledge at the regional quiz competition.',
  },
];

const academicCalendar = [
  { event: 'New Session Begins', date: 'Baisakh 1' },
  { event: 'Mid-Term Examination', date: 'Ashadh 15-25' },
  { event: 'Summer Break', date: 'Shrawan 1-15' },
  { event: 'Annual Sports Meet', date: 'Bhadra 10-12' },
  { event: 'Final Examination', date: 'Poush 15-30' },
  { event: 'Winter Break', date: 'Magh 1-15' },
  { event: 'Annual Function', date: 'Chaitra 15' },
];

const Notices = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container-custom px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Notices & Events
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Stay updated with latest announcements, events, and academic calendar
          </p>
        </div>
      </section>

      {/* Notices Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Latest Notices"
            subtitle="Important announcements and updates from the college"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {notices.map((notice) => (
              <div
                key={notice.id}
                className="bg-card rounded-2xl p-6 card-shadow border border-border hover:border-secondary/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-primary/5 rounded-xl flex flex-col items-center justify-center text-primary">
                    <span className="text-xs font-medium">
                      {new Date(notice.date).toLocaleDateString('en-US', { month: 'short' })}
                    </span>
                    <span className="text-xl font-bold leading-none">
                      {new Date(notice.date).getDate()}
                    </span>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-2">
                      {notice.isNew && (
                        <span className="px-2 py-0.5 bg-destructive/10 text-destructive text-xs font-medium rounded-full">
                          New
                        </span>
                      )}
                      <span className="text-xs text-secondary font-medium px-2 py-0.5 bg-secondary/10 rounded-full">
                        {notice.category}
                      </span>
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                      {notice.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {notice.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="section-padding bg-muted">
        <div className="container-custom">
          <SectionTitle
            title="Upcoming Events"
            subtitle="Mark your calendar for these exciting events"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((event) => (
              <div key={event.id} className="bg-card rounded-2xl p-6 card-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-secondary/10 rounded-xl flex flex-col items-center justify-center">
                    <span className="text-xs font-medium text-secondary">
                      {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                    </span>
                    <span className="text-2xl font-bold text-secondary leading-none">
                      {new Date(event.date).getDate()}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </span>
                      <span>{event.location}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Academic Calendar 2081"
            subtitle="Important dates for the academic year"
          />

          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-2xl p-8 card-shadow">
              <div className="space-y-4">
                {academicCalendar.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-xl hover:bg-muted transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <Calendar className="w-5 h-5 text-secondary" />
                      <span className="font-medium text-foreground">{item.event}</span>
                    </div>
                    <span className="text-muted-foreground">{item.date}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-border text-center">
                <a
                  href="/calendar.pdf"
                  download
                  className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 font-medium transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download Full Academic Calendar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Notices;
