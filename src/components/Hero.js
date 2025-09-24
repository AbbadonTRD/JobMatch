import React from 'react';

const Hero = () => {
  return (
    <section className="bg-pastel-pink relative overflow-hidden min-h-screen flex items-center">
      {/* Floating background shapes */}
      <div className="absolute inset-0">
        {/* Orange circle - top left */}
        <div className="absolute top-4 sm:top-8 left-4 sm:left-8 w-12 h-12 sm:w-16 sm:h-16 bg-cow-orange rounded-full opacity-60"></div>
        
        {/* Blue circle - top right */}
        <div className="absolute top-8 sm:top-16 right-8 sm:right-16 w-8 h-8 sm:w-12 sm:h-12 bg-cow-blue rounded-full opacity-70"></div>
        
        {/* Green circle - bottom left */}
        <div className="absolute bottom-12 sm:bottom-20 left-8 sm:left-20 w-16 h-16 sm:w-20 sm:h-20 bg-cow-green rounded-full opacity-50"></div>
        
        {/* Purple triangle shape - bottom right */}
        <div className="absolute bottom-8 sm:bottom-16 right-6 sm:right-12 w-0 h-0 border-l-6 border-r-6 border-b-12 sm:border-l-8 sm:border-r-8 sm:border-b-16 border-l-transparent border-r-transparent border-b-cow-purple opacity-60"></div>
        
        {/* Small decorative dots - hidden on mobile for cleaner look */}
        <div className="hidden sm:block absolute top-1/3 left-1/4 w-3 h-3 bg-cow-orange rounded-full opacity-40"></div>
        <div className="hidden sm:block absolute top-2/3 right-1/3 w-2 h-2 bg-cow-blue rounded-full opacity-50"></div>
        <div className="hidden sm:block absolute top-1/2 left-1/6 w-4 h-4 bg-cow-green rounded-full opacity-30"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center">
          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
            Don't get milked!
          </h1>

          {/* Subheading with colored pills */}
          <div className="max-w-4xl mx-auto text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-800 leading-relaxed">
            <p className="mb-4">
              CoW DAO develops the{' '}
              <span className="bg-cow-orange text-white px-2 py-1 sm:px-3 sm:py-2 lg:px-4 lg:py-2 rounded-full font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl inline-block">
                most user-protective
              </span>{' '}
              products in DeFi – so you can{' '}
              <span className="bg-cow-purple text-white px-2 py-1 sm:px-3 sm:py-2 lg:px-4 lg:py-2 rounded-full font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl inline-block">
                do more
              </span>{' '}
              with{' '}
              <span className="bg-cow-blue text-white px-2 py-1 sm:px-3 sm:py-2 lg:px-4 lg:py-2 rounded-full font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl inline-block">
                less worry
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
