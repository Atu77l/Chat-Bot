import React from 'react'
import { useNavigate } from "react-router-dom"
import './Chat.css'
import ChatFooter from './ChatFooter'

const ChatBody = ({ messages, typingStatus, lastMessageRef }) => {
  const navigate = useNavigate()


  const handleLeaveChat = () => {
    localStorage.removeItem("userName")
    navigate("/")
    window.location.reload()
  }

  return (
    <>
      <header className='chat__mainHeader' style={{ marginTop: '3px', borderRadius: '5px' }}>
        <p>Hangout with Colleagues</p>
        <button className='leaveChat__btn' onClick={handleLeaveChat}>LEAVE CHAT</button>
      </header>


      <div className='h-96 overflow-y-scroll'>
        {messages.map(message => (
          message.name === localStorage.getItem("userName") ? (
            <div className="message__chats" key={message.id}>
              <p className='mr-4 font-serif text-right'>You</p>
              <div className='message__sender'>
                <p>{message.text}</p>
              </div>
            </div>
          ) : (
            <div className="message__chats" key={message.id}>
              <p className="ml-4 font-serif">{message.name}</p>
              <div className='message__recipient'>
                <p>{message.text}</p>
              </div>
            </div>
          )
        ))}

        <div className='message__status'>
          <p>{typingStatus}</p>
        </div>
        <div ref={lastMessageRef} />
      </div>
    </>
  )
}

export default ChatBody