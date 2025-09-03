import React from 'react';
import { Link } from 'react-router-dom';

const CloutLogo = () => (
  <svg width="120" height="40" viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" aria-label="Clout">
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(142, 76%, 36%)" stopOpacity="1" />
        <stop offset="100%" stopColor="hsl(142, 70%, 45%)" stopOpacity="0.8" />
      </linearGradient>
    </defs>
    <g transform="translate(8, 12)">
      <circle cx="8" cy="8" r="2" fill="url(#logoGradient)" />
      <circle cx="3" cy="3" r="1" fill="hsl(142, 76%, 36%)" opacity="0.8" />
      <circle cx="13" cy="4" r="1" fill="hsl(142, 76%, 36%)" opacity="0.6" />
      <circle cx="4" cy="13" r="1" fill="hsl(142, 76%, 36%)" opacity="0.7" />
      <circle cx="13" cy="13" r="1" fill="hsl(142, 76%, 36%)" opacity="0.5" />
      <line x1="8" y1="8" x2="3" y2="3" stroke="hsl(142, 76%, 36%)" strokeWidth="0.5" opacity="0.4" />
      <line x1="8" y1="8" x2="13" y2="4" stroke="hsl(142, 76%, 36%)" strokeWidth="0.5" opacity="0.3" />
      <line x1="8" y1="8" x2="4" y2="13" stroke="hsl(142, 76%, 36%)" strokeWidth="0.5" opacity="0.4" />
      <line x1="8" y1="8" x2="13" y2="13" stroke="hsl(142, 76%, 36%)" strokeWidth="0.5" opacity="0.2" />
    </g>
    <text x="35" y="25" fontFamily="'Inter', system-ui, sans-serif" fontSize="16" fontWeight="300" fill="hsl(210, 20%, 98%)" letterSpacing="-0.02em">
      Clout
    </text>
  </svg>
);

const Pricing = () => {
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
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Nav */}
      <nav className="relative z-20 flex items-center justify-between p-6">
        <Link to="/" className="inline-flex items-center gap-2 text-foreground hover:opacity-90">
          <CloutLogo />
        </Link>
        <div className="flex items-center space-x-1 sm:space-x-2">
          <Link to="/" className="font-sans text-foreground/80 hover:text-foreground text-sm px-3 py-2 rounded-md">Home</Link>
          <Link to="/team" className="font-sans text-foreground/80 hover:text-foreground text-sm px-3 py-2 rounded-md">Team</Link>
          <Link to="/pricing" className="font-sans text-foreground text-sm px-3 py-2 rounded-md bg-foreground/5">Our Model</Link>
          <Link to="/blog" className="font-sans text-foreground/80 hover:text-foreground text-sm px-3 py-2 rounded-md">Blog</Link>
        </div>
      </nav>

      {/* Content */}
      <section className="relative z-10 px-6 pt-10 pb-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Hero */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-foreground">
            Hire for Ability, Not Keywords
          </h1>

          <div className="flex items-center justify-center my-6">
            <div className="w-16 h-px bg-accent opacity-60" />
            <div className="w-2 h-2 bg-accent rounded-full mx-4 opacity-60" />
            <div className="w-16 h-px bg-accent opacity-60" />
          </div>

          <p className="max-w-prose mx-auto text-foreground/90 leading-relaxed">
            Most funnels optimize for legibility, not ability. Recruiters reuse the same pools and charge for noise.
            We route vetted introductions with real context, so your interviews start stronger.
          </p>

          {/* Proof cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-card/40 border border-border/60 rounded-lg p-6 text-left">
              <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-4 h-4" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h10M4 17h7" />
                </svg>
              </div>
              <h3 className="font-sans text-base md:text-lg text-foreground/90 mb-2">Context, Not Keywords</h3>
              <p className="text-foreground/80 text-sm leading-relaxed">
                Every candidate arrives with real context—an endorsement or qualified notes from someone who’s worked with them.
              </p>
            </div>

            <div className="bg-card/40 border border-border/60 rounded-lg p-6 text-left">
              <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-4 h-4" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M12 3v18" />
                </svg>
              </div>
              <h3 className="font-sans text-base md:text-lg text-foreground/90 mb-2">Stronger Top-of-Funnel</h3>
              <p className="text-foreground/80 text-sm leading-relaxed">
                We handle vetting, scheduling, rough checks, and take-homes, so you meet fewer people—but better ones.
              </p>
            </div>

            <div className="bg-card/40 border border-border/60 rounded-lg p-6 text-left">
              <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-4 h-4" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 4v6h6M20 20v-6h-6M5.5 18.5A8 8 0 1020 10M4 14a8 8 0 0014.5 4.5" />
                </svg>
              </div>
              <h3 className="font-sans text-base md:text-lg text-foreground/90 mb-2">Feedback-Driven Referrals</h3>
              <p className="text-foreground/80 text-sm leading-relaxed">
                Hiring manager feedback closes the loop, improving future introductions over time.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="my-12">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          </div>

          {/* Pricing panel */}
          <div className="max-w-3xl mx-auto bg-card/30 border border-accent/40 rounded-xl p-6 sm:p-8 text-left shadow-sm">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold text-foreground">Pricing</h2>
              <div className="w-12 h-[2px] bg-accent/80 mx-auto mt-2 rounded" />
            </div>

            {/* Semantic definition list */}
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
              <div>
                <dt className="text-foreground/70">Success Fee</dt>
                <dd className="text-foreground/90 font-medium">15% of first-year base salary</dd>
              </div>
              <div>
                <dt className="text-foreground/70">Upfront Cost</dt>
                <dd className="text-foreground/90 font-medium">$0</dd>
              </div>
              <div>
                <dt className="text-foreground/70">Replacement Window</dt>
                <dd className="text-foreground/90 font-medium">90 days</dd>
              </div>
              <div>
                <dt className="text-foreground/70">Payment Terms</dt>
                <dd className="text-foreground/90 font-medium">Net 30</dd>
              </div>
            </dl>

            {/* Benefits list */}
            <ul className="mt-6 space-y-2 text-foreground/80 text-sm">
              <li>• Pay only when you hire</li>
              <li>• Firsthand endorsements and qualified notes</li>
              <li>• ~40% of candidates advance to final rounds <span className="text-foreground/60">(varies by role and cohort)</span></li>
              <li>• 90-day replacement window</li>
              <li>• Direct candidate contact</li>
            </ul>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="https://cloutcareers.typeform.com/hiring"
                target="_blank"
                rel="noopener noreferrer"
                className="group block w-full text-center px-6 py-4 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 hover:shadow-2xl hover:shadow-accent/30 transition-all"
              >
                Start Hiring
              </a>
              <p className="mt-2 text-center text-foreground/70 text-sm">
                No upfront cost • 2–3 minutes to get started
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corners */}
      <div className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-accent opacity-30" />
      <div className="absolute top-8 right-8 w-12 h-12 border-r-2 border-t-2 border-accent opacity-30" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-l-2 border-b-2 border-accent opacity-30" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-accent opacity-30" />
    </main>
  );
};

export default Pricing;
