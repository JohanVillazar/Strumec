
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
      description: "Construimos el futuro con tecnología de punta y materiales de la más alta calidad",
      image: "https://cdn.pixabay.com/photo/2019/12/13/13/05/steel-4692910_960_720.jpg",
      cta: "Ver Proyectos"
    },
    {
      id: 2,
      title: "Ingeniería de Precisión",
      subtitle: "Diseños Arquitectónicos Únicos",
      description: "Transformamos ideas en realidades estructurales con diseños innovadores y funcionales",
      image: "https://cdn.pixabay.com/photo/2021/11/27/10/10/grinding-6827613_1280.jpg",
      cta: "Nuestros Servicios"
    },
    {
      id: 3,
      title: "Compromiso con la Excelencia",
      subtitle: "Más de 10 Años de Experiencia",
      description: "Líderes en el sector con proyectos exitosos y clientes satisfechos en toda Colombia",
      image: "https://cdn.pixabay.com/photo/2019/12/13/13/05/steel-4692910_960_720.jpg",
      cta: "Conoce Más"
    }
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

  const handleCTAClick = () => {
    toast({
      title: "🚧 Esta funcionalidad aún no está implementada",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo mensaje! 🚀",
    });
  };

  return (
    <div className="relative h-screen overflow-hidden hero-pattern">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img  
              className="w-full h-full object-cover"
              alt={`Slide ${currentSlide + 1}`}
             src="https://cdn.pixabay.com/photo/2019/12/13/13/05/steel-4692910_960_720.jpg" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1c1e22]/90 via-[#1c1e22]/70 to-transparent"></div>
          </div>

          {/* Content */}
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
                  <Button
                    onClick={handleCTAClick}
                    className="bg-gradient-to-r from-[#77c3cf] to-[#60a3b0] hover:from-[#60a3b0] hover:to-[#77c3cf] text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 pulse-glow"
                  >
                    {slides[currentSlide].cta}
                  </Button>
                  <Button
                    onClick={handleCTAClick}
                    variant="outline"
                    className="border-[#77c3cf] text-[#77c3cf] hover:bg-[#77c3cf] hover:text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 flex items-center gap-2"
                  >
                    <Play className="h-5 w-5" />
                    Ver Video
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full glass-effect text-[#77c3cf] hover:bg-[#77c3cf] hover:text-white transition-all duration-300"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full glass-effect text-[#77c3cf] hover:bg-[#77c3cf] hover:text-white transition-all duration-300"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`slider-dot w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'active bg-[#77c3cf] scale-125'
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 floating-animation">
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#77c3cf]/20 to-[#60a3b0]/20 backdrop-blur-sm"></div>
      </div>
      <div className="absolute bottom-32 left-16 floating-animation" style={{ animationDelay: '2s' }}>
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#60a3b0]/20 to-[#77c3cf]/20 backdrop-blur-sm"></div>
      </div>
    </div>
  );
};

export default HeroSlider;
