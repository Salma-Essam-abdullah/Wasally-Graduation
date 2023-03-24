import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../Footer/Footer'
// import Navbar from '../Navbar/Navbar'

export default function UserDetails2  () {
  // const [buyOrdeliver, setbuyOrdeliver] = useState("deliver");
  // function SelectedOption(e){
  //   setbuyOrdeliver(e.target.value)
  //   console.log(e.target.value)
  //   console.log("jjj",buyOrdeliver)
  // }
 
  let history = useHistory();
  let [errorList , setErrorList] = useState([])
  let [error,setError] = useState('');
  let [loading,setLoading] = useState(false)
  let [request, setRequest] = useState({
    reward:'',
    to:'',
    from:'',
    item:'',
    weight:'',
    location:'',
    targetLocation:'',
    anotherPhone:'',
    category:'',
    date:'',
    storeLocation:'',
    storeName:'',
    price:'' ,
    buyOrdeliver:'deliver'
    

  });
 
  function getRequest(e){
    let myRequest = {...request};
    myRequest[e.target.name] = e.target.value;
    setRequest(myRequest);
    
   
  }
  async function formSubmit(e){
    e.preventDefault();
    let validationResponse = RequestValidation();
    console.log(validationResponse);
    if(validationResponse.error){ 
      setLoading(false)
      setErrorList(validationResponse.error.details)
      return;
    }
    let encodedToken = localStorage.getItem('userToken');
    setLoading(true);
  
   
    await axios.post(`http://localhost:3000/v1/requests/`,request,{ headers: {"Authorization" : `Bearer ${encodedToken}`} }).then(
      res => { 
        setLoading(false);
        setError('');
        setErrorList([]);

       history.push('/request')
        
      })
    .catch(err => {
      setLoading(false);
      console.log(err.response.data)
      let errorMessage = err.response.data.message;
     let errMsg =  errorMessage.replace(/['"]/g, '');
         setError (errMsg);
  }
  );
}

function RequestValidation(){
  let scheme = Joi.object({
   
 
    reward: Joi.number(),
    to: Joi.string().required(),
    from: Joi.string().required(),
    item: Joi.string().required(),
    weight: Joi.number().required(),
    location: Joi.string().required(),
    targetLocation: Joi.string().optional().allow(''),
    anotherPhone:Joi.string().regex(/^[0-9]{11}$/).messages({'string.pattern.base': `Phone number must have 10 digits.`}),
    category: Joi.string().required(),
    buyOrdeliver: Joi.string().required().valid('buy', 'deliver').default('deliver'),
    date: Joi.date().greater(Date.now() - 24 * 60 * 60 * 1000).iso().messages({
        'date.format': `Date format is YYYY-MM-DD`,
        'date.min': `Date should not be passed`
      }).required(),
    storeLocation: Joi.string().optional().allow(''),
    storeName: Joi.string().optional().allow(''),
    price: Joi.number().optional().allow(''),
      });
 return scheme.validate(request,{abortEarly:false});
}
    return (


        <>
      {/* <Navbar/> */}
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
  
      <section className="shippmentDetails">
      <form onSubmit={formSubmit}>
      <div className="container">
        <div className="row">
      <div  className="col-md-6 col-sm-12">
          <h3 className='text-center'>Details</h3>
          <section className="userForm">

          <div>
            
      <h3><span className='green'>S</span>elect option :</h3>
      <br />
      <select  name="buyOrdeliver" onChange={getRequest} value={request.buyOrdeliver} >
        <option  value="deliver" >Deliver something</option>
        <option  value="buy" >Buy something</option>
      </select>
    </div>
   
   <br />
 
      <div className="border">
 
   <div className="row g-3 align-items-center group">
<div className="col-lg-4">
 <label htmlFor="from" className="col-form-label">From : </label>
</div>
<div className="col-lg-8">
 <input onChange={getRequest} type="text"  className="form-control " name='from' placeholder='From' />
</div>

</div>

<div className="row g-3 align-items-center group">
<div className="col-lg-4">
 <label htmlFor="to" className="col-form-label">To : </label>
</div>
<div className="col-lg-8">
 <input onChange={getRequest} type="text"  className="form-control" name="to" placeholder='To' />
</div>
</div>
</div>

<div className="row g-3 align-items-center group">
<div className="col-lg-4">
 <label htmlFor="date" className="col-form-label">Date : </label>
</div>
<div className="col-lg-8">
 <input  onChange={getRequest} type="text"  className="form-control" placeholder='YEAR-MONTH-DAY' name='date' />
</div> 
</div>



     </section>
      </div>
 

      <div className="col-md-6 col-sm-12">
      <h3 className='text-center'>Shopping Item</h3>
      <section className="userForm">
   
   
   
<div className="row g-3 align-items-center group">

    <div className="col-lg-4">
      <label htmlFor="item" className="col-form-label">Item : </label>
    </div>
    <div className="col-lg-8">
      <input type="text"  onChange={getRequest} className="form-control " name='item' placeholder='Item'   />
    </div>

</div>

<div className="row g-3 align-items-center group">
<div className="col-lg-4">
  <label htmlFor="category" className="col-form-label">Category : </label>
</div>
<div className="col-lg-8">
  <input onChange={getRequest} type="text"  className="form-control" placeholder='Category' name='category'  />
</div> 
</div>


{request.buyOrdeliver === 'buy' && (


<div className="row g-3 align-items-center group">
<div className="col-lg-4">
  <label htmlFor="storeName" className="col-form-label">Store Name: </label>
</div>
<div className="col-lg-8">
  <input onChange={getRequest} type="text"  className="form-control" placeholder='Store Name' name='storeName'  />
</div> 
</div>

)}

{request.buyOrdeliver === 'buy' && (


<div className="row g-3 align-items-center group">
<div className="col-lg-4">
  <label htmlFor="storeLocation" className="col-form-label">Store Location: </label>
</div>
<div className="col-lg-8">
  <input onChange={getRequest} type="text"  className="form-control" placeholder='Store Location' name='storeLocation'  />
</div> 
</div>

)}


<div className="row g-3 align-items-center group">
    <div className="col-lg-4">
      <label htmlFor="Weight" className="col-form-label">Weight : </label>
    </div>

    <div className="col-lg-8">
      <input  onChange={getRequest} type="number"  className="form-control " name='weight' placeholder='Weight'   />
    </div>

</div>

{request.buyOrdeliver === 'buy' && (
<div className="row g-3 align-items-center group">
<div className="col-lg-4">
  <label htmlFor="price" className="col-form-label">Price : </label>
</div>
<div className="col-lg-8">
  <input onChange={getRequest} type="number"  className="form-control" placeholder='Price' name='price'  />
</div> 
</div>

)}
   



<div className="row g-3 align-items-center group">

    <div className="col-lg-4">
      <label htmlFor="reward" className="col-form-label">Reward : </label>
    </div>

    <div className="col-lg-8">
      <input  onChange={getRequest} type="number"  className="form-control " name='reward' placeholder='Reward'   />
    </div>

</div>

 

<div className="row g-3 align-items-center group">
<div className="col-lg-4">
  <label htmlFor="yourLocation" className="col-form-label">Your Location : </label>
</div>
<div className="col-lg-8">
  <input onChange={getRequest} type="text"  className="form-control" name="location" placeholder='Your Location'  />
</div>
</div>

{request.buyOrdeliver === 'deliver' && (

<div className="row g-3 align-items-center group">
<div className="col-lg-4">
  <label htmlFor="Target Location" className="col-form-label">Target Location : </label>
</div>
<div className="col-lg-8">
  <input onChange={getRequest} type="text"  className="form-control" name='targetLocation'  placeholder='Target Location'   />
</div> 
</div>


)}



  <div className="row g-3 align-items-center group">
    <div className="col-lg-4">
      <label htmlFor="Another Phone" className="col-form-label">Another Phone : </label>
    </div>

    <div className="col-lg-8">
      <input onChange={getRequest} type="tel"  className="form-control " name='anotherPhone' placeholder='Another Phone'   />
    </div>

</div>






      </section>
      </div>
      <div className="col-lg-12 text-center">
      <button type="submit">{loading ?<i className='fas fa-spinner fa-spin'></i>:'ADD REQUEST'} </button>
           
      
      </div>
      
      </div>
      
      </div>
      
    </form>
      </section>
      
      
     
      <Footer/>
   </>
   )
}