"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function CTABanner() {
  return (
    <section className="py-24 relative overflow-hidden -mt-32 pt-40 rounded-b-[150px] bg-background border-t border-border z-1">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Start Your Project Today
          </h2>
          
          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's Build Your Digital Future Together
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="group text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
            >
              <Link href="/contact" className="flex items-center justify-center">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-foreground/30 bg-transparent text-foreground hover:bg-foreground/10 hover:border-foreground/50"
            >
              <Link href="https://wa.me/+923331916991" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
              Schedule Consultation
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-muted-foreground">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">50+ Clients</div>
              <div className="text-sm">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">100% Satisfaction</div>
              <div className="text-sm">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">24/7 Support</div>
              <div className="text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

