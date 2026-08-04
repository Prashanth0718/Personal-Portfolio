import {
  SiPython, SiJavascript, SiHtml5, SiReact,
  SiFastapi, SiSqlite, SiGit, SiGithub, SiMysql, SiDatabricks,
  SiTailwindcss, SiMongodb, SiThreedotjs, SiDocker, SiVercel, SiNodedotjs, SiExpress, SiNetlify, SiFramer, SiVite, SiPostman,
} from 'react-icons/si';
import { DiJava, DiCss3, DiAws, DiVisualstudio } from 'react-icons/di';
import { TbSql } from 'react-icons/tb';
import { HiOutlineCommandLine } from 'react-icons/hi2';

export const personal = {
  name: 'Prashanth S N',
  firstName: 'Prashanth',
  lastName: 'S N',
  role: 'Associate Software Engineer',
  company: 'CGI',
  unit: 'Insurance & Health Business Unit',
  location: 'Hyderabad, India',
  email: 'prashanthsn2003@gmail.com',
  phone: '+91 6363690394',
  github: 'https://github.com/Prashanth0718',
  githubUser: 'Prashanth0718',
  linkedin: 'https://www.linkedin.com/in/prashanth-s-n-agrahara/',
  twitter: 'https://twitter.com/prashanth_s_n',
  instagram: 'https://www.instagram.com/_.prashanth_kshatriyas._',
  bio:
    'I build modern full-stack applications, scalable backend systems, and data-driven software solutions that solve real-world problems.',

  longBio:
    'I am an Associate Software Engineer at CGI with a passion for building modern full-stack applications and scalable backend systems. My experience includes developing web applications, ETL pipelines, and data processing solutions using Python, Java, React, FastAPI, SQL, and modern development tools. I enjoy solving complex problems, writing clean and maintainable code, and continuously expanding my knowledge in AWS Cloud and modern software engineering.',

  tagline:
    'Building software that solves problems and creates meaningful digital experiences.',
};

export const roles = [
  'Software Developer',
  'Full-Stack Developer',
  'Backend Developer',
  'Data Engineer',
];

export const socials = [
  { name: 'GitHub', url: 'https://github.com/Prashanth0718', icon: 'github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/prashanth-s-n-agrahara/', icon: 'linkedin' },
  { name: 'Email', url: 'mailto:prashanthsn2003@gmail.com', icon: 'mail' },
];

export const stats = [
  { label: 'Projects', value: 8, suffix: '+' },
  { label: 'Technologies', value: 12, suffix: '+' },
  { label: 'GitHub Repositories', value: 18, suffix: '+' },
  { label: 'Certifications', value: 4, suffix: '+' },
];

export const about = {
  paragraphs: [
    'I am an Associate Software Engineer at CGI who enjoys building modern full-stack applications and solving real-world problems through technology. From responsive user interfaces to scalable backend systems, I love creating software that delivers great user experiences.',

    'Alongside full-stack development, I work on ETL pipelines, data processing, and automation using Python and SQL. I enjoy learning new technologies, exploring cloud platforms, and continuously improving my software engineering skills.',

    'I believe great software is built with clean architecture, maintainable code, and a mindset of continuous learning. Every project is an opportunity to improve, innovate, and create something meaningful.',
  ],
  mission: 'To build reliable software that combines clean architecture, modern technologies, and exceptional user experiences while solving real-world problems.',
  vision: 'To become a skilled software engineer who builds scalable applications, contributes to innovative products, and continuously grows in full-stack development, data engineering, and cloud technologies.',
  interests: [
  'Full-Stack Development',
  'Backend Development',
  'Data Engineering & ETL',
  'Cloud Computing (AWS)',
  'UI/UX Design',
  'Open Source',
  ],
  education: [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science and Engineering',
    institution: 'Presidency University',
    year: '2021 – 2025',
    desc: 'Graduated with a CGPA of 8.91.',
  },
  {
    degree: 'Pre-University (PU)',
    field: 'Physics, Chemistry, Mathematics, Biology (PCMB)',
    institution: 'Narayana PU College',
    year: '2021',
    desc: 'Completed with 92%.',
  },
  {
    degree: 'SSLC',
    institution: 'Navodaya Vidya Samasthe',
    year: '2019',
    desc: 'Completed with 87.52%.',
  },
  ],
  languages: [
    { name: 'English', level: 'Professional' },
    { name: 'Kannada', level: 'Native' },
    { name: 'Telugu', level: 'Conversational' },
  ],
  timeline: [
  {
    year: '2021',
    title: 'Started B.Tech Journey',
    desc: 'Began my Computer Science and Engineering degree at Presidency University.',
  },

  {
    year: '2024',
    title: 'Web Development Internship',
    desc: 'Worked as a Web Development Intern at Zidio, building MERN stack applications and gaining hands-on full-stack experience.',
  },

  {
    year: '2025',
    title: 'Graduated',
    desc: 'Completed my Bachelor of Technology in Computer Science and Engineering with a CGPA of 8.91.',
  },

  {
    year: '2025',
    title: 'Joined CGI',
    desc: 'Started my journey as an Associate Software Engineer at CGI.',
  },

  {
    year: '2026',
    title: 'ETL & Full-Stack Development',
    desc: 'Developed ETL automation solutions and modern full-stack applications using React, FastAPI, Python, SQL, and MongoDB.',
  },

  {
    year: 'Present',
    title: 'Learning AWS',
    desc: 'Currently expanding my knowledge in AWS Cloud, software architecture, and scalable application development.',
  },
],
};

