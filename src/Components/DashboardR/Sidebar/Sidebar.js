import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faHome, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/Logo.png';

const Sidebar = ({ serviceId }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const style = {
        textDecoration: 'none'
    }
    return (
        <div>
            <div className="m-2">
                <Link to='/'><img src={logo} alt="" style={{ width: "250px" }} className='w-50'></img></Link>
            </div>
            <ul className="list-unstyled dashboard-nav" >
                <li>
                        <Link to="/dashboard?name=serviceList" className="dashboard-link" style={style}>
                            <FontAwesomeIcon icon={faHome} /> <span>Service List</span>
                        </Link>
                </li>
                <li>
                        <Link to="/dashboard?name=reviews" className="dashboard-link" style={style}>
                            <FontAwesomeIcon icon={faCalendar} /> <span>Review</span>
                        </Link>
                </li>
                <li>
                        <Link to="/dashboard?name=serviceList" className="dashboard-link" style={style}>
                            <FontAwesomeIcon icon={faUserPlus} /><span>Service List</span>
                        </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;