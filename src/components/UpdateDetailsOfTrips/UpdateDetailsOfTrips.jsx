import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Joi from 'joi';
export default function UpdateDetailsOfTrips  () {

  let encodedToken = localStorage.getItem('userToken');
  let history = useHistory();
  let [errorList , setErrorList] = useState([])
  let [error,setError] = useState('');
  let [loading,setLoading] = useState(false)
  
  const [trip, SetTrip] = useState([]);

  const [trips, SetTrips] = useState({
    to: trip.to,
    from:trip.from,
    TripDate:trip.TripDate,
    AvailableWeight:trip.AvailableWeight,
    unAcceptablaPackage:trip.unAcceptablaPackage,
    TripTime:trip.TripTime
  });


  const handleChange = (e) => {
    let Trip = {...trips};
    Trip[e.target.name] = e.target.value;
    SetTrips(Trip);
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
    axios.put(`http://localhost:3000/v1/trips/update/`+tripId ,trips,{ headers: {"Authorization" : `Bearer ${encodedToken}`} })
    .then(
      res => {
       
        setLoading(false);
        setError('');
        setErrorList([]);

       history.push('/travelertrips')
        
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
        from: Joi.string().optional().allow(''),
        to: Joi.string().optional().allow(''),
        TripDate: Joi.date().greater(Date.now() - 24 * 60 * 60 * 1000).iso().messages({
          'date.format': `Date format is YYYY-MM-DD`,
          'date.min': `Date should not be passed`
        }).optional().allow(''),
        TripTime: Joi.string().optional().allow(''),
        AvailableWeight: Joi.number().optional().allow(''),
        unAcceptablaPackage: Joi.string().optional().allow(''),
    });
   return scheme.validate(trips,{abortEarly:false});
  
  }


  const { tripId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      axios.get(`http://localhost:3000/v1/trips/viewtrip/`+tripId,{ headers: {"Authorization" : `Bearer ${encodedToken}`} }).then(
      (response)=>{
          console.log("sss",response.data)
          SetTrip(response.data.trip)

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
   <input type="text" onChange={handleChange} className="form-control " name='from' placeholder='From'  defaultValue={trip.from} />
 </div>
 
</div>

<div className="row g-3 align-items-center group">
 <div className="col-lg-4">
   <label htmlFor="to" className="col-form-label">To : </label>
 </div>
 <div className="col-lg-8">
   <input type="text"   onChange={handleChange} className="form-control" name="to" placeholder='To'  defaultValue={trip.to} />
 </div>
</div>
</div>

<div className="row g-3 align-items-center group">
 <div className="col-lg-4">
   <label htmlFor="TripDate" className="col-form-label">Date : </label>
 </div>
 <div className="col-lg-8">
   <input type="text" onChange={handleChange}  className="form-control" placeholder='Date' name='TripDate' defaultValue={trip.TripDate ? trip.TripDate.split('T')[0] : "" } />
 </div> 
</div>
     
       </section>
        </div>
   

        <div className="col-md-6 col-sm-12">
        <h3 className='text-center'>Shopping Item</h3>
        <section className="userForm">
     
    
      <div className="row g-3 align-items-center group">
  <div className="col-lg-4">
    <label htmlFor="TripTime" className="col-form-label">Trip Time : </label>
  </div>
  <div className="col-lg-8">
    <input type="text" onChange={handleChange} className="form-control " name='TripTime' placeholder='time'  defaultValue={trip.TripTime} />
  </div>
  
</div>

<div className="row g-3 align-items-center group">
  <div className="col-lg-4">
    <label htmlFor="AvailableWeight" className="col-form-label">Available weight : </label>
  </div>
  <div className="col-lg-8">
    <input onChange={handleChange} type="text"  className="form-control" name="AvailableWeight" placeholder='Available Weight'  defaultValue={trip.AvailableWeight}  />
  </div>
</div>

<div className="row g-3 align-items-center group">
  <div className="col-lg-4">
    <label htmlFor="unAcceptablaPackage" className="col-form-label">UnAcceptable package: </label>
  </div>
  <div className="col-lg-8">
    <input type="text" onChange={handleChange}  className="form-control" name='unAcceptablaPackage' placeholder='unAcceptable Package'  defaultValue={trip.unAcceptablaPackage} />
  </div> 
</div>
        </section>
        </div>
        <div className="col-lg-12 text-center">
   
    <button  type='submit' >{loading ?<i className='fas fa-spinner fa-spin'></i>:'UPDATE'}</button>
    <br/>
    <Link to="/travelertrips"><button type='button' >BACK</button></Link>  
      </div>
        </div>
        </div>
        </section>
        </form>
        <Footer/>
        </>
    )
  }

