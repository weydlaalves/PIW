import React, { Component } from 'react';
import '../styles/navegador.css'; 
import logo from '../assets/logo-helpus.png';
import icon from '../assets/icone.png';
import { NavLink } from 'react-router-dom';


class Navegador extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <nav className= "Pag1-nav">
        <p>Antonia Soares</p>
        
        <img src={logo} className="Pag1-logo" alt="logo" />
        <img src={icon} className="Pag1-icon" alt="icon" />
        <button type="button" onclick= ""><NavLink to ="/">Linha do tempo</NavLink></button> 
        <button type="button" onclick=""><NavLink to ="/postar">Postar</NavLink></button>  
      </nav>
    );
  }
}
export default Navegador ;