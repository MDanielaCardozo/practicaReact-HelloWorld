import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Saludo from './Saludo';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const App = () => {
 
  const[mensaje, setMensaje] = useState('');

  return (
    <div className='container'>
      <Saludo contenido='My Friend!' mensaje={mensaje}></Saludo>
      <Button variant="outline-warning" onClick={()=>setMensaje('(from changed state)')}>Mensaje</Button>
    </div>
  );
};

export default App;