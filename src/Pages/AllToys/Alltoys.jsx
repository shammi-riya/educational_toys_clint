import  { useEffect, useState } from 'react';

import AlltoysTble from './AlltoysTble';

const Alltoys = () => {
  
 const [data,setData] = useState([])
 const [searchText,setSearchtext] = useState("")
    useEffect(()=>{
     fetch("http://localhost:5000/toysAll")
     .then(res=>res.json())
     .then(data=>setData(data))
    },[])
    

    const handleSearch  = () => {
        fetch(`http://localhost:5000/seacrh/${searchText}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setData(data);
          });
      };
   
    return (
        <div className='mb-6'>
           <div className='flex gap-2 text-center w-1/2 my-6 mx-auto'>
           <input   onChange={(e) => setSearchtext(e.target.value)}
           type="text" placeholder="Type here" className="input border-1 border-yellow-900 w-full max-w-xs" />
           <button onClick={handleSearch} className='bg-yellow-900 font-semibold text-xl text-white py-2 px-4 rounded-md '>Serch</button>
           </div>
            <table className="table table-zebra w-full">
             <thead>
      <tr>
        <th>#</th>
        <th>Seller name</th>
        <th>Toy Name</th>
        <th>Sub Catogory</th>
        <th>Price</th>
        <th>Avolubla Quintity</th>
        <th>Action</th>
      </tr>
    </thead>




            {
                data.map((singleToy,index)=>
                <AlltoysTble
                key={singleToy._id}
                 index={index}
                 
                singleToy={singleToy}
                ></AlltoysTble>)
            }
            </table>
        </div>
    );
};

export default Alltoys;