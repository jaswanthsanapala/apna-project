import React from 'react'
import './styl.css'


function SignIn() {
  return (
    <div className='login-position'>
    <div className='login-box'>
        <div className='login-heading'>Login</div>
        <div className='cont2'>
        <div className='input-field' >
          <input type="text" required spellcheck="false" />
          <label>Enter email</label>
         </div>
        <div className='input-field'>
          <input type="password" required spellcheck="false" /> 
          <label>Password</label>
         </div>
        </div>
        <a href='#'>Forgot Password?</a> 
        {/* <div className='btn'>Login</div>  */}
        <button className="btn">LOGIN</button>
        <a href='http://localhost:3000/Register' className='btm'>New Student? <span>Sign up</span></a>
        <div className='btm'>New Faculty? <span>Sign up</span></div>
        
    </div>
    </div>
  )
}

export default SignIn;