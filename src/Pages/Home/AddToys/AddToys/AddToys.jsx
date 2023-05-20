// import React from 'react';
import useTitle from '../../../../Hook/UseTitle';
import AddToysFrom from '../AddToysFrom';

const AddToys = () => {
    useTitle("Educational Toys || AddToys")
    return (
        <div>
            <AddToysFrom></AddToysFrom>
        </div>
    );
};

export default AddToys;