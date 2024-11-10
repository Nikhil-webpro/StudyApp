
import { useState } from 'react'
import './App.css'
import StudyDesk from './context'
import Home from './Home'

function App() {
  const [header,setHeader]=useState(false);
  const [ChatBot,setChat]=useState(false);
  const [Sidebar,setSidebar]=useState(false);
  const [Cal,setCal]=useState(false);
  const desk ={header,setHeader,ChatBot,setChat,Sidebar,setSidebar,Cal,setCal}

  return (
    <>
      <StudyDesk.Provider value={desk}>
         <Home/>
      </StudyDesk.Provider>
    </>
  )
}

export default App
