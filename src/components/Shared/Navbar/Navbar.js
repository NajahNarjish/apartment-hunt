import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/Logo.png';
import "./Navbar.css";


const Navbar = () => {
    return (
        <section className="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
                <Link class="navbar-brand company-logo">
                    <img class="img-fluid main-logo" src={logo} alt="logo" />
                </Link>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item ">
                            <Link className="nav-link mr-3 text-dark" to="/home">Home</Link>
                        </li>
                        <li class="nav-item ">
                            <Link className="nav-link mr-3 text-dark" to="/">About</Link>
                        </li>
                        <li class="nav-item ">

                            <Link className="nav-link mr-3 text-dark" to="/">Service</Link>
                        </li>
                        <li class="nav-item ">
                            <Link className="nav-link mr-3 text-dark" to="/">Concerns</Link>
                        </li>
                        <li class="nav-item ">
                            <Link className="nav-link mr-3 text-dark" to="/">Event</Link>
                        </li>
                        <li class="nav-item ">
                            <Link className="nav-link mr-3 text-dark" to="/">Contact</Link>
                        </li>
                        <li class="nav-item">
                            {/* {
                            loggedInUser.email ? <button class="btn btn-dark"  onClick={() => {setLoggedInUser({}); sessionStorage.clear()} } >Log out</button> :
                            <Link to="/login"><button class="btn btn-dark" >Login</button></Link>
                        }   */}


                            <Link to="/login"><button className="loginBtn text-white" >Login</button></Link>

                        </li>
                        {/* <li class="nav-item">
                        <h6  className="nav-link mr-3 mt-2"style = {{marginLeft:"5px"}}>{loggedInUser.displayName || loggedInUser.name}</h6>
                    </li>  */}
                    </ul>
                </div>
            </nav>


        </section>
    );
};

export default Navbar;