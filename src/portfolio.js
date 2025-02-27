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
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
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


// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
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
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Project Page",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
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

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  workExperiences,
  bigProjects,
  contactInfo,
  isHireable,
  resumeSection,
  publicationSection
};
