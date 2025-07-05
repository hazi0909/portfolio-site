export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Who Am I</h2>
            <p className="text-lg mb-6 text-foreground">
              I'm <span className="text-primary font-semibold">Hamza Shabbir</span>, a passionate Frontend Developer from Pakistan who loves crafting clean, responsive, and interactive UIs — 
              blending logic with creativity to build seamless digital experiences.
            </p>
            <p className="text-lg mb-6 text-foreground">
              I specialize in <span className="text-primary font-semibold">React.js and JavaScript</span>, and have built 20+ high-performance websites with pixel-perfect design and smooth 
              animations using Framer Motion.
            </p>
            <p className="text-lg mb-6 text-foreground">
              I enjoy <span className="text-primary font-semibold">solving problems</span>, exploring new tools, and turning ideas into fast, scalable, and intuitive web experiences that not only 
              work great — but feel great to use.
            </p>
            <div className="mt-8">
              <p className="text-xl italic text-primary font-medium border-l-4 border-primary pl-4">
                "Every challenge is an opportunity to grow."
              </p>
            </div>
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
