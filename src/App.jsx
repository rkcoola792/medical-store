import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout.jsx";
import Products from "./components/products.jsx";
import Home from "./pages/home.jsx";
import ContactUs from "./pages/contact.jsx";
import AboutUs from "./pages/about.jsx";
import LegalPage from "./pages/legal.jsx";
import AutoCarousel from "./pages/products.jsx";
import Manufacturer from "./pages/manufacturer.jsx";
import Deals from "./pages/deals.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<AutoCarousel />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="legal" element={<LegalPage />} />
          <Route path="manufacturer" element={<Manufacturer />} />
          <Route path="deals" element={<Deals />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;