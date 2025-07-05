import { useEffect, useRef, useState } from "react";

interface SkillItemProps {
  name: string;
  level: number;
  color: string;
}

function SkillItem({ name, level, color }: SkillItemProps) {
  const [animatedLevel, setAnimatedLevel] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const skillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            setTimeout(() => {
              setAnimatedLevel(level);
            }, 200);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => observer.disconnect();
  }, [level, isVisible]);

  return (
    <div ref={skillRef} className="skill-item">
      <div className="flex justify-between mb-2">
        <span className="text-gray-700 dark:text-gray-300">{name}</span>
        <span className={`${color}`}>{level}%</span>
      </div>
      <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div 
          className={`skill-bar ${color.replace('text-', 'bg-')} h-2 rounded-full`}
          style={{ width: `${animatedLevel}%` }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const frontendSkills = [
    { name: "HTML/CSS", level: 95, color: "text-blue-600 dark:text-blue-400" },
    { name: "JavaScript", level: 90, color: "text-blue-600 dark:text-blue-400" },
    { name: "React.js", level: 85, color: "text-blue-600 dark:text-blue-400" },
  ];

  const backendSkills = [
    { name: "Node.js", level: 80, color: "text-violet-600 dark:text-violet-400" },
    { name: "Python", level: 75, color: "text-violet-600 dark:text-violet-400" },
    { name: "Database", level: 85, color: "text-violet-600 dark:text-violet-400" },
  ];

  const aiSkills = [
    { name: "Machine Learning", level: 70, color: "text-emerald-600 dark:text-emerald-400" },
    { name: "TensorFlow", level: 65, color: "text-emerald-600 dark:text-emerald-400" },
    { name: "Git", level: 90, color: "text-emerald-600 dark:text-emerald-400" },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <i className="fas fa-code text-3xl text-blue-600 mr-4"></i>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Frontend</h3>
            </div>
            <div className="space-y-4">
              {frontendSkills.map((skill) => (
                <SkillItem key={skill.name} {...skill} />
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <i className="fas fa-server text-3xl text-violet-600 mr-4"></i>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Backend</h3>
            </div>
            <div className="space-y-4">
              {backendSkills.map((skill) => (
                <SkillItem key={skill.name} {...skill} />
              ))}
            </div>
          </div>

          {/* AI/ML Skills */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <i className="fas fa-brain text-3xl text-emerald-600 mr-4"></i>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">AI/ML</h3>
            </div>
            <div className="space-y-4">
              {aiSkills.map((skill) => (
                <SkillItem key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
