import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import ContactForm from './ContactForm';

const services = [
  "Estructuras Metalicas",
  "Puertas,Barandas",
  "Montaje e instalación",
  "Corte Laser de todo Tipo",
  "Levantamientos Topograficos",
  "Pintura Electrostatica",
  "Cortadora",
  "Dobladora"
];

const ContactFormSection = () => (
  <section className="py-20 metal-gradient">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <ContactForm />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="glass-effect rounded-2xl p-8">
            <h3 className="text-2xl font-bold gradient-text mb-6">Nuestros Servicios</h3>
            <div className="space-y-3">
              {services.map((service, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-[#77c3cf]"></div>
                  <span className="text-[#1c1e22]/80">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactFormSection;