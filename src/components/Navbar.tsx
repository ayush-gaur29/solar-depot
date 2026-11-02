import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Phone } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Logo from './Logo';
import { navProducts, navSolutions, company } from '@/data/company';

const mainNav = [
  { name: 'Home', to: '/' },
  { name: 'About Us', to: '/about' },
  { name: 'Products', to: '/products', dropdown: navProducts },
  { name: 'Solutions', to: '/solutions', dropdown: navSolutions },
  { name: 'Projects', to: '/projects' },
  { name: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpenDropdown(null);
  }, [location.pathname]);

  // Determine if we're on a dark hero page (home) for the top-of-page styling
  const isHome = location.pathname === '/';
  const dark = isHome && !scrolled;

  const isItemActive = (itemTo: string) => {
    if (itemTo === '/') {
      return location.pathname === '/';
    }
    return location.pathname === itemTo || location.pathname.startsWith(itemTo + '/');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'glass-light border-b border-electric-500/10 py-2.5 shadow-soft'
          : dark
            ? 'bg-transparent py-4'
            : 'bg-white/70 backdrop-blur-md py-3.5'
      }`}
    >
      <nav className="container-px flex items-center justify-between">
        <Logo light={dark} />

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1.5 lg:flex">
          {mainNav.map((item) => {
            const active = isItemActive(item.to);
            return (
              <li
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <NavLink
                  to={item.to}
                  className={`relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    dark
                      ? active
                        ? 'bg-white/15 text-white font-semibold border border-white/25 shadow-[0_0_20px_rgba(2,151,222,0.35)] backdrop-blur-md'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                      : active
                        ? 'bg-electric-50 text-electric-700 font-bold border border-electric-500/30 shadow-sm'
                        : 'text-navy/75 hover:text-navy hover:bg-neutralgrey/80'
                  }`}
                >
                  {active && (
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        dark ? 'bg-cantaloupe-400 animate-pulse' : 'bg-cantaloupe-500'
                      }`}
                    />
                  )}
                  <span>{item.name}</span>
                  {item.dropdown && (
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        openDropdown === item.name ? 'rotate-180 opacity-100' : 'opacity-70'
                      }`}
                    />
                  )}
                </NavLink>

                <AnimatePresence>
                  {item.dropdown && openDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 top-full mt-2 w-72 -translate-x-1/2"
                    >
                      <div className="glass-light rounded-2xl border border-electric-500/15 p-2 shadow-soft-lg">
                        {item.dropdown.map((d) => (
                          <Link
                            key={d.slug}
                            to={item.name === 'Products' ? `/products?category=${d.slug}` : `/solutions?focus=${d.slug}`}
                            className="block rounded-xl px-3.5 py-2.5 text-sm text-navy/80 transition-colors hover:bg-electric-50 hover:text-electric-700"
                          >
                            {d.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>

        {/* Right action buttons */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Mobile quick links */}
          <NavLink
            to="/about"
            className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all lg:hidden ${
              dark
                ? isItemActive('/about')
                  ? 'bg-white/20 text-white border border-white/30'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
                : isItemActive('/about')
                  ? 'bg-electric-50 text-electric-700 border border-electric-500/30'
                  : 'text-navy/75 hover:text-navy hover:bg-neutralgrey/80'
            }`}
          >
            About
          </NavLink>

          <a
            href={`tel:${company.phones[0]}`}
            className={`hidden items-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium transition-colors xl:flex ${
              dark ? 'text-white/90 hover:text-white' : 'text-navy/80 hover:text-electric-600'
            }`}
          >
            <Phone className="h-4 w-4" />
            {company.phones[0]}
          </a>

          <Link
            to="/contact"
            className="rounded-full bg-cantaloupe-500 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm transition-all duration-300 hover:bg-cantaloupe-600 sm:px-5 sm:py-2.5 sm:text-sm sm:font-medium sm:btn-primary"
          >
            Get a Quote
          </Link>
        </div>
      </nav>
    </header>
  );
}
