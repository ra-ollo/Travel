import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

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

  const menuItems = [
    { to: "/", label: "Home" },
    { to: "/packages", label: "Packages" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ];

  // animation variants
  const menuVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
    exit: { opacity: 0, y: -20 }
  };

  const itemVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 left-0 z-50 backdrop-blur-md transition-all duration-700 ${
        navSolid ? 'bg-white/90 shadow-lg' : 'bg-white/10'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/fav.png"
            alt="Logo"
            className="h-16 w-auto object-contain transition-transform duration-300 scale-125 hover:scale-150"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-lg font-medium">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative text-gray-800 hover:text-black transition-all duration-300 group"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* PREMIUM MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-gradient-to-b from-gray-900 to-gray-800 shadow-2xl z-50"
          >
            <motion.div
              variants={menuVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col items-center py-8 space-y-6 text-lg font-medium"
            >
              {menuItems.map((item) => (
                <motion.div key={item.to} variants={itemVariant}>
                  <Link
                    to={item.to}
                    onClick={() => setMenuOpen(false)}
                    className="text-white/90 hover:text-white transition-all duration-200 active:scale-95 text-xl tracking-wide"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}