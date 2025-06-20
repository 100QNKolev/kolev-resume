"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Download,
  Code,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import type { ModernResumeProps } from "../../types/ModernResumeProps";
import { defaultResumeData } from "../../data/resumeData";
import AboutSection from "./resumeComponents/AboutSection";
import ExperienceSection from "./resumeComponents/ExperienceSection";
import ProjectsSection from "./resumeComponents/ProjectsSection";
import EducationSection from "./resumeComponents/EducationSection";
import CertificatesSection from "./resumeComponents/CertificatesSection";
import FooterSection from "./resumeComponents/FooterSection";
import SparklesCore from "./resumeComponents/SparklesCore";

// Main Resume Component
const ModernResume: React.FC<ModernResumeProps> = ({ data = defaultResumeData }) => {
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.23, 0.86, 0.39, 0.96] as [number, number, number, number]
      }
    }
  };  

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-purple-50 to-amber-100 text-gray-900">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#8B5CF6"
        />
        
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/6 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/6 w-64 h-64 bg-amber-300/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, -40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.h1 
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-amber-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              {data.name}
            </motion.h1>
            
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: "about", label: "About", icon: User },
                { id: "experience", label: "Experience", icon: Briefcase },
                { id: "projects", label: "Projects", icon: Code },
                { id: "education", label: "Education", icon: GraduationCap },
                { id: "certificates", label: "Certificates", icon: Award }
              ].map(({ id, label, icon: Icon }) => (
                <motion.button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
                    activeSection === id
                      ? "bg-purple-100 text-purple-700"
                      : "text-gray-600 hover:text-purple-600"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{label}</span>
                </motion.button>
              ))}
            </div>

            <a href="/StoqnKolevResume.pdf" download target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="sm"
                className="border-purple-200 text-purple-700 hover:bg-purple-50"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </a>
          </div>
        </div>
      </motion.nav>

      {/* About Section */}
      <AboutSection
        name={data.name}
        title={data.title}
        email={data.email}
        location={data.location}
        github={data.github}
        linkedin={data.linkedin}
        summary={data.summary}
        skills={data.skills}
        fadeInUp={fadeInUp}
        staggerContainer={staggerContainer}
      />
      {/* Experience Section */}
      <ExperienceSection experience={data.experience} />
      {/* Projects Section */}
      <ProjectsSection projects={data.projects} />
      {/* Education Section */}
      <EducationSection education={data.education} />
      {/* Certificates Section */}
      <CertificatesSection certificates={data.certificates} />
      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default ModernResume;
