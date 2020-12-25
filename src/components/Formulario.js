import React from 'react'
import styled from '@emotion/styled';

const Form = styled.form`


`;




const Formulario = () => {



    return ( 
        <form 
        
        >
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

        </form>
     );
}
 
export default Formulario;