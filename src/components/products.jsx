import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductsShowcase() {
  const products = [
    {
      id: 1,
      title: "Orthopeadics",
      image:"/public/orthopaedics.jpeg",
    },
    {
      id: 2,
      title: "Gynaecology",
      image:
        "/public/gyna.jpeg",
    },
    {
      id: 3,
      title: "General Practitioner",
      image:
        "/public/geriation.jpeg",
    },
    {
      id: 4,
      title: "Rheumatologist",
      image:
        "/public/rheumatology.jpeg",
    },
    {
      id: 5,
      title: "Geriatrician",
      image:
        "/public/phsycian.jpeg",
    },
    {
      id: 6,
      title: "Endocrinologist",
      image:
        "/public/endo.jpeg",
    },
    {
      id: 7,
      title: "Pediatrician",
      image:
        "/public/paedea.jpeg",
    },
    {
      id: 8,
      title: "Orthodontist",
      image:
        "/public/orthodontist.png",
    },
  ];
const navigate = useNavigate();
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 italic font-serif">
            Our Products
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Danique Formulations offers a wide range of unique
            formulations in following therapeutic areas:
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-lg  shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={()=>navigate(`/products`)}
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover "
                />
                {/* Overlay Gradient */}
                <div
                  className={`absolute inset-0   opacity-60 group-hover:opacity-70  duration-300`}
                ></div>
              </div>

              

              {/* Hover Effect Border */}
              <div className="absolute inset-0  border-transparent   duration-300 rounded-lg pointer-events-none"></div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}
