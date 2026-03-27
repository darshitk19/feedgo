import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { motion, type Variants, AnimatePresence } from "framer-motion";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";

const plans = [
  {
    name: "Starter",
    price: "₹1,500",
    period: "/month",
    description: "Best for building an initial social presence.",
    features: [
      "8 Social Media Posts",
      "Brand-consistent designs",
      "Basic Caption Strategy",
      "Email Support",
    ],
    popular: false,
  },
  {
    name: "Growth",
    price: "₹5,000",
    period: "/month",
    description: "Ideal for dominating reach with video content.",
    features: [
      "12 Social Media Posts",
      "2 High-Retention Reels/Shorts",
      "Advanced Copywriting",
      "Festival Creatives",
      "Priority Support",
    ],
    popular: true,
  },
  {
    name: "Custom",
    price: "Tailored to You",
    period: "",
    description: "Completely customizable growth strategy.",
    features: [
      "Customizable Post Count",
      "Unlimited Reels/Shorts",
      "Complete Growth Strategy",
      "Full Social Media Management",
      "Dedicated Account Manager",
    ],
    popular: false,
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

const Pricing = () => {
  const [budget, setBudget] = useState(2000);
  const [userName, setUserName] = useState("");
  
  const posts = Math.floor((budget / 1000) * 4);
  const videos = Math.floor(budget / 2000);

  const getWhatsAppLink = () => {
    const namePrefix = userName ? `Hi, I'm ${userName}. ` : "Hi, ";
    const message = `${namePrefix}I want a custom plan:
Budget: ₹${budget.toLocaleString('en-IN')}
Posts: ${posts}
Videos: ${videos}`;
    return `https://wa.me/919313428775?text=${encodeURIComponent(message)}`;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding hero-gradient relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Plans</span>
            <h1 className="text-5xl font-bold md:text-6xl font-display mt-3 text-foreground">
              Simple, Transparent <span className="gradient-text">Plans</span>
            </h1>
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg">
              Choose the exact level of momentum you need. 
              No hidden fees, no long-term commitments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div 
            className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {plans.map((plan, index) => {
              const isCustom = plan.name === "Custom";
              const displayPrice = isCustom ? `₹${budget.toLocaleString('en-IN')}` : plan.price;
              const displayFeatures = isCustom 
                ? [
                    `${posts} Social Media Posts`,
                    `${videos} High-Retention Reels/Shorts`,
                    ...plan.features.slice(2)
                  ]
                : plan.features;

              return (
                <motion.div key={index} variants={fadeUpItem} className="flex h-full">
                  <SpotlightCard
                    className={`glass-card p-8 w-full relative transition-all duration-300 ${
                      plan.popular ? "instagram-border shadow-xl scale-[1.02] -translate-y-2 border-primary/20" : "hover:-translate-y-2"
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                        <span className="btn-instagram text-sm font-semibold px-5 py-2 rounded-full shadow-lg">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-8 pt-4">
                      <h3 className="text-2xl font-bold font-display text-foreground">{plan.name}</h3>
                      <div className="mt-6">
                        <span className="text-5xl font-bold font-display gradient-text">
                          {isCustom ? `₹${budget.toLocaleString('en-IN')}` : plan.price}
                        </span>
                        {plan.period && <span className="text-muted-foreground text-lg">{plan.period}</span>}
                      </div>
                      <p className="mt-4 text-muted-foreground">
                        {plan.description}
                      </p>

                      {isCustom && (
                        <div className="mt-8 px-2 text-left space-y-6">
                          <div className="space-y-2">
                            <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest pl-1">
                              Your Name
                            </label>
                            <Input
                              placeholder="Enter your name"
                              value={userName}
                              onChange={(e) => setUserName(e.target.value)}
                              className="bg-primary/5 border-primary/10 focus:ring-primary/20 h-11"
                            />
                          </div>

                          <div className="space-y-4">
                            <div className="flex justify-between items-center bg-primary/5 p-3 rounded-xl border border-primary/10">
                              <span className="text-sm font-semibold text-muted-foreground">Custom Budget:</span>
                              <span className="text-xl font-bold text-primary">
                                ₹{budget.toLocaleString('en-IN')}
                              </span>
                            </div>
                            <Slider
                              defaultValue={[2000]}
                              max={50000}
                              min={500}
                              step={500}
                              value={[budget]}
                              onValueChange={(val) => setBudget(val[0])}
                              className="py-4 cursor-pointer"
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    <ul className="space-y-4 mb-8">
                      {displayFeatures.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
                            <Check className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <MagneticButton className="w-full">
                      <Button
                        className={`w-full py-6 text-base font-semibold transition-all duration-300 ${
                          plan.popular 
                            ? "btn-instagram" 
                            : "hover:bg-primary hover:text-white"
                        }`}
                        variant={plan.popular ? "default" : "outline"}
                        asChild
                      >
                        {isCustom ? (
                          <a 
                            href={getWhatsAppLink()} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-full h-full"
                          >
                            Contact Us
                          </a>
                        ) : (
                          <Link to="/contact">
                            Get Started
                          </Link>
                        )}
                      </Button>
                    </MagneticButton>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground mt-12 text-lg"
          >
            No hidden costs, just clear value.
          </motion.p>
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
          transition={{ duration: 0.6, type: "spring" }}
        >
          <h2 className="text-4xl font-bold text-white md:text-5xl font-display">
            Not Sure Which Plan?
          </h2>
          <p className="mt-6 text-white/90 max-w-2xl mx-auto text-lg">
            Let's discuss your needs and map out the exact growth plan for your business.
          </p>
          <MagneticButton className="mt-10">
            <Button size="lg" className="text-base px-8 py-6 bg-white text-foreground hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5" asChild>
              <Link to="/contact">
                Talk to Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </MagneticButton>
        </motion.div>
      </section>
    </div>
  );
};

export default Pricing;
