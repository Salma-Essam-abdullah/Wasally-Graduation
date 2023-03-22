import React, {useState} from 'react'
import Footer from '../Footer/Footer'
import {useHistory } from 'react-router-dom';
import Joi from 'joi';
import axios from 'axios';
export default function EmployeeForm() {

   let encodedToken = localStorage.getItem('userToken');
  let history = useHistory();
  let [errorList , setErrorList] = useState([])
  let [error,setError] = useState('');
  let [loading,setLoading] = useState(false);
  let [employee, setEmployee] = useState({
    NationalId: '',
    city: '',
    government:'',
    EmployeeCompanyId:'',
    NationalIdCard:''


  });
  const handleChange = (e) => {
    let myStudent = {...employee};
    myStudent[e.target.name] = e.target.value;
    setEmployee(myStudent);
  };

  const handleImageChange = (e)=>{
    let myStudent = {...employee};
    myStudent[e.target.name] = e.target.files[0];
    setEmployee(myStudent);
  }
  async function formSubmit(e){
    e.preventDefault();
    let validationResponse = validationForm();
    console.log(validationResponse);
    if(validationResponse.error){ 
      setLoading(false)
      setErrorList(validationResponse.error.details)
      return;
    }

    setLoading(true);
     await axios.patch(`http://localhost:3000/v1/travelers/create`,employee,{ headers: {"Authorization" : `Bearer ${encodedToken}` ,'Content-Type': 'multipart/form-data'} }).then(
      res => {
       
        setLoading(false);
        setError('');
        setErrorList([]);

       history.push('/profile2')
        
      })
    .catch(err => {
      setLoading(false);
      setError(err.response.data.message);
      console.log(err)
  }
  );
}

function validationForm(){
  let scheme = Joi.object({
    NationalId: Joi.string().regex(/^[1-3](19|20)\d{2}[7-8]\d{7}[0-9]\d{2}$/).messages({
      'string.pattern.base': `National Id must have 16 digits.`
    }).required(),
    city: Joi.string().required().max(20),
    government: Joi.string().required().max(20),
    EmployeeCompanyId: Joi.object(),
    NationalIdCard: Joi.object().required().messages({
      'string.empty': `National Id Card is required.`
    })
  });
 return scheme.validate(employee,{abortEarly:false});
}

    return (
      <>
    <section className="userForm">
    <div className="container">
    <h3 className='text-center'><span className='green'>S</span>TUDENT</h3>
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
    <form onSubmit={formSubmit}>
    <div className="row g-3 align-items-center group">
<div className="col-lg-2">
  <label htmlFor="NationalId" className="col-form-label">National ID : </label>
</div>
<div className="col-lg-10">
  <input onChange={handleChange} type="text"  className="form-control " name='NationalId' placeholder='National ID' />
</div>

</div>
<div className="row g-3 align-items-center group">
<div className="col-lg-2">
  <label htmlFor="NationalIdCard" className="col-form-label">National ID Card : </label>
</div>
<div className="col-lg-10">
  <input  onChange={handleImageChange} type="file"  className="form-control"  name='NationalIdCard' />
</div> 
</div>

<div className="row g-3 align-items-center group">
<div className="col-lg-2">
  <label htmlFor="city" className="col-form-label">City : </label>
</div>
<div className="col-lg-10">
  <input onChange={handleChange} type="text"  className="form-control" placeholder='City' name='city' />
</div> 

</div>

<div className="row g-3 align-items-center group">
<div className="col-lg-2">
  <label htmlFor="government" className="col-form-label">Governorate : </label>
</div>
<div className="col-lg-10">
  <input  onChange={handleChange} type="text" className="form-control" placeholder='Governorate' name='government' />
</div> 

</div>





<div className="row g-3 align-items-center group">
<div className="col-lg-2">
  <label for="EmployeeCompanyId" className="col-form-label">Employee Company Id : </label>
</div>
<div className="col-lg-10">
  <input onChange={handleImageChange} type="file"  className="form-control"  name='EmployeeCompanyId' />
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
