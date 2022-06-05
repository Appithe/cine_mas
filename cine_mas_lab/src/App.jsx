import React from 'react';
import { Navbar, Brand, Navs, NavLink } from './styles';

function App() {

  return (
    <Navbar>
      <Brand>Cine +</Brand>
      <Navs>
        <NavLink as="a" href="#" active>Inicio</NavLink>
        <NavLink as="a" href="#">Promociones</NavLink>
        <NavLink as="a" href="#">Noticias</NavLink>
        <NavLink as="a" href="#">Login</NavLink>
        <NavLink as="a" href="#">Ayuda</NavLink>
      </Navs>
    </Navbar>
  );
}

export default App
