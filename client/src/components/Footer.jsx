import React from 'react';
import { ArrowRight, Dribbble, Twitter, Instagram } from 'lucide-react';
import { FaBehance } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#f9f9f9] text-black pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        {/* CTA Title */}
        <h2 className="text-4xl sm:text-5xl font-light">
          Got a <span className="font-bold">PROJECT</span><br />
          <span className="font-bold">IN MIND?</span>
        </h2>

        {/* CTA Button */}
        <div>
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-black rounded-full text-lg font-medium hover:bg-black hover:text-white transition"
          >
            Let's Talk
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>

        {/* Responsive Social Icons (Visible on mobile only) */}
        <div className="flex justify-center space-x-6 sm:hidden pt-6">
          <a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <Dribbble className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <FaBehance className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Desktop Social Links Grid */}
      <div className="mt-24 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto border-t border-gray-300 pt-12 text-left hidden sm:grid">
        {/* Dribbble */}
        <div className="space-y-2">
          <h4 className="font-semibold text-lg">Dribbble</h4>
          <p className="text-gray-500">@madsparrow_dev</p>
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <Dribbble className="w-4 h-4" />
          </div>
        </div>

        {/* Twitter */}
        <div className="space-y-2">
          <h4 className="font-semibold text-lg">Twitter</h4>
          <p className="text-gray-500">@mad_sparrow</p>
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <Twitter className="w-4 h-4" />
          </div>
        </div>

        {/* Instagram */}
        <div className="space-y-2">
          <h4 className="font-semibold text-lg">Instagram</h4>
          <p className="text-gray-500">@madsparrow</p>
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <Instagram className="w-4 h-4" />
          </div>
        </div>

        {/* Behance */}
        <div className="space-y-2">
          <h4 className="font-semibold text-lg">Behance</h4>
          <p className="text-gray-500">@madsparrow_dev</p>
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <FaBehance className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-sm text-gray-400">
        ©2022 Mad Sparrow, All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
