import React from 'react';
import FooterLogo from './footer/FooterLogo';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <FooterLogo>Logo</FooterLogo>
        <p className="copyright">Small static blog @ 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
