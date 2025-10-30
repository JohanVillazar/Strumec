import React from 'react';
import { Helmet } from 'react-helmet';
import ContactHero from '@/components/pages/contacto/ContactHero';
import ContactInfo from '@/components/pages/contacto/ContactInfo';
import ContactFormSection from '@/components/pages/contacto/ContactFormSection';
import OfficesSection from '@/components/pages/contacto/OfficesSection';

import ContactCTA from '@/components/pages/contacto/ContactCTA';

const Contacto = () => {
  return (
    <>
      <Helmet>
        <title>Contacto - ESTRUMEC | Estructuras Metálicas</title>
        <meta name="description" content="Contáctanos para tu proyecto de estructuras metálicas. ESTRUMEC ofrece atención personalizada, cotizaciones gratuitas y asesoría técnica especializada." />
      </Helmet>

      <div className="pt-16">
        <ContactHero />
        <ContactInfo />
     
        <OfficesSection />
       
        <ContactCTA />
      </div>
    </>
  );
};

export default Contacto;