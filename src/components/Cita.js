import React from 'react';
import styled from '@emotion/styled';


const CardCita = styled.div`
    background-color: #ffffff;
    padding: 1rem;
    display: grid;
    grid-template-rows: repeat(2, auto);
    width: 80%;
    margin-bottom: 2rem;
    border-radius: 30px;

    @media (min-width: 768px){
        width: 60%
    }
    p{
        font-size: 1.2rem;
        font-weight: 900;
    }
    span{
        font-size: 1rem;
        font-weight: 400;
    }

`;

const DatosFecha = styled.div`
    display: flex;
    justify-content: space-between;

    p{
        flex-basis: calc(50% - 1rem);
        text-align: center;
    }
    span{
        text-align: right;
    }

`;

const Cita = ({paciente}) => {

    const {nombre, edad, telefono, fecha, hora, sintomas, id} = paciente;

    return ( 

        <CardCita>
            <DatosFecha>
                <p>Fecha: <span>{fecha}</span></p>
                <p>Hora: <span>{hora}</span></p>
            </DatosFecha>
            <div>
                <p>Nombre: <span>{nombre}</span></p>
                <p>Edad: <span>{edad}</span></p>
                <p>Telefono: <span>{telefono}</span></p>
                <div className="sintomas">
                    <p>{sintomas}</p>
                </div>
                <div className="botones">
                    <button
                        name="editar"
                    >Editar</button>
                    <button
                    >Eliminar</button>
                </div>
            </div>
        </CardCita>
     );
}
 
export default Cita;
