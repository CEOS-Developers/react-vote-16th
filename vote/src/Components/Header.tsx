import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <Link to='/home'>
      <Logo src={require('../Img/ceos.webp')} alt="CEOS" />
      </Link>
    </div>
  );
};

const Logo = styled.img`
  width: 165px;
  height: 60px;
`;

export default Header;
