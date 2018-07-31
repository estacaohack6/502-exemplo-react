import React, { Component } from 'react';
import './FormLogin.css';

class FormLogin extends Component {
    render() {
        return (
            <div className="login">
                <h2>Digite seus dados para o login</h2>
                <input type="text" name="username" id="username" placeholder="Digite aqui o username" />
                <input type="password" name="password" id="password" placeholder="Digite aqui o password" />
                <button>Login!</button>
            </div>
        )
    }
}

export default FormLogin;