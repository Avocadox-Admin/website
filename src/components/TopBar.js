import logo from '../assets/logo.png';

const TopBar = () => {
  return (
    <div className="flex absolute top-0 w-full h-[100px] bg-black/70 text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] items-center">
      <div className="px-12 grow-0">
        <img className="max-w-[135px]" src={logo} alt="logo"></img>
      </div>
      <div className="grow flex justify-end">
        <span className="w-36 uppercase text-center">Desarrollo Sostenible</span>
        <span className="w-36 uppercase text-center">Etapas del Producto</span>
        <span className="w-36 uppercase text-center">Certificaciones</span>
        <span className="w-36 uppercase text-center">Contacto</span>
        <span className="w-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </span>
        <span className="w-20">ES/EN</span>
      </div>
    </div>
  );
};

export default TopBar;
