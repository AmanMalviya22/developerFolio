/* Change this file to get your personal Portfolio */

import splashAnimation from "./assets/lottie/splashAnimation";

import niumLogo from "./assets/images/nium-logo.svg";
import blacklightLogo from "./assets/images/blacklightgaming.png";
import vivaopsLogo from "./assets/images/vivaopslogo.avif";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 1400
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Aman Malviya",
  title: "Hi, I'm Aman",
  role: "Backend Engineer · Payments · Microservices",
  subTitle:
    "I build payment systems that process 100K+ daily transactions across 50+ banking partners.",
  aboutLine:
    "Java & Spring Boot · AWS EKS · MCP/Claude tooling · 4-star CodeChef",
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
    {value: "4-star", label: "CodeChef Rating"}
  ]
};

const companiesSection = {
  display: true,
  title: "Companies I've worked with",
  companies: [
    {name: "NIUM", logo: niumLogo},
    {name: "Blacklight Studio", logo: blacklightLogo},
    {name: "Inorg (VivaOps)", logo: vivaopsLogo}
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
  title: "Skills",
  subTitle: "Backend, cloud, and data stack I use in production systems",

  skillGroups: [
    {
      label: "Backend",
      skills: ["Java", "Spring Boot", "Microservices", "REST APIs", "Kafka"]
    },
    {
      label: "Data",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"]
    },
    {
      label: "Cloud & DevOps",
      skills: ["AWS EKS", "Docker", "Kubernetes", "Jenkins", "Terraform"]
    },
    {
      label: "AI & Tools",
      skills: ["MCP", "Claude API", "Git", "System Design"]
    }
  ],

  skills: [],

  softwareSkills: [],

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
        "Foundation in algorithms, data structures, and software engineering.",
        "Backend and systems projects with Java, Spring Boot, and cloud technologies.",
        "Competitive programming on CodeChef (4-star, Global Rank 2 Nov 2022)."
      ]
    }
  ]
};

const techStack = {
  viewSkillBars: false,
  experience: [],
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
        "Improved payment success rates by 15% and reduced manual intervention by 40% through automated validation.",
        "Architected an MCP server with Claude for automated transaction failure root-cause analysis (−60% investigation time).",
        "Deployed microservices on AWS EKS with Redis caching, CI/CD, and production monitoring."
      ]
    },
    {
      role: "Software Engineer",
      company: "Blacklight Studio",
      companylogo: blacklightLogo,
      date: "Apr 2025 – Aug 2025 · Noida",
      descBullets: [
        "Developed backend services in Java and Spring Boot, improving platform scalability and modularity.",
        "Designed RESTful APIs with caching, reducing average response time from 200ms to 50ms.",
        "Optimized database queries and connection pooling for concurrent low-latency workloads.",
        "Collaborated with cross-functional teams to ship production features reliably."
      ]
    },
    {
      role: "Associate DevOps Engineer",
      company: "Inorg (VivaOps)",
      companylogo: vivaopsLogo,
      date: "Oct 2024 – Feb 2025 · Pune",
      descBullets: [
        "Built and deployed Java/Spring Boot microservices for internal applications.",
        "Implemented Jenkins CI/CD pipelines, reducing manual deployment effort by 70%.",
        "Managed AWS infrastructure (EC2, S3, RDS, VPC) with Terraform and Ansible.",
        "Cut deployment time from 45 minutes to 5 minutes with Docker and Kubernetes."
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "false",
  display: false
};

const bigProjects = {
  display: true,
  title: "Featured Projects",
  subtitle: "Backend systems, AI integration, and algorithms",

  projects: [
    {
      image: require("./assets/images/hospital api log.jpg"),
      projectName: "Intelligent Transaction Analyzer (MCP Server)",
      projectDesc:
        "MCP server with Claude integration that queries logs and produces root-cause diagnostics for transaction failures — the pattern behind tooling built at NIUM.",
      tags: ["Java", "MCP", "Claude", "Diagnostics"],
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/AmanMalviya22"
        }
      ]
    },
    {
      image: require("./assets/images/sudoku.png"),
      projectName: "Word Lookup Dictionary",
      projectDesc:
        "Trie-based dictionary with O(m) lookup, auto-suggestion, and spell correction using Levenshtein distance fuzzy matching.",
      tags: ["Java", "Trie", "DSA", "Algorithms"],
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/AmanMalviya22/word-lookup-master"
        }
      ]
    },
    {
      image: require("./assets/images/ecommerce.png"),
      projectName: "E-commerce Web Application",
      projectDesc:
        "Full-stack e-commerce platform with authentication, cart, inventory, and Stripe payments — MERN stack deployed on Vercel.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
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
    }
  ]
};

const achievementSection = {
  title: "Achievements",
  subtitle: "Competitive programming milestones and certifications",

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
      imageAlt: "AWS Academy",
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
  title: "Podcast",
  subtitle: "",
  podcast: [],
  display: false
};

const contactInfo = {
  title: "Get in Touch",
  subtitle:
    "Building payment systems at NIUM. Happy to connect on backend architecture, fintech, or MCP tooling.",
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
  companiesSection,
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
