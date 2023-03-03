import React from 'react'
import style from "./Work.module.css"
import Footer from '../Footer/Footer'

import { Link } from 'react-router-dom'


export default function Work() {
  return (
    <>
            <div className='container'>
            <div className='row'>
                <div className='col-lg-5 d-flex justify-content-center' >
                    <div className={style.traingle1} >
                        <Link to="/employeeform">
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
                        <Link to="/studentform">
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
