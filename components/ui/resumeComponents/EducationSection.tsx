import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import type { Education } from "@/types/Education";

interface EducationSectionProps {
  education: Education[];
}

const EducationSection: React.FC<EducationSectionProps> = ({ education }) => (
  <section id="education" className="py-20 px-6 bg-white/50 backdrop-blur-sm">
    <div className="max-w-6xl mx-auto">
      <motion.h2
        className="text-4xl font-bold text-center mb-16 text-gray-800"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Education
      </motion.h2>
      <div className="space-y-6">
        {education.map((edu: Education, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <Card className="bg-white/70 backdrop-blur-sm border-purple-100 h-full flex flex-col justify-center">
              <CardContent className="h-full flex flex-col justify-center">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-purple-700">{edu.degree}</h3>
                    <p className="text-gray-600 font-medium">{edu.institution}</p>
                    {edu.gpa && (
                      <p className="text-gray-500">GPA: {edu.gpa}</p>
                    )}
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500 mt-2 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection; 