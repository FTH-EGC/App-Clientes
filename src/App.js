import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Citas from './components/Citas';

function App() {

  const [citas, guardarCitas] = useState([]);
  const [editar, guardarEditar] = useState(false);
  const [idpaciente, guardarIdPaciente] = useState('');

  const eliminarCita = id => {
      const citaEliminada = citas.filter(cita => cita.id !== id);
      guardarCitas(citaEliminada);
  } 


  return (
    <Fragment>
        <Header />
        <div className="contenedor">
          <div className="contenido">
            
              <Formulario 
                guardarCitas={guardarCitas}
                citas={citas}
                editar={editar}
                idpaciente={idpaciente}
                guardarEditar={guardarEditar}
              />
              <Citas 
                citas={citas}
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
