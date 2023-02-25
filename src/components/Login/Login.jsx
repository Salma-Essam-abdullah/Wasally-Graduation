import Joi from 'joi';
import React, { useState } from 'react'
import style from "./Login.module.css"
export default function Login  ()  {
    let [errorList , seterrorList]=useState([]);

    let [user , setUser]=useState({email:'',password:''});


    function getUser(e)
    {
        let myUser = {...user};
        myUser[e.target.name]=e.target.value;
        setUser(myUser);
    }

    function formSubmit(e){
        e.preventDefault();
        let validationResponse= validateRegisterForm();
        if(validationResponse.error){
  
          seterrorList(validationResponse.error.details)
  
          console.log(validationResponse)
          //validation error
        }
        else{
          // but api register data
        }

        function validateRegisterForm(){
            let scheme = Joi.object({
              email:Joi.string().email ({tlds: { allow: ['com', 'net'] } }).required(),
              password:Joi.string().pattern(new RegExp('^[A-Z][a-z]{2,8}$')),
    
            });
            return scheme.validate(user , {abortEarly:false});
          }
        
      }

    return (
        <>
    <div className=' container'> 
      <div className="row">      
          <div className=' w-75 mx-auto py-4'>
          <h1 className='text-center mb-4'><span style={{ color: "#D3FF00" }}>LOGIN</span>  NOW</h1>

          <section className={style.userLogin}>
          <form onSubmit={formSubmit}>

            {errorList.map((error,index)=>  index===4&&5?<div className='alert alert-danger p-1'>"confirm_password" is not allowed"</div>:
            <div className='alert alert-danger'>{error.message}</div>)}

              <div className='col-lg-6 offset-lg-3'>
              {/* <label htmlFor="email" className='mb-3' >Email</label> */}
              <input onChange={getUser} type="email" className='form-control  mb-4'placeholder="Enter your Valid Email"  name='email' />
              </div>

              <div className='col-lg-6 offset-lg-3'>
              {/* <label htmlFor="password" className='mb-3'>Password</label> */}
              <input onChange={getUser} type="password" className='form-control mb-4'placeholder="Enter your Password "  name='password' />
              </div>

              <div className=' d-flex justify-content-center align-items-center flex-column  '>
              
              <button type="submit" className={style.test}>Log in</button>
              <br />
              <span className="register ">
                  <p> Don't have an account yet ?</p>
                  <a  className='text-light' href="Register" title="register" id="link-reset">CREATE AN ACCOUNT </a>
              </span>
              <span className="forgot-password ">
                  <a  className='text-light' href="no-javascript1.html" title="Forgot Password" id="link-reset">Forgot Password?</a>
              </span>

              <hr style={{width: '50%', textAlign: 'center', marginLeft: 0}} />

              <button type="button" className="btn btn-danger "><i class="fab fa-google"></i>      Login with google</button>
          </div>
          </form>
          </section>
          </div>
          
          </div>   
        </div>      
        </>
    );
}

