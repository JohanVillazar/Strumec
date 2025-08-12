import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Building2, Users, Award, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import HeroSlider from '@/components/HeroSlider';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Home = () => {
  const handleFeatureClick = () => {
    toast({
      title: "🚧 Esta funcionalidad aún no está implementada",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo mensaje! 🚀",
    });
  };

  const features = [
    {
      icon: Building2,
      title: "Estructuras Innovadoras",
      description: "Diseños arquitectónicos únicos con tecnología de vanguardia y materiales de primera calidad."
    },
    {
      icon: Users,
      title: "Equipo Especializado",
      description: "Profesionales altamente capacitados con más de 10 años de experiencia en el sector."
    },
    {
      icon: Award,
      title: "Calidad Certificada",
      description: "Cumplimos con los más altos estándares de calidad y normativas internacionales."
    },
    {
      icon: Zap,
      title: "Entrega Rápida",
      description: "Optimizamos tiempos sin comprometer la calidad, garantizando entregas puntuales."
    }
  ];

  const stats = [
    { number: "500+", label: "Proyectos Completados" },
    { number: "15+", label: "Años de Experiencia" },
    { number: "98%", label: "Clientes Satisfechos" },
    { number: "50+", label: "Profesionales" }
  ];

  const services = [
    {
      title: "Estructuras Industriales",
      description: "Naves industriales, bodegas y plantas de producción con diseños optimizados.",
      image: "Nave industrial moderna con estructura metálica"
    },
    {
      title: "Edificaciones Comerciales",
      description: "Centros comerciales, oficinas y espacios comerciales innovadores.",
      image: "Edificio comercial moderno con fachada de acero"
    },
    {
      title: "Infraestructura Urbana",
      description: "Puentes, pasarelas y estructuras para el desarrollo urbano sostenible.",
      image: "Puente peatonal moderno con estructura metálica"
    }
  ];

  return (
    <>
      <Helmet>
        <title>ESTRUMEC - Estructuras Metálicas de Vanguardia | Inicio</title>
        <meta name="description" content="ESTRUMEC es líder en estructuras metálicas con más de 15 años de experiencia. Ofrecemos diseños innovadores, calidad certificada y entregas puntuales en Colombia." />
      </Helmet>

      {/* Hero Slider */}
      <HeroSlider />

      {/* Features Section */}
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
              <span className="gradient-text">¿Por qué elegir ESTRUMEC?</span>
            </h2>
            <p className="text-xl text-[#f6fbfb]/80 max-w-3xl mx-auto">
              Somos líderes en el sector de estructuras metálicas, ofreciendo soluciones integrales 
              con la más alta calidad y tecnología de vanguardia.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={handleFeatureClick}
                className="glass-effect rounded-2xl p-8 text-center card-hover cursor-pointer"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#77c3cf] to-[#60a3b0] mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#77c3cf] mb-4">{feature.title}</h3> {/* Changed to dark text */}
                <p className="text-[#f6fbfb]/70">{feature.description}</p> {/* Changed to dark text */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 metal-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-[#1c1e22]/80 font-medium">{stat.label}</div> {/* Changed to dark text */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
<section className="py-20 bg-gradient-to-b from-[#2a2d33] to-[#1c1e22]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Título y descripción */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        <span className="gradient-text">Nuestros Servicios</span>
      </h2>
      <p className="text-xl text-[#f6fbfb]/80 max-w-3xl mx-auto">
        Ofrecemos soluciones completas en estructuras metálicas para diferentes sectores 
        y necesidades específicas.
      </p>
    </motion.div>

    {/* Grid de servicios */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          title: "Estructuras Industriales",
          description: "Diseño y fabricación de estructuras para plantas y almacenes.",
          image: "https://cdn.pixabay.com/photo/2018/10/16/00/55/man-3750381_1280.jpg"
        },
        {
          title: "Puentes Metálicos",
          description: "Construcción y montaje de puentes peatonales y vehiculares.",
          image: "https://cdn.pixabay.com/photo/2014/02/12/12/33/suspension-bridge-264609_960_720.jpg"
        },
        {
          title: "Cubiertas y Techos",
          description: "Soluciones para cubiertas resistentes y duraderas.",
          image: "https://cdn.pixabay.com/photo/2017/08/03/13/13/stainless-2576185_1280.jpg"
        }
      ].map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
          onClick={handleFeatureClick}
          className="project-card rounded-2xl overflow-hidden card-hover cursor-pointer"
        >
          {/* Imagen */}
          <div className="h-64 overflow-hidden">
            <img
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              alt={service.title}
              src={service.image}
            />
          </div>

          {/* Contenido */}
          <div className="p-8">
            <h3 className="text-2xl font-bold text-[#f6fbfb] mb-4">{service.title}</h3>
            <p className="text-[#f6fbfb]/70 mb-6">{service.description}</p>
            <Button
              onClick={handleFeatureClick}
              variant="outline"
              className="border-[#77c3cf] text-[#77c3cf] hover:bg-[#77c3cf] hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              Ver más
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#77c3cf] to-[#60a3b0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Listo para tu próximo proyecto?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contáctanos hoy y descubre cómo podemos hacer realidad tus ideas 
              con estructuras metálicas de la más alta calidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleFeatureClick}
                className="bg-white text-[#77c3cf] hover:bg-[#f6fbfb] px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Solicitar Cotización
              </Button>
              <Button
                onClick={handleFeatureClick}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#77c3cf] px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300"
              >
                Ver Portafolio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;