import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link } from "react-router-dom";
import dataProyectos from './Data/dataProyectos';


function DetalleInformeProyectosTerminados() {

  const [data, setData] = useState(dataProyectos);

  return (
      
    <div className="App">
      <h2>Proyectos Terminados</h2>
    <Link to="/MenuInformesLider" className="btn btn-primary">Ir a Menu Informes</Link> {"   "} 
    <br /><br />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
           </tr>
        </thead>
        <tbody>
          {data.map(elemento=>(
            <tr>
              <td>{elemento.id}</td>
              <td>{elemento.nombre}</td>
              <td>{elemento.descripcion}</td>
            </tr>
          ))
          }
        </tbody>
      </table>
            
    </div>
  );
}

export default DetalleInformeProyectosTerminados;