export const skillCategories = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Python', level: 90, icon: SiPython, color: '#3776AB' },
      { name: 'Java', level: 85, icon: DiJava, color: '#ED8B00' },
      { name: 'JavaScript', level: 80, icon: SiJavascript, color: '#F7DF1E' },
      { name: 'SQL', level: 88, icon: TbSql, color: '#00758F' },
      { name: 'HTML', level: 90, icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS', level: 85, icon: DiCss3, color: '#1572B6' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 82, icon: SiReact, color: '#61DAFB' },
      { name: 'Tailwind CSS', level: 85, icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Three.js', level: 65, icon: SiThreedotjs, color: '#ffffff' },
      { name: 'Framer Motion', level: 80, icon: SiFramer, color: '#0055FF' },
      { name: 'Vite', level: 82, icon: SiVite, color: '#646CFF' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'FastAPI', level: 78, icon: SiFastapi, color: '#009688' },
      { name: 'Node.js', level: 75, icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', level: 75, icon: SiExpress, color: '#339933' },
      { name: 'REST APIs', level: 80, icon: HiOutlineCommandLine, color: '#a78bfa' },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MySQL', level: 80, icon: SiMysql, color: '#4479A1' },
      { name: 'MongoDB', level: 70, icon: SiMongodb, color: '#47A248' },
      { name: 'SQLite', level: 82, icon: SiSqlite, color: '#003B57' },
    ],
  },
  {
    category: 'Data Engineering',
    skills: [
      { name: 'ETL', level: 85, icon: HiOutlineCommandLine, color: '#a78bfa' },
      { name: 'Databricks', level: 75, icon: SiDatabricks, color: '#FF3621' },
      { name: 'SCD Type 2', level: 80, icon: HiOutlineCommandLine, color: '#60a5fa' },
      { name: 'Data Warehousing', level: 78, icon: HiOutlineCommandLine, color: '#150458' },
    ],
  },
  {
    category: 'Tools & Cloud',
    skills: [
      { name: 'Git', level: 85, icon: SiGit, color: '#F05032' },
      { name: 'GitHub', level: 88, icon: SiGithub, color: '#ffffff' },
      { name: 'Docker', level: 60, icon: SiDocker, color: '#2496ED' },
      { name: 'Vercel', level: 75, icon: SiVercel, color: '#ffffff' },
      { name: 'AWS', level: 40, icon: DiAws, color: '#FF9900' },
      { name: 'Netlify', level: 88, icon: SiNetlify, color: '#ffffff' },

    ],
  },
];

export const skills = [
  { name: 'Python', level: 90, icon: SiPython, color: '#3776AB' },
  { name: 'Java', level: 85, icon: DiJava, color: '#ED8B00' },
  { name: 'JavaScript', level: 80, icon: SiJavascript, color: '#F7DF1E' },
  { name: 'React', level: 82, icon: SiReact, color: '#61DAFB' },
  { name: 'FastAPI', level: 78, icon: SiFastapi, color: '#009688' },
  { name: 'Node.js', level: 75, icon: SiNodedotjs, color: '#339933' },
  { name: 'SQL', level: 88, icon: TbSql, color: '#00758F' },
  { name: 'MongoDB', level: 70, icon: SiMongodb, color: '#47A248' },
  { name: 'ETL', level: 85, icon: HiOutlineCommandLine, color: '#a78bfa' },
  { name: 'Databricks', level: 75, icon: SiDatabricks, color: '#FF3621' },
  { name: 'Git', level: 85, icon: SiGit, color: '#F05032' },
  { name: 'GitHub', level: 88, icon: SiGithub, color: '#ffffff' },
  { name: 'Tailwind CSS', level: 85, icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'MySQL', level: 80, icon: SiMysql, color: '#4479A1' },
  { name: 'AWS', level: 40, icon: DiAws, color: '#FF9900' },
];

export const techStackCategories = [
  {
    category: 'Frontend',
    icon: 'layout',
    accent: '#61DAFB',
    items: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Three.js', icon: SiThreedotjs, color: '#ffffff' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: DiCss3, color: '#1572B6' },
      { name: 'Vite', icon: SiVite, color: '#646CFF' },
      { name: 'Framer Motion', icon: SiFramer, color: '#0055FF' },
    ],
  },
  {
    category: 'Backend',
    icon: 'server',
    accent: '#009688',
    items: [
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#ffffff' },
      { name: 'REST APIs', icon: HiOutlineCommandLine, color: '#a78bfa' },
    ],
  },
  {
    category: 'Databases',
    icon: 'database',
    accent: '#4479A1',
    items: [
      { name: 'SQLite', icon: SiSqlite, color: '#003B57' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'SQL', icon: TbSql, color: '#00758F' },
    ],
  },
  {
    category: 'Data Engineering',
    icon: 'workflow',
    accent: '#FF3621',
    items: [
      { name: 'ETL', icon: HiOutlineCommandLine, color: '#a78bfa' },
      { name: 'Databricks', icon: SiDatabricks, color: '#FF3621' },
      { name: 'SCD Type 2', icon: HiOutlineCommandLine, color: '#60a5fa' },
      { name: 'Data Warehousing', icon: HiOutlineCommandLine, color: '#22d3ee' },
      { name: 'Pandas', icon: HiOutlineCommandLine, color: '#150458' },
    ],
  },
  {
    category: 'Cloud',
    icon: 'cloud',
    accent: '#2496ED',
    items: [
      { name: 'AWS', icon: DiAws, color: '#FF9900' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Vercel', icon: SiVercel, color: '#ffffff' },
      { name: 'Netlify', icon: SiNetlify, color: '#ffffff' },
    ],
  },
  {
    category: 'Tools',
    icon: 'tool',
    accent: '#F05032',
    items: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
      { name: 'Postman', icon: SiPostman, color: '#007ACC' },
      { name: 'VS Code', icon: DiVisualstudio, color: '#007ACC' },

    ],
  },
];

