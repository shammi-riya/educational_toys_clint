
const AlltoysTble = ({singleToy,index}) => {

  

    const {catogory,quintity,toyName,price,UserName,Useremail} = singleToy
    console.log(Useremail);
    return (
        <tbody className=''>
             <tr className='hover text-bold'>
        <th>{index+1}</th>
        <td>{UserName}</td>
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