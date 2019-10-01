import React from 'react';

import './ListItem.css';

interface IListItem {
  label: string
}

const ListItem: React.FC<IListItem> = ({label}) => {
  return (
    <li
      className="list-group-item"
    >
      {label}
    </li>
  );
};

export default ListItem;
