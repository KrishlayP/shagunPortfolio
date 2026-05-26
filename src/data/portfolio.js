export const profile = {
  name: 'Shagun Bajpai',
  role: 'Project Research Engineer',
  location: 'Uttar Pradesh, India',
  email: 'shagunbajpai15@gmail.com',
  phone: '+91 8707313306',
  intro:
    'Data-focused program coordinator blending startup ecosystem operations, analytical reporting, and product lifecycle tracking for mission-driven innovation programs.',
};

export const navLinks = ['about', 'experience', 'skills', 'projects', 'contact'];

export const stats = [
  ['2025', 'SIIC IIT Kanpur'],
  ['150+', 'DSA problems'],
  ['5-Star', 'HackerRank'],
  ['7.2', 'B.Tech CGPA'],
];

export const experience = [
  {
    company: 'Startup Incubation and Innovation Centre (SIIC), IIT Kanpur',
    title: 'Project Research Engineer',
    period: 'Apr 2025 - Present',
    bullets: [
      'Coordinate startups, mentors, investors, and internal teams for smooth program execution.',
      'Track incubated startup lifecycles from ideation and validation through implementation and growth.',
      'Prepare analytical reports, summaries, dashboards, and documentation for leadership review.',
      'Support founders with operational guidance while maintaining governance, timelines, and compliance.',
    ],
  },
];

export const skills = [
  { icon: 'BarChart3', title: 'Data Analysis', items: ['Trend analysis', 'Interpretation', 'Dashboards'] },
  { icon: 'Database', title: 'Data Stack', items: ['Python', 'SQL', 'Pandas', 'NumPy'] },
  { icon: 'Target', title: 'Tools', items: ['GCP', 'AWS S3', 'Athena', 'dbt', 'Tableau', 'Power BI'] },
  { icon: 'BrainCircuit', title: 'Soft Skills', items: ['Stakeholder management', 'Presentation', 'Cross-functional work'] },
];

export const projects = [
  {
    title: 'Rehab: Your Salutary Companion',
    tag: 'Healthcare AI',
    text: 'A mobile health companion using NLP, OpenCV, and privacy-focused algorithms for chatbot support, medical image analysis, and menstrual cycle insights.',
    stack: ['OpenCV', 'NLP', 'MySQL', 'JavaScript'],
  },
  {
    title: 'Home Appliance Control App',
    tag: 'Product Prototype',
    text: 'A working Figma prototype for controlling home appliances through a mobile interface with practical household workflows.',
    stack: ['Figma', 'Mobile UX', 'Prototype'],
  },
  {
    title: 'Driver Drowsiness System',
    tag: 'Computer Vision',
    text: 'A detection system that sounds an alarm when drowsiness is detected and includes emergency alerts for critical situations.',
    stack: ['Python', 'OpenCV', 'Pygame', 'MySQL'],
  },
  {
    title: 'Movie Recommendation System',
    tag: 'Machine Learning',
    text: 'A recommendation engine using machine learning and collaborative filtering to personalize movie suggestions.',
    stack: ['ML', 'Collaborative Filtering', 'Python'],
  },
];

export const achievements = [
  'Coordinated ASEAN-India ScaleHub 2025 in Bali for international startup collaboration.',
  'Led Bank of Baroda Hackathon 2025 coordination across participation, evaluation, and stakeholders.',
  'Completed certifications in IBM Data Analytics, Python, OOP, and DBMS.',
];

export const petals = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  size: 10 + (index % 5) * 3,
  delay: -(index * 0.75),
  duration: 13 + (index % 7),
  drift: index % 2 === 0 ? 72 + index * 3 : -64 - index * 2,
  opacity: 0.34 + (index % 4) * 0.08,
}));
