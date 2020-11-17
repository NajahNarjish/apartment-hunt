
import React, { useContext, useEffect, useState } from 'react';


import "./HomeDetailPage.css";
import bigPic from "../../../images/pictures/Rectangle 406.png";
import smallPic1 from "../../../images/pictures/Rectangle 407.png";
import smallPic2 from "../../../images/pictures/Rectangle 408.png";
import smallPic3 from "../../../images/pictures/Rectangle 409.png";
import smallPic4 from "../../../images/pictures/Rectangle 410.png"

import Navbar from '../../Shared/Navbar/Navbar';
import { UserContext } from '../../../App';
import { useHistory, useParams } from 'react-router-dom';

const HomeDetailPage = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {eventKey} = useParams();
    const [event, setEvent] = useState({});
    useEffect(() =>{
        fetch("https://sheltered-harbor-26764.herokuapp.com/rents/" + eventKey)
        .then(res => res.json())
        .then(data => setEvent(data))
    }, [eventKey]);

    const userFullName = document.getElementById("full_name");
    const userPhone = document.getElementById("phone_number");
    const userMessage = document.getElementById("message");

    const history = useHistory();
      
    const handleRegister  = (e) => {
        const fullName = userFullName.value;
        const phone = userPhone.value;
        const message = userMessage.value;

        const eventDetail  = { ...loggedInUser, fullName, phone, message, ...event};
        // console.log(eventDetail);
        fetch("https://tranquil-reef-85303.herokuapp.com/addRegisteredEvent", {
            method: 'POST',
            headers:{ 
             "Content-Type": "application/json"
            },
            body: JSON.stringify(eventDetail)
        })
        
        e.preventDefault();
        history.push("/dashboard");
    };






    return (
        <div>
            <Navbar/>
            <section className="bannerHomeDetail">
                <p className = "text-center">Apartment</p>  
            </section> 

            <section className="container pt-5">
                <div className="row">
                    <div className="detail col-md-8 col-12">
                        <img className = " img-fluid mb-4"src={bigPic} alt="bigpic"></img>
                        <div className="row">
                            <div className="col-md-3 col-6">
                                <img className = " img-fluid" src={smallPic1} alt="smallpic"/>
                            </div>
                            <div className="col-md-3 col-6">
                                <img className = " img-fluid" src={smallPic2} alt="smallpic"/>
                            </div>
                            <div className="col-md-3 col-6">
                                <img className = " img-fluid" src={smallPic3} alt="smallpic"/>
                            </div>
                            <div className="col-md-3 col-6">
                                <img className = " img-fluid" src={smallPic4} alt="smallpic"/>
                            </div>
                        </div>
                        <div className="text pt-3">
                            <div className="row title-price">
                                <div className="col-10">
                                    <p className ="text-left" style={{fontSize:"36px", color:"#16322E", fontWeight:"bold"}}>Family Apartment Three</p>
                                </div>
                                <div className="col-2">
                                    <p className ="text-right" style={{fontSize:"36px", color:"#275A53", fontWeight:"bold"}}>$256</p>
                                </div>
                            </div>
                            <div className ="description">
                                <p style={{fontSize:"24px", color:"#747474"}}>3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.</p>
                            </div>
                            <div className ="priceDetails">
                                <p style={{fontSize:"28px", color:"#16322E", fontWeight:"bold"}}>Price Details-</p>
                                <p style={{fontSize:"24px", color:"#747474"}}>Rent/Month: $550 (negotiable) Service Charge : 8,000/= Tk per month, subject to change Security Deposit : 3 month’s rent Flat Release Policy : 3 months earlier notice required</p>
                            </div>
                            <div className ="propertyDetails">
                                <p style={{fontSize:"28px", color:"#16322E", fontWeight:"bold"}}>Property Details-</p>
                                <p style={{fontSize:"24px", color:"#747474"}}>Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area. Flat Size : 3000 Sq Feet. Floor : A5 (5th Floor) (6 storied Building ) (South Facing Unit) Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet. Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished. Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera</p>
                            </div>
                        </div>
                    </div>
                    <div className="form col-md-4 col-12">
                        <div className="requestBookingForm bg-light py-5 px-4 ">
                            <form class = "">
                                <div class="form-group">
                                    {
                                        loggedInUser.name ? <input type="text" class="form-control" id="full_name" value={loggedInUser.name} placeholder="Full name" readOnly/>:
                                        <input type="text" class="form-control" id="full_name" placeholder="Full name" required/>
                                    }
                                     
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="phone_number" placeholder="Phone no." required />
                                </div>
                                <div class="form-group">

                                     <input type="text" class="form-control" id="email" value={loggedInUser.email} placeholder="Email Address" readOnly />
                                </div>
                                <div class="form-group">
                                     <input style = {{height: "155px"}} type="text" class="form-control text-left" id="message" placeholder="Message" />
                                </div>
                                
                                <button onClick = {handleRegister} class="requestBtn" >Request booking</button>   
                            </form>
                         </div>

                    </div>
                </div>

            </section>
        </div>
    );
};

export default HomeDetailPage;