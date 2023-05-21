import  { useContext, useEffect, useState } from 'react';

import ToysTble from '../ToysTble';
import { AuthContext } from '../../../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import useTitle from '../../../../Hook/UseTitle';

const Mytoys = () => {
    useTitle("Educational Toys || MyToys")
    const {users} = useContext(AuthContext)


    const [myToysData,setMyToysData] =useState([])
    const [sortOrder, setSortOrder] = useState('');


    const handleAssending = (a) => {
      setSortOrder(a)
    };



useEffect(()=>{
  fetch(`http://localhost:5000/toysAlll/${sortOrder}`)
  .then(res=>res.json())
  .then(data=>setMyToysData(data))
},[sortOrder])


    




  
   useEffect(()=>{
  fetch(`https://eduvcational-learning-surver.vercel.app/allToy?email=${users?.email}`)
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
          fetch(` https://eduvcational-learning-surver.vercel.app/allToy/${id}`,{
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

 


// console.log(myToysData);
    return (
      <div className=''>
        <div>
     <button className='btn' onClick={()=>handleAssending("assending")} >Assending</button>
     <button className='btn' onClick={()=>handleAssending("descending")}>desending</button>

   
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