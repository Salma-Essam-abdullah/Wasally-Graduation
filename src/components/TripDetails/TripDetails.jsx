import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

export default class TripDetails extends Component {
  render() {
    return (
        <>
        <Navbar/>
        <section className="shippmentDetails">
        <div className="container">
        <div className="row">
        <div className="col-md-6 col-sm-12">
            <img src={require('../../assets/images/car.png')} alt="" />
        </div>
   
  
        <div className="col-md-6 col-sm-12">
        <h3 className='text-center'>Trip Details</h3>
        <section className="userForm">
     
        <form action="">

      <div className="border">
   <div className="row g-3 align-items-center group">
<div className="col-lg-4">
 <label htmlFor="from" className="col-form-label">From : </label>
</div>
<div className="col-lg-8">
 <input type="text"  className="form-control " name='from' placeholder='From'   />
</div>

</div>

<div className="row g-3 align-items-center group">
<div className="col-lg-4">
 <label htmlFor="to" className="col-form-label">To : </label>
</div>
<div className="col-lg-8">
 <input type="text"  className="form-control" name="to" placeholder='To'  />
</div>
</div>
</div>

<div className="row g-3 align-items-center group">
<div className="col-lg-4">
 <label htmlFor="date" className="col-form-label">Date : </label>
</div>
<div className="col-lg-8">
 <input type="date"  className="form-control" placeholder='Date' name='date' />
</div> 
</div>
    <div className="row g-3 align-items-center group">
<div className="col-lg-4">
  <label htmlFor="shipmentName" className="col-form-label">Shipment Name : </label>
</div>
<div className="col-lg-8">
  <input type="text"  className="form-control " name='shipmentName' placeholder='Shipment Name'   />
</div>

</div>

<div className="row g-3 align-items-center group">
<div className="col-lg-4">
  <label htmlFor="category" className="col-form-label">Category : </label>
</div>
<div className="col-lg-8">
 
  <select name="category" id="category">
  <option defaultValue="clothes">Clothes</option>
<option defaultValue="documents">Documents</option>
<option defaultValue="bags">Bags</option>


</select>
</div> 

</div>

<div className="row g-3 align-items-center group">
<div className="col-lg-4">
 <label htmlFor="notes" className="col-form-label">Notes : </label>
</div>
<div className="col-lg-8">
 <textarea   className="form-control" placeholder='Notes' name='notes' />
</div> 
</div>

    </form>
   
        </section>   
        </div>
        <div className="col-lg-12 text-center">
        <button type='button' >ADD TRIP</button>
        </div>
     
        </div>
        
        </div>  
        </section>
    
        <Footer/>
        </>
    )
  }
}
