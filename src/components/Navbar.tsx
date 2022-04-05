import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import BurguerIcon from '../images/burgerIcon.inline.svg';
import { Link } from 'gatsby';

const Navbar = ({ drawerHandler }) => {
  return (
    <div className="absolute top-0 w-full h-[100px] bg-black/70 text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] z-10 flex justify-center">
      <div className="grid grid-cols-2 items-center max-w-screen-xl w-full">
        <div className="ml-4">
          <Link to="/">
            <StaticImage src="../images/avocadox-logo.png" alt="Avocadox Logo" className="max-w-[148px]" />
          </Link>
        </div>
        <div className="flex justify-end mr-4">
          <button onClick={() => drawerHandler(true)}>
            <BurguerIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
