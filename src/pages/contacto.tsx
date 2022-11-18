import React from 'react';
import Layout from '../components/Layout';

const Contacto = () => {
  return (
    <Layout>
      <div className="flex justify-center mt-4 md:mt-32">
        <section className="px-12">
          <div className="text-3xl font-black">Contacto</div>
          <form>
            <input type="text" placeholder="Nombre" />
            <input type="email" placeholder="email" />
            <textarea name="message" placeholder="Mensaje" cols={30} rows={10}></textarea>
          </form>
        </section>
      </div>
    </Layout>
  );
};

export default Contacto;
