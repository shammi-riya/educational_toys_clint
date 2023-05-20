import  { useContext, useEffect, useState } from 'react';

import ToysTble from '../ToysTble';
import { AuthContext } from '../../../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import useTitle from '../../../../Hook/UseTitle';

const Mytoys = () => {
    useTitle("Educational Toys || MyToys")
    const {users} = useContext(AuthContext)
    const [myToysData,setMyToysData] =useState([])
  
   useEffect(()=>{
  fetch(`http://localhost:5000/allToy?email=${users?.email}`)
  .then(res=>res.json())
  .then(data=>setMyToysData(data))
   },[users])

   
  



  const handleDelete= (id)=>{
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
          fetch(`http://localhost:5000/allToy/${id}`,{
                  method:"DELETE"
                })
                .then(res=>res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your toy has been deleted.',
                            'success'
                        )
                        const remaining = myToysData.filter(toys=>toys._id !== id);
                         setMyToysData(remaining)
                    }
                })

        }
    })
}


const handleOnchange = (e)=>{
  console.log(e.target.value);
}
  

   


// console.log(myToysData);
    return (
      <div className=''>
        <div>
        <select onChange={handleOnchange} className="select select-bordered w-full max-w-xs">
  <option disabled selected>Who shot first?</option>
  <option>descending </option>
  <option>Asending</option>
</select>
        </div>
          <table className=" table table-zebra w-full">
        {/* head */}
        <thead>
            <tr className='font-bold mr-3'>
            <th>#</th>
            <th>Toy Image</th>
               <th>Toy Name</th>         
                <th>Quintity</th>
                <th>qatogory</th>
              
                <th>Price</th>
                <th>Edit</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                myToysData.map((singleToys,index)=>
                    <ToysTble
                    index={index}
                         key={singleToys._id}
                         handleDelete={handleDelete}
                        
                    singleToys={singleToys}
>
                    </ToysTble>
               )
            }
        </tbody>
        </table>
      </div>
    );
};

export default Mytoys;