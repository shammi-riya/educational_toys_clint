
import { useContext } from 'react';
import { useLoaderData} from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import {  IoIosStarOutline} from "react-icons/io";
import useTitle from '../../../Hook/UseTitle';
const Toydetails = () => {
    const toydetails = useLoaderData()
    const {users} = useContext(AuthContext)
    useTitle("Educational Toys || ToyDetails")
    const {image,quintity,price,rating,toyName,description} = toydetails;
   

    return (
       <>
       <div className='my-6 grid grid-cols-1 lg:grid-cols-2 gap-4 bg-slate-100'>
        <div className='w-full '>
          <img className='w-[90%]' src={image} alt="" />
        </div>
        <div className='p-5 space-y-3'>
            
            <h3 className='text-3xl font-bold'>{toyName}</h3>
            <h4><span className='font-bold text-xl'>seller name</span>:{users?.displayName}</h4>
            <h4><span className='font-bold text-xl'>seller email:</span>{users?.email}</h4>
            <p className='text-red-400 text-xl'><span className='font-bold'>Price:</span>  ${price}</p>
            <p className='font-semibold text-xl flex'>ratting:{rating}<span className='font-bold text-red-400 '>    <  IoIosStarOutline></IoIosStarOutline> </span>
          
                    
            </p>
            <p className='font-semibold text-xl'><span className='font-bold'>Quintity:</span>  {quintity}</p>
            <p><span className='font-bold text-xl'>DESCRIPTION:</span> {description}</p>
        </div>
       </div>
       </>
    );
};

export default Toydetails;