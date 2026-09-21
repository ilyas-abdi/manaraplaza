import React, { useState, useEffect } from 'react';
import { RESORT_DATA } from '../data/resortData';
import { Phone, Clock, Menu, X, ChevronRight } from 'lucide-react';
import logoGold from '../assets/images/manara_logo_gold.jpg';

export default function Navbar({ onOpenReservation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simplified nav links — fewer items keeps the bar clean
  const navLinks = [
    { label: 'Home',       href: '#hero' },
    { label: 'About',      href: '#about' },
    { label: 'Dining',     href: '#dining' },
    { label: 'Experience', href: '#experience' },
    { label: 'Gallery',    href: '#gallery' },
    { label: 'Reviews',    href: '#reviews' },
    { label: 'Location',   href: '#location' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass-nav py-3 shadow-luxury'
            : 'bg-gradient-to-b from-charcoal-950/85 via-charcoal-950/30 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 flex items-center justify-between gap-6">

          {/* ── Brand ─────────────────────────────────────────── */}
          <a
            href="#hero"
            className="flex items-center gap-3 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded-lg"
          >
            {/* Real Manara Plaza Logo */}
            <img
              src={logoGold}
              alt="Manara Plaza Resort logo"
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover object-center border border-gold-500/30 bg-white group-hover:border-gold-400 transition-all duration-300 shadow-luxury-gold shrink-0"
            />
            {/* Brand Name & Tagline */}
            <div className="flex flex-col leading-tight">
              <span className="font-serif text-sm sm:text-base md:text-lg font-semibold tracking-wide text-ivory-50 group-hover:text-gold-300 transition-colors whitespace-nowrap">
                Manara Plaza Resort
              </span>
              <span className="text-[9px] tracking-[0.2em] text-gold-400/85 uppercase font-medium whitespace-nowrap">
                Mogadishu · Open 24h
              </span>
            </div>
          </a>

          {/* ── Desktop Nav ───────────────────────────────────── */}
          <nav
            className="hidden xl:flex items-center gap-7"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-[13px] font-medium text-ivory-200/75 hover:text-gold-300 transition-colors whitespace-nowrap group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-gold-400 group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
          </nav>

          {/* ── Desktop Actions ───────────────────────────────── */}
          <div className="hidden xl:flex items-center gap-3 shrink-0">
            {/* Phone — icon + number, subtle pill */}
            <a
              href={`tel:${RESORT_DATA.contact.phoneTel}`}
              className="flex items-center gap-1.5 text-[12px] font-medium text-ivory-200 hover:text-gold-300 transition-colors px-3 py-2 rounded-full border border-white/10 hover:border-gold-500/30 bg-white/5 whitespace-nowrap"
              title="Call Manara Plaza Resort"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              <span>{RESORT_DATA.contact.phone}</span>
            </a>

            {/* CTA */}
            <button
              onClick={onOpenReservation}
              className="px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-charcoal-950 shadow-luxury-gold transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] whitespace-nowrap"
            >
              Reserve a Table
            </button>
          </div>

          {/* ── Mobile Actions ────────────────────────────────── */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={onOpenReservation}
              className="px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider bg-gold-500 hover:bg-gold-400 text-charcoal-950 transition-colors whitespace-nowrap"
            >
              Reserve
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-ivory-100 hover:text-gold-300 hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-400"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Full-Screen Drawer ──────────────────────────── */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 xl:hidden flex flex-col justify-between bg-charcoal-950/97 backdrop-blur-2xl px-6 pt-24 pb-8">

          {/* Links */}
          <div className="flex flex-col gap-4">
            {/* Mobile drawer brand header */}
            <div className="flex items-center gap-3 pb-4 border-b border-white/10">
              <img
                src={logoGold}
                alt="Manara Plaza Resort"
                className="h-12 w-12 rounded-full object-cover border border-gold-500/30 bg-white shadow-luxury-gold shrink-0"
              />
              <div>
                <span className="font-serif text-base font-semibold text-ivory-50 uppercase tracking-wider block">
                  Manara Plaza Resort
                </span>
                <span className="text-[10px] text-gold-400 tracking-widest uppercase">
                  Restaurant · Hotel · Cafe
                </span>
              </div>
            </div>
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 text-[17px] font-serif text-ivory-100 hover:text-gold-400 border-b border-white/5 last:border-0 transition-colors"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-gold-500/50" />
                </a>
              ))}
            </nav>
          </div>

          {/* Footer info + CTAs */}
          <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
            <div className="flex items-center justify-between text-xs text-ivory-400">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-gold-400" /> Open 24 Hours
              </span>
              <span className="text-gold-400 font-medium">Mogadishu, Somalia</span>
            </div>
            <a
              href={`tel:${RESORT_DATA.contact.phoneTel}`}
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-charcoal-850 border border-gold-500/30 text-ivory-100 text-sm font-medium"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              Call {RESORT_DATA.contact.phone}
            </a>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenReservation(); }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 text-charcoal-950 text-xs font-bold uppercase tracking-widest shadow-luxury-gold"
            >
              Reserve a Table
            </button>
          </div>
        </div>
      )}
    </>
  );
}
