import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';
import {Link } from "react-router-dom";
import dataProyectos from './Data/dataProyectos';


function TablaProyectos() {

  const [data, setData] = useState(dataProyectos);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);

  const [proyectoSeleccionado, setProyectoSeleccionado] = useState({
    id: '',
    nombre: '',
    descripcion: ''
  });

  const seleccionarProyecto=(elemento, caso)=>{
setProyectoSeleccionado(elemento);
(caso==='Editar')?setModalEditar(true):setModalEliminar(true)
  }

  const handleChange=e=>{
    const {name, value}=e.target;
    setProyectoSeleccionado((prevState)=>({
      ...prevState,
      [name]: value
    }));
  }

  const editar=()=>{
    var dataNueva=data;
    dataNueva.map(proyecto=>{
      if(proyecto.id===proyectoSeleccionado.id){
        proyecto.descripcion=proyectoSeleccionado.descripcion;
        proyecto.nombre=proyectoSeleccionado.nombre;
      }
    });
    setData(dataNueva);
    setModalEditar(false);
  }

  const eliminar =()=>{
    setData(data.filter(proyecto=>proyecto.id!==proyectoSeleccionado.id));
    setModalEliminar(false);
  }

  const abrirModalInsertar=()=>{
    setProyectoSeleccionado(null);
    setModalInsertar(true);
  }

  const insertar =()=>{
    var valorInsertar=proyectoSeleccionado;
    valorInsertar.id=data[data.length-1].id+1;
    var dataNueva = data;
    dataNueva.push(valorInsertar);
    setData(dataNueva);
    setModalInsertar(false);
  }

  return (
      
    <div className="App">
      <h2>Información de Proyectos</h2>
    <button className="btn btn-success" onClick={()=>abrirModalInsertar()}>Insertar</button> {"   "} 
    <Link to="/OpcionesLider" className="btn btn-primary">Ir a Opciones</Link> {"   "} 
    <br /><br />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map(elemento=>(
            <tr>
              <td>{elemento.id}</td>
              <td>{elemento.nombre}</td>
              <td>{elemento.descripcion}</td>
              <td><button className="btn btn-primary" onClick={()=>seleccionarProyecto(elemento, 'Editar')}>Editar</button> {"   "} 
              <Link to="/CrudActividades" className="btn btn-primary">Actividades</Link> {"   "} 
              <button className="btn btn-danger" onClick={()=>seleccionarProyecto(elemento, 'Eliminar')}>Eliminar</button>{"   "} 
              <button className="btn btn-primary">Finalizar</button>{"   "} 
              </td>
            </tr>
          ))
          }
        </tbody>
      </table>
            
      <Modal isOpen={modalEditar}>
        <ModalHeader>
          <div>
            <h3>Editar Proyecto</h3>
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
              value={proyectoSeleccionado && proyectoSeleccionado.id}
            />
            <br />

            <label>Proyecto</label>
            <input
              className="form-control"
              type="text"
              name="nombre"
              value={proyectoSeleccionado && proyectoSeleccionado.nombre}
              onChange={handleChange}
            />
            <br />

            <label>Descripción</label>
            <input
              className="form-control"
              type="text"
              name="descripcion"
              value={proyectoSeleccionado && proyectoSeleccionado.descripcion}
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
          Está Seguro de eliminar el proyecto {proyectoSeleccionado && proyectoSeleccionado.nombre}
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
            <h3>Crear Nuevo Proyecto</h3>
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
              value={proyectoSeleccionado ? proyectoSeleccionado.nombre: ''}
              onChange={handleChange}
            />
            <br />

            <label>Descripción</label>
            <input
              className="form-control"
              type="text"
              name="descripcion"
              value={proyectoSeleccionado ? proyectoSeleccionado.descripcion: ''}
              onChange={handleChange}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary"
          onClick={()=>insertar()}>
            Agregar Proyecto
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

export default TablaProyectos;
