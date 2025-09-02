import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
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
          <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors font-mono text-sm">Blog</Link>
        </div>
      </nav>

      {/* Main content */}
      <div className="relative z-10 px-6 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Page header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-foreground mb-4">
              Pricing
            </h1>
            <div className="w-16 h-px bg-accent opacity-60 mx-auto" />
            <p className="mt-4 text-muted-foreground font-mono text-sm tracking-wider uppercase opacity-70">
              Performance-based talent acquisition
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* For Companies */}
            <div className="bg-card border border-border rounded-lg p-8 hover:border-accent/30 transition-colors">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-medium text-foreground mb-2">
                  For Companies
                </h2>
                <div className="w-8 h-px bg-accent opacity-60 mx-auto" />
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between py-2 border-b border-border/50">
                  <span className="text-muted-foreground font-mono text-sm">Success Fee</span>
                  <span className="text-foreground font-medium">15-20% of salary</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-border/50">
                  <span className="text-muted-foreground font-mono text-sm">Upfront Cost</span>
                  <span className="text-foreground font-medium">$0</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-border/50">
                  <span className="text-muted-foreground font-mono text-sm">Guarantee Period</span>
                  <span className="text-foreground font-medium">90 days</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-muted-foreground font-mono text-sm">Payment Terms</span>
                  <span className="text-foreground font-medium">Net 30</span>
                </div>
              </div>

              <div className="space-y-3 text-sm text-muted-foreground">
                <p>• Pay only when you hire</p>
                <p>• Access to verified network referrers</p>
                <p>• Karma-tracked recommendations</p>
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
            </div>

            {/* For Talent & Referrers */}
            <div className="bg-card border border-border rounded-lg p-8 hover:border-accent/30 transition-colors">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-medium text-foreground mb-2">
                  For Network
                </h2>
                <div className="w-8 h-px bg-accent opacity-60 mx-auto" />
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between py-2 border-b border-border/50">
                  <span className="text-muted-foreground font-mono text-sm">Referral Rewards</span>
                  <span className="text-foreground font-medium">Up to $15k</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-border/50">
                  <span className="text-muted-foreground font-mono text-sm">Joining Cost</span>
                  <span className="text-foreground font-medium">Free</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-border/50">
                  <span className="text-muted-foreground font-mono text-sm">Karma System</span>
                  <span className="text-foreground font-medium">Reputation based</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-muted-foreground font-mono text-sm">Payout Time</span>
                  <span className="text-foreground font-medium">30 days post-hire</span>
                </div>
              </div>

              <div className="space-y-3 text-sm text-muted-foreground">
                <p>• Earn from quality referrals</p>
                <p>• Build professional reputation</p>
                <p>• Access to exclusive opportunities</p>
                <p>• Network effect rewards</p>
                <p>• Transparent karma tracking</p>
              </div>

              <a 
                href="https://cloutcareers.typeform.com/apply" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-6 w-full inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground border border-border font-medium rounded-md transition-all duration-300 hover:bg-secondary/80 hover:border-accent/50 hover:shadow-lg"
              >
                <span className="font-mono tracking-wide">Join Network</span>
              </a>
            </div>

          </div>

          {/* Additional info */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground font-mono text-sm opacity-60">
              Custom enterprise pricing available for organizations with 500+ employees
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
