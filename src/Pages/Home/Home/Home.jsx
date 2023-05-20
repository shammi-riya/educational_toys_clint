// import React from 'react';
import Bannarr from '../Bannarr';
import Feature from './Feature';
import Galary from './Galary';
import HomeBlogs from './HomeBlogs';
import Shop from './Shop';



const Home = () => {
    return (
        <div>
           <Bannarr></Bannarr>
        
          <Feature></Feature>
          <Galary></Galary>
          <Shop></Shop>
         
          <HomeBlogs></HomeBlogs>
        
          
        </div>
    );
};

export default Home;