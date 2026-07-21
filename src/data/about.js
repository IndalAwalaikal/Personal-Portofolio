import { Database, Code2, Cloud, Users, Calendar } from 'lucide-react';

export const simpleSkills = [
  'Golang (Gin/Fiber)', 'Python (FastAPI)', 'Node.js', 'PostgreSQL', 'MySQL',
  'React.js', 'Next.js', 'TypeScript', 'Docker', 'REST API', 'AI Integration', 'AWS'
];

export const detailedSkills = [
  {
    icon: Database,
    title: 'Backend Development',
    level: 90,
    label: 'Expert',
    color: '#00df8f',
    techs: ['Golang (Gin/Fiber)', 'Python (FastAPI)', 'Node.js', 'PostgreSQL', 'MySQL'],
    desc: 'Architecting fast, secure APIs and relational/non-relational database designs.',
  },
  {
    icon: Code2,
    title: 'Frontend Development',
    level: 70,
    label: 'Proficient',
    color: '#3b82f6',
    techs: ['React.js', 'Next.js', 'TypeScript', 'Vite JS'],
    desc: 'Building interactive, responsive and modern web interfaces.',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    level: 50,
    label: 'Intermediate',
    color: '#f59e0b',
    techs: ['AWS', 'Docker', 'CI/CD Pipelines'],
    desc: 'Automating deployment workflows and managing cloud infrastructure.',
  },
];

export const experiences = [
  {
    role: 'Badan Pengurus Harian (BPH)',
    org: 'COCONUT Computer Club',
    period: '2025 — Present',
    desc: 'Active member of the executive board. Contributes to organizational strategy, event management, and fostering a collaborative tech community. Coordinates cross-division activities and represents the club at institutional events.',
    icon: Users,
  },
  {
    role: 'Panitia Lokal (Local Committee)',
    org: 'IDSECCONF 2025 — IDSECCONF × COCONUT (Makassar)',
    period: '2025',
    desc: 'Part of the local committee for IDSECCONF 2025, a leading Indonesian cybersecurity conference. Responsible for logistics coordination, participant engagement, and ensuring smooth event operations.',
    icon: Calendar,
  },
  {
    role: 'Backend Developer',
    org: 'COCONUT Computer Club',
    period: '2025 — Present',
    desc: 'Actively involved in R&D to build internal club applications. Designs databases, writes reliable RESTful APIs using Golang (Gin/Fiber), and promotes best practices in API performance optimization.',
    icon: Code2,
  },
];
