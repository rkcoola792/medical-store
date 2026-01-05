import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
            <img src="/logo-black.jpeg" alt="Logo" className="w-52 h-32 mb-4" />
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm text-gray-400 mb-4">
              Leading pharmaceutical company dedicated to improving healthcare
              worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-gray-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-gray-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-gray-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="hover:text-gray-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-gray-500 transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-gray-500 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/legal"
                  className="hover:text-gray-500 transition-colors"
                >
                  Legal
                </Link>
              </li>
               <li>
                <Link
                  to="/manufacturer"
                  className="hover:text-gray-500 transition-colors"
                >
                  Manufacturer
                </Link>
              </li>
               <li>
                <Link
                  to="/deals"
                  className="hover:text-gray-500 transition-colors"
                >
                  Deals
                </Link>
              </li>
            </ul>
          </div>

          

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Contact Info
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>
                  Plot no.7, 326 , vardhaman Jaypee plaza sector 4 dwarka , new
                  delhi 100078
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>+91 7065104294 </span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>daniqueformulations@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center text-gray-400">
          <p>&copy; 2026 Danique Formulations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
