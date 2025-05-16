import React from 'react';
import { Product } from '../types';
import { ShoppingCart, Plus } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const addItem = useCartStore(state => state.addItem);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR').format(price);
  };

  const getWhatsAppLink = (product: Product) => {
    const message = encodeURIComponent(`Bonjour, je souhaite commander 1${product.unit} de ${product.name}. Merci !`);
    return `https://wa.me/123456789?text=${message}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <div className="mt-2 flex justify-between items-center">
          <p className="text-green-600 font-bold">{formatPrice(product.price)} FCFA/{product.unit}</p>
          <p className={`text-sm ${product.available > 10 ? 'text-green-600' : 'text-orange-500'}`}>
            {product.available > 0 ? `${product.available} disponibles` : 'Rupture de stock'}
          </p>
        </div>
        <div className="mt-4 flex gap-2">
          <button 
            onClick={() => addItem(product)}
            className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md inline-flex items-center justify-center hover:bg-green-700 transition-colors"
          >
            <Plus size={18} className="mr-2" />
            Ajouter au panier
          </button>
          
          <a 
            href={getWhatsAppLink(product)}
            className="bg-green-100 text-green-700 py-2 px-4 rounded-md inline-flex items-center justify-center hover:bg-green-200 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ShoppingCart size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;