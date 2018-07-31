import React, { Component } from 'react';
import './Footer.css';
import imgFB from './facebook.png';
import imgInsta from './instagram.jpg';
import imgTwi from './twitter.png';
import Navbar from '../navbar/Navbar';

class Footer extends Component {
    clicar(){
        prompt("Digite seu email para que possamos enchê-lo de SPAM e mailmarketing!");
    }

    render() {
        return (
            <footer>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quibusdam deserunt assumenda accusamus quas natus, maxime, non similique perspiciatis corporis commodi repudiandae quasi aliquid dolore explicabo iste modi doloremque quisquam.</p>
                <Navbar />
                <div className="container">
                    <button onClick={this.clicar}>Entre em Contato!</button>
                    <div className="social">
                        <img className="social-icon" src={imgFB} alt="Facebook" />
                        <img className="social-icon" src={imgInsta} alt="Instagram" />
                        <img className="social-icon" src={imgTwi} alt="Twitter" />
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;