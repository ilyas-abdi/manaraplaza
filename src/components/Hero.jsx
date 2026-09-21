import React from 'react';
import { RESORT_DATA } from '../data/resortData';
import { Star, MapPin, Clock, ArrowDown, Utensils } from 'lucide-react';
import heroImg from '../assets/images/hero_facade.jpg';

export default function Hero({ onOpenReservation }) {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Background Image with Layered Cinematic Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Manara Plaza Resort exterior facade, restaurant and cafe entrance in Mogadishu"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-subtle filter brightness-[0.78] contrast-[1.08]"
          loading="eager"
        />
        {/* Gradients for readability and luxury tone */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-charcoal-950/40" />
        <div className="absolute inset-0 bg-radial-vignette opacity-70" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Location & Open 24h Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-gold-400/25 mb-6 text-xs text-ivory-200 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
          <span className="font-semibold text-gold-300 uppercase tracking-wider text-[11px]">
            {RESORT_DATA.schedule.hours}
          </span>
          <span className="text-white/30">|</span>
          <span className="flex items-center gap-1 text-ivory-300">
            <MapPin className="w-3 h-3 text-gold-400" />
            {RESORT_DATA.contact.city}, {RESORT_DATA.contact.country}
          </span>
        </div>

        {/* Brand Name */}
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-luxury text-gold-400 mb-3">
          {RESORT_DATA.name}
        </p>

        {/* Main Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-ivory-50 tracking-tight leading-[1.08] mb-6 max-w-4xl">
          Experience Comfort. <br />
          <span className="italic font-light gold-gradient-text">Taste Excellence.</span>
        </h1>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg md:text-xl text-ivory-200/90 font-light max-w-2xl mb-10 leading-relaxed">
          {RESORT_DATA.subtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14">
          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-charcoal-950 shadow-luxury-gold hover:shadow-gold-500/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
          >
            Reserve a Table
          </button>

          <a
            href="#about"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-widest text-ivory-100 glass-card hover:bg-charcoal-800/80 hover:border-gold-400/40 transition-all duration-300"
          >
            Explore Manara
          </a>
        </div>

        {/* Bottom Trust Indicators & Verified Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-3xl pt-8 border-t border-white/10 text-left">
          {/* Rating */}
          <div className="glass-card p-3 sm:p-4 rounded-2xl flex flex-col justify-between">
            <div className="flex items-center gap-1 text-gold-400 mb-1">
              <Star className="w-4 h-4 fill-gold-400" />
              <span className="text-sm font-bold text-ivory-100">{RESORT_DATA.ratings.score}</span>
              <span className="text-xs text-ivory-400">/ 5</span>
            </div>
            <p className="text-[11px] text-ivory-300 font-medium">
              {RESORT_DATA.ratings.totalReviews} Google Reviews
            </p>
          </div>

          {/* Opening */}
          <div className="glass-card p-3 sm:p-4 rounded-2xl flex flex-col justify-between">
            <div className="flex items-center gap-1.5 text-gold-400 mb-1">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-bold text-ivory-100">Always Open</span>
            </div>
            <p className="text-[11px] text-ivory-300 font-medium">24 Hours Daily</p>
          </div>

          {/* Services */}
          <div className="glass-card p-3 sm:p-4 rounded-2xl flex flex-col justify-between">
            <div className="flex items-center gap-1.5 text-gold-400 mb-1">
              <Utensils className="w-4 h-4" />
              <span className="text-sm font-bold text-ivory-100">Dine-in</span>
            </div>
            <p className="text-[11px] text-ivory-300 font-medium">& Takeaway Service</p>
          </div>

          {/* Price Range Guidance */}
          <div className="glass-card p-3 sm:p-4 rounded-2xl flex flex-col justify-between">
            <div className="text-xs font-semibold text-gold-400 mb-1 uppercase tracking-wider">
              {RESORT_DATA.pricing.approximateRange}
            </div>
            <p className="text-[11px] text-ivory-300 font-medium">Approx. per person</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="mt-8 text-ivory-400 hover:text-gold-300 transition-colors p-2"
          aria-label="Scroll down to About section"
        >
          <ArrowDown className="w-5 h-5 animate-bounce opacity-70" />
        </a>
      </div>
    </section>
  );
}
