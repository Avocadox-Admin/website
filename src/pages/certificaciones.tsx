import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/Layout';

const Certificaciones = () => {
  return (
    <Layout>
      <div className="mt-32 flex justify-center">
        <section className="px-12 max-w-screen-xl">
          <div className="text-3xl font-black mb-8">
            Se cuenta con alianzas con Productores y prestadores de servicio de maquila que cuentan
            con las certificaciones:
          </div>
          <div className="">
            <div className="mb-4">
              <StaticImage src="../images/smeta.png" alt="SMETA Logo" />
            </div>
            <div className="mb-12">
              SMETA significa “Auditoría de Comercio Ético de los Miembros de Sedex” (por sus siglas
              en inglés: Sedex Members Ethical Trade Audit) y es uno de los principales formatos de
              auditoría ética y que más se utilizan en el mundo. La metodología fue creada y
              gestionada por el propio Foro de Accionistas del SEDEX.
            </div>
            <div>
              <StaticImage src="../images/ctpat.jpeg" alt="CTPAT Logo" />
            </div>
            <div className="mb-12">
              Son las siglas de Customs Trade Partnership Against Terrorism (Asociación Comercial
              Aduanera contra el Terrorismo) y forma parte de la estrategia de control de la carga
              del Servicio de Aduanas y Protección de Fronteras de Estados Unidos (CBP).
            </div>
            <div>
              <StaticImage src="../images/global-gap.jpeg" alt="Global Gap Logo" />
            </div>
            <div className="mb-12">
              Global GAP es un conjunto de normas agrícolas reconocidas internacionalmente, se
              dedican a las Buenas Prácticas de Agricultura (GAP). Disponible en 3 ámbitos de
              producción: Cultivos, Producción Animal y Acuicultura.
            </div>
            <div>
              <StaticImage src="../images/primusGFS.png" alt="Primus GFS Logo" />
            </div>
            <div className="mb-12">
              Certificación para las Buenas Prácticas Agrícolas reconocida por la GFSI. PrimusGFS es
              un sistema de auditoría reconocido por la GFSI (Global Food Safety Initiative) que ha
              sido desarrollado por Azzule Systems, y ha sido usado durante varios años en
              diferentes partes de la industria de productos frescos. Está diseñado para ser
              utilizado en la producción primaria y en los sectores manufactureros (incluyendo
              hortícolas, granos y legumbres) a nivel mundial.
            </div>
            <div>
              <StaticImage src="../images/senasica.png" alt="Senasica Logo" />
            </div>
            <div className="mb-12">
              El Servicio Nacional de Sanidad, Inocuidad y Calidad Agroalimentaria (Senasica), tiene
              la facultad de determinar y dirigir acciones de prevención, control y erradicación, a
              través de actividades de vigilancia epidemiológica; así como establecer requisitos y
              disposiciones cuarentenarias para atender oportunamente los brotes de plagas.
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Certificaciones;
