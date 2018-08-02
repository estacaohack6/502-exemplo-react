import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    console.log(this.props.links);
    return (
        <nav>
           {
             this.props.links.map((texto, posicao) => <a key={posicao} href="">{texto}</a>)
           }
        </nav>
    )
  }
}

export default Navbar;