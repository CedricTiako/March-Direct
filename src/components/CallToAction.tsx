import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

interface CallToActionProps {
  className?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ className = '' }) => {
  return (
    <section className={`py-12 bg-green-600 text-white ${className}`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Prêt à découvrir des produits frais à prix juste ?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Commandez dès maintenant des produits frais locaux et faites-vous livrer directement chez vous !
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link
            to="/catalogue"
            className="bg-white text-green-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
          >
            Voir le catalogue
          </Link>
          
          <a
            href="https://wa.me/123456789?text=Bonjour%2C%20je%20souhaite%20passer%20une%20commande."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-green-800 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-900 transition-colors"
          >
            <ShoppingCart size={18} className="mr-2" />
            Commander sur WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;