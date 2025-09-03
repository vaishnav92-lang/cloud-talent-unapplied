import React from "react";

export default function ReferralHowItWorks() {
  return (
    <section className="mt-16">
      <div className="text-center max-w-3xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">How Clout Referrals Work</h2>
        <p className="mt-3 text-foreground/80 leading-relaxed">
          We prioritize introductions by <span className="text-foreground">reputation of the referrer</span>,{" "}
          <span className="text-foreground">strength of the endorsement</span>, and{" "}
          <span className="text-foreground">relevance to the role</span>—then improve routing with your feedback.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 px-6">
        {[
          {
            title: "Referrer Reputation",
            body:
              "Weight increases with track record and proximity to the work. Signal from people who’ve actually collaborated.",
            icon: (
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 3l3 7h7l-5.5 4.5L18 22l-6-3.8L6 22l1.5-7.5L2 10h7l3-7z" />
              </svg>
            ),
          },
          {
            title: "Endorsement Strength",
            body:
              "Falsifiable notes: outcomes, scope, speed, artifacts. No generic praise—real evidence.",
            icon: (
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h10M4 18h7" />
              </svg>
            ),
          },
          {
            title: "Role Relevance",
            body:
              "Skills, stage, domain, and availability matched to your actual JD. The right fit—not a keyword match.",
            icon: (
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18" />
              </svg>
            ),
          },
        ].map((c, i) => (
          <div key={i} className="bg-card/40 border border-border/60 rounded-lg p-6">
            <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
              {c.icon}
            </div>
            <h3 className="font-sans text-lg text-foreground/90 mb-2">{c.title}</h3>
            <p className="text-foreground/80 text-sm leading-relaxed">{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
