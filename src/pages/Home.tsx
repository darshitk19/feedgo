import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, TrendingUp, BarChart3, Bot, Zap, Network, Target } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { InfiniteMarquee } from "@/components/ui/infinite-marquee";
import { Testimonials } from "@/components/sections/Testimonials";

const problems = [
  {
    icon: Clock,
    title: "Content Drain",
    description: "You're bound by manual content creation that drains your time. Staring at a blank screen eats up exactly what you lack most: time.",
  },
  {
    icon: TrendingUp,
    title: "Inconsistent Strategy",
    description: "Relying on random posting schedules that fail to please the current algorithms. Your social feed is full of disconnected ideas instead of a cohesive brand strategy.",
  },
  {
    icon: BarChart3,
    title: "Low Engagement",
    description: "You post consistently but lack the engaging hooks and visual quality to make audiences actually click, share, and buy your services.",
  },
];

const solutions = [
  {
    title: "Premium Content Creation",
    description: "We craft stunning carousels, engaging reels, and professional graphics tailored precisely to your brand voice.",
    icon: Bot,
  },
  {
    title: "Algorithm Domination",
    description: "High-volume, strategic posting schedules designed specifically to trigger algorithm pushes on Instagram and LinkedIn.",
    icon: Target,
  },
  {
    title: "Complete Management",
    description: "We take over your entire presence—planning, designing, scheduling, and community engagement—so you don't lift a finger.",
    icon: Network,
  },
  {
    title: "Data-Driven Scaling",
    description: "Transform your social media from a time-sink into a predictable, scalable revenue engine built for audience growth.",
    icon: Zap,
  },
];

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

const textReveal: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

const textStagger: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden hero-gradient min-h-[90vh] flex items-center pt-24 pb-16">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/8 rounded-full blur-3xl animate-float pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: '2s' }} />

        <div className="container-custom relative z-10">
          <motion.div
            className="mx-auto max-w-4xl text-center flex flex-col items-center"
            variants={textStagger}
            initial="hidden"
            animate="show"
          >
            <motion.h1 variants={textReveal} className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl font-display leading-tight text-foreground max-w-5xl mx-auto pb-2">
              Replace Hours <span className="gradient-text">with Algorithms</span>
            </motion.h1>

            <motion.p variants={textReveal} className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Stop struggling with content creation. We manage your complete social media presence, delivering high-end visuals and algorithm-beating strategies while you focus on your business.
            </motion.p>

            <motion.div variants={textReveal} className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton>
                <Button size="lg" className="btn-instagram text-base px-8 py-6 w-full sm:w-auto" asChild>
                  <Link to="/contact">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button size="lg" variant="outline" className="text-base px-8 py-6 border-2 border-primary/30 bg-primary/5 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 w-full sm:w-auto" asChild>
                  <Link to="/work">See Our Work</Link>
                </Button>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Infinite Marquee Section */}
      <InfiniteMarquee />

      {/* Problems Section */}
      <section className="section-padding bg-secondary relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Common Challenges</span>
            <h2 className="text-4xl font-bold md:text-5xl font-display mt-3 text-foreground">
              Sound Familiar?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
              The bottlenecks stopping your brand from standing out online.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {problems.map((problem, index) => (
              <motion.div key={index} variants={fadeUpItem} className="h-full">
                <SpotlightCard className="glass-card p-8 h-full">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <problem.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-display text-foreground">{problem.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Solutions</span>
            <h2 className="text-4xl font-bold md:text-5xl font-display mt-3 text-foreground">
              How <span className="gradient-text">Feedgo</span> Scales You
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
              We replace chaos with predictable, high-converting content systems.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-6 md:grid-cols-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {solutions.map((solution, index) => (
              <motion.div key={index} variants={fadeUpItem} className="h-full">
                <div className="flex gap-5 p-6 rounded-2xl border-2 border-border/50 hover:border-primary/30 hover:bg-primary/[0.02] transition-all duration-300 group h-full">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <solution.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 font-display text-foreground">{solution.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section - Instagram Gradient */}
      <section className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #833AB4, #E1306C, #F77737)' }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
        <motion.div
          className="container-custom text-center relative z-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <h2 className="text-4xl font-bold text-white md:text-5xl font-display">
            Ready to Dominate Your Niche?
          </h2>
          <p className="mt-6 text-white/90 max-w-2xl mx-auto text-lg">
            Join visionary businesses that trust us to build brands that scale. Let's map out your ultimate digital growth strategy.
          </p>
          <MagneticButton className="mt-10">
            <Button size="lg" className="text-base px-8 py-6 bg-white text-foreground hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5" asChild>
              <Link to="/contact">
                Book a Free Discovery Call <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </MagneticButton>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
