import React, { useState } from 'react';
import { RESORT_DATA } from '../data/resortData';
import { Eye, Camera, Maximize2 } from 'lucide-react';
import LightboxModal from './LightboxModal';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const galleryItems = RESORT_DATA.gallery;

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'restaurant', label: 'Restaurant' },
    { id: 'food', label: 'Food' },
    { id: 'coffee', label: 'Coffee' },
    { id: 'resort', label: 'Resort & Atmosphere' },
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => {
        if (activeCategory === 'resort') return item.category === 'resort';
        return item.category === activeCategory;
      });

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-charcoal-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-luxury text-gold-400 mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Storytelling</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-ivory-50 tracking-tight">
            The Gallery
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ivory-300/80 font-light leading-relaxed">
            A glimpse into the spaces, culinary details, and ambient lighting that define Manara Plaza Resort.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gold-500 text-charcoal-950 shadow-luxury-gold scale-105'
                  : 'glass-card text-ivory-300 hover:text-gold-300 hover:border-gold-500/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative rounded-2xl overflow-hidden glass-card cursor-pointer border border-white/10 hover:border-gold-400/50 transition-all duration-500 shadow-luxury"
            >
              {/* Image Frame */}
              <div className="h-72 sm:h-80 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                  loading="lazy"
                />
              </div>

              {/* Gradient Overlay & Hover Information */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity flex flex-col justify-between p-6">
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-charcoal-950/80 backdrop-blur-md text-gold-300 border border-gold-500/20">
                    {item.categoryLabel}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-charcoal-950/70 backdrop-blur-md flex items-center justify-center text-ivory-200 group-hover:text-gold-300 group-hover:scale-110 transition-all">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-xl text-ivory-50 group-hover:text-gold-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-ivory-300/80 font-light line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <LightboxModal
          images={filteredItems}
          activeIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onSelectIndex={(newIndex) => setLightboxIndex(newIndex)}
        />
      )}
    </section>
  );
}
