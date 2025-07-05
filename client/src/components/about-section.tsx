export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">About Me</h2>
            <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
              Hello! I'm John, a passionate full-stack developer with over 5 years of experience creating digital solutions. 
              My journey in technology started with a curiosity about how things work, and it has evolved into a deep love for building applications that make a difference.
            </p>
            <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
              I specialize in modern web technologies and have a particular interest in artificial intelligence and machine learning. 
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              My goal is to continue pushing the boundaries of what's possible with technology while helping businesses and individuals achieve their digital aspirations.
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500" 
              alt="Professional headshot" 
              className="rounded-2xl shadow-2xl w-80 h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
