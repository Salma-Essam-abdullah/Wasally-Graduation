import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

export default function UserRequestsDeliver() {
  const [requestData, setRequestData] = useState([]);
  const [shipment , setShipment] = useState([]);
  const [activeButton, setActiveButton] = useState('first')
 let [userData, setUserData] = useState([]);
  let encodedToken = localStorage.getItem("userToken");

  async function getRequest() {
    axios
      .get(`http://localhost:3000/v1/requests/viewTravelersRequests`, {
       
        headers: { Authorization: `Bearer ${encodedToken}` },
      })

      .then((response) => {
        console.log(response.data.requests.TripOfferedPrice);
        setRequestData(response.data.requests.TripOfferedPrice);
        setShipment(response.data.requests)
   
      })
      .catch((error) => {
        console.log(error);
      });
  }


  const clickedButtonHandler = (e) => {
    console.log(e.target);
    const { name } = e.target;
    setActiveButton(name);
    console.log(activeButton);
  };

  async function getUserData() {
    axios
      .get(`http://localhost:3000/v1/users/allusers`)
      .then((response) => {
        console.log("user", response.data);
        setUserData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    getRequest();
     getUserData();
  }, []);


  return (
    <>
      <section className="request">
        <div className="container">
          <div className="row">
          </div>
          <div className="navL">
    <Link to="/userRequests">
 <button name="second"  className={ activeButton === "second" ? `${activeButton}` : ""}
          onClick={clickedButtonHandler}>
          Buy Something
          </button>
    </Link>
<Link to="/userRequestsDeliver">
    <button name="first"
          className={activeButton === "first" ? `${activeButton}` : ""}
          onClick={clickedButtonHandler}>
            Deliver Something
          </button>
          </Link>
  </div>

          {requestData && requestData.map((request, ind) => {
        
            return (  
            
              <div key={ind}>
                      {shipment.buyOrdeliver === "deliver" ? (
                       <div  >
                    
                        <div   className="row mt-3">
                          
                    <div className="preview-card ">
                      
                      <div className="preview-card__wrp ">
                        <div className="preview-card__item">
                          <div className="preview-card__img">
                    
                            {userData.map((user, i) =>
                              user.id === request.trip.Traveler.userId.id ? (
                                <img
                                  key={i}
                                  src={user.ProfileImage}
                                  alt="person"
                                />
                              ) : null
                            )}
                          </div>

                          <div className="preview-card__content">


                          <h2 className="previewcardh5 fw-bold ">Your Shipment Data</h2>
                          <h5 className="previewcardh5 fw-bold"> From <span className='green'>|</span> {shipment.from}</h5>
                          <h5 className="previewcardh5 fw-bold"> To <span className='green'>|</span> {shipment.to}</h5>
                          <h5 className="previewcardh5 fw-bold"> Item <span className='green'>|</span> {shipment.item}</h5>
                          <h5 className="previewcardh5 fw-bold"> Location <span className='green'>|</span> {shipment.location}</h5>
                          <h5 className="previewcardh5 fw-bold"> Weight <span className='green'>|</span> {shipment.weight}</h5>
                          <h5 className="previewcardh5 fw-bold"> Category <span className='green'>|</span> {shipment.category}</h5>
                 
                    
                          <hr className="previewcardh5 fw-bold " />
                          <h2 className="previewcardh5 fw-bold ">Trip Data</h2>
                                    

              
                          <h5 className="previewcardh5 fw-bold"> <i className="fa-solid fa-train-subway"></i>  From <span className='green'>|</span>  {request.trip.from}   <span className='space'>  To <span className='green'>|</span>  {request.trip.to}</span></h5>
                          <h5 className="previewcardh5 fw-bold"> Price <span className='green'>|</span> {request.price}</h5>
                  </div>
                          <br />

                          <Link to={`/acceptOrDeclineTrip/${request.trip._id}`}>
                            {" "}
                            <button className="lin btn btn-info  ">
                              VIEW DETAILS
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                       </div>
                   
                   
                  
                      ):null}

           
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </>
  );
}
