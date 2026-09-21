import React from 'react';
import { RESORT_DATA } from '../data/resortData';
import { MapPin, Phone, Clock, Utensils, Star, ArrowUp } from 'lucide-react';
import logoGold from '../assets/images/manara_logo_gold.jpg';

export default function Footer() {
  const contact = RESORT_DATA.contact;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-charcoal-950 border-t border-white/10 pt-16 pb-28 lg:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Brand & Identity */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              {/* Real logo */}
              <img
                src={logoGold}
                alt="Manara Plaza Resort logo"
                className="h-14 w-14 rounded-full object-cover object-center border border-gold-500/30 bg-white shrink-0 shadow-luxury-gold"
              />
              <div>
                <span className="font-serif text-xl font-semibold tracking-luxury text-ivory-50 uppercase block">
                  {RESORT_DATA.name}
                </span>
                <span className="text-xs text-gold-400 tracking-wider">
                  Mogadishu, Somalia
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-ivory-300/80 font-light max-w-sm leading-relaxed">
              {RESORT_DATA.subtitle}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-charcoal-900 border border-gold-500/20 text-xs text-gold-300">
                <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                <span className="font-bold">{RESORT_DATA.ratings.score}</span>
                <span className="text-ivory-400">/ 5 ({RESORT_DATA.ratings.totalReviews} Google Reviews)</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-luxury text-gold-400 block mb-4">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#hero" className="text-ivory-300 hover:text-gold-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-ivory-300 hover:text-gold-300 transition-colors">
                  About Manara
                </a>
              </li>
              <li>
                <a href="#dining" className="text-ivory-300 hover:text-gold-300 transition-colors">
                  Dining & Artisan Coffee
                </a>
              </li>
              <li>
                <a href="#experience" className="text-ivory-300 hover:text-gold-300 transition-colors">
                  Experiences
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-ivory-300 hover:text-gold-300 transition-colors">
                  Visual Gallery
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-ivory-300 hover:text-gold-300 transition-colors">
                  Guest Reviews
                </a>
              </li>
              <li>
                <a href="#location" className="text-ivory-300 hover:text-gold-300 transition-colors">
                  Location & Map
                </a>
              </li>
            </ul>
          </div>

          {/* Business & Operations Info */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-luxury text-gold-400 block mb-4">
              Verified Business Details
            </span>

            <div className="space-y-3 text-xs sm:text-sm text-ivory-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Location:</strong> {contact.address} (Plus Code: {contact.plusCode})
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Telephone:</strong>{' '}
                  <a href={`tel:${contact.phoneTel}`} className="text-ivory-100 hover:text-gold-300">
                    {contact.phone}
                  </a>
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <svg className="w-4 h-4 fill-emerald-400 shrink-0 mt-0.5" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>
                  <strong>WhatsApp:</strong>{' '}
                  <a
                    href={`https://wa.me/${contact.whatsappWaMe}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ivory-100 hover:text-emerald-400"
                  >
                    +252 {contact.whatsapp}
                  </a>
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Operating Hours:</strong> Open 24 Hours Daily
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Utensils className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Services:</strong> Dine-in · Takeaway
                </span>
              </div>
            </div>

            {/* Price note */}
            <p className="text-[11px] text-ivory-400/80 pt-1 leading-relaxed">
              Price guidance: Approx. $10–15 per person based on reported guest visits.
            </p>
          </div>
        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory-400">
          <p>
            &copy; {currentYear} {RESORT_DATA.name}, Mogadishu, Somalia. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-gold-400 transition-colors p-1"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
