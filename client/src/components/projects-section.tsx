import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

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
  const projects: Project[] = [
    {
      id: 1,
      title: "AI Programming Language Chatbot",
      description: "Intelligent chatbot designed to assist with programming language queries, providing real-time code suggestions and explanations using advanced AI integration.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      technologies: ["Python", "AI Integration", "NLP"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: 2,
      title: "Restaurant Management System",
      description: "Complete restaurant management solution with integrated Point of Sale, inventory tracking, and customer management. Built with modern web technologies.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      technologies: ["React", "Node.js", "MySQL"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: 3,
      title: "E-Commerce Web Application",
      description: "Full-stack e-commerce platform with user authentication, product catalog, shopping cart functionality, and secure payment processing.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      technologies: ["React", "Node.js", "MongoDB"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: 4,
      title: "Movie Recommendation System",
      description: "AI-powered movie recommendation system that analyzes user preferences and viewing history to suggest personalized movie recommendations.",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      technologies: ["Python", "Machine Learning", "Flask"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: 5,
      title: "Mobile Application Development",
      description: "Cross-platform mobile applications developed using React Native and Android Studio, featuring responsive design and native functionality.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      technologies: ["React Native", "Android Studio", "Mobile UI"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: 6,
      title: "Dynamic Web Applications",
      description: "Collection of dynamic web applications built with modern frameworks, featuring responsive interfaces, database integration, and API connectivity.",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      technologies: ["JavaScript", "HTML/CSS", "API Integration"],
      demoLink: "#",
      githubLink: "#"
    }
  ];

  const technologyColors: { [key: string]: string } = {
    "React": "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300",
    "Node.js": "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300",
    "MongoDB": "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300",
    "MySQL": "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300",
    "Python": "bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300",
    "Flask": "bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300",
    "AI Integration": "bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-300",
    "NLP": "bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-300",
    "Machine Learning": "bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-300",
    "JavaScript": "bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300",
    "HTML/CSS": "bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300",
    "API Integration": "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300",
    "React Native": "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300",
    "Android Studio": "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300",
    "Mobile UI": "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300"
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="project-card bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={project.image} 
                alt={`${project.title} screenshot`} 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
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
                  <a 
                    href={project.demoLink} 
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <i className="fas fa-external-link-alt mr-1"></i>
                    Live Demo
                  </a>
                  <a 
                    href={project.githubLink} 
                    className="text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    <i className="fab fa-github mr-1"></i>
                    GitHub
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
