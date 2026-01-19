import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { SectionTitle } from '@/components/common/SectionTitle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { CheckCircle, FileText, ClipboardList, CreditCard, ArrowRight, Download } from 'lucide-react';

const admissionSteps = [
  {
    step: 1,
    title: 'Submit Application',
    description: 'Fill out the online inquiry form or visit our admission office',
    icon: FileText,
  },
  {
    step: 2,
    title: 'Document Verification',
    description: 'Submit required documents for verification',
    icon: ClipboardList,
  },
  {
    step: 3,
    title: 'Entrance Test',
    description: 'Appear for entrance examination (for Bachelor programs)',
    icon: ClipboardList,
  },
  {
    step: 4,
    title: 'Pay Fees & Enroll',
    description: 'Complete fee payment and enrollment formalities',
    icon: CreditCard,
  },
];

const requiredDocuments = [
  'Original and photocopy of SEE/SLC or +2 marksheet',
  'Original and photocopy of Character Certificate',
  'Original Migration Certificate (if applicable)',
  'Citizenship Certificate (photocopy) or Birth Certificate',
  '4 recent passport size photographs',
  'Transfer Certificate from previous institution',
];

const feeStructure = [
  { program: '+2 Science', admission: 'Rs. 25,000', monthly: 'Rs. 3,500', annual: 'Rs. 67,000' },
  { program: '+2 Management', admission: 'Rs. 20,000', monthly: 'Rs. 3,000', annual: 'Rs. 56,000' },
  { program: '+2 Humanities', admission: 'Rs. 18,000', monthly: 'Rs. 2,500', annual: 'Rs. 48,000' },
  { program: 'BBA', admission: 'Rs. 35,000', monthly: 'Rs. 4,500', annual: 'Rs. 89,000' },
  { program: 'BBS', admission: 'Rs. 25,000', monthly: 'Rs. 3,500', annual: 'Rs. 67,000' },
  { program: 'BCA', admission: 'Rs. 40,000', monthly: 'Rs. 5,000', annual: 'Rs. 100,000' },
];

const Admissions = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success('Inquiry submitted successfully! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', program: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container-custom px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Admissions
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Start your journey towards academic excellence. Apply now for the upcoming session.
          </p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Admission Process"
            subtitle="Simple and transparent admission procedure"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionSteps.map((step) => (
              <div key={step.step} className="relative">
                <div className="bg-card rounded-2xl p-6 card-shadow text-center h-full">
                  <div className="w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {step.step < 4 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-secondary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                Required Documents
              </h2>
              <p className="text-muted-foreground mb-6">
                Please ensure you have the following documents ready for the admission process:
              </p>
              <ul className="space-y-3">
                {requiredDocuments.map((doc, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{doc}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="mt-8" asChild>
                <a href="/prospectus.pdf" download>
                  <Download className="w-4 h-4" />
                  Download Prospectus
                </a>
              </Button>
            </div>

            {/* Fee Structure */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                Fee Structure
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-card rounded-xl overflow-hidden">
                  <thead className="bg-primary text-primary-foreground">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium">Program</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Admission</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Monthly</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Annual</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {feeStructure.map((fee) => (
                      <tr key={fee.program} className="hover:bg-muted/50 transition-colors">
                        <td className="px-4 py-3 text-sm font-medium text-foreground">{fee.program}</td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">{fee.admission}</td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">{fee.monthly}</td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">{fee.annual}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                * Fees are subject to change. Scholarships available for meritorious students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <SectionTitle
              title="Submit Your Inquiry"
              subtitle="Fill out the form below and we'll get back to you within 24 hours"
            />

            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 card-shadow">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+977-98XXXXXXXX"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="program">Program of Interest *</Label>
                  <select
                    id="program"
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full h-10 px-3 rounded-lg border border-input bg-background text-foreground text-sm"
                    required
                  >
                    <option value="">Select a program</option>
                    <option value="+2 Science">+2 Science</option>
                    <option value="+2 Management">+2 Management</option>
                    <option value="+2 Humanities">+2 Humanities</option>
                    <option value="BBA">BBA</option>
                    <option value="BBS">BBS</option>
                    <option value="BCA">BCA</option>
                  </select>
                </div>
              </div>
              <div className="mt-6">
                <Label htmlFor="message">Additional Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Any specific questions or requirements?"
                  rows={4}
                />
              </div>
              <Button
                type="submit"
                variant="gold"
                size="lg"
                className="w-full mt-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Admissions;
