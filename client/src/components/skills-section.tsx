import { useEffect, useRef, useState } from "react";

interface SkillItemProps {
  name: string;
  level: number;
  color: string;
}

function SkillItem({ name, level, color }: SkillItemProps) {
  const [animatedLevel, setAnimatedLevel] = useState(0);
  const skillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Immediate animation for testing - this will animate as soon as component mounts
    const timer = setTimeout(() => {
      setAnimatedLevel(level);
    }, 500);

    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div ref={skillRef} className="skill-item">
      <div className="flex justify-between mb-2">
        <span className="text-card-foreground">{name}</span>
        <span className="text-primary">{level}%</span>
      </div>
      <div className="bg-muted rounded-full h-2">
        <div 
          className="skill-bar h-2 rounded-full bg-primary"
          style={{ 
            width: `${animatedLevel}%`
          }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const frontendSkills = [
    { name: "HTML/CSS", level: 75, color: "text-blue-600 dark:text-blue-400" },
    { name: "JavaScript", level: 75, color: "text-blue-600 dark:text-blue-400" },
    { name: "React.js", level: 80, color: "text-blue-600 dark:text-blue-400" },
    { name: "Bootstrap", level: 85, color: "text-blue-600 dark:text-blue-400" },
  ];

  const backendSkills = [
    { name: "Node.js", level: 60, color: "text-violet-600 dark:text-violet-400" },
    { name: "Python", level: 65, color: "text-violet-600 dark:text-violet-400" },
    { name: "FastAPI", level: 55, color: "text-violet-600 dark:text-violet-400" },
    { name: "Express.js", level: 70, color: "text-violet-600 dark:text-violet-400" },
  ];

  const developmentSkills = [
    { name: "Web Development", level: 80, color: "text-emerald-600 dark:text-emerald-400" },
    { name: "GitHub", level: 75, color: "text-emerald-600 dark:text-emerald-400" },
    { name: "Model Training", level: 50, color: "text-emerald-600 dark:text-emerald-400" },
  ];

  const toolsSkills = [
    { name: "MongoDB", level: 65, color: "text-orange-600 dark:text-orange-400" },
    { name: "PostgreSQL", level: 60, color: "text-orange-600 dark:text-orange-400" },
    { name: "WordPress", level: 70, color: "text-orange-600 dark:text-orange-400" },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Frontend Skills */}
          <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
            <div className="flex items-center mb-6">
              <i className="fas fa-code text-3xl text-primary mr-4"></i>
              <h3 className="text-xl font-semibold text-card-foreground">Frontend</h3>
            </div>
            <div className="space-y-4">
              {frontendSkills.map((skill) => (
                <SkillItem key={skill.name} {...skill} />
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
            <div className="flex items-center mb-6">
              <i className="fas fa-server text-3xl text-primary mr-4"></i>
              <h3 className="text-xl font-semibold text-card-foreground">Backend</h3>
            </div>
            <div className="space-y-4">
              {backendSkills.map((skill) => (
                <SkillItem key={skill.name} {...skill} />
              ))}
            </div>
          </div>

          {/* Development Skills */}
          <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
            <div className="flex items-center mb-6">
              <i className="fas fa-code-branch text-3xl text-primary mr-4"></i>
              <h3 className="text-xl font-semibold text-card-foreground">Development</h3>
            </div>
            <div className="space-y-4">
              {developmentSkills.map((skill) => (
                <SkillItem key={skill.name} {...skill} />
              ))}
            </div>
          </div>

          {/* Tools & DevOps */}
          <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
            <div className="flex items-center mb-6">
              <i className="fas fa-tools text-3xl text-primary mr-4"></i>
              <h3 className="text-xl font-semibold text-card-foreground">Tools</h3>
            </div>
            <div className="space-y-4">
              {toolsSkills.map((skill) => (
                <SkillItem key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
