/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen - 로딩화면

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section  - 가장 처음 나오는 인삿말 노드

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Jinhee Lee",
  title: "Jinhee Lee",
  subTitle: emoji(
  "An AI researcher and developer specializing in computer vision, with experience in segmentation and image generation. Passionate about applying deep learning to medical imaging and media content creation.
\n\n💡Currently seeking Ph.D. opportunities or industry roles to further explore and contribute to these fields."
),
  resumeLink:
    "https://drive.google.com/uc?export=download&id=1ggiUvPI1twSKULdUqw_E5rDZi0q2Q6_T", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  // github: "https://github.com/saadpasta",
  // linkedin: "https://www.linkedin.com/in/saadpasta/",
  // gmail: "jinny6876@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  skills: [
    emoji(
      "⚡ Proficient in Python with a focus on deep learning using PyTorch."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [    

    { skillName: "Python", customIcon: "python.png" },
    { skillName: "Java", customIcon: "java.png" },
    { skillName: "C++", customIcon: "cpp.png" },
    { skillName: "C#", customIcon: "csharp.png" },
    { skillName: "MATLAB", customIcon: "matlab.png" },    

    // Software and Tools
    { skillName: "Pytorch", customIcon: "pytorch.png" },    
    { skillName: "Tensorflow", customIcon: "tensorflow.png" },    
    { skillName: "OpenCV", customIcon: "opencv.png" },
    { skillName: "Git", customIcon: "git.png" },
    { skillName: "Docker", customIcon: "docker.png" },
    { skillName: "Linux", customIcon: "linux.png" },
    { skillName: "Unity Engine", customIcon: "unity.png" },
    { skillName: "Android Studio", customIcon: "android.png" },
    { skillName: "Blender", customIcon: "blender.png" },
    { skillName: "LaTeX", customIcon: "latex.png" }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Ohio State University",
      logo: require("./assets/images/Ohio_State_University_Logo.png"),
      subHeader: "Master of Science in Computer Science and Engineering",
      duration: "August 2019 - August 2021",
      desc: "Studied Artificial Intelligence, focusing on its applications in the medical field.",
      descBullets: [
        "Took courses about Artificial Intelligence, Algorithms, Operating Systems.",
        "Project: ML based research on drug discovery for Alzheimer's Disease."   
      ]
    },
    {
      schoolName: "University of Science and Technology",
      logo: require("./assets/images/ustLogo.png"),
      subHeader: "Master of Engineering in Aerospace System Engineering",
      duration: "March 2016 - February 2018",
      desc: "Full-time research at the Korea Aerospace Research Institute (KARI).",
      descBullets: [
      "Studied Supersonic Combusion Ramjet (ScramJet) engines and Wet Compression Compressor.",
      "Thesis: Study on the Spray Characteristics of Fuel Injectors For Scramjet Engines."]
    },
    {
      schoolName: "Inha University",
      logo: require("./assets/images/inhaLogo.jpg"),
      subHeader: "Bachelor of Science in Aerospace Engineering",
      duration: "March 2010 - February 2016",
      desc: "Ranked in the top 10% of the program, honored as a junior year student, and awarded two academic excellence scholarships.",
      descBullets: [
      "Took courses about Fluid Dynamics, Aerodynamics, Structural Analysis, Propulsion system design, Control Systems, Linear Algebra and Vector Calculus.",
      "Project: Unmanned Aerial Vehicle(UAV) Design and Flight Test of a Scaled Prototype."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "AI Research Collaborator",
      company: "Stanford University",
      companylogo: require("./assets/images/stanfordLogo.png"),
      date: " September 2024 – Present",
      desc: "Serving as a research collaborator at Surgical Innovation & Machine Interfacing Lab (SIMILab), Stanford University.",
      descBullets: [
        "Conducting supplementary experiments for research publications.",
        "Studying AI models for segmentation, depth estimation, and 3D reconstruction in surgical videos and scenes."
      ]
    },
    {
      role: "AI Engineer",
      company: "lululab Inc.",
      companylogo: require("./assets/images/lululabLogo.png"),
      date: "January 2022 – Present",
      desc: "Working as a junior AI engineer and researcher in human skin analysis and contents generation.",
      descBullets: [
        "Developed human skin simulation models for skin aging and the progression of acne and pigmentation using Diffusion models and GANs.",
        "Developed skin acne segmentation models and an acne pattern analysis module.",
        "Built a ChatGPT-based, skin-specialized chatbot system.", 
        "Implemented cosmetic and treatment recommendation systems.",
        "Developed a seven-segment digit OCR module for automatic blood pressure registration.",
        "Developed personal color analysis models.",        
      ]
    },
    {
      role: "Student Researcher",
      company: "Korea Aerospace Research Institute",
      companylogo: require("./assets/images/kariLogo.jpg"),
      date: "February 2016 – February 2018",
      desc: "Studied supersonic combustions and provided support for research on aircraft compressors and turbines.",
      descBullets: [
        "Conducted combustion stability and fuel injector tests for a Scramjet combustor.",
        "Implemented image processing and data analysis scripts for laser diagnostic data (PDPA and PLIF) in MATLAB."
      ]

    },
    {
      role: "Sergeant, Aircraft Mechanics",
      company: "Republic of Korea Air Force",
      companylogo: require("./assets/images/ROKAFLogo.jpg"),
      date: "February 2011 – February 2013",
      desc: "Fulfilled mandatory military service in the Republic of Korea Armed Forces.",
      descBullets: [
        "Ground support and aircraft maintenance service for the E-737 AEW&.",
        "Honorably discharged after 24 months of service as an Air Force Sergeant."
      ]

    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Some of the projects I've worked on.",
  projects: [
    {
      image: require("./assets/images/skintroublesimulation.png"),
      projectName: "Skin Trouble Simulation",
      projectDesc: "Skin trouble progression simulation using generative models.",
      footerLink: [
        {
          name: "Visit Project Page",
          url: "https://jinhee-hub.github.io/SkinTroubleSimulation/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Skin Chatbot",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Project Page",
          url: "http://nextu.se/"
        }
      ]
    },
    {
      image: require("./assets/images/product.jpg"),
      projectName: "Cosmetic Recommendation",
      projectDesc: "Deep learning-based skin care product recommendation A focus on cosmetic ingredient analysis and facial skin conditions",
      footerLink: [
        {
          name: "Visit Project Page",
          url: "https://jinhee-hub.github.io/CosmeticRecommendation/"
        }
      ]
    },    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
  display: false // Set false to hide this section, defaults to true
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
  display: false // Set false to hide this section, defaults to true
};

const publicationSection = {
  title: "Publications",
  display: true, 
  publications: [
    {
      title: "Deep learning‐based skin care product recommendation: A focus on cosmetic ingredient analysis and facial skin conditions.",
      authors: "Jinhee Lee, Huisu Yoon, Semin Kim, Chanhyeok Lee, Jongha Lee, Sangwook Yoo",
      venue: "Wiley, Journal of Cosmetic Dermatology, 2024",
      link: "https://onlinelibrary.wiley.com/doi/full/10.1111/jocd.16218"
    },
    {
      title: "Improving Facial Acne Segmentation through Semi-Supervised Learning with Synthetic Images.",
      authors: "Semin Kim, Jinhee Lee, Chanhyeok Lee, Jongha Lee",
      venue: "Journal of Korea Multimedia Society, 2024",
      link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003057645"
    },
    {
      title: "Study on Spray Visualization and Atomization Characteristics of Air-assist Type Injector for Scramjet Engine.",
      authors: "Jinhee Lee, Sanghoon Lee, Kyungjae Lee, Jaiho Kim, Sooseok Yang",
      venue: "Journal of the Korean Society of Propulsion Engineers, 2017",
      link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002267493"
    }
  ]
};



// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "jinny6876@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
  isHireable,
  resumeSection,
  publicationSection
};
