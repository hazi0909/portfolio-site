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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Modern workspace background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Hamza Shabbir
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-foreground">
            Full Stack Developer | AI Enthusiast | Freelancer
          </p>
          <p className="text-lg mb-12 max-w-2xl mx-auto text-muted-foreground">
            Passionate about building innovative web applications and exploring the endless possibilities of artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleDownloadResume}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <i className="fas fa-download mr-2"></i>
              Download Resume
            </Button>
            <Button
              variant="outline"
              onClick={handleContactMe}
              className="bg-background border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <i className="fas fa-envelope mr-2"></i>
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <i className="fas fa-chevron-down text-primary text-2xl"></i>
      </div>
    </section>
  );
}
