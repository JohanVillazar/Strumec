import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Users, Award, Shield, Leaf, BookOpen, Heart, Zap, Globe } from 'lucide-react';

const Politicas = () => {
  const humanResourcesPolicies = [
    {
      icon: Users,
      title: "Medio Ambiente",
      description: "Evitar el menor daño al Medio Ambiente a través del concomimiento de los riesgos e impactos ambientales, que se pudieren presentar en el desarrollo las actividades y servicios de la empresa.",
      
    },
    {
      icon: BookOpen,
      title: "Control",
      description: " Establecimiento de controles, acciones correctivas y preventivas que minimicen las consecuencias ambientales negativas emanadas directamente de las actividades de la empresa.",
    
    },
    {
      icon: Heart,
      title: "Bienestar Integral",
      description: "Prestar los servicios bajo condiciones de salubridad y seguridad laboral, de quienes participan en las actividades de la empresa. Ello incluye el cumplimiento de los requisitos consagrados en las leyes del Derecho Laboral y la Seguridad Social con respecto a las afiliaciones a los sistemas de Salud, Pensión y Riesgos Profesionales.",
     
    },
    {
      icon: Zap,
      title: "Salud",
      description: "Promoción de la salud ocupacional de nuestro grupo de trabajadores con el fin de prevenir las enfermedades derivadas de las actividades del trabajo y los accidentes y lesiones ocasionados en el desarrollo del mismo.",
   
    }
  ];

  const qualityPolicies = [
    {
      icon: Award,
      title: "Excelencia en Procesos",
      description: "Entrega de un servicio calificado, con idoneidad técnica, capacidad multi-disciplinaria, eficaz, integral y con excelencia.",
   
    },
    {
      icon: Shield,
      title: "Procesos de Calidad",
      description: "Diseño de las fases de Planeación, Funcionamiento, Estrategias y Desarrollo de cada servicio que permitan establecer con claridad las necesidades, requisitos, especificaciones y parámetros de nuestros clientes para lograr su satisfacción integral.",
     
    },
    {
      icon: Leaf,
      title: "Excelencia en Tiempos",
      description: "Ejecución a tiempo de los servicios y actividades teniendo en cuenta la excelencia del trabajo y los presupuestos económicos, contractuales, ambientales, sociales, entre otros, establecidos por nuestros clientes y la legislación vigente.",
    
    },
    {
      icon: Globe,
      title: "Controles de Calidad",
      description: "Evaluación de cada servicio o actividad realizada con el fin de establecer nuevas pautas y elementos que optimicen y mejoren los servicios prestados y reajusten los procedimientos o procesos que dificulten la entrega de un trabajo con excelencia.",
   
    }
  ];

  const ethicalPrinciples = [
    {
      title: "Integridad Empresarial",
      description: "Actuamos con transparencia y honestidad en todas nuestras relaciones comerciales, manteniendo los más altos estándares éticos.",
      commitments: [
        "Transparencia en procesos de licitación",
        "Comunicación clara con clientes",
        "Cumplimiento de compromisos contractuales",
        "Rendición de cuentas periódica"
      ]
    },
    {
      title: "Responsabilidad Social",
      description: "Contribuimos al desarrollo de las comunidades donde operamos, generando empleo local y apoyando iniciativas sociales.",
      commitments: [
        "Contratación de mano de obra local",
        "Programas de formación técnica",
        "Apoyo a fundaciones educativas",
        "Proyectos de infraestructura comunitaria"
      ]
    },
    {
      title: "Relaciones Comerciales Justas",
      description: "Mantenemos relaciones equitativas con proveedores, subcontratistas y socios comerciales, promoviendo el crecimiento mutuo.",
      commitments: [
        "Pagos puntuales a proveedores",
        "Contratos justos y transparentes",
        "Desarrollo de proveedores locales",
        "Alianzas estratégicas a largo plazo"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Políticas de Gestión Humana y Calidad - ESTRUMEC | Estructuras Metálicas</title>
        <meta name="description" content="Conoce las políticas de gestión humana y calidad de ESTRUMEC. Nuestro compromiso con el bienestar laboral, excelencia operacional y responsabilidad social." />
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
                <span className="gradient-text">Nuestras Políticas</span>
              </h1>
              <p className="text-xl md:text-2xl text-[111213]/80 max-w-4xl mx-auto">
                Marcos de referencia que guían nuestras decisiones y acciones en gestión humana, 
                calidad y responsabilidad empresarial.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Human Resources Policies */}
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
                <span className="gradient-text">Políticas de Gestión Humana</span>
              </h2>
              <p className="text-xl text-[#f6fbfb]/80 max-w-3xl mx-auto">
                La Política de Gestión Humana de ESTRUMEC S.A.S., está enmarcada
                dentro de las siguientes directrices:
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {humanResourcesPolicies.map((policy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect rounded-2xl p-8 card-hover"
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#77c3cf] to-[#60a3b0] flex-shrink-0">
                      <policy.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-[#ffffff] mb-3">{policy.title}</h3> {/* Changed to dark text */}
                      <p className="text-[#f6fbfb]/80 leading-relaxed">{policy.description}</p> {/* Changed to dark text */}
                    </div>
                  </div>
                  
        
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Policies */}
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
                <span className="gradient-text">Políticas de Calidad</span>
              </h2>
              <p className="text-xl text-[#1c1e22]/80 max-w-3xl mx-auto"> {/* Changed to dark text */}
                La Política de Calidad de ESTRUMEC S.A.S., está enmarcada
                dentro de las siguientes directrices:
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {qualityPolicies.map((policy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="glass-effect rounded-2xl p-8 card-hover"
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#77c3cf] to-[#60a3b0] flex-shrink-0">
                      <policy.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-[#1c1e22] mb-3">{policy.title}</h3> {/* Changed to dark text */}
                      <p className="text-[#111213]/80 leading-relaxed">{policy.description}</p> {/* Changed to dark text */}
                    </div>
                  </div>
                  
               
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Ethical Principles */}
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
                <span className="gradient-text">Principios Éticos</span>
              </h2>
              <p className="text-xl text-[#f6fbfb]/80 max-w-3xl mx-auto">
                Valores fundamentales que rigen nuestro comportamiento empresarial 
                y nuestras relaciones con todos los grupos de interés.
              </p>
            </motion.div>

            <div className="space-y-12">
              {ethicalPrinciples.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="glass-effect rounded-3xl p-8 md:p-12"
                >
                  <div className="flex flex-col md:flex-row items-start justify-between mb-8">
                    <div className="flex-1">
                      <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-4">{principle.title}</h3>
                      <p className="text-lg text-[#ffffff]/80 leading-relaxed max-w-3xl">{principle.description}</p> {/* Changed to dark text */}
                    </div>
                    <div className="text-6xl md:text-8xl font-bold text-[#77c3cf]/20 mt-4 md:mt-0">
                      0{index + 1}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {principle.commitments.map((commitment, commitmentIndex) => (
                      <div key={commitmentIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-[#77c3cf]"></div>
                        <span className="text-[#f6fbfb]/80 leading-relaxed">{commitment}</span> {/* Changed to dark text */}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
     
      </div>
    </>
  );
};

export default Politicas;