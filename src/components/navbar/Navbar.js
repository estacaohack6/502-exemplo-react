import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    console.log(this.props.links);
    return (
        <nav>
           {
             this.props.links.map((objeto, posicao) => <a key={posicao} href={objeto.endereco}>{objeto.texto}</a>)
           }
        </nav>
    )
  }
}

export default Navbar;