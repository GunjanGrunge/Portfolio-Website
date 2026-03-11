import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import professionalPhoto from "@/assets/professional-photo.jpg";

const HeroSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm{" "}
              <span className="gradient-text">Gunjan Sarkar</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              A passionate <span className="text-primary font-semibold">Software Engineer</span> specializing in{" "}
              <span className="text-accent font-semibold">Cloud Computing</span>,{" "}
              <span className="text-accent font-semibold">Web Development</span>, and{" "}
              <span className="text-highlight font-semibold">Artificial Intelligence</span>.
              I build scalable solutions that solve real-world problems.
            </p>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 rounded-lg bg-primary text-primary-foreground font-display font-semibold text-sm mb-8 glow-primary"
            >
              View My Projects
            </motion.a>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/GunjanGrunge"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative animate-float">
              <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl scale-105" />
              <div className="relative rounded-2xl overflow-hidden border-2 border-primary/40 glow-primary">
                <img
                  src={professionalPhoto}
                  alt="Gunjan Sarkar - Software Engineer & Cloud Computing Specialist"
                  className="w-80 h-96 object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
