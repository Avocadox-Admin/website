import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';

const Sustentable = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center mt-4 md:mt-32">
        <section className="px-12 max-w-screen-xl pb-12">
          <StaticImage src="../images/sustentable-mundo.png" alt="" className="mb-12" />
          <div className="text-2xl font-black mb-8">SOSTENIBILIDAD</div>
          <div className="mb-6">
            SOSTENIBLE significa que busca el equilibrio en el aprovechamiento racional de los
            recursos naturales, el crecimiento económico y el desarrollo y bienestar social. Por
            ello SOSTENIBLE es un adjetivo que define a AVOCADOX&reg;.
          </div>
          <div className="mb-6">
            El aprovechamiento y comercialización del aguacate y sus derivados salvaguarda la
            conservación del ecosistema evitando la deforestación, el uso de plaguicidas y
            fertilizantes químicos, el deterioro del suelo y la contaminación y desperdicio del
            agua.
          </div>
          <div className="mb-6">
            Socialmente el crecimiento económico de la empresa está comprometido con el bienestar de
            los productores y sus familias y el desarrollo integral de sus colaboradores.
          </div>
          <div className="mb-6">
            En AVOCADOX&reg; tenemos un compromiso SOCIAL. Buscamos aportar a la sociedad un
            producto de calidad con un valor agregado: las prácticas inocuas y que en su consumo
            pueda ver crecer su estabilidad económica.
          </div>
          <div>
            AVOCADOX&reg; busca los más altos niveles de calidad certificando sus procesos y que las
            y que las familias michoacanas puedan disfrutar de una economía estable al tener grandes
            inversionistas, generar empleos y buscar que los recursos michoacanos se queden en
            Michoacán.
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Sustentable;
