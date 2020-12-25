import React, {Fragment} from 'react';
import styled from '@emotion/styled';


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




const Citas = () => {

    return ( 

        <Fragment >
            <TituloH2>CITAS</TituloH2>

            <DivCitas className="contenedor-citas">
                <div className="card-cita">
                    
                </div>
            </DivCitas>

        </Fragment>
     );
}
 
export default Citas;