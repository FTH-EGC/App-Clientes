import React from 'react'
import Diente from '../assets/img/Diente.svg';
import styled from '@emotion/styled';


const SiteHeader = styled.header`
    display: grid;
    grid-template-rows: repeat(2, auto);
    color: #ffffff;
    text-transform: uppercase;
    font-size: 1rem;
    margin-top: 4rem;
    text-align: center;

    @media (min-width: 768px){
        font-size: 1.2rem;
        grid-template-rows: unset;
        grid-template-columns: repeat(2,max-content);
        align-items: center;
        column-gap: 2rem;
    }

`;

const Imagen = styled.img`
        max-width: 100%;
        height: 7rem;
        @media (min-width: 768px){
            height: 10rem;
        }
`;



const Header = () => {
    return ( 
        <div className="header">
            <SiteHeader>
                <div className="imagen">
                    <Imagen src={Diente} alt="Logo"/>
                </div>
                <h1>Administrador de Citas</h1>
            </SiteHeader>
        </div>

     );
}
 
export default Header;