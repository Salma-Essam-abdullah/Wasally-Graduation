import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react'
import style from "./Register.module.css"

export default function Register() {

    let [errorList , seterrorList]=useState([]);
    // let[err,setError]=useState('');
    let[Loading,setLoading] =useState(false)
    
    let [user , setUser]=useState({
        name:'',email:'',password:'',confirm_password:''});


    function getUser(e)
    {
        let myUser = {...user};
        myUser[e.target.name]=e.target.value;
        setUser(myUser);
        console.log(myUser)
    }

    async function formSubmit(e){
      e.preventDefault();
      setLoading(true);
      let validationResponse= validateRegisterForm();
      if(validationResponse.error){
        seterrorList(validationResponse.error.details)
        console.log(validationResponse)
        setLoading(false);
        //validation error
      }
      else{
      let {data} = await axios.post(``,user);
      if(data.message==='success'){
        
      }
      else{
        setLoading(false);
        // setError(data.message)
      }
          }
    }

      function validateRegisterForm(){
        let scheme = Joi.object({
          name:Joi.string().min(3).max(10).required(),
          email:Joi.string().email ({tlds: { allow: ['com', 'net'] } }).required(),
          password:Joi.string().pattern(new RegExp('^[A-Z][a-z]{2,8}$')),
          confirm_password:Joi.string().required().valid(Joi.ref('password')),

        });
        return scheme.validate(user , {abortEarly:false});
      }

  return (
    
    <>
    <div className=' container'>        
         <div className=' w-75 mx-auto py-4'>
         <h1 className='text-center'><span style={{ color: "#D3FF00" }}>CREATE</span>  A NEW ACCOUNT</h1>
         <form onSubmit={formSubmit} className={style.userRegister}>

          {errorList.map((error,index)=>index===(3&&4)?<div className='alert alert-danger p-1'>"confirm_password" is not allowed"</div>:<div className='alert alert-danger'>{error.message}</div>) }


            <div className='my-2'>
            {/* <label htmlFor="name" > Name</label> */}
            <input onChange={getUser} type="text" className='form-control mb-4 'placeholder="Enter your Fname"  name='name' />
            </div>


            <div className='my-2'>
            {/* <label htmlFor="email">Email</label> */}
            <input onChange={getUser} type="email" className='form-control mb-4'placeholder="Enter your Valied Email"  name='email' />
            </div>

            <div className='my-2'>
            {/* <label htmlFor="password">Password</label> */}
            <input onChange={getUser} type="password" className='form-control mb-4'placeholder="Enter Password"  name='password' />
            </div>

            <div className='my-2'>
            {/* <label htmlFor="confirm_password">Confirm Password</label> */}
            <input onChange={getUser} type="password" className='form-control mb-4'placeholder="Confirm Password"  name='confirm_password' />
            </div>
            <div   className='mt-3 d-flex justify-content-center align-items-center flex-column'>
            <button type="submit" className={style.test}>{Loading ?<i className='fas fa-spinner '></i>:'Register'} </button>
            <br />
            <span className="login ">
                <a  className='text-light' href="login" title="login" id="link-reset">Already have account  </a>
             </span>
            </div>

         </form>
        </div>
        </div>


    </>
  )
}
