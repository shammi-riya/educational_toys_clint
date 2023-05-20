// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// // ..
// AOS.init();
import img1 from '../../../assets/galary/61Lgl--OLsL._SL1000_.jpg'
import img2 from '../../../assets/galary/a.webp'
import img3 from '../../../assets/galary/b.webp'

import img5 from '../../../assets/galary/s.webp'
import img6 from '../../../assets/galary/t.webp'

const Galary = () => {
    return (
       <div className='my-24'>
         <div className='text-center text-4xl font-bold my-12'>
            <h1>Our Lates Products</h1>

            
        </div>
        <div  
    
   
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 h-[600px]'>
            <div className=' border-2 overflow-hidden  relative max-w-xs  bg-cover bg-no-repeat '>
            <img className='border-2 max-w-xs transition duration-300 ease-in-out hover:scale-110  bg-fixed  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]' src={img1} alt="" />
         </div>
            <div className='border-2  overflow-hidden  relative max-w-xs  bg-cover bg-no-repeat'>
            <img className='border-2 max-w-xs transition duration-300 ease-in-out hover:scale-110  bg-fixed opacity-100 ' src={img2} alt="" />
         </div>
            <div className=' border-2 overflow-hidden  relative max-w-xs  bg-cover bg-no-repeat'>
            <img className='border-2 max-w-xs transition duration-300 ease-in-out hover:scale-110  bg-fixed opacity-100 ' src={img3} alt="" />
         </div>
            
            <div className='border2  overflow-hidden  relative max-w-xs  bg-cover bg-no-repeat'>
            <img className='border-2 max-w-xs transition duration-300 ease-in-out hover:scale-110  bg-fixed opacity-100 ' src={img5} alt="" />
         </div>
         <div 
         className=' border-2 overflow-hidden  relative max-w-xs  bg-cover bg-no-repeat'>
            <img className='border-2 max-w-xs transition duration-300 ease-in-out hover:scale-110  bg-fixed opacity-100 ' src={img6} alt="" />
         </div>
         <div className=' border-2 overflow-hidden  relative max-w-xs  bg-cover bg-no-repeat'>
            <img className='border-2 max-w-xs transition duration-300 ease-in-out hover:scale-110  bg-fixed opacity-100 ' src={img3} alt="" />
         </div>
         <div className=' border-2 overflow-hidden  relative max-w-xs  bg-cover bg-no-repeat '>
            <img className='border-2 max-w-xs transition duration-300 ease-in-out hover:scale-110  bg-fixed  opacity-100' src={img1} alt="" />
         </div>
         <div className=' border-2 overflow-hidden  relative max-w-xs  bg-cover bg-no-repeat'>
            <img className='border-2 max-w-xs transition duration-300 ease-in-out hover:scale-110  bg-fixed opacity-100 ' src={img6} alt="" />
         </div>
         </div>
            
        
            
            </div> 
            
   
    );
};

export default Galary;
