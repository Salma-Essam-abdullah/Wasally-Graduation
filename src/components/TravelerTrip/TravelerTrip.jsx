import React from "react";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import useTrips from "../../hooks/use-trips";

export default function TravelerTrip() {

  const {
    handleDelete,
    isTripsEmpty,
    requestData
  } = useTrips()

  return (
    <>
      <section className="request">
        <div className="container">
          <div className="row">
            <div className="col-md-12"></div>
          </div>
          {!isTripsEmpty?
             requestData.map((request, index) => (
                <div key={index} className="row mt-3">
                  <div className="preview-card ">
                    <div className="preview-card__wrp ">
                      <div className="preview-card__item">
                        <div className="preview-card__img"></div>

                        <div className="preview-card__content">
                          <div className="preview-card__title">
                            <h2 className="fw-bold">
                              <span className="green">T</span>rip{" "}
                              <span>Details </span>{" "}
                            </h2>{" "}
                          </div>
                          <h5 className="previewcardh5 fw-bold">
                            {" "}
                            <i className="fa-solid fa-train-subway"></i> From{" "}
                            <span className="green">|</span> {request.from}{" "}
                            <span className="space">
                              {" "}
                              To <span className="green">|</span> {request.to}
                            </span>
                          </h5>
                          <h5 className="previewcardh5 fw-bold ">
                            <i className="fa-solid fa-clock"></i>Trip Date{" "}
                            <span className="green">|</span>{" "}
                            {request.TripDate
                              ? request.TripDate.split("T")[0]
                              : ""}{" "}
                          </h5>
                          <h5 className="previewcardh5 fw-bold ">
                            <i className="fa-solid fa-hourglass-half"></i>Trip
                            Time: <span className="green">|</span>{" "}
                            {request.TripTime
                              ? request.TripTime.split("T")[0]
                              : ""}{" "}
                          </h5>
                          <h5 className="previewcardh5 fw-bold">
                            <i className="fa-solid fa-weight-hanging"></i>
                            Available Weight <span className="green">
                              |
                            </span>{" "}
                            {request.AvailableWeight} KG{" "}
                          </h5>
                          <h5 className="previewcardh5 fw-bold ">
                            <i className="fa-solid fa-ban"></i> Unacceptable
                            Package: <span className="green">|</span>{" "}
                            {request.unAcceptablaPackage}{" "}
                          </h5>
                          <button
                            className="btn btn-danger"
                            onClick={() => handleDelete(request._id)}
                          >
                            Delete Trip
                          </button>{" "}
                          |{" "}
                          <button className="btn btn-info">Update Trip</button>
                        </div>

                        <Link to={`/detailspfshippmentuser/${request._id}`}>
                          {" "}
                          <button className="lin btn btn-info  ">
                            VIEW DETAILS
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : <h2 className="text-center">No Trips Yet</h2>
                            }
        </div>
      </section>

      <Footer />
    </>
  );
}
