import { ArrowRight, type LucideIcon } from 'lucide-react';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  dark = false,
  icon: Icon,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
  dark?: boolean;
  icon?: LucideIcon;
}) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'}`}>
      {eyebrow && (
        <span
          className={`eyebrow ${
            dark ? 'text-electric-300' : 'text-electric-600'
          }`}
        >
          {Icon && <Icon className="h-4 w-4" />}
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.6rem] lg:leading-[1.1] ${
          dark ? 'text-white' : 'text-navy'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            dark ? 'text-white/65' : 'text-navy/65'
          }`}
        >
          {description}
        </p>
      )}
      {align === 'center' && (
        <div className="mx-auto mt-6 flex w-fit items-center gap-2">
          <span className="h-px w-10 bg-electric-500/40" />
          <ArrowRight className="h-3.5 w-3.5 text-electric-500" />
          <span className="h-px w-10 bg-electric-500/40" />
        </div>
      )}
    </div>
  );
}
