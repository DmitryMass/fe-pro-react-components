import React from 'react';
import PropTypes from 'prop-types';
const FooterLogo = ({ children }) => {
  return (
    <a href="" className="logo">
      {children}
    </a>
  );
};

FooterLogo.propTypes = {
  children: PropTypes.string.isRequired,
};

export default FooterLogo;
