import React from 'react';
import { Link } from 'react-router-dom';

const Team = () => {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-90" />
      
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(hsl(220 15% 15% / 0.3) 1px, transparent 1px),
              linear-gradient(90deg, hsl(220 15% 15% / 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between p-6">
        <Link to="/" className="text-2xl font-light tracking-tight text-foreground opacity-90 hover:opacity-100 transition-opacity">
          Clout
        </Link>
        <div className="flex space-x-6">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors font-mono text-sm">Home</Link>
          <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors font-mono text-sm">Our Model</Link>
          <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors font-mono text-sm">Blog</Link>
        </div>
      </nav>

      {/* Main content */}
      <div className="relative z-10 px-6 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Page header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-foreground mb-4">
              Team
            </h1>
            <div className="w-16 h-px bg-accent opacity-60 mx-auto" />
            <p className="mt-4 text-muted-foreground font-mono text-sm tracking-wider uppercase opacity-70">
              Meet the people building Clout
            </p>
          </div>

          {/* Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            
            {/* Vaishnav Sunil - Founder and CEO */}
            <div className="bg-card border border-border rounded-lg p-8 text-center hover:border-accent/30 transition-colors">
              <div className="w-32 h-32 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg border border-accent/30 flex items-center justify-center mx-auto mb-6">
                <span className="text-accent font-mono text-sm opacity-60">Photo</span>
              </div>
              <h3 className="text-2xl font-medium text-foreground mb-2">
                Vaishnav Sunil
              </h3>
              <p className="text-accent font-mono text-sm mb-4 tracking-wide">
                Founder and CEO
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Vaishnav founded Clout after receiving an Emergent Ventures grant from economist Tyler Cowen to explore talent markets. He spent his early career across investing roles at JP Morgan Asset Management and Forum Capital, and then as CFO of SolarHome, the first pay-as-you-go solar company in Southeast Asia. He holds an MBA from MIT Sloan and an undergraduate degree in Computer Science degree from Nanyang Technological University. He writes on Substack at www.optimaloutliers.com
              </p>
            </div>

            {/* Jordan Rubin - Advisor */}
            <div className="bg-card border border-border rounded-lg p-8 text-center hover:border-accent/30 transition-colors">
              <img
                src="/JR Headshot.jpg"   /* file lives in /public */
                alt="Jordan Rubin headshot"
                className="w-32 h-32 object-cover rounded-lg border border-accent/30 mx-auto mb-6"
                loading="lazy"
              />
              <h3 className="text-2xl font-medium text-foreground mb-2">
                Jordan Rubin
              </h3>
              <p className="text-accent font-mono text-sm mb-4 tracking-wide">
                Advisor
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Jordan is on garden leave after building the systematic buy-side alpha capture business at Two Sigma Investments. He currently blogs at FUTURE TOKENS on Substack. Jordan received a BS/BA degree in Economics from Wharton School at University of Pennsylvania. As advisor to Metaculus, he focuses on commercialization and monetization.
              </p>
            </div>

          </div>

        </div>
      </div>
      
      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-8 h-8 border-l border-t border-accent opacity-30" />
      <div className="absolute top-8 right-8 w-8 h-8 border-r border-t border-accent opacity-30" />
      <div className="absolute bottom-8 left-8 w-8 h-8 border-l border-b border-accent opacity-30" />
      <div className="absolute bottom-8 right-8 w-8 h-8 border-r border-b border-accent opacity-30" />
    </main>
  );
};

export default Team;
