import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-90" />
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
        <Link
          to="/"
          className="text-2xl font-light tracking-tight text-foreground opacity-90 hover:opacity-100 transition-opacity"
        >
          clout
        </Link>
        <div className="flex space-x-6">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors font-mono text-sm">Home</Link>
          <Link to="/team" className="text-muted-foreground hover:text-foreground transition-colors font-mono text-sm">Team</Link>
          <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors font-mono text-sm">Blog</Link>
        </div>
      </nav>

      {/* Main content */}
      <div className="relative z-10 px-6 py-12">
        <div className="max-w-6xl mx-auto">

          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-foreground mb-4">
              Hiring is Broken for Startups
            </h1>
            <div className="w-16 h-px bg-accent opacity-60 mx-auto" />
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Most funnels filter for legibility, not ability. Recruiters recycle the same pools and overcharge.
              Startups end up paying $30–50k for noise.
            </p>
          </div>

          {/* Proof band */}
          <section
            aria-label="How Clout helps"
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto mb-10"
          >
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-sm font-mono tracking-wider uppercase text-muted-foreground mb-2">Context, not keywords</h3>
              <p className="text-foreground/90">
                Every candidate comes with <span className="font-medium">real context</span>—an endorsement or qualified notes
                from someone who’s worked with them.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-sm font-mono tracking-wider uppercase text-muted-foreground mb-2">Stronger top-of-funnel</h3>
              <p className="text-foreground/90">
                We enhance your top-of-funnel with <span className="font-medium">vetted introductions</span> and save you time on
                first screens, scheduling, rough checks, and take-home reviews—so you meet fewer people, but better ones.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-sm font-mono tracking-wider uppercase text-muted-foreground mb-2">Proven results</h3>
              <p className="text-foreground/90">
                Over <span className="font-semibold">40%</span> of candidates we submit advance to final rounds.
              </p>
            </div>
          </section>

          {/* Hidden costs callout */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-muted/30 border border-border rounded-lg p-5">
              <p className="text-sm text-muted-foreground">
                Half of recruiting costs are <span className="font-medium text-foreground">unseen</span>—time spent coordinating, screening,
                interviewing, and validating. Clout reduces that drag by delivering <span className="font-medium text-foreground">fewer, more qualified</span> candidates with context.
              </p>
            </div>
          </div>

          {/* Pricing – single card */}
          <div className="max-w-3xl mx-auto">
            <section className="bg-card border border-border rounded-lg p-8 hover:border-accent/30 transition-colors">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-medium text-foreground mb-2">
                  Pricing
                </h2>
                <div className="w-8 h-px bg-accent opacity-60 mx-auto" />
              </div>

              <div className="space-y-4 mb-8" role="table" aria-label="Pricing details">
                <div className="flex items-center justify-between py-2 border-b border-border/50" role="row">
                  <span className="text-muted-foreground font-mono text-sm" role="cell">Success Fee</span>
                  <span className="text-foreground font-medium" role="cell">
                    15% of first-year base salary (flat)
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-border/50" role="row">
                  <span className="text-muted-foreground font-mono text-sm" role="cell">Upfront Cost</span>
                  <span className="text-foreground font-medium" role="cell">$0</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-border/50" role="row">
                  <span className="text-muted-foreground font-mono text-sm" role="cell">Guarantee Period</span>
                  <span className="text-foreground font-medium" role="cell">90 days</span>
                </div>
                <div className="flex items-center justify-between py-2" role="row">
                  <span className="text-muted-foreground font-mono text-sm" role="cell">Payment Terms</span>
                  <span className="text-foreground font-medium" role="cell">Net 30</span>
                </div>
              </div>

              <div className="space-y-3 text-sm text-muted-foreground">
                <p>• Pay only when you hire</p>
                <p>• Candidates come with firsthand endorsements and qualified notes</p>
                <p>• Over 40% advance to final rounds</p>
                <p>• 90-day replacement guarantee</p>
                <p>• Direct candidate contact</p>
              </div>

              <a
                href="https://cloutcareers.typeform.com/hiring"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground font-medium rounded-md transition-all duration-300 hover:bg-accent/90 hover:shadow-lg"
              >
                <span className="font-mono tracking-wide">Start Hiring</span>
              </a>
            </section>
          </div>

          {/* Price clarity footer line */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground font-mono text-sm opacity-70">
              Simple terms: <span className="text-foreground">15% success fee on base salary</span>. No retainers. No hidden fees.
            </p>
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

export default Pricing;
