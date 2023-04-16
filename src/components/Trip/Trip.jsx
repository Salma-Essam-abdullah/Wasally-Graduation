import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

export default function Trip() {

    const [requestData,setRequestData]=useState([]);
    let [userData , setUserData] = useState([])
    let encodedToken = localStorage.getItem('userToken');

  async function getRequest(){
    axios.get(`http://localhost:3000/v1/trips/view`,{ headers: {"Authorization" : `Bearer ${encodedToken}`} }).then(
        (response)=>{
            console.log("ay 7aga",response.data.trips)
            setRequestData(response.data.trips)

        }
    ).catch(
        (error)=>{
            console.log(error)

        }
    )
}


async function getUserData(){


  axios.get(`http://localhost:3000/v1/travelers/viewAllTravelers`,{ headers: {"Authorization" : `Bearer ${encodedToken}`} }).then(
      (response)=>{
          console.log('bl7',response.data.travelers)
          setUserData(response.data.travelers)
       


      }
  ).catch(
      (error)=>{
          console.log(error)

      }
  )
}
useEffect(()=>{
  getRequest();
  getUserData();
    
    },[]);


  return (
    <>
  <section className="request">
    

 <div className="container">
  <div className="row">
    <div className="col-md-12">
 </div>
  </div>
  {requestData && requestData.map((request,index)=>

  <div key={index} className="row mt-3">
    
    <div className="preview-card ">
      <div className="preview-card__wrp ">
        <div className="preview-card__item">
          <div className="preview-card__img">
           {
           userData.map((traveler,i)=>traveler._id === request.Traveler ? 
            <img key={i} src={traveler.userId.ProfileImage}  alt="person" /> 
            :null)
            }
          </div>
          
          <div className="preview-card__content">
             
            <h2 className="preview-card__code">{userData.map((traveler)=>traveler._id === request.Traveler ? traveler.userId.name : '')} </h2>
            <div className="preview-card__title"><h2 className='fw-bold'><span className='green'>T</span>rip <span>Details </span> </h2> </div>
            <h5 className="previewcardh5 fw-bold"> <i className="fa-solid fa-train-subway"></i>  From <span className='green'>|</span>  {request.from}   <span className='space'>  To <span className='green'>|</span>  {request.to}</span></h5>
            <h5 className="previewcardh5 fw-bold "><i className="fa-solid fa-clock"></i>Trip Date <span className='green'>|</span> {request.TripDate ? request.TripDate.split('T')[0] : "" } </h5>
            <h5 className="previewcardh5 fw-bold "><i className="fa-solid fa-hourglass-half"></i>Trip Time: <span className='green'>|</span> {request.TripTime ? request.TripTime.split('T')[0] : "" } </h5>
            <h5 className="previewcardh5 fw-bold"><i className="fa-solid fa-weight-hanging"></i>Available Weight <span className='green'>|</span>  {request.AvailableWeight} KG </h5>
            <h5 className="previewcardh5 fw-bold "><i className="fa-solid fa-ban"></i> Unacceptable Package: <span className='green'>|</span> {request.unAcceptablaPackage} </h5> 
          </div>
          
          <Link to={`/detailspfshippmentuser/${request._id}`}> <button  className="lin btn btn-info  ">VIEW DETAILS</button></Link>
          
        </div>
      </div>
    </div>
  </div>
  )}

 

</div>

</section>

        <Footer/>

    </>
  )
}
