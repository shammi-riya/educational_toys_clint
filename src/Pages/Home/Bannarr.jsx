// import React from 'react';
import bannrimg1 from '../../assets/logo/bannr6.jpg'
// import bannrimg2 from '../../assets/logo/bannr5.jpg'
import bannrimg3 from '../../assets/logo/bannr4.jpg'
import bannrimg4 from '../../assets/logo/bannr2.jpg'
import bannrimg5 from '../../assets/logo/bannar1.jpg'
import bannrimg6 from '../../assets/logo/bannar7.avif'


const Bannarr = () => {
    return (
        <div>
            




<div className="carousel w-full h-[82vh]">
<div id="slide1" className="carousel-item relative w-full ">
    <img src={bannrimg6} className="w-full" />
   
    <div className=' absolute  flex items-center h-full left-0 top-0 right-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
          
         <div className='text-center w-[60%] mx-auto space-y-4'>
            <p className='text-bold text-white'>Welcome to Educational Toys</p>
         <h1 className='text-5xl text-white font-bold'>The majic place <br /> of educational toys <br /> for your baby</h1>
         <button className='py-3 px-7 bg-yellow-900 text-white text-xl'>Shop Now</button>
         </div>
        
  
    <div className="z-40  absolute flex justify-between  transform -translate-y-1/2 left-5 right-5 top-1/2 ">

   
      <a href="#slide5" className="btn btn-circle bg-yellow-900">❮</a> 
     
      <a href="#slide2" className="btn btn-circle bg-yellow-900">❯</a>
    </div>
    </div>
    
    
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={bannrimg1} className="w-full" />
    <div className='absolute rounded-xl flex items-center h-full left-0 top-0 right-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
          
         <div className='text-center w-1/2 mx-auto space-y-4'>
         <h1 className='text-5xl text-white font-bold'>The majic place <br /> of fun and games</h1>
         </div>
        
  
    <div className="z-40  absolute flex justify-between  transform -translate-y-1/2 left-5 right-5 top-1/2 ">

   
      <a href="#slide1" className="btn btn-circle bg-yellow-900">❮</a> 
     
      <a href="#slide3" className="btn btn-circle bg-yellow-900">❯</a>
    </div>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={bannrimg3} className="w-full" />
    <div className='absolute rounded-xl flex items-center h-full left-0 top-0 right-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
          
         <div className='text-center w-1/2 mx-auto space-y-4'>
         <h1 className='text-5xl text-white font-bold'>Find evrything <br /> for your baby </h1>
         </div>
        
  
    <div className="z-40  absolute flex justify-between  transform -translate-y-1/2 left-5 right-5 top-1/2 ">

   
      <a href="#slide2" className="btn btn-circle bg-yellow-900">❮</a> 
     
      <a href="#slide4" className="btn btn-circle bg-yellow-900">❯</a>
    </div>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={bannrimg4} className="w-full" />
    <div className='absolute rounded-xl flex items-center h-full left-0 top-0 right-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
          
         <div className='text-center w-1/2 mx-auto space-y-4'>
         <h1 className='text-5xl text-white font-bold'>The majic place <br /> of fun and games</h1>
         </div>
        
  
    <div className="z-40  absolute flex justify-between  transform -translate-y-1/2 left-5 right-5 top-1/2 ">

   
      <a href="#slide3" className="btn btn-circle bg-yellow-900">❮</a> 
     
      <a href="#slide5" className="btn btn-circle bg-yellow-900">❯</a>
    </div>
    </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full">
    <img src={bannrimg5} className="w-full" />
    <div className='absolute rounded-xl flex items-center h-full left-0 top-0 right-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
          
         <div className='text-center w-1/2 mx-auto space-y-4'>
         <h1 className='text-5xl text-white font-bold'>The majic place <br /> of fun and games</h1>
         </div>
        
  
    <div className="z-40  absolute flex justify-between  transform -translate-y-1/2 left-5 right-5 top-1/2 ">

   
      <a href="#slide4" className="btn btn-circle bg-yellow-900">❮</a> 
     
      <a href="#slide1" className="btn btn-circle bg-yellow-900">❯</a>
    </div>
    </div>
  </div>
</div>
        </div>



    );
};

export default Bannarr;