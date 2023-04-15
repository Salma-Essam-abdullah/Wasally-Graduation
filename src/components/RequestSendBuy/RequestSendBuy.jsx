import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

export default function RequestSendBuy() {
  const [requestData, setRequestData] = useState([]);

  const [activeButton, setActiveButton] = useState("first");
  let [userData, setUserData] = useState([]);
  let encodedToken = localStorage.getItem("userToken");

  async function getRequest() {
    axios
      .get(`http://localhost:3000/v1/travelers/getTravellerOwnRequests`, {
       
        headers: { Authorization: `Bearer ${encodedToken}` },
      })

      .then((response) => {
        console.log(response.data.trips);
        setRequestData(response.data.trips);
   
      })
      .catch((error) => {
        console.log(error);
      });
  }

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

  const clickedButtonHandler = (e) => {
    console.log(e.target);
    const { name } = e.target;
    setActiveButton(name);
    console.log(activeButton);
  };
  return (
    <>
      <section className="request">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="navL">
                <Link to="/requestSendBuy">
                  <button
                    name="first"
                    className={
                      activeButton === "first" ? `${activeButton}` : ""
                    }
                    onClick={clickedButtonHandler}
                  >
                    Buy Something
                  </button>
                </Link>
                <Link to="/requestSendDeliver">
                  <button
                    name="second"
                    className={
                      activeButton === "second" ? `${activeButton}` : ""
                    }
                    onClick={clickedButtonHandler}
                  >
                    Deliver Something
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {requestData.map((request, ind) => {
            console.log("requests", request);
            return (
              <div key={ind}>
                {request.RequestsList.map((item, index) => {
                  return (
                    <div key={'test-'+index}>
                      {item.buyOrdeliver === "buy" ? (
                       <div  >
                        <div >{item.targetLocation}</div>
                        <div   className="row mt-3">
                          
                    <div className="preview-card ">
                      
                      <div className="preview-card__wrp ">
                        <div className="preview-card__item">
                          <div className="preview-card__img">
                            
                            {userData.map((user, i) =>
                              user.id === item.userId ? (
                                <img
                                  key={i}
                                  src={user.ProfileImage}
                                  alt="person"
                                />
                              ) : null
                            )}
                          </div>

                          <div className="preview-card__content">
                           
                            <h2  className="previewcardh5 fw-bold">Trip Data</h2>
            <h5  className="previewcardh5 fw-bold ">Trip To : {request.to} - Trip From : {request.from} - Trip Date : {request.TripTime ? request.TripDate.split('T')[0] : "" } - Trip Time : {request.TripTime}</h5>
            <hr  className="previewcardh5 fw-bold "/> 
                              {userData.map((user,indexx) =>
                               <span key={indexx}> {user.id ==item.userId ? user.name : ""}</span>
                              )}{" "}
                         
                            <div className="preview-card__title ">
                              Shipment | {item.item}
                            </div>
                            <h5 className="previewcardh5 fw-bold">
                              {" "}
                              <i className="fa-solid fa-train-subway"></i> From{" "}
                              <span className="green">|</span>  {item.from}{" "}
                              <span className="space">
                                {" "}
                                To <span className="green">|</span> {item.to}
                              </span>
                            </h5>
                            <h5 className="previewcardh5 fw-bold ">
                              {" "}
                              <i className="fa-solid fa-location-dot"></i>Store
                              Name <span className="green">|</span>{" "}
                              {item.storeName}{" "}
                              <span className="space">
                                {" "}
                                Store location <span className="green">
                                  | 
                                </span>{" "}
                                {item.storeLocation}
                              </span>
                            </h5>
                            <h5 className="previewcardh5 fw-bold ">
                              <i className="fa-solid fa-bars"></i>Category{" "}
                              <span className="green">|</span>{" "}
                              {item.category}
                            </h5>
                            <h5 className="previewcardh5 fw-bold">
                              <i className="fa-solid fa-weight-hanging"></i>
                              Weight <span className="green">|</span>{" "}
                              {item.weight} KG{" "}
                            </h5>
                            <h5 className="previewcardh5 fw-bold ">
                              <i className="fa-solid fa-hand-holding-dollar"></i>{" "}
                              Price <span className="green">|</span>{" "}
                              {item.price} L.E
                            </h5>
                            <h5 className="previewcardh5 fw-bold ">
                              <i className="fa-solid fa-sack-dollar"></i>Reward{" "}
                              <span className="green">|</span> {item.reward}{" "}
                              L.E
                            </h5>
                            <h5 className="previewcardh5 fw-bold ">
                              {" "}
                              <i className="fa-solid fa-location-dot"></i>Your
                              Location <span className="green">|</span>{" "}
                              {item.to} : {item.location}
                            </h5>
                            <h5 className="previewcardh5 fw-bold ">
                              <i className="fa-solid fa-phone-volume"></i>Phone
                              Number <span className="green">|</span>{" "}
                              {item.anotherPhone}
                            </h5>
                          </div>
                          <br />

                          <Link to={`/acceptOrDeclineShipment/${item.id}`}>
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
                      ) : (
                        null
                      )}
                    </div>
                  );
                })}

           
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </>
  );
}
