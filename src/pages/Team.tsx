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

          {/* Team Grid - Equitable Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* CEO */}
            <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-accent/30 transition-colors">
              <div className="w-24 h-24 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg border border-accent/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-accent font-mono text-xs opacity-60">CEO Photo</span>
              </div>
              <h3 className="text-xl font-medium text-foreground mb-1">
                [CEO Name]
              </h3>
              <p className="text-accent font-mono text-sm mb-3 tracking-wide">
                Chief Executive Officer
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                [CEO bio - background, vision, why building Clout]
              </p>
            </div>

            {/* Team Member/Advisor 1 */}
            <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-accent/30 transition-colors">
              <div className="w-24 h-24 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg border border-accent/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-accent font-mono text-xs opacity-60">Photo</span>
              </div>
              <h3 className="text-xl font-medium text-foreground mb-1">
                [Team Member Name]
              </h3>
              <p className="text-accent font-mono text-sm mb-3 tracking-wide">
                [Title/Role]
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                [Brief background and expertise]
              </p>
            </div>

            {/* Team Member/Advisor 2 */}
            <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-accent/30 transition-colors">
              <div className="w-24 h-24 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg border border-accent/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-accent font-mono text-xs opacity-60">Photo</span>
              </div>
              <h3 className="text-xl font-medium text-foreground mb-1">
                [Team Member Name]
              </h3>
              <p className="text-accent font-mono text-sm mb-3 tracking-wide">
                [Title/Role]
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                [Brief background and expertise]
              </p>
            </div>

            {/* Team Member/Advisor 3 */}
            <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-accent/30 transition-colors">
              <div className="w-24 h-24 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg border border-accent/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-accent font-mono text-xs opacity-60">Photo</span>
              </div>
              <h3 className="text-xl font-medium text-foreground mb-1">
                [Team Member Name]
              </h3>
              <p className="text-accent font-mono text-sm mb-3 tracking-wide">
                [Title/Role]
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                [Brief background and expertise]
              </p>
            </div>

            {/* Team Member/Advisor 4 */}
            <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-accent/30 transition-colors">
              <div className="w-24 h-24 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg border border-accent/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-accent font-mono text-xs opacity-60">Photo</span>
              </div>
              <h3 className="text-xl font-medium text-foreground mb-1">
                [Team Member Name]
              </h3>
              <p className="text-accent font-mono text-sm mb-3 tracking-wide">
                [Title/Role]
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                [Brief background and expertise]
              </p>
            </div>

            {/* Team Member/Advisor 5 */}
            <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-accent/30 transition-colors">
              <div className="w-24 h-24 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg border border-accent/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-accent font-mono text-xs opacity-60">Photo</span>
              </div>
              <h3 className="text-xl font-medium text-foreground mb-1">
                [Team Member Name]
              </h3>
              <p className="text-accent font-mono text-sm mb-3 tracking-wide">
                [Title/Role]
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                [Brief background and expertise]
              </p>
            </div>

            {/* Team Member/Advisor 6 */}
            <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-accent/30 transition-colors">
              <div className="w-24 h-24 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg border border-accent/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-accent font-mono text-xs opacity-60">Photo</span>
              </div>
              <h3 className="text-xl font-medium text-foreground mb-1">
                [Team Member Name]
              </h3>
              <p className="text-accent font-mono text-sm mb-3 tracking-wide">
                [Title/Role]
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                [Brief background and expertise]
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
