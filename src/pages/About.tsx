import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, TrendingUp, ShieldCheck } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { MagneticButton } from "@/components/ui/magnetic-button";

const values = [
  {
    icon: Target,
    title: "Data-Driven Results",
    description: "No guesswork. Every piece of content is backed by strategy to guarantee brand growth.",
  },
  {
    icon: Users,
    title: "Exclusive Partnerships",
    description: "We don't just take clients. We build long-term advisory partnerships with founders.",
  },
  {
    icon: TrendingUp,
    title: "Algorithm Mastery",
    description: "We navigate strict algorithm changes so your brand consistently stays at the top of the feed.",
  },
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    description: "From aesthetics to copywriting, every deliverable passes through strict premium quality control.",
  },
];

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding hero-gradient pt-24 pb-20">
        <motion.div 
          className="container-custom text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-2 block">Our Mission</span>
          <h1 className="text-4xl font-bold md:text-5xl font-display text-foreground">
            Building Brands That <span className="gradient-text">Lead</span>
          </h1>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            We are the silent growth engine behind modern businesses. 
            We handle the strategy, the creativity, and the execution.
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold mb-6 font-display text-foreground">The Standard Was Too Low.</h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Feedgo was born from a simple realization: traditional marketing agencies are slow, outdated, and lack true modern aesthetic sensibility. Brands were being suffocated by poor design and generic content that audiences instantly ignored.
              </p>
              <p>
                We decided to flip the script. Instead of running a standard agency, we structured Feedgo as a high-end digital growth partner. We bypass complicated jargon and focus purely on what actually works: visually stunning content paired with aggressive, data-backed distribution algorithms.
              </p>
              <p className="font-medium text-foreground">
                Today, we operate entirely behind the scenes to make our clients look like absolute industry leaders. While you focus on building your product, we build your authority.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary relative">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl font-bold md:text-4xl font-display text-foreground">Our Core Principles</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
              The non-negotiables that dictate exactly how we operate.
            </p>
          </motion.div>

          <motion.div 
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={fadeUpItem} className="h-full">
                <SpotlightCard className="glass-card p-6 h-full flex flex-col items-center text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 mb-6 group-hover:scale-110 transition-transform">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-display text-foreground">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* High-End CTA Section */}
      <section className="section-padding bg-background pb-32">
        <div className="container-custom">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <SpotlightCard className="glass-card rounded-2xl p-12 lg:p-16 border-primary/20 bg-gradient-to-b from-background to-secondary/30 shadow-2xl">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider block mb-4">Start Scaling</span>
              <h2 className="text-4xl font-bold mb-6 font-display text-foreground leading-tight">
                Ready to transform your brand identity from ordinary to authoritative?
              </h2>
              <p className="text-muted-foreground mb-10 text-lg max-w-2xl mx-auto">
                Skip the generic agencies. Partner with a team obsessed with delivering aesthetic excellence and aggressive market growth.
              </p>
              <MagneticButton className="inline-block">
                <Button size="lg" asChild className="btn-instagram text-base px-10 py-6">
                  <Link to="/contact">
                    Schedule a Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </MagneticButton>
            </SpotlightCard>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
