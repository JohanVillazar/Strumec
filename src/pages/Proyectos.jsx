  import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Factory, ShoppingBag, Home, MapPin, Users, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Proyectos = () => {
  const [activeFilter, setActiveFilter] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');

  const handleProjectClick = () => {
    toast({
      title: "🚧 Esta funcionalidad aún no está implementada",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo mensaje! 🚀",
    });
  };

  const categories = [
    { id: 'todos', name: 'Todos los Proyectos', icon: Building2 },
    { id: 'industrial', name: 'Industrial', icon: Factory },
    { id: 'comercial', name: 'Comercial', icon: ShoppingBag },
    { id: 'residencial', name: 'Residencial', icon: Home }
  ];

  const projects = [
    {
      id: 1,
      title: "Ménsula Apoyo Puente",
      category: "industrial",
      status: "terminado",
      location: "Bogotá, Colombia",
      year: "2024",
      area: "Cliente: HB SADELES S.A.S",
      client: "ESTRUMEC",
      description: "Contrato: Fabricación y armado de ménsulas de apoyo para puente de la calle 127 con avenida Boyacá.",
      image: "https://images.pexels.com/photos/30319902/pexels-photo-30319902.jpeg", // puente
      features: []
    },
    {
      id: 2,
      title: "Apoyos para Puente-Riostras",
      category: "industrial",
      status: "terminado",
      location: "Bogota, Colombia",
      year: "2024",
      area: "Cliente: HB SEDELEC S.A.S",
      client: "ESTRUMEC",
      description: "Contrato: Fabricación y aramado de tacones para puente.",
      image: "https://images.pexels.com/photos/20178421/pexels-photo-20178421.jpeg", // centro comercial
      features: []
    },
    {
      id: 3,
      title: "Puertas tiendas Ara",
      category: "comercial",
      status: "terminado",
      location: "Bogotá, Colombia",
      year: "2024",
      area: "Cliente: Tiendas ARA",
      client: "ESTRUMEC",
      description: "Contrato: Fabricación, armado, montaje y pintura de puerta antipanico y cuartos fríos para las tiendas ARA-Ornamentación y pintura de persianas..",
      image: "https://images.pexels.com/photos/24837730/pexels-photo-24837730.jpeg", // residencial
      features: []
    },
    {
      id: 4,
      title: "Escalera de Emergencia Torre Colpatria",
      category: "industrial",
      status: "terminado",
      location: "Bogotá, Colombia",
      year: "2023",
      area: "Avanza S.A.S",
      client: "ESTRUMEC",
      description: "Contrato: Construcción de escaleras de emergencia 7 niveles, elaboración de paneles de fachada, pinturas, montaje e instalción de barandas..",
      image: "https://images.pexels.com/photos/23834847/pexels-photo-23834847.jpeg", // planta industrial
      features: []
    },
    {
      id: 5,
      title: "Mejoras en Seguridad y Estetica para Viviendas.",
      category: "residencial",
      status: "terminado",
      location: "Pacho, Cundinamarca",
      year: "2023",
      area: "Residencial",
      client: "ESTRUMEC",
      description: "Contrato: Fabricacion de puertas, reja para ventanas y escaleras, armado, pintura e instalación.",
      image: "https://cdn.pixabay.com/photo/2017/12/18/23/54/facade-3027133_1280.jpg", // oficinas
      features: []
    },
    {
      id: 6,
      title: "Cubierta para Iglesia.",
      category: "industrial",
      status: "terminado",
      location: "Funza,Cundinamarca",
      year: "2023",
      area: "Cliente: Rodelta",
      client: "ESTURMEC",
      description: "Contrato:  Fabricación, armado, pintura y montaje de cubierta para iglesia católica.",
      image: "https://cdn.pixabay.com/photo/2016/07/16/14/16/roof-1522027_1280.jpg", // puente peatonal
      features: []
    },

        {
      id: 7,
      title: "Fabricación de Formaleta.",
      category: "industrial",
      status: "terminado",
      location: "Subia,Cundinamarca",
      year: "2023",
      area: "Cliente: Freysinet S.A.S",
      client: "ESTRUMEC",
      description: "Contrato: Fabricación, armado, mantenimiento y pintura de formaleta para columnas y muros..",
      image: "https://cdn.pixabay.com/photo/2020/08/30/04/58/c-lipped-channel-5528517_960_720.jpg", // puente peatonal
      features: []
    },

            {
      id: 8,
      title: "Montaje de Mezanine.",
      category: "residencial",
      status: "terminado",
      location: "Bogotá,Colombia",
      year: "2023",
      area: "Cliente: Arq. Jorge Molano",
      client: "ESTRUMEC",
      description: "Contrato: Fabricación y montaje de Mezanine",
      image: "https://cdn.pixabay.com/photo/2017/06/12/22/29/construction-2397037_1280.jpg", // puente peatonal
      features: []
    },

                {
      id: 9,
      title: "Escaleras de Emergencia.",
      category: "industrial",
      status: "terminado",
      location: "Bogotá,Colombia",
      year: "2021",
      area: "Cliente: Iglesia Cristiana Filadelfia JV",
      client: "ESTRUMEC",
      description: "Contrato: Fabricación y montaje de Escaleras",
      image: "https://cdn.pixabay.com/photo/2019/04/05/21/17/steel-stairs-4106077_1280.jpg", // puente peatonal
      features: []
    },

                    {
      id: 10,
      title: "Plazoleta de Comidad y Plaza de Artesanos.",
      category: "industrial",
      status: "terminado",
      location: "Bogotá,Colombia",
      year: "2021",
      area: "Cliente: Consorcio Malecom Neiva ",
      client: "ESTRUMEC",
      description: "Contrato: Fabricación y montaje de Estructuras",
      image: "https://cdn.pixabay.com/photo/2014/05/17/18/09/shopping-mall-346434_1280.jpg", // puente peatonal
      features: []
    },

                    {
      id: 10,
      title: "Barandas Peatonales.",
      category: "industrial",
      status: "terminado",
      location: "Bogotá,Colombia",
      year: "2021",
      area: "Cliente: Instituto de Desarrollo Urbano ",
      client: "ESTRUMEC",
      description: "Contrato: Fabricación y montaje de estructura metálica tipo barandas peatonales.",
      image: "https://cdn.pixabay.com/photo/2019/09/03/15/31/pedestrian-bridge-4449652_1280.jpg", // puente peatonal
      features: []
    },

                  {
      id: 11,
      title: "PoliDepotivo.",
      category: "industrial",
      status: "terminado",
      location: "Huila,Colombia",
      year: "2019",
      area: "Cliente: Ronaldo Alexis Gonzales Martínez ",
      client: "ESTRUMEC",
      description: "Contrato: Suministro, fabricación y montaje de estructura metálica para polideportivo en el centro educativo  Departamento del Huila.",
      image: "https://cdn.pixabay.com/photo/2017/07/02/03/05/stadium-2463389_960_720.jpg", // puente peatonal
      features: []
    },

                      {
      id: 12,
      title: "Estructura de Bodega.",
      category: "industrial",
      status: "terminado",
      location: "Bogotá,Colombia",
      year: "2016",
      area: "Cliente: Constructora Contrastes. ",
      client: "ESTRUMEC",
      description: "Contrato: Fabricación y Montaje de la estructura metálica para una bodega en la calle 6 de Bogotá D.C. ",
      image: "https://cdn.pixabay.com/photo/2017/07/02/03/05/stadium-2463389_960_720.jpg", // puente peatonal
      features: []
    },

                          {
      id: 13,
      title: "Bar Bikingos.",
      category: "comercial",
      status: "terminado",
      location: "Bogotá,Colombia",
      year: "2015",
      area: "Cliente: Constructora Contrastes. ",
      client: "ESTRUMEC",
      description: "Contrato: Suministro y Fabricación de Estructuras Metálicas para Bar Calle 82 ",
      image: "https://cdn.pixabay.com/photo/2017/08/22/08/03/construction-2668051_1280.jpg", // puente peatonal
      features: []
    },
    
    
    
    
    

  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeFilter === 'todos' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const stats = [
    { number: "500+", label: "Proyectos Completados" },
    { number: "50+", label: "Proyectos en Curso" },
    { number: "2M+", label: "m² Construidos" },
    { number: "98%", label: "Satisfacción Cliente" }
  ];

  return (
    <>
      <Helmet>
        <title>Proyectos en Curso y Terminados - ESTRUMEC | Estructuras Metálicas</title>
        <meta name="description" content="Explora el portafolio de proyectos de ESTRUMEC. Estructuras metálicas industriales, comerciales y residenciales con más de 500 proyectos exitosos." />
      </Helmet>

      <div className="pt-16">

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#1c1e22] via-[#2a2d33] to-[#1c1e22] hero-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="gradient-text">Nuestros Proyectos</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#111213]/80 max-w-4xl mx-auto">
                Descubre nuestro portafolio de proyectos exitosos que demuestran nuestra experiencia y compromiso con la excelencia.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 metal-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-[#1c1e22]/80 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-12 bg-gradient-to-b from-[#2a2d33] to-[#1c1e22]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button key={category.id} onClick={() => setActiveFilter(category.id)}
                  variant={activeFilter === category.id ? "default" : "outline"}
                  className={`flex items-center gap-2 transition-all duration-300 ${
                    activeFilter === category.id
                      ? 'bg-gradient-to-r from-[#77c3cf] to-[#60a3b0] text-white'
                      : 'border-[#77c3cf] text-[#77c3cf] hover:bg-[#77c3cf] hover:text-white'
                  }`}>
                  <category.icon className="h-4 w-4" />
                  {category.name}
                </Button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#77c3cf]" />
              <input type="text" placeholder="Buscar proyectos..." value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 bg-[#f6fbfb]/50 border border-[#77c3cf]/30 rounded-lg text-[#1c1e22] placeholder:text-[#1c1e22]/50 focus:outline-none focus:border-[#77c3cf] transition-colors"
              />
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 bg-gradient-to-b from-[#1c1e22] to-[#2a2d33]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatePresence mode="wait">
              <motion.div key={activeFilter + searchTerm} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <motion.div key={project.id} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    onClick={handleProjectClick}
                    className="project-card rounded-2xl overflow-hidden card-hover cursor-pointer">
                    
                    {/* Project Image */}
                    <div className="h-64 overflow-hidden relative">
                      <img className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        alt={project.title} src={project.image} />
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          project.status === 'terminado' 
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                            : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                        }`}>
                          {project.status === 'terminado' ? 'Terminado' : 'En Curso'}
                        </span>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 bg-[#77c3cf]/20 text-[#77c3cf] rounded text-xs font-medium">
                          {categories.find(cat => cat.id === project.category)?.name}
                        </span>
                        <span className="text-[#f6fbfb]/60 text-xs">{project.year}</span>
                      </div>

                      <h3 className="text-xl font-bold text-[#f6fbfb] mb-3">{project.title}</h3>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-[#f6fbfb]/70">
                          <MapPin className="h-4 w-4 text-[#77c3cf]" />
                          {project.location}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-[#f6fbfb]/70">
                          <Building2 className="h-4 w-4 text-[#77c3cf]" />
                          {project.area}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-[#f6fbfb]/70">
                          <Users className="h-4 w-4 text-[#77c3cf]" />
                          {project.client}
                        </div>
                      </div>

                      <p className="text-[#f6fbfb]/70 text-sm mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.features.slice(0, 2).map((feature, featureIndex) => (
                          <span key={featureIndex} className="px-2 py-1 bg-[#77c3cf]/10 text-[#77c3cf] rounded text-xs">
                            {feature}
                          </span>
                        ))}
                        {project.features.length > 2 && (
                          <span className="px-2 py-1 bg-[#77c3cf]/10 text-[#77c3cf] rounded text-xs">
                            +{project.features.length - 2} más
                          </span>
                        )}
                      </div>

                 
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {filteredProjects.length === 0 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-[#1c1e22] mb-2">No se encontraron proyectos</h3>
                <p className="text-[#1c1e22]/70">Intenta con otros filtros o términos de búsqueda</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#77c3cf] to-[#60a3b0] text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Tu proyecto será el próximo?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Únete a nuestros clientes satisfechos y haz realidad tu proyecto con estructuras metálicas de la más alta calidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleProjectClick}
                className="bg-white text-[#77c3cf] hover:bg-[#f6fbfb] px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
                Solicitar Cotización
              </Button>
              <Button onClick={handleProjectClick} variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#77c3cf] px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300">
                Descargar Portafolio
              </Button>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default Proyectos;
