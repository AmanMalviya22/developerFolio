/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

import niumLogo from "./assets/images/nium-logo.svg";
import blacklightLogo from "./assets/images/blacklightgaming.png";
import vivaopsLogo from "./assets/images/vivaopslogo.avif";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 1800
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Aman Malviya",
  title: "Hi, I'm Aman",
  role: "Backend Engineer · Payments · Microservices",
  subTitle: emoji(
    "Backend engineer with ~2 years of experience building payment systems and microservices in Java and Spring Boot. I deploy on AWS, integrate AI tooling (Claude / MCP) into engineering workflows, and hold a 4-star rating on CodeChef."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1NfONHZDweZGvuQjCzDi1cQUoYWfSD27F/view?usp=sharing",
  displayGreeting: true
};

const highlightsSection = {
  display: true,
  stats: [
    {value: "100K+", label: "Daily Transactions"},
    {value: "50+", label: "Banking Partners"},
    {value: "99.9%", label: "System Uptime"},
    {value: "4⭐", label: "CodeChef Rating"}
  ]
};

const socialMediaLinks = {
  github: "https://github.com/AmanMalviya22",
  linkedin: "https://www.linkedin.com/in/aman-malviya-839392201/",
  gmail: "amanaman26802@gmail.com",
  codechef: "https://www.codechef.com/users/aman26802",
  display: true
};

const skillsSection = {
  title: "What I Do",
  subTitle:
    "Building reliable payment infrastructure and cloud-native backend systems",

  skills: [
    emoji(
      "⚡ Build real-time payment systems processing 100K+ daily transactions across 50+ banking partners."
    ),
    emoji(
      "⚡ Design microservices with Java, Spring Boot, Redis caching, and event-driven architectures."
    ),
    emoji(
      "⚡ Deploy and operate services on AWS EKS with CI/CD, auto-scaling, and production monitoring."
    ),
    emoji(
      "⚡ Integrate AI tooling — MCP servers with Claude for automated root-cause analysis and engineering automation."
    )
  ],

  softwareSkills: [
    {skillName: "Java", fontAwesomeClassname: "fab fa-java"},
    {skillName: "Spring Boot", fontAwesomeClassname: "fas fa-leaf"},
    {skillName: "Microservices", fontAwesomeClassname: "fas fa-network-wired"},
    {skillName: "PostgreSQL", fontAwesomeClassname: "fas fa-database"},
    {skillName: "MySQL", fontAwesomeClassname: "fas fa-database"},
    {skillName: "MongoDB", fontAwesomeClassname: "fas fa-database"},
    {skillName: "Redis", fontAwesomeClassname: "fas fa-memory"},
    {skillName: "AWS", fontAwesomeClassname: "fab fa-aws"},
    {skillName: "Docker", fontAwesomeClassname: "fab fa-docker"},
    {skillName: "Kubernetes", fontAwesomeClassname: "fas fa-cubes"},
    {skillName: "Jenkins", fontAwesomeClassname: "fas fa-cogs"},
    {skillName: "Terraform", fontAwesomeClassname: "fas fa-cloud"},
    {skillName: "MCP / Claude", fontAwesomeClassname: "fas fa-robot"},
    {skillName: "REST APIs", fontAwesomeClassname: "fas fa-plug"},
    {skillName: "System Design", fontAwesomeClassname: "fas fa-sitemap"},
    {skillName: "Git", fontAwesomeClassname: "fab fa-git-alt"}
  ],

  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Shri Mata Vaishno Devi University",
      logo: require("./assets/images/SMVD_University_Logo.png"),
      subHeader: "B.Tech in Computer Science · CGPA 8.5/10",
      duration: "2020 - 2024",
      descBullets: [
        "Built a strong foundation in algorithms, data structures, and software engineering.",
        "Developed backend and systems projects using Java, Spring Boot, and cloud technologies.",
        "Competitive programming background with rated contests on CodeChef.",
        "Graduated with CGPA 8.5/10."
      ]
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Java, Multithreading, Concurrency, OOP",
      progressPercentage: "92%"
    },
    {
      Stack: "Spring Boot, Spring Data JPA, Hibernate, Spring Cloud",
      progressPercentage: "90%"
    },
    {
      Stack: "Payment Systems & Microservices Architecture",
      progressPercentage: "90%"
    },
    {
      Stack: "MySQL, PostgreSQL, MongoDB, Redis",
      progressPercentage: "85%"
    },
    {
      Stack: "AWS (EKS, EC2, RDS, S3, VPC), CloudWatch",
      progressPercentage: "85%"
    },
    {
      Stack: "Docker, Kubernetes, Jenkins, CI/CD",
      progressPercentage: "85%"
    },
    {
      Stack: "Terraform, Ansible, Infrastructure Automation",
      progressPercentage: "80%"
    },
    {
      Stack: "Claude API, MCP, AI-assisted Engineering",
      progressPercentage: "80%"
    },
    {
      Stack: "System Design, Event-Driven Architecture, REST APIs",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Backend Engineer",
      company: "NIUM",
      companylogo: niumLogo,
      date: "Aug 2025 – Present · Mumbai",
      descBullets: [
        "Built real-time payment systems processing 100K+ daily transactions across 50+ banking partners with 99.9%+ uptime.",
        "Improved payment success rates by 15% and reduced manual intervention by 40% through automated validation logic.",
        "Architected an MCP server powered by Claude to automate root-cause analysis of transaction failures, cutting investigation time by 60%.",
        "Migrated reference data (SWIFT, IFSC, bank codes) into a centralized graph-based system, improving partner onboarding.",
        "Added Redis caching to high-traffic lookups and deployed microservices on AWS EKS with CI/CD and monitoring."
      ]
    },
    {
      role: "Software Engineer",
      company: "Blacklight Studio",
      companylogo: blacklightLogo,
      date: "Apr 2025 – Aug 2025 · Noida",
      descBullets: [
        "Developed backend services in Java and Spring Boot, improving platform scalability and modularity.",
        "Designed RESTful APIs with caching strategies, reducing average response time from 200ms to 50ms.",
        "Optimized database queries and connection pooling to handle concurrent load with low latency.",
        "Collaborated with cross-functional teams to deliver production features and maintain service reliability."
      ]
    },
    {
      role: "Associate DevOps Engineer",
      company: "Inorg (VivaOps)",
      companylogo: vivaopsLogo,
      date: "Oct 2024 – Feb 2025 · Pune",
      descBullets: [
        "Built and deployed microservices in Java and Spring Boot supporting multiple internal applications.",
        "Implemented CI/CD pipelines with Jenkins, reducing manual deployment effort by 70%.",
        "Managed AWS infrastructure (EC2, S3, RDS, VPC) with auto-scaling and provisioned resources via Terraform and Ansible.",
        "Reduced deployment time from 45 minutes to 5 minutes through containerization with Docker and Kubernetes."
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: true
};

const bigProjects = {
  display: true,
  title: "Featured Projects",
  subtitle:
    "Open-source and personal projects showcasing backend systems, AI integration, and algorithms",

  projects: [
    {
      image: require("./assets/images/developerActivity.svg"),
      projectName: "Intelligent Transaction Analyzer (MCP Server)",
      projectDesc:
        "Open-source MCP server with Claude integration that analyzes transaction failures by querying logs and producing root-cause diagnostics automatically — the pattern behind diagnostic tooling built at NIUM.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/AmanMalviya22"
        }
      ]
    },
    {
      image: require("./assets/images/skill.svg"),
      projectName: "Word Lookup Dictionary",
      projectDesc:
        "Trie-based dictionary with O(m) lookup time, auto-suggestion, and spell correction using Levenshtein distance fuzzy matching.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/AmanMalviya22/word-lookup-master"
        }
      ]
    }
  ]
};

