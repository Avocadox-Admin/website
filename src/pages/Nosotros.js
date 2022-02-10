import React from 'react';

import avocadox from '../assets/avocadox-render.png';

const Nosotros = () => {
  return (
    <div className="bg-white mt-28 flex flex-col items-centers">
      <h1>Nuestra empresa</h1>
      <div>
        Somos una empresa orgullosamente Michoacana para los michoacanos, para nuestro país y el
        resto del Mundo ya que contamos con un gran equipo de trabajo preocupados por consolidar una
        compañía sostenible y empática con las necesidades ambientales y sociales.
      </div>
      <div>
        Nuestros productores se destacan por sus excelentes prácticas agrícolas, colaboradores
        comprometidos con su desarrollo personal y profesional en aras de contemplar una gran
        empresa y con presencia en EU, Canadá,Europa, Asia y Medio Oriente.
      </div>
      <div>
        <img src={avocadox} alt="Avocadox Render" />
      </div>

      <h2>Misión y Visión</h2>
      <div>
        MISIÓN: Cumplir con los estándares de calidad más exigentes,con las normas de inocuidad y
        proveeduría eficiente, siendo un empaque con políticas ecológicas que retribuyan a nuestro
        planeta las bondades que nos provee. VISIÓN: Ser la mejor planta ecológica y sustentable que
        distribuya sus productos al mercado nacional o internacional con excelente calidad y
        servicio, satisfaciendo a los consumidores finales.
      </div>
    </div>
  );
};

export default Nosotros;
