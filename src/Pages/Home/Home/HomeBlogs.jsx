
import blog1 from '../../../assets/blog/2.webp'
import blog2 from '../../../assets/blog/4.webp'
import blog3 from '../../../assets/blog/5.webp'


const HomeBlogs = () => {
    return (
       <div  
       
       className='my-8'>
        <div  className='text-center my-7'>
        <h3 className=' text-4xl font-bold'>Our Latest Blog</h3>
        </div>
         <div   
         className='grid lg:grid-cols-3 gap-8 md:grid-cols-2 grid-cols-1'>
            <div className=' '>
            <img className='h-1/2 duration-700 ease-in w-full transition-transform  transform hover:scale-105 hover:duration-700' src={blog1} alt="" />
           <div className='p-2 space-y-2 '>
            <h5 className='text-xl '>By, June Cha .<span className='text-yellow-900'>25 May, 2121</span> </h5>
           <h2 className='font-bold text-2xl text-black hover:text-slate-400 duration-300'>Baby Planets toys makes learning so easy</h2>
            <button className='bg-yellow-900 text-white rounded-md py-2 px-2 text-md font-bold hover:bg-slate-400 duration-200'>Read More</button>
           </div>
            </div>
           <div className=''>
           <img className='h-1/2 duration-700 ease-in w-full transition-transform  transform hover:scale-105 hover:duration-700' src={blog2} alt="" />
           <div className='p-2 space-y-2'>
            <h5 className='text-xl '>By, June Cha .<span className='text-yellow-900'>25 May, 2121</span> </h5>
           <h2 className='font-bold text-2xl text-black hover:text-slate-400 duration-300'>Mother revolves around her children</h2>
            <button className='bg-yellow-900 text-white rounded-md py-2 px-2 text-md font-bold hover:bg-slate-400 duration-200'>Read More</button>
           </div>
           </div>
           <div className=' '>
           <img className='h-1/2 duration-700 ease-in w-full transition-transform  transform hover:scale-105 hover:duration-700' src={blog3} alt="" />
           <div className='p-2 space-y-2'>
            <h5 className='text-xl '>By, June Cha .<span className='text-yellow-900'>2 May, 2121</span> </h5>
           <h2 className='font-bold text-2xl text-black hover:text-slate-400 duration-300'>Learn while you grow toys Baby Planet</h2>
            <button className='bg-yellow-900 mt-4 text-white rounded-md py-2 px-2 text-md font-bold hover:bg-slate-400 duration-200'>Read More</button>
           </div>
           </div>
        </div>
       </div>
    );
};

export default HomeBlogs;