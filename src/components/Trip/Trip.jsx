import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import DirectionsTransitIcon from '@mui/icons-material/DirectionsTransit';
import WhereToVoteIcon from '@mui/icons-material/WhereToVote';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ScheduleIcon from '@mui/icons-material/Schedule';
const BASE_URL = process.env.REACT_APP_API_URI;

export default function Trip() {
 
    const [requestData,setRequestData]=useState([]);
    let [userData , setUserData] = useState([])
    let encodedToken = localStorage.getItem('userToken');

  async function getRequest(){
    axios.get(`${BASE_URL}/v1/trips/view`,{ headers: {"Authorization" : `Bearer ${encodedToken}`} }).then(
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


  axios.get(`${BASE_URL}/v1/travelers/viewAllTravelers`,{ headers: {"Authorization" : `Bearer ${encodedToken}`} }).then(
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
<section id="portfolio" className="portfolio sections-bg">
  <div className="container" data-aos="fade-up">
    <div className="section-header">
      <h2>Trips</h2>
      </div>
    <div className="portfolio-isotope" data-portfolio-filter="*" data-portfolio-layout="masonry" data-portfolio-sort="original-order" data-aos="fade-up" data-aos-delay={100}>
      <div  className="row gy-4 portfolio-container">
      {requestData && requestData.map((request,index)=>

        <div key={index} className="col-xl-3 col-md-6 portfolio-item filter-app">
          <div  className="portfolio-wrap">
          
          {
           userData.map((traveler,i)=>traveler._id === request.Traveler ? 
            <img key={i} src={traveler.userId.ProfileImage}  alt="person" /> 
            :null)
            }
            <div className="portfolio-info">
            
            <h4>{userData.map((traveler)=>traveler._id === request.Traveler ? traveler.userId.name : '')}</h4>
           
              <p><DirectionsTransitIcon/> From - {request.from}</p>
              <p><WhereToVoteIcon/>To - {request.to}</p>
              <p><CalendarMonthIcon/>Date -{request.TripDate ? request.TripDate.split('T')[0] : ""}</p>
              <p><ScheduleIcon/>Time -{request.TripTime}</p>
              
              <Link to={`/detailspfshippmentuser/${request._id}`}>   <button className=" orangeButton btn btn-success ">View Details</button></Link>
             
            </div>
          </div>
          
       
        </div> 
      )
}     
       
      </div>
   
    </div>
  </div>
</section>


        <Footer/>

    </>
  )
}
