import React, { useState } from 'react';
import emailjs from "emailjs-com";

import { motion } from 'framer-motion';
import { Mail, Phone, User, MessageSquare, Building2, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  //enviar correo
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_EMAIL_PUBLIC_KEY
    );

    toast({
      title: "✅ Mensaje enviado",
      description: "Gracias por contactarnos. Te responderemos pronto."
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: ""
    });
  } catch (error) {
    toast({
      title: "❌ Error",
      description: "Hubo un problema enviando el mensaje. Inténtalo de nuevo."
    });
  }
};


  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-8">
        <span className="gradient-text">Envíanos un Mensaje</span>
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-800 text-sm font-medium mb-2">Nombre Completo *</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#77c3cf]" />
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full pl-10 pr-4 py-3 bg-[#f6fbfb]/50 border border-[#77c3cf]/30 rounded-lg text-[#1c1e22] placeholder:text-[#1c1e22]/50 focus:outline-none focus:border-[#77c3cf] transition-colors" placeholder="Tu nombre completo" />
            </div>
          </div>
          <div>
            <label className="block text-gray-800 text-sm font-medium mb-2">Email *</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#77c3cf]" />
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full pl-10 pr-4 py-3 bg-[#f6fbfb]/50 border border-[#77c3cf]/30 rounded-lg text-[#1c1e22] placeholder:text-[#1c1e22]/50 focus:outline-none focus:border-[#77c3cf] transition-colors" placeholder="tu@email.com" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-800 text-sm font-medium mb-2">Teléfono</label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#77c3cf]" />
              <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full pl-10 pr-4 py-3 bg-[#f6fbfb]/50 border border-[#77c3cf]/30 rounded-lg text-[#1c1e22] placeholder:text-[#1c1e22]/50 focus:outline-none focus:border-[#77c3cf] transition-colors" placeholder="+57 300 123 4567" />
            </div>
          </div>
          <div>
            <label className="block text-gray-800 text-sm font-medium mb-2">Empresa</label>
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#77c3cf]" />
              <input type="text" name="company" value={formData.company} onChange={handleInputChange} className="w-full pl-10 pr-4 py-3 bg-[#f6fbfb]/50 border border-[#77c3cf]/30 rounded-lg text-[#1c1e22] placeholder:text-[#1c1e22]/50 focus:outline-none focus:border-[#77c3cf] transition-colors" placeholder="Nombre de tu empresa" />
            </div>
          </div>
        </div>
        <div>
          <label className="block text-gray-800 text-sm font-medium mb-2">Asunto *</label>
          <select name="subject" value={formData.subject} onChange={handleInputChange} required className="w-full px-4 py-3 bg-[#f6fbfb]/50 border border-[#77c3cf]/30 rounded-lg text-[#1c1e22] focus:outline-none focus:border-[#77c3cf] transition-colors">
            <option value="">Selecciona un asunto</option>
            <option value="cotizacion">Solicitar Cotización</option>
            <option value="consulta">Consulta Técnica</option>
            <option value="proyecto">Nuevo Proyecto</option>
            <option value="mantenimiento">Mantenimiento</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-800 text-sm font-medium mb-2">Mensaje *</label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-[#77c3cf]" />
            <textarea name="message" value={formData.message} onChange={handleInputChange} required rows={6} className="w-full pl-10 pr-4 py-3 bg-[#f6fbfb]/50 border border-[#77c3cf]/30 rounded-lg text-[#1c1e22] placeholder:text-[#1c1e22]/50 focus:outline-none focus:border-[#77c3cf] transition-colors resize-none" placeholder="Cuéntanos sobre tu proyecto o consulta..."></textarea>
          </div>
        </div>
        <Button type="submit" className="w-full bg-gradient-to-r from-[#77c3cf] to-[#60a3b0] hover:from-[#60a3b0] hover:to-[#77c3cf] text-white py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 pulse-glow flex items-center justify-center gap-2">
          <Send className="h-5 w-5" />
          Enviar Mensaje
        </Button>
      </form>
    </motion.div>
  );
};

export default ContactForm;