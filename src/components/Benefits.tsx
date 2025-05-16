import React from 'react';
import { CheckCircle } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      title: 'Produits locaux frais',
      description: 'Cultivés localement et livrés directement du village à votre table'
    },
    {
      title: 'Moins chers qu\'au marché',
      description: 'Prix justes et transparents sans intermédiaires'
    },
    {
      title: 'Paiement sécurisé',
      description: 'Options de paiement variées et sécurisées pour votre tranquillité'
    },
    {
      title: 'Livraison à domicile',
      description: 'Livraison rapide à domicile ou point de collecte à votre convenance'
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-brown-600">
          Pourquoi choisir MarchéDirect ?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex items-start p-4 bg-beige-100 rounded-lg transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="text-green-600 mr-4">
                <CheckCircle size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;