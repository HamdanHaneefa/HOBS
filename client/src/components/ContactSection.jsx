import React, { useState } from 'react';
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

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Contact Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={staggerItem}>
              <motion.h1 
                variants={staggerItem}
                className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6"
              >
                Got A Project Or<br />A Partnership In Mind?
              </motion.h1>
              <motion.p 
                variants={staggerItem}
                className="text-gray-600 text-base leading-relaxed"
              >
                Holisticly leverage other's user friendly platforms with progressive products.
              </motion.p>
            </motion.div>
            <motion.div variants={staggerItem} className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Phone:</h3>
                <div className="space-y-2">
                  <p className="text-gray-600 text-sm">+99 (0)1047011888</p>
                  <p className="text-gray-600 text-sm">+99 (0)1310011444</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Email:</h3>
                <div className="space-y-2">
                  <p className="text-gray-600 text-sm">info@madsparrow.com</p>
                  <p className="text-gray-600 text-sm">contact@most.com</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="bg-gray-50 rounded-3xl p-8 lg:p-10"
          >
            <div className="space-y-6">
              <motion.div variants={staggerItem} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  variants={staggerItem}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                />
                <motion.input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  variants={staggerItem}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                />
              </motion.div>
              <motion.input
                type="text"
                name="title"
                placeholder="Title"
                value={formData.title}
                onChange={handleInputChange}
                variants={staggerItem}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
              />
              <motion.textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                variants={staggerItem}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none"
              />
              <motion.button
                type="button"
                onClick={handleSubmit}
                variants={staggerItem}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-xl transition-colors duration-200"
              >
                Send
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;