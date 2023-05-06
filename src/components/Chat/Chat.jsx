// import { auto } from '@popperjs/core'
import React from 'react'
import Conversations from '../Conversations/Conversations'
import Message from '../Message/Message'
import Online from '../Online/Online'
import  './Chat.css'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect, useState } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode'

const BASE_URL = process.env.REACT_APP_API_URI;
export default function Chat() {
    let encodedToken = localStorage.getItem('userToken');
  let requestId = useParams().requestId;
  const [conversationId , setConversationId] = useState([]);
  const [messageBody , setMessageBody] = useState([])

  

  async function getconv() {
    axios.get(`${BASE_URL}/v1/requests/${requestId}`,{ headers: {"Authorization" : `Bearer ${encodedToken}`} }).then((response) => {
     
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
    axios.get(`${BASE_URL}/v1/messages/${convId}`,{ headers: {"Authorization" : `Bearer ${encodedToken}`} }).then((response) => {
      console.log(response.data)
     
    })
    .catch((error) => {
      console.log("ssw",error);
    }); 
  }
  let decodedToken = jwtDecode(encodedToken);
  let userId = decodedToken.id;
  const [profileData , setProfileDate] = useState([]);




  async function getProfile(){
  
      axios.get(`${BASE_URL}/v1/travelers/get` ,{ headers: {"Authorization" : `Bearer ${encodedToken}`} }).then(
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
  
  let [error,setError] = useState('');
 let send =  decodedToken.role ===  'user'  ? userId : decodedToken.role=== 'traveler' ? profileData._id: ''
  const handleChange = (e) => {
    setMessageBody(e.target.value);
  };
  async function formSubmit(e){
    e.preventDefault();



     await axios.post(`${BASE_URL}/v1/messages`,{
      conversationId:conversationId[0],
      text:messageBody,
      sender : send

     },{ headers: {"Authorization" : `Bearer ${encodedToken}` }})
     .then(
      res => {
        setError('');
        // console.log("el yaa",res.data)

      })
    .catch(err => {
     
      setError(err.response.data.message);
      console.log(err)
  }
  );
}
  useEffect(()=>{
    getconv();
    if(decodedToken.role === 'traveler'){
    getProfile();
    }

    
      },[]);




  return (
    <>

        <div className="messenger" >
        {
        error &&
        <div className="alert alert-danger">
          {error}
        </div>
        }

            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    <input placeholder="Search for friends"className="chatMenuInput" />
                    <Conversations/>
                </div>
            </div>

            <div className="chatBox">
                <div  className="chatBoxWrapper">
                    <div style={{overflowY:'scroll'}} className="chatBoxTop">
                        <Message/>
                    </div>
                </div>
                <div className="chatBoxBottom">
                    <form onSubmit={formSubmit} className='w-100'>
                    <input type='text' name='sender' onChange={handleChange} defaultValue={decodedToken.role ===  'user'  ? userId : decodedToken.role=== 'traveler' ? profileData._id: ''} style={{"display": "none"}} />
                    <input type='text' name='conversationId' onChange={handleChange} defaultValue={conversationId[0]}  style={{"display": "none"}}/>
                        <textarea  name="text" style={{color:'black' , resize:'none' ,textAlign:'center'}} className='chatMessageInput' placeholder='Write a message' onChange={handleChange}></textarea>
                      <button type='submit' className='chatSubmitButton'>Send</button>
                    </form>
                </div>
            </div>
            <div className="chatOnline">
                <div className="chatOnlineWrapper">
                    <Online/>
                </div>
            </div>
        </div>
    </>

  )
}
