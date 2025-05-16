export interface Product {
  id: string;
  name: string;
  price: number;
  unit: string;
  category: string;
  image: string;
  available: number;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
}