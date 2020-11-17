import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import BookingList from '../BookingList/BookingList';

const Dashboard = () => {
    const [loggedInUser] = useContext(UserContext);
    
    return (
            <section>
                <div className="row ">
                    <div className="col-md-2">
                        <Sidebar/>
                    </div>
                    <div className="col-md-10 ">
                        <div className="d-flex justify-content-between">
                            <h3 className="mt-5 mb-4">Booking list</h3>
                            <h6 className="m-5"style = {{marginLeft:"5px"}}>{loggedInUser.displayName || loggedInUser.name}</h6>
                        </div>
                        <BookingList/>   
                    </div>  
                </div>
            </section>  
    );
};

export default Dashboard;

