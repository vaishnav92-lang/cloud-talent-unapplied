import React from "react";

export default function ReferralHowItWorks() {
  const items = [
    {
      title: "Referrer Reputation",
      body:
        "Signal from people who’ve actually collaborated—weighted by track record and proximity to the work.",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 3l3 7h7l-5.5 4.5L18 22l-6-3.8L6 22l1.5-7.5L2 10h7l3-7z" />
        </svg>
      ),
    },
    {
      title: "Endorsement Strength",
      body:
        "Falsifiable notes: outcomes, scope, speed, artifacts. No generic praise—real evidence.",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h10M4 18h7" />
        </svg>
      ),
    },
    {
      title: "Role Relevance",
      body:
        "Skills, stage, domain, and availability mapped to your actual JD. The right fit—not a keyword match.",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18" />
        </svg>
      ),
    },
  ];

  return (
    <section className="px-6 py-12 md:py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-left text-2xl sm:text-3xl font-semibold text-foreground">How Clout Referrals Work</h2>
        <p className="mt-3 text-left text-foreground/80 leading-relaxed max-w-2xl">
          Introductions are prioritized by <span className="text-foreground">referrer reputation</span>,{" "}
          <span className="text-foreground">endorsement strength</span>, and{" "}
          <span className="text-foreground">role relevance</span>—then improved continuously with your feedback.
        </p>

        {/* Media rows (no boxes) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((c, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="mt-1 shrink-0 rounded-md bg-accent/15 text-accent p-2" aria-hidden="true">
                {c.icon}
              </div>
              <div>
                <h3 className="text-foreground font-medium">{c.title}</h3>
                <p className="text-foreground/80 text-sm leading-relaxed">{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
