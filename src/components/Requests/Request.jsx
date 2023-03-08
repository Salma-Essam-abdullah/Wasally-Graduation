import React,{useState} from 'react'
import Footer from '../Footer/Footer'
import personImage from '../../assets/images/pic1.png'
import personImage1 from '../../assets/images/pic3.png'
import personImage2 from '../../assets/images/pic5.png'
import personImage3 from '../../assets/images/pic12.png'
import { Link } from 'react-router-dom'

export default function Request() {
  
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
  <div className="row mt-5">
    
    <div className="preview-card">
      <div className="preview-card__wrp">
        <div className="preview-card__item">
          <div className="preview-card__img">
            <img src={personImage}  alt="person" />
          </div>
          <div className="preview-card__content">
            <h2 className="preview-card__code">youssief harron </h2>
            <div className="preview-card__title">Shipment | Bag</div>
            <h5 className="previewcardh5 "> <i class="fa-solid fa-train-subway"></i>  From | Northern coast   <span className='space'>  To | Alex</span></h5>
            
            <h5 className="previewcardh5">
            <i class="fa-solid fa-coins"></i>
              Reward Starts from 230 L.E
            </h5>
           
              
         <h5 className="preview-card__text">
              
              <i class="fa-solid fa-weight-hanging"></i> 
              
              2 KG</h5>
              
           
           
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
            <h2 className="preview-card__code">Ahmed Kamal</h2>
            <div className="preview-card__title">Shipment | Shoes</div>
            <h5 className="previewcardh5 "> <i class="fa-solid fa-train-subway"></i>  From |  Alexandria   <span className='space'>  To | Cairo</span></h5>
            
            <h5 className="previewcardh5">
            <i class="fa-solid fa-coins"></i>
              Reward Starts from 100 L.E
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
            <h2 className="preview-card__code">Sara Hany</h2>
            <div className="preview-card__title">Shipment | Coat</div>
            <h5 className="previewcardh5 "> <i class="fa-solid fa-train-subway"></i>  From |  Dahab   <span className='space'>  To | Cairo</span></h5>
            
            <h5 className="previewcardh5">
            <i class="fa-solid fa-coins"></i>
              Reward Starts from 400 L.E.
            </h5>
           
              
         <h5 className="preview-card__text">
              
              <i class="fa-solid fa-weight-hanging"></i> 
              
              1 KG</h5>
              
           
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
            <h2 className="preview-card__code">Aya </h2>
            <div className="preview-card__title">Shipment | T-shirt</div>
            <h5 className="previewcardh5 "> <i class="fa-solid fa-train-subway"></i>  From |  Alexandria   <span className='space'>  To | Giza</span></h5>
            
            <h5 className="previewcardh5">
            <i class="fa-solid fa-coins"></i>
              Reward Starts from 65 L.E.
            </h5>
           
              
         <h5 className="preview-card__text">
              
              <i class="fa-solid fa-weight-hanging"></i> 
              
              0.3 KG</h5>
              
           
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
