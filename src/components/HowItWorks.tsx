import React from 'react';
import { ShoppingCart, CreditCard, Home } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <ShoppingCart size={36} />,
      title: 'Choisissez vos produits',
      description: 'Parcourez notre catalogue et sélectionnez les produits frais de votre choix'
    },
    {
      icon: <CreditCard size={36} />,
      title: 'Payez par Mobile Money',
      description: 'Effectuez un paiement sécurisé via votre service de Mobile Money préféré'
    },
    {
      icon: <Home size={36} />,
      title: 'Livraison ou Retrait',
      description: 'Recevez vos produits frais à domicile ou retirez-les à un point de collecte'
    }
  ];

  return (
    <section className="py-12 bg-beige-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-brown-600">
          Comment ça marche ?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="text-green-600 mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;