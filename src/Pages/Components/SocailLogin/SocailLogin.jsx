import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Providers/AuthProviders';
import { useLocation, useNavigate } from 'react-router-dom';


const SocailLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    const {signInWithGoogle} = useContext(AuthContext)

    const handleGoogleLogin =()=>{
        signInWithGoogle()
        .then(result=>{
            const loggedInUser = result.user;
            const saveUser = {name:loggedInUser.displayName,email:loggedInUser.email}
            fetch('http://localhost:5000/users',{
              method:'POST',
              headers: {
                'content-type':'application/json'
              },
              body:JSON.stringify(saveUser)
            })
            .then(res=>res.json())
            .then(()=>{
              
              
            
            navigate(from,{replace:true});
        })
        
        
    })}
    return (
        <div>
            <div className="divider"></div>
            <div className="h-full text-center my-5">
            <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline">
          <FaGoogle></FaGoogle>
</button>
            </div>
        </div>
    );
};

export default SocailLogin;