import React from 'react';
import Layout from '../components/Layout';

const Contacto = () => {
  return (
    <Layout>
      <div className="mt-32 flex justify-center">
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
