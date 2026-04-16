// src/components/HeroSlider.jsx
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Example slides data (replace images with your own in /public or /src/assets)
const slides = [
  { id: 1, img: '/images/goa-beach.jpg', title: 'Relaxing Goa Beach Escapade' },
  { id: 2, img: '/images/kashmir-valley.jpg', title: 'Mesmerizing Kashmir Valley' },
  { id: 3, img: '/images/rajasthan-fort.jpg', title: 'Historic Rajasthan Tour' },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    timeoutRef.current = setInterval(() => {
      setIndex(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timeoutRef.current);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') {
        setIndex(prev => (prev + 1) % slides.length);
      } else if (e.key === 'ArrowLeft') {
        setIndex(prev => (prev - 1 + slides.length) % slides.length);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  // Pause on hover/focus
  const handleMouseEnter = () => clearInterval(timeoutRef.current);
  const handleMouseLeave = () => {
    timeoutRef.current = setInterval(() => {
      setIndex(prev => (prev + 1) % slides.length);
    }, 5000);
  };

  return (
    <div className="relative h-[calc(100vh)] overflow-hidden">
      {slides.map((slide, idx) => (
        <AnimatePresence key={slide.id}>
          {idx === index && (
            <motion.div 
              key={slide.id}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
             <img 
              src={slide.img} 
              alt={slide.title} 
              className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
              {/* Slide caption */}
              <div className="absolute bottom-12 left-12 text-white max-w-md">
                <h1 className="text-4xl md:text-5xl font-heading font-bold drop-shadow-lg">
                  {slide.title}
                </h1>
                <button 
                  className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-colors rounded text-white"
                  onClick={() => window.location.href = '/contact'}
                >
                  Book Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      ))}
      {/* Controls */}
      <div className="absolute inset-0 flex items-end justify-center pb-6 space-x-4">
        {slides.map((_, idx) => (
          <button 
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === index ? 'bg-blue-600' : 'bg-white/70'
            }`}
            onClick={() => setIndex(idx)}
            aria-label={`Go to slide ${idx+1}`}
          ></button>
        ))}
      </div>
      {/* Prev/Next Buttons */}
      <button 
        className="absolute top-1/2 left-4 p-2 bg-white/50 rounded-full"
        onClick={() => setIndex(prev => (prev - 1 + slides.length) % slides.length)}
        aria-label="Previous Slide"
      >
        ‹
      </button>
      <button 
        className="absolute top-1/2 right-4 p-2 bg-white/50 rounded-full"
        onClick={() => setIndex(prev => (prev + 1) % slides.length)}
        aria-label="Next Slide"
      >
        ›
      </button>
    </div>
  );
}
