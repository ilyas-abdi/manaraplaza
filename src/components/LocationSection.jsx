import React from 'react';
import { RESORT_DATA } from '../data/resortData';
import { MapPin, Phone, Clock, Utensils, Navigation, ExternalLink, ShieldCheck } from 'lucide-react';

export default function LocationSection() {
  const contact = RESORT_DATA.contact;
  const schedule = RESORT_DATA.schedule;

  return (
    <section id="location" className="py-24 sm:py-32 bg-charcoal-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-luxury text-gold-400 mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Mogadishu Destination</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-ivory-50 tracking-tight">
            Find Us in Mogadishu
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ivory-300/80 font-light leading-relaxed">
            Conveniently situated with round-the-clock access. Easily navigate directly or get in touch for assistance.
          </p>
        </div>

        {/* 2-Column Location & Map Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Business Details Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="glass-card rounded-3xl p-7 border border-white/10 space-y-6">
              <div className="border-b border-white/10 pb-5">
                <span className="text-[11px] uppercase tracking-luxury text-gold-400 font-semibold">
                  Official Location
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-ivory-50 mt-1">
                  {RESORT_DATA.name}
                </h3>
                <p className="text-xs text-ivory-400 mt-1">
                  Mogadishu, Somalia · Plus Code: <strong className="text-gold-300">{contact.plusCode}</strong>
                </p>
              </div>

              {/* Verified Details List */}
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-gold-500/10 flex items-center justify-center shrink-0 mt-0.5 border border-gold-500/20">
                    <MapPin className="w-4 h-4 text-gold-400" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-ivory-400 font-semibold block">
                      Address & Plus Code
                    </span>
                    <span className="text-ivory-100 font-medium">{contact.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-gold-500/10 flex items-center justify-center shrink-0 mt-0.5 border border-gold-500/20">
                    <Phone className="w-4 h-4 text-gold-400" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-ivory-400 font-semibold block">
                      Telephone
                    </span>
                    <a
                      href={`tel:${contact.phoneTel}`}
                      className="text-ivory-100 hover:text-gold-300 font-medium transition-colors"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-gold-500/10 flex items-center justify-center shrink-0 mt-0.5 border border-gold-500/20">
                    <Clock className="w-4 h-4 text-gold-400" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-ivory-400 font-semibold block">
                      Operating Hours
                    </span>
                    <span className="text-emerald-400 font-medium">Open 24 Hours Daily</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-gold-500/10 flex items-center justify-center shrink-0 mt-0.5 border border-gold-500/20">
                    <Utensils className="w-4 h-4 text-gold-400" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-ivory-400 font-semibold block">
                      Available Services
                    </span>
                    <span className="text-ivory-100 font-medium">Dine-in · Takeaway</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href={contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-widest text-center bg-gradient-to-r from-gold-500 to-gold-600 text-charcoal-950 flex items-center justify-center gap-2 shadow-luxury-gold hover:scale-[1.02] transition-transform"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
                <a
                  href={`tel:${contact.phoneTel}`}
                  className="py-3.5 px-5 rounded-xl text-xs font-bold uppercase tracking-widest text-center glass-card hover:bg-charcoal-800 text-gold-300 border border-white/10 hover:border-gold-400/40 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Embed & Interactive Surface */}
          <div className="lg:col-span-7 flex">
            <div className="w-full glass-card rounded-3xl overflow-hidden border border-white/10 relative min-h-[380px] flex flex-col">
              {/* Google Maps Embed iframe styled for luxury contrast */}
              <iframe
                title="Manara Plaza Resort Google Maps Location"
                src="https://maps.google.com/maps?q=28P2%2B5CF,+Mogadishu,+Somalia&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="w-full flex-1 min-h-[360px] border-0 filter grayscale contrast-125 opacity-85 hover:opacity-100 hover:grayscale-0 transition-all duration-700"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Map Footer Banner */}
              <div className="p-4 bg-charcoal-950/90 backdrop-blur-md border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-ivory-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                  <span>Plus Code: <strong>{contact.plusCode}</strong></span>
                </div>
                <a
                  href={contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-gold-400 hover:text-gold-300 flex items-center gap-1"
                >
                  <span>Open Full Screen</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
