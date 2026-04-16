import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [navSolid, setNavSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
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
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-heading">
          TravelCo
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-lg font-semibold">
          <Link to="/">Home</Link>
          <Link to="/packages">Packages</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg flex flex-col items-center py-4 space-y-4">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/packages" onClick={() => setMenuOpen(false)}>Packages</Link>
          <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </motion.header>
  );
}
