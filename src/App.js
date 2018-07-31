import React, { Component } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import FormLogin from './components/formlogin/FormLogin';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <FormLogin />
        <Footer />
      </div>
    )
  }
}

export default App;