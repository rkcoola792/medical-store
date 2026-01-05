import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const AutoCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "SLATY-OD",
      description: "*SLATY-OD* is a comprehensive bone and nerve health supplement formulated to support overall skeletal strength, neurological repair, and immunity. Powered by *Calcium Citrate Malate (CCM)* with high bioavailability and superior gastrointestinal tolerance, it helps prevent bone loss and improves bone density effectively. The inclusion of *Methylcobalamin, the neurologically active form of Vitamin B12, supports nerve regeneration and remyelination, aiding in recovery from nerve damage. **Vitamin D3* enhances calcium absorption and strengthens immune defense, while *Vitamin K27* plays a vital role in calcium regulation, helping prevent abnormal bleeding and cholestasis. Enriched with *Zinc and Magnesium, essential cofactors in bone metabolism and nerve conduction, SLATY-OD is especially beneficial in conditions such as **osteoporosis, osteopenia, and post-menopausal bone loss*, offering strength and protection beyond bones.",
      image: "/slaty-od.jpeg"
    },
    {
      title: "PENTRYP-NT",
      description: "*PENTRYP-NT* is a targeted combination therapy designed for effective management of *neuropathic and chronic pain, helping patients regain comfort and improve daily functioning. It combines **Gabapentin, which reduces abnormal nerve signaling by inhibiting calcium channel activity, with **Nortriptyline, a well-established agent that enhances serotonin and norepinephrine levels to modulate pain perception, relieve anxiety, and improve sleep quality. This synergistic formulation not only alleviates nerve pain but also addresses associated mood disturbances and sleep disorders, thereby restoring overall quality of life. PENTRYP-NT is proven beneficial in conditions such as **diabetic neuropathy, post-herpetic neuralgia, sciatica, cervical radiculopathy, fibromyalgia, and chronic pain syndromes*, offering comprehensive relief and lasting peace for overactive, painful nerves.",
      image: "/pentryp-nt.jpeg"
    },
    {
      title: "DANIQUE-D3 60K",
      description: "*DANIQUE-D3 60K* is a high-potency *cholecalciferol (Vitamin D3) 60,000 IU* formulation designed for rapid correction of Vitamin D deficiency and long-term support of bone, muscle, and immune health. Its high-dose therapy ensures quick replenishment of depleted Vitamin D levels, improving calcium absorption and maintaining optimal calcium homeostasis, which helps prevent osteomalacia and enhances bone mineral density. By strengthening bones and muscles, DANIQUE-D3 60K effectively reduces bone and muscle pain and supports mobility, particularly in individuals at risk such as post-menopausal women. In addition to its skeletal benefits, Vitamin D3 acts as a powerful immunomodulator, helping reduce susceptibility to infections and supporting overall immune function. DANIQUE-D3 60K is indicated in *Vitamin D deficiency, osteoporosis, osteoarthritis, hypocalcemia, bone and muscle pain, cardiovascular risk support, and immunity boosting*, making it a reliable sunshine in a capsule when natural sunlight is insufficient",
      image: "/danique-d3-60k.jpeg"
    },
    {
      title: "Fenamol",
      description: "*Fenamol* is a powerful multi-activity anti-inflammatory analgesic formulated for the effective management of *acute painful inflammatory conditions. It combines **Aceclofenac, a site-specific NSAID that provides potent analgesic and anti-inflammatory action with better gastric tolerability, **Paracetamol, a centrally acting analgesic and antipyretic with a well-established safety profile, and **Serratiopeptidase, an enzyme that reduces inflammation by removing cellular exudates, improving local blood circulation, and enhancing drug penetration at the affected site. This synergistic combination delivers faster pain relief, reduces swelling, and promotes quicker recovery, making Fenamol highly effective in **painful traumatic conditions, fracture-related pain, dental pain, pre- and post-surgical pain, and sports injuries*. Fenamol offers comprehensive relief by addressing pain, inflammation, and tissue recovery simultaneously, ensuring effective and dependable pain management.",
      image: "/fenamol.jpeg"
    },
    {
      title: "WELLAROZ-FORTE",
      description: "*WELLAROZ-FORTE* is an advanced, integrated therapy specially formulated for patients suffering from *osteoarthritis and rheumatoid conditions that lead to painful, stiff, and immobile joints. It combines **Undenatured Type II Collagen Peptide, the primary structural component of articular cartilage, which helps repair cartilage, improve joint flexibility, and restore mobility, particularly in osteoarthritis. **Boswellia serrata* provides potent anti-inflammatory action, reducing joint inflammation while supporting overall joint and immune health. *Sodium hyaluronate* enhances joint lubrication and shock absorption, promoting smooth joint movement and supporting the growth and maintenance of cartilage and bone tissues. *Rosehip extract* protects cartilage, reduces pain, stiffness, swelling, and inflammation, and improves joint comfort. Together, this synergistic formulation supports cartilage healing, reduces inflammation, and improves joint mobility, making WELLAROZ-FORTE highly beneficial in *osteoarthritis, rheumatoid arthritis, low back pain, tendonitis, tendinosis, sprains and strains, sports and accidental injuries, post-orthopaedic surgeries, and knee and hip joint disorders*, delivering comprehensive and long-lasting joint support.",
      image: "/wellaroz-forte.jpeg"
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
          Our Products
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

export default AutoCarousel;
