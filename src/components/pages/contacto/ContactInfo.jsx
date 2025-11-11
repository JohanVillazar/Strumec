import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: "Teléfono",
    details: ["+57 (3138547852", "+57 300 123 4567"],
    
  },
  {
    icon: Mail,
    title: "Email",
    details: ["estrumec@live.com"],
    
  },
  {
    icon: MapPin,
    title: "Oficina Principal",
    details: ["CRA 19 # 59 B sur 68", "Bogotá, Colombia"],
    description: "El preciso / Meisen"
  },
  {
    icon: Clock,
    title: "Horarios",
    details: ["Lun - Vie: 7:00 AM - 6:00 PM", "Sáb: 7:00 AM - 02:00 PM"],
    description: "Atención personalizada"
  }
];

const ContactInfo = () => (
  <section className="py-20 bg-gradient-to-b from-[#2a2d33] to-[#1c1e22]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {contactInfo.map((info, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8 text-center card-hover"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#77c3cf] to-[#60a3b0] mb-6">
              <info.icon className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[#f6fbfb] mb-4">{info.title}</h3>
            <div className="space-y-1 mb-3">
              {info.details.map((detail, detailIndex) => (
                <p key={detailIndex} className="text-[#77c3cf] font-medium">{detail}</p>
              ))}
            </div>
            <p className="text-[#f6fbfb]/70 text-sm">{info.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ContactInfo;