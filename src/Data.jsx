import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

export const experience = [
  {
    id: 1,
    role: "Data Intern",
    company: "Crowe LLP",
    location: "Noida",
    description:
      "Working as a Data Intern at Crowe LLP, Noida, contributing to the development of data-driven solutions and backend systems. Leveraging Python and SQL Server for efficient data processing, transformation, and analysis. Utilizing YAML and Jinja for dynamic configurations and templating, while building lightweight and scalable backend services using Flask. Focused on writing clean, maintainable code and solving real-world data engineering challenges.",
    techStack: ["Python", "SQL Server", "YAML", "Jinja", "Flask"],
  },
];

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
  "YAML",
  "Jinja",
  "Flask",
  "SQL Server",
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
  "Next.js",
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
    title: "TrakIt",
    icon: " ",
    description:
      "TTrakIt is a comprehensive job application tracker designed to help job seekers stay organized and efficient throughout their job search process. It allows users to securely log in and maintain detailed records of companies they’ve applied to, including job positions, locations, compensation, and personalized notes. With TrakIt, users can easily track and update the status of each application—from applied to interviewing, offered, or rejected—while also enabling search and filtering for better management. Built with a clean and intuitive interface, TrakIt simplifies the often overwhelming task of managing multiple job applications, empowering users to stay focused and make informed decisions in their career journey.",
    features: [
      "🔐 Secure login system to protect your data",
      "📋 Add company names, job position, ctc, location, additional notes you've applied for",
      "🔄 Track and update application statuses: Applied, Interviewing, Offered, Rejected",
      "⭐ Search applications by company or position",
      "✏️ Edit or delete job application entries easily",
      "📊 Stay organized and focused throughout your job hunt",
      "📂 Filter applications by status for better organization",
      "📆 Track application dates and progress over time",
    ],
    techStack: ["React Native", "TypeScript", "NeonDB (PostgreSQL)", "Expo"],
    demoLink:
      "https://drive.google.com/file/d/1gRlXb2Wmg7J_3RzAn88Q9pINORkmw0Ct/view",
    codeLink: "https://github.com/yashsrivastavaaa/TrakIt",
  },
  {
    id: 2,
    title: "MockMate",
    icon: " ",
    description:
      "MockMate is a full-stack AI-powered mock interview platform that helps users practice personalized, voice-based interviews with instant feedback. It simulates real job interview scenarios using AI voice interaction and provides actionable insights to help users improve their responses. Built with a modular and scalable architecture, MockMate combines cutting-edge AI with a sleek user experience to support career growth.",
    features: [
      "🔐 Secure sign-up and sign-in using Firebase Authentication",
      "🧠 AI-powered interview questions generated dynamically via Google Gemini",
      "🗣️ Realistic voice interactions powered by 11labs",
      "📋 Instant AI-driven feedback on interview responses",
      "📄 Create custom interviews tailored to specific roles or fields",
      "📊 Interactive dashboard to track interview history and performance",
      "💾 PostgreSQL database to store user data, interviews, and feedback",
      "🖥️ Clean, responsive UI built with Next.js and Tailwind CSS",
      "📱 Mobile-friendly design optimized for all devices",
      "⚙️ Modular architecture supporting scalability and reusability",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Firebase Authentication",
      "Google Gemini (AI generation)",
      "11labs API (Voice interaction)",
      "PostgreSQL",
      "Tailwind CSS",
      "Vercel (Hosting)",
    ],
    demoLink: "https://mock-mate-one-theta.vercel.app/",
    codeLink: "https://github.com/yashsrivastavaaa/MockMate",
  },
  {
    id: 3,
    title: "CampusVibes",
    icon: " ",
    description:
      "CampusVibes is a React Native-based mobile application designed to keep students connected, informed, and engaged with their college community. It is a cross-platform mobile application built with React Native, designed to centralize campus engagement by helping students, visitors, and administrators stay connected through real-time event updates, club activities, announcements, and media sharing—powered by Drizzle ORM, Neon PostgreSQL, and Cloudinary.",
    features: [
      "📣 Manage posts, events, and clubs through an intuitive interface",
      "👥 View club members and registered users",
      "📝 Register/unregister for events seamlessly",
      "🎯 Get club-specific posts and personalized updates",
      "🔍 Explore and join clubs that match your interests",
      "🌐 Access public posts and view upcoming events",
      "⚡ One-click registration for public events",
    ],
    techStack: [
      "React Native",
      "TypeScript",
      "Cloudinary (for media storage)",
      "NeonDB (PostgreSQL)",
      "Expo",
    ],
    demoLink: "https://github.com/yashsrivastavaaa/CampusVibes",
    codeLink: "https://github.com/yashsrivastavaaa/CampusVibes",
  },
];
