import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContextStatus } from '../AuthContext';

function Login() {

    const[userDetails,setUserDetails]=useState({
        email:"",
        password:""
    })
    const navigate= useNavigate()
    const {authorizsed, setAuthorised} = useContext(AuthContextStatus)
console.log(userDetails);
const handleSubmit=(e)=>{
    e.preventDefault()
    localStorage.setItem("email",userDetails.email)
    localStorage.setItem("pswd",userDetails.password)
    setAuthorised(false)
    navigate('/dashboard')
}
  return (
    <div>
        <form className='border p-3 shadow' onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setUserDetails({...userDetails,email:e.target.value})}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Login