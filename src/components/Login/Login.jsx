import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import style from "./Login.module.css"

export default function Login  (props)  {

    // const googleAuth =()=>{
    //   window.open(
    //      axios.get(`http://localhost:3000/v1/auth/callback`)
    //   )
    // };
    // console.log(googleAuth)

 
    let history = useHistory();
    let [errorList , seterrorList]=useState([]);
    let [error,setError] = useState('');
    let [loading,setLoading] = useState(false)
    let [user , setUser]=useState({email:'',password:''});


     function getUser(e)
    {
        let myUser = {...user};
        myUser[e.target.name]=e.target.value;
        setUser(myUser);
    }

    async function formSubmit(e){
      e.preventDefault();
      let validationResponse = validationRegisterForm();
      console.log(validationResponse);
      if(validationResponse.error){ 
        setLoading(false)
        seterrorList(validationResponse.error.details)
        return;
      }
  
      setLoading(true);
      await axios.post(`http://localhost:3000/v1/auth/login`,user).then(
        res => {
         
          setLoading(false);
          setError('');
          seterrorList([]);
          localStorage.setItem('userToken',res.data.token)
          props.getUserInfo();
          // navigate('/request')
          // props.history.push('/request')
          history.push('/request')
          
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
      email: Joi.string().email({ tlds: { allow: ['com', 'net'] } }).required(),
      password: Joi.string().required().custom(password),
    });
   return scheme.validate(user,{abortEarly:false});
  }

    return (
        <>
    <div className=' container'> 
      <div className="row">      
          <div className=' w-75 mx-auto py-4'>
          <h1 className='text-center mb-4'><span style={{ color: "#D3FF00" }}>LOGIN</span>  NOW</h1>
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
          
          <section className={style.userLogin}>
          <form onSubmit={formSubmit}>

              <div className='col-lg-6 offset-lg-3'>
              {/* <label htmlFor="email" className='mb-3' >Email</label> */}
              <input onChange={getUser} type="email" className='form-control  mb-4'placeholder="Enter your Valid Email"  name='email' />
              </div>

              <div className='col-lg-6 offset-lg-3'>
              {/* <label htmlFor="password" className='mb-3'>Password</label> */}
              <input onChange={getUser} type="password" className='form-control mb-4'placeholder="Enter your Password "  name='password' />
              </div>

              <div className=' d-flex justify-content-center align-items-center flex-column  '>
              
              <button type="submit" className={style.test}>{loading ?<i className='fas fa-spinner fa-spin'></i>:'Login'} </button>
              <br />
              <span className="register ">
                  <p> Don't have an account yet ?</p>
                  <Link className='text-light' to="Register" title="register" id="link-reset">CREATE AN ACCOUNT </Link>
              </span>
              <span className="forgot-password ">
                  <a  className='text-light' href="no-javascript1.html" title="Forgot Password" id="link-reset">Forgot Password?</a>
              </span>

              <hr style={{width: '50%', textAlign: 'center', marginLeft: 0}} />

              <button   type="button" className="btn btn-danger "><i className="fab fa-google"></i> Login with google</button>
          </div>
          </form>
          </section>
          </div>
          
          </div>   
        </div>      
        </>
    );
}

