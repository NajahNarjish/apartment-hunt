import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const MyRent = () => {
    return (
        <section>
            <div className="row ">
                <div class="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-10 ">
                    <div className="d-flex justify-content-between">
                        <h3 class="mt-5 mb-4">Booking list</h3>
                        {/* <h6 className="m-5" style={{ marginLeft: "5px" }}>{loggedInUser.displayName || loggedInUser.name}</h6> */}
                    </div>

                    <div className="bg-light row" style={{ height: "100vh" }}>
                        <div className="col-md-7 ml-4 mt-5 pt-2">
                            <table class="table table-striped bg-white m-5">
                                <thead>
                                    <tr class="text-center">
                                        <th scope="col"> House Name</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Action</th>
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



                </div>
            </div>
        </section>
    );
};

export default MyRent;