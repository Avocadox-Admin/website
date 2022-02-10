import React from 'react';
import logo from '../assets/avocadox_logo.png';
import { ReactComponent as BurgerIcon } from '../assets/burgerIcon.svg';

const routeLinks = [
  { label: 'Desarrollo Sostenible', path: '/sustentabilidad' },
  { label: 'Etapas del Producto', path: '/etapas' },
  { label: 'Certificaciones', path: '/certificaciones' },
  { label: 'Contacto', path: '/contacto' }
];

const TopBar = () => {
  return (
    <div className="flex absolute top-0 w-full h-[100px] bg-black/70 text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] items-center z-10">
      <div className="px-12 grow-0">
        <img className="max-w-[135px]" src={logo} alt="logo"></img>
      </div>
      <div className="grow flex justify-end">
        <div className="grow flex">
          <ul className="flex w-36 uppercase text-center">
            {routeLinks.map((link) => (
              <li key={link.label}>{link.label}</li>
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
