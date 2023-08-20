import { useContext, useEffect,  useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate,validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../Providers/AuthProviders';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'
import SocailLogin from '../Components/SocailLogin/SocailLogin';

const Login = () => {

  const {signIn} = useContext(AuthContext)



    const [disabled,setDisabled]=useState(true)

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)

        signIn(email,password)
        .then(result =>{
          const user = result.user;
          console.log(user)
          Swal.fire({
            title: 'You are successfully logged in',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
          navigate(from,{replace:true});
        })


    }
const handleValidateCaptcha =(e)=>{
    const user_captcha_value=e.target.value;
    if(validateCaptcha(user_captcha_value)){
        setDisabled(false)
    }
    else{
        setDisabled(true)
    }


}

 useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])
    
    return (
      <>

      <Helmet>
      <title>Jokar Resturent |LogIn</title>
    </Helmet>
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col  lg:flex-row-reverse">
    <div className="text-center md:w-1/2 lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div  className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input onBlur={handleValidateCaptcha}  type="text" name="captcha" placeholder="type above the captcha" className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
     
          <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
        </div>
        <p className='text-center text-yellow-400 text-1xl font-bold'>New here? Create an<Link className='font-bold text-black text-2xl' to='/signUp'>  New Account </Link></p>
      </form>
      <SocailLogin></SocailLogin>
    </div>
  </div>
  
</div>
       </>
    );
};

export default Login;