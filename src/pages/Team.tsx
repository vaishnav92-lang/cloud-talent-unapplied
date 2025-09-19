// src/pages/Team.tsx
import React from "react";
import { Link } from "react-router-dom";

export default function Team() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-90" />
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(hsl(220 15% 15% / 0.3) 1px, transparent 1px),
              linear-gradient(90deg, hsl(220 15% 15% / 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Nav */}
      <nav className="relative z-20 flex items-center justify-between p-6">
        <Link
          to="/"
          className="text-2xl font-light tracking-tight text-foreground opacity-90 hover:opacity-100 transition-opacity"
        >
          Clout
        </Link>
        <div className="flex space-x-6">
          <Link to="/" className="text-muted-foreground hover:text-foreground font-mono text-sm">
            Home
          </Link>
          <Link to="/pricing" className="text-muted-foreground hover:text-foreground font-mono text-sm">
            Our Model
          </Link>
          <Link to="/blog" className="text-muted-foreground hover:text-foreground font-mono text-sm">
            Blog
          </Link>
        </div>
      </nav>

      {/* Content */}
      <section className="relative z-10 px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-foreground mb-4">
              Team
            </h1>
            <div className="w-16 h-px bg-accent opacity-60 mx-auto" />
            <p className="mt-4 text-muted-foreground font-mono text-sm tracking-wider uppercase opacity-70">
              Meet the people building Clout
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Vaishnav */}
            <article className="bg-card border border-border rounded-lg p-8 text-center hover:border-accent/30 transition-colors">
              <div className="w-32 h-32 rounded-lg overflow-hidden border border-accent/30 bg-accent/10 mx-auto mb-6">
                <img
                  src="/photo cropped.jpg"
                  alt="Vaishnav Sunil headshot"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="text-2xl font-medium text-foreground mb-2">Vaishnav Sunil</h3>
              <p className="text-accent font-mono text-sm mb-4 tracking-wide">Founder and CEO</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Vaishnav founded Clout after writing about talent markets and incentive design through his Substack newsletter Optima & Outliers, which led to his first client and an Emergent Ventures grant from economist Tyler Cowen. Previously, he worked at JP Morgan Asset Management and as CFO of SolarHome, a pay-as-you-go solar company in Southeast Asia. He hold an undergraduate degree in Computer Science from Nanyang Technological University and an MBA from MIT Sloan.
              </p>
            </article>

            {/* Jordan Rubin — Advisor */}
            <article className="bg-card border border-border rounded-lg p-8 text-center hover:border-accent/30 transition-colors">
              <div className="w-32 h-32 rounded-lg overflow-hidden mx-auto mb-6 bg-accent/10 border border-accent/30">
                <img
                  src="/JR Headshot.jpg"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="text-2xl font-medium text-foreground mb-2">Jordan Rubin</h3>
              <p className="text-accent font-mono text-sm mb-4 tracking-wide">Advisor</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Jordan is on garden leave after building the systematic buy-side alpha capture business at Two Sigma Investments. He currently blogs at FUTURE TOKENS on Substack. Jordan received a BS/BA degree in Economics from Wharton School at University of Pennsylvania. As advisor to Metaculus, he focuses on commercialization and monetization.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Corners */}
      <div className="absolute top-8 left-8 w-8 h-8 border-l border-t border-accent opacity-30" />
      <div className="absolute top-8 right-8 w-8 h-8 border-r border-t border-accent opacity-30" />
      <div className="absolute bottom-8 left-8 w-8 h-8 border-l border-b border-accent opacity-30" />
      <div className="absolute bottom-8 right-8 w-8 h-8 border-r border-b border-accent opacity-30" />
    </main>
  );
}
