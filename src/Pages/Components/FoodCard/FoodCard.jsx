import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from '../../Providers/AuthProviders';
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../hooks/UseCart";


const FoodCard = ({item}) => {
    const {name,recipe,image,price,_id} = item;
    const {user}= useContext(AuthContext);
    const navigate= useNavigate()
    const location = useLocation();
    const [,refetch] = useCart()

    const handleAddToCart = item =>{
      console.log(item)

      if(user && user.email){
        const OrderItem = {menuItemId :_id,name,image,price,email:user.email}
        fetch('http://localhost:5000/carts',{
          method:'POST',
          headers:{
            'content-type':'application/json'

          },
          body:JSON.stringify(OrderItem)


        })
      .then(res=>res.json())
      .then(data =>{
        if(data.insertedId){
          refetch()
          
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Food add on The cart',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
      
    }
      else{
         
Swal.fire({
  title: 'Please login to  order the food',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Login Now'
}).then((result) => {
  if (result.isConfirmed) {
   navigate('/login', {state:{from:location}})
  }
})
      }


    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <p className="bg-slate-900 absolute right-0 text-white mr-4 mt-4 px-4">${price}</p>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button onClick={()=>handleAddToCart(item)} className="btn bg-slate-100 border-orange-400 btn-outline border-0 border-b-4 mt-4">add to cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;