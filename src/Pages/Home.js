import React from 'react';
import Banner from './Banner';
import BringNight from './BringNight';
import BannerNavbar from './Components/BannerNavbar';
import Navbar1 from './Components/Navbar1';
import Navbar2 from './Components/Navbar2';
import Iphone13 from './Iphone13';

const Home = () => {
    return (
        <div>
           <Navbar1></Navbar1> 
           <Navbar2></Navbar2>
           <Banner></Banner>
           <Iphone13></Iphone13>
           <BringNight></BringNight>
        </div>
    );
};

export default Home;