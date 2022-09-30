import { render } from '@testing-library/react';
import React, { useState } from 'react'
import {Route} from 'react-router-dom'
import './Login.css';
import Projects from './Projects';
import {useNavigate} from 'react-router-dom'

const Login = () => {

  let [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  })

  const navigate = useNavigate();

  const itemChange = (event) => {

    const { name, value } = event.target

    setLoginDetails((preValue) => {
      return {
        ...preValue,
        [name]: value,
      }
    })
  }

  const submitValues = (event) => {
    event.preventDefault();
    console.log("username : " + loginDetails.username);
    console.log("password : " + loginDetails.password);
    if(loginDetails.username === 'Rutvik' && loginDetails.password === '123'){
        navigate("/projects/admin");
    }else if(loginDetails.username === 'Sampada' && loginDetails.password === '123'){
      navigate("/projects/user");
    }else{
        alert("Invalid usernanme or password")
    }
  }

  return (
    <>
      <div className='background-effect'>
          <div className="login-page">
              <div className="form" onSubmit={submitValues}>
              <h1>Login</h1>
              <form className="login-form">
                  <input type="text" placeholder="username" value={loginDetails.username} onChange={itemChange} name='username' />
                  <input type="password" placeholder="password" value={loginDetails.password} onChange={itemChange} name='password' />
                  <button type='submit'>login</button>
                  {/* <NavLink exact activeClassName="link" to="/projects">login</NavLink> */}
              </form>
              </div>
          </div>
      </div>
    </>
  );
}

export default Login;