import React, { useState } from 'react'
import '../App.css'
import {buttonStyle, container, headerStyle, inputStyle, spanStyle} from '../Styles/loginStyle'
import { useDispatch } from 'react-redux'
import { log, username,password } from '../Redux/dataSlice'

export default function Login() {
  const dispatch = useDispatch()
    // const[logindata ,setLogindata]= useState({
    //     mobile:parseInt(''),
    //     password:''
    // })
    const handleUsername = (e)=>{
      let userName = e.target.value
      dispatch(username(userName))
    }
    const handlePassword = (e)=>{
      let passWord = e.target.value
      dispatch(password(passWord))
    }
    const handleLogin = (e)=>{
      e.preventDefault()
      dispatch(log())
   
      
      
    }
  return (
    <div className='log'>
    <div className='row' >   
    <h1 style={headerStyle}>TAXI <span style={spanStyle}>WALA</span></h1>
    <div className='col-md-12 sm-3 lg-12 ' style={container} >
    <form onSubmit={handleLogin}>
    <div class="form-group col-md-4 sm-3 xs-3" style={inputStyle}>
      
      <input type="text" class="form-control" id="exampleInputMobile"  placeholder="Enter mobile number" onChange={handleUsername}  maxLength={10} minLength={10} required/>
      
    </div>
    <br></br>
    <div class="form-group col-md-4 sm-3 xs-3 " style={inputStyle}>
      
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={handlePassword} required/>
    </div>
   
    <button  type="submit" class="btn btn-success" style={buttonStyle} >Login</button>
  </form>
  </div>
    </div>
    </div>
  )
}
