/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../assets/file.svg'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Works', href: '/works' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
  { name: 'Community', href: '/community' },
];

const staggerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const logoVariants = {
  hidden: { opacity: 0, y: -25, scale: 0.8 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const controlsVariants = {
  hidden: { opacity: 0, y: -20, x: 20 },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.2,
    },
  },
};

const Navbar = () => {
  const [isDark, setIsDark] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = savedTheme === 'dark' || (!savedTheme && true);
    setIsDark(prefersDark);
    document.documentElement.classList.toggle('dark', prefersDark);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = Math.abs(currentScrollY - lastScrollY);

      if (scrollDifference > 10) {
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
          const scrollDownAmount = currentScrollY - lastScrollY;
          if (scrollDownAmount > 30) {
            setIsVisible(false);
          }
        } else if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        }
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newTheme);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.46, 0.45, 0.94],
          type: 'spring',
          stiffness: 80,
          damping: 25,
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          isDark ? 'bg-[#1C1C1C]/95' : 'bg-white/95'
        } backdrop-blur-md shadow-lg`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* <motion.div
              className="flex items-center"
              variants={logoVariants}
              initial="hidden"
              animate={isVisible ? 'show' : 'hidden'}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isDark ? 'bg-white' : 'bg-black'
                }`}
              >
                <span
                  className={`text-lg font-medium ${
                    isDark ? 'text-black' : 'text-white'
                  }`}
                >
                  m
                </span>
              </div>
            </motion.div> */}

            <motion.div
              className="flex items-center"
              variants={logoVariants}
              initial="hidden"
              animate={isVisible ? 'show' : 'hidden'}
            >
              <Link to="/">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-10 w-auto object-contain"
                />
              </Link>
            </motion.div>

            <motion.div
              className="hidden md:flex space-x-8"
              variants={staggerVariants}
              initial="hidden"
              animate={isVisible ? 'show' : 'hidden'}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  variants={itemVariants}
                  custom={index}
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                >
                  <Link
                    to={item.href}
                    className={`transition-all duration-300 hover:scale-105 font-medium ${
                      isDark
                        ? 'text-gray-300 hover:text-white'
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex items-center space-x-4"
              variants={controlsVariants}
              initial="hidden"
              animate={isVisible ? 'show' : 'hidden'}
            >
              <motion.button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-all duration-300 ${
                  isDark
                    ? 'hover:bg-gray-700 text-gray-300'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.button>
              <motion.button
                className={`p-2 rounded-full transition-all duration-300 ${
                  isDark
                    ? 'hover:bg-gray-700 text-gray-300'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Search className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                className={`md:hidden p-2 rounded-full transition-all duration-300 ${
                  isDark
                    ? 'hover:bg-gray-700 text-gray-300'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9, rotate: 90 }}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.button>
            </motion.div>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`md:hidden overflow-hidden ${
                isDark ? 'bg-[#1C1C1C]' : 'bg-white'
              } border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}
            >
              <motion.div
                className="px-4 py-2 space-y-1"
                variants={staggerVariants}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                {navItems.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <Link
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-3 py-2 rounded-md font-normal transition-all duration-300 ${
                        isDark
                          ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                          : 'text-gray-600 hover:text-black hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {!isVisible && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40 flex flex-col items-center space-y-1 transition-opacity duration-700">
          <div className={`w-6 h-0.5 rounded-full ${isDark ? 'bg-white' : 'bg-black'}`} />
          <div className={`w-6 h-0.5 rounded-full ${isDark ? 'bg-white' : 'bg-black'}`} />
        </div>
      )}
    </>
  );
};

export default Navbar;
