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
import mysqlLogo from './assets/tech_logo/mysql.png';
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
import githubdetLogo from './assets/work_logoe/github_det.png';
import csprepLogo from './assets/work_logoe/cs_prep.png';
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
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
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
    role: "Problem Solver & Backend Learner",  
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
      title: "GitHub Profile Detective",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
      webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 1,
      title: "CS Prep",
      description:
        "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
      image: csprepLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/codingmastr/CSPrep",
      webapp: "https://csprep.netlify.app/",
    },
    {
      id: 2,
      title: "Movie Recommendation App",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/codingmastr/Movie-Recommendation-App",
      webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
    {
      id: 3,
      title: "Email Validator NPM Package",
      description:
        "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
      image: npmLogo,
      tags: ["React JS", "Node.js", "NPM", "Validation"],
      github: "https://github.com/codingmastr/cmtk-email-validator",
      webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    },
    {
      id: 4,
      title: "Task Reminder Chrome Extension Tool",
      description:
        "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
      image: taskremLogo,
      tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
      github: "https://github.com/codingmastr/Task-Reminder-Tool",
      webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    },
    {
      id: 5,
      title: "Webverse Digital",
      description:
        "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
      image: webverLogo,
      tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
      github: "https://github.com/codingmastr/Webverse-Digital",
      webapp: "https://webversedigital.com/",
    },
    {
      id: 6,
      title: "Coding Master",
      description:
        "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
      image: cmLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
      github: "https://codingmasterweb.in/",
      webapp: "https://codingmasterweb.in/",
    },
    {
      id: 7,
      title: "Image Search App",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: imagesearchLogo,
      tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
      github: "https://github.com/codingmastr/Image-Search-App",
      webapp: "https://imagsearch.netlify.app/",
    },
    {
      id: 8,
      title: "Image Background Remover",
      description:
        "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
      image: removebgLogo,
      tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
      github: "https://github.com/codingmastr/Image-Background-Remover",
      webapp: "https://removeyourbg.netlify.app/",
    },
  ];  