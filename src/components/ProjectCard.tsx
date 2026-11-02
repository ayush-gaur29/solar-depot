import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Project } from '@/data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', damping: 20, stiffness: 280 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-electric-500/15 bg-white shadow-soft transition-shadow duration-500 hover:shadow-soft-lg"
    >
      <Link to={`/projects/${project.slug}`} className="relative block aspect-[4/3] overflow-hidden bg-electric-50">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/65 via-navy/10 to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
        <span className="absolute left-3 top-3 rounded-full bg-electric-500 px-3 py-1 text-xs font-semibold text-white shadow-glow">
          {project.category}
        </span>
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
          <span className="flex items-center gap-1.5 text-xs">
            <MapPin className="h-3.5 w-3.5" /> {project.location}
          </span>
          <span className="flex items-center gap-1.5 text-xs">
            <Calendar className="h-3.5 w-3.5" /> {project.year}
          </span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold text-navy">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/60">{project.excerpt}</p>
        <Link
          to={`/projects/${project.slug}`}
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors group-hover:text-electric-600"
        >
          View Project
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
