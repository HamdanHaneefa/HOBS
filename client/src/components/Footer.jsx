import React from 'react';
import { ArrowRight, Dribbble, Twitter, Instagram } from 'lucide-react';
import { FaBehance } from 'react-icons/fa';
import { motion } from 'framer-motion';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: 'easeOut' } 
  },
};

const Footer = () => {
  return (
    <footer className="bg-[#f9f9f9] text-black pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto text-center space-y-8"
      >
        <motion.h2 variants={staggerItem} className="text-4xl sm:text-5xl font-light">
          Got a <span className="font-bold">PROJECT</span><br />
          <span className="font-bold">IN MIND?</span>
        </motion.h2>
        <motion.a
          href="#"
          variants={staggerItem}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center px-6 py-3 border border-black rounded-full text-lg font-medium hover:bg-black hover:text-white transition"
        >
          Let's Talk
          <ArrowRight className="ml-2 w-5 h-5" />
        </motion.a>
        <motion.div
          variants={staggerContainer}
          className="flex justify-center space-x-6 sm:hidden pt-6"
        >
          {[<Dribbble />, <Twitter />, <Instagram />, <FaBehance />].map((Icon, index) => (
            <motion.a
              key={index}
              href="#"
              variants={staggerItem}
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center"
            >
              {Icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="mt-24 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto border-t border-gray-300 pt-12 text-left hidden sm:grid"
      >
        {[
          { title: 'Dribbble', handle: '@madsparrow_dev', Icon: <Dribbble className="w-4 h-4" /> },
          { title: 'Twitter', handle: '@mad_sparrow', Icon: <Twitter className="w-4 h-4" /> },
          { title: 'Instagram', handle: '@madsparrow', Icon: <Instagram className="w-4 h-4" /> },
          { title: 'Behance', handle: '@madsparrow_dev', Icon: <FaBehance className="w-4 h-4" /> },
        ].map((social, index) => (
          <motion.div key={index} variants={staggerItem} className="space-y-2">
            <h4 className="font-semibold text-lg">{social.title}</h4>
            <p className="text-gray-500">{social.handle}</p>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              {social.Icon}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-12 text-center text-sm text-gray-400">
        ©2022 Mad Sparrow, All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;