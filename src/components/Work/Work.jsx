import React, { useState } from 'react'
import style from "./Work.module.css"
import Footer from '../Footer/Footer'

import { Link } from 'react-router-dom'
import axios from 'axios';



export default function Work() {
    const [isUpdated, setIsUpdated] = useState(false);
    const [isStudentUpdated , setIsStudentUpdated] = useState(false)
    let encodedToken = localStorage.getItem('userToken');
    
    const handleUpdateEmployee = () => {
        const config = {
            headers: { Authorization: `Bearer ${encodedToken}` }
        };
      axios.patch(`http://localhost:3000/v1/travelers/employee`,{isUpdated: true} ,config )
        .then(response => {
        //   setIsUpdated(response.data.success);
          setIsUpdated(true); 
        })
        .catch(error => {
          console.log(error);
        });
    }

    const handleUpdateStudent = () => {
        axios.put(`http://localhost:3000/v1/travelers/student` ,{isStudentUpdated:true} , { headers: {"Authorization" : `Bearer ${encodedToken}`} })
          .then(response => {
            // setIsUpdated(response.data.success);
            setIsStudentUpdated(true);
            
          })
          .catch(error => {
            console.log(error);
          });
      }


  return (
    <>
            <div className='container'>
            <div className='row'>
                <div className='col-lg-5 d-flex justify-content-center' >
                    <div className={style.traingle1} >
                    {isUpdated ? <p>Successfully updated to true!</p> : null}
                      <Link to="/employeeform" onClick={handleUpdateEmployee}> 
                        <div className={style.text1}>
                            <h1>Employee</h1>
                        </div>
                        </Link> 
                    </div>
                </div>

                <div className='text-lg-center col-lg-2  '>
                    <div className={style.work}>
                    <h3 >OR</h3>
                    </div>
                </div>
                <div className='col-lg-5 d-flex justify-content-center' >
                        <div className={style.traingle2} >
                        {isStudentUpdated ? <p>Successfully updated to true!</p> : null}
                        <Link to="/studentform" onClick={handleUpdateStudent}>
                            <div className={style.text2}>
                            <h1>STUDENT</h1>
                          
                            </div>
                        </Link>
                        </div>
                </div>                

            </div>
        </div>
        <br />
        <br />
        <Footer/>
    </>
  )
}