import { useEffect, useRef, useState } from "react";
import "../style/global.css";
import { Link } from "react-router-dom";
// ─────────────────────────────────────────────
// Ali's Saloon — Premium Hero Section
// Stack: React + Bootstrap 5 + Vite + Custom CSS
// Design: Senior UI/UX — Agency-grade luxury
// ─────────────────────────────────────────────

const TRUST_ITEMS = [
  { value: "4.9★", label: "Google Rating" },
  { value: "12+", label: "Years of Craft" },
  { value: "8,000+", label: "Happy Clients" },
];

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const heroRef = useRef(null);

  // Trigger entrance animations after mount
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Parallax effect on scroll (subtle, desktop-only)
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) return;
      const scrollY = window.scrollY;
      const bg = document.querySelector(".hero-bg");
      if (bg) bg.style.transform = `translateY(${scrollY * 0.3}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero-section" ref={heroRef} aria-label="Hero">
      {/* ── Background Layer ── */}
      <div className="hero-bg" aria-hidden="true">
        {/*
          BACKGROUND RECOMMENDATION:
          Replace the gradient with a real image:
            background-image: url('/assets/hero-barber.jpg')
          Use a dark, moody barbershop interior or a close-up grooming shot.
          The overlay CSS handles the luxury darkening automatically.

          Best free sources:
          - Unsplash: search "barber shop interior dark"
          - Pexels: search "luxury grooming men"
          - Tip: Pick an image where the subject is left or right — never centered.
            This lets text breathe on the opposite side.
        */}
      </div>

      {/* ── Noise texture overlay for premium feel ── */}
      <div className="hero-noise" aria-hidden="true" />

      {/* ── Animated Gold Accent Line (Signature Element) ── */}
      <div
        className={`hero-gold-line ${visible ? "hero-gold-line--drawn" : ""}`}
        aria-hidden="true"
      />

      {/* ── Main Content ── */}
      <div className="hero-inner">
        <div className={`hero-content ${visible ? "hero-content--visible" : ""}`}>

          {/* Eyebrow label */}
          <div className="hero-eyebrow" aria-label="Brand tagline">
            <span className="hero-eyebrow__dash" aria-hidden="true" />
            <span className="hero-eyebrow__text">Premium Grooming Studio · Pune</span>
          </div>

          {/* Primary Headline */}
          <h1 className="hero-headline">
            <span className="hero-headline__line hero-headline__line--1">
              Crafted for
            </span>
            <span className="hero-headline__line hero-headline__line--2">
              The&nbsp;
              <em className="hero-headline__accent">Distinguished</em>
            </span>
            <span className="hero-headline__line hero-headline__line--3">
              Gentleman
            </span>
          </h1>

          {/* Subheadline */}
          <p className="hero-sub">
            Where precision meets artistry. Experience the finest cuts,
            grooming, and rituals — tailored exclusively for you.
          </p>

          {/* CTA Block */}
         <div className="hero-cta-group">

  <Link
    to="/booking"
    className="hero-cta hero-cta--primary"
    aria-label="Book your appointment at Ali's Saloon"
  >
    <span className="hero-cta__label">
      Book Appointment
    </span>

    <span
      className="hero-cta__arrow"
      aria-hidden="true"
    >
      →
    </span>
  </Link>

  <Link
    to="/services"
    className="hero-cta hero-cta--ghost"
  >
    View Services
  </Link>
  </div>

</div>
      

        {/* ── Branding Mark (Top) ── */}
        <div className={`hero-brand ${visible ? "hero-brand--visible" : ""}`}>
          <div className="hero-brand__mark" aria-label="Ali's Saloon logo mark">
            <span className="hero-brand__initials">AS</span>
          </div>
          <div className="hero-brand__wordmark">
            <span className="hero-brand__name">Ali's Saloon</span>
            <span className="hero-brand__since">Est. 2012</span>
          </div>
        </div>
      </div>

      {/* ── Trust Strip (bottom) ── */}
      <div
        className={`hero-trust ${visible ? "hero-trust--visible" : ""}`}
        role="list"
        aria-label="Trust indicators"
      >
        {TRUST_ITEMS.map((item, i) => (
          <div
            className="hero-trust__item"
            key={item.label}
            role="listitem"
            style={{ "--delay": `${i * 0.12}s` }}
          >
            <span className="hero-trust__value">{item.value}</span>
            <span className="hero-trust__label">{item.label}</span>
          </div>
        ))}
      </div>

      {/* ── Scroll Indicator ── */}
      <div
        className={`hero-scroll ${visible ? "hero-scroll--visible" : ""}`}
        aria-hidden="true"
      >
        <span className="hero-scroll__label">Scroll</span>
        <div className="hero-scroll__track">
          <div className="hero-scroll__dot" />
        </div>
      </div>
    </section>
  );
}