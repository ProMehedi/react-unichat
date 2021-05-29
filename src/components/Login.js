import React from 'react'
import { FacebookOutlined, GoogleOutlined } from '@ant-design/icons'

const Login = () => {
  return (
    <div id='login-page'>
      <div id='login-card'>
        <h2>Welcome to Unichat!</h2>
        <button className='login-button google'>
          <GoogleOutlined /> Sign In With Google
        </button>
        <button className='login-button facebook'>
          <FacebookOutlined /> Sign In With Facebook
        </button>
      </div>
    </div>
  )
}

export default Login
