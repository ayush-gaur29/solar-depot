import { NavLink, useLocation } from 'react-router-dom';
import { Home, Zap, Layers, Briefcase, PhoneCall } from 'lucide-react';

const navItems = [
  { name: 'Home', to: '/', icon: Home },
  { name: 'Products', to: '/products', icon: Zap },
  { name: 'Solutions', to: '/solutions', icon: Layers },
  { name: 'Projects', to: '/projects', icon: Briefcase },
  { name: 'Contact', to: '/contact', icon: PhoneCall },
];

export default function MobileBottomNav() {
  const location = useLocation();

  const isItemActive = (itemTo: string) => {
    if (itemTo === '/') {
      return location.pathname === '/';
    }
    return location.pathname === itemTo || location.pathname.startsWith(itemTo + '/');
  };

  return (
    <nav
      aria-label="Mobile Navigation"
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
    >
      {/* Frosted glass container with ambient top border glow */}
      <div className="relative border-t border-electric-500/20 bg-[#02070A]/95 backdrop-blur-xl shadow-[0_-10px_30px_rgba(2,151,222,0.18)] pb-[max(0.6rem,env(safe-area-inset-bottom))] pt-2">
        <div className="mx-auto flex max-w-md items-center justify-around px-2">
          {navItems.map((item) => {
            const active = isItemActive(item.to);
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.to}
                className="group relative flex flex-1 flex-col items-center py-1 transition-transform active:scale-95"
              >
                {/* Active indicator glowing bar on top */}
                {active && (
                  <span className="absolute -top-2 h-0.5 w-8 rounded-full bg-gradient-to-r from-cantaloupe-500 to-electric-400 shadow-[0_0_10px_rgba(252,115,77,0.9)]" />
                )}

                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-xl transition-all duration-300 ${
                    active
                      ? 'bg-gradient-to-br from-electric-500/25 to-cantaloupe-500/20 text-cantaloupe-400 shadow-[0_0_12px_rgba(252,115,77,0.35)]'
                      : 'text-white/60 group-hover:text-white/90'
                  }`}
                >
                  <Icon
                    className={`h-5 w-5 transition-transform duration-300 ${
                      active ? 'scale-110' : 'group-hover:scale-105'
                    }`}
                    strokeWidth={active ? 2.3 : 1.8}
                  />
                </div>

                <span
                  className={`mt-1 text-[11px] tracking-tight transition-colors duration-200 ${
                    active
                      ? 'font-bold text-white'
                      : 'font-medium text-white/60 group-hover:text-white/90'
                  }`}
                >
                  {item.name}
                </span>
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
