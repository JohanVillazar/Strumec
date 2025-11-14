import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const ContactCTA = () => {
  const handleCTAClick = () => {
    const phoneNumber = "573138547852"; 
    const message = "¡Hola! Me gustaría obtener más información sobre sus servicios."; 
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

    const handleCOntactClick = () => {
    const phoneNumber = "573233134727"; // <-- tu número con código de país (sin +)
    const message = "¡Hola! Me gustaría obtener una cotización de sus servicios."; 
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-r from-[#77c3cf] to-[#60a3b0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para comenzar?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Nuestro equipo de expertos está esperando para hacer realidad tu proyecto. 
            Contáctanos hoy y recibe una cotización gratuita.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleCTAClick}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#77c3cf] px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300"
            >
              Contacto 1
            </Button>

                 <Button
              onClick={handleCOntactClick}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#77c3cf] px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300"
            >
              Contacto 2
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
