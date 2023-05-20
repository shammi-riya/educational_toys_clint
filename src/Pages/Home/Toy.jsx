// import React from 'react';
import '@smastrom/react-rating/style.css'
import { Rating } from "@smastrom/react-rating";
import { Link } from 'react-router-dom';

const Toy = ({toy}) => {
const {
 
  toyName,
    image,
    rating,
    price,
    _id
    
} = toy || {} 
// console.log(toy);
// transition-transform duration-300 transform hover:scale-105
    return (
      <div className="card w-full h-96 bg-base-100 shadow-xl ">
      <figure><img className="h-48 hover:opacity-50  w-full relative" src={image} /></figure>


    
      <div className="card-body">
        <h2 className="card-title text-slate-800">
          {toyName}
        
          <   p className='text-red-500'>${price}</p>
        </h2>
        

        
        <Rating
                        style={{ maxWidth: 150 }}
                        value={Math.round(rating || 0)} readOnly />
    
      <Link to={`/toydetails/${_id}`}>  <button 
        className="py-2 bg-yellow-900 text-white rounded hover:bg-yellow-800">View Details</button></Link>
      </div>
    </div>
    
    );
};

export default Toy;