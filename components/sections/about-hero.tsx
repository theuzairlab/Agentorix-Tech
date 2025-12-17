"use client";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export function AboutHero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden pt-12 sm:pt-16 md:pt-20 mt-8 sm:mt-12 md:mt-16 mx-4 sm:mx-8 md:mx-12 lg:mx-16 rounded-t-[50px] sm:rounded-t-[75px] md:rounded-t-[100px] lg:rounded-t-[150px] bg-background">
      {/* Simple Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/10 border border-border mb-8">
            <Sparkles className="h-4 w-4 text-foreground" />
            <span className="text-sm font-medium text-foreground">About Agentorix-Tech</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
            Empowering Digital
            <br />
            Transformation
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            We are a multi-disciplinary technology & marketing company helping global brands 
            build digital efficiency, accelerate revenue, and automate operations.
          </p>
        </div>
      </div>
    </section>
  );
}

