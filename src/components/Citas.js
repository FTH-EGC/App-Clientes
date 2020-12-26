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




const Citas = ({pacientes, eliminarCita}) => {


    return ( 

        <Fragment >

            <DivCitas>
            {Object.keys(pacientes).length > 0 
            ? <TituloH2>CITAS</TituloH2> 
            : <TituloH2>NO HAY CITAS</TituloH2>}
                {pacientes.map(paciente => (
                    <Cita 
                    key={paciente.id}
                    paciente={paciente} 
                    eliminarCita={eliminarCita}
                    />

                ))}
            </DivCitas>

        </Fragment>
     );
}
 
export default Citas;