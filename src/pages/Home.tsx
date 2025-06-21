import React from 'react';
import HowItWorks from '../components/HowItWorks';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-700 to-green-600 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Produits frais et locaux livrés chez vous !
            </h1>
            <p className="text-lg md:text-xl mb-4 opacity-90">
              Du cœur du village à votre table.
            </p>
            <p className="text-lg mb-8 opacity-90">
              Village Market Express connecte les producteurs des villages camerounais aux consommateurs urbains en quête de fraîcheur, de qualité et de produits du terroir.
            </p>
            
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <Link
                to="/catalogue"
                className="bg-white text-green-700 px-6 py-3 rounded-md font-semibold flex justify-center items-center hover:bg-gray-100 transition-colors"
              >
                Découvrir notre catalogue
                <ArrowRight size={18} className="ml-2" />
              </Link>
              
              <a
                href="https://wa.me/123456789?text=Bonjour%2C%20je%20souhaite%20passer%20une%20commande."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-800 text-white px-6 py-3 rounded-md font-semibold inline-flex justify-center items-center hover:bg-green-900 transition-colors"
              >
                <ShoppingCart size={18} className="mr-2" />
                Commander maintenant
              </a>
            </div>
          </div>
        </div>
        
        {/* Decorative SVG for desktop */}
        <div className="hidden md:block absolute right-0 bottom-0 w-2/5 h-full">
          <div className="absolute inset-0 bg-white opacity-10 rounded-tl-[100px]"></div>
        </div>
      </section>
      
      {/* How It Works */}
      <HowItWorks />
      
      {/* Benefits */}
      <Benefits />
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* Call to Action */}
      <CallToAction />
      
      {/* Floating WhatsApp Button (Mobile Only) */}
      <div className="md:hidden fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/123456789?text=Bonjour%2C%20je%20souhaite%20passer%20une%20commande."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors"
          aria-label="Commander sur WhatsApp"
        >
          <ShoppingCart size={24} />
        </a>
      </div>
    </div>
  );
};

export default Home;