export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">John Smith</h3>
            <p className="text-gray-400">Full Stack Developer | AI Enthusiast | Freelancer</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://linkedin.com/in/johnsmith" className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a href="https://github.com/johnsmith" className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a href="https://twitter.com/johnsmith" className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="mailto:john.smith@email.com" className="text-gray-400 hover:text-white transition-colors">
              <i className="fas fa-envelope text-2xl"></i>
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 John Smith. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
