import React from 'react';
import { RESORT_DATA } from '../data/resortData';
import { Phone, Navigation, Calendar } from 'lucide-react';

export default function MobileFloatingBar({ onOpenReservation }) {
  return (
    <aside
      aria-label="Quick Actions"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-3 bg-charcoal-950/90 backdrop-blur-xl border-t border-white/10"
    >
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        {/* Call Button */}
        <a
          href={`tel:${RESORT_DATA.contact.phoneTel}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-charcoal-850 hover:bg-charcoal-800 border border-white/5 text-ivory-100 transition-colors"
        >
          <Phone className="w-4 h-4 text-gold-400 mb-1" />
          <span className="text-[10px] uppercase font-bold tracking-wider">Call Now</span>
        </a>

        {/* Directions Button */}
        <a
          href={RESORT_DATA.contact.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-charcoal-850 hover:bg-charcoal-800 border border-white/5 text-ivory-100 transition-colors"
        >
          <Navigation className="w-4 h-4 text-gold-400 mb-1" />
          <span className="text-[10px] uppercase font-bold tracking-wider">Directions</span>
        </a>

        {/* Reserve Button */}
        <button
          onClick={onOpenReservation}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 text-charcoal-950 font-bold shadow-luxury-gold hover:scale-[1.02] transition-transform"
        >
          <Calendar className="w-4 h-4 text-charcoal-950 mb-1" />
          <span className="text-[10px] uppercase tracking-wider">Reserve</span>
        </button>
      </div>
    </aside>
  );
}
