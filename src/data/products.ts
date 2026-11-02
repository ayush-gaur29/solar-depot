import { images } from './images';

export type SpecGroup = {
  label: string;
  specs: { label: string; value: string }[];
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  model: string;
  category: string;
  categorySlug: string;
  shortDesc: string;
  description: string;
  image: string;
  gallery: string[];
  highlights: string[];
  specGroups: SpecGroup[];
};

export const productCategories = [
  { name: 'Single-Phase String Inverters', slug: 'single-phase-string-inverters', short: 'Single-Phase' },
  { name: 'Three-Phase String Inverters', slug: 'three-phase-string-inverters', short: 'Three-Phase' },
  { name: 'Three-Phase String Inverters (LV)', slug: 'three-phase-string-inverters-lv', short: 'Three-Phase LV' },
  { name: 'Hybrid Inverters', slug: 'hybrid-inverters', short: 'Hybrid' },
  { name: 'Microinverters', slug: 'microinverters', short: 'Microinverter' },
  { name: 'Solar Air Conditioners', slug: 'solar-air-conditioners', short: 'Solar AC' },
  { name: 'Accessories & Monitoring', slug: 'accessories-and-monitoring', short: 'Accessories' },
];

export const products: Product[] = [
  {
    id: 'p1',
    slug: 'sd-single-phase-3kw',
    name: 'Single-Phase String Inverter 3kW',
    model: 'SD-SP-3K',
    category: 'Single-Phase String Inverters',
    categorySlug: 'single-phase-string-inverters',
    shortDesc: 'Compact residential string inverter with high tracking efficiency.',
    description:
      'A compact and efficient single-phase string inverter designed for residential rooftop installations. Features dual MPPT tracking, wide DC input voltage range, and integrated grid support functions for reliable energy harvest across varying conditions.',
    image: images.inverterInstall,
    gallery: [images.inverterInstall, images.inverterInstall2, images.rooftopArray],
    highlights: ['Dual MPPT design', 'Wide DC input range', 'IP65 rated enclosure', 'Silent natural cooling'],
    specGroups: [
      {
        label: 'Electrical',
        specs: [
          { label: 'Rated Power', value: '3000 W' },
          { label: 'Max AC Output', value: '3300 VA' },
          { label: 'MPPT Range', value: '100\u2013550 V' },
          { label: 'Max Efficiency', value: '98.2%' },
        ],
      },
      {
        label: 'Mechanical',
        specs: [
          { label: 'Dimensions', value: '360 \u00d7 290 \u00d7 130 mm' },
          { label: 'Weight', value: '8.5 kg' },
          { label: 'Protection Rating', value: 'IP65' },
          { label: 'Operating Temp.', value: '-25\u00b0C to 60\u00b0C' },
        ],
      },
    ],
  },
  {
    id: 'p2',
    slug: 'sd-single-phase-5kw',
    name: 'Single-Phase String Inverter 5kW',
    model: 'SD-SP-5K',
    category: 'Single-Phase String Inverters',
    categorySlug: 'single-phase-string-inverters',
    shortDesc: 'Mid-range single-phase inverter for larger residential rooftops.',
    description:
      'A 5kW single-phase string inverter offering excellent yield for medium-to-large residential arrays. Built-in DC/AC surge protection and smart monitoring via the Solar Depot platform.',
    image: images.inverterInstall2,
    gallery: [images.inverterInstall2, images.inverterInstall, images.installRooftop],
    highlights: ['Built-in surge protection', 'Smart platform monitoring', 'Dual MPPT', 'Anti-islanding protection'],
    specGroups: [
      {
        label: 'Electrical',
        specs: [
          { label: 'Rated Power', value: '5000 W' },
          { label: 'Max AC Output', value: '5500 VA' },
          { label: 'MPPT Range', value: '120\u2013560 V' },
          { label: 'Max Efficiency', value: '98.3%' },
        ],
      },
      {
        label: 'Mechanical',
        specs: [
          { label: 'Dimensions', value: '375 \u00d7 305 \u00d7 140 mm' },
          { label: 'Weight', value: '10.2 kg' },
          { label: 'Protection Rating', value: 'IP65' },
          { label: 'Operating Temp.', value: '-25\u00b0C to 60\u00b0C' },
        ],
      },
    ],
  },
  {
    id: 'p3',
    slug: 'sd-three-phase-10kw',
    name: 'Three-Phase String Inverter 10kW',
    model: 'SD-TP-10K',
    category: 'Three-Phase String Inverters',
    categorySlug: 'three-phase-string-inverters',
    shortDesc: 'Commercial three-phase inverter with dual MPPT for rooftop arrays.',
    description:
      'A robust three-phase string inverter engineered for commercial rooftop and small ground-mount systems. Delivers balanced three-phase output, advanced grid support, and high efficiency across a wide input range.',
    image: images.inverterInstall,
    gallery: [images.inverterInstall, images.commercialBuilding, images.industrialRooftop],
    highlights: ['Three-phase balanced output', 'Dual MPPT', 'Reactive power control', 'Remote firmware update'],
    specGroups: [
      {
        label: 'Electrical',
        specs: [
          { label: 'Rated Power', value: '10000 W' },
          { label: 'Max AC Output', value: '11000 VA' },
          { label: 'MPPT Range', value: '200\u20131000 V' },
          { label: 'Max Efficiency', value: '98.5%' },
        ],
      },
      {
        label: 'Mechanical',
        specs: [
          { label: 'Dimensions', value: '460 \u00d7 360 \u00d7 180 mm' },
          { label: 'Weight', value: '17 kg' },
          { label: 'Protection Rating', value: 'IP65' },
          { label: 'Operating Temp.', value: '-25\u00b0C to 60\u00b0C' },
        ],
      },
    ],
  },
  {
    id: 'p4',
    slug: 'sd-three-phase-20kw',
    name: 'Three-Phase String Inverter 20kW',
    model: 'SD-TP-20K',
    category: 'Three-Phase String Inverters',
    categorySlug: 'three-phase-string-inverters',
    shortDesc: 'High-capacity three-phase inverter for commercial installations.',
    description:
      'A 20kW three-phase string inverter built for larger commercial arrays and distributed generation. Supports multi-MPPT configurations and integrated DC disconnect for streamlined installation.',
    image: images.inverterInstall2,
    gallery: [images.inverterInstall2, images.industrialRooftop, images.commercialBuilding2],
    highlights: ['Multi-MPPT support', 'Integrated DC disconnect', 'Grid code compliant', 'Wi-Fi + Ethernet'],
    specGroups: [
      {
        label: 'Electrical',
        specs: [
          { label: 'Rated Power', value: '20000 W' },
          { label: 'Max AC Output', value: '22000 VA' },
          { label: 'MPPT Range', value: '250\u20131000 V' },
          { label: 'Max Efficiency', value: '98.6%' },
        ],
      },
      {
        label: 'Mechanical',
        specs: [
          { label: 'Dimensions', value: '510 \u00d7 390 \u00d7 200 mm' },
          { label: 'Weight', value: '24 kg' },
          { label: 'Protection Rating', value: 'IP66' },
          { label: 'Operating Temp.', value: '-25\u00b0C to 60\u00b0C' },
        ],
      },
    ],
  },
  {
    id: 'p5',
    slug: 'sd-tp-lv-15kw',
    name: 'Three-Phase String Inverter (LV) 15kW',
    model: 'SD-TP-LV-15K',
    category: 'Three-Phase String Inverters (LV)',
    categorySlug: 'three-phase-string-inverters-lv',
    shortDesc: 'Low-voltage three-phase inverter for specific grid requirements.',
    description:
      'A low-voltage three-phase string inverter optimized for installations requiring reduced DC voltages. Combines the reliability of three-phase output with safer low-voltage operation for a range of project designs.',
    image: images.inverterInstall,
    gallery: [images.inverterInstall, images.farmTrackers, images.batteryInstall],
    highlights: ['Low-voltage DC input', 'Safer installation', 'Dual MPPT', 'Grid-support ready'],
    specGroups: [
      {
        label: 'Electrical',
        specs: [
          { label: 'Rated Power', value: '15000 W' },
          { label: 'Max AC Output', value: '16500 VA' },
          { label: 'MPPT Range', value: '150\u2013600 V' },
          { label: 'Max Efficiency', value: '98.4%' },
        ],
      },
      {
        label: 'Mechanical',
        specs: [
          { label: 'Dimensions', value: '480 \u00d7 370 \u00d7 185 mm' },
          { label: 'Weight', value: '19 kg' },
          { label: 'Protection Rating', value: 'IP65' },
          { label: 'Operating Temp.', value: '-25\u00b0C to 60\u00b0C' },
        ],
      },
    ],
  },
  {
    id: 'p6',
    slug: 'sd-hybrid-5kw',
    name: 'Hybrid Inverter 5kW',
    model: 'SD-HY-5K',
    category: 'Hybrid Inverters',
    categorySlug: 'hybrid-inverters',
    shortDesc: 'Hybrid inverter with battery storage and backup power support.',
    description:
      'An intelligent hybrid inverter that combines solar generation, battery storage, and grid interaction in a single unit. Provides seamless backup power during outages and optimizes self-consumption for energy independence.',
    image: images.batteryInstall,
    gallery: [images.batteryInstall, images.batteryHome, images.inverterInstall],
    highlights: ['Integrated battery charging', 'Backup power capable', 'Self-consumption optimization', 'Smart load control'],
    specGroups: [
      {
        label: 'Electrical',
        specs: [
          { label: 'Rated Power', value: '5000 W' },
          { label: 'Battery Voltage', value: '48 V' },
          { label: 'MPPT Range', value: '125\u2013560 V' },
          { label: 'Max Efficiency', value: '97.8%' },
        ],
      },
      {
        label: 'Mechanical',
        specs: [
          { label: 'Dimensions', value: '420 \u00d7 330 \u00d7 165 mm' },
          { label: 'Weight', value: '14 kg' },
          { label: 'Protection Rating', value: 'IP65' },
          { label: 'Operating Temp.', value: '-10\u00b0C to 50\u00b0C' },
        ],
      },
    ],
  },
  {
    id: 'p7',
    slug: 'sd-hybrid-10kw',
    name: 'Hybrid Inverter 10kW',
    model: 'SD-HY-10K',
    category: 'Hybrid Inverters',
    categorySlug: 'hybrid-inverters',
    shortDesc: 'Three-phase hybrid inverter with higher capacity storage.',
    description:
      'A high-capacity three-phase hybrid inverter for larger homes and commercial energy storage systems. Supports multiple battery strings, intelligent energy management, and grid-tie or off-grid operation.',
    image: images.batteryHome,
    gallery: [images.batteryHome, images.batteryInstall, images.commercialCity],
    highlights: ['Three-phase hybrid', 'Multi-battery support', 'Off-grid capable', 'Energy management system'],
    specGroups: [
      {
        label: 'Electrical',
        specs: [
          { label: 'Rated Power', value: '10000 W' },
          { label: 'Battery Voltage', value: '48 V' },
          { label: 'MPPT Range', value: '200\u2013850 V' },
          { label: 'Max Efficiency', value: '98.0%' },
        ],
      },
      {
        label: 'Mechanical',
        specs: [
          { label: 'Dimensions', value: '480 \u00d7 380 \u00d7 195 mm' },
          { label: 'Weight', value: '22 kg' },
          { label: 'Protection Rating', value: 'IP65' },
          { label: 'Operating Temp.', value: '-10\u00b0C to 50\u00b0C' },
        ],
      },
    ],
  },
  {
    id: 'p8',
    slug: 'sd-microinv-350w',
    name: 'Microinverter 350W',
    model: 'SD-MI-350',
    category: 'Microinverters',
    categorySlug: 'microinverters',
    shortDesc: 'Per-panel microinverter for shade-resilient residential arrays.',
    description:
      'A module-level microinverter that converts DC to AC at each panel, maximizing harvest even under partial shading. Simplifies system design and improves safety with rapid shutdown capability.',
    image: images.inverterInstall2,
    gallery: [images.inverterInstall2, images.installRooftop, images.homesSky],
    highlights: ['Module-level MPPT', 'Shade resilience', 'Rapid shutdown', 'Plug-and-play installation'],
    specGroups: [
      {
        label: 'Electrical',
        specs: [
          { label: 'Rated Power', value: '350 W' },
          { label: 'Output Voltage', value: '230 V AC' },
          { label: 'MPPT Range', value: '22\u201355 V' },
          { label: 'Max Efficiency', value: '96.5%' },
        ],
      },
      {
        label: 'Mechanical',
        specs: [
          { label: 'Dimensions', value: '210 \u00d7 160 \u00d7 30 mm' },
          { label: 'Weight', value: '1.6 kg' },
          { label: 'Protection Rating', value: 'IP67' },
          { label: 'Operating Temp.', value: '-40\u00b0C to 65\u00b0C' },
        ],
      },
    ],
  },
  {
    id: 'p9',
    slug: 'sd-solar-ac-12000btu',
    name: 'Solar Air Conditioner 12000 BTU',
    model: 'SD-AC-12K',
    category: 'Solar Air Conditioners',
    categorySlug: 'solar-air-conditioners',
    shortDesc: 'Solar-powered air conditioner for off-grid and hybrid cooling.',
    description:
      'A solar air conditioner that operates directly from DC photovoltaic input with AC grid backup. Ideal for reducing daytime cooling costs in homes, offices, and remote installations.',
    image: images.inverterInstall,
    gallery: [images.inverterInstall, images.suburbanHome, images.residentialHome],
    highlights: ['DC + AC hybrid input', '48-hour battery backup', 'Inverter compressor', 'Low energy consumption'],
    specGroups: [
      {
        label: 'Performance',
        specs: [
          { label: 'Cooling Capacity', value: '12000 BTU/h' },
          { label: 'SEER Rating', value: '22' },
          { label: 'DC Input Range', value: '48\u201380 V' },
          { label: 'Refrigerant', value: 'R410A' },
        ],
      },
      {
        label: 'Mechanical',
        specs: [
          { label: 'Indoor Dimensions', value: '900 \u00d7 290 \u00d7 200 mm' },
          { label: 'Outdoor Dimensions', value: '780 \u00d7 540 \u00d7 280 mm' },
          { label: 'Protection Rating', value: 'IPX4' },
          { label: 'Operating Temp.', value: '-15\u00b0C to 52\u00b0C' },
        ],
      },
    ],
  },
  {
    id: 'p10',
    slug: 'sd-solar-ac-24000btu',
    name: 'Solar Air Conditioner 24000 BTU',
    model: 'SD-AC-24K',
    category: 'Solar Air Conditioners',
    categorySlug: 'solar-air-conditioners',
    shortDesc: 'High-capacity solar AC for larger spaces and commercial use.',
    description:
      'A high-capacity solar air conditioner delivering powerful cooling for larger rooms and light-commercial spaces. Runs primarily on solar DC input with automatic AC grid switching.',
    image: images.inverterInstall2,
    gallery: [images.inverterInstall2, images.commercialBuilding, images.industrialRooftop],
    highlights: ['24000 BTU cooling', 'Solar-first operation', 'Quiet inverter drive', 'Remote control included'],
    specGroups: [
      {
        label: 'Performance',
        specs: [
          { label: 'Cooling Capacity', value: '24000 BTU/h' },
          { label: 'SEER Rating', value: '21' },
          { label: 'DC Input Range', value: '48\u2013100 V' },
          { label: 'Refrigerant', value: 'R410A' },
        ],
      },
      {
        label: 'Mechanical',
        specs: [
          { label: 'Indoor Dimensions', value: '1080 \u00d7 320 \u00d7 220 mm' },
          { label: 'Outdoor Dimensions', value: '900 \u00d7 700 \u00d7 350 mm' },
          { label: 'Protection Rating', value: 'IPX4' },
          { label: 'Operating Temp.', value: '-15\u00b0C to 52\u00b0C' },
        ],
      },
    ],
  },
  {
    id: 'p11',
    slug: 'sd-energy-meter',
    name: 'Smart Energy Meter',
    model: 'SD-EM-1P',
    category: 'Accessories & Monitoring',
    categorySlug: 'accessories-and-monitoring',
    shortDesc: 'Single-phase smart meter for production and consumption monitoring.',
    description:
      'A single-phase smart energy meter that integrates with Solar Depot inverters to provide real-time production and consumption data. Enables precise self-consumption analysis and reporting.',
    image: images.batteryInstall,
    gallery: [images.batteryInstall, images.inverterInstall, images.cadDesign],
    highlights: ['Real-time monitoring', 'Production + consumption', 'Platform integration', 'Modbus / RS485'],
    specGroups: [
      {
        label: 'Electrical',
        specs: [
          { label: 'Measurement', value: 'Single-phase' },
          { label: 'Accuracy', value: 'Class 1.0' },
          { label: 'Communication', value: 'RS485 / Modbus' },
          { label: 'Rated Current', value: '60 A' },
        ],
      },
      {
        label: 'Mechanical',
        specs: [
          { label: 'Dimensions', value: '90 \u00d7 70 \u00d7 65 mm' },
          { label: 'Mounting', value: 'DIN rail' },
          { label: 'Protection Rating', value: 'IP54' },
          { label: 'Operating Temp.', value: '-10\u00b0C to 55\u00b0C' },
        ],
      },
    ],
  },
  {
    id: 'p12',
    slug: 'sd-monitoring-dongle',
    name: 'Wi-Fi Monitoring Dongle',
    model: 'SD-WF-01',
    category: 'Accessories & Monitoring',
    categorySlug: 'accessories-and-monitoring',
    shortDesc: 'Plug-in Wi-Fi dongle for inverter data logging and alerts.',
    description:
      'A plug-in Wi-Fi data logger that connects compatible Solar Depot inverters to the cloud monitoring platform, enabling remote diagnostics, performance alerts, and firmware updates.',
    image: images.inverterInstall2,
    gallery: [images.inverterInstall2, images.technicalDrawings, images.cadDesign],
    highlights: ['Wi-Fi 2.4 GHz', 'Remote diagnostics', 'Performance alerts', 'OTA firmware updates'],
    specGroups: [
      {
        label: 'Connectivity',
        specs: [
          { label: 'Wireless', value: 'Wi-Fi 2.4 GHz' },
          { label: 'Interface', value: 'USB / RS485' },
          { label: 'Protocol', value: 'MQTT / HTTPS' },
          { label: 'Encryption', value: 'AES-128' },
        ],
      },
      {
        label: 'Mechanical',
        specs: [
          { label: 'Dimensions', value: '75 \u00d7 45 \u00d7 22 mm' },
          { label: 'Weight', value: '0.1 kg' },
          { label: 'Protection Rating', value: 'IP54' },
          { label: 'Operating Temp.', value: '-10\u00b0C to 55\u00b0C' },
        ],
      },
    ],
  },
];

export const featuredProductSlugs = [
  'sd-hybrid-5kw',
  'sd-single-phase-5kw',
  'sd-three-phase-10kw',
  'sd-microinv-350w',
  'sd-solar-ac-12000btu',
  'sd-energy-meter',
];

export const getProductBySlug = (slug: string) => products.find((p) => p.slug === slug);
export const getProductsByCategory = (catSlug: string) =>
  products.filter((p) => p.categorySlug === catSlug);
export const getRelatedProducts = (product: Product, count = 3) =>
  products.filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id).slice(0, count);
