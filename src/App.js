import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Citas from './components/Citas';

function App() {


let citasIniciales = JSON.parse(localStorage.getItem('Citas'));
if(!citasIniciales){
  citasIniciales = [];
}

  const [citas, guardarCitas] = useState(citasIniciales);
  const [editar, guardarEditar] = useState(false);
  const [idpaciente, guardarIdPaciente] = useState('');


  const eliminarCita = id => {
      const citaEliminada = citas.filter(cita => cita.id !== id);
      guardarCitas(citaEliminada);
  } 



  useEffect(() => {

    if(citasIniciales){
      localStorage.setItem('Citas', JSON.stringify(citas));
    }else{
      localStorage.setItem('Citas', JSON.stringify([]))
    }
    
  }, [citas, citasIniciales])

  if(editar){
    const contenido = document.querySelector('.contenido');
    contenido.scrollIntoView({behavior: 'smooth'})

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
