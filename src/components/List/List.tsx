import React from 'react';

import './List.css';
import ListItem from '../ListItem';


interface IList {
  data: Array<{
    id: number,
    label: string
  }>
}


const List: React.FC<IList> = ({data}) => {

  const dataItem = data.map((item) => {
    return (
      <ListItem
        key={item.id}
        label={item.label}
      />
    )
  });

  return (
    <ul className="list-group">
      {dataItem}
    </ul>
  )
};

export default List;
