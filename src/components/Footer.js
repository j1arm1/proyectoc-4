import {Link } from "react-router-dom";
function Footer() {
    return (
            <footer className="bg-dark text-white mt-3">
                <div className="container">
                    <div className="card bg-dark">
                        <p class="text-end mb-0"> MISION TIC 2022</p>
                        <p class="text-end mb-0">Aplicación web para la gestión de proyectos</p>
                        <p class="text-end mb-0">Grupo 1241</p>
                        <p class="text-end mb-0">Equipo 4</p>
                    </div>
                    
                    <div class="row">
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <Link to="/Principal" className="btn btn-primary">Ir a Principal</Link>
                        </div> 
                    </div>   
                </div>
            </footer >

    );
}
export default Footer;