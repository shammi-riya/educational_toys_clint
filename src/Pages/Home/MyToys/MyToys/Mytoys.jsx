import { useContext, useEffect, useState } from 'react';

import ToysTble from '../ToysTble';
import { AuthContext } from '../../../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import useTitle from '../../../../Hook/UseTitle';

const Mytoys = () => {
    useTitle("Educational Toys | MyToys")
    const { users } = useContext(AuthContext)


    const [myToysData, setMyToysData] = useState([])
    // const [sortOrder, setSortOrder] = useState("assending");


    









    useEffect(() => {
        fetch(`https://eduvcational-learning-surver.vercel.app/myToys?email=${users?.email}`)
            .then(res => res.json())
            .then(data => setMyToysData(data))
    }, [users.email])


    const handleDesending = () => {
      
        console.log("hello");
        fetch(`https://eduvcational-learning-surver.vercel.app/desending?email=${users?.email}`)
        .then(res => res.json())
        .then(data => {
            setMyToysData(data);
        })
       
    };
    const handleAsending = () => {
      
        fetch(`https://eduvcational-learning-surver.vercel.app/assending?email=${users?.email}`)
        .then(res => res.json())
        .then(data => {
            setMyToysData(data);
        })
       
    };






    const handleDelete = (id) => {
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
                fetch(` https://eduvcational-learning-surver.vercel.app/allToy/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your toy has been deleted.',
                                'success'
                            )
                            const remaining = myToysData.filter(toys => toys._id !== id);
                            setMyToysData(remaining)
                        }
                    })

            }
        })
    }




    return (
        <div className='my-6'>
            <div className='my-6'>
                <button className='py-2 px-3 border-2 text-slate-200 bg-yellow-900 text-xl font-bold' onClick={handleAsending} >Assending</button>
                <button onClick={handleDesending}
                className='py-2 px-3 border-2 ml-3 border-yellow-900 text-xl font-bold text-yellow-900' >desending</button>


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
                        myToysData.map((singleToys, index) =>
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