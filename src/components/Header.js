import React from 'react'
import Diente from '../assets/img/Diente.svg';
import styled from '@emotion/styled';


const SiteHeader = styled.header`
    display: grid;
    grid-template-rows: repeat(2, auto);
    color: #ffffff;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 900;
    margin-top: 4rem;

    @media (min-width: 768px){
        font-size: 1.2rem;
        grid-template-rows: unset;
        grid-template-columns: repeat(2,max-content);
        align-items: center;
    }

    img{
        max-width: 100%;
        height: 5rem;
    }
`;



const Header = () => {
    return ( 
        <div className="header">
            <SiteHeader className="contenedor">
                <img src={Diente} alt="Logo"/>
                <h1>Administrador de Citas</h1>
            </SiteHeader>
        </div>

     );
}
 
export default Header;