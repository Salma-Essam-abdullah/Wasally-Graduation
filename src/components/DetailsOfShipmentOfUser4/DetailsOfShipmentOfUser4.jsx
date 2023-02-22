import React, { Component } from 'react'
import Footer from '../Footer/Footer'
// import Navbar from '../Navbar/Navbar'

export default class DetailsOfShippmentUser4 extends Component {
  render() {
    return (
      <>
      {/* <Navbar/> */}
      <section className="shippmentDetails">
      <div className="container">
      <div className="row">
      <div className="col-md-6 col-sm-12">
          <h3 className='text-center'>Details</h3>
          <section className="userForm">
   
   
   <form action="">
      <div className="border">
   <div className="row g-3 align-items-center group">
<div className="col-lg-4">
 <label htmlFor="from" className="col-form-label">From : </label>
</div>
<div className="col-lg-8">
 <input type="text"  className="form-control " name='from' placeholder='From'  defaultValue="Alexandria" />
</div>

</div>

<div className="row g-3 align-items-center group">
<div className="col-lg-4">
 <label htmlFor="to" className="col-form-label">To : </label>
</div>
<div className="col-lg-8">
 <input type="text"  className="form-control" name="to" placeholder='To'  defaultValue="Cairo"/>
</div>
</div>
</div>

<div className="row g-3 align-items-center group">
<div className="col-lg-4">
 <label htmlFor="date" className="col-form-label">Date : </label>
</div>
<div className="col-lg-8">
 <input type="date"  className="form-control" placeholder='Date' name='date' defaultValue='2023-02-05'/>
</div> 
</div>

<div className="row g-3 align-items-center group">
<div className="col-lg-4">
 <label htmlFor="notes" className="col-form-label">Notes : </label>
</div>
<div className="col-lg-8">
 <textarea   className="form-control" placeholder='Notes' name='notes' defaultValue="" />
</div> 
</div>

    </form>
   
     </section>
      </div>
 

      <div className="col-md-6 col-sm-12">
      <h3 className='text-center'>Shopping Item</h3>
      <section className="userForm">
   
   
    <form action="">
    <div className="row g-3 align-items-center group">
<div className="col-lg-4">
  <label htmlFor="item" className="col-form-label">Item : </label>
</div>
<div className="col-lg-8">
  <input type="text"  className="form-control " name='item' placeholder='Item'  defaultValue="Shirt" />
</div>

</div>

<div className="row g-3 align-items-center group">
<div className="col-lg-4">
  <label htmlFor="yourLocation" className="col-form-label">Your Location : </label>
</div>
<div className="col-lg-8">
  <input type="text"  className="form-control" name="yourLocation" placeholder='Your Location'  defaultValue="Louran"/>
</div>
</div>

<div className="row g-3 align-items-center group">
<div className="col-lg-4">
  <label htmlFor="anotherPhone" className="col-form-label">Another Phone : </label>
</div>
<div className="col-lg-8">
  <input type="number"  className="form-control" placeholder='Another Phone' name='anotherPhone'  defaultValue="01210594859"/>
</div> 
</div>

<div className="row g-3 align-items-center group">
<div className="col-lg-4">
  <label htmlFor="storeName" className="col-form-label">Store Name: </label>
</div>
<div className="col-lg-8">
  <input type="text"  className="form-control" placeholder='Store Name' name='storeName' defaultValue="C.k" />
</div> 
</div>
<div className="row g-3 align-items-center group">
<div className="col-lg-4">
  <label htmlFor="storeLocation" className="col-form-label">Store Location: </label>
</div>
<div className="col-lg-8">
  <input type="text"  className="form-control" placeholder='Store Location' name='storeLocation' defaultValue="Maadi" />
</div> 
</div>


<div className="row g-3 align-items-center group">
<div className="col-lg-4">
  <label htmlFor="price" className="col-form-label">Price : </label>
</div>
<div className="col-lg-8">
  <input type="number"  className="form-control" placeholder='Price' name='price'  defaultValue="1500"/>
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



     </form>
  
      </section>
     
      
      </div>
      <div className="col-lg-6 text-center" >
      <button type='button' >ACCEPT REQUEST</button>
      </div>
      <div className="col-lg-6 text-center ">
      <button type='button' className='rejectButton'>CANCEL REQUEST</button>

      </div>
      </div>
      
      </div>

      
    
      </section>
      
      
      <Footer/>
      </>
    )
  }
}
