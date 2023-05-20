import  { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const AlltoysTble = ({singleToy,index}) => {

   
 const {users} = useContext(AuthContext)


 





    const {catogory,quintity,toyName,price} = singleToy
    
    return (
        <tbody className=''>
             <tr className='hover text-bold'>
        <th>{index+1}</th>
        <td>{users?.displayName}</td>
        <td>{toyName}</td>
        <td>{catogory}</td>
        <td>{price}</td>
        <td>{quintity}</td>
        <td><button className='py-2 px-3 bg-yellow-900 text-white font-bold'>View Details</button></td>
      </tr>
        </tbody>
    );
};

export default AlltoysTble;