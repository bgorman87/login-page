import React, {useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import '../styles/Login.css'

const Login = () => {

  let {loginUser, user} = useContext(AuthContext)
  let navigate = useNavigate()

  useEffect(() => {
    if(user) {
      console.log(user)
      navigate("/")
    }
  },[user])

  return (
    <div className="page-container">
      <div className="login-container">
        <h1 className="login-title">Login Page</h1>
        <form onSubmit={loginUser} className="form">

          <div className="input-group">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" />
            <span className="msg">Valid Email</span>
          </div>

          <div className="input-group">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" />
            <span className="msg">Incorrect password</span>
          </div>

          <button type="submit" className='login-button'>Login</button>
        </form>
      </div>
      <div className='img-attribute'>
        Photo by <a href="https://unsplash.com/@pawel_czerwinski?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pawel Czerwinski</a> on <a href="https://unsplash.com/photos/BmAOtpBZpMk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </div>
    </div>
  )
}

export default Login
