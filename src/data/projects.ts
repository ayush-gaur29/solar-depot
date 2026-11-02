import { images } from './images';

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Utility' | 'Hybrid';
  location: string;
  year: string;
  image: string;
  excerpt: string;
  description: string;
  details: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    id: 'pr1',
    slug: 'suburban-rooftop-residential',
    title: 'Suburban Rooftop Residential System',
    category: 'Residential',
    location: 'New York, USA',
    year: '2023',
    image: images.suburbanHome,
    excerpt: 'A 6 kW residential rooftop installation with hybrid inverter and battery backup.',
    description:
      'A single-family rooftop system combining a 5kW hybrid inverter with lithium battery storage to deliver energy independence and reliable backup power during grid outages. The system is monitored through the Solar Depot platform.',
    details: [
      { label: 'System Size', value: '6 kW' },
      { label: 'Inverter', value: 'Hybrid Inverter 5kW' },
      { label: 'Storage', value: '10 kWh lithium battery' },
      { label: 'Annual Yield', value: '~7,200 kWh' },
    ],
  },
  {
    id: 'pr2',
    slug: 'commercial-warehouse-rooftop',
    title: 'Commercial Warehouse Rooftop Array',
    category: 'Commercial',
    location: 'New Jersey, USA',
    year: '2022',
    image: images.industrialRooftop,
    excerpt: 'A 120 kW commercial rooftop array supplying on-site consumption.',
    description:
      'A large commercial rooftop installation on a logistics warehouse, using three-phase string inverters to offset daytime electricity demand and reduce operating costs across a broad distribution facility.',
    details: [
      { label: 'System Size', value: '120 kW' },
      { label: 'Inverters', value: '6 \u00d7 Three-Phase 20kW' },
      { label: 'Modules', value: '~220 PV panels' },
      { label: 'Annual Yield', value: '~144,000 kWh' },
    ],
  },
  {
    id: 'pr3',
    slug: 'ground-mount-utility-farm',
    title: 'Ground-Mount Utility Solar Farm',
    category: 'Utility',
    location: 'Texas, USA',
    year: '2021',
    image: images.farmAerial,
    excerpt: 'A multi-megawatt ground-mount solar farm feeding the regional grid.',
    description:
      'A utility-scale ground-mount solar farm supplying clean energy to the regional grid. The project uses centralized string inverter architecture and smart monitoring to maximize yield across a large rural site.',
    details: [
      { label: 'System Size', value: '5 MW' },
      { label: 'Inverters', value: 'Three-phase string bank' },
      { label: 'Tracking', value: 'Single-axis trackers' },
      { label: 'Annual Yield', value: '~8,500 MWh' },
    ],
  },
  {
    id: 'pr4',
    slug: 'shaded-rooftop-microinverter',
    title: 'Shaded Rooftop Microinverter System',
    category: 'Residential',
    location: 'Connecticut, USA',
    year: '2023',
    image: images.tiledRoof,
    excerpt: 'A microinverter system designed for a partially shaded rooftop.',
    description:
      'A residential installation on a roof with complex geometry and partial shading, using module-level microinverters to maximize harvest from every panel and simplify system design.',
    details: [
      { label: 'System Size', value: '4.2 kW' },
      { label: 'Inverters', value: '12 \u00d7 Microinverter 350W' },
      { label: 'Module Type', value: 'Mono-PERC 350W' },
      { label: 'Annual Yield', value: '~5,000 kWh' },
    ],
  },
  {
    id: 'pr5',
    slug: 'commercial-office-hybrid',
    title: 'Commercial Office Hybrid System',
    category: 'Hybrid',
    location: 'New York, USA',
    year: '2024',
    image: images.commercialBuilding,
    excerpt: 'A hybrid commercial system combining solar, storage, and grid support.',
    description:
      'A commercial office building outfitted with a hybrid solar-plus-storage system that reduces peak demand, provides backup power, and exports surplus energy back to the grid during high-value periods.',
    details: [
      { label: 'System Size', value: '50 kW' },
      { label: 'Storage', value: '100 kWh battery' },
      { label: 'Inverters', value: 'Hybrid Inverter 10kW \u00d7 5' },
      { label: 'Annual Yield', value: '~60,000 kWh' },
    ],
  },
  {
    id: 'pr6',
    slug: 'farm-solar-storage',
    title: 'Agricultural Farm Solar + Storage',
    category: 'Hybrid',
    location: 'Pennsylvania, USA',
    year: '2022',
    image: images.farmRural,
    excerpt: 'An agricultural site powered by solar generation and battery storage.',
    description:
      'A rural agricultural operation combining ground-mount solar with battery storage to power irrigation, cold storage, and equipment, reducing diesel reliance and stabilizing energy costs.',
    details: [
      { label: 'System Size', value: '30 kW' },
      { label: 'Storage', value: '60 kWh battery' },
      { label: 'Inverters', value: 'Hybrid + Three-phase' },
      { label: 'Annual Yield', value: '~36,000 kWh' },
    ],
  },
  {
    id: 'pr7',
    slug: 'townhouse-residential',
    title: 'Multi-Unit Townhouse Solar',
    category: 'Residential',
    location: 'New York, USA',
    year: '2023',
    image: images.townhouse,
    excerpt: 'A multi-unit residential system serving several townhomes.',
    description:
      'A shared rooftop solar system across a row of modern townhomes, using single-phase string inverters and module-level monitoring to allocate production to each unit fairly.',
    details: [
      { label: 'System Size', value: '15 kW' },
      { label: 'Inverters', value: '3 \u00d7 Single-Phase 5kW' },
      { label: 'Units Served', value: '4 townhomes' },
      { label: 'Annual Yield', value: '~18,000 kWh' },
    ],
  },
  {
    id: 'pr8',
    slug: 'industrial-rooftop-large',
    title: 'Industrial Rooftop Solar Array',
    category: 'Commercial',
    location: 'Ohio, USA',
    year: '2021',
    image: images.commercialCity,
    excerpt: 'A large industrial rooftop array powering a manufacturing facility.',
    description:
      'An industrial manufacturing facility rooftop transformed into a clean energy asset, using low-voltage three-phase inverters to match the facility\u2019s electrical infrastructure and demand profile.',
    details: [
      { label: 'System Size', value: '200 kW' },
      { label: 'Inverters', value: 'Three-phase LV string bank' },
      { label: 'Modules', value: '~360 PV panels' },
      { label: 'Annual Yield', value: '~240,000 kWh' },
    ],
  },
];

export const projectCategories = ['All', 'Residential', 'Commercial', 'Utility', 'Hybrid'] as const;

export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
