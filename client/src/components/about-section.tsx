import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedHighlight from "./AnimatedHighlight";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0, scale: 0.8 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const quoteVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.8
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-muted" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="order-2 md:order-1" variants={itemVariants}>
            <motion.h2 
              className="text-4xl font-bold mb-6 text-foreground"
              variants={itemVariants}
            >
              Who Am I
            </motion.h2>
            <motion.div
              className="text-lg mb-6 text-foreground flex flex-col gap-4"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <span>
                I am a fresh graduate in <AnimatedHighlight text="Bs Computer Science" highlightClassName="text-primary font-semibold" delay={0} /> from the <AnimatedHighlight text="University of Central Punjab" highlightClassName="text-primary font-semibold" delay={1} /> with a foundation in full-stack development using the <AnimatedHighlight text="MERN stack" highlightClassName="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent font-bold" delay={2} />, <AnimatedHighlight text="Python" highlightClassName="text-primary font-semibold" delay={6.6} />, and mobile application development.
              </span>
              <span>
                Through university projects and my final year project, I built an <AnimatedHighlight text="AI Driven" highlightClassName="text-primary font-semibold" delay={2.5} /> programming language conversion platform for Node to Python and Python to Node.
              </span>
              <span>
                Besides this, I built dynamic web and mobile applications using <AnimatedHighlight text="React.js" highlightClassName="text-primary font-semibold" delay={3.4} />, <AnimatedHighlight text="Node.js" highlightClassName="text-primary font-semibold" delay={4.5} />, SQL, and Android, applying best practices in user interface design, <AnimatedHighlight text="backend integration" highlightClassName="text-primary font-semibold" delay={5.5} />, and API handling.
              </span>
              <span>
                I also developed solutions using <AnimatedHighlight text="WordPress" highlightClassName="text-primary font-semibold" delay={6} />, enhancing functionality through plugins and e-commerce tools.
              </span>
              <span>
                My work on <AnimatedHighlight text="AI-based tools" highlightClassName="text-primary font-semibold" delay={7} /> and real-world applications has prepared me to step confidently into roles in web development, mobile app development, and backend programming.
              </span>
            </motion.div>
            <motion.div 
              className="mt-8"
              variants={quoteVariants}
            >
              <p className="text-xl italic font-medium border-l-4 border-primary pl-4 bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                "In every struggle lies the seed of strength."
              </p>
            </motion.div>
          </motion.div>
          <motion.div 
            className="order-1 md:order-2 flex justify-center"
            variants={imageVariants}
          >
            <motion.img 
              src="/assets/myphoto.jpg"
              alt="Hamza Shabbir"
              className="rounded-2xl shadow-2xl w-80 h-80 object-cover"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
