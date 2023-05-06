import axios from 'axios';
import Joi from 'joi';
import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import Footer from '../Footer/Footer'
const BASE_URL = process.env.REACT_APP_API_URI;

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
        axios.patch(`${BASE_URL}/v1/requests/`+requestId ,requests,{ headers: {"Authorization" : `Bearer ${encodedToken}`} })
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
        axios.get(`${BASE_URL}/v1/requests/`+requestId,{ headers: {"Authorization" : `Bearer ${encodedToken}`} }).then(
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
      <section >
      <div className="row mt-5 justify-content-center" data-aos="fade-up">
      <div className="col-lg-10">

      <form onSubmit={submitForm}  className="dataform">
        <div className="row">

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

        <div className="col-md-6 pb-2 form-group">
            <label htmlFor="buyOrdeliver" className='p-1'>Buy or deliver :  </label>
            <input type="text" onChange={handleChange} className="form-control " name='buyOrdeliver' placeholder='Buy or deliver'  defaultValue={request.buyOrdeliver}   readOnly/>
        </div>

        <div className="col-md-6 pb-2 form-group">
            <label htmlFor="from" className='p-1'>From</label>
            <input type="text" onChange={handleChange} className="form-control" name="from" placeholder='To'  defaultValue={request.from}  />
        </div>

        <div className="col-md-6 pb-2 form-group">
            <label htmlFor="to" className='p-1'>To</label>
            <input type="text" onChange={handleChange} className="form-control" name="to" placeholder='To'  defaultValue={request.to}  />
        </div>
      
{/* //// */}
        <div className="col-md-6 pb-2 form-group">
            <label htmlFor="reward" className='p-1'>Reward :</label>
            <input onChange={handleChange} type="text"  className="form-control" placeholder='Reward' name='reward' defaultValue={request.reward }/>
        </div>

        <div className="col-md-6 pb-2 form-group">
            <label htmlFor="anotherPhone" className='p-1'>Another Phone : </label>
            <input onChange={handleChange} type="text"  className="form-control" placeholder='anotherPhone' name='anotherPhone' defaultValue={request.anotherPhone }/>
        </div>

        <div className="col-md-6 pb-2 form-group">
            <label htmlFor="item" className='p-1'>Item : </label>
            <input onChange={handleChange} type="text"  className="form-control" placeholder='Item' name='item' defaultValue={request.item }/>
        </div>

        <div className="col-md-6 pb-2 form-group">
            <label htmlFor="weight" className='p-1'>Weight : </label>
            <input onChange={handleChange} type="text"  className="form-control" placeholder='weight' name='weight' defaultValue={request.weight }/>
        </div>

        <div className="col-md-6 pb-2 form-group">
            <label htmlFor="location" className='p-1'>Location : </label>
            <input onChange={handleChange} type="text"  className="form-control" placeholder='location' name='location' defaultValue={request.location }/>
        </div>

        <div className="col-md-6 pb-2 form-group">
            <label htmlFor="category" className='p-1'>Category : </label>
            <input onChange={handleChange} type="text"  className="form-control" placeholder='category' name='location' defaultValue={request.category }/>
        </div>







        {request.buyOrdeliver === 'deliver' ? 

<div className="col-md-6 pb-2 form-group">
<label htmlFor="targetLocation" className='p-1'>Target Location :  </label>
<input onChange={handleChange} type="text"  className="form-control" placeholder='category' name='targetLocation' defaultValue={request.targetLocation }/>
</div>

: 
<>

<div className="col-md-6 pb-2 form-group">
<label htmlFor="storeName" className='p-1'>Store Name:   </label>
<input onChange={handleChange} type="text"  className="form-control" placeholder='store Name' name='storeName' defaultValue={request.storeName }/>
</div>

<div className="col-md-6 pb-2 form-group">
<label htmlFor="storeLocation" className='p-1'>Store Location: </label>
<input onChange={handleChange} type="text"  className="form-control" placeholder='storeLocation' name='storeLocation' defaultValue={request.storeLocation }/>
</div>

<div className="col-md-6 pb-2 form-group">
<label htmlFor="price" className='p-1'>Price : </label>
<input onChange={handleChange} type="text"  className="form-control" placeholder='price' name='price' defaultValue={request.price }/>
</div>

</>
}
      <div className="col-lg-12 text-center">
        <button className='formButton'  type='submit' >{loading ?<i className='fas fa-spinner fa-spin'></i>:'UPDATE'}</button>
        <br />
        <br />
        <Link to="/userShipment"><button className='formButton' type='button' >BACK</button></Link>  

      </div>

</div>
      </form>



</div>

      
      </div>
      
      </section>
      <Footer/>
      </>
    )
  }

