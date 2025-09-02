import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
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
          clout
        </Link>
        <div className="flex space-x-6">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors font-mono text-sm">Home</Link>
          <Link to="/team" className="text-muted-foreground hover:text-foreground transition-colors font-mono text-sm">Team</Link>
          <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors font-mono text-sm">Pricing</Link>
        </div>
      </nav>

      {/* Main content */}
      <div className="relative z-10 px-6 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Page header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-foreground mb-4">
              Blog
            </h1>
            <div className="w-16 h-px bg-accent opacity-60 mx-auto" />
            <p className="mt-4 text-muted-foreground font-mono text-sm tracking-wider uppercase opacity-70">
              Thoughts on talent, startups, and networks
            </p>
          </div>

          {/* Substack embed sections */}
          <div className="space-y-12">
            
            {/* Post 1 - Startup Hiring */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-xl font-medium text-foreground mb-4 font-mono">
                Startup Hiring: Solving the Problem of Incentives and Trust
              </h2>
              <p className="text-muted-foreground text-sm mb-6">
                How early-stage companies can find "diamonds in the rough" through incentivized referral networks.
              </p>
              
              {/* Substack embed placeholder */}
              <div className="border border-border rounded-lg p-4 bg-muted/20">
                <p className="text-muted-foreground font-mono text-xs mb-4 tracking-wider uppercase opacity-60">
                  Substack Embed
                </p>
                <iframe 
                  src="https://www.optimaloutliers.com/embed" 
                  width="100%" 
                  height="400"
                  className="rounded border-0"
                  style={{ background: 'transparent' }}
                  title="Optima & Outliers Substack"
                />
              </div>
            </div>

            {/* Post 2 placeholder */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-xl font-medium text-foreground mb-4 font-mono">
                [Second Post Title]
              </h2>
              <p className="text-muted-foreground text-sm mb-6">
                [Brief description of the second post]
              </p>
              
              <div className="border border-border rounded-lg p-4 bg-muted/20">
                <p className="text-muted-foreground font-mono text-xs mb-4 tracking-wider uppercase opacity-60">
                  Substack Embed
                </p>
                <div className="h-64 flex items-center justify-center text-muted-foreground font-mono text-sm">
                  [Add second Substack embed iframe here]
                </div>
              </div>
            </div>

            {/* Post 3 placeholder */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-xl font-medium text-foreground mb-4 font-mono">
                [Third Post Title]
              </h2>
              <p className="text-muted-foreground text-sm mb-6">
                [Brief description of the third post]
              </p>
              
              <div className="border border-border rounded-lg p-4 bg-muted/20">
                <p className="text-muted-foreground font-mono text-xs mb-4 tracking-wider uppercase opacity-60">
                  Substack Embed
                </p>
                <div className="h-64 flex items-center justify-center text-muted-foreground font-mono text-sm">
                  [Add third Substack embed iframe here]
                </div>
              </div>
            </div>

          </div>

          {/* Link to full Substack */}
          <div className="mt-16 text-center">
            <a 
              href="https://www.optimaloutliers.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-accent text-accent font-medium rounded-md transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:shadow-lg"
            >
              <span className="font-mono tracking-wide">Read More on Substack</span>
            </a>
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

export default Blog;
