import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import DirectionsTransitIcon from '@mui/icons-material/DirectionsTransit';
import WhereToVoteIcon from '@mui/icons-material/WhereToVote';
import PaidIcon from '@mui/icons-material/Paid';
export default function Request() {

  const [requestData,setRequestData]=useState([]);
  const [activeButton, setActiveButton] = useState('first')
  let [userData , setUserData] = useState([])
  let encodedToken = localStorage.getItem('userToken');


  async function getRequest(){
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


async function getUserData(){


  axios.get(`http://localhost:3000/v1/users/allusers`).then(
      (response)=>{
          console.log('use',response.data)
          setUserData(response.data)
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
  

  const clickedButtonHandler = (e) => {
    console.log(e.target);
    const { name } = e.target;
    setActiveButton(name);
    console.log(activeButton);
  };
  

  
  return (
 
    <>


  {/* <section className="request">
    

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

request.buyOrdeliver ==='buy' ? 

  <div key={index} className="row mt-3">
    
    <div className="preview-card ">
      <div className="preview-card__wrp ">
        <div className="preview-card__item">
          <div className="preview-card__img">
           {
           userData.map((user,i)=>user.id===request.userId ? 
            <img key={i} src={user.ProfileImage}  alt="person" /> 
            :null)
          }
        
          </div>

          
          <div className="preview-card__content">
         
            <h2 className="preview-card__code">{userData.map((user)=>user.id ===request.userId ? user.name : '')} </h2>
            <div className="preview-card__title ">Shipment | {request.item}</div>
            <h5 className="previewcardh5 fw-bold"> <i className="fa-solid fa-train-subway"></i>  From <span className='green'>|</span>  {request.from}   <span className='space'>  To <span className='green'>|</span>  {request.to}</span></h5>
            <h5 className="previewcardh5 fw-bold "> <i className="fa-solid fa-location-dot"></i>Store Name <span className='green'>|</span> {request.storeName}   <span className='space'>  Store location <span className='green'>|</span> {request.storeLocation}</span></h5>
            <h5 className="previewcardh5 fw-bold "><i className="fa-solid fa-bars"></i>Category <span className='green'>|</span> {request.category}</h5> 
            <h5 className="previewcardh5 fw-bold"><i className="fa-solid fa-weight-hanging"></i>Weight <span className='green'>|</span>  {request.weight} KG </h5>
            <h5 className="previewcardh5 fw-bold "><i className="fa-solid fa-hand-holding-dollar"></i> Price <span className='green'>|</span> {request.price} L.E</h5> 
            <h5 className="previewcardh5 fw-bold "><i className="fa-solid fa-sack-dollar"></i>Reward <span className='green'>|</span> {request.reward} L.E</h5>
            <h5 className="previewcardh5 fw-bold "> <i className="fa-solid fa-location-dot"></i>Your Location <span className='green'>|</span> {request.to} : {request.location}</h5>
            <h5  className="previewcardh5 fw-bold "><i className="fa-solid fa-phone-volume"></i>Phone Number <span className='green'>|</span>  {request.anotherPhone}</h5> 
          </div>
         <br/>
         
          <Link to={`/detailspfshippmentuser1/${request.id}`}> <button  className="lin btn btn-info  ">VIEW DETAILS</button></Link>
       
        </div>
      </div>
    </div>
  </div>
   :null
  )}

 

</div>


</section> */}






<section id="portfolio" className="portfolio sections-bg">
  <div className="container" data-aos="fade-up">
    <div className="section-header">
      <h2>Shipments</h2>
      </div>
    <div className="portfolio-isotope" data-portfolio-filter="*" data-portfolio-layout="masonry" data-portfolio-sort="original-order" data-aos="fade-up" data-aos-delay={100}>
      <div>
        <ul className="portfolio-flters">
      
       <Link to="/request">
       <button name="first"  className={ activeButton === "first" ? `${activeButton}` : ""}
          onClick={clickedButtonHandler} >   
         Buy
       </button>
        </Link> 
        
    
          <Link to="/request2">
          <button name="second" className={activeButton === "second" ? `${activeButton}` : "ss"}
          onClick={clickedButtonHandler}> 
          {/* <li data-filter=".filter-app">Deliver</li> */}
          Deliver
          </button>
         </Link>
        </ul>
      </div>
      
      <div  className="row gy-4 portfolio-container">
      {requestData.map((request,index)=>

request.buyOrdeliver ==='buy' ? 
        <div key={index} className="col-xl-3 col-md-6 portfolio-item filter-app">
          <div  className="portfolio-wrap">
          {
           userData.map((user,i)=>user.id===request.userId ? 
            <img key={i} src={user.ProfileImage ? user.ProfileImage : 'No'} className="img-fluid" alt="img" />
            :null)
          }
         
            <div className="portfolio-info">
              <h4>{userData.map((user)=>user.id ===request.userId ? user.name : '')}</h4>
              <h3>{request.item}</h3>
              <p><DirectionsTransitIcon/> From - {request.from}</p>
              <p><WhereToVoteIcon/>To - {request.to}</p>
              <p><PaidIcon/> Reward - {request.reward}</p>
              <Link to={`/detailspfshippmentuser1/${request.id}`}>   <button className=" orangeButton btn btn-success ">View Details</button></Link>
            </div>
          </div>
          
       
        </div>      
        :null
      )}
      </div>
   
    </div>
  </div>
</section>



    <Footer/>
    </>
  )
}

