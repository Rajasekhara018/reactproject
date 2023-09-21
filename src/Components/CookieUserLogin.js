import React from 'react';
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import useCaptcha from '../Hooks/useCaptcha';

function CookieUserLogin() {
    const[cookie, setCookie, removeCookie] = useCookies(['username']);
    const[userDetails, setUserDetails] = useState({
        userName:'',
        password:''
    });
    const code = useCaptcha();

    function handleuserName(e){
        setUserDetails({
            userName:e.target.value,
            password:userDetails.password
        })
    }
    function handlePassword(e){
        setUserDetails({
            userName:userDetails.userName,
            password:e.target.value
        })
    }
    function handleLogin(e){
        setCookie("userName",userDetails.userName,{path:"/", expires:new Date("2023-09-22 20:23")});
        alert("Login Success....");
    }
    function handleSignOut(e){
        removeCookie("userName")
        alert("Signed out Success fully....");
    }
    useEffect(()=>{
        if(cookie.userName == undefined) {
            alert('please login...')
            alert(code)
        }
    },[])

  return (
    <div className='container-fluid text-start col-3 '>
        <h2>User Login</h2>
        <dl>
            <dt>User Name</dt>
            <dd><input type='text' className='form-control' onChange={handleuserName} /></dd>
            <dt>Password</dt>
            <dd><input type='password' className='form-control' onChange={handlePassword} /></dd>
            <dt>Verify Code</dt>
            <dd>{code}</dd>
        </dl>
        <button className='btn btn-outline-primary form-control' onClick={handleLogin}>Login</button>
        <hr/>
        <button className='btn btn-link form-control' onClick={handleSignOut}>Sign out</button>
        <h3>Home</h3>
        Hello ! {cookie.userName}
    </div>
  )
}

export default CookieUserLogin
