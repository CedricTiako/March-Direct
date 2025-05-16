import React from 'react';
import { ShoppingCart, Minus, Plus, Trash2, X } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { items, removeItem, updateQuantity, clearCart, getTotalPrice } = useCartStore();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR').format(price);
  };

  const handleWhatsAppOrder = () => {
    const message = items
      .map(item => `${item.quantity}${item.unit} de ${item.name} (${formatPrice(item.price * item.quantity)} FCFA)`)
      .join('\n');
    
    const total = formatPrice(getTotalPrice());
    const whatsappMessage = encodeURIComponent(`Bonjour, je souhaite commander :\n\n${message}\n\nTotal : ${total} FCFA\n\nMerci de me confirmer la disponibilité et le délai de livraison.`);
    window.open(`https://wa.me/123456789?text=${whatsappMessage}`, '_blank');
    clearCart();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose} />
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md transform transition-transform duration-300 ease-in-out">
        <div className="h-full bg-white shadow-xl flex flex-col">
          <div className="flex items-center justify-between border-b px-4 py-3">
            <h2 className="text-lg font-semibold flex items-center">
              <ShoppingCart size={20} className="mr-2" />
              Panier ({items.length} articles)
            </h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Fermer"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-500">
                <ShoppingCart size={48} className="mb-4" />
                <p>Votre panier est vide</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div 
                    key={item.id} 
                    className="flex items-center space-x-4 bg-white p-4 rounded-lg border border-gray-100 hover:border-green-100 transition-colors"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-20 w-20 rounded-md object-cover"
                    />
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 truncate">{item.name}</h3>
                      <p className="text-sm text-gray-500">
                        {formatPrice(item.price)} FCFA/{item.unit}
                      </p>
                      
                      <div className="mt-2 flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="rounded-full p-1 hover:bg-gray-100 text-gray-600 hover:text-gray-900 transition-colors"
                          aria-label="Diminuer la quantité"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="rounded-full p-1 hover:bg-gray-100 text-gray-600 hover:text-gray-900 transition-colors"
                          aria-label="Augmenter la quantité"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className="font-medium text-gray-900">
                        {formatPrice(item.price * item.quantity)} FCFA
                      </p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="mt-2 p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full transition-colors"
                        aria-label="Supprimer l'article"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {items.length > 0 && (
            <div className="border-t p-4 bg-gray-50">
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-gray-600">
                  <span>Sous-total</span>
                  <span>{formatPrice(getTotalPrice())} FCFA</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Livraison</span>
                  <span>À déterminer</span>
                </div>
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>{formatPrice(getTotalPrice())} FCFA</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
                >
                  <ShoppingCart size={20} className="mr-2" />
                  Commander sur WhatsApp
                </button>
                
                <button
                  onClick={clearCart}
                  className="w-full bg-red-50 text-red-600 py-3 rounded-md font-semibold hover:bg-red-100 transition-colors"
                >
                  Vider le panier
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;