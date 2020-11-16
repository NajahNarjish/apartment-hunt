import React from 'react';
import mapMarker from '../../../images/logos/map-marker-alt-solid 1.png';
import facebook from '../../../images/logos/Vector.png';
import instragram from '../../../images/logos/Vector-1.png';
import linkedin from '../../../images/logos/Vector-2.png';
import youtube from '../../../images/logos/Vector-3.png';
import "./Footer.css"


const Footer = () => {
    return (
        <section className="footer text-white" style ={{backgroundColor: '#275A53'}}>
            <div className="container py-5">
                <div className=" row py-5">
                    <div className="col-md-5 col-12">
                        <div className="row">
                            <div className=" col-1">
                                <img src={mapMarker} alt="map"/>
                            </div>
                            <div className="col-11">
                                <p>H#340 (4th Floor), Road #24,<br></br>
                                    New DOHS, Mohakhali, Dhaka, Bangladesh<br></br>
                                    Phone: 018XXXXXXXX<br></br>
                                    E-mail: info@company.com
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-12">
                        <h4 className ="pb-3">Company</h4>
                        <p>About </p><p> Site Map </p><p>Support Center</p><p> Terms Conditions</p><p> Submit Listing</p>
                    </div>
                    <div className="col-md-2 col-12">
                    <h4 className ="pb-3">Quick Links</h4>
                        <p>Quick Links</p><p> Rentals </p><p>Sales</p><p>Contact</p><p> Terms Conditions</p><p>Our blog</p>
                    </div>
                    <div className="col-md-3 col-12">
                        <h4 className ="pb-3">About Us</h4>
                        <p>We are the top real estate agency in Sydney, with agents available to answer any question 24/7.</p>
                        <img className ="mr-2"src={facebook} alt="social-icon"/>
                        <img className ="mr-2"src={instragram} alt="social-icon"/>
                        <img className ="mr-2"src={linkedin} alt="social-icon"/>
                        <img className ="mr-2"src={youtube} alt="social-icon"/>
                    </div>
                </div>
            </div>   
        </section>
    );
};

export default Footer;