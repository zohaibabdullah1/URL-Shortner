import React, { useEffect } from 'react';
import './login.css';
import { Outlet, useNavigate } from 'react-router-dom';

const Login = () => {
    const Navigate=useNavigate();
    const login=()=>{
        localStorage.setItem('login',true)
        Navigate('/')
    }
    useEffect(()=>{
        let login=localStorage.getItem('login');
        if(login){
            Navigate('/')
        }
    })

    return (
    <div className='login'>
        <h1>Login Page</h1>
        <form className='formLogin'>
        <input type="email" name='email' placeholder='Email'/><br/><br/>
        <input type="password" name='password' placeholder='Password'/><br/><br/>
        <button onClick={login}>Sign In</button>
        </form>
        <Outlet/>
    </div>
    )
}

export default Login;