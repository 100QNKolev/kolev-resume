import type { ResumeData } from "../types/ResumeData";

export const defaultResumeData: ResumeData = {
  name: "Stoyan Kolev",
  title: "Full Stack Developer",
  email: "s.j.kolevv@gmail.com",
  location: "Bulgaria",
  github: "https://github.com/100QNKolev",
  linkedin: "https://www.linkedin.com/in/stoyan-kolev-a00704330/",
  summary: "💻",
  experience: [
    {
      title: "Back-end Developer",
      company: "Cost-Effective Solutions - ZaZemiata",
      period: "December 2024 - March 2025",
      description: [
        "Led the development of the scraper, personally handling the majority of the tasks.",
        "Additionally, I assisted in troubleshooting issues in both the API and Front-end.",
        "I was also responsible for testing the scraper and resolving all identified bugs.",
      ],
      technologies: ["TypeScript", "Node.js", "Puppeteer", "PostgreSQL"]
    },
    {
      title: "Practical intern",
      company: "Cost-Effective Solutions - Time Management Project",
      period: "May 2024 - October 2024",
      description: [
        "Collaborated with a team to develop the server-side application.",
        "Actively contributed to building nearly every feature and played a key role in enhancing the application's overall performance.",
      ],
      technologies: ["JavaScript", "Node.js", "Express.js", "MongoDB", "Google SSO"]
    },
  ],
  projects: [
    {
      title: "BuildingCo",
      description: "Developed a modern, responsive website for a construction company, featuring a clean design and comprehensive content about services, past projects, and company information.",
      technologies: ["Next.js", "Tailwind CSS"],
      link: "https://building-company-drab.vercel.app/",
      github: "https://github.com/100QNKolev/BuildingCompany"
    },
  ],
  education: [
    {
      degree: "Bachelor of Software Engineering",
      institution: "University of Plovdiv Paisii Hilendarski",
      period: "2024 - 2028",
    }
  ],
  certificates: [
    {
      name: "C# Full-Stack Developer",
      issuer: "SoftUni",
      date: "May 2024",
      link: "https://softuni.bg/certificates/details/215996/9fc9f26d"
    },
    {
      name: "Back-End Software Engineer with C#",
      issuer: "SoftUni",
      date: "April 2024",
      link: "https://softuni.bg/certificates/details/215306/d1352c87"
    },
    {
      name: "Back-end developer",
      issuer: "Cost-Effective Solutions",
      date: "March 2025",
      link: "https://huutgnkansvslafnbtbg.supabase.co/storage/v1/object/public/files/certificates/season3/Certificate-Intern-Stoyan-Kolev-551df902-0013-497b-8659-09f40fdbbecb.pdf"
    },
  ],
  skills: [
    "JavaScript", "TypeScript", "C#", "React", "Next.js", "Node.js", ".NET",
    "ASP.NET", "Docker", "PostgreSQL", "MongoDB", "MSSQL", "Git", "CI/CD", "Azure"
  ]
}; 