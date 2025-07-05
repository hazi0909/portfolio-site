export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold mb-6 text-foreground">About Me</h2>
            <p className="text-lg mb-6 text-foreground">
              Hello! I'm a passionate full-stack developer with expertise in modern web technologies and AI integration. 
              I graduated in Computer Science from the University of Central Punjab with a strong foundation in full-stack 
              development using the MERN stack, Python, and mobile application development.
            </p>
            <p className="text-lg mb-6 text-foreground">
              Through university projects and industry experience, I've developed strong skills in JavaScript, React.js, 
              Node.js, and Python. I've built dynamic web applications, mobile apps, and AI-powered solutions including 
              chatbots and recommendation systems. My experience spans interface design, backend integration, and API handling.
            </p>
            <p className="text-lg text-foreground">
              I'm always eager to learn new technologies and take on challenging projects that push the boundaries of 
              what's possible in web development and artificial intelligence.
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
