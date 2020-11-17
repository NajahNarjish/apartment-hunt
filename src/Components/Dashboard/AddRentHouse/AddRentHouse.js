import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const AddRentHouse = () => {
    const [loggedInUser] = useContext(UserContext);
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleFileChange = (e) => {
        console.log("image added");
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('location', info.location);
        formData.append('price', info.price);
        formData.append('bedrooms', info.bedrooms);
        formData.append('bathrooms', info.bathrooms);
        formData.append('description', info.description);

        

        fetch('https://secret-escarpment-44361.herokuapp.com/addRent', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <section>
            <div className="row ">
                <div class="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-10 ">
                    <div className="d-flex justify-content-between">
                        <h3 class="mt-5 mb-4">Add Rent House</h3>
                        <h6 className="m-5" style={{ marginLeft: "5px" }}>{loggedInUser.displayName || loggedInUser.name}</h6>
                    </div>

                    <div className="bg-light p-5 " style={{ height: "100vh" }}>
                        <form onSubmit={handleSubmit}>
                            <div className="p-5 mr-5 bg-white row" style = {{borderRadius:"20px"}}>
                                <div className = "col-md-6">
                                    <div className="form-group">
                                        <label for="title">Service Title</label>
                                        <input onBlur={handleBlur} id="title" type="text" className="form-control" name="title" placeholder="Enter Title" />
                                    </div>
                                    <div className="form-group">
                                        <label for="location">Location</label>
                                        <input onBlur={handleBlur} id="location" type="text" className="form-control" name="location" placeholder="Location" />
                                    </div>
                                    <div className="form-group">
                                        <label for="bathrooms">No of Bathroom</label>
                                        <input onBlur={handleBlur} id="bathrooms" type="text" className="form-control" name="bathrooms" placeholder="No of Bathroom" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="price">Price</label>
                                        <input onBlur={handleBlur} id="price" type="text" className="form-control" name="price" placeholder="Price" />
                                    </div>
                                    <div className="form-group">
                                        <label for="bedrooms">No of Bedroom</label>
                                        <input onBlur={handleBlur} id="bedrooms" type="text" className="form-control" name="bedrooms" placeholder="No of Bedroom" />
                                    </div>
                                    <div className="form-group">
                                        <label for="description">Description</label>
                                        <input onBlur={handleBlur} id="description" type="text" className="form-control" name="description" placeholder="Description" />
                                    </div>
                                    <label>Thumbnail</label>
                                    <div class="input-group">
                                        <label class="input-group-btn">
                                            <span style = {{backgroundColor: '#DEFFED'}}class="btn btn-outline-success ">
                                                Upload image <input  onChange={handleFileChange} type="file" style={{display: "none"}} multiple/>
                                            </span>
                                        </label>   
                                    </div>
                                </div>
                            </div>
                            <div className = "d-flex justify-content-end mr-5 mt-3">
                            <button type="submit" className="btn btn-success ">Submit</button>
                            </div>
                        </form>    
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddRentHouse;