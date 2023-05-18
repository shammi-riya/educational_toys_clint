// import React from 'react';

const Toy = ({toy}) => {
const {
 
  toyName,
    image,
    rating,
    price
    
} = toy || {} 
console.log(toy);

    return (
      <div className="card w-full h-96 bg-base-100 shadow-xl relative transition-transform duration-300 transform hover:scale-105">
      <figure><img className="h-48 w-full relative" src={image} /></figure>
      <div className="card-body">
        <h2 className="card-title text-slate-800">
          {toyName}
          <p>{rating}</p>
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{price}</p>
    
        <button className="py-2 bg-yellow-900 text-white rounded hover:bg-yellow-800">View Details</button>
      </div>
    </div>
    
    );
};

export default Toy;