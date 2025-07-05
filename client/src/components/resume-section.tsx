import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ResumeSection() {
  const handleDownloadResume = () => {
    // TODO: Implement actual resume download
    alert("Resume download functionality would be implemented here with the actual PDF file.");
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
                        5+ years of full-stack development experience
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-chevron-right text-blue-600 mr-2 mt-1"></i>
                        Led development of 20+ web applications
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-chevron-right text-blue-600 mr-2 mt-1"></i>
                        Expertise in React, Node.js, and Python
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-chevron-right text-blue-600 mr-2 mt-1"></i>
                        AI/ML integration and implementation
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Education & Certifications</h3>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start">
                        <i className="fas fa-graduation-cap text-violet-600 mr-2 mt-1"></i>
                        B.S. Computer Science, Tech University
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-certificate text-violet-600 mr-2 mt-1"></i>
                        AWS Certified Developer
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-certificate text-violet-600 mr-2 mt-1"></i>
                        Google Cloud Professional
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-certificate text-violet-600 mr-2 mt-1"></i>
                        Machine Learning Specialist
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
