
import Marquee from "react-fast-marquee";
import img1 from '../../../assets/feature/2_125x125.webp'
import img2 from '../../../assets/feature/3_125x125.webp'
import img4 from '../../../assets/feature/5_125x125.webp'
import img5 from '../../../assets/feature/6_125x125.webp'

const Feature = () => {
    return (
        <div className='border-2 my-8'>
            <Marquee>
            
           <div className='flex gap-2 justify-between items-center text-2xl my-5 mx-5'>
           <img src={img1} alt="" />
           </div>
           <div className='flex gap-2 justify-between items-center text-2xl my-5 mx-10'>
           <img src={img2} alt="" />
           </div>
           <div className='flex gap-2 justify-between items-center text-2xl my-5 mx-10'>
           <img src={img1} alt="" />
           </div>
           <div className='flex gap-2 justify-between items-center text-2xl my-5 mx-10'>
           <img src={img4} alt="" />
           </div>
           <div className='flex gap-2 justify-between items-center text-2xl my-5 mx-10'>
           <img src={img5} alt="" />
           </div>
           <div className='flex gap-2 justify-between items-center text-2xl my-5 mx-5'>
           <img src={img4} alt="" />
           </div>

            </Marquee>
        </div>
    );
};

export default Feature;