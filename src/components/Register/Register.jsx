import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import style from "./Register.module.css"
// import Footer from '../Footer/Footer'

export default function Register(props) {
  let history = useHistory();
  let [errorList , setErrorList] = useState([])
  let [error,setError] = useState('');
  let [loading,setLoading] = useState(false)
  let [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword:'',
    phoneNumber:''

  });
  function getUser(e){
    let myUser = {...user};
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
   
  }
  async function formSubmit(e){
    e.preventDefault();
    let validationResponse = validationRegisterForm();
    console.log(validationResponse);
    if(validationResponse.error){ 
      setLoading(false)
      setErrorList(validationResponse.error.details)
      return;
    }

    setLoading(true);
     await axios.post(`http://localhost:3000/v1/auth/register`,user).then(
      res => {
       
        setLoading(false);
        setError('');
        setErrorList([]);

       history.push('/login')
        
      })
    .catch(err => {
      setLoading(false);
      let errorMessage = err.response.data.message;
     let errMsg =  errorMessage.replace(/['"]/g, '');
         setError (errMsg);
  }
  );
}

const password = (value, helpers) => {
  if (value.length < 8) {
    return helpers.message('password must be at least 8 characters');
  }
  if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
    return helpers.message('password must contain at least 1 letter and 1 number');
  }
  return value;
};

const phoneNumber = (value, helpers) => {
  if (!value.match(/^(010|011|012|015)[0-9]{8}$/)) {
    return helpers.message('Invalid PhoneNumber number');
  }
  return value;
};

function validationRegisterForm(){
  let scheme = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email({ tlds: { allow: ['com', 'net'] } }).required(),
    password: Joi.string().required().custom(password),
    confirmpassword : Joi.string().required().valid(Joi.ref('password')).messages({'any.only': 'confirm password must be same as password'}),
    phoneNumber: Joi.string().custom(phoneNumber).required(),
  });
 return scheme.validate(user,{abortEarly:false});
}

  return (
    
    <>
    <div className=' container'> 
    <div className='row'>     
         <div className=' w-75 mx-auto py-4'>
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
         <form onSubmit={formSubmit} className={style.userRegister}>

       

            <div className='my-2 col-lg-6 offset-lg-3 '>
         
            <input onChange={getUser} type="text" className='form-control mb-4'placeholder="Enter Your Name"  name='name' />
            </div>


            <div className='my-2 col-lg-6 offset-lg-3'>
          
            <input onChange={getUser} type="email" className='form-control mb-4'placeholder="Enter Your Valid Email"  name='email' />
            </div>

            <div className='my-2 col-lg-6 offset-lg-3'>
          
            <input onChange={getUser} type="password" className='form-control mb-4'placeholder="Enter Password"  name='password' />
            </div>



            <div className='my-2 col-lg-6 offset-lg-3'>
            
            <input onChange={getUser} type="password" className='form-control mb-4'placeholder="Confirm Password"  name='confirmpassword' />
            </div>
            <div className='my-2 col-lg-6 offset-lg-3 '>
         
            <input onChange={getUser} type="text" className='form-control mb-4'placeholder="Enter Your Phone Number"  name='phoneNumber' />
            </div>

            <div   className='mt-3 d-flex justify-content-center align-items-center flex-column'>
            <button type="submit" className={style.test}>{loading ?<i className='fas fa-spinner fa-spin'></i>:'Register'} </button>
            <br />
            <span className="login ">
                <Link  className='text-light' to="login" title="login" id="link-reset">Already have account  </Link>
             </span>
            </div>

         </form>
        </div>
      </div>  
        </div>

        {/* <Footer/> */}
    </>
  )
}