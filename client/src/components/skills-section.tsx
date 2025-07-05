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
        <span className="text-gray-700 dark:text-gray-300">{name}</span>
        <span className={`${color}`}>{level}%</span>
      </div>
      <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div 
          className="skill-bar h-2 rounded-full"
          style={{ 
            width: `${animatedLevel}%`,
            backgroundColor: color.includes('blue') ? '#2563eb' : 
                           color.includes('violet') ? '#7c3aed' : 
                           color.includes('emerald') ? '#059669' : 
                           color.includes('orange') ? '#ea580c' : '#2563eb'
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
  ];

  const backendSkills = [
    { name: "Node.js", level: 60, color: "text-violet-600 dark:text-violet-400" },
    { name: "Python", level: 65, color: "text-violet-600 dark:text-violet-400" },
    { name: "MySQL", level: 60, color: "text-violet-600 dark:text-violet-400" },
  ];

  const mobileSkills = [
    { name: "React Native", level: 65, color: "text-emerald-600 dark:text-emerald-400" },
    { name: "Android", level: 60, color: "text-emerald-600 dark:text-emerald-400" },
    { name: "Mobile UI/UX", level: 70, color: "text-emerald-600 dark:text-emerald-400" },
  ];

  const toolsSkills = [
    { name: "Git", level: 50, color: "text-orange-600 dark:text-orange-400" },
    { name: "WordPress", level: 70, color: "text-orange-600 dark:text-orange-400" },
    { name: "MongoDB", level: 50, color: "text-orange-600 dark:text-orange-400" },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

          {/* Mobile Development */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <i className="fas fa-mobile-alt text-3xl text-emerald-600 mr-4"></i>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Mobile</h3>
            </div>
            <div className="space-y-4">
              {mobileSkills.map((skill) => (
                <SkillItem key={skill.name} {...skill} />
              ))}
            </div>
          </div>

          {/* Tools & DevOps */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <i className="fas fa-tools text-3xl text-orange-600 mr-4"></i>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Tools</h3>
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
