import React from 'react';

import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';


const Homepage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Service></Service>
        </div>
    );
};

export default Homepage;