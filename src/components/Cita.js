import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';



const CardCita = styled.div`
    background-color: #ffffff;
    padding: 1rem;
    display: grid;
    grid-template-rows: repeat(2, auto);
    width: 85%;
    margin-bottom: 2rem;
    border-radius: 30px;

    @media (min-width: 768px){
        width: 70%
    }

    p{
        font-size: 1.2rem;
        font-weight: 700;
        margin: .8rem 0; 
    }
    span{
        font-weight: 400;
    }


`;

const DatosFecha = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #707070;

`;

const Botones = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    column-gap: 4rem;
    margin-bottom: 1rem;
`;
const BotonEditar = styled.button`
    background-color: #0073CF;
    color: #ffffff;
    border: none;
    padding: .5rem;
    border-radius: 5px;
    &:hover{
        cursor: pointer;
    }

`;

const BotonEliminar = styled.button`
    background-color: #E20303;
    color: #ffffff;
    border: none;
    padding: .5rem;
    border-radius: 5px;

    &:hover{
        cursor: pointer;
    }
`;

const Sintomas = styled.div`
    padding: .5rem;
    border: 1px solid #707070;
    margin-bottom: 1rem;
    border-radius: 10px;

`;




const Cita = ({cita, eliminarCita, guardarEditar, guardarIdPaciente}) => {


    const {nombre, edad, telefono, fecha, hora, sintomas, id} = cita;

    return ( 

        <CardCita>
            <DatosFecha>
                <p>Fecha: <span>{fecha}</span></p>
                <p>Hora: <span>{hora}</span></p>
            </DatosFecha>
            <div>
                <p>Nombre: <span>{nombre}</span></p>
                <p>Edad: <span>{edad}</span></p>
                <p>Teléfono: <span>{telefono}</span></p>
                <p>Síntomas:</p>
                <Sintomas>
                    <span>{sintomas}</span>
                </Sintomas>
                <Botones>
                    <BotonEditar
                    onClick={() => {
                        guardarEditar(true)
                        guardarIdPaciente(id);
                    }}
                    >Editar</BotonEditar>

                    <BotonEliminar
                        onClick={() => eliminarCita(id)}
                    >Eliminar</BotonEliminar>
                </Botones>
            </div>
        </CardCita>
     );
}

Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired,
    guardarEditar: PropTypes.func.isRequired,
    guardarIdPaciente: PropTypes.func.isRequired
}
 
export default Cita;
