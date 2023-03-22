import { auto } from '@popperjs/core'
import React from 'react'
import Conversations from '../Conversations/Conversations'
import Message from '../Message/Message'
import Online from '../Online/Online'
import  './Chat.css'

export default function Chat() {
  return (
    <>

        <div className="messenger" >

            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    <input placeholder="Search for friends"className="chatMenuInput" />
                    <Conversations/>
                    <Conversations/>
                    <Conversations/>
                    <Conversations/>
     
                </div>
            </div>

            <div className="chatBox">
                <div  className="chatBoxWrapper">
                    <div style={{overflowY:'scroll'}} className="chatBoxTop">
                        <Message/>
                        <Message own={true}/>
                        <Message/>
                        <Message own={true}/>
                        <Message/>
                        <Message own={true}/>
                        <Message/>
                        <Message own={true}/>
                        <Message/>

                    </div>
                </div>
                <div className="chatBoxBottom">
                        <textarea className='chatMessageInput' placeholder='Write Something'></textarea>
                        <button className='chatSubmitButton'> Send</button>
                </div>
            </div>

            <div className="chatOnline">
                <div className="chatOnlineWrapper">
                    <Online/>
                    <Online/>
                    <Online/>

                </div>
            </div>
        </div>
    </>

  )
}
