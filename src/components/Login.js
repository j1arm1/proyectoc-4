import Footer from './Footer';
import FormLogin from './FormLogin';
import Cabecera from './Cabecera';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  return (
    <div>
      <Cabecera/>
      <FormLogin/> 
      <Footer/>
    </div>

  );
}

export default Login;