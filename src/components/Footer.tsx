import React from 'react';
import { Phone, Mail, Facebook, Instagram, MapPin, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <a href="tel:+237 650 912 346" className="hover:text-green-300 transition-colors">
                  +237 650 912 346
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <a href="mailto:contact@marchedirect.com" className="hover:text-green-300 transition-colors">
                  contact@marchedirect.com
                </a>
              </li>
              <li className="flex items-center">
                <MapPin size={18} className="mr-2" />
                <span>Douala, Cameroun</span>
              </li>
            </ul>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-green-300 transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="/catalogue" className="hover:text-green-300 transition-colors">
                  Catalogue
                </a>
              </li>
              <li>
                <a href="/commande" className="hover:text-green-300 transition-colors">
                  Commander
                </a>
              </li>
            </ul>
          </div>
          
          {/* WhatsApp & Social */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Nous suivre</h3>
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-green-300 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-green-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
            
            <a 
              href="https://wa.me/123456789?text=Bonjour%2C%20je%20souhaite%20passer%20une%20commande."
              className="bg-green-600 text-white px-6 py-3 rounded-md inline-flex items-center hover:bg-green-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Commander sur WhatsApp
            </a>
          </div>

          {/* Developer Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Développeur</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Code size={18} className="mr-2" />
                <span>Tiako Tchouameni Cedric Aime</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <a href="tel:+267677334686" className="hover:text-green-300 transition-colors">
                  +267 677 334 686
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <a href="mailto:tiako1998@gmail.com" className="hover:text-green-300 transition-colors">
                  tiako1998@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <MapPin size={18} className="mr-2" />
                <span>Douala, Cameroun</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-green-700 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} MarchéDirect. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;