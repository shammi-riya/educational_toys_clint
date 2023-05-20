

import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";



const AddToysFrom = () => {


  const {users} = useContext(AuthContext)

    const { register, handleSubmit,  reset } = useForm();
    const onSubmit = data => {
       
    fetch("http://localhost:5000/postToy",{
        method:"POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })
    .then(res=>res.json())
    .then(data=>{
     if(data.acknowledged){
      Swal.fire({
        title: 'Toys add successfully',
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      })
    }
        console.log(data)})
        reset()
    
    }
        
       

    return (
        <div className="bg-slate-300 my-11 p-12">
           

<form onSubmit={handleSubmit(onSubmit)}>
      
    <div className="grid lg:grid-cols-2 md:grid-cols-1  gap-5">
    <input className="py-3 px-3"
    placeholder="toy name"
    type="text"
    {...register("toyName")} />



<input
         className="text-input"
              {...register("image")}
              placeholder="toy img link"
              type="url"
              
            />
     
    </div>




    <div className="grid grid-cols-2 gap-5 my-5">
    <input
              className="text-input py-3 px-3"
              value={users?.email}
              {...register("Useremail")}
              placeholder="seller email"
              type="email"
            />
      
      
      <input 
      className="px-3"
      name="price"
      type=""
      placeholder="price"
      {...register("price", { required: true })} />
    </div>


    <div className="grid grid-cols-2 gap-5 my-4">
    <input className="py-3 px-3" 
    type="number"
     placeholder="ratting"
     {...register("rating", { required: true })} />
      
      
      <input 
      name="quintity"
      className="px-3"
      
      placeholder="quintity"
      {...register("quintity", { required: true })} />
    </div>
      
   
     
     
     
     <select className="my-2 px-5 w-full py-3 bg-white" {...register("catogory")}>
        <option value="science">Science</option>
        <option value="math">math</option>
        <option value="languge">languge</option>
        <option value="other">other</option>
      </select>
      
     
     
      
      <div className="form-control w-full my-4">
          <textarea
            {...register('description')} 
            className="textarea textarea-bordered h-24"
            placeholder="Description"
          ></textarea>
        </div>
      
      <input value="Add Toy" className="py-2 text-xl bg-yellow-900 text-white w-full" type="submit" />
    </form>
        </div>
    );
};

export default AddToysFrom;