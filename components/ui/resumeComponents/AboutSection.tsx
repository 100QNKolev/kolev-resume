import React from "react";
import { motion, Variants } from "framer-motion";
import { User, Mail, MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface AboutSectionProps {
  name: string;
  title: string;
  email: string;
  location: string;
  github: string;
  linkedin: string;
  summary: string;
  skills: string[];
  fadeInUp: Variants;
  staggerContainer: Variants;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  name,
  title,
  email,
  location,
  github,
  linkedin,
  summary,
  skills,
  fadeInUp,
  staggerContainer,
}) => (
  <section id="about" className="relative pt-32 pb-20 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        className="text-center mb-16"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-purple-400 to-amber-400 p-1"
          variants={fadeInUp}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
            <User className="w-16 h-16 text-purple-600" />
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4"
          variants={fadeInUp}
        >
          <span className="bg-gradient-to-r from-purple-600 via-purple-700 to-amber-600 bg-clip-text text-transparent">
            {name}
          </span>
        </motion.h1>

        <motion.p
          className="text-2xl md:text-3xl text-gray-600 mb-8"
          variants={fadeInUp}
        >
          {title}
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-8"
          variants={fadeInUp}
        >
          <div className="flex items-center space-x-2 text-gray-600">
            <Mail className="w-5 h-5" />
            <span>{email}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <MapPin className="w-5 h-5" />
            <span>{location}</span>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center space-x-4 mb-12"
          variants={fadeInUp}
        >
          <Button
            variant="outline"
            size="sm"
            className="border-purple-200 text-purple-700 hover:bg-purple-50"
            onClick={() => window.open(github, '_blank', 'noopener,noreferrer')}
          >
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-purple-200 text-purple-700 hover:bg-purple-50"
            onClick={() => window.open(linkedin, '_blank', 'noopener,noreferrer')}
          >
            <Linkedin className="w-4 h-4 mr-2" />
            LinkedIn
          </Button>
        </motion.div>

        <motion.p
          className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
          variants={fadeInUp}
        >
          {summary}
        </motion.p>
      </motion.div>

      {/* Skills */}
      <motion.div
        className="mb-20"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Technical Skills</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill: string, index: number) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Badge
                variant="secondary"
                className="bg-purple-100 text-purple-700 hover:bg-purple-200 transition-colors"
              >
                {skill}
              </Badge>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection; 