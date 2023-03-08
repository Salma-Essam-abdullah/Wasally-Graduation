import React from 'react'
import { NavLink } from 'react-router-dom'



export default function Navbar(props) {
 
  return (
      <>
            <section className="navBar " >
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
    <div className="container-fluid ">
      <NavLink  to="/" className="navbar-brand ms-4" ><span className="green ms-4">W</span>ASALLY <span><p className="green">Ship with a Fellow Traveller</p></span></NavLink>  
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
          {
            props.loginUser ?
            <>
            <li className="nav-item ">
            <NavLink to="/home" className="nav-link active" aria-current="page" >HOME</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/home" className="nav-link" >SHIPMENTS</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/home" className="nav-link" >TRIPS</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/profile" className="nav-link">PROFILE</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/home" className="nav-link">MEDIA</NavLink>
          </li>
          </>:''
          }
         
        </ul>
        <ul className="navbar-nav ">
          <NavLink to="/home" className="nav-link contactLink">CONTACT US <i className="fa-solid fa-arrow-trend-up"></i></NavLink> 
          {
            props.loginUser?
            <>
             <li onClick={props.logOut} className=" btn btn-danger logout">LOG OUT</li>
            </>:''
          }
         
        </ul>
      </div>
    </div>
  </nav>
</section>

      </>
    )
  }

