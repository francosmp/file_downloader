import React from 'react';
import Cabecera from './Header.jsx';
import Cuerpo from './Body.jsx';
import Pies from './Footer.jsx';
import '../css/App.css';

function App() {
  return (
    <div className='aplicacion'>
      <Cabecera />
      <Cuerpo />
      <Pies />
    </div>
  );
}

export default App;
