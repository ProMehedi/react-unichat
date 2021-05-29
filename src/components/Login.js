import React from 'react'
import { FacebookOutlined, GoogleOutlined } from '@ant-design/icons'

import firebase from 'firebase/app'
import { auth } from '../firebase'

const Login = () => {
  return (
    <div id='login-page'>
      <div id='login-card'>
        <h2>Welcome to Unichat!</h2>
        <button
          className='login-button google'
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <GoogleOutlined /> Sign In With Google
        </button>
        <button
          className='login-button facebook'
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())
          }
        >
          <FacebookOutlined /> Sign In With Facebook
        </button>
      </div>
    </div>
  )
}

export default Login
