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
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React frontend and Node.js backend, featuring real-time inventory management and secure payment processing.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      technologies: ["React", "Node.js", "MongoDB"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: 2,
      title: "AI Chatbot Assistant",
      description: "Intelligent chatbot powered by OpenAI's GPT model, designed to provide customer support and answer frequently asked questions.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      technologies: ["Python", "Flask", "OpenAI"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: 3,
      title: "Task Management Dashboard",
      description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team communication features.",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      technologies: ["React", "TypeScript", "Firebase"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: 4,
      title: "Weather Forecast App",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and personalized weather alerts.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      technologies: ["Vue.js", "API", "Charts.js"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: 5,
      title: "Fitness Tracker App",
      description: "Cross-platform mobile application for tracking workouts, nutrition, and fitness goals with social sharing features.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      technologies: ["React Native", "Expo", "Redux"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: 6,
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for visualizing complex data sets with real-time updates, custom filters, and export capabilities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      technologies: ["D3.js", "Python", "Plotly"],
      demoLink: "#",
      githubLink: "#"
    }
  ];

  const technologyColors: { [key: string]: string } = {
    "React": "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300",
    "Node.js": "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300",
    "MongoDB": "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300",
    "Python": "bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300",
    "Flask": "bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300",
    "OpenAI": "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300",
    "TypeScript": "bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300",
    "Firebase": "bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300",
    "Vue.js": "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300",
    "API": "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300",
    "Charts.js": "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300",
    "React Native": "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300",
    "Expo": "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300",
    "Redux": "bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300",
    "D3.js": "bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300",
    "Plotly": "bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300"
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
