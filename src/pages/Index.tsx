import React from 'react';

const Index = () => {
  return (
    <main className="min-h-screen bg-background bg-grid-pattern bg-grid relative overflow-hidden">
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-primary opacity-60" />
      
      {/* Grid overlay for quant aesthetic */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-grid-pattern bg-grid" />
      </div>
      
      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-light tracking-tight text-foreground leading-tight">
            <span className="block opacity-90">cloud access talent</span>
            <span className="block mt-2 text-muted-foreground font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              that won't apply
            </span>
          </h1>
          
          {/* Subtle accent line */}
          <div className="mt-8 mx-auto w-16 h-px bg-accent opacity-60" />
          
          {/* Optional subtitle for context */}
          <p className="mt-6 text-sm sm:text-base text-muted-foreground font-mono opacity-70 tracking-wider uppercase">
            Professional talent acquisition
          </p>
        </div>
      </div>
      
      {/* Corner accents for quant aesthetic */}
      <div className="absolute top-8 left-8 w-8 h-8 border-l border-t border-accent opacity-30" />
      <div className="absolute top-8 right-8 w-8 h-8 border-r border-t border-accent opacity-30" />
      <div className="absolute bottom-8 left-8 w-8 h-8 border-l border-b border-accent opacity-30" />
      <div className="absolute bottom-8 right-8 w-8 h-8 border-r border-b border-accent opacity-30" />
      
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent pointer-events-none" />
    </main>
  );
};

export default Index;