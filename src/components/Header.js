import React from 'react'
import Diente from '../assets/img/Diente.svg';

const Header = () => {
    return ( 
        <header className="header contenedor">
            <img src={Diente} alt="Logo"/>
            <h1>Administrador de Citas</h1>
        </header>

     );
}
 
export default Header;