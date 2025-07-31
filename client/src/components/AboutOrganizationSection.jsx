import React, { useState } from 'react';

// Import your images
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';

const CreativeStudioSection = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const storyImages = [
    {
      id: 1,
      image: image1,
      title: "The Classroom Rebel",
      description: "In every room, there's one who doesn't fit the mold...",
      position: "top-left"
    },
    {
      id: 2,
      image: image2,
      title: "The Workplace Misfit", 
      description: "In every company, one questions the rules...",
      position: "bottom-left"
    },
    {
      id: 3,
      image: image3,
      title: "The Breakaway",
      description: "We didn't blend in — so we built something that stands out.",
      position: "top-right"
    },
    {
      id: 4,
      image: image4,
      title: "The Rise of HOBS",
      description: "No funding. No templates. Just belief in a different way.",
      position: "center-left"
    },
    {
      id: 5,
      image: image5,
      title: "Not a Marketing Agency",
      description: "We're hybrids — creative engineers, digital tacticians, problem solvers.",
      position: "center-right"
    },
    {
      id: 6,
      image: image6,
      title: "The Mission",
      description: "We're shaping tomorrow — with clarity, craft, and courage.",
      position: "bottom-right"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-2">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full mb-6 uppercase tracking-wider">
              Our Story
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">
              We Are A Full Service <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Creative Studio
              </span>
            </h2>
            
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8"></div>
            
            <p className="text-slate-600 leading-relaxed mb-6 text-lg">
              As licensed creative professionals, we know the value of innovation and authenticity. Every project reflects our commitment to excellence and our passion for pushing boundaries.
            </p>
            
            <p className="text-slate-600 leading-relaxed mb-8 text-lg">
              We don't just follow trends — we create them. Our hybrid approach combines technical expertise with creative vision to deliver solutions that truly make a difference.
            </p>
            
            <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Learn More About Us
            </button>
          </div>
          
          {/* Right Images Grid - Your Story */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-3 gap-4 h-[600px]">
              {/* First Column */}
              <div className="flex flex-col gap-4">
                {/* Image 1 - Top Left */}
                <div 
                  className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer h-48"
                  onMouseEnter={() => setHoveredImage(1)}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <img 
                    src={image1} 
                    alt="The Classroom Rebel"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-sm font-bold mb-2">01</div>
                      <h4 className="font-bold text-sm">The Classroom Rebel</h4>
                    </div>
                  </div>
                </div>
                
                {/* Image 4 - Center Left */}
                <div 
                  className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer flex-1"
                  onMouseEnter={() => setHoveredImage(4)}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <img 
                    src={image4} 
                    alt="The Rise of HOBS"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-sm font-bold mb-2">04</div>
                      <h4 className="font-bold text-sm">The Rise of HOBS</h4>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Second Column */}
              <div className="flex flex-col gap-4">
                {/* Image 2 - Bottom Left */}
                <div 
                  className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer flex-1"
                  onMouseEnter={() => setHoveredImage(2)}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <img 
                    src={image2} 
                    alt="The Workplace Misfit"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-sm font-bold mb-2">02</div>
                      <h4 className="font-bold text-sm">The Workplace Misfit</h4>
                    </div>
                  </div>
                </div>
                
                {/* Image 5 - Center Right */}
                <div 
                  className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer h-48"
                  onMouseEnter={() => setHoveredImage(5)}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <img 
                    src={image5} 
                    alt="Not a Marketing Agency"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-sm font-bold mb-2">05</div>
                      <h4 className="font-bold text-sm">Not a Marketing Agency</h4>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Third Column */}
              <div className="flex flex-col gap-4">
                {/* Image 3 - Top Right */}
                <div 
                  className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer h-48"
                  onMouseEnter={() => setHoveredImage(3)}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <img 
                    src={image3} 
                    alt="The Breakaway"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-sm font-bold mb-2">03</div>
                      <h4 className="font-bold text-sm">The Breakaway</h4>
                    </div>
                  </div>
                </div>
                
                {/* Image 6 - Bottom Right */}
                <div 
                  className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer flex-1"
                  onMouseEnter={() => setHoveredImage(6)}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <img 
                    src={image6} 
                    alt="The Mission"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-sm font-bold mb-2">06</div>
                      <h4 className="font-bold text-sm">The Mission</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Story Description Below Images */}
        {hoveredImage && (
          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {storyImages.find(img => img.id === hoveredImage)?.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                {storyImages.find(img => img.id === hoveredImage)?.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CreativeStudioSection;