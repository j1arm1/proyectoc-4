import React, {useState} from 'react';
import {Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import dataActividades from './Data/dataActividades';


function DetalleInformeActividadesAsignadas() {

  const [data, setData] = useState(dataActividades);
 
 
  return (
      
    <div className="App">
      <h2>Información de Actividades asignadas al Usuario Subalterno</h2>
      <br />
    <Link to="/OpcionesSubalterno" className="btn btn-primary">Ir a Opciones Usuario Subalterno</Link> {"   "} 
    <br /><br />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Proyecto</th>
            <th>Descripción</th>
            <th>Horas planeadas</th>
            <th>Horas ejecutadas</th>
            <th>Estado</th>
            <th>Fecha Inicial</th>
           </tr>
        </thead>
        <tbody>
          {data.map(elemento=>(
            <tr>
              <td>{elemento.id}</td>
              <td>{elemento.proyecto}</td>
              <td>{elemento.descripcion}</td>
              <td>{elemento.horas_planeado}</td>
              <td>{elemento.horas_ejecutado}</td>
              <td>{elemento.estado}</td>
              <td>{elemento.fecha_inicio}</td>
            </tr>
          ))
          }
        </tbody>
      </table>
   </div>
  );
}

export default DetalleInformeActividadesAsignadas;
