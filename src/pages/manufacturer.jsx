import React, { useState } from "react";
import { FileText, Eye, Factory, X } from "lucide-react";

export default function Manufacturer() {
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const manufacturerDocuments = [
    {
      id: 1,
      title: "Manufacturing Certifications",
      description:
        "Good Manufacturing Practice certification for pharmaceutical production",
      icon: <FileText className="w-8 h-8" />,
      pdfUrl: "/documents/all-certificates.pdf",
    },
   
  ];

  const facilityImages = [
    {
      id: 1,
      title: "Manufacturing Unit",
      description: "State-of-the-art production facility",
      imageUrl: "/manufacturer.jpeg",
    },
    {
      id: 2,
      title: "Quality Control Lab",
      description: "Advanced testing and quality assurance laboratory",
      imageUrl:
        "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop",
    },
    {
      id: 3,
      title: "Packaging Unit",
      description: "Automated packaging and labeling facility",
      imageUrl: "/packaging.jpeg",
    },
    {
      id: 4,
      title: "Storage Facility",
      description: "Temperature-controlled warehouse and storage",
      imageUrl:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
    },
    {
      id: 5,
      title: "Research & Development",
      description: "Innovation and product development center",
      imageUrl:
        "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=800&h=600&fit=crop",
    },
    {
      id: 6,
      title: "Clean Room Facility",
      description: "Sterile production environment for sensitive medications",
      imageUrl: "/machine.jpeg",
    },
  ];

  const handleViewDocument = (doc) => {
    setSelectedDoc(doc);
  };

  const handleCloseViewer = () => {
    setSelectedDoc(null);
  };

  const handleViewImage = (image) => {
    setSelectedImage(image);
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-500 to-gray-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Factory className="w-16 h-16 mx-auto mb-4 text-gray-300" />
          <h1 className="text-5xl md:text-6xl font-bold mb-4 italic font-serif">
            Manufacturing Excellence
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Certified facilities and quality standards
          </p>
        </div>
      </div>

      {/* About Us Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gray-50 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            About Lakra Polytex
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Industry & Market</h3>
              <p className="text-gray-700 mb-2"><span className="font-semibold">Industry:</span> Manufacturing</p>
              <p className="text-gray-700"><span className="font-semibold">Market:</span> India</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">About Us</h3>
              <p className="text-gray-700 leading-relaxed">
                Lakra Polytex is a manufacturing company committed to delivering high-quality polymer-based products with consistency and reliability.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What We Do</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-gray-900 mr-2">•</span>
                  Polymer & plastic manufacturing
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 mr-2">•</span>
                  OEM / contract manufacturing
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 mr-2">•</span>
                  Bulk supply solutions
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Strengths</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-gray-900 mr-2">•</span>
                  Advanced production facilities
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 mr-2">•</span>
                  Quality-focused processes
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 mr-2">•</span>
                  Timely delivery
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 mr-2">•</span>
                  Competitive pricing
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-gray-500 to-gray-700 text-white p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-3">Our Commitment</h3>
            <p className="text-gray-200 leading-relaxed max-w-3xl mx-auto">
              To provide durable products, maintain quality standards, and build long-term business partnerships.
            </p>
          </div>
        </div>
      </div>

      {/* Documents Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Certifications & Documents
        </h2>
        <div className="flex items-center justify-center gap-8 flex-wrap">
          {manufacturerDocuments.map((doc) => (
            <div
              key={doc.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-gray-300"
            >
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-center mb-4 text-gray-700">
                  {doc.icon}
                </div>
                <h3 className="text-xl font-bold text-center mb-2 text-gray-900">
                  {doc.title}
                </h3>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {doc.description}
                </p>

                <button
                  onClick={() => handleViewDocument(doc)}
                  className="w-full bg-gray-900 cursor-pointer text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2 text-sm font-medium"
                >
                  <Eye className="w-4 h-4" />
                  View Document
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Facility Images Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Facilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilityImages.map((image) => (
              <div
                key={image.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => handleViewImage(image)}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={image.imageUrl}
                    alt={image.title}
                    className="w-full h-full object-fill hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {image.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PDF Viewer Modal */}
      {selectedDoc && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-6xl h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="bg-gray-900 text-white p-6 rounded-t-lg flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-1">{selectedDoc.title}</h2>
                <p className="text-sm text-gray-400">
                  {selectedDoc.description}
                </p>
              </div>
              <button
                onClick={handleCloseViewer}
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 cursor-pointer rounded-lg transition-all duration-300 text-xl font-bold"
              >
                ×
              </button>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 overflow-hidden">
              <iframe
                src={`${selectedDoc.pdfUrl}#view=FitH`}
                className="w-full h-full"
                title={selectedDoc.title}
              />
            </div>
          </div>
        </div>
      )}

      {/* Image Viewer Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full">
            <button
              onClick={handleCloseImage}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage.imageUrl}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
            <div className="bg-white p-6 rounded-b-lg mt-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-gray-600">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
