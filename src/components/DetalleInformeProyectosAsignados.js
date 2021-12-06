import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link } from "react-router-dom";
import dataProyectos from './Data/dataProyectos';


function DetalleInformeProyectosAsignados() {

  const [data, setData] = useState(dataProyectos);

  return (
      
    <div className="App">
      <h2>Proyectos Asignados</h2>
    <Link to="/OpcionesSubalterno" className="btn btn-primary">Ir a las Opciones del Usuario Subalterno</Link> {"   "} 
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

export default DetalleInformeProyectosAsignados;
