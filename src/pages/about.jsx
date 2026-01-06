import React from 'react';
import { Heart, Target, Users, Award, TrendingUp, Globe, Shield, Zap } from 'lucide-react';

export default function AboutUs() {

  const values = [
    {
      icon: <Heart className="w-12 h-12 text-black" />,
      title: 'Patient First',
      description: 'We prioritize patient health and safety in everything we do, ensuring the highest quality products and services.',
    },
    {
      icon: <Shield className="w-12 h-12 text-black" />,
      title: 'Quality Assurance',
      description: 'Our products meet the highest international standards with rigorous testing and quality control processes.',
    },
    {
      icon: <Target className="w-12 h-12 text-black" />,
      title: 'Innovation',
      description: 'Continuously advancing medical science through research and development of cutting-edge pharmaceutical solutions.',
    },
    {
      icon: <Globe className="w-12 h-12 text-black" />,
      title: 'Global Reach',
      description: 'Serving communities worldwide with accessible, affordable healthcare solutions that make a real difference.',
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-600 to-gray-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full "></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full "></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 italic font-serif">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
            Leading the way in pharmaceutical excellence.
          </p>
        </div>
      </div>

      {/* Company Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 italic font-serif">
            Who We Are
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Danique Formulations is an India-focused pharmaceutical marketing company committed to delivering high-quality, affordable, and reliable healthcare products. We work closely with WHO-GMP certified manufacturing partners to ensure consistent quality and regulatory compliance across our product range.
          </p>
          <p className="text-lg text-gray-900 font-semibold mt-6 italic">
            Danique Formulations – Marketing Quality, Caring for Health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Our Focus */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Focus</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-gray-700 mr-3 mt-1">•</span>
                <span className="text-gray-700">Ethical pharmaceutical marketing</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-700 mr-3 mt-1">•</span>
                <span className="text-gray-700">High-quality branded formulations</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-700 mr-3 mt-1">•</span>
                <span className="text-gray-700">Strong distribution network across India</span>
              </li>
            </ul>
          </div>

          {/* Product Range */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Product Range</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-700 font-semibold mb-2">Dosage Forms:</p>
                <p className="text-gray-600">Tablets, Capsules, Syrups, Ointments, Nutraceuticals</p>
              </div>
              <div>
                <p className="text-gray-700 font-semibold mb-2">Therapeutic Segments:</p>
                <p className="text-gray-600">Anti-infectives, Gastroenterology, Pain Management, Vitamins & Supplements</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 italic font-serif">
              Our Journey
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Since our inception, Danique Formulations has been dedicated to providing high-quality, affordable healthcare products to the Indian market. Through strategic partnerships with WHO-GMP certified manufacturers, we ensure that every product meets stringent quality standards and regulatory requirements.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              We've built strong relationships with healthcare professionals across India, supporting them with reliable pharmaceutical products and excellent service. Our commitment to integrity, innovation, and patient-centric care drives us to continuously improve and expand our product portfolio to meet evolving healthcare needs.
            </p>
           
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
              alt="Our Story"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-gray-500 to-red-500 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-gray-50 py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 italic font-serif">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 "
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${value.gradient} rounded-xl flex items-center justify-center text-white mb-4 mx-auto`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
}