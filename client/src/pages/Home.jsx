import React from 'react';
import { ArrowRight } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
    const images = [
        'https://images.unsplash.com/photo-1570197781348-18eac46ebc9b?auto=format&fit=crop&w=600&q=80', // Fruit
        'https://images.unsplash.com/photo-1584270354949-1e446ea7ed03?auto=format&fit=crop&w=600&q=80', // Vegetables
        'https://images.unsplash.com/photo-1590080877034-62b1995c1e99?auto=format&fit=crop&w=600&q=80', // Noodles
        'https://images.unsplash.com/photo-1601924582975-7e6d3b1b39b5?auto=format&fit=crop&w=600&q=80', // Candy
        'https://images.unsplash.com/photo-1600185365891-80d55d4b6c6e?auto=format&fit=crop&w=600&q=80', // Chocolate
        'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=600&q=80', // Headphones
      ];
      

  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Left Side - Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                  SHARING
                  <br />
                  YOUR VISION
                </h1>
              </div>
              
              {/* Description Text */}
              <div className="space-y-4 max-w-md">
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Efficiently plagiarize leveraged quality vectors whereas principle-centered human capital. Dramatically initiate intermandated quality vectors before web-enabled innovation.
                </p>
              </div>
              
              {/* CTA Button */}
              <div className="pt-4">
                <button className="group bg-white text-black px-8 py-4 rounded-full font-medium text-sm sm:text-base hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
                  START PROJECT
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
            
            {/* Right Side - Social Icons */}
            <div className="flex lg:justify-end justify-center">
              <div className="flex flex-row lg:flex-col gap-4 lg:gap-6">
                
                {/* WordPress Icon */}
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 cursor-pointer">
                  <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.135-2.85-.135-.582-.03-.661.854-.082.899 0 0 .537.075 1.106.105l1.65 4.527-2.31 6.957-3.85-11.485c.647-.03 1.232-.105 1.232-.105.582-.075.515-.93-.067-.899 0 0-1.755.135-2.88.135-.202 0-.438-.008-.69-.015C4.911 2.015 8.235 0 12.017 0c2.266 0 4.327.87 5.849 2.292-.037-.002-.072-.007-.11-.007-.821 0-1.411.717-1.411 1.489 0 .693.398 1.28.818 1.974.318.558.687 1.279.687 2.32 0 .718-.277 1.554-.637 2.717l-.84 2.515m-8.814 8.217c2.008 1.195 4.347 1.885 6.845 1.885 1.425 0 2.775-.292 4.006-.821-.032-.051-.062-.103-.091-.158l-3.295-9.527c-.615-1.54-.82-2.771-.82-3.864 0-.405.026-.78.07-1.11C6.825 4.469 4.568 7.946 4.568 12c0 2.649 1.085 5.046 2.835 6.775l3.295-9.527z"/>
                  </svg>
                </div>
                
                {/* Behance Icon */}
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 cursor-pointer">
                  <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 7v2h4v6H0v2h6V7H0zm8 0v10h2V7H8zm4 0v2h4v6h-4v2h6V7h-6zm-6 2h2v6H6V9z"/>
                  </svg>
                </div>
                
                {/* Pinterest Icon */}
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 cursor-pointer">
                  <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.372 0 12s5.374 12 12 12 12-5.372 12-12S18.626 0 12 0zm0 19c-.68 0-1.34-.116-1.94-.32.27-.43.51-.92.69-1.49L12 13.72c.39.75 1.54 1.39 2.77 1.39 3.65 0 6.23-3.32 6.23-7.75 0-3.35-2.85-6.36-7.16-6.36-5.37 0-8.08 3.86-8.08 7.08 0 1.95.74 3.69 2.32 4.34.26.11.4.06.46-.16.05-.16.15-.59.2-.77.07-.24.04-.32-.14-.53-.4-.48-.66-1.08-.66-1.94 0-2.5 1.87-4.74 4.87-4.74 2.66 0 4.12 1.62 4.12 3.79 0 2.85-1.26 5.25-3.14 5.25-1.03 0-1.81-.85-1.56-1.9.3-1.25.88-2.6.88-3.5 0-.81-.43-1.48-1.34-1.48-1.06 0-1.91.87-1.91 2.04 0 .74.25 1.25.25 1.25s-.86 3.65-.99 4.09c-.16.56-.16 1.26-.11 1.72C5.86 18.16 3.5 15.36 3.5 12c0-4.69 3.81-8.5 8.5-8.5s8.5 3.81 8.5 8.5-3.81 8.5-8.5 8.5z"/>
                  </svg>
                </div>
                
                {/* GitHub Icon */}
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 cursor-pointer">
                  <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                
              </div>
            </div>
            
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-white rounded-full opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-white rounded-full opacity-10 animate-pulse delay-500"></div>
        
      </section>

      {/* Services Section */}
    {/* Services Section */}
    <section className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            The Service We Provide
            <br />
            For You
        </h2>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:grid-cols-3 lg:gap-12">
        
        {/* Development Service */}
        <ServiceCard
            iconColor="text-blue-600"
            bgColor="bg-blue-100"
            hoverBg="group-hover:bg-blue-200"
            title="Development"
            description="Create a platform with the best and coolest quality from us."
            iconPath="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />

        {/* UI/UX Designer Service */}
        <ServiceCard
            iconColor="text-red-600"
            bgColor="bg-red-100"
            hoverBg="group-hover:bg-red-200"
            title="UI/UX Designer"
            description="We provide UI/UX Design services, and of course with the best quality"
            iconPath="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
        />

        {/* Graphic Designer Service */}
        <ServiceCard
            iconColor="text-cyan-600"
            bgColor="bg-cyan-100"
            hoverBg="group-hover:bg-cyan-200"
            title="Graphik Designer"
            description="We provide Graphic Design services, with the best designers"
            iconPath="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
        />

        {/* Motion Graphic Service */}
        <ServiceCard
            iconColor="text-pink-600"
            bgColor="bg-pink-100"
            hoverBg="group-hover:bg-pink-200"
            title="Motion Graphik"
            description="Create a platform with the best and coolest quality from us."
            iconPath="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />

        {/* Photography Service */}
        <ServiceCard
            iconColor="text-green-600"
            bgColor="bg-green-100"
            hoverBg="group-hover:bg-green-200"
            title="Photography"
            description="We provide Photography services, and of course with the best quality"
            iconPath="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z"
        />

        {/* Videography Service */}
        <ServiceCard
            iconColor="text-orange-600"
            bgColor="bg-orange-100"
            hoverBg="group-hover:bg-orange-200"
            title="Videography"
            description="We provide UI/UX Design services, and of course with the best quality"
            iconPath="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />

        </div>
    </div>
    </section>

    {/* Portfolio  Section */}
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-black">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">Our Awesome Portfolio</h2>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Portfolio ${index + 1}`}
              className="rounded-xl w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
            />
          ))}
        </div>

        {/* CTA Link */}
        <div className="mt-10">
          <a
            href="#"
            className="text-sm font-medium underline underline-offset-4 hover:text-gray-700 transition"
          >
            ∘ Take A Look
          </a>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Home;