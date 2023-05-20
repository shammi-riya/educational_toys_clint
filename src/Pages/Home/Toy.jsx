// import React from 'react';
import '@smastrom/react-rating/style.css'
import { Rating } from "@smastrom/react-rating";
import { Link } from 'react-router-dom';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// // ..
// AOS.init();

const Toy = ({toy}) => {
const {
 
  toyName,
    image,
    rating,
    price,
    _id
    
} = toy || {} 

    return (
      <div 
      // data-aos="fade-top"
      // data-aos-delay="50"
      // data-aos-duration="1000"
   
    
      
      className="card w-full h-96 bg-base-100 shadow-xl relative ">
      <figure><img className="h-48 hover:opacity-50  w-full relative" src={image} /></figure>


    
      <div className="card-body p-4">
       <div>
       <div className='flex justify-between  items-center space-y-2'>
       <h3 className=" text-slate-800 font-bold text-xl">
          {toyName}        
        </h3>
       <div>
       <p className='text-red-500'>${price}</p>
       </div>
       </div>
              
        <Rating className='mb-4'
                        style={{ maxWidth: 100 }}
                        value={Math.round(rating || 0)} readOnly />
    
       </div>
   <div className='absolute bottom-4'>
   <Link to={`/toydetails/${_id}`}>  <button 
        className="py-2 bg-yellow-900 text-white rounded hover:bg-yellow-800 px-2">View Details</button></Link>
   </div>
      </div>
    </div>
    
    );
};

export default Toy;