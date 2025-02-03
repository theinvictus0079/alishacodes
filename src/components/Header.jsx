import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from "motion/react"
import { Menu, X } from 'lucide-react';
import buymecoffee from "../assets/images/coffee.jpg";

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

 
  const menuItems = ['Home', 'About US', 'Contact'];

  return (
    <motion.header
    
      className={`fixed   p-2  w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="mt-2 border bg-[#fffefe] bg-opacity-95 border-neutral-300 rounded-3xl container mx-auto px-6 py-2 md:py-2">
        <div className="flex items-center justify-between">
          
          <div
            className="text-2xl font-bold bg-gradient-to-r from-stone-700 to-red-500 bg-clip-text text-transparent  "
          >
            The_invictus__
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8   text-lg font-semibold">
            {menuItems.map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                className="  cursor-pointer transition-colors"
              >
                {item}
              </Link>
            ))}
           
          </div>

          <div className='hidden md:flex justify-center items-center gap-x-1 font-bold border border-yellow-500 hover:bg-white bg-yellow-400 text-lg rounded-3xl py-1 px-3
                          transition-all ease-in-out duration-400 
          '>
            <div>
              <img className='h-7 mix-blend-multiply ' src={buymecoffee} alt="support button logo" />
            </div>
            <div>
              Support us
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div

          className={`md:hidden overflow-hidden ${isOpen ? 'block' : 'hidden'}`}
        >
          
          <div 
          className="pt-4 pb-3 space-y-3 ">
            {menuItems.map((item) => (
              <Link
                key={item}
                
                to={item.toLowerCase()}

                className="block  text-lg font-semibold cursor-pointer transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
              <div className='flex justify-center items-center gap-x-1 font-bold border border-yellow-500  bg-yellow-400 text-lg rounded-3xl py-2 px-6
                         hover:text-white transition-all ease-in-out duration-400
          '>
            <div>
              <img className='h-6 mix-blend-multiply ' src={buymecoffee} alt="" />
            </div>
            <div>
              Support us
            </div>
          </div>
            
          </div>
    

        </motion.div>
       
      </nav>
    </motion.header>
  );
};

export default Header;