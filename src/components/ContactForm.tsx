import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, CheckCircle2, Send, AlertCircle } from 'lucide-react';
import { company } from '@/data/company';

type Status = 'idle' | 'loading' | 'success';
type Errors = Partial<Record<'name' | 'email' | 'phone' | 'subject' | 'message', string>>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');

  const update = (key: keyof typeof form, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = (): boolean => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!form.email.trim()) e.email = 'Please enter your email.';
    else if (!emailRe.test(form.email)) e.email = 'Please enter a valid email address.';
    if (form.phone && !/^[0-9+\-\s()]{6,}$/.test(form.phone)) e.phone = 'Please enter a valid phone number.';
    if (!form.subject.trim()) e.subject = 'Please select a subject.';
    if (!form.message.trim()) e.message = 'Please enter your message.';
    else if (form.message.trim().length < 10) e.message = 'Message must be at least 10 characters.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    // Static simulation — no backend is contacted.
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1400);
  };

  const fieldClass = (key: keyof Errors) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm text-navy shadow-sm transition-colors placeholder:text-navy/40 focus:outline-none focus:ring-2 ${
      errors[key]
        ? 'border-cantaloupe-500 focus:ring-cantaloupe-500/30'
        : 'border-electric-500/20 focus:border-electric-500 focus:ring-electric-500/20'
    }`;

  return (
    <div className="relative overflow-hidden rounded-3xl border border-electric-500/15 bg-white p-6 shadow-soft-lg sm:p-8">
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-electric-100/60 blur-3xl" />

      <form onSubmit={onSubmit} noValidate className="relative space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-navy">Name <span className="text-cantaloupe-600">*</span></label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => update('name', e.target.value)}
              placeholder="Your full name"
              className={fieldClass('name')}
            />
            {errors.name && <p className="mt-1.5 flex items-center gap-1 text-xs text-cantaloupe-600"><AlertCircle className="h-3 w-3" />{errors.name}</p>}
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-navy">Email <span className="text-cantaloupe-600">*</span></label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => update('email', e.target.value)}
              placeholder="you@example.com"
              className={fieldClass('email')}
            />
            {errors.email && <p className="mt-1.5 flex items-center gap-1 text-xs text-cantaloupe-600"><AlertCircle className="h-3 w-3" />{errors.email}</p>}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-navy">Phone</label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => update('phone', e.target.value)}
              placeholder="+1 212 300 4115"
              className={fieldClass('phone')}
            />
            {errors.phone && <p className="mt-1.5 flex items-center gap-1 text-xs text-cantaloupe-600"><AlertCircle className="h-3 w-3" />{errors.phone}</p>}
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-navy">Subject <span className="text-cantaloupe-600">*</span></label>
            <select
              value={form.subject}
              onChange={(e) => update('subject', e.target.value)}
              className={fieldClass('subject')}
            >
              <option value="">Select a subject</option>
              <option>Product Inquiry</option>
              <option>Solutions Consultation</option>
              <option>Project Quote</option>
              <option>Technical Support</option>
              <option>Partnership</option>
            </select>
            {errors.subject && <p className="mt-1.5 flex items-center gap-1 text-xs text-cantaloupe-600"><AlertCircle className="h-3 w-3" />{errors.subject}</p>}
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-navy">Message <span className="text-cantaloupe-600">*</span></label>
          <textarea
            value={form.message}
            onChange={(e) => update('message', e.target.value)}
            rows={5}
            placeholder="Tell us about your project or question..."
            className={`${fieldClass('message')} resize-none`}
          />
          {errors.message && <p className="mt-1.5 flex items-center gap-1 text-xs text-cantaloupe-600"><AlertCircle className="h-3 w-3" />{errors.message}</p>}
        </div>

        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-navy/50">
            Or email us directly at{' '}
            <a href={`mailto:${company.email}`} className="font-medium text-electric-600 hover:underline">{company.email}</a>
          </p>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn-primary w-full sm:w-auto disabled:opacity-70"
          >
            {status === 'loading' ? (
              <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>
            ) : (
              <>Send Inquiry <Send className="h-4 w-4" /></>
            )}
          </button>
        </div>
      </form>

      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="relative mt-4 flex items-start gap-3 rounded-2xl border border-electric-500/30 bg-electric-50 p-4"
          >
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-electric-600" />
            <div>
              <p className="text-sm font-semibold text-navy">Thank you &mdash; your inquiry has been received.</p>
              <p className="mt-0.5 text-xs text-navy/60">
                This is a frontend demonstration. Our team will respond during business hours. For urgent matters, call {company.phones[0]}.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
