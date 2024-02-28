import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContextStatus } from '../AuthContext'

function DashBoard() {
    const {authorizsed, setAuthorised}= useContext(AuthContextStatus)
    const navigate = useNavigate()
    const handlelogout = ()=>{
       setAuthorised(true)
       navigate('/')
    }
  return (
   <> 
   <div>DashBoard</div>
   <button className='btn btn-primary' onClick={handlelogout}>Logout</button>
   </>
  )
}

export default DashBoard