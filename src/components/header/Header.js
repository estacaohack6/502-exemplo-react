import React, { Component } from 'react';
import './Header.css';
import Navbar from '../navbar/Navbar';

class Header extends Component {
  render() {

    let linksHeader = [
      {
        texto: 'Facebook',
        endereco: 'http://fb.com'
      },
      {
        texto: 'Instagram',
        endereco: 'http://instagram.com'
      },
      {
        texto: 'Twitter',
        endereco: 'http://twitter.com'
      },
      {
        texto: 'Pudim',
        endereco: 'http://pudim.com.br'
      }
    ];

    return (
        <header>
            <h1>Faça seu login agora mesmo!</h1>
            <Navbar links={linksHeader}/>
        </header>
    );
  }
}

export default Header;