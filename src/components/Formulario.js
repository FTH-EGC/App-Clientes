import React, {useState, useEffect} from 'react'
import styled from '@emotion/styled';
import Error from './Error';
import shortid from 'shortid';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    padding: 2rem;
    border-radius: 20px;
    color: #5E5E5E;
    max-height: 53rem;

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

const TextArea = styled.textarea`
    height: 7rem;
    margin-bottom: 2rem;
    border-radius: 10px;
    padding: 1rem;
    &:focus{
        outline: none;
        -webkit-box-shadow: 0px 11px 17px -7px rgba(0,0,0,0.56);
        -webkit-box-shadow: 0px 11px 17px -10px rgba(0,0,0,0.56);
        -moz-box-shadow: 0px 11px 17px -10px rgba(0,0,0,0.56);
        box-shadow: 0px 11px 17px -10px rgba(0,0,0,0.56);
    }
`;

const Boton = styled.input`
    background-color: #CF3D95;
    padding: .7rem;
    display: block;
    border: none;
    color: #ffffff;
    font-size: 1.8rem;
    font-weight: 900;
    text-transform: uppercase;
    &:hover{
        cursor: pointer;
    }

`;


const Formulario = ({guardarCitas, citas, editar, idpaciente, guardarEditar}) => {

    const [paciente, guardarPaciente] = useState({
        nombre: '',
        edad: '',
        telefono: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const [error, guardarError] = useState(false);
    const {nombre, edad, telefono, fecha, hora, sintomas} = paciente;


    useEffect(() => {
        if(Object.keys(citas).length > 0 && editar){
            const datosFiltrados = citas.find(cita => cita.id === idpaciente);
    
            const{nombre, edad, telefono, fecha, hora, sintomas, id} = datosFiltrados;
    
            guardarPaciente({
                nombre, 
                edad, 
                telefono,
                fecha,
                hora,
                sintomas,
                id
            });
        }
    }, [editar, citas]);


    const onSubmit = e => {
        e.preventDefault();
        if(nombre.trim() === "" || edad.trim() === "" || telefono.trim() === "" || fecha.trim() === "" || hora.trim() === "" || sintomas.trim() === ""){
            guardarError(true);
            return;
        }

        guardarError(false);
        const datosIguales = citas.some(cita => cita.id === idpaciente); 
        if(datosIguales && editar){

            const citasAct = citas.map(cita => {
                if(cita.id === idpaciente){
                    const citasNuevas = {...paciente}
                    return citasNuevas;
                }else{
                    return cita;
                }

            });
            guardarCitas([...citasAct]);
            guardarEditar(false);
        }else{
        // Pasando el paciente a las citas (state principal)
        guardarCitas([
            ...citas,
            paciente
        ])  
        // Generando un id
        paciente.id = shortid.generate();

        console.log('No son iguales')
        }


        // Reseteando el formulario

        guardarPaciente({
            nombre: '',
            edad: '',
            telefono: '',
            fecha: '',
            hora: '',
            sintomas: '' 
        })

    }

 


    const onChange = e => {
        // Pasando datos al objeto de paciente
        guardarPaciente({
            ...paciente,
            [e.target.name] : e.target.value
        })
    }

    let textoBoton;
    if(editar){
        textoBoton="Editar Registro";
    }else{
        textoBoton="Crear Cita"
    }


    return ( 
        <Form

        onSubmit={onSubmit}
        >
            {error ? <Error /> : null}
            <h2>CREAR UNA CITA</h2>
            <Labels htmlFor="nombre">Nombre</Labels>
            <Inputs
                type="text"
                name="nombre"
                value={nombre}
                onChange={onChange}
            />
            <Labels htmlFor="edad">Edad</Labels>
            <Inputs
                type="number"
                name="edad"
                value={edad}
                onChange={onChange}
            />
            <Labels htmlFor="telefono">Teléfono</Labels>
            <Inputs
                type="tel"
                name="telefono"
                value={telefono}
                onChange={onChange}
            />
            <Labels htmlFor="fecha">Fecha</Labels>
            <Inputs
                type="date"
                name="fecha"
                value={fecha}
                onChange={onChange}
            />
            <Labels htmlFor="hora">Hora</Labels>
            <Inputs
                type="time"
                name="hora"
                value={hora}
                onChange={onChange}
     
            />
            <Labels htmlFor="sintomas">Síntomas</Labels>
            <TextArea 
            name="sintomas"
            value={sintomas}
            onChange={onChange}

            ></TextArea>
            <Boton 
                type="submit"
                value={textoBoton}
            />



        </Form>
     );
}
 
export default Formulario;