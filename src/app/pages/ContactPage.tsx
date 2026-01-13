import { PageHero } from '@/app/components/ui-workhelio/PageHero';
import { SectionContainer } from '@/app/components/ui-workhelio/SectionContainer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will respond within 1-2 business days.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <PageHero
        subtitle="Get in Touch"
        title="Contact Us"
        description="Reach out to discuss partnership opportunities, project inquiries, or general questions."
      />

      <SectionContainer>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0891b2] focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-semibold text-gray-900 mb-2">
                  Organization *
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  required
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0891b2] focus:border-transparent outline-none transition-all"
                  placeholder="Company or Agency Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0891b2] focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0891b2] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#0891b2] text-white px-6 py-4 rounded-lg font-semibold hover:bg-[#0e7490] transition-colors flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Business Inquiries and Partnerships</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-[#0891b2]/10 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-[#0891b2]" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Corporate Headquarters</div>
                      <div className="text-gray-600">
                        123 Enterprise Blvd, Suite 500<br />
                        Washington, DC 20001
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-[#0891b2]/10 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-[#0891b2]" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Phone</div>
                      <a href="tel:+12025550100" className="text-gray-600 hover:text-[#0891b2]">
                        (202) 555-0100
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-[#0891b2]/10 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-[#0891b2]" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Email</div>
                      <a href="mailto:info@workhelio.com" className="text-gray-600 hover:text-[#0891b2]">
                        info@workhelio.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#1a1f2e] to-[#2d3548] p-8 rounded-xl text-white">
                <h3 className="text-xl font-semibold mb-4">Response Time</h3>
                <p className="text-gray-300 mb-6">
                  We respond to all inquiries within 1-2 business days. For urgent matters, 
                  please call our main office line.
                </p>
                <div className="inline-flex items-center gap-2 text-sm">
                  <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-gray-300">Available Monday-Friday, 9am-5pm EST</span>
                </div>
              </div>

              <div className="border-l-4 border-[#0891b2] pl-6 py-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Government Inquiries</h3>
                <p className="text-gray-600">
                  For government procurement inquiries, please include your agency name, 
                  solicitation number (if applicable), and project requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Additional Info */}
      <SectionContainer background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Regional Offices</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { city: 'Washington, DC', region: 'Headquarters' },
              { city: 'Atlanta, GA', region: 'Southeast Region' },
              { city: 'San Francisco, CA', region: 'West Coast Region' },
            ].map((office) => (
              <div key={office.city} className="text-center">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-white border-2 border-[#0891b2]">
                  <MapPin className="h-7 w-7 text-[#0891b2]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{office.city}</h3>
                <p className="text-gray-600">{office.region}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
