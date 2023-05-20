import  { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Provider/AuthProvider';

const ToysTble = ({singleToys,index,handleDelete}) => {
    const {users} = useContext(AuthContext)


const handleUpdated = (singleToys)=>{
    console.log(singleToys);
  fetch(`http://localhost:5000/allToy/${singleToys._id}`,{
    method:"PUT",
    headers:{
        "content-type":"application/json"
    },
    body:JSON.stringify(singleToys)
  })
  .then((res) => res.json())
      .then((result) => {
       
        console.log(result);
      });
}


const { register, handleSubmit,  reset,description } = useForm();
const onSubmit = data => {
   

    console.log(data)
    reset()

}







    const {image,_id,catogory,quintity,toyName,price,rating} = singleToys
    return (
        
     
     <>
      <tr className='font-semibold'>
         <td>
            {index+1}
         </td>
          
            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        <img src={image} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td>
            {toyName}
        </td>
            <td>
               {quintity}
            </td>
            <td>
               {catogory}
            </td>
            <td>${price}</td>
            <td>
            <label htmlFor="my-modal-5">
            <div   onClick={()=>handleUpdated(singleToys)} className=' py-1 px-3 text-center text-xl border-2 bg-slate-200 border-yellow-900 text-yellow-900'>Edit</div>
                 </label>
           
           
           </td>
            <td><button onClick={()=>handleDelete(_id)} className='py-1 px-5 text-xl  bg-yellow-900 text-white-900 text-slate-200'>Delete</button></td>
            
           
        </tr>


        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
<div className="modal  p-7">
<div className='bg-slate-100'>
<form className='p-7' onSubmit={handleSubmit(onSubmit)}>
      
      <div className="grid lg:grid-cols-2 md:grid-cols-1  gap-5">
      <input className="py-3 px-3"
      placeholder="toy name"
      defaultValue={toyName}
      type="text"
      {...register("toyName")} />
  
  
  
  
  <input
            className="text-input d-none"
            {...register("_id")}
            value={_id}
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
        defaultValue={price}
        placeholder="price"
        {...register("price", { required: true })} />
      </div>
  
  
      <div className="grid grid-cols-2 gap-5 my-4">
      <input className="py-3 px-3" 
      type="number"
      defaultValue={rating}
       placeholder="ratting"
       {...register("rating", { required: true })} />
        
        
        <input 
        name="quintity"
        className="px-3"
        defaultValue={quintity}
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
              defaultValue={description}
              className="textarea textarea-bordered h-24"
              placeholder="Description"
            ></textarea>
          </div>
          <label htmlFor="my-modal-5"  className="btn">Yay!</label>
        <input value="Update My Toys" className="py-2 text-xl bg-yellow-900 text-white w-full" type="submit" />
      </form>
</div>
</div>


     </>
    );
};

export default ToysTble;