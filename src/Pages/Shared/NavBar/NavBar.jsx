import { Link } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';
import useAuth from "../../../hooks/useAuth";
import useCart from "../../../hooks/UseCart";





const NavBar = () => {
  const {user,logOut}=useAuth()
  const [cart] = useCart()

  const handleLogOut = ()=>{
    logOut()
    .then(()=>{})
    .catch(error=>console(error))


  }
    const navOptions =<>
     <li><Link to='/'>Home</Link ></li>
     <li><Link to='/manu'>Our Manu</Link ></li>
     <li><Link to='/order/salad'>Order Food</Link ></li>
     <li>
      <Link to='/dashboard/myCart'><button className="btn">
 <FaShoppingCart></FaShoppingCart>
  <div className="badge badge-secondary">+{cart?.length || 0}</div>
</button> </Link>
     </li>
   
      
      {
        user? <><button onClick={handleLogOut} className="btn btn-ghost">LogOut</button></>:<>  <li><Link to='/login'>LogIn</Link ></li></>
      }
    </> 
    return (
        <div className="navbar fixed max-w-screen-xl z-10 bg-opacity-30 bg-black text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navOptions}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Jokar Resturent</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    );
};

export default NavBar;