import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, User } from 'lucide-react';

const offices = [
  {
    city: "Bogotá",
    address: "Calle 100 #15-20, Zona Industrial Norte",
    phone: "+57 (1) 234-5678",
    email: "bogota@estrumec.com",
    manager: "Ing. Carlos Rodríguez"
  },
  {
    city: "Medellín",
    address: "Carrera 50 #30-45, Sector Industrial",
    phone: "+57 (4) 567-8901",
    email: "medellin@estrumec.com",
    manager: "Ing. Ana María López"
  },
  {
    city: "Cali",
    address: "Avenida 6N #28-15, Zona Franca",
    phone: "+57 (2) 345-6789",
    email: "cali@estrumec.com",
    manager: "Ing. Miguel Herrera"
  }
];

const OfficesSection = () => (
  <section className="py-20 bg-gradient-to-b from-[#1c1e22] to-[#2a2d33]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-text">Nuestras Oficinas</span>
        </h2>
        <p className="text-xl text-[#f6fbfb]/80 max-w-3xl mx-auto">
          Presencia nacional con oficinas estratégicamente ubicadas 
          para brindar el mejor servicio en todo el país.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {offices.map((office, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8 card-hover"
          >
            <h3 className="text-2xl font-bold gradient-text mb-6">{office.city}</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#77c3cf] mt-1 flex-shrink-0" />
                <span className="text-[#f6fbfb]/80 text-sm">{office.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#77c3cf] flex-shrink-0" />
                <span className="text-[#f6fbfb]/80 text-sm">{office.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#77c3cf] flex-shrink-0" />
                <span className="text-[#f6fbfb]/80 text-sm">{office.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <User className="h-5 w-5 text-[#77c3cf] flex-shrink-0" />
                <span className="text-[#f6fbfb]/80 text-sm">{office.manager}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default OfficesSection;