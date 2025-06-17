import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

export const contactInfo = [
  {
    icon: <FiMail className="text-blue-400 text-xl" />,
    title: "Email",
    content: "yashsrivns@gmail.com",
    link: "mailto:yashsrivns@gmail.com",
  },
  {
    icon: <FiGithub className="text-blue-400 text-xl" />,
    title: "GitHub",
    content: "github.com/yashsrivastavaaa",
    link: "https://github.com/yashsrivastavaaa",
    newTab: true,
  },
  {
    icon: <FiLinkedin className="text-blue-400 text-xl" />,
    title: "LinkedIn",
    content: "linkedin.com/in/yashsrivastavaaaaa",
    link: "https://www.linkedin.com/in/yashsrivastavaaaaa/",
    newTab: true,
  },

  {
    icon: <SiLeetcode className="text-blue-400 text-xl" />,
    title: "LeetCode",
    content: "leetcode.com/yashsrivns",
    link: "https://leetcode.com/u/yashsrivns/",
    newTab: true,
  },
];

export const technicalSkills = [
  "Java Programming",
  "Python",
  "Object-Oriented Programming (OOP)",
  "Data Structures & Algorithms (DSA)",
  "Operating Systems (OS)",
  "Computer Networks (CN)",
  "MySQL",
  "PostgreSQL",
  "Software Engineering",
  "HTML5 & CSS3",
  "JavaScript (ES6+)",
  "TypeScript",
  "React.js",
  "React Native",
  "Tailwind CSS",
];


export const softSkills = [
  { name: "Problem-Solving", icon: "🧩" },
  { name: "Team Collaboration", icon: "👥" },
  { name: "Adaptability", icon: "🔄" },
  { name: "Time Management", icon: "⏱️" },
  { name: "Communication", icon: "💬" },
  { name: "Critical Thinking", icon: "🧠" },
];

export const projects = [
  {
    id: 1,
    title: "CampusVibes",
    icon: " ",
    description:
      "CampusVibes is a React Native-based mobile application designed to keep students connected, informed, and engaged with their college community. It is a cross-platform mobile application built with React Native, designed to centralize campus engagement by helping students, visitors, and administrators stay connected through real-time event updates, club activities, announcements, and media sharing—powered by Drizzle ORM, Neon PostgreSQL, and Cloudinary.",
    features: [
      "Manage posts, events, and clubs through an intuitive interface",
      "View club members and registered users",
      "Register/unregister for events seamlessly",
      "Get club-specific posts and personalized updates",
      "Explore and join clubs that match their interests",
      "Access public posts and view upcoming events",
      "Can perform one-click registration for public events.",
    ],
    techStack: [
      "React Native",
      "TypeScript",
      "Cloudinary (for media storage)",
      "Neon Database (PostgreSQL)",

    ],
    demoLink: "https://github.com/yashsrivastavaaa/CampusVibes",
    codeLink: "https://github.com/yashsrivastavaaa/CampusVibes",
  },
  {
    id: 2,
    title: "CheckYourHealth",
    icon: " ",
    description: "CheckYourHealth is a disease prediction tool designed to provide early health insights, guiding users toward proactive care. By entering basic information and symptoms, users receive predictions for potential health issues powered by machine learning.This tool can predict several critical conditions, including: Diabetes, Lungs Cancer, Heart Disease, Breast Cancer, With a simple, user-friendly interface, CheckYourHealth turns complex health data into actionable predictions, helping users understand their health risks and empowering them to take preventive measures.",
    features: [
      " The tool processes user data such as symptoms, medical history, lifestyle factors, and biometric data (e.g., age, weight, blood pressure) to provide a binary prediction (i.e., ”Yes” or ”No”) for each of the three diseases expect breast cancer.",
      "For breast cancer, the tool provides a type of breast cancer prediction based on user input.",
      "The tool is designed to be user-friendly, allowing users to input their data easily and receive predictions quickly.",

    ],
    techStack: ["Python", "CustomTkinter", "Machine Learning Algorithms"],
    demoLink: "https://github.com/yashsrivastavaaa/CheckYourHealth",
    codeLink: "https://github.com/yashsrivastavaaa/CheckYourHealth",
  },
];
