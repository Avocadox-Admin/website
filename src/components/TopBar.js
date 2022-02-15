import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/avocadox-logo.png';
import { ReactComponent as BurgerIcon } from '../assets/burgerIcon.svg';

const routeLinks = [
  { label: 'Desarrollo Sostenible', path: '/sustentabilidad' },
  { label: 'Etapas del Producto', path: '/frescos' },
  { label: 'Certificaciones', path: '/certificaciones' },
  { label: 'Contacto', path: '/' }
];

const TopBar = () => {
  return (
    <div className="flex absolute top-0 w-full h-[100px] bg-black/70 text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] items-center z-10">
      <div className="px-12 grow-0 pt-6">
        <Link to="/">
          <img className="max-w-[250px]" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="grow flex justify-end">
        <div className="grow flex justify-end">
          <ul className="flex uppercase text-center">
            {routeLinks.map((link) => (
              <li className="w-36" key={link.label}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <span className="w-12">
          <BurgerIcon className="w-8 h-8" />
        </span>
        <span className="w-20">ES/EN</span>
      </div>
    </div>
  );
};

export default TopBar;
