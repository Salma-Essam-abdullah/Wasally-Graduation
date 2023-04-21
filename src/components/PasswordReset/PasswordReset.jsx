import React from 'react'
import { Link } from 'react-router-dom'

export default function PasswordReset() {
  return (
    <>
    <div className="container">
        <div className="pt-5 row d-flex align-items-center justify-content-center">
            <div className="card text-center" style={{width: 300}}>
                <div className="card-header h5 orangeButton">Password Reset</div>
                    <div className="card-body px-5">
                        <p className="card-text py-2">
                            Enter your email address and we'll send you an email with instructions to reset your password.
                        </p>
                        <div className="form-outline">
                            <input type="email" id="typeEmail" className="form-control my-3" />
                            <label className="form-label" htmlFor="typeEmail">Email input</label>
                        </div>
                        <Link to=""  className="btn btn-light orangeButton w-100">Reset password</Link>
                        <div className="d-flex justify-content-between mt-4">
                            <Link style={{color:"#ff9416"}} to="Login" >Login</Link>
                            <Link style={{color:"#ff9416"}}  to="Register" >Register</Link>
                        </div>
                </div>
            </div>
        </div>

    </div>
   




    </>
  )
}
