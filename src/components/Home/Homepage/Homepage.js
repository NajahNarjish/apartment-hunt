import React from 'react';

import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Service from '../Service/Service';


const Homepage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Service></Service>
            <Footer></Footer>

        </div>
    );
};

export default Homepage;