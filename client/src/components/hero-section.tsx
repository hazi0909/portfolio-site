import { Button } from "@/components/ui/button";

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

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Modern workspace background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-violet-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            John Smith
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
            Full Stack Developer | AI Enthusiast | Freelancer
          </p>
          <p className="text-lg mb-12 max-w-2xl mx-auto text-gray-500 dark:text-gray-400">
            Passionate about building innovative web applications and exploring the endless possibilities of artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleDownloadResume}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <i className="fas fa-download mr-2"></i>
              Download Resume
            </Button>
            <Button
              variant="outline"
              onClick={handleContactMe}
              className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <i className="fas fa-envelope mr-2"></i>
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <i className="fas fa-chevron-down text-blue-600 dark:text-blue-400 text-2xl"></i>
      </div>
    </section>
  );
}
