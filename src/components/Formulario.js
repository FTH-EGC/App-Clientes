import React from 'react'
import styled from '@emotion/styled';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    padding: 2rem 1rem;
    border-radius: 20px;
    color: #5E5E5E;
    margin-top: 3rem;

    @media (min-width: 768px){
        margin-top: 6rem;
    }

    h2{
        text-align: center;
    }
`;

const Inputs = styled.input`
    max-width: 100%;
    border: none;
    border-bottom: 1px solid #8b8b8b;
    height: 3rem;

    &:focus{
        border-bottom: 1px solid #541dd6;
        outline: none;
        -webkit-box-shadow: 0px 11px 17px -7px rgba(0,0,0,0.56);
        -webkit-box-shadow: 0px 11px 17px -10px rgba(0,0,0,0.56);
        -moz-box-shadow: 0px 11px 17px -10px rgba(0,0,0,0.56);
        box-shadow: 0px 11px 17px -10px rgba(0,0,0,0.56);
    }
`;

const Labels = styled.label`
    margin: 1rem 0 .5rem 0;
    font-size: 1.2rem;
`;


const Formulario = () => {



    return ( 
        <Form 
        
        >
            <h2>CREAR UNA CITA</h2>
            <Labels htmlFor="nombre">Nombre</Labels>
            <Inputs
                type="text"
                name="nombre"

            />
            <Labels htmlFor="edad">Edad</Labels>
            <Inputs
                type="text"
                name="edad"
            />
            <Labels htmlFor="telefono">Teléfono</Labels>
            <Inputs
                type="tel"
                name="telefono"
                
            />
            <Labels htmlFor="fecha">Fecha</Labels>
            <Inputs
                type="date"
                name="fecha"
            />
            <Labels htmlFor="hora">Hora</Labels>
            <Inputs
                type="time"
                name="hora"           
            />
            <Labels htmlFor="sintomas">Sintomas</Labels>
            <textarea 
            name="sintomas"
            ></textarea>

            <input 
                type="submit"
                value="Agregar Cita"
            />

        </Form>
     );
}
 
export default Formulario;