import { motion } from "framer-motion";

const SpeedLineTransition = () => {
  return (
    <div className="relative h-16 overflow-hidden pointer-events-none my-4">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-primary/20"
          style={{
            top: `${10 + i * 12}%`,
            left: 0,
            right: 0,
            width: `${30 + Math.random() * 40}%`,
          }}
          initial={{ x: "-100%" }}
          whileInView={{ x: "300%" }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6 + Math.random() * 0.4,
            delay: i * 0.05,
            ease: "easeIn",
          }}
        />
      ))}
    </div>
  );
};

export default SpeedLineTransition;
