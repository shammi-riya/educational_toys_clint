// import React from 'react';
import Bannarr from '../Bannarr';
import Offers from '../Offers';
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
            <Offers></Offers>
            <HomeBlogs></HomeBlogs>


        </div>
    );
};

export default Home;