import React from 'react';

import './Header.css';

interface IHeaderProps {
  title: string
}

const Header = ({title}: IHeaderProps) => {
  return (
    <h1>{title}</h1>
  );
};

export default Header;
