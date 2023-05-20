
import { Link } from 'react-router-dom';

const ToysTble = ({singleToys,index,handleDelete}) => {
  

    const {image,_id,catogory,quintity,toyName,price} = singleToys
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
            
         <Link to={`/allToy/${_id}`}>
         <div  className=' py-1 px-3 text-center text-xl border-2 bg-slate-200 border-yellow-900 text-yellow-900'>Edit</div>
         </Link>
           
                        
           
           </td>
            <td><button onClick={()=>handleDelete(_id)} className='py-1 px-5 text-xl  bg-yellow-900 text-white-900 text-slate-200'>Delete</button></td>
            
           
        </tr>

     </>
    );
};

export default ToysTble;