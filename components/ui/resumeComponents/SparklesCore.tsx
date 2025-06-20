import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import type { ParticlesProps } from "@/types/ParticlesProps";

const SparklesCore = (props: ParticlesProps) => {
  const {
    className,
    minSize = 0.4,
    maxSize = 1,
    speed = 1,
    particleColor = "#FFFFFF",
    particleDensity = 100,
  } = props;
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [init, setInit] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    setInit(true);
    controls.start({
      opacity: 1,
      transition: {
        duration: 1,
      },
    });
  }, [controls]);

  useEffect(() => {
    if (!init || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < particleDensity; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * (maxSize - minSize) + minSize,
        speedX: (Math.random() - 0.5) * speed,
        speedY: (Math.random() - 0.5) * speed,
        opacity: Math.random() * 0.8 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [init, particleColor, particleDensity, maxSize, minSize, speed]);

  return (
    <motion.div animate={controls} className={`opacity-0 ${className}`}>
      {init && (
        <canvas
          ref={canvasRef}
          className="h-full w-full"
          style={{ background: 'transparent' }}
        />
      )}
    </motion.div>
  );
};

export default SparklesCore; 