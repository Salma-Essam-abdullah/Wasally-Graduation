import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Footer from '../Footer/Footer'
import personImage from '../../assets/images/pic1.png'
import { Link } from 'react-router-dom'

export default function Request() {
  const [requestData,setRequestData]=useState([])
  let encodedToken = localStorage.getItem('userToken');
  async function getProfile(){
    axios.get(`http://localhost:3000/v1/requests/viewAllRequests`,{ headers: {"Authorization" : `Bearer ${encodedToken}`} }).then(
        (response)=>{
            console.log(response.data)
            setRequestData(response.data.requests)

        }
    ).catch(
        (error)=>{
            console.log(error)

        }
    )
}
useEffect(()=>{
    getProfile();
    
    },[]);
  
  const [activeButton, setActiveButton] = useState('first');

 
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
    <Link to="/request">
 <button name="first"  className={ activeButton === "first" ? `${activeButton}` : ""}
          onClick={clickedButtonHandler}>
          Buy Something
          </button>
    </Link>
    <Link to="/request2">
    <button name="second"
          className={activeButton === "second" ? `${activeButton}` : ""}
          onClick={clickedButtonHandler}>
            Deliver Something
          </button>
      </Link>
  </div>
 </div>
  </div>
  {requestData.map((request,index)=>
  <div key={index} className="row mt-3">
    <div className="preview-card ">
      <div className="preview-card__wrp ">
        <div className="preview-card__item">
          <div className="preview-card__img">
            <img src={personImage}  alt="person" />
          </div>
          <div className="preview-card__content">
            <h2 className="preview-card__code   ">youssief harron {request.name} </h2>
            <div className="preview-card__title ">Shipment | {request.item}</div>
            <h5 className="previewcardh5 "><i className="fa-solid fa-bars"></i>Category | {request.category}</h5> 
            <h5 className="previewcardh5 "> <i className="fa-solid fa-train-subway"></i>  From | {request.from}   <span className='space'>  To | {request.to}</span></h5>
            <h5 className="previewcardh5 "> <i className="fa-solid fa-location-dot"></i>  Location | {request.location}   <span className='space'>  Target location | {request.targetLocation}</span></h5>
            <h5 className="previewcardh5 "><i className="fa-solid fa-coins"></i>Reward Starts from 230 L.E</h5> 
            <h5 className="preview-card__text "><i className="fa-solid fa-weight-hanging"></i>  {request.weight} KG </h5>
          </div>
          
          <Link to="/home" className="lin btn btn-info  ">VIEW DETAILS</Link>        
          
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
