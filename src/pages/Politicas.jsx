import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Users, Award, Shield, Leaf, BookOpen, Heart, Zap, Globe } from 'lucide-react';

const Politicas = () => {
  const humanResourcesPolicies = [
    {
      icon: Users,
      title: "Igualdad y Diversidad",
      description: "Promovemos un ambiente laboral inclusivo donde se respeta la diversidad de género, edad, origen étnico y orientación, garantizando igualdad de oportunidades para todos.",
      principles: [
        "Contratación basada en mérito y competencias",
        "Cero tolerancia a la discriminación",
        "Programas de inclusión laboral",
        "Equidad salarial por función"
      ]
    },
    {
      icon: BookOpen,
      title: "Desarrollo Profesional",
      description: "Invertimos en el crecimiento profesional de nuestro equipo mediante programas de capacitación continua, certificaciones técnicas y planes de carrera estructurados.",
      principles: [
        "40 horas anuales de capacitación por empleado",
        "Certificaciones técnicas especializadas",
        "Programas de liderazgo interno",
        "Apoyo para estudios superiores"
      ]
    },
    {
      icon: Heart,
      title: "Bienestar Integral",
      description: "Cuidamos la salud física y mental de nuestros colaboradores con programas de bienestar, beneficios competitivos y ambiente laboral saludable.",
      principles: [
        "Seguro médico familiar completo",
        "Programas de salud ocupacional",
        "Actividades de bienestar y recreación",
        "Horarios flexibles y teletrabajo"
      ]
    },
    {
      icon: Zap,
      title: "Reconocimiento y Compensación",
      description: "Valoramos el desempeño excepcional con sistemas de reconocimiento justos, compensaciones competitivas y beneficios adicionales por logros.",
      principles: [
        "Evaluaciones de desempeño semestrales",
        "Bonificaciones por productividad",
        "Reconocimientos públicos mensuales",
        "Participación en utilidades"
      ]
    }
  ];

  const qualityPolicies = [
    {
      icon: Award,
      title: "Excelencia en Procesos",
      description: "Implementamos sistemas de gestión de calidad ISO 9001:2015 en todos nuestros procesos, desde el diseño hasta la entrega final del proyecto.",
      standards: [
        "Certificación ISO 9001:2015",
        "Auditorías internas trimestrales",
        "Mejora continua de procesos",
        "Documentación técnica completa"
      ]
    },
    {
      icon: Shield,
      title: "Seguridad y Cumplimiento",
      description: "Garantizamos el cumplimiento de todas las normativas técnicas y de seguridad, manteniendo los más altos estándares en cada proyecto.",
      standards: [
        "Cumplimiento NSR-10 y códigos internacionales",
        "Certificación OHSAS 18001",
        "Protocolos de seguridad rigurosos",
        "Inspecciones de calidad en cada etapa"
      ]
    },
    {
      icon: Leaf,
      title: "Sostenibilidad Ambiental",
      description: "Comprometidos con prácticas ambientalmente responsables, utilizando materiales sostenibles y procesos que minimizan el impacto ecológico.",
      standards: [
        "30% de materiales reciclados",
        "Gestión integral de residuos",
        "Certificación ambiental ISO 14001",
        "Huella de carbono neutral para 2030"
      ]
    },
    {
      icon: Globe,
      title: "Innovación Tecnológica",
      description: "Adoptamos las últimas tecnologías en diseño BIM, fabricación automatizada y gestión de proyectos para garantizar resultados superiores.",
      standards: [
        "Modelado BIM en todos los proyectos",
        "Fabricación asistida por computadora",
        "Software de gestión integrado",
        "I+D continuo en nuevas tecnologías"
      ]
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
                Nuestro compromiso con el desarrollo integral de nuestro talento humano, 
                creando un ambiente laboral excepcional y oportunidades de crecimiento.
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
                  
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-[#77c3cf] mb-3">PRINCIPIOS CLAVE:</h4>
                    {policy.principles.map((principle, principleIndex) => (
                      <div key={principleIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-[#77c3cf] mt-2 flex-shrink-0"></div>
                        <span className="text-[#f6fbfb]/70 text-sm leading-relaxed">{principle}</span> {/* Changed to dark text */}
                      </div>
                    ))}
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
                Estándares rigurosos que garantizan la excelencia en cada proyecto, 
                desde la concepción hasta la entrega final.
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
                  
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-[#77c3cf] mb-3">ESTÁNDARES:</h4>
                    {policy.standards.map((standard, standardIndex) => (
                      <div key={standardIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-[#77c3cf] mt-2 flex-shrink-0"></div>
                        <span className="text-[#1c1e22]/70 text-sm leading-relaxed">{standard}</span> {/* Changed to dark text */}
                      </div>
                    ))}
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

        {/* Compliance and Certifications */}
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
                Certificaciones y Cumplimiento
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Reconocimientos que validan nuestro compromiso con la excelencia 
                y el cumplimiento de estándares internacionales.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { cert: "ISO 9001:2015", label: "Gestión de Calidad" },
                { cert: "OHSAS 18001", label: "Seguridad y Salud" },
                { cert: "ISO 14001", label: "Gestión Ambiental" },
                { cert: "NSR-10", label: "Normativa Sismo Resistente" }
              ].map((certification, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6"
                >
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {certification.cert}
                  </div>
                  <div className="text-white/90 font-medium text-sm">{certification.label}</div>
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