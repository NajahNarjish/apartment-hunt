import React, { useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import HouseRent from '../HouseRent/HouseRent';
import Service from '../Service/Service';

const Homepage = () => {
    const [apartments, setApartments] = useState([]);
    useEffect(() => {
        fetch("https://sheltered-harbor-26764.herokuapp.com/rent")
        .then(res => res.json())
        .then(data => setApartments(data))
    }, [])
    // const apartment = {
    //     image: "https://i.ibb.co/x1fjxRn/Rectangle-396.png",
    //     title : "washington",
    //     location: "123 Main",
    //     bedrooms: "3 bedroom",
    //     bathrooms: "2 bathroom",
    //     price: "$194"
    // }

    return (
        <div>
            <Navbar/>
            <Banner></Banner>
            <section className="houserent container text-center my-5">
                <p style={{fontSize:"16px", color:"#275A53"}}>House Rent</p>
                <p className ="pb-5"style={{fontSize:"34px", color:"#16322E", fontWeight:"bold"}}>Discover the latest Rent<br></br> available today</p>

                <div className="row pt-5">
                        {
                            apartments.map(apartment => <HouseRent apartment ={apartment}></HouseRent>)
                        }
                        
                    
                </div>

            </section>

            <Service></Service>
            <Footer></Footer>
        </div>
    );
};

export default Homepage;