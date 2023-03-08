import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react'
import style from "./Register.module.css"
import { Link } from 'react-router-dom'
// import Footer from '../Footer/Footer'
import { useNavigate } from 'react-router';

export default function Register() {

  let navigate = useNavigate();
  let [errorList , setErrorList] = useState([])
  let [error,setError] = useState('');
  let [loading,setLoading] = useState(false)
  let [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword:''

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
 
        navigate('/login')
        
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



function validationRegisterForm(){
  let scheme = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email({ tlds: { allow: ['com', 'net'] } }).required(),
    password: Joi.string().required().custom(password),
    confirmPassword : Joi.string().required().valid(Joi.ref('password')).messages({'any.only': 'confirm password must be same as password'})
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
            {/* <label htmlFor="name" > Name</label> */}
            <input onChange={getUser} type="text" className='form-control mb-4'placeholder="Enter Your Name"  name='name' />
            </div>


            <div className='my-2 col-lg-6 offset-lg-3'>
            {/* <label htmlFor="email">Email</label> */}
            <input onChange={getUser} type="email" className='form-control mb-4'placeholder="Enter Your Valid Email"  name='email' />
            </div>

            <div className='my-2 col-lg-6 offset-lg-3'>
            {/* <label htmlFor="password">Password</label> */}
            <input onChange={getUser} type="password" className='form-control mb-4'placeholder="Enter Password"  name='password' />
            </div>

            <div className='my-2 col-lg-6 offset-lg-3'>
            {/* <label htmlFor="confirm_password">Confirm Password</label> */}
            <input onChange={getUser} type="password" className='form-control mb-4'placeholder="Confirm Password"  name='confirmPassword' />
            </div>
            <div   className='mt-3 d-flex justify-content-center align-items-center flex-column'>
            <button type="submit" className={style.test}>{loading ?<i className='fas fa-spinner fa-spin'></i>:'Register'} </button>
            <br />
            <span className="login ">
              <Link to="/login">
              <a  className='text-light' href="login" title="login" id="link-reset">Already have account  </a>
              </Link>
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