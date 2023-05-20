import  { useContext, useEffect, useState } from 'react';

import ToysTble from '../ToysTble';
import { AuthContext } from '../../../../Provider/AuthProvider';

const Mytoys = () => {
    const {users} = useContext(AuthContext)
    const [myToysData,setMyToysData] =useState([])
  
   useEffect(()=>{
  fetch(`http://localhost:5000/allToy?email=${users?.email}`)
  .then(res=>res.json())
  .then(data=>setMyToysData(data))
   },[])


  
    const handleDelete= (id)=>{
        fetch(`http://localhost:5000/allToy/${id}`,{
          method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.deletedCount>0){
              alert("delete success")
              const remaining = myToysData.filter(toys=>toys._id !== id);
            setMyToysData(remaining)
          }
        })
      }
  




// console.log(myToysData);
    return (
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
    );
};

export default Mytoys;