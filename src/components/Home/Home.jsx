import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import style from './Home.module.css'
import { motion as m } from "framer-motion"
import homeImg from '../../assets/images/delivery.svg'




// import Navbar from '../Navbar/Navbar'

export default class Home extends Component {
  render() {
    return (
      <>

  <div>
  <m.section 
  initial={{opacity:0 , x:-20}}
  whileInView={{opacity:1, x:0 ,type:'spring'}}
  transition={{type:'tween',duration:1}}  className="main">

    <div className="container">
      <div className="row">
        <div className="col-sm-12 text-center">
        <div className={style.typing}>
          <m.h2 
            initial={{opacity:0}} 
            whileInView={{opacity:1}}
            transition={{type:'tween', delay:1.2}} className="text-uppercase">
            <p className='shortNote'>W<span className='text-light'>ASALLY</span></p>
          </m.h2>
        </div>

                <br />
                <br />

          <div className="mainText">
            <m.h1
              initial={{opacity:0}}
              whileInView={{opacity:1}}
              transition={{type:'tween', delay:1.4}}>

              WE WILL <span className="green">TRANSFER PACKAGES </span></m.h1>


            <m.h1
            initial={{opacity:0, y:-20}}
              whileInView={{opacity:1, y:0}}
              transition={{type:'tween', delay:1.6}}>
                  
              ANYTHING IN ANY<span className="green">WHERE</span></m.h1>
          </div>
        </div>
      </div>

      <div className="row">
          <div className="offset-md-1 col-sm-12 col-md-5 ">
            
          <img className='img-thumbnail p-lg-0 border-0' src={homeImg} alt="profile img" />

          </div>

          <div className=" text-center offset-md-1 col-sm-12 col-md-4">
            <p className=" mt-5 shortNote">W<span className="green">ASALLY</span> is a social network that 
              connects Shoppers with Travellers. 
              Shoppers can buy all their needs from all around the world and ship with a Traveller already heading 
              their way. Shoppers save money shipping &amp; Travellers make money travelling.</p>
              <Link to="/register"> <h2 className="mt-4"><span className="green">GET</span> STARTED  <i className="fa-solid fa-angles-right"></i>  </h2> </Link>
          </div>

      </div>
    </div>
    <div className="z-50 hidden h-1 rounded-full sm:block bg-gradient-to-r from-emerald-500 via-blue-500 to-emerald-500" style={{width: 'auto', opacity: 1}} />

  </m.section>

  {/* ///////////////////////end section 1////////////////////////// */}


<m.section
  initial={{opacity:0 }}
  whileInView={{opacity:1, x:0 ,type:'spring'}}
  transition={{type:'tween',duration:2}}
 id="services" className="services sections-bg">
  <div className="container" data-aos="fade-up">
    <div className="section-header">
      <m.h2
        initial={{opacity:0 ,x:20 }}
        whileInView={{opacity:1, x:0 ,type:'spring'}}
        transition={{type:'tween',duration:1}}
      >WHY <span>WASSALLY</span></m.h2>
    </div>
    <br />
    <div className="row gy-4" data-aos="fade-up" data-aos-delay={100}>
      <div className="col-lg-4 col-md-6">
        <div className="service-item  position-relative">
          <div className="icon">
          <i className="fa-solid fa-hand-holding-dollar"></i>
          </div>
          <h3>SAVE MONEY SHOPPING</h3>
          <p>Shop from anywhere around the world and don't worry about the shipping headache. Our travellers will handle it.</p>
        </div>
      </div>{/* End Service Item */}
      <m.div
        initial={{opacity:0 }}
        whileInView={{opacity:1, x:0 ,type:'spring'}}
        transition={{type:'tween',duration:1}}
       className="col-lg-4 col-md-6">
        <div className="service-item position-relative">
          <div className="icon">
          <i className="fa-solid fa-sack-dollar"></i>
          </div>
          <h3>MAKE MONEY TRAVELLING</h3>
          <p>Make money while traveling and let your rewards from deliveries cover your travel expenses</p>
        </div>
      </m.div>{/* End Service Item */}
      <m.div
        initial={{opacity:0 }}
        whileInView={{opacity:1, x:0 ,type:'spring'}}
        transition={{type:'tween',duration:1}}
       className="col-lg-4 col-md-6">
        <div className="service-item position-relative">
          <div className="icon">
          <i className="fa-solid fa-handshake-angle"></i>
          </div>
          <h3>VERIFIED SHOPPERS & TRAVELLERS</h3>
          <p>Trust is our top priority in wasally</p>
        </div>
      </m.div>{/* End Service Item */}
      <m.div
        initial={{opacity:0 }}
        whileInView={{opacity:1, x:0 ,type:'spring'}}
        transition={{type:'tween',duration:2}}
       className="col-lg-4 col-md-6">
        <div className="service-item position-relative">
          <div className="icon">
          <i className="fa-solid fa-truck"></i>
          </div>
          <h3>GUARANTEED DELIVERY</h3>
          <p>The travellers buy the items which guarantees delivery for the shopper</p>
        </div>
      </m.div>{/* End Service Item */}
      <m.div
              initial={{opacity:0 }}
              whileInView={{opacity:1, x:0 ,type:'spring'}}
              transition={{type:'tween',duration:2}}
       className="col-lg-4 col-md-6">
        <div className="service-item position-relative">
          <div className="icon">
          <i className="fa-solid fa-cart-shopping"></i>
          </div>
          <h3>SEVERAL PAYMENT OPTIONS</h3>
          <div className="row">
            <div className="col-4 brand">
              <m.img
                      initial={{opacity:0,x:-10 }}
                      whileInView={{opacity:1, x:0 ,type:'spring'}}
                      transition={{type:'tween',duration:2}} 
               src={require('../../assets/images/payment-method.png')} alt="payment" />
              <p>Cash Collect</p>
            </div>
            <div className="col-4  brand">
              <m.img
                      initial={{opacity:0 ,x:-15 }}
                      whileInView={{opacity:1, x:0 ,type:'spring'}}
                      transition={{type:'tween',duration:2}}
               src={require('../../assets/images/Fawry.png')} alt="fawry" />
              <p>Fawry Stores</p>
            </div>
            <div className="col-4 brand">
              <m.img
                      initial={{opacity:0 ,x:-20 }}
                      whileInView={{opacity:1, x:0 ,type:'spring'}}
                      transition={{type:'tween',duration:2}}
               src={require('../../assets/images/aman.png')} alt="aman" />
              <p>Aman Stores</p>
            </div>
          </div>
        </div>
      </m.div>{/* End Service Item */}
      <m.div
              initial={{opacity:0 }}
              whileInView={{opacity:1, x:0 ,type:'spring'}}
              transition={{type:'tween',duration:2}}
       className="col-lg-4 col-md-6">
        <div className="service-item position-relative">
          <div className="icon">
          <i className="fa-solid fa-user-shield"></i>
          </div>
          <h3>SAFE FOR TRAVELLERS</h3>
          <p>The travellers know exactly what they are buying and transporting in their luggage and their payment is guaranteed upon delivery.</p>
        </div>
      </m.div>{/* End Service Item */}
    </div>
  </div>
</m.section>

  <br />
  <br />
   {/* ======= Frequently Asked Questions Section =======  */}
  <section id="faq" className="faq">
    <div className="container" data-aos="fade-up">
      <div className="row gy-4">
        <div className="col-lg-4">
          <m.div 
                      initial={{opacity:0, x:-30 }}
                      whileInView={{opacity:1, x:0 ,type:'spring'}}
                      transition={{ type:'tween',duration:2}}
           className="content px-xl-5">
            <h3>Frequently Asked <strong>Questions</strong></h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
            </p>
          </m.div>
        </div>
        <div className="col-lg-8">
          <div className="accordion accordion-flush" id="faqlist" data-aos="fade-up" data-aos-delay={100}>
            <m.div
                        initial={{opacity:0, x:40 }}
                        whileInView={{opacity:1, x:0 ,type:'spring'}}
                        transition={{type:'tween',duration:2}}
             className="accordion-item">
              <h3 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                  <span className="num">1.</span>
                  Non consectetur a erat nam at lectus urna duis?
                </button>
              </h3>
              <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                <div className="accordion-body">
                  Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                </div>
              </div>
            </m.div> {/* # Faq item*/}
            <m.div
                        initial={{opacity:0 ,x:-40 }}
                        whileInView={{opacity:1, x:0 ,type:'spring'}}
                        transition={{type:'tween',duration:2.1}}
             className="accordion-item">
              <h3 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                  <span className="num">2.</span>
                  Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?
                </button>
              </h3>
              <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                <div className="accordion-body">
                  Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                </div>
              </div>
            </m.div>{/* # Faq item*/}
            <m.div
                        initial={{opacity:0,x:40 }}
                        whileInView={{opacity:1, x:0 ,type:'spring'}}
                        transition={{type:'tween',duration:2.2}}
             className="accordion-item">
              <h3 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                  <span className="num">3.</span>
                  Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?
                </button>
              </h3>
              <div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                <div className="accordion-body">
                  Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                </div>
              </div>
            </m.div>{/* # Faq item*/}
            <m.div
                        initial={{opacity:0,x:-40 }}
                        whileInView={{opacity:1, x:0 ,type:'spring'}}
                        transition={{type:'tween',duration:2.3}}
             className="accordion-item">
              <h3 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-4">
                  <span className="num">4.</span>
                  Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
                </button>
              </h3>
              <div id="faq-content-4" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                <div className="accordion-body">
                  Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                </div>
              </div>
            </m.div>{/* # Faq item*/}
            <m.div
                        initial={{opacity:0,x:40 }}
                        whileInView={{opacity:1, x:0 ,type:'spring'}}
                        transition={{type:'tween',duration:2.4}}
              className="accordion-item">
              <h3 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-5">
                  <span className="num">5.</span>
                  Tempus quam pellentesque nec nam aliquam sem et tortor consequat?
                </button>
              </h3>
              <div id="faq-content-5" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                <div className="accordion-body">
                  Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
                </div>
              </div>
            </m.div>{/* # Faq item*/}
          </div>
        </div>
      </div>
    </div>
  </section>

     {/* End Frequently Asked Questions Section  */}

      {/* ======= Contact Section =======  */}
<m.section
              initial={{opacity:0  }}
              whileInView={{opacity:1, x:0 ,type:'spring'}}
              transition={{type:'tween',duration:2}} 
 id="contact" className="contact">
  <div className="container" data-aos="fade-up">
    <div className="section-header">
      <m.h2
              initial={{opacity:0 ,x:20 }}
              whileInView={{opacity:1, x:0 ,type:'spring'}}
              transition={{type:'tween',duration:2}} 
      >C<span>ontact</span></m.h2>
      <m.h6
              initial={{opacity:0 ,x:20 }}
              whileInView={{opacity:1, x:0 ,type:'spring'}}
              transition={{type:'tween',duration:2}}
      >IF YOU HAVE MORE QUESTION ?</m.h6>
    </div>
    <div className="row gx-lg-0 gy-4">
      <div className="col-lg-4">
        <div className="info-container d-flex flex-column align-items-center justify-content-center">
          <m.div
              initial={{opacity:0 ,x:-20 }}
              whileInView={{opacity:1, x:0 ,type:'spring'}}
              transition={{type:'tween',duration:2}}
           className="info-item d-flex">
          <i className="fa-solid fa-location-dot"></i>
            <div>
              <h4>Location:</h4>
              <p>A108 Adam Street, New York, NY 535022</p>
            </div>
          </m.div>{/* End Info Item */}
          <m.div
                  initial={{opacity:0 ,x:-20 }}
                  whileInView={{opacity:1, x:0 ,type:'spring'}}
                  transition={{type:'tween',duration:2}}
           className="info-item d-flex">
          <i className="fa-solid fa-envelope"></i>
            <div>
              <h4>Email:</h4>
              <p>info@example.com</p>
            </div>
          </m.div>{/* End Info Item */}
          <m.div
                  initial={{opacity:0 ,x:-20 }}
                  whileInView={{opacity:1, x:0 ,type:'spring'}}
                  transition={{type:'tween',duration:2}}
           className="info-item d-flex">
          <i className="fa-solid fa-mobile-screen-button"></i>
          <div>
              <h4>Call:</h4>
              <p>+1 5589 55488 55</p>
            </div>
          </m.div>{/* End Info Item */}
          <m.div
                  initial={{opacity:0 ,x:-20 }}
                  whileInView={{opacity:1, x:0 ,type:'spring'}}
                  transition={{type:'tween',duration:2}}
           className="info-item d-flex">
          <i className="fa-regular fa-clock"></i>
            <div>
              <h4>Open Hours:</h4>
              <p>Mon-Sat: 11AM - 23PM</p>
            </div>
          </m.div>{/* End Info Item */}
        </div>
      </div>
      <div className="col-lg-8">
        <form   className="php-email-form">
          <div className="row">
            <div className="col-md-6 form-group">
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
            </div>
          </div>
          <div className="form-group mt-3">
            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
          </div>
          <div className="form-group mt-3">
            <textarea className="form-control" name="message" rows={7} placeholder="Message" required defaultValue={""} />
          </div>
          <div className="my-3">
            <div className="loading">Loading</div>
            <div className="error-message" />
            <div className="sent-message">Your message has been sent. Thank you!</div>
          </div>
          <m.div
                        initial={{opacity:0  }}
                        whileInView={{opacity:1, x:0 ,type:'spring'}}
                        transition={{type:'tween',duration:3}} 
           className="text-center"><button type="submit">Send Message</button></m.div>
        </form>
      </div>{/* End Contact Form */}
    </div>
  </div>
</m.section>

     {/* End Contact Section  */}
</div>
<br />
<br />
<br />
<br />
<Footer/>

       
      </>

    )
  }
}