const achievementSection = {
  title: emoji("Achievements 🏆"),
  subtitle:
    "Competitive programming milestones and technical recognitions",

  achievementsCards: [
    {
      title: "4⭐ CodeChef (1654 Rating)",
      subtitle:
        "Achieved 4-star rating on CodeChef through consistent rated contest participation.",
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
      title: "Global Rank 2 — CodeChef Nov Long 2022",
      subtitle:
        "Secured Global Rank 2 in the November Long Challenge 2022 (Division 3, Rated).",
      image: require("./assets/images/codechef logo.webp"),
      imageAlt: "CodeChef Contest",
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
        "Hands-on labs covering compute, storage, databases, and networking on AWS.",
      image: require("./assets/images/aws logo.jpg"),
      imageAlt: "AWS Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1z82IX1s0ounE5zxRADXkeahKNIMaeCtP/view?usp=drive_link"
        }
      ]
    }
  ],
  display: true
};

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

const talkSection = {
  title: "TALKS",
  subtitle: "",
  talks: [],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false
};

const contactInfo = {
  title: emoji("Let's Connect ☎️"),
  subtitle:
    "Based in Mumbai. Open to backend engineering roles, collaborations, and interesting technical conversations.",
  number: "+91-9149736306",
  email_address: "amanaman26802@gmail.com"
};

const twitterDetails = {
  userName: "twitter",
  display: false
};

const isHireable = false;

export {
  illustration,
  greeting,
  highlightsSection,
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
