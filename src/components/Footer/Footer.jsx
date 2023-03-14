

import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <>
      <br />
      <br />
<footer id="footer" className="footer">
  <div className="container">
    <div className="row gy-4">
      <div className="col-lg-5 col-md-12 footer-info">
        <p className="logo d-flex align-items-center">
          <span>Shipped</span>
        </p>
        <p>Our global logistics expertise, advanced
            supply chain technology & customized
            logistics solutions will help you.</p>
        <div className="social-links d-flex mt-4">
          <a href="https://twiitter.com/" className="twitter"><i class="fa-brands fa-twitter"></i></a>
          <a href="https://facebook.com/" className="facebook"><i className="fa-brands fa-facebook-f"/></a>
          <a href="https://instagram.com" className="instagram"><i className="fa-brands fa-instagram"/></a>
          <a href="https://linkedin.com" className="linkedin" > <i className="fa-brands fa-linkedin" /></a>
        </div>
      </div>
      <div className="col-lg-2 col-6 footer-links">
        <h4>Useful Links</h4>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Terms of service</a></li>
          <li><a href="#">Privacy policy</a></li>
        </ul>
      </div>
      <div className="col-lg-2 col-6 footer-links">
        <h4>Our Services</h4>
        <ul>
          <li><a href="#">Web Design</a></li>
          <li><a href="#">Web Development</a></li>
          <li><a href="#">Product Management</a></li>
          <li><a href="#">Marketing</a></li>
          <li><a href="#">Graphic Design</a></li>
        </ul>
      </div>
      <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
        <h4>Contact Us</h4>
        <p>
          A108 Adam Street <br />
          New York, NY 535022<br />
          United States <br /><br />
          <strong>Phone:</strong> +1 5589 55488 55<br />
          <strong>Email:</strong> info@example.com<br />
        </p>
      </div>
    </div>
  </div>
  <div className="container mt-4">
    <div className="copyright">
      © Copyright <strong><span>Wassally</span></strong>. All Rights Reserved
    </div>
    <div className="credits">
      Designed by <a href="https://Wassaly.com/">Wassally Team</a>
    </div>
  </div>
</footer>


      </>
    )
  }
}
