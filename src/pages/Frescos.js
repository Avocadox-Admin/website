import React from 'react';

import avocado from '../assets/Avocado-half.png';
import etapas from '../assets/Sec_etapas.png';
import calibres from '../assets/Calibres.png';

const Frescos = () => {
  return (
    <div className="bg-white mt-28 flex flex-col items-centers">
      <img src={avocado} />
      <h1>Aguacate HASS FRESCO</h1>
      <div>
        El aguacate es considerado como una de las frutas y verduras más completas; su valor
        nutricional reside en la gran cantidad de minerales y vitaminas que posee, lo que lo hace un
        super alimento dentro de una dieta sana y equilibrada.
      </div>
      <div>
        Su alto contenido de ácido ascórbico,cobre,hierro,fósforo,magnesio,potasio, así como es rico
        en glutatión, es el perfecto antioxidante que contribuye a prevenir ciertos tipos de cáncer
        y alteraciones cardiacas.
      </div>
      <div>Además es una fuente rica en vitaminas A,B1,B2,B5 Y C.</div>
      <div>
        En nuestro proceso de comercialización de aguacate Hass fresco llevamos una cadena de alta
        calidad en todos y cada uno de los procesos desde la huerta en su corte, selección,
        empacado, y su traslado al destino final.
      </div>
      <img src={etapas} />
      <img src={calibres} />
    </div>
  );
};

export default Frescos;
