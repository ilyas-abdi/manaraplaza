import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function LightboxModal({ images, activeIndex, onClose, onSelectIndex }) {
  const currentImage = images[activeIndex];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  if (!currentImage) return null;

  const handlePrev = () => {
    onSelectIndex((activeIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    onSelectIndex((activeIndex + 1) % images.length);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal-950/95 backdrop-blur-xl p-4 sm:p-8 select-none"
      role="dialog"
      aria-modal="true"
      aria-label="Gallery image modal"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 p-3 rounded-full bg-charcoal-900/80 border border-white/10 text-ivory-200 hover:text-white hover:border-gold-400/50 transition-colors"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={handlePrev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-charcoal-900/80 border border-white/10 text-ivory-200 hover:text-white hover:border-gold-400/50 transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={handleNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-charcoal-900/80 border border-white/10 text-ivory-200 hover:text-white hover:border-gold-400/50 transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div className="max-w-5xl w-full flex flex-col items-center">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 max-h-[75vh]">
          <img
            src={currentImage.image}
            alt={currentImage.title}
            className="w-full h-full object-contain max-h-[75vh]"
          />
        </div>

        {/* Caption */}
        <div className="mt-5 text-center max-w-xl">
          <div className="inline-flex items-center gap-2 mb-1">
            <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
              {currentImage.categoryLabel}
            </span>
            <span className="text-white/30">•</span>
            <span className="text-xs text-ivory-400 font-mono">
              {activeIndex + 1} / {images.length}
            </span>
          </div>
          <h4 className="font-serif text-xl sm:text-2xl text-ivory-50">
            {currentImage.title}
          </h4>
          <p className="mt-1 text-xs sm:text-sm text-ivory-300 font-light">
            {currentImage.description}
          </p>
        </div>
      </div>
    </div>
  );
}
