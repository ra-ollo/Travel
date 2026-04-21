import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    img: '/images/a.jpg',
    subtitle: 'Sacred Himalayan Journey',
    title: 'Char Dham Yatra 2026',
    desc: 'Experience the divine journey to Yamunotri, Gangotri, Kedarnath & Badrinath with curated premium travel.'
  },
  {
    id: 2,
    img: '/images/kedarnath.png',
    subtitle: 'Abode of Lord Shiva',
    title: 'Kedarnath Dham',
    desc: 'Witness the spiritual power of Kedarnath nestled in the majestic Himalayas.'
  },
  {
    id: 3,
    img: '/images/badrinath.jpg',
    subtitle: 'Divine Vishnu Temple',
    title: 'Badrinath Dham',
    desc: 'Seek blessings at one of the holiest Char Dham destinations.'
  },
  {
    id: 4,
    img: '/images/ganga.jpg',
    subtitle: 'Origin of River Ganga',
    title: 'Gangotri Dham',
    desc: 'Feel the purity where the sacred Ganga begins its journey.'
  },
  {
    id: 5,
    img: '/images/yamuna.jpg',
    subtitle: 'Sacred Yamuna Source',
    title: 'Yamunotri Dham',
    desc: 'Begin your Char Dham Yatra with divine blessings of Yamuna Maa.'
  },
  {
    id: 6,
    img: '/images/b.jpg',
    subtitle: 'Spiritual Awakening',
    title: 'Complete Char Dham Package',
    desc: 'Luxury stays, guided tours & seamless travel for your sacred journey.'
  }
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setInterval(() => {
      setIndex(prev => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timeoutRef.current);
  }, []);

  const variants = {
    initial: { opacity: 0, x: 80 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -80 }
  };

  return (
    <div className="relative h-screen overflow-hidden">
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

              {/* Dark premium overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>

              {/* Content */}
              <div className="absolute inset-0 flex items-center px-10 md:px-20">
                <motion.div
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.8 }}
                  className="text-white max-w-xl space-y-6"
                >
                  <p className="uppercase tracking-widest text-sm text-yellow-400">
                    {slide.subtitle}
                  </p>

                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    {slide.title}
                  </h1>

                  <p className="text-lg text-gray-200 leading-relaxed">
                    {slide.desc}
                  </p>

                  {/* CTA */}
                  <div className="pt-4">
                    <Link
                      to="/contact"
                      className="relative inline-block px-8 py-3 font-semibold rounded-full overflow-hidden group">
                      <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 opacity-80 group-hover:opacity-100 transition"></span>
                        <span className="absolute inset-0 backdrop-blur-md"></span>

                          <span className="relative z-10 text-white">
                          Book Char Dham Yatra
                          </span>
                      </Link>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 w-full flex justify-center space-x-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setIndex(idx)}
            className={`w-3 h-3 rounded-full transition ${
              idx === index ? 'bg-yellow-400 scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}