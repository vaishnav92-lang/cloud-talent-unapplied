import React from "react";
import { Link } from "react-router-dom";
import ReferralHowItWorks from "../components/ReferralHowItWorks";

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

const Index: React.FC = () => {
  return (
    <main className="min-h-screen bg-background relative">
      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-6 py-5">
        <CloutLogo />
        <div className="flex items-center gap-2">
          <Link to="/team" className="text-foreground/80 hover:text-foreground text-sm px-3 py-2 rounded-md">
            Team
          </Link>
          <Link to="/pricing" className="text-foreground/80 hover:text-foreground text-sm px-3 py-2 rounded-md">
            Our Model
          </Link>
          <Link to="/blog" className="text-foreground/80 hover:text-foreground text-sm px-3 py-2 rounded-md">
            Blog
          </Link>
          {/* Nav CTA */}
          <a
            href="https://cloutcareers.typeform.com/hiring"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center px-3 py-2 border border-accent text-accent rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Start Hiring
          </a>
        </div>
      </nav>

      {/* Hero (left-aligned, minimal chrome) */}
      <section className="relative z-10 px-6">
        <div className="max-w-5xl mx-auto py-10 md:py-16">
          <h1 className="font-sans font-light tracking-tight text-foreground leading-tight text-left mb-4 text-6xl sm:text-7xl md:text-8xl">
            Clout
          </h1>

          <h2 className="text-left text-foreground/90 text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight max-w-[22ch]">
            Access talent that won't apply
          </h2>

          <p className="mt-4 text-left text-foreground/85 leading-relaxed max-w-xl">
            Strong hiring signals live inside professional networks. Clout identifies and compensates good judgment, while improving match quality for employers.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="https://cloutcareers.typeform.com/hiring"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-6 py-3 rounded-md bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
            >
              Start Hiring
            </a>
            <a
              href="https://cloutcareers.typeform.com/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-6 py-3 rounded-md border border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Join Network
            </a>
          </div>
        </div>
      </section>

      {/* Hairline divider */}
      <div className="border-t border-border/50" />

      {/* How referrals work — unboxed, editorial layout */}
      <ReferralHowItWorks />

      {/* Slim benefits row (no boxes) */}
      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "No Upfront Cost",
              body: "Pay only when you hire; our fees are tied to outcomes.",
              icon: (
                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                </svg>
              ),
            },
            {
              title: "Verified Networks",
              body: "Candidates come through people who have worked with them, not cold applications.",
              icon: (
                <svg className="w-5 h-5" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              ),
            },
            {
              title: "Feedback-Driven",
              body: "Hiring manager feedback closes the loop, so future introductions get better over time.",
              icon: (
                <svg className="w-5 h-5" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v6h6M20 20v-6h-6M5.5 18.5A8 8 0 1020 10M4 14a8 8 0 0014.5 4.5" />
                </svg>
              ),
            },
          ].map((f, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="mt-1 shrink-0 rounded-md bg-accent/15 text-accent p-2" aria-hidden="true">
                {f.icon}
              </div>
              <div>
                <h3 className="text-foreground font-medium">{f.title}</h3>
                <p className="text-foreground/80 text-sm leading-relaxed">{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Index;
