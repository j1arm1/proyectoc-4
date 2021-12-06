import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link } from "react-router-dom";
import dataHorasporProyecto from './Data/dataHorasporProyecto';


function DetalleInformeHorasporProyectoporEmpleado() {

  const [data, setData] = useState(dataHorasporProyecto);

  return (
      
    <div className="App">
      <h2>Horas por Proyecto y por Empleado</h2>
    <Link to="/MenuInformesLider" className="btn btn-primary">Ir a Menu Informes</Link> {"   "} 
    <br /><br />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Responsable</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Horas Planeadas</th>
            <th>Horas Ejecutadas</th>
           </tr>
        </thead>
        <tbody>
          {data.map(elemento=>(
            <tr>
              <td>{elemento.nombre_usuario_asignado}</td>
              <td>{elemento.nombre}</td>
              <td>{elemento.descripcion}</td>
              <td>{elemento.horas_planeado}</td>
              <td>{elemento.horas_ejecutado}</td>
            </tr>
          ))
          }
        </tbody>
      </table>
            
    </div>
  );
}

export default DetalleInformeHorasporProyectoporEmpleado;
