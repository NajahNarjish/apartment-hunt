import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css";
import logo from '../../../images/logos/Logo.png';
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // const [isAdmin, setIsAdmin] = useState(false);

    // useEffect(() => {
    //     fetch("https://secret-escarpment-44361.herokuapp.com/isAdmin", {
    //         method: 'POST',
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({email:loggedInUser.email})
    //     })
    //     .then (res => res.json())
    //     .then (data => setIsAdmin(data))
    // },[])

    return (
        <div className="sidebar  py-5 px-5" >
            <img src={logo} className = "img-fluid w-25 " alt= "logo"></img>

            <ul className="list-unstyled mt-5">
                <li>
                    <Link to="/" className="text-dark">
                        <img src="" alt=""/><span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard" className="text-dark">
                        <img src="" alt=""/><span>Booking List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addHouse" className="text-dark">
                        <img src="" alt=""/><span>Add House</span>
                    </Link>
                </li>
                <li>
                    <Link to="/myRent" className="text-dark">
                        <img src="" alt=""/> <span>My Rent</span>
                    </Link>
                </li>         
            </ul>
            {/* <div>
                <Link to="/" onClick={() => {setLoggedInUser({}); sessionStorage.clear()} } className="text-dark"> <span>Logout</span></Link>
            </div> */}
        </div>        
    );
};

export default Sidebar;