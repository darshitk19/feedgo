import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ImageIcon, 
  Video, 
  PenTool, 
  Calendar, 
  Palette, 
  PartyPopper,
  ArrowRight,
  ChevronDown,
  Check
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, type Variants } from "framer-motion";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { MagneticButton } from "@/components/ui/magnetic-button";

const services = [
  {
    icon: ImageIcon,
    title: "Premium Post Design",
    description: "Clean, thumb-stopping post designs that elevate your brand. We create visuals with consistent branding and powerful messaging.",
    features: ["Brand-consistent visuals", "High-end graphics", "Platform-optimized", "Clear messaging"],
    details: {
      whatYouGet: [
        "Custom designed posts for Instagram, Facebook, LinkedIn",
        "Brand color palette and typography integration",
        "Multiple size variations for different platforms",
        "High-resolution files ready for posting"
      ],
      idealFor: "Businesses wanting a premium, highly professional aesthetic without the headache."
    }
  },
  {
    icon: Video,
    title: "High-Retention Reels & Shorts",
    description: "Engaging, algorithm-optimized video content designed to maximize reach and watch time across all major platforms.",
    features: ["Algorithm-optimized", "Trending audio", "High retention", "Multi-platform"],
    details: {
      whatYouGet: [
        "Data-driven short-form video hooks & editing",
        "Trending audio and format strategies",
        "Engaging captions and text overlays",
        "Configured for Instagram Reels and YouTube Shorts"
      ],
      idealFor: "Brands wanting explosive organic reach and follower growth."
    }
  },
  {
    icon: PenTool,
    title: "Strategic Copywriting",
    description: "Captions, stories, and hooks written to drive real conversions. We write to sell, educate, and build community trust.",
    features: ["Conversion focused", "Brand voice matching", "High engagement", "SEO optimized"],
    details: {
      whatYouGet: [
        "Monthly content calendar structure",
        "Engaging captions with targeted hashtags",
        "Persuasive hooks that stop the scroll",
        "Direct-response strategies included"
      ],
      idealFor: "Founders who know they need to post but freeze when writing."
    }
  },
  {
    icon: Calendar,
    title: "Complete Growth Management",
    description: "End-to-end management of your social presence. We handle the content, posting, and scheduling so you don't have to.",
    features: ["Content calendar", "Scheduled posting", "Community care", "Monthly analytics"],
    details: {
      whatYouGet: [
        "Total hands-off social media management",
        "Consistent daily/weekly strategic posting",
        "Analytics monitoring and course-correction",
        "Community engagement and direct message handling"
      ],
      idealFor: "Businesses that want completely hands-free online growth."
    }
  },
  {
    icon: Palette,
    title: "Visual Identity Systems",
    description: "Establish a gorgeous, recognizable brand across the internet. Logo usage, strict palettes, and premium templates.",
    features: ["Brand guidelines", "Color palettes", "Font systems", "Custom templates"],
    details: {
      whatYouGet: [
        "Complete brand style guide document",
        "Logo variations and precise usage rules",
        "Color palette and modern typography",
        "Ready-to-use premium social media templates"
      ],
      idealFor: "New brands or businesses needing a massive visual overhaul."
    }
  },
  {
    icon: PartyPopper,
    title: "Targeted Campaign Assets",
    description: "High-converting creatives for sudden sales, product launches, or major holidays to grab immediate attention.",
    features: ["Launch assets", "Offer creatives", "Campaign visuals", "Rapid delivery"],
    details: {
      whatYouGet: [
        "Festival-themed striking designs",
        "High-conversion sale and offer graphics",
        "Product launch hype materials",
        "Rapid turnaround for time-sensitive promotions"
      ],
      idealFor: "Companies relying on seasonal sales or fast-paced promotions."
    }
  },
];

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

const ServiceCard = ({ service }: { service: typeof services[0] }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <SpotlightCard className={cn("h-full cursor-pointer", isExpanded && "ring-2 ring-primary/20")}>
      <div 
        className="p-6 h-full flex flex-col"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 mb-4 transition-transform duration-300 group-hover:scale-110">
          <service.icon className="h-7 w-7 text-primary" />
          <div className="absolute inset-0 rounded-xl bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className="text-xl font-semibold font-display text-foreground group-hover:text-primary transition-colors">
            {service.title}
          </h3>
          <ChevronDown 
            className={cn(
              "h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-300",
              isExpanded && "rotate-180 text-primary"
            )} 
          />
        </div>
        
        <p className="text-muted-foreground text-sm mb-4 flex-grow">{service.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-2">
          {service.features.map((feature, idx) => (
            <span 
              key={idx} 
              className="inline-flex items-center text-xs px-2.5 py-1 rounded-full bg-secondary text-foreground/80 transition-colors group-hover:bg-primary/10"
            >
              {feature}
            </span>
          ))}
        </div>

        <div 
          className={cn(
            "overflow-hidden transition-all duration-300 ease-in-out",
            isExpanded ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
          )}
        >
          <div className="pt-4 border-t border-border/50">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-sm text-primary mb-2">What You Get:</h4>
                <ul className="space-y-2">
                  {service.details.whatYouGet.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                <p className="text-sm">
                  <span className="font-medium text-foreground">Ideal for: </span>
                  <span className="text-muted-foreground">{service.details.idealFor}</span>
                </p>
              </div>
              
              <Button 
                size="sm" 
                className="w-full btn-instagram"
                onClick={(e) => {
                  e.stopPropagation();
                  window.location.href = '/contact';
                }}
              >
                Inquire About Service <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
};

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding hero-gradient">
        <motion.div 
          className="container-custom text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold md:text-5xl font-display text-foreground">
            Our Elite <span className="gradient-text">Solutions</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg pt-2">
            The premium systems and creative packages we use to build massive online authority for our clients.
          </p>
          <p className="mt-6 text-sm text-accent font-medium animate-pulse">
            Click on any service card to learn more ↓
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background pb-32">
        <div className="container-custom">
          <motion.div 
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeUpItem}>
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Instagram Gradient */}
      <section className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #833AB4, #E1306C, #F77737)' }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
        <motion.div 
          className="container-custom text-center relative z-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold md:text-4xl text-white font-display">
            Ready to Dominate Your Competitors?
          </h2>
          <p className="mt-4 text-white/90 max-w-2xl mx-auto text-lg">
            Let's dissect your current brand presence and map out exactly how we can accelerate your growth.
          </p>
          <MagneticButton className="mt-8">
            <Button size="lg" className="bg-white text-base px-8 py-6 text-foreground hover:bg-white/90 shadow-xl" asChild>
              <Link to="/contact">
                Get a Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </MagneticButton>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
