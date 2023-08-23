import { Helmet } from "react-helmet-async";
import { FaTrash } from 'react-icons/fa';
import Swal from "sweetalert2";
import useCart from "../../../hooks/UseCart";


const MyCart = () => {
    const [cart,refetch] = useCart()
    const total = cart.reduce((sum,item)=>item.price+sum,0)
  

    const handleDelete = item =>{
Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
     fetch(`http://localhost:5000/carts/${item._id}`,{
       method:'DELETE' 
     })
     .then(res =>res.json())
     .then(data =>{
        if(data.deletedCount > 0){
            refetch();
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
        }
     })

    }
  })


    }
    return (
        <div className="w-full">
          <Helmet>
        <title>Jokar Resturent | MyCart</title>
      </Helmet>
      <div className="uppercase flex  font-bold justify-evenly my-5">
        <h3>Total Orders: {cart.length}</h3>
        <h3>Tottal Price: ${total}</h3>
        <button className="btn btn-warning btn-sm">PAY</button>
      </div>
      <div>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <td>
          <label>
            #
          </label>
        </td>
        <th>Item Image</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {cart.map((item, index)=> <tr
      key={item._id}
      >
        <th>
          <label>
           {index +1}
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
          {item.name}
        </td>
        <td className="text-end">${item.price}</td>
        <th>
          <button onClick={()=>handleDelete(item)} className="btn btn-ghost btn-md bg-red-600 text-white"><FaTrash></FaTrash></button>
        </th>
      </tr>)}
      
     
      
    </tbody>
    
  </table>
</div>
      </div>
        </div>
    );
};

export default MyCart;