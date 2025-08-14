import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Users, Globe, Shield, Zap, Award, Leaf } from 'lucide-react';

const Objetivos = () => {
  const generalObjectives = [
    {
      icon: Target,
      title: "Excelencia Operacional",
      description: "Mantener los más altos estándares de calidad en todos nuestros procesos, desde el diseño hasta la instalación final."
    },
    {
      icon: TrendingUp,
      title: "Crecimiento Sostenible",
      description: "Expandir nuestra presencia en el mercado nacional e internacional de manera responsable y sostenible."
    },
    {
      icon: Users,
      title: "Desarrollo del Talento Humano",
      description: "Formar y capacitar continuamente a nuestro equipo para mantener la vanguardia tecnológica y profesional."
    },
    {
      icon: Globe,
      title: "Innovación Tecnológica",
      description: "Implementar las últimas tecnologías en diseño, fabricación e instalación de estructuras metálicas."
    }
  ];

  const specificObjectives = [
    {
      icon: Shield,
      title: "Eficiencia Productiva",
      description: " Prestar con eficacia y prontitud los servicios ofrecidos por nuestra empresa, para cumplir de manera oportuna con los terminos teporales y presupuestales aisgnados a los proyectos en ejecucion.    ",
      metrics: ["Agilidad en procesos", "Reduccion de Tiempos"]
    },
    {
      icon: Zap,
      title: "Calidad",
      description: "Entregar nuestro proyectos con los mayores Estandares de Calidad que incluyan la participacion de enfoques multidiciplinarios y especializados en las tareas de diseño, asesoria,consultoria, construccion y comercializacion de productos.",
      metrics: ["Control de calidad ISO"]
    },
    {
      icon: Award,
      title: "Materiales de Primera",
      description: "Utilizar en el desarrollo de nuestra actividad comercial los materiales e insumos que cumplan con los mas altos Estandares de calidad.",
      metrics: ["Resultados de Calidad.", "Estructuras Duraderas."]
    },
    {
      icon: Leaf,
      title: "Competitividad",
      description: " Garantizar la competitividad, liderazgo y excelencia dentro de las actividades de la Ingeniería Civil y la Arquitectura. ",
      metrics: ["Presencia en el Mercado", "Prodcutos Competitivos"]
    }
  ];

  const strategicGoals = [
    {
      period: "2024-2025",
      title: "Consolidación Nacional",
      goals: [
        "Completar 150 proyectos anuales",
        "Abrir oficina en Medellín y Cali",
        "Certificación ISO 9001:2015",
        "Implementar sistema ERP integral"
      ]
    },
    {
      period: "2026-2027",
      title: "Expansión Regional",
      goals: [
        "Iniciar operaciones en Ecuador y Perú",
        "Desarrollar línea de productos prefabricados",
        "Alcanzar 200 empleados directos",
        "Certificación LEED para proyectos sostenibles"
      ]
    },
    {
      period: "2028-2030",
      title: "Liderazgo Internacional",
      goals: [
        "Presencia en 5 países latinoamericanos",
        "Centro de I+D propio",
        "500 proyectos completados anualmente",
        "Reconocimiento como empresa B Corp"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Objetivos Generales y Específicos - ESTRUMEC | Estructuras Metálicas</title>
        <meta name="description" content="Conoce los objetivos generales y específicos de ESTRUMEC. Nuestras metas estratégicas para liderar el sector de estructuras metálicas con excelencia e innovación." />
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
                <span className="gradient-text">Nuestros Objetivos</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#111213]/80 max-w-4xl mx-auto">
                Metas claras y estratégicas que guían nuestro camino hacia la excelencia 
                en estructuras metálicas y el liderazgo del sector.
              </p>
            </motion.div>
          </div>
        </section>

        {/* General Objectives */}
        <section className="py-20 bg-gradient-to-b from-[#2a2d33] to-[#1c1e22]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Objetivos Generales</span>
              </h2>
              <p className="text-xl text-[#f6fbfb]/80 max-w-3xl mx-auto">
                Satisfacer integralmente las expectativas y necesidades de los
                clientes, ofreciendo un trabajo de excelencia en la rama de la
                Ingeniería civil y la Arquitectura dentro de las políticas de calidad y
                gestión humana de nuestra empresa.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {generalObjectives.map((objective, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect rounded-2xl p-8 text-center card-hover"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#77c3cf] to-[#60a3b0] mb-6">
                    <objective.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#ffffff] mb-4">{objective.title}</h3> {/* Changed to dark text */}
                  <p className="text-[#f6fbfb]/70 leading-relaxed">{objective.description}</p> {/* Changed to dark text */}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Specific Objectives */}
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
                <span className="gradient-text">Objetivos Específicos</span>
              </h2>
              <p className="text-xl text-[#1c1e22]/80 max-w-3xl mx-auto"> {/* Changed to dark text */}
                Metas concretas y medibles que nos permiten evaluar nuestro progreso 
                y garantizar el cumplimiento de nuestros compromisos.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {specificObjectives.map((objective, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="glass-effect rounded-2xl p-8 card-hover"
                >
                  <div className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#77c3cf] to-[#60a3b0] flex-shrink-0">
                      <objective.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-[#1c1e22] mb-4">{objective.title}</h3> {/* Changed to dark text */}
                      <p className="text-[#1c1e22]/80 mb-6 leading-relaxed">{objective.description}</p> {/* Changed to dark text */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-[#77c3cf] mb-3">INDICADORES CLAVE:</h4>
                        {objective.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 rounded-full bg-[#77c3cf]"></div>
                            <span className="text-[#1c1e22]/70 text-sm">{metric}</span> {/* Changed to dark text */}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Strategic Goals Timeline */}
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
                <span className="gradient-text">Metas Estratégicas</span>
              </h2>
              <p className="text-xl text-[#f6fbfb]/80 max-w-3xl mx-auto">
                Nuestra hoja de ruta hacia el liderazgo en estructuras metálicas, 
                con objetivos claros para cada período estratégico.
              </p>
            </motion.div>

            <div className="space-y-12">
              {strategicGoals.map((period, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="glass-effect rounded-3xl p-8 md:p-12">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
                      <div>
                        <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#77c3cf] to-[#60a3b0] text-white rounded-full text-sm font-semibold mb-4">
                          {period.period}
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold gradient-text">{period.title}</h3>
                      </div>
                      <div className="text-6xl md:text-8xl font-bold text-[#77c3cf]/20">
                        0{index + 1}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {period.goals.map((goal, goalIndex) => (
                        <div key={goalIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 rounded-full bg-[#77c3cf]"></div>
                          <span className="text-[#ffffff]/80 leading-relaxed">{goal}</span> {/* Changed to dark text */}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Floating decoration */}
                  <div className="absolute -top-6 -right-6 floating-animation" style={{ animationDelay: `${index * 0.5}s` }}>
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#77c3cf]/20 to-[#60a3b0]/20 backdrop-blur-sm"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Progress Metrics */}
        <section className="py-20 bg-gradient-to-r from-[#77c3cf] to-[#60a3b0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Progreso Actual
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Indicadores que demuestran nuestro avance hacia el cumplimiento 
                de los objetivos establecidos.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { metric: "85%", label: "Objetivos 2024 Completados" },
                { metric: "150+", label: "Proyectos en Ejecución" },
                { metric: "98%", label: "Índice de Satisfacción" },
                { metric: "0", label: "Accidentes Laborales" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.metric}
                  </div>
                  <div className="text-white/90 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Objetivos;