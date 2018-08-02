import React, { Component } from 'react';
import './FormLogin.css';

class FormLogin extends Component {
    constructor(props){
        super(props);
        this.state = {
            usuario: '',
            senha: '',
            autenticado: false
        }
    }

    fazerLogin = () => {
        fetch(`http://localhost:5000/login/${this.state.usuario}`).then(resposta => resposta.json()).then(dados => {
            if(dados.nome && dados.senha === this.state.senha){
                alert("SUCESSO");
                this.setState({
                    autenticado: true
                });
            }
            else{
                alert("FRACASSO");
            }
        });
    }

    render() {
        if(this.state.autenticado){
            return(
                <h1>BEM VINDO AO ROLE</h1>
            )
        }
        else{
            return (
                <div className="login">
                    <h2>Digite seus dados para o login</h2>
                    <input onChange={evento => this.setState({usuario: evento.target.value})} value={this.state.usuario} type="text" name="username" id="username" placeholder="Digite aqui o username" />
                    <input onChange={evento => this.setState({senha: evento.target.value})} value={this.state.senha} type="password" name="password" id="password" placeholder="Digite aqui o password" />
                    <button onClick={this.fazerLogin}>Login!</button>
                </div>
            )
        }
    }
}

export default FormLogin;