export const techStack = [
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Java', icon: DiJava, color: '#ED8B00' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Express.js', icon: SiExpress, color: '#ffffff' },
  { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'Databricks', icon: SiDatabricks, color: '#FF3621' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
  { name: 'AWS', icon: DiAws, color: '#FF9900' },
];

export const experiences = [
  {
    id: 'cgi',
    company: 'CGI',
    role: 'Associate Software Engineer',
    unit: 'Insurance & Health Business Unit',
    period: '2025 — Present',
    duration: 'Present',
    location: 'Hyderabad, India',
    type: 'Full-time',
    current: true,
    logo: 'CG',
    accent: '#7c3aed',
    overview: 'As an Associate Software Engineer at CGI, I work on enterprise software solutions involving full-stack development, ETL pipelines, and data processing. My focus is on building reliable applications, automating workflows, and delivering scalable software solutions while continuously expanding my knowledge in AWS Cloud and modern software engineering.',
    responsibilities: [
      'Develop enterprise software solutions using Python and modern development practices.',
      'Build ETL pipelines for data extraction, transformation, validation, and reporting.',
      'Implement SCD Type 2 logic for historical data management.',
      'Collaborate in developing enterprise software solutions and data processing workflows.',
      'Collaborate with cross-functional teams using Agile methodologies.',
      'Write clean, maintainable, and well-documented code.',
    ],
    technologies: [
      'Python',
      'Java',
      'SQL',
      'MySQL',
      'ETL',
      'Git',
      'Data Validation',
      'SCD Type 2',
    ],
    achievements: [
    'Developed ETL automation solutions for enterprise data processing.',
    'Implemented SCD Type 2 logic for maintaining historical records.',
    'Built reusable data validation and transformation modules.',
    'Contributed to enterprise software development using Python and SQL.',
    ],
    // timeline: [
    //   { year: '2023', title: 'Onboarded at CGI', desc: 'Joined the Insurance & Health BU and ramped up on enterprise data systems.' },
    //   { year: '2023', title: 'ETL Pipeline Build', desc: 'Designed and shipped the customer data ETL pipeline with SCD Type 2.' },
    //   { year: '2024', title: 'Performance Optimization', desc: 'Reduced pipeline runtime by 40% with batched merges and indexed lookups.' },
    //   { year: '2024', title: 'Databricks Certified', desc: 'Earned Databricks Certified Data Engineer Associate certification.' },
    // ],
  },
  {
    id: 'internship',
    company: 'Zidio Development',
    role: 'Web Development Intern',
    unit: 'Web & Data Engineering',
    period: 'Apr 2024 — Jun 2024',
    duration: '3 months',
    location: 'Bengaluru, India',
    type: 'Internship',
    current: false,
    logo: 'IN',
    accent: '#3b82f6',
    overview: 'Worked on modern web applications, contributing to frontend development, backend APIs, and database integration while gaining practical experience in full-stack software development.',
    responsibilities: [
      'Developed responsive web applications using React.',
      'Built backend APIs using Node.js and Express.js.',
      'Integrated MongoDB for data storage and retrieval.',
      'Collaborated with team members using Git and Agile practices.',
    ],
    technologies: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JavaScript',
      'Git',
    ],
    achievements: [
    'Developed responsive web application features.',
    'Contributed to frontend and backend development.',
    'Improved understanding of full-stack development practices.',
  ]
  },
];

export const experienceData = experiences[0];

