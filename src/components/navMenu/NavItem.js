import React from 'react';
import PropTypes from 'prop-types';

const ListNavItem = ({ children, link }) => {
  return (
    <li className="nav-list__item">
      <a href={link}>{children}</a>
    </li>
  );
};

ListNavItem.propTypes = {
  children: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ListNavItem;
