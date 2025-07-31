import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import AboutOrganizationSection from '../components/AboutOrganizationSection';



const JoinTeamSection = () => {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
    
    
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gray-900 min-h-[80vh] sm:min-h-[85vh] flex items-center justify-center">
      
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80")'
            }}
          />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center text-white w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="flex flex-col items-center justify-center space-y-6 sm:space-y-8"
        >
          {/* Icon */}
          <motion.div variants={staggerItem}>
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto">
              <Users className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={staggerItem}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight sm:leading-tight md:leading-tight lg:leading-tight px-2 sm:px-4 max-w-4xl mx-auto"
          >
            Meet the Rebels Behind the Vision
          </motion.h2>

          {/* Subheading */}
          <motion.p
            variants={staggerItem}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 px-4 sm:px-6 max-w-4xl mx-auto leading-relaxed"
          >
            We're not a marketing team. We're not just tech. We're a tribe of creative disruptors — designing, building, and shaping the future.
          </motion.p>

          {/* Button */}
          <motion.button
            variants={staggerItem}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl mt-4"
          >
            Meet Our Tribe
          </motion.button>
        </motion.div>
      </div>

      {/* Enhanced Mobile Styling */}
      <style jsx>{`
        @media (max-width: 768px) {
          video {
            object-position: center center;
            min-height: 100%;
          }
        }
        
        @media (max-width: 640px) {
          section {
            min-height: 75vh;
          }
        }
        
        @media (max-width: 480px) {
          section {
            min-height: 70vh;
          }
        }
      `}</style>
    </section>

      {/* About Our Organization  */}
      <AboutOrganizationSection/>

    </>
  );
};

export default JoinTeamSection;