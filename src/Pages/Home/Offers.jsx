import  { useEffect, useState } from 'react';
import toy from '../../assets/galary/toy.jpg'

const Offers = () => {
    const [days, setDays] = useState(15);
  const [hours, setHours] = useState(10);
  const [minutes, setMinutes] = useState(24);
  const [seconds, setSeconds] = useState(40);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          setMinutes((prevMinutes) => {
            if (prevMinutes === 0) {
              setHours((prevHours) => {
                if (prevHours === 0) {
                  setDays((prevDays) => prevDays - 1);
                  return 23; // Reset hours to 23
                }
                return prevHours - 1;
              });
              return 59; // Reset minutes to 59
            }
            return prevMinutes - 1;
          });
          return 59; // Reset seconds to 59
        }
        return prevSeconds - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
}, []);
  

    return (
       <div className='relative my-44'>
        <div className=''>
            <img className='h-[75vh] w-full ' src={toy} alt="" />
            
        </div>
        <div className='lg:block hidden text-4xl text-center space-y-2 text-white absolute top-44 left-64 z-10'>
                <h2 className='text-6xl font-bold'>15% Discount <br />
On All Kids Education Toys</h2>
<h3>Offer Expires on</h3>
            </div>
        <div className='absolute hidden lg:flex items-center h-[75vh] left-0 top-0 right-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
        
        <div className="absolute top-1/2 left-96  grid grid-flow-col gap-5 text-center auto-cols-max p-16  ">
       
      <div className="flex flex-col p-2 bg-gradient-to-r from-pink-300 via-red-500 to-yellow-900  rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl ml-2">
          <span style={{ '--value': days }}></span>
        </span>
        days
      </div>
      <div className="flex flex-col p-2 bg-gradient-to-r from-pink-300 via-red-500 to-yellow-900 rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ '--value': hours }}></span>
        </span>
        hours
      </div>
      <div className="flex flex-col p-2 bg-gradient-to-r from-pink-300 via-red-500 to-yellow-900 rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ '--value': minutes }}></span>
        </span>
        min
      </div>
      <div className="flex flex-col p-2 bg-gradient-to-r from-pink-300 via-red-500 to-yellow-900 rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ '--value': seconds }}></span>
        </span>
        sec
      </div>
    </div>
        </div>
       </div>
    );
};

export default Offers;