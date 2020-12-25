import React from 'react'
import Diente from '../assets/img/Diente.svg';
import styled from '@emotion/styled';


const SiteHeader = styled.header`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    color: #ffffff;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 700;

    img{
        max-width: 100%;
    }



`;



const Header = () => {
    return ( 
        <SiteHeader className="contenedor">
            <img src={Diente} alt="Logo"/>
            <h1>Administrador de Citas</h1>
        </SiteHeader>

     );
}
 
export default Header;