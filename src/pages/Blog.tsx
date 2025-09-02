{/* Substack subscription embed */}
          <div className="mb-16 flex justify-center">
            <div className="bg-card border border-border rounded-lg p-6 max-w-lg">
              <h2 className="text-lg font-medium text-foreground mb-4 text-center font-mono">
                Subscribe to Optima & Outliers
              </h2>
              <iframe 
                src="https://www.optimaloutliers.com/embed" 
                width="480" 
                height="320" 
                style={{ border: '1px solid hsl(220 15% 15%)', background: 'hsl(220 15% 8%)', maxWidth: '100%' }} 
                frameBorder="0" 
                scrolling="no"
                className="rounded"
              />
            </div>
          </div>

          {/* Featured blog posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Liquidity of Human Capital */}
            <a 
              href="https://www.optimaloutliers.com/p/liquid-vs-illiquid-careers" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              {/* Abstract image for liquidity concept */}
              <div className="h-48 bg-gradient-to-br from-accent/20 to-accent/5 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-20 h-20 text-accent opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                {/* Flow lines representing liquidity */}
                <div className="absolute inset-0">
                  <div className="absolute top-6 left-6 w-8 h-0.5 bg-accent opacity-30 transform -rotate-12 animate-pulse" style={{ animationDelay: '0s' }} />
                  <div className="absolute top-12 right-8 w-6 h-0.5 bg-accent opacity-25 transform rotate-12 animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <div className="absolute bottom-8 left-12 w-10 h-0.5 bg-accent opacity-20 transform rotate-6 animate-pulse" style={{ animationDelay: '1s' }} />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-medium text-foreground mb-3 group-hover:text-accent transition-colors">
                  Liquidity of Human Capital
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Exploring how career choices affect your professional mobility and market positioning in the talent ecosystem.
                </p>
                <div className="mt-4 text-accent font-mono text-xs tracking-wider uppercase opacity-60 group-hover:opacity-100 transition-opacity">
                  Read Article →
                </div>
              </div>
            </a>

            {/* Career Optionality */}
            <a 
              href="https://www.optimaloutliers.com/p/dissecting-career-optionality" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              {/* Abstract image for optionality/branching paths */}
              <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/5 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-20 h-20 text-blue-400 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                {/* Branching path network */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/2 left-1/4 w-3 h-3 border border-blue-400 opacity-20 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
                  <div className="absolute top-1/3 right-1/4 w-2 h-2 border border-purple-400 opacity-25 rounded-full animate-pulse" style={{ animationDelay: '0.7s' }} />
                  <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 border border-blue-400 opacity-15 rounded-full animate-pulse" style={{ animationDelay: '1.4s' }} />
                  {/* Connection lines */}
                  <svg className="absolute inset-0 w-full h-full opacity-15">
                    <line x1="25%" y1="50%" x2="75%" y2="33%" stroke="rgb(96 165 250)" strokeWidth="1" />
                    <line x1="33%" y1="67%" x2="75%" y2="33%" stroke="rgb(147 51 234)" strokeWidth="1" />
                  </svg>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-medium text-foreground mb-3 group-hover:text-accent transition-colors">
                  Career Optionality
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Understanding how to build and maintain career flexibility while maximizing long-term professional value.
                </p>
                <div className="mt-4 text-accent font-mono text-xs tracking-wider uppercase opacity-60 group-hover:opacity-100 transition-opacity">
                  Read Article →
                </div>
              </div>
            </a>

            {/* Poor Recruiting Decisions */}
            <a 
              href="https://www.optimaloutliers.com/p/recruiters-as-accidental-underwriters" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              {/* Abstract image for risk/cost concept */}
              <div className="h-48 bg-gradient-to-br from-red-500/20 to-orange-500/5 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-20 h-20 text-red-400 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                  </svg>
                </div>
                {/* Risk indicators - scattered warning dots */}
                <div className="absolute inset-0">
                  <div className="absolute top-4 right-4 w-2 h-2 bg-red-400 rounded-full opacity-40 animate-pulse" />
                  <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-orange-400 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <div className="absolute top-8 left-8 w-1 h-1 bg-red-400 rounded-full opacity-35 animate-pulse" style={{ animationDelay: '1s' }} />
                  <div className="absolute bottom-8 right-8 w-1.5 h-1.5 bg-orange-400 rounded-full opacity-25 animate-pulse" style={{ animationDelay: '1.5s' }} />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-medium text-foreground mb-3 group-hover:text-accent transition-colors">
                  Why You Pay for Others' Poor Recruiting Decisions
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  How traditional recruiting practices create hidden costs and why companies end up bearing the risk of poor hiring decisions.
                </p>
                <div className="mt-4 text-accent font-mono text-xs tracking-wider uppercase opacity-60 group-hover:opacity-100 transition-opacity">
                  Read Article →
                </div>
              </div>
            </a>

          </div>import React from 'react';
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

          {/* Blog post cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Liquidity of Human Capital */}
            <a 
              href="https://www.optimaloutliers.com/p/liquid-vs-illiquid-careers" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              {/* Abstract image for liquidity concept */}
              <div className="h-48 bg-gradient-to-br from-accent/20 to-accent/5 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-24 h-24 text-accent opacity-40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" opacity="0.6"/>
                    <path d="M12 8L12.5 10.5L15 11L12.5 11.5L12 14L11.5 11.5L9 11L11.5 10.5L12 8Z" opacity="0.8"/>
                    <circle cx="6" cy="6" r="1" opacity="0.4"/>
                    <circle cx="18" cy="6" r="1" opacity="0.4"/>
                    <circle cx="6" cy="18" r="1" opacity="0.4"/>
                    <circle cx="18" cy="18" r="1" opacity="0.4"/>
                  </svg>
                </div>
                {/* Flow lines representing liquidity */}
                <div className="absolute top-4 left-4 w-8 h-0.5 bg-accent opacity-30 transform -rotate-12" />
                <div className="absolute top-8 right-6 w-6 h-0.5 bg-accent opacity-20 transform rotate-12" />
                <div className="absolute bottom-6 left-8 w-10 h-0.5 bg-accent opacity-25 transform rotate-6" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-medium text-foreground mb-3 group-hover:text-accent transition-colors">
                  Liquidity of Human Capital
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Exploring how career choices affect your professional mobility and market positioning in the talent ecosystem.
                </p>
                <div className="mt-4 text-accent font-mono text-xs tracking-wider uppercase opacity-60">
                  Read Article →
                </div>
              </div>
            </a>

            {/* Career Optionality */}
            <a 
              href="https://www.optimaloutliers.com/p/dissecting-career-optionality" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              {/* Abstract image for optionality/branching paths */}
              <div className="h-48 bg-gradient-to-br from-blue-500/20 to-blue-500/5 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-24 h-24 text-blue-400 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                </div>
                {/* Branching path lines */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/2 left-6 w-4 h-0.5 bg-blue-400 opacity-30 transform -translate-y-1/2" />
                  <div className="absolute top-1/2 left-10 w-3 h-0.5 bg-blue-400 opacity-25 transform -translate-y-1/2 -rotate-12" />
                  <div className="absolute top-1/2 left-10 w-3 h-0.5 bg-blue-400 opacity-25 transform -translate-y-1/2 rotate-12" />
                  <div className="absolute top-1/2 right-6 w-4 h-0.5 bg-blue-400 opacity-30 transform -translate-y-1/2" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-medium text-foreground mb-3 group-hover:text-accent transition-colors">
                  Career Optionality
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Understanding how to build and maintain career flexibility while maximizing long-term professional value.
                </p>
                <div className="mt-4 text-accent font-mono text-xs tracking-wider uppercase opacity-60">
                  Read Article →
                </div>
              </div>
            </a>

            {/* Poor Recruiting Decisions */}
            <a 
              href="https://www.optimaloutliers.com/p/recruiters-as-accidental-underwriters" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              {/* Abstract image for risk/cost concept */}
              <div className="h-48 bg-gradient-to-br from-red-500/20 to-orange-500/5 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-24 h-24 text-red-400 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                {/* Warning/risk indicators */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-red-400 rounded-full opacity-40 animate-pulse" />
                <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-orange-400 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="absolute top-8 left-8 w-1 h-1 bg-red-400 rounded-full opacity-35 animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-medium text-foreground mb-3 group-hover:text-accent transition-colors">
                  Why You Pay for Others' Poor Recruiting Decisions
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  How traditional recruiting practices create hidden costs and why companies end up bearing the risk of poor hiring decisions.
                </p>
                <div className="mt-4 text-accent font-mono text-xs tracking-wider uppercase opacity-60">
                  Read Article →
                </div>
              </div>
            </a>

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
