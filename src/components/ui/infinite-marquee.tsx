import { motion } from "framer-motion";

const tools = [
  "Instagram", "LinkedIn", "YouTube Shorts", "Facebook", "Twitter / X", "Pinterest", "Google Business"
];

export const InfiniteMarquee = () => {
  return (
    <div className="relative flex overflow-hidden w-full bg-secondary/50 py-12 border-y border-border/50">
      {/* Fade masks left and right */}
      <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent z-10" />
      
      <div className="flex w-full items-center">
        <motion.div
          className="flex whitespace-nowrap gap-16 px-8 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        >
          {/* Duplicate the array to create the seamless loop effect */}
          {[...tools, ...tools, ...tools, ...tools].map((tool, index) => (
            <span 
              key={index} 
              className="text-2xl md:text-3xl font-bold font-display text-muted-foreground/30 hover:text-primary transition-colors duration-300"
            >
              {tool}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
