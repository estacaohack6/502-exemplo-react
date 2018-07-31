import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
        <nav>
            <a href="">Home</a>
            <a href="">Sobre nós</a>
            <a href="">Quem somos</a>
            <a href="">Contato conosco</a>
        </nav>
    )
  }
}

export default Navbar;