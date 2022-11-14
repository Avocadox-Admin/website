import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/Layout';

const Nosotros = () => {
  return (
    <Layout>
      <div className="mt-8">
        <section className="px-12">
          <div className="text-3xl font-bold mb-4">Nuestra empresa</div>
          <div className="mb-4">
            Somos una empresa orgullosamente Michoacana para los michoacanos, para nuestro país y el
            resto del Mundo ya que contamos con un gran equipo de trabajo preocupados por consolidar
            una compañía sostenible y empática con las necesidades ambientales y sociales.
          </div>
          <div className="mb-8">
            Nuestros productores se destacan por sus excelentes prácticas agrícolas, colaboradores
            comprometidos con su desarrollo personal y profesional en aras de contemplar una gran
            empresa y con presencia en EU, Canadá,Europa, Asia y Medio Oriente.
          </div>
        </section>

        <div className="mb-8">
          <StaticImage src="../images/avocadox-render.png" alt="Render" />
        </div>

        <section className="px-12 mb-8">
          <div className="text-2xl font-bold mb-4">Misión y Visión</div>
          <div className="mb-4">
            MISIÓN: Cumplir con los estándares de calidad más exigentes,con las normas de inocuidad
            y proveeduría eficiente, siendo un empaque con políticas ecológicas que retribuyan a
            nuestro planeta las bondades que nos provee.
          </div>
          <div>
            VISIÓN: Ser la mejor planta ecológica y sustentable que distribuya sus productos al
            mercado nacional o internacional con excelente calidad y servicio, satisfaciendo a los
            consumidores finales.
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Nosotros;
