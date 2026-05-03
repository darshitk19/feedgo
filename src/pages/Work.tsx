import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, X, Smartphone, Grid, ShoppingBag, Palette, Video } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Testimonials } from "@/components/sections/Testimonials";

// Import assets
import newYearPost from "@/assets/portfolio/new-year-post.png";
import uttarayanCard from "@/assets/portfolio/uttarayan-card.jpg";
import diwaliPost from "@/assets/portfolio/diwali-post.png";
import datalyncBranding from "@/assets/portfolio/datalync-branding.jpg";
import datalyncServices from "@/assets/portfolio/datalync-services.jpg";
import republicDayPost from "@/assets/portfolio/republic-day-post.jpg";
import aviraEximLogo from "@/assets/portfolio/avira-exim-logo.png";
import krishnaAgroLogo from "@/assets/portfolio/krishna-agro-logo.jpg";
import greenBrandLogo from "@/assets/portfolio/green-brand-logo.png";
import instagramStorySample from "@/assets/portfolio/instagram_story_sample.png";
import instagramPostSample from "@/assets/portfolio/instagram_post_sample.png";
import ecommerceProductSample from "@/assets/portfolio/ecommerce_product_sample.png";
import ramMandirStory from "@/assets/portfolio/1774512952339(1).png";
import aiVideoBg from "@/assets/portfolio/ai-video-bg.png";
import socialPostNew from "@/assets/portfolio/social-post-new.png";

// Import bottle project assets
import bottleRaw from "@/assets/portfolio/bottle_raw.jpg";
import bottleLifestyle from "@/assets/portfolio/bottle_lifestyle.jpg";
import bottleAction from "@/assets/portfolio/bottle_action.jpg";

// Import serum project assets
import serumRaw from "@/assets/portfolio/serum_raw.jpg";
import serumLifestyle from "@/assets/portfolio/serum_lifestyle.jpg";
import serumInfographic from "@/assets/portfolio/serum_infographic.jpg";

const categories = [
  { id: "ai-videos", label: "AI Videos", icon: Video },
  { id: "stories", label: "IG Stories", icon: Smartphone },
  { id: "posts", label: "Social Posts", icon: Grid },
  { id: "ecommerce", label: "E-commerce", icon: ShoppingBag },
  { id: "logos", label: "Branding", icon: Palette },
];

const portfolioData = {
  stories: [
    { image: instagramStorySample, title: "Brand Story Concept", size: "1080 x 1920" },
    { image: ramMandirStory, title: "Ram Mandir Festival Story", size: "1080 x 1920" },
    { image: republicDayPost, title: "Republic Day Story", size: "1080 x 1920" },
  ],
  posts: [
    { image: newYearPost, title: "New Year Greeting", client: "Datalync" },
    { image: diwaliPost, title: "Diwali Celebration", client: "Datalync" },
    { image: socialPostNew, title: "Strategic Content Post", client: "IT Startup" },
  ],
  ecommerce: [
    { 
      image: bottleRaw, 
      title: "1. Raw Product Image", 
      desc: "Initial raw shot provided by the client. Plain, unedited, and basic.",
      type: "Product: Steel Bottle"
    },
    { 
      image: bottleLifestyle, 
      title: "2. Lifestyle Edit (Flipkart)", 
      desc: "Transformed into a premium lifestyle image with high-end background.",
      type: "Product: Steel Bottle"
    },
    { 
      image: bottleAction, 
      title: "3. Action Shot (Amazon)", 
      desc: "Showing the product in use at the gym to drive higher engagement.",
      type: "Product: Steel Bottle"
    },
    { 
      image: serumRaw, 
      title: "4. Raw Product Image", 
      desc: "Initial serum bottle shot on a plain surface. Lacks depth.",
      type: "Product: Facial Serum"
    },
    { 
      image: serumLifestyle, 
      title: "5. Creative Lifestyle Shot", 
      desc: "High-end aesthetic created to appeal to skincare customers.",
      type: "Product: Facial Serum"
    },
    { 
      image: serumInfographic, 
      title: "6. Educational Infographic", 
      desc: "Added 'How to Use' instructions directly on a lifestyle image.",
      type: "Product: Facial Serum"
    },
  ],
  logos: [
    { image: datalyncBranding, title: "Datalync Solution", industry: "IT Services" },
    { image: datalyncServices, title: "Service Showcase", industry: "IT Services" },
    { image: aviraEximLogo, title: "Avira Exim Logo", industry: "Export" },
    { image: krishnaAgroLogo, title: "Krishna Agro Logo", industry: "Agriculture" },
    { image: greenBrandLogo, title: "Eco Brand Identity", industry: "Corporate" },
  ],
};

