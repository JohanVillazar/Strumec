import React from 'react';
import { motion } from 'framer-motion';

const ContactHero = () => (
  <section className="py-20 bg-gradient-to-br from-[#1c1e22] via-[#2a2d33] to-[#1c1e22] hero-pattern">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="gradient-text">Contáctanos</span>
        </h1>
        <p className="text-xl md:text-2xl text-[#111213]/80 max-w-4xl mx-auto">
          Estamos listos para hacer realidad tu proyecto. Contáctanos para 
          recibir asesoría especializada y cotización gratuita.
        </p>
      </motion.div>
    </div>
  </section>
);

export default ContactHero;