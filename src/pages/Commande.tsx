import React, { useState } from 'react';
import { Check } from 'lucide-react';

const Commande: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    address: '',
    products: '',
    deliveryOption: 'livraison',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formState.name || !formState.phone || !formState.products) {
      setError('Veuillez remplir tous les champs obligatoires.');
      return;
    }
    
    setIsSubmitting(true);
    setError('');
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after submission
      setFormState({
        name: '',
        phone: '',
        address: '',
        products: '',
        deliveryOption: 'livraison',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="pt-16 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <section className="bg-green-600 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-3">Commander Directement</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Remplissez le formulaire ci-dessous pour passer votre commande rapidement et sans inscription.
          </p>
        </div>
      </section>
      
      {/* Form Section */}
      <section className="py-10">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="mx-auto bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Check size={32} className="text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Commande envoyée !</h2>
                <p className="text-gray-600 mb-6">
                  Merci pour votre commande. Nous vous contacterons très bientôt pour confirmer les détails.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
                >
                  Nouvelle commande
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {error && (
                  <div className="bg-red-100 text-red-700 p-3 rounded-md mb-6">
                    {error}
                  </div>
                )}
                
                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Nom complet <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                      required
                    />
                  </div>
                  
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      Téléphone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                      required
                    />
                  </div>
                  
                  {/* Delivery Option */}
                  <div>
                    <label htmlFor="deliveryOption" className="block text-gray-700 font-medium mb-2">
                      Option de réception
                    </label>
                    <select
                      id="deliveryOption"
                      name="deliveryOption"
                      value={formState.deliveryOption}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                    >
                      <option value="livraison">Livraison à domicile</option>
                      <option value="retrait">Retrait à un point relais</option>
                    </select>
                  </div>
                  
                  {/* Address */}
                  <div>
                    <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
                      {formState.deliveryOption === 'livraison' ? 'Adresse de livraison' : 'Point relais pour retrait'}
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formState.address}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                    />
                  </div>
                  
                  {/* Products */}
                  <div>
                    <label htmlFor="products" className="block text-gray-700 font-medium mb-2">
                      Produits souhaités <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="products"
                      name="products"
                      value={formState.products}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Ex: 2kg de tomates, 1kg d'oignons, 3kg de riz..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                      required
                    ></textarea>
                  </div>
                  
                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-700 transition-colors disabled:bg-green-400 disabled:cursor-not-allowed"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma commande'}
                    </button>
                  </div>
                  
                  {/* Alternative WhatsApp */}
                  <div className="text-center mt-4">
                    <p className="text-gray-600 mb-3">Ou commandez directement via WhatsApp</p>
                    <a
                      href="https://wa.me/123456789?text=Bonjour%2C%20je%20souhaite%20passer%20une%20commande."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-green-50 text-green-700 border border-green-200 px-6 py-2 rounded-md hover:bg-green-100 transition-colors"
                    >
                      Commander sur WhatsApp
                    </a>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Commande;