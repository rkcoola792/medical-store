import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Deals = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Capsules",
      description: "Premium quality capsules manufactured with precision and care. Our capsule range includes supplements for bone health, nerve support, and overall wellness. Formulated with high bioavailability ingredients to ensure maximum absorption and effectiveness. Perfect for daily health maintenance and targeted therapeutic support.",
      image: "/public/capsules.jpeg"
    },
    {
      title: "Injections",
      description: "Sterile injectable formulations produced under strict quality control. Our injection range provides rapid and effective delivery of medications for pain management, nutritional support, and therapeutic interventions. Manufactured in state-of-the-art facilities meeting international standards.",
      image: "/public/injections.jpeg"
    },
    {
      title: "Ointments",
      description: "Topical ointments designed for external application and targeted relief. Our range includes formulations for pain relief, skin conditions, and therapeutic applications. Developed with advanced delivery systems for better penetration and faster action at the site of application.",
      image: "/public/ointments.jpeg"
    },
    {
      title: "Tablets",
      description: "Compressed tablets offering convenient oral administration. Our tablet range covers various therapeutic categories including pain relief, anti-inflammatory, and nutritional supplements. Manufactured with consistent quality and optimal disintegration properties for effective absorption.",
      image: "/public/tablets.jpeg"
    },
    {
      title: "Syrups",
      description: "Liquid formulations perfect for easy consumption and rapid absorption. Our syrup range includes pediatric and adult formulations for various conditions. Palatable flavors combined with effective therapeutic ingredients make them suitable for all age groups.",
      image: "/public/syrups.jpeg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full bg-gray-100">
      {/* Carousel Section */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="flex flex-col lg:flex-row h-full">
              {/* Text Content */}
              <div className="flex items-center justify-center p-6 lg:p-16 bg-white lg:w-1/2 overflow-y-auto">
                <div className="max-w-xl w-full">
                  <h1 className="text-3xl lg:text-5xl font-bold text-black mb-4 lg:mb-6">
                    {slide.title}
                  </h1>
                  <p className="text-gray-700 text-sm lg:text-lg leading-relaxed">
                    {slide.description}
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-64 lg:h-[90%] lg:w-1/2 overflow-hidden lg:my-auto">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="object-contain w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-cyan-500 w-8'
                  : 'bg-white/60 hover:bg-white'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Product Cards Section */}
      <div className="py-12 px-4 lg:px-16 bg-white">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-10">
          We Offer
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {slides.map((product, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className="bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group"
            >
              <div className="aspect-square bg-white p-4 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-gray-800 text-sm lg:text-base">
                  {product.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deals;