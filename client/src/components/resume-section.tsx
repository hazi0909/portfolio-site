import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ResumeSection() {
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

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">Resume</h2>
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Download my complete resume to learn more about my experience, education, and accomplishments.
                </p>
                <Button
                  onClick={handleDownloadResume}
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <i className="fas fa-download mr-2"></i>
                  Download PDF Resume
                </Button>
              </div>
              
              {/* Resume Preview */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Experience Highlights</h3>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start">
                        <i className="fas fa-chevron-right text-blue-600 mr-2 mt-1"></i>
                        Full-stack development with MERN stack
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-chevron-right text-blue-600 mr-2 mt-1"></i>
                        AI-powered chatbot and recommendation systems
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-chevron-right text-blue-600 mr-2 mt-1"></i>
                        Mobile app development with React Native
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-chevron-right text-blue-600 mr-2 mt-1"></i>
                        Database design and API integration
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-chevron-right text-blue-600 mr-2 mt-1"></i>
                        Restaurant management system development
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Education & Skills</h3>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start">
                        <i className="fas fa-graduation-cap text-violet-600 mr-2 mt-1"></i>
                        B.S. Computer Science, University of Central Punjab
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-award text-violet-600 mr-2 mt-1"></i>
                        CGPA: 2.8
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-code text-violet-600 mr-2 mt-1"></i>
                        Programming: JavaScript, Python, HTML, CSS
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-database text-violet-600 mr-2 mt-1"></i>
                        Databases: MySQL, MongoDB
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-tools text-violet-600 mr-2 mt-1"></i>
                        Tools: Git, WordPress, Android Studio
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
