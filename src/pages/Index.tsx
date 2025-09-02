import React from 'react';

const Index = () => {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-90" />
      
      {/* Animated grid pattern background */}
      <div className="absolute inset-0 opacity-10">
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
      
      {/* Abstract network nodes - floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top left cluster */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-accent rounded-full opacity-40 animate-pulse" style={{ animationDelay: '0s' }} />
        <div className="absolute top-32 left-32 w-1 h-1 bg-accent rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-28 left-48 w-1.5 h-1.5 bg-accent rounded-full opacity-35 animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Top right cluster */}
        <div className="absolute top-24 right-24 w-1.5 h-1.5 bg-accent rounded-full opacity-40 animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-40 right-40 w-1 h-1 bg-accent rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1.5s' }} />
        
        {/* Bottom clusters */}
        <div className="absolute bottom-32 left-16 w-1 h-1 bg-accent rounded-full opacity-25 animate-pulse" style={{ animationDelay: '2.5s' }} />
        <div className="absolute bottom-24 right-32 w-2 h-2 bg-accent rounded-full opacity-35 animate-pulse" style={{ animationDelay: '3s' }} />
        
        {/* Connection lines between nodes */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(142 76% 36%)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="hsl(142 76% 36%)" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <line x1="5%" y1="15%" x2="20%" y2="25%" stroke="url(#connectionGradient)" strokeWidth="1" />
          <line x1="20%" y1="25%" x2="35%" y2="20%" stroke="url(#connectionGradient)" strokeWidth="1" />
          <line x1="80%" y1="20%" x2="85%" y2="35%" stroke="url(#connectionGradient)" strokeWidth="1" />
          <line x1="15%" y1="80%" x2="80%" y2="85%" stroke="url(#connectionGradient)" strokeWidth="1" opacity="0.3" />
        </svg>
      </div>
      
      {/* Data stream visualization - side panels */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 w-16 h-64 opacity-20">
        <div className="space-y-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex space-x-1">
              <div className="w-1 h-1 bg-accent rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
              <div className="w-2 h-1 bg-muted rounded-sm" />
              <div className="w-3 h-1 bg-muted rounded-sm" />
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute right-8 top-1/2 -translate-y-1/2 w-16 h-64 opacity-20">
        <div className="space-y-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex space-x-1 justify-end">
              <div className="w-3 h-1 bg-muted rounded-sm" />
              <div className="w-2 h-1 bg-muted rounded-sm" />
              <div className="w-1 h-1 bg-accent rounded-full animate-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
            </div>
          ))}
        </div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="font-sans font-light tracking-tight text-foreground leading-tight">
            <span className="block opacity-90 text-6xl sm:text-7xl md:text-8xl lg:text-9xl">clout</span>
            <div className="mt-8 mb-12">
              <span className="block text-muted-foreground font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                access talent that won't apply
              </span>
            </div>
          </h1>
          
          {/* Terminal-style accent line with blinking cursor */}
          <div className="mt-8 mx-auto flex items-center justify-center space-x-2">
            <div className="w-16 h-px bg-accent opacity-60" />
            <div className="w-1 h-3 bg-accent opacity-60 animate-pulse" />
            <div className="w-16 h-px bg-accent opacity-60" />
          </div>
          
          {/* Network strength indicator */}
          <div className="mt-6 flex items-center justify-center space-x-1 opacity-50">
            <div className="w-1 h-2 bg-accent rounded-sm" />
            <div className="w-1 h-3 bg-accent rounded-sm" />
            <div className="w-1 h-4 bg-accent rounded-sm" />
            <div className="w-1 h-3 bg-accent rounded-sm" />
            <div className="w-1 h-2 bg-accent rounded-sm" />
            <span className="ml-3 text-xs font-mono text-muted-foreground tracking-wider uppercase">
              Network Active
            </span>
          </div>
          
          {/* Main action buttons */}
          <div className="mt-16 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <button className="group relative px-10 py-5 bg-accent text-accent-foreground font-medium rounded-md transition-all duration-300 hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/25 min-w-[220px] transform hover:scale-105">
              <span className="relative z-10 text-xl font-mono tracking-wide">Hire Talent</span>
              <div className="absolute inset-0 rounded-md bg-gradient-to-r from-accent to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </button>
            
            <button className="group relative px-10 py-5 bg-secondary text-secondary-foreground font-medium rounded-md border border-border transition-all duration-300 hover:bg-secondary/80 hover:border-accent/50 hover:shadow-lg min-w-[220px] transform hover:scale-105">
              <span className="relative z-10 text-xl font-mono tracking-wide">Join Network</span>
              <div className="absolute inset-0 rounded-md bg-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </button>
          </div>
          
          {/* Primary navigation - much more prominent */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <button className="group relative px-6 py-3 bg-transparent border border-accent text-accent font-medium rounded-md transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:shadow-lg hover:shadow-accent/20 min-w-[160px]">
              <span className="relative z-10 text-base font-mono tracking-wide">Team</span>
              <div className="absolute inset-0 rounded-md bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button className="group relative px-6 py-3 bg-transparent border border-muted text-muted-foreground font-medium rounded-md transition-all duration-300 hover:bg-secondary hover:text-foreground hover:border-accent/50 min-w-[160px]">
              <span className="relative z-10 text-base font-mono tracking-wide">Pricing</span>
            </button>
            
            <button className="group relative px-6 py-3 bg-transparent border border-muted text-muted-foreground font-medium rounded-md transition-all duration-300 hover:bg-secondary hover:text-foreground hover:border-accent/50 min-w-[160px]">
              <span className="relative z-10 text-base font-mono tracking-wide">Testimonials</span>
            </button>
          </div>
          
          {/* Optional subtitle for context */}
          <p className="mt-6 text-sm text-muted-foreground font-mono opacity-60 tracking-wider uppercase">
            Incentivized talent networks for early-stage startups
          </p>
        </div>
      </div>
      
      {/* Trading terminal corner brackets */}
      <div className="absolute top-8 left-8 w-8 h-8 border-l border-t border-accent opacity-30" />
      <div className="absolute top-8 right-8 w-8 h-8 border-r border-t border-accent opacity-30" />
      <div className="absolute bottom-8 left-8 w-8 h-8 border-l border-b border-accent opacity-30" />
      <div className="absolute bottom-8 right-8 w-8 h-8 border-r border-b border-accent opacity-30" />
      
      {/* Abstract chart visualization - bottom corner */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-end space-x-1 opacity-20">
        {Array.from({ length: 12 }).map((_, i) => (
          <div 
            key={i}
            className="w-1 bg-accent rounded-t-sm animate-pulse"
            style={{ 
              height: `${Math.random() * 20 + 8}px`,
              animationDelay: `${i * 0.1}s`,
              animationDuration: '2s'
            }}
          />
        ))}
      </div>
      
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent pointer-events-none" />
      
      {/* Status indicators - top bar style */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 flex space-x-4 opacity-30">
        <div className="flex items-center space-x-1">
          <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
          <span className="text-xs font-mono text-muted-foreground">LIVE</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
          <span className="text-xs font-mono text-muted-foreground">SYNC</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          <span className="text-xs font-mono text-muted-foreground">NET</span>
        </div>
      </div>
    </main>
  );
};

export default Index;
