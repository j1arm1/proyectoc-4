import {Link } from "react-router-dom";
function FormLogin() {
    return (
          <div className="container">
            <form>
                <div class="row">
                    <div class="row" id = "encabezado">
                        <h1 class="text-center">Ingreso a la Aplicación</h1>
                    </div>   

                    <div class="row">
                        <div class="col"><label>Usuario</label></div>
                        <div class="col"><input type="text" name="username" placeholder="Digite Usuario" ></input></div>
                    </div>

                    <div class="row">
                        <div class="col"><label></label></div>
                    </div>

                    <div class="row">
                        <div class="col"><label>Contraseña</label></div>
                        <div class="col"><input type="password" name="password" placeholder="Digite Contraseña" ></input></div>
                    </div>
                    
                    <div class="row">
                        <div class="col"><label></label></div>
                    </div>

                    <div class="row">
                        <div class="col" align="center" className="btn-group" >
                            <Link to="/OpcionesAdministrador" className="btn btn-dark">Ingresar como Admon</Link>
                            <Link to="/OpcionesLider" className="btn btn-primary">Ingresar como Lider</Link>
                            <Link to="/OpcionesSubalterno" className="btn btn-dark">Ingresar como Subalterno</Link>
                            <Link to="/Principal" className="btn btn-primary">Ir a Principal</Link>
                        </div> 
                    </div>
                </div>
            </form>
          </div>  
    );
}
export default FormLogin;