import { NavLink, Outlet } from "react-router-dom";
import { FaCalendarAlt, FaHome, FaShoppingCart, FaWallet } from 'react-icons/fa';
import useCart from "../hooks/UseCart";


const Dashboard = () => {
  const [cart] =useCart()
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
   <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side bg-[#D1A054]">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full">
      {/* Sidebar content here */}
      <li><NavLink to='dashboard/myCart'><FaHome></FaHome> User  Home</NavLink></li>
      <li><NavLink to='dashboard/myCart'><FaCalendarAlt></FaCalendarAlt> Reservation</NavLink></li>
      <li><NavLink to='dashboard/myCart'><FaWallet></FaWallet>  Payment History</NavLink></li>
      <li><NavLink to='/dashboard/myCart'><FaShoppingCart></FaShoppingCart>  My Cart<span className="badge badge-secondary">+{cart?.length || 0}</span></NavLink></li>

      <div className="divider"></div>

      <li><NavLink to='/'> <FaHome></FaHome> Home</NavLink ></li>
      <li><NavLink to='/manu'> Our Manu</NavLink ></li>
     <li><NavLink to='/order/salad'> Order Food</NavLink ></li>

     
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;