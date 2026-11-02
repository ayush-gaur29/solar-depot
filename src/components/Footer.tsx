import { Link } from 'react-router-dom';
import { Mail, Phone, Smartphone, MapPin, Sun, ArrowUpRight } from 'lucide-react';
import { company, navProducts, navSolutions } from '@/data/company';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-midnight text-white">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[60%] -translate-x-1/2 rounded-full bg-electric-500/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-72 rounded-full bg-cantaloupe/10 blur-[100px]" />

      <div className="container-px relative pb-28 pt-16 lg:pb-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-electric-400 to-electric-600 shadow-glow">
                <Sun className="h-5 w-5 text-white" strokeWidth={2.5} />
              </span>
              <span className="font-display text-lg font-bold tracking-tight text-white">
                Solar<span className="text-electric-400">Depot</span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              {company.description}
            </p>
            <div className="mt-6 space-y-2.5 text-sm text-white/70">
              <a href={`mailto:${company.email}`} className="flex items-center gap-2.5 hover:text-electric-300">
                <Mail className="h-4 w-4 text-electric-400" /> {company.email}
              </a>
              {company.phones.map((p) => (
                <a key={p} href={`tel:${p}`} className="flex items-center gap-2.5 hover:text-electric-300">
                  <Phone className="h-4 w-4 text-electric-400" /> {p}
                </a>
              ))}
              <a href={`tel:${company.mobile}`} className="flex items-center gap-2.5 hover:text-electric-300">
                <Smartphone className="h-4 w-4 text-electric-400" /> {company.mobile}
              </a>
              <p className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 text-electric-400" /> {company.address}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50">Company</h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li><Link to="/about" className="text-white/70 hover:text-electric-300">About Us</Link></li>
                <li><Link to="/solutions" className="text-white/70 hover:text-electric-300">Solutions</Link></li>
                <li><Link to="/projects" className="text-white/70 hover:text-electric-300">Projects</Link></li>
                <li><Link to="/contact" className="text-white/70 hover:text-electric-300">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50">Products</h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                {navProducts.slice(0, 5).map((p) => (
                  <li key={p.slug}>
                    <Link to={`/products?category=${p.slug}`} className="text-white/70 hover:text-electric-300">{p.name}</Link>
                  </li>
                ))}
                <li>
                  <Link to="/products" className="flex items-center gap-1 text-electric-300 hover:text-electric-200">
                    View all <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50">Solutions</h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                {navSolutions.map((s) => (
                  <li key={s.slug}>
                    <Link to={`/solutions?focus=${s.slug}`} className="text-white/70 hover:text-electric-300">{s.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50">Resources</h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li><Link to="/products" className="text-white/70 hover:text-electric-300">Product Catalogue</Link></li>
                <li><Link to="/projects" className="text-white/70 hover:text-electric-300">Case Studies</Link></li>
                <li><a href={`mailto:${company.email}`} className="text-white/70 hover:text-electric-300">Request a Quote</a></li>
                <li><a href={`tel:${company.phones[0]}`} className="text-white/70 hover:text-electric-300">Call Our Team</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-sm text-white/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Solar Depot. All rights reserved.</p>
          <p>Designed for a sustainable energy future.</p>
        </div>
      </div>
    </footer>
  );
}
