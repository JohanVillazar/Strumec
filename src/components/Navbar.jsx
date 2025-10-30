
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Building2 } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Inicio", path: "/" },
    { name: "Misión y Visión", path: "/mision-vision" },
    { name: "Objetivos", path: "/objetivos" },
    { name: "Políticas", path: "/politicas" },
    { name: "Proyectos", path: "/proyectos" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-[#1a1a1a]/90 backdrop-blur-md shadow-2xl"
          : "bg-white/90 backdrop-blur-md shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
  <motion.img
    src="/strumec.jpeg"
    alt="Strumec Logo"
    whileHover={{ scale: 1.1, rotate: 5 }}
    transition={{ duration: 0.3 }}
    className="h-20 w-20 object-contain rounded-md shadow-md"
  />
</Link>



          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  location.pathname === item.path
                    ? "text-[#77c3cf]"
                    : scrolled
                    ? "text-[#f6fbfb] hover:text-[#77c3cf]"
                    : "text-gray-900 hover:text-[#77c3cf]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors duration-300 ${
                scrolled
                  ? "text-[#f6fbfb] hover:text-[#77c3cf]"
                  : "text-gray-900 hover:text-[#77c3cf]"
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-t border-[#77c3cf]/20 ${
              scrolled
                ? "bg-[#1a1a1a]/95 backdrop-blur-md"
                : "bg-white/95 backdrop-blur-md"
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-300 ${
                    location.pathname === item.path
                      ? "text-[#77c3cf] bg-[#77c3cf]/10"
                      : scrolled
                      ? "text-[#f6fbfb] hover:text-[#77c3cf] hover:bg-[#77c3cf]/5"
                      : "text-gray-900 hover:text-[#77c3cf] hover:bg-[#77c3cf]/5"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;