import { useEffect, useState } from 'react';
import Toy from '../Toy';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Shop = () => {
    const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    fetch(`https://eduvcational-learning-surver.vercel.app/allToy/${activeTab}`)
      .then((res) => res.json())
      .then((data) => setToys(data))
      .catch((error) => console.error("Error fetching toys:", error));
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
    return (
        <div className="my-32">
          <div data-aos="fade-left"
      data-aos-delay="100"
      data-aos-duration="1000">
 <h2 className='text-3xl font-bold text-center'>Shop By Catogory</h2>
          </div>
         
      <div className="text-center my-8">
        <div className="flex border-b-2 my-5 w-1/2 mx-auto justify-center items-center">
          <div
            onClick={() => handleTabClick("All")}
            className={`py-2 px-3 mx-2 text-xl ${
              activeTab === "All"
                ? "border-b-4 border-yellow-900 text-yellow-900 font-semibold"
                : ""
            }`}
          >
            All Toys
          </div>
          <div
            onClick={() => handleTabClick("math")}
            className={`py-2 px-3 mx-2 text-xl ${
              activeTab === "math"
                ? "border-b-4 border-yellow-900 text-yellow-900 font-semibold"
                : ""
            }`}
          >
            Math
          </div>
          <div
            onClick={() => handleTabClick("languge")}
            className={`py-2 px-3 mx-2 text-xl ${
              activeTab === "languge"
                ? "border-b-4 border-yellow-900 text-yellow-900 font-semibold"
                : ""
            }`}
          >
           languge
          </div>
          <div
            onClick={() => handleTabClick("science")}
            className={`py-2 px-3 mx-2 text-xl ${
              activeTab === "science"
                ? "border-b-4 border-yellow-900 text-yellow-900 font-semibold"
                : ""
            }`}
          >
           science
          </div>
        </div>
      </div>
      <div className="grid lg:px-0 px-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
       {
        toys.map(toy=>
        <Toy
        key={toy._id}
        toy={toy}
        ></Toy>)
       }
      </div>
    </div>
  );
};
    


export default Shop;