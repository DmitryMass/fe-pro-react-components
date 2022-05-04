import React from 'react';
import ListNavItem from './NavItem';
import PropTypes from 'prop-types';

const List = ({ items }) => {
  return (
    <nav>
      <ul className="nav-list">
        {items.map((listItem) => {
          return (
            // кей чтобы убрать красную консоль
            <ListNavItem link={listItem.link} key={listItem.title}>
              {listItem.title}
            </ListNavItem>
          );
        })}
      </ul>
    </nav>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};
// проверил, когда в обьект кидаешь число, ломается все)

export default List;
