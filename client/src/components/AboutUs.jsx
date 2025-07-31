import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Handshake, Settings, TrendingUp } from 'lucide-react';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
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

const AboutUsSection = () => {
  const coreValues = [
    { icon: Palette, title: 'Creativity', emoji: '🎨' },
    { icon: Handshake, title: 'Reliability', emoji: '🤝' },
    { icon: Settings, title: 'Efficiency', emoji: '⚙️' },
    { icon: TrendingUp, title: 'Growth', emoji: '📈' },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white text-black dark:bg-[#232323] dark:text-white">
      <div className="max-w-5xl mx-auto">
        {/* Main Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.h2
            variants={staggerItem}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-12 text-black dark:text-white"
          >
            Unveiling Our Identity,<br />
            Vision and Values
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl leading-relaxed max-w-4xl mx-auto mb-6"
          >
            At <span className="font-semibold italic text-black dark:text-white">House of Black Sheeps</span>, we're a community of creative people working together to build bold digital experiences. Behind every project is a team that thrives on creativity, collaboration, and purpose.
          </motion.p>
          <motion.p
            variants={staggerItem}
            className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl leading-relaxed max-w-4xl mx-auto"
          >
            We're building a culture where ideas lead and people connect—a growing community of innovators and creators united to do things differently.
          </motion.p>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-black dark:bg-white/10 rounded-3xl p-10 sm:p-16 mb-16 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-8 right-8 w-20 h-20 bg-white/5 rounded-full"></div>
          <div className="absolute bottom-8 left-8 w-16 h-16 bg-white/5 rounded-full"></div>
          <div className="absolute top-16 left-16 w-2 h-2 bg-white/20 rounded-full"></div>
          <div className="absolute bottom-16 right-16 w-3 h-3 bg-white/10 rounded-full"></div>

          <div className="relative z-10">
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
            >
              {coreValues.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    whileHover={{ scale: 1.05 }}
                    className="text-center cursor-pointer group"
                  >
                    <div className="w-16 h-16 bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 dark:group-hover:bg-black/30 transition-all duration-300">
                      <IconComponent className="w-7 h-7 text-white dark:text-white" />
                    </div>
                    <h4 className="text-white dark:text-white font-medium text-base sm:text-lg">
                      <span className="mr-2 text-lg">{value.emoji}</span>
                      {value.title}
                    </h4>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>

        {/* Know More Button */}
        <motion.div
          initial="hidden"
          whileInView="visible" 
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black dark:bg-white text-white dark:text-black px-10 py-4 rounded-full font-medium text-lg hover:bg-gray-900 dark:hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Know More About Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection