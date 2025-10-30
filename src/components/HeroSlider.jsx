
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';


const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Estructuras Metálicas de Vanguardia",
      subtitle: "Innovación y Calidad en Cada Proyecto",
      description:
        "Construimos el futuro con tecnología de punta y materiales de la más alta calidad",
      image:
        "https://res.cloudinary.com/dywebznfa/image/upload/v1761789030/ducto1_bv5qf1.jpg",
      
    },
    {
      id: 2,
      title: "Ingeniería de Precisión",
      subtitle: "Diseños Arquitectónicos Únicos",
      description:
        "Transformamos ideas en realidades estructurales con diseños innovadores y funcionales",
      image:
        "https://res.cloudinary.com/dywebznfa/image/upload/v1761788121/dorado1_hjfjrz.jpg",
     
    },
    {
      id: 3,
      title: "Compromiso con la Excelencia",
      subtitle: "Más de 10 Años de Experiencia",
      description:
        "Líderes en el sector con proyectos exitosos y clientes satisfechos en toda Colombia",
      image:
        "https://res.cloudinary.com/dywebznfa/image/upload/v1761787558/puente81_b12lih.jpg",
      
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  return (
    <div className="relative h-screen overflow-hidden hero-pattern">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {/* Fondo dinámico */}
          <div className="absolute inset-0">
            <motion.img
              key={slides[currentSlide].image}
              src={slides[currentSlide].image}
              alt={`Slide ${currentSlide + 1}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1c1e22]/90 via-[#1c1e22]/70 to-transparent"></div>
          </div>

          {/* Contenido */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="mb-4"
                >
                  <span className="inline-block px-4 py-2 bg-[#77c3cf]/20 text-[#77c3cf] rounded-full text-sm font-medium backdrop-blur-sm">
                    {slides[currentSlide].subtitle}
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                >
                  <span className="gradient-text">
                    {slides[currentSlide].title}
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-xl md:text-2xl text-[#f6fbfb]/80 mb-8 leading-relaxed"
                >
                  {slides[currentSlide].description}
                </motion.p>

                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
           
       
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Flechas de navegación */}

      {/* Indicadores */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`slider-dot w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "active bg-[#77c3cf] scale-125"
                : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Elementos decorativos flotantes */}
      <div className="absolute top-20 right-20 floating-animation">
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#77c3cf]/20 to-[#60a3b0]/20 backdrop-blur-sm"></div>
      </div>
      <div
        className="absolute bottom-32 left-16 floating-animation"
        style={{ animationDelay: "2s" }}
      >
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#60a3b0]/20 to-[#77c3cf]/20 backdrop-blur-sm"></div>
      </div>
    </div>
  );
};
export default HeroSlider;
