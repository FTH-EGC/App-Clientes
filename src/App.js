import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Citas from './components/Citas';

function App() {

  const [pacientes, guardarPacientes] = useState([]);
  const [editar, guardarEditar] = useState(false);
  const [idpaciente, guardarIdPaciente] = useState('');

  const eliminarCita = id => {
    const citasActulizadas = pacientes.filter(paciente => paciente.id !== id);
    guardarPacientes(citasActulizadas);
  }



  return (
    <Fragment>

        <Header />
        <div className="contenedor">
          <div className="contenido">
              <Formulario 
                guardarPacientes={guardarPacientes}
                pacientes={pacientes}
                guardarEditar={guardarEditar}
                editar={editar}    
                idpaciente={idpaciente}     
              />
              <Citas 
                pacientes={pacientes}
                eliminarCita={eliminarCita}
                guardarEditar={guardarEditar}
                guardarIdPaciente={guardarIdPaciente}
              />
          </div>
        </div>

    </Fragment>
  );
}

export default App;
