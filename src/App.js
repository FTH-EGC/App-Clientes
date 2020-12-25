import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Citas from './components/Citas';

function App() {

  const [pacientes, guardarPacientes] = useState([]);

  return (
    <Fragment>

        <Header />
        <div className="contenedor">
          <div className="contenido">
              <Formulario 
                guardarPacientes={guardarPacientes}
                pacientes={pacientes}
              />
              <Citas />
          </div>
        </div>

    </Fragment>
  );
}

export default App;
