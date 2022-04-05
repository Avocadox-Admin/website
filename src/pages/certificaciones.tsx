import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/Layout';

const Certificaciones = () => {
  return (
    <Layout>
      <div className="pt-[100px]">
        <section className="px-12">
          <div className="text-2xl font-black mb-8">Contamos con certificaciones internacionales</div>
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
            <div className="mb-4">
              <StaticImage src="../images/fairtrade.png" alt="Fairtrade Logo" />
            </div>
            <div className="mb-12">
              La certificación Fairtrade es un sistema de certificación de productos donde los
              aspectos sociales, económicos y ambientales de la producción están certificados según
              los Estándares Fairtrade para Productores y Comerciantes.
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
            <div>
              <StaticImage src="../images/esr.png" alt="ESR Logo" />
            </div>
            <div className="mb-12">
              El Distintivo agrega valor a la marca y rentabilidad, ya que acredita a la empresa
              ante sus empleados, inversionistas, clientes, autoridades y sociedad, como una
              organización comprometida públicamente con la responsabilidad social.
            </div>
            <div>
              <StaticImage src="../images/rainforest.png" alt="Rainforest Logo" />
            </div>
            <div className="mb-12">
              El Programa de Certificación Rainforest Alliance 2020 define nuestra visión a largo
              plazo para el futuro y el camino requerido para llegar allí. La Norma de Agricultura
              Sostenible, junto con sus sistemas de garantía y tecnología, están diseñados para
              ofrecer más valor a los dos millones de agricultores y miles de empresas que utilizan
              la certificación Rainforest Alliance para impulsar una producción agrícola más
              sostenible y cadenas de suministro responsables. En el corazón de la certificación
              Rainforest Alliance está nuestra misión de crear un futuro mejor para las personas y
              la naturaleza al hacer que los negocios responsables sean la nueva norma. Los
              agricultores y silvicultores certificados pueden cultivar mejores sembradíos,
              adaptarse al cambio climático y aumentar su productividad. Al mismo tiempo, están
              reduciendo costos. Juntas, estas prácticas contribuyen a un futuro más prometedor para
              los agricultores, los silvicultores y sus comunidades. También benefician a su
              empresa, ya que tiene acceso a un suministro confiable y de alta calidad de productos
              certificados a precios competitivos.
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Certificaciones;
