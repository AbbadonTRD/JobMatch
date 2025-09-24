import React from 'react';

const Products = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* CoW Protocol Card */}
          <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden group hover:scale-105 transition-transform duration-300">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4 text-xl sm:text-4xl font-mono text-green-400">
                1100110100
              </div>
              <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 text-sm sm:text-2xl font-mono text-blue-400">
                1010101010
              </div>
              <div className="absolute top-1/2 right-1/3 text-xs sm:text-lg font-mono text-yellow-400">
                0110
              </div>
            </div>
            
            {/* Card content */}
            <div className="relative z-10">
              {/* Icon placeholder */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white bg-opacity-20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-purple-600 text-lg sm:text-2xl">🐄</span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">CoW Protocol</h3>
              <p className="text-purple-100 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                Open-source, permissionless DEX aggregation protocol
              </p>

              <button className="bg-white text-purple-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105 text-sm sm:text-base">
                Start building
              </button>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-white bg-opacity-10 rounded-full"></div>
            <div className="absolute -top-1 sm:-top-2 -left-1 sm:-left-2 w-12 h-12 sm:w-16 sm:h-16 bg-white bg-opacity-5 rounded-full"></div>
          </div>

          {/* CoW Swap Card */}
          <div className="bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden group hover:scale-105 transition-transform duration-300">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 sm:top-8 left-4 sm:left-8 w-12 h-12 sm:w-20 sm:h-20 border-2 sm:border-4 border-white rounded-full"></div>
              <div className="absolute bottom-6 sm:bottom-12 right-6 sm:right-12 w-8 h-8 sm:w-12 sm:h-12 border-2 border-white rounded-lg rotate-45"></div>
              <div className="absolute top-1/3 right-1/4 w-6 h-6 sm:w-8 sm:h-8 border-2 border-white rounded-full"></div>
            </div>

            {/* Card content */}
            <div className="relative z-10">
              {/* Icon placeholder */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white bg-opacity-20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full"></div>
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-800 rounded-full"></div>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">CoW Swap</h3>
              <p className="text-blue-100 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                The DEX that lets you do what you want
              </p>

              <button className="bg-white text-blue-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105 text-sm sm:text-base">
                Start trading
              </button>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-20 h-20 sm:w-32 sm:h-32 bg-white bg-opacity-10 rounded-full"></div>
            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-12 h-12 sm:w-20 sm:h-20 bg-white bg-opacity-5 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
