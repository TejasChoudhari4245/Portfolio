// Tech stack shown on the Services page, grouped by category.
export const techStack = [
  {
    category: 'Frontend',
    items: [
      { icon: 'bi-filetype-html', name: 'HTML5' },
      { icon: 'bi-filetype-css', name: 'CSS3' },
      { icon: 'bi-filetype-js', name: 'JavaScript' },
      { icon: 'bi-bootstrap', name: 'Bootstrap' },
      { icon: 'bi-filetype-jsx', name: 'React JS' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { icon: 'bi-filetype-py', name: 'Python' },
      { icon: 'bi-database', name: 'Django' },
      { icon: 'bi-server', name: 'Gunicorn' },
      { icon: 'bi-terminal', name: 'REST APIs' },
    ],
  },
  {
    category: 'Databases',
    items: [
      { icon: 'bi-hdd-stack', name: 'SQL' },
      { icon: 'bi-database-fill', name: 'MongoDB' },
    ],
  },
  {
    category: 'DevOps & Servers',
    items: [
      { icon: 'bi-ubuntu', name: 'Ubuntu' },
      { icon: 'bi-nginx', name: 'Nginx' },
      { icon: 'bi-cloud', name: 'VPS' },
      { icon: 'bi-git', name: 'Git' },
      { icon: 'bi-github', name: 'GitHub' },
    ],
  },
  {
    category: 'Data Science & ML',
    items: [
      { icon: 'bi-cpu', name: 'Machine Learning' },
      { icon: 'bi-bar-chart', name: 'Pandas' },
      { icon: 'bi-pie-chart', name: 'Matplotlib' },
      { icon: 'bi-file-bar-graph', name: 'Power BI' },
    ],
  },
];

// Tech badges shown in the About section on the home page.
export const techArsenal = [
  {
    icon: 'bi-display',
    category: 'Frontend Development',
    badges: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'React.js', 'Responsive Design'],
  },
  {
    icon: 'bi-hdd-stack',
    category: 'Backend Development',
    badges: ['Python', 'Django', 'REST APIs', 'Gunicorn', 'Nginx', 'Node.js'],
  },
  {
    icon: 'bi-database',
    category: 'Databases & DevOps',
    badges: ['SQL', 'MongoDB', 'PostgreSQL', 'Git', 'Docker', 'Ubuntu', 'VPS', 'AWS'],
  },
  {
    icon: 'bi-bar-chart',
    category: 'Data Science & ML',
    badges: ['Machine Learning', 'Pandas', 'Matplotlib', 'Power BI', 'NumPy', 'Scikit-learn'],
  },
];

export const highlights = [
  {
    icon: 'bi-hdd-network',
    title: 'I deploy what I build',
    description: 'Nginx, Gunicorn and Ubuntu, or Netlify when that is the right size of tool.',
  },
  {
    icon: 'bi-phone',
    title: 'Phones first',
    description: 'Most client traffic arrives on a phone, so that is the layout I start from.',
  },
  {
    icon: 'bi-graph-up-arrow',
    title: 'Traffic, not just pages',
    description: 'SEO work on two client sites has brought in 97 leads between them.',
  },
];
