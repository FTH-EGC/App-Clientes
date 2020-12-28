import React from 'react';
import styled from '@emotion/styled';

const Parrafo = styled.p`
    color: #ed1c5b;
    font-size: 1.4rem;
    font-weight: 900;
    text-align: center;
    text-transform: uppercase;
`;


const Error = ({mensaje}) => {
    return ( 
        <Parrafo>{mensaje}</Parrafo>
     );
}
 
export default Error;