import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import UserContext from '../context/UserContext';

const Login = () => {
    const[userName,setUserName] = useState("");
    const [password,setPassword] = useState(null);
    const {setUser} = useContext(UserContext);
    const handleSubmit = (e)=>{
        console.log(e);
        e.preventDefault();
        setUser({userName});
        console.log(userName);

    }
  return (
    <div>
        <h2>Login Page</h2>
        <input type='text' value={userName} placeholder='Enter UserName' onChange={(e)=>setUserName(e.target.value)}/>
        <input type='text' value={password} placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick = {handleSubmit}>Submit </button>
    </div>
  )
}

export default Login