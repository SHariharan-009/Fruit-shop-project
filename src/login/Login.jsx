import React from 'react'
import "./Login.css"
import { useState } from 'react'


const Login = () => {
   const[email,setemail]=useState("")
   const[password,setpassword]=useState("")
   const[erroremail,seterroremail]=useState("")
   const[errorpassword,seterrorpassword]=useState("")

   const submitfunc=(e)=>{
    console.log("login successfully",email,password)

    if(!email){
        seterroremail("*** email/username required  ***");
    }
    if(!password){
        seterrorpassword("*** password required ***");
    }
    }
  return (
    <div className='login'>
        <label className='heading'>User login</label><br/>
        <div className="cont">
        <label>User name :</label><input type='text' placeholder='    Username' value={email} required 
        onChange={(e)=>setemail(e.target.value)}></input><br/>
        <p className='err'>{erroremail}</p><br/>
        <label>Password :</label><input type='password' placeholder='  password' value={password} required 
        onChange={(e)=>setpassword(e.target.value)}></input><br/>
        <p className='err'>{errorpassword}</p><br/>
        </div>
        <button type='submit' onClick={submitfunc}>Submit</button>
        <button type='cancel'>cancel</button>
   </div>
  )
}
export default Login