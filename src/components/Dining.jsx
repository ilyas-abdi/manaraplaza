import React, { useState } from 'react';
import { RESORT_DATA } from '../data/resortData';
import { Coffee, UtensilsCrossed, Clock, Info, ExternalLink, Sparkles, X, Check } from 'lucide-react';

export default function Dining({ onOpenReservation }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [menuModalOpen, setMenuModalOpen] = useState(false);

  const categories = RESORT_DATA.menuCategories;
  const menuItems = RESORT_DATA.menuPreviewItems;

  const filteredItems = activeCategory === 'all'
    ? menuItems
    : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="dining" className="py-24 sm:py-32 bg-charcoal-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-luxury text-gold-400 mb-3">
            <Coffee className="w-3.5 h-3.5" />
            <span>Culinary & Coffee Excellence</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-ivory-50 tracking-tight leading-tight">
            Dining at Manara
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ivory-300/90 font-light leading-relaxed">
            From sunrise roasts to late-night suppers, discover our culinary curation and celebrated
            artisan coffee culture, open around the clock in Mogadishu.
          </p>

          {/* Transparent Price Guide Notice */}
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-gold-500/20 text-xs text-ivory-300">
            <Info className="w-3.5 h-3.5 text-gold-400 shrink-0" />
            <span>
              Approximate dining guidance: <strong className="text-gold-300">{RESORT_DATA.pricing.approximateRange}</strong> based on visitor dining reports.
            </span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gold-500 text-charcoal-950 shadow-luxury-gold scale-105'
                  : 'glass-card text-ivory-300 hover:text-gold-300 hover:border-gold-500/40'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-2xl overflow-hidden group hover:border-gold-500/40 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Card Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-charcoal-950/80 backdrop-blur-md text-gold-400 border border-gold-500/30">
                  {item.badge}
                </span>
                <span className="absolute bottom-3 right-4 text-xs font-semibold text-gold-300">
                  {item.approxTier}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl text-ivory-50 group-hover:text-gold-300 transition-colors">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-ivory-300/80 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-ivory-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-gold-400" />
                    Available 24 Hours
                  </span>
                  <span className="text-gold-400 font-medium">Dine-in · Takeaway</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Menu Exploration Bar */}
        <div className="glass-card-gold rounded-3xl p-8 sm:p-10 text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h3 className="font-serif text-2xl sm:text-3xl text-ivory-50">
              Explore Our Full Seasonal Menu
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-ivory-300/80 font-light max-w-lg">
              Fresh daily specials, single-origin roasts, and customized platters. Connect with our team to inquire or reserve your table.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => setMenuModalOpen(true)}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest bg-charcoal-900 hover:bg-charcoal-800 text-gold-300 border border-gold-500/40 hover:border-gold-300 transition-colors"
            >
              Explore Menu Preview
            </button>
            <button
              onClick={onOpenReservation}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-gold-500 to-gold-600 text-charcoal-950 shadow-luxury-gold hover:scale-102 transition-transform"
            >
              Reserve a Table
            </button>
          </div>
        </div>
      </div>

      {/* Menu Modal / Architecture Drawer */}
      {menuModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/90 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
        >
          <div className="glass-card max-w-2xl w-full rounded-3xl p-6 sm:p-8 relative border border-gold-500/30 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setMenuModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-ivory-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close menu modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-luxury text-gold-400 mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Menu Architecture Preview</span>
            </div>

            <h3 className="font-serif text-3xl text-ivory-50">
              Manara Dining & Coffee Menu
            </h3>

            <div className="my-5 p-4 rounded-xl bg-charcoal-900/90 border border-gold-500/20 text-xs text-ivory-300 space-y-2">
              <p className="font-medium text-gold-300">
                Notice: Official Live Digital Menu Integration Ready
              </p>
              <p>
                Manara Plaza Resort features rotating seasonal culinary selections and artisan coffee. 
                Approximate guest dining tier is <strong>$10–$15 per person</strong>.
              </p>
              <p className="text-[11px] text-ivory-400">
                This interface is architected to seamlessly connect with live Point-of-Sale (POS), 
                online ordering, and daily digital kitchen feeds.
              </p>
            </div>

            {/* Menu Sections Outline */}
            <div className="space-y-4 my-6">
              <div className="p-4 rounded-xl bg-charcoal-850/60 border border-white/5">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-serif text-lg text-ivory-100">Artisan Coffee & Espresso</h4>
                  <span className="text-xs text-gold-400 font-semibold">24/7 Available</span>
                </div>
                <p className="text-xs text-ivory-400">
                  Espresso, Americano, Cortado, Flat White, Spanish Latte, V60 Pourover, Cold Brew.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-charcoal-850/60 border border-white/5">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-serif text-lg text-ivory-100">Main Dishes & Regional Grills</h4>
                  <span className="text-xs text-gold-400 font-semibold">~$10–$15 Tier</span>
                </div>
                <p className="text-xs text-ivory-400">
                  Tender coastal spiced meats, fresh catch of the day, fragrant basmati platters, savory wraps.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-charcoal-850/60 border border-white/5">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-serif text-lg text-ivory-100">Fresh Refreshments & Desserts</h4>
                  <span className="text-xs text-gold-400 font-semibold">Fresh Pressed</span>
                </div>
                <p className="text-xs text-ivory-400">
                  Seasonal Mogadishu mango and passion juices, delicate pastries, artisanal croissants.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
              <a
                href={`tel:${RESORT_DATA.contact.phoneTel}`}
                className="flex-1 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-widest text-center bg-charcoal-850 hover:bg-charcoal-800 text-gold-300 border border-gold-500/30"
              >
                Inquire via Phone ({RESORT_DATA.contact.phone})
              </a>
              <button
                onClick={() => {
                  setMenuModalOpen(false);
                  onOpenReservation();
                }}
                className="flex-1 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-widest text-center bg-gradient-to-r from-gold-500 to-gold-600 text-charcoal-950"
              >
                Request a Table
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
