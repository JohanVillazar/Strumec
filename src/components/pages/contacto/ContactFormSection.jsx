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
  "Pintura Electrostatica"
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
          <div className="glass-effect rounded-2xl p-2">
            <div className="h-64 bg-gradient-to-br from-[#77c3cf]/20 to-[#60a3b0]/20 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-[#77c3cf] mx-auto mb-4" />
                <p className="text-[#1c1e22] font-medium">Mapa Interactivo</p>
                <p className="text-[#1c1e22]/70 text-sm">Bogotá, Colombia</p>
              </div>
            </div>
          </div>
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