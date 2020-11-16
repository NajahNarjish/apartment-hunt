import React from 'react';
import "./HouseRent.css";
import mapMarker from "../../../images/logos/map-marker-alt-solid 1.png";
import bedroom1 from "../../../images/logos/bed 1.png";
import bathroom1 from "../../../images/logos/bath 1.png";
import { Link } from 'react-router-dom';

const HouseRent = (props) => {
    const{image, title, address,bedroom, bathroom, price} = props.apartment;
    return (
        <div class="card" style={{width: "18rem"}}>
            <img class="card-img-top img-fluid" src={image} alt="Card cap"></img>
            <div class="card-body">
                <p class="card-title apartnemtName text-left">{title}</p>
                <div>
                    <img className="icon img-fluid  " src={mapMarker} alt=""/>
                    <span>{address}</span>
                </div>
                <div className="py-3">
                    <img className="icon img-fluid pr-2"src={bedroom1} alt=""/>
                    <span className ="pr-3">{bedroom}</span>
                    <img className="icon img-fluid pr-2"src={bathroom1} alt=""/>
                    <span className ="pr-3">{bathroom}</span>
                </div>
            </div>
            <div class="card-body">
                <span class="priceName mr-5">{price}</span>
                <Link to = "/homedetail"><button className="viewbtn">View Details</button></Link>
            </div>
        </div>
    );
};

export default HouseRent;