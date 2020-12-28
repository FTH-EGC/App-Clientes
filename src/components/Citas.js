import React, {Fragment} from 'react';
import styled from '@emotion/styled';
import Cita from './Cita';


const TituloH2 = styled.h2`
    text-align: center;
    color: #ffffff;
    font-size: 2.5rem;
    text-transform: uppercase;

`;

const DivCitas = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;


`;




const Citas = ({citas, eliminarCita, guardarEditar, guardarIdPaciente}) => {


    return ( 

        <Fragment >
            <DivCitas>
                {Object.keys(citas).length === 0 

                ? 
                <TituloH2>No hay citas</TituloH2>
                :
                <TituloH2>Citas</TituloH2>
                }

                {citas.map(cita => (
                    <Cita
                        key={cita.id}
                        cita={cita}
                        eliminarCita={eliminarCita}
                        guardarEditar={guardarEditar}
                        guardarIdPaciente={guardarIdPaciente}
                    />
                ))}

            </DivCitas>

        </Fragment>
     );
}
 
export default Citas;