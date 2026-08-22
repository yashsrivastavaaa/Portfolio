import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

export const profile = {
  name: "Yash Srivastava",
  headline: "Building things across AI, software, data, web & mobile.",
  intro:
    "I build practical products across AI, software, data, web and mobile — from RAG and MCP workflows to full-stack applications and scalable data systems.",
  location: "Noida, Uttar Pradesh, India",
  education: "B.Tech — Computer Science & Engineering (Artificial Intelligence)",
  cgpa: "8.13 / 10",
  leetcode: "650+ problems solved",
  phone: "+91 6307809466",
};

export const experience = [
  {
    id: 1,
    role: "Data Intern",
    company: "Crowe Capability Center — Crowe LLP",
    location: "Noida, Uttar Pradesh",
    duration: "Feb 2026 – Jul 2026",
    description:
      "Worked on metadata-driven data quality systems, LLM-powered SQL rule generation, RAG-based knowledge retrieval and real-time data quality monitoring.",
    highlights: [
      "Engineered metadata-driven data quality workflows using Python and SQL Server across 15+ enterprise databases, reducing manual validation effort by 80%.",
      "Designed an LLM-powered SQL rule generation and validation system using MCP (Model Context Protocol), automating 40,000+ SQL data quality rules and reducing rule creation time by 95%.",
      "Built an LLM-powered RAG chatbot indexing 500+ enterprise knowledge documents, reducing information retrieval time by 70%.",
      "Built 8+ responsive dashboards using React, Next.js, TypeScript and REST APIs for real-time data quality monitoring, enabling 50% faster issue identification.",
      "Optimized SQL-based validation with multithreaded Python workflows across 40,000+ test cases using YAML and Jinja, reducing execution time from 2500s to 900s (64%).",
    ],
    techStack: ["Python", "SQL Server", "MCP", "RAG", "React", "Next.js", "TypeScript", "YAML", "Jinja", "REST APIs"],
  },
];

export const education = [
  {
    title: "Bachelor of Technology in Computer Science and Engineering (Artificial Intelligence)",
    school: "G.L. Bajaj Institute of Technology and Management",
    location: "Greater Noida, Uttar Pradesh",
    period: "Nov 2022 – Jun 2026",
    score: "CGPA — 8.13 / 10",
  },
  {
    title: "Intermediate (Class 12)",
    school: "Vanita Public School",
    location: "Varanasi, Uttar Pradesh",
    period: "2021 – 2022",
    score: "Percentage — 89.8%",
  },
];

export const contactInfo = [
  { icon: <FiMail aria-hidden="true" focusable="false" />, title: "Email", content: "yashsrivns@gmail.com", link: "mailto:yashsrivns@gmail.com" },
  { icon: <FiGithub aria-hidden="true" focusable="false" />, title: "GitHub", content: "github.com/yashsrivastavaaa", link: "https://github.com/yashsrivastavaaa", newTab: true },
  { icon: <FiLinkedin aria-hidden="true" focusable="false" />, title: "LinkedIn", content: "linkedin.com/in/yashsrivastavaaaaa", link: "https://www.linkedin.com/in/yashsrivastavaaaaa/", newTab: true },
  { icon: <SiLeetcode aria-hidden="true" focusable="false" />, title: "LeetCode", content: "leetcode.com/u/yashsrivns", link: "https://leetcode.com/u/yashsrivns/", newTab: true },
];

// Keep this export name exactly as used by Skills.jsx.
export const skillGroups = [
  { title: "Languages", items: ["Python", "Java", "SQL", "JavaScript", "TypeScript", "C", "C++"] },
  { title: "Data Engineering", items: ["ETL / ELT", "Data Quality", "Data Validation", "SQL Server", "PostgreSQL", "MySQL", "YAML", "Jinja", "Multithreading"] },
  { title: "AI & LLM", items: ["LLMs", "RAG", "MCP", "Prompt Engineering", "Google Gemini", "LLM Applications"] },
  { title: "Frontend & Backend", items: ["Next.js", "React", "React Native", "Expo", "Node.js", "REST APIs"] },
  { title: "Engineering & Tools", items: ["DSA", "OOP", "DBMS", "System Design", "Git", "GitHub", "Drizzle ORM", "Firebase", "Power BI"] },
];

// Backward-compatible aliases in case any older component imports these names.
export const technicalSkills = skillGroups.flatMap((group) => group.items);
export const tools = ["Git", "GitHub", "VS Code", "Drizzle ORM", "Firebase", "Power BI"];
export const softSkills = [
  { name: "Problem Solving", icon: "" },
  { name: "Team Collaboration", icon: "" },
  { name: "Communication", icon: "" },
  { name: "Adaptability", icon: "" },
];

export const projects = [
  {
    id: 1,
    title: "MockMate",
    type: "AI • Full Stack",
    description: "A full-stack AI interview platform built with Next.js, TypeScript, PostgreSQL, Google Gemini, Firebase Authentication and ElevenLabs.",
    features: [
      "Reduced manual interview efforts by 90%",
      "Gemini-powered interview generation and evaluation",
      "Real-time voice interactions for 40+ simultaneous candidates",
      "10,000+ interview records with optimized PostgreSQL indexing",
      "Secure REST APIs and Firebase Authentication",
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Google Gemini", "Firebase", "ElevenLabs"],
    demoLink: "https://mock-mate-one-theta.vercel.app/",
    codeLink: "https://github.com/yashsrivastavaaa/MockMate",
    featured: true,
  },
  {
    id: 2,
    title: "TrakIt",
    type: "Mobile • Productivity",
    description: "A cross-platform job application tracking application built with React Native, TypeScript, Drizzle ORM and Neon PostgreSQL.",
    features: [
      "4+ core application management features",
      "5+ CRUD operations for application management",
      "Search and application status tracking",
      "Normalized PostgreSQL schema for 1,000+ records",
      "Analytics dashboard with 10+ job-search metrics",
    ],
    techStack: ["React Native", "TypeScript", "Drizzle ORM", "Neon PostgreSQL"],
    codeLink: "https://github.com/yashsrivastavaaa/TrakIt",
    demoLink: "https://drive.google.com/file/d/1gRlXb2Wmg7J_3RzAn88Q9pINORkmw0Ct/view",
    featured: true,
  },
];

export const resumeUrl = "https://drive.google.com/file/d/1usXZG1Qt7QXhIq07orp6asyqFjvdWWsb/view?usp=sharing";
