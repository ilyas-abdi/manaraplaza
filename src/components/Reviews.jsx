import React from 'react';
import { RESORT_DATA } from '../data/resortData';
import { Star, MessageSquareQuote, ExternalLink, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function Reviews() {
  const reviews = RESORT_DATA.reviews;
  const ratings = RESORT_DATA.ratings;

  return (
    <section id="reviews" className="py-24 sm:py-32 bg-charcoal-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-luxury text-gold-400 mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Authentic Social Proof</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-ivory-50 tracking-tight">
            Guest Impressions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ivory-300/80 font-light leading-relaxed">
            Real experiences from visitors and diners in Mogadishu, directly attributed from verified Google Maps feedback.
          </p>

          {/* Central Rating Card */}
          <div className="mt-8 inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 px-6 py-4 rounded-3xl glass-card border border-gold-500/30">
            <div className="flex items-center gap-3">
              <div className="font-serif text-4xl sm:text-5xl font-bold text-gold-400">
                {ratings.score}
              </div>
              <div className="flex flex-col items-start">
                <div className="flex text-gold-400">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-400" />
                  ))}
                  <Star className="w-4 h-4 fill-gold-400/40" />
                </div>
                <span className="text-[11px] text-ivory-300 font-medium mt-0.5">
                  Based on {ratings.totalReviews} Google Reviews
                </span>
              </div>
            </div>

            <div className="h-8 w-[1px] bg-white/10 hidden sm:block" />

            <a
              href={ratings.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-300 hover:text-gold-200 transition-colors"
            >
              <span>View on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-gold-400" />
            </a>
          </div>
        </div>

        {/* Authentic Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="glass-card rounded-2xl p-7 flex flex-col justify-between border border-white/5 hover:border-gold-500/30 transition-all duration-300"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-gold-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-400" />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-ivory-400">
                    {rev.source}
                  </span>
                </div>

                {/* Highlight */}
                <h4 className="font-serif text-lg text-ivory-100 mb-3">
                  "{rev.highlight}"
                </h4>

                {/* Body Content */}
                <p className="text-xs sm:text-sm text-ivory-300/80 font-light leading-relaxed">
                  {rev.content}
                </p>
              </div>

              {/* Author footer */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-ivory-200">{rev.author}</p>
                  <p className="text-[10px] text-ivory-400">{rev.date}</p>
                </div>
                <ShieldCheck className="w-4 h-4 text-emerald-400/80" title="Authentic Review" />
              </div>
            </div>
          ))}
        </div>

        {/* Commitment to Continuous Hospitality Notice */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-5 border border-white/10">
          <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0">
            <HeartHandshake className="w-6 h-6 text-gold-400" />
          </div>
          <div>
            <h4 className="font-serif text-lg text-ivory-50">
              Our Ongoing Commitment to Exceptional Care
            </h4>
            <p className="mt-1 text-xs sm:text-sm text-ivory-300/85 font-light leading-relaxed">
              We value every guest voice. Feedback regarding hospitality flow and peak-hour service is
              actively used by the Manara team to elevate seating speed, beverage precision, and overall guest comfort.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
