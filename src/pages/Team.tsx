import React from "react";
import { Link } from "react-router-dom";

const Team: React.FC = () => {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-90" />
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(hsl(220 15% 15% / 0.3) 1px, transparent 1px),
              linear-gradient(90deg, hsl(220 15% 15% / 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between p-6">
        <Link
          to="/"
          className="text-2xl font-light tracking-tight text-foreground opacity-90 hover:opacity-100 transition-opacity"
        >
          Clout
        </Link>
        <div className="flex space-x-6">
          <Link
            to="/"
            className="text-muted-foreground hover:text-foreground transition-colors font-mono text-sm"
          >
            Home
          </Link>
          <Link
            to="/pricing"
            className="text-muted-foreground hover:text-foreground transition-colors font-mono text-sm"
          >
            Our Model
          </Link>
          <Link
            to="/blog"
            className="text-muted-foreground hover:text-foreground transition-colors font-mono text-sm"
          >
            Blog
          </Link>
        </div>
      </nav>

      {/* Main content */}
      <div className="relative z-10 px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-foreground mb-4">
              Team
            </h1>
            <div className="w-16 h-px bg-accent opacity-60 mx-auto" />
            <p className="mt-4 text-muted-foreground font-mono text-sm tracking-wider uppercase opacity-70">
              Meet the people building Clout
            </p>
          </div>

          {/* Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Vaishnav Sunil */}
            <div className="bg-card border border-border rounded-lg p-8 text-center hover:border-accent/30 transition-colors">
              {/* If you add a headshot later, replace the div below with an <img src="/YOUR_FILE.jpg" .../> */}
              <div className="w-32 h-32 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg border border-accent/30 flex items-center justify-center mx-auto mb-6">
                <span className="text-accent font-mono text-sm opacity-60">Photo</span>
              </div>
              <h3 className="text-2xl font-medium text-foreground mb-2">Vaishnav Sunil</h3>
              <p className="text-accent font-mono text-sm mb-4 tracking-wide">Founder and CEO</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Building Clout to unlock high-signal referrals with accountability and feedback loops—so teams
                meet fewer people, but better ones.
              </p>
            </div>

            {/* Jordan Rubin — Advisor (uses /public/JR Headshot.jpg) */}
            <div className="bg-card border border-border rounded-lg p-8 text-center hover:border-accent/30 transition-colors">
              <div className="w-32 h-32 rounded-lg border border-accent/30 overflow-hidden mx-auto mb-6 bg-accent/10">
                {/* Because the file name has a space, use %20 in the src. Alternatively, rename the file to JR-Headshot.jpg and change the src to /JR-Headshot.jpg */}
                <img
                  src={"/JR%20Headshot.jpg"}
                  alt="Jordan Rubin headshot"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-medium text-foreground mb-2">Jordan Rubin</h3>
              <p className="text-accent font-mono text-sm mb-4 tracking-wide">Advisor</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Advises on product, go-to-market, and the referral incentives model. Helps ensure quality
                signals translate into practical hiring outcomes.
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
