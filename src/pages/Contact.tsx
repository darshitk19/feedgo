import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Instagram, MessageCircle, Send, Loader2 } from "lucide-react";
import emailjs from '@emailjs/browser';
import { toast } from "sonner";
import { motion, type Variants } from "framer-motion";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      // 1. Send contact us notification to you
      await emailjs.send(
        serviceId,
        'template_izfwx6a',
        {
          from_name: formData.name,
          reply_to: formData.email,
          phone_number: formData.phone,
          company_name: formData.company,
          message: formData.message,
        },
        publicKey
      );

      // 2. Send auto-reply to the user's entered email
      await emailjs.send(
        serviceId,
        'template_4p3tceg',
        {
          to_name: formData.name,
          reply_to: formData.email,
          // passing the whole formData as a fallback in case your template uses other variables
          ...formData
        },
        publicKey
      );

      toast.success("Message sent successfully! We will get back to you soon.");
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please check your credentials or try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding hero-gradient pt-24 pb-20">
        <motion.div 
          className="container-custom text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-2 block">Let's Talk</span>
          <h1 className="text-4xl font-bold md:text-5xl font-display text-foreground">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg pt-2">
            Ready to completely dominate your market? Drop us a message and we'll map out a custom growth strategy for your brand.
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background pb-32">
        <div className="container-custom">
          <motion.div 
            className="grid gap-12 lg:grid-cols-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Contact Form */}
            <motion.div variants={fadeUpItem} className="h-full">
              <SpotlightCard className="glass-card rounded-2xl p-8 md:p-10 border-primary/10">
                <h2 className="text-3xl font-bold mb-8 font-display text-foreground">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your business and how we can help..."
                    rows={5}
                    required
                  />
                </div>

                <MagneticButton className="w-full mt-4">
                  <Button type="submit" size="lg" className="w-full btn-instagram h-14 text-md" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        Sending... <Loader2 className="ml-2 h-5 w-5 animate-spin" />
                      </>
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </MagneticButton>
              </form>
              </SpotlightCard>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={fadeUpItem} className="space-y-8 pl-0 lg:pl-10 flex flex-col justify-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 font-display text-foreground">Direct Access</h2>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  Prefer to reach out directly? Connect with us through any of
                  these channels. We typically respond within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href="mailto:feedgo.contact@gmail.com"
                  className="flex items-center gap-4 p-4 glass-card rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <div className="text-muted-foreground">feedgo.contact@gmail.com</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/919313428775"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 glass-card rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10">
                    <MessageCircle className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">WhatsApp</div>
                    <div className="text-muted-foreground">+91 93134 28775</div>
                  </div>
                </a>

                <a
                  href="tel:+919313428775"
                  className="flex items-center gap-4 p-4 glass-card rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Phone</div>
                    <div className="text-muted-foreground">+91 93134 28775</div>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/feedgo.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 glass-card rounded-lg hover:shadow-md transition-shadow group"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full" style={{ background: 'linear-gradient(135deg, #833AB4, #E1306C, #F77737)' }}>
                    <Instagram className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Instagram</div>
                    <div className="text-muted-foreground">@feedgo.in</div>
                  </div>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
