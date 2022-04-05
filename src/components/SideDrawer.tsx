import { Link } from 'gatsby';
import React from 'react';

interface DrawerProps {
  showDrawer: boolean;
  drawerHandler: (param: boolean) => void;
}

const SideDrawer = ({ showDrawer, drawerHandler }: DrawerProps) => {
  return (
    <div
      className={`fixed top-0 right-0 z-30 w-3/4 bg-black/90 text-white h-full ease-in-out duration-300 ${
        showDrawer ? 'translate-x-0 ' : 'translate-x-full'
      }`}>
      <div className="flex flex-row-reverse w-full mt-4 pr-6 text-2xl">
        <button onClick={() => drawerHandler(false)}>X</button>
      </div>
      <section className="px-8 pt-6">
        <div className="mb-2">
          <Link to="/nosotros">Nosotros</Link>
        </div>
        <div className="mb-2">Galería</div>
        <div className="mb-2">ODS</div>
        <div className="mb-2">
          <Link to="/frescos">¿Qué vendemos?</Link>
        </div>
        <div className="mb-2">
          <Link to="/certificaciones">Certificaciones</Link>
        </div>
        <div className="mb-2">Blog</div>
        <div>
          <Link to="/contacto">Contacto</Link>
        </div>
      </section>
    </div>
  );
};

export default SideDrawer;
