import  './message.css'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect, useState } from 'react';
import axios from 'axios';
import formatDistance from 'date-fns/formatDistance'

import jwtDecode from 'jwt-decode'
export default function Message() {
  let encodedToken = localStorage.getItem('userToken');
  let [error,setError] = useState('');
  let requestId = useParams().requestId;
  const [conversationId , setConversationId] = useState([]);
  const [textMessage , setTextMessage] = useState([])
  const [profileData , setProfileDate] = useState([]);
  async function getconv() {
    axios.get(`http://localhost:3000/v1/requests/${requestId}`,{ headers: {"Authorization" : `Bearer ${encodedToken}`} }).then((response) => {
     
    console.log(response.data)
      setConversationId(response.data.conversation)
      let convId = response.data.conversation[0];
      getMessages(convId)
      })
      .catch((error) => {
        console.log(error);
      });
  }


  
  async function getMessages(convId){
    axios.get(`http://localhost:3000/v1/messages/${convId}`,{ headers: {"Authorization" : `Bearer ${encodedToken}`} }).then((response) => {
      console.log(response.data)
      setTextMessage(response.data)
    })
    .catch((error) => {
      console.log("ssw",error);
      setError(error.response.data)
    }); 
  }

  useEffect(()=>{

    getconv();
    if(decodedToken.role === 'traveler'){
      getProfile();
    }
   
   
      },[]);

      async function getProfile(){

        axios.get(`http://localhost:3000/v1/travelers/get` ,{ headers: {"Authorization" : `Bearer ${encodedToken}`} }).then(
            (response)=>{
                console.log("a",response.data)
                setProfileDate(response.data.traveler)
               
            }
        ).catch(
            (error)=>{
                console.log(error)
    
            }
        )
    }
    
      useEffect(()=>{
        getconv();
          },[]);

let decodedToken = jwtDecode(encodedToken);
let userId = decodedToken.id;
  return (
    <>
      {
        error &&
        <div className="alert alert-danger">
          {error}
        </div>
        }
        
        { textMessage && textMessage.map((t,index)=>      
       
    <div key={index} className={t.sender ===  userId  ? 'message own' : t.sender ===  profileData._id ? 'message own' : 'message'}>
    
    <div className= "messageTop">
        
    
  <>
  <p className="messageText">{t.text}</p>
 
  <div className="messageBottom">{ formatDistance(
       new Date(t.createdAt),
       new Date()
   )}
   </div>
  </>
 
       
    </div>
    
    </div>
    )}

    </>
  )
}
