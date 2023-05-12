import React from 'react';
import Featured from '../components/Featured.jsx';
import Highlights from '../components/Highlights.jsx';
import Banner from '../components/Banner.jsx'
import Carousel from '../components/Carousel.jsx'
import BannerReverse from '../components/BannerReverse.jsx';

function Home(){
    return(
        <div>
        <Featured />
        <Highlights />
        <Banner />
        <Carousel />
        <BannerReverse />
        </div>
    )
}

export default Home;