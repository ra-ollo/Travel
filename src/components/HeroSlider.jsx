import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const slides = [
  {
    id: 1,
    img: '/images/a.webp',
    subtitle: 'Sacred Himalayan Journey',
    title: 'Char Dham Yatra 2026',
    desc: 'Experience the divine journey to Yamunotri, Gangotri, Kedarnath & Badrinath with curated premium travel.'
  },
   {
    id: 7,
    img: '/images/heli.webp',
    subtitle: 'Spiritual Awakening',
    title: 'Go By Air - Char Dham Helicopter Tour',
    desc: '"Char Dham Yatra by helicopter makes us realize that the natural beauty of the Himalayas is nothing but the spark of the splendor of Sri Krishna."'
  },
  {
    id: 2,
    img: '/images/kedarnath.webp',
    subtitle: 'Abode of Lord Shiva',
    title: 'Kedarnath Dham',
    desc: 'Witness the spiritual power of Kedarnath nestled in the majestic Himalayas.'
  },
  {
    id: 3,
    img: '/images/badrinath.webp',
    subtitle: 'Divine Vishnu Temple',
    title: 'Badrinath Dham',
    desc: 'Seek blessings at one of the holiest Char Dham destinations.'
  },
  {
    id: 4,
    img: '/images/ganga.webp',
    subtitle: 'Origin of River Ganga',
    title: 'Gangotri Dham',
    desc: 'Feel the purity where the sacred Ganga begins its journey.'
  },
  {
    id: 5,
    img: '/images/yamuna.webp',
    subtitle: 'Sacred Yamuna Source',
    title: 'Yamunotri Dham',
    desc: 'Begin your Char Dham Yatra with divine blessings of Yamuna Maa.'
  },
  {
    id: 6,
    img: '/images/b.webp',
    subtitle: 'Spiritual Awakening',
    title: 'Complete Char Dham Package',
    desc: 'Luxury stays, guided tours & seamless travel for your sacred journey.'
  },

];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  // auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <div className="relative h-screen overflow-hidden pt-16 md:pt-20">

      {/* SLIDES */}
      {slides.map((slide, idx) => (
        <motion.div
          key={slide.id}
          className="absolute inset-0"
          initial={false}
          animate={idx === index ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 1 }}
          style={{ zIndex: idx === index ? 1 : 0 }}
        >
          <img
            src={slide.img}
            alt={slide.title}
            loading={idx === 0 ? "eager" : "lazy"}
            className="w-full h-full object-cover"
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>

          {/* content ONLY for active slide */}
          {idx === index && (
            <div className="absolute inset-0 flex items-center px-10 md:px-20">
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
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

                <div className="pt-4">
                  <Link
                    to="/contact"
                    className="relative inline-block px-8 py-3 font-semibold rounded-full overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 opacity-80 group-hover:opacity-100 transition"></span>
                    <span className="absolute inset-0 backdrop-blur-md"></span>
                    <span className="relative z-10 text-white">
                      Book Char Dham Yatra
                    </span>
                  </Link>
                </div>
              </motion.div>
            </div>
          )}
        </motion.div>
      ))}

      {/* DOTS (fixed visibility issue) */}
      <div className="absolute bottom-6 w-full flex justify-center space-x-3 z-20">
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