const Work = () => {
  const [activeTab, setActiveTab] = useState("ai-videos");
  const [selectedImage, setSelectedImage] = useState<{ image: string; title: string } | null>(null);

  const closeModal = useCallback(() => setSelectedImage(null), []);

  useEffect(() => {
    if (!selectedImage) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, closeModal]);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/5 blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
              Showcase 2026
            </span>
            <h1 className="text-5xl md:text-7xl font-bold font-display text-foreground tracking-tight">
              Selected <span className="gradient-text">Works</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We don't just design; we create visual experiences that drive growth
              and build lasting brand value across digital platforms.
            </p>
          </motion.div>

          {/* Navigation Tabs */}
          <div className="mt-16 flex justify-center">
            <div className="inline-flex p-1.5 bg-secondary/50 backdrop-blur-xl rounded-2xl border border-border/50 shadow-2xl">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`relative flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${activeTab === cat.id ? "text-white" : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {activeTab === cat.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary shadow-lg shadow-primary/25 rounded-xl z-0"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <cat.icon className={`relative z-10 h-4 w-4 ${activeTab === cat.id ? "text-white" : ""}`} />
                  <span className="relative z-10">{cat.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="pb-32 min-h-[600px]">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {activeTab === "ai-videos" && (
                <div className="max-w-5xl mx-auto px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="group relative overflow-hidden rounded-[3.5rem] p-8 md:p-20 text-center bg-black border border-primary/20 shadow-[0_0_50px_rgba(var(--primary),0.1)]"
                  >
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0">
                      <img 
                        src={aiVideoBg} 
                        alt="AI Video Background" 
                        className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background/90"></div>
                    </div>

                    <div className="relative z-10">
                      <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="w-24 h-24 bg-primary/20 backdrop-blur-md rounded-3xl flex items-center justify-center mx-auto mb-10 border border-primary/30 group-hover:rotate-6 transition-all duration-500"
                      >
                        <Video className="h-12 w-12 text-primary" />
                      </motion.div>
                      
                      <h2 className="text-4xl md:text-6xl font-bold font-display mb-8 tracking-tight text-white">
                        AI Video <span className="gradient-text">Showcase</span>
                      </h2>
                      
                      <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                        Step into the future of digital storytelling. We leverage advanced AI to create high-impact, cinematic video content that captures attention and drives conversions.
                      </p>
                      
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Button size="lg" className="rounded-full px-12 h-16 text-lg font-bold group shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300" asChild>
                          <a href="https://drive.google.com/drive/folders/1j9MbpCGLkVq_CGjTNF2Co2eJ3daEi2jW?usp=sharing" target="_blank" rel="noopener noreferrer">
                            Watch AI Generated Videos <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                          </a>
                        </Button>
                      </div>
                      
                      <div className="mt-12 flex items-center justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="text-xs font-bold uppercase tracking-widest text-white/60">Powered by cutting-edge AI</div>
                      </div>
                    </div>
                    
                    {/* Glowing Orbs */}
                    <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-[100px] group-hover:bg-primary/30 transition-colors duration-700"></div>
                    <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent/20 rounded-full blur-[100px] group-hover:bg-accent/30 transition-colors duration-700"></div>
                  </motion.div>
                </div>
              )}

              {activeTab === "stories" && (
                <div className="flex flex-wrap justify-center gap-12">
                  {portfolioData.stories.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="group cursor-pointer"
                      onClick={() => setSelectedImage({ image: item.image, title: item.title })}
                    >
                      <div className="relative w-[280px] h-[500px] bg-black rounded-[40px] p-3 shadow-2xl ring-4 ring-muted group-hover:ring-primary transition-all duration-500 overflow-hidden">
                        {/* iPhone Notch Style */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20"></div>
                        <div className="w-full h-full rounded-[30px] overflow-hidden relative">
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                            <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                              <p className="text-primary text-[10px] font-bold uppercase tracking-widest mb-2">Instagram Story</p>
                              <h3 className="text-white font-bold text-lg leading-tight">{item.title}</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === "posts" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {portfolioData.posts.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="group relative aspect-square overflow-hidden rounded-3xl bg-secondary/30 border border-border/50 cursor-pointer shadow-xl"
                      onClick={() => setSelectedImage({ image: item.image, title: item.title })}
                    >
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                        <div className="text-center p-6 scale-90 group-hover:scale-100 transition-transform duration-300">
                          <p className="text-white/80 text-xs font-medium mb-1 uppercase tracking-wider">{item.client}</p>
                          <h3 className="text-white text-xl font-bold">{item.title}</h3>
                          <div className="mt-4 w-10 h-10 rounded-full bg-white flex items-center justify-center mx-auto shadow-lg">
                            <ArrowRight className="h-4 w-4 text-black" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === "ecommerce" && (
                <div className="flex flex-col gap-16 pb-12 pt-4">
                  {/* Row Helper for 2x3 Grid with Arrows */}
                  {[0, 3].map((startIndex) => (
                    <div key={startIndex} className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-4">
                      {portfolioData.ecommerce.slice(startIndex, startIndex + 3).map((item, idx) => (
                        <div key={idx} className="flex flex-col lg:flex-row items-center gap-4 w-full lg:w-1/3">
                          {/* Card Content - Fixed Height for Uniformity */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: (startIndex + idx) * 0.1 }}
                            className="w-full h-full"
                          >
                            <div className="group glass-card rounded-[2.5rem] overflow-hidden border border-border/50 shadow-2xl h-full flex flex-col min-h-[420px]">
                              <div className="aspect-square overflow-hidden bg-secondary/20 relative"
                                   onClick={() => setSelectedImage({ image: item.image, title: item.title })}>
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 cursor-pointer" />
                              </div>
                              <div className="p-8 flex-grow flex flex-col">
                                <span className="text-[10px] font-bold text-accent uppercase tracking-[0.3em] mb-3 block">{item.type}</span>
                                <h3 className="text-xl font-bold font-display mb-3 leading-tight h-14 overflow-hidden">{item.title}</h3>
                                <p className="text-muted-foreground text-xs leading-relaxed line-clamp-3">
                                  {item.desc}
                                </p>
                              </div>
                            </div>
                          </motion.div>

                          {/* Arrow Connector */}
                          {idx < 2 && (
                            <div className="flex items-center justify-center p-2 text-primary/30 rotate-90 lg:rotate-0 flex-shrink-0">
                               <ArrowRight className="h-8 w-8 lg:h-10 lg:w-10 stroke-[1.5px]" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "logos" && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                  {portfolioData.logos.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="group bg-white dark:bg-card p-8 md:p-12 rounded-[2rem] border border-border/40 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-2xl cursor-pointer flex flex-col items-center justify-center text-center"
                      onClick={() => setSelectedImage({ image: item.image, title: item.title })}
                    >
                      <div className="w-24 h-24 md:w-40 md:h-40 relative mb-8">
                        <img src={item.image} alt={item.title} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2">{item.industry}</span>
                      <h3 className="font-bold text-foreground text-lg">{item.title}</h3>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 backdrop-blur-xl p-4 md:p-10"
            onClick={closeModal}
          >

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-7xl h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative group/img">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-[0_0_80px_rgba(255,255,255,0.1)] border border-white/10"
                />
                {/* Close Button on right corner of the image */}
                <button
                  className="absolute -top-4 -right-4 z-20 bg-white text-black rounded-full p-2.5 shadow-2xl hover:bg-accent hover:text-white transition-all duration-200 border-[3px] border-black flex items-center justify-center"
                  onClick={closeModal}
                  aria-label="Close"
                >
                  <X className="h-6 w-6 stroke-[2.5px]" />
                </button>
              </div>
              <div className="mt-8 text-center">
                <motion.h2
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-white text-2xl md:text-3xl font-bold mb-2 font-display"
                >
                  {selectedImage.title}
                </motion.h2>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-white/40 text-sm tracking-widest uppercase"
                >
                  Portfolio Showcase 2026
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container-custom">
          <div className="relative overflow-hidden rounded-[3rem] p-12 md:p-24 text-center bg-foreground text-background">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tight mb-8">
                Your brand deserves <br /> better design.
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12">
                Join 50+ brands that have scaled their social media and store presence with our creative solutions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-black hover:bg-white/90 px-10 h-16 text-lg font-bold rounded-full group" asChild>
                  <Link to="/contact">
                    Get a Free Audit <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;


