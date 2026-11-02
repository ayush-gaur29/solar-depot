import { images } from './images';

export type Solution = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  image: string;
  benefits: string[];
  products: string[];
  theme: 'light' | 'ice' | 'dark';
};

export const solutions: Solution[] = [
  {
    slug: 'energy-storage',
    name: 'Energy Storage Power Plants',
    shortName: 'Energy Storage',
    tagline: 'Store solar energy and dispatch it on demand.',
    description:
      'Containerized and modular energy storage systems that pair with solar generation to deliver reliable power around the clock. Ideal for peak shaving, load shifting, microgrid support, and backup power in commercial and utility applications.',
    image: images.batteryInstall,
    benefits: [
      'Round-the-clock solar utilization',
      'Peak demand reduction',
      'Microgrid and backup power support',
      'Grid services and frequency regulation',
    ],
    products: ['Hybrid Inverter 5kW', 'Hybrid Inverter 10kW', 'Smart Energy Meter'],
    theme: 'dark',
  },
  {
    slug: 'pv-grid-tie',
    name: 'PV Grid-Tie Plants',
    shortName: 'PV Grid-Tie',
    tagline: 'Efficient grid-connected solar generation.',
    description:
      'Grid-tie photovoltaic plants ranging from residential rooftops to multi-megawatt ground-mount installations. Our string and central inverters maximize energy harvest while meeting grid code requirements and offering intelligent monitoring.',
    image: images.farmAerial,
    benefits: [
      'High-yield string inverter architecture',
      'Grid-code compliant operation',
      'Centralized monitoring platform',
      'Scalable from rooftop to utility',
    ],
    products: ['Three-Phase String Inverter 10kW', 'Three-Phase String Inverter 20kW', 'Wi-Fi Monitoring Dongle'],
    theme: 'light',
  },
  {
    slug: 'micro-inverter-plants',
    name: 'Micro-Inverter Plant Solutions',
    shortName: 'Micro-Inverter',
    tagline: 'Module-level optimization for challenging sites.',
    description:
      'Micro-inverter plant designs that maximize harvest on shaded, multi-orientation, or complex rooftops. Each panel operates independently for the highest resilience and granular module-level monitoring.',
    image: images.installRooftop,
    benefits: [
      'Module-level MPPT for shaded sites',
      'Simplified string design',
      'Rapid shutdown safety',
      'Granular per-panel monitoring',
    ],
    products: ['Microinverter 350W', 'Wi-Fi Monitoring Dongle', 'Smart Energy Meter'],
    theme: 'ice',
  },
  {
    slug: 'residential-solar',
    name: 'Residential Solar Applications',
    shortName: 'Residential',
    tagline: 'Clean, intelligent energy for every home.',
    description:
      'Complete residential solar systems engineered for single-family homes, townhouses, and multi-unit dwellings. Combines efficient inverters, battery storage, and smart monitoring to lower bills and increase energy independence.',
    image: images.suburbanHome,
    benefits: [
      'Lower monthly electricity bills',
      'Battery backup for power outages',
      'Smart home energy monitoring',
      'Sleek, low-profile system design',
    ],
    products: ['Single-Phase String Inverter 5kW', 'Hybrid Inverter 5kW', 'Solar Air Conditioner 12000 BTU'],
    theme: 'light',
  },
  {
    slug: 'commercial-solar',
    name: 'Commercial Solar Applications',
    shortName: 'Commercial',
    tagline: 'Scalable solar for business and industry.',
    description:
      'Commercial and industrial solar solutions for offices, warehouses, factories, and agricultural facilities. Higher-capacity three-phase inverters and energy storage reduce operating costs and support sustainability goals.',
    image: images.industrialRooftop,
    benefits: [
      'Reduced operating energy costs',
      'ESG and sustainability reporting',
      'Three-phase commercial inverters',
      'Demand charge management',
    ],
    products: ['Three-Phase String Inverter 20kW', 'Three-Phase String Inverter (LV) 15kW', 'Hybrid Inverter 10kW'],
    theme: 'dark',
  },
];

export const getSolutionBySlug = (slug: string) => solutions.find((s) => s.slug === slug);
