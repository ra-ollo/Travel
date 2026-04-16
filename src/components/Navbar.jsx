import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [navSolid, setNavSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Calculates half of the total scrollable height
      const halfPage = window.innerHeight / 2;
      setNavSolid(window.scrollY > halfPage);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 left-0 z-50 backdrop-blur-md
        transition-all duration-700 ${
          navSolid
            ? 'bg-white/90 shadow-lg'
            : 'bg-white/10'
        }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/" className="text-2xl font-heading">
          TravelCo
        </Link>

        <nav className="space-x-6 text-lg font-semibold">
          <Link to="/">Home</Link>
          <Link to="/packages">Packages</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </motion.header>
  );
}