import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Testimonial } from '../types';
import { testimonials } from '../data/testimonials';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % testimonials.length
    );
  };

  return (
    <section className="py-12 bg-beige-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-brown-600">
          Ce que disent nos clients
        </h2>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-white p-8 rounded-lg shadow-md relative">
            <div className="absolute -top-4 left-8 text-green-600">
              <Quote size={32} />
            </div>
            
            <div className="pt-4">
              <p className="text-gray-700 text-lg italic mb-4">
                "{testimonials[currentIndex].text}"
              </p>
              
              <div className="flex items-center">
                <div>
                  <p className="font-semibold text-gray-800">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-gray-600">
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center mt-6 space-x-4">
            <button 
              onClick={handlePrev}
              className="p-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={handleNext}
              className="p-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors"
              aria-label="Témoignage suivant"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-green-600' : 'bg-gray-300'
                }`}
                aria-label={`Témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;