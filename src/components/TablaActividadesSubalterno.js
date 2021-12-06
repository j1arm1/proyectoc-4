import React, {useState} from 'react';
import {Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';
import dataActividades from './Data/dataActividades';


function TablaActividadesSubalterno() {

  const [data, setData] = useState(dataActividades);
  const [modalEditar, setModalEditar] = useState(false);

  const [actividadSeleccionada, setActividadSeleccionada] = useState({
    id: '',
    proyecto: '',
    descripcion: '',
    horas_ejecutado:'',
    estado:'',
  });

const seleccionarActividad=(elemento, caso)=>{
setActividadSeleccionada(elemento);
(caso==='Editar')?setModalEditar(true):setModalEditar(false)
  }

  const handleChange=e=>{
    const {name, value}=e.target;
    setActividadSeleccionada((prevState)=>({
      ...prevState,
      [name]: value
    }));
  }

  const editar=()=>{
    var dataNueva=data;
    dataNueva.map(actividad=>{
      if(actividad.id===actividadSeleccionada.id){
        actividad.proyecto=actividadSeleccionada.proyecto;
        actividad.descripcion=actividadSeleccionada.descripcion;
        actividad.horas_ejecutado=actividadSeleccionada.horas_ejecutado;
        actividad.estado=actividadSeleccionada.estado;
        actividad.fecha_inicio=actividadSeleccionada.fecha_inicio;

      }
    });
    setData(dataNueva);
    setModalEditar(false);
  }

  return (
      
    <div className="App">
      <h2>Cargar horas y estado de una actividad de un proyecto</h2>
      <br />
    <Link to="/OpcionesSubalterno" className="btn btn-primary">Ir a Opciones del Usuario Subalterno</Link> {"   "} 
    <br /><br />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Proyecto</th>
            <th>Descripción</th>
            <th>Horas Ejecutadas</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map(elemento=>(
            <tr>
              <td>{elemento.id}</td>
              <td>{elemento.proyecto}</td>
              <td>{elemento.descripcion}</td>
              <td>{elemento.horas_ejecutado}</td>
              <td>{elemento.estado}</td>
              <td><button className="btn btn-primary" onClick={()=>seleccionarActividad(elemento, 'Editar')}>Cargar Horas y/o Estado</button> {"   "} 
              </td>
            </tr>
          ))
          }
        </tbody>
      </table>
            
      <Modal isOpen={modalEditar}>
        <ModalHeader>
          <div>
            <h3>Cargar horas y estado de una actividad de un proyecto</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>ID</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="id"
              value={actividadSeleccionada && actividadSeleccionada.id}
            />
            <br />

            <label>Proyecto</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="proyecto"
              value={actividadSeleccionada && actividadSeleccionada.proyecto}
              onChange={handleChange}
            />
            <br />

            <label>Descripción</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="descripcion"
              value={actividadSeleccionada && actividadSeleccionada.descripcion}
              onChange={handleChange}
            />
            <br />

            <label>Tiempo ejecutado en horas</label>
            <input
              className="form-control"
              type="text"
              name="horas_planeado"
              value={actividadSeleccionada && actividadSeleccionada.horas_ejecutado}
              onChange={handleChange}
            />
            <br />

            <label>Estado</label>
            <input
              className="form-control"
              type="text"
              name="estado"
              value={actividadSeleccionada && actividadSeleccionada.estado}
              onChange={handleChange}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={()=>editar()}>
            Actualizar
          </button>
          <button
            className="btn btn-danger"
            onClick={()=>setModalEditar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>

    </div>
  );
}

export default TablaActividadesSubalterno;
