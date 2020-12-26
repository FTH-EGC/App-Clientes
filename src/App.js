import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Citas from './components/Citas';

function App() {

  const [pacientes, guardarPacientes] = useState([]);

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
              />
              <Citas 
                pacientes={pacientes}
                eliminarCita={eliminarCita}
              />
          </div>
        </div>

    </Fragment>
  );
}

export default App;
