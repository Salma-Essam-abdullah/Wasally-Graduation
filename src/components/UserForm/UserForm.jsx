import axios from 'axios';
import jwtDecode from 'jwt-decode';
import React, {useEffect, useState } from 'react'
import Footer from '../../components/Footer/Footer'
import { Link, useHistory } from 'react-router-dom';
import Joi from 'joi';

export default function UserForm()  {
 
  let history = useHistory();
  let [errorList , setErrorList] = useState([])
  let [error,setError] = useState('');
  let [loading,setLoading] = useState(false)
  const [profileData , setProfileDate] = useState([]);
  
  const [user, setUser] = useState({
    name: profileData.name,
    address:profileData.address,
    birthDate:'',
    phoneNumber:profileData.phoneNumber,
    city:profileData.city,
    governorate:profileData.governorate


  });

  const handleChange = (e) => {
    let myUser = {...user};
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  };
  let encodedToken = localStorage.getItem('userToken');
    let userData =  jwtDecode(encodedToken);

let userId = userData.id;
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
    axios.patch(`http://localhost:3000/v1/users/`+userId ,user,{ headers: {"Authorization" : `Bearer ${encodedToken}`} })
    .then(
      res => {
       
        setLoading(false);
        setError('');
        setErrorList([]);

       history.push('/profile')
        
      })
    .catch(err => {
      setLoading(false);
      let errorMessage = err.response.data.message;
     let errMsg =  errorMessage.replace(/['"]/g, '');
         setError (errMsg);
  }
  );
}
const phoneNumber = (value, helpers) => {
  if (!value.match(/^(010|011|012|015)[0-9]{8}$/)) {
    return helpers.message('Invalid PhoneNumber number');
  }
  return value;
};
function validationUserForm(){
  let scheme = Joi.object({
  
      phoneNumber: Joi.string().custom(phoneNumber).optional().allow(''),
      name: Joi.string(),
      birthDate: Joi
        .date()
        .max('01-01-2003')
        .iso()
        .messages({
          'date.format': `Date format is YYYY-MM-DD`,
          'date.max': `Age must be 18+`
        }).optional().allow(''),
      city: Joi.string().optional().allow(''),
      governorate: Joi.string().optional().allow(''),
      address:Joi.string().optional().allow(''),
  });
 return scheme.validate(user,{abortEarly:false});

}

  async function getProfile(){
    axios.get(`http://localhost:3000/v1/users/`+userId ,{ headers: {"Authorization" : `Bearer ${encodedToken}`} }).then(
        (response)=>{
            console.log(response.data)
            setProfileDate(response.data)

        }
    ).catch(
        (error)=>{
            console.log(error)

        }
    )
}
useEffect(() => {
  getProfile();
}, [])

    return (
      <>
    
      <section className="userForm">
      <div className="container">
      <h3 className='text-center'>UPDATE <span className='green'>U</span>SER INFO</h3>
      <h4>Update Your Personal Information</h4>
      <h1 className='text-center  '><span style={{ color: "#D3FF00" }}>CREATE</span>  A NEW ACCOUNT</h1>
         {
        error &&
        <div className="alert alert-danger">
          {error}
        </div>
        }

{
  errorList.map((err)=>{
    return <div className="alert alert-danger">
    {err.message}
  </div>
  }
  )
}
      <form onSubmit={submitForm}>
      <div className="row g-3 align-items-center group">
  <div className="col-lg-2">
    <label htmlFor="name" className="col-form-label">Name : </label>
  </div>
  <div className="col-lg-10">
    <input onChange={handleChange} type="text"  className="form-control" name="name" defaultValue={profileData.name} placeholder='Name'  />
  </div>
</div>
      <div className="row g-3 align-items-center group">
  <div className="col-lg-2">
    <label htmlFor="address" className="col-form-label">Address: </label>
  </div>
  <div className="col-lg-10">
    <input  onChange={handleChange} type="text"  className="form-control " name='address' defaultValue={profileData.address} placeholder='Address'/>
  </div>
  
</div>


<div className="row g-3 align-items-center group">
  <div className="col-lg-2">
    <label htmlFor="birthDate" className="col-form-label">Date Of Birth : </label>
  </div>
  <div className="col-lg-10">
    <input type="text"  className="form-control" name="birthDate" placeholder='Year-Month-Day'  onChange={handleChange}/>
  </div>
</div>

<div className="row g-3 align-items-center group">
  <div className="col-lg-2">
    <label htmlFor="phoneNumber" className="col-form-label">Phone Number : </label>
  </div>
  <div className="col-lg-10">
    <input type="number"  className="form-control" placeholder='Phone Number' name='phoneNumber' defaultValue={profileData.phoneNumber} onChange={handleChange} />
  </div> 
</div>

<div className="row g-3 align-items-center group">
  <div className="col-lg-2">
    <label htmlFor="city" className="col-htmlForm-label">City : </label>
  </div>
  <div className="col-lg-10">
    <input type="text"  className="form-control" placeholder='City Name' name='city' defaultValue={profileData.city} onChange={handleChange} />
  </div> 

</div>

<div className="row g-3 align-items-center group">
  <div className="col-lg-2">
    <label htmlFor="governorate" className="col-form-label">Governate : </label>
  </div>
  <div className="col-lg-10">
    <input type="text"  className="form-control" placeholder='Governate Name' name='governorate' defaultValue={profileData.governorate} onChange={handleChange} />
  </div> 

</div>
<div className="col-lg-12 text-center">
<button type="submit" className="btn">{loading ?<i className='fas fa-spinner fa-spin'></i>:'SAVE'}</button>
      </div>


       </form>
       </div>
        </section>
      <Footer/>
      </>
    )
  }
