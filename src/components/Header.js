import React from 'react';

const Header = () => {
  return (
    <header className="bg-cow-dark text-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left section - Logo and Navigation */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                <span className="text-cow-dark font-bold text-sm">🐄</span>
              </div>
              <span className="text-white font-semibold text-lg">CoW DAO</span>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex space-x-6">
              <a 
                href="#about" 
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
              >
                About
              </a>
              <a 
                href="#products" 
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
              >
                Products
              </a>
              <a 
                href="#learn" 
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
              >
                Learn
              </a>
            </div>
          </div>

          {/* Right section - Action Buttons */}
          <div className="hidden sm:flex items-center space-x-2 lg:space-x-4">
            <button className="bg-cow-green hover:bg-green-600 text-white px-3 py-2 lg:px-4 lg:py-2 rounded-lg font-medium transition-colors duration-200 text-xs lg:text-sm whitespace-nowrap">
              LP on CoW AMM
            </button>
            <button className="bg-cow-blue hover:bg-cyan-600 text-white px-3 py-2 lg:px-4 lg:py-2 rounded-lg font-medium transition-colors duration-200 text-xs lg:text-sm whitespace-nowrap">
              Trade on CoW Swap
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
