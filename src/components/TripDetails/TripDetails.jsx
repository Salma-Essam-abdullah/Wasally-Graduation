import React, { useState } from 'react'
// import Footer from '../Footer/Footer'
import { useHistory } from 'react-router-dom';
import Joi from 'joi';
import axios from 'axios';
const BASE_URL = process.env.REACT_APP_API_URI;


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
    axios.post(`${BASE_URL}/v1/trips/add` ,trip,{ headers: {"Authorization" : `Bearer ${encodedToken}`} })
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

        <section >

        <div className="container">
        <div className="row mt-5 justify-content-center">
        <div className="col-lg-10">
        <h3 className='text-center fw-bold'><span style={{color:"#fd7402"}}>Trip</span>Details</h3>
        
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
        <input onChange={handleChange}  type="text" name="from" className="form-control"  placeholder="From" required />
    </div>
    <div className="col-md-6 pb-2 form-group">
        <label htmlFor="to" className='p-1'>To</label>
        <input onChange={handleChange}  type="text" className="form-control" name="to"  placeholder="To" required />
    </div>
    <div className="col-md-6 pb-2 form-group">
        <label htmlFor="TripDate" className='p-1'>Trip Date</label>
        <input onChange={handleChange}  type="text" name="TripDate" className="form-control" placeholder="Trip Date" required />
    </div>

    <div className="col-md-6 pb-2 form-group">
        <label htmlFor="TripTime" className='p-1'>Trip Time</label>
        <input onChange={handleChange}  type="text" name="TripTime" className="form-control" placeholder="Trip Time" required />
    </div>

    <div className="col-md-6 pb-2 form-group ">
      <label htmlFor="AvailableWeight"  className='p-1'>Available Weight</label>
      <input onChange={handleChange}  type="number" className="form-control" name="AvailableWeight"  placeholder="Available Weight" required />
    </div> 

    <div className="col-md-6 pb-2 form-group">
    <label htmlFor="unAcceptablaPackage" className='p-1'>unAcceptabla Package</label>
    <input onChange={handleChange}  type="text" className="form-control" name="unAcceptablaPackage" placeholder="unAcceptabla Package" required />
    </div>


  </div>

  <br />
  <div>
  <div className="text-center  ">
          <button className="formButton" type='submit' >{loading ?<i></i>:'ADD TRIP'}</button>
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
    
        {/* <Footer/> */}
        </>
    )
  }

