import React, {Fragment} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {
  return (
    <Fragment>

        <Header />
        <div className="contenedor">
          <div className="contenido">
              <Formulario />
          </div>
        </div>

    </Fragment>
  );
}

export default App;
