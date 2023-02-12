

import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <>
       <div>
  <section className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h4>Shipped</h4>
          <p>Our global logistics expertise, advanced
            supply chain technology &amp; customized
            logistics solutions will help you</p>
        </div>
        <div className="col-md-2">
          <ul>
            <li><h4>Company</h4></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Our Blog</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul></div>
        <div className="col-md-2">
          <ul>
            <li><h4>Support</h4></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms &amp; Conditions</a></li>
            <li><a href="#">Shipping Policy</a></li>
          </ul>
        </div>
        <div className="col-md-2">
          <ul>
            <li> <h4>Contact Us</h4></li>
            <li><a href="#">Website</a></li>
            <li><a href="#">Email</a></li>
            <li><a href="#">Whatsapp</a></li>
          </ul>
        </div>
        <div className="col-md-2">
          <ul>
            <li> <h4>Office</h4></li>
            <li><p>Smouha - Alexandria </p></li>
            <li><p>Egypt</p></li>
            <li><p>+24255122</p></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <p>© 2023 Wasally inc. All Rights Reserved.</p>
        </div>
        <div className="col-md-6">
          <ul>
            <li><a href="https://www.facebook.com/" target={'_blank'}><img src={require('../../assets/images/facebook.png')} alt="facebook" /></a></li>
            <li><a href="https://www.instagram.com/" target={'_blank'}><img src={require('../../assets/images/instagram.png')} alt="instagram" /></a></li>
            <li><a href="https://www.whatsapp.com/" target={'_blank'}><img src={require('../../assets/images/whatsapp.png')} alt="whatsapp" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</div>

        </>
    )
  }
}
