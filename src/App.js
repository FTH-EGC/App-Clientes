import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {

  const [pacientes, guardarPacientes] = useState([]);

  return (
    <Fragment>

        <Header />
        <div className="contenedor">
          <div className="contenido">
              <Formulario 
                guardarPacientes={guardarPacientes}
              />
          </div>
        </div>

    </Fragment>
  );
}

export default App;
