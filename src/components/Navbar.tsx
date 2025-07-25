import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag, ShoppingCart, Home } from 'lucide-react';
import Cart from './Cart';
import ThemeToggle from './ThemeToggle';
import { useCartStore } from '../store/cartStore';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const totalItems = useCartStore(state => state.getTotalItems());

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-white dark:bg-gray-800 shadow-md fixed w-full top-0 left-0 z-50 transition-colors">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <Link 
              to="/" 
              className="text-2xl font-bold flex items-center text-green-600 dark:text-green-400"
            >
              <Home className="mr-2" />
              <span>Village Market Express</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                Accueil
              </Link>
              <Link to="/catalogue" className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                Catalogue
              </Link>
              <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                À propos
              </Link>
              <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                Contact
              </Link>
              <ThemeToggle />
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                <ShoppingCart size={24} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
              <a 
                href="https://wa.me/123456789?text=Bonjour%2C%20je%20souhaite%20passer%20une%20commande."
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Commander via WhatsApp
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <ThemeToggle />
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative text-gray-700 dark:text-gray-300"
              >
                <ShoppingCart size={24} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
              <button 
                onClick={toggleMenu}
                className="text-gray-700 dark:text-gray-300 focus:outline-none"
                aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 py-2 px-4 shadow-lg">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                to="/catalogue" 
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Catalogue
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                À propos
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <a 
                href="https://wa.me/123456789?text=Bonjour%2C%20je%20souhaite%20passer%20une%20commande."
                className="bg-green-600 text-white px-4 py-2 rounded-md text-center hover:bg-green-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Commander via WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;