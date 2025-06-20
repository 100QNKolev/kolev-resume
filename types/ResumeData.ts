import type { Experience } from "./Experience";
import type { Project } from "./Project";
import type { Education } from "./Education";
import type { Certificate } from "./Certificate";

export interface ResumeData {
  name: string;
  title: string;
  email: string;
  location: string;
  github: string;
  linkedin: string;
  summary: string;
  experience: Experience[];
  projects: Project[];
  education: Education[];
  certificates: Certificate[];
  skills: string[];
} 