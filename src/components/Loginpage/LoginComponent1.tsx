import react from 'react'
import { Box, Button, TextField } from '@mui/material';

import React, { useState, useReducer, Fragment } from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useDispatch } from 'react-redux/es/exports';
import { Session } from 'inspector';
import { useNavigate, Navigate } from 'react-router-dom';
// import {Link, Navigate, useNavigate} from 'react-router-dom'

function LoginComponent1() {

  const storevalue = useSelector((state: any) => state.LoginReducer)

  const dispatch = useDispatch();

  const Navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  console.log({ email, password });

  const handleEmail = (event: any) => {
    setEmail(event.target.value)
  }
  const handlePassword = (event: any) => {
    setPassword(event.target.value)
  }

  const postHandeler = () => {
    console.log({ email, password });
    axios.post('https://reqres.in/api/login', { email: email, password: password })
      .then((result) => {
        console.log(result.data)
        sessionStorage.setItem('token', result.data.token)
        dispatch({type: "LOGIN", logedIn: true})
        Navigate ('/userinfo')
      })
      .catch((error) => {
        console.log(error)
        alert('Error')
      })
  }

  const incrementAction = () => {
    dispatch({type: 'Increment'})
  }

  return (
    <>
    {console.log(storevalue)}
      <h1>Login component</h1>
      {/* <h1>Store state value showing: </h1>
      <Button variant="contained" onClick={incrementAction}>increment</Button> */}

      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField type="email" value={email} onChange={handleEmail} id="outlined-basic" name="Email" label="Email" variant="outlined" />
        <TextField type="password" value={password} onChange={handlePassword} id="outlined-basic" name="Password" label="Password" variant="outlined" />
        <Button variant="contained" onClick={postHandeler}>Submit</Button>
      </Box>
    </>
  )
}

export default LoginComponent1;

