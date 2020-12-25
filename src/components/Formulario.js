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
    border-bottom: 2px solid #000000;
    height: 3rem;

`;


const Formulario = () => {



    return ( 
        <Form 
        
        >
            <h2>CREAR UNA CITA</h2>
            <label htmlFor="nombre">Nombre</label>
            <Inputs
                type="text"
                name="nombre"
                placeholder="Tu Nombre"

            />
            <label htmlFor="edad">Edad</label>
            <Inputs
                type="text"
                name="edad"
                placeholder="Tu Edad"
            />
            <label htmlFor="telefono">Teléfono</label>
            <Inputs
                type="tel"
                name="telefono"
                placeholder="Tu Teléfono"
                
            />
            <label htmlFor="fecha">Fecha</label>
            <Inputs
                type="date"
                name="fecha"
            />
            <label htmlFor="hora">Hora</label>
            <Inputs
                type="time"
                name="hora"           
            />
            <label htmlFor="sintomas">Sintomas</label>
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