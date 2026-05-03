import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote, Star } from "lucide-react";

// Import assets
import datalyncLogo from "@/assets/testimonials/datalync-logo.png";
import corematrixLogo from "@/assets/testimonials/corematrix-logo.jpg";

const testimonials = [
  {
    company: "Datalync Solution",
    content: "Feedgo's strategic approach helped us bridge the gap between technical expertise and social engagement. Their content systems have been instrumental in scaling our brand awareness and authority in the IT sector.",
    logo: datalyncLogo,
  },
  {
    company: "Corematrix Solutions",
    content: "As a tech startup, we needed a strategy that understood the algorithm. Feedgo delivered beyond our expectations, making our brand look premium and established. Their AI-driven approach is game-changing.",
    logo: corematrixLogo,
  }
];

export const Testimonials = () => {
  return (
    <section className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
            Success Stories
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tight">
            Trusted by <span className="gradient-text">IT Companies</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We help tech startups cut through the noise with data-driven social media strategies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <SpotlightCard className="p-10 h-full flex flex-col glass-card border-primary/10 hover:border-primary/30 transition-all duration-500">
                <div className="flex gap-1 mb-6 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                
                <Quote className="h-12 w-12 text-primary/10 mb-6" />
                
                <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 flex-grow text-foreground/90 italic">
                  "{t.content}"
                </p>
                
                <div className="flex items-center gap-6 pt-6 border-t border-border/50">
                  <div className="h-16 w-16 rounded-2xl bg-white/5 border border-white/10 p-2 flex items-center justify-center overflow-hidden shadow-2xl">
                    <img src={t.logo} alt={t.company} className="max-w-full max-h-full object-contain" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-foreground tracking-tight">{t.company}</h4>
                    <p className="text-sm font-semibold text-primary/80 uppercase tracking-widest">IT Partner</p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
