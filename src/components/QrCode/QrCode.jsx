import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';

export default function QrCode() {
    let encodedToken = localStorage.getItem('userToken');
    const [userData,setUserData] =useState([])

    async function getUser(){

        axios.get(`http://localhost:3000/v1/users/qrCode` ,{ headers: {"Authorization" : `Bearer ${encodedToken}`} }).then(
            (response)=>{
                console.log(response.data)
                setUserData(response.data)
            }
        ).catch(
            (error)=>{
                console.log(error)
    
            }
        )
    }
    useEffect(()=>{
        getUser();
        
        },[]);

  return (
    <div className='text-center'>
        <h1>QR code</h1>
        <img src={userData.qrCode} alt="qrcode" />
    </div>
  )
}
