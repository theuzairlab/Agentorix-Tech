"use client";

import { motion } from "motion/react";
import { Mail, Phone, MessageSquare, MapPin } from "lucide-react";

export function ContactHero() {
  const handleLocationClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('office-locations');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };
  return (
    <section className="relative py-24 overflow-hidden pt-32 rounded-b-[200px] bg-background z-5">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/10 border border-border">
            <span className="text-xs font-semibold tracking-[0.25em] text-foreground">CONTACT US</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
            Let's Start a Conversation
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with our team. We're here to help you transform your business with cutting-edge solutions.
          </p>

          {/* Quick Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            <motion.a
              href="mailto:info@agentorix-tech.com"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card border border-border hover:bg-foreground/5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="h-6 w-6 text-foreground" />
              </div>
              <div className="text-center">
                <div className="text-sm text-muted-foreground mb-1">Email</div>
                <div className="text-foreground font-semibold">info@agentorix-tech.com</div>
              </div>
            </motion.a>

            <motion.a
              href="tel:+92 333 1916991"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card border border-border hover:bg-foreground/5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="h-6 w-6 text-foreground" />
              </div>
              <div className="text-center">
                <div className="text-sm text-muted-foreground mb-1">Phone</div>
                <div className="text-foreground font-semibold">+92 333 1916991</div>
              </div>
            </motion.a>

            <motion.a
              href="https://wa.me/+923331916991"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card border border-border hover:bg-foreground/5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageSquare className="h-6 w-6 text-foreground" />
              </div>
              <div className="text-center">
                <div className="text-sm text-muted-foreground mb-1">WhatsApp</div>
                <div className="text-foreground font-semibold">Chat Now</div>
              </div>
            </motion.a>

            <motion.a
              href="#office-locations"
              onClick={handleLocationClick}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card border border-border hover:bg-foreground/5 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MapPin className="h-6 w-6 text-foreground" />
              </div>
              <div className="text-center">
                <div className="text-sm text-muted-foreground mb-1">Location</div>
                <div className="text-foreground font-semibold">Multiple Offices</div>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

