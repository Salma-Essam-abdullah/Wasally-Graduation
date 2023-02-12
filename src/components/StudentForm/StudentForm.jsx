import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

export default class StudentForm extends Component {
  render() {
    return (
      <>
      <Navbar/>
    
    <section className="userForm">
    <div className="container">
    <h3 className='text-center'><span className='green'>S</span>TUDENT</h3>
    <h4>Add Your Information</h4>
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



<div class="row g-3 align-items-center group">
<div class="col-lg-2">
  <label for="universityId" class="col-form-label">University ID : </label>
</div>
<div class="col-lg-10">
  <input type="file" i class="form-control"  name='universityId' />
</div> 
</div>


<div class="row g-3 align-items-center group">
<div class="col-lg-2">
  <label for="collegeEnrollmentStatement" class="col-form-label">College enrollment Statement : </label>
</div>
<div class="col-lg-10">
  <input type="file" i class="form-control"  name='collegeEnrollmentStatement' />
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
