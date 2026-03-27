import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Sparkles, Wand2, CheckCircle, Send } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Understand",
    description: "We start by understanding your business, brand voice, target audience, and goals. This forms the foundation of your content strategy.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Generate",
    description: "Our team creates content tailored to your brand—posts, captions, and more. For video content, we use modern tools to produce engaging reels and shorts.",
  },
  {
    number: "03",
    icon: Wand2,
    title: "Customize",
    description: "We refine everything to align perfectly with your brand guidelines and messaging. Every detail is reviewed for quality.",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Review",
    description: "You review and approve the content before it goes live. We make revisions until you're 100% satisfied.",
  },
  {
    number: "05",
    icon: Send,
    title: "Deliver",
    description: "Content is delivered on schedule—either for your approval or directly posted if you've chosen our management service.",
  },
];

const HowItWorks = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding hero-gradient relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="container-custom text-center relative z-10">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Process</span>
          <h1 className="text-5xl font-bold md:text-6xl font-display mt-3 text-foreground">
            Our <span className="gradient-text">Process</span>
          </h1>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            A simple, transparent process designed to deliver exceptional results. 
            From understanding your needs to delivering polished content.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative flex gap-8 pb-16 last:pb-0 group">
                {/* Connector Line */}
                {index !== steps.length - 1 && (
                  <div className="absolute left-7 top-16 h-full w-0.5 bg-gradient-to-b from-primary/30 to-accent/30" />
                )}
                
                {/* Step Number */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300 font-display" style={{ background: 'linear-gradient(135deg, #833AB4, #E1306C)' }}>
                    {step.number}
                  </div>
                </div>
                
                {/* Content */}
                <div className="glass-card rounded-2xl p-8 flex-1 hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                      <step.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold font-display text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-4xl font-bold md:text-5xl font-display mt-3 text-foreground">
              Why This Process Works
            </h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="glass-card rounded-2xl p-8 text-center hover:-translate-y-1 transition-all duration-300">
              <div className="text-5xl font-bold gradient-text mb-3 font-display">100%</div>
              <div className="font-bold text-lg mb-2 font-display text-foreground">Satisfaction Guarantee</div>
              <p className="text-muted-foreground">We revise until you're happy</p>
            </div>
            <div className="glass-card rounded-2xl p-8 text-center hover:-translate-y-1 transition-all duration-300">
              <div className="text-5xl font-bold gradient-text mb-3 font-display">48h</div>
              <div className="font-bold text-lg mb-2 font-display text-foreground">Fast Turnaround</div>
              <p className="text-muted-foreground">Quick delivery without compromise</p>
            </div>
            <div className="glass-card rounded-2xl p-8 text-center hover:-translate-y-1 transition-all duration-300">
              <div className="text-5xl font-bold gradient-text mb-3 font-display">Quality</div>
              <div className="font-bold text-lg mb-2 font-display text-foreground">Human-Reviewed Content</div>
              <p className="text-muted-foreground">Every piece meets our standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Instagram Gradient */}
      <section className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #833AB4, #E1306C, #F77737)' }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
        <div className="container-custom text-center relative z-10">
          <h2 className="text-4xl font-bold text-white md:text-5xl font-display">
            Ready to Get Started?
          </h2>
          <p className="mt-6 text-white/90 max-w-2xl mx-auto text-lg">
            Let's begin the journey to transform your social media presence.
          </p>
          <Button size="lg" className="mt-10 text-base px-8 py-6 bg-white text-foreground hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5" asChild>
            <Link to="/contact">
              Start Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
