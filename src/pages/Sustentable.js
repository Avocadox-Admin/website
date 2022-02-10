import React from 'react';

import mundo from '../assets/sustentable_mundo.png';

const Sustentabilidad = () => {
  return (
    <div className="bg-white mt-28 flex flex-col items-centers h-full">
      <div className="grid grid-cols-2">
        <div className="flex items-center justify-center">
          <img src={mundo} alt="Mundo Sustentable" />
        </div>
        <div className="pr-40">
          <h1>SOSTENIBILIDAD</h1>
          SOSTENIBLE significa que busca el equilibrio en el aprovechamiento racional de los
          recursos naturales, el crecimiento económico y el desarrollo y bienestar social. Por ello
          SOSTENIBLE es un adjetivo que define a AVOCADOX(R). El aprovechamiento y comercialización
          del aguacate y sus derivados salvaguarda la conservación del ecosistema evitando la
          deforestación, el uso de plaguicidas y fertilizantes químicos, el deterioro del suelo y la
          contaminación y desperdicio del agua. Socialmente el crecimiento económico de la empresa
          está comprometido con el bienestar de los productores y sus familias y el desarrollo
          integral de sus colaboradores. En En AVOCADOX(R) tenemos un compromiso más:EL SOCIAL.
          Buscamos aportar a la sociedad un producto de calidad con un valor agregado: las prácticas
          inocuas y que en su consumo pueda ver crecer su estabilidad económica. AVOCADOX(R) busca
          los más altos niveles de calidad certificando sus procesos y que las familias michoacanas
          puedan disfrutar de una economía estable al tener grandes inversionistas, generar empleos
          y buscar que los recursos michoacanos se queden en Michoacán.
        </div>
      </div>
    </div>
  );
};

export default Sustentabilidad;
