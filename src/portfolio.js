/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

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
    "I am a software engineer with 6 months of internship experience in the full-stack domain, proficient in Node.js, MongoDB, Express.js, React.js, HTML, CSS, MySQL, and DevOps practices (certified in AWS). In addition to my technical skills, I am a competitive programmer with a 4-star rating on CodeChef."),
  resumeLink: "https://docs.google.com/document/d/1J0SdsayXw91vO9CX7gPYrT9uYfEJ2-EGKFYG07itp1Y/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/AmanMalviya22",
  linkedin: "https://www.linkedin.com/in/aman-malviya-839392201/",
  gmail: "aman_malviya22@outlook.com",

  codechef: "https://www.codechef.com/users/aman26802",

  stackoverflow: "https://stackoverflow.com/users/14799948/aman-malviya",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "Spring Boot", fontAwesomeClassname: "fas fa-cloud" },
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
    { skillName: "Express.js", fontAwesomeClassname: "fas fa-server" },
    { skillName: "React.js", fontAwesomeClassname: "fab fa-react" },
    { skillName: "MongoDB", fontAwesomeClassname: "fas fa-database" },
    { skillName: "MySQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "Angular", fontAwesomeClassname: "fab fa-angular" },
    { skillName: "OOPS", fontAwesomeClassname: "fas fa-cube" },
    { skillName: "REST API", fontAwesomeClassname: "fas fa-plug" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Redis", fontAwesomeClassname: "fas fa-memory" },
    { skillName: "Microservices", fontAwesomeClassname: "fas fa-network-wired" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Kubernetes", fontAwesomeClassname: "fas fa-cubes" },
    { skillName: "DSA", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git" },
    { skillName: "GitHub", fontAwesomeClassname: "fab fa-github" }
  ],

  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Shri Mata Vaishno Devi University",
      logo: require("./assets/images/SMVD_University_Logo.png"),
      subHeader: "Bachelor in  Computer Science",
      duration: "December 2020 - May 2024",

      descBullets: [
        "I am a highly motivated computer science student with a passion for software development. I have strong programming skills in  Java, and C++, and I am proficient in a variety of web development technologies, including HTML, CSS, and JavaScript,Nodejs, MongoDB. I have also gained experience with machine learning and artificial intelligence through coursework and personal projects",

        " I am currently pursuing a B.Tech in Computer Science at Shri Mata Vaishno Devi University and I am expected to graduate in [Year]. After graduation, I am interested in a career in software development, where I can use my skills to create innovative and impactful products."
      ]
    },

  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Back-end Development in Java & Nodejs", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend Development in ReactJs",
      progressPercentage: "80%"
    },
    {
      Stack: "Competitive Programming in Java",
      progressPercentage: "90%"
    },
    {
      Stack: "DevOps Practices using AWS",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer | Feb 2024",
      company: "Enthu.ai",
      companylogo: require("./assets/images/enthu.ai"),
      date: "",

      descBullets: [
        "Completed tasks in software architecture, refactoring, and test-driven development.",
        "Built a REST API with Node.js handling 1000 requests/sec across 100 endpoints.",
        "Achieved 95% unit test coverage for robust code reliability.",
        "Adopted Agile methodology for modular and reusable code."
      ],
    },

    {
      role: "Full Stack Developer | Mar 2024 – July 2024",
      company: "BeeperMD",
      companylogo: require("./assets/images/beepermd.png"),
      date: "",
      desc: (
        <ul>
          <li>Enhanced application performance, leading to a 30% decrease in latency.</li>
          <li>Boosted API performance through database indexing and caching techniques.</li>
          <li>Collaborated on design, testing (JUnit), debugging, and code review processes.</li>
          <li>Utilized AWS and automation tools like Jenkins to streamline CI/CD pipelines.</li>
          <li> Tech Stack: Node.js, Java, Spring Boot, React, MySQL, AngularJS, Jenkins, AWS.</li>
        </ul>
      )
    },


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
      projectName: "E-commerce Application",
      projectDesc: <ul>
        Developed, tested and deployed an E-commerce web application using Nodejs, MongoDB, Express, React.
        ● Implemented all the features of an E–commerce application along with stripe payment gateway.
        ● Tech Stack: Nodejs, MongoDB, Express, React.
      </ul>,

      footerLink: [
        {
          name: "Active Link",
          url: "https://ecommerce-sanity-stripe.vercel.app/",

        },
        {

          name: "GitHub",
          url: "https://github.com/AmanMalviya22/ecommerce_web_application"
        }
        //  you can add extra buttons here.
      ]
    },

    {
      image: require("./assets/images/sudoku.png"),
      projectName: "Sudoku Game",
      projectDesc: <ul>● Designed a sudoku solver web application using React, JavaScript.
        ● Implement features like Easy, Medium, Hard level, reset, hint features.
        ● Tech Stack: React, JavaScript, HTML, CSS</ul>, footerLink: [
          {
            name: "Active Link",
            url: "https://x-e-n-o-r.github.io/Vue-Sudoku/"
          },
          {
            name: "GitHub",
            url: "https://github.com/AmanMalviya22/sudoku"
          }
        ]
    },

  ],
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "4 star rated on CodeChef",
      subtitle:
        "Achieved a commendable 4-star rating.Secured Global rank 2 in CodeChef November Long Challenge 2022.",
      image: require("./assets/images/codechef logo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "profile",
          url: "https://www.codechef.com/users/aman26802"
        }
      ]
    },
    {
      title: "AWS Certifications",
      subtitle:
        "AWS Academy Graduate Certification with hands on Experience",
      image: require("./assets/images/aws logo.jpg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1z82IX1s0ounE5zxRADXkeahKNIMaeCtP/view?usp=drive_link"
        }
      ]
    },

    {
      title: "Data Structures and Algorithm in Java",
      subtitle: "Completed Certifcation from Coding ninja in Data Structures and Algorithm",
      image: require("./assets/images/coding ninja logo.jpg"),
      imageAlt: "PWA Logo",
      footerLink: [

        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1oELvJvlexu-gCSCKgjjSWmcj78itGiBM/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Full Stack Development In Nodejs",
      subtitle: "Completed Certifcation from Coding ninja in Full Stack Web Development",
      image: require("./assets/images/coding ninja logo.jpg"),
      imageAlt: "PWA Logo",
      footerLink: [

        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1fveQn0QLG-_KFcnlsLz0UiGDYVArg4uZ/view?usp=drive_link"
        }
      ]
    }, {
      title: "java Certifications",
      subtitle: "Completed Certifcation from Coding ninja in java",
      image: require("./assets/images/coding ninja logo.jpg"),
      imageAlt: "PWA Logo",
      footerLink: [

        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1D105VzLzFGyuZKGLt3QiSzjHYkgpn_lt/view?usp=drive_link"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
  email_address: "aman_malviya22@outlook.com"
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
