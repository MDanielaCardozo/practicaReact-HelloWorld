import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Saludo from './Saludo';

const App = () => {
  return (
    <div>
      <Saludo contenido='My Friend!'></Saludo>
    </div>
  );
};

export default App;