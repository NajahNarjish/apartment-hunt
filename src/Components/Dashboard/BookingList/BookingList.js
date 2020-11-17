import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import EachBookingList from '../EachBookingList/EachBookingList';
// import ServicePerPerson from '../ServicePerPerson/ServicePerPerson'
// import Sidebar from '../Sidebar/Sidebar';

const BookingList = () => {
    const [loggedInUser] = useContext(UserContext);
    const [allServiceList, setAllServiceList] = useState([]);

    useEffect(() => {
        fetch("https://secret-escarpment-44361.herokuapp.com/showAllServiceList")
            .then(res => res.json())
            .then(data =>console.log(data))
    }, [])

    return (
        <div className="bg-light row" style={{ height: "100vh" }}>
            <div className = "col-md-7 ml-4 mt-5 pt-2">
            <table class="table table-striped bg-white m-5">
                                <thead>
                                    <tr class = "text-center">
                                        <th scope="col"> Name</th>
                                        <th scope="col">Email ID</th>
                                        <th scope="col">Phone no.</th>
                                        <th scope="col">Message</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* {
                                        allServiceList.map(item => <EachBookingList service={item}></EachBookingList>) 
                                    } */}
                                </tbody>
                            </table>
            </div>
        </div>
    );
};

export default BookingList;
