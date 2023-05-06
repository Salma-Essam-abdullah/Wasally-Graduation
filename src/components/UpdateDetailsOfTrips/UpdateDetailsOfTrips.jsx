import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Joi from 'joi';
const BASE_URL = process.env.REACT_APP_API_URI;
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
    axios.put(`${BASE_URL}/v1/trips/update/`+tripId ,trips,{ headers: {"Authorization" : `Bearer ${encodedToken}`} })
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
      axios.get(`${BASE_URL}/v1/trips/viewtrip/`+tripId,{ headers: {"Authorization" : `Bearer ${encodedToken}`} }).then(
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
          {/* <form onSubmit={submitForm}>
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
        </form> */}

                <section >

        <div className="container">
        <div className="row mt-5 justify-content-center">
        <div className="col-lg-10">
        <h3 className='text-center fw-bold'><span style={{color:"#fd7402"}}>Trip</span>Update</h3>
        
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



    <section>

<div className="row mt-5 justify-content-center" data-aos="fade-up">
<div className="col-lg-10">
<form  className="dataform" onSubmit={submitForm}>
  <div className="row">
    <div className="col-md-6 pb-2 form-group">
        <label htmlFor="from" className='p-1'>From</label>
        <input type="text" onChange={handleChange} className="form-control " name='from' placeholder='From'  defaultValue={trip.from} />
    </div>
    <div className="col-md-6 pb-2 form-group">
        <label htmlFor="to" className='p-1'>To</label>
        <input type="text"   onChange={handleChange} className="form-control" name="to" placeholder='To'  defaultValue={trip.to}  />
    </div>
    <div className="col-md-6 pb-2 form-group">
        <label htmlFor="TripDate" className='p-1'>Trip Date</label>
        <input type="text" onChange={handleChange}  className="form-control" placeholder='Date' name='TripDate' defaultValue={trip.TripDate ? trip.TripDate.split('T')[0] : "" } />
    </div>

    <div className="col-md-6 pb-2 form-group">
        <label htmlFor="TripTime" className='p-1'>Trip Time</label>
        <input onChange={handleChange}  type="text" name="TripTime" className="form-control" placeholder="Trip Time" defaultValue={trip.TripTime}  />
    </div>

    <div className="col-md-6 pb-2 form-group ">
      <label htmlFor="AvailableWeight"  className='p-1'>Available Weight</label>
      <input onChange={handleChange}  type="number" className="form-control" name="AvailableWeight"  placeholder="Available Weight" defaultValue={trip.AvailableWeight}  />
    </div> 

    <div className="col-md-6 pb-2 form-group">
    <label htmlFor="unAcceptablaPackage" className='p-1'>unAcceptabla Package</label>
    <input onChange={handleChange}  type="text" className="form-control" name="unAcceptablaPackage" placeholder="unAcceptabla Package" defaultValue={trip.unAcceptablaPackage}  />
    </div>


  </div>

  <br />
  <div>
        <div className="col-lg-12 text-center">
          <button className='formButton'  type='submit' >{loading ?<i className='fas fa-spinner fa-spin'></i>:'UPDATE'}</button>
    <br/>
    <br />
          <Link to="/travelertrips"><button className='formButton' type='button' >BACK</button></Link>  
        </div>
  </div>

</form>
</div>
</div>

</section>

        </div>
       
     
        </div>
        
        </div>  
        </section>


        <Footer/>
        </>
    )
  }

