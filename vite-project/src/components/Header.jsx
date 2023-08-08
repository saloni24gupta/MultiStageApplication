import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import { styled } from 'styled-components';

function Header() {
  return (

    <MainHeader>
      <NavLink to="/">
        <img src="./src/assets/react.svg" alt="logo" className='logo'/>
      </NavLink>
      <Navbar/>
    </MainHeader>
  );
};

const MainHeader = styled.header`

padding: 0 4.8rem;
height: 4.8rem;
display: flex;
justify-content: space-between;
align-items: center;
background-color: ${({theme}) => {theme.colors.bg}}
// background-color: rgb(245, 245, 255);

.logo {
  height: auto;
  max-width: auto;
}

`;

export default Header;