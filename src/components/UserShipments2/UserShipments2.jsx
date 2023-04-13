import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Footer from '../Footer/Footer'

import { Link } from 'react-router-dom'


export default function UserShipments2() {
  const [requestData,setRequestData]=useState([]);
  const [activeButton, setActiveButton] = useState('first')
  let encodedToken = localStorage.getItem('userToken');
  async function getRequest(){
    axios.get(`http://localhost:3000/v1/requests/userviewrequests`,{ headers: {"Authorization" : `Bearer ${encodedToken}`} }).then(
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
  getRequest();
    
    },[]);
 

    
    const deleteRequest = (id) => {
      axios.delete(`http://localhost:3000/v1/requests/${id}`  , {headers: { Authorization: `Bearer ${encodedToken}` }})
        .then(response => {
          console.log(response.date)
          getRequest();
        })
        .catch(error => {
         console.log(error)
        });
    }  


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
    <Link to="/userShipment">
 <button name="second"  className={ activeButton === "second" ? `${activeButton}` : ""}
          onClick={clickedButtonHandler}>
          Buy Something
          </button>
    </Link>
<Link to="/userShipment2">
    <button name="first"
          className={activeButton === "first" ? `${activeButton}` : ""}
          onClick={clickedButtonHandler}>
            Deliver Something
          </button>
          </Link>
  </div>
  
 </div>
  </div>

  {requestData ?  requestData.map((request,index)=>
  request.buyOrdeliver ==='deliver' ? 
  <div key={index} className="row mt-3">
    <div className="preview-card ">
      <div className="preview-card__wrp ">
        <div className="preview-card__item">
        

          <div className="preview-card__content">
         
          
            <div className="preview-card__title ">Shipment | {request.item}</div>
            <h5 className="previewcardh5 fw-bold"> <i className="fa-solid fa-train-subway"></i>  From <span className='green'>|</span>  {request.from}   <span className='space'>  To <span className='green'>|</span>  {request.to}</span></h5>
            <h5 className="previewcardh5 fw-bold "><i className="fa-solid fa-bars"></i>Category <span className='green'>|</span> {request.category}</h5> 
            <h5 className="previewcardh5 fw-bold"><i className="fa-solid fa-weight-hanging"></i>Weight <span className='green'>|</span>  {request.weight} KG </h5>
            <h5 className="previewcardh5 fw-bold "><i className="fa-solid fa-sack-dollar"></i>Reward <span className='green'>|</span> {request.reward} L.E</h5>
            <h5 className="previewcardh5 fw-bold "> <i className="fa-solid fa-location-dot"></i>Your Location <span className='green'>|</span> {request.to} : {request.location}</h5>
            <h5  className="previewcardh5 fw-bold "><i className="fa-solid fa-location-dot"></i>Target Location <span className='green'>|</span>  {request.targetLocation}</h5> 
            <h5  className="previewcardh5 fw-bold "><i className="fa-solid fa-phone-volume"></i>Phone Number <span className='green'>|</span>  {request.anotherPhone}</h5> 
          </div>

          
        
          <button className="btn btn-danger" onClick={() => deleteRequest(request.id)}>Delete</button>
          <Link to={`/UpdateDetailsOfShipments/${request.id}`}> <button  className="lin btn btn-info  ">VIEW DETAILS</button></Link>

        </div>
      </div>
    </div>
  </div>
  : null
  )
  : <h1 className='text-center'>No Shipments yet</h1>
}
</div>

</section>


    <Footer/>
    </>
  )
}
