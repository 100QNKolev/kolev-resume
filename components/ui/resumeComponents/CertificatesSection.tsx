import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";
import type { Certificate } from "@/types/Certificate";

interface CertificatesSectionProps {
  certificates: Certificate[];
}

const CertificatesSection: React.FC<CertificatesSectionProps> = ({ certificates }) => (
  <section id="certificates" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.h2
        className="text-4xl font-bold text-center mb-16 text-gray-800"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Certifications
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert: Certificate, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="bg-white/70 backdrop-blur-sm border-purple-100 hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-center">
              <CardContent className="h-full flex flex-col justify-center">
                <div className="flex items-center space-x-3 h-full">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-amber-400 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="font-semibold text-purple-700 mb-1">
                      {cert.link ? (
                        <a href={cert.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {cert.name}
                        </a>
                      ) : (
                        cert.name
                      )}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">{cert.issuer}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">{cert.date}</span>
                      {cert.credentialId && (
                        <Badge variant="outline" className="text-xs border-amber-200 text-amber-700">
                          {cert.credentialId}
                        </Badge>
                      )}
                    </div>
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

export default CertificatesSection; 