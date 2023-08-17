import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Providers/AuthProviders";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'


const SignUp = () => {

    const {register, reset, handleSubmit,formState: { errors },} = useForm()
const {createUser,updateUserProfile}=useContext(AuthContext)
const navigate = useNavigate();
const onSubmit = data =>{
createUser(data.email,data.password)
.then(result=>{
  const userLogged = result.user
  console.log(userLogged);
  updateUserProfile(data.name,data.photoURL)
  .then(()=>{
    console.log('user profile info updated')
    reset();
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'You are successfully SignUp in',
      showConfirmButton: false,
      timer: 1500
    })
    navigate('/');
  })
  .catch(error=>console.log(error))
})
}
    return (
    <>
      <Helmet>
        <title>Jokar Resturent |Sign Up</title>
      </Helmet>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up  now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div  className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input {...register("name", { required: true })} type="text" placeholder="name" className="input input-bordered" />
          {errors.name && <span className="text-red-600">Name field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input {...register("photo", { required: true })} type="text" placeholder="PhotoUrl" className="input input-bordered" />
          {errors.photo && <span className="text-red-600">Photo URL field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
          {errors.name && <span className="text-red-600">Name field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input {...register("password", { required: true,minLength:6, maxLength: 20,pattern:/(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/})} type="password" placeholder="password" className="input input-bordered" />
          {errors.password?.type === "required" && (
        <p className="text-red-600">Password is required</p>
          
      )}
      {errors.password?.type === "minLength" && (
        <p className="text-red-600">password must be 6 characters</p>)}
      {errors.password?.type === "maxLength" && (
        <p className="text-red-600">password max length less then 20 characters </p>)}
      {errors.password?.type === "pattern" && (
        <p className="text-red-600">password must have one uppercase one lowercase one number and one special character  </p>)}

          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="SignUp" />
        
        </div>
        <small className="text-center text-yellow-400 text-1xl font-bold">Already registered?Go to <Link className="text-black font-bold text-2xl" to='/login'>LogIn</Link> </small>
      </form>
     
    </div>
  </div>
</div>
    </>
    );
};

export default SignUp;