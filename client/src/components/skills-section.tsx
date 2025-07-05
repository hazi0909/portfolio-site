import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface SkillItemProps {
  name: string;
  level: number;
  color: string;
  index: number;
}

function SkillItem({ name, level, color, index }: SkillItemProps) {
  const [animatedLevel, setAnimatedLevel] = useState(0);
  const skillRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(skillRef, { once: false, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setAnimatedLevel(level);
      }, index * 100); // Stagger the animations

      return () => clearTimeout(timer);
    } else {
      // Reset the animation when out of view
      setAnimatedLevel(0);
    }
  }, [level, isInView, index]);

  return (
    <motion.div 
      ref={skillRef} 
      className="skill-item"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex justify-between mb-2">
        <span className="text-card-foreground">{name}</span>
        <span style={{ color: color }}>{level}%</span>
      </div>
      <div className="bg-muted rounded-full h-2 overflow-hidden">
        <motion.div 
          className="skill-bar h-2 rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: `${animatedLevel}%` }}
          transition={{ duration: 1, delay: index * 0.1 + 0.2 }}
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const frontendSkills = [
    { name: "HTML/CSS", level: 75, color: "#3B82F6" },
    { name: "JavaScript", level: 75, color: "#3B82F6" },
    { name: "React.js", level: 80, color: "#3B82F6" },
    { name: "Bootstrap", level: 85, color: "#3B82F6" },
  ];

  const backendSkills = [
    { name: "Node.js", level: 60, color: "#8B5CF6" },
    { name: "Python", level: 65, color: "#8B5CF6" },
    { name: "FastAPI", level: 55, color: "#8B5CF6" },
    { name: "Express.js", level: 70, color: "#8B5CF6" },
  ];

  const developmentSkills = [
    { name: "Web Development", level: 80, color: "#10B981" },
    { name: "GitHub", level: 75, color: "#10B981" },
    { name: "Model Training", level: 50, color: "#10B981" },
  ];

  const toolsSkills = [
    { name: "MongoDB", level: 65, color: "#F59E0B" },
    { name: "MySQL", level: 60, color: "#F59E0B" },
    { name: "WordPress", level: 70, color: "#F59E0B" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-foreground"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          Skills & Expertise
        </motion.h2>
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Frontend Skills */}
          <motion.div 
            className="bg-card p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow duration-300"
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center mb-6">
              <i className="fas fa-code text-3xl text-primary mr-4"></i>
              <h3 className="text-xl font-semibold text-card-foreground">Frontend</h3>
            </div>
            <div className="space-y-4">
              {frontendSkills.map((skill, index) => (
                <SkillItem key={skill.name} {...skill} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Backend Skills */}
          <motion.div 
            className="bg-card p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow duration-300"
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center mb-6">
              <i className="fas fa-server text-3xl text-primary mr-4"></i>
              <h3 className="text-xl font-semibold text-card-foreground">Backend</h3>
            </div>
            <div className="space-y-4">
              {backendSkills.map((skill, index) => (
                <SkillItem key={skill.name} {...skill} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Development Skills */}
          <motion.div 
            className="bg-card p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow duration-300"
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center mb-6">
              <i className="fas fa-code-branch text-3xl text-primary mr-4"></i>
              <h3 className="text-xl font-semibold text-card-foreground">Development</h3>
            </div>
            <div className="space-y-4">
              {developmentSkills.map((skill, index) => (
                <SkillItem key={skill.name} {...skill} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Tools & DevOps */}
          <motion.div 
            className="bg-card p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow duration-300"
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center mb-6">
              <i className="fas fa-tools text-3xl text-primary mr-4"></i>
              <h3 className="text-xl font-semibold text-card-foreground">Tools</h3>
            </div>
            <div className="space-y-4">
              {toolsSkills.map((skill, index) => (
                <SkillItem key={skill.name} {...skill} index={index} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
