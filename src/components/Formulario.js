import React from 'react'
import styled from '@emotion/styled';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    padding: 2rem 1rem;
    border-radius: 20px;
    color: #5E5E5E;

    h2{
        text-align: center;
    }
`;




const Formulario = () => {



    return ( 
        <Form 
        
        >
            <h2>CREAR UNA CITA</h2>
            <label htmlFor="nombre">Nombre</label>
            <input
                type="text"
                name="nombre"
                placeholder="Tu Nombre"

            />
            <label htmlFor="edad">Edad</label>
            <input
                type="text"
                name="edad"
                placeholder="Tu Edad"
            />
            <label htmlFor="telefono">Teléfono</label>
            <input
                type="tel"
                name="telefono"
                placeholder="Tu Teléfono"
                
            />
            <label htmlFor="fecha">Fecha</label>
            <input
                type="date"
                name="fecha"
            />
            <label htmlFor="hora">Hora</label>
            <input
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