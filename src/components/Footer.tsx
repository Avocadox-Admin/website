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
        <WhatsappIcon className="h-6 w-6" />
        <InstagramIcon className="h-6 w-6" />
        <FacebookIcon className="h-6 w-6" />
      </div>
      <div className="flex justify-center mt-4">
        <EmailIcon className="h-6 w-6" />
        <PhoneIcon className="h-6 w-6" />
      </div>
      <div className="flex justify-center mt-4 mb-2">Disclaimer / Politica de Privacidad</div>
    </div>
  );
};

export default Footer;
