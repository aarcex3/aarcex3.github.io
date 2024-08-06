// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'aarcex3', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'aarcex3/mygpo-clone',
          'aarcex3/aiostipy',
          'aarcex3/magic-wormhole-microservice',
          'aarcex3/tweeter-clone-rails',
          'aarcex3/stock-api',
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {},
  },
  seo: {
    title: 'Portfolio of Agustin Arce',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'agustin-arce',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python 🐍',
    'FastAPI',
    'JavaScript',
    'Node.js',
    'Express.js',
    'MySQL',
    'PostgreSQL',
    'SQLite',
    'Git',
    'Github',
    'Docker',
    'Kubernetes',
    'HTML/CSS',
    'Linux',
    'Azure',
  ],
  experiences: [
    {
      company: 'Excelsis',
      position: 'Data  Analyst Intern',
      from: 'March 2024',
      to: 'July 2024',
      companyLink: 'https://www.excelsis.com.py',
    },
    {
      company: 'Andreas STIHL AG & Co.KG',
      position: 'Data Engineer Intern',
      from: 'March 2023',
      to: 'September 2023',
      companyLink: 'https://www.stihl.de/de',
    },
    {
      company: 'Aliado Movil',
      position: 'Software Developer Intern',
      from: 'July 2022',
      to: 'August 2022',
      companyLink: 'http://www.aliadomovil.com',
    },
  ],
  certifications: [
    {
      name: 'FastAPI - The Complete Course 2024 (Beginner + Advanced)',
      body: 'Dive in and learn FastAPI from scratch! Learn FastAPI, RESTful APIs using Python, SQLAlchemy, OAuth, JWT and way more!',
      year: 'July 2024',
      link: 'https://www.udemy.com/certificate/UC-efd07488-2eb0-497d-a3e2-702dd4a5714c/',
    },
    {
      name: 'Back End Development and APIs',
      body: "In the Back End Development and APIs Certification, you'll learn how to write back end apps with Node.js and npm. You'll also build web applications with the Express framework, and build a People Finder microservice with MongoDB and the Mongoose library.",
      year: 'April 2024',
      link: 'https://www.freecodecamp.org/certification/czisa/back-end-development-and-apis',
    },
    {
      name: 'Foundational C# with Microsoft',
      body: 'This course offers a comprehensive introduction to C# programming, covering its core concepts, syntax, and practical application in software development.',
      year: 'April 2024',
      link: 'https://www.freecodecamp.org/certification/czisa/back-end-development-and-apis',
    },
    {
      name: 'Python',
      body: 'Learn the most important language for data science.',
      year: 'March 2024',
      link: 'https://www.kaggle.com/learn/certification/agustinarce003/python',
    },
    {
      name: 'Intro to Programming',
      body: 'Get started with Python, if you have no coding experience.',
      year: 'July 2023',
      link: '',
    },
    {
      name: 'Git Essential Training: The Basics',
      body: 'Learn git',
      year: 'Nov 2022',
      link: '',
    },
    {
      name: 'Unit Testing and Test Driven Development in Python',
      body: 'Learn TDD in python',
      year: 'Nov 2022',
      link: '',
    },
    {
      name: 'Flask Framework Complete Course For Beginners',
      body: 'Beginner to Expert Python And Flask. Learn Python And Flask Course for Beginner Python Developer to Create Applications',
      year: 'May 2022',
      link: 'https://www.udemy.com/certificate/UC-048b2fec-6c3f-4607-a24a-00a82b0849db/',
    },
    {
      name: 'JavaScript Algorithms and Data Structures',
      body: "While HTML and CSS control the content and styling of a page, JavaScript is used to make it interactive. In the JavaScript Algorithm and Data Structures Certification, you'll learn the fundamentals of JavaScript including variables, arrays, objects, loops, and functions.",
      year: 'March 2021',
      link: 'https://www.freecodecamp.org/certification/czisa/javascript-algorithms-and-data-structures',
    },
  ],
  educations: [
    {
      institution: 'Universidad Paraguayo Alemana',
      degree: 'BSc Business Informatic',
      from: '2020',
      to: '2023',
      relevantCourses: [
        'Open & Big Data',
        'IT Security',
        'Full Stack Software Project',
        'Software Management',
      ],
    },
    {
      institution: 'Aalen University',
      degree: 'BSc Business Informatic',
      from: '2022',
      to: '2023',
      relevantCourses: ['Software Quality'],
    },
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 0, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
