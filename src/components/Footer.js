import React from 'react';
import { ReactComponent as WhatsappIcon } from '../assets/whatsappIcon.svg';
import { ReactComponent as InstagramIcon } from '../assets/instagramIcon.svg';
import { ReactComponent as FacebookIcon } from '../assets/facebookIcon.svg';
import { ReactComponent as MailIcon } from '../assets/mailIcon.svg';
import { ReactComponent as PhoneIcon } from '../assets/phoneIcon.svg';
import { ReactComponent as LocationIcon } from '../assets/locationIcon.svg';

const Footer = () => {
  return (
    <div className="h-[183px] bg-[#ACC465] text-white grid grid-cols-3 text-xl">
      <div className="flex justify-center items-center gap-2">
        <WhatsappIcon className="w-8 h-8" />
        <InstagramIcon className="w-8 h-8" />
        <FacebookIcon className="w-8 h-8" />
        <MailIcon className="w-8 h-8" /> info@avocadoxmx.com
      </div>
      <div className="flex justify-center items-end pb-4">Disclaimer / Politica de Privacidad</div>
      <div className="flex flex-col justify-center">
        <div className="flex gap-3">
          <div>
            <PhoneIcon className="w-8 h-8" />
          </div>
          <div>+52 4431396055</div>
        </div>
        <div className="flex gap-3">
          <div>
            <LocationIcon className="w-8 h-8" />
          </div>
          <div>Carretera Morelia-Pátzcuaro KM 31 Lagunillas Michoacán CP 58450</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
