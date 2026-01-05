import React, { useState } from 'react';
import { FileText, Download, Eye, Shield, Scale, Lock, FileCheck } from 'lucide-react';

export default function LegalPage() {
  const [selectedDoc, setSelectedDoc] = useState(null);
const legalDocuments = [
  {
    id: 1,
    title: 'Drug License',
    description: 'Official pharmaceutical manufacturing and distribution license',
    icon: <FileText className="w-8 h-8" />,
    pdfUrl: '/documents/drug-license.pdf',
  },
  {
    id: 2,
    title: 'Drug License 2',
    description: 'Additional drug manufacturing and wholesale license certification',
    icon: <Lock className="w-8 h-8" />,
    pdfUrl: '/documents/drug-license-2.pdf',
  },
  {
    id: 3,
    title: 'Food License',
    description: 'FSSAI registration for food supplement manufacturing and sale',
    icon: <FileCheck className="w-8 h-8" />,
    pdfUrl: '/documents/food-license.pdf',
  },
];

  const handleViewDocument = (doc) => {
    setSelectedDoc(doc);
  };

  const handleCloseViewer = () => {
    setSelectedDoc(null);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
    <div className="bg-gradient-to-r from-gray-500 to-gray-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Scale className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <h1 className="text-5xl md:text-6xl font-bold mb-4 italic font-serif">
            Legal Documents
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
            Important legal information and policies
          </p>
        </div>
      </div>

      {/* Documents Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {legalDocuments.map((doc) => (
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
              
                
                <div className="flex gap-2">
                  <button
                    onClick={() => handleViewDocument(doc)}
                    className="flex-1 bg-gray-900 cursor-pointer text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2 text-sm font-medium"
                  >
                    <Eye className="w-4 h-4" />
                    View
                  </button>
                  {/* <a
                    href={doc.pdfUrl}
                    download
                    className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2 text-sm font-medium border border-gray-300"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Important Notice */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <div className="flex">
            <Shield className="w-6 h-6 text-gray-600 flex-shrink-0 mt-1" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Important Notice
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Please read these documents carefully. By using our services, you agree to comply with and be bound by the terms and conditions outlined in these legal documents. If you have any questions or concerns, please contact our legal team.
              </p>
            </div>
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
                <p className="text-sm text-gray-400">{selectedDoc.date}</p>
              </div>
              <div className="flex gap-2">
                {/* <a
                  href={selectedDoc.pdfUrl}
                  download
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download
                </a> */}
                <button
                  onClick={handleCloseViewer}
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 text-xl font-bold"
                >
                  ×
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 overflow-hidden">
              <iframe
                src={`${selectedDoc.pdfUrl}#view=FitH`}
                className="w-full h-full"
                title={selectedDoc.title}
              />
              {/* Fallback message if PDF doesn't load */}
              <div className="hidden p-8 text-center">
                <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">
                  Unable to display PDF in browser. Please download the document to view.
                </p>
                <a
                  href={selectedDoc.pdfUrl}
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all"
                >
                  <Download className="w-5 h-5" />
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

   
    </div>
  );
}