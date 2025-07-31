import React, {useState, useEffect, useRef } from 'react';

const PartnersSection = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);
  const animationRef = useRef(null);

  // Partners data - only 3 partners as requested
  const partners = [
    {
      name: "Vida World",
      logo: "https://www.vidaworld.com/content/dam/vida2-0/global/vida-2-0/vida-vx2/VidaLogo.svg",
      url: "https://www.vidaworld.com/",
      alt: "Vida World Logo"
    },
    {
      name: "7X Traders", 
      logo: "https://www.7xtraders.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnewlogo.43d15b12.png&w=384&q=75",
      url: "https://www.7xtraders.com",
      alt: "7X Traders Logo"
    },
    {
      name: "Hero MotoCorp",
      logo: "https://heromotocorp.com/content/dam/hero-aem-website/brand/logo/logo.svg",
      url: "https://dealers.heromotocorp.com/ace-motors-pvt-ltd-hero-motocorp-two-wheeler-dealer-kallai-road-kozhikode-25991/Contact-Us",
      alt: "Hero MotoCorp Logo"
    }
  ];

  // Triple the array for seamless loop on all devices
  const duplicatedPartners = [...partners, ...partners, ...partners];

  // Auto-scroll effect for all devices - always running
  useEffect(() => {
    let scrollDelta = 0;
  
    const scroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth } = scrollRef.current;
  
        if (scrollLeft >= (scrollWidth * 2) / 3) {
          scrollRef.current.scrollLeft = 0;
          scrollDelta = 0;
        } else {
          scrollDelta += 0.5; // fractional increment
          const intScroll = Math.floor(scrollDelta);
          if (intScroll >= 1) {
            scrollRef.current.scrollLeft += intScroll;
            scrollDelta -= intScroll; // subtract scrolled part
          }
        }
      }
      animationRef.current = requestAnimationFrame(scroll);
    };
  
    animationRef.current = requestAnimationFrame(scroll);
  
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Empowered by Partnership
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            We collaborate with industry leaders and innovative partners to deliver exceptional results
          </p>
        </div>

        {/* Horizontal Auto-Scroll for All Devices */}
        <div className="w-full">
          <div 
            ref={scrollRef}
            className="flex gap-6 sm:gap-8 lg:gap-12 overflow-x-hidden"
            style={{ scrollBehavior: 'auto' }}
          >
            {duplicatedPartners.map((partner, index) => (
              <a
                key={`${partner.name}-${index}`}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-shrink-0 block transition-transform duration-300 hover:scale-105 active:scale-95"
              >
                <div className="w-32 h-20 sm:w-40 sm:h-24 lg:w-48 lg:h-28 xl:w-56 xl:h-32 flex items-center justify-center bg-white rounded-xl shadow-sm group-hover:shadow-lg group-active:shadow-lg transition-all duration-300 p-4 sm:p-6 border border-gray-100">
                  <img 
                    src={partner.logo}
                    alt={partner.alt}
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 group-active:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Trust indicator */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <p className="text-gray-600 text-xs sm:text-sm font-medium">
              Trusted by industry leaders worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;