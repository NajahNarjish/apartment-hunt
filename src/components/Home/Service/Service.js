import React from 'react';
import property from "../../../images/logos/apartment 1.png";
import finance from "../../../images/logos/affordable 1.png";
import trusted from "../../../images/logos/lessee 1.png"

const Service = () => {
    return (
        <section className ="service container text-center my-5">
            <p style={{fontSize:"16px", color:"#275A53"}}>Service</p>
            <p style={{fontSize:"34px", color:"#16322E", fontWeight:"bold"}}>We're an agency tailored to all <br></br> clients' needs that always delivers</p>

            <div className="row">
                <div className="col-md-4 col-12">
                    <div>
                        <img src={property} alt="property"></img>
                        <h4>Wide Range of Properties</h4>
                        <p>With a robust selection of popular properties on hand, as well as leading properties from experts.</p>
                    </div>
                </div>
                <div className="col-md-4 col-12"></div>
                <div className="col-md-4 col-12"></div>



            </div>

        </section>
    );
};

export default Service;