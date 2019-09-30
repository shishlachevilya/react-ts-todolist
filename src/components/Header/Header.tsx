import React from 'react';

import './Header.css';

interface IProps {
  title: string
}

const Header = ({title}: IProps) => {
  return (
    <h1>{title}</h1>
  );
};

export default Header;
