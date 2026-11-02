import { Mail, Phone, Smartphone, MapPin, Clock, MessageSquare } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { Reveal } from '@/components/Reveal';
import { company } from '@/data/company';
import { images } from '@/data/images';

const contactCards = [
  { icon: MapPin, label: 'Visit Us', value: company.address, href: `https://maps.google.com/?q=${encodeURIComponent(company.address)}` },
  { icon: Phone, label: 'Call Us', value: company.phones[0], href: `tel:${company.phones[0]}` },
  { icon: Smartphone, label: 'Mobile', value: company.mobile, href: `tel:${company.mobile}` },
  { icon: Mail, label: 'Email Us', value: company.email, href: `mailto:${company.email}` },
];

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-midnight pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0">
          <img src={images.engineers} alt="" className="h-full w-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-midnight/90 to-midnight" />
        </div>
        <div className="pointer-events-none absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-electric-500/20 blur-[120px]" />
        <div className="container-px relative">
          <Reveal className="max-w-3xl">
            <span className="eyebrow text-electric-300"><MessageSquare className="h-4 w-4" /> Contact Us</span>
            <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Let&rsquo;s Build Your Solar Solution
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Reach out to discuss your project, request a quote, or get technical support. Our team is ready to help you design and deploy the right solar energy system.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact cards */}
      <section className="bg-offwhite py-16 lg:py-20">
        <div className="container-px">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.08}>
                <a
                  href={c.href}
                  className="group flex h-full flex-col rounded-2xl border border-electric-500/15 bg-white p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-soft-lg"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-50 text-electric-600 transition-all duration-500 group-hover:bg-electric-500 group-hover:text-white group-hover:shadow-glow">
                    <c.icon className="h-6 w-6" />
                  </span>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-electric-600">{c.label}</p>
                  <p className="mt-1.5 text-sm font-medium leading-snug text-navy">{c.value}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form + info */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-px">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <span className="eyebrow text-electric-600"><MessageSquare className="h-4 w-4" /> Send a Message</span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Request a Quote or Consultation
              </h2>
              <p className="mt-4 text-base leading-relaxed text-navy/65">
                Fill out the form below and our team will get back to you during business hours. Fields marked with an asterisk are required.
              </p>

              <div className="mt-8 rounded-2xl border border-electric-500/15 bg-electric-50 p-6">
                <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-navy">
                  <Clock className="h-5 w-5 text-electric-600" /> Response Time
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/60">
                  This is a frontend demonstration form. No message is actually sent or stored. For urgent inquiries, please call us directly using the numbers above.
                </p>
              </div>

              <div className="mt-6 space-y-3">
                <a href={`tel:${company.phones[0]}`} className="flex items-center gap-3 rounded-xl border border-electric-500/15 bg-white p-4 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-soft-lg">
                  <Phone className="h-5 w-5 text-electric-600" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-electric-600">Primary Phone</p>
                    <p className="text-sm font-semibold text-navy">{company.phones[0]}</p>
                  </div>
                </a>
                <a href={`tel:${company.phones[1]}`} className="flex items-center gap-3 rounded-xl border border-electric-500/15 bg-white p-4 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-soft-lg">
                  <Phone className="h-5 w-5 text-electric-600" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-electric-600">Secondary Phone</p>
                    <p className="text-sm font-semibold text-navy">{company.phones[1]}</p>
                  </div>
                </a>
                <a href={`mailto:${company.email}`} className="flex items-center gap-3 rounded-xl border border-electric-500/15 bg-white p-4 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-soft-lg">
                  <Mail className="h-5 w-5 text-electric-600" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-electric-600">Email</p>
                    <p className="text-sm font-semibold text-navy">{company.email}</p>
                  </div>
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Dark CTA band */}
      <section className="relative overflow-hidden bg-midnight py-20">
        <div className="pointer-events-none absolute inset-0 grid-bg-dark opacity-25" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-1/2 -translate-x-1/2 rounded-full bg-electric-500/15 blur-[120px]" />
        <div className="container-px relative">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Visit Our New York Office</h2>
            <p className="mt-4 text-lg text-white/65">{company.address}</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <a href={`https://maps.google.com/?q=${encodeURIComponent(company.address)}`} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <MapPin className="h-4 w-4" /> Open in Maps
              </a>
              <a href={`tel:${company.phones[0]}`} className="btn-ghost-dark">
                <Phone className="h-4 w-4" /> {company.phones[0]}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
