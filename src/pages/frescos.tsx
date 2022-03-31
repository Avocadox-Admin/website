import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/Layout';

const Frescos = () => {
  return (
    <Layout>
      <div className="mt-[100px]">
        <section className="px-12 pb-12">
          <StaticImage src="../images/avocado-half.png" alt="Avocado half" />
          <div className="text-2xl font-black">Aguacate HASS FRESCO</div>
          <div className="mb-4">
            El aguacate es considerado como una de las frutas y verduras más completas; su valor
            nutricional reside en la gran cantidad de minerales y vitaminas que posee, lo que lo
            hace un super alimento dentro de una dieta sana y equilibrada.
          </div>
          <div className="mb-4">
            Su alto contenido de ácido ascórbico, cobre, hierro, fósforo, magnesio, potasio, así como es
            rico en glutatión, es el perfecto antioxidante que contribuye a prevenir ciertos tipos
            de cáncer y alteraciones cardiacas.
          </div>
          <div className="mb-4">Además es una fuente rica en vitaminas A,B1,B2,B5 Y C.</div>
          <div>
            En nuestro proceso de comercialización de aguacate Hass fresco llevamos una cadena de
            alta calidad en todos y cada uno de los procesos desde la huerta en su corte, selección,
            empacado, y su traslado al destino final.
          </div>
        </section>
        <StaticImage src="../images/sec-etapas.png" alt="Etapas" />
        <section className="px-4 py-12">
            <StaticImage src="../images/calibres.png" alt="Calibres" />
        </section>
      </div>
    </Layout>
  );
};

export default Frescos;
