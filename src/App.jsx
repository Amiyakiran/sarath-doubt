import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import DashBoard from './components/DashBoard'
import { AuthContextStatus } from './AuthContext'

function App() {
 const {authorizsed} = useContext(AuthContextStatus)

  return (
    <>
      <Routes>
        <Route path='/' element={authorizsed?<Login/>:<DashBoard/>}/>
        <Route path='/dashBoard' element={<DashBoard/>} />
      </Routes>
    </>
  )
}

export default App
