import React from 'react';
import ListItem from './ListItem';
import PropTypes from 'prop-types';

const ListMain = ({ listData }) => {
  // просто чтобы убрать красную консоль в Кей кинул строку
  return (
    <ul className="list">
      {listData.map((item) => {
        return (
          <ListItem
            key={item.description}
            title={item.title}
            description={item.description}
          />
        );
      })}
    </ul>
  );
};

ListMain.propTypes = {
  listData: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default ListMain;
