import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Lightbulb } from 'lucide-react';

const MisionVision = () => {
  const values = [
    {
      icon: Heart,
      title: "Compromiso",
      description: "Nos comprometemos con la excelencia en cada proyecto, garantizando resultados que superen las expectativas de nuestros clientes."
    },
    {
      icon: Lightbulb,
      title: "Innovación",
      description: "Implementamos tecnologías de vanguardia y metodologías innovadoras para ofrecer soluciones estructurales únicas."
    },
    {
      icon: Target,
      title: "Precisión",
      description: "Cada detalle cuenta. Trabajamos con precisión milimétrica para garantizar la seguridad y durabilidad de nuestras estructuras."
    },
    {
      icon: Eye,
      title: "Transparencia",
      description: "Mantenemos comunicación clara y honesta con nuestros clientes en todas las etapas del proyecto."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Misión y Visión - ESTRUMEC | Estructuras Metálicas</title>
        <meta name="description" content="Conoce la misión, visión y valores de ESTRUMEC. Somos líderes en estructuras metálicas comprometidos con la innovación, calidad y excelencia." />
      </Helmet>

      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#1c1e22] via-[#2a2d33] to-[#1c1e22] hero-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="gradient-text">Misión y Visión</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#1c1e22]/80 max-w-4xl mx-auto">
                Conoce los principios y objetivos que guían nuestro trabajo diario 
                en la construcción de estructuras metálicas de excelencia.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-gradient-to-b from-[#2a2d33] to-[#1c1e22]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-[#77c3cf] to-[#60a3b0] mb-8">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  <span className="gradient-text">Nuestra Misión</span>
                </h2>
                <p className="text-lg text-[#f6fbfb]/80 leading-relaxed mb-6">
                  Lograr la excelencia en nuestro trabajo y satisfacer las necesidades de
                  nuestros clientes mediante la Planificación, Desarrollo, Ejecución y
                  Evaluación en todos los servicios prestados a entidades del sector
                  público y privado con el fin de obtener la satisfacción y el bienestar de
                  nuestros clientes y el desarrollo de nuestros colaboradores.
                </p>
              
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="glass-effect rounded-3xl p-2">
                  <img  
                    className="w-full h-96 object-cover rounded-2xl"
                    alt="Equipo de trabajo ESTRUMEC"
                   src="https://res.cloudinary.com/dywebznfa/image/upload/c_crop,ar_3:4/v1763239681/misiontorre_ganm9w.jpg" />
                </div>
                <div className="absolute -top-10 -right-10 floating-animation">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#77c3cf]/30 to-[#60a3b0]/30 backdrop-blur-sm"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 metal-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative order-2 lg:order-1"
              >
                <div className="glass-effect rounded-3xl p-2">
                  <img  
                    className="w-full h-96 object-cover rounded-2xl"
                    alt="Visión futurista ESTRUMEC"
                   src="https://res.cloudinary.com/dywebznfa/image/upload/colpa1_fwbirj.png" />
                </div>
                <div className="absolute -bottom-10 -left-10 floating-animation" style={{ animationDelay: '2s' }}>
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#60a3b0]/30 to-[#77c3cf]/30 backdrop-blur-sm"></div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-[#77c3cf] to-[#60a3b0] mb-8">
                  <Eye className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  <span className="gradient-text">Nuestra Visión</span>
                </h2>
                <p className="text-lg text-[#1c1e22]/80 leading-relaxed mb-6">
                  Para el 2035 seremos una empresa reconocida en el sector de la
                  construcción de estructuras metálicas en Colombia a través de la
                  innovación y el aseguramiento de la calidad en los procesos.
                </p>
                
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
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
                <span className="gradient-text">Nuestros Valores</span>
              </h2>
              <p className="text-xl text-[#f6fbfb]/80 max-w-3xl mx-auto">
                Los principios fundamentales que guían cada una de nuestras acciones 
                y decisiones empresariales.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect rounded-2xl p-8 text-center card-hover"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#77c3cf] to-[#60a3b0] mb-6">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#ffffff] mb-4">{value.title}</h3> {/* Changed to dark text */}
                  <p className="text-[#f6fbfb]/70 leading-relaxed">{value.description}</p> {/* Changed to dark text */}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
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
        <span className="gradient-text">Nuestra Historia</span>
      </h2>
      <p className="text-xl text-[#1c1e22]/80 max-w-3xl mx-auto">
        Un recorrido por los hitos más importantes que han marcado 
        nuestro crecimiento y evolución.
      </p>
    </motion.div>

    {/* 🧑‍💼 Sección del fundador */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row items-center justify-center gap-8 mb-20 text-center md:text-left"
    >
      <img
        src="https://res.cloudinary.com/dywebznfa/image/upload/e_improve,e_sharpen/v1762894121/fundador_h83kjo.jpg"
        alt="Fundador de la empresa"
        className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-lg border-4 border-[#77c3cf]"
      />
      <div>
        <h3 className="text-2xl font-bold text-[#1c1e22] mb-2">Luis Alfonso Rozo Cortés</h3>
        <p className="text-[#1c1e22]/80 italic mb-4">Fundador</p>
        <p className="max-w-lg text-[#1c1e22]/70">
          Con visión, pasión y liderazgo, Luis inició esta compañía en 2012, 
          guiando su crecimiento hacia la innovación y la excelencia que hoy nos define.
        </p>
      </div>
    </motion.div>

    {/* Timeline */}
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#77c3cf] to-[#60a3b0]"></div>
      
      <div className="space-y-16">
        {[
          { year: "2012", title: "Fundación", description: " Su visión y liderazgo dieron origen a una empresa que nació de una idea y el valor de convertir los sueños en realidad. Gracias a su compromiso y determinación, hoy seguimos construyendo sobre un legado de pasión, innovación y propósito.." },
          { year: "", title: "Inicios", description: "Comenzamos con estructuras de tamaño pequeño, cubiertas para viviendas y ornamentación." },
          { year: "", title: "Transformación", description: "Abrimos nuestra primera oficina fisica para mejorar la atención a nuestro clientes." },
          { year: "", title: "Innovación", description: "Iniciamos construcción y mantenimiento de puente vehiculares y peatonales." },
          { year: "", title: "Escalamiento", description: "Realizamos estructuras de mayor tamaño para empresas publicas y privadas." },
           { year: "", title: "Consolidación", description: "Conseguimos nuestros primeros contratos con el IDU y proyectos con grandes Empresas." },
            { year: "", title: "Alianzas", description: "Tenemos varias empresas aliadas para mantener nuestra calidad,cumplimiento,y así ofrecer un excelente servicio a nuestros clientes." },

        ].map((milestone, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
          >
            <div className={`glass-effect rounded-2xl p-8 max-w-md ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
              <div className="text-2xl font-bold gradient-text mb-2">{milestone.year}</div>
              <h3 className="text-xl font-semibold text-[#1c1e22] mb-4">{milestone.title}</h3>
              <p className="text-[#1c1e22]/70">{milestone.description}</p>
            </div>
            <div className="w-4 h-4 rounded-full bg-[#77c3cf] border-4 border-[#1c1e22] relative z-10"></div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>

      </div>
    </>
  );
};

export default MisionVision;