import React, { Component } from 'react';
import './Header.css';
import Navbar from '../navbar/Navbar';

class Header extends Component {
  render() {
    return (
        <header>
            <h1>Faça seu login agora mesmo!</h1>
            <Navbar links={['Home', 'Produtos', 'Promoções', 'Contato']}/>
        </header>
    );
  }
}

export default Header;