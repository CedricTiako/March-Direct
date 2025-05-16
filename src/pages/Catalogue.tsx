import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import CallToAction from '../components/CallToAction';
import { products, categories } from '../data/products';
import { Search, SlidersHorizontal } from 'lucide-react';

const Catalogue: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('tous');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'name' | 'available'>('name');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = products
    .filter(product => {
      const matchesCategory = selectedCategory === 'tous' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesCategory && matchesSearch && matchesPrice;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'available':
          return b.available - a.available;
        default:
          return a.name.localeCompare(b.name);
      }
    });

  return (
    <div className="pt-16 bg-gray-50">
      {/* Header Section */}
      <section className="bg-green-600 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-3">Catalogue des Produits</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Découvrez notre sélection de produits frais locaux, livrés directement du producteur à votre table.
          </p>
        </div>
      </section>
      
      {/* Filter Section */}
      <section className="py-6 bg-white shadow-md sticky top-16 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* Search and Filter Toggle */}
            <div className="w-full md:w-auto flex items-center gap-4">
              <div className="relative flex-1 md:w-64">
                <input
                  type="text"
                  placeholder="Rechercher un produit..."
                  className="pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 transition-colors md:hidden"
                aria-label="Toggle filters"
              >
                <SlidersHorizontal size={20} />
              </button>
            </div>

            {/* Desktop Filters */}
            <div className="hidden md:flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
              >
                <option value="name">Trier par nom</option>
                <option value="price-asc">Prix croissant</option>
                <option value="price-desc">Prix décroissant</option>
                <option value="available">Disponibilité</option>
              </select>

              <div className="flex items-center gap-2">
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="100"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-32"
                />
                <span className="text-sm text-gray-600">
                  Max: {priceRange[1]} FCFA
                </span>
              </div>
            </div>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="md:hidden mt-4 p-4 bg-gray-50 rounded-md">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Trier par
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                  >
                    <option value="name">Nom</option>
                    <option value="price-asc">Prix croissant</option>
                    <option value="price-desc">Prix décroissant</option>
                    <option value="available">Disponibilité</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Prix maximum: {priceRange[1]} FCFA
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="5000"
                    step="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Categories */}
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('tous')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedCategory === 'tous'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              Tous
            </button>
            
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium capitalize transition-colors ${
                  selectedCategory === category
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Products Grid */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-lg text-gray-600">Aucun produit ne correspond à votre recherche.</p>
              <button
                onClick={() => {
                  setSelectedCategory('tous');
                  setSearchTerm('');
                  setPriceRange([0, 5000]);
                  setSortBy('name');
                }}
                className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction className="mt-8" />
    </div>
  );
};

export default Catalogue;