export const projects = [
  {
    slug: 'lumina-chat',
    title: 'Lumina Chat',
    tagline: 'Modern full-stack real-time chat application with secure authentication, WebSocket communication, and rich messaging features.',
    accent: '#3b82f6',
    category: 'Full-Stack',
    status: 'Completed',
    featured: true,
    role: 'Full-Stack Developer',
    duration: '2 months',
    year: '2026',
    learnings: 'Building Lumina Chat strengthened my understanding of full-stack application development, JWT authentication, WebSocket communication, state management, and designing responsive user experiences with React and FastAPI.',
    overview: 'Lumina Chat is a full-stack real-time messaging platform built using React, FastAPI, MongoDB, and WebSockets. It enables secure one-to-one and group conversations with authentication, media sharing, real-time updates, and a modern responsive interface.',
    problem: 'Traditional messaging applications require secure authentication, instant communication, and a seamless user experience. The goal was to build a modern chat platform that supports real-time messaging, group collaboration, media sharing, and responsive design while maintaining reliable backend communication.',
    techStack: [
        'React',
        'FastAPI',
        'MongoDB',
        'WebSockets',
        'Tailwind CSS',
        'JWT',
    ],
    architecture: 'Built using a client-server architecture where the React frontend communicates with a FastAPI backend through REST APIs and WebSockets. MongoDB stores user accounts, chats, groups, and messages, while JWT authentication secures protected routes and user sessions.',
    features: [
      'JWT Authentication',
      'Private & Group Messaging',
      'Real-Time Communication using WebSockets',
      'Media & File Sharing',
      'Voice Notes',
      'Typing Indicators & Read Receipts',
      'User Profiles',
      'Responsive Glassmorphism UI',
    ],
    workflow: [
      {
        phase: 'Authentication',
        desc: 'User login and JWT verification',
      },
      {
        phase: 'Connection',
        desc: 'WebSocket connection established',
      },
      {
        phase: 'Messaging',
        desc: 'Real-time message exchange',
      },
      {
        phase: 'Persistence',
        desc: 'Store conversations in MongoDB',
      },
    ],
    challenges: 'Managing real-time communication, authentication, WebSocket connections, message synchronization, and maintaining a smooth user experience across different devices.',
    solutions: 'Implemented JWT-based authentication, WebSocket communication for live messaging, MongoDB for data persistence, and a responsive React frontend with reusable components to deliver a modern chat experience.',
    gallery: ['lumina-1', 'lumina-2', 'lumina-3'],
    timeline: [
      {
        phase: 'Authentication',
        desc: 'Implemented secure JWT authentication',
      },
      {
        phase: 'Messaging',
        desc: 'Built real-time chat using WebSockets',
      },
      {
        phase: 'Groups',
        desc: 'Added group messaging and collaboration',
      },
      {
        phase: 'Media',
        desc: 'Integrated media sharing and voice messages',
      },
    ],
    stats: [
      {
        label: 'Architecture',
        value: 'Client-Server',
      },
      {
        label: 'Communication',
        value: 'WebSockets',
      },
      {
        label: 'Authentication',
        value: 'JWT',
      },
    ],
    github: 'https://github.com/Prashanth0718/LuminaChat',
    demo: 'https://luminachat-vert.vercel.app',
    related: ['employee-data-etl-pipeline', 'chatbot-ticketing-system'],
  },
    {
    slug: 'employee-data-etl-pipeline',
    title: 'Employee Data ETL Pipeline',
    tagline: 'A modular ETL pipeline for automating employee data processing with validation, auditing, and SCD Type 2 history tracking.',
    cover: 'etl',
    accent: '#7c3aed',
    category: 'Data Engineering',
    status: 'Completed',
    featured: true,
    role: 'Data Engineer',
    duration: '3 months',
    year: '2026',
    learnings: 'This project strengthened my understanding of ETL architecture, SCD Type 2 implementation, data validation, audit logging, and building modular data pipelines using Python.',
    overview: 'Developed a modular ETL pipeline in Python that automates customer data extraction, validation, transformation, duplicate detection, and loading into a SQLite data warehouse. The pipeline preserves historical records using Slowly Changing Dimension (SCD) Type 2 and generates audit reports for every execution.',
    problem: 'Managing customer data manually can lead to inconsistent records, duplicate business keys, and loss of historical information. The objective was to automate the ETL process while ensuring data quality, historical tracking, and a modular architecture that can be extended easily.',
    techStack: [
        'Python',
        'SQLite',
        'SQL',
        'ETL',
        'SCD Type 2',
    ],
    architecture: 'Implemented a layered ETL architecture consisting of Source, Validation, Duplicate Detection, Transformation, Staging, Warehouse, and Audit layers. The pipeline generates MD5 hashes for change detection, creates surrogate keys, and applies SCD Type 2 to preserve historical data.',
    features: [
      'Automated CSV data extraction',
      'Data validation and cleansing',
      'Duplicate business key detection',
      'MD5 hash generation for change detection',
      'SCD Type 2 historical tracking',
      'ETL audit logging',
    ],
    workflow: [
      { phase: 'Ingestion', desc: 'Source feed parsing and staging load' },
      { phase: 'Validation', desc: 'Schema and business-rule checks' },
      { phase: 'Transformation', desc: 'Cleansing, dedup, enrichment' },
      { phase: 'Load', desc: 'SCD Type 2 merge into dimensions' },
    ],
    challenges: 'Building a modular ETL pipeline capable of validating data, detecting duplicate business keys, maintaining historical records, and ensuring reliable data loading without using external ETL libraries.',
    solutions: 'Designed a modular ETL architecture with separate extraction, validation, duplicate checking, transformation, loading, and auditing modules. Implemented MD5 hash-based change detection and SCD Type 2 logic to preserve historical customer records.',
    gallery: ['etl-1', 'etl-2', 'etl-3'],
    timeline: [
      { phase: 'Ingestion', desc: 'Source feed parsing and staging load' },
      { phase: 'Validation', desc: 'Schema and business-rule checks' },
      { phase: 'Transformation', desc: 'Cleansing, dedup, enrichment' },
      { phase: 'Load', desc: 'SCD Type 2 merge into dimensions' },
    ],
    stats: [
    {
      label: 'Architecture',
      value: 'Modular ETL',
    },
    {
      label: 'Warehouse',
      value: 'SQLite',
    },
    {
      label: 'History',
      value: 'SCD Type 2',
    },
  ],
    github: 'https://github.com/Prashanth0718/customer-etl-pipeline',
    demo: null,
    related: ['lumina-chat', 'chatbot-ticketing-system'],
  },
  {
  slug: 'portfolio-website',
  title: 'Personal Portfolio Website',
  tagline: 'A modern, responsive portfolio website showcasing my projects, technical skills, and professional journey.',

  cover: 'portfolio',
  accent: '#8b5cf6',

  category: 'Frontend',

  status: 'Completed',

  featured: true,

  role: 'Frontend Developer',

  duration: '3 Weeks',

  year: '2026',

  learnings:
    'Building my portfolio strengthened my understanding of modern React development, reusable component architecture, responsive UI design, animations, routing, and creating an engaging user experience.',

  overview:
    'Designed and developed a modern personal portfolio website to showcase my software engineering journey, featured projects, technical skills, certifications, and professional experience. The website emphasizes clean UI, smooth animations, responsive layouts, and an interactive user experience.',

  problem:
    'Recruiters and hiring managers need a single platform to quickly understand my technical skills, project experience, and career journey. The objective was to create a professional portfolio that effectively presents my work while demonstrating frontend development skills.',

  techStack: [
    'React',
    'Vite',
    'Tailwind CSS',
    'Framer Motion',
    'React Router',
    'JavaScript',
  ],

  architecture:
    'Built using React and Vite with a component-based architecture. The application uses React Router for navigation, Tailwind CSS for responsive styling, and Framer Motion for smooth page transitions and animations. Project and personal information are managed through reusable data objects for easy maintenance.',

  features: [
    'Responsive modern UI',
    'Dark theme with glassmorphism',
    'Animated page transitions',
    'Interactive project showcase',
    'Project case study pages',
    'Skills, certifications, and experience sections',
    'Downloadable resume',
    'Contact form',
  ],

  workflow: [
    {
      phase: 'Design',
      desc: 'Designed modern UI and user experience',
    },
    {
      phase: 'Development',
      desc: 'Built reusable React components',
    },
    {
      phase: 'Optimization',
      desc: 'Implemented responsive layouts and animations',
    },
    {
      phase: 'Deployment',
      desc: 'Published the portfolio for public access',
    },
  ],

  challenges:
    'Creating a visually appealing portfolio while maintaining performance, responsiveness, reusable architecture, and consistency across all pages.',

  solutions:
    'Implemented reusable React components, centralized project data, responsive Tailwind layouts, and Framer Motion animations to build a scalable and maintainable portfolio.',

  gallery: [],

  timeline: [
    {
      phase: 'Planning',
      desc: 'Designed layout and information architecture',
    },
    {
      phase: 'Development',
      desc: 'Built reusable React components',
    },
    {
      phase: 'Enhancement',
      desc: 'Added animations and premium UI effects',
    },
    {
      phase: 'Deployment',
      desc: 'Optimized and deployed the portfolio website',
    },
  ],

  stats: [
    {
      label: 'Framework',
      value: 'React',
    },
    {
      label: 'Styling',
      value: 'Tailwind CSS',
    },
    {
      label: 'Animations',
      value: 'Framer Motion',
    },
  ],

  github: 'https://github.com/Prashanth0718',

  demo: 'https://YOUR-PORTFOLIO-URL',

  related: [
    'lumina-chat',
    'employee-data-etl-pipeline',
  ],
  },
  {
    slug: 'chatbot-ticketing-system',
    title: 'MuseumGo - Online Chatbot Based Ticketing System',
    tagline: 'Full-stack museum ticket booking platform with an AI-powered chatbot, secure payments, and admin management.',
    cover: 'ticket',
    accent: '#22d3ee',
    category: 'Full-Stack',
    status: 'Completed',
    featured: false,
    role: 'Full-Stack Developer',
    duration: '4 months',
    year: '2024-2025',
    learnings: 'This project enhanced my understanding of full-stack development, chatbot workflows, secure authentication, payment gateway integration, and designing scalable web applications using the MERN stack.',
    overview: 'MuseumGo is a full-stack museum ticket booking platform built with the MERN stack. It features an AI-powered chatbot that guides users through ticket booking, secure Razorpay payment integration, QR-based ticket validation, user management, and an admin dashboard for monitoring bookings and analytics.',
    problem: 'Traditional museum ticket booking often involves long queues and manual processes. The goal was to simplify ticket reservations through an intelligent chatbot while providing secure online payments, digital ticket management, and administrative controls.',    
    techStack: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Tailwind CSS',
      'JWT',
      'Razorpay',
    ],
    architecture: 'Built using the MERN architecture where the React frontend communicates with Express.js REST APIs. MongoDB stores users, museums, bookings, and chatbot data, while JWT secures authentication. Razorpay handles online payments and the chatbot guides users through the booking workflow.',
    features: [
      'AI-powered chatbot ticket booking',
      'JWT Authentication & Role-Based Access',
      'Museum ticket booking & cancellation',
      'Secure Razorpay payment integration',
      'QR-based ticket validation',
      'Admin dashboard with booking analytics',
      'Email notifications',
      'Responsive user interface',
    ],
    workflow: [
      {
        phase: 'Authentication',
        desc: 'Secure user login and registration',
      },
      {
        phase: 'Booking',
        desc: 'Chatbot guides ticket reservation',
      },
      {
        phase: 'Payment',
        desc: 'Secure Razorpay payment processing',
      },
      {
        phase: 'Validation',
        desc: 'QR-based digital ticket verification',
      },
    ],
    challenges: 'Designing a conversational booking workflow while integrating authentication, payment processing, ticket management, and administrative features into a single application.',
    solutions: 'Implemented a modular chatbot workflow, JWT-based authentication, Razorpay payment integration, MongoDB data management, and role-based access control to create a seamless booking experience.',
    gallery: ['ticket-1', 'ticket-2', 'ticket-3'],
    timeline: [
      {
        phase: 'Authentication',
        desc: 'Implemented JWT authentication and user management',
      },
      {
        phase: 'Chatbot',
        desc: 'Developed conversational ticket booking workflow',
      },
      {
        phase: 'Payments',
        desc: 'Integrated Razorpay payment gateway',
      },
      {
        phase: 'Administration',
        desc: 'Built dashboard and ticket analytics',
      },
    ],
    stats: [
      {
        label: 'Architecture',
        value: 'MERN',
      },
      {
        label: 'Authentication',
        value: 'JWT',
      },
      {
        label: 'Payments',
        value: 'Razorpay',
      },
    ],
    github: 'https://github.com/Prashanth0718/ONLINE-CHATBOT-TICKETING-SYSTEM',
    demo: 'https://prashanthsn-museumgo.netlify.app',
    related: ['employee-data-etl-pipeline', 'lumina-chat'],
  },
  {
  slug: 'timetable-scheduler',
  title: 'TimeTable Scheduler',
  tagline: 'A Python-based timetable scheduling system that generates conflict-free schedules using Constraint Satisfaction Problem (CSP).',
  cover: 'timetable',
  accent: '#f59e0b',
  category: 'Algorithms',
  status: 'Completed',
  featured: false,
  role: 'Python Developer',
  duration: '1 Month',
  year: '2024',
  learnings:
    'This project helped me understand Constraint Satisfaction Problems (CSP), scheduling algorithms, file handling, and designing algorithms to solve real-world optimization challenges.',

  overview:
    'Developed a timetable scheduling system in Python that automatically generates conflict-free academic schedules. The application uses Constraint Satisfaction Problem (CSP) techniques to assign courses, instructors, and time slots while satisfying scheduling constraints.',

  problem:
    'Creating academic timetables manually is time-consuming and often results in scheduling conflicts. The objective was to automate timetable generation while ensuring that instructors, classrooms, and time slots do not overlap.',

  techStack: [
    'Python',
    'Constraint Satisfaction Problem (CSP)',
    'Scheduling Algorithms',
    'Collections (defaultdict)',
    'File Handling',
  ],

  architecture:
    'The application reads course, instructor, and scheduling data from text files, applies Constraint Satisfaction Problem (CSP) algorithms to validate constraints, and generates an optimized conflict-free timetable that satisfies all scheduling requirements.',

  features: [
    'Automated timetable generation',
    'Constraint Satisfaction Problem (CSP) implementation',
    'Conflict-free scheduling',
    'Instructor availability validation',
    'Time slot allocation',
    'Course scheduling',
    'Text file input and output',
    'Efficient scheduling using defaultdict',
  ],

  workflow: [
    {
      phase: 'Input',
      desc: 'Read course, instructor, and scheduling data from text files',
    },
    {
      phase: 'Validation',
      desc: 'Apply scheduling constraints and validate instructor availability',
    },
    {
      phase: 'Scheduling',
      desc: 'Generate conflict-free timetable using CSP algorithms',
    },
    {
      phase: 'Output',
      desc: 'Write the generated timetable to output files',
    },
  ],

  challenges:
    'Implementing scheduling logic that satisfies multiple constraints simultaneously while preventing overlapping classes and instructor conflicts.',

  solutions:
    'Applied Constraint Satisfaction Problem (CSP) techniques along with efficient scheduling algorithms and Python collections to generate optimized, conflict-free timetables.',

  gallery: [],

  timeline: [
    {
      phase: 'Requirement Analysis',
      desc: 'Defined scheduling constraints and system requirements',
    },
    {
      phase: 'Algorithm Design',
      desc: 'Implemented Constraint Satisfaction Problem (CSP) logic',
    },
    {
      phase: 'Scheduling',
      desc: 'Generated optimized conflict-free timetables',
    },
    {
      phase: 'Testing',
      desc: 'Validated generated schedules against defined constraints',
    },
  ],

  stats: [
    {
      label: 'Algorithm',
      value: 'CSP',
    },
    {
      label: 'Language',
      value: 'Python',
    },
    {
      label: 'Output',
      value: 'Conflict-Free',
    },
  ],

  github: 'https://github.com/Prashanth0718/Time-Table-Scheduler',
  demo: null,

  related: [
    'employee-data-etl-pipeline',
    'museumgo-online-chatbot-ticketing-system',
  ],
  },
  {
  slug: 'weather-dashboard',
  title: 'Weather Dashboard Application',
  tagline: 'A responsive weather application providing real-time forecasts using the OpenWeatherMap API.',
  cover: 'weather',
  accent: '#0ea5e9',
  category: 'API Integration',
  status: 'Completed',
  featured: false,
  role: 'Frontend Developer',
  duration: '2 Weeks',
  year: '2024',
  learnings:
    'This project enhanced my understanding of REST API integration, asynchronous JavaScript, geolocation services, error handling, and building responsive user interfaces.',

  overview:
    'Developed a responsive weather dashboard that allows users to search weather conditions by city name or automatically retrieve weather information using their current location. The application provides real-time weather updates along with a 5-day forecast using the OpenWeatherMap API.',

  problem:
    'Users often need quick access to accurate weather information for different locations. The goal was to build a simple, responsive application that delivers real-time weather updates and forecasts while providing a seamless user experience across devices.',

  techStack: [
    'HTML5',
    'CSS3',
    'JavaScript',
    'OpenWeatherMap API',
    'Geolocation API',
  ],

  architecture:
    'The application communicates with the OpenWeatherMap REST API to fetch current weather and forecast data. It also uses the browser Geolocation API to retrieve the users current location and dynamically updates the interface with relevant weather information.',

  features: [
    'Search weather by city name',
    'Current location weather using Geolocation API',
    'Real-time weather updates',
    '5-day weather forecast',
    'Responsive design for all devices',
    'Weather icons and detailed information',
    'Error handling for invalid city names',
    'Dynamic weather data rendering',
  ],

  workflow: [
    {
      phase: 'Search',
      desc: 'User searches by city or selects current location',
    },
    {
      phase: 'Request',
      desc: 'Fetch weather data from OpenWeatherMap API',
    },
    {
      phase: 'Process',
      desc: 'Parse and organize weather response data',
    },
    {
      phase: 'Display',
      desc: 'Render current weather and 5-day forecast',
    },
  ],

  challenges:
    'Handling asynchronous API requests, geolocation permissions, API errors, and presenting weather information in a clean and responsive interface.',

  solutions:
    'Implemented asynchronous JavaScript using Fetch API, integrated browser geolocation services, validated user input, and designed a responsive interface for an improved user experience.',

  gallery: [],

  timeline: [
    {
      phase: 'UI Design',
      desc: 'Designed a responsive weather dashboard interface',
    },
    {
      phase: 'API Integration',
      desc: 'Integrated OpenWeatherMap API for weather data',
    },
    {
      phase: 'Geolocation',
      desc: 'Implemented current location weather support',
    },
    {
      phase: 'Testing',
      desc: 'Validated responsiveness and API error handling',
    },
  ],

  stats: [
    {
      label: 'API',
      value: 'OpenWeatherMap',
    },
    {
      label: 'Forecast',
      value: '5 Days',
    },
    {
      label: 'Location',
      value: 'Geolocation',
    },
  ],

  github: 'https://github.com/Prashanth0718/Weather-Dashboard-Application',
  demo: null,

  related: [
    'image-search-engine',
    'gemini-clone',
  ],
  },
  {
  slug: 'image-search-engine',
  title: 'Image Search Engine',
  tagline: 'A responsive web application that searches and downloads high-quality images using the Pexels API.',
  cover: 'image-search',
  accent: '#10b981',
  category: 'API Integration',
  status: 'Completed',
  featured: false,
  role: 'Frontend Developer',
  duration: '2 Weeks',
  year: '2024',
  learnings:
    'This project improved my understanding of REST API integration, asynchronous JavaScript, dynamic DOM manipulation, pagination, and creating responsive user interfaces.',

  overview:
    'Developed a responsive image search application that enables users to search, preview, and download high-quality images using the Pexels API. The application provides a clean user interface with fast search functionality and seamless image browsing.',

  problem:
    'Finding high-quality royalty-free images across multiple websites can be time-consuming. The objective was to build a simple and responsive search application that allows users to quickly discover and download images from a single interface.',

  techStack: [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Pexels API',
    'Unicons',
  ],

  architecture:
    'The application communicates with the Pexels REST API to retrieve image data based on user search queries. JavaScript dynamically renders image cards, supports pagination, and provides download functionality while maintaining a responsive user experience.',

  features: [
    'Search high-quality images',
    'Real-time image search',
    'Image preview',
    'Direct image download',
    'Responsive user interface',
    'Dynamic image gallery',
    'Pagination support',
    'API error handling',
  ],

  workflow: [
    {
      phase: 'Search',
      desc: 'User enters a search keyword',
    },
    {
      phase: 'Request',
      desc: 'Fetch matching images from the Pexels API',
    },
    {
      phase: 'Display',
      desc: 'Render image gallery dynamically',
    },
    {
      phase: 'Download',
      desc: 'Allow users to download selected images',
    },
  ],

  challenges:
    'Handling asynchronous API requests, efficiently rendering large image collections, managing pagination, and maintaining responsive performance across devices.',

  solutions:
    'Implemented asynchronous Fetch API requests, dynamic DOM rendering, responsive layouts, and optimized API handling to deliver a smooth image browsing experience.',

  gallery: [],

  timeline: [
    {
      phase: 'UI Design',
      desc: 'Designed a clean and responsive image search interface',
    },
    {
      phase: 'API Integration',
      desc: 'Integrated the Pexels API for image retrieval',
    },
    {
      phase: 'Gallery',
      desc: 'Implemented dynamic image rendering and pagination',
    },
    {
      phase: 'Optimization',
      desc: 'Improved responsiveness and user experience',
    },
  ],

  stats: [
    {
      label: 'API',
      value: 'Pexels',
    },
    {
      label: 'Platform',
      value: 'Web',
    },
    {
      label: 'Downloads',
      value: 'Supported',
    },
  ],

  github: 'https://github.com/Prashanth0718/Image-Search-Engine',
  demo: 'https://prashanth-s-n-image-search-engine.netlify.app',

  related: [
    'weather-dashboard',
    'gemini-clone',
  ],
  },
  {
  slug: 'gemini-clone',
  title: 'Gemini Clone',
  tagline: 'An AI-inspired conversational web application with real-time responses, theme customization, and persistent chat history.',
  cover: 'gemini',
  accent: '#6366f1',
  category: 'Frontend',
  status: 'Completed',
  featured: false,
  role: 'Frontend Developer',
  duration: '2 Weeks',
  year: '2024',
  learnings:
    'This project improved my understanding of REST API integration, asynchronous JavaScript, state management using Local Storage, responsive UI design, and creating engaging user experiences through animations and interactive components.',

  overview:
    'Developed a Gemini-inspired conversational web application that enables users to interact with an AI assistant through a clean and responsive interface. The application supports real-time AI responses, typing animations, theme customization, and persistent chat history using Local Storage.',

  problem:
    'Modern AI chat applications require an intuitive interface, responsive interactions, and persistent conversations. The objective was to recreate a conversational AI experience while implementing dynamic UI behaviors and efficient client-side state management.',

  techStack: [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Fetch API',
    'Local Storage',
  ],

  architecture:
    'The frontend communicates with the AI service through the Fetch API to retrieve responses. User conversations, preferences, and theme settings are stored locally using Local Storage, while JavaScript dynamically updates the chat interface with typing animations and responsive interactions.',

  features: [
    'AI-inspired conversational interface',
    'Real-time response generation',
    'Typing animation effect',
    'Light & Dark theme toggle',
    'Persistent chat history',
    'Responsive user interface',
    'Conversation history restoration',
    'Local Storage integration',
  ],

  workflow: [
    {
      phase: 'Input',
      desc: 'User submits a prompt',
    },
    {
      phase: 'Request',
      desc: 'Fetch AI response using Fetch API',
    },
    {
      phase: 'Response',
      desc: 'Display response with typing animation',
    },
    {
      phase: 'Persistence',
      desc: 'Store chat history and theme using Local Storage',
    },
  ],

  challenges:
    'Creating a smooth conversational experience with typing animations while maintaining chat history, theme preferences, and responsive interactions without using frontend frameworks.',

  solutions:
    'Implemented asynchronous Fetch API requests, Local Storage for persistent data, dynamic DOM rendering, and CSS animations to deliver an engaging AI chat experience.',

  gallery: [],

  timeline: [
    {
      phase: 'UI Design',
      desc: 'Designed a modern AI chat interface',
    },
    {
      phase: 'API Integration',
      desc: 'Integrated AI responses using Fetch API',
    },
    {
      phase: 'Animations',
      desc: 'Implemented typing effects and smooth interactions',
    },
    {
      phase: 'Persistence',
      desc: 'Added Local Storage for chat history and themes',
    },
  ],

  stats: [
    {
      label: 'API',
      value: 'Fetch',
    },
    {
      label: 'Storage',
      value: 'Local',
    },
    {
      label: 'Theme',
      value: 'Light/Dark',
    },
  ],

  github: 'https://github.com/Prashanth0718/Gemini-Clone',
  demo: 'https://prashanth-s-n-gemini-clone.netlify.app',

  related: [
    'weather-dashboard',
    'image-search-engine',
  ],
  },
];

