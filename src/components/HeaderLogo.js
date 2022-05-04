import React from 'react';
import PropTypes from 'prop-types';
//  отдельное лого на случай если Лого (в будущем будет меняться)
const HeaderLogo = ({ children }) => {
  return (
    <a href="/" className="logo">
      {children}
    </a>
  );
};

HeaderLogo.propTypes = {
  children: PropTypes.string.isRequired,
};

export default HeaderLogo;
