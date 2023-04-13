import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

export default function TravelerTrip() {

  let encodedToken = localStorage.getItem('userToken');

  const [trips,setTrips]=useState([]);


  async function getTrip(){
    axios.get(`http://localhost:3000/v1/trips/viewtravelertrips`,{ headers: {"Authorization" : `Bearer ${encodedToken}`} }).then(
        (response)=>{
            console.log(response.data.trips)
            setTrips(response.data.trips)

        }
    ).catch(
        (error)=>{
             console.log(error.response)

        }
    )
}

useEffect(()=>{
  getTrip()
    },[]);
  
    const deleteTrip = (id) => {
      axios.delete(`http://localhost:3000/v1/trips/delete/${id}`  , {headers: { Authorization: `Bearer ${encodedToken}` }})
        .then(response => {
          console.log(response.date)
          getTrip();
        })
        .catch(error => {
         console.log(error)
        });
    }
  return (
    <>
  <section className="request">
    

 <div className="container">
 
  
  {trips ? trips.map((trip,index)=>

  <div key={index} className="row mt-3">
    
    <div className="preview-card ">
      <div className="preview-card__wrp ">
        <div className="preview-card__item">
      
          <div className="preview-card__content">
         
         

            <h5 className="previewcardh5 fw-bold"> <i className="fa-solid fa-train-subway"></i>  From <span className='green'>|</span>  {trip.from}   <span className='space'>  To <span className='green'>|</span>  {trip.to}</span></h5>

            <h5 className="previewcardh5 fw-bold"><i className="fa-solid fa-weight-hanging"></i>Available Weight <span className='green'>|</span>  {trip.AvailableWeight} KG </h5>
            <h5 className="previewcardh5 fw-bold "><i className="fa-solid fa-hand-holding-dollar"></i> UnAcceptable Packages <span className='green'>|</span> {trip.unAcceptablaPackage}</h5> 
            <h5 className="previewcardh5 fw-bold "><i className="fa-solid fa-sack-dollar"></i>Trip Time <span className='green'>|</span> {trip.TripTime} </h5>
            <h5 className="previewcardh5 fw-bold "> <i className="fa-solid fa-location-dot"></i>Trip Date <span className='green'>|</span> {trip.TripDate ? trip.TripDate.split('T')[0] : ""}</h5>
           
          </div>
          
         <br/>
          <button className="btn btn-danger" onClick={() => deleteTrip(trip._id)}>Delete</button>
          <Link to={`/updateDetailsOfTrips/${trip._id}`}> <button  className="lin btn btn-info  ">VIEW DETAILS</button></Link>

       
        </div>
        
      </div>
      
    </div>
    
  </div>

  )
  : null
}

 

</div>


</section>


    <Footer/>
    </>
  )
}

