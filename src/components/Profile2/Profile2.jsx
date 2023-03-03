import React from 'react'
import profileImg from '../../assets/images/profile.png'
import style from './Profile2.module.css'
import { Link } from 'react-router-dom'


export default function Profile2() {


  return (
    <>
    <section className={style.profile}>
    <div className="container">
        <div className='row g-3'>
            <div className='col-lg-2 ' >
                <div>
                    <img className='img-thumbnail p-lg-0 border-0' src={profileImg} alt="profile img" />
                    <div className={style} >
                        
                        <div >
                        <Link to="/"> <button  className=" btn btn-light  mt-4 w-100">Requests</button></Link>
                        </div>
                        <div >
                        <Link to="/tripdetails"> <button  className=" btn btn-light  mt-4 w-100">Add Trip</button></Link>
                        </div>
                        <div >
                        <Link to="/userdetails2"> <button  className=" btn btn-light  mt-4 w-100">Buy Something</button></Link>
                        </div>
                        <div >
                        <Link to="/userdetails1"> <button className= "btn btn-light  mt-4 w-100">Deliver Something</button></Link>
                        </div>

                    </div>
                </div>
            </div>
           
            <div className='col-lg-9 offset-lg-1 ' >
                <div className='col-lg-8 '>
                    <h3  className=''>YOUSSIEF <span  style={{fontSize:15}}><i class="fa-solid fa-location-dot offset-lg-4"></i>  Cairo - Egypt</span> </h3>
                    <h4>National ID : 30102515866255975</h4>
                </div>
                <hr />
                <div id='about'>
                <h3  className='m4'><i class="fa-regular fa-user "></i> About<button className='btn btn-light   offset-lg-9  ' >  Edit</button> </h3>
                <br />
                <h5 className='fw-bold text-decoration-underline'>Contact Information</h5>
                <br />
                <h5  className='col-lg-6 '>Phone : <span className='ms-5'>+2 0113314226 </span> </h5>
                <br />
                <h5  className='col-lg-6'>Address : <span className='ms-5'> Cairo-Egypt </span> </h5>
                <br />
                <h5  className='col-lg-6'>Email : <span className='ms-5'> Youssief@gmail.com </span> </h5>
                <br />
                <br />
                <h5 className='fw-bold text-decoration-underline'>Basic Information</h5>
                <br />
                    <div className='text-start'>
                        <h5  className='col-lg-6  '>B-day : <span className='ms-5 '> june 5, 1992 </span> </h5>
                        <br />
                        <h5  className='col-lg-6'>Gove : <span className='ms-5 '>Name:Egypt  <span className='ms-5'> ID:24523</span> </span> </h5>
                        <br />
                        <h5  className='col-lg-6'>CITY : <span className='ms-5 '> Name:Cairo  <span className='ms-5'> ID:38978</span> </span> </h5>
                    </div>
                <br />
                <br />
                <h5  className='col-lg-6'>Student Id/Work Id : <span className='ms-5 '> id_file.pdf</span> </h5>

                





                </div>
            </div>                

            
        </div>

    </div>
    </section>

    </>
  )
}
