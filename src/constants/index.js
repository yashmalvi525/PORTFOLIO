export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    position: 'HR Manager at Infosys',
    img: 'assets/review1.png',
    review:
      'Working with Yash was fantastic. His PrepWise platform revolutionized our interview process. The AI-powered mock interviews helped our candidates improve significantly. His attention to detail and technical expertise are outstanding.',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    position: 'Placement Coordinator at Parul University',
    img: 'assets/review2.png',
    review:
      'Yash has been instrumental in organizing placement drives. He conducted 10+ drives and helped 200+ students get placed. His technical skills and leadership abilities make him an exceptional coordinator.',
  },
  {
    id: 3,
    name: 'Arjun Patel',
    position: 'Senior Developer at TCS',
    img: 'assets/review3.png',
    review:
      'Yash\'s projects like Rupeek.ai and Hospital Buddy showcase his expertise in AI and automation. His problem-solving skills and ability to integrate complex systems are truly impressive.',
  },
  {
    id: 4,
    name: 'Sneha Gupta',
    position: 'Tech Lead at Wipro',
    img: 'assets/review4.png',
    review:
      'Yash\'s understanding of MERN stack and system design is exceptional. His hackathon wins, including the PU Code Hackathon (INR 1.5L), prove his technical prowess and innovative thinking.',
  },
];

export const myProjects = [
  {
    title: 'PrepWise - AI-Powered Interview Intelligence Platform',
    desc: 'PrepWise is a futuristic AI interview simulator that conducts real-time, ultra-low-latency voice conversations, delivering human-like mock interviews via Vapi AI. Users struggle to distinguish AI from a real interviewer.',
    subdesc:
      'Built with Next.js, Tailwind CSS, Firebase, Vapi AI, Gemini, and shadcn/ui. Auto-generates company-specific, role-aware questions using Gemini and web scraping.',
    href: 'https://github.com/yashmalvi525',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Firebase',
        path: '/assets/firebase.png',
      },
      {
        id: 4,
        name: 'Vapi AI',
        path: '/assets/ai.png',
      },
    ],
  },
  {
    title: 'Rupeek.ai - Personal Finance Assistant',
    desc: 'Rupeek.ai acts like an intelligent Chartered Accountant, integrating Fi\'s MCP server to fetch live net worth from banks, SIPs, stocks, credit scores, liabilities, and assets with structured financial chat.',
    subdesc:
      'Built with React, Node.js, Firebase, MongoDB, and Generative AI. Features smart goal planner that automatically allocates funds monthly with optimization suggestions.',
    href: 'https://github.com/yashmalvi525',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Node.js',
        path: '/assets/nodejs.png',
      },
      {
        id: 3,
        name: 'MongoDB',
        path: '/assets/mongodb.png',
      },
      {
        id: 4,
        name: 'Firebase',
        path: '/assets/firebase.png',
      },
    ],
  },
  {
    title: 'Hospital Buddy - AI Healthcare Automation',
    desc: 'An AI-based platform replacing manual front-desk by automating hospital services like appointments, ambulance, loans, meals, room service, and lab reports with multilingual support.',
    subdesc:
      'Built with N8N, MongoDB, Notion, Google Calendar, Grok AI, and Twilio. Integrated Retell AI for voice/text support, achieving 5× faster scheduling and reducing staff workload by 70%.',
    href: 'https://github.com/yashmalvi525',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'N8N',
        path: '/assets/n8n.png',
      },
      {
        id: 2,
        name: 'MongoDB',
        path: '/assets/mongodb.png',
      },
      {
        id: 3,
        name: 'Twilio',
        path: '/assets/twilio.png',
      },
      {
        id: 4,
        name: 'AI',
        path: '/assets/ai.png',
      },
    ],
  },
  {
    title: 'Orderly - Online Food Ordering System (LLD Project)',
    desc: 'A comprehensive food ordering system implementing key design patterns like Abstract Factory, Strategy, Facade, and Factory with SOLID Principles to achieve clean architecture.',
    subdesc:
      'Built with C++ and OOP principles. Features restaurant search, menu browsing, cart management, and order placement. Designed for scalability with delivery & pickup models.',
    href: 'https://github.com/yashmalvi525',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'C++',
        path: '/assets/cpp.png',
      },
      {
        id: 2,
        name: 'OOP',
        path: '/assets/oop.png',
      },
      {
        id: 3,
        name: 'Design Patterns',
        path: '/assets/design.png',
      },
      {
        id: 4,
        name: 'System Design',
        path: '/assets/system.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Parul University',
    pos: 'Placement Cell Coordinator',
    duration: '2024 - Present',
    title: "Led 10+ placement drives and helped 200+ students secure positions across 30+ companies. Coordinated with multiple organizations and streamlined the recruitment process for maximum student benefit.",
    icon: '/assets/university.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'PU Code Hackathon',
    pos: 'Winner - 1st Place',
    duration: '2025',
    title: "Won 1st place among 700+ teams with INR 1.5L prize for building a comprehensive full-stack automation platform. Showcased exceptional problem-solving and technical implementation skills.",
    icon: '/assets/trophy.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'AIML Healthcare Hackathon',
    pos: 'Finalist - Top 10',
    duration: '2025',
    title: "Reached top 10 out of 156+ teams for Hospital Buddy, an AI-based hospital support system. Demonstrated expertise in AI automation and healthcare technology integration.",
    icon: '/assets/healthcare.svg',
    animation: 'salute',
  },
];
