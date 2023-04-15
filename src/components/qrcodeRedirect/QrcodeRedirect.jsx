
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';

export default function QrcodeRedirect() {

    let encodedToken = localStorage.getItem('userToken');
    let userDataa =  jwtDecode(encodedToken);

let userId = userDataa.id;
console.log(userId)
    const [userData,setUserData] =useState([])
const history = useHistory();

    async function getUser(){

        axios.get(`http://localhost:3000/v1/users/qrCodeScan/`+userId ,{ headers: {"Authorization" : `Bearer ${encodedToken}`} }).then(
            (response)=>{
                console.log(response.data)
                setUserData(response.data)
                history.push('/home')
               
    
          
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
    
    </div>
  )
}
