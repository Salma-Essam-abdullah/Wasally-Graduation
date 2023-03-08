import React,{useState} from 'react'
import Footer from '../Footer/Footer'
import personImage from '../../assets/images/pic6.png'
import personImage1 from '../../assets/images/pic7.png'
import personImage2 from '../../assets/images/pic8.png'
import personImage3 from '../../assets/images/pic9.png'
import { Link } from 'react-router-dom'


export default function Request2() {
  
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
 <button name="second"  className={ activeButton === "second" ? `${activeButton}` : ""}
          onClick={clickedButtonHandler}>
          Buy Something
          </button>
    </Link>
<Link to="">
    <button name="first"
          className={activeButton === "first" ? `${activeButton}` : ""}
          onClick={clickedButtonHandler}>
            Deliver Something
          </button>
          </Link>
  </div>
  
 </div>
  </div>
  <div className="row mt-5">
    
    <div className="preview-card">
      <div className="preview-card__wrp">
        <div className="preview-card__item">
          <div className="preview-card__img">
            <img src={personImage}  alt="person" />
          </div>
          <div className="preview-card__content">
            <h2 className="preview-card__code"> Farah Abdelshafy</h2>
   
            <div className="preview-card__title">Shipment | Dress</div>
            <h5 className="previewcardh5 "> <i class="fa-solid fa-train-subway"></i>  From |  Cairo   <span className='space'>  To | Suez</span></h5>
            
            <h5 className="previewcardh5">
            <i class="fa-solid fa-coins"></i>
              Reward Starts from 300 L.E.
            </h5>
           
              
         <h5 className="preview-card__text">
              
              <i class="fa-solid fa-weight-hanging"></i> 
              
              0.7 KG</h5>
              
           
          </div>
          <a href="#" className="preview-card__button">VIEW DETAILS</a>
        </div>
      </div>
    </div>
  </div>
 
  <div className="row mt-3">
    <div className="preview-card">
      <div className="preview-card__wrp">
        <div className="preview-card__item">
          <div className="preview-card__img">
            <img src={personImage1}  alt="person" />
          </div>
          <div className="preview-card__content">
            <h2 className="preview-card__code">Aya Aqil Hamza</h2>
            <div className="preview-card__title">Shipment | Coat</div>
            <h5 className="previewcardh5 "> <i class="fa-solid fa-train-subway"></i>  From | Alexandria   <span className='space'>  To | Cairo</span></h5>
            
            <h5 className="previewcardh5">
            <i class="fa-solid fa-coins"></i>
              Reward Starts from 140 L.E.
            </h5>
           
              
         <h5 className="preview-card__text">
              
              <i class="fa-solid fa-weight-hanging"></i> 
              
              0.7 KG</h5>
              
          </div>
          <a href="#" className="preview-card__button">VIEW DETAILS</a>
        </div>
      </div>
    </div>
  </div>
  <div className="row mt-3">
    <div className="preview-card">
      <div className="preview-card__wrp">
        <div className="preview-card__item">
          <div className="preview-card__img">
            <img src={personImage2}  alt="person" />
          </div>
          <div className="preview-card__content">
            <h2 className="preview-card__code">Yehia Hamza</h2>
            <div className="preview-card__title">Shipment | Suit</div>
            <h5 className="previewcardh5 "> <i class="fa-solid fa-train-subway"></i>  From |  Cairo   <span className='space'>  To | Gouna</span></h5>
            
            <h5 className="previewcardh5">
            <i class="fa-solid fa-coins"></i>
              Reward Starts from 600 L.E.
            </h5>
           
              
         <h5 className="preview-card__text">
              
              <i class="fa-solid fa-weight-hanging"></i> 
              
              1.5 KG</h5>
              
           
          </div>
          <a href="#" className="preview-card__button">VIEW DETAILS</a>
        </div>
      </div>
    </div>
  </div>
  <div className="row mt-3">
    <div className="preview-card">
      <div className="preview-card__wrp">
        <div className="preview-card__item">
          <div className="preview-card__img">
            <img src={personImage3}  alt="person" />
          </div>
          <div className="preview-card__content">
            <h2 className="preview-card__code">Mohamed Amin</h2>
            <div className="preview-card__title">Shipment | Bag</div>
            <h5 className="previewcardh5 "> <i class="fa-solid fa-train-subway"></i>  From | Siwa   <span className='space'>  To | Cairo</span></h5>
            
            <h5 className="previewcardh5">
            <i class="fa-solid fa-coins"></i>
              Reward Starts from 320 L.E.
            </h5>
           
              
         <h5 className="preview-card__text">
              
              <i class="fa-solid fa-weight-hanging"></i> 
              
              5KG</h5>
              
           
          </div>
          <a href="#" className="preview-card__button">VIEW DETAILS</a>
        </div>
      </div>
    </div>
  </div>
</div>

</section>


    <Footer/>
    </>
  )
}
