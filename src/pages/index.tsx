import React from 'react';
import { navigate, Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';

const Home = () => {
  const handleNavigationClick = () => {
    navigate('/sustentable');
  };

  return (
    <Layout>
      <div className="mt-[100px]">
        <section className="px-12 pb-12">
          <div className="text-2xl font-black mb-4">Desarrollo Sustentable</div>
          <div className="mb-4">
            ¿Cuál es es el impacto de lo que consumes en el ambiente y en tu grupo local?
          </div>
          <div className="mb-8">
            Nuestra empresa esta realmente comprometida con el cuidado del planeta y el
            <strong> BIENESTAR</strong> de tu país, ciudad grupo de amigos y de tu familia. Tú eres
            parte de este esfuerzo y compromiso.
          </div>
          <button
            className="bg-black text-white h-12 rounded-full px-4"
            onClick={() => handleNavigationClick()}>
            ¿Sabes cómo?
          </button>
        </section>
        <section className="bg-black text-white px-12 pb-12">
          <div className="text-2xl font-black mb-4">Etapas del Producto</div>
          <div className="mb-4">
            El aguacate <strong>HASS</strong> es una fuente de riquezas e incomparable sabor y
            beneficios para la salud y nutrición.
          </div>
          <div className="mb-12">
            Nuestra oferta de exportación de frescos (empacados), <strong>PASTA</strong>,{' '}
            <strong>GUACAMOLE</strong> y <strong>ACEITE</strong>.
          </div>
          <div className="flex items-center mb-8">
            <Link to="/frescos" className="flex items-center gap-4">
              <StaticImage src="../images/frescos.png" alt="Frescos" />
              <span>Frescos</span>
            </Link>
          </div>
          <div className="flex items-center gap-4 mb-8">
            <StaticImage src="../images/aceite.png" alt="Aceite" />
            <span>Aceite</span>
          </div>
          <div className="flex items-center gap-4">
            <StaticImage src="../images/guacamole.png" alt="Pasta y Guacamole" />
            <span>Pasta y Guacamole</span>
          </div>
        </section>
        <div className="h-8 bg-[#ACC465]"></div>
        <section className="bg-black text-white px-12 pb-12">
          <div className="text-2xl font-black">Certificaciones</div>
          <div className="grid grid-cols-3">
            <Link to="/certificaciones">
              <StaticImage src="../images/fairtrade-negative.png" alt="Fairtrade Logo" />
            </Link>
            <Link to="/certificaciones">
              <StaticImage src="../images/sagarpa-negative.png" alt="Sagarpa Logo" />
            </Link>
            <Link to="/certificaciones">
              <StaticImage src="../images/usda-negative.png" alt="USDA Logo" />
            </Link>
            <Link to="/certificaciones" className="col-span-2">
              <StaticImage src="../images/primus-negative.png" alt="Primus GFS Logo" />
            </Link>
            <Link to="/certificaciones">
              <StaticImage src="../images/globalGap-negative.png" alt="Global Gap Logo" />
            </Link>
            <Link to="/certificaciones" className="col-span-3">
              <StaticImage src="../images/esr-negative.png" alt="ESR Logo" />
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
