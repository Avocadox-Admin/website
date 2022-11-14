import React from 'react';

import WhatsappIcon from '../images/whatsappIcon.inline.svg';
import InstagramIcon from '../images/instagramIcon.inline.svg';
import FacebookIcon from '../images/facebookIcon.inline.svg';
import EmailIcon from '../images/mailIcon.inline.svg';
import PhoneIcon from '../images/phoneIcon.inline.svg';

const Footer = () => {
  return (
    <div className="grid grid-col-1 grid-row-3 bg-[#ACC465] text-white">
      <div className="flex justify-center gap-2 mt-4">
        <WhatsappIcon className="h-8 w-8" />
        <a href="https://www.instagram.com/avocadox.mx/?hl=es" target="_bank">
          <InstagramIcon className="h-8 w-8" />
        </a>
        <a href="https://www.facebook.com/people/Avocadox/100076258565785/" target="_blank">
          <FacebookIcon className="h-8 w-8" />
        </a>
      </div>
      <div className="flex justify-center mt-4 gap-6">
        <a className="flex items-center gap-2" href="mailto:direccion@avocadoxmx.com">
          <EmailIcon className="h-8 w-8"></EmailIcon>
          direccion@avocadoxmx.com
        </a>
        <a className="flex items-center gap-2" href="tel:+524431396055">
          <PhoneIcon className="h-8 w-8" />
          <span>+52 4431396055</span>
        </a>
      </div>
      <div className="flex justify-center mt-4 mb-2">Disclaimer / Politica de Privacidad</div>
    </div>
  );
};

export default Footer;
