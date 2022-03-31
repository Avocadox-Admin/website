import React from 'react';

import WhatsappIcon from '../images/whatsappIcon.inline.svg';
import InstagramIcon from '../images/instagramIcon.inline.svg';
import FacebookIcon from '../images/facebookIcon.inline.svg';
import EmailIcon from '../images/mailIcon.inline.svg';
import PhoneIcon from '../images/phoneIcon.inline.svg';

const Footer = () => {
  return (
    <div className="grid grid-col-1 grid-row-3 bg-[#ACC465] text-white">
      <div>
        <WhatsappIcon />
        <InstagramIcon />
        <FacebookIcon />
      </div>
      <div>
        <EmailIcon />
        <PhoneIcon />
      </div>
      <div>Disclaimer / Politica de Privacidad</div>
    </div>
  );
};

export default Footer;
