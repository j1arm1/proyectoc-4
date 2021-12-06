import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';
import dataUsuarios from './Data/dataUsuarios';
import {Link } from "react-router-dom";

function TablaUsuarios() {

  const [data, setData] = useState(dataUsuarios);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);

  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState({
    id: '',
    usuario: '',
    nombres: '',
    contrasena: '',
    rol: ''
  });

const seleccionarUsuario=(elemento, caso)=>{
setUsuarioSeleccionado(elemento);
(caso==='Editar')?setModalEditar(true):setModalEliminar(true)
  }

  const handleChange=e=>{
    const {name, value}=e.target;
    setUsuarioSeleccionado((prevState)=>({
      ...prevState,
      [name]: value
    }));
  }

  const editar=()=>{
    var dataNueva=data;
    // eslint-disable-next-line array-callback-return
    dataNueva.map(usuario=>{
      if(usuario.id===usuarioSeleccionado.id){
        usuario.usuario=usuarioSeleccionado.usuario;
        usuario.nombres=usuarioSeleccionado.nombres;
        usuario.contrasena=usuarioSeleccionado.contrasena;
        usuario.rol=usuarioSeleccionado.rol;
      }
    });
    setData(dataNueva);
    setModalEditar(false);
  }

  const eliminar =()=>{
    setData(data.filter(usuario=>usuario.id!==usuarioSeleccionado.id));
    setModalEliminar(false);
  }

  const abrirModalInsertar=()=>{
    setUsuarioSeleccionado(null);
    setModalInsertar(true);
  }

  const insertar =()=>{
    var valorInsertar=usuarioSeleccionado;
    valorInsertar.id=data[data.length-1].id+1;
    var dataNueva = data;
    dataNueva.push(valorInsertar);
    setData(dataNueva);
    setModalInsertar(false);
  }

  return (
      
    <div className="App">
      <h2>Información de Usuarios</h2>
      <br />
    <button className="btn btn-success" onClick={()=>abrirModalInsertar()}>Insertar</button>  {"   "} 
    <Link to="/OpcionesAdministrador" className="btn btn-primary">Ir a Menu Administrador</Link> {"   "} 
    <br /><br />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Usuario</th>
            <th>Nombres</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map(elemento=>(
            <tr>
              <td>{elemento.id}</td>
              <td>{elemento.usuario}</td>
              <td>{elemento.nombres}</td>
              <td>{elemento.rol}</td>
              <td><button className="btn btn-primary" onClick={()=>seleccionarUsuario(elemento, 'Editar')}>Editar</button> {"   "} 
              <button className="btn btn-danger" onClick={()=>seleccionarUsuario(elemento, 'Eliminar')}>Eliminar</button>{"   "} 
              </td>
            </tr>
          ))
          }
        </tbody>
      </table>
            
      <Modal isOpen={modalEditar}>
        <ModalHeader>
          <div>
            <h3>Editar Usuario</h3>
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
              value={usuarioSeleccionado && usuarioSeleccionado.id}
            />
            <br />

            <label>Usuario</label>
            <input
              className="form-control"
              type="text"
              name="usuario"
              value={usuarioSeleccionado && usuarioSeleccionado.usuario}
              onChange={handleChange}
            />
            <br />

            <label>Nombres</label>
            <input
              className="form-control"
              type="text"
              name="descripcion"
              value={usuarioSeleccionado && usuarioSeleccionado.nombres}
              onChange={handleChange}
            />
            <br />

            <label>Tipo de Usuario</label>
            <input
              className="form-control"
              type="text"
              name="rol"
              value={usuarioSeleccionado && usuarioSeleccionado.rol}
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
          Está Seguro de eliminar el usuario {usuarioSeleccionado && usuarioSeleccionado.usuario}
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
            <h3>Crear Nuevo Usuario</h3>
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

            <label>Usuario</label>
            <input
              className="form-control"
              type="text"
              name="usuario"
              value={usuarioSeleccionado ? usuarioSeleccionado.usuario: ''}
              onChange={handleChange}
            />
            <br />

            <label>Nombres</label>
            <input
              className="form-control"
              type="text"
              name="nombres"
              value={usuarioSeleccionado ? usuarioSeleccionado.nombres: ''}
              onChange={handleChange}
            />
            <br />

            <label>Tipo de Usuario</label>
            <input
              className="form-control"
              type="text"
              name="rol"
              value={usuarioSeleccionado ? usuarioSeleccionado.rol: ''}
              onChange={handleChange}
            />
            <br />

          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary"
          onClick={()=>insertar()}>
            Agregar Usuario
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

export default TablaUsuarios;
