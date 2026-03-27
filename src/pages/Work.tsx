import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";

import newYearPost from "@/assets/portfolio/new-year-post.png";
import uttarayanCard from "@/assets/portfolio/uttarayan-card.jpg";
import diwaliPost from "@/assets/portfolio/diwali-post.png";
import datalyncBranding from "@/assets/portfolio/datalync-branding.jpg";
import datalyncServices from "@/assets/portfolio/datalync-services.jpg";
import republicDayPost from "@/assets/portfolio/republic-day-post.jpg";
import aviraEximLogo from "@/assets/portfolio/avira-exim-logo.png";
import krishnaAgroLogo from "@/assets/portfolio/krishna-agro-logo.jpg";
import greenBrandLogo from "@/assets/portfolio/green-brand-logo.png";

const portfolioItems = [
  // Logo Designs - Newest
  {
    image: aviraEximLogo,
    title: "Avira Exim Logo",
    category: "Logo Design",
    client: "Avira Exim",
    date: "2026-03-01",
  },
  {
    image: krishnaAgroLogo,
    title: "Krishna Agro Center Logo",
    category: "Logo Design",
    client: "Krishna Agro Center",
    date: "2026-02-20",
  },
  {
    image: greenBrandLogo,
    title: "Eco Brand Identity Logo",
    category: "Logo Design",
    client: "Corporate Client",
    date: "2026-02-10",
  },
  // 2026 - Festival Creatives
  {
    image: republicDayPost,
    title: "Republic Day Celebration",
    category: "Festival Creative",
    client: "Feedgo",
    date: "2026-01-26",
  },
  {
    image: uttarayanCard,
    title: "Uttarayan Festival Card",
    category: "Festival Creative",
    client: "Corporate Client",
    date: "2026-01-14",
  },
  {
    image: newYearPost,
    title: "New Year Greeting Post",
    category: "Festival Creative",
    client: "Datalync Solution",
    date: "2026-01-01",
  },
  {
    image: diwaliPost,
    title: "Diwali Greeting Design",
    category: "Festival Creative",
    client: "Datalync Solution",
    date: "2025-10-20",
  },
  {
    image: datalyncBranding,
    title: "Company Branding Post",
    category: "Brand Identity",
    client: "Datalync Solution",
    date: "2025-09-01",
  },
  {
    image: datalyncServices,
    title: "Services Showcase",
    category: "Brand Identity",
    client: "Datalync Solution",
    date: "2025-08-15",
  },
];

const Work = () => {
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
    <div>
      {/* Hero Section */}
      <section className="section-padding hero-gradient">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold md:text-5xl font-display text-foreground">
            Our <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Browse our portfolio of social media creatives, brand designs, 
            and festival content created for our clients.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item, index) => (
              <div 
                key={index} 
                className="group glass-card rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                onClick={() => setSelectedImage({ image: item.image, title: item.title })}
              >
                <div className="aspect-square overflow-hidden bg-secondary">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <span className="text-xs font-medium text-accent uppercase tracking-wide">
                    {item.category}
                  </span>
                  <h3 className="font-semibold mt-1 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.client}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <div 
            className="relative inline-block max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl block"
            />
            <button
              className="absolute top-0 right-0 z-10 bg-black/70 hover:bg-black/90 text-white rounded-bl-lg p-2 transition-colors"
              onClick={closeModal}
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}

      {/* Services Preview */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold md:text-4xl font-display text-foreground">
              What We Create
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              From festival creatives to brand identity—we create content that connects.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["Festival Posts", "Brand Identity", "Social Reels", "Deal Creatives"].map((type, index) => (
              <div key={index} className="glass-card rounded-lg p-4 text-center hover:-translate-y-1 transition-all duration-300">
                <span className="font-medium text-foreground">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Instagram Gradient */}
      <section className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #833AB4, #E1306C, #F77737)' }}>
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl font-bold text-white md:text-4xl font-display">
            Want Similar Results?
          </h2>
          <p className="mt-4 text-white/90 max-w-2xl mx-auto">
            Let's create stunning content for your brand.
          </p>
          <Button size="lg" className="mt-8 bg-white text-foreground hover:bg-white/90 shadow-xl" asChild>
            <Link to="/contact">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Work;
