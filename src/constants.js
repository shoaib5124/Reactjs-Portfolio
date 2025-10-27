// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';  
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import FastAPIlogo from './assets/tech_logo/fastapi.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import reactLogo from './assets/experience_logo/react.png';
import codeLogo from './assets/experience_logo/coding.png';
import growthLogo from './assets/experience_logo/growth.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import password_generaterlogo from './assets/work_logoe/passwordlogo.png';
import uniLogo from './assets/work_logoe/uni_logo.png';
import movierecLogo from './assets/work_logoe/movie_rec.png';
import taskremLogo from './assets/work_logoe/task_rem.png';
import npmLogo from './assets/work_logoe/npm.png';
import webverLogo from './assets/work_logoe/web_dig.png';
import cmLogo from './assets/work_logoe/cm.png';
import imagesearchLogo from './assets/work_logoe/image_search.png';
import removebgLogo from './assets/work_logoe/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Python', logo: pythonLogo },
      { name: 'FastAPI', logo: FastAPIlogo }, 
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Javascript', logo: javascriptLogo },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [  
  {  
    id: 0,  
    img: reactLogo,  
    role: "Frontend Developer (React.js Projects)",  
    company: "Personal Projects",  
    date: "2023 - Present",  
    points: [  
      "Built multiple responsive and dynamic web applications using React.js.",  
      "Worked with state management (hooks, props, context) to create reusable components.",  
      "Integrated APIs and third-party libraries like Swiper.js for smooth user experience.",  
      "Designed and deployed a personal portfolio to showcase development expertise.",  
    ],  
    skills: [  
      "React.js",  
      "JavaScript",  
      "Tailwind CSS",  
      "Bootstrap",  
      "Swiper.js",  
    ],  
  },  
  {  
    id: 1,  
    img: codeLogo,  
    role: "Python Backend Developer (Learning Projects)",  
    company: "Self Learning",  
    date: "2024",  
    points: [  
      "Created a Bug Tracker CLI app with Python (OOP, decorators, logging).",  
      "Upgraded project to API level with FastAPI, exploring real-world backend workflows.",  
      "Practiced building CRUD operations and authentication to understand fullstack flow.",  
    ],  
    skills: [  
      "Python",  
      "FastAPI",  
      "REST API",  
      "OOP",  
    ],  
  },  
  {  
    id: 2,  
    img: growthLogo,  
    role: "Continuous Learner & Future Builder",  
    company: "Self-Paced Growth",  
    date: "Ongoing",  
    points: [  
      "Currently deepening expertise in React.js while exploring advanced UI/UX design.",  
      "Learning AI, NLP, and API integration to expand into modern web + AI solutions.",  
      "Motivated self-learner with a strong hunger for knowledge and building impactful projects.",  
    ],  
    skills: [  
      "React.js (Advanced)",  
      "Next.js",  
      "API Integration",  
      "AI (Learning)",  
    ],  
  },  
];
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "Bachelor of Science in English (Ongoing) University Name | Semester 6",
      points: [

       "Developed critical thinking, communication, and analytical skills that strengthen problem-solving in tech projects.",

       "Gained strong expertise in research, documentation, and presentation, useful in client communication and technical writing.",

        "Balanced degree with self-taught Computer Science and Software Development, showing discipline and adaptability."
      ],
      degree: " Formal Education (Degree)",
    },
    {
       id: 0,
      img: glaLogo,
      school: "Full-Stack & AI Development (Self-Taught & Project-Based Learning)",
      points: [

       "Mastered Frontend: HTML, CSS, Sass, Tailwind CSS, Bootstrap, JavaScript, React.js.",
       "Mastered Backend: Node.js, Express.js, FastAPI (Python).",
        "Databases: MongoDB.",
        "AI Tools: LLM integration & API development.",
        "Built real-world projects (bug tracker, library system, chatbot, portfolio apps) applying these technologies.",
      ],
      degree: " Technical Education (Self-Learning & Bootcamp Style)",
    },
   
    {
       id: 0,
      img: glaLogo,
      school: "Ongoing Professional Growth",
      points: [

       "Expanding expertise in Python for AI, APIs, and Data Science.",
       "Exploring React Three Fiber (3D), FastAPI, and Generative AI integrations.",
       "Learning industry practices: Version control (GitHub), API design, project collaboration.",
       "Demonstrates lifelong learning mindset, key to thriving in fast-paced tech.",
        ],
      degree: "Continuous Learning & Certifications",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Password Generator",
      description:
        "A React-based Password Generator App that lets you create strong, secure, and random passwords instantly. You can customize password length and choose which character types (uppercase, lowercase, numbers, and symbols) to include.",
      image:  password_generaterlogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS",],
      github: "https://github.com/shoaib5124/password_generater.git",
      webapp: "https://password-generater-rho.vercel.app/",
    },
    {
      id: 1,
      title: "University Website",
      description:
        "A modern and fully responsive University Website built using React.js and Tailwind CSS. It presents educational programs, an overview of the university, and key sections like About, Programs, and Gallery all designed with a clean and professional look.",
      image: uniLogo,
      tags: ["React JS", "Tailwindcss", "HTML", "JavaScript"],
      github: "https://github.com/shoaib5124/educaton-website.git",
      webapp: "https://educaton-website-dl6a-ggo4y4jts-shoaibulhassans-projects.vercel.app/",
    },
    {
      id: 2,
      title: "PDF Reader ",
      description:
        "A FastAPI-based backend project that enables users to upload PDF files, extract text using pdftotext, and interact with the content through a simulated LLM. Demonstrates CRUD operations, modular routing, and key FastAPI concepts like path/query parameters, file uploads, and error handling.",
      image: FastAPIlogo,
      tags: ["Python", "FastAPI", "REST API", "File Handling", "OOP"],
      github: "https://github.com/shoaib5124/Pdf_Reader",
},
    {
      id: 3,
      title: "Bug Tracker ",
      description:
        "A beginner friendly CLI Bug Tracker app built using Python, with JSON storage and logging features.It helps you to log, view, update, search and delete issues.This program is capable of logging and storing your all actions in a JSON file for persistent tracking.",
      image: FastAPIlogo,
      tags: ["Python", "FastAPI", "REST API", "File Handling","logging", "OOP"],
      github: "https://github.com/shoaib5124/Bug_tracker",
},

 
  ];  