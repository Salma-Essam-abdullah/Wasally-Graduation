import React, { useState } from 'react'
import Footer from '../Footer/Footer'
import { useHistory } from 'react-router-dom';
import Joi from 'joi';
import axios from 'axios';


export default function TripDetails() {

    
  let history = useHistory();
  let [errorList , setErrorList] = useState([])
  let [error,setError] = useState('');
  let [loading,setLoading] = useState(false)

  
  const [trip, setTrip] = useState({
    from:'',
    to:'',
    TripDate:'',
    AvailableWeight:'',
    unAcceptablaPackage:'',
    TripTime:''

  });

  const handleChange = (e) => {
    let myTrip = {...trip};
    myTrip[e.target.name] = e.target.value;
    setTrip(myTrip);
  };



  let encodedToken = localStorage.getItem('userToken');

  async function submitForm(e){
    e.preventDefault();
  
    let validationResponse = validationUserForm();
    console.log(validationResponse);
    if(validationResponse.error){ 
      setLoading(false)
      setErrorList(validationResponse.error.details)
      return;
    }
    
    
    setLoading(true);
    axios.post(`http://localhost:3000/v1/trips/add` ,trip,{ headers: {"Authorization" : `Bearer ${encodedToken}`} })
    .then(
      res => {
       
        setLoading(false);
        setError('');
        setErrorList([]);

       history.push('/trip')
        
      })
    .catch(err => {
      setLoading(false);
      console.log(err.response)
      let errorMessage = err.response.data.message;
     let errMsg =  errorMessage.replace(/['"]/g, '');
         setError (errMsg);
  }
  );
}

function validationUserForm(){
  let scheme = Joi.object({
  
    from: Joi.string().required(),
      to: Joi.string().required(),
      TripDate: Joi.date().greater(Date.now() - 24 * 60 * 60 * 1000).iso().messages({
        'date.format': `Date format is YYYY-MM-DD`,
        'date.min': `Date should not be passed`
      }).required(),
      TripTime: Joi.string().required(),
      AvailableWeight: Joi.number().required(),
      unAcceptablaPackage: Joi.string().required(),
  });
 return scheme.validate(trip,{abortEarly:false});

}

    return (
        <>
        <section className="shippmentDetails">
        <div className="container">
        <div className="row">
        <div className="col-md-6 col-sm-12">
            <img src={require('../../assets/images/addtrip.jpg')} alt="trip" />
        </div>
   
  
        <div className="col-md-6 col-sm-12">
        <h3 className='text-center'>Trip Details</h3>
        
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
        <section className="userForm">
     
        <form onSubmit={submitForm}>

      <div className="border">
   <div className="row g-3 align-items-center group">
<div className="col-lg-4">
 <label htmlFor="from" className="col-form-label">From: </label>
</div>
<div className="col-lg-8">
 <input onChange={handleChange} type="text"  className="form-control " name='from' placeholder='From'   />
</div>

</div>
<div className="row g-3 align-items-center group">
<div className="col-lg-4">
 <label htmlFor="to" className="col-form-label">To: </label>
</div>
<div className="col-lg-8">
 <input onChange={handleChange} type="text"  className="form-control " name='to' placeholder='To'   />
</div>

</div>


</div>

<div className="row g-3 align-items-center group">
<div className="col-lg-4">
 <label htmlFor="TripDate" className="col-form-label">Trip Date: </label>
</div>
<div className="col-lg-8">
 <input onChange={handleChange} type="text"  className="form-control" name="TripDate" placeholder='Trip Date'  />
</div>
</div>
    <div className="row g-3 align-items-center group">
<div className="col-lg-4">
  <label htmlFor="AvailableWeight" className="col-form-label">Available Weight: </label>
</div>
<div className="col-lg-8">
  <input  onChange={handleChange} type="number"  className="form-control " name='AvailableWeight' placeholder='Available Weight'   />
</div>

</div>

<div className="row g-3 align-items-center group">
<div className="col-lg-4">
  <label htmlFor="unAcceptablaPackage" className="col-form-label">Unacceptable Package: </label>
</div>
<div className="col-lg-8">
  <input  onChange={handleChange} type="text"  className="form-control " name='unAcceptablaPackage' placeholder='Unacceptable Package'   />
</div>

</div>
<div className="row g-3 align-items-center group">
<div className="col-lg-4">
  <label htmlFor="TripTime" className="col-form-label">Trip Time: </label>
</div>
<div className="col-lg-8">
  <input  onChange={handleChange} type="text"  className="form-control " name='TripTime' placeholder='Trip Time'   />
</div>
</div>

<div className="col-lg-12 text-center">
        <button type='submit' >ADD TRIP</button>
        </div>
    </form>
   
        </section>   
        </div>
       
     
        </div>
        
        </div>  
        </section>
    
        <Footer/>
        </>
    )
  }

