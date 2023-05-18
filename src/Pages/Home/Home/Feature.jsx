// import React from 'react';
import Marquee from "react-fast-marquee";
import { HiHeart ,HiStar } from "react-icons/hi2";

const Feature = () => {
    return (
        <div className='border-2 my-8'>
            <Marquee>
            <h1 className='text-2xl px-5 my-5'></h1>
           <div className='flex gap-2 justify-between items-center text-2xl my-5 mx-5'>
           <h6>HIGH QUILITY</h6>
            <h1><span className='text-yellow-900 text-3xl my-5'><HiStar></HiStar></span></h1>
           </div>
           <div className='flex gap-2 justify-between items-center text-2xl my-5 mx-5'>
           <h6>EASY TO EASYMBLE </h6>
            <h1><span className='text-yellow-900 text-3xl'><HiHeart></HiHeart></span></h1>
           </div>
           <div className='flex gap-2 justify-between items-center text-2xl my-5 mx-5'>
           <h6>NEW BRAND PRODUCTS </h6>
            <h1><span className='text-yellow-900 text-3xl '><HiStar></HiStar></span></h1>
           </div>
           <div className='flex gap-2 justify-between items-center text-2xl my-5 mx-5'>
           <h6>ATTRACTIVE </h6>
            <h1><span className='text-yellow-900 text-3xl '><HiStar></HiStar></span></h1>
           </div>
           <div className='flex gap-2 justify-between items-center text-2xl my-5 mx-5'>
           <h6>BEAUTYFULL DESIGN</h6>
            <h1><span className='text-yellow-900 text-3xl'><HiHeart></HiHeart></span></h1>
           </div>

            </Marquee>
        </div>
    );
};

export default Feature;