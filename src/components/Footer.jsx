import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1c1e22] border-t border-[#77c3cf]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <motion.img
              src="/strumec.jpeg"
              alt="Estrumec Logo"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
              className="h-12 w-12 object-contain rounded-md shadow-lg border border-white/10"
            />
            <span className="text-xl font-bold gradient-text">ESTRUMEC</span>

            <p className="text-[#f6fbfb]/80 mb-6 max-w-md">
              Especialistas en estructuras metálicas con más de 10 años de
              experiencia. Construimos el futuro con calidad, innovación y
              compromiso.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="p-2 rounded-full bg-[#77c3cf]/20 text-[#77c3cf] hover:bg-[#77c3cf] hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="p-2 rounded-full bg-[#77c3cf]/20 text-[#77c3cf] hover:bg-[#77c3cf] hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="p-2 rounded-full bg-[#77c3cf]/20 text-[#77c3cf] hover:bg-[#77c3cf] hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <span className="text-lg font-semibold text-[#77c3cf] mb-4 block">
              Contacto
            </span>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-[#77c3cf]" />
                <span className="text-[#f6fbfb]/80">+57 /3233134727</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-[#77c3cf]" />
                <span className="text-[#f6fbfb]/80">estrumec@live.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-[#77c3cf]" />
                <span className="text-[#f6fbfb]/80">
                  CRA 19 # 59 B sur 68-Bogotá, Colombia
                </span>
              </div>
            </div>
          </div>

          {/* Enlaces rápidos */}
        </div>

        <div className="section-divider my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#f6fbfb]/60 text-sm">
            © 2024 ESTRUMEC. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-[#f6fbfb]/60 text-sm hover:text-[#77c3cf] transition-colors cursor-pointer">
              Política de Privacidad
            </span>
            <span className="text-[#f6fbfb]/60 text-sm hover:text-[#77c3cf] transition-colors cursor-pointer">
              Términos de Servicio
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
