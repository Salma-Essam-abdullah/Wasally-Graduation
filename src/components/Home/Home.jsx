import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
// import Navbar from '../Navbar/Navbar'

export default class Home extends Component {
  render() {
    return (
      <>
      {/* <Navbar/> */}

        <div>
  <section className="main">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 text-center">
          <div className="mainText">
            <h1>WE WILL <span className="green">TRANSFER PACKAGES </span></h1>
            <h1>ANYTHING IN ANY<span className="green">WHERE</span></h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="offset-md-1 col-sm-12 col-md-5 ">
          <img className="mt-3 p-3" src={require('../../assets/images/homeimg.png')}alt="delivery" />
        </div>
        <div className=" text-center offset-md-1 col-sm-12 col-md-4">
          <p className=" mt-5 shortNote">W<span className="green">ASALLY</span> is a social network that 
            connects Shoppers with Travellers. 
            Shoppers can buy all their needs from all around the world and ship with a Traveller already heading 
            their way. Shoppers save money shipping &amp; Travellers make money travelling.</p>
            <Link to="/register"> <h2 className="mt-4"><span className="green">GET</span> STARTED  <i class="fa-solid fa-angles-right"></i>  </h2> </Link>
        </div>
      </div>
    </div>
  </section>
  <section className="reasons wt-5 text-center">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 mb-3">
          <h2>WHY <span className="green">WASALLY</span></h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 mb-2 blackBox">
          <img src={require('../../assets/images/shopping.png')} alt="shopping" />
          <h4 className="mb-4">SAVE MONEY SHOPPING</h4>
          <p>Shop from anywhere around the world and don't worry about the shipping headache. Our travellers will handle it</p>
        </div>
        <div className="col-lg-4  mb-2 whiteBox">
          <img src={require('../../assets/images/person.png')} alt="person" />
          <h4 className="mb-4">MAKE MONEY TRAVELLING</h4>
          <p>Make money while traveling and let your rewards from deliveries cover your travel expenses</p>
        </div>
        <div className="col-lg-4 mb-2 blackBox">
          <img src={require('../../assets/images/handshake.png')} alt="handshake" />
          <h4 className="mb-4">VERIFIED SHOPPERS &amp; TRAVELLERS</h4>
          <p>Trust is our top priority in wasally</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 mb-2 whiteBox">
          <img src={require('../../assets/images/package.png')} alt="package" />
          <h4 className="mb-4">GUARANTEED DELIVERY</h4>
          <p>The travellers buy the items which guarantees delivery for the shopper</p>
        </div>
        <div className="col-lg-4  mb-2 blackBox">
          <img src={require('../../assets/images/loan.png')} alt="loan" />
          <h4 className="mb-4">SEVERAL PAYMENT OPTIONS</h4>
          <div className="row">
            <div className="col-4 brand">
              <img src={require('../../assets/images/payment-method.png')} alt="payment" />
              <p>Cash Collect</p>
            </div>
            <div className="col-4  brand">
              <img src={require('../../assets/images/Fawry.png')} alt="fawry" />
              <p>Fawry Stores</p>
            </div>
            <div className="col-4 brand">
              <img src={require('../../assets/images/aman.png')} alt="aman" />
              <p>Aman Stores</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-2 whiteBox">
          <img src={require('../../assets/images/home.png')} alt="home" />
          <h4 className="mb-4">SAFE FOR TRAVELLERS</h4>
          <p>The travellers know exactly what they are buying and transporting in their luggage and their payment is guaranteed upon delivery</p>
        </div>
      </div>
    </div>
  </section>
  <section className="faq">
    <div className="container">
      <div className="row">
        <div className="col-5 offset-2">
          <h3>Shopper FAQ</h3>
        </div>
        <div className="col-5">
          <h3>Traveller FAQ</h3>
        </div>
      </div>
      <hr />
      <div className="row mt-5">
        <div className="col-8 offset-1">
          <a href><p>How Does It Work For Shoppers?</p></a> 
          <a href> <p>What Should Be A Traveller’s Commitment Towards A Package?</p></a>
          <a href>  <p>What If My Package Was In A Bag That Got Lost By An Airline?</p> </a>
          <a href><p>What If The Traveler Delays Or Cancels His Trip?</p></a>
          <button>HAVE MORE QUESTIONS ?</button>
        </div>
        <div className="col-3">
          <img src={require('../../assets/images/commentator.png')} alt="customer service" />
        </div>
      </div>
    </div>
  </section>
  <section className="contact">
    <div className="container ">
      <div className="row">
        <div className="col-md-7 col-sm-12">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <span><img src={require('../../assets/images/telephone.png')} alt="telephone" /><h4>CALL US</h4></span>
              <p>1 (234) 567-891, 1 (234) 987-654</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <span><img src={require('../../assets/images/location.png')} alt="location" /><h4>LOCATION</h4></span>
              <p> Alexandria | Egypt   .Smouha </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <span><img src={require('../../assets/images/24-hours.png')} alt="24 hours"/><h4>BUSINESS HOURS</h4></span>
              <p>Mon – Fri …… 10 am – 8 pm, Sat, Sun ....… Closed
              </p>
            </div>
          </div>   
        </div>
        <div className="col-md-5 col-sm-12">
          <div className="formContact">
            <h2>CONTACT US</h2>
            <form action>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email Address" />
              <input type="text" placeholder="Message" />
              <br />
              <button type="submit">SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
<Footer/>

       
      </>

    )
  }
}
