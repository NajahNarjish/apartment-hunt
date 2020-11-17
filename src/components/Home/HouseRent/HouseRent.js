import React from 'react';
import "./HouseRent.css";
import mapMarker from "../../../images/logos/map-marker-alt-solid 1.png";
import bedroom1 from "../../../images/logos/bed 1.png";
import bathroom1 from "../../../images/logos/bath 1.png";
import { Link, useHistory } from 'react-router-dom';

const HouseRent = ({apartment}) => {
    
    
    return (
        <div className="col-md-4 col-12 ">
            <div class="card mb-5" style={{width: "18rem"}}>
                <img class="card-img-top img-fluid" src={`data:image/png;base64,${apartment.image.img}`} alt="Card cap"></img>
                <div class="card-body">
                    <p class="card-title apartnemtName text-left">{apartment.title}</p>
                    <div>
                        <img className="icon img-fluid  " src={mapMarker} alt=""/>
                        <span>{apartment.location}</span>
                    </div>
                    <div className="py-3">
                        <img className="icon img-fluid pr-2"src={bedroom1} alt=""/>
                        <span className ="pr-3">{apartment.bedrooms}</span>
                        <img className="icon img-fluid pr-2"src={bathroom1} alt=""/>
                        <span className ="pr-3">{apartment.bathrooms}</span>
                    </div>
                </div>
                <div class="card-body">
                    <span class="priceName mr-5">{apartment.price}</span>
                    <Link to = {"/homedetail/"+apartment._id}><button className="viewbtn">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default HouseRent;