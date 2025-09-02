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
          clout
        </Link>
        <div className="flex space-x-6">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors font-mono text-sm">Home</Link>
          <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors font-mono text-sm">Pricing</Link>
          <Link to="/testimonials" className="text-muted-foreground hover:text-foreground transition-colors font-mono text-sm">Testimonials</Link>
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
              Building the future of talent networks
            </p>
          </div>

          {/* CEO Section */}
          <div className="mb-20">
            <h2 className="text-2xl font-medium text-foreground mb-8 font-mono tracking-wide">
              Leadership
            </h2>
            
            <div className="bg-card border border-border rounded-lg p-8 max-w-2xl mx-auto">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                {/* CEO Photo Placeholder */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg border border-accent/30 flex items-center justify-center">
                    <span className="text-accent font-mono text-sm opacity-60">CEO Photo</span>
                  </div>
                </div>
                
                {/* CEO Info */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-medium text-foreground mb-2">
                    [CEO Name]
                  </h3>
                  <p className="text-accent font-mono text-sm mb-4 tracking-wide">
                    Chief Executive Officer
                  </p>
                  <div className="text-muted-foreground text-sm leading-relaxed space-y-2">
                    <p>[CEO Bio - Background, experience, vision for Clout]</p>
                    <p>[Previous experience, education, achievements]</p>
                    <p>[Why they're building Clout, their perspective on talent acquisition]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Advisory Board Section */}
          <div>
            <h2 className="text-2xl font-medium text-foreground mb-8 font-mono tracking-wide text-center">
              Advisory Board
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              
              {/* Advisor 1 */}
              <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-accent/30 transition-colors">
                <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg border border-accent/30 flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent font-mono text-xs opacity-60">Photo</span>
                </div>
                <h3 className="text-lg font-medium text-foreground mb-1">
                  [Advisor Name]
                </h3>
                <p className="text-accent font-mono text-xs mb-3 tracking-wide">
                  [Title/Company]
                </p>
                <p className="text-muted-foreground text-sm">
                  [Brief expertise/background]
                </p>
              </div>

              {/* Advisor 2 */}
              <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-accent/30 transition-colors">
                <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg border border-accent/30 flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent font-mono text-xs opacity-60">Photo</span>
                </div>
                <h3 className="text-lg font-medium text-foreground mb-1">
                  [Advisor Name]
                </h3>
                <p className="text-accent font-mono text-xs mb-3 tracking-wide">
                  [Title/Company]
                </p>
                <p className="text-muted-foreground text-sm">
                  [Brief expertise/background]
                </p>
              </div>

              {/* Advisor 3 */}
              <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-accent/30 transition-colors">
                <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg border border-accent/30 flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent font-mono text-xs opacity-60">Photo</span>
                </div>
                <h3 className="text-lg font-medium text-foreground mb-1">
                  [Advisor Name]
                </h3>
                <p className="text-accent font-mono text-xs mb-3 tracking-wide">
                  [Title/Company]
                </p>
                <p className="text-muted-foreground text-sm">
                  [Brief expertise/background]
                </p>
              </div>

              {/* Advisor 4 */}
              <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-accent/30 transition-colors">
                <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg border border-accent/30 flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent font-mono text-xs opacity-60">Photo</span>
                </div>
                <h3 className="text-lg font-medium text-foreground mb-1">
                  [Advisor Name]
                </h3>
                <p className="text-accent font-mono text-xs mb-3 tracking-wide">
                  [Title/Company]
                </p>
                <p className="text-muted-foreground text-sm">
                  [Brief expertise/background]
                </p>
              </div>

              {/* Advisor 5 */}
              <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-accent/30 transition-colors">
                <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg border border-accent/30 flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent font-mono text-xs opacity-60">Photo</span>
                </div>
                <h3 className="text-lg font-medium text-foreground mb-1">
                  [Advisor Name]
                </h3>
                <p className="text-accent font-mono text-xs mb-3 tracking-wide">
                  [Title/Company]
                </p>
                <p className="text-muted-foreground text-sm">
                  [Brief expertise/background]
                </p>
              </div>

              {/* Advisor 6 */}
              <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-accent/30 transition-colors">
                <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg border border-accent/30 flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent font-mono text-xs opacity-60">Photo</span>
                </div>
                <h3 className="text-lg font-medium text-foreground mb-1">
                  [Advisor Name]
                </h3>
                <p className="text-accent font-mono text-xs mb-3 tracking-wide">
                  [Title/Company]
                </p>
                <p className="text-muted-foreground text-sm">
                  [Brief expertise/background]
                </p>
              </div>

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
