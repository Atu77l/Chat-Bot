import React from 'react'
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Card from './component/Chat/Card'
import socketIO from "socket.io-client"
import ChatUI from './component/Home/ChatUi'

const socket = socketIO.connect('http://localhost:4000', {
  transports: ['websocket'],
});
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChatUI socket={socket}/>}></Route>
        <Route path="/chat" element={<Card socket={socket}/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App