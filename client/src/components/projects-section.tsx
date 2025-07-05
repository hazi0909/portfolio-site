import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink: string;
  githubLink: string;
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const projects: Project[] = [
    {
      id: 1,
      title: "Tools Bag – Toolkit for images, files and AI tools",
      description: `A modern web application that streamlines image, file, and AI tool management. Built with React.js and Node.js, it features a user-friendly interface and powerful AI integrations for enhanced productivity.<div class='italic text-right mt-2'>Aug 2024 – Nov 2024</div>`,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
      technologies: ["React.js", "Node.js", "OpenAI", "Bootstrap"],
      demoLink: "https://toolsbag.io/",
      githubLink: ""
    },
    {
      id: 2,
      title: "Restaurant Management System – Website with SQL database",
      description: `A full-featured restaurant management platform with user authentication, dynamic image handling, and a responsive grid layout. Designed for seamless operations and an enhanced user experience.<div class='italic text-right mt-2'>Dec 2022 – Jan 2023</div>`,
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80",
      technologies: ["React.js", "Node.js", "MySQL", "API"],
      demoLink: "",
      githubLink: ""
    },
    {
      id: 3,
      title: "Image Gallery website – Website with SQL database",
      description: `A responsive image gallery web app built with HTML, CSS, and JavaScript. Features dynamic image fetching, search, and a visually appealing, user-friendly layout.<div class='italic text-right mt-2'>Jan 2023 – Feb 2023</div>`,
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      technologies: ["HTML", "CSS", "JavaScript", "API"],
      demoLink: "",
      githubLink: ""
    },
    {
      id: 4,
      title: "Final year project UCP – AI driven programming language converter",
      description: `An AI-powered platform for real-time, bidirectional code conversion between Node.js and Python. Combines advanced AI models with an intuitive interface for seamless code translation.<div class='italic text-right mt-2'>March 2024 – July 2025</div>`,
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
      technologies: ["AI", "Node.js", "Python", "CodeT5"],
      demoLink: "",
      githubLink: ""
    }
  ];

  const technologyColors: { [key: string]: string } = {
    "React": "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300",
    "Node.js": "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300",
    "MongoDB": "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300",
    "MySQL": "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300",
    "Python": "bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300",
    "Bootstrap": "bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300",
    "AI Integration": "bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-300",
    "AI": "bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-300",
    "React.js": "bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-300",
    "JavaScript": "bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300",
    "HTML/CSS": "bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300",
    "API Integration": "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300",
    "OpenAI": "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300",
    "Android Studio": "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300",
    "Mobile UI": "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300"
  };

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
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="project-card bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <motion.img 
                src={project.image} 
                alt={`${project.title} screenshot`} 
                className="w-full h-48 object-cover"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{project.title}</h3>
                  <div className="text-gray-600 dark:text-gray-300 mb-4" dangerouslySetInnerHTML={{ __html: project.description }} />
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      className={`px-3 py-1 rounded-full text-sm ${technologyColors[tech] || 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-4">
                    <motion.a 
                    href={project.demoLink} 
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                  >
                    <i className="fas fa-external-link-alt mr-1"></i>
                    Live Demo
                    </motion.a>
                    <motion.a 
                    href={project.githubLink} 
                    className="text-gray-600 dark:text-gray-400 hover:underline"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                  >
                    <i className="fab fa-github mr-1"></i>
                    GitHub
                    </motion.a>
                </div>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
