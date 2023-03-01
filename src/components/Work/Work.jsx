import React from 'react'
import style from "./Work.module.css"


export default function Work() {
  return (
    <>
            <div className='container'>
            <div className='row'>
                <div className='col-lg-5  d-flex justify-content-center' >
                    <div className={style.traingle1} >
                        <div className={style.ayhaga}>
                        <h5>hello</h5>
                        </div>
                    </div>
                </div>
                <div className='text-lg-center col-lg-2  '>
                    <div className={style.work}>
                    <h3 >OR</h3>
                    </div>
                </div>
                <div className='col-lg-5 d-flex justify-content-center' >
                        <div className={style.traingle2} >
                            
                        </div>
                </div>                

            </div>
        </div>
    </>
  )
}
