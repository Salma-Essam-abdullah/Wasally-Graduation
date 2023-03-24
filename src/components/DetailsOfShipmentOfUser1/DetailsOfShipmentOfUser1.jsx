import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import Footer from '../Footer/Footer'
// import Navbar from '../Navbar/Navbar'

export default function DetailsOfShipmentOfUser1(){
  let encodedToken = localStorage.getItem('userToken');
  
    const { requestId } = useParams();
    
    const [request, SetRequest] = useState({});
    useEffect(() => {
      const fetch = async () => {
        axios.get(`http://localhost:3000/v1/requests/`+requestId,{ headers: {"Authorization" : `Bearer ${encodedToken}`} }).then(
        (response)=>{
            console.log("sss",response.data)
            SetRequest(response.data)

        }
    ).catch(
        (error)=>{
            console.log(error)

        }
    ) 
      
        
      };
      fetch();
    }, []);
  
    return (
      <>
      <section className="shippmentDetails">
      <div className="container">
      <div className="row">
      <div className="col-md-6 col-sm-12">
          <h3 className='text-center'>Details</h3>
          <section className="userForm">
   
   
   <form>
   
      <div className="border">
   <div className="row g-3 align-items-center group">
<div className="col-lg-4">
 <label htmlFor="from" className="col-form-label">From : </label>
</div>
<div className="col-lg-8">
 <input type="text"  className="form-control " name='from' placeholder='From'  defaultValue={request.from} readOnly />
</div>

</div>

<div className="row g-3 align-items-center group">
<div className="col-lg-4">
 <label htmlFor="to" className="col-form-label">To : </label>
</div>
<div className="col-lg-8">
 <input type="text"  className="form-control" name="to" placeholder='To' defaultValue={request.to} readOnly/>
</div>
</div>
</div>

<div className="row g-3 align-items-center group">
<div className="col-lg-4">
 <label htmlFor="reward" className="col-form-label">Reward : </label>
</div>
<div className="col-lg-8">
 <input type="text"  className="form-control " name='reward' placeholder='Reward'  defaultValue={request.reward} readOnly/>
</div>

</div>

<div className="row g-3 align-items-center group">
<div className="col-lg-4">
 <label htmlFor="anotherPhone" className="col-form-label">Another Phone : </label>
</div>
<div className="col-lg-8">
 <input type="text"  className="form-control " name='reward' placeholder='Another Phone'  defaultValue={request.anotherPhone} readOnly />
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
  <label htmlFor="buyOrdeliver" className="col-form-label">Buy or deliver : </label>
</div>
<div className="col-lg-8">
  <input type="text"  className="form-control " name='buyOrdeliver' placeholder='Buy or deliver'  defaultValue={request.buyOrdeliver === 'deliver' ? 'deliver' : 'buy'} readOnly />
</div>

</div>
    <div className="row g-3 align-items-center group">
<div className="col-lg-4">
  <label htmlFor="item" className="col-form-label">Item : </label>
</div>
<div className="col-lg-8">
  <input type="text"  className="form-control " name='item' placeholder='Item'  defaultValue={request.item} readOnly/>
</div>

</div>
 <div className="row g-3 align-items-center group">
<div className="col-lg-4">
  <label htmlFor="weight" className="col-form-label">Weight : </label>
</div>
<div className="col-lg-8">
  <input type="text"  className="form-control " name='weight' placeholder='Weight'  defaultValue={request.weight} readOnly/>
</div>

</div>


<div className="row g-3 align-items-center group">
<div className="col-lg-4">
  <label htmlFor="location" className="col-form-label">Location : </label>
</div>
<div className="col-lg-8">
  <input type="text"  className="form-control " name='location' placeholder='Location'  defaultValue={request.location} readOnly/>
</div>

</div>

<div className="row g-3 align-items-center group">
<div className="col-lg-4">
  <label htmlFor="category" className="col-form-label">Category : </label>
</div>
<div className="col-lg-8">
  <input type="text"  className="form-control " name='category' placeholder='Category'  defaultValue={request.category} readOnly/>
</div>

</div>


{request.buyOrdeliver === 'deliver' ? 
<div className="row g-3 align-items-center group">
<div className="col-lg-4">
  <label htmlFor="targetLocation" className="col-form-label">Target Location : </label>
</div>
<div className="col-lg-8">
  <input type="text"  className="form-control " name='targetLocation' placeholder='Target Location'  defaultValue={request.targetLocation} readOnly />
</div>

</div>

: 
<>
<div className="row g-3 align-items-center group">
<div className="col-lg-4">
  <label htmlFor="storeName" className="col-form-label">Store Name: </label>
</div>
<div className="col-lg-8">
  <input type="text"  className="form-control" placeholder='Store Name' name='storeName' defaultValue={request.storeName} readOnly/>
</div> 
</div>

<div className="row g-3 align-items-center group">
<div className="col-lg-4">
  <label htmlFor="storeLocation" className="col-form-label">Store Location: </label>
</div>
<div className="col-lg-8">
  <input type="text"  className="form-control" placeholder='Store Location' name='storeLocation' defaultValue={request.storeLocation} readOnly />
</div> 
</div>


<div className="row g-3 align-items-center group">
<div className="col-lg-4">
  <label htmlFor="price" className="col-form-label">Price : </label>
</div>
<div className="col-lg-8">
  <input type="number"  className="form-control" placeholder='Price' name='price'  defaultValue={request.price} readOnly/>
</div> 
</div>
</>
}

     </form>
  
      </section>
    
      </div>
      <div className="col-lg-12 text-center">
    <Link to="/request"><button type='button' >BACK</button></Link>  

      </div>
      
      </div>
      
      </div>

      
    
      </section>
      
      
      <Footer/>
      </>
    )
  }

