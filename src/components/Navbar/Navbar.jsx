import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <>
            <section className="navBar " >
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
    <div className="container-fluid ">
      <Link  to="/" className="navbar-brand ms-4" ><span className="green ms-4">W</span>ASALLY <span><p className="green">Ship with a Fellow Traveller</p></span></Link>  
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
          <li className="nav-item ">
            <Link to="/home" className="nav-link active" aria-current="page" >HOME</Link>
          </li>
          <li className="nav-item">
            <Link to="/home" className="nav-link" >SHIPMENTS</Link>
          </li>
          <li className="nav-item">
            <Link to="/home" className="nav-link" >TRIPS</Link>
          </li>
          <li className="nav-item">
            <Link to="/home" className="nav-link">PROFILE</Link>
          </li>
          <li className="nav-item">
            <Link to="/home" className="nav-link">MEDIA</Link>
          </li>
        </ul>
        <ul className="navbar-nav ">
          <Link to="/home" className="nav-link contactLink">CONTACT US <img src={require('../../assets/images/up-right-arrow.png')} alt="contact us" /></Link> 
        </ul>
      </div>
    </div>
  </nav>
</section>

      </>
    )
  }
}
