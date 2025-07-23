import React from 'react';
import { motion } from 'framer-motion';

const ContactMapSection = () => {
  return (
    <section className="w-full pt-24 pb-12 bg-white flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="w-[95%] max-w-[800px] rounded-2xl overflow-hidden shadow-sm"
      >
        <iframe
          title="Cospace Coworks Kottakkal Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.1013203591734!2d76.00544447477742!3d11.04272018912416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba61d0c542d83c7%3A0x9a98f5577e10b47a!2sCospace%20Coworks!5e0!3m2!1sen!2sin!4v1721299182942!5m2!1sen!2sin"
          className="w-full h-[250px] sm:h-[280px] md:h-[350px] lg:h-[400px] border-none"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </section>
  );
};

export default ContactMapSection;