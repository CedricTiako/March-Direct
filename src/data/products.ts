import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Tomates fraîches',
    price: 1000,
    unit: 'kg',
    category: 'légumes',
    image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=600',
    available: 50
  },
  {
    id: '2',
    name: 'Bananes plantain',
    price: 800,
    unit: 'kg',
    category: 'fruits',
    image: 'https://images.pexels.com/photos/1093038/pexels-photo-1093038.jpeg?auto=compress&cs=tinysrgb&w=600',
    available: 30
  },
  {
    id: '3',
    name: 'Riz local',
    price: 1500,
    unit: 'kg',
    category: 'féculents',
    image: 'https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=600',
    available: 100
  },
  {
    id: '4',
    name: 'Poulet fermier',
    price: 3500,
    unit: 'kg',
    category: 'volailles',
    image: 'https://images.pexels.com/photos/2255459/pexels-photo-2255459.jpeg?auto=compress&cs=tinysrgb&w=600',
    available: 15
  },
  {
    id: '5',
    name: 'Oignons',
    price: 700,
    unit: 'kg',
    category: 'légumes',
    image: 'https://images.pexels.com/photos/144206/pexels-photo-144206.jpeg?auto=compress&cs=tinysrgb&w=600',
    available: 40
  },
  {
    id: '6',
    name: 'Mangues',
    price: 1200,
    unit: 'kg',
    category: 'fruits',
    image: 'https://images.pexels.com/photos/2294477/pexels-photo-2294477.jpeg?auto=compress&cs=tinysrgb&w=600',
    available: 25
  },
  {
    id: '7',
    name: 'Igname',
    price: 900,
    unit: 'kg',
    category: 'féculents',
    image: 'https://images.pexels.com/photos/5503206/pexels-photo-5503206.jpeg?auto=compress&cs=tinysrgb&w=600',
    available: 35
  },
  {
    id: '8',
    name: 'Œufs fermiers',
    price: 2500,
    unit: 'douzaine',
    category: 'volailles',
    image: 'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=600',
    available: 20
  }
];

export const categories = [...new Set(products.map(p => p.category))];