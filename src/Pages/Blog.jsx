import React from 'react';
import lottianimation from '../assets/lotteii.json'
import Lottie from 'lottie-react'

const Blog = () => {
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1'>
              <div className='h-[75%]'>
                    <Lottie className='h-50' animationData={lottianimation} loop={true} />
                </div>
                <div className='mt-8 '>
                <div className="collapse bg-slate-100 my-3 collapse-plus border border-base-300  rounded-box">
  <input type="checkbox" />
  <div className="collapse-title text-2xl font-bold">
   <h3 className='text-2xl font-semibold'>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
  </div>
  <div className="collapse-content">
   <div>
   <h4 className='font-semibold text-xl'>Access Token :</h4>
    <li>An access token is a credential that is issued to a user after successful authentication.</li>
    <li>It is a short-lived token with a limited expiration time, typically ranging from a few minutes to a few hours.</li>
   </div>
   <div>
     <h4 className='text-xl font-semibold'>Refress Token :</h4>
     <li>A refresh token is a long-lived token that is also issued to a user during authentication.</li>
     <li>The refresh token is used to obtain a new access token when the current access token expires.</li>

   </div>
   <div className='mt-7 font-semibold'>
     <h3>Access tokens are typically stored on the client-side, often in memory or local storage.
Storing access tokens in memory provides better security as they are cleared automatically when the browser tab or application is closed.</h3>
   </div>
  </div>
</div>
<div className="collapse collapse-plus my-2 border border-base-300 bg-slate-100 rounded-box">
  <input type="checkbox" />
  <div className="collapse-title text-xl font-medium">
  <h3 className='text-2xl font-semibold'>2.Compare SQL and NoSQL databases?</h3>
  </div>
  <div className="collapse-content">
    <h3>SQL (Structured Query Language) and NoSQL (Not Only SQL) databases are two different types of database systems that serve different purposes and have distinct characteristics.</h3>
  </div>
</div>
                <div className="collapse collapse-plus border border-base-300 my-2 bg-slate-100 rounded-box">
  <input type="checkbox" />
  <div className="collapse-title text-xl font-medium">
   <h3 className='text-2xl font-semibold'> 3.What is express js? What is Nest JS</h3>
  </div>
  <div className="collapse-content">
    <h3>Express.js and Nest.js are both web application frameworks used for building server-side applications in Node.js.</h3>
  </div>
</div>
                <div className="collapse collapse-plus border border-base-300 bg-slate-100 my-2 rounded-box">
  <input type="checkbox" />
  <div className="collapse-title text-xl font-medium">
  <h3 className='text-2xl font-semibold'>4. What is MongoDB aggregate and how does it work </h3>
  </div>
  <div className="collapse-content">
   <h5 className='text-xl '>In MongoDB, the aggregate framework is a powerful tool used for processing and transforming data in the database. It allows you to perform complex data manipulations</h5>
  </div>
</div>
                </div>
        </div>
    );
};

export default Blog;