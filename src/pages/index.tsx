import React from 'react';
import { navigate, Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import useScreenSize from '../hooks/useScreenSize';
import Slider from '../components/Slider';

const Home = () => {
  const screenSize = useScreenSize();

  const handleNavigationClick = () => {
    navigate('/sustentable');
  };

  return (
    <Layout>
      <Slider />
      <div>
        <section className="w-full flex justify-center">
          <div className="grid px-12 pb-12 max-w-screen-xl md:grid-cols-2 md:gap-8">
            <div>
              <div className="text-2xl font-extrabold mb-4">Desarrollo Sustentable</div>
              <div className="mb-4">
                ¿Cuál es es el impacto de lo que consumes en el ambiente y en tu grupo local?
              </div>
              <div className="mb-8">
                Nuestra empresa esta realmente comprometida con el cuidado del planeta y el
                <strong> BIENESTAR</strong> de tu país, ciudad grupo de amigos y de tu familia. Tú
                eres parte de este esfuerzo y compromiso.
              </div>
              <button
                className="bg-black text-white h-12 rounded-full px-4 max-w-[150px]"
                onClick={() => handleNavigationClick()}>
                ¿Sabes cómo?
              </button>
            </div>
            {screenSize !== 'sm' && (
              <div>
                <StaticImage src="../images/interactive.png" alt="Interactive world" />
              </div>
            )}
          </div>
        </section>
        <section className="w-full flex justify-center bg-black text-white">
          <div className="grid px-12 py-12 max-w-screen-xl md:grid-cols-2 md:gap-8">
            <div>
              <div className="text-2xl font-black mb-4">Etapas del Producto</div>
              <div className="mb-4">
                El aguacate <strong>HASS</strong> es una fuente de riquezas e incomparable sabor y
                beneficios para la salud y nutrición.
              </div>
              <div className="mb-12">
                Nuestra oferta de exportación de frescos (empacados), <strong>PASTA</strong>,{' '}
                <strong>GUACAMOLE</strong> y <strong>ACEITE</strong>.
              </div>
            </div>
            <div className="grid md:grid-cols-2">
              <div className="flex items-center mb-8 md:col-span-2">
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
            </div>
          </div>
        </section>
        {screenSize === 'sm' && <div className="h-8 bg-[#ACC465]"></div>}
        <section className="w-full flex justify-center bg-black text-white">
          <div className="px-12 py-12 max-w-screen-xl">
            <div className="text-2xl font-black mb-8">Certificaciones</div>
            <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
              <Link to="/certificaciones">
                <StaticImage src="../images/fairtrade-negative.png" alt="Fairtrade Logo" />
              </Link>
              <Link to="/certificaciones">
                <StaticImage src="../images/sagarpa-negative.png" alt="Sagarpa Logo" />
              </Link>
              <Link to="/certificaciones">
                <StaticImage src="../images/usda-negative.png" alt="USDA Logo" />
              </Link>
              <Link to="/certificaciones" className="col-span-2 md:col-span-1">
                <StaticImage src="../images/primus-negative.png" alt="Primus GFS Logo" />
              </Link>
              <Link to="/certificaciones">
                <StaticImage src="../images/globalGap-negative.png" alt="Global Gap Logo" />
              </Link>
              <Link to="/certificaciones" className="col-span-3 md:col-span-1">
                <StaticImage src="../images/esr-negative.png" alt="ESR Logo" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
