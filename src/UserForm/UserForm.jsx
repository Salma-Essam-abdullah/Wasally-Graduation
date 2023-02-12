import React, { Component } from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

export default class UserForm extends Component {
  render() {
    return (
      <>
      <Navbar/>
    
      <section className="userForm">
      <div className="container">
      <h3 className='text-center'><span className='green'>U</span>SER</h3>
      <h4>Add Your Personal Information</h4>
      <form action="">
      <div class="row g-3 align-items-center group">
  <div class="col-lg-2">
    <label for="nationalId" class="col-form-label">National ID : </label>
  </div>
  <div class="col-lg-10">
    <input type="text" i class="form-control " name='nationalId' placeholder='National ID' />
  </div>
  
</div>

<div class="row g-3 align-items-center group">
  <div class="col-lg-2">
    <label for="dateOfBirth" class="col-form-label">Date Of Birth : </label>
  </div>
  <div class="col-lg-10">
    <input type="date" i class="form-control" name="dateOfBirth" placeholder='Day' />
  </div>
</div>

<div class="row g-3 align-items-center group">
  <div class="col-lg-2">
    <label for="phoneNumber" class="col-form-label">Phone Number : </label>
  </div>
  <div class="col-lg-10">
    <input type="number" i class="form-control" placeholder='Phone Number' name='phoneNumber' />
  </div> 
</div>

<div class="row g-3 align-items-center group">
  <div class="col-lg-2">
    <label for="city" class="col-form-label">City : </label>
  </div>
  <div class="col-lg-5">
    <input type="text" i class="form-control" placeholder='City Name' name='cityName' />
  </div> 
  <div class="col-lg-5">
    <input type="text" i class="form-control" placeholder='City Id' name='cityId'/>
  </div> 
</div>

<div class="row g-3 align-items-center group">
  <div class="col-lg-2">
    <label for="governate" class="col-form-label">Governate : </label>
  </div>
  <div class="col-lg-5">
    <input type="text" i class="form-control" placeholder='Governate Name' name='governateame' />
  </div> 
  <div class="col-lg-5">
    <input type="text" i class="form-control" placeholder='Governate Id' name='governateId'/>
  </div> 
</div>

<button type="submit" class="btn">SAVE</button>

       </form>
       </div>
        </section>
      <Footer/>
      </>
    )
  }
}
