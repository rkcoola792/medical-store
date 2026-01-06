import React from "react";
import { Stethoscope, MapPin, Users } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative w-full bg-cover bg-center"
      style={{
        backgroundImage: "url('/hero.jpeg')",
      }}
    >
      {/* Light overlay */}
      <div className="absolute inset-0 bg-white/45"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Your Health, Our Priority
            </h1>

            <p className="mt-5 text-2xl font-bold text-cyan-500">
              It’s a promise to care, every day.
            </p>

            <p className="mt-8 text-base md:text-lg text-gray-700 leading-relaxed max-w-xl">
              Your Health, Our Priority 🌟 Expert care, quality medicines, and
              compassionate service — your trusted partner in health and
              wellness. Explore our healthcare solutions for a healthier
              tomorrow.
            </p>

            {/* HIGHLIGHT BAR WITH ICONS */}
            <div className="mt-10 bg-cyan-500 grid grid-cols-1 md:grid-cols-3 text-white rounded-full px-8 py-5  flex-wrap gap-4 text-sm md:text-base font-semibold">
              
              <div className="flex items-center gap-2">
                <Stethoscope size={18} />
                <span>Prescribed by Doctors</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Made in India</span>
              </div>

              <div className="flex items-center gap-2">
                <Users size={18} />
                <span>Trusted by Many Indians</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
