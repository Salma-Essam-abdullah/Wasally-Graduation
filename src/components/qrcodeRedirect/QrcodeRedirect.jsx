
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min';

export default function QrcodeRedirect() {

    let encodedToken = localStorage.getItem('userToken');
    let [error,setError] = useState('');
//     let userDataa =  jwtDecode(encodedToken);

// let userId = userDataa.id;
// console.log(userId)
 let userId = useParams().userId;




    const [userData,setUserData] =useState([])
const history = useHistory();

    async function getUser(){

        axios.get(`http://localhost:3000/v1/users/qrCodeScan/`+userId ,{ headers: {"Authorization" : `Bearer ${encodedToken}`} }).then(
            (response)=>{
                console.log(response.data)
                setUserData(response.data)
                setError('')
                history.push('/home')      
            }
        ).catch(
            (error)=>{
                console.log(error)
                setError(error.response.data)
               
            }
        )
    }
    useEffect(()=>{
        getUser();
        
        },[]);

  return (
    <section className="rate">
    <div className='text-center'>
    {
        error &&
        <div className="alert alert-danger">
          {error}
        </div>
        }
    
    </div>
    </section>
  )
}
