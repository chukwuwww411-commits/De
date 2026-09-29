import React, { useState } from "react";
import PremiumModal from "./PremiumModal.jsx";

const features = [
  { icon: "📚", title: "Learn something new", desc: "Expand your knowledge with curated content that helps you grow." },
  { icon: "🔍", title: "Discover something valuable", desc: "Find resources, ideas, and tools that make a real difference." },
  { icon: "✨", title: "Create something meaningful", desc: "Turn inspiration into action and bring your ideas to life." },
  { icon: "⬇️", title: "Download resources", desc: "Get tools and downloads that help you move faster." },
];

const messages = [
  "Stop waiting for the perfect moment. Make this moment count.",
  "Small steps become big changes when you refuse to stop.",
  "Your beginning doesn't have to be perfect. It just has to begin.",
  "Learn. Create. Improve. Repeat.",
  "The future you're dreaming about is built by what you do today.",
  "Don't just consume content. Let it inspire you to create.",
  "One idea can change your direction. One action can change your journey.",
  "Keep learning. Keep creating. Keep moving.",
];

export default function App() {
  const [showPremium, setShowPremium] = useState(false);
  return (
    <>
      {showPremium && <PremiumModal onClose={() => setShowPremium(false)} />}

      {/* NAV */}
      <nav className="nav">
        <div className="container nav-inner">
          <div className="logo">AviatoHub</div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#messages">Inspiration</a>
            <a href="#premium">Premium</a>
            <a href="#start" className="btn btn-primary">Get Started</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className="tagline">Discover. Create. Download. Grow.</div>
        <h1>Your next level starts<br />with one decision: start.</h1>
        <p>You don't need to have everything figured out. You don't need to wait for the perfect moment. You just need the courage to take the next step.</p>
        <p>AviatoHub brings useful knowledge, inspiring content, creator resources, and digital tools together in one place — helping you learn, create, discover, and keep moving forward.</p>
        <div className="hero-cta">
          <a href="#features" className="btn btn-primary">Explore AviatoHub</a>
          <button className="btn btn-outline" onClick={() => setShowPremium(true)}>Start Premium</button>
        </div>
      </header>

      {/* DON'T JUST WATCH. GROW. */}
      <section className="section" id="features">
        <div className="container">
          <h2>Don't just watch. Grow.</h2>
          <p>Every day is another opportunity to become better than yesterday.</p>
          <div className="feature-grid">
            {features.map((f) => (
              <div className="feature-card" key={f.title}>
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YOUR JOURNEY */}
      <section className="section">
        <div className="container">
          <h2>Your journey. Your ideas. Your future.</h2>
          <p>Whether you're a creator, learner, entrepreneur, student, or simply someone hungry for growth, AviatoHub is built to give you a place to discover possibilities and turn inspiration into action.</p>
          <p>Start where you are. Use what you have. Take the next step.</p>
        </div>
      </section>

      {/* PREMIUM */}
      <section className="section" id="premium">
        <div className="container">
          <div className="premium">
            <h2>Go Premium. Unlock More.</h2>
            <p>Get access to premium content, exclusive resources, and additional downloads designed to help you get more from your AviatoHub experience.</p>
            <p>Your growth is worth investing in.</p>
            <div className="hero-cta">
              <button className="btn btn-primary" onClick={() => setShowPremium(true)}>Start Premium</button>
              <a href="#features" className="btn btn-outline">Explore AviatoHub</a>
            </div>
          </div>
        </div>
      </section>

      {/* MESSAGES */}
      <section className="section" id="messages">
        <div className="container">
          <h2>Words to move you forward</h2>
          <p>Short, powerful reminders to keep you going.</p>
          <div className="messages">
            {messages.map((m) => (
              <div className="message" key={m}>{m}</div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta" id="start">
        <div className="container">
          <h2>Your journey doesn't begin tomorrow.</h2>
          <p>It begins with what you choose to do today.</p>
          <div className="welcome">Welcome to AviatoHub.</div>
          <div className="discover">Discover. Create. Download. Grow.</div>
          <div className="hero-cta">
            <a href="#features" className="btn btn-primary">Explore AviatoHub</a>
            <button className="btn btn-outline" onClick={() => setShowPremium(true)}>Start Premium</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          © 2026 AviatoHub. Discover. Create. Download. Grow.
        </div>
      </footer>
    </>
  );
}
