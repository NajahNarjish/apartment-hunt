import React from 'react';
import property from "../../../images/logos/apartment 1.png";
import finance from "../../../images/logos/affordable 1.png";
import trusted from "../../../images/logos/lessee 1.png";
import "./Service.css"

const Service = () => {
    return (
        <section className ="service container text-center my-5">
            <p style={{fontSize:"16px", color:"#275A53"}}>Service</p>
            <p className ="pb-5"style={{fontSize:"34px", color:"#16322E", fontWeight:"bold"}}>We're an agency tailored to all <br></br> clients' needs that always delivers</p>

            <div className="row pt-5">
                <div className="col-md-4 col-12">
                    <div className="service-card">
                        <img className = "img-fluid" src={property} alt="property"></img>
                        <p style={{fontSize:"20px", color:"#16322E", fontWeight:"bold"}}>Wide Range of Properties</p>
                        <p style={{fontSize:"16px", color:"#606268"}} >With a robust selection of popular <br></br>properties on hand, as well as <br></br>leading properties from experts.</p>
                    </div>
                </div>
                <div className="col-md-4 col-12">
                    <div className="service-card">
                        <img className = "img-fluid" src={finance} alt="property"></img>
                        <p style={{fontSize:"20px", color:"#16322E", fontWeight:"bold"}}>Financing Made Easy</p>
                        <p style={{fontSize:"16px", color:"#606268"}} >Our stress-free finance department<br></br> that can find financial solutions to<br></br> save you money.</p>
                    </div>
                </div>
                <div className="col-md-4 col-12">
                    <div className="service-card">
                        <img className = "img-fluid" src={trusted} alt="property"></img>
                        <p style={{fontSize:"20px", color:"#16322E", fontWeight:"bold"}}>Trusted by Thousands</p>
                        <p style={{fontSize:"16px", color:"#606268"}} >10 new offers every day. 350 offers<br></br> on site, trusted by a community of<br></br> thousands of users.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;