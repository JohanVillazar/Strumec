import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Factory,
  ShoppingBag,
  Home,
  MapPin,
  Users,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import ProjectModal from "@/components/ProjectModal";

const Proyectos = () => {
  const [activeFilter, setActiveFilter] = useState("todos");
  const [statusFilter, setStatusFilter] = useState("todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const [yearFilter, setYearFilter] = useState("todos");

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const categories = [
    { id: "todos", name: "Todos los Proyectos", icon: Building2 },
    { id: "industrial", name: "Industrial", icon: Factory },
    { id: "comercial", name: "Comercial", icon: ShoppingBag },
    { id: "residencial", name: "Residencial", icon: Home },
  ];

  const statusCategories = [
    { id: "todos", name: "Todos" },
    { id: "terminado", name: "Terminado" },
    { id: "en curso", name: "En curso" },
  ];

  const projects = [
           {
      id: 17,
      title: "Iglesia Filadelfia.",
      category: "industrial",
      status: "en curso",
      location: "Bogotá,Colombia",
      year: "2025",
      area: "Cliente: Iglesia Cristiana Filadelfia ",
      client: "ESTRUMEC",
      description:
        "Contrato: Cerramiento Perimetral",
      image:
        "https://res.cloudinary.com/dywebznfa/image/upload/v1761788432/cerrar1_mavsth.jpg", 
        galery:[
         "https://res.cloudinary.com/dywebznfa/image/upload/v1761788432/cerrar1_mavsth.jpg",
         "https://res.cloudinary.com/dywebznfa/image/upload/v1761788673/cerrar3_zjfvwi.jpg"
        ],// puente peatonal
      features: [],
    },


       {
      id: 18,
      title: "Puente 8 Sur Barandas.",
      category: "industrial",
      status: "en curso",
      location: "Soacha,Cundinamarca",
      year: "2025",
      area: "Cliente: HB Estructuras Metalicas ",
      client: "ESTRUMEC",
      description:
        "Contrato: Barandas Puente",
      image:
        "https://res.cloudinary.com/dywebznfa/image/upload/v1761787558/puente81_b12lih.jpg", 
        galery:[
          "https://res.cloudinary.com/dywebznfa/image/upload/v1761787594/puente83_hly2eg.jpg",
          "https://res.cloudinary.com/dywebznfa/image/upload/v1761787563/puente82_likshw.jpg"
         
        ],// puente peatonal
      features: [],
    },

    {
      id: 1,
      title: "Ménsula Apoyo Puente",
      category: "industrial",
      status: "terminado",
      location: "Bogotá, Colombia",
      year: "2024",
      area: "Cliente: HB SADELES S.A.S",
      client: "ESTRUMEC",
      description:
        "Contrato: Fabricación y armado de ménsulas de apoyo para puente de la calle 127 con avenida Boyacá.",
      image:
        "https://res.cloudinary.com/dywebznfa/image/upload/v1761752454/mensula1_cntk4e.png",
      galery: [
        "https://res.cloudinary.com/dywebznfa/image/upload/v1761752457/mensula3_usfnvg.png",
        "https://res.cloudinary.com/dywebznfa/image/upload/v1761752456/mensula2_mxwnme.png",
      ],
      features: [],
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
      image:
        "https://res.cloudinary.com/dywebznfa/image/upload/v1761748637/puente2_v5os8v.png",
      gallery: [
        "https://res.cloudinary.com/dywebznfa/image/upload/puente1_ltc4ve.png",
      ],
      features: [],
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
      description:
        "Contrato: Fabricación, armado, montaje y pintura de puerta antipanico y cuartos fríos para las tiendas ARA-Ornamentación y pintura de persianas..",
      image:
        "https://res.cloudinary.com/dywebznfa/image/upload/v1761752323/puerta2_m4ky7t.png",
      galery: [
        "https://res.cloudinary.com/dywebznfa/image/upload/v1761752324/puerta3_rbf6ke.png",
        "https://res.cloudinary.com/dywebznfa/image/upload/v1761752292/puerta1_queewn.png",
      ],
      features: [],
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
      description:
        "Contrato: Construcción de escaleras de emergencia 7 niveles, elaboración de paneles de fachada, pinturas, montaje e instalción de barandas..",
      image:
        "https://res.cloudinary.com/dywebznfa/image/upload/v1761752622/colpa1_fwbirj.png",
      galery: [
        "https://res.cloudinary.com/dywebznfa/image/upload/v1761752608/colpa2_f9kqtf.png",
      ],
      features: [],
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
      description:
        "Contrato: Fabricacion de puertas, reja para ventanas y escaleras, armado, pintura e instalación.",
      image:
        "https://res.cloudinary.com/dywebznfa/image/upload/v1761753995/casa1_wkrzda.png",
      galery: [
        "https://res.cloudinary.com/dywebznfa/image/upload/v1761754057/casa2_jnec9d.png",
        "https://res.cloudinary.com/dywebznfa/image/upload/v1761754177/CASA4_ro16di.png",
      ],
      features: [],
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
      description:
        "Contrato:  Fabricación, armado, pintura y montaje de cubierta para iglesia católica.",
      image:
        "https://res.cloudinary.com/dywebznfa/image/upload/v1761754730/iglesia_tyhkzo.png", // puente peatonal
      features: [],
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
      description:
        "Contrato: Fabricación, armado, mantenimiento y pintura de formaleta para columnas y muros..",
      image:
        "https://res.cloudinary.com/dywebznfa/image/upload/v1761755121/formaleta2_h9gvay.png",
      galery: [
        "https://res.cloudinary.com/dywebznfa/image/upload/v1761755153/formaleta1_ohb5bt.png",
        "https://res.cloudinary.com/dywebznfa/image/upload/v1761755119/formaleta3_hkobgq.png",
      ],
      features: [],
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
      image:
        "https://res.cloudinary.com/dywebznfa/image/upload/a_-90/v1761756351/meza3_e1vyan.png",
      galery: [
        "https://res.cloudinary.com/dywebznfa/image/upload/a_vflip/v1761756354/meza2_vlpkvw.png",
        "https://res.cloudinary.com/dywebznfa/image/upload/a_-90/v1761756357/meza1_rktls2.png",
      ],
      features: [],
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
      image:
        "https://res.cloudinary.com/dywebznfa/image/upload/v1761757087/escalera2_zqm8hn.png", // puente peatonal
      features: [],
    },

    {
      id: 10,
      title: "Plazoleta de Comidas y Plaza de Artesanos.",
      category: "industrial",
      status: "terminado",
      location: "Bogotá,Colombia",
      year: "2021",
      area: "Cliente: Consorcio Malecom Neiva ",
      client: "ESTRUMEC",
      description: "Contrato: Fabricación y montaje de Estructuras",
      image:
        "https://res.cloudinary.com/dywebznfa/image/upload/a_-90/v1761757992/plazoleta2_nwtvza.png", 
        galery:["https://res.cloudinary.com/dywebznfa/image/upload/a_-90/v1761757995/plazoleta1_f7d8e2.png"],// puente peatonal
      features: [],
    },

    {
      id: 10,
      title: "Barandas Viaducto.",
      category: "industrial",
      status: "terminado",
      location: "Bogotá,Colombia",
      year: "2021",
      area: "Cliente: Contructec. ",
      client: "ESTRUMEC",
      description:
        "Contrato: Barandas Viaducto Cuello Via Ibague-CajaMarca.",
      image:
        "https://res.cloudinary.com/dywebznfa/image/upload/a_-90/v1761749126/barandas1_gpq7qc.png",
      galery: [
        "https://res.cloudinary.com/dywebznfa/image/upload/a_-90/v1761749172/barandas3_z15nav.png",
        "https://res.cloudinary.com/dywebznfa/image/upload/a_-90/v1761749173/barandas4_bojiqk.png",
        "https://res.cloudinary.com/dywebznfa/image/upload/a_-90/v1761749127/barandas2_yzsbqr.png",
      ], // puente peatonal
      features: [],
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
      description:
        "Contrato: Suministro, fabricación y montaje de estructura metálica para polideportivo en el centro educativo  Departamento del Huila.",
      image:
        "https://res.cloudinary.com/dywebznfa/image/upload/v1761751863/poli2_nwoqvp.png",
      galery: [
        "https://res.cloudinary.com/dywebznfa/image/upload/a_-90/v1761751907/poli3_qx6arg.png",
        "https://res.cloudinary.com/dywebznfa/image/upload/v1761751862/poli1_xu1wud.png",
      ], // puente peatonal
      features: [],
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
      description:
        "Contrato: Fabricación y Montaje de la estructura metálica para una bodega en la calle 6 de Bogotá D.C. ",
      image:
        "https://res.cloudinary.com/dywebznfa/image/upload/v1761759754/bodega1_id74t4.png",
      galery: [
        "https://res.cloudinary.com/dywebznfa/image/upload/a_-90/v1761759758/bodega2_w578mq.png",
        "https://res.cloudinary.com/dywebznfa/image/upload/v1761759762/bodega3_vmjnpu.png",
      ], // puente peatonal
      features: [],
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
      description:
        "Contrato: Suministro y Fabricación de Estructuras Metálicas para Bar Calle 82 ",
      image:
        "https://res.cloudinary.com/dywebznfa/image/upload/a_-90/v1761748783/vikingos1_xvjv9v.png",
      galery: [
        "https://res.cloudinary.com/dywebznfa/image/upload/v1761748783/vikingos1_xvjv9v.png",
        "https://res.cloudinary.com/dywebznfa/image/upload/v1761748782/vikingos3_eepnvl.png",
      ], // puente peatonal
      features: [],
    },

    {
      id: 14,
      title: "Puente Peatonal.",
      category: "industrial",
      status: "terminado",
      location: "Sabaneta,Colombia",
      year: "2013",
      area: "Cliente: ConstructecS.A. ",
      client: "ESTRUMEC",
      description:
        "Contrato: Fabricación y Montaje del puente peatonal Sabaneta, Estructura principal de 28m conformada por vigas metálicas en I fabricadas con acero estructural A588. ",
      image:
        "https://res.cloudinary.com/dywebznfa/image/upload/a_-90/v1761760745/peatonal1_yxeic3.png",
      galery: [
        "https://res.cloudinary.com/dywebznfa/image/upload/v1761760749/peatonal2_wn9n17.png",
        "https://res.cloudinary.com/dywebznfa/image/upload/v1761760753/peatonal3_hjf2mn.png",
      ],

      // puente peatonal
      features: [],
    },

    {
      id: 15,
      title: "Puente sobre Río.",
      category: "industrial",
      status: "terminado",
      location: "Rio Coello en la Vía Ibagué - Cajamarca",
      year: "2012",
      area: "Cliente: Constructora de Viaductos CTEC S.A.S. ",
      client: "ESTRUMEC",
      description:
        "Contrato: Fabricación de un puente peatonal metálico de 32ml en celosía compuesto de elementos en tubería estructural cuadrada. ",
      image:
        "https://res.cloudinary.com/dywebznfa/image/upload/a_90/a_vflip/v1761751409/rio3_b6vqsx.png", 
        galery:[
          "https://res.cloudinary.com/dywebznfa/image/upload/v1761751410/rio2_virudz.png",
          "https://res.cloudinary.com/dywebznfa/image/upload/a_-90/v1761751411/rio1_jnz8tw.png"
        ],// puente peatonal
      features: [],
    },

    {
      id: 16,
      title: "Estructura de Teleférico.",
      category: "industrial",
      status: "terminado",
      location: "Rio Coello en la Vía Ibagué - Cajamarca",
      year: "2011",
      area: "Cliente: Constructora de viaducto CTEC S.A.S. ",
      client: "ESTRUMEC",
      description:
        "Contrato: Fabricación y Mantenimiento de estructura metálica para teleférico usado en el proyecto Viaducto el Porvenir.",
      image:
        "https://res.cloudinary.com/dywebznfa/image/upload/a_-90/v1761761246/tele1_txs30v.png", 
        galery:[
          "https://res.cloudinary.com/dywebznfa/image/upload/v1761761250/tele2_ck5avg.png",
          "https://res.cloudinary.com/dywebznfa/image/upload/v1761761254/tele3_tvn534.png",
          "https://res.cloudinary.com/dywebznfa/image/upload/v1761761272/tele4_jebtdj.png"
        ]
        ,// puente peatonal
      features: [],
    },

    {
      id: 16,
      title: "Puente Peatonal Leon XIII.",
      category: "industrial",
      status: "terminado",
      location: "Bogotá,Colombia",
      year: "2011",
      area: "Cliente: Constructora de viaducto CTEC S.A.S. ",
      client: "ESTRUMEC",
      description:
        "Contrato: Fabricación, Modificación y Montaje de la Superestructura y Barandas Metálicas Para el Puente Peatonal LEON XIII.",
      image:
        " https://res.cloudinary.com/dywebznfa/image/upload/a_90/a_vflip/v1761761911/leon1_mac2la.png",
        galery:[
          "https://res.cloudinary.com/dywebznfa/image/upload/v1761761915/leon2_g417bq.png",
          "https://res.cloudinary.com/dywebznfa/image/upload/v1761761920/leon3_uwbyo0.png",
          "https://res.cloudinary.com/dywebznfa/image/upload/v1761761953/leon4_iwjjnf.png"
        ],// puente peatonal
      features: [],
    },

        {
      id: 19,
      title: "Puente Dorado Barandas.",
      category: "industrial",
      status: "en curso",
      location: "Bogotá,Colombia",
      year: "2025",
      area: "Cliente: HB Estructuras Metalicas. ",
      client: "ESTRUMEC",
      description:
        "Contrato: Barandas Puente Dorado",
      image:
        "https://res.cloudinary.com/dywebznfa/image/upload/v1761788121/dorado1_hjfjrz.jpg", 
        galery:[
          "https://res.cloudinary.com/dywebznfa/image/upload/v1761788122/dorado3_gsabv8.jpg",
          "https://res.cloudinary.com/dywebznfa/image/upload/v1761788122/dorado2_crt3ny.jpg",
        ],// puente peatonal
      features: [],
    },



        {
      id: 20,
      title: "Ductos Chimenea.",
      category: "industrial",
      status: "en curso",
      location: "Bogotá,Colombia",
      year: "2025",
      area: "Cliente: HB Estructuras Metalicas. ",
      client: "ESTRUMEC",
      description:
        "Contrato: Montaje de Dustos en Chimenea",
      image:
        "https://res.cloudinary.com/dywebznfa/image/upload/v1761789030/ducto1_bv5qf1.jpg", 
        galery:[
          "https://res.cloudinary.com/dywebznfa/image/upload/v1761789030/ducto2_crqapv.jpg",
          "https://res.cloudinary.com/dywebznfa/image/upload/v1761789051/ducto3_gxavpm.jpg"
        ],
      features: [],
    },


        {
      id: 21,
      title: "Cubierta para Locales.",
      category: "industrial",
      status: "en curso",
      location: "Bogotá,Colombia",
      year: "2025",
      area: "Cliente: Soluciones de Ingenieria RO Delta. ",
      client: "ESTRUMEC",
      description:
        "Contrato:Fabricacion y montaje de cubierta para Locales",
      image:
        "https://res.cloudinary.com/dywebznfa/image/upload/cubiertas_ddhuoq.jpg", 
        galery:[
          "https://res.cloudinary.com/dywebznfa/image/upload/cubiertas2_rk6c3x.jpg"
         
          
        ],// puente peatonal
      features: [],
    },

            {
      id: 22,
      title: "Escalera de Emergencia",
      category: "industrial",
      status: "en curso",
      location: "Bogotá,Colombia",
      year: "2025",
      area: "Cliente: HB Estructuras Metalicas. ",
      client: "ESTRUMEC",
      description:
        "Contrato:Escalera Emergencia Bunker Claro",
      image:
        "https://res.cloudinary.com/dywebznfa/image/upload/v1761925097/bunker2_hizhxp.jpg", 
        galery:[
          "https://res.cloudinary.com/dywebznfa/image/upload/v1761925095/bunker1_ej7sr3.jpg",
       
        ],// puente peatonal
      features: [],
    },

                {
      id: 23,
      title: "Pintura Estacion Cll 26",
      category: "industrial",
      status: "en curso",
      location: "Bogotá,Colombia",
      year: "2025",
      area: "Cliente: HB Estructuras Metalicas. ",
      client: "ESTRUMEC",
      description:
        "Contrato:Pintura estaciones Transmilenio Cll 26",
      image:
        "https://res.cloudinary.com/dywebznfa/image/upload/v1766509085/calle26jpeg_tlkhtm.jpg", 
        galery:[
    
        ],// puente peatonal
      features: [],
    },

                 {
      id: 24,
      title: "Pintura Estacion Simon Bolivar",
      category: "industrial",
      status: "en curso",
      location: "Bogotá,Colombia",
      year: "2025",
      area: "Cliente: HB Estructuras Metalicas. ",
      client: "ESTRUMEC",
      description:
        "Contrato:Pintura estaciones Transmilenio Simon Bolivar",
      image:
        "https://res.cloudinary.com/dywebznfa/image/upload/v1766509187/simonbolivar_qto4xz.jpg", 
        galery:[
      
        ],// puente peatonal
      features: [],
    },




  ];

  const years = ["todos", ...Array.from(new Set(projects.map((p) => p.year)))].sort((a, b) => {
    if (a === "todos") return -1;
    if (b === "todos") return 1;
    return b - a;
  });

  const sortedProjects = [...projects].sort((a, b) => {
    if (a.status === "en curso" && b.status !== "en curso") {
      return -1;
    }
    if (a.status !== "en curso" && b.status === "en curso") {
      return 1;
    }
    return 0;
  });

  const filteredProjects = sortedProjects.filter((project) => {
    const matchesCategory =
      activeFilter === "todos" || project.category === activeFilter;
    const matchesStatus =
      statusFilter === "todos" || project.status === statusFilter;
    const matchesYear = yearFilter === "todos" || project.year === yearFilter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.client.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesStatus && matchesYear && matchesSearch;
  });

  const stats = [
    { number: "100+", label: "Proyectos Completados" },
    { number: "30+", label: "Proyectos en Curso" },
    { number: "2M+", label: "m² Construidos" },
    { number: "98%", label: "Satisfacción Cliente" },
  ];

  return (
    <>
      <Helmet>
        <title>
          Proyectos en Curso y Terminados - ESTRUMEC | Estructuras Metálicas
        </title>
        <meta
          name="description"
          content="Explora el portafolio de proyectos de ESTRUMEC. Estructuras metálicas industriales, comerciales y residenciales con más de 500 proyectos exitosos."
        />
      </Helmet>

      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#1c1e22] via-[#2a2d33] to-[#1c1e22] hero-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="gradient-text">Nuestros Proyectos</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#111213]/80 max-w-4xl mx-auto">
                Descubre nuestro portafolio de proyectos exitosos que demuestran
                nuestra experiencia y compromiso con la excelencia.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 metal-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
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
                <div className="text-[#1c1e22]/80 font-medium">
                  {stat.label}
                </div>
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
                <Button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  variant={activeFilter === category.id ? "default" : "outline"}
                  className={`flex items-center gap-2 transition-all duration-300 ${
                    activeFilter === category.id
                      ? "bg-gradient-to-r from-[#77c3cf] to-[#60a3b0] text-white"
                      : "border-[#77c3cf] text-[#77c3cf] hover:bg-[#77c3cf] hover:text-white"
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  {category.name}
                </Button>
              ))}
            </div>

            {/* Status Filters */}
            <div className="flex flex-wrap gap-3">
              {statusCategories.map((status) => (
                <Button
                  key={status.id}
                  onClick={() => setStatusFilter(status.id)}
                  variant={statusFilter === status.id ? "default" : "outline"}
                  className={`flex items-center gap-2 transition-all duration-300 ${
                    statusFilter === status.id
                      ? "bg-gradient-to-r from-[#77c3cf] to-[#60a3b0] text-white"
                      : "border-[#77c3cf] text-[#77c3cf] hover:bg-[#77c3cf] hover:text-white"
                  }`}
                >
                  {status.name}
                </Button>
              ))}
            </div>

            {/* Year Filter */}
            <div className="relative">
              <select
                value={yearFilter}
                onChange={(e) => setYearFilter(e.target.value)}
                className="pl-3 pr-8 py-2 bg-[#f6fbfb]/50 border border-[#77c3cf]/30 rounded-lg text-[#1c1e22] focus:outline-none focus:border-[#77c3cf] transition-colors appearance-none"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year === "todos" ? "Todos los Años" : year}
                  </option>
                ))}
              </select>
            </div>

            {/* Search */}
     
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 bg-gradient-to-b from-[#1c1e22] to-[#2a2d33]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter + statusFilter + searchTerm}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    onClick={() => handleProjectClick(project)}
                    className="project-card rounded-2xl overflow-hidden card-hover cursor-pointer"
                  >
                    {/* Project Image */}
                    <div className="h-64 overflow-hidden relative">
                      <img
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        alt={project.title}
                        src={project.image}
                      />
                      <div className="absolute top-4 right-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            project.status === "terminado"
                              ? "bg-green-700/70 text-white-400 border border-green-700/30"
                              : "bg-yellow-500/70 text-black-400 border border-yellow-500/30"
                          }`}
                        >
                          {project.status === "terminado"
                            ? "Terminado"
                            : "En Curso"}
                        </span>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 bg-[#77c3cf]/20 text-[#77c3cf] rounded text-xs font-medium">
                          {
                            categories.find(
                              (cat) => cat.id === project.category
                            )?.name
                          }
                        </span>
                        <span className="text-[#f6fbfb]/60 text-xs">
                          {project.year}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-[#f6fbfb] mb-3">
                        {project.title}
                      </h3>

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
                        {project.features
                          .slice(0, 2)
                          .map((feature, featureIndex) => (
                            <span
                              key={featureIndex}
                              className="px-2 py-1 bg-[#77c3cf]/10 text-[#77c3cf] rounded text-xs"
                            >
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
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-[#1c1e22] mb-2">
                  No se encontraron proyectos
                </h3>
                <p className="text-[#1c1e22]/70">
                  Intenta con otros filtros o términos de búsqueda
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#77c3cf] to-[#60a3b0] text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Tu proyecto será el próximo?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Únete a nuestros clientes satisfechos y haz realidad tu proyecto
              con estructuras metálicas de la más alta calidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => toast({ title: "Próximamente..." })}
                className="bg-white text-[#77c3cf] hover:bg-[#f6fbfb] px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Solicitar Cotización
              </Button>
              <Button
                onClick={() => toast({ title: "Próximamente..." })}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#77c3cf] px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300"
              >
                Descargar Portafolio
              </Button>
            </div>
          </motion.div>
        </section>
      </div>
      <ProjectModal project={selectedProject} onClose={closeModal} />
    </>
  );
};

export default Proyectos;