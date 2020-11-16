import React from 'react';
import "./Banner.css"

const Banner = () => {
    return (
        <section className="banner">
            <p className = "text-center">FIND YOUR HOUSE RENT</p>
            <div className = "mx-auto text-center">
                <input className = "pl-3"type="text" placeholder="search..."/>
                <button className="findBtn text-white ml-3" >Find now</button>
            </div>
        </section>
    );
};

export default Banner;