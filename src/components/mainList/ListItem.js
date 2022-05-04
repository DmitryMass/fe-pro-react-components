import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ title, description }) => {
  return (
    <li className="list__item">
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
};

ListItem.proptypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ListItem;
