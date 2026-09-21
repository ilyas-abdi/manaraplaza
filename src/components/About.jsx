import React from 'react';
import { RESORT_DATA } from '../data/resortData';
import { Sparkles, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import rooftopImg from '../assets/images/manara_rooftop_terrace.jpg';

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-charcoal-900 relative overflow-hidden">
      {/* Background Subtle Accent Gradients */}
      <div className="absolute -top-40 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-luxury text-gold-400">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>About Manara Plaza Resort</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-ivory-50 leading-[1.15] tracking-tight">
              A Modern Hospitality Experience in Mogadishu
            </h2>

            <div className="space-y-4 text-ivory-200/90 text-base sm:text-lg font-light leading-relaxed">
              <p>
                Situated at <span className="text-gold-300 font-normal">28P2+5CF</span> in Mogadishu,{' '}
                <strong className="font-medium text-ivory-50">Manara Plaza Resort</strong> brings together
                contemporary architecture and refined dining into a calm, welcoming destination for both
                local residents and visiting travelers.
              </p>

              <p>
                Recognized by guests as one of Mogadishu’s standout modern venues, Manara is designed to
                deliver a relaxed, stylish environment. Whether you are visiting for our renowned artisan
                coffee, enjoying a full dine-in meal, or picking up a freshly prepared takeaway order, our
                doors remain open <span className="text-gold-300 font-normal">24 hours a day</span>.
              </p>
            </div>

            {/* Verified Attributes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-charcoal-850/80 border border-white/5">
                <div className="w-6 h-6 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-gold-400" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-ivory-100">
                    24/7 Hospitality
                  </h4>
                  <p className="text-xs text-ivory-300/80 mt-0.5">
                    Continuous dining and beverage service day and night.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-charcoal-850/80 border border-white/5">
                <div className="w-6 h-6 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-gold-400" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-ivory-100">
                    Artisan Coffee Hub
                  </h4>
                  <p className="text-xs text-ivory-300/80 mt-0.5">
                    A stylish destination praised for ambiance and social warmth.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-charcoal-850/80 border border-white/5">
                <div className="w-6 h-6 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-gold-400" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-ivory-100">
                    Dine-in & Takeaway
                  </h4>
                  <p className="text-xs text-ivory-300/80 mt-0.5">
                    Flexible hospitality suited to meetings, quiet dinners, or meals to go.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-charcoal-850/80 border border-white/5">
                <div className="w-6 h-6 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-ivory-100">
                    Authentic Transparency
                  </h4>
                  <p className="text-xs text-ivory-300/80 mt-0.5">
                    Approx. $10–15 per person dining guidance with genuine hospitality.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="#experience"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest bg-charcoal-800 hover:bg-charcoal-700 text-gold-300 border border-gold-500/30 hover:border-gold-400 transition-all duration-300 group"
              >
                <span>Discover Manara</span>
                <ArrowRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Image Column with Editorial Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative gold frame */}
              <div className="absolute -inset-3 rounded-2xl border border-gold-500/20 pointer-events-none" />
              
              {/* Main Image Container */}
              <div className="relative rounded-xl overflow-hidden shadow-luxury">
                <img
                  src={rooftopImg}
                  alt="Open-air rooftop terrace dining and social ambiance at Manara Plaza Resort Mogadishu"
                  className="w-full h-[450px] sm:h-[500px] lg:h-[540px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/85 via-charcoal-950/20 to-transparent" />
                
                {/* Floating caption badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl glass-card border border-white/10">
                  <p className="text-xs text-gold-400 uppercase tracking-widest font-semibold">
                    Open-Air Rooftop & Terrace
                  </p>
                  <p className="text-sm font-serif text-ivory-100 mt-0.5">
                    Lively open-air dining & evening coffee atmosphere overlooking Mogadishu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
