import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/types/Project";
import { Button } from "@/components/ui/button";

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => (
  <section id="projects" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.h2
        className="text-4xl font-bold text-center mb-16 text-gray-800"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project: Project, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -5 }}
          >
            <Card className="h-full bg-white/70 backdrop-blur-sm border-purple-100 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg text-purple-700 flex items-center justify-between">
                  {project.title}
                  <div className="flex space-x-2">
                    {project.link && (
                      <Button variant="ghost" size="sm" className="p-1" onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}>
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    )}
                    {project.github && (
                      <Button variant="ghost" size="sm" className="p-1" onClick={() => window.open(project.github, '_blank', 'noopener,noreferrer')}>
                        <Github className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-amber-100 text-amber-700">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection; 