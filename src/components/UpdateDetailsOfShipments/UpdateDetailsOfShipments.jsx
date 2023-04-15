import axios from 'axios';
import Joi from 'joi';
import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import Footer from '../Footer/Footer'


export default function UpdateDetailsOfShipments(){
    let encodedToken = localStorage.getItem('userToken');
    const [request , setRequest] = useState([]);
    const [requests, SetRequests] = useState({
        to: request.to,
        from:request.from,
        item:request.item,
        weight:request.weight,
        location:request.location,
        targetLocation:request.targetLocation,
        category:request.category,
        storeLocation:request.storeLocation,
        storeName:request.storeName,
        price:request.price,
        reward:request.reward,
        date:request.date,
        anotherPhone:request.anotherPhone,
      });
    
 
      const handleChange = (e) => {
        let Request = {...requests};
        Request[e.target.name] = e.target.value;
        SetRequests(Request);
      };
     
    async function submitForm(e){
        e.preventDefault();
      
        let validationResponse = validationRequestForm();
        console.log(validationResponse);
        if(validationResponse.error){ 
          setLoading(false)
          setErrorList(validationResponse.error.details)
          return;
        }
        
        
        setLoading(true);
        axios.patch(`http://localhost:3000/v1/requests/`+requestId ,requests,{ headers: {"Authorization" : `Bearer ${encodedToken}`} })
        .then(
          res => {
           
            setLoading(false);
            setError('');
            setErrorList([]);
    
           history.push('/userShipment')
            
          })
        .catch(err => {
          setLoading(false);
          let errorMessage = err.response.data.message;
         let errMsg =  errorMessage.replace(/['"]/g, '');
             setError (errMsg);
      }
      );
    }
    
    function validationRequestForm(){
        let scheme = Joi.object({
            reward: Joi.number().optional().allow(''),
            to: Joi.string().optional().allow(''),
            from: Joi.string().optional().allow(''),
            item: Joi.string().optional().allow(''),
            weight: Joi.number().optional().allow(''),
            location: Joi.string().optional().allow(''),
            targetLocation: Joi.string().optional().allow(''),
            anotherPhone:Joi.string().regex(/^[0-9]{11}$/).messages({'string.pattern.base': `Phone number must have 11 digits.`}).optional().allow(''),
            category: Joi.string().optional().allow(''),
            date: Joi.date().greater(Date.now() - 24 * 60 * 60 * 1000).iso().messages({
                'date.format': `Date format is YYYY-MM-DD`,
                'date.min': `Date should not be passed`
              }).optional().allow(''),
              storeLocation: Joi.string().optional().allow(''),
               
        storeName: Joi.string().optional().allow(''),
        price: Joi.number().optional().allow(''),
        });
       return scheme.validate(requests,{abortEarly:false});
      
      }
    const { requestId } = useParams();
  
    useEffect(() => {
      const fetch = async () => {
        axios.get(`http://localhost:3000/v1/requests/`+requestId,{ headers: {"Authorization" : `Bearer ${encodedToken}`} }).then(
        (response)=>{
            console.log("sss",response.data)
            setRequest(response.data)

        }
    ).catch(
        (error)=>{
            console.log(error)

        }
    )    
      };
      fetch();
    }, []);
   

    let history = useHistory();
    let [errorList , setErrorList] = useState([])
    let [error,setError] = useState('');
    let [loading,setLoading] = useState(false)

    return (
      <>
        <form onSubmit={submitForm}>
      <section className="shippmentDetails">
      <div className="container">
      <div className="row">
      <div className="col-md-6 col-sm-12">
          <h3 className='text-center'>Details</h3>
        
<section className="userForm">

          {
        error &&
        <div className="alert alert-danger">
          {error}
        </div>
        }

{
  errorList.map((err,i)=>{
    return <div key={i} className="alert alert-danger">
    {err.message}
  </div>
  }
  )
}



   
      <div className="border">
   <div className="row g-3 align-items-center group">
<div className="col-lg-4">
 <label htmlFor="from" className="col-form-label">From : </label>
</div>
<div className="col-lg-8">
 <input type="text"  onChange={handleChange} className="form-control " name='from' placeholder='From'  defaultValue={request.from}  />
</div>

</div>

<div className="row g-3 align-items-center group">
<div className="col-lg-4">
 <label htmlFor="to" onChange={handleChange} className="col-form-label">To : </label>
</div>
<div className="col-lg-8">
 <input type="text" onChange={handleChange} className="form-control" name="to" placeholder='To' defaultValue={request.to} />
</div>
</div>
</div>

<div className="row g-3 align-items-center group">
<div className="col-lg-4">
 <label htmlFor="reward" className="col-form-label">Reward : </label>
</div>
<div className="col-lg-8">
 <input type="text"  onChange={handleChange} className="form-control " name='reward' placeholder='Reward'  defaultValue={request.reward} />
</div>

</div>

<div className="row g-3 align-items-center group">
<div className="col-lg-4">
 <label htmlFor="anotherPhone" className="col-form-label">Another Phone : </label>
</div>
<div className="col-lg-8">
 <input type="text" onChange={handleChange} className="form-control " name='anotherPhone' placeholder='Another Phone'  defaultValue={request.anotherPhone}  />
</div>

</div>


   
</section>

      </div>
 

   

      <div className="col-md-6 col-sm-12">
      <h3 className='text-center'>Shopping Item</h3>
    

      <section className="userForm">
    <div className="row g-3 align-items-center group">
<div className="col-lg-4">
  <label htmlFor="buyOrdeliver" className="col-form-label">Buy or deliver : </label>
</div>
<div className="col-lg-8">
  <input type="text" onChange={handleChange} className="form-control " name='buyOrdeliver' placeholder='Buy or deliver'  defaultValue={request.buyOrdeliver}   readOnly/>
</div>

</div>
    <div className="row g-3 align-items-center group">
<div className="col-lg-4">
  <label htmlFor="item" className="col-form-label">Item : </label>
</div>
<div className="col-lg-8">
  <input type="text" onChange={handleChange} className="form-control " name='item' placeholder='Item'  defaultValue={request.item} />
</div>

</div>
 <div className="row g-3 align-items-center group">
<div className="col-lg-4">
  <label htmlFor="weight" className="col-form-label">Weight : </label>
</div>
<div className="col-lg-8">
  <input type="text" onChange={handleChange}  className="form-control " name='weight' placeholder='Weight'  defaultValue={request.weight}  />
</div>

</div>


<div className="row g-3 align-items-center group">
<div className="col-lg-4">
  <label htmlFor="location" className="col-form-label">Location : </label>
</div>
<div className="col-lg-8">
  <input type="text" onChange={handleChange} className="form-control " name='location' placeholder='Location'  defaultValue={request.location}  />
</div>

</div>

<div className="row g-3 align-items-center group">
<div className="col-lg-4">
  <label htmlFor="category" className="col-form-label">Category : </label>
</div>
<div className="col-lg-8">
  <input type="text" onChange={handleChange} className="form-control " name='category' placeholder='Category'  defaultValue={request.category}  />
</div>

</div>


{request.buyOrdeliver === 'deliver' ? 
<div className="row g-3 align-items-center group">
<div className="col-lg-4">
  <label htmlFor="targetLocation" className="col-form-label">Target Location : </label>
</div>
<div className="col-lg-8">
  <input type="text" onChange={handleChange}  className="form-control " name='targetLocation' placeholder='Target Location'  defaultValue={request.targetLocation}   />
</div>

</div>

: 
<>
<div className="row g-3 align-items-center group">
<div className="col-lg-4">
  <label htmlFor="storeName" className="col-form-label">Store Name: </label>
</div>
<div className="col-lg-8">
  <input type="text" onChange={handleChange} className="form-control" placeholder='Store Name' name='storeName' defaultValue={request.storeName}  />
</div> 
</div>

<div className="row g-3 align-items-center group">
<div className="col-lg-4">
  <label htmlFor="storeLocation" className="col-form-label">Store Location: </label>
</div>
<div className="col-lg-8">
  <input type="text" onChange={handleChange}  className="form-control" placeholder='Store Location' name='storeLocation' defaultValue={request.storeLocation}   />
</div> 
</div>


<div className="row g-3 align-items-center group">
<div className="col-lg-4">
  <label htmlFor="price" className="col-form-label">Price : </label>
</div>
<div className="col-lg-8">
  <input type="number" onChange={handleChange} className="form-control" placeholder='Price' name='price'  defaultValue={request.price}  />
</div> 
</div>

</>
}

   
  
      </section>
    
      </div> 
      </div>
      <div className="col-lg-12 text-center">
     <button  type='submit' >{loading ?<i className='fas fa-spinner fa-spin'></i>:'UPDATE'}</button>
  </div>
      <div className="col-lg-12 text-center">
    <Link to="/userShipment"><button type='button' >BACK</button></Link>  
  

      </div>
      
      </div>
      
     
      
    
      </section>
     
      </form>
      <Footer/>
      </>
    )
  }

