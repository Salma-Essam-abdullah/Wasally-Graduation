import './Conversation.css'
import chatImg from '../../assets/images/profile.png'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect, useState } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';





export default function Conversations() {

  let encodedToken = localStorage.getItem('userToken');
  let decodedToken = jwtDecode(encodedToken)
  let requestId = useParams().requestId;
  const [conversationId , setConversationId] = useState([]);
  const [textMessage , setTextMessage] = useState([])

  async function getconv() {
    axios.get(`http://localhost:3000/v1/requests/${requestId}`,{ headers: {"Authorization" : `Bearer ${encodedToken}`} }).then((response) => {
     
    console.log(response.data)
      setConversationId(response.data.conversation)
      let convId = response.data.conversation[0];
      getMessages(convId);
      getConversationById(convId)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  console.log(conversationId[0])

  
  async function getMessages(convId){
    axios.get(`http://localhost:3000/v1/messages/${convId}`,{ headers: {"Authorization" : `Bearer ${encodedToken}`} }).then((response) => {
      console.log(response.data)
      setTextMessage(response.data)
    })
    .catch((error) => {
      console.log("ssw",error);
    }); 
  }
const [conversation , setconversation] = useState('')

  async function getConversationById(convId){
    axios.get(`http://localhost:3000/v1/conversations/getConversationById/${convId}`,{ headers: {"Authorization" : `Bearer ${encodedToken}`} }).then((response) => {
      console.log(response.data)
      setconversation(response.data.members)
    })
    .catch((error) => {
      console.log("ssw",error);
    }); 
  }


console.log("conversation",conversation)

  useEffect(()=>{
    getconv();
    
      },[]);

  
    
  return (
    <>
     
    <div className="conversation">
 
  <h1>
   
  

  
    
    </h1>
 

      {/* <img className="conversationImg" src={chatImg} alt="" />   */}
      <span className="ConversationsName">  <h1>{conversation[0] == decodedToken.id ? decodedToken.name:''}</h1></span>
      <hr/>
    </div>

    </>
  )
}
