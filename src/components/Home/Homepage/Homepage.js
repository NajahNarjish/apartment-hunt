import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import HouseRent from '../HouseRent/HouseRent';
import Service from '../Service/Service';

const Homepage = () => {
    const apartment = {
        image: "https://i.ibb.co/x1fjxRn/Rectangle-396.png",
        title : "washington",
        address: "123 Main",
        bedroom: "3 bedroom",
        bathroom: "2 bathroom",
        price: "$194"
    }

    return (
        <div>
            <Banner></Banner>
            <section className="houserent container text-center my-5">
                <p style={{fontSize:"16px", color:"#275A53"}}>House Rent</p>
                <p className ="pb-5"style={{fontSize:"34px", color:"#16322E", fontWeight:"bold"}}>Discover the latest Rent<br></br> available today</p>

                <div className="row pt-5">
                    <div className="col-md-4 col-12">
                        <HouseRent apartment ={apartment}></HouseRent>
                    </div>
                </div>

            </section>

            <Service></Service>
            <Footer></Footer>
        </div>
    );
};

export default Homepage;