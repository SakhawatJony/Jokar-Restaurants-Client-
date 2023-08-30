import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url=`https://api.imgbb.com/1/upload?=${img_hosting_token}`
  const onSubmit = data => {
    const formData = new FormData();
    formData.append('image',data.image[0])
    fetch(img_hosting_url,{
      method:'POST',
      body:formData
    })
    .then(res=>res.json())
    .then(imagResponse=>{
      if(imagResponse.success){
        const imgURL =imagResponse.data.display_url;
        const {name,price,category,recipe}=data;
        const newItem = {name,price:parseFloat(price),category,recipe,image:imgURL}
        console.log(newItem)
        axiosSecure.post('/menu',newItem)
        .then(data=>{
          console.log('after posting new menu item',data.data)
          if(data.data.insertedId){
            reset()
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'item add a  successfully',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })


      }
      console.log(imagResponse)
    })
  };
 
    return (
        < >
         <Helmet>
        <title>Jokar Resturent | ADD A ITEM</title>
      </Helmet>
        <SectionTitle
        subHeading="What's new?"
        heading="ADD AN ITEM"
        ></SectionTitle>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full px-10 mb-10">
        <div className="form-control w-full">
  <label className="label">
    <span className="label-text">Recipe name*</span>
  </label>
  <input type="text" {...register("name", {required: true, maxLength: 80})} placeholder="Type here" className="input input-bordered w-full" />
</div>
<div className="flex my-5">
<div className="form-control w-full ">
  <label className="label">
    <span className="label-text">Category*</span>
  </label>
  <select {...register("category", { required: true })} className="select select-bordered">
    
    <option>Salad</option>
    <option>Soup</option>
    <option>Drinks</option>
    <option>Desserts</option>
    <option>Pizzas</option>
  </select>
</div>
<div className="form-control w-full ms-2">
  <label className="label">
    <span className="label-text">Price**</span>
  </label>
  <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full" />
</div>
</div>
<div className="form-control">
  <label className="label">
    <span className="label-text">Recipe Details*</span>
  </label>
  <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
</div>
<div className="form-control w-full max-w-xs mt-4">
  <label className="label">
    <span className="label-text">Item Image</span>
  </label>
  <input type="file" {...register("image", { required: true })}  className="file-input file-input-bordered w-full max-w-xs" />
</div>
<input className="btn btn-sm mt-4" type="submit" value="Add Item" />

        </form>
        </>
    );
};

export default AddItem;