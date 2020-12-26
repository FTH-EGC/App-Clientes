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
    &:hover{
        cursor: pointer;
    }

`;


const Formulario = ({pacientes,guardarPacientes, guardarEditar, editar, idpaciente}) => {


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


    const onChangePaciente = e => {


            guardarPaciente({
                ...paciente,
                [e.target.name] : e.target.value,
            })   
    }

    const onSubmit = e => {
        e.preventDefault();

        if(nombre.trim() === "" || edad.trim() === "" || telefono.trim() === "" || fecha.trim() === "" || hora.trim() === "" || sintomas.trim() === ""){
            guardarError(true);
            return;
        }   

        const datosIguales = pacientes.some(paciente => paciente.id === idpaciente);

        if(datosIguales && editar){
            console.log('Editar paciente');
            guardarEditar(false);

        }else{
            guardarPacientes([
                ...pacientes,
                    paciente
            ]);
    
            paciente.id = shortid();

        }

        guardarError(false);

        guardarPaciente({
            nombre: '',
            edad: '',
            telefono: '',
            fecha: '',
            hora: '',
            sintomas: ''  
        })


    }

    useEffect(() => {

        if(editar){

            const datosEditar = pacientes.find(paciente => paciente.id === idpaciente);
            const {nombre, edad, telefono, fecha, hora, sintomas} = datosEditar;
            
            guardarPaciente({
                nombre,
                edad,
                telefono,
                fecha,
                hora,
                sintomas
            });

        }

    }, [editar])

    let textoBoton;
    if(editar){
        textoBoton = "EDITAR CITA";

    }else{
        textoBoton = "CREAR CITA";
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

                onChange={onChangePaciente}
            />
            <Labels htmlFor="edad">Edad</Labels>
            <Inputs
                type="number"
                name="edad"
                value={edad}
                onChange={onChangePaciente}
            />
            <Labels htmlFor="telefono">Teléfono</Labels>
            <Inputs
                type="tel"
                name="telefono"
                value={telefono}
                onChange={onChangePaciente}
            />
            <Labels htmlFor="fecha">Fecha</Labels>
            <Inputs
                type="date"
                name="fecha"
                value={fecha}
                onChange={onChangePaciente}
            />
            <Labels htmlFor="hora">Hora</Labels>
            <Inputs
                type="time"
                name="hora"
                value={hora}  
                onChange={onChangePaciente}         
            />
            <Labels htmlFor="sintomas">Síntomas</Labels>
            <TextArea 
            name="sintomas"
            value={sintomas}
            onChange={onChangePaciente}
            ></TextArea>
            <Boton 
                type="submit"
                value={textoBoton}
            />



        </Form>
     );
}
 
export default Formulario;