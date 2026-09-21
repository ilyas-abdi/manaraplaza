import React, { useState } from 'react';
import { RESORT_DATA } from '../data/resortData';
import { Calendar, Users, Clock, Phone, User, MessageSquare, CheckCircle, ExternalLink, ArrowRight, X } from 'lucide-react';

export default function ReservationSection({ sectionRef }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '19:00',
    guests: '2',
    seating: 'indoor',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Generate structured, professional WhatsApp message
  const reservationText = encodeURIComponent(
    `🌟 *MANARA PLAZA RESORT — NEW RESERVATION REQUEST* 🌟\n` +
    `━━━━━━━━━━━━━━━━━━━━\n` +
    `👤 *Name:* ${formData.name || 'Not provided'}\n` +
    `📞 *Customer Phone:* ${formData.phone || 'Not provided'}\n` +
    `📅 *Date:* ${formData.date || 'Today'}\n` +
    `⏰ *Preferred Time:* ${formData.time}\n` +
    `👥 *Guests:* ${formData.guests} Guest(s)\n` +
    `🪑 *Seating:* ${formData.seating}\n` +
    (formData.message ? `📝 *Special Notes:* ${formData.message}\n` : '') +
    `━━━━━━━━━━━━━━━━━━━━\n` +
    `_Sent via Manara Plaza Resort Website_`
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const whatsappUrl = `https://wa.me/${RESORT_DATA.contact.whatsappWaMe}?text=${reservationText}`;

    // Open WhatsApp directly in new window / tab
    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  return (
    <section
      id="reservation"
      ref={sectionRef}
      className="py-24 sm:py-32 bg-charcoal-950 relative overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-luxury text-gold-400 mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Table & Experience Bookings</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-ivory-50 tracking-tight">
            Reserve Your Experience
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ivory-300/85 font-light max-w-2xl mx-auto leading-relaxed">
            Join us for an unforgettable dining or coffee experience in Mogadishu. Submit your reservation
            request below or reach our team directly at <strong className="text-gold-300 font-medium">{RESORT_DATA.contact.phone}</strong>.
          </p>
        </div>

        {/* Ready-to-Connect Reservation Form Container */}
        <div className="glass-card-gold rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="res-name" className="block text-xs font-semibold uppercase tracking-wider text-ivory-200 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gold-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      id="res-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Ahmed Omar"
                      className="w-full bg-charcoal-900 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-sm text-ivory-100 placeholder-ivory-400/50 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="res-phone" className="block text-xs font-semibold uppercase tracking-wider text-ivory-200 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gold-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      id="res-phone"
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +252 61 XXX XXXX"
                      className="w-full bg-charcoal-900 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-sm text-ivory-100 placeholder-ivory-400/50 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all"
                    />
                  </div>
                </div>

                {/* Date */}
                <div>
                  <label htmlFor="res-date" className="block text-xs font-semibold uppercase tracking-wider text-ivory-200 mb-2">
                    Date *
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-gold-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      id="res-date"
                      type="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-charcoal-900 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-sm text-ivory-100 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all"
                    />
                  </div>
                </div>

                {/* Time */}
                <div>
                  <label htmlFor="res-time" className="block text-xs font-semibold uppercase tracking-wider text-ivory-200 mb-2">
                    Preferred Time (24h Service) *
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-gold-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <select
                      id="res-time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full bg-charcoal-900 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-sm text-ivory-100 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all"
                    >
                      <option value="08:00">08:00 AM — Morning Breakfast</option>
                      <option value="10:30">10:30 AM — Coffee & Bites</option>
                      <option value="13:00">01:00 PM — Lunch Service</option>
                      <option value="15:30">03:30 PM — Afternoon Coffee</option>
                      <option value="18:30">06:30 PM — Sunset Dining</option>
                      <option value="19:30">07:30 PM — Evening Dinner</option>
                      <option value="21:00">09:00 PM — Late Dinner</option>
                      <option value="23:00">11:00 PM — Night Lounge</option>
                    </select>
                  </div>
                </div>

                {/* Number of Guests */}
                <div>
                  <label htmlFor="res-guests" className="block text-xs font-semibold uppercase tracking-wider text-ivory-200 mb-2">
                    Number of Guests *
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-gold-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <select
                      id="res-guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full bg-charcoal-900 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-sm text-ivory-100 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests (Table for Two)</option>
                      <option value="4">3–4 Guests (Family / Friends)</option>
                      <option value="6">5–6 Guests</option>
                      <option value="8">7–8 Guests (Large Party)</option>
                      <option value="10+">9+ Guests (Group Booking)</option>
                    </select>
                  </div>
                </div>

                {/* Seating Preference */}
                <div>
                  <label htmlFor="res-seating" className="block text-xs font-semibold uppercase tracking-wider text-ivory-200 mb-2">
                    Seating Preference
                  </label>
                  <select
                    id="res-seating"
                    name="seating"
                    value={formData.seating}
                    onChange={handleChange}
                    className="w-full bg-charcoal-900 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-ivory-100 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all"
                  >
                    <option value="indoor">Main Restaurant Indoor</option>
                    <option value="coffee-lounge">Artisan Coffee Lounge</option>
                    <option value="terrace">Outdoor Terrace Atmosphere</option>
                    <option value="quiet-corner">Quiet Corner / Business Table</option>
                  </select>
                </div>
              </div>

              {/* Special Message */}
              <div>
                <label htmlFor="res-message" className="block text-xs font-semibold uppercase tracking-wider text-ivory-200 mb-2">
                  Special Requests or Dietary Notes (Optional)
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-gold-400 absolute left-4 top-4" />
                  <textarea
                    id="res-message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Let us know if you are celebrating a special occasion or have preferences..."
                    className="w-full bg-charcoal-900 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm text-ivory-100 placeholder-ivory-400/50 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all"
                  />
                </div>
              </div>

              {/* Notice & CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-ivory-400 font-light text-center sm:text-left">
                  Open 24 Hours · Direct WhatsApp to <span className="text-gold-300 font-medium">{RESORT_DATA.contact.phone}</span>
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-500 hover:from-emerald-400 hover:to-emerald-500 text-white shadow-luxury-gold hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-2.5"
                >
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span>{isSubmitting ? 'Opening WhatsApp...' : 'Book via WhatsApp'}</span>
                </button>
              </div>

              {/* Direct connect note */}
              <div className="mt-4 pt-4 border-t border-white/5 text-[11px] text-ivory-400/70 text-center flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                <span>Instant reservation via WhatsApp Direct to +252 {RESORT_DATA.contact.phone}</span>
              </div>
            </form>
          ) : (
            /* Confirmation state */
            <div className="text-center py-6 animate-fadeIn space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">
                  WhatsApp Direct Opened
                </span>
                <h3 className="font-serif text-3xl text-ivory-50 mt-1">
                  Thank You, {formData.name || 'Valued Guest'}
                </h3>
                <p className="mt-2 text-sm text-ivory-300 font-light max-w-md mx-auto">
                  Your reservation request for <strong>{formData.guests} guest(s)</strong> has been prepared. If WhatsApp did not open automatically, tap the button below:
                </p>
              </div>

              {/* Immediate Direct Connect Actions */}
              <div className="p-5 rounded-2xl bg-charcoal-900 border border-gold-500/20 max-w-lg mx-auto space-y-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${RESORT_DATA.contact.phoneTel}`}
                    className="flex-1 py-3 px-4 rounded-xl bg-charcoal-800 hover:bg-charcoal-700 text-ivory-100 text-xs font-bold uppercase tracking-wider border border-white/10 flex items-center justify-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-gold-400" />
                    Call {RESORT_DATA.contact.phone}
                  </a>
                  <a
                    href={`https://wa.me/${RESORT_DATA.contact.whatsappWaMe}?text=${reservationText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
                  >
                    <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    <span>Click Here for WhatsApp</span>
                  </a>
                </div>
              </div>

              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-ivory-400 hover:text-gold-300 underline tracking-wider uppercase transition-colors"
              >
                Modify or Make Another Request
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
