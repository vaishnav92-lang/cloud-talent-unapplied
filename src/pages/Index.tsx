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

const Index = () => {
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
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between p-6">
        <CloutLogo />
        <div className="flex items-center space-x-1 sm:space-x-2">
          <Link
            to="/team"
            className="font-sans text-foreground/80 hover:text-foreground transition-colors text-sm tracking-normal px-3 py-2 rounded-md"
          >
            Team
          </Link>
          <Link
            to="/pricing"
            className="font-sans text-foreground/80 hover:text-foreground transition-colors text-sm tracking-normal px-3 py-2 rounded-md"
          >
            Our Model
          </Link>
          <Link
            to="/blog"
            className="font-sans text-foreground/80 hover:text-foreground transition-colors text-sm tracking-normal px-3 py-2 rounded-md"
          >
            Blog
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-6">
        <div className="text-center max-w-6xl mx-auto">
          <div className="mb-10">
            <h1 className="font-sans font-light tracking-tight text-foreground leading-tight mb-6">
              <span className="block opacity-95 text-6xl sm:text-7xl md:text-8xl lg:text-9xl">Clout</span>
            </h1>
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-px bg-accent opacity-60" />
              <div className="w-2 h-2 bg-accent rounded-full mx-4 opacity-60 animate-pulse" />
              <div className="w-20 h-px bg-accent opacity-60" />
            </div>

            {/* Sub-headline: proportional font, tighter tracking, balanced measure */}
            <p className="font-sans text-foreground/90 text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight text-balance max-w-[28ch] mx-auto">
              Access talent that won't apply
            </p>

            {/* Concept sentence: constrained width + higher contrast */}
            <p className="mt-4 text-foreground/80 leading-relaxed max-w-prose mx-auto">
              The best information about great employees lives inside professional networks—not résumés.
              Clout unlocks that signal through accountable referrals and a feedback loop with hiring managers.
            </p>
          </div>

          {/* NEW: How Referrals Work */}
          <section className="mt-12">
            <div className="text-center max-w-3xl mx-auto px-6">
              <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">How Clout Referrals Work</h2>
              <p className="mt-3 text-foreground/80 leading-relaxed">
                We prioritize introductions by <span className="text-foreground">reputation of the referrer</span>,{" "}
                <span className="text-foreground">strength of the endorsement</span>, and{" "}
                <span className="text-foreground">relevance to the role</span>—then improve routing with your feedback.
              </p>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 px-6">
              {/* Reputation of the Referrer */}
              <div className="bg-card/40 border border-border/60 rounded-lg p-6 text-left">
                <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 3l3 7h7l-5.5 4.5L18 22l-6-3.8L6 22l1.5-7.5L2 10h7l3-7z" />
                  </svg>
                </div>
                <h3 className="font-sans text-lg text-foreground/90 mb-2">Reputation of the Referrer</h3>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  Weight increases with track record and proximity to the work. Signal from people who’ve actually collaborated.
                </p>
              </div>

              {/* Strength of the Endorsement */}
              <div className="bg-card/40 border border-border/60 rounded-lg p-6 text-left">
                <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h10M4 18h7" />
                  </svg>
                </div>
                <h3 className="font-sans text-lg text-foreground/90 mb-2">Strength of the Endorsement</h3>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  Short, falsifiable notes: outcomes, artifacts, scope, speed. No generic praise—real evidence.
                </p>
              </div>

              {/* Relevance to the Role */}
              <div className="bg-card/40 border border-border/60 rounded-lg p-6 text-left">
                <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18" />
                  </svg>
                </div>
                <h3 className="font-sans text-lg text-foreground/90 mb-2">Relevance to the Role</h3>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  Skills, stage, domain, and availability matched to your actual JD. The right fit—not a keyword match.
                </p>
              </div>
            </div>

            {/* Mini referral score explainer */}
            <div className="max-w-4xl mx-auto mt-8 px-6">
              <div className="bg-card/30 border border-border/60 rounded-lg p-5 text-left">
                <p className="text-sm text-foreground/80">
                  <span className="font-medium text-foreground">Referral Score</span> = 0.40 ×{" "}
                  <span className="text-foreground">Reputation</span> + 0.35 ×{" "}
                  <span className="text-foreground">Endorsement</span> + 0.25 ×{" "}
                  <span className="text-foreground">Relevance</span>
                  <span className="text-foreground/60"> (adjusted over time by your feedback and signal freshness)</span>.
                  <br />
                  Scores route intros to the right next step: <span className="text-foreground">screen</span>,{" "}
                  <span className="text-foreground">take-home</span>, or <span className="text-foreground">hold</span>.
                </p>
              </div>
            </div>
          </section>

          {/* Value props (kept) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 mb-16 max-w-4xl mx-auto">
            {/* Prop 1 */}
            <div className="bg-card/30 border border-border/50 rounded-lg p-6 backdrop-blur-sm">
              <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                </svg>
              </div>
              <h3 className="font-sans text-base tracking-normal text-foreground/90 mb-2">No Upfront Cost</h3>
              <p className="text-foreground/80 text-sm leading-relaxed">
                Pay only when you hire; our fees are tied to outcomes.
              </p>
            </div>

            {/* Prop 2 */}
            <div className="bg-card/30 border border-border/50 rounded-lg p-6 backdrop-blur-sm">
              <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-sans text-base tracking-normal text-foreground/90 mb-2">Verified Networks</h3>
              <p className="text-foreground/80 text-sm leading-relaxed">
                Candidates come through people who have worked with them, not cold applications.
              </p>
            </div>

            {/* Prop 3 */}
            <div className="bg-card/30 border border-border/50 rounded-lg p-6 backdrop-blur-sm">
              <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v6h6M20 20v-6h-6M5.5 18.5A8 8 0 1020 10M4 14a8 8 0 0014.5 4.5" />
                </svg>
              </div>
              <h3 className="font-sans text-base tracking-normal text-foreground/90 mb-2">Feedback-Driven Referrals</h3>
              <p className="text-foreground/80 text-sm leading-relaxed">
                Hiring manager feedback closes the loop, so future introductions get better over time.
              </p>
            </div>
          </div>

          {/* Separator */}
          <div className="mb-12">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-8">
            <a
              href="https://cloutcareers.typeform.com/hiring"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-12 py-6 bg-accent text-accent-foreground font-medium rounded-lg transition-all duration-300 hover:bg-accent/90 hover:shadow-2xl hover:shadow-accent/30 min-w-[240px] transform hover:scale-105 text-center"
            >
              <span className="relative z-10 text-xl font-mono tracking-wide">Hire Talent</span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-accent to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </a>

            <a
              href="https://cloutcareers.typeform.com/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-12 py-6 bg-transparent border-2 border-accent text-accent font-medium rounded-lg transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:shadow-lg min-w-[240px] transform hover:scale-105 text-center"
            >
              <span className="relative z-10 text-xl font-mono tracking-wide">Join Network</span>
            </a>
          </div>
        </div>
      </div>

      {/* Corner brackets */}
      <div className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-accent opacity-30" />
      <div className="absolute top-8 right-8 w-12 h-12 border-r-2 border-t-2 border-accent opacity-30" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-l-2 border-b-2 border-accent opacity-30" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-accent opacity-30" />
    </main>
  );
};

export default Index;
