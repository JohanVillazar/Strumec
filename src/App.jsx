import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import MisionVision from '@/pages/MisionVision';
import Objetivos from '@/pages/Objetivos';
import Politicas from '@/pages/Politicas';
import Proyectos from '@/pages/Proyectos';
import Contacto from '@/pages/Contacto';
import WhatsAppButton from '@/components/WhatsAppButton';


function App() {
return (
    <Router>
      <div className="min-h-screen bg-[#f6fbfb]">
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mision-vision" element={<MisionVision />} />
            <Route path="/objetivos" element={<Objetivos />} />
            <Route path="/politicas" element={<Politicas />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        
        {/* Botón WhatsApp visible en toda la web */}
        <WhatsAppButton />

        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;