export const certifications = [
  {
    title: 'Databricks Certified Data Engineer Associate',
    issuer: 'Databricks',
    year: '2026',
    color: '#FF3621',
    credentialId: '182983658',
    verify: 'https://drive.google.com/file/d/1bwYTWRe0eaXE60n2yQazJZvsXEM57f2-/view',
    description:
      'Validated expertise in data engineering on the Databricks Lakehouse Platform, including data ingestion, transformation, orchestration, and pipeline optimization.',
  },
  {
    title: 'Programming with Java 8',
    issuer: 'Presidency University',
    year: '2022',
    color: '#ED8B00',
    credentialId: 'VAC/2021-2022/Even Semester/704',
    verify: 'https://drive.google.com/file/d/1tC_pUOmzGD10pl2RkuBHzUAyrTQegipz/view',
    description:
      'Completed advanced Java 8 training covering object-oriented programming, collections, exception handling, multithreading, and modern Java 8 features.',
  },
  {
    title: 'Introduction to Python',
    issuer: 'AI Business School',
    year: '2022',
    color: '#3776AB',
    credentialId: null,
    verify: 'https://drive.google.com/file/d/1asMcNBr4eE6Z-_b1k5dyMLSLf9xqoet9/view',
    description:
      'Learned Python programming fundamentals including data types, functions, object-oriented programming, file handling, and problem solving.',
  },
  {
    title: 'Getting Started with Machine Learning Algorithms',
    issuer: 'Simplilearn',
    year: '2023',
    color: '#8B5CF6',
    credentialId: '4657917',
    verify: 'https://drive.google.com/file/d/1tCwfmib1zO0NBNm2P21rfp_nFevCH1y4/view',
    description:
      'Explored the fundamentals of machine learning, supervised learning algorithms, model evaluation, and practical applications using Python.',
  },
];

export const achievementsData = [
  { label: 'Projects', value: 8, suffix: '+' },
  { label: 'Certifications', value: 4, suffix: '' },
  { label: 'GitHub Repos', value: 18, suffix: '+' },
  { label: 'Coding Hours', value: 1200, suffix: '+' },
];

export const achievements = achievementsData;

export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Experience', path: '/experience' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Resume', path: '/resume' },
  { name: 'Contact', path: '/contact' },
];

