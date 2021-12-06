import React, {useState} from 'react';
import {Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';
import dataActividades from './Data/dataActividades';


function TablaActividades() {

  const [data, setData] = useState(dataActividades);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);

  const [actividadSeleccionada, setActividadSeleccionada] = useState({
    id: '',
    proyecto: '',
    descripcion: '',
    horas_planeado:'',
    estado:'',
    fecha_inicio:''
  });

const seleccionarActividad=(elemento, caso)=>{
setActividadSeleccionada(elemento);
(caso==='Editar')?setModalEditar(true):setModalEliminar(true)
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
        actividad.horas_planeado=actividadSeleccionada.horas_planeado;
        actividad.estado=actividadSeleccionada.estado;
        actividad.fecha_inicio=actividadSeleccionada.fecha_inicio;

      }
    });
    setData(dataNueva);
    setModalEditar(false);
  }

  const eliminar =()=>{
    setData(data.filter(actividad=>actividad.id!==actividadSeleccionada.id));
    setModalEliminar(false);
  }

  const abrirModalInsertar=()=>{
    setActividadSeleccionada(null);
    setModalInsertar(true);
  }

  const insertar =()=>{
    var valorInsertar=actividadSeleccionada;
    valorInsertar.id=data[data.length-1].id+1;
    var dataNueva = data;
    dataNueva.push(valorInsertar);
    setData(dataNueva);
    setModalInsertar(false);
  }

  return (
      
    <div className="App">
      <h2>Información de Actividades</h2>
      <br />
    <button className="btn btn-success" onClick={()=>abrirModalInsertar()}>Insertar</button> {"   "} 
    <Link to="/CrudProyectos" className="btn btn-primary">Ir a Proyectos</Link> {"   "} 
    <br /><br />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Proyecto</th>
            <th>Descripción</th>
            <th>Horas planeadas</th>
            <th>Estado</th>
            <th>Fecha Inicial</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map(elemento=>(
            <tr>
              <td>{elemento.id}</td>
              <td>{elemento.proyecto}</td>
              <td>{elemento.descripcion}</td>
              <td>{elemento.horas_planeado}</td>
              <td>{elemento.estado}</td>
              <td>{elemento.fecha_inicio}</td>
              <td><button className="btn btn-primary" onClick={()=>seleccionarActividad(elemento, 'Editar')}>Editar</button> {"   "} 
              <button className="btn btn-danger" onClick={()=>seleccionarActividad(elemento, 'Eliminar')}>Eliminar</button>{"   "} 
              </td>
            </tr>
          ))
          }
        </tbody>
      </table>
            
      <Modal isOpen={modalEditar}>
        <ModalHeader>
          <div>
            <h3>Editar Actividad</h3>
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
              type="text"
              name="proyecto"
              value={actividadSeleccionada && actividadSeleccionada.proyecto}
              onChange={handleChange}
            />
            <br />

            <label>Descripción</label>
            <input
              className="form-control"
              type="text"
              name="descripcion"
              value={actividadSeleccionada && actividadSeleccionada.descripcion}
              onChange={handleChange}
            />
            <br />

            <label>Duración planeada en horas</label>
            <input
              className="form-control"
              type="text"
              name="horas_planeado"
              value={actividadSeleccionada && actividadSeleccionada.horas_planeado}
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

            <label>Fecha de Inicio</label>
            <input
              className="form-control"
              type="text"
              name="fecha_inicio"
              value={actividadSeleccionada && actividadSeleccionada.fecha_inicio}
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


      <Modal isOpen={modalEliminar}>
        <ModalBody>
          Está Seguro de eliminar la actividad {actividadSeleccionada && actividadSeleccionada.descripcion}
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={()=>eliminar()}>
            Sí
          </button>
          <button
            className="btn btn-secondary"
            onClick={()=>setModalEliminar(false)}
          >
            No
          </button>
        </ModalFooter>
      </Modal>


        <Modal isOpen={modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Crear Nueva Actividad</h3>
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
              value={data[data.length-1].id+1}
            />
            <br />

            <label>Proyecto</label>
            <input
              className="form-control"
              type="text"
              name="nombre"
              value={actividadSeleccionada ? actividadSeleccionada.proyecto: ''}
              onChange={handleChange}
            />
            <br />

            <label>Descripción</label>
            <input
              className="form-control"
              type="text"
              name="descripcion"
              value={actividadSeleccionada ? actividadSeleccionada.descripcion: ''}
              onChange={handleChange}
            />
            <br />

            <label>Duración estimada en horas</label>
            <input
              className="form-control"
              type="text"
              name="horas_planeado"
              value={actividadSeleccionada ? actividadSeleccionada.horas_planeado: ''}
              onChange={handleChange}
            />
            <br />

            <label>Estado</label>
            <input
              className="form-control"
              type="text"
              name="estado"
              value={actividadSeleccionada ? actividadSeleccionada.estado: ''}
              onChange={handleChange}
            />
            <br />

            <label>Fecha Inicial</label>
            <input
              className="form-control"
              type="text"
              name="fecha_inicio"
              value={actividadSeleccionada ? actividadSeleccionada.fecha_inicio: ''}
              onChange={handleChange}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary"
          onClick={()=>insertar()}>
            Agregar Actividad
          </button>
          <button
            className="btn btn-danger"
            onClick={()=>setModalInsertar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default TablaActividades;
