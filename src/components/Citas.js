import React, {Fragment} from 'react';
import styled from '@emotion/styled';
import Cita from './Cita';


const TituloH2 = styled.h2`
    text-align: center;
    color: #ffffff;
    font-size: 2.5rem;

`;

const DivCitas = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;


`;




const Citas = ({pacientes}) => {


    return ( 

        <Fragment >
            <TituloH2>CITAS</TituloH2>

            <DivCitas className="contenedor-citas">
                <Cita
                    pacientes={pacientes}
                />
            </DivCitas>

        </Fragment>
     );
}
 
export default Citas;