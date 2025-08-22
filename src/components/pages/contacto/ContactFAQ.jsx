import React from 'react';
import { motion } from 'framer-motion';

const faqItems = [
  {
    question: "¿Cuánto tiempo toma un proyecto típico?",
    answer: "Los tiempos varían según la complejidad, pero un proyecto estándar toma entre 4-8 semanas desde el diseño hasta la instalación."
  },
  {
    question: "¿Ofrecen garantía en sus trabajos?",
    answer: "Sí, ofrecemos garantía de 5 años en estructura y 2 años en acabados, respaldada por nuestras certificaciones de calidad."
  },
  {
    question: "¿Trabajan con proyectos pequeños?",
    answer: "Absolutamente. Atendemos desde pequeñas estructuras residenciales hasta grandes complejos industriales."
  },
  {
    question: "¿Cómo solicito una cotización?",
    answer: "Puedes contactarnos por teléfono, email o completando el formulario. Necesitamos planos o descripción del proyecto para cotizar."
  }
];

const ContactFAQ = () => (
  <section className="py-20 metal-gradient">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-text">Preguntas Frecuentes</span>
        </h2>
        <p className="text-xl text-[#1c1e22]/80 max-w-3xl mx-auto">
          Respuestas a las consultas más comunes sobre nuestros 
          servicios y procesos de trabajo.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {faqItems.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-6"
          >
            <h3 className="text-lg font-semibold text-[#77c3cf] mb-3">{faq.question}</h3>
            <p className="text-[#1c1e22]/80 leading-relaxed">{faq.answer}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ContactFAQ;