/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

import blacklightLogo from './assets/images/blacklightgaming.png';
import vivaopsLogo from './assets/images/vivaopslogo.avif';
import beepermdLogo from './assets/images/beepermd.png';
// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Aman Malviya",
  title: "Hi all, I'm Aman",
  subTitle: emoji(
    "Java Developer with expertise in Spring Boot, Hibernate, REST APIs, and Microservices. Strong background in AWS, Docker, Kubernetes, and CI/CD automation. Proficient in performance optimization, database tuning, and low-latency system design. Passionate about building scalable, high-performance applications."
  ),
  resumeLink: "https://drive.google.com/file/d/1NfONHZDweZGvuQjCzDi1cQUoYWfSD27F/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};


// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/AmanMalviya22",
  linkedin: "https://www.linkedin.com/in/aman-malviya-839392201/",
  gmail: "amanaman26802@gmail.com",
  codechef: "https://www.codechef.com/users/aman26802",
  stackoverflow: "https://stackoverflow.com/users/14799948/aman-malviya",
  display: true
};
// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "Full-Stack Developer | Passionate about Building Scalable, High-Performance Applications",

  skills: [
    emoji(
      "⚡ Develop robust and responsive Frontend UIs for web and mobile using React.js and Angular."
    ),
    emoji(
      "⚡ Build and maintain scalable backend services and RESTful APIs using Java Spring Boot and Node.js."
    ),
    emoji(
      "⚡ Design and deploy cloud-native applications leveraging AWS, Docker, and Kubernetes."
    ),
    emoji(
      "⚡ Implement progressive web apps (PWAs) and single-page applications (SPAs) focused on performance and usability."
    ),
    emoji(
      "⚡ Integrate third-party services such as Firebase, AWS SDK, and payment gateways for seamless functionality."
    ),
  ],

  softwareSkills: [
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "Spring Boot", fontAwesomeClassname: "fas fa-cloud" },
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
    { skillName: "Express.js", fontAwesomeClassname: "fas fa-server" },
    { skillName: "React.js", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Angular", fontAwesomeClassname: "fab fa-angular" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "MySQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "MongoDB", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Redis", fontAwesomeClassname: "fas fa-memory" },
    { skillName: "Microservices Architecture", fontAwesomeClassname: "fas fa-network-wired" },
    { skillName: "REST API Design", fontAwesomeClassname: "fas fa-plug" },
    { skillName: "AWS Cloud Services", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Kubernetes", fontAwesomeClassname: "fas fa-cubes" },
    { skillName: "Data Structures & Algorithms", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Git & GitHub", fontAwesomeClassname: "fab fa-git" },
    { skillName: "Object-Oriented Programming (OOP)", fontAwesomeClassname: "fas fa-cube" },
  ],

  display: true,
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Indian Institute of Technology (IIT) Roorkee",
      logo: require("./assets/images/iit_roorkee_logo.png"), // Replace with actual logo image path
      subHeader: "B.Tech in Computer Science",
      duration: "2020 - 2024",
      descBullets: [
        "Completed B.Tech in Computer Science with a strong foundation in algorithms, data structures, and software engineering principles.",
        "Gained hands-on experience with Java, Spring Boot, Microservices, and cloud technologies through coursework and projects.",
        "Developed problem-solving skills via competitive programming and academic projects focused on scalable and efficient software design.",
        "Actively involved in technical clubs and workshops related to software development, DevOps, and system design."
      ]
    },
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Show Proficiency Section
  experience: [
    {
      Stack: "Java (Core & Advanced), Multithreading, Collections, Streams",
      progressPercentage: "90%"
    },
    {
      Stack: "Spring Boot, Spring Security, Spring Data JPA",
      progressPercentage: "90%"
    },
    {
      Stack: "Microservices Architecture & RESTful APIs",
      progressPercentage: "90%"
    },
    {
      Stack: "AWS (EC2, S3, RDS, EKS), Terraform, Ansible",
      progressPercentage: "80%"
    },
    {
      Stack: "Docker, Kubernetes, CI/CD (Jenkins, GitHub Actions)",
      progressPercentage: "85%"
    },
    {
      Stack: "Databases (MySQL, MongoDB, Redis), Query Optimization",
      progressPercentage: "85%"
    },
    {
      Stack: "Kafka, RabbitMQ, Event-driven Architecture",
      progressPercentage: "80%"
    },
    {
      Stack: "System Design, Design Patterns (GoF), SOLID Principles",
      progressPercentage: "85%"
    },
    {
      Stack: "Monitoring & Logging (ELK, Prometheus, Grafana, Actuator)",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false
};


// Work experience section


 const workExperiences = {
  display: true,
  experience: [
    {
      role: "Java Backend Developer",
      company: "Blacklight Gaming",
      companylogo: blacklightLogo,
      date: "Apr 2025 – Present",
      descBullets: [
        "Built scalable microservices with Spring Boot for Ludo Superstar (100M+ downloads).",
        "Integrated PhonePe payment via Java SDK for seamless in-game transactions.",
        "Containerized services using Docker and deployed to AWS EKS via Kubernetes.",
        "Set up CI/CD with Jenkins, improving release speed and reliability."
      ]
    },
    {
      role: "Software Engineer",
      company: "VivaOps",
      companylogo: vivaopsLogo,
      date: "Oct 2024 – Feb 2025",
      descBullets: [
        "Developed microservices in Java and Spring Boot for SaaS operations platform.",
        "Automated deployments using Jenkins and Terraform, reducing manual effort by 40%.",
        "Provisioned AWS infrastructure (EC2, S3, RDS) for production and staging.",
        "Enhanced security using Ansible for consistent VPN and access control setup."
      ]
    },
    {
      role: "Java Developer",
      company: "BeeperMD",
      companylogo: beepermdLogo,
      date: "Mar 2024 – Sep 2024",
      descBullets: [
        "Improved API performance by 5% using query optimization and caching.",
        "Developed REST APIs with Spring Boot, integrated with MySQL and RabbitMQ.",
        "Streamlined CI/CD pipeline with Jenkins and AWS, reducing downtime.",
        "Contributed to patient dashboard frontend using React and Redux."
      ]
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  display: true,
  title: "Projects",

  projects: [
    {
      image: require("./assets/images/ecommerce.png"),
      projectName: "E-commerce Web Application",
      projectDesc:
        "Built a fully functional e-commerce platform with user authentication, product listings, cart system, and real-time Stripe payment integration using the MERN stack (MongoDB, Express, React, Node.js).",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://ecommerce-sanity-stripe.vercel.app/"
        },
        {
          name: "GitHub",
          url: "https://github.com/AmanMalviya22/ecommerce_web_application"
        }
      ]
    },
    {
      image: require("./assets/images/sudoku.png"),
      projectName: "Sudoku Puzzle Game",
      projectDesc:
        "Designed and developed a responsive Sudoku puzzle game with difficulty levels, hint generation, and state reset functionality using React and JavaScript.",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://x-e-n-o-r.github.io/Vue-Sudoku/"
        },
        {
          name: "GitHub",
          url: "https://github.com/AmanMalviya22/sudoku"
        }
      ]
    }
  ]
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle:
    "Recognitions, certifications, and milestones that reflect my skills, growth, and passion for technology.",

  achievementsCards: [
    {
      title: "4⭐ CodeChef – Global Rank 2 (Nov 2022)",
      subtitle:
        "Secured Global Rank 2 in CodeChef November Long Challenge 2022 and consistently performed in rated contests.",
      image: require("./assets/images/codechef logo.webp"),
      imageAlt: "CodeChef Logo",
      footerLink: [
        {
          name: "View Profile",
          url: "https://www.codechef.com/users/aman26802"
        }
      ]
    },
    {
      title: "AWS Academy Graduate – Cloud Foundations",
      subtitle:
        "Completed AWS Cloud Foundations with hands-on labs covering compute, storage, databases, and networking on AWS.",
      image: require("./assets/images/aws logo.jpg"),
      imageAlt: "AWS Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1z82IX1s0ounE5zxRADXkeahKNIMaeCtP/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Data Structures & Algorithms in Java – Coding Ninjas",
      subtitle:
        "Mastered core DSA concepts such as recursion, dynamic programming, trees, and graphs with over 300+ problems solved.",
      image: require("./assets/images/coding ninja logo.jpg"),
      imageAlt: "Coding Ninjas Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1oELvJvlexu-gCSCKgjjSWmcj78itGiBM/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Full Stack Web Development – Node.js (Coding Ninjas)",
      subtitle:
        "Built full-stack applications using HTML, CSS, JavaScript, Node.js, Express, MongoDB, and deployed on cloud platforms.",
      image: require("./assets/images/coding ninja logo.jpg"),
      imageAlt: "Coding Ninjas Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1fveQn0QLG-_KFcnlsLz0UiGDYVArg4uZ/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Java Programming Certification – Coding Ninjas",
      subtitle:
        "Completed an in-depth Java course covering object-oriented programming, collections framework, and multithreading.",
      image: require("./assets/images/coding ninja logo.jpg"),
      imageAlt: "Coding Ninjas Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1D105VzLzFGyuZKGLt3QiSzjHYkgpn_lt/view?usp=drive_link"
        }
      ]
    }
  ],
  display: true
};


// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9149736306",
  email_address: "amanaman26802@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
