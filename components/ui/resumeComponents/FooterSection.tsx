import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const FooterSection: React.FC = () => (
  <footer className="py-12 px-6 bg-gradient-to-r from-purple-900 to-amber-900 text-white">
    <div className="max-w-6xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold mb-4">Let&apos;s Work Together</h3>
        <p className="text-purple-100 mb-6">
          I&apos;m always interested in new opportunities and exciting projects.
        </p>
        <div className="flex justify-center gap-6 mt-8">
          <a href="/StoqnKolevResume.pdf" download target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="flex items-center gap-2 px-6 py-2 rounded-lg border border-white/30 text-white bg-transparent hover:bg-white/10 hover:text-white transition-colors duration-200 shadow-none"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </Button>
          </a>
        </div>
      </motion.div>
    </div>
  </footer>
);

export default FooterSection; 