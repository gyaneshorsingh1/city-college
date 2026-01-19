import { Link } from 'react-router-dom';
import { SectionTitle } from '@/components/common/SectionTitle';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, Bell, Clock } from 'lucide-react';

const notices = [
  {
    id: 1,
    title: 'Admission Open for Academic Year 2081',
    date: '2024-03-15',
    category: 'Admission',
    isNew: true,
  },
  {
    id: 2,
    title: 'Annual Sports Meet 2081 - Registration Open',
    date: '2024-03-10',
    category: 'Events',
    isNew: true,
  },
  {
    id: 3,
    title: 'Mid-Term Examination Schedule Released',
    date: '2024-03-05',
    category: 'Examination',
    isNew: false,
  },
  {
    id: 4,
    title: 'Workshop on Career Counseling - March 20',
    date: '2024-03-01',
    category: 'Workshop',
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
  },
  {
    id: 2,
    title: 'Science Exhibition',
    date: '2024-04-20',
    time: '9:00 AM',
    location: 'Science Block',
  },
  {
    id: 3,
    title: 'Parent-Teacher Meeting',
    date: '2024-04-25',
    time: '2:00 PM',
    location: 'Conference Hall',
  },
];

export const NoticesSection = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <SectionTitle
          title="Latest Updates"
          subtitle="Stay informed about announcements, events, and important notices"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Notices */}
          <div className="bg-card rounded-2xl p-6 md:p-8 card-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Bell className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground">
                Notices & Announcements
              </h3>
            </div>

            <div className="space-y-4">
              {notices.map((notice) => (
                <Link
                  key={notice.id}
                  to={`/notices/${notice.id}`}
                  className="group block p-4 rounded-xl hover:bg-muted transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/5 rounded-lg flex flex-col items-center justify-center text-primary">
                      <span className="text-xs font-medium">
                        {new Date(notice.date).toLocaleDateString('en-US', { month: 'short' })}
                      </span>
                      <span className="text-lg font-bold leading-none">
                        {new Date(notice.date).getDate()}
                      </span>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-1">
                        {notice.isNew && (
                          <span className="px-2 py-0.5 bg-destructive/10 text-destructive text-xs font-medium rounded-full">
                            New
                          </span>
                        )}
                        <span className="text-xs text-muted-foreground">{notice.category}</span>
                      </div>
                      <h4 className="text-foreground font-medium group-hover:text-secondary transition-colors">
                        {notice.title}
                      </h4>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              ))}
            </div>

            <Button variant="outline" className="w-full mt-6" asChild>
              <Link to="/notices">
                View All Notices
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Events */}
          <div className="bg-card rounded-2xl p-6 md:p-8 card-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground">
                Upcoming Events
              </h3>
            </div>

            <div className="space-y-4">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="p-4 rounded-xl border border-border hover:border-secondary/30 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-secondary/10 rounded-xl flex flex-col items-center justify-center">
                      <span className="text-xs font-medium text-secondary">
                        {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                      </span>
                      <span className="text-xl font-bold text-secondary leading-none">
                        {new Date(event.date).getDate()}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-foreground font-semibold mb-1">{event.title}</h4>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {event.time}
                        </span>
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="outline" className="w-full mt-6" asChild>
              <Link to="/notices#events">
                View Academic Calendar
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
