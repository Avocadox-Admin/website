import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

import certs from '../assets/logos_certificaciones.png';
import frescos from '../assets/frescos.png';
import guacamole from '../assets/guacamole.png';
import aceite from '../assets/aceite.png';
import interactive from '../assets/interactive.png';
import Slider from '../components/Slider';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = (navigateTo) => {
    navigate(navigateTo);
  };

  return (
    <>
      <Slider />
      <div className="h-[600px] grid grid-cols-2 gap-8 items-center justify-center bg-[#C4C4C4]">
        <div className="px-24">
          <div className="text-4xl font-black mb-4">Desarrollo Sustentable</div>
          <div className="text-lg mb-4">
            ¿Cuál es es el impacto de lo que consumes en el ambiente y en tu grupo local?
          </div>
          <div className="text-lg mb-8">
            Nuestra empresa esta realmente comprometida con el cuidado del planeta y el
            <strong> BIENESTAR</strong> de tu país, ciudad grupo de amigos y de tu familia. Tú eres
            parte de este esfuerzo y compromiso.
          </div>
          <button
            className="bg-black text-white h-12 rounded-full px-4"
            onClick={() => handleNavigate('/sustentabilidad')}>
            ¿Sabes cómo?
          </button>
        </div>
        <div className="flex justify-center">
          <img src={interactive} />
        </div>
      </div>
      <div className="h-[600px] bg-black text-white grid grid-cols-2 gap-8 items-center justify-center">
        <div className="px-24">
          <div className="text-4xl font-black">Etapas del Producto</div>
          <div>
            El aguacate HASS es una fuente de riquezas e incomparable sabor y beneficios para la
            salud y nutrición.
          </div>
          <div>
            Nuestra oferta de exportación de FRESCOS (empacados), PASTA, GUACAMOLE y ACEITE.
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 justify-items-center">
            <div className="text-center">
              <img
                className="cursor-pointer"
                src={frescos}
                onClick={() => handleNavigate('/frescos')}
              />
              <span>Frescos</span>
            </div>
          </div>
          <div className="grid grid-cols-2 justify-items-center">
            <div>
              <img src={guacamole} />
              <span>Pasta y Guacamole</span>
            </div>
            <div className="text-center">
              <img src={aceite} />
              <span>Aceite</span>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-6" />
      <div className="h-[600px] bg-black text-white flex flex-col gap-28 items-center justify-center">
        <div className="text-4xl font-black">Certificaciones</div>
        <Link to={'/certificaciones'}>
          <img src={certs} />
        </Link>
      </div>
    </>
  );
};

export default Home;
