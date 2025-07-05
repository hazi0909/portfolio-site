import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  const handleDownloadResume = () => {
    // Create a temporary link to download the resume
    const link = document.createElement('a');
    link.href = '/assets/resume.pdf';
    link.download = 'resume.pdf';
    link.target = '_blank';
    
    // Check if file exists before downloading
    fetch('/assets/resume.pdf')
      .then(response => {
        if (response.ok) {
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          alert('Resume file not found. Please upload your resume.pdf to the client/public/assets/ folder.');
        }
      })
      .catch(() => {
        alert('Resume file not found. Please upload your resume.pdf to the client/public/assets/ folder.');
      });
  };

  const handleContactMe = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
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

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Modern workspace background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      ></motion.div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <motion.div 
        className="container mx-auto px-6 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          Hamza Shabbir
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8 text-foreground"
          variants={itemVariants}
        >
          Full Stack Developer | AI Enthusiast | Freelancer
        </motion.p>
        <motion.p 
          className="text-lg mb-12 max-w-2xl mx-auto text-muted-foreground"
          variants={itemVariants}
        >
          Passionate about building innovative web applications and exploring the endless possibilities of artificial intelligence.
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Button
              onClick={handleDownloadResume}
              className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 shadow-lg"
            >
              <i className="fas fa-download mr-2"></i>
              Download Resume
            </Button>
          </motion.div>
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <div className="p-[2px] rounded-lg bg-gradient-to-r from-green-500 to-blue-500">
              <Button
                onClick={handleContactMe}
                className="w-full bg-background dark:bg-gray-900 text-gray-900 dark:text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 shadow-lg border-none hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-500 hover:text-white"
                style={{ boxShadow: 'none', backgroundClip: 'padding-box' }}
              >
                <i className="fas fa-envelope mr-2"></i>
                Contact Me
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <i className="fas fa-chevron-down text-primary text-2xl"></i>
      </motion.div>
    </section>
  );
}
