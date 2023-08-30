import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaCalendarAlt, FaHome, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import useAdmin from "../hooks/useAdmin";
import useCart from "../hooks/UseCart";



const Dashboard = () => {
  const [cart] =useCart()
  const [isAdmin] = useAdmin();
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
{
  isAdmin?<>
    <li><NavLink to='/dashboard/adminHome'><FaHome></FaHome> Admin  Home</NavLink></li>
      <li><NavLink to='/dashboard/manageItem'><FaWallet></FaWallet> Manage Items</NavLink></li>
      <li><NavLink to='/dashboard/manageBooking'><FaBook></FaBook> Manage Booking<span className="badge badge-secondary">+{cart?.length || 0}</span></NavLink></li>
      <li><NavLink to='/dashboard/addItem'><FaUtensils></FaUtensils> Add Items</NavLink></li>
      <li><NavLink to='/dashboard/allUsers'><FaUsers></FaUsers>  All Users<span className="badge badge-secondary">+{cart?.length || 0}</span></NavLink></li>
     
  </> :<>  <li><NavLink to='dashboard/userHome'><FaHome></FaHome> User  Home</NavLink></li>
  <li><NavLink to='dashboard/reservation'><FaCalendarAlt></FaCalendarAlt> Reservation</NavLink></li>
  <li><NavLink to='dashboard/history'><FaWallet></FaWallet>  Payment History</NavLink></li>
   
  <li><NavLink to='/dashboard/myCart'><FaShoppingCart></FaShoppingCart>  My Cart<span className="badge badge-secondary">+{cart?.length || 0}</span></NavLink></li>
  </>
  
}

      {/* Sidebar content here */}